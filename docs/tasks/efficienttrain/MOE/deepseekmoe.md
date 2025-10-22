---
id: deepseekmoe
sidebar_position: 6
tags: [MOE, Transformer]
---
import deepseek_concept from './assets/deepseek_concept.png';
import deepseek_upperbound from './assets/deepseek_upperbound.png';
import deepseek_expertefficiency from './assets/deepseek_expertefficiency.png';

# DeepSeek MOE

Deepseek MOE 논문의 이전 MOE 논문들은 초기 GShard, SwitchTransformer 에서의 논의 이후 유의미한 구조 개선은 이루어지지 않았다. 그러나 transformer 구조, 특히 decoder-only LLM에서 MOE 가 가지는 의미와 역할에 대한 연구가 꾸준히 진행되어왔다. Deepseek-MOE 논문은 그러한 연구 결과들을 바탕으로 LLM에 적용된 MOE의 의미에 대한 해석을 바탕으로 유의미한 MOE 모듈의 구조 개선을 이루어냈다고 생각한다.

Deepseek MOE 논문은 총 세 가지 kick이 존재한다. MOE 모듈의 구조 관점에서 2개, 그리고 효율적인 구현 관점에서 1가지 kick이 있다.

## Deepseek MOE 구조

Deepseek MOE 구조에 대해 두 가지 개선안을 제안한다. 첫 번쨰는 Fine-Grained Expert Segmentation, 두 번째는 Shared Expert Isolation 이다.

<div style={{textAlign: 'Center'}}>
    <img src={deepseek_concept} style={{border: 'solid', width: 600}} />
</div>

### Fine-Grained Expert Segmentation

기존의 LLM MOE 모듈 E개의 Experts FFN Layer를 사용하고 그 중 K개를 선택하는 방식으로 동작한다. [Mixtral](/docs/practice/efficienttrain/MOE/mistralmoe.md)에서는 각 expert의 역할을 심층적으로 분석하여 각 expert는 semantic 분석보다는 syntatic 분석에 강하다는 사실을 밝혀낸다. 또한, input/output 에 가까운 layer일수록 분석하는 가까운 token들간의 상호작용에 집중한다고 이야기한다.

Deepseek 저자들은 각 expert 의 역할이 분명히 나누어지고 있다는 사실에 집중했다. 훨씬 다양한 역할을 수행할 수 있도록 expert 를 많이 늘리면 좋지만 그러기엔 LLM 모델의 잠재 parameter 수의 한계가 명확했다. 

Deepseek 저자들은 역할이 충분히 세분화된다면 각 expert 의 크기가 크지 않아도 되며, 어려운 작업은 다양한 expert 들이 함께 활성화되어 처리 가능하다고 생각했다. 그래서 기존 expert-FFN 하나를 m 개로 나누었다. 각각의 fine-grained expert 의 크기는 1/m배가 되며, 전체 expert 개수는 m배가 된다. 

Fine-grained expert 에서는 선택하는 Expert 의 개수 K도 m배가 되어 총 mK개 expert를 선택해야 한다.

예를 들어, 16개 expert 중 2개를 선택한다면 120개의 가능한 expert 조합이 존재하지만 m=4로 두고 fine-grained expert MOE를 사용하면 총 16\*4=64개 expert 중 2\*4=8개 expert를 선택해야 한다. 가능한 조합의 수는 4,426,165,368개이다. active parameter 수는 같지만 expert 의 조합은 훨씬 방대해진다. 각각의 전문가의 성능은 보다 빈약할 수 있지만 조합의 수가 훨씬 방대하다.

이 설계의 철학은 neural network의 설계 철학과도 비슷하다. 단순한 일을 처리하는 모듈을 조합해 무한한 경우의 수를 처리한다.


### Shared Expert Isolation

