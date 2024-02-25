---
id: clip
sidebar_position: 0
---
import clip_model from "./asset/clip_model.png";
import clip_transfer from "./asset/clip_transfer.png"
import clip_domainshift from "./asset/clip_domainshift.png"

# CLIP

## Learning Transferable Visual Models From Natural Language Supervision, 2021

CLIP 계열 모델들의 첫 번째 글인 CLIP (Contrastive Image-Text Pretraining) 논문입니다. 

multimodal contrastive representation learning 의 대표격인 CLIP 논문은 \<Attention is All you need> 와 같이 CLIP-like model 의 지평을 연 논문입니다. 또 모델의 학습 관점에서도 상당히 많은 인사이트를 얻을 수 있습니다.

## Motivation

CLIP 논문 이전 computer vision system 논문들은 주로 이미지에 대해 predetermined object categories 를 예측하는 방식을 이용해 pretraining 을 수행해왔습니다. 이 방식에는 두 가지 단점이 있습니다.

- 자연어 형태의 이미지 캡션(설명문)을 처리할 수 없다.
- annotation 이 필요하므로 데이터 생성 비용이 많이 든다.

CLIP 논문은 자연어 caption representation 과 image representation 의 비교를 통해 위 두가지 문제를 극복했으며, 또한 자연어 표현을 사용함으로써 zero-shot capability 가 기존 모델들에 비해 크게 늘었습니다.

## Data

CLIP 모델의 가장 큰 특징은 기존 pretrained model 에 비해 압도적으로 **대규모의 데이터셑** 을 활용했다는 점입니다. CLIP 학습에 사용된 데이터셑은 **400M 의 (image, text) pair** 로 이루어져 있습니다. 저자들은 CLIP 학습에 사용된 데이터셑을 WIT: WebImageText 라고 이름지었습니다. CLIP 이 이정도의 대규모 데이터셑을 모을 수 있었던 이유는 앞서 언급했듯이 자연어 형태의 image caption 을 활용하는 학습을 목표로 했기 때문입니다.

이렇게 대규모의 데이터셑을 구축하기 위해서 저자들은 wiki-pedia 에서 100번 이상 사용된 단어들 그리고 단어들의 bi-gram 을 활용해서 500,000 개의 쿼리를 생성하고 각 쿼리에 대해서 20,000개 까지의 (image, text) pair 를 수집했습니다. 수집한 단어들은 GPT-2 에서 사용한 WebText 데이터셑과 비슷한 수의 단어가 사용되었다고 합니다. 

CLIP 의 데이터에 대해서는 많은 연구가 이루어졌는데, CLIP 이 가지고 있는 큰 강점인 zero-shot capabilities 가 모델의 구조가 아니라 데이터셑의 quantity & quality 가 훨씬 중요하다는 후속 연구가 많았습니다. 데이터셑 규모만 늘려서 VGG 의 성능을 끌어올리는 연구가 있는가 하며 CLIP 모델의 데이터셑 규모는 낮추고 질은 개선해서 성능을 개선한 논문도 있습니다.

## Model

저자들이 초기 고려한 모델 구조는 VirTex[2] 와 같은 image CNN 과 text transformer 를 함께 학습하는 방식이었습니다. 다만 이 방식은 대규모의 데이터셑을 처리하기에 모델의 구조와 학습 파이프라인이 너무 무겁다는 단점을 가지고 있었습니다. 

CLIP 모델은 이미지의 표현 학습을 이미지에 대해 정확한(exact) 단어들을 예측하는 것이 아닌, 가장 이미지를 잘 표현하고 있는 텍스트를 골라내는 contrastive learning task 로 해석합니다. 

- contrastive task  가 predictive task  보다 더 좋은 representation 을 학습하고 있다는 연구 결과.
- generative task 는 contrastive task 보다 더 좋은 representation 을 학습하지만 exponential 하게 computation 비용이 발생한다.

<div style={{textAlign: 'Center'}}>
    <img src={clip_model} style={{border: 'solid'}} />
</div>


최종적으로 CLIP 은 N 개의 (image, text) pair 와 가능한 NxN 개 조합의 (image, text) pair 내에서 일치하는 image representation, text representation 의 유사도가 가장 높아지도록 학습합니다. 두 representation 의 유사도는 cosine similarity 를 사용하며 multi-clas N-pair loss, **InfoNCE** 를 사용합니다. 

