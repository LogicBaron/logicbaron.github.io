---
id: blip2
sidebar_position: 3
---
import blip2_model from './asset/blip2_model.png';
import blip2_q from './asset/blip2_q.png';
import blip2_llm from './asset/blip2_llm.png';

# BLIP-2
## Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models, 2023

## Motivation

2023년도는 GPT-3의 등장과 함께 LLM이 엄청난 주목을 받기 시작한 해 입니다. LLM의 텍스트 이해 능력과 생성 능력을 활용하는게 중요해지기 시작했습니다. BLIP 논문을 작성한 Salesforce Research 팀은 다양한 e-commerce 등의 전자 상거래 시스템 등에 솔루션을 제공하는 기업입니다. domain adaptation이 상당히 중요한 영역인데, LLM을 각 domain 마다 따로 학습시키는데는 무리가 있습니다. BLIP2는 이러한 환경에서 개발이 된 것으로 추정됩니다.

BLIP2 의 모델 구조 자체는 BLIP에 LLM을 붙인 형태라고 이해해도 무방하다고 생각합니다. 

LLM과 이미지 모델을 학습시키는 비용이 너무 크기 때문에 **두 모델을 freeze** 시키고, **이미지와 텍스트로부터 LLM input으로 사용할 수 있는 좋은 unimodal, multimodal representation을 생성**할 수 있는 좋은 모델을 학습하는 것을 목표로합니다.


## Data

BLIP2 논문은 BLIP과 같이 129M 사이즈 데이터셑의 이미지를 사용하였습니다. 이미지의 캡션 텍스트는  BLIP-large model 의 Captioning 모델을 사용하여 생성하였고 이 중 top-two caption 을 데이터로 사용하였습니다.

## Model

<div style={{textAlign: 'Center'}}>
    <img src={blip2_model} style={{width: '500px', border: 'solid'}} />
</div>

논문의 흐름에 맞게 LLM input 이라는 생각은 배제하고, **이미지 모델을 Freeze**시키고 BLIP과 같이 **좋은 unimodal, multimodal encoder를 만드는 Q-former라는 이름의 모듈**부터 살펴보겠습니다.

### Q-former

BLIP2 모델의 핵심이 되어주는 LLM input 생성기입니다. BLIP의 구조는 image encoder, text encoder 그리고 image grounded text encoder 와 image grounded text decoder로 이루어져있었습니다. Q-former 역시 똑같은 형태입니다. 

<div style={{textAlign: 'Center'}}>
    <img src={blip2_q} style={{border: 'solid'}}  />
</div>
Q-former 는 두 개의 transformer 구조로 이루어져 있습니다. 하나의 transformer 는 Image Encoder 로 동작합니다. 첫 번째 transformer 는 "학습 가능한 쿼리 벡터" 를 input으로 받습니다. 일반적인 언어 모델은 토큰들을 임베딩으로 변경 해주는 embedding layer가 있는데 이 Layer 없이 바로 벡터를 input으로 사용합니다. 그리고 Frozen Image Model에서 생성된 이미지 벡터는 cross-attention layer를 통해 인입됩니다.

두 번째 transformer 는 텍스트를 input으로 받습니다. 이 트랜스포머는 masking policy에 따라 텍스트 인코더, 디코더로 전부 사용될 수 있습니다.

이 모델의 특이한 점은 트랜스포머 두 모델의 self-attention layer가 두 전역적으로 참조되는 구조라는 사실입니다. 위의 이미지 오른쪽을 보면 더 이해하기 쉽습니다. Pretrain 과정에서는 이 self-attention masking 에 따라서 생성되는 representation 이 달라집니다.

첫 번째 경우처럼 masking이 하나도 없다면 이미지의 정보를 capture하고 있는 쿼리들과 텍스트 히든 임베딩이 서로서로를 전부 참조합니다. 즉, 모든 정보가 종합된 multimodal embedding이 생성됩니다.

두 번째 그림의 경우 이미지 transformer는 text embedding을 참조하지 못하고, text transformer 는 이미지 transformer 를 참조하되, causaul masking이 이루어져있습니다. image-grounded text generation 을 수행하기 위한 mask policy입니다.

마지막의 경우는 이미지 트랜스포머와 텍스트 트랜스포머가 서로서로를 전혀 보지 못합니다. 각 transformer가 unimodal encoder로써 동작합니다.

BLIP과 같은 loss를 사용해서 학습이 되면서 "쿼리 벡터" 들은 1) **이미지로부터 중요한 feature들을 잘 추출할 수 있도록 학습**되며, 2) **특히 텍스트를 참조할 경우 텍스트와 연관도가 높은 정보를 더 잘 추출**하도록 학습되게 됩니다.

### Bootstrap Vision-to-Language Generative Learning from a Frozen LLM

<div style={{textAlign: 'Center'}}>
    <img src={blip2_llm} style={{border: 'solid'}}  />
</div>

BLIP2 훈련의 두 번째 단계는 Q-former의 output을 input으로 하는 LLM을 통한 generative learning입니다. 텍스트 정보가 주어지지 않은 Q-former의 output은 이미지 임베딩이라고도 볼 수 있습니다. 각각의 쿼리들이 이미지로부터 도움이 되는 정보를 포착하고 있는 임베딩의 형태를 이루게 됩니다.

Q-former의 output은 Fully Connected Layer를 거쳐 LLM의 input dimension과 같은 차원으로 맞춰집니다. 그 후 LLM의 input으로 사용되는데 LLM의 종류에 따라 두가지 방식이 존재합니다. 

Decoder based LLM의 input으로는 FC를 통과한 Q-former의 query embedding(image embedding)이 사용되며 이에 대한 language modeling loss 로써 학습이 이루어집니다.

Enocder-Decoder based LLM의 경우 prefix text가 query embedding과 함께 모델 input으로 사용되고 이에 대한 decoder output에 대한 language modeling loss가 계산되어지는 방식입니다.

## Result

BLIP-2는 1) Instructed Zero-shot Image-to-Text Generation, 2) Zero-shot VQA, 3) Image Captioning, 4) Visual Question Answering  그리고 5) Image-Text Retrieval downstream task를 수행해 모델의 성능을 평가했습니다. BLIP-2 모델은 기존 CLIP 계열 모델들에 비해 사이즈가 큰 모델들을 사용한 편이라 parameter 수가 적지 않습니다. 그리고 당연히 기존 CLIP 계열 모델들보다 좋은 성능을 보여줍니다.

BLIP-2는 그리고 Large Models 와 비교해도 비슷하거나 혹은 더 좋은 성능을 보여주고 있습니다. 

반면 BLIP-2 를 활용한 task 또는 LLM generation은 Limitation도 관찰되었다고 저자들이 밝히고 있습니다.

첫 번째 논문은 ICL 성능이 약하다는 점입니다. LLM에서는 Input에 예시를 줌으로써 모델의 성능을 확연히 끌어올리는 In-context Learning이 이루어지는데 BLIP-2는 이런 ICL 성능이 약합니다. 저자들은 이를 BLIP2의 데이터셑이 샘플 별로 하나의 (이미지, 텍스트) 쌍으로만 모델이 학습하는 것을 이유로 꼽았습니다.

또한 BLIP-2 모델은 LLM을 domain-adaptive 하게 finetuning하지 않았기에 문장 생성이 적절한 reasoning이 이루어지지 않기도 합니다. 그리고 LLM이 가지고 있는 할루시네이션, 부적절한 언어 생성등의 문제점을 그대로 가지고 있다는 단점도 있습니다.