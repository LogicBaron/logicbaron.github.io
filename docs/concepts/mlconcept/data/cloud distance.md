---
id: cloud_distance
sidbar_position: 4
---
import dist_concept from './asset/dist_concept.png';
import wass_1 from './asset/wass_1.png';
import wass_2 from './asset/wass_2.png';

# Cloud Distance

data cloud 간의 거리는 어떻게 계산할 수 있을까요?

중심점을 기준으로 빽빽히 뭉쳐져 있는 data cloud 와 느슨하게 펼쳐져 있는 data cloud 에 대해 같은 거리 계산 방식을 적용하는 것은 불합리해보입니다.

또, data cloud 와 data point 의 거리는 어떻게 계산할 수 있을까요?

## 1. Mahalanobis Distance

이 그림에서 data point $x$ 는 $X_1$ 에 속한다고 보는 게 타당할까요, $X_2$ 에 속한다고 보는게 타당할까요?

<div style={{textAlign: 'Center'}}> 
    <img src={dist_concept} style={{width: 700}}  />
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

### Generalized Mahalanobis Distance

 covariance matrix $\bold{\Sigma}$ 가 positive-semidefinite, invertible matrix 이므로 같은 특성을 가진 임의의 positive semi-definite matrix, $W \geq 0$ 을 상정할 수 있습니다. 

 이 방법은, data cloud 가 퍼져있는 정도인 covariance matrix 가 아니라 weight matrix 를 기준으로 data point 들 간의 거리를 재해석한다는 의미를 가집니다.

 - **generalized Mahalanobis distance**

 covariance matrix 와 그 역은 positive semi-definite 이므로 covariance matrix 를 임의의 positive semi-definite matrix $\bold{W} \ge 0$ 으로 바꾸어도 mahalanobis distance 가 정의됩니다. 이를 **Generalized Mahalanobis Distance** 라고 정의합니다.

$$
||\bold{x}_i - \bold{x}_j||_{\bold{W}} := \sqrt{(\bold{x}_i - \bold{x}_j)^\top \bold{W} (\bold{x}_i - \bold{x}_j)}
$$

$$
\therefore ||\bold{x}_i - \bold{x}_j||^2_{\bold{W}} := (\bold{x}_i - \bold{x}_j)^\top \bold{W} (\bold{x}_i - \bold{x}_j)
$$


## 2. KL Divergence

KL Divergence 는 확률 분포간의 유사도를 측정하는 방식입니다. 

Bayesian Inference 등을 통해 데이터 클라우드는 확률 분포 모형으로 추정이 가능합니다. 당장 Mahalanobis Distance 역시 데이터 클라우드로부터 데이터의 분산을 추정합니다. 데이터의 분포를 추정하는 것은 몇 가지 장점이 있습니다. 가장 중요한 점은 데이터에 대해서 우리가 가지고 있는 **사전 지식**, **prior knowledge** 를 데이터의 분석에 반영할 수 있다는 점입니다. 예를 들어서, **"데이터의 분포는 Gaussian 분포를 따를 것이다."** 역시 prior knowledge 의 일종입니다.

KL Divergence 개념은 [Concept: Math](/docs/concepts/math/introduction)의 [KL Divergence](/docs/concepts/math/information/kl_divergence.md) 문서 참조.

KL Divergence 는 **일반적으로 Discrete Domain 에서 정의**되지만 일부 확률 분포에 대해서는 정의역에 대한 Closed-form KL divergence 가 계산되어 있습니다.

## 3. Wasserstein Distance

Wasserstein Distance는 상품 수송 및 관리를 위해서 연구된 개념입니다. 이 거리는 두 확률 분포 사이의 **최소 수송 비용** 을 계산합니다. 

직관적인 이해를 먼저 해봅시다. 어떤 확률 분포 $P$를 따르고 있는 상품들을 다른 확률 분포 $Q$를 따르도록 이동시키기 위해서 발생하는 비용을 측정합니다. 

아래 그림에서 파란색으로 표시된 점들을 빨간색으로 옮기기 위해서는 어떻게 하는 것이 가장 효율적일까요?

<div style={{textAlign: 'Center'}}> 
    <img src={wass_1} style={{width: 500}}  />
</div>

바로 최적 효율을 알아볼 수는 없으니, "더 효율적인 경로가 있다" 정도의 직관만 얻어봅시다. 아래 그림에서 표시된 두 경로 중에서는, **오른쪽의 경로가 훨씬 효율적** 으로 보여집니다.

<div style={{textAlign: 'Center'}}> 
    <img src={wass_2} />
</div>

Wasserstein Distance 는 두 데이터 분포 사이의 거리를 **이러한 수송 경로 중 가장 최적의 경로에서의 총 경로** 로 계산합니다. 데이터 포인트의 크기는 데이터 포인트의 발생 확률에 비례합니다. 발생할 확률이 높은 데이터일수록 더 짧은 경로를 할당해주는 것이 효율적이겠죠? 

$$
W(P, Q) = \underset{\gamma \in \Pi (P, Q)}{\text{inf}} \int{d(x,y)\gamma(dxdy)} = \underset{\gamma \in \Pi (P, Q)}{\text{inf}} E^{\gamma} [d(X, Y)]
$$

- $\text{inf}$ 는 infimum(하한), 즉 최소값의 의미로 받아들일 수 있습니다. (엄밀하게는 약간 다르지만 거의 동일한 의미입니다.)
- $\Pi (P, Q)$ 는 $P$ 와 $Q$ 의 결합 확률 분포의 정의역을 의미하며 $\gamma$ 는 그 원소입니다.

즉 전체 식은 **가능한 결합 확률 분포의 정의역 쌍 $\gamma = (x, y)$ 에 대해서 거리의 최소값의 기댓값** 을 의미합니다.


## 4. Sampling Method

 Distribution 사이의 거리를 측정하는 방법 중 한 가지는 확률 분포로부터 데이터를 샘플링해서 샘플링된 데이터간의 거리를 측정하는 방법입니다.


## ...Metric Learning

 현재 가지고 있는 data point 들에 대해서 비슷한 데이터는 가깝게, 다른 데이터는 멀게 해석할 수 있는 적절한 weight matrix $W$ 를 찾는다면 data point 에 대한 해석이 훨씬 수월해집니다. 이러한 방법론의 연구를 **[Metric Learning](/docs/concepts/mlconcept/taxonomy/metriclearning)** 이라고 합니다.
