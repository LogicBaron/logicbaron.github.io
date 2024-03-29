---
id: universalner_2024
sidebar_position: 200
---
# UniversalNER: 2024

UniversalNER 2024는 **"Universal Entity Type"** 을 타겟팅합니다.

:::tip
아래 링크에서 universal NER의 데모를 사용할 수 있습니다.

https://universal-ner.github.io/
:::

이 논문의 핵심은 Knowledge distillation입니다. chatGPT 를 통해 생성한 NER 데이터를 사용해 LLama를 Instrcution tuning합니다. 이 과정을 통해 LLama 는 chatGPT의 named entity recognition 능력"만" 배울 수 있으며 더 나아가서 chatGPT 보다 더 좋은 NER 성능을 보여주었다고 합니다.

## 데이터

UniversalNER은 일반적인 Instruction Tuning 데이터셑과 중요한 차이점이 한 가지 있습니다. Instruction tuning data는 **instruction, input 그리고 output** 으로 구성됩니다. 대게의 경우 Instruction tuning은 다양한 태스크를 학습할 수 있도록 instruction을 다양하게 구성합니다. 하지만 Universal NER의 경우는 다양한 태스크보다 하나의 task에서 다양한 input - document & eneity type ; 에 대응하는 것이 목표이기 때문에 최대한 **input이 다양**하다록 데이터셑을 구성합니다.

### Data Construction

chatGPT (GPT-3.5-turbo)  를 활용해 22개의 영어 데이터셑에 대해서 자유로운 형태의 entity extraction 을 요청합니다. 

<pre><code>
<b>System Message</b>: You are a helpful information extraction system.

<b>Prompt</b>: Given a passage, your task is to extract all entities and identify
        their entity types. The output should be in a list of tuples of the
        following format: 
        [("entity 1", "type of entity 1"), ... ].

<b>Passage</b>: \{input_passage\}

</code></pre>

해당 방식으로 저자들은 13,020개의 entity type 에 대한 annotation을 생성합니다. LLM을 이용한 oopen-world NER의 경우 동일한 entity type이 서로 다른 언어로 표시되는 **entity paraphrasing** 현상이 발생합니다. 저자들은 이에 대응하깅 위해서 chatGPT에게 각 **entity type에 대한 짧은 설명을 생성**하는 실험을 함께 진행했습니다.

실험 결과, 짧은 설명을 덧붙이여달라고 하면 약 353,092개의 훨씬 다양한 entity type이 생성되었다고 합니다. 그리고 속성키 대신 속성키에 대한 짧은 설명을 사용한 데이터로 튜닝한 모델은 **정성적으로 entity paraphrasing에 덜 민감**했지만 **NER 데이터셑의 정량적 성능 평가에서 더 안 좋은 성능**을 보여줬다고 합니다.

### Tuning Template

UniversalNER 의 Instrucition Tuning Template 은 다음과 같습니다. NER 방식보다 Conversation 방식의 튜닝이 더 성능이 좋았다는 연구 결과가 있어 해당 방식을 차용했습니다.

<pre><code>
A virtual assistant answers questions from a user based on the provided text.

<b>User</b>: Text: Xpassage
<b>Assistant</b>: I’ve read this text.
<b>User</b>: What describes t1 in the text?
<b>Assistant</b>: y1
...
<b>User</b>: What describes tT in the text?
<b>Assistant</b>: yT

</code></pre>


QA 방식으로 하나의 쿼리에 하나의 entity type 만을 찾아내는 방식입니다. 하나의 쿼리에 모든 엔티티를 찾아내는 방식 역시 저자들이 시도해봤는데 7B 모델에서는 3.3%, 13B 모델에서는 11.8% 감소했습니다. 모델의 사이즈가 클수록 문제를 세분화해서 instruction tuning 학습시키는 게 전체적인 성능이 더 좋다는 인사이트를 얻을 수 있습니다. 

### Negative Sampling

chatGPT를 이용해 데이터를 구성하는 방식은 negative sample을 얻을 수 없습니다. 논문 저자들은 **전체 entity type set 에서 텍스트에 등장하지 않는 entity type을 샘플링**해서 emtpy json을 반환하도록 데이터를 구축합니다.

샘플링 전략은 **frequency-based sampling**으로 자주 등장한 entity type 에 weight를 크게 주는 방식이 o-negative sample, uniform random sampling과 비교해 가장 좋은 성능을 보였습니다.

### Supervised Finetuning

Human-annotated dataset 의 경우 퀄리티가 좋습니다. Universal NER 도 튜닝 과정에서 Human-annotation을 활용한 데이터를 사용하면 성능이 훨씬 좋아진다고 이야기합니다. zero-shot 성능이 약 40% 초반인데 **supervised finetuning시 성능이 약 60% 수준**까지 올라갑니다. 

다만, 다양한 human-annotated 데이터셑을 활용하기 위해서는 annotation rule, entity type의 통일이 필요합니다. Universal NER은 쿼리를 던질 때 **데이터셑 이름을 명시**하여 모델이 다양한 데이터셑의 설정값에 대해서 추가로 학습할 수 있도록 유도합니다. 실제 inference 과정에서는 dataset이름에 대한 정보는 제외합니다.

### BenchMark

평가용 데이터의 entity type 은 때때로 축약어로 쓰여져 있기 떄문에, LLM 에서 사용할때는 원본 단어를 사용합니다. 예를 들어서, `PER` 과 같은 태그는 `PERSON` 과 같은 자연어 형태로 바꾸어줍니다.

또한, 일관성이 결여된 출처로부터 사용된 entity type은 사용하지 않으며 부적합한 레이블 역시 제거합니다. 예를 들어서 UniversalNER 2023에서 사용된 `OTHER` tag는 `PER`, `ORG`, `LOC`이 아닌 모든 entity에 붙일 수 있는 태그이므로 평가 기준으로써 부적합합니다.

그리고 document 수준의 데이터셑의 경우 문장 수준으로 데이터를 분할하여 활용합니다.

## 모델

UniversalNER 모델은 LLama 7B, 그리고 13B 모델을 학습시킵니다. 
 
## Performance

실제 서빙에서 중요한 훈련에 사용한 데이터와 같은 도메인의 데이터에 대해서는 성능이 최대 f1@85% 이라고 합니다. BERT에 비해서 약 5% 정도 더 높은 성능을 보여줍니다.

Dataset의 이름을 명시하는 방식 역시 뚜렷한 성능 향상을 가져왔습니다. 특히 다른 데이터셑과 공통된 entity type을 많이 사용하는 데이터셑에서 큰 성능 향상이 관찰됩니다.

Entity paraphrasing에 대해서는 entity에 대한 definition을 활용하는 방식이 정성적으로 더 강인했지만 성능 지표는 더 떨어졌습니다.

# Ref

1. [Universal NER](https://arxiv.org/pdf/2308.03279.pdf)