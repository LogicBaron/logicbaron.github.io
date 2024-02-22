---
id: albef
sidebar_position: 1
---
# ALBEF
## Align Before Fuse: Vision and Language Representation Learning with Momentum Distillation


## Motivation

ALBEF model 의 목적은 크게 두 가지 입니다. CLIP 과 관련된 글들에서 소개할 모델들 대부분의 목적이기도 한데요.

1. text, image 각각에 대한 unimodal encoder.
2. text-image 가 전부 고려된 multimodal encoder.

다만 ALBEF 이전에는 두 task 를 따로따로 고려해 왔습니다. 이전의 multimodal encoder 는 **object detector 에서 추출한 image feature 를 word token 과 fusion 하는 방식**으로 이루어졌습니다. 

해당 방식은 매우 높은 품질의 데이터셑을 요구합니다. 그러나 대부분의 pretrain용 데이터셑은 noisy가 많은 대신 양이 많은 규격을 취하고 있습니다. 그러므로 기존 방식으로는 multimodal backbone encoder를 위한 유의미한 pretrain을 수행하기 어렵습니다.

또한, 기존 multimodal train 방식은 **text feature와 image feature가 같은 embedding space에서 분포하고 있지 않은 상태로 fusion을 수행**합니다. 예를 들어서, "기차" 라는 텍스트와 기차의 이미지가 서로 멀리 위치하고 있다는 말입니다. 특히, cross-attention 등을 사용하는 모델에서는 이 차이가 더욱 크게 부각됩니다. 모델이 쉽게 각 modality간의 연관성을 파악하지 못합니다.

CLIP과 ALIGN과 같은 논문은 반면 각각의 unimodal encoder 를 잘 학습시키고 있습니다. 특히 이들의 학습 방식은 대량의 noisy dataset에 대해서 텍스트와 이미지의 representation 을 서로 가깝게 하는 **image-to-text, text-to-image contrastive loss를 사용했기 때문에 이미지와 텍스트의 임베딩이 어느정도 alignment 가 이루어져있을** 것을 기대할 수 있습니다.

ALBEF 논문은 이 점에서 착안해서 기존 multimodal pretrain 방식의 문제점을 두 가지 다 해결합니다.

대량의 데이터셑에 대해서 multi-modal contrastive loss 를 활용해서 alignment 를 수행하고 fusion을 통해 multimodal representation을 학습하는 방식입니다.

## Data

 ALBEF 논문은 두 개의 web dataset(Conceptual Captions, SBU Captions)와 두 개의 in-domain datasets(COCO, Visual Genome) 을 사용합니다. 총 이미지의 수는 14.1M 개입니다. web dataset 의 경우 in-domain dataset 에 비해 noise가 많은 데이터입니다.

## Model

### Train
ALBEF 논문의 Motivation 을 이해했다면 모델 구조를 이해하기 어렵지 않습니다. ALBEF 의 구조는 **fusion 이전의 image-text contrastive loss를 통한 alignment**와 alignment 이후 **fusion을 통한 multimodal representation 학습**으로 나누어집니다. 마지막으로 momentum model 이라는 부분이 있는데요, 이 부분은 전체 모델 학습 과정을 먼저 설명하고 다루겠습니다.

![Alt text](image.png)


#### Image-Text Contrastive Learning
먼저 fusion 이전의 이미지와 텍스트 representation을 align하기 위한 image-text contrastive learning 단계를 살펴보겠습니다. 이 학습 과정과 사용하는 contrastive loss의 설계는 CLIP과 동일합니다. 이미지와 텍스트는 각각 자신의 쌍과 가장 가까워지도록 학습됩니다. 식 자체가 기존에 익숙하던 방식이 아닌 정보 이론 용어로 기재되어 있는데, [크로스 엔트로피](/docs/concepts/math/information/cross_entropy.md) 문서를 참조하면 비교적 쉽게 이해할 수 있습니다.

$$
L_{itc} = \frac{1}{2} E_{(I,T) \sim D}[H(y^{i2t}(I), p^{i2t}(I)) + H(y^{t2i}(T), p^{t2i}(T))]
$$

N개의 텍스트와 N개의 이미지로 가능한 N^2 쌍의 (이미지, 텍스트) 에 대해 alignment 를 수행한 뒤, 올바른 (이미지, 텍스트) 쌍으로 multimodal embedding을 생성할 차례입니다.

