---
id: zero_infinity
sidebar_position: 2
---
import zeroinf_background from './asset/zeroinf_background.png';
import zeroinf from './asset/zeroinf.png';
import zeroinf_rst1 from './asset/zeroinf_rst1.png';
import zeroinf_rst2 from './asset/zeroinf_rst2.png';

# ZERO INFINITY

ZERO 가 커다란 모델을 학습하기 위해 model state 그리고 residual state partitioning 에 집중했다면,

ZERO-Infinity 는 **model state, residual state 의 효율적인 offload** 에 집중합니다.

- **학습하는 과정에서 parameter 와 state 등을 어떻게 NVME, CPU 로 적절하게 이동시키면서 bottleneck 을 발생시키지 않을수있을까?** 

에 집중합니다.

## Background

ZERO-infinity 발표 이전 deepspeed 에서 발표한 두 개의 주요 논문을 살펴보면,

<div style={{textAlign: 'center'}}>
  <img src={zeroinf_background} style={{width: 600}} />
</div>

- **3d-parallelism** `2020`
  - MP+PP+DP 로써 multi-GPU 에서 큰 사이즈의 모델을 parallel process 를 통해 학습시키는 방법을 제안합니다.

- **ZERO-offload** `2021`
  -  offload 방식을 통해 single-GPU 에서 big model 을 학습시키는 방법을 제안합니다.

deepspeed 에서 ZERO 와 관련된 논문은 꾸준히s big model state, big residual state 를 효율적으로 multi-node GPU, CPU, NVME 메모리에 분배하는 방법에 대해서 연구했고,

ZERO-infinity 에 와서는 GPU, CPU 그리고 NVME 간의 **communication 효율성을 개선**하는데 집중합니다.

## ZERO-infinity

<div style={{textAlign: 'center'}}>
  <img src={zeroinf} style={{width: 500}} />
</div>

ZERO , 그리고 3d-parallelism 에서 모델을 분산시켜서 얻을 수 있는 효용은 거의 얻었다는 결론을 얻었는지 논문의 내용이 조금 난해합니다.

크게 연산 방식 개선, partitioning 개선, offload 방식 개선 그리고 communication engine 개선으로 나뉘어집니다.

### Infinite offload engine

- model state partitioning 을 GPU 뿐만 아니라 CPU 와 NVME 에도 가능하도록 지원
- activation partitioning 역시 마찬가지로 CPU, NVME 에도 가능하도록 지원
- 후술할 overlap-centric design, badnwidth-centric partitioning 과 함께 사용되어서 NVME-CPU bottleneck이 해결되어 기존 방식에 비해 고성능으로 CPU, NVME port 활용이 가능하다.

### Memory-Centric tilling

- large operation 을 sequence of smaller operation 으로 나누어서 처리
- memory alloc/free 과정이 small operation(tile) 단위로 이루어져서 working memory 부담 크게 줄어듬.


### Bandwidth-Centric partitioning

- 기존 ZERO-family 의 parameter partitioning 방식은 broadcast 방식을 사용.
- all-gather 방식을 제안.
- GPU 만 사용하면 broadcast 방식과 all-gather 방식의 성능이 똑같다.
- CPU/NVME 를 사용하면 bandwidth 성능차이가 발생. 
- broadcast 방식은 현재 데이터를 뿌려주는 GPU 가 CPU 와 통신 후 뿌려주는 방식으로 다른 GPU-CPU 연결은 idle.
- all-gather 방식은 모든 GPU-CPU 연결이 활성화된 후, 한 GPU 가 다른 GPU 로 부터 데이터를 받아옴.
- 이러한 방식으로 bandwidth 증가.

### Overlap-Centric Design

- ZERO-infinity가 multi-node 환경에서는 좋은 효용을 보여주지만 bandwidth 는 single GPU, single machine 에서 여전히 문제임.
- 또 all-gather 연산은 small batch size per GPU 에서 비효율적이다.
- 그래서 batch size per GPU 를 키워야하는데 그럼 effective batch size 가 너무 커지는 문제가 반대로 생김.
- 또한, NVME-CPU bandwidth 로 인한 bottleneck 도 문제가됨.
- GPU-GPU +  GPU computation + GPU-CPU + CPU-NVME overlap 가능하도록.
- small GPU 에서는 작은 batch size, large GPU 에서는 큰 batch size 가 가능하다.

## Conclusion

<div style={{textAlign: 'center'}}>
  <img src={zeroinf_rst1} style={{width: 400}} />
</div>

<div style={{textAlign: 'center'}}>
  <img src={zeroinf_rst2} style={{width: 800}} />
</div>

다만, ZERO-infinity 는 CPU-offload 를 활용할 정도로 large model 이 아니라면 굳이 적용할 필요 없습니다.