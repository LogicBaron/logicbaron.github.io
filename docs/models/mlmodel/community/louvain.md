---
id: louvain
sidebar_position: 2
---
import louvain_0 from './assets/louvain_0.png';
import louvain_1 from './assets/louvain_1.png';
import louvain_2 from './assets/louvain_2.png';

# Louvain Community Detection

2008년에 발표되었지만, 현재까지도 가장 유명하고 가장 많이 사용되는 Community Detection 알고리즘이다.

Louvain Method 는 Greedy Algorithm 을 활용해 modularity 를 최적화합니다. 그러나 모든 조합을 고려하여 Greedy Algorithm 을 반복하는 것은 거대 네트워크에서 매우 비효율적이므로 Louvain method 는 hueristic algorithm을 사용합니다.

Louvain Algorithm 을 요약하자면,

- 1) 전체 네트워크를 고려하지 않은 local optimization fo modularity 를 통해 작은 community 를 먼저 찾아낸다.
- 2) 작은 네트워크를 하나의 노드로 취급한다.
- 1)~2) 를 modularity 가 더이상 증가하지 않을 때까지 반복한다.

## Pros / Cons

- 장점 
  - 효율적, $O(NlogN)$
  - 군집의 개수를 설정해줄 필요가 없음.
  - modularity 를 최적화하므로, 군집화 품질이 높다.
  - 가중치 네트워크에서도 동작함.
  - 계층적 군집 구조를 지원.
- 단점
  - Resolution Limit
    - 작은 군집을 무시하거나 병합해서, 작은 규모의 군집 탐지를 잘 못한다.
  - 비결정론적 결과.
    - 알고리즘 실행 결과가 초기 조건에 따라 달라질 수 있음.
  - 네트워크가 지나치게 클 경우, 알고리즘 수행 시간이 오래 걸릴 확률이 높음.
  - 계층적 군집 구조를 이해하거나, 활용하는데 한계가 있을 수 있다.
- Louvain 알고리즘의 활용하면 좋은 경우.
  - 대규모 네트워크
  - 자동 군집화가 필요한 경우
  - 가중치 네트워크
  - modularity 가 핵심 지표인 경우.


## Louvain Network Example 

Wikipedia 를 참조했습니다.

- 0. Initialization 
  - 모든 노드를 각각의 community 로 분리합니다. 

<div style={{textAlign: 'Center'}}>
    <img src={louvain_0} style={{border: 'solid', width: 200}} />
</div>

- 1. modularity 를 가장 증가시키는 방향으로 node grouping.
  - 모든 노드에 대해, 각각의 노드를 이웃한 community 에 포함시키는 경우 변화하는 modularity 를 계산합니다.
  - modularity 가 증가하면 grouping 

<div style={{textAlign: 'Center'}}>
    <img src={louvain_1} style={{border: 'solid', width: 200}} />
</div>

- 2. Community 를 단일 노드로 치환.
  - Graph aggregation 을 수행해 Community 를 단일 노드로 치환합니다.
  - 0번 상태가 됩니다.

- 3. 1~2를 반복합니다.

<div style={{textAlign: 'Center'}}>
    <img src={louvain_2} style={{border: 'solid', width: 200}} />
</div>

### Pseudo Code

```
function louvain(Graph G, Partition P):
    do 
        P <- moveNodes(G, P)
        done <- length(P) == length(V(G)) # every community is a single node, despite running moveNodes
        if not done, then:
            G <- aggregateGraph(G, P)
            P <- singletonPartition(G)
        end if
    while not done 
end function

function singletonPartition(Graph G):
    return [{v} | v is in V(G)] # each node is placed in its own community
end function
```

# Ref

- [1]. https://en.wikipedia.org/wiki/Louvain_method