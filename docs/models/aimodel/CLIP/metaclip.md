---
id: metaclip
sidebar_position: 500
---
import meta_20k from './asset/meta_20k.png';
import meta_pipeline from './asset/meta_pipeline.png';

# MetaCLIP
## Demystifying CLIP Data

CLIP 논문은 성공적인 Language-Image Pre-training 모델이며 수많은 논문과 태스크에서 backbone 모델로 활용되고 있습니다. 최근의 연구들은 CLIP 논문과 모델의 성능에 대한 연구들은 CLIP의 모델 구조와 학습 프레임워크보다 **그 데이터**가 중요하게 작용했다고 보고 있습니다. 하지만 CLIP 데이터셑 생성 방법에 대한 정보는 거의 없습니다.

CLIP 이후 논문들이 CLIP 과 유사한 방식으로 web data를 수집하거나 CLIP dataset: WIT400M을 활용하여 추가적인 정제를 함으로써 성능 향상을 보여주는 맥락이 많아졌습니다. **MetaCLI은 CLIP 데이터셑 자체에 조금 더 집중**합니다. 데이터셑에 대해 공개된 내용이 별로 없으니, CLIP 논문을 집중적으로 파고듭니다.

### Advantage of CLIP's Curated Data

CLIP 데이터가 가지고 있는 가장 큰 강점 두가지가 있습니다. 

첫 번째는 **web data 를 전부 모으는 작업을 먼저 시작해(from sratch) 필터를 통한 bias를 제거**합니다. 두 번째로, **메타데이터에 대한 데이터 분포를 균형있게 조절**하고 있습니다. 이는 데이터셑에 **내재된 noise를 제거하지 않고 조정하는 형태로 보존**합니다. Pretrain 모델 학습을 위한 데이터는 이러한 task-agnostic 한 특성이 특히 중요합니다.

## 데이터 - MetaCLIP

MetaCLIP 은 전체 data pool $D$와, data crawling에 사용된 쿼리 텍스트와 이미지 정보인 meta data $M$으로부터 balanaced subset $D^*$을 생성하는 것: $D^* \gets f(D; M)$ - 을 목표로 합니다. 이 과정을 Curation process라고 합니다. MetaCLIP 은 Curation 과정을 통해 400M사이즈의 데이터를 생성하고 CLIP 과 같은 모델, 훈련 파이프라인을 통해 더 향상된 성능을 보여줍니다.

MetaCLIP paper는 CLIP 논문에서 사용된 문장들을 분석하는 것을 위주로 데이터셑을 구성해 나갑니다.


```
To address this, we constructed a new dataset of 400 million (image,
text) pairs collected from a variety of publicly available sources on the Internet.
To attempt to cover as broad a set of visual concepts as possible,
we search for (image, text) pairs as part of the construction process whose
text includes one of a set of 500,000 queries We approximately class balance the results
by including up to 20,000 (image, text) pairs per query.
```


### Meta Data: Query(Entry) Collection

```
The base query list is all words occurring at least 100 times in 
the English version of Wikipedia. This is augmented with bi-grams
with high pointwise mutual information as well as the names of
all Wikipedia articles above a certain search volume.
Finally all WordNet synsets not already in the query list are added.
```

먼저 클립에서 사용한 50만개의 쿼리셑을 구성해야합니다. CLIP 논문을 기반으로 쿼리셑은 다음과 같이 구성됩니다.

- WordNet 의 모든 synset
- 영어 Wiki-Pedia 에서 100 번 이상한 등장한 unigram word.
- high pointwise mutual information : 독립적으로 사용되는 것보다 함께 사용될 확률이 훨씬 높은 bi-gram
- 특정 횟수 이상 검색된 위키 피디아 문서의 제목

MetaCLIP은 쿼리 개수를 기반으로 (3), (4) 항의 threshold를 추정합니다. (30, 70)

### Data pool: Substring Matching : Text -> Query(Entry)

```
We also restrict this step in CLIP to text-only querying for sub-string matches
while most webly supervised work uses standard image search engines ...
```

CLIP의 data source는 알려져있지 않습니다. 다양한 source에서 수집했다고만 언급되어 집니다. MetaCLIP 은 CommonCrawl(CC)를 적용해서 iamge-text pair를 수집합니다. 그 후, sub-string match를 통해 query 와 매핑되는 텍스트를 정제합니다. 하나의 텍스트는 하나 이상의 entry와 매핑될 수 있습니다. 평균적으로 약 3.5개의 entry가 단일 텍스트에 매핑된다고 합니다. 

최종적으로 이 과정을 통해서 1) **low-quality texts are dropped**, 2) **unstrucuted text를 meta data의 집합이라는 structured form으로 표현 가능**해집니다. Common Crawl을 통해 수집된 텍스트 중 50% 정도가 이 과정을 통과했으며, case-by-case rule-base filter를 통해 제거해야 하는 노이즈를 자동으로 제거할 수 있습니다.

