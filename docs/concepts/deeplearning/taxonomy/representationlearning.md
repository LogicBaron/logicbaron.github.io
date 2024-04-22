---
id: representation_learning
sidebar_position: 0
---
import representation from './assets/representation.png';

# Representation Learning

<div style={{textAlign: 'Center'}}>
    <img src={representation} style={{border: 'solid', width: 500}} />
</div>

Representation Learning은 이미지, 텍스트, 음성, 그래프와 같은 매우 **고차원의 데이터를 비교적 저차원의 수학적인 형식**으로 표현하는 과정입니다. 이로부터 고차원 데이터에 대한 보다 수학적인 이해뿐만 아니라 **데이터 간 관계까지 해석**하는 것까지가 Representation Learning의 궁극적 목표입니다.

수학적 표현형은 일반적으로 **임베딩 벡터**를 의미합니다. 하지만 **임베딩 벡터**외에도 다양한 형태의 수학적 표현형이 있습니다. 대표적으로는 Variational Auto Encoder에서 사용하는 **Random Variable Parameter**가 있습니다. Representation Learning을 고려할 때는 가장 먼저 **표현하고자하는 데이터가 수학적으로 어떤 방식으로 서술되어야하는지** 고려해야 합니다.

언어 모델 초기의 Word2Vec 역시 단어에 대한 Representation Learning의 예시입니다. "왕" 이라는 단어의 벡터와 "여자" 라는 단어의 벡터를 합치면 "여왕" 이라는 단어의 벡터와 가까워지는 실험을 다들 읽어보셨을 것이라 생각합니다. 이는 Word2Vec 학습이 단어들을 벡터 공간에 적절하게 배치하고 있으며, 그 관계까지 학습하고 있음을 시사하는 실험 결과입니다.

Representation Learning 방법론을 통해 학습한 모델은 주로 **Pretrained BackBone Model**, **Foundation Model**로써 활용됩니다. 초기 Foundation Model은 **Bert, ViT**와 같이 UniModal 로 학습이 되었으며 최근에는 **CLIP, BLIP**과 같이 MultiModal 학습이 대세가 되었습니다.

### Foundation Model with Representation Learning
- BERT
- Vision Transformer
- AutoEncoder
- Variational Auto Encoder
- CLIP
- 등등...

Representation Learning 학습은 고차원 데이터의 일반적인 표현을 배워야하는 만큼 기본적으로 **일반적인 모델 학습에 비해 사용하는 데이터의 규모가 매우 방대**합니다. 또한 학습데이터의 구성 역시 매우 중요하게 다루어집니다. Foundation Model 논문은 데이터 구성에 매우 공을 들이며 이후로도 Foundation Model의 데이터에 대한 후속 논문들이 많이 출판됩니다.

## Strategy of Representation Learning

Representation Learning의 대표적인 방법들은 게임체인저 급의 Foundation Model 논문과 함께 출시합니다. Foundation Model 논문에서는 데이터셑 구성, 데이터 전처리, 모델 구조, 목적 함수 & 손실 함수의 설계 그리고 학습 과정까지 주요하게 다루지만 이 단락에서는 **목적 함수&손실 함수**와 그 인사이트에 집중해서 정리하겠습니다. 인사이트 자체가 모델에 녹아있는 경우 글을 두 부분으로 나누어 두겠습니다.

- [Metric Learning Series](/docs/concepts/deeplearning/taxonomy/metriclearning.md)
- AutoEncoder
- Variational Auto Encoder
- Masked Language Model
- ...