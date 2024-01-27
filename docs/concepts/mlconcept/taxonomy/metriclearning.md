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


아래 순서로 metric learning 개념들을 정리합니다.
- **Spectral Metric Learning**
  - generalized eigenvalue problem 의 한 형태로, matrix 분해를 통해 좋은 projection 을 찾는 방식.
- **Probabilistic Metric Learning**
  - probability distribution 을 통해 좋은 projection 을 찾는 방법
- **Deep Metric Learning**
  - deep neural network 의 활용
  - https://hav4ik.github.io/articles/deep-metric-learning-survey
  - deep learning concepts 에서 정리

## Main Idea of Metric Learning

 Metric learning 의 주요 목표는 similar data 와 dissimilar data 를 구분하는 것입니다.

  $$
  (\bold{x}_i, \bold{x}_j) \in S \text{ if } \bold{x}_i \text{ and } \bold{x}_j \text{ are simillar. (or in the same class.) }
  $$ 

  $$
  (\bold{x}_i, \bold{x}_j) \in D \text{ if } \bold{x}_i \text{ and } \bold{x}_j \text{ are dissimillar. (or in the different class.) }
  $$ 

[Distance](/docs/concepts/mlconcept/data/distance) 글에서 두 데이터 - 또는 데이터 cloud - 사이의 일반적인 거리를 정의할 수 있다고 공부했습니다.

:::note
Generalized Mahalanobis Distance 는 임의의 weight matrix $\bold{W} \ge 0$ 를 통해 두 점 사이의 거리를 정의합니다.
:::

Metric learning 은 **similar pair 거리를 가깝게, disimilar pair 거리는 멀게하는 Weight matrix를 학습** 합니다. 이는 비슷한 데이터 간의 분산은 작게, 다른 데이터 간의 분산을 크게 한다는 의미이기도 합니다.

Weight Matrix 의 학습은 두 가지 관점으로 해석이 가능합니다.
- 데이터를 가장 잘 구분하는 관점의 학습.
- 데이터를 구분하기 쉽게 해주는 변환의 학습: 중요한 feature의 강조, 중요하지 않은 feature의 약화.

Metric Learning 의 main idea는 **Fisher Discriminant Analysis (FDA)** 의 main idea와 같습니다.

## Spectral Metric Learning

Spectral Metric Learning 은 Generalized Mahalanobis Distance 의 관점에서 두 data 간의 거리를 정의하고, 이로부터 직접적으로 최적의 weight matrix 를 학습합니다. Spectral Metric Learning 문제는 다음과 같은 최적화 문제로 정의할 수 있습니다.

$$
\begin{aligned}
&\underset{\bold{W}}{\text{minimize}} \sum_{  (\bold{x}_i, \bold{x}_j) \in S } ||\bold{x}_i-\bold{x}_j||^2_{\bold{W}} \\
&\text{subject to} \bold{W} \ge 0
\end{aligned}
$$

그런데, 위 최적화 문제는 $\bold{W} = 0$ 이 해입니다. 그럼 disimilar data간 거리도 0이 되어버리기 때문에 disimilar pair 에 대한 최소 마진을 최적홯 문제에 추가합니다.

$$
\begin{alignedat}{2}
& \underset{\bold{W}}{\text{minimize}} \sum_{  (\bold{x}_i, \bold{x}_j) \in S } ||\bold{x}_i-\bold{x}_j||^2_{\bold{W}} \\
&\text{subject to} \sum_{  (\bold{x}_i, \bold{x}_j) \in D } ||\bold{x}_i-\bold{x}_j||^2_{\bold{W}} \ge \alpha, \text{ } \bold{W} \ge 0
\end{alignedat}
$$

Spectral Metric Learning 에서 최적화 문제를 정의하는 또 다른 방법은, disimilar pair 간 거리를 margin, $\alpha$를 사용해 제한하지 않고 이를 최대화하도록 하는 방법입니다. 여기서도 역시 trivial Solution $\bold{W} = 0$ 이 되는 경우를 피하기 위해 weight matrix 의 trace 를 상수값으로 고정합니다.

