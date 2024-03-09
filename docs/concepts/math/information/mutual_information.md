---
id: mutual_information
sidebar_position: 4
tags: [information]
---

# Mutual Information

Information 과 관련해서 마지막 글이 될 것 같습니다. Mutual Information 은 **상호 정보량** 으로써 조금 생소합니다. 

mutual informatoin 은 **하나의 사건을 관측함으로써 또 다른 사건에 대해 얻을 수 있는 정보의 양** 을 의미합니다. 이 의미에 대해서 아래 문단에서 조금 더 살펴보겠습니다.


## Example of Mutual Information

Mutual Information 의 개념에 대해서 먼저 직관적으로 이해해봅시다. 

빨간 구슬 1개, 파란 구슬 1개를 가지고 있는 상황을 생각해봅시다. 구슬을 하나씩 두 개의 주머니에 넣은 뒤 첫 번째 주머니만 확인할 수 있다고 합시다. 

첫 번째 주머니에서 빨간 구슬이 나왔다면 두 번째 주머니에는 파란 구슬이 들어있다는 사실을 우리는 어렵지 않게 짐작할 수 있습니다. 반대의 경우에도 마찬가지 입니다. 

이 예시에서 우리는 두 번째 주머니에 대해 어떤 관측도 하지 않았지만 첫 번째 주머니에 대한 관측만으로도 두 번째 주머니에 대한 **정보** 를 얻을 수 있습니다. 구슬의 개수가 하나가 아니라도 상관없습니다. 첫 번째 구슬에 대한 관측은 두 번째 주머니에 대한 **정보** 를 제공합니다.

이렇게 **하나의 사건을 관측함으로써 또 다른 사건에 대해 얻을 수 있는 정보의 양** 을 **Mutual Information** 이라고 합니다.

:::tip
**Mutual Information** 이란, 한 사건을 관측함으로써 또 다른 사건에 대해 얻을 수 있는 정보량을 의미한다.
:::

## Definition of Mutual Information

두 랜덤변수 $X$ 와 $Y$ 사이의 상호 정보는 $I(X, Y)$ 라고 표기하며 아래와 같이 정의됩니다.

$$
I(X; Y) := \sum_{x \in X} \sum_{y \in Y} P(x,y) log \left(  \frac{P(x,y)}{P(x)P(y)} \right)
$$

## Properties of Mutual Information

Mutual Information 의 의미와 함께 몇 가지 특징에 대해 알아보겠습니다. 역시 증명보다는 직관적인 해석 위주로 서술하겠습니다.

### Mutual Information is Symmetric.

Mutual Information 은 대칭입니다. $I(X;Y) = I(Y;X)$.

이는 당연한 말입니다. 사건 X에 대해 알게 되면 사건 Y 에 대해서 알게 되는 정보는, 반대로 **Y에 대한 해당 정보를 알고있으면 X 에 대해 그만큼 알 수 있다** 와 같은 의미이기 때문입니다.

### Mutual Information is Positive. 

Mutual Information 은 항상 양수입니다.

### Interpretation of Mutual Information

$$
I(X;Y) = D_{KL} \left( P(X,Y) || P(X)P(Y)  \right)
$$

### Difference between Joint Entropy.

제가 공부할 때 Mutual Information 과 Joint Entropy 의 차이를 정확히 이해하기 어려웠습니다.

Mutual Information 은 한 사건 X 를 관측했을 떄, 사건 Y 에 대한 관측 없이 Y 에 대해 알 수 있는 정보량을 의미합니다.

Joint Entropy 는 사건 X와 사건 Y를 함께 관측하는 경우 알 수 있는 정보량을 의미합니다.