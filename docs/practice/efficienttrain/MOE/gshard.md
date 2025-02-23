---
title: GShard
sidebar_position: 2
tags: [MOE, Transformer]
---

# GShard

## Motivation

Transformer 구조가 seq2seq 처리의 de-facto가 되고 scaling law가 주목받으면서 데이터의 크기와 함께 모델의 크기도 늘리기위한 시도가 많이 이루어졌다. 당시에도 multi-device training 은 이루어졌지만 Device 의 한계를 넘기기 힘들었다.

이전까지 RNN-base 모델의 구조를 쪼개고, 병렬화하여 효율화하려는 시도가 있었는데 - [LSTM 에 MOE 를 적용](/docs/practice/efficienttrain/MOE/moe1.md) : GShard 논문은 Transformer 계열에 그러한 시도들을 적용한다. (당연히, 그 중 MOE 를 적용한다.)

GShard 논문은 두 가지 어려움을 이야기한다.

- **학습의 어려움**
  - Mixture of Experts 의 특성 상 다양한 Experts 가 골고루 학습해야 한다.
  - Gating Rule ( Expert 선택 방법 ) 을 학습에 의존하는 방식에서 이를 달성하기 어렵다.

- **리소스 활용의 어려움**
  - Transformer MOE 방식은 근본적으로 tensor를 일부 expert로 보내고, 다시 expert의 결과를 조합하는 과정이 필요하다.
  - Multi-Device 환경에서 이 과정을 효율적으로 구현하기 어렵다.
  - 그 외에도 구현 상의 어려움이 다양하게 존재한다.

## Model Architecture

![alt text](image.png)

Transformer 구조에서 기본적인 MOE 알고리즘은 다음과 같다.

- 기본적으로 MHA Layer 다음의 FFN Layer가 Expert가 된다. 
- Routing algorithm은 token 단위로 적용된다.
  - GATE 함수의 결과는 Expert 별 score의 형태다.
  - GShard 논문에서는 최종적으로 top-2 experts를 사용한다.

$$
\mathcal{G}_{s,E} = \text{GATE}(x_s) 
$$

- 즉, MHA 를 통과한 각각의 token tensor가 선택된 Expert FFN Layer 를 통과한 뒤,

$$
\text{FFN}_e(x_s) = w_{o_e} \cdot \text{ReLU}(w_{i_e} \cdot x_s)
$$

- 최종적으로 모든 experts의 결과를 합쳐 최종 output을 생성한다.

$$
y_s = \sum_{e=1}^{E} \mathcal{G}_{s,e} \cdot \text{FFN}_e(x_s)
$$

## 학습 : Balanced Load

GShard 구조: Transformer MOE - 에서는,

- 단일 Routing Alogirhtm 결과로 매우 일부 Experts 만이 활성화되면서,
  - 단순히, top-k Experts 활성화로 해결한다.
- 전체적으로는 다양한 Exeprt FFN Layer가 골고루 학습되는 것이 중요하다. 

GShard에서 사용하는 Routing Algorithm 은 $\text{GATE}()$ 함수인데, 이 함수는 linear - softmax 구조를 통과한 gating score에 기반한다. 이는 모델의 학습 과정에서 일부 experts만이 집중적으로 학습될 우려가 있음을 시사한다. **균형있게 expert를 학습시키기 위해 load를 균형있게 처리하는 것**은 최근까지의 MOE에서도 중요한 이슈다. 

Load Balancing 은 학습 효용성 면에서도 중요합니다. load balancing이 잘 이루어지지 않아, mini-batch에서 대부분의 토큰이 1~2개의 expert로 라우팅된다면 그 시간동안 다른 expert가 점유하고 있는 리소스는 사용되지 않습니다. 그러므로 mini-batch를 처리하는 동안 모든 expert가 골고루 사용되는 것은 학습 효용성면에서도 매우 중요합니다.

GShard 논문은 Load Balancing을 위해 네 가지 기법을 사용합니다.

- **Expert Capacity**
  - Expert가 처리할 수 있는 최대 토큰수의 상한선. 
  - Expert Capacity를 초과한 expert 는 새로운 토큰에 대한 gating 함수 결과가 0 으로 조정됨.
  - 전체 토큰 수가 $N$, 전체 Expert 수가 $E$ 라면 Expert Capacity 는 $O(N/E)$ 로 조정됨.
- **Local Group Dispatching**
  - mini-batch 를 $G$ 개의 그룹으로 나눈다. 한 그룹의 토큰 수는 $S=N/G$.
  - 한 그룹은 토큰을 균일하게 라우팅한다. 한 expert 가 처리하는 토큰 수는 $S*E/2$. (토큰은 2개의 expert를 통과.)
- **Auxiliary loss**
  - Expert Capacity를 사용하더라도 gating 함수의 결과가 집중되는 것은 위험하다.
  - 이는 gating 함수 결과 score 의 순위대로 expert 가 순서대로 처리되는 결과로 이어지게 됨.
    - top-1 expert 로 모든 토큰을 보내다가, expert capacity가 차면 top-2 expert 를 채우는 식.
  - 그러므로, gating 함수 자체가 균일하게 학습할 수 있도록 loss 함수를 도입함.
    - 이 함수의 목적은 토큰의 처리량이 균등하게 분산되는 것이므로, 이를 위해서 **각 expert가 처리한 토큰 수의 제곱합이 최소**가 되도록 한다. (mean-square)
    - $l_{aux} = m_e ( c_e / S )$.
      - $c_e$ 함수는 expert 가 현재 처리한 토큰 수.
      - $c_e$ 는 differentiable 값이 아니다. ( discrete 값으로, 연속이 아님. )
      - $m_e = \frac{1}{S} \sum_{s=1}^{S} softmax(w_G \cdot x_S) $. 즉 게이팅 함수 결과의 평균을 계산.
      - 이는 실제로 모델이 처리한 토큰양의 근사치. $ m_e \sim c_e / S $
      - 결과적으로 $ l_{aux} \sim \left( {c_e / S} \right) ^ 2 $
- **Random Routing**
  - 마지막으로, top-2 routing 과정에서 2순위 라우터의 게이팅 점수가 매우 낮을 경우에는 랜덤 expert 를 선택하도록 함.

# 기술적 구현

GShard 논문은 매우 하드웨어에 밀접한 코딩을 합니다. 

먼저 XLA compiler 를 확장하여 Sharding 을 구현하고 통신 비용을 최적화합니다.

또한 SPMD 방식을 사용하여 사용자의 최소 주석으로 텐서를 자동으로 분할하고 병렬화하도록 관리합니다.

사실 기술적인 구현 부분에서는 약해서, 기회가 될 때 추후에 더 정리하려고 합니다.

# Ref

1. [GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding](https://arxiv.org/pdf/2006.16668)