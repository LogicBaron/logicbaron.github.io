---
id: normalization
sidebar_position: 1
---
import normalization_batch from './asset/normalization_batch.png';
import normalization_layer from './asset/normalization_layer.png';
import normalization_instance from './asset/normalization_instance.png';
import normalization_group from './asset/normalization_group.png';
import normalization_group_performance from './asset/normalization_group_performance.png';
import normalization_all from './asset/normalization_all.png';


# Normalization

Normalization 의 의의를 정확하게 이해하기 위해서는 Stochastic Gradient Descent 와 같은 통계적 기법에 대한 이해가 필요합니다. 딥 러닝을 하는 최선의 방법은 모든 데이터 샘플을 한 번에 학습하는 방법입니다. 다만 실제로 연산을 수행하는 하드웨어의 리소스 한계로 그런 방법은 거의 불가능합니다. 그렇기에 현대의 딥러닝에서 일반적으로 사용하는 방법은 전체 데이터 샘플을 훨씬 작은 단위로 나누어서 처리하는, mini-batch 에 기반한 방법론입니다.

mini-batch 기반 방법론을 적절하게 사용하려면 각각의 mini-batch 가 전체 데이터 샘플의 특성에서 크게 벗어나지 않는 것이 중요해집니다. 하지만 모든 mini-batch 를 전체 데이터 특성을 고려해서 구성하는 것은 매우 어려운 작업입니다. 이런 경우 사용할 수 있는 통계적 도구는, 모든 mini-batch 의 통계적 특성을 비슷하게 통일하는 - **정규화** - 입니다.

전체 데이터와 각각 mini-batch 의 통계적 특성을 비슷하게 유지하므로 전체적으로 모델의 학습이 더욱 안정적으로 진행되는 효과를 가져오게 됩니다.

- 수렴 속도 개선
- 모델 성능 향상
- gradient vanish / explode 개선


## Batch Normalization (2015)

> Distribution of Non-linearity inputs remains more stable as the network trains, then the optimizer would be less likely to get stuck in the saturated regime, and the training would accelerate

### Internal Covariate Shift

초기 Batch Normalization 은 Internal Covariate Shift 문제를 해결하기 위해 제안되었습니다.

Internal Covariate Shift 는 딥러닝 모델의 각 레이어 입력의 분포가 매 스텝 달라지는 현상입니다. 특히 딥러닝 모델의 특성상 초기 레이어의 값이 큰 영향을 미칩니다. 나비효과와 비슷하죠. 

레이어의 입력 분포가 매 스텝 달라지는 것은 모델이 매번 전혀 다른 데이터를 보는 것과 비슷하고, 이로 인해 깊은 모델이 될 수록 학습이 어려워진다고 여겨졌습니다. Batch Normalization 은 이런 환경에서 각 레이어의 입력 분포가 크게 튀지 않도록 하기 위해 등장했습니다.

다만, 최근의 연구는 **Batch Normalization 은 실질적인 효과는 Internal Covariate Shift 를 줄이는 것보다는 전체적인 학습이 안정화하는 것**이라고 이야기합니다. 사실 모델의 크기가 커진다면, 각 레이어의 입력 분포가 달라지는 것은 문제가 아닙니다. 입력 분포에 따른 결과 분포의 정합성만 확실하면 괜찮습니다. 

### Batch Normalization

<div style={{textAlign: 'Center'}}>
    <img src={normalization_batch} style={{border: 'solid', width: 500}} />
</div>

Batch Normalization 은 **각 채널에 대해서 전체 배치의 평균, 분산으로 Normalization**을 수행합니다.

- 채널이란, 각 데이터를 표현하는 독립적 element 입니다.
  - 색으로 치면 RGB 가 각각의 채널이며,
  - python list 에서는 각각의 element 의 인덱스가 channel 이라고 볼 수 있습니다.

Batch Normalization 의 큰 장점은 

- 학습 속도 향상
- 초기값 영향 감소
- 학습 안정화

입니다. Batch Normazliation 은 오래된 방법이지만 가장 최근 모델에서도 꾸준히 사용되고 비교되는 강력한 Normalization 기법입니다.

아래 그림은 논문에서 가져온 batch normalization 함수입니다. 

$$
y = \frac{x - \text{mean}[x]}{\sqrt{\text{Var}[x] + \epsilon}} \cdot \gamma + \beta
$$

## Weight Normalization (2016)

Batch Normalization 다음에 나온 논문. 이름은 Normalization 이지만 일반적인 Normalization 과 개념이 약간 다릅니다.

2015년 제안된 Batch Normalization은 두가지 문제점이 있었습니다. 첫 번째로 mini-batch 에 영향을 받으므로 mini-batch size 가 작은 경우 효과를 보기 어려웠습니다. 두 번째로 시간에 따라 입력의 크기 가변적인 순차적 모델 (예: RNN, LSTM) 에서 활용하기 어려웠습니다. 2016년 당시 텍스트 모델의 주류는 LSTM 이었기에 이는 꽤 중요한 문제였습니다.

