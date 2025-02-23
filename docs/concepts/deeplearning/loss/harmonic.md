---
id: harmonic_loss
sidebar_position: 8
---
import harmonic from './assets/harmonic.png';

# Harmonic Loss

representation learning에서 Cross-Entropy의 대안으로 제안됨. Cross-Entropy에 기반한 모든 Loss에서도 적용 가능할 것으로 보인다.

<div style={{textAlign: 'Center'}}>
    <img src={harmonic} style={{border: 'solid', width: 800}} />
</div>

## Harmonic Loss


Representation Model의 Generalization 에서 겪게 되는 문제점.

- Lack of Interpretability 
- Low Data Efficiency
- Delayed Generalization (grokking)
  - 학습셑 수렴과 평가셑 수렴간의 gap.

### Loss

Logits $y$ 는 vector muliplication 결과로 표현 가능하다. $y = W^T x$ 일 때, $y_i = w_i \times x$ 로 표현된다. 이 떄 $w_i$ 는 $W$ matrix 의 i 번째 column 이다.

Harmonic Loss 는 Cross-Entropy에서 사용하는 Softmax 를 2p euclidean distance 거리 기반 함수로 대체한다.

$$
p_i = \text{HarMax}(\mathbf{d})_i \equiv \frac{1 / d_i^n}{\sum_j 1 / d_j^n}
$$

where,

$$
p_i = \text{HarMax}(\mathbf{d})_i \equiv \frac{1 / d_i^n}{\sum_j 1 / d_j^n}
$$

그 후 Cross-Entropy 함수를 적용해서 최종 loss 를 계산하다. $n$ 은 hyperparameter 인데, 저자들은 $\sqrt{D} = \sqrt{d_{embed}}$ 를 추천한다.

예를 들어 정답 class가 $c$ 라면 loss 는 $l = - \log {p_c}$ 로 계산된다.

euclidean distance base loss 를 사용함으로써 harmonic loss 는 두가지 이점을 가진다.

- scale invariance
- finite convergence point, class ceneter.
  - $w_i$ 가 class center 로써 동작함.


## Ref

[1] [Harmonic Loss Trains Interpretable AI Models](https://arxiv.org/pdf/2502.01628)