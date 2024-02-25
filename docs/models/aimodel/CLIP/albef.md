---
id: albef
sidebar_position: 1
---
import albef_model from './asset/albef_model.png';
import albef_result1 from './asset/albef_result1.png';
import albef_result2 from './asset/albef_result2.png';



# ALBEF
## Align Before Fuse: Vision and Language Representation Learning with Momentum Distillation, 2021


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

<div style={{textAlign: 'Center'}}>
    <img src={albef_model} style={{border: 'solid'}} />
</div>


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

momentum distillation 에서 **pseudo-label 에 대해서 cross-entropy 가 아닌 KL divergence 를 사용하는 이유**에 대해서 저자들이 특별히 언급하지는 않습니다. 그런데 사실 classification 문제에서는 one-hot label을 사용하기에 class probability가 1이므로 KL divergence 와 cross entropy 가 똑같은 의미를 가집니다. **pseudo-label 은 확률이 1이 아니므로 자체적인 불확실성**이 있기에 저자들이 이를 배제하고 있는 KL divergence 를 사용한 것이라고 사료됩니다.

저자들이 여러 차례 실험한 결과 pretraining 과 down-stream task에서 일관적으로 $\alpha=0.4$ 값을 사용했습니다. 

Momentum Distillation 의 성능에 대해서는 Ablation Study가 있습니다. 재미있는 점은 ITC 에만 MoD 를 적용해도 성능이 어느정도 오른다는 사실입니다. ITC 에는 적용하지 않고 MLM 에만 적용한 결과도 궁금했는데, 저자들이 해당 부분은 실험 결과에 적어두지 않았습니다. (혹시 MLM에만 적용하면 성능이 오히려 떨어진 거 아닐까)


## Mutual-Information Maximization 

 저자들은 vision-text representatino learning 을 **image-text 에 대한 다양한 관점의 representation** - 이 논문에서 Unimodal encoder similarity, [multimodal encoder](/docs/concepts/math/information/mutual_information.md) 그리고 momentum model의 인코더; 가 서로에 대한 mutual inofrmation 이 커야한다고 이야기합니다. mutual information 이 크다, 즉 같은 이미지-텍스트 쌍에 대해 **저 중 하나의 representation만 알아도 다른 두개의 representation 에 대해 충분히 알 수 있어야 한다**는 이야기 입니다. 

 이 논문에서는 같은 image-text 에 대해 다른 방식으로 생성한 representation을 다른 **관점, view**라고 표현합니다. 그리고 서로 다른 관점 사이의 mutual information 을 최대화 하기 위해 InfoNCE loss 를 사용합니다. 조금 더 정확히 말하자면, InfoNCE loss 는 서로 다른 관점 사이의 **mutual information 의 lower bound 를 최대화** 합니다. 

 서로 다른 두 관점, $a$와 $b$에 대한 InfoNCE loss 는 아래와 같습니다.

$$
 \mathcal{L}_{\text{NCE}} = -\mathbb{E}_{p(a, b)} \left[ \log \frac{\exp(s(a, b))}{\sum_{\hat{b} \in \hat{B}} \exp(s(a, \hat{b}))} \right]
$$

여기서 $s(a,b)s 는 두 관점에 대한 scoring functino$입니다. similarity와 같이 두 관점이 나타내는 바가 같을수록 높은 점수를 부여합니다. $\hat{B}$ 는 a와 같은 image-text를 표현하는 positive sample과 다른 image-text를 표현하는 negative sample 을 전부 포함하고 있는 집합을 의미합니다.

그리고 저자들은 InfoNCE loss 의 관점에서 논문에서 사용된 ITC, MLM 그리고 MoD loss를 해석합니다. 이 과정은 크게 어렵지 않습니다. **식을 rewrite**하는 것 뿐입니다.

### Mutual Information Maximization : ITC

먼저 ITC loss 는 다음과 같이 다시 쓸 수 있습니다.

$$
\mathcal{L}_{itc} = -\frac{1}{2} \mathbb{E}_{p(I,T)} \left[ \log \frac{\exp(s(I, T)/\tau)}{\sum_{m=1}^{M} \exp(s(I, T_m)/\tau)} + \log \frac{\exp(s(T, I)/\tau)}{\sum_{m=1}^{M} \exp(s(T, I_m)/\tau)} \right]
$$

ITC loss 는 두개의 InfoNCE loss 를 합친 꼴입니다. Image에 대한 Text 의 관점에서의  InfoNCE 그리고 Text 에 대한 Image의 관점에서 InfoNCE.

### Mutual Information Maximization : MLM

MLM loss 는 다음과 같이 다시 쓸 수 있습니다.

