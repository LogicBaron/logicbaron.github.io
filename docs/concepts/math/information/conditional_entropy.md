---
id: conditional_entropy
sidebar_position: 2
tags: [information]
---
# Conditional Entropy

conditional entropy 란, 어떤 Random variable 에서 관찰된 사건을 알고있을 때 다른 random variable 에게서 기대할 수 있는 정보량을 의미합니다.

## Conditional Entropy

:::tip[Entropy]
Entropy란,
- 어떤 확률 변수를 관측함으로써 얻을 수 있는 정보량의 기댓값 : 관측의 정보량
- 어떤 확률 변수를 사건을 확인하기 위해 필요한 정보량의 기댓값 : 관측의 불확실성
:::

cross entropy 의 의미는 다음과 같습니다.

- **X의 값을 알고 있을 때, Y를 관측함으로써 얻을 수 있는 정보량의 기댓값.**
- **X의 값을 알고 있을 떄, Y의 값을 확인하기 위해 필요한 정보량의 기댓값.**

후보 1,000 마리의 고양이를 가지고 있습니다. 그런데 성격유형 C는 검은색 털 고양이에게는 70% 확률로 나타나는데, 하얀색 털 고양이에게는 20% 확률로만 나타납니다. 고양이 전체 후보군에 대해서는 성격유형 C는 50% 정도 확률로 발현합니다.

우리가 특별 고양이의 털 색깔 정보를 알 수 없다면, `특별 고양이의 C 성격 유형 여부에 대한 관측` 은 후보군을 50% 만 줄여줍니다. 즉, 엔트로피가 1입니다.

반면 특별 고양이의 털 색깔이 검은색으로 정해져 있다면 `특별 고양이의 C 성격 유형 여부에 대한 관측` 은 후보군을 20% 또는 80% 로 줄여줍니다. 엔트로피가 0.5입니다.

특별 고양이의 털 색깔이 회색이라는 사실을 알고 있다면 `특별 고양이의 C 성격 유형 여부에 대한 관측` 은 후보군을 30% 또는 70% 로 줄여줍니다. 엔트로피가 0.6입니다.

특별 고양이의 털 색깔을 관측한 후에는, 특별 고양이의 C 성격 유형 여부의 엔트로피가 감소합니다. 이 사실이 어떤 의미일까요?

- 고양이의 털 색깔을 관측한 후에는 고양이의 성격 유형을 예측하기 더 쉽다.
- 고양이의 털 색깔을 관측한 후에는 고양이의 성격 유형 정보의 정보량이 감소한다.

조건부 엔트로피는 (joint entropy 와 마찬가지로) 이미 알고 있는 Random Variable X, 그리고 알고 있지 않은 Random Variable Y 두가지 변수에 대한 함수로써 정의됩니다.

$$
H(Y|X)=\sum_{x}\sum_{y}{p(x,y)log\frac{1}{p(y|x)}} = E\left[ \frac{1}{p(Y|X)} \right]
$$

## meaning of conditional entropy

먼저 X 값이 x 라고 알고 있을 때: 고양이의 털 색깔이 검은색이라고 알고 있을 때 - 의 conditional entropy 는 다음과 같이 정의됩니다. 이 떄의 conditional entropy 의 의미는 오로직 고양이의 털 색깔이 검은색인 경우만을 고려했을 때 고양이의 성격유형 C 여부의 정보량의 기댓값을 의미합니다.

위에서 정의한 conditional entropy 는 가능한 모든 털 색깔에 대해서 고양이 성격유형 C 여부를 알게됨으로써 얻게되는 기댓값의 평균을 의미합니다.

$$
H(Y|X=x)=\sum_{y}{p(y|x)log\frac{1}{p(y|x)}}
$$

## Relation with joint entropy

이전 장에서, Joint Entropy 는 X와 Y를 동시에 관측했을 때 얻는 정보량의 기댓값이라고 했습니다.

또, conditional entropy 는 X 를 알고 있을 떄, Y 를 관측함으로써 얻는 정보량의 기댓값이라고 했구요. 그런데 X 를 알고있다는 사실은 X 를 관측함으로써 정보를 얻었다는 사실입니다. 즉, $H(X)$ 만큼의 정보량을 얻었다는 의미입니다. 

$$
H(X,Y) = H(X) + H(Y|X)
$$

위의 식은 직관적으로 유도한 엔트로피의 관계이지만, 수학적으로도 증명이 가능합니다.

정보이론의 재밌는 점은 불확실성을 제거하는 과정, 정보를 얻어가는 과정에서 우리의 직관이 수학적으로 증명이 가능하다는 사실을 확인할 수 있다는 점입니다! 


