---
id: pca
sidebar_position: 0
---
import pca_example from './asset/pca_example.png';
import pca_covariance from './asset/pca_covariance.png';
import pca_covsvd from './asset/pca_covsvd.png';
import pca_scree from './asset/pca_scree.png';
import pca_main from './asset/pca_main.png';
import pca_alg1 from './asset/pca_alg1.png';
import pca_alg2 from './asset/pca_alg2.png';
import pca_alg3 from './asset/pca_alg3.png';
import pca_alg4 from './asset/pca_alg4.png';
import pca_alg5 from './asset/pca_alg5.png';
import pca_alg6 from './asset/pca_alg6.png';


<div style={{textAlign: 'Center'}}> 
    <img src={pca_main} />
</div>
# Principle Component Analysis(PCA)

PCA 는 주로 고차원의 데이터를 보다 저차원으로 표현해서, 사람이 이해하기 쉽도록 하기 위해 사용되는 기술입니다.
- [Curse of Dimension](/docs/concepts/mlconcept/data/Curse%20of%20Dimension.md) 참조.

고차원의 데이터를 저차원으로 표현하는 기법은 Dimension Reduction 이라고 불리며 대부분의 머신 러닝 방법론에서 매우 중요하게 다루어집니다. 엄밀하게는 모든 Representation Learning을 Dimension Reduction의 한 예로 이해해도 무방합니다. 텍스트나 이미지와 같은 고차원의 데이터를 낮은 차원의 vector 로 표현하는 방법을 학습하기 때문입니다.

아래 이미지는 PCA 의 한 예시인데요, 2차원으로 표현된 각 나라의 vector 를 1차원으로 축소한 결과가 각각 x축, y축에 보여지고 있습니다. 두 개의 축 중, 어느 축이 더 나라들을 잘 나누고 있는 것으로 보이나요? 어떤 축이 더 적절하게 각 나라의 vector 를 보다 작은 차원으로 압축했나요?

<div style={{textAlign: 'Center'}}> 
    <img src={pca_example} />
</div>

아마도 x축이 더 적절하게 나라들을 나누고 있다고 느낄 것입니다. 이 이유는 x축에서 각 나라의 클러스터(색깔)가 잘 분리되고 있기 때문인데요. 이처럼, **PCA** 기법은 고차원의 데이터를 **"가장 잘 나누고 있는 기저만으로 표현하는"** 방법입니다. 

:::tip
**PCA 기법**은 **데이터를 잘 나누고 있는 기저만으로 고차원의 데이터를 표현**하는 방식이다.
:::

## PCA 0. Projection

Random Variable $X$ 에 대한 n 개의 관측(Observation)으로 이루어진 Data Cloud를 

$$
\mathbb{X} = [\hat{X}_1 | \hat{X}_2 | ... | \hat{X}_n]
$$

    라 표현합시다.

Data Cloud $\mathbb{X}$ 의 dimension은 $\mathcal{R}^{nxd}$ 입니다. PCA 의 목표는 데이터의 차원 $d$ 를 더 작은 임의의 차원 $d'$ 으로 mapping 하는 것입니다.

더 작은 차원으로의 mapping 방법 중 가장 직관적이고 간단한 방식으로는 **projection** 이 있습니다. PCA 역시 basis 를 선택하고 난 뒤의 mapping 방법으로는 projection 을 사용합니다. Projection 에 대해서는 [Projection](/docs/concepts/math/linearalgebra/projection.md) 글 에서 더 자세히 다루겠습니다.

PCA 에 대해 보다 정확하게 이해하기 위해서 일단은 $d'=1$ 차원으로의 projection 을 가정하겠습니다. data cloud $\mathbb{X}$의 1차원 basis $u \in \mathcal{R}^d$ 로의 projection 은 다음과 같습니다.

$$
\text{Projection of Data Cloud onto unit vector }u\in \mathcal{R}^d \text{ is : } u^T \mathbb{X}
$$

:::note
basis $u$ 가 $\mathcal{R}^d$ 에 속하지만 1차원으로의 projection 이라고 하는 이유는, 단일 basis 로 표현되는 space 의 차원이 1차원이기 때문입니다.
:::

## PCA 1. Covaraince

**데이터를 잘 나누고 있는 기저만으로 고차원의 데이터를 표현**, 한다라는 문장이 PCA의 전부입니다. 먼저 **데이터를 잘 나눈다** 라는 표현을 살펴보겠습니다.

