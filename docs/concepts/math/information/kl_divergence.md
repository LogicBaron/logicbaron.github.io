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