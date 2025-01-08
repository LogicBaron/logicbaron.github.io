---
id: scaling
sidebar_position: 2
---
# Scaling Law

Scaling law 는 모델의 크기, 그리고 학습 데이터의 크기가 커진다면 충분한 컴퓨팅 자원이 있다는 전제 하에 모델의 성능이 예측 가능한 방식으로 개선된다는 개념.

Stupid backoff 에서 시작해 최근까지의 연구 결과에서, OpenAI 와 Deepmind 는 scaling law 를 아래와 같이 정리했다. 수식을 보면 알수 있듯이, 모델 크기와 데이터 크기의 지수배에 비례해서 loss 는 감소한다.

$$$
\text{Loss} \propto (\text{Model Size})^{-\alpha} + (\text{Data Size})^{-\beta} + \epsilon
$$$

언어 모델의 발전과 함께 Scaling law 의 발전을 알아보자.

# Smoothing technigque

Scaling 기법은 n-gram 을 사용하는 LM 부터 고려되었다. 당연히, n-gram 과 같이 전통적인 통계 기법 기반 방법에서는 그 중요성이 오히려 더 부각되었을 수 있을 것 같다. 

## Stupid Backoff


통계 기반 n-gram 방식은 가장 큰 문제점은 단어의 유사성이 고려되지 않는다는 점이다. 충분히 데이터가 크다면 고려하지 않아도 좋은 성능을 보여줄 수 있지만 분명한 한계점이 존재함은 인식할 수 있다. Stupid backoff 방식은 충분히 큰 데이터에서 동작할 수 있는 개념. Stupid Backoff 방식은 아래와 같이 동작한다.

- n-gram 을 확인할 수 없으면, (n-1)-gram 의 확률에 penalty 를 곱한 값을 사용.

backoff 라는 명명의 의미가 여기서 나온다. n-gram 의 문제를 풀기 위해 더 짧은 (n-1)-gram 문제로 돌아간다.(back-off)

Stupid-backoff 방식의 장점은 쉽고 빠르다는 점이다. 구현 역시 매우 쉽지만, Stupid-backoff 방식의 단점은 작은 데이터셑에서 불안정하며 penalty 설정에 대한 의존성이 크다는 점. 특히 Web-scale 데이터에서 좋은 효율을 보여준다.

## Kneser-Ney smoothing

smoothing 이라는 이름에 걸맞게, kneser-ney smoothing 방식은 n-gram 의 확률을 어느정도 조정한다. 너무 자주 등장한 n-gram 의 확률은 줄여서 너무 조금 등장한 n-gram 에 재분배한다.

$$$
P(w|h) = \max(c(h, w) - D, 0) / c(h) + \lambda(h)P_{\text{backoff}}(w|h{\prime})
$$$

h 는 w 이전 N개의 word set, 그리고 h' 은 w 이전 N-1 개의 word set 입니다.

이 방식에 대해 조금 잘 알아보면, 다양한 문맥에서 반복될수록 강한 패널티를 받음을 확인할 수 있습니다.

예를 들어서 'of' 와 같은 단어는 수없이 많은 단어에서 반복적으로 fixed penalty 를 받습니다. 그리고 그 penalty 가 정말 다양한 (n-1)-gram 에 퍼지게 됩니다.

하지만 매우 특이한 케이스, 예를 들어서 square pants 'spongebob' 같은 경우에는 penatly 를 받는 횟수도 적고 그 penalty 의 분배역시 매우 협소하게 이루어집니다. 

그러므로 knser-ney smoothing 은 일반적인 텍스트의 경우 강한 패널티를, 새롭거나 창의적인 키워드에는 적은 penalty를 주는 방식입니다. LLM 이사용하는 temperature 의 방식과 비슷합니다.

## LSTM

LSTM 에서 파라미터의 크기를 1B 까지 증가시켜 큰 효과를 봄.

## Transformer

GPT-3 에서 175B parameter 를 사용해 significant breakthrough 달성.

## Power Laws

<A constructive prediction of the generalization error across scales>  에서 모델 크기와 데이터셑의 크기와 시스템 성능간에 지수 관계가 성립함을 확인. <Scling laws for neural language models> 에서 transformer 구조에 power law 가 강하게 적용됨을 확인함.

## Scaling laws on LLM

<Emergent abilities of large language models> 에서 LLM 에서도 Scalining law 가 적용되며 그 효과가 LR scheduling 에 의해 극대화 될 수 있음을 증명함.

