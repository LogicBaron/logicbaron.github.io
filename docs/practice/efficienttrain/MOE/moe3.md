---
title: Efficient MOE
sidebar_position: 4
tags: [MOE, Transformer]
---
# Efficient Large Scale Language Modeling with Mixtures of Experts

Large Model 에서 MOE 의 적용에 따른 pros / cons 를 잘 분석한 논문. 주요 논점만 파악하면 되는 논문이라고 생각해서 간단하게 요약하려 함.

## 실험 설계

- GPT-3
- top-2 expert / 512 experts
- capacity factor 를 이용한 gating regularization..
- expert model 에서 사용하는 lr 을 $\frac{1}{/sqrt{E}}$ 만큼 줄임.
  - [SwitchFormer](/docs/practice/efficienttrain/MOE/switchformer.md) 에서는 학습 불안정을 해결하기 위해 expert weight 를 재설정했으나, 필요없다고 주장.
  - expert 가 처리하는 배치 사이즈가 $E$-times 작기 때문에, lr 도 같이 줄여주니까 해결되었다고 함.
- 300B 토큰 학습. 컨텍스트 크기는 20248 tokens.

## 학습 및 평가 데이터.


## 주요 결과
