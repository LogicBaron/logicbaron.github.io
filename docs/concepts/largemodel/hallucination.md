---
id: hallucination
sidebar_position: 4
---

# Hallucination

## Why Language Models Hallucinate

Why Language Models Hallucinate 라는 논문을 중심으로 할루시네이션에 대해 이야기하는 글을 써보려 한다. 실제로 서비스에 사용하기 위한 언어 모델 개발에서 hallucination 은 매우 민감한 문제다. hallucination 이 어려운 이유는, 어디부터 어디까지를 hallucination 이라고 정의할 수 있는지도 어렵기 때문이다. "\<딸기 우유> 의 색깔은?" 이라는 질문에 "빨간색" 이라고 대답한다면 그것은 hallucination 인가?

언어 모델을 다루는 어떤 문제에서든 마찬가지겠지만 hallucination 역시 애매함의 영역을 가지고 있다. 애매함의 영역을 다루는 가장 좋은 도구는 통계학이라고 생각하는데 해당 논문은 통계학을 활용해서 hallucination 문제를 비교적 명확하게 정의한다. 이 논문에서 사용하는 접근법 자체로도 충분히 가치있는 논문이라고 생각한다.

논문의 주장을 내 나름대로 간략하게 요약해보면 다음과 같다. (요약에는 의도가 담겨야한다고 생각하는데, 정말 어렵다.)

:::note
먼저 hallucination 문제는 세상의 모든 지식을 모델에 학습시킬 수 없는 이상 불가피하다. 

그런데 현대 LLM 이 사용하는 학습 데이터와 학습 방식 (cross-entropy) 으로 hallucination 이 해결될 수 없음을 수학적으로 증명(?)한다. 그것 외에도 hallucination 을 일으킨다고 추정되었던 요소들을 수학적으로 분석한다.

hallucination 은 해결할 수 없는 이슈다. 하지만 평가 방식은 hallucination 을 충분히 고려하지 못한다.

LLM 주류 평가 방식인 yes/no 이분법은 hallucination 이 일어나야 유리한 방식이다. 심지어 hallucination 은 단순히 평가 지표를 하나 추가함으로써 적당하게 평가하기도 어렵다. 종합적으로 고려해야한다.

* 그래서 우리가 적절한 수준으로 hallucination 에 대응할 수 있는 방법과 평가 방식을 제안한다.
:::

아, 저자들은 소소하게 autoregressive generation 과정을 hallucination 의 범인으로 지적하는 것은 근거가 빈약하다고 한다. 현대 LLM 모델은 학습 데이터의 density (혹은 distribution) 를 학습한다. poor prefix 로 인해 hallucination 이 발생한다는 주장은 사람도 말을 한 단어씩한다는 사실을 주지해야 할 것이다. 물론 이 이야기는 계산량의 한계는 고려하지 않은 수학적 논리다.

### What is Hallucination?

Hallucination 의 정의 자체가 어렵지만 논문에서는 hallucination 을 **plausible falsehoods** 라고 정의한다.

### Why Hallucinate?

사실 핵심 주장은 첫 문단의 요약에 적혀있어서 이 글에서는 내가 논문을 읽으며 기입한 주석과 의심의 흐름을 적어두려고 한다.

##### 1. hallucination 의 수학적 formulation

논문에서는 hallucination 을 Is It Valid (IIV problem) 문제를 통해서 간접적으로 수학적으로 표현한다. Is It Valid 문제는 학습 데이터와 prompt 를 고려했을 때 이 대답이 유효한지 yes/no 로 판단하는 문제이다. 

llm 모델이 valid 정답을 생성해내는 과정에는 내재적으로 이 대답이 유효한지 판단하는 과정이 필요하다. 그러므로 LLM 모델이 generative error 는 IIV classification error 보다 무조건 높다. 즉, IIV classification error 는 generative error 의 lower bound 로써 동작한다.

##### 2. Not merely autocomplete

autoregressive generation 과정을 hallucination 의 범인으로 지적하는 것은 근거가 빈약하다. 현대 LLM 모델은 학습 데이터의 density (혹은 distribution) 를 학습한다. poor prefix 로 인해 hallucination 이 발생한다는 주장은 사람도 말을 한 단어씩한다는 사실을 주지해야 할 것이다. 물론 이 이야기는 계산량의 한계는 고려하지 않은 수학적 논리다.