CLIP 모델의 구조 자체는 그렇게 복잡하지도 어렵지도 않습니다. 오히려 단순한데요. 다만 CLIP 을 정확히 이해하기 위해서는 사용된 Text Encoder 와 Image Encoder 에 대한 이해가 필요합니다. CLIP 논문 같은 경우 몇 가지 encoder 를 테스트 했는데 text encoder 로는 BERT 를, image encoder 로는 ResNET-50 를 표준으로 활용했습니다. 다만 최근에는 ResNET 보다 Vision Transformer 모델을 더 자주 사용합니다. (일반적인 컴퓨팅 성능의 향상)

## Analysis

### Zero-Shot Performance

CLIP 은 다양한 데이터셑에서 모델의 성능을 아래와 같이 측정하였습니다.

- CLIP 의 zero-shot 성능
- ReSNET-50 의 output 에 fine-tuned linear layer 만을 추가하여 측정한 성능 (linear probe)

CLIP zero-shot 모델이 더 우수한 성능을 보여준 dataset 도 있고 그렇지 않은 dataset 도 있습니다. 저자들은 CLIP 이 추상적이거나 특정한 도메인 지식이 필요한 데이터셑에 대해서는 zero-shot 성능이 취약하다고 평가했습니다. 제 개인적인 해석은 단순히 CLIP pretraining 에서 자주 사용된 이미지 도메인에 가까운 데이터셑에 대해서는 좋은 성능을 보였던 것 같습니다.

다만, CLIP 이전에는 zero-shot 성능이 linear probe 성능과 엇비슷한 수준을 보여준다는 것 자체가 말이 안되었기 때문에 이 결과는 당시에 꽤 충격적인 결과였습니다.

### Effect of Prompt

CLIP 논문에서는 classification 과 같은 테스트를 수행할 때 단순히 label을 주는 것보다 "a photo of \{label}" 과 같은 형태로 제공하는 것이 더 성능이 좋았다고 합니다. 이에 대해서 저는 두 가지로 해석을 합니다.

첫 번째는 인터넷에서 크롤링을 한 (image, text) pair 의 특성 상 단순히 label 을 적어놓는 경우보다 자연어 형태로 풀어서 caption 을 생성한 경우가 많을 것입니다. 두 번째는 self-attention 기반 text encoder 의 특성상 단순 label 과 같은 짧은 텍스트에 대해서는 정확한 표현을 학습하기 어렵다는 점입니다.

### Strong to distribution shift.

clip 저자들은 CLIP linear probe 의 성능을 다른 이미지 모델들과 비교합니다. CLIP 은 다양한 데이터셑에 대해서 zero-shot 성능과 linear probe 성능이 강한 correlation 을 보여줍니다. 

<div style={{textAlign: 'Center'}}>
    <img src={clip_transfer} style={{width: 700}} style={{border: 'solid'}}   />
</div>

기존 이미지넷 모델들과 비교해서, linear probe 결과 모델의 성능 개선이 훨씬 크다는 점을 먼저 확인하였습니다. 

또한, 다양한 domain 에서 zero-shot 또는 few-shot learning 결과 기존 이미지넽 모델보다 훨씬 성능이 

<div style={{textAlign: 'Center'}}>
    <img src={clip_domainshift} style={{width: 700}} style={{border: 'solid'}}  />
</div>


또한 ImageNet training 보다 훨씬 다양한 도메인에서 좋은 성능을 보여주고 있다는 점 역시 확인할 수 있었는데요. 이 점 역시, 저는 개인적으로 large dataset 에 의한 효과라고 생각합니다.

Large Dataset 에 대한 효과는 저자들도 인지하고 있습니다. 저자들이 대규모 데이터셑을 사용했기 떄문에 Overfit 을 크게 고려하지ㅏ 않았다고 언급합니다.

## Conclusion

CLIP 논문은 Milestone 급 논문인 만큼, 논문 자체에 분석할 점이 정말 많습니다. 학습이나, 분석에서의 인사이트도 도움이 되구요. 현재 작성하면서 빠르게 논문들을 정리하려다 보니 충분히 CLIP을 깊게 다루지 못했는데 이 글은 시간이 될 때 충분히 자세하게 보충을 할 예정입니다.

개인적으로 생각하는 CLIP 의 장점들은 데이터셑 규모에서 나온다고 생각합니다. 그래서 데이터셑 규모에 대한 강조가 많이 이루어졌습니다.

또한, CLIP 논문의 목적은 어디까지나 **high-quality image representation 을 학습**하는 것이 주입니다. CLIP 학습 방법 상 image-text embedding alignment 도 기대해볼 수 있다고 여겨지지만 실제로는 잘 이루어지지 않습니다. 이에 대한 후속 연구도 많기에 시간이 된다면 소개하겠습니다.

# Ref

1. [Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/pdf/2103.00020.pdf)
2. [VirTex: Learning Visual Representations from Textual Annotations](https://arxiv.org/pdf/2006.06666.pdf), 2021