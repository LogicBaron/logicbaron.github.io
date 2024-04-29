---
id: metric_learning
sidebar_position: 1
---
import metric from './assets/metric.png'
import metric_loss from './assets/metric_loss.png'

# Metric Learning

:::tip
Deep Metric Learning 개념에 대해 읽기 앞서
- [distance](/concepts/mlconcept/data/distance.md)
- [ML: metric learning](/concepts/mlconcept/taxonomy/metriclearning.md) 

을 참조하길 파악합니다.
:::


**Metric Learning**은 **두 데이터가 비슷하거나 다른 정도를 임베딩 공간에서 거리**로 학습하는 것을 목적으로 합니다.


<div style={{textAlign: 'Center'}}>
    <img src={metric} style={{border: 'solid', width: 700}} />
</div>

Deep Metric Learning은 **거리 공간(함수)으로 크게 두 가지**를 사용합니다. 

- **Cartesian Space**에서 Euclidean distance 포함한 n-norm distance를 활용하는 방식.
- **Angular space**에서 데이터 간 각도를 활용하는 방식.
  - Angular space는 임베딩 간의 각도를 내적을 통해 알 수 있는 cos 거리로부터 계산합니다.
  
위의 그림 같은 경우에는 그 중 euclidean distance를 사용한 Deep Metric Learning의 예시입니다.

그렇다면 일단, **Deep Metric Learning은 거리 개념을 어떻게 모델이 학습**하도록 할까요?

### Deep Metric Learning의 기본적인 프레임워크

Deep Metric Learning 학습의 기본적인 프레임워크는, 

1. **small-batch의 구성이 중요**합니다. 비교해야 하는 데이터를 하나의 small-batch에 포함시키고 데이터의 임베딩을 계산합니다.
2. 계산한 데이터 임베딩으로부터 데이터 간의 거리를 계산합니다.
3. 이를 사용하여 loss를 계산하고 모델을 업데이트 합니다.
4. 업데이트된 모델로부터 데이터의 임베딩을 구한 뒤, 다시 거리함수를 계산합니다.

이 과정에서 모델은 데이터 간의 적절한 거리를 더 정확하게 학습할 수 있습니다.

## Loss of Metric Learning

<div style={{textAlign: 'Center'}}>
    <img src={metric_loss} style={{border: 'solid', width: 700}} />
</div>

Deep Metric Learning에서 사용하는 Loss와 인사이트들은 아래와 같습니다.

:::note
첨언하자면, 저는 데이터 포인턱 간의 거리간 단순히 임베딩 포인터 간의 거리 함수로 표현되지 않을 것이라 생각합니다.
다만 임베딩은 가장 기본적인 형태이면서도 연구가 많이 이루어진 분야이니 임베딩 기반 인사이트를 따라가는 것이 분명 도움되는 부분이 있을 것 같습니다.
:::

:::tip
Deep Metric Learning은 특히 Face Recognition 연구와 함께 많이 발전했습니다. Face Classification & Recognition 의 역사를 찾아봐도 많은 공부가 될 것입니다. 또한, 몇몇 Loss 글에서는 관련된 Face Recognition 논문을 함께 소개합니다.
:::

### 1. [Contrastive Loss](/docs/concepts/deeplearning/loss/contrastive.md)
### 2. [Triplet Loss & Structured  Loss](/docs/concepts/deeplearning/loss/triplet.md)
### 3. [N-pair Loss](/docs/concepts/deeplearning/loss/npair.md)
### 4. [Center Loss](/docs/concepts/deeplearning/loss/center.md)
### 5. [Angular Loss (feat. Sphere Face)](/docs/concepts/deeplearning/loss/angular.md)
### 6. [CosFace & ArcFace Loss](/docs/concepts/deeplearning/loss/face.md)

# Ref
1. https://hav4ik.github.io/articles/deep-metric-learning-survey