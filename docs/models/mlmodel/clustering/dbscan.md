---
id: dbscan
sidebar_position: 3
---
# DBSCAN
## Density-based Spatial Clustering of Applications with Noise

자세한 내용은 추후 정리 예정.

DBSCAN은 밀도 기반 클러스터링 알고리즘으로, 데이터 포인트의 밀도에 따라 클러스터를 정의합니다. 특정 밀도 이상으로 연결된 데이터 포인트를 같은 클러스터로 묶으며, 밀도가 낮은 데이터 포인트는 이상치(노이즈)로 간주합니다.

DBSCAN의 핵심 개념
	1.	핵심 포인트(Core Point):
	•	반경 $\epsilon$ 내에 최소 minPts 이상의 데이터 포인트가 있는 점.
	2.	경계 포인트(Border Point):
	•	핵심 포인트의 $\epsilon$-반경 내에 있지만, 자기 자신은 핵심 포인트가 아닌 점.
	3.	노이즈 포인트(Noise Point):
	•	어떤 클러스터에도 속하지 않는 점.
	4.	매개 변수:
	•	$\epsilon$ (Epsilon): 클러스터링의 반경(거리 기준).
	•	minPts: 클러스터를 형성하기 위한 최소 포인트 수.


DBSCAN의 장점
	1.	**비구형 클러스터 탐지 가능**
	•	DBSCAN은 원형 클러스터에 국한되지 않고, 복잡한 모양의 클러스터도 잘 탐지합니다.
	2.	이상치(outlier) 처리 가능
	•	밀도가 낮은 데이터를 자동으로 노이즈로 간주하여 이상치를 분리.
	3.	**클러스터 개수를 사전에 지정할 필요 없음**
	•	k-Means와 달리 클러스터 수를 사전에 정의하지 않아도 됩니다.
	4.	밀도가 다른 클러스터 탐지 가능
	•	클러스터 간 밀도가 다를 경우에도 적합.
	5.	데이터 크기에 대해 확장 가능
	•	인덱싱 구조(예: k-d 트리)를 활용하면 대규모 데이터에도 효율적으로 동작.

DBSCAN의 단점
	1.	**매개변수 선택이 민감**
	•	$\epsilon$과 minPts의 값을 잘못 설정하면 클러스터링 성능이 저하될 수 있음.
	2.	비균일 밀도에 부적합
	•	클러스터 간 밀도 차이가 너무 크면 성능이 떨어질 수 있음.
	3.	고차원 데이터에서 성능 저하
	•	유클리드 거리를 기반으로 하므로, 고차원 데이터에서는 차원의 저주로 인해 정확도가 떨어질 수 있음.
	4.	메모리 소모
	•	밀도 계산 과정에서 많은 메모리를 소비할 수 있음.
	5.	모든 클러스터를 동일한 밀도 기준으로 판단
	•	다중 밀도 기준이 필요한 경우에는 적합하지 않음.

DBSCAN이 적합한 상황
	1.	복잡한 클러스터 구조 탐색
	•	클러스터가 원형이 아니거나, 경계가 뚜렷하지 않은 경우 적합.
	2.	이상치 탐지
	•	이상치를 분리하여 분석하거나 제거하고자 할 때.
	3.	클러스터 개수를 사전에 알 수 없을 때
	•	k-Means처럼 클러스터 개수를 정하기 어려운 데이터셋에 적합.
	4.	지리적 데이터 분석
	•	지리 정보(위도, 경도 등)와 같은 공간 데이터의 밀도를 기준으로 클러스터링할 때.
	5.	노이즈가 포함된 데이터
	•	노이즈를 제외한 밀도 중심 클러스터를 찾는 데 적합.
	6.	다양한 밀도 분포를 가진 클러스터를 탐지하고자 할 때

DBSCAN의 활용 분야
	1.	이상치 탐지
	•	금융 거래, 네트워크 보안 등에서 이상치 탐지.
	2.	지리 정보 분석
	•	지도 데이터를 분석하여 밀집 지역 찾기.
	3.	이미지 분석
	•	이미지 데이터에서 밀도 기반으로 물체를 감지.
	4.	사회 네트워크 분석
	•	유사한 활동을 가진 그룹 찾기.
	5.	생물정보학
	•	유전자나 단백질 데이터를 클러스터링.
	6.	소셜 미디어 데이터 분석
	•	위치 기반 소셜 네트워크 데이터에서 밀도 높은 사용자 그룹 탐지.

## 결론

DBSCAN은 밀도 기반 클러스터링 알고리즘으로 복잡한 클러스터 구조를 탐지하거나 노이즈 처리가 필요한 데이터에 적합합니다. 하지만 $\epsilon$ 과 minPts 설정이 중요하며, 고차원 데이터나 밀도가 균일하지 않은 경우에는 성능이 저하될 수 있습니다. 데이터를 시각적으로 분석하고, 적절한 매개변수를 설정하여 사용하는 것이 중요합니다.