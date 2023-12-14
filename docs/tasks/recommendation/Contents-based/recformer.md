---
id: textisallyouneed
sidebar_position: 1
---
import figure1 from './asset/textisallyouneed_figure.png';
import train from './asset/recformer_train.png';
import result from './asset/recformer_result.png';

# Recformer

## Text is All you Need: Learning Language Representations for Sequential Recommendation

해당 논문은 추천 시스템 논문인데, 속성 정보를 사용해 상품 representation 을 학습해서 추천 시스템 성능을 개선합니다. 도움이 될만한 인사이트가 있을 것 같아 공유합니다.

## 논문 정리

논문에서 제안하는 기존 sequential recommendation system 의 문제점을 얘기합니다. 

기존 추천 시스템은 주로 상품 id 또는 상품 textual information(category, 상품명) 정보를 활용한 임베딩을 활용한다.

- 상품 id 위주 추천 시스템 방식
  - 장점
    - 학습한 도메인에 대해 성능이 보장됨.
  - 단점
    - cold-start 와 cross-domain transfer knowledge 에 취약하다.
- 상품 id + pre-trained textual embedding 활용한 방식의 장단점
  - 장점 
    - knowledge transfer 이 가능하다.
  - 단점 
    - pre-training corpus 가 commerce domain corpus 와 차이가 있어 모델이 optimal 하지 않다.
    - model pre-training 과 downstream task fine-tuning 과정이 서로 연관이 없어 모델을 충분히 활용하지 못한다. 
    - fine-tuning 과정에서 모델이 상품의 상세 속성 정보에 대해서 배우지 못한다. (후술)

그래서 해당 논문은 **1) 상품의 상세 정보까지 모델이 이해**할 수 있도록 해야하며, **2) text model pretraining 부터 쇼핑 데이터에서 추천을 학습하도록**해야 한다고 주장합니다. 

그래서 논문에서는 상품의 상세정보를 이해하기 위한 방법으로 상품명 뿐만 아니라 상세 정보까지 활용해서 text model 을 학습합니다. text model 은 `[CLS]{attr_key1}{attr_val1}{attr_key2}{attr_val2}...` 형태의 텍스트를 input 으로 받게 됩니다.
- E.g.) `"[CLS] 상품명 애플 맥북 2020 M1 브랜드 애플 색상 골드"`

그 후 **MLM loss** 와 **유저 history 기반 contrastive loss** 기반으로 모델을 pre-training 합니다.

## 모델 학습

### Step1. 상품 데이터 만들기

처음 논문을 보면서 상품명에서 알 수 있는 속성들은 모델이 학습할 수 있지 않을까, 라고 생각했었습니다. 그런데 예시와 같이 상품명이 속성 정보가 많이 제외된 상품 모델명에 가까운 것 같습니다. 

<div style={{textAlign: 'center'}}>
 <img src={figure1} style={{width: 800}} />
</div>

### Step2. 모델 pretraining (feat. metric learning)

모델 학습은 두 가지 task 를 수행합니다.

- 기존 BERT preatrining 과 같은 masked language modeling 을 사용합니다.
- user history 에서 next item 을 positive sample 로 사용하고, in-batch next items 를 negative sample 로 사용한다.

<div style={{textAlign: 'center'}}>
 <img src={train} style={{width: 800}} />
</div>

### Step3. 모델 fine-tuning

pretraining 만으로 모델 성능이 나오는데, fine-tuning 도 진행해서 성능 확인.

### Result

<div style={{textAlign: 'center'}}>
 <img src={result} style={{width: 800}} />
</div>
