---
id: gner
sidebar_position: 400
---
import gner_context from './asset/gner_context.png';
import gner_prompt from './asset/gner_prompt.png';
import gner_sup from './asset/gner_sup.png';
import gner_beam from './asset/gner_beam.png';

# GNER
## Rethinking Negative Instances for Generative Named Entity Recognition

LLM의 등장 이후 IE를 LLM을 이용해서 풀려는 시도가 많이 있었습니다. 연구의 흐름은 propmt를 이용한 IE에서 Instruction tuning 을 잘하는 방향으로 발전해왔습니다. 그리고 LLM을 활용한 문제 해결은 언제나 LLM output 정제의 문제 역시 남아있습니다.

InstructUIE는 하나의 텍스트에서 entity type-entity span을 전부 찾아내는 방식을 사용했습니다. UniversalNER은 Instruction tuning을 통해 entity type을 하나씩 답변으로 생성하는 LLM 을 학습했고, GoLLIE 논 entity type guideline과 함께 code format을 사용했습니다. 

GNER은 기존 Instruction tuning 의 문제점 중 하나로 **positive entity 중심의 학습 방법**을 지적합니다. 모델이 postivie span을 찾아내는 것 뿐만 아니라 **negative span을 찾아내는 것도 함께 학습해야 한다는 이야기**입니다. BERT-base 방식에서는 당연한 방식이지만 LLM-base 방식에서는 이러한 시도가 많지 않았습니다. negative mining을 수행하더라도 아무것도 예측하지 않는 정도의 학습이었고 "negative" tag를 예측하지는 않았습니다.

GNER 논문은 기존 Bert-base NER에서 많이 활용되어 온 **BIO 태그 기반의 inference를 학습**합니다. 모델은 negative - "O": 예측을 함께 학습하게 됩니다. 또한 Generated text 해석을 위한 메커니즘을 제안합니다.

## Data

InstructUIE dataset을 사용합니다.

학습에 사용된 데이터셑은 Pile-NER 데이터셑입니다. Evaluation에는 CrossNER과 MIT 데이터셑을 사용합니다. 

Supervised Dataset으로는 InstructUIE에서 사용된 20개의 데이터셑 중 18개를 사용합니다. BIO-format에서 사용할 수 없는 2개의 데이터셑은 제외합니다.

## Model

Flan-T5(encoder-decoder)모델과 LLaMa(decoder-only) 모델을 백본으로 사용합니다. 

UniversalNER, GLiNER, InstructUIE, GoLLIE를 Baseline 모델로 사용합니다.

#### Propmt Example

<pre><code>
<b>Token inputs (X)</b>: John explored Tokyo , sampling its famed sushi ,
 and flew back to New York .

<b>Entity type (L)</b>: [Person, Location]
</code></pre>

GNER 모델은 토큰 별로 entity type 예측을 진행하기 때문에 훈련에 사용할 데이터 구성을 고민해야 했습니다. Instruct Tuning 과정에서 entity 에 해당하는 token 만을 사용해서 훈련을 하는 방법은 entity 주변 context의 정보를 모델이 학습할 수 없습니다.

### Learning with Entity Context

GNER 모델은 IE 과제에서는 entity span 자체가 아니라 주변의 context 가 매우 중요한 역할을 한다고 이야기합니다. 예를 들어서 "go to" 뒤에는 Location에 해당하는 단어가 위치할 확률이 높습니다. GNER 모델은 entity 만을 사용해서 학습을 하는 방식은 context 정보를 활용할 수 없다고 이야기하며, **entity 에서 가까운 순서대로 L 길이만큼의 토큰을 유지하는 방식으로 context 정보를 input에 남겨둡니다**. 

#### Input w. context

<pre><code>
<b>Training Propmt</b>
<b>w/o context</b>: \[John](Person) \[Tokyo](Location) \[New York](Location).

<b>w/ context length 2</b>: \[John](Person) explored \[Tokyo](Location) , sampling ......
back to \[New York](Location) .

