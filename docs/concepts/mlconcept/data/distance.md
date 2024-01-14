---
id: distance
sidebar_position: 1
---
import dist_concept from './asset/dist_concept.png';

# Distance

## Distance Metric

거리 함수(Distance metric) 에 대한 부분만 정의를 조금 엄밀하게 살펴보겠습니다.

---
- **Def. Distance Metric**

metric space $X$ 에 대해서, 함수 $d: X \times X \rightarrow [0, \inf)$ 가 다음과 같은 특성을 만족하면 **distance metric** 이라고 한다.

1. non-negativity: $d(x_i, x_j) \geq 0$
2. identity: $d(x_i, x_j) = 0 \Longleftrightarrow x_i=x_j$
3. symmetric: $d(x_i, x_j) = d(x_j, x_i)$
4. triangle inequality: $d(x_i, x_j) \leq d(x_i, x_k) + d(x_k, x_j)$

---

점과 점의 거리는 일반적인 거리 함수로 계산할 수 있습니다.

그렇다면, data cloud 간의 거리는 어떻게 계산할 수 있을까요?

중심점을 기준으로 빽빽히 뭉쳐져 있는 data cloud 와 느슨하게 펼쳐져 있는 data cloud 에 대해 같은 거리 계산 방식을 적용하는 것은 불합리해보입니다.

또, data cloud 와 data point 의 거리는 어떻게 계산할 수 있을까요?

## Hamming Distance

 Binary data 에 대해 대표적으로 사용할 수 있는 거리 함수로써, 두 데이터에 대해 값이 다른 bit 의 수를 의미합니다. XOR 연산 결과의 bit 수와 같습니다.

 
## Mahalanobis Distance

이 그림에서 data point $x$ 는 $X_1$ 에 속한다고 보는 게 타당할까요, $X_2$ 에 속한다고 보는게 타당할까요?

<div style={{textAlign: 'Center'}}> 
    <img src={dist_concept} />
</div>


euclidean 거리로는 분명히 $X_1$ 에 가깝지만 **대부분의 사람들은 $X_2$ 에 속한다고 보는게 더 타당하다고 판단합니다**. 그 이유는, $X_1$ 에 속하는 data point 들은 중심점에 거의 밀집해있기 때문에, $x$ 가 $X_1$ data cloud 의 scatter, 또는 표준편차에 비해서는 멀리 떨어져있기 떄문입니다. 반면 $X_2$ 는 중심점으로부터 데이터 포인트들이 넓게 분포해있으므로, euclidean 거리가 비교적 멀더라도 scatter 에 비해서는 $x$ 가 그다지 떨어져 있지 않습니다.

mahalanobis distance 는 데이터가 중심점으로 부터 표준편차와 비교해서 얼마나 떨어져 있는지를 고려해서 거리를 계산하는 지표입니다.

data cloud 에 대해서 mahalanobis distance 를 정의하기 위해서는 먼저 **데이터 cloud 전체 covarinace** 를 계산해야 합니다.

예를 들어서, 두 개의 서로 다른 데이터 cloud 의 전체 sample covarinace 는 아래와 같습니다.

$$
\bold{\Sigma} = \frac{1}{n_1+n_2-2} \left( (n_1-1)\bold{\Sigma_1} + (n_2-1)\bold{\Sigma_2} \right)
$$

그럼 각 data cloud 에 속한 두 data point 간의 **mahalanobis distance** 다음과 같이 정의할 수 있습니다.

$$
||x_i-x_j||_{\bold{\Sigma}} = \sqrt{(x_i-x_j)^\top \bold{\Sigma}^{-1} (x_i-x_j)}
$$

같은 맥락에서, data cloud 간의 거리와 특정 data point 와 data cloud 간의 거리도 정의할 수 있습니다.

- **data cloud 간 거리**

$$
||\mu_1-\mu_2||_{\bold{\Sigma}} = \sqrt{(\mu_1-\mu_2)^\top \bold{\Sigma}^{-1} (\mu_1-\mu_2)}
$$

- **data point - data cloud 거리**

$$
||x-\mu||_{\bold{\Sigma}} = \sqrt{(x-\mu)^\top \bold{\Sigma}^{-1} (x-\mu)}
$$

## Generalized Mahalanobis Distance

 covariance matrix $\bold{\Sigma}$ 가 positive-semidefinite, invertible matrix 이므로 같은 특성을 가진 임의의 positive semi-definite weight matrix $W \geq 0$ 을 상정할 수 있습니다. 

 이 방법은, data cloud 가 퍼져있는 정도인 covariance matrix 가 아니라 weight matrix 를 기준으로 data point 들 간의 거리를 재해석한다는 의미를 가집니다.

 - **generalized Mahalanobis distance**

 $$
||x-\mu||_{\bold{W}} = \sqrt{(x-\mu)^\top \bold{W} (x-\mu)}
$$

## Metric Learning

 현재 가지고 있는 data point 들에 대해서 비슷한 데이터는 가깝게, 다른 데이터는 멀게 해석할 수 있는 적절한 weight matrix $W$ 를 찾는다면 data point 에 대한 해석이 훨씬 수월해집니다. 이러한 방법론의 연구를 **[Metric Learning](/docs/concepts/mlconcept/taxonomy/metriclearning)** 이라고 합니다.
