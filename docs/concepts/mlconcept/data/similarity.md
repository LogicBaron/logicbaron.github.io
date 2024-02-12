---
id: similarity
sidebar_position: 3
---
import jaccard from './asset/similarity_jaccard.png';

# Similarity

Distance 와 반대되는 개념으로써, **두 데이터가 얼마나 유사한지**를 나타내는 지표입니다.

대표적으로는 Cosine similarity 가 있습니다. 두 데이터가 이루고 있는 각도를 측정하며 음의 상관관계도 표현할 수 있습니다. 이 글에서는 몇 가지 similarity 지표를 함께 소개하겠습니다.

## Jaccard Index

자카드 계수, Jaccard Index 는 주로 클러스터링에서 두 군집의 유사도를 확인하기 위해 사용합니다. 한 줄로 설명하면, **두 클러스터의 교집합의 크기를 합집합의 크기로 나눈 값** 입니다.

<div style={{textAlign: 'Center'}}> 
    <img src={jaccard} />
</div>

자카드 계수의 특징은, 두 클러스터에 둘 다 속하지 않은 데이터: $(0, 0)$ 은 두 클러스터의 유사도 계산에서 사용하지 않는다는 점입니다. 그러므로 대부분의 element 가 0의 값을 가지는 데이터에 대해서 두 클러스터에 대해서 "둘 다 포함되어 있지 않음" 은 유사함의 척도로 계산하지 않습니다. Jaccard Index 는 이런 이유로 **sparse cluster 혹은 sparse data 의 유사도를 비교하는데 적합**합니다.

참고로, Jaccard Index 은 object detection 에서 사용되는 Intersection of Union 과 개념적으로는 동일합니다.

## Weighted Jaccard Index

Jaccard Index 의 단점은 클러스터의 포함 유무와 같은 **binary data** 에 대해서만 사용가능한 지표라는 점입니다. 하지만 현실의 데이터는 대부분 다양한 크기의 값으로 표현됩니다. 

예를 들어서, 신규 기능 A 와 B 의 유사도를 비교하기 위해서 사용한 유저 그룹을 비교하려고 한다고 생각해봅시다. **Jaccard Index** 는 기능을 사용한 유저의 수만을 비교하지만, 실제로는 각 유저가 기능을 몇 번 사용했는지의 정보도 중요할 수 있습니다. **Weighted Jaccard Index** 는 이렇게 두 그룹을 element 의 중요도(weight)를 고려해서 평가하기 위한 지표입니다.

---
- **Def. Weighted Jaccard Index**

두 데이터 $\bold{x}=(x_1, x_2, ..., x_n)$, $\bold{y}=(y_1, y_2, ..., y_n)$ 에 대해 $x_i, y_i \geq 0$ 일 때, **weighted jaccard index** 는 아래와 같이 정의됩니다.

$$
J_W(x,y) = \frac{\sum_i \min (x_i, y_i)}{\sum_j \max (x_j, y_j)}
$$

Weighted jaccard index 의 단점은, 음의 상관계수를 측정할 수 없다는 점입니다.

---

## Cosine Similarity

두 벡터 사이 각도의 cosine 값으로 유사도를 판정하는 방식이며 주로 normalized vector 를 사용하는 머신 러닝에서 활용됩니다.

$$
\text{cosine similarity}(A, B) := cos(\theta) = \frac{A \cdot B}{||A||\text{ }||B||}
$$


