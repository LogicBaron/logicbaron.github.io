---
id: contrastive
sidebar_position: 2
---
# Contrastive Loss

Contrastive Loss 는 Deep Metric Learning에서 사용하는 가장 기본적인 loss 입니다. Contrastive Loss는 단순하게 **두 데이터만 비교**합니다. 두 데이터가 같은 클래스라면 거리는 가깝게, 다른 데이터라면 거리를 멀게 하는 방식입니다. 

## Notation

$\theta$-parameterized model $f_\theta : x \rightarrow f_\theta (x)$로 인코딩한다고 한다고 표기합니다. 

두 input data $x, y$ 에 대한 모델 output 간의 거리는 다음과 같이 정의됩니다.

$$
D(f_\theta (x), f_\theta (y)) = D_{f_\theta} (x, y)
$$

거리 함수는 n-norm distance가 될 수 있고, $1-cos_{f_\theta} (x, y)$ 와 같은 angular distance를 사용할 수 도 있습니다.

구체적인 거리 함수의 특징과 조건은 [distance](/concepts/mlconcept/data/distance.md) 참고해주세요.

## Contrastive Loss

**positive pair는 가깝게, negative pair는 멀게**

### Batch 구성
Contrastive Loss 는 두 개의 데이터를 비교해야하기 때문에 일반적으로 모델이 읽어들이는 하나의 input을 $(x_1, x_2)$ 형태로 구성합니다. small-batch 의 경우는 batch-size 만큼의 데이터 쌍을 이용해 구성합니다.

### Loss Function

기본적으로 positive pair의 거리는 작게 하고 negative pair의 거리는 멀게하는 loss 함수는 아래와 같이 구성할 수 있습니다.

$$
\mathcal{L}_{\text{contrast}} = \mathbb{I}_{y_1=y_2} D_{f_\theta}(x_1, x_2) + \mathbb{I}_{y_1 \neq y_2} \max(0, D_{f_\theta}(x_1, x_2))
$$


[ML: metric learning](/concepts/mlconcept/taxonomy/metriclearning.md)와 동일하게 deep metric learning에서도 positive pair 는 negative pair 보다 **"충분히"** 멀리 떨어져야 합니다. 또는 positive 와 negative pair를 구분하기 위한 **경계 영역**이 필요합니다. 

예를 들어서, 3의 거리를 기준으로 positive pair와 negative pair가 구분이 된다면 기준을 모르는 사람은 거리 3 근처에 있는 data를 분류하기 불가능할 것입니다. 그렇기 때문에 metric learning은 negative pair의 경우 **구분하기 위한 추가적인 거리, margin $\alpha$를 사용**합니다. 


$$
\mathcal{L}_{\text{contrast}} = \mathbb{I}_{y_1=y_2} D_{f_\theta}(x_1, x_2) + \mathbb{I}_{y_1 \neq y_2} \max(0, \alpha - D_{f_\theta}(x_1, x_2))
$$

margin의 필요에 대해 조금 더 수학적인 관점은, margin이 없는 loss 함수의 해를 구해보면 됩니다. 이 경우 거리 함수가 0을 결과로 하는 항등 함수일 경우 언제나 loss=0으로 최소값을 가지게 됩니다.

## Limit

Contrastive loss 한 번에 한 쌍의 data만 비교하기 때문에 데이터들이 **다양한 데이터를 한 번에 비교하기 어렵습니**다. 비교할 수 있는 지점이 많을수록 공간 상에서 적절한 위치를 찾을 수 있는 건 당연한 이야기입니다. 그래서, 이후의 **loss들은 보다 다양한 데이터를 한 번에 살펴볼 수 있는 형태로 발전**하게 됩니다.