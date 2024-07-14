---
id: crossvalidation
sidebar_position: 2
---
import kfold from './asset/kfold.png';
import mccrossvalidation from './asset/mccrossvalidation.png';

# Cross Validation

Holdout 방식은 데이터를 나누어서 각각 훈련과 학습에 사용하므로 전체 데이터에 대한 모델의 학습 능력과 성능을 객관적으로 평가할 수 없습니다. 사실 평가 데이터와 학습 데이터가 명확하게 구축되지 않은 실제 문제에서 직접적으로 모든 데이터를 활용한 학습과 평가를 진행하기 어렵습니다.

**Cross Validation**은 간접적으로 이 문제를 해결하는 기법입니다. Cross Validation 기법들은 공통적으로 데이터셑을 여러 번 나누어서 훈련셑과 학습셑으로 사용합니다. 이 과정에서 각 데이터는 학습에 사용되기도 하고 평가에 사용되기도 합니다.

전체 데이터를 한 번에 학습에 사용하고, 적절한 평가셑을 사용해 평가하는 방식이 아니기에 **간접적**이라는 표현을 썼습니다. 그렇지만 Cross Validation은 가지고 있는 데이터셑으로 모델을 다양한 관점에서 학습하고 평가함으로써 모델의 **generalization, robustness 능력**을 평가해볼 수 있습니다.

## K-fold Cross Validation

K-fold cross validation은 가장 기본적인 형태의 cross validation 방식입니다.

<div style={{textAlign: 'Center'}}>
    <img src={kfold} style={{border: 'solid', width: 500}} />
</div>

k-fold cross validation 는 데이터를 k 개의 그룹(fold) 으로 나눕니다. 

k 개의 fold 중 하나의 fold 가 각각 한번씩 평가셑으로 사용되며, 나머지 k-1개의 fold 가 실험셑으로 사용됩니다. 총 k 개의 모델을 학습시키고 각 모델의 metric 평균을 활용해 모델의 최종적인 성능을 평가합니다. 

k-fold cross validation 은 **모든 데이터가 한 번씩 평가에 사용된다는 점**에 그 의의가 있습니다. 

다만 imbalanced dataset의 경우에는 어떤 fold 에만 데이터가 포함되어 있을 수 있습니다. 이 경우에 해당 클래스가 평가에 사용되면 모델은 해당 클래스의 정보를 학습할 수 없고 이로 인해 적절한 평가가 이루어질 수 없습니다. 그러므로 데이터의 imbalance 가 심하거나 데이터셑의 크기가 작을 경우 startified sampling을 활용한 **startified k-fold cross validation**을 활용해야합니다.

:::tip[Summary]

k-fold cross validation은 **모든 데이터를 한 번씩 평가**한다.

:::

### Leave One Out Cross Validation

k-fold cross validation scenario 에서 전체 데이터의 크기가 k일 때, 즉 각각의 fold가 하나의 데이터만을 포함하는 경우를 **leave one out cross validation** 이라고 합니다. 데이터셑의 크기가 매우 작을 때 사용합니다.

## Monete Carlo Cross Validation

k-fold cross validation 은 데이터셑의 크기가 정해져있는 경우 - 특히 작은 사이즈의 데이터셑인 경우 - 유용한 평가방법입니다. 반대로 데이터셑의 크기가 너무 거대하거나, 정해지지 않은 경우에는 k-fold 방식을 사용하기 어렵습니다. 

Monete Carlo Cross Validation은 Monte Carlo Sampling을 이용해 데이터셑을 구축해, Cross Validation을 수행합니다. 

<div style={{textAlign: 'Center'}}>
    <img src={mccrossvalidation} style={{border: 'solid', width: 500}} />
</div>

Monte Carlo Cross Validation 은 먼저 전체 데이터풀에서 충분한 데이터를 샘플링합니다. 그리고 이 데이터를 hold out 기법으로 학습 데이터셋과 훈련 데이터셋으로 나누어서 모델의 학습 - 평가를 진행합니다. 이 과정을 **샘플링 과정부터 랜덤 시드를 달리하며 여러 번 진행**하여 각 trial의 모델 성능 평균값을 최종 모델 성능으로 사용합니다.

Monte Carlo Cross Validation은 K-fold 방식과 달리 모든 데이터를 한 번씩 평가하는 것이 보장되지 않습니다. 오히려 등장 확률이 높은 데이터는 여러 번 검증이 이루어지고, 등장 확률이 낮은 데이터는 아예 검증이 이루어지지 않을 수 있습니다. 

Monte Carlo 방식은 **학습 또는 평가에 사용하는 데이터의 분포는 실제 데이터의 분포와 비슷해야 함**을 강조합니다. 당연히, 샘플링하는 데이터의 수가 많을수록 **샘플링된 데이터의 분포가 실제 데이터와 유사할 것이고 이로 인해 보다 정확하게 모델을 평가**할 수 있을 것입니다. 그에 따른 trade-off 로 샘플링, 학습 그리고 평가에 소요되는 시간과 리소스가 크게 증가할 것 입니다.

:::tip[Summary]

Monte Carlo Cross Validation은 **실제 분포와 유사한 평가 데이터셋에서 평가**한다.

:::

# Conclusion

Cross Validation 과 같은 방식은 **전체 데이터에 대한 모델의 generalization, robustness 를 포함한 모델의 성능**을 간접적으로 평가할 수 있습니다. 또한 Cross Validation 방식은 학습 데이터, 평가 데이터의 분포에 따른 모델의 성능을 관찰함으로써 noisy data 또는 outlier 등을 추적하는 것에도 큰 도움이 됩니다.

# Reference

1. [머신 러닝의 모델 평가와 모델 선택, 알고리즘 선택 – 2장. 부트스트래핑과 불확실성](https://tensorflow.blog/%EB%A8%B8%EC%8B%A0-%EB%9F%AC%EB%8B%9D%EC%9D%98-%EB%AA%A8%EB%8D%B8-%ED%8F%89%EA%B0%80%EC%99%80-%EB%AA%A8%EB%8D%B8-%EC%84%A0%ED%83%9D-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%84%A0%ED%83%9D-2/)