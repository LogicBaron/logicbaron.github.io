---
id: triplet
sidebar_position: 3
---
import triplet from './assets/triplet.png';
import quadraplet from './assets/quadraplet.png';
import structure from './assets/structure.png';

# Triplet Loss

[Contrastive Loss](/docs/concepts/deeplearning/loss/contrastive.md)는 하나의 데이터에 대해 한 번에 positive 또는 negative 하나의 관점만 학습할 수 있다는 점이 한계였습니다.

:::tip[Example]

이 한계에 대해 **간단한 예시**를 생각해보겠습니다.

직선 상에서 0.5에 위치하는 게 최적인 데이터가 있다고 합시다. 만약 이 데이터가 1.0에 있는 데이터와 비교해서 negative 라며 이 데이터는 0.5에 위치하는게 최적임에도 불구하고 0.5에서 0.4로, 1.0에서 멀어지는 방향으로 밀려나게 될 것입니다. 어떻게 이를 방지할 수 있을까요? 간단합니다. 어떤 데이터가 **멀어지는 움직임을 취할 때는 가까워져야하는 지점도 함께 알려주고 가까워져야할때는 멀어져야하는 지점도 함께 알려주면** 됩니다. 1.0에서 멀어지되, 0.5에게는 가까워지도록 움직이라고 하는 식입니다. 보다 정확한 데이터의 움직임을 모델링할 수 있겠죠?
:::

Metric Learning에서 멀어지는 움직임은 negative sample에 의해, 가까워지는 움직이는 positive sample에 의해 이루어집니다. Triplet Loss는 **하나의 data point에 대해 positive sample과 negative sample을 동시에 학습**하도록 합니다.

## Definition

<div style={{textAlign: 'Center'}}>
    <img src={triplet} style={{border: 'solid', width: 700}} />
</div>

Triplet Loss 에서는 기준이 되는 **"anchor"** 개념이 등장합니다. positive sample과 negative sample을 샘플링하는 기준이 되는 데이터입니다. **Triplet Loss**는 anchor를 기준으로 positive sample과의 distance는 가깝게 negative sample과의 loss는 멀게 하는 **loss 함수**를 사용합니다.

$$
\mathcal{L}_{\text{triplet}} = \max \left( 0, D^2_{f_\theta}(x_a, x_p) - D^2_{f_\theta}(x_a, x_n) + \alpha \right)
$$

사실 triplet loss는 생각하기도 설계하기도 어렵지 않습니다. 오히려 Triplet loss의 난점은 구현에 있습니다. 실질적인 학습전략과 small-batch의 구성이 어렵죠.

## Negative Mining


Triplet Loss와, 이후 등장하는 Loss에서 가장 중요한 개념은 당연히 손실 함수의 설계입니다. 그리고 그 다음으로 중요한 것은, 손실 함수의 인사이트에 걸맞는 데이터셑 구성과 small-batch 구성입니다. 이 과정에 새롭게 부각되는 개념이 **negative mining**입니다. 


:::note[Summary]
Dataset 내에서 anchor와 negative sample을 찾자!
:::

**negative mining**이란, anchor에 대해 적절한 negative sample을 찾는 과정입니다. 그리고... **생각보다 어려운 작업입니다.** negative mining을 더 어렵게 하는 이유 중 한 가지는, **적절한** negative를 찾기 어렵다는 점입니다. 

**적절한 negative sampling**은 한 줄로 쓰는 것보다 더 중요해서 더 강조하려고 합니다. Hierachical 구조를 생각해봅시다. 쇼핑몰에서 "식품"과 "전자제품"이 이미 구분되어 있는데 "사과" 제품과 "컴퓨터"를 멀리 떨어뜨리는 과정은 더 의미가 없을 것입니다. 

같은 관점에서, negative mining 과정의 한 갈래로 hard negative mining이라는 개념이 등장합니다. 이 개념은 **구분하기 어려운 negative pair**를 찾는 것에 집중합니다. `사과` 와 `배` 문서를 분별하는 것은 `사과`와 `컴퓨터` 문서를 분별하는 것보다 분명히 어려운 일일 것입니다. **hard negative pair는 분별하기 어려운 만큼 모델의 학습에서 매우 중요한 역할**을 합니다. 충분한 hard negative sample이 없다면 모델은 데이터 간의 대략적인 거리만을 익혀 easy negative sample만 구별할 수 있는 '멍청한' 모델이 되게 됩니다. 

Triplet Loss의 등장부터 Deep Metric Learning의 pradigm이 바뀌게 됩니다. Deep Metric Learning은 이 시점부터 충분한 데이터의 수집과 이 데이터 안에서 충분한 positive, negative pair를 수집하는 과제가 됩니다. 특히 수많은 연구들이 **hard negative mining**의 중요성을 강조합니다. 

