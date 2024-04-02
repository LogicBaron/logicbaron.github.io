---
id: gliner
sidebar_position: 300
---
import gliner_model from './asset/gliner_model.png'
import gliner_pre from './asset/gliner_pre.png'

# GliNER

## Generalist Model for Named Entity Recognition using Bidirecitonal Transformer

UniversalNER 에 대해 알아보는 시점이 되면 아마 open-world NER solution 에 대한 관심이 클 것 같습니다. 

LLM 등장 이전의 Open-world NER은 주로 NER 을 학습시키고 zero-shot performance 를 기대하는 방식으로 발전해왔습니다. LLM 등장 이후에는 LLM 모델의 표현력에 기대어 propmt engineering이나 finetuning을 통해 **LLM이 문제를 해결해주기를 "기대"** 하는 방식이었습니다. LLM은 분명히 open-world NER을 해결하는 신기하고 멋진 솔루션이지만 한계가 있습니다.

가장 대표적인 한계는 **LLM 모델은 일반적인 딥러닝 보다 훨씬 거대하고 그로 인해 훨씬 해석하기 힘들다**는 점입니다. NER의 결과만 활용한다면 상관없지만 조금 더 정확하고 NER의 entity type, 또는 entity에 대한 해석과 표현이 필요한 경우에는 LLM이 적절한 해답이 되기 힘들기도 합니다. 당연히 할루시네이션과 같은 LLM의 고질점이 문제 역시 고려되어야 합니다.

재미있는 점 중 하나는 서비스 단계에서는 저런 해석보다 그냥 잘 나오는게 중요할 것 같지만 사실은 서비스단에서 오히려 저런 해석이 더 중요하다는 점입니다. 연구 단계에서는 신기한 현상은 그 자체로 연구할 가치가 있지만 서비스는 남을 설득해야하니까.. 정도로 받아들이고 있습니다.

GliNER은 **일종의 entity type 과 entity 에 대한 representation learning**을 수행합니다. 실제로 학습 프레임 워크 역시 metric learning, 특히 클립과 매우 유사한 구조를 가지고 있습니다. 사실 GliNER의 저자는 LLM에 비해 computational efficiency 가 크게 개선된다는 점을 강조하지만 저는 개인적으로 이 **논문의 핵심은 (특히) entity 에 대한 representaiton learning의 "느낌"이 들어간 점**이라고 생각합니다.

## 데이터

representation learning과 비슷하게, GliNER의 핵심 역시 정해진 entity type 이 아니라 최대한 다양한 형태의 entity type을 사용하는 것입니다. 여기서 다양한 형태의 entity type이라는 것은 서로 다른 다양한 entity type이 아니라 같은 의미더라도 다른 표현형, 또는 유사한 의미나 미묘한 단어 등 **최대한 자연어에 가까운 다양한 entity type 표현**을 사용한다는 의미입니다.