기존 MOE, 그리고 Fine-grained expert 적용했을 때의 문제점 중 하나는 전반적인 문맥을 전부 파악할 수 있는 전문가가 없다는 점이다. 아무리 전문가가 본인의 역할을 잘 수행한다 해도, 전체적인 토큰을 보지 않고는 지엽적인 해석밖에 이루어질 수 없다. 물론 전체 모델 과점에서는 attention layer 가 전체 문맥을 파악하고 조율하는 역할을 수행할 수 있지만 attention layer와 FFN layer의 역할은 엄연히 다른만큼, 전체적인 문맥 파악을 하는 전문가도 필요하다.

사견이지만, 전반적인 문맥 파악의 필요성은 모델 학습 과정에서도 관찰된다. 초창기부터 MOE 모델을 학습시키는 데 있어서 load balancing 이 주요한 쟁점이었는데 이는 학습 과정에서 일부 expert 로 토큰이 집중되는 현상 때문이었다. (routing collapse.) 이는 모델 학습 과정, 특히 초반에 전체적인 문맥을 파악하는 expert 가 좋은 성능을 보여주고 이로 인해 routing 알고리즘이 지속적으로 해당 expert 로 토큰을 집중시키는 현상이다. 이 현상이 역설적으로 전체적인 토큰을 처리하는 전문가의 중요성을 시사한다고 생각한다.

후술하겠지만 Deepseek 는 매우 효율적이고 뛰어난 load balancing 기법을 적용했다. 그리고 그 와 별개로 전반적인 token을 처리하는 expert를 따로 지정해서 사용했다. 해당 expert들은 routing 모듈과 별개로 언제나 모든 token을 input으로 받는다. 

논문에서는 약 1~2개의 Shared Expert를 사용하며 ablation study를 수행했다.

### Load Balance Consideration

두 가지 방식의 load-balancing을 구현함. 

- Expert-level balance loss
  - loss 함수에 expert 에 할당된 토큰의 수 * token-to-expert affinity 으로 설계.
  - token-to-expert affinity 란 토큰이 해당 expert 를 선택할 확률의 합으로 설계.
  - token-top-expert affinity 는 정확히는 $Softmax(u_t^{lT} e_i^{l})$ 로 표현됨.
    - $u_t^{lT}$ 는 routing 함수 input, $e_i^{l}$ 는 라우팅 모듈이 가지고 있는 centroid of each expert.
  - 일종의 2-nd order polynomial 이므로 균등 분배로 학습되게 된다.
- Device-level balance loss
  - loss 함수에 device에 할당된 토큰의 수 * token-to-expert affinity 으로 설계.
  - 마찬가지로, 일종의 2-nd order polynomial 이므로 균등 분배로 학습되게 된다.

## Result

### DeepseekMOE aligns closely with the upper bound of MOE Models

<div style={{textAlign: 'Center'}}>
    <img src={deepseek_upperbound} style={{border: 'solid', width: 600}} />
</div>

DeepseekMOE 논문에서는 기존 acitvate parameter 기준으로 dense model과 비교하던 방식에서 벗어나 실제 parameter 수를 기준으로 dense 모델과 비교한다. 그리고 이렇게 비교한 실제 dense 모델과 성능 차이가 거의 없어졌음을 이야기한다. 아주 큰 시사점인데, deepseekMOE 는 기존 dense model 이 가지고 있던 거의 비효율적인 부분만 제거한 구조를 완성했다는 의미를 가진다.

### Shared Experts are Irreplacable by Routed Experts

Shared expert 하나를 없애고 routed experts 를 추가한 실험에서 유의미한 pie loss 증가 (1.808 -> 2.414) 를 확인함.

### Expert 효율성.

DeepseekMOE experts 는 훨씬 정확하고 효율적으로 정보를 처리한다. 

<div style={{textAlign: 'Center'}}>
    <img src={deepseek_expertefficiency} style={{border: 'solid', width: 600}} />
</div>

DeepseekMOE 모델에서 expert 수를 변경해가며 GShard 모델과 비교함. 

# Ref

1. [DeepseekMOE](https://arxiv.org/pdf/2401.06066)
2. [Mixtral of Experts](https://arxiv.org/pdf/2401.04088)