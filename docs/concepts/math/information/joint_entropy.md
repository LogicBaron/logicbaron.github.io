---
id: joint_entropy
sidebar_position: 1
tags: [information]
---
# Joint Entropy

이 전 장에서 entropy 의 개념을 튼튼하게 구축했으니, 이번에는 joint entropy 에 대해서 알아봅시다. joint entropy 는 **두 개의 확률 변수를 동시에 고려할 때의 엔트로피**를 의미합니다.

엔트로피를 설명하며 사용했던 특별 고양이의 예시를 다시 사용해봅시다. 

이 글에서부터 털 색깔 Random Variable 을 X, 그리고 성격 유형 Random Variable 을 Y 라고 표현하겠습니다. 

## Joint Probability

Statistics 에서 공부하는 내용이니 간단하게만 짚어보고 넘어가겠습니다. Joint probability 는 X 와 Y 를 함께 고려하는, 그러니까 **"X: 고양이의 털색깔-은 x:검정색 -이며 동시에 Y: 고양이의 성격 유형-은 y: B유형- 인 경우의 확률"** 을 다룹니다.

## Joint Entropy

:::tip[Entropy]
Entropy란,
- 어떤 확률 변수를 관측함으로써 얻을 수 있는 정보량의 기댓값. 
- 어떤 확률 변수를 사건을 확인하기 위해 필요한 정보량의 기댓값(질문의 수의 기댓값).
:::

joint entropy 역시 마찬가지입니다.

- **두 가지 확률 변수를 동시에 관측함으로써 얻을 수 있는 정보량의 기댓값.**
- **두 가지 확률 변수를 동시에 확인하기 위해 필요한 정보량의 기댓값.**

후보 고양이 1,000마리 중 `특별 고양이의 털 색깔은 치즈케이크색이고 고양이의 성격 유형은 C 유형이다.` 라는 정보를 얻으면 후보 고양이가 10마리로 줄어듭니다. 즉, $P(X=치즈케이크색, Y=C유형)=0.001$ 이고, $I(X=치즈케이크색, Y=C유형)=9.96\text{(bit)}$ 의 정보량을 가집니다.

$$
I(X,Y) = \log_2 \left( \frac{1}{P(X,Y)} \right)
$$

이러한 방식으로 X와 Y를 함께 알 때 얻을 수 있는 정보량을 계산할 수 있고, 모든 경우의 정보량의 기댓값을 구함으로써 joint entropy 를 계산할 수 있습니다.

$$
H(X,Y)=E_{X,Y}[I(X,Y)] = \sum_{x}\sum_{y}{P(x,y)log\frac{1}{P(x,y)}}
$$

예를 들어, `털 색깔과 성격 유형의 joint entropy 가 3` 이라는 사실은 **"X와 Y를 함께 관측하면 평균적으로 후보군의 크기가 $1/2^3=1/8$ 로 줄어듬"** 을 의미합니다. 또는 **"X와 Y를 함께 관측하기 위해서는 평균적으로 3번의 yes/no 질문이 필요하다"** 라고도 해석할 수 있습니다.

