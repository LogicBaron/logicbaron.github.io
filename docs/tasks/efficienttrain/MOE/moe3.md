---
title: Efficient MOE
sidebar_position: 4
tags: [MOE, Transformer]
---
import moe3_result1 from './assets/moe3_result1.png';
import moe3_result2 from './assets/moe3_result2.png';
import moe3_finetuning from './assets/moe3_finetuning.png';

# Efficient Large Scale Language Modeling with Mixtures of Experts

Large Model 에서 MOE 의 적용에 따른 pros / cons 를 잘 분석한 논문. 주요 논점이 매우 중요한데, 주요 논점만 파악하면 되는 논문이라고 생각해서 간단하게 요약하려 함.

이전과 이후의 다양한 MOE 관련 논문들을 읽고 인사이트를 얻고 생각하는데 많은 도움을 주는 논문이다.

논문에서 전반적으로 sparse model 과 dense model 의 동일성은 compute-equivalent로 정의된다. 즉, inference 시의 연산량이 같으면 counterpart로써 동작한다.

## 실험 설계

- GPT-3
- top-2 expert / 512 experts
- capacity factor 를 이용한 gating regularization..
- expert model 에서 사용하는 lr 을 $\frac{1}{/sqrt{E}}$ 만큼 줄임.
  - [SwitchFormer](/docs/tasks/efficienttrain/MOE/switchformer.md) 에서는 학습 불안정을 해결하기 위해 expert weight 를 재설정했으나, 필요없다고 주장.
  - expert 가 처리하는 배치 사이즈가 $E$-times 작기 때문에, lr 도 같이 줄여주니까 해결되었다고 함.
- 300B 토큰 학습. 컨텍스트 크기는 20248 tokens.

## 학습 및 평가 데이터.

GPT-3 논문 벤치마크에서 사용한 데이터셑 중 선별하여 사용.

GPT-3 모델의 성능이 task에 따라 크게 달라지므로, 저자들은 scaling 의 효과가 일관되거나 또는, zero-shot 과 few-shot setting 에서 뚜렷한 성능 차이가 보이는 태스크에 집중한다. 

- few-shot task
  - GPT-3 논문에서 few-shot setting 이 뚜렷한 성능 상승을 보여주는 태스크.
  - WinoGrande, StoryCloze, OpenBookQA
- zero-shot task
  - scaling 의 효과가 뚜렷한 task.
  - ReCoRD, HeleaSwag, PIQA.

## 평가 방법

랜덤 few-shot sample 을 다르게해서 25번 랜덤 샘플링. 두 가지 방법을 통해서 평가함.

- Priming
  - 기본적으로 GPT-3 템플릿을 사용함.
  - Few-shot learning 의 경우 예시와 문제를 구분하기 위해 single newline 을 사용함.
  - WinoGrande, OpenBookQA, ReCORD
- Fine-tuning
  - **spare model 과 dense model 의 fine-tuning 성능을 비교함.**
  - 하나의 linear layer 를 추가하고, 전체 parameter 를 fine-tuning. (fully supervised learning).
  - 3개의 데이터셑에 대해서 진행 : BoolQ, MNLI, SST-2.

마지막으로 MOE speedup factor 를 제안해서, MOE 로 인한 속도 향상을 수치화함. %c(t)$ 함수는, 모델이 $t$ 성능을 내기 위해 필요한 FLOPS 를 의미한다. 즉, $c(t)$ 가 작을수록 효율적인 모델임을 의미함.

speed of factor 는 $c_{dense}(t) / c_{moe}(t)$ 로 정의됨. 즉 똑같은 성능을 달성하는데 dense 모델이 moe 모델에 비해 몇 배 많은 ZFLOPS 를 요구하는지를 의미한다.

## 실험 결과

### Perplexity

MOE 모델은 거의 모든 데이터셑에서, 편차는 있었지만 dense model 에 비해 발전된 성능을 보였다. 


<div style={{textAlign: 'Center'}}>
    <img src={moe3_result1} style={{border: 'solid', width: 400}} />
</div>

위 이미지에서는 dense training ZFLOPS 와 speedup factor 를 plot 한다. moe 에서 $c(t)$ 는 dense training ZFLOPS / speed up factor 가 되는데 특히 in-domin LM 에서 MOE 의 효율이 7-15배까지도 증가하는 것을 확인할 수 있다. out-of-domain LM 과 zero-shot priming 에서도 2-4배 정도까지 발전된 성능을 보여준다. 


<div style={{textAlign: 'Center'}}>
    <img src={moe3_result2} style={{border: 'solid', width: 700}} />
</div>

2번 이미지에서는 모델이 클수록 일반적으로 많은 ZFLOPS 를 요구하지만 sparse model 이 같은 ZFLOPS 에서 더 좋은 성능을 꾸준히 보여줌을 확인할 수 있다.

3번 이미지는 데이터셑에 따라 speed of factor 를 비교합니다. speed up factor 가 클수록 sparse model 의 효과가 강력한 데이터셑입니다.

### Downstream task Evaluation

- zero-shot learning
  - MOE 모델이 대부분의 과제, 모델 크기에서 dense model 에 비해 성능이 좋게 측정된다.
  - 그러나 모델의 크기가 커질수록 효과가 준다.
  - MOE 모델의 구조의 효율성을 증명함.
- few-shot learning
  - dense model 은 모델의 크기가 커질수록 zero-shot 에 비해 few-shot learning 의 gain 이 커짐.
  - sparse model의 few-shot learning gain은 dense model에 비해 적다.
- supervised finetuning
  - dense model 에서는 전반적으로 모든 실험에서 성능 향상을 보여줌.
  - 반면, sparse model 에서는 fine-tuning의 효과가 적다. 일부 데이터에서는 성능이 향상 되었으나 일부 데이터에서는 오히려 성능이 감소하기까지 함.
  - 사실 fine-tuning 에서 dense counterpart 설계는 불완전한 부분이 있는데, sparse model은 사실상 훨씬 큰 parameter를 가지고 있는 모델로써 동작함. dense counterpart의 설계를 실제 parameter 수로 하는게 오히려 맞았을 것 같음.
  - 저자들은 MOE 모델에 최적화된 fine-tuning 기법이 있을 것같다고 이야기하지만 future work로 남겨둔다.

fine-tuning 의 결과가 개인적으로 충격적이었어서, 실제 결과를 첨부한다.

<div style={{textAlign: 'Center'}}>
    <img src={moe3_finetuning} style={{border: 'solid', width: 300}} />
</div>


예를 들어서 PI 데이터셑을 보면 MOE 모델에서는 오히려 성능이 감소하는 것을 확인할 수 있다. 그런데 또 fine-tuning 성능이 크게 증가하는 데이터셑도 있다. 이 경향성은 dense 와 sparse에서 비슷하다. 

BoolQ, SST-2, MNLI 와 같이 비교적 직관적이고 단순한 쉬운 태스크에서는 supervised fine-tuning의 효과가 크다. 반면 HellaSwag, PIQA 그리고 Winogrande같은 전문 지식 및 추론 능력이 필요한 데이터셑에서는 dense 와 sparse 둘다 fully supervised learning 효과가 미미하다. (sparse에서는 떨어지기도 한다.)

# Ref

- 1. [Efficient Large Scale Language Modeling with Mixtures of Experts](https://arxiv.org/pdf/2112.10684)