**alignment 이후 fusion**은 cross-attention 방식을 사용합니다. cross modal attention 은 **text 의 representation 을 key, value 로 이미지 representation 을 query 로 사용** 합니다. 이렇게 Transformer의 cross-modal attention 을 사용해서 이미지와 텍스트의 특징을 전부 반영한 multimodal representation을 생성했으니 학습만 잘 시키면 됩니다.

multimodal encoder는 **Masked Language Model**과 **Image-Text Matching**, 두 가지 task를 통해 학습됩니다. 당연히 모든 task는 text 또는 image unimodal embedding이 아닌 text+image multimodal embedding을 기반으로 수행됩니다.

#### Musked Language Model

첫 번째 **Masked languge model(MLM)** 은 일반적으로 Language Model 에서 수행하는 MLM과 동일합니다. 단지 최종적으로 Prediction 을 수행하는 token embedding 이 텍스트+이미지 multimodal token embedding이라는 점만이 다릅니다. loss 역시 동일합니다.

$$
L_{mlm} = E_{(I, \hat{T}) \sim D} H(y^{mask}, p^{mask}(I, \hat{T}))
$$

#### Image-Text Matching

두 번째 **Image-Text Matching** 은 multimodal representation 생성에 사용된 이미지-텍스트의 일치 여부를 예측합니다. Alignment 과정과 다릅니다. Alignment 과정에서는 각 이미지 임베딩, 텍스트 임베딩의 cosine similarity를 통해 이미지-텍스트의 일치 여부를 예측했습니다. Image-Text Matching task는 multimodal representation 의 [CLS] token embedding을 binary classification 합니다. 

그런데 multimodal representation learning 은 일치하는 (image, text) 쌍에 대해서만 수행되는데 어떻게 불일치하는 경우에 대해 학습할 수 있을까요? ALBEF 논문에서는 불일치 하는 경우를 **hard-negative sampling**해서 추가로 image-text match 학습에서 사용합니다. ALBEF 논문에서 사용하는 In-batch hard negative sampling 방식은 **각각의 이미지에 대해서, ITC 수행 결과 cosine similarity가 가장 높은 오답 텍스트를 샘플링**합니다.

$$
L_{itm} = E_{(I, T) \sim D} H(y^{itm}, p^{itm}(I, T))
$$

ALBEF 논문은 이 세가지 loss 전부 더한 값을 최종 loss 로 사용합니다.

$$
L = L_{itc} + L_{mlm} + L_{itm}
$$

### Momentum Distillation

Momentum Model 은 noisy한 web data 의 한계를 극복하기 위해서 ALBEF 모델에 추가된 모듈입니다. Noisy Dataset 의 (이미지, 텍스트) 쌍은 실제로는 서로 일치하지 않을 수 있습니다. 또 어떤 경우에는 이미지를 더 잘 설명하는 텍스트가 있을 수 있고 그런 데이터가 데이터셑 안에 존재할 수 있습니다. (심지어 같은 "더 좋은 쌍" 이 존재할 수 있습니다!)

CLIP 논문같은 경우에는 image-text contrastive loss 만 수행했기 때문에 충분히 많은 양의 데이터로 학습하기에 mini-batch 내에서 "그나마 가장 좋은 쌍" 일 확률이 커서 noise 의 영향이 비교적 적었습니다. 반면 ALBEF 모델은 MLM 학습에서는 그런 효과를 기대할 수 없습니다. 데이터셑 내에서 이미지를 표현하는 더 좋은 단어를 학습했다면 그 외의 모든 단어들은 틀린 단어가 될 테니까요.

**Momentum Distillation 은 Web Data 만 믿지말고, ALBEF 모델의 예측 결과도 함께 사용하자.** 라는 인사이트를 가집니다. momentum model은 ALBEF unimodal & multimodal encoder 의 exponential-moving-average 버전입니다. 그리고 이 momentum model 로 예측한 결과값을 이용해서 pseudo-label을 생성해서 사용합니다.

첫 번째로, Image-text  contrastive learning 과정에서는 momentum model 의 unimodal encoder output 의 cosine-similarity 를 pseudo-label 로 사용합니다.