데이터를 나누고 있는 정도에 대한 척도로는 이미 잘 알고있는 것이 하나 있습니다. 분산(Variance)과 표준편차(Standard Deviation)입니다. 고차원 데이터에서는 두 개 이상의 Feature 가 연관성을 가지고 함꼐 변화하기도 합니다. 예를 들어서 사람의 성별과 머리카락의 길이는 어느정도의 연관성을 가지고 있을 것입니다. 사람의 나이와 시력도 어느정도의 연관성이 있을 수 있겠네요. 이렇게 두 개의 Feature 가 함께 변화하는 정도를 나타낸 것을 **covariance**라고 합니다. covariance 가 0에 가까울수록 두 feature는 독립적입니다. covariance 의 크기는 두 feature 들의 연관성이며 부호는 방향성을 나타냅니다. 

아래 그림은 Multivariate Gaussian Distribution 에서 Covariance 의 유무에 따른 분포의 차이를 나타냅니다.

<div style={{textAlign: 'Center'}}> 
    <img src={pca_covariance} />
</div>

Covariance $\Sigma$와 Sample Covariance $S$는 각각 다음과 같이 정의됩니다.

- **Definition of Covariance**

$$
\Sigma = COV(X, X) = E[(x-E[X])](X-E[X])^T = E[XX^T]-E[X]E[X]^T
$$

- **Definition of Sample Covariance**

$$
S = \frac{1}{n}\sum_{i=1}^n (x_i - \bar{X})(x_i - \bar{X})^T = \frac{1}{n} \mathbb{X}\mathbb{X} - \frac{1}{n^2} \mathbb{X}\mathbb{I}(\mathbb{X}\mathbb{I})^T
$$

covariance matrix 는 데이터의 각 성분(feature)가 얼마나 변화하는지, 다른 성분과 얼마나 연관있게 변화하는지를 표현합니다. PCA 결과, 즉 Dimension Reduction 이 이루어진 데이터의 Covariance 는 어떻게 표현할 수 있을까요?

- **Covariance of $u^T \mathbb{X}$**

$$
\begin{aligned}
COV(u^T \mathbb{X}, u^T \mathbb{X}) & = \frac{1}{n} \sum_{i=1}^n {x_i}x_i^T - \bar{X}\bar{X}^T \\
& = \frac{1}{n} u^T \mathbb{X} \mathbb{X}^T u^T - \frac{1}{n^2} = u^T \mathbb{XI} (\mathbb{XI})^T u \\
& = u^T \left(  \frac{1}{n} \mathbb{XX}^T - \frac{1}{n^2} \mathbb{XI} (\mathbb{XI})^T  \right)  \\
& = u^T S u \in \mathcal{R}
\end{aligned}
$$

Projected Data Cloud 의 Sample Covariance 를 계산했으니 PCA 문제를 보다 세련되게 표현할 수 있습니다. PCA는 데이터를 가장 잘 구분하는 기저를 선택하는 문제였고 이는 **해당 기저로 projection 한 후 데이터의 분산이 가장 크게** 하는 것과 동일한 의미입니다. 

- **PCA problem Definition**

$$
\text{arg maxs}_{u\in \mathcal{R}^d\text{, }||u||=1} u^TSu
$$

## PCA 2. Singular Value Decomposition

여기서부턴 Linear Algebra 에 대한 선행 지식이 필요합니다.

Covariance Metrics 는 symmeric, positive definite 이므로 Covariance matrix 의 Singular Value Decomposition 은 대칭 형태를 띄게 됩니다. 

$$
S = VDV^T
$$

의 형태를 띄며, $D$ matrix 는 eigenvalue 값을 성분으로 가지는 대각 행렬이며 V 는 eigenvalue 에 상응하는 eigenvector 를 column 으로 가지는 matrix 입니다.

이 변환의 의미를 잠깐만 살펴보겠습니다. Covariance matrix 의 eigenvector 와 eigenvalue 는 각각 Covariance matrix 가 나타내고 있는 변화의 크기와 방향을 의미합니다. Covariance matrix 를 **eigenvalue 라는 새로운 기저(basis) 를 이용해서 표현하는 방법**이자 어떤 데이터에 대해 **Covariance Matrix 에 해당하는 변환을 가하는 Transform** 입니다. 아래 그림은 Covariance Matrix 의 의미를 시각적으로 설명하고 있습니다.
 

<div style={{textAlign: 'Center'}}> 
    <img src={pca_covsvd} />
</div>

## PCA 3. Solution

정의한 PCA 문제, 

$$
\text{arg maxs}_{u\in \mathcal{R}^d\text{, }||u||=1} u^TSu
$$

는 calculus 를 통해서는 상당히 해결하기 난해한 문제입니다. 하지만 SVD 와 matrix properties 를 활용하면 해당 문제의 솔루션이 first eigenvector and its corresponding eigenvector 가 됨을 알 수 있습니다. 

즉, **covariance matrix 의 첫 번째 eigenvector 로 data 를 projection 시키는 것이 가장 분산을 크게 유지하며 이는 곧 데이터의 정보를 가장 많이 유지하는 것이다.** 

