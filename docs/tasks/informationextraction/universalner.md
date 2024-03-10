---
id: universalNER_2023
sidebar_position: 1
---

# UniversalNER: 2023

이ㄴ 경우는 처음보는데 UniversalNER 이라는 별명을 가지고 나온 논문이 두 개 있습니다. 1년 정도 밖에 시간 차이가 나지 않는데 저자도 완전히 다릅니다. 

첫 번째 논문은 2023년 11월에 출판되었고 두 번째 논문은 2024년 1월에 출판되었습니다. 고작 2달 정도 밖에 차이가 안 나는데 이 두 논문은 언어 이해 분야에서 얼마나 빠르게 변화가 일어나고 있는지 보여주는 논문들입니다. 

2023년의 논문은 전통적인 NER 방식을 사용했고, 2024년의 논문은 LLM 을 활용합니다. Universal의 의미도 다릅니다. 2023년도의 논문은 **"Universal Language NER"** 이라는 의미입니다. 2024년도의 논문은 **"Universal Name(Class)"** 의 의미를 가집니다. 

이 글에서는 두 가지 논문을 둘다 다루려고 합니다.

## UniversalNER: 2023

2023년도 Universal NER 논문의 "Universal" 은 **언어의 종류** 측면에서 Universal을 의미합니다. 매우 다양한 언어로, 한정된 entity type : `PERSON`, `LOCATION`, `ORGANIZATION` - 에 대한 NER 모델을 학습하는 것이 주요한 목표입니다. 이 논문의 Contribution은 **데이터셑 구축** 과정입니다. 해당 논문은 **12개의 언어, 18개의 데이터셑**에 대해서 NER 데이터셑을 구축합니다. 이 과정에서 저자들이 사용한 데이터의 양식, annotation 방법과 정제 로직등을 디자인을 위주로 소개하겠습니다.

### 데이터

Universal NER 프로젝트에서 데이터 생성을 위한 첫 번째 단계는 다양한 언어에서 일반적으로 사용될 수 있는 common tagset 을 생성하는 것이었습니다. UD, UPOS 프로젝트는 다양한 언어에 걸쳐 구문 구조 ; 품사 체계라는 공통적인 entity set 을 사용하고 있습니다. 이와 같이 UNER 에서는 3가지의 cross-language  entity type: person (`PER`), location (`LOC`) 그리고 organization (`ORG`) 라는 3가지 entity type 에 대해 annotation을 수행합니다.

#### Annotation Guidelines

UniversalNER 은 NorNE 프로젝트 가이드라인을 활용해서 추가 가이드라인을 만들어 사용합니다. tag description 과 함께 다양한 상황 : 이메일, 주소 그리고 오타 - 에서의 annotation rule 을 제시합니다. 그리고 가이드라인, changelog 그리고 데이터셑을 가이드라인 버전에 따라 관리했습니다.

#### Sourcing Data

Universal Dependency (UD) Corpra 가 이미 데이터 수집, 정제, 토크나이징, 라이센싱과 같은 많은 작업을 진행했기 때문에 UniversalNER 은 이 데이터에 대해 추가적인 annotation 작업만 진행했습니다. 

UD annotation은 워드 레벨에서 진행되었기에 UNER 역시 워드레벨 어노테이션을 진행했으며 \{B-X, I-X, O\} 태깅 방식을 사용했습니다. 또한 UNER은 UD treebank 에 NER 태깅하는 작업들도 적극적으로 활용했다고 합니다.

#### Sourcing Annotator & Annotation Tool

 제일 중요한 부분이죠. UniversalNER 프로젝트는 native speaker annotator 을 모집해서 수기 검수를 진행하빈다. 

TALEN annotation tool을 활용합니다. TALEN 은 몇 가지 기능을 가지고 있는데, 그 중 한가지는 annotation propagation입니다. 이 기능은 document 의 어떤 단어를 annotation하면 그 문서 내의 모든 해당 단어를 동일하게 annotation 해주는 기능인데, 데이터 생성 속도를 크게 향상 시켜주지만 노이즈 역시 꽤 증가했다고 합니다. 

#### Secondary Annotator

하나의 데이터셑을 전담하는 검수자와 별개로 각 데이터의 subset (최소 전체 데이터의 5% 이상 크기) 를 검수하는 secondary annotator 가 있습니다. secondary annotation의 목적은 inter-annotator agreement 확인입니다. 

하나의 document에 대해서 여러 명의 annotator가 있을 경우 **"가장 많은 annotation"** 을 만든 검수자의 검수 결과를 라벨로써 사용합니다. 그리고 데이터셑은 이러한 document-annotation을 모아서 생성합니다. 즉 하나의 데이터셑은 여러 명의 annotator의 기여로 생성되지만 하나의 document 는 공식적으로 한 명의 annotator 만 기여합니다.

#### Annotation Difference and Resolution & Other tag

Annotator 간 Annotation 불일치가 있을 경우 두 Annotator간 합의가 필요합니다. (...) 두 Annotator 간 가이드 라인 해석에서 불일치가 있을 경우 가이드 라인 해석이 일치하도록 보조하고, 근본적인 Annotation에 대한 불일치가 있을 경우 official annotation을 따릅니다.

또한, `PER`, `LOC`, `ORG` 외의 `OTHER` tag를 유용합니다. 이는 mention, entity 로써 충분히 기능하지만 세 가지 entity type에 해당하지 않는 경우.

#### Dataset Transfer

몇 몇 데이터의 경우 기존 annotated dataset 을 활용하되, UniversalNER annotation guide 에 맞게 약간 수정하여 사용하였다고 합니다.


### 모델 & 성능

XLM-R-large 모델을 사용합니다.

언어적 특성과 annotation의 난도가 모델의 성능에 거의 직접적인 영향이 있다는 사실을 확인할 수 있습니다. 특히, 언어의 구조상으로 annotation이 매우 힘든 중국어에서 가장 낮은 cross-lingual transfer 성능을 보여줬습니다. 

또한, cross-annotator agreement 점수가 PERSON에서 가장 높고 ORG, LOC 점수가 비교적 낮았는데요. ORG와 LOC 와 관련된 tag-level performance의 성능이 가장 낮았다고 합니다. 