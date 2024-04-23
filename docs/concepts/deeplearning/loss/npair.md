---
id: npair
sidebar_position: 4
---
# N-pair Loss

Metric Learning 에서는 개인적으로 끝판왕이라고 생각하는 N-pair loss 입니다. **InfoNCE loss**라는 이름으로도 유명하며 CLIP에서 적용한 loss로도 유명합니다. 

N-pair loss 는 Triplet Loss 의 Generalized Version으로 설명할 수 있습니다. N=3 인 tiplet loss, N=4인 Quadraplet loss의 연장선에서 N-pair loss는 하나의 positive pair와 N-1개의 Negative pair를 학습에 사용합니다. N-pair loss 논문에서 나온 loss는 다음과 같습니다.

$$
\begin{align*}
\mathcal{L}_{\text{pair}}(x, x^+, \{x_i^-\}_{i=1}^{N-1}) &= \log \left( 1 + \sum_{i=1}^{N-1} \exp(f(x)^\top f(x_i^-) - f(x)^\top f(x^+)) \right) \\
&= -\log \frac{\exp(f(x)^\top f(x^+))}{\exp(f(x)^\top f(x^+)) + \sum_{i=1}^{N-1} \exp(f(x)^\top f(x_i^-))}
\end{align*}
$$

식이 약간 복잡하지만 거리 함수로 feature 간의 내적을 사용했다는 점만 제외하면 그렇게 복잡하지 않습니다. triplet loss, quadraple loss와 마찬가지로 positive pair의 거리는 가깝게 negative pair의 거리는 멀게 하는 것이 목표입니다. 

:::note
사실 내적을 사용한다는 점에서 n-pair loss 는 이미 각도의 개념이 들어가있기 때문에 다음 포스트인 **metric learning on sphere**에 가깝다고 느낄 수 있을 것 같습니다. 어느정도 맞다고 생각하지만 n-pair loss의 접근법이 euclidean 기반의 triplet loss와 너무 근접하여 이 문서에 남겨둡니다.
:::

N-pair loss는 아무리 negative mining이 잘 되더라도 다양한 class가 존재하는 데이터에서 활용하는 것이 좋습니다. 최소 batch-size 정도의 class가 나누어져 있어야 n-pair loss의 의미가 극대화되기 때문입니다. 최근에는 N-pair loss를 사용해서 contrastive representation learning 등에 활용하고 있습니다.




# Ref
1. https://hav4ik.github.io/articles/deep-metric-learning-survey
2. https://papers.nips.cc/paper_files/paper/2016/file/6b180037abbebea991d8b1232f8a8ca9-Paper.pdf