$$
\mathcal{L}_{mlm} = -\mathbb{E}_{p(I,\hat{T})} \left[ \log \frac{\exp(\psi(y^{msk}) f(I, \hat{T}))}{\sum_{y \in V} \exp(\psi(y) f(I, \hat{T}))} \right]
$$

이 식에서 $\psi: y \rightarrow V$ 는 lookup function, 즉 masked token 의 representation을 의미합니다. $V$ 는 vocabulary set을 의미합니다. 해석하자면, MLM loss는 1) **가능한 모든 vocabulary 에 있는 단어에 대한 현재 문맥에서의 representation**과 2)**image-masked text representation** 사이의 mutual infomration을 최대화하는 과정입니다.

### Mutual Information Maximization : MoD

상기했듯이 Momentum Distillation은 noisy data 의 true label 을 완전히 신뢰하지 않고 모델의 예측 결과로부터 pseudo-label 을 만들어내는 과정입니다. 즉, 일종의 또 다른 (image, text) view 를 만들어내는 과정입니다. KL divergence가 cross-entropy와 동일한 의미를 가질 수 있다는 점은 위에서 설명했기에, 논문에서 서술된 식을 이해하는데 큰 어려움이 없을 것 같습니다.

## Result

ALBEF 논문은 세 가지 downstream task에 대해서 ALBEF 모델의 성능을 다른 모델들과 비교합니다.

- **Image-Text Retrieval**
  - image to text retrieval, and text to image retrieval.
  - image 와 text embedding 의 similarity 가 최대화 되도록 finetuning
  - unimodal embedding 의 similarity score 바탕으로 수행.
  - Flick30K, COCO dataset 에 대해 수행.
- **Visual Entailment**
  - Image 와 Text 의 관계가 "함의", "중립", 그리고 "모순" 중 무엇인지 예측. (classification)
  - [CLS] token representation 에 대한 MLP classifier.
- **Visual Question Answering**
  - ALBEF multimodal encoder 를 생성한 임베딩으로부터 디코딩 하는 방식 + finetune.
  - 6-layer transformer decoder 를 이용한 generation 수행.
  - auto-regressive answer generation
- **Natural Language for Visual Reasoning**
  - image pair 를 text 가 설명하고 있는지 예측하는 문제.
  - image-pair 를 인코딩 하기 위한 cross-attention을 포함하는 transformer block을 설계.
  - 각각의 transformer block 을 ALBEF multimodal encoder 를 사용해 initialization 한 뒤, 새로 pretrain 해서 사용.
- **Visual Grounding**
  - 텍스트가 표현하고 있는 이미지 내 영역 탐지(object detection).
  - image-text retrieval과 같은 방식으로, image embedding 과 text embedding 의 similarity 를 최대화 하도록 finetuning 함.
  - 다만 여기서는 ITC loss 가 아니라 multimodal encoder를 ITM loss 로 finetuning하는게 더 성능이 좋았다고 함.
  - 그 후 image encoder output을 GradCAM 을 이용해 heatmap을 얻고, 활성화된 영역으로부터 proposal 영역 추출하는 방식.
  - RefCOCO+ dataset에 대해서 수행.

논문에서 제안된 Visual Grounding 의 수행 결과와 성능 지표입니다. Visual Grounding 의 과정이 이해하기 어려울 수 있을 것 같아 따로 첨부합니다.

<div style={{textAlign: 'Center'}}>
    <img src={albef_result1} style={{border: 'solid'}} />
</div>

그 외 다른 task에 대한 ALBEF 모델의 성능 지표입니다. ALBEF 논문의 4M 개의 데이터로 pretrain 시킨 모델과 14M 의 모델로 pretrain 시킨 모델을 비교합니다. 

<div style={{textAlign: 'Center'}}>
    <img src={albef_result2} style={{border: 'solid'}} />
</div>

모든 실험에서 **ALBEF-4M 모델은 비슷한 크기의 데이터셑으로 훈련시킨 모델들보다 훨씬 성능이 좋고**, 심지어 1.2B의 엄청난 양의 데이터로 훈련시킨 ALIGN보다도 성능이 좋습니다. 

다른 modality 의 데이터를 align 시켜서 **더 좋은 multimodal representation을 생성했**다는 것 외에도, 이 모델은 이전 SOTA 모델인 ALIGN에 비해 훨씬 **데이터의 수를 효율적으로 감소**시켰다는 점에 의의가 있습니다. 

그리고 ALBEF-14M 은 그런 4M 보다도 더 우수한 성능을 보여줍니다.


# Ref
1. [Align before Fuse: Vision and Language Representation Learning with Momentum Distillation](https://arxiv.org/pdf/2107.07651.pdf)

