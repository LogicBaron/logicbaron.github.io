---
id: distance
sidebar_position: 1
---

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

이 글에서는 data point 와 data point 간의 거리만 다루겠습니다.

:::tip
data cloud 혹은 distribution 간의 거리에 대한 부분은 statistics 혹은 **[cloud distance](/docs/concepts/mlconcept/data/cloud%20distance.md)** 를 참조해주세요.
:::

## Hamming Distance

 Binary data 에 대해 대표적으로 사용할 수 있는 거리 함수로써, 두 데이터에 대해 값이 다른 bit 의 수를 의미합니다. XOR 연산 결과의 bit 수와 같습니다.

## $L^p$ -Norm

$L^p$-norm 은 다음과 같이 정의됩니다.

$$
||x||_p = \left( |x_1|^p + |x_2|^p + ... + |x_n|^p \right) ^ {1/p}
$$

