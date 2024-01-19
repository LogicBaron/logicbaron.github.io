---
id: rank_metric
sidebar_position: 1
---
import rank_metrics_unranked from './asset/rank_metrics_unranked.png';
import rank_metrics_kendall from './asset/rank_metrics_kendall.png';
import rank_metrics_precision from './asset/rank_metrics_precision.png';
import rank_metrics_ap from './asset/rank_metrics_ap.png';
import rank_metrics_mrr from './asset/rank_metrics_mrr.png';

# Ranking & Recommendation Metrics

Ranking & Recommendation 과제는 **유저 쿼리에 따라 datas (documents)를 적절한 순서로 정렬**하는 문제입니다. 특히, 유저 쿼리와 연관도가 높은 document 일수록 상위권에 위치하도록 정렬하는 것이 중요합니다. 

Ranking 을 평가하는 것은 꽤 까다로운 문제입니다. 직관적으로 생각해도 정답 rank가 [1, 2, 3] 일 때 [1, 3, 2] 와 [2, 1, 3] 중 무엇이 더 좋은 rank인지 한 눈에 판단하기 어렵습니다. 

또한, 일반적인 machine learning 에서 사용하던 precision, recall 등의 metrics 를 사용할 수 없습니다. 이 글에서는
- 먼저 왜 일반적인 metrics 들을 랭킹 평가에 사용할 수 없는지 알아보고
- ranking 에서 사용할 수 있는 metrics를 살펴보겠습니다.

:::note
이 글은 [링크](https://towardsdatascience.com/comprehensive-guide-to-ranking-evaluation-metrics-7d10382c1025)를 참조하여 작성하였습니다.
:::

## Why use Rank Metrics?

유저 쿼리에 대해서, **클릭률 순서대로 ranking**을 매기고 이 중에서 클릭률이 50% 가 넘어가는 document 를 관련도가 높은 target document 라고 정의합시다.

각 document 에 대해 target document 일 확률을 예측하는 모델을 학습했다고 가정합시다. 그리고 두 가지 모델의 예측 결과에 대해 MSE metrics 을 사용해서 평가해봤습니다.

<div style={{textAlign: 'center'}}>
    <img src={rank_metrics_unranked} style={{width: 700}} />
</div>

첫 번째 경우가 target document 를 1위로 예측했음에도 불구하고 MSE loss 가 두 번째 경우보다 더 낮게 나왔습니다. 왜 이런 현상이 발생했을까요?

Unranked Metrics는 모든 document 를 똑같이 취급합니다. 하지만 실제로 Ranking 문제에서는 상위권에 위치한 document 의 중요도가 훨씬 큽니다. 

:::tip
Ranking Metrics는 **Rank 가 높은 데이터의 weight를 높게, Rank가 낮은 데이터의 weight를 낮도록** 하는 인사이트가 필요하다. 
:::

## Kendall tau distance

Kendall tau distance 는 실제 데이터의 정렬 순서를 고려하는 Ranking Metrics 입니다. 뒤에서 소개할 Ranking Metrics 들은 실제 rank 가 아니라 target document 판정 여부를 통해 모델을 평가하는데, 그런 점에서 Kendall tau 는 Rank Metrics 의 의미를 가장 잘 표현하고 있는 지표 중 하나입니다.

Kendall tau distance 를 한 마디로 소개하면, **실제 정렬 순서와 다르게 정렬된 document 쌍의 비율**입니다. Rank Metrics 가 아니라 데이터 분석에서도 데이터 간 상관 계수로써 사용되는 지표입니다.

<div style={{textAlign: 'center'}}>
    <img src={rank_metrics_kendall} style={{width: 700}} />
</div>

예를 들어, 유저 쿼리에 대해 rank가 [1, 3]인 document A, B에 대해서 모델의 예측 rank가 [1, 4]라고 합시다. 예측 결과가 정확하지는 않지만 document A 가 document B 보다 관련도가 높다는 관계는 맞추었기에 이를 **concordant pair**($C$) 라고 합니다. 반면 모델이 rank 를 [2, 1]이라고 예측했다면 두 document 의 rank 대소 관계를 틀리게 예측했으므로 **disconcordant pair**($D$) 라고 합니다.

kendall tau distance 는 $C-D/C+D$ 로 정의하며, **-1에서 1의 범위**를 가집니다. kendall tau distance 가 -1 이라면 모델은 **완벽하게 역순**으로 document 순서를 예측한 것이고, 1이라면 모델은 **완벽하게 정순**으로 document 순서를 예측한 것입니다.

약간의 구현 방법에 차이가 있지만, sklearn 라이브러리는 [kendall tau distance](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.kendalltau.html) 를 구현해뒀습니다. 

## Mean Average Precision@k

### Precision@k

모델의 예측 결과 top-k 개에 target document 가 얼마나 포함되어 있는지의 지표이다. 

<div style={{textAlign: 'center'}}>
    <img src={rank_metrics_precision} style={{width: 700}} />
</div>

### Average Precision@k

precision@k 의 단점은, **target document가 top-k에 포함되기만 한다면 얼마나 상위권인지는 평가하지 않는다는 점**입니다. precision@10은 target document 가 1위, 2위에 정렬되어 있으나 9위, 10위에 정렬되어 있으나 똑같이 평가합니다.

average precision 은 target document 가 모델의 예측 결과에서 얼마나 상위권에 위치하는지를 고려합니다.

$$
AP@k = \frac{1}{r} \sum_{i=1}^{k} {precision@i} \cdot R_i
$$

$$
r=\text{number of target documents}
$$

$$
R_i = \text{1 if document }i\text{ is relevant or 0}
$$

AP 를 수식만으로 바로 이해하기가 쉽지 않아 예시를 아래에서 확인할 수 있습니다.

<div style={{textAlign: 'center'}}>
    <img src={rank_metrics_ap} style={{width: 700}} />
</div>

### Mean Average Precision@k

Mean Average Precision 은 여러 개의 유저 쿼리에 대해서 Average precision 을 평균 낸 값입니다.

## Mean Reciprocal Rank

### Reciprocal Rank

Reciprocal Rank 는 **target document 가 모델의 예측 결과 상에서 얼마나 앞에 정렬되어 있는지**를 중요하게 보는 지표입니다. MRR 은 마찬가지로, 유저 쿼리들에 대해서 RR을 평균낸 값입니다.

$$
RR = \frac{1}{\text{rank of the first target document}}
$$

$$
MRR = \frac{1}{|Q|} \sum_{q \in Q} {RR_q}
$$

아래는 MRR 의 예시입니다.

<div style={{textAlign: 'center'}}>
    <img src={rank_metrics_mrr} style={{width: 700}} />
</div>

## User-oriented metrics

위에서 소개한 Metrics 들의 문제점은 랭킹에 대한 평가임에도 유저 behavior 를 고려하지 않았다는 점입니다.

사실 Ranking 자체에 유저 behavior 가 고려되어 설계되는 게 올바른 방향이지만 유저 행동은 언제나 바뀌고 있고 또 이를 정확히 반영해서 rank 을 집계한다는 점이 쉽지 않습니다. 그래서 유저 behavior 자체를 고려해서 metrics 를 설계하는 방식도 존재하는데 이 부분은 이 글에서는 다루지 않았습니다.

하지만 원문 링크를 타고 가 보시면 해당 부분에 대한 소개도 작성되어 있습니다. 언젠가 시간이 된다면 따로 글을 하나 작성하도록 하겠습니다.