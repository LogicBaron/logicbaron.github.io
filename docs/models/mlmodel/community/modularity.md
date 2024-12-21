---
id: modularity
sidebar_position: 1
---
# Module

네트워크 이론에서 다루는,

전체 네트워크를 이루는 node들 중 일부 node 들로 이루어진 sub-group, cluster 또는 집합을 module 이라고 부른다.

# Modularity

Modularity 는 네트워크 이론에서 네트워크 구집 구조를 측정하는 지표이다. 군집 구조를 평가하기 위해서,

- 랜덤한 연결 상태와 비교하여 
- 현재 module 의 군집 간의 연결(inter-module connetcion) 이 얼마나 약한지,
- 그리고 군집 내부의 연결(intra-module connection) 이 얼마나 강한지 평가한다.

이 때 랜덤 네트워크는 각 노드들의 차수는 고정하고, edge 들만 랜덤하게 설정합니다. 

:::tip

랜덤 네트워크와 비교하지 않고 현재 네트워크의 연결로만 inter-module connection, intra-module connection 을 비교하면,

현재의 군집이 우연의 결과가 아닌 의미 있는 패턴으로 데이터를 나누고 있는지 확인할 수 없습니다. 

예를 들어서, 각 노드의 차수가 매우 높은 노드끼리 연결한다면 당연히 대부분의 경우에서 이 군집의 inter-module connection 이 강할것입니다. 

그렇다고 이 module 이 유의미한 패턴을 찾았다고 확신하기는 어렵습니다.

예를 들어서, SNS 서비스에서 셀럽만으로 네트워크를 구축하는 것은 셀럽과 개인적인 친분이 있는 일반인들을 포함한 유의미한 패턴을 전혀 포착하지 못할 것입니다.
:::

일반적인 network 에서 사용되는 unweighted, undirected 그래프에서 modularity 의 값은 [-1/2, 1] 의 범위를 가지는데,

1에 가까울수록 네트워크가 잘 군집화되어 있음을 - 기대값보다 더 많은 edge 를 그룹 내부에 가지고 있음을 - 의미하며, 음수에 가까울수록 네트워크가 잘 군집되어 있지 않음을 의미한다. 

## Modularity 구하기

Modularity 의 측정하는 방법은 다양한데, 가장 일반적인 방법은 위에서 설명한 것과 같이 랜덤 네트워크와 비교하는 방식입니다.

상술했듯이 각 노드의 차수, 전체 edge의 수를 고정한 상태에서 edge를 랜덤하게 설정합니다.

또한, 현재 노드각 속한 group 역시 고정합니다.

이 상태에서, 현재 네트워크 구조에서 군집 간, 군집 내 연결을 랜덤 네트워크의 군집 간, 군집 내 연결과 비교합니다.


$$
Q = \frac{1}{2m} \sum_{i,j} \left[ A_{ij} - \frac{k_i k_j}{2m} \right] \delta(c_i, c_j)
$$

- $A_{ij}$ : 노드  $i$ 와  $j$  간의 실제 연결 여부 (인접 행렬 값).
- $k_i$ : 노드  i 의 차수 (degree), 즉 연결된 엣지의 개수.
- $m$ : 네트워크 전체의 엣지 수.
- $\frac{k_i k_j}{2m}$ :  $i$ 와  $j$  간의 연결이 무작위일 때의 기대값.
- $c_i$ : 노드  i 가 속한 군집.
- $\delta(c_i, c_j)$ :  $c_i = c_j$ 일 때 1, 그렇지 않으면 0 (같은 군집에 속해 있는지 확인).


# Ref

[1] https://en.wikipedia.org/wiki/Modularity_(networks)