---
id: GPT
sidebar_position: 1
---
import gpt from './assets/gpt.png';

# GPT

## GPT-1

GPT-1 이 등장하기 이전 언어 모델 학습의 주요한 Challenge 는 Unsupervised learning 이었습니다. (Bert 등장 이전).

라벨링이 어려운 텍스트 데이터를 활용한 Unsupervised learning 의 물꼬는 transformer 가 틔었습니다. Transformer 는 훌륭하게 라벨이 없는, 텍스트 그 자체만으로 텍스트의 특성을 이해할 수 있는 모델링의 방향성을 제안하였습니다. 2017년에 나온 논문이 이 글을 작성하는 2024년 12월, LLM 이 도래하는 시대까지도 여전히 핵심 인사이트로 작용하고 있으니 attention is all you need 에서 제시하는 방향성은 정말, 위대하다고 생각됩니다.

GPT-1 은 transformer 에서 Encoder 는 제외하고 Decoder 만을 학습시킵니다. 

- GPT-1 의 학습은 next word prediction 으로 이루어짐. 이는 decoder 만으로 충분히 수행 가능.
  - 반면 BERT 의 경우 전체 문맥에서 masked token 을 예측하므로 encoder 를 함께 사용함.
- 모델 구조가 간결해짐.

GPT-1 은 Decoder 12개를 쌓아올린 구조를 채용하고 있습니다. 

#### Pretraining

GPT-1 의 학습 방법의 핵심은 next word prediction 입니다. 즉 이전 입력 시퀀스를 보고 다음 단어를 예측하는 방식으로 학습이 이루어집니다.

$$
 P(w_1, w_2, …, w_T) = \prod_{t=1}^{T} P(w_t | w_1, w_2, …, w_{t-1}) 
$$

토크나이저는 주로 WordPiece 또는 BPE를 활용합니다.

#### Supervised Fine Tuning (SFT)

next word prediction 으로 pre-train 이 완료되면 task에 맞게 fine-tuning 을 진행해야 합니다. 

<div style={{textAlign: 'Center'}}>
    <img src={gpt} style={{border: 'solid', width: 800}} />
</div>

GPT-1 은 대부분의 실험에서 당시 대세이던 LSTM 에 비해 훨씬 좋은 성능을 보여줬습니다.

#### Contribution

GPT-1 은 강력한 pre-training 방법을 제안합니다. 이로인해 fine-tuning 효율성 역시 매우 높습니다. 그리고 그 자체의 높은 성능 역시 강점이었습니다.

다만 transformer 구조에서의 너무 높은 연산량이 GPT-1의 가장 큰 단점이었습니다. LSTM 이 대세이던 시대에서 GPT-1 의 계산량은 당시 GPT-1이 주류가 되지 않았던 이유를 설명하기 충분했습니다. 

##  GPT-2

GPT-2 는  GPT-1 의 구조를 유지하면서 모델 크기ㅗ아 데이터 양을 크게 확장했습니다.

GPT-1 의 모델 파라미터 수는 1.7억인데, GPT-2 의 모델 크기는 15억 입니다.

GPT-1 의 데이터 규모는 약 7GB의 책자 Corpus 였는데, GPT-2 에서는 웹 크롤링을 통한 40GB 데이터를 사용합니다.

GPT-2 에서는 특정 태스크에서 사전 학습 없이도 높은 성능을 보여주는, zero-shot learning 에서 강점을 보여줍니다.

## GPT-3 

글이 너무 좋아, 첨부로 대신합니다.

https://ffighting.net/deep-learning-paper-review/language-model/gpt-1/

위 링크 글을 한 번 더 짧게 요약해 두려고 합니다.

GPT-1 은 SFT 없이 다양한 task 응용력이 떨어졌습니다. GPT-2 는 zero-shot learning 을 해결하며 충분한 데이터와 모델 사이즈가 있다면 학습 없이 문제를 해결할 수 있다는 가능성을 제시합니다.

GPT-3 에서는, 별도 학습없이 새로운 task를 해결할 수 있는 in-context learning 과 zero-shot learning 이 주요 challenge 였습니다.

### Background

GPT-3 가 발표된 시점에서 PLM 의 주류는 BERT 였습니다. BERT 는 GPT-2 에 비해 엄청난 장점을 하나 가지고 있었습니다. 모델 크기가 작다는 점이었습니다.

그리고 이 당시의 언어 모델이 모두 가지고 있던 공통적인 단점이 있었습니다. 언어 모델들은 언어 이해려깅 있었지만, task 이해력이 전혀 없었습니다. 특정 task 에 언어 모델을 적용하기 위해서는 fine-tuning 이 필수였습니다. GPT-3 는 이 단점, task 유연성을 개선하는 것에 집중합니다. 

### Training

GPT-3 논문은 구체적인 모델 구성을 설명하지 않습니다. 대신 세 가지 in-context learning 방법을 제안합니다. 이는 모델의 구성보다, 데이터의 구성이 중요해지는 시대에 접어들었음을 의미합니다. 뭐가뭐가 됐든 175B 짜리 대규모 모델 GPT-3 입니다.

참고로 최근(25년)에는 데이터의 구성의 시대가 끝났다는 이야기가 들립니다. 이제는 task에 맞는 적절한 데이터 구성, 훈련 방법을 활용한 post-training 시대가 시작되었다는 이야기였습니다. 

아무튼, GPT-3 에서 제안하는 3가지 in-context learning 은 아래와 같은 세가지 였습니다.

- Zero-shot Learning
  - 모델에게 문제만 설명하고 예시는 제공하지 않음.
- One-shot Learning (ICL)
  - 해결하고자 하는 문제의 예시를 제공해서 학습.
- Few-Shot Learning 
  - 해결하고자 하는 문제의 예슬 여러 개 제공. Task description 도 함께 제공.

GPT-3 는 모델 구조를 크게 강조하지 않습니다. 

GPT-3 는 모델 크기와 데이트를 크게 늘리고, in-context learning 훈련을 강화함으로써 대부분의 전통적인 NLP 테스크에서 강점을 보여줬습니다. 혁신적으로! 이때부터 LLM 의 시대가 열리게 됩니다.

# Ref

- [1] https://ffighting.net/deep-learning-paper-review/language-model/gpt-1/