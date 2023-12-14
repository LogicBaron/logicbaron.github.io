---
id: mhainitialization
title: MHA Initialization
sidebar_position: 10
---
# Multi Head Attention Initialization

출처는 알 수 없는데, 다른분이 정리해주신 내용을 정리합니다.

## Random Initialization?

전체 weight 를 random initialization 해도 FFN 과 같은 단순한 linear layer 같은 경우에는 학습 뒤 비슷한 좋은 결과를 얻을 가능성이 있습니다. 하지만 attention 에 해당하는 weight 들은 그렇게 쉽지가 않습니다. 

Attention 은 Random initialization 에 따라 결과가 크게 달라지게 되는데, 이 문제를 해결하기 위해서 적용되는 방법이 multi-head attention 입니다. 여러개의 random initialization 을 만들어서 좋은 녀석이 나타날 확률을 높이는 식입니다.

이에 대한 관련 연구가 굉장히 많습니다. 예를 들면 head 단위로 pruning 을 해 본 연구드도 많고 header 마다 weight 들의 특징이 매우 다르다는 연구도 있습니다. 

## Concatenation between headers?

attention 결과물을 summation 하지않고 concatenation 을 하는 이유는 뭘까요?

위에서 말했듯 attention 결과물은 initialization 에 따라 크게 달라집니다. summation 은 안 좋은 결과와 좋은 결과를 전부 섞어버리는 연산입니다. concatenation 후 linear layer 를 거치는 방식은 모델이 좋은 attention 결과에 집중할 수 있도록 해줍니다. 

즉, 태생적으로 header 들은 확률적으로 매우 좋거나 매우 나쁠 수 있다는 점을 모델 transformer 구조 고민에 녹아 있습니다.

## Summation vs Concatenation?

그럼, 모델 구조에 대해 두가지 Intuition 을 얻을 수 있습니다.

- Sum 보다 Concat 연산을 적용한 결과 모델의 성능이 더 좋아진다면 모델 구조상 각 branch 의 결과 분포가 크게 다를 확률이 높다.
- attention 은 Initialization 에 FFN 에 비해 매우 예민하다.

## Ref
- [weight initialization 관련 실험 정리 github](https://github.com/bigscience-workshop/bigscience/blob/master/train/lessons-learned.md?fbclid=IwAR3b4LBTtjcSrXLx0YLqL1KD2u9YUVCFOxj3Ik2U3lf7vMDo4OK5pBnYWyU#using-a-formulaic-std-init)