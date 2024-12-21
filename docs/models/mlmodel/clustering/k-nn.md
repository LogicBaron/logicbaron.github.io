---
id: knn
sidebar_position: 1
---
# K-NN

k-nearest neighbor 알고리즘, k-nn 알고리즘은 대표적인 non-parametric supervised clusetring 기법이다.

k-nn 알고리즘은,

- 판별하고 하는 테스트 샘플과 가까운 k 개의 훈련 샘플의 라벨을 확인
- k 개의 훈련 샘플에 대해 더 많은 class 를 테스트 샘플에 할당.

1-nn 알고리즘은 테스트 샘플에 대해 가장 가까운 훈련 샘플의 라벨을 할당하는 방식입니다.

## Pros & Cons

- 장점
  - 매우 단순하며 직관적입니다.
  - feature extraction  이 이루어졌다면, 분류와 회귀 문제 모두에 사용할 수 있습니다.
    - 분류 : 각각의 테스트 샘플에 대해 k-nn 알고리즘을 통해 라벨 할당.
    - 회귀 : k-nn 을 기준으로 feature space 를 각 label 로 할당 가능.
  - non-parametric, non-training
- 단점
  - feature extraction 이 필요.
    - feature extraction 이 이루어져야한다.
    - 데이터를 거리 계산이 가능한 vector 로 표현이 가능해야 하며, vector quality 에 영향을 많이 받는다.
  - 높은 계산 비용
  - 메모리 사용량 많음
    - 모든 데이터 중 가장 가까운 k 개의 데이터를 찾는 것은 매우 계산량이 높은 문제.
  - 차원의 저주
  - 훈련 데이터의 노이즈가 매우 직접적으로 영향을 미침
- 활용
  - 데이터 적고, 단순한 문제
  - 배치성 작업
  - outlier, noise 가 적은 훈련 샘플
  - 모델 학습에 필요한 리소스가 부족할 때