---
id: amacer
sidebar_position: 2
tags:
  - amazon
  - 2023
---
import amacer_overall1 from './asset/amacer_overall1.png';
import amacer_overall2 from './asset/amacer_overall2.png';
import amacer_result from './asset/amacer_result.png';

# Amacer
## Toward open-world product attribute mining: a lightly-supervised approach

E-commerce 분야에서 attribute extraction 을 푸는 가장 대표적인 방법은 QA 방식인데, 이 논문은 **clustering 기반의 semi-supervised 방식**을 사용합니다. E-commerce 분야에서 구축된 속성 데이터의 특징에 대해서 조금 더 살펴보고 왜 semi-supervised approach 가 필요한지 살펴봅시다.

- 속성의 구조 : 속성키, 속성값들은 가지고 있지만 구조가 복잡하다.
- 상품-속성 data : 상품에 대한 속성키-속성값의 관계가 부정확한 경우가 많다.
  - 특히 false negative 가 심각함.
- messy data source
  - 상품의 속성 데이터를 어떤 상품 정보에서 확인할 수 있는지 불명확한 경우가 많다.

Amacer 논문은 그래서 상품-속성 데이터는 매우 신뢰도가 낮으므로 supervised 방식을 사용할 수 없다고 주장하면서, 가지고 있는 속성키와 속성값 그리고 속성 텍스트를 기반으로 클러스터링 모델을 학습합니다. 그리고 가지고 있는 상품 데이터를 포함한 다른 데이터들을 un(semi)-supervised heuristic 으로 활용합니다. 또한 semi-superivsed 방식을 사용하기 때문에 두 가지 장점이 강조됩니다.
- annotaion 이 없는 상황에서 활용할 수 있는 open-world solution 이다.
- open-world solution 이므로 **새로운 속성 그룹**을 찾아낼 수 있다.

---

