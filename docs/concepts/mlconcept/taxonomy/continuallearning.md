---
id: continuallearning
sidebar_position: 1
---
# Continual Learning

**Incremental Learning** 혹은 **Continual Learning** 이라고 불림.

새로운 과제를 사람과 같이 지속적으로 학습하는 것. 두 가지 특징을 가지고 있어야 한다.

- Forward Knowledge Transfer
- Backward Knowledge Transfer

## Forward Knowledge Transfer 

새로운 task 를 지속적으로(progressively) 학습하는 과정에서 이전에 학습한 지식을 잊지 않으면서, 새로운 지식을 축적하는 능력을 의미한다. 사람의 경우 이전에 새로운 task와 비슷한 주제를 이전에 학습했다면 쉽게 학습한다. 예를 들어서 자전거를 탈 줄 알면 바이크를 비교적 쉽게 탈 수 있게 된다. 이런 특징은 **Forward Knowledge Transfer** 이라고 불리우며, AI 시스템에도 필요한 능력이다.

AI 시스템은 Transfer Learning 을 통해서, Forward Knowledge Transfer이 이루어진다고 알려져 있다.

## Backward Knowledge Transfer

또한, 사람은 이전에 학습한 task와 비슷한 주제를 새롭게 학습하면 기존 task의 수행 능력도 올라가거나, 최소한 유지된다. 예를 들어서, 바이크를 타는 법을 학습한 후에 자전거를 더욱 잘 타게 될 것이다. 이 특징은 **Backward Knowledge Transfer** 이라 부른다. 

AI 시스템의 문제점은 Backward Knowledge Transfer이 잘 이루어지지 않는다는 점. AI 시스템은 새로운 task를 학습하면 기존 task 수행 능력이 크게 떨어지는 경우가 많다. 이 현상을 모델이 [**Catastrophic Forgetting**](/docs/concepts/mlconcept/catastrophicForgetting.md)을 겪고 있다고 말한다.

1989년에 이미 AI 시스템의 가장 큰 문제는 catastophic forgetting 이라는 논문이 제안되었다. 1989년도의 대표적인 머신 러닝 알고리즘인 Support Vector Machine 부터, 2000년대의 ANN 에 이르기까지 catastrophic forgetting 문제는 해결되지 않았다.