또한 PCA 의 증명은 라그랑주 승수법을 활용해서도 가능합니다. 해당 풀이는 이 글에서는 첨부하지 않겠습니다.

## PCA 4. Practical Problems

### Exapnd to 1-dim to k-dim?

기존의 basis 와 orthonomal 한 Unit vector 들 중 covariance 를 가장 크게 하는 Unit vector 를 찾으면 됩니다. 

$$
v_1 = \text{arg maxs}_{u\in \mathcal{R}^d\text{, }||u||=1} u^TSu
$$

$$
v_2 = \text{arg maxs}_{u\in \mathcal{R}^d\text{, }||u||=1\text{, }u \bot v_1} u^TSu
$$

$$
...
$$

$$
v_k = \text{arg maxs}_{u\in \mathcal{R}^d\text{, }||u||=1\text{, }u \bot v_1,...,v_{k-1}} u^TSu
$$

이것 역시 SVD 의 성질 상 1st, 2nd, 3rd.. 에 해당하는 eigenvector 를 선택하면 됩니다. 

### Algorithm 

---
1. **Input** : Observations $x_1, x_2, ... , x_n \in \mathcal{R}^d$

2. Empricial Mean $E[X]$ Subtraction

3. Compute Empirical Covariance Matrix $S$

4. Compute SVD of Emprical Covariance Matrix, s.t. $S=VDV^T$

5. Choose $k<d$ and set  $V_k = [v_1|v_2|...|v_k] \in \mathcal{R}^{d \times k}$.

6. **Output** : $y_1, y_2, ... , y_n$ where $y_i = V_k^T x_i \in \mathcal{R}^k$



---


- **Example**
s
1. **Input** : Observations $x_1, x_2, ... , x_n \in \mathcal{R}^d$

<div style={{textAlign: 'Center'}}> 
    <img src={pca_alg1} style={{width: 500}} />
</div>

2. Empricial Mean $E[X]$ Subtraction

<div style={{textAlign: 'Center'}}> 
    <img src={pca_alg2} style={{width: 500}} />
</div>

3. Compute Empirical Covariance Matrix $S$

<div style={{textAlign: 'Center'}}> 
    <img src={pca_alg3} style={{width: 500}} />
</div>

4. Compute SVD of Emprical Covariance Matrix, s.t. $S=VDV^T$

<div style={{textAlign: 'Center'}}> 
    <img src={pca_alg4} style={{width: 500}} />
</div>

5. Choose $k<d$ and set  $V_k = [v_1|v_2|...|v_k] \in \mathcal{R}^{d \times k}$.

<div style={{textAlign: 'Center'}}> 
    <img src={pca_alg5} style={{width: 500}} />
</div>

6. **Output** : $y_1, y_2, ... , y_n$ where $y_i = V_k^T x_i \in \mathcal{R}^k$

<div style={{textAlign: 'Center'}}> 
    <img src={pca_alg6} style={{width: 500}} />
</div>


### How to Choose k?

그렇다면 적절한 Lower Dimension $d'$ 은 어떻게 선택하는 게 좋을까요?

 대부분의 경우 PCA 는 Visualization 이 가능한 차원 즉 $d'$ 을 2 또는 3의 값으로 선택합니다.

 그보다 더 큰 차원으로 PCA 를 수행하려할 때는 주로 **Scree Plot** 이라는 기법을 사용합니다.

<div style={{textAlign: 'Center'}}> 
    <img src={pca_scree} />
</div>

Eigen vector 를 크기 순으로 나열하게 되면 보통 다음과 같은 그래프가 됩니다. 글의 앞 부분에서 eigenvalue 의 크기는 해당 Eigenvector 가 나타내는 분산의 크기라고 했습니다. 어느 시점부터 Eigenvector 가 표현하고 있는 Variance 의 크기가 작아지게 되는데 이 그래프를 통해서 적절한 $d'$ 을 설정합니다.

### Explained Covariance

$d'$ 값을 설정하는 데도 사용되는 이야기입니다. 선택한 $k$ 가 데이터를 얼마나 설명하고 있을까요? 이는 전체 eigenvalue 의 크기 대비해서 PCA에서 사용된 eigenvalue 의 크기로 표현가능합니다.

$$
\frac{\lambda_1 + \lambda_2 + ... + \lambda_k}{\lambda_1 + \lambda_2 + ... + \lambda_d}
$$

scree plot 과 연관하여, 적절한 k를 선택할 땐 다음과 같이 criterion 을 사용해서 선택하기도 합니다.

$$
\frac{\lambda_1 + \lambda_2 + ... + \lambda_k}{\lambda_1 + \lambda_2 + ... + \lambda_d} \ge 1-\alpha
$$