- 페이퍼 링크
  - [Toward open-world product attribute mining: a lightly-supervised approach](https://assets.amazon.science/52/03/ee96da8b4520a8d2c05915c4a4a0/towards-open-world-product-attribute-mining-a-lightly-supervised-approach.pdf)

## Amacer: Model Review

Amacer 논문의 전체적인 흐름은 다음과 같이 이루어집니다.

<div style={{textAlign: 'center'}}>
 <img src={amacer_overall1} style={{width: 500}} />
</div>

먼저 논문에서 상정하는 가지고 있는 데이터는, **weakly annotated product tex**t: 상품명, 상품설명- 과 **raw attribute text**: 속성키, 속성값 그리고 속성을 나타내는 text 뭉치- 입니다. 서술했듯이 product text data 와 attribute text 사이의 관계는 거의 없습니다. 우리는 상품 정보 - 속성 정보 관계를 활용해서 모델에게 무언가를 가르칠 수 없습니다.

먼저 같은 속성 키에 매핑되는 속성 텍스트들의 임베딩이 서로 가까워지고, 다른 경우 멀어지도록 metric learning 을 수행합니다.

그 후, 가지고 있는 상품 텍스트로부터 얻은 heuristic information 을 활용해 metric learning 을 보조합니다. 논문에서는 두 가지 heuristic 을 활용합니다.
- 같은 문장: 상품명, 상품 상세 설명 - 에 포함된 text span 은 같은 속성키일 확률이 높다.
- 한 상품명은 여러 가지 속성의 집합으로 설명할 수 있다. (이 heuristic 은 속성 추출과 관련된 다양한 연구에서 사용합니다.)

마지막으로 학습된 임베딩을 사용해서 clustering 을 수행합니다.

### 데이터 구축

supervised learning 에 사용하는 seed text span 구축과 unsupervised learning 에 활용할 candidate text span 생성으로 나뉘어집니다.

- seed span 

가지고 있는 속성키와 속성값, 추가적으로 상품 정보등을 활용해서 **속성을 나타내는 text** 를 최대한 생성합니다. 이 과정에서 사용할 수 없는 Noisy or long tailed attribute 는 제거합니다. 이 단계에서 생성되는 데이터의 예시는: `"{맛: [복숭아 맛, 키위, 딸기향 함유], 성분: [콜라겐 함유, 설탕 무첨가]}"`.

- candidate span 생성

상품 정보 내에서 **속성을 나타낼 가능성이 높은 text** 를 추출합니다. unsupervised learning 에 사용될 데이터이자, Infernce 의 input 입니다. 이미 언급했듯이 상품 텍스트 내의 속성 정보가 없으므로 heuristic information 을 활용해야 합니다. 논문에서는 몇 가지 기존 연구를 소개하며 실험 결과 **품사 기반 태깅(POS-tag) 방식**이 가장 좋은 성능을 보였다고 합니다. 예를 들어서, `형용사+명사: 뜨거운 우유` 는 candidate span 으로 추출하되 `명사+동사: 배송이 느려요` 와 같은 형태는 candidate span 으로 추출하지 않는 식입니다.

개인적으로 해당 논문에서 가장 핵심적인 부분은 높은 퀄리티의 candidate span 생성이라고 생각합니다.

### Model Train

모델 학습은 3가지 Task를 수행합니다.

<div style={{textAlign: 'center'}}>
 <img src={amacer_overall2} style={{width: 500}} />
</div>

- Contrastive learning

같은 속성에 해당하는 seed text embedding 은 서로 가까워지도록, 다른 속성에 해당하는 seed text embedding 은 서로 멀어지도록 metric learning을 수행합니다. 구체적으로는, 같은 batch 내의 negative sample 들의 거리를 멀어지도록 하는 in-batch negative contrastive loss 를 사용합니다.

- Self-supervised Contrastive Learning

같은 상품 텍스트 내에 속하는 candidate text span embedding 은 서로 가까워지도록, 같은 상품 텍스트 내에 속하지 않는 candidate span embedding 은 서로 멀어지도록 학습합니다.

- Unsupervised Product-to-Attribute distribution

한 상품명은 여러 가지 속성의 집합으로 해석할 수 있다고 했습니다. 한 마디로 여러가지 속성이 주어지면 상품의 분포를 추론할 수 있다는 이야기 입니다. 예를 들어서, `복숭아 맛, 무지방, 우유` 라는 정보가 있다면 `복숭아맛 무지방 우유` 상품의 확률이 가장 높고, `딸기방 무지방 우유` 가 약간 낮은 확률을 가지고 있으며 `생과일 음료수` 같은 경우는 확률이 매우 낮을 것입니다.

 이로부터 역으로 생각하면, `복숭아맛 무지방 우유` 상품이 주어진다면 `복숭아 맛, 무지방, 우유` 속성이 가장 확률이 높을 것이며 `딸기맛, 음료수`와 같은 속성의 확률은 낮을 것입니다. 일종의 variational distribution inference 입니다. 상품명 embedding 이 주어졌을 때 candidate span embedding 의 확률을 계산하는 작은 모델을 사용해서 실제로 상품명 embedding 에서 나타난 candidate span 의 확률이 높아지도록 학습을 진행합니다.

 ### Clustering

 논문에서는 임베딩 공간상 거리를 기반으로 하는 clustering 알고리즘을 제안합니다. 또한 DBSCAN 과 같은 off-the-shelf clustering 알고리즘 역시 활용합니다. 같은 클러스터로 뭉친 text 들은 같은 attribute 에 매핑되는 raw text span입니다.

 ##  Amacer: Reslt

 amacer 모델의 가장 큰 장점은, open-world solution 이므로 recall 이 높으며 새로운 속성 그룹을 찾아낼 수 있다는 점입니다. 대신 closed-world model 에 비해 precision 이 많이 낮은 편입니다. 논문에서는 새로운 속성에 대한 지표도 제공하니 관심있으시면 확인해보시면 좋을 것 같습니다.

아래 표에서 exact match 는 실제 gold span 에 대한 clustering 결과에 대한 지표를,
partial match 는 Candidate span 에 대한 결과에 대한 지표입니다. candidate span 은 속성이 아닌 경우가 있을 수 있으므로 precision 은 감소하지만 recall 은 크게 증가합니다.

<div style={{textAlign: 'center'}}>
 <img src={amacer_result} style={{width: 500}} />
</div>

마지막으로 논문에서 이야기하는 상품명과 상품 상세의 특성은 다음과 같습니다.

- 상품명 : 속성 데이터가 적으나, 고품질의 데이터이며 모델이 쉽게 학습한다.
- 상품 상세 : 속성 데이터가 많으나(상품 상세에서 2/3가 넘는 속성 데이터가 추출됨), 모델이 학습을 쉽게 하지못해서 성능은 떨어진다.

## Conclusion

데이터가 별로 없는 **초기 속성 데이터의 구축**에 활용할 수 있는 방법이며, 어느정도 속성 데이터가 구축된 후에도 **신규 속성 발굴** 이라는 중요한 과제에서 활용할 수 있는 모델이다. 다만 다양한 heuristic 을 활용해야 하므로 도메인과 데이터에 대한 이해가 높아야 할 것같다.



