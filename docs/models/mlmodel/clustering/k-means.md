---
id: kmeans
sidebar_position: 2
---
import kmeans from './assets/kmeans.png';

# K-Means

K-means 알고리즘은 K-nn 과 이름은 비슷하지만 전혀 다른 알고리즘입니다.

K-means 알고리즘에서 K 는 타겟 클러스터의 개수를 의미합니다. K-means 알고리즘의 인사이트는 다음과 같습니다.

- 임의의 K 개의 클러스터를 만들어두고,
- K 개의 클러스터의 평균 임베딩(proto-class) 를 계산합니다.
- 각 샘플을 가장 가까운 클러스터에 할당합니다.
- 클러스터 mean 의 변화가 충분히 작아질 때까지 반복합니다.

## Algorithm

K-mean 알고리즘은 이론적으로는 NP-hard 문제입니다. 그래서 빠르게 클러스터링을 종료하기 위한 heuristic algorithm을 활용합니다. 

(음, mixture of Gaussian Distriution 에 대한 EM-algorithm 과 비슷하다고 서술되어 있음.)

대표적인 K-means 알고리즘은 다음과 같이 구성됩니다.

- 0. Initialization
  - 초기 k 개의 cluster mean 을 initialization 합니다.
  - initialization 방법은 랜덤 initialization 부터 다양함.
  - 대표적인 초기화 방법은 아이디어는 각 클러스터 중심들의 거리가 최대가 되도록 선택하는 방식입니다.
- 1. Assignment Step
  - 각각의 샘플을 cluster 에 할당합니다.
  - 가장 가까운 cluster mean 에 할당하는 방식으로 이루어집니다.
- 2. Update Step
  - 1번의 과정에서 할당된 클러스터 라벨을 기준으로 새로운 Cluster mean 을 계산합니다.
- 3. Convergence
  - Cluster Mean 의 변화가 충분히 작아질 때까지 0~1 과정을 반복합니다.

<div style={{textAlign: 'Center'}}>
    <img src={kmeans} style={{border: 'solid', width: 800}} />
</div>

## Pros & Cons

- 장점 
  - 단순하고 직관적이며, 빠르다.
  - 대량 데이터에서 효율적으로 활용 가능하다.
  - 빠르게 수렴한다.
  - 이미지 압축, 추천 시스템에서 높은 성능을 보여준다.
- 단점
  - 클러스터 개수를 사전 지정해야 한다.
  - distance 기반 알고리즘이므로, 원형 클러스터에만 적합하다.
  - 초기화에 민감하고, 비결정적이다.
  - Cluster의 크기나 밀도가 불균일한 경우 부적합하다.
  - 특성 정규화가 필요하다.
    - 특성 간 스케일이 다르면 유클리드 거리 계산이 왜곡될 수 있으므로,
    - 적절한 거리 함수 또는 정규화가 필요함.
- 활용
  - 고객 세분화
    - 마케팅에서 고객 데이터를 클러스터링 할 때.
  - 이미지 압축
    - 이미지를 압축해 주요색상만 남기는 등의 처리
  - 추천 시스템
  - 문서 클러스터링
  - 데이터 전처리

주로 데이터가 균일하게 부높하며 데이터에 대한 정보가 충분한 상황에서 활용하기 좋습니다.


# Ref

- [1] https://en.wikipedia.org/wiki/K-means_clustering