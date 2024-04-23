---
id: triplet
sidebar_position: 3
---
# Triplet Loss

## Triple Loss

Deep Learning 에서는 모델이 한 번에 하나의 데이터에서 얼마나 다양한 관점을 학습하는지가 매우 중요합니다. Contrastive Loss는 하나의 데이터에 대해 positive 또는 negative 관점의 정보만을 제공합니다.

Triplet Loss는 **하나의 data point에 대해 positive, negative 관점을 동시에 모델이 학습**하도록 합니다.

Triplet Loss 수식 역시 간단합니다. 단순히 Contrastive Loss에서 positive loss와 negative loss를 동시에 고려한 형태입니다.

$$
\mathcal{L}_{\text{triplet}} = \max \left( 0, D^2_{f_\theta}(x_a, x_p) - D^2_{f_\theta}(x_a, x_n) + \alpha \right)
$$

Triplet Loss 를 사용해서 모델을 학습시키는 과정에서 가장 어려운 점이 무엇일까요? loss의 구현과 같은 과정보다 더 어려운 것은 모든 data point에 대해 positive data와 negative data를 똑같은 숫자만큼 준비하는 것입니다. 이 시기부터 **negative mining**의 개념이 등장합니다.

### Negative Mining

negative mining이란, 주어진 데이터셑에서 어떤 datapoint 에 대한 negative pair를 찾는 작업입니다. 생각보다 어려운 작업입니다. 예를 들어서, 수많은 문서로부터 다른 사물을 분별하고 있는 문서를 찾아서 데이터를 준비하는 작업이 쉬울까요? 생각보다 어려운 작업이며, metric learning에서 가장 중요한 작업입니다.

negative mining 과정의 한 갈래로 hard negative mining이라는 개념도 있습니다. 이 개념은 **특히 어려운 negative pair**를 찾는 것에 집중합니다. `사과` 와 `배` 문서를 분별하는 것은 `사과`와 `컴퓨터` 문서를 분별하는 것보다 분명히 어려운 일일 것입니다. **hard negative pair는 분별하기 어려운 만큼 모델의 학습에서 매우 중요한 역할**을 합니다. 충분한 hard negative sample이 없다면 모델은 데이터 간의 대략적인 거리만을 익혀 easy negative sample만 구별할 수 있는 '멍청한' 모델이 되게 됩니다. 

## Quadraplet Loss

하나의 datapoint 에 대해 하나의 positive pair 그리고 두 개의 negative pair를 사용해서 학습합니다. 약간의 세부적인 인사이트가 더 있지만 중요하지 않다고 생각합니다.

## Small Batch 전부 보자, Structured Loss

Contrastive Loss ~ Quadraplet Loss 들은 한번에 2~4개 정도의 데이터 포인트를 학습합니다. 이 시기까지의 컴퓨팅 리소스의 한계, 그리고 deep metric learning 개념이 충분히 검증되지 않은 시기였기에 조심스러운 시도가 많았다고 생각합니다. Structured Loss 는 꽤 과감한 접근을 시도합니다.

Structure Loss는 한 step에서 모든 학습 데이터는 아니더라도, **small batch내의 모든 데이터를 고려한 loss를 제안**합니다. 사실 좋은 loss는 아니라고 생각하지만 small batch 내의 모든 데이터를 활용한다는 점에 그 의의가 있습니다. Strucute Loss 는 small batch 내에서 **positive 쌍 각각과 가장 가까운 두 negative data point가 최대한 멀어지도록** 학습합니다.

$$
\hat{J}_{i,j} = \max \left( \max_{(i,k) \in N} \left\{ \alpha - D^2_{f_\theta}(x_i, x_k) \right\}, \max_{(l,j) \in N} \left\{ \alpha - D^2_{f_\theta}(x_l, x_j) \right\} + D^2_{f_\theta}(x_i, x_j) \right)
$$

$$
\hat{\mathcal{L}}_{\text{structured}} = \frac{1}{2|P|} \sum_{(i,j) \in P} \max \left( 0, \hat{J}_{i,j} \right)^2
$$

**small batch를 전부 활용하는 loss**를 활용함으로써 기존과 비슷한 수준의 컴퓨팅 리소스를 활용하면서도 모델이 데이터를 보는 관점이 훨씬 풍부해졌고, 모델의 표현력 역시 크게 상승헀습니다. 이후의 Deep Metric Learning 은 **small batch 내의 모든 데이터를 활용하는 것은 당연**하고, 어떻게 더 잘 활용할지에 대해 고민하는 방향으로 발전합니다. 이 관점에서 magnet loss와 clustering loss가 등장하지만 이 두 loss는 크게 주목하지 못했습니다.
