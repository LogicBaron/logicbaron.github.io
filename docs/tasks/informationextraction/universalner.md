---
id: universalNER
sidebar_position: 1
---

# UniversalNER

이ㄴ 경우는 처음보는데 UniversalNER 이라는 별명을 가지고 나온 논문이 두 개 있습니다. 1년 정도 밖에 시간 차이가 나지 않는데 저자도 완전히 다릅니다. 

첫 번째 논문은 2023년 11월에 출판되었고 두 번째 논문은 2024년 1월에 출판되었습니다. 고작 2달 정도 밖에 차이가 안 나는데 이 두 논문은 언어 이해 분야에서 얼마나 빠르게 변화가 일어나고 있는지 보여주는 논문들입니다. 

2023년의 논문은 전통적인 NER 방식을 사용했고, 2024년의 논문은 LLM 을 활용합니다. Universal의 의미도 다릅니다. 2023년도의 논문은 **"Universal Language NER"** 이라는 의미입니다. 2024년도의 논문은 **"Universal Name(Class)"** 의 의미를 가집니다. 

이 글에서는 두 가지 논문을 둘다 다루려고 합니다.

## UniversalNER: 2023

2023년도 Universal NER 논문의 "Universal" 은 **언어의 종류** 측면에서 Universal을 의미합니다. 매우 다양한 언어로, 한정된 Entity : PERSON, LOCATION, ORGANIZATION - 에 대한 NER 모델을 학습하는 것이 주요한 목표입니다.

