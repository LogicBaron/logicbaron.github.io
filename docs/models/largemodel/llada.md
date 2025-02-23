---
id: largediffusion
sidebar_position: 4
title: LLaDA
---
import llada_reversal from './assets/llada_reversal.png';
import llada_sampling from './assets/llada_sampling.png';
import llada_flops from './assets/llada_flops.png';
import llada_semiarm from './assets/llada_semiarm.png'
import llada from './assets/llada.png'


# LLaDA: Large Language Diffusion Model

`Feb, 2025`

LLADA 논문은 오류를 점진적으로 복구해나가는 diffusion 방식을 언어 모델에 적용합니다. 아이디어도 상당히 흥미롭지만, 논문 자체의 완성도가 높아 매우 재밌게 읽을 수 있는 논문입니다. 

## Introduction

Transformer 모델이 등장하고 빠르게 주류 모델이 된 BERT 모델은 Encoder-Decoder 구조를 채용하고 Masked Token Prediction 과 Next Sentence Prediction 을 두 가지 주요 pretrain 방법으로 사용했습니다. GPT 모델은 Decoder-Only 구조를 채용하고 Autoregressive Generation 방식의 pretrain 을 사용했습니다. 

GPT-3의 등장가 등장하고 scaling law 가 언어 모델 학습의 핵심으로 주목받으면서 **transformer 구조와 Autoregressive Formulation 방식**이 대규모 학습을 위한 de-facto로 여겨져왔습니다. 

LLADA 논문은 현대 LLM 이 보여주고 있는 scalability는 Autoregressive Formulation(ARM)에서 비롯되는 것이 아니며, **Transformer 구조, 모델과 데이터의 규모, Generation 방식의 Fisher Consistency**에서 비롯된다고 주장합니다.

:::tip
Fisher Consistency를 가진 추정 방법은 데이터의 규모가 충분히 커지면 추정 결과가 참값에 수렴한다.
:::

LLaDA 논문은 ARM 방식이 아닌 **Masked Token Diffusion Model**  (**MDM**)을 제안합니다. Diffusion 모델은 노이즈를 추가하는 forward process 와 노이즈를 제거하는 Backward Process 를 사용해 점진적으로 데이터를 생성하는 것을 학습합니다. MDM은 토큰을 가리는 **random masking process**와, **mask prediction process**로 이루어져있습니다. MDM 방식은 전형적인 left-right 이 아닌 bi-directional generation 이 가능합니다.

저자들은 최종적으로 1B, 8B 사이즈의 모델을 학습해 Training Token의 수를 늘려가며 ARM 방식과 MDM 방식을 비교합니다. 학습 데이터의 규모가 커질수록 학습 방식으로 인한 모델 성능의 유의미한 차이가 사라집니다. 또한 LlaDa 방식은 ARM 방식이 가지고 있는 대표적인 문제점: Token-by-Token Generation 의 연산 비용과 reversal reasoning 문제 - 를 개선합니다.


## 모델 학습

<div style={{textAlign: 'Center'}}>
    <img src={llada} style={{border: 'solid', width: 500}} />
</div>

### Pre-training

LLaDA 모델 학습 방식은 **forward process**와 **backward process**로 이루어집니다. 그림 (a).

1B 모델과 8B 모델을 학습시킴.

- **Forward Process**
  - 임의의 토큰을 비율에 맞춰 랜덤 마스킹하는 process.
  - $t \in (0,1)$ 에 대해서, 각 토큰을 $t$ 확률로 마스킹. ( $1-t$ 확률로 마스킹 안 함. )
  - $t$ 는 $U(0, 1)$ 에서 샘플링.
- **Reverse Process**
  - mask predictor 를 이용해 마스킹된 토큰의 예측.
- **Loss**
  - masked token 에 대한 cross-entropy loss.
  $$
  \mathcal{L}(\theta) \triangleq -\mathbb{E}_{t, x_0, x_t} \left[ \frac{1}{t} \sum_{i=1}^{L} \mathbf{1}[x_t^i = \mathbf{M}] \log p_{\theta}(x_0^i \mid x_t) \right]
  $$
  - cross-entorpy(masked token) 이 **maximum log-likelihood 의 upperbound**임은 증명됨.
    - 즉, MDM loss 를 최소화하는 것은 maximum log-likelihood 를 최대화한다.
    - 기본적인 langague model 의 problem formulation 을 만족함. (appendix 참조)
  $$
  -\mathbb{E}_{p_{\text{data}}(x_0)} \left[ \log p_{\theta}(x_0) \right] \leq \mathcal{L}(\theta),
  $$
  - 실제 loss 계산에서는 **monte-carlo process** 를 활용한 샘플링 결과를 이용해서 통계적인 특성을 고려해 계산.

### Supervised Finetuning

prompt가 주어졌을 때 response 의 예측을 학습. Supervised Finetuning 과정은 그림 (b)를 참조. 기본적으로,

- **input**
  - prompt 와 masking 을 붙여서 input 으로 사용.
  - response 만 masking.
- **Loss & Train**
  - Pre-train 방식과 거의 유사하게, predict masked token of response.
  - Loss 도 유사하지만, 실험 결과 약간 변형된 MDM loss가 더 좋은 안정성을 보여줬다고 함.
    - $t$ 를 샘플링해서 확률적으로 masking 하는 방식이 아닌 $l < L$ 을 샘플링해서 $l$ 개의 토큰을 마스킹하는 방식.
    - 최종 성능은 비슷한데, 안정성이 더 컸다고 한다. $t$ sampling 방식은 학습에서 1,000회의 monte-carlo estimates가 필요했으나 $l$ 샘플링 방식은 128회로 충분했다고 함.
    - 저자들은 원인으로 $t$ 샘플링 방식의 랜덤성이 편차를 발생시켰다고 함. 특히, 토큰 수가 적을 때.
  $$
  - \mathbb{E}_{l, r_0, r_l} \left[ \frac{L}{l} \sum_{i=1}^{L} \mathbf{1}[r_l^i = \mathbf{M}] \log p_{\theta}(r_0^i \mid p_0, r_l) \right],
  $$


