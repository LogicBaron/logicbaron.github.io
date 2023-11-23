import aveqa_attribute_per_category from './aveqa_attribute_per_category.png';
import aveqa_datastat from './aveqa_datastat.png';
import aveqa_aveqa from './aveqa_aveqa.png';
import aveqa_maveqa from './aveqa_maveqa.png';
import aveqa_result from './aveqa_result.png';


# AVEQA & MAVEQA

구글에서 발표한 속성 데이터셑은 MAVE 와 속성 추출 모델 AVEQA 와 MAVEQA 를 간단하게 리뷰. 특히 모델의 경우, 상세한 architecture 보다는 idea 위주로 정리하겠습니다.

- 페이퍼 링크
  - [AVEQA](https://dl.acm.org/doi/pdf/10.1145/3394486.3403047)
  - [MAVE](https://dl.acm.org/doi/pdf/10.1145/3488560.3498377)


## MAVE dataset

E-commerce 영역에서 속성 추출 과제의 가장 큰 문제점은 데이터입니다. 

- incomplete data
- messy data source
- complex strucutre

MAVE 논문에서는 아마존 데이터로부터 속성 데이터 구조를 제안하고, 220만건에 달하는 상품에 대한 속성 데이터셑을 구축합니다. 특히, MAVEQA 데이터셑은 **신뢰도 높은 negative data 를 정제**해놨다는 점과 text span 단위 annotation 을 통해 Positive data 의 신뢰도 + data source 문제가 어느정도 해결되었다는 점에서 의의가 있습니다.

### 속성 데이터 구조

MAVE 데이터셑은 카테고리 별로 필요한 (속성키, 속성값) 쌍을 우선 구성합니다. 그 후, 상품의 카테고리에 따라 (속성키, 속성값) 을 채우는데 알 수 없는 경우에는 속성값을 `None` 으로 합니다.

예를 들어서, 신발 카테고리에 속하는 상품은 (타입, 운동화), (색깔, 회색) 그리고 (끈길이, None) 과 같은 속성을 가지며 책 카테고리에 속하는 상품은 (타입, 소설), (표지, 양장), (구성, 3권세트) 와 같은 식으로 데이터가 구축됩니다.


<div style={{textAlign: 'center'}}>
 <img src={aveqa_attribute_per_category} style={{width: 400}} />
</div>

### 속성 데이터 구축

- 속성 데이터 수집

아마존 리뷰 데이터셑으로부터 220만개 상품에 대한 정보 - 상품명, 브랜드, 상품설명, 특징, 가격 등 - 을 수집한다.

- 카테고리 정제

카테고리 분류 모델을 학습시키고, 카테고리 확률이 50% 미만인 상품들을 데이터셑에서 제외합니다.

- hand-craft + rule-base annotation

검수자들의 수기 검수를 통해 **Gold dataset** 을 구축합니다. 또한 검수자들이 구축한 extraction rule 을 사용한 rule-base extraction 을 통해 **silver datset** 을 구축합니다.

- model + human curating.

위에서 구축한 silver + gold dataset 을 사용해 5개의 속성 추출 모델을 학습합니다. 각 모델은 initialization, training data version 그리고 pre-post processing 방법에서 차이가 납니다. 속성 추출 모델은 아래에서 기술할 AVEQA 모델을 사용합니다. 모델의 검출 결과는 사람이 비교적 단순한 검수 프로세스를 통해 normalized attribute value 로 mapping 합니다.

최종적으로 모든 모델에서 똑같이 추출된 속성은 **positive set** 으로, 모든 모델에서 값이 추출되지 않은 속성은 **negative set** 으로 분류합니다. postive set 에 대해서는 low false positive rate 를, negative set 에 대해서는 low false negative rate 를 기대할 수 있습니다.

각각의 상품 정보에 대해서 속성키에 대한 character-level annotation -> token-level annotation 알고리즘을 적용합니다.

### 속성 데이터 통계

<div style={{textAlign: 'center'}}>
 <img src={aveqa_datastat} style={{width: 400}} />
</div>

## AVEQA

aveqa 는 BERT-base NER 을 수행합니다. 모델의 input 으로 `[CLS] + attribute key + product text` 를 사용하며, 세 가지 task를 통해 학습합니다.

<div style={{textAlign: 'center'}}>
 <img src={aveqa_aveqa} style={{width: 700}} />
</div>

- question-answering

token-level classification. attribute text span 의 B(begin) token 과 E(end) token 예측. NER 과 비슷하지만 CRF layer 를 사용하지 않는다.

- no-answer classification

text-level classification. CLS token 으로 현재 attribute key 에 대한 attribute value 가 텍스트 안에 존재하는지에 대한 binary classification.

- Distilled MLM

attribute extraction 모델에서 중요한 점은 처음보는 상품명 또는, 처음보는 속성키에 대한 속성값의 예측 성능이다. 하지만 QA 모델들은 주어진 상품 도메인,속성키에 대해서만 학습하므로 generalization 이 잘 안되고 이로 인해 zero-shot 성능이 떨어진다. 논문에서는 pretrained bert와 MLM task 의 output이 같아지도록 학습함으로써 over-fitting 을 방지하고 zero-shot 성능을 끌어올린다.

특히, cross-entropy 에서 높은 Temperature(>1) 를 사용해서 전체 vocab 에 대한 Ouptut distribution 유사도가 높아지도록 학습한다.

## MAVEQA

aveqa 모델과 거의 유사하지만, 다양한 텍스트 소스 - 상품 카테고리, 상품 상세설명 등 - 을 추가로 사용한다. 이 부분에서 두 가지 aveqa 와 다른 점이 두가지 생깁니다.

<div style={{textAlign: 'center'}}>
 <img src={aveqa_maveqa} style={{width: 700}} />
</div>


- more global tokens
기존 AVEQA 는 텍스트 전체에 대한 global token [CLS] 를 사용했는데, maveqa 에서는 각각의 텍스트 source 에 대한 global token 을 사용합니다. 예를 들어서 [CATEGORY], [ATTRIBUTE], [TITLE], [DESCRIPTION] 과 같은 식입니다. 각각의 토큰은 해당 Text source 안에 attribute key 에 대한 value 정보가 있는지 없는지를 판단합니다.(aveqa 와 마찬가지로...)

- ETC encoder w. 4 new attention mechanism

논문이 쓰여진 2022 년이 long text 를 위한 attention mechanism 이 많이 연구되던 시기였던 것 같은데, 해당 논문에서도 더 많은 text input 을 사용하기 위한 4가지 attention mechanism 을 제안합니다.

다만 특별할 건 없고, 각 

1) 데이터 소스 global token - 데이터 소스 text 간 attention, 
2) 데이터 소스 global token 간 attention
3) 데이터 소스 text 의 internal token 간 attention
4) 데이터 소스 text - 데이터 소스 global token 간 attention 

