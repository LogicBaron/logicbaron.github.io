---
id: paged attention
sidebar_position: 3
---
import motivation from './asset/pagedattention_motivation.png';
import multiple_request from './asset/pagedattention_multiplerequest.png';
import parallel_sampling from './asset/pagedattetion_parallelsampling.png';
import beam_search from './asset/pagedattention_beamsearch.png';


# Paged Attention
## Efficient Memory Management for Large Language Model Serving with Paged Attention

요즘 이래저래 시간이 부족해서 논문 내용을 상세하게 정리하기 어렵다. 정말 중요한 논문이 아니면 깊게 읽지 못하기도 하고. 아쉽지만 타협해야할것 같다. 인지한 핵심 내용 위주로만 정리하려 한다.

글을 쓰는 시점에서는 꽤 오래되었기도하고 대중화된 solution 이며, 대부분 큰 골자의 내용은 인지하고 있을 것 같다.

Paged Attention 은 vLLM 라이브러리의 핵심 기술이다. vLLM 은 dynamic batching 과 같은 다양한 솔루션을 제공하지만, Paged Attention 을 이용한 KV cache 효율화가 가장 중요하다.

## Motivation

저자들은 LLM inference, 그리고 이전 효율화 솔루션의 문제점을 아래와 같이 지적한다.

1. 현대 LLM 이 차용하는 autoregressive 구조, 즉 sequential generation 과정에서는 memory 한계에 먼저 부딪히게 된다. 이로 인해 GPU utilization 이 떨어지게 된다. 
  1-1. 예를 들어서, 메모리 한계는 LLM 서빙 시스템에서 배치 사이즈를 결정하는 가장 중요한 요인 중 하나이다.
2. 현대 tensor 라이브러리들은 tensor 를 연속된 메모리 공간 (contiguous memory space) 에 저장한다. 
3. 일반적인 LLM 서빙 시스템은 이로인해 KV cache 역시 연속된 메모리 공간에 할당한다.
4. 그런데 KV cache 는 디코딩 방식, 다양한 prompt 활용에 따라서 계속 달라지고 이로 인해 contigous memory 를 미리 할당하기 어렵다. chunk 방식을 사용하는 솔루션이 유명하나 이 방식은 KV cache 의 크기가 커질떄마다 chunk 해제 -> chunk 재할당 -> KV cache 올리기의 과정을 거쳐야하므로 속도를 저해하는 큰 요인이 된다.


## Solution

Paged Attention 은 이 때문에 다음과 같은 솔루션을 제안한다.

1. KV cache 를 쪼갠다. 토큰 단위로 KV cache 를 메모리에 할당하고 이를 불러와서 사용한다.
2. 정확히는 메모리 블록을 사용한다. 메모리 블록은 N 개의 토큰 KV cache 를 저장한다. 블록이 다 차면 새로운 블록을 할당한다.
3. 각 블록은 reference count 를 가진다. 해당 블록의 참조 수를 저장한다.
4. reference count 가 0 이된 KV block 은 메모리 해제한다.

<div style={{textAlign: 'Center'}}>
    <img src={motivation} style={{border: 'solid', width: 600}} />
</div>

KV cache 방식으로 인해 chunk 내에서 불필요한 메모리 활용이 줄어든다. 토큰 단위로 메모리를 최대한 채우므로 inference 과정에서 빈 block 이 많아질 염려가 적다. 또한, 보다 작은 단위로 block 을 나누어서 사용함으로써 inference 과정에서 메모리의 일부만 로드해서 사용해야하는 fragmentation 발생도 적다. 

위 그림은 배치 사이즈를 늘려감에 따라 paged attention 이 얼마나 효율적으로 메모리를 사용하는지 보여준다.

* 참고로 논문에서는 different head, different layer 의 key 와 value vector 를 전부 따로 저장한다고 설명한다.

## Decoding

vllm 은 서빙 프레임워크로 실제 inference 시 동작이 중요하다.

#### 1. multiple requests

<div style={{textAlign: 'Center'}}>
    <img src={multiple_request} style={{border: 'solid', width: 600}} />
</div>

### 2. Parallel Sampling

**prompt 는 multiple generation 에서 최대한 동시에 공유**한다. 그러나 Paged Attention 설계상 채울 수 있는 블록을 채우는데, 이로 인해 prompt 의 마지막 block 이 generated token 을 사용할 수 있다. 그림 참조.

그러므로 prompt 의 마지막 토큰으로 KV block 이 꽉 차지 않았을 경우, parallel genration 마다 블록을 copy-on-write 를 진행한다. 

**generation token 들은 각각이 KV block 을 독립적으로 사용**한다.

<div style={{textAlign: 'Center'}}>
    <img src={parallel_sampling} style={{border: 'solid', width: 600}} />
</div>

### 3. Beam Search

최근 프로젝트에서 vllm beam search 를 고려해야했다. vllm 에서도 꽤 오랫동안 beam search 는 열어주지 않았는데 이론 상의 구현보다 엔지니어링이 상당히 어려운 것 같았다.

<div style={{textAlign: 'Center'}}>
    <img src={beam_search} style={{border: 'solid', width: 800}} />
</div>

beam search 는 기본적으로 분기가 나뉘어지는 형태를 가지게 되므로, reference count 가 적극적으로 활용된다. 공유할 수 있는 이전 block 은 최대한 공유하면서 KV cache 를 사용하다 reference count 가 0 이 되는 블록을 해제한다. 즉 beam 이 탈락하면 KV block 메모리도 해제된다.

## Conclusion

개인적 견해로, 모든 서빙 시스템이 그렇지만 엔지니어링의 예술 같다. 이론을 효율적으로 구현하는 것. 

또 읽으면서 약간 더 커널 레벨.. 하드웨어 레벨의 공부를 조금씩이라도 해둔 것들이 도움이 되는 것 같다.

## Ref
1. https://arxiv.org/pdf/2309.06180