<b>w/ full context</b>: \[John](Person) explored \[Tokyo](Location) , sampling its
famed sushi , and flew back to \[New York](Location)
</code></pre>

context length를 사용한 Prompt 예시입니다. token 단위 학습을 할 때 **context를 사용하지 않으면 완전히 positive samples로만 학습을 하는 예시**가 됩니다. 일반적으로 우리가 앞에서 살펴본 GoLLie, InstructUIE 등의 논문은 사실 **w/ full context** 로 학습합니다. 하지만 그러한 논문들은 full context에서 특정 entity 를 찾아내는 모델이지만 GNER은 token 단위로 entity type을 예측하는 모델입니다.

<div style={{textAlign: 'Center'}}>
    <img src={gner_context} style={{border: 'solid', width: 400}} />
</div>

context를 하나를 포함시키면 하나도 포함시키지 않는 것에 비해 성능이 크게 증가합니다. 이후로도 context length를 늘릴수록 모델의 성능이 조금씩 향상한다는 사실을 확인할 수 있습니다.

### Entity Boundary of Generative Model

context를 포함시키게 되면 모델의 예측을 이해하기가 어려워집니다. 예를 들어서, 단일 Entity span만을 사용한다면 모델의 output을 해석할 필요 없이 모델의 예측값을 그대로 사용하면 됩니다. 하지만 context가 포함되면 각각의 token에 대한 예측값을 구분할 필요가 있습니다.

GNER 모델은 이 문제를 해결하기 위해 BIO 전략을 사용합니다. negative sample 은 "O" tag를 사용하고 entity type에 해당하는 token은 "B-entity type" 과 "I-entity type" 으로 라벨링합니다. 모델의 output은 각각의 token에 대해 BIO label을 예측하는 아래와 같은 형태입니다. 


#### Output Example
```
John(B-Person) explored(O) Tokyo(B-Location)
......(omitted text) and(O) flew(O) back(O) to(O)
New(B-Location) York(I-Location) .(O)
```

최종적으로 모델은 아래와 같은 Propmt를 활용하여 모델을 Instruction Tuning 합니다. GoLLIE 에서 사용한 Regularization 과 external entity type sampling을 훈련에서 사용합니다.

<div style={{textAlign: 'Center'}}>
    <img src={gner_prompt} style={{border: 'solid', width: 500}} />
</div>

### Long Sequence prediction Issues

TokenClassification 으로 BIO 태그를 예측하는 Bert-base 모델과 달리 `token(label)` set을 생성하는 LLM 방식은 generation 에 의한 고질적인 문제가 당연히 발생합니다. **Omission, Additions and Substituions** 가 대표적인 예시입니다. 단어가 생략되거나, 없던 단어가 추가되거나 단어가 변형되는 문제입니다. 


모델의 output `token(label)` set이 input token set과 일치하지 않으므로 모델의 에측 label을 적절하게 input token에 할당해주기 위한 처리가 필요합니다. GNER에서는 **Longest Common Subsequence** 알고리즘과 **Back Tokenization**을 활용합니다. 이 부분의 실제 구현은 논문의 뉘앙스와 약간 차이가 있습니다.

**Back Tokenization**은 예측 토큰이 원본과 다르게 변형된 경우에 대응합니다. LLM은 가끔 생성 과정에서 오타를 고치는 등의 원단어의 변형을 일으킵니다. 예를 들어서 `antropologia` 라는 단어가 `antropologa` 로 바뀌어서 생성되는 경우가 있습니다. Back Tokenization은 이 문제를 어느정도 해결하기 위한 알고리즘으로 원본 단어를 그대로 예측 값과 매칭하지 않고 model vocabulary를 사용하여 tokenizing -> detokenizing step을 거쳐 사용합니다. 모든 변형을 잡아낼 수 는 없지만 일부 케이스는 잡아낼 수 있습니다. 예를 들어, `antropologia` -> `antro, polo, g, <unknown>, a` -> `antropologa` 로 매칭되어 변형에 더욱 강인해집니다.