$$
\begin{alignedat}{2}
& \underset{\bold{W}}{\text{minimize}} &\frac{1}{|S|}\sum_{  (\bold{x}_i, \bold{x}_j) \in S } ||\bold{x}_i-\bold{x}_j||^2_{\bold{W}} \\
& &- \frac{1}{|D|}\sum_{  (\bold{x}_i, \bold{x}_j) \in S } ||\bold{x}_i-\bold{x}_j||^2_{\bold{W}} \\
& \text{subject to} &\bold{W} \ge 0, \text{ } \text{tr}(\bold{W}) = 1
\end{alignedat}
$$

그럼 이 최적화 문제를 어떻게 풀 수 있을까요?

해법을 전부 설명하기에는 너무 복잡하고 양이 많아서 정리하지 않겠습니다. spectral Metric Learning 해법의 핵심은 주성분 성분의 아이디어와 유사합니다. 데이터의 특징을 matrix decomposition 을 통해 분해하고, 이 중 주요한 성분만을 weight matrix에 반영하는 방식입니다. 더 자세한 내용이 궁금하신 분들은 matrix decomposition 과 eigenvalue 개념을 공부하고 Reference 를 참조하시면 됩니다.

## Probabilistic Metric Learning

Probabilistic Metric Learning 은 두 데이터가 similar pair 일 확률을 distance 로부터 정의합니다.

$$
p^W_{ij} = \frac{\text{exp}(-||\bold{x}_i-\bold{x}_j||^2_{\bold{W}})}{\sum_{k \neq i} \text{exp}(-||\bold{x}_i-\bold{x}_k||^2_{\bold{W}})}
$$

그리고 이 확률 분포를 이상적인 확률 분포 $p^0_{ij}$ 에 가까워지도록 weight matrix 를 학습합니다. 

$$
p^0_{ij} :=
\begin{cases}
1 &\text{ if} (\bold{x}_i, \bold{x}_j) \in S \\
0 &\text{ if} (\bold{x}_i, \bold{x}_j) \in D
\end{cases}
$$

두 확률 분포가 비슷해지도록 하는 방법 중 하나는, KL-divergence 를 최소화하도록 학습하는 것입니다.

$$
\begin{alignedat}{2}
& \underset{\bold{W}}{\text{minimize}} \sum_{i=1}^n \sum_{j=1, j\neq i}^n \text{KL}(p_{ij}^W|p_{ij}^0) \\
& \text{subject to } \bold{W} \ge 0
\end{alignedat}
$$

이 최적화 문제는 gradient method 를 통해 해를 찾을 수 있습니다. 

이 외에도 Probabilistic Metric Learning 방법들은 다양합니다.

- **Neighborhood Component Analysis(NCA).**
  - $p^0_{ij}$ 와 가까워지도록 하는 weight matrix 를 학습하는 것이 아니라,
  - Similar samples 간의 $p^W_{ij}$ 의 합이 최대가 되도록 학습합니다. $ \underset{\bold{W}}{\text{maximize}} \sum_{i=1}^n \sum_{\bold{x}_j \in S_i} p^W_{ij} $ 
- **Bayesian Metric Learning.**
  - $p^W_{ij}$ 의 distribution 을 추정하는 variational inference 의 관점으로 접근합니다.
  - $p^W_{ij}$ 의 분포에 대한 prior distribution 을 상정하고, data points 로부터 likelihood 를 구해서 variational inference 를 수행합니다.
- **Information Theoritic Metirc Learning.**
  - known prior weight matrix $\bold{W}_0$ 를 상정하고,
  - relative entorpy(kl-divergence)이 최소가 되도록 혹은 mutual information 이 최대가 되도록 학습합니다.
  - prior weight matrix 는 주로 데이터로부터 추정합니다.

## Deep Metric Learning

deep metric learning 에서는 데이터 포인트들의 표현(embedding) 혹은 거리 함수를 deep model 의 output 으로 사용합니다. 매우 복잡한 확률 분포의 모델링을 deep model 을 통해 수행한다고 이해하면 될 것 같습니다.

deep metric learning 은 deep learning concept: [deep metric learning](/docs/concepts/deeplearning/taxonomy/metriclearning.md) 에서 다루고 있습니다.

# Ref

[1] [Spectral, Probabilistic, and Deep Metric Learning: Tutorial and Survey](https://arxiv.org/abs/2201.09267)