### hard negative mining

hard negative mining이란, 실제로 positive sample과 구별하기 힘든 negative sample을 샘플링하는 과정을 의미합니다. 예를 들어, 쇼핑몰에서 같은 카테고리의 다른 종류 상품을 샘플링해서 negative sample로 사용하는 것을 hard negative sampling의 예시로 사용할 수 있을 것 같습니다. 

hard negative sampling은 deep metric learning을 활용하는 대부분의 framework에서 강하게 사용되고 있습니다. 그리고 요즘은 다른 용어로 대체되거나 생략되기도 하지만 가장 기본적인 개념인만큼 (hard) negative sampling의 개념을 충분히 익히고 논문을 읽기를 바랍니다. 


# Quadraplet Loss

<div style={{textAlign: 'Center'}}>
    <img src={quadraplet} style={{border: 'solid', width: 700}} />
</div>

Quadraplet loss는 triplet loss와 똑같은 인사이트, 구조와 손실 함수를 공유합니다. 다만, 하나의 anchor point 에 대해 **하나의 positive pair 그리고 두 개의 negative pair를 사용**해서 학습합니다.

## Structured Loss

Triplet Loss (Quadraplet Loss) 는 데이터에게 positive 또는 negative 하나의 비교군이 아니라 두 가지 비교군을 함께 제시함으로써 데이터가 더 적절한 거리와 위치를 학습할 수 있도록 했습니다. Structure loss는 이 과정에서 몇 개의 점을 구분하는 것으로는 완벽한 위치를 학습하기 어렵다고 이야기하며, **배치 내의 가능한 모든 쌍을 고려하는 거리 개념과 손실함수를 제안**합니다.

<div style={{textAlign: 'Center'}}>
    <img src={structure} style={{border: 'solid', width: 700}} />
</div>

위 그림은 전체 임베딩 스페이스에서 적은 수의 쌍만을 비교할 경우 생길 수 있는 문제를 설명하고 있습니다. triplet loss 도 복잡하고 다양한 클래스로 구성된 임베딩 스페이스에서는 적절하지 못한 방향으로 학습이 이루어질 수 있음을 보여줍니다.

### Definition

Strucutred Loss 는 배치 내의 positive pair에 대한 손실 값, $J$의 힌지합으로 표현되는데 그 중 pair 손실 함수 $J$에 대해 먼저 살펴보겠습니다.



$$
\hat{J}_{i,j} = \max \left( \max_{(i,k) \in N} \left\{ \alpha - D^2_{f_\theta}(x_i, x_k) \right\}, \max_{(l,j) \in N} \left\{ \alpha - D^2_{f_\theta}(x_l, x_j) \right\} + D^2_{f_\theta}(x_i, x_j) \right) + D_{i,j}
$$


$\hat{J}_{i,j}$는, **두 positive sample 중 어느 하나와 가장 가까운 배치 내의 negative sample과의 거리**로 정의됩니다. 즉 $\hat{J}_{i,j}$ 의 힌지 합이 손실함수라는 말은, `두 positive sample 중 어느 하나와 가장 가까운 배치 내의 negative sample과의 거리`이 작아지도록 모델이 학습한다는 의미입니다. 논문에서는 모든 negative sample을 고려하지 않는 이유를 computational complexity 상의 문제라고 이야기합니다. 또한 **margin $\alpha$** 두어서 negative sample 간의 최소 거리를 정의합니다. 각 sample과 margin 거리 내에는 negative sample이 존재하지 않도록 학습하게 됩니다.

$$
\hat{\mathcal{L}}_{\text{structured}} = \frac{1}{2|P|} \sum_{(i,j) \in P} \max \left( 0, \hat{J}_{i,j} \right)^2
$$

상술했던 대로, 최종적인 손실함수는 small batch내의 모든 positive pair에 대한 $J$ 값의 hinge sum으로 정의됩니다.

small batch 내의 모든 데이터(쌍)를 활용하는 loss 함수를 사용해서 structured loss는 각 데이터가 임베딩 공간 상에서 더 적절한 곳에 위치할 수 있도록 학습시켰습니다. 사실 이는 컴퓨팅 리소스와 학습 프레임워크의 발전이 함께 이루어졌길래 가능한 학습 방법이기도 합니다.

이후의 Deep Metric Learning 은 **small batch 내의 모든 데이터를 활용하는 것은 당연**하고, 어떻게 더 잘 활용할지에 대해 고민하는 방향으로 발전합니다. 이 관점에서 magnet loss와 clustering loss가 등장하지만 이 두 loss는 크게 주목하지 못했습니다.