#### Entry -> Text: Entry 관점에서 데이터 분석

text -> entry mapping 의 역과정을 통해 **entry -> text 데이터를 구축**할 수 있습니다. entry 에 매칭된 텍스트 수의 분포는 **long-tail 분포**를 형성하며 **114k/500k 개의 entry가 매칭된 텍스트가 없었다**고 합니다. 또한 **상위 3.2% 의 entry 가 전체 데이터의 94.5% 에 해당하는 텍스트와 매칭**이 되었다고 합니다. 그리고 이 상위 entry들은 **주로 그렇게 의미가 없는 텍스트**: "외", "사진" - 과 같은 텍스트들이 많았습니다. 이러한 텍스트들은 **특정한 visual concept가 없으므로 학습 과정에서 노이즈**가 될 수 있습니다. 

### Sampling : Balancing

CLIP의 curation의 핵심은 matched entries의 숫자 균형을 맞추는 일입니다. 최대한 다양한 entry를 포함하는 텍스트를 샘플링하면서, 노이즈를 조정하는 작업입니다. MetaCLIP 논문은 entry마다 $t=20k$개까지의 샘플을 샘플링합니다. metaCLIP 에서는 이 **20k**라는 샘플링 넘버에 **magic number**라는 거창한 이름을 붙입니다. 

샘플링 과정은 랜덤 샘플링이 아닙니다. **각각의 entry에 대해서 다양한 entry와 매칭된 텍스트일수록 높은 샘플링 확률을 가집니다.**

#### Effect : Sampling, Balancing
entry-stratified sampling 방식은 Data Pool 형성 과정에서 언급한 **1) long-tail problem을 완화**시켜 줍니다. 또한 **2) data distribution이 훨씬 더 다양해지고 균형**이 맞추어집니다. 또한 **3) 샘플링 로직으로 인해 풍부한 semantic information을 가진 텍스트가 데이터풀에서 많아지**게 됩니다.


<div style={{textAlign: 'Center'}}>
    <img src={meta_20k} style={{border: 'solid', width: 700}} />
</div>

이 샘플링 과정을 효율적으로 하는 알고리즘 이야기를 하는데.. 크게 중요하지 않은 것 같습니다.

## Result

t=20k로 설정한 MetaCLIp이 openAI CLIP에 비해 평균적으로 더 좋은 성능을 보여주고 있습니다. t=140k 까지의 실험이 함께 진행 되었습니다. t=140k 사이즈 데이터셑이 더 좋은 성능을 보여주지만 각각 1B vs 4M 데이터셑 크기를 고려헀을 때 거의 수렴했다는 결론을 얻은 것으로 보입니다. 또한 **t=20k 데이터는 일부 데이터셑에 fine-tuning 했을 때 더 좋은 성능**을 보여주기도 했지만 일반적으로는 **t=140k가 더 좋은 성능을 보이긴했지만 20k에 비해 거의 수렴한 결과**로 보인다고 해석한 듯 합니다.

140k 정도면 Balancing이 의미없는 거 아니냐! Sampling Rule없이 raw 전체 데이터를 통해 학습한 결과 20k sampling에 비해 큰 성능 하락이 관찰 되었다고 합니다.


## Pipeline

<div style={{textAlign: 'Center'}}>
    <img src={meta_pipeline} style={{border: 'solid', width: 500}} />
</div>
논문에서는 데이터 처리의 각 과정을 어느 단계에서 수행했는지까지 공개합니다. 당연히, 이미지 다운로드와 같은 부하가 큰 작업등을 뒤쪽에 하는 데이터 수집 & 정제의 효율을 최대화 하기 위한 파이프라이닝입니다.

## Conclusion

전 사실 이 논문을 보기 전까지는, CLIP이 단순히 엄청나게 많은 Web data crawling을 통해서 pretraining dataset을 구현했다고 생각하고 있었습니다. 그래서 이후 논문들의 CLIP 데이터 분석에 많이 집중을 했었는데 CLIP 논문 자체의 데이터에 대한 분석이 이 정도 깊이를 가질 수 있을 줄 몰랐습니다. 재미있는 논문이고, 데이터셑 구성이라는 관점에서 도움이 되는 논문같습니다.

학습 데이터 구축에서 언제나 고민되는 것 중 하나가 데이터의 balancing과 실제 데이터 분포의 반영입니다. 이 논문에서는 이를 완화할 수 있는 적당한 solution을 제공한 것 같습니다. 다만 20k 라는 숫자에 대해서는 다른 태스크 적용할때 적절한 값으로 대체하기 힘들 것 같습니다. 

# Ref
1. [DEMYSTIFYING CLIP DATA](https://arxiv.org/pdf/2309.16671.pdf)