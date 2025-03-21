---
id: weight_decay
sidebar_position: 1
---
# Weight Decay

Weight Decay 기법은 Overfitting을 완화하기 위한 Regularization의 한 방법입니다. 

고전적인 machine learning 학습에서도 Overfitting 은 고질적인 문제였습니다. 고전 머신러닝에서 Overfitting 은 주로 문제의 난이도에 비해 너무 복잡한 모델을 선택했을 때 발생하게 됩니다.

모델이 문제에 비해 너무 복잡할 경우, 고려할 필요가 없는 detail 까지 모델이 전부 고려하게 됩니다. 

예를 들어서, 고양이인지 강아지인지 판단하는 털의 색깔을 모델이 고려하는 식입니다. 사람은 다양한 학습 데이터를 보고 털의 색깔은 고양이와 개를 구분하는데 도움이 되지 않는다, 라는 결론을 내리지만 모델은 그러지 못합니다. 특히 Weight Deacy 가 등장한 딥 러닝 연구 초창기에는 컴퓨팅 리소스의 한계로 mini-batch 의 크기가 그렇게 크지 않았고 모델이 한 번에 충분한 수의 데이터를 학습하지 못했습니다. 이로 인해 모델은 털의 색깔이 종의 구분에 도움이 안된다는 데이터가 아니라, 털의 색깔은 종에 따라 아주 예민하다고 학습하게 됩니다. **"진한 갈색은 고양이, 약간 진한 갈색은 개"** 와 같은 식입니다. 

그리고 민감해진 모델이 연속된 두 값을 전혀 다른 값으로 처리하기 위해 모델은 고차항의 계수가 매우 큰 함수를 복잡한 함수를 모델링하게 됩니다. 다시 한 번 말하지만 모델이 문제에 비해 복잡해 민감한 함수를 모델링할 수 있을 떄 발생하는 현상입니다.

weight decay 는 보다 단순한 모델을 학습하도록 하기 위해, 모델의 복잡함에 따른 제약을 loss 함수에 추가합니다. 가장 간단한 모델 중 하나인 선형 함수 $f(x) = W^T x$ 의 복잡함을 측정하는 방법 중 하나는 $||W||^2$ 을 측정하는 것입니다. weight decay 는 모든 parameter 의 제곱놈 합을 이용해서 전체 모델의 복잡함을 측정하고, 이를 loss 함수에 제약으로 추가합니다.


### 추가적인 해석

Weight Decay 에서 Weight 크기만큼의 penalty 를 주는 것에 대한 이런 해석도 가능함.

가장 단순한 함수의 형태는 trivial function 입니다. f(x) = 0 으로써, 모든 차항의 계수가 0인 형태입니다. parameter 에 penalty 를 주는 것은 딥러닝 모델이 모델링하고 있는 함수를 trivial 에 가깝게 하는 작용이라고 해석해도 됩니다.

## Weight Decay

모델의 복잡함에 대한 측정값인 $||W||^2$ 의 특정 비율을 원래 loss 에 추가합니다. 이 비율을 의미하는 상수 $\lambda$는 weight decay hyper parameter, 또는 줄여서 weight decay 라고 부릅니다.

$$
L_{total} = L_{origianl} + \lambda \sum_{i} {W_i^2}
$$

이렇게 L2 Norm 을 활용해서 Weight Decay 를 사용하는 것을 L2 Regularization 이라고도 합니다.