$$
s'(I, T) = g^v_{cls}(v')^\top g^w_{cls}(w') \quad \text{and} \quad s'(T, I) = g^w_{cls}(w_{cls})^\top g^v_{cls}(v').
$$

$s'(I, T)$ 와 $s'(T, I)$ 에 softmax를 취해 $q^{i2t}$ 와 $q^{t2i}$ 를 계산합니다. 최종적으로 ITC에서 momentum distillation은 다음과 같이 loss에다가 추가 term을 더해주는 방식으로 이루어집니다.

$$
\mathcal{L}^{\text{mod}}_{\text{itc}} = (1 - \alpha) \mathcal{L}_{\text{itc}} + \frac{\alpha}{2} \mathbb{E}_{(I,T)\sim\mathcal{D}} \left[ KL(q^{2t}(I) || p^{2t}(I)) + KL(q^{2i}(T) || p^{2i}(T)) \right]
$$

MLM 학습에서도 비슷한 방식으로, momentum model 의 prediction 결과를 pseudo-label token 으로 사용합니다. 

$$
\mathcal{L}^{\text{mod}}_{\text{mlm}} = (1 - \alpha) \mathcal{L}_{\text{mlm}} + \alpha \mathbb{E}_{(I,\tilde{T})\sim\mathcal{D}} \left[ KL\left(q^{\text{msk}}(I, \tilde{T}) \parallel p^{\text{msk}}(I, \tilde{T})\right) \right]
$$

momentum distillation 에서 **pseudo-label 에 대해서 cross-entropy 가 아닌 KL divergence 를 사용하는 이유**에 대해서 저자들이 특별히 언급하지는 않습니다. 그런데 사실 classification 문제에서는 class probability가 1이므로 KL divergence 와 cross entropy 가 똑같은 의미를 가집니다. **pseudo-label 은 확률이 1이 아니므로 자체적인 불확실성**이 있기에 저자들이 이를 배제하고 있는 KL divergence 를 사용한 것이라고 사료됩니다.

저자들이 여러 차례 실험한 결과 pretraining 과 down-stream task에서 일관적으로 $\alpha=0.4$ 값을 사용했습니다. 

Momentum Distillation 의 성능에 대해서는 Ablation Study가 있습니다. 재미있는 점은 ITC 에만 MoD 를 적용해도 성능이 어느정도 오른다는 사실입니다. ITC 에는 적용하지 않고 MLM 에만 적용한 결과도 궁금했는데, 저자들이 해당 부분은 실험 결과에 적어두지 않았습니다. (혹시 MLM에만 적용하면 성능이 오히려 떨어진 거 아닐까)


## Mutual-Information Maximization 




## Analysis

이 논문의 정수는 두가지가 있습니다.

첫 번째는 기존의 unimodal train framework 와 multimodal train framework 를 통합시켰다는 점입니다. 다만, 이 과정에서 alignment에 대한 논의는 이전 논문 그리고 후속 논문에서 꾸준히 연구되어집니다. 저도 한 번 CLIP-계열 모델의 alignment에 대한 주제로 글을 써볼 생각입니다.

두 번재는 현상에 대한 정보이론 관점의 분석입니다. 이 논문에서 물론 모든 loss에 닿는 분석을 순차적으로 진행하지는 않지만 예측 분포 $q$와 실제 분포 $p$ 사이의 거리 분포에 대한 항을 전부 더해줍니다. KL divergence와 cross entropy가 혼재하는, 엄청 해석하다보면 아름다운 식인데요... 

이 글에서는 못 남기는게 아쉬울 따름입니다. 언젠가 이 글도 보충해두겠습니다. 다만 별 어려운 건 없습니다. 저자들은 alignment, 즉 tex representation 과 image representation 이 서로 align되길 바라는 점에서 비슷한 점이 있거든요.

제가 글을 쓰는 이유 중 하나는, motivation의 정리입니다. 사실 motivation만 잘 이해한다면 어떤 논문을 읽더라도 저자의 의도를 잘 이해하고 해석할 수 있을 거라 믿습니다. 정리글을 보더라두요. 감사합니다.

## Result

# Ref
1. [Align before Fuse: Vision and Language Representation Learning with Momentum Distillation](https://arxiv.org/pdf/2107.07651.pdf)

