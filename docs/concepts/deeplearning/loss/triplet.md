---
id: triplet
sidebar_position: 3
---
import triplet from './assets/triplet.png';

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

**negative mining**이란, anchor에 대해 적절한 negative sample을 찾는 과정입니다. 그리고... **생각보다 어려운 작업입니다.** negative mining을 더 어렵게 하는 이유 중 한 가지는, **적절한** negative를 찾기 어렵다는 점입니다. 

**적절한 negative sampling**은 한 줄로 쓰는 것보다 더 중요해서 더 강조하려고 합니다. Hierachical 구조를 생각해봅시다. 쇼핑몰에서 "식품"과 "전자제품"이 이미 구분되어 있는데 "사과" 제품과 "컴퓨터"를 멀리 떨어뜨리는 과정은 더 의미가 없을 것입니다. 

같은 관점에서, negative mining 과정의 한 갈래로 hard negative mining이라는 개념이 등장합니다. 이 개념은 **구분하기 어려운 negative pair**를 찾는 것에 집중합니다. `사과` 와 `배` 문서를 분별하는 것은 `사과`와 `컴퓨터` 문서를 분별하는 것보다 분명히 어려운 일일 것입니다. **hard negative pair는 분별하기 어려운 만큼 모델의 학습에서 매우 중요한 역할**을 합니다. 충분한 hard negative sample이 없다면 모델은 데이터 간의 대략적인 거리만을 익혀 easy negative sample만 구별할 수 있는 '멍청한' 모델이 되게 됩니다. 

Triplet Loss의 등장부터 Deep Metric Learning의 pradigm이 바뀌게 됩니다. Deep Metric Learning은 이 시점부터 충분한 데이터의 수집과 이 데이터 안에서 충분한 positive, negative pair를 수집하는 과제가 됩니다. 특히 수많은 연구들이 **hard negative mining**의 중요성을 강조합니다. 

### hard negative mining

hard negative mining이란, 실제로 positive sample과 구별하기 힘든 negative sample을 샘플링하는 과정을 의미합니다. 예를 들어, 쇼핑몰에서 같은 카테고리의 다른 종류 상품을 샘플링해서 negative sample로 사용하는 것을 hard negative sampling의 예시로 사용할 수 있을 것 같습니다. 

hard negative sampling은 deep metric learning을 활용하는 대부분의 framework에서 강하게 사용되고 있습니다. 그리고 요즘은 다른 용어로 대체되거나 생략되기도 하지만 가장 기본적인 개념인만큼 (hard) negative sampling의 개념을 충분히 익히고 논문을 읽기를 바랍니다. 


# Quadraplet Loss

Tiplet Loss이후 Loss 발전은 당분간 triplet loss의 일반화에 집중됩니다. 방정식의 발전, 미분의 발전, 적분의 발전과 비슷하죠? 너무 재밌습니다. 3개의 데이터를 이용하는 triplet loss 다음으로 4개의 데이터를 이용하는 quadraple loss, 5개의 데이터의 이용하는 loss.. 에서 n개의 데이터를 이요하는 loss로 발전해왔습니다.

Quadraplet loss는 triplet loss와 똑같은 인사이트, 구조와 손실 함수를 공유합니다. 다만, 하나의 anchor point 에 대해 **하나의 positive pair 그리고 두 개의 negative pair를 사용**해서 학습합니다.

## Small Batch 전부 보자, Structure Loss

Contrastive Loss ~ Quadraplet Loss 들은 한번에 2~4개 정도의 데이터 포인트를 학습합니다. 이 시기까지의 컴퓨팅 리소스의 한계, 그리고 deep metric learning 개념이 충분히 검증되지 않은 시기였기에 조심스러운 시도가 많았다고 생각합니다. Structured Loss 는 꽤 과감한 접근을 시도합니다.

Structure Loss는 한 step에서 모든 학습 데이터는 아니더라도, **small batch내의 모든 데이터를 고려한 loss를 제안**합니다. 다만, 이 과정에 batch 내의 모든 데이터를 골고루 선택하는 것이 아니라 batch 내에서 가장 우선적으로 고려해야 할 샘플을 고려합니다.

Strucute Loss 는 **small batch 내에서 positive 쌍 각각과 가장 가까운 두 negative data point가 최대한 멀어지도록** 학습합니다. 

$$
\hat{J}_{i,j} = \max \left( \max_{(i,k) \in N} \left\{ \alpha - D^2_{f_\theta}(x_i, x_k) \right\}, \max_{(l,j) \in N} \left\{ \alpha - D^2_{f_\theta}(x_l, x_j) \right\} + D^2_{f_\theta}(x_i, x_j) \right)
$$

라는 $\hat{J}_{i,j}$ 함수의 정의 하에서 loss 함수는 아래와 같이 정의됩니다. 조금 정리하자면, **posiive sample이 가까울수록 negative sample이 멀어질수록 작은 값을 가지게 되는**, 인사이트에 부합하는 $J$ 값을 따르는 loss 함수는 아래와 같습니다. 모든 조합에서.. loss $J$를 최소화합니다.

$$
\hat{\mathcal{L}}_{\text{structured}} = \frac{1}{2|P|} \sum_{(i,j) \in P} \max \left( 0, \hat{J}_{i,j} \right)^2
$$

**small batch를 전부 활용하는 loss**를 활용함으로써 기존과 비슷한 수준의 컴퓨팅 리소스를 활용하면서도 모델이 데이터를 보는 관점이 훨씬 풍부해졌고, 모델의 표현력 역시 크게 상승헀습니다.

이후의 Deep Metric Learning 은 **small batch 내의 모든 데이터를 활용하는 것은 당연**하고, 어떻게 더 잘 활용할지에 대해 고민하는 방향으로 발전합니다. 이 관점에서 magnet loss와 clustering loss가 등장하지만 이 두 loss는 크게 주목하지 못했습니다.
