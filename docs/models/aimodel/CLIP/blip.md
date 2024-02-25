---
id: blip
sidebar_position: 2
---
import blip_model from './asset/blip_model.png';
import blip_framework from './asset/blip_framework.png';
import blip_capfilt from './asset/blip_capfilt.png';

# BLIP
## Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation, 2022

prerequiste : CLIP, ALIGN, ALBEF, SimVLM

## Motivation

Multimodal representation 학습에 대한 연구가 꾸준히 진행되어 왔습니다. BLIP 저자들은 기존 multimodal representation 에 대해 model 측면 그리고 data 측면에서 문제점을 지적합니다.

### Model Perspective

BLIP이전 Multimodal reprsentation 학습은 크게 두 가지 방법으로 나뉘어졌습니다.

SimVLM과 같이 generation task로 모델을 학습하는 **Encoder-Decoder based model** 입니다. 다만 Encoder-Decoder based model 들은 이미지-텍스트 embedding간 유사도가 중요한 image-retrieval task에서 좋은 성능을 보여주지 않습니다.

다음은 CLIP, ALBEF와 같은 **encoder-based model** 입니다. encoder-based models는 captioning과 같은 generation tasks를 수행하기에 직관적이지 않고 - decoder를 학습해야함; 성능 역시 encoder-decoder based model에 비해 좋지 않습니다.

그래서 BLIP 모델은 모든 학습을 다 진행합니다. unimodal encoder, image-grounded text encoder(multimodal encoder) 그리고 image-grounded text decoder(multimodal decoder) 를 학습시킵니다. 


### Data Perspective

BLIP 이전 multimodal representation 학습은 데이터의 질보다 양에 집중해서 noisy web data를 엄청나게 많이 수집해서 사용하는 방식으로 발전해왔습니다. ALBEF 이후 논문부터는 데이터의 noise 가 학습에 안 좋은 영향을 미친다는 점을 인지하고 이를 개선하기 위한 방법론들이 연구되어져왔습니다.

BLIP 역시 같은 관점을 시사합니다. 데이터의 noise로 인해 모델이 완전한 최적점으로 학습되지 못한다고 합니다. (sub-optimal)

이에 대한 BLIP은 데이터를 captioner 모델을 학습시켜서 이미지에 대한 캡션을 생성하고, 학습을 진행하면서 noisy caption을 제거하는 bootstrapping 방식을 적용해 데이터의 퀄리티를 높이는 방식을 제안합니다.

## Data

BLIP의 baseline model은 [ALBEF](/docs/models/aimodel/CLIP/albef.md)에서 사용한 14M 데이터셑을 사용합니다.

또, 115M 개의 web data를 포함하고 있는 LAION data를 포함한 129M dataset을 사용해서 학습한 BLIP-129M 모델도 함께 실험합니다.

Evaluation 과정에서는 COCO 와 Flickr 데이터셑을 사용합니다.

## Model

BLIP은 unimodal encoder, multimodal encoder 그리고 multimodal decoder를 전부 학습하기 때문에 모델의 구조가 약간 더 복잡합니다. 먼저 모델의 구조를 살펴본 뒤 train framework 를 살펴보겠습니다.

<div style={{textAlign: 'Center'}}>
    <img src={blip_model} style={{border: 'solid'}}  />
</div>

### Unimodal Encoder 

Text Encoder, Image Encoder 입니다. BLIP은 Text Encoder 로 BERT$_{\text{base}}$ 모델을 사용합니다. Image Encoder로는 ViT-B/16 모델과 ViT-L/16 모델을 사용합니다. 텍스트 인코더의 경우 prefix token으로 [CLS] 토큰을 사용합니다.

### Image-Grounded Text Encoder

[Encode] prefix token을 사용하는 텍스트를 input으로 사용하는 transformer 구조에 self-attention layer위에 image encoder output을 query로 사용하는 cross-attention layer를 추가한 모델을 사용해서 multimodal representation을 학습합니다.

### Image-Grounded Text Decoder

[Decode] prefix token을 사용하는 텍스트를 input으로 사용합니다. 일반적인 Causual Self-attention 을 사용하는 autoregressive transformer decoder 구조에 마찬가지로 cross-attention layer를 사용합니다.

BLIP 모델은 text encoder와 text decoder의 CA, FFN layer의 weight를 공유합니다. SA layer가 인코딩과 디코딩 과제에서 발생하는 차이점을 가장 잘 포착하고 있기 때문에, 학습 효율상 다른 layer의 weight는 공유하는 게 더 모델 학습 효율 측면에서, 그리고 심지어 모델 성능 측면에서도 더 좋은 성능을 보여주었다고 합니다.