원본 word 에 대한 back tokenization결과가 생성된 단어와 매칭이 되지 않을 경우에는 생성된 단어와 원본 단어가 얼마나 일치하는지 확인합니다. 확인하는 방법은 두 단계로 첫 번째 방법은 **substring match**입니다. substring match가 맞지 않을 경우 **Longest Common Subsequence** 알고리즘을 통해 실제 토큰 셑과 예측 토큰 셑 사이 일치하는 토큰이 가장 많아지는 매핑을 찾습니다. LCS 알고리즘에 대해서는 따로 설명하지 않겠습니다. 


## Result

**Zero-shot** 에서 GNER 모델은 거의 모든 데이터셑에서 f1@60 점을 넘어갑니다! GNER-7B 모델은 UniNER-7B 보다 f1@12.7 점을 평균적으로 앞섭니다. GNER-7B 모델은 UniNER-13B 모델도 f1@10.5점 앞서고 있습니다. 7B 보다 더 작은 사이즈의 모델도 UniNER 과 비슷하거나 더 좋은 성능을 보여줍니다.

**Supervised Evaluation**은: UniNER, InstructUIE 와 같은 backbone 모델, 같은 dataset 을 사용해 비교합니다. flan-T5 모델을 활용한 경우 f1@4.6점 앞서고, LLama 모델의 경우 f1@1 점이 향상됩니다. GNER 논문의 결과를 살펴보면 모델의 사이즈가 어느 정도 이상 커지면 성능 향상 속도가 수렴합니다. supervised setting 에서는 783M 사이즈 모델로도 충분히 모델이 문제를 잘 해결하고 있다는 말이기도 합니다.

<div style={{textAlign: 'Center'}}>
    <img src={gner_sup} style={{border: 'solid', width: 500}} />
</div>

논문에서는 GNER-T5-large 모델이 UniNER 에 비해 10배 적은 사이즈, 10배 빠른 inference 속도에서 더 좋은 성능을 보여주고 있음을 강조합니다.

### Ablation Study: Beam Search

LLM의 경우 generation 에서 잘 알려진 **beam search 보다 nucleus sampling을 활용**합니다. nucleus sampling은 beam search에 비해 surprising result가 잘 생성된다는 장점을 가지고 있습니다.


<div style={{textAlign: 'Center'}}>
    <img src={gner_beam} style={{border: 'solid', width: 500}} />
</div>

IE task를 푸는 과정에서도 beam search 와 nucleus sampling 에 의한 성능 변화가 있습니다. **UniNER 방식의 접근의 경우 Beam search를 사용할 경우 beam size가 커질수록 성능이 하락**합니다. 반면, **GNER은 beam search를 활용하면 성능이 향상**됩니다. 저자들은 이 현상이 beam size가 커지면 subsequent token들을 번역하면서 earlier mistakes가 고쳐진다고 이야기합니다.

예를 들어서, "Tesla CEO Elon Musk" 까지 모델이 확인했을 때 Elon Musk를 PERSON으로 예측하지 못하더라도, "Tesla CEO Elon Musk plays an ..." 까지 확인한 뒤에는 가장 확률 높은 Beam 이 Elon Musk를 PERSON으로 예측하게 되는 경우가 많았다는 사실입니다.

# Conclusion

BIO tagging 방식이 LLM에서 시도해보는 것이 생각해볼만한데 생각해본적이 없었습니다. GNER 모델은 단순히 BIO schema를 적용하는 것이 아니라 모델이 negative sample을 학습하는 것이 중요하다고 주장합니다. 그리고 실제로 성능 향상이 매우 컸으며 성능이 수렴하는 모델 사이즈도 크게 낮추었습니다.

### Limitation

GNER 모델은 flat-NER 방식이 적용되어 불연속적으로 등장하는 entity를 처리하기 어렵다는 점을 문제로 꼽습니다. 그런데 이런 복잡한 구조의 entity prediction은 언제나 어려운 일이었습니다.

# Ref

1. [Rethinking Negative Instances for Generative Named Entity Recognition](https://arxiv.org/pdf/2402.16602.pdf)