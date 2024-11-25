---
id: catastrophic_forgetting
sidebar_position: 2
---
import catastrophic_forgetting from './asset/catastrophic_forgetting.png';
import pseudo_image from './asset/pseudo_image.png';

# Catastrophic Forgetting

:::tip
[continual learning](/docs/concepts/mlconcept/taxonomy/continuallearning.md) 참조.
:::

**Backward Knowledge Transfer** 이 이루어지지 않는 경우 모델이 **catastrophic forgetting** 을 겪고 있다고 한다. 즉, 새로운를 task를 학습할 때 관련 있는 기존 task의 수행 능력이 오히려 크게 감소하는 현상이다.

1989년에 이미 AI 시스템의 가장 큰 문제는 catastophic forgetting 이라는 논문이 제안되었다. 1989년도의 대표적인 머신 러닝 알고리즘인 Support Vector Machine 부터, 2000년대의 ANN 에 이르기까지 catastrophic forgetting 문제는 해결되지 않았다.


## Taxonomy

이 글에서는 Catastrophic Forgetting 을 예방하기 위해 적용 가능한 방법론을 설명한다.

<div style={{textAlign: 'Center'}}>
    <img src={catastrophic_forgetting} style={{border: 'solid', width: 700}} />
</div>

### Rehearsal

**Rehersal** 방식은 이전에 학습한 task의 데이터를 활용하는 방식이다. 인간에게도 적용되는 방식이며 구현하기 쉽다. 하지만 전체 데이터를 계속 저장하고, 또 모델을 계속 재학습시키는 것은 비효율적이다.

Rehersal 방식은 데이터를 저장하는 방법에 따라 두 가지로 나뉘어진다.

- pseudo-rehearsal
- mini-rehearsal

#### Pseudo-Rehearsal

**Pseudo-Rehearsal** 은 실제로 이전 학습에 사용된 데이터를 새로운 모델이 학습할 필요가 없다는 생각에서 기인한다.

Pseudo-Rehearsal 방식은 이전 모델의 동작을 신규 모델이 따라가는 것으로 충분하다고 인지합니다. 그래서 임의의 합성 이미지를 사용하고, 이 이미지들의 학습 라벨을 기존 모델의 예측 결과로 생성합니다. 

<div style={{textAlign: 'Center'}}>
    <img src={pseudo_image} style={{border: 'solid', width: 400}} />
</div>

해당 방식의 문제점은, 기존 모델은 새로운 class에 대응할 수 없다는 점이다. 예를 들어서 dog, cat class 로만 학습한 모델이 있고, 신 모델은 bird 클래스가 추가된 경우가 문제가 될 수 있다. 기존 모델은 pseudo-image에 대해 dog, cat 예측밖에 할 수 없다. 

이를 해결하기 위한 방법은 데이터를 "잘" 합성 또는 생성하는 것. 이전부터 통계적인 방법들을 활용해 기존 학습한 데이터(class)에 맞는 모델만 학습하는 방식이 활용되어왔다. 최근 생성 모델들의 발전과 함께 pseudo-rehearsal 방식 역시 생성 모델을 적극적으로 활용한다. 

- GAN, AutoEncoder
  - Encoder, shared-classifier, decoder 를 학습한다.
  - 학습 데이터의 Encoder output, embeding 을 저장한다.
  - 신규 모델 학습시에는 임베딩 -> decoder 과정을 통해 pseudo-image를 생성한다.
  - pseudo-image -> shared-classifier 를 통해 pseudo-label을 생성한다.
  - pseudo-image, pseudo-label 을 포함한 신규데이터를 이용해 새로운 모델을 학습한다.

Variational Auto Encoder(VAE)는 태생적으로 catastrophic forgetting 에 강인하다. 데이터 자체를 학습하는 것이 아니라 데이터의 통계적인 특성을 학습하고, 이로부터 데이터를 생성하는 것을 학습하는 방식이기 때문.

#### Mini-Rehearsal

**mini-rehearsal** 은 pseudo-rehearsal 방식과 정반대의 개념에서 출발한다. original data의 subset은 catastrophic forgetting을 방지하기 위해 꼭 신규 모델이 학습해야 한다는 아이디어. 그래서, 이 subset의 크기를 최소화하는 것에 집중하는 방식이 mini-rehearsal. 이 떄, 신규 모델의 학습에 포함되어야 하는 original data의 subset 을 **coreset**이라 한다.

## Distance-based

Distance-based 방법은 두 가지 주요 접근법이 제안된다.

- Fixed Data Representation
  - 학습 중에는 임베딩 생성기를 고정(freeze) 함.
  - 기존 클래스에 대한 정보가 왜곡되지 않으며, 임베딩 공간이 일관성을 유지함.
  - 그러나, 새로운 클래스를 효과적으로 표현하지 못함.
  - 새로운 클래스와의 구별 가능성을 유지해야 하며,
  - 기존 클래스 샘플들이 임베딩 공간에서 올바르게 그룹화되어 있다는 사실이 보장되어야 한다.
- Learning Representation
  - 임베딩 생성기를 매 학습마다 업데이트.
  - 새로운 클래스를 효과적으로 학습하고 표현 가능.
  - 기존 클래스의 임베딩 정보가 손실될 위험이 있음.
  - 임베딩 공간에서 기존 클래스의 임베딩이 크게 바뀌지 않도록 추적해야 한다.
  - 기존 클래스의 임베딩이 손상되지 않아야 한다.


Distance-based 방식에서는 **prototype class** 를 사용하는 경우가 많다. prototype class는 클래스를 대표하는 임베딩을 의미하며, 가장 쉬운 방식으로는 평균 임베딩이 있다. 이를 통해 기존 클래스의 임베딩을 추적하며, 기존의 정보가 손상되는지 확인. 

## Sub-networks

sub-networks 방식은 커다란 모델을 여러 개의 sub-networks 로 나누어 각각 특정 작업이나 데이터셑에 특화되도록 설계. 

- 신경망의 일부 가중치와 뉴런을 특정 작업 전용으로 할당.
- 새로운 작업 학습할 떄 기존 작업에 영향을 주지 않도록 함.
- 공유 가능한 가중치를 여러 작업 간에 공유.
- 특정 작업에 특화된 가중치는 별도로 유지.

두 가지 방식으로 나뉜다.

- ststic subnetwork
  - 고정된 subnetwork 정의.
  - 간단한 설계 구현, 기존 작업의 성능이 보장된다.
  - 확장성이 제한된다.
- dynamic subnetwork.
  - 새로운 작업을 학습할 때 기존 네트워크 내에서 가중치를 재구성하여 서브네트워크를 생성.
  - 특정 규칙에 따라 서브네트워크를 동적으로 생성 및 업데이트
  - 자원 활용도가 높지만, 관리가 어렵다.

대표적인 방식은 mask-based subnetworks 로써, 각 작업에 대해 네트워크의 가중치 마스크를 학습합니다. 작업별로 다른 마스크를 저장하여 기존 작업 정보를 유지하고 inference 에 사용합니다.


# Ref 

1. [Catastrophic Forgetting in Deep Learning: A Comprehensive Taxonomy](https://arxiv.org/pdf/2312.10549)
2. [Continual Learning의 개념과 방법론](https://junia3.github.io/blog/continual)