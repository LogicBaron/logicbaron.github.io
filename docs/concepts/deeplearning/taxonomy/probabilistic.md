---
id: prob
sidebar_position: 2
---
# Probabilistic Models

기존의 머신 러닝 모델, 특히 Representation Learning 모델들의 목적은 데이터의 수학적 표현인 **Embedding**을 학습하는 것이었습니다. 이 embedding은 **Tensor** 라는 수학적 형식으로 표현되며 **vecotr, matrix**와 거의 똑같습니다. 

하지만 정말 세상의 모든 데이터를 임베딩 공간 상의 한 지점으로 표현할 수 있을까요?

![Alt text](image-1.png)

생각보다 어떤 데이터들은 **명확**하지 않습니다. 어떤 데이터들은 모호하고, 때로는 중의적이기까지 합니다. 

**모호한 데이터**의 예를 들어볼까요? 예를 들어서 "개" 라는 텍스트는 세상의 정말 많은 "개" 를 나타내고 있습니다. 이는 "개" 라는 텍스트의 모호성을 나타내죠. 이러한 모호성은 꽤 구체적인 텍스트-또는 데이터를 상정하더라도 언제나 남아있게됩니다. "바나나 우유" 라고 해도 우리는 브랜드, 용량 등의 또 다른 특징들은 확인하지 못한채로 모호하게 남겨놔야 합니다. 

**중의적인 데이터**의 예로는 "rock"과 같은 단어가 있을 것입니다. 이 단어는 "돌맹이, 바위" 등과 관련된 단어의 의미와 "락 음악" 과 관련된 단어의 의미를 모두 가지고 있습니다. 이러한 단어의 임베딩은 어떻게 표현하 수 있을까요?

Probabilistic Embedding 은 이러한 데이터의 **모호성과 중의성**을 표현하기 위해 등장했습니다.

## How to Represent?

![Alt text](image.png)

비슷한 데이터들이 서로 뭉쳐있고 서로 다른 데이터는 떨어져있는 임베딩 공간을 상정해봅시다.

예를 들어서, "개"와 관련된 데이터들은 임베딩 공간상에서 어느정도 서로 뭉쳐있을 것입니다. "바나나 우유"는 "개" 보다는 조금 더 적은 데이터가 조금 더 밀집된 공간에 뭉쳐있을 수 있겠죠. 

이 공간상에서는 어떤 텍스트-데이터와 관련된 데이터가 뭉쳐있는 공간과 그 밀도를 "**모호한 단어의 표현**"이라고 할 수 있을 것입니다. 그리고 그러한 데이터들이 뭉쳐있는 공간, 범위 그리고 밀도 등을 표현하는 방법은 **확률 분포**입니다. 

---

그렇다면 **중의적인 표현**은 어떻게 표현할 수 있을까요?

중의적인 표현은 서로 뭉쳐있지 않습니다. **다른 의미이니만큼 임베딩 공간 상에서 유의미한 거리를 가지고 떨어져 있을 것**입니다. 그렇다고 이 두 의미의 평균과 같은 값을 사용하는 것도 적절하지 않습니다. "rock" 이라는 단어는 명확하게 "돌" 또는 "락 음악"을 의미하지 그 중간의 어떤 의미를 가지지 않습니다.

쉬운 방법은 하나의 단어에 대해 하나 이상의 표현 방식을 사용하는 것입니다. "rock" 이라는 단어의 표현으로 두 개의 임베딩 list를 활용할 수 있을 것입니다. 하지만 "돌" 또는 "락 음악" 이라는 단어 역시 매우 모호하다는 특징을 가지고 있습니다. 각각의 의미를 위에서 논의한 것과 같은 확률 분포 형태로 표현한다면 "rock" 이라는 단어는 **두 확률 분포의 중첩**으로 표현가능합니다.

---

그렇다면 **모호하고 중의적인 표현**을 설명하기 위한 강력한 수학적 형식이 준비 되었습니다. **$K$개 확률 분포의 중첩** 형식입니다.

$$
F(x) = \sum_{k=1}^{K} w_k f_k(\hat{x}) \quad \text{where} \quad \sum_{k=1}^{K} w_k = 1
$$

## Limitation

그렇다면 왜 이러한 확률 기반의 표현 방식을 널리 사용하지 않을까요? 대표적으로 두 가지 큰 문제점이 있습니다.

### Computation Limitation

확률 기반 표현 방식은 여러 가지 한계를 가지고 있습니다. 일단 무엇보다 확률 분포를 다루려면 **엄청난 계산량**이 요구됩니다. 확률 분포에서 하나의 샘플을 샘플링하는 것만해도 계산량이 꽤 높습니다. 

**두 개의 단어 유사도를 비교**하려면 어떨까요? 가장 유명한 방법 중 하나인 **monte-carlo method**는 안 그래도 무거운 연산인 샘플링을 여러 번 수행해, 확률 분포의 유사도를 샘플들의 유사도를 통해 비교하는 방식입니다. 학습 과정에서 모든 데이터의 확률 표현을 비교하기 위한 연산들은 당연히 bottle neck으로 작용해 학습 속도를 심각하게 저해시킵니다.

### Inductive Uncertainty

두 번째 문제점은 내재된 불확실성입니다. 

확률 분포 표현형으로부터 하나의 데이터를 샘플링해서 사용한다고 가정해봅시다. "개"의 임베딩이 잘 학습되었지만 어디까지나 확률 분포인 만큼 정말 낮은 확률로 "고양이"의 표현에 가까운 임베딩이 샘플링 될 수 있습니다. 물론 정말 낮은 확률이지만, **확률 기반의 방법은 어쩔 수 없이 엉뚱한 결과를 보여줄 가능성**이 있습니다. 이는 방법론에 내재된 한계이기에 어찌하기 어렵습니다.

## However...

그러나 확률 기반의 표현형은 그 학습 방법에 녹아져 있는 **인사이트가 일반적인 임베딩 기반의 방법보다 훨씬 현실에 잘 반영합니다.** 실제로 딥 러닝 모델들이 발전하면서 점점 모호하고 중의적인 단어들을 다루려는 시도들에서 임베딩 기반 방법의 한계가 드러나며 확률 기반 방법론이 더욱 활발히 연구되어지고 있습니다.

이 글에서는 대표적인 몇 가지 Probabilistic Embedding Model들을 소개합니다.

1. VAE
2. Probabilistic Embeddings for Cross-Modal Retrieval
3. Probabilistic Compositional Embeddings for MultiModal Image Retrieval
