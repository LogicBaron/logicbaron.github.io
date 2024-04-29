---
id: npair
sidebar_position: 4
---
import npair from './assets/npair.png';
import clip from './assets/clip.png';

# N-pair Loss

Deep Metric Learning의 끝판왕, **n-pair loss** 입니다. **InfoNCE loss**라는 이름으로도 유명하며, CLIP 논문에서 사용되었습니다. triplet loss, quadraplet loss의 일반화인 (n+1)-plet loss에서 small-batch 구성 최적화를 통해 효율을 끌어올립니다.

<div style={{textAlign: 'Center'}}>
    <img src={npair} style={{border: 'solid', width: 700}} />
</div>

- **contrastive loss, triplet loss**는 anchor에 대해서 하나의 n 개의 positive와 negative sample 간의 거리를 비교했습니다.

- **structured loss**는 small-batch 내에서 positive / negative sample 들의 거리를 비교합니다.

- **n-pair loss**는 샘플들이 $(x, x^+)$ 형태로 구성됩니다. 즉, 각각의 샘플은 positive pair로 구성되어 있습니다. 그리고 tuple 쌍, 즉 positive pair간 거리는 가깝게 그리고 나머지 다른 모든 데이터와는 멀어지도록 학습합니다.

이 방식으로 n-pair loss는 small-batch 내의 모든 데이터가 하나의 positive pair, 그리고 n-1개의 negative sample을 비교할 수 있도록 합니다. 즉, **n-size small-batch에서 $n^2$ 개 쌍을 비교**할 수 있습니다.

다만 이 방식은 **small-batch 내 모든 데이터가 서로 negative pair, 즉 서로 다른 클래스**일 때 사용할 수 있습니다. 그러므로 batch 구성에 신경을 쓰거나 또는 각각의 데이터가 고유한 클래스를 가지는 경우에만 사용할 수 있습니다. 이러한 데이터의 예시는 CLIP에서 활용한 사진-캡션 쌍입니다. 각각의 사진과 캡션은 그 짝이라는 고유한 데이터를 가지며 batch는 전부 다른 클래스를 가지는 고유한 사진-캡션 쌍으로 구성되게 됩니다.

## Definition

N-pair loss 는 거리 함수로 임베딩 내적, 즉 **임베딩 간 코사인 거리**를 사용합니다. 그리고 같은 클래스 간 거리를 가깝게, 다른 클래스 간 거리를 멀게 하기 위해서 cross-entropy를 사용합니다. 

N-pair loss 는 small-batch 내의 모든 샘플이 고유한(서로 다른) 클래스를 가져야합니다. 그러므로 **각 샘플은 자기 자신 외 모든 샘플과 멀어져야** 합니다. n-pair loss 는 자기자신과의 거리, 즉 **자기 짝에 대한 내적값이 최대가 되도록 학습합니다**합니다. 

예를 들어서 개 사진은 ["개","고양이","판다","호랑이"...] 캡션 중 "개" 캡션과의 내적값이 가장 가까워지도록, "개" 라는 클래스로 구분되도록 학습합니다. 수식을 살펴보기 전에 제가 좋아하는 CLIP 에서 사용하는 도식을 살펴보면 이해가 더 잘될 것 같습니다.

<div style={{textAlign: 'Center'}}>
    <img src={clip} style={{border: 'solid', width: 700}} />
</div>

그림에서 회색 부분을 ground-truth 로 하는 cross-entropy loss 는 아래와 같이 설계할 수 있습니다. 단일 쌍에 대한 loss 식임에 유의해주세요.

$$
\begin{align*}
\mathcal{L}_{\text{pair}}(x, x^+, \{x_i^-\}_{i=1}^{N-1}) &= \log \left( 1 + \sum_{i=1}^{N-1} \exp(f(x)^\top f(x_i^-) - f(x)^\top f(x^+)) \right) \\
&= -\log \frac{\exp(f(x)^\top f(x^+))}{\exp(f(x)^\top f(x^+)) + \sum_{i=1}^{N-1} \exp(f(x)^\top f(x_i^-))}
\end{align*}
$$

아까 말했듯이 N-pair loss $n^2$ 개의 비교가 가능합니다. 하나의 튜플 쌍의 첫 번째 데이터는 다른 모든 튜플 쌍의 두 번째 데이터와 비교됩니다. 똑같은 과정을 튜플 쌍의 두 번째 데이터에도 적용 가능합니다. **모든 튜플 쌍이 각각의 원소를 다른 튜플 쌍의 원소들과 비교하며, loss가 계산**되게 됩니다.

## Limit

n-pair loss의 한계점은 **다양한 positive sample을 고려하기 힘들다는 점**입니다. 예를 들어서 강아지의 사진에 대해 "개" 라는 캡션이 달려있다면 "강아지" 라는 캡션은 틀린 답이 되게 됩니다. 이 문제는 데이터 로딩 과정에서 다양한 positive sample을 활용하거나 soft label을 사용해서 여러 개의 정답을 예측하는 방식을 활용하여 개선하려는 시도들이 있습니다.

또한 classification 에서 cross-entropy를 활용하기에 거리 함수에서 중요한 margin이 고려되지 않습니다. 이는 상당히 복잡한 몇 가지 특징(문제)를 발생시킵니다. 일단은 negative sample들이 서로 충분히 떨어지지 않는 정도의 문제점이 있다고 얘기하겠습니다. 이 문제점들은 후술할 arcface loss 등과 같이 코사인 거리를 사용하며 classification 문제에서 margin을 활용한 loss 들을 응용하여 보완합니다.

# Ref
1. https://proceedings.neurips.cc/paper/2016/file/6b180037abbebea991d8b1232f8a8ca9-Paper.pdf