으로 이루어져 있습니다.

### Result

거의 모든 지표에서 maveqa 는 98~100% f1 에 달하는 무지막지한 점수를 보여줍니다. 

<div style={{textAlign: 'center'}}>
 <img src={aveqa_result} style={{width: 700}} />
</div>

일단, opentag 에 비해서는 훨씬 좋은 성능을 보여주고 있습니다. 
- transformer based model 이 Bilstm-CRF 기반 opentag 모델보다 좋은 성능을 보여준다. 이는 attribute key 의 문맥 정보를 전체 텍스트가 골고루 참조하기 때문.

근데 중요한 점은 aveqa 역시 비슷한 성능을 보여준다는 점입니다.
- maveqa 의 가장 큰 특징은 aveqa 에 비해서 훨씬 긴 text 를 사용하는데 실제로 매우 긴 텍스트를 가진 상품에 대해서는 maveqa 의 성능이 우세하지만 대부분 상품의 텍스트 데이터가 aveqa 모델의 크기에서 해결가능함.

더 중요한건, aveqa 의 성능이 85% -> 98% 대로 크게 올랐다는 점인데,
- 테스트셑의 정제도 큰 영향을 미쳤겠지만 당연히 매우 크고 질이 좋아진 데이터셑으로 학습했다는 부분이 큰 영향을 미쳤다. 데이터셑 논문에 알맞은 지표.

## Conclusion

 기존 데이터셑(AE-)에 비해 10배 이상 큰 규모의 비교적 상질의 데이터셑 MAVE를 구축했다. **신뢰도 높은 Positive 데이터셑과 신뢰도 높은 negative 데이터셑을 구분하는 점**이 포인트라고 생각된다. 그 후 close-world solution + high quality large dataset 으로 attribute extraction 에서 보기 드문 매우 좋은 성능을 보여줌.

단점도 존재한다. zero-shot 에 대한 탐구는 있지만, open-world 로 활용이 불가능하다. 리뷰 데이터 등을 활용한 새로운 속성 발굴에서는 한계가 있을 것.