---
id: kl_divergence
sidebar_position: 3
tags: [information]
---
# KL Divergence

지금까지는 털 색깔과 성격 유형이라는, 서로 다른 도메인의 데이터에서의 정보량에 대해서 논의했습니다. 지금부터는 두 가지 도메인에서의 두 가지 Random Variable 이 아닌 한 가지 도메인: 털 색깔 - 에 대한 두 가지 분포를 비교하겠습니다. 편의상, 첫 분포를 실제 분포(ground truth)라 하고 두 번째 분포를 추론 분포(inference, prediction)라 표현하겠습니다. (실제 상황과 매우 가깝습니다.)

## What is inference of Random Variable?

:::warning[Pre-requiste]
이 부분부터는 	&lt;statistics: distribtuion&gt; 가 선행되야 이해하기 쉽습니다.
:::

이 시점부터는 inference 가 무엇인지를 먼저 지각해야 합니다. 

추론의 예시를 이런 식으로 생각해볼 수 있습니다. `특별 고양이는 회색 털을 가지고 있을 것이다.`. 실제로 지금까지 질문은 이런식으로 이루어졌죠. 이 추론을 조금 더 수학적으로 표현하면 `특별 고양이의 털 색깔의 확률 분포는 회색일 확률이 100%이다.` 라 할수 있습니다. 이 문장은 통계학적으로는, 회색털의 확률이 1인 categorical distribution: Categorical(회색털=1) 이라고 합니다.

조금 다른 추론도 가능합니다. 특별 고양이가 한 마리가 아니라 10마리라면 어떨까요? `특별 고양이는 30% 확률로 회색 털을 가지고 있고 70% 확률로 하얀 털을 가지고 있을 것이다` 와 같은 추론이 가능합니다. 이 문장은 Categorical(회색털=0.3, 하얀털=0.7) 이라는 categorical distribution 으로 표현 가능합니다.

여기서 말하고자 했던 것은, 모든 현상을 Random Variable 로 표현할 수 있지만 모든 추측 역시 Random Variable 로 표현 가능하다는 사실입니다.

## KL Divergence

이제, 그렇다면 이 추축에 대해서 이야기를 해봅시다. 이 추측은 얼마나 정확할까요?

확률 $P$ 로 발생한 사건을 $Q$ 의 확률로 추론한다면, 우리가 얻게 되는 정보량은 실제 사건의 정보량과 어떻게 다를까요?

