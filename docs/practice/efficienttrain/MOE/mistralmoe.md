---
id: mistralmoe
sidebar_position: 5
tags: [MOE, Transformer]
---
import mixtral_result from './assets/mixtral_result.png';
import mixtral_longrange from './assets/mixtral_longrange.png';
import mixtral_consecutive from './assets/mixtral_consecutive.png';
import mixtral_routingexample from './assets/mixtral_routingexample.png';
import mixtral_routing from './assets/mixtral_routing.png';

# Mixtral of Experts

mistral 에서 제안하는 MOE LLM. decoder-only transformer architecture에 MOE를 사용했다. 각 layer에서 각 토큰은 **2개의 expert로 라우팅 (Top-2 Routing)**된다. 결과적으로 mixtral 8x7B 모델에서 각 토큰은 47B개의 parameter에 접근가능하지만 실제로 활성화되는 parameter는 13B 수준이 된다. 

이전 글에서 라우팅 방식에 대해서 많이 다루었고, mixtral 에서 routing 방식에서 유의미한 contribution을 제시하지 않았기에 라우팅 알고리즘에 대한 설명은 생략한다.

experts 를 사용하지 않은 dense model인 mistral 7B 도 학습시켜 비교함. mixtral 모델은 같은 구조에 8개의 expert를 사용하므로 mixtral 8x7B라 명명한다. 

baseline 으로 다양한 크기의 Llama 모델을 사용.

결과도 재미있는데, 분석이 더 재미있다.

## Results

Mistral 7B, Mixtral 8x7B 모델을 Llama baseline 모델과 비교함.

<div style={{textAlign: 'Center'}}>
    <img src={mixtral_result} style={{border: 'solid', width: 600}} />
</div>

mixtral 8x7B 모델의 성능은 대부분의 task에서 llama 2 70B 모델과 성능이 비슷하거나, 더 좋은 성능을 보여줄 때도 있음. 저자들은 active parameter와 추론 능력이 필요한 어려운 과제에서의 성능도 비교한다. mixtral 모델이 active parameter 수에 비해 일반적으로 좋은 성능을 보여준다. 다만 moe 모델의 잠재 parameter 수는 일반적으로 훨씬 많으므로 정당한 비교라고 보기 어렵다는 내용을 이전 글에서도 꾸준히 저자들도 이 점에 대해 언급한다. 

```
Note that this analysis focses on the active parameter count, which is directly proportional to the inference compute cost, but does not consider the memory cost and hardward utilization.
```

최근(2025.04) 의 LLM 논문들은 MOE를 당연하게 적용하므로 모델의 크기를 적을때 active parameter 만을 사용하기도 한다. 

### Long range performance

Mixtral 이 long context 에 얼마나 잘 대응하는지 확인하기 위해서 저자들은 **passkey retrieval** 태스크를 확인함. passkey retrieval task 는 엄청 긴 문서 안에서 passkey 를 찾아내는 과제임. mixtral 은 sequence 길이와 상관없이 100% retrieval 정확도를 보여줬음. 또한, proof-pile dataset 에서 context 길이가 늘어남에 따라 perplexity 가 감소하는 결과도 확인되었다. proof-pile dataset 은 수학적 텍스트와 코드로 구성된 고품질 데이터셑으로 주로 수학적 추론 및 자동화된 증명 작업을 위한 언어모델을 훈련/평가하는데 사용된다. 

<div style={{textAlign: 'Center'}}>
    <img src={mixtral_longrange} style={{border: 'solid', width: 600}} />
</div>

대부분의 LLM은 훈련 문맥 길이를 넘어서면 성능이 저하되지만, mixtral은 두 가지 실험에서 긴 문맥에 강한 대응 능력을 보여줌. 이는 MOE 의 효율적인 구조 - 토큰 당 실제로는 13B active parameter 만 사용 - 모델이 긴 입력 시퀀스 내에서 정보를 효과적으로 추출하고 학습했음을 의미한다. 다만, perplexity 감소가 반드시 문서 요약이나 멀티턴 대화 같은 실제 성능과 직결되지는 않는다.

### Instruction Fine-tuning

저자들은 supervised fine-tuning 을 이용해 Mixtral - Instruct 를 학습시켰고, best open-weights model 을 달성함. (2023. 12)


## Routing Analysis

해당 논문에서 재미있는 부분이다. 아래 그림은 task 별로 토큰이 각 expert로 routing된 비율을 나타낸 그림이다. 예를 들어서, layer0 에서 빨간색(arxiv) 에서는 거의 균등하게 routing 이 된 반면 노란색(DM Mathematics) 에서는 조금 더 불균등하게 routing 된 것을 확인할 수 있다. 

<div style={{textAlign: 'Center'}}>
    <img src={mixtral_routing} style={{border: 'solid', width: 600}} />
</div>

저자들은, DM Mathematics 를 제외하고는 task에 따른 라우팅의 큰 차이를 발견하지 못했다고 이야기 합니다. DM Mathematics 가 약간 다른 경향성을 보여주는데 저자들은 이를 1. 합성 데이터의 한계, 2. 자연어 커버리지가 적은 데이터임을 이유로 듭니다. 

또한 데이터의 특성에 따른 이러한 분포의 차이는 특히 hidden state 가 input / output sequence 와 매우 밀접한 첫 번째와 마지막 레이어에서 두드러진다. 

이 실험 결과는 라우팅의 semantic behavior 보다 syntatic behavior 에 강하다는 사실을 보여준다. 같은 도메인에서 비슷한 구문적 역할을 하는 토큰은 당연하고 일부 다른 도메인(언어) 에서도 비슷한 역할을 하는 토큰이 같은 expert 로 라우팅 되는 것을 확인했다고 한다. 예를 들어, 아래 그림에서 영어 문장에서 'Question' 이라는 단어와 파이썬에서 'self' 라는 단어가 같은 expert 로 라우팅된다.

<div style={{textAlign: 'Center'}}>
    <img src={mixtral_routingexample} style={{border: 'solid', width: 600}} />
</div>

또한, 저자들은 연속된 토큰이 같은 expert 로 라우팅될 확률이 higher layer에서 유의미하게 높은 것을 확인했다. 

<div style={{textAlign: 'Center'}}>
    <img src={mixtral_consecutive} style={{border: 'solid', width: 600}} />
</div>

either choice 는 latter token 이 former token 과 2개의 expert 가 전부 일치한 것을 의미한다. first 는 latter token 의 top-2 expert 가 former token 의 top-1 expert 만 포함하는 것을 의미한다. 근데 참고로 난 사실 유의미한지 모르겠다.

# Ref

1. [Mixtral of Experts](https://arxiv.org/pdf/2401.04088)