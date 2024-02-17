---
id: kl_divergence
sidebar_position: 3
tags: [information]
---
# KL Divergence

:::tip
KL Divergence 는 [Cross Entropy](/docs/concepts/math/information/cross_entropy.md)를 읽어보고 공부하는 것을 추천합니다.
:::

KL Divergence 는 실제 확률 분포 $p(X)$ 를 가지는 Random Variable $X$ 에 대해, $X$ 의 확률 분포를 $q(X)$ 로 추정할 때 증가하는 불확실성을 의미합니다. 

KL divergence 는 확률 분포 간의 유사도 개념으로 많이 이해하고 있지만 정보량 관점에서 접근해야 정확한 이해가 가능합니다. 

## Definition & Meaning of KL Divergence

KL divergence 는 아래와 같이 정의 된다.

$$
\begin{aligned}

D_{KL} ( P || Q ) &=  \sum_{x \in X} P(x) log \left(  \frac{P(x)}{Q(x)} \right) \\

&=  - \sum_{x \in X} P(x) log \left(  \frac{Q(x)}{P(x)} \right)

\end{aligned}
$$

KL Divergence 에서 가장 의아한 항은 바로 $-log(Q(x)/P(x))$ 입니다. 

$P(x)/Q(x)$ 항은 **실제 사건이 일어날 확률에 대한 추정 확률의 비** 를 의미합니다. 그리고 이에 대한 negative log 값, 즉 $-log(P(x)) + log(Q(x))$ 는 실제 확률 분포와 추정 확률 분포 사이의 정보량(불확실성) 차이를 의미합니다.

예를 들어서, **30% 확률로 일어나는 사건 A를 60% 확률로 일어난다고 추정** 한 경우를 생각해 봅시다. 이 경우 $P(x)=0.3$, $Q(x)=0.6$ 입니다. $-log(Q(x)/P(x)) = -log(2) = -1$ 입니다. x 사건에 대해서 우리는 불확실성이 1만큼 감소한다는 의미입니다. 이 추정에 대해서 생각을 더 해봅시다.

이는 사건 A 에 대한 추정을 2배 자주 내리게 된다는 말입니다. 30% 확률로 사건 A가 발생한 경우 우리는 훨씬 쉽게 정답을 맞출 수 있습니다. 반면 70% 확률로 사건 A가 발생하지 않을 경우 우리는 훨씬 어렵게 정답을 맞추게 됩니다.

어떤 사건에 대해 실제 일어날 확률보다 높은 확률을 추정하는 것은 불확실성을 감소시킵니다. 그리고 어떤 사건에 대해 실제 확률 보다 낮은 확률을 추정하는 것은 불확실성을 증가시킵니다. 그리고 **모든 사건에 대한 추정으로 인한 불확실성 변화량**의 평균이 바로 KL Divergence 의 정보 이론 관점의 해석입니다.

KL Divergence 는 이렇게 **추정으로 인한 불확실성의 변화량** 을 의미합니다. Cross Entropy 의 의미는 **추정의 불확실성** 이라고 했습니다. 즉,

$$
H(P, Q) = H(P) + D_{KL}(P||Q)
$$

입니다. 