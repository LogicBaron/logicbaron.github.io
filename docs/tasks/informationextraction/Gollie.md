---
id: gollie
sidebar_position: 350
---
import gollie_io from './asset/gollie_io.png';
import gollie_dataset from './asset/gollie_dataset.png';

# GoLLIE
## ANNOTATION GUIDELINES IMPROVE ZERO-SHOT INFORMATION-EXTRACTION

UniversalNER 을 포함해서 LLM의 등장이후 NER과 같은 Informatino Extraction task의 scheme이 크게 바뀌었습니다. LLM의 언어 이해 능력을 활용해서 zero-shot 또는 supervised IE를 수행하는 방식이었습니다. 이 분야의 de factor처럼 사용되는 논문은 UniversalNER입니다.

UniversalNER의 논문에서 NER 과정에서 named entity label 대신 entity description을 생성하고 이를 inference에 활용하는 실험이 있었습니다. 저자들은 entity description을 활용하는 방식이 성능 지표는 안 좋아졌지만 entity paraphrasing 관점에서는 오히려 강인해졌다고 평가했습니다.

GoLLIE 논문은 이 실험의 확장판이라고 생각합니다. 이 논문에서는 단순히 entity type name을 사용하는 것이 아니라 **human annotator가 참조하는 annotation guideline을 사용**해서 LLM이 IE 과제를 수행하도록 합니다. 또한 다양한 IE task에 일반화된 input-output을 활용할 수 있도록 **python code 형태의 input-output**을 활용했다고 이야기합니다. 사실 generation 기반의 IE task의 근본적인 문제점 중 하나는 generated text의 해석입니다. 이 논문에서는 output 형식 역시 제한해서 해석의 용이함을 더하기도 했습니다. 


<div style={{textAlign: 'Center'}}>
    <img src={gollie_io} style={{border: 'solid'}}  />
</div>

## Data

다양한 domain의 데이터셑을 사용했습니다. zero-shot을 위해서는 training에 사용되지 않은 데이터셑을 활용합니다.  최근 LLM의 연구 동향은 LLM의 성능은 다양한 domain, 다양한 task를 학습할 수록 좋아진다고 이야기 하고 있습니다. 

<div style={{textAlign: 'Center'}}>
    <img src={gollie_dataset} style={{border: 'solid'}}  />
</div>

## Model

fine-tuned version of Code-LLaMA 를 사용했습니다. LLaMa 또는 LLaMa-2, Falcon 과 같은 모델도 고려되었는데 GoLLIE 에서 사용하는 code input-output 형태에 가장 적합한 모델은 Code-LLaMA 였다고 합니다.

논문에서는 7B 모델을 이용한 모델의 분석을 진행했고 단순한 성능 지표는 13B 모델과 34B 모델도 함께 훈련시켜서 기재해놨습니다. scaling law에 맞게 큰 모델일수록 좋은 성능을 보여줬습니다.

## Training & Result

QLoRA framework를 사용해서 모델을 훈련시켰습니다.

모델 훈련 과정에서 Regularization을 위해서는 5가지 방법을 사용합니다.

- **Class order Shuffling** : 입력 entity type 순서를 랜덤으로 섞습니다.
- **Class dropout** : entity type 을 랜덤하게 dropout 합니다.
- **Guideline paraphrasing** : guideline을 변형시켜서 사용합니다.
- **Representative candidate sampling** : entity type에 대해 fixed 10 candidate 중 하나를 선택해 사용합니다.
- **class name masking** : class 명을 마스킹해서 사용합니다

### Result

GuideLine을 이용해서 모델을 학습시키고 inference를 진행하는 과정에서 GoLLIE의 저자들이 목표로 하는 것은 크게 두 가지라고 생각됩니다. 

- Entity paraphrasing에 대응하고, 모델이 entity type에 대해 조금 더 풍부한 이해를 할 수 있도록 한다.
- entity type에 대한 풍부한 이해를 바탕으로 zero-shot entity type에 대응가능하도록 한다.

모델의 실험 결과가 인사이트와 일치합니다. 

**Supervised Evaluation**의 경우 GoLLIE 가 일반적으로 fine-tuning 시킨 모델과 비슷하긴 하지만 약 f1@0.3 정도 성능이 떨어집니다. 

반면 **Zero-shot Evaluation**에서 GoLLIE 는 가이드라인을 사용함으로써 매우 큰 성능 향상을 보여줬습니다. Baseline 모델과 비교하여 f1@13 점을 평균적으로 앞서고 있습니다. 또한, Unseen Labels에 대해서도 GoLLIE는 baseline에 비해 더 Seen label과 비교하여 더 적은 f1 gap 을 보여주었습니다. 두 가지 실험 결과에서 GoLLIE가 guideline을 사용하지 않는 모델에 비해 generalization이 더 잘 되고 있다는 사실을 유추할 수 있습니다.

**에러 캐이스에 대한 분석** 역시 논문에 섦명되어 있는데 간단하게 정리하겠습니다. GoLLIE 가 좋은 성능을 보여주지 못한 경우들을 몇 가지로 분석했는데 제가 읽어보기에 크게 3가지 정도로 분류되는 것 같습니다. 1) 다의성이 있는 경우, 2) 모호한 레이블의 경우, 3) entity type 간의 충돌: 특히 넓은 의미의 label 과 세부적인 의미의 label 사이에서.

## Conclusion

IE 과제를 수행하다 보면 entity type의 모호성이 정말 크게 와닿습니다. 이걸 이렇게 분류하는 게 맞을까? 라는 문제죠. 이 문제를 해결하기 위해 많은 방법들이 고려되었는데 최근에 저는 entity type에 대한 설명이 필수라는 생각을 하고 있었습니다. 해당 관점에서 좋은 solution을 제시한 논문이라고 생각됩니다.

# Ref

1. [GOLLIE : ANNOTATION GUIDELINES IMPROVE ZERO-SHOT INFORMATION-EXTRACTION](https://www.semanticscholar.org/reader/3f40edfcafc018b2cb54612a9aaa9d6b43a11a26)