### Sampling

- **input**
  - prompt 는 그대로, response 는 당연하지만 전부 masking 된 상태(t=1)에서 시작함.
- **Intermediate Step**
  - Diffsuion 모델과 같이 여러번의 intermediate step 을 반복해서 최종적인 정답(t=0)을 생성하는 방식.
  - Intermediate Step의 수, $N$은 hyperparameter.
    - 예를 들어서, N=10 일 때 Intermediate Step 은 0.1 씩 1->0 으로 향해 진행됨.
    - 각 Step 은 $t=1,0.9,0.8, ... , 0.1$ 상태.
  - 각 Intermediate Step 은 다음 Step 의 Input 을 생성함.
    - 예를 들어서, N=10 일 때 첫 번째 Step 은 전부 마스킹 된 상태. 첫 번째 단계에서는 이 중 0.1 비율을 토큰을 예측.
    - 0.1 만큼 토큰이 예측된 상태는 t=0.9 와 같음. 두 번째 토큰은 이 상태에서 다시 0.1 비율의 토큰을 예측함.
    - 점진적으로 N=10 번의 단계를 거쳐 최종적으로 모든 토큰이 예측됨.
  - 저자들은 정확히는 이 과정을 re-masking 방식으로 구현.
    - top-K 를 해석하는 방식이 아닌, 전체를 예측한 뒤 나머지를 다시 masking 하는 방식.
  - 각 단계에서 **토큰의 예측 방식 (Decoding Scheme) 은 다양하게 실험**되었음.
    - Score-base Decoding 
      - 가장 confidence 가 높은 top-K 토큰을 우선적으로 예측함.
      - 또는 confidence-weight prediction. ( or remasking. )
    - Semi-Autoregressive 방식
      - response 를 여러 개의 block 으로 나눔.
      - 앞쪽의 block 을 우선적으로 예측하는 방식.
      - 결과적으로 가장 좋은 성능을 보여주는 방식이었다고 함.

    <div style={{textAlign: 'Center'}}>
        <img src={llada_semiarm} style={{border: 'solid', width: 500}} />
    </div>

##  Result

<div style={{textAlign: 'Center'}}>
    <img src={llada_flops} style={{border: 'solid', width: 500}} />
</div>

6개의 과제에서 LLAMA3 모델과 비교함. 논문에서는 통합된 scaling 지표로 FLOPS를 사용. FLOPS가 커질수록 모델은 ARM을 통해 학습한 LLAMA3 모델과 비슷하거나, 더 좋은 성능을 보여줌. 더 안좋은 성능을 보여주는 과제도 물론 있음.

저자들은 LLaDa 모델 구조가 LLAMA 모델 구조와 다르기 때문에 충분한 최적화가 이루어지지 않았음을 지적했습니다. 예를 들어, LLaDA 실험에서는 최신 Attention 구조를 사용할 수 없었습니다.

<div style={{textAlign: 'Center'}}>
    <img src={llada_sampling} style={{border: 'solid', width: 700}} />
</div>

생성 결과. 쉬운 단어, 핵심적인 단어들을 먼저 복구한다.

또한 Reversal Curse 에 대해서도 상당히 강한 모습을 보여줍니다. Poem Completion Task 에서 GPT, Qwen 모델에 비해 Forward 생성에서는 훨씬 안좋은 성능을 보여주지만 Reverse 생성에서는 훨씬 좋은 성능을 보여줍니다.

<div style={{textAlign: 'Center'}}>
    <img src={llada_reversal} style={{border: 'solid', width: 400}} />
</div>

## Conclusion

LLM 모델들이 보여주는 대규모 언어 학습 능력이 ARM 학습 방식에서 기인하는 것이 아니라 Transformer 구조, Generation Problem Formulation 에서 기인함을 보여주면서 저자들은 대규모 언어 모델의 새로운 형태를 제안했습니다. ARM 방식만큼 충분한 연구가 이루어지지 않아 최적화나 다양한 기법, 인사이트가 전무함에도 불구하고 해당 모델은 ARM 방식과 거의 비슷한 scalability 를 보여줍니다.


## Ref

[1] [Large Language Diffusion Models](https://arxiv.org/pdf/2502.09992)

## Appendix

### Problem Formulation

#### Fisher Consistency 를 보장하는 언어 모델 학습의 수식화. 


$$
\max_{\theta} \mathbb{E}_{p_{\text{data}}(x)} \log p_{\theta}(x) \iff \min_{\theta} \text{KL}(p_{\text{data}}(x) \parallel p_{\theta}(x))
$$

- Maximum likelihood estimation
    - 참 데이터의 분포가 $p_{data}$로 주어질 때, 모델 생성 분포의 log-likelihood 를 최대화.
    - entropy 최소화.
- KL divergence minimization
    - 학습 데이터 분포와 모델 생성 데이터 분포의 차이를 최소화하는 모델 학습.

:::tip
$E_{P}[log(Q)]$ 형태의 formulation 은 [cross-entropy](/docs/concepts/math/information/cross_entropy.md) 와 동일. 정답 분포가 P 인 문제를 Q 분포로 해석했을 때 문제의 불확실성. 
:::

#### ARM 분포

$$
p_{\theta}(x) = p_{\theta}(x^1) \prod_{i=2}^{L} p_{\theta}(x^i \mid x^1, \dots, x^{i-1})
$$

- 이전 토큰들이 주어졌을 때, 다음 토큰을 예측.