##### 3. Reduction w. pretraining

prompt 를 고려하지 않고, 학습 데이터와 cross entropy loss 를 사용한 학습 과정에서만 발생하게 되는 오류에 대한 분석이다.

저자의 분석 방식은 다음과 같다. valid data 로만 이루어진 train data 를 사용한다고 하자. 해당 가정은 이터에 기반한 에러의 가능성을 일축하고 모든 오류가 hallucination 으로 분류되도록 한다.

이 때 error 가 포함된 string set $X$에 대해서 iiv classification 은 어쩔 수 없는 한계를 가진다. 왜냐하면 학습셑이 모든 데이터를 가지고 있을 수 없기 때문이다. 

저자는 학습으로 인해 발생하는 generative error - iiv classification error 의 간극이 얼마나 줄어드는지 분석한다. 즉 학습은 generation 과 iiv classification 의 난이도 차이를 줄여주는가?

결론은 cross-entropy 기반 학습은 간극을 줄여줄 수 없다.

calibration 이란 보정입니다. 모델이 70% 확률로 정답이라고 할 때, 실제로 그 답이 70% 정도 맞아야 잘 보정되었다고 이야기한다. 문제는 generative error 와 iiv classification error 의 간극은 이 보정이 커져야 줄어들 수 있는 구조라는 점이다. 반면 cross-entropy 모델은 학습 데이터의 분포에 맞춰서 모델의 분포를 잘 보정시킨다. 이로 인해서 cross-entropy 모델은 실질적으로 generative error 를 감소시킬 수 없다.

:::tip
저자는 확률에 기반한 언어 모델(base model) 에서만 hallucination 이 발생한다고 이야기 한다. plain text parser 를 활용한 숫자 계산 방식 혹은 모르는 문제에 전부 모르겠다고 대답하는 모델들은 hallucination 을 0으로 만들 수 있다.
:::

참고로 cross-entropy 를 활용하지 않는 방식: reinforcement learning 을 활용한 post-training - 은 calibration 이 비교적 덜 되는 것을 확인할 수 있다.

##### 4. Reduction w. prompt

prompt 를 추가함으로써 우리는 언어 모델에 더 많은 정보를 제공할 수 있다. 그러므로 prompt 를 사용했을 때 에러율은 calibration 보다는 prompt 를 활용했을 때 알 수 있는 오답과 정답의 개수 차이가 중요하다.

##### 5. Arbitary-fact hallucinations

arbitary-fact 를 잘 해결하기 위해서 필요한 최소 예시의 개수가 매우 많은 어려운 문제다. 또, 표현 방식이 다양한 사실일수록 hallucination 확률이 높다.

##### 6. Poor models

모델 구조에 의한 성능적 한계도 분명히 있다. 선형 분류 밖에 못하는 iiv classifier 가 비선형 문제를 잘 풀 수 없듯이!

### 평가 방식

이분법적인 평가 방식으로는 hallucination 의 효과를 정확히 분석할 수 없다.

A 모델은 24% 정확도를 보여주지만, 76%가 오답이다.
B 모델은 20% 정확도를 보여주지만, 모르겠다고 대답한 경우가 50% 이고 26% 가 오답이다.

어떤 모델을 선택하는 게 좋을까? 모델의 calibration 이 반영된 평가 지표가 필요하다. 모델이 너무 높은 확률로 오답을 말했을 떄는 페널티를 주는 방식 등이 고려 되어야 한다.

저자들은, "모르겠다" 라는 대답의 이분법적인 평가 방식에서는 선택될 수 없다고 이야기한다. 일단은 찍든가, 두루뭉술하게 말하는 게 당연히 점수에는 더 도움이 될 것 이다.

### 제안

- 저자들은 "명시적으로" confidence 에 의한 페널티를 prompt 에 명시하라고 한다.
  - 너 confidence t 이상으로 오답을 내면, t/(1-t) 점수 페널티가 주어져. 맞추면 1 포인트고, 모르겠다고하면 0포인트야.
- 평가할 때도 confidence target 을 통합할 것을 제안함.
  - 틀리면 자동으로 점수를 깍는 방식은 불합리함.
  - 모델이 불확실하게 틀리면 페널티를 줄여야 함.


# Reference

https://www.arxiv.org/pdf/2509.04664