Weight Normalization 은 mini-batch 의존성을 낮추고 internal covariate shift 의 영향을 줄이기 위해 제안되었습니다. 또한 batch 통계를 계산하지 않으므로 연산 효용도 증가합니다.

Weight Normalization 의 핵심은 Weight Reparameterization 으로, Neural Network 의 weight 를 두 개의 parameter 를 사용해서 표현합니다. 두 개의 parameter 는 각각 weight 의 크기 변수 $g$ , weight 의 방향 벡터 $\bold{v}$ 입니다.

그리고 grdient backbpropagation 과정에서 각 성분을 따로 update 합니다. 

## Layer Normalization (2016)

Layer Normalization 역시 순차적 모델에서 Normalization을 수행하기 위해 제안되었습니다. LSTM 이후로 자연어 처리 분야에서 가장 활발하게 사용되는 layer normalization 기법입니다.

**Batch Normalization 의 한계**
  - one-size mini-batch 에서 batch normalization 의 한계.
  - 분산 학습 환경에서 batch 통계 계산을 위한 calculation overhead.
  - 순차적 모델에서 batch 단위 처리의 한계.

layer normalization 은 샘플 단위의 통계값을 사용해 데이터를 업데이트 합니다.

<div style={{textAlign: 'Center'}}>
    <img src={normalization_layer} style={{border: 'solid', width: 500}} />
</div>

예를 들어서, **batch normalization** 은 (이미지1, 이미지2, 이미지3) 에 대해서 'R(빨강)' 채널의 통계값을 사용해서 활성화값을 normalize 합니다. **layer normalization** 은 (이미지1, 이미지2, 이미지3) 에 대해서 '이미지1' 의 활성화값을 '이미지1' 의 통계값을 이용해서 활성화합니다.

$$
\mu^l = \frac{1}{H} \sum_{i=1}^{H} a_i^l \quad \sigma^l = \sqrt{\frac{1}{H} \sum_{i=1}^{H} \left( a_i^l - \mu^l \right)^2}
$$

## Instance Normalization (2017)

Layer Normalization 은 주로 언어 처리에서 사용되었으며 이미지 처리에서는 여전히 Batch Normalization 이 대세였습니다. 그런데 Classification, Object Detection 과 같은 문제들 이후로 스타일 변환과 같은 task 들이 연구되기 시작하면서 Batch Normalization 의 단점이 제기됩니다. 스타일 변환은 필요한 스타일에 따라 데이터의 통계가 크게 다릅니다.

조금 더 자세한 등장 배경에 대해 이야기해보겠습니다. 스타일 전환 과제에서 중요한 정보는 스타일 이미지의 대비 정보입니다. 원본 이미지의 대비 정보는 오히려 무시되어야 합니다. 그런데 batch normalization 은 전체 이미지의 통계 정보를 활용하므로 각 이미지의 대비 정보를 따로 처리하기 힘들어집니다. 그러므로 스타일 전환에서는 각 이미지의 정보를 따로 다루는 Normalization 이 필요합니다.

Instance Normalization 은 각각의 샘플에 대해 채널의 통계 정보를 따로따로 다룹니다. Batch Normalization + Layer Normalization 처럼 동작합니다.

<div style={{textAlign: 'Center'}}>
    <img src={normalization_instance} style={{border: 'solid', width: 500}} />
</div>

## Group Normalization (2018)

Group Normalization 은 Instance Normalization 과 Batch Normalization 이 혼합된 Normalization 기법입니다.

Batch Normalization 을 수행하되,  전체 mini-batch 가 아닌 Group 단위로 batch normalization 을 수행합니다. Group Normalization 은 Batch size 가 아닌 Group size 에 의해 성능이 결정되므로 train과 inference 과정에서 안정적인 성능을 보장합니다.

<div style={{textAlign: 'Center'}}>
    <img src={normalization_group} style={{border: 'solid', width: 500}} />
</div>

컴퓨팅 성능의 한계로 mini-batch 사이즈를 충분히 키우기 힘들 때는 오히려 Group Normalization 이 더 좋은 성능을 보여준다고 합니다. 

<div style={{textAlign: 'Center'}}>
    <img src={normalization_group_performance} style={{border: 'solid', width: 500}} />
</div>

## 최종

<div style={{textAlign: 'Center'}}>
    <img src={normalization_all} style={{border: 'solid', width: 700}} />
</div>

# Reference
[1] [Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift](https://arxiv.org/pdf/1502.03167.pdf)

[2] [Layer Normalization](https://arxiv.org/pdf/1607.06450v1.pdf)

[3] [Instance Normalization: The Missing Ingredient for Fast Stylization](https://arxiv.org/pdf/1607.08022v3.pdf)

[4] [Texture Networks: Feed-forward Synthesis of Textures and Stylized Images](https://arxiv.org/pdf/1603.03417.pdf)

[5] [Group Normalization](https://arxiv.org/pdf/1803.08494.pdf)