기존 NER 접근 방법으로는 이런 데이터를 만들기 상당히 어렵습니다. 그런데 LLM 방식은 오히려 이러한 관점에서는 강점을 보입니다. **Pile-NER** 데이터셑은 chatGPT를 이용해서 open-world attribute extraction을 수행한 데이터셑입니다. 약 50,000개의 문서에 대해서 아래 Propmt를 이용해서 entity 정보를 추출합니다. UniversalNER:2024 에서 생성한 것과 같은 방식입니다. [참조 : https://huggingface.co/datasets/Universal-NER/Pile-NER-type]

Validation 과정에서는 3가지 벤치마크를 활용합니다. 첫 번째는 7개의 CrossNER과 MIT dataset을 포함한 OOD NER BenchMark입니다. 두 번째는 트윗, 뉴스 등 다양한 도메인에서 수집한 20개의 NER dataset 입니다. 마지막으로 Multilingual NER dataset: MultiConel 을 활용합니다.

<pre><code>
<b>System Message</b>: You are a helpful information extraction system.

<b>Prompt</b>: Given a passage, your task is to extract all entities and identify
        their entity types. The output should be in a list of tuples of the
        following format: 
        [("entity 1", "type of entity 1"), ... ].

<b>Passage</b>: \{input_passage\}

</code></pre>

최종적으로 부적절한 문서를 제외하고, GLINER은 **44899개 문서, 240k의 entity span 과 13k 의 entity type**을 가진 데이터셑을 사용합니다.

## 모델

GliNER 모델의 구조는 sentence를 참조한 entity type의 임베딩과 entity span의 임베딩을 가깝게 만드는 구조를 가지고 있습니다. 전체적인 모델의 구조는 아래 그림과 같습니다.

<div style={{textAlign: 'Center'}}>
    <img src={gliner_model} style={{border: 'solid'}}  />
</div>

각각의 entity type을 $t_i$, 그리고 모델의 input token을 $x_i$라고 합시다. GliNER 모델은 $[\text{[ENT]} \; t_0 \; [\text{ENT]} \; t_1 \; \ldots \; [\text{ENT]} \; t_{M-1}; \; [\text{SEP}] \; x_0 \; x_2 \; \ldots \; x_{N-1};]$ 의 형태를 input으로 사용합니다. GliNER 모델의 기본 구조는 Bidirectinoal Transformer 입니다. [SEP] 로 분리되어 있는 entity type 과 sentence token은 서로를 참조할 수 있습니다.

특이한 점은 GliNER 모델은 **여러 개의 entity type을 동시에 input으로 사용한다는 점**입니다. 논문에서는 속도 향상에서 큰 장점이 있었다고 말하고 있는데 성능 면에서는 크게 언급이 없습니다. Ablation study에서는 **entity type의 개수를 바꾸어가며 학습시킨 결과 성능 향상**이 있었음을 시사합니다. 다만 **하나의 entity type 에 대해서만 학습 시키는 방법과 비교가 없어서** 조금 아쉬웠습니다.

### 1. Encoder

GliNER 논문은 (sentence를 참조하고 있는) entity type 임베딩과 상응하는 entity span 임베딩을 가깝게 하는 contrastive learning을 수행합니다. 모델링의 첫 단계는 **entity type 임베딩**과 **entity span 임베딩**을 구하는 것입니다.

[ENT] token 은 각각의 entity type앞에 붙어서 사용되며, 이 토큰의 임베딩이 **entity type embedding**: $\bold{q}_i$ 로 사용되게 됩니다. Bidirectional Transformer의 구조상 self-attention 모듈을 통해 각각의 entity type token들은 sentence token을 참조합니다. GliNER에서는 특이하게 word 단위 임베딩을 사용하는데 각 word의 첫 번째 subword token embedding을 word embedding으로 활용합니다.

**Span embeding** 은 조금 더 복잡한 방법으로 구해집니다. 실제로 모델의 코드 구현을 보면 이 부분이 가장 난해합니다. semtemce span 은 연속된 token set 입니다. $i \sim j$ 까지의 token set 이 span을 이룬다고 가정할 때, GliNER은 **span embedding**: $S_{ij} = FFN(h_i \otimes h_j)$ 로 정의합니다. $\otimes$ 연산은 concatenation operation을 의미하며, GliNER 에서는 최대 12-length 까지의 span을 고려합니다. 

:::tip
실제 모델 구현에서는 첫 번째 subword token embedding을 LSTM layer를 추가로 통과시킵니다.
:::

### 2. Loss & Train

contrastive learning 에서의 첫 단계는 거리 함수 또는 유사도 함수를 정의하는 것입니다. **entity type embedding $\bold{q}_i$와 span embedding $S_{ij}$의 유사도**는 벡터 내적 기반 점수를 사용합니다. 
$$
 \phi(i, j, t) = \sigma(S_{ij}^T q_t) \in \mathbb{R}
$$

특이한 점은 최근 가장 많이 사용하는 cosine-similarity가 아닌 **벡터 내적 값의 sigmoid funciton**을 사용한다는 점입니다. 논문에서 이 부분에 대한 ablation은 언급하지 않는데, 논문에서 사용한 **backbone pretrained model 이 Hyphersphere 상에서 학습된 임베딩 모델이 아니라서 그런 것 같습니다**. 이 점수는 **해당 span 이 entity type 에 해당할 확률**로도 이해할 수 있습니다. 

:::note
다시 한 번 요약하면, **entity type embedding과 entity span embedding의 유사도 점수는 해당 entity span 이 entity type에 해당할 확률**을 의미합니다.
:::

학습에 사용되는 loss는 일반적인 metric learning loss의 형태입니다. entity type에 해당하는 entity span, 즉 positive pair 에 대해서는 similarity score가 커지도록 negative sample에 대해서는 similarity score가 작아지도록 학습합니다. 이 loss의 설계에서 두 가지 주의할 점이 있습니다.

$$
\mathcal{L}_{BCE} = - \sum_{s \in S \times T} \mathbb{I}_{s \in P} \log(\phi(s)) + \mathbb{I}_{s \in N} \log(1 - \phi(s))
$$

첫 번째는 infoNCE loss 형태와 다르게 loss에 들어가는 **score 가 softmax를 취하지 않은 형태, 즉 확률 분포의 형태가 아니라는 점**입니다. 이는 하나의 entity type에 대해서 정답이 굳이 하나가 아닐 수 있기 때문입니다.

두 번째는 **negative sampling 방법**입니다. GliNER 학습 프레임워크 상에서 input entity type 과 모든 span을 비교하기 때문에 당연히 negative sample이 학습에 포함됩니다. 그런데 GliNER 논문에서는 추가적으로 학습 배치에 포함되어 있지 않는 entity type을 샘플링해서 사용합니다. (해당 entity type이 사실은 input sentence안에서 나타나는 경우는 무시합니다.) negative sampling을 전혀 사용하지 않았을 경우에는 precision이 떨어졌고 negative samling을 너무 심하게 하면 recall이 떨어졌습니다. 최종적으로 논문에서는 50% 의 negative sample 을 사용합니다.

추가로 학습에서는 두 가지 Regularization Scheme이 사용됩니다. 첫 번째는 input entity type이 순서 셔플링입니다. 두 번째는 랜덤하게 entity type을 drop해서 학습하는 방법입니다. 최종적으로는 학습 과정에서는 최대 25개까지의 entity type을 사용했다고 합니다.

### 3. Decoder

GliNER 논문에서의 decoder는 matching score를 기반으로 entity type에 해당하는 entity span을 최종적으로 도출하는 모듈입니다. 예를 들어서 0\~3 번째 span과 1\~4 번째 span이 전부 0.5 점 이상 점수일 때 최종적인 정답 span을 어떻게 정할까, 의 문제입니다. 또한 특정한 span 이 두 개 이상의 entity type과 매칭될 수도 있습니다.

기본적으로 matching score > 0.5 에 해당하는 span들을 고려해서 2가지 방법으로 디코딩을 수행합니다. 

- Flat NER
  - span 영역이 겹칠 경우 가장 점수가 높은 span을 선택합니다. 모든 영역을 고려할 때 까지 반복합니다. 
  - entity type이 겹칠 경우 역시 마찬 가지로 가장 확률이 큰 entity type을 선택합니다.

- Nested NER
  - 두 개의 entity type이 할당된 span의 경우 어떤 entity type에 대해 fully nested 된 경우 두 개의 entity type을 할당합니다.
  - 예를 들어서, "바나나 우유" 가 제품명이고, "바나나" 는 맛으로 디코딩 하는 것이 가능합니다.


## Result

### Zero-shot

대부분이 영어로 이루어진 Pile-NER 데이터셑으로 학습한 GliNER 모델은 chatGPT 에 비해 multiConel dataset 의 대부분 언어에서 chatGPT 보다 좋은 성능을 보여주고 있습니다. (한국어는 ChatGPT 가 더 잘함) 그런데 잘한다고 zero-shot 성능을 그렇게 높은 지표를 보여주지 못합니다.

### In-domain Supervised learning

20 NER dataset 에 대해 각각 10,000개의 데이터를 랜덤하게 샘플링해서 supervised finetuing 결과를 InstructUIE와 비교합니다. pileNER 로 pretraining 시킨 모델과 pretrainign 시키지 않은 모델을 비교합니다. 사전 훈련된 모델의 경우 0.8 정도 사전 훈련이 되지 않은 모델보다 좋은 성능을 보였으며, InstructUIE 보다는 평균저그올 0.9 점 앞서는 성능을 보여줬습니다. 하지만 UniversalNER:2024에 비해서는 GliNER이 3점 정도 뒤쳐지는 성능을 보여줬다고 합니다. 그럼에도 불구하고 7/20개의 데이터셑에서 최고 점수를 보여줬습니다.

<div style={{textAlign: 'Center'}}>
    <img src={gliner_pre} style={{border: 'solid'}}  />
</div>

pretraining의 성능은 finetuning dataset의 크기가 작을수록 크다는 점을 ablation study에서 밝힙니다.


# Conclusion

GliNER 모델은 LLM 보다 훨씬 parameteric-efficient한 BERT 계열 모델을 활용해서 open-world NER 에서 finetuned-LLM과 비견되는 성능을 보여줬을 뿐 아니라,

무엇보다 적절한 entity span embedding 을 학습했다는 점에서 큰 의미를 가집니다.


# Ref

1. [GLiNER: Generalist Model for Named Entity Recognition using Bidirectional Transformer](https://arxiv.org/pdf/2311.08526.pdf)