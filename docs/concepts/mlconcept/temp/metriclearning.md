---
id: metriclearning
sidebar_position: 0
---
import metriclearning_concept from './asset/metriclearning_concept.png';

# Metric Learning

:::note
distance 개념에 대해서 다시 한 번 공부하고 읽는 걸 추천합니다.

- Recap: **[Distance](/docs/concepts/mlconcept/data/distance)**
:::

Dimensionality reduction 와 manifold learning 의 한 종류로써,

metric learning 은 **서로 다른 데이터를 떨어뜨리고, 비슷한 데이터를 가까이**하는 distance metric 또는 embedding space 를 학습하는 방법입니다. 이는 수학적으로는, 최적의 Mahalanobis weight matrix 를 찾아가는 과정입니다.

<div style={{textAlign: 'Center'}}>
  <img src={metriclearning_concept} />
</div>


``
아래 순서로 metric learning 개념들을 정리합니다.
- **Spectral Metric Learning**
  - generalized eigenvalue problem 의 한 형태로, matrix 분해를 통해 좋은 projection 을 찾는 방식.
- **Probabilistic Metric Learning**
  - probability distribution 을 통해 좋은 projection 을 찾는 방법
- **Deep Metric Learning**
  - deep neural network 의 활용
  - https://hav4ik.github.io/articles/deep-metric-learning-survey

## Spectral Metric Learning




## Probabilistic Metric Learning

## Deep Metric Learning