---

<div style={{textAlign: 'Center'}}>
    <img src={blip_framework} style={{border: 'solid'}}  />
</div>

모델 학습에 사용하는 Framework 와 loss 를 다음으로 살펴보겠습니다. BLIP모델은 Noisy Data를 다루기 위해서 이미지에 대한 캡션을 생성하고 전체 데이터 중 퀄리티가 떨어지는 상품을 걸러내는 bootstrapping 을 진행합니다. BLIP 학습 framework는 간단하게 요약하자면 **일반적인 각 모델 학습을 위한 pretraining loss를 통해 학습하고 학습된 모델을 통해 캡션을 생성하고 전체 데이터에 대해 bootstrapping을 진행하는** 과정을 각 epoch에서 반복하는 방식입니다.

### Loss

먼저 pretraining loss를 살펴보겠습니다. ALBEF 논문에서 사용한 loss와 거의 유사한 두 가지의 loss가 사용됩니다. **Image-Text Contrastive Loss(ITC)**와 **Image-Text Matching Loss(ITM)** 입니다. 각각의 loss 는 unimodal encoder, 그리고 image-grounded text encoder의 학습에 사용됩니다.

마지막으로 BLIP은 image-grounded text decoder 학습을 위해 **Language Modeling Loss(LM)** 을 사용합니다. autoregressive decoder 학습 시 정답의 likelihood를 최대화하도록 cross entropy loss 구조를 활용합니다. 

### CapFilt

BLIP 모델의 가장 중요한 부분인 **Captioning and Filtering(CapFilt)** 을 살펴보겠습니다. 이름에서도 알 수 있듯이 CapFilt는 Caption 생성 과정, 그리고 데이터 Filtering 과정으로 이루어집니다. Captioner 과 Filter는 각각 epoch에서 pretrained BLIP의 image-grounded text decoder 와 Image-grounded text encoder를 사용합니다. 각 모듈은 noisy dataset에 대해서 학습되었기 때문에 Captioner와 Filter는 각각 상대적으로 깨끗한 COCO 데이터셑을 사용해 finetuning해서 사용합니다.

CapFilt는 Captioner가 우선 각 이미지에 대해서 Caption을 생성합니다. 생성된 Caption과 web caption에 대해서 Image-Grounded Text Encoder의 Image-Text Match score를 계산하여 unmatched image를 찾아냅니다. 최종적으로 bootstrapped dataset 은 human-annotated data, filtered web data and filtered generated data로 구성됩니다.

#### Nucleous Sampling
Captioner는 p=0.9로 설정한 Nucleous Sampling 방식을 선택합니다. beam search에 비해서 이 방식은 동어 반복을 피하면서 더욱 다양한 Caption을 생성하게 됩니다. 반면 beam search에 비해서 생성된 문장이 적절하지 않은 경우가 많을 수 있는데 이는 Filter가 걸러주게 됩니다. 실제로 실험 결과 상으로 Beam Search output은 Filter에서 19%가 걸러진 반면 Nucleous Sampling 방식은 25% 의 텍스트가 걸러지게 됩니다. 최종적으로 Nucleous Sampling을 통해 **적절하면서도, 모델에 도움되는 Surprising text**를 많이 생성하게 됩니다. 이로 인해 실제로 Nucleous Sampling을 선택한 모델이 downstream task에서 1~2% 내외의 성능 향상을 보여줍니다.

#### Parameter Decoupling

pretrain 과정에서 모델의 성능은 parameter sharing이 더 좋은 성능을 보여주었는데, CapFilt 과정에서는 각각의 모델이 end-to-end로 finetuning됩니다.

이렇게 새롭게 정제된 데이터셑을 이용해 다음 에폭의 학습을 진행합니다.

<div style={{textAlign: 'Center'}}>
    <img src={blip_capfilt} style={{border: 'solid'}} />
</div>


CaptionFilter에 대해 ablation study 결과는 위와 같습니다. 14M 데이터셑에 대해서도 CapFilt 적용은 눈에 띄는 성능 향상을 보여줬습니다. 129M에 대해서는 더욱 큰 성능 향상을 보여줍니다.

## Result

BLIP 모델은 1) **Image-Text Retrieval**, 2) **Image captioning**, 3) **Visual Question Answering**, 4) **Natural Language Visual Reasoning**, 5) **Visual Dialog** 그리고 6) **Zero-shot Transfer to Video-Language Tasks** 에 대해서 성능 평가를 진행했습니다. BLIP 모델이 모든 task에서 기존 SOTA 모델에 비해 좋은 성능을 달성했습니다.
