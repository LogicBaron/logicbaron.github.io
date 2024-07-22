---
id: bootstrap
sidebar_position: 3
---
# Bootstrap

bootstrap 기법은 머신 러닝 분야에서 다양한 이유로 활용하는 기술입니다. 주로 앙상블 모델을 학습시켜 전체적인 predictor의 성능을 향상시키거나 데이터를 정제하기 위해 사용합니다. 

어떻게  bootstrap 이 그런 역할을 할 수 있을까요?

bootstrap 기법의 가장 근본적인 역할은 **데이터에 대한 추론(Estimates)의 통계적 특성을 추정**하기 위해 사용됩니다. 가장 많이 사용하는 Estimates 인 표본 평균을 생각해봅시다. N개의 데이터를 활용한 표변 평균에 대해서 일반적인 접근으로는 그 분산이나 신뢰도를 파악하기 어렵습니다. bootstrap 방법은 데이터를 여러 개의 subset으로 나누어서 각각의 estimator - 표본 평균; 을 계산합니다. 그 후 여러 subset 의 estimates 값을 활용해 그 통계값을 추정할 수 있습니다.

data pool 의 distribution에 대한 정보가 있으면 posterior inference를 활용할 수 있습니다. bootstrap은 데이터의 분포에 대한 충분한 인사이트 또는 정보가 없을 경우 효과적으로 활용할 수 있습니다.

당연히, 모델과 같은 predictor 그리고 (정제를 위한) 데이터의 신뢰도는 일종의 Estimator 역할을 합니다. bootstrap 은 **estimates 의 통계적 특성을 조금 더 정확히 파악**할 수 있게 해주고 **이 통계적 특성을 활용해 전체적인 estiamtor 의 신뢰도를 높일 수 있습니다**. 