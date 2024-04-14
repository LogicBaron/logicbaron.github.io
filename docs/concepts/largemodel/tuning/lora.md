---
id: lora
sidebar_position: 1
---
import lora from './assets/lora.png';
import lora_result from './assets/lora_result.png';
import lora_optimal_r from './assets/lora_optimal_r.png';
import lora_sim from './assets/lora_sim.png';
import lora_seed_sim from './assets/lora_seed_sim.png';

# LoRA
## LOW-RANK ADAPTATION OF LARGE LANGUAGE MODELS

Large Language Model을 더 잘 다루기 위해서 개발된 방법 중 가장 널리 사용되는 방법은 Finetuning과 Instruction Tuning 입니다. 다만, 모델 parameter를 전부 update하는 full fine-tuning 방식은 일반적으로는 활용하기 힘들다는 단점이 있습니다. 

<div style={{textAlign: 'Center'}}>
    <img src={lora} style={{border: 'solid', width: 300}} />
</div>

LoRA 논문은 **각각의 transformer module - 정확히는 self-attention layer; 에 학습가능한 rank decomposition module**을 덧붙입니다. 그리고 원래의 **transformer module은 freeze하고 rank decomposition module만을 학습시키는 방식**으로 LoRA는 **메모리와 시간, 그리고 성능 측면에서 놀라운 성**능을 보여줍니다. 현재 LoRA는 가장 대표적인 LLM Instruction Tuning 방법으로 활용되어지고 있습니다.


### Background

LoRA 이전 LLM 활용 방법론은 크게  가지로 나누어집니다. 

첫 번째 방식은 **Adapter Layer**를 추가하거나 변형하는 방식입니다. Adaptor 방식은 Transformer 구조에다가 추가적인 adapter layer를 추가하는 방식입니다. 원래의 모델 paramter를 freeze하고 adapter만 학습시키는 방식은 이론적으로는 큰 문제가 없지만 model parallelism 등이 필요한 LLM에서는 모델의 깊이가 길어지는 방식은 실질적인 Inference 과정을 변형시킵니다.

두 번째 방식은 **Prompt Optimizing** 방식입니다. 당연히 이 방식은 적용하기가 어려울 - 최적의 prompt를 찾아내는 것이 어려울; 뿐더러 일반적인 최적 prompt는 많은 추가 token을 소모하게 됨으로써 Inference 비용을 오히려 증가시킵니다.


### Motivation

그래서, LoRA 저자들은 어떻게 저런 구조를 생각했을까요?

LoRA가 출판된 2021년도보다 3년 앞선 2018년도 논문 [1] [MEASURING THE INTRINSIC DIMENSION OF OBJECTIVE LANDSCAPES](https://arxiv.org/pdf/1804.08838.pdf) 에서 핵심 아이디어를 가져옵니다. Intrinsic dimension 논문은 transformer 계열 모델에서 **실제로 데이터의 특징의 대부분을 반영하고 있는 차원은 모델의 hidden dimension $d$ 보다 훨씬 작다**는 내용입니다. 예를 들어서, **768dim 을 사용하고 있는 bert model 에서 실제로 중요한 embedding feature를 잘 반영하고 있는 차원은 64dim 정도**라는 주장을 펼칩니다. 

LoRA는 이 논문으로부터 주요한 인사이트를 얻습니다. 모델 내부에서 feature의 특징을 나타내는 차원 - intrinsic dimension; 이 훨씬 낮다면 그 정도의 전체 feature를 다루는 것보다 해당 차원만을 다루는 것이 훨씬 효율적일 것이라고 판단합니다. 그리고 **LoRA 는 이 인사이트를 기반으로 실제 feature embedding 보다 훨씬 낮은 차원에서 데이터의 변환을 수행하기 위한 mndule 구조를 구축**합니다.

## Method of LoRA

그래서 LoRA 는 layer를 추가하는 방식이 아닌, 각 layer에 resnet의 구조와 비슷한 **"추가 모듈"을 장착**하는 방식을 채용합니다. 또한 이 모듈은 input hidden feature 중 실질적으로 중요한 부분에 집중하기 위해 intrinsic rank 개념을 도입합니다.

<div style={{textAlign: 'Center'}}>
    <img src={lora} style={{border: 'solid', width: 300}} />
</div>

같은 그림을 다시 한 번 보고 가겠습니다.

- **LoRA 기본 구조**

**pretrained weight matrix $W_0 \in R^{d \times k}$ 를 tuning**하기 위해, **$W_0$는 freeze** 하고 **rank decomposition module을 학습**한다고 합시다. decomposition module 은 $d \rightarrow k$ 변환 과정을 **훨씬 낮은 $r << min(d,k)$ 를 거쳐서 $d \rightarrow r \rightarrow k$ 방식**으로 진행합니다. 각각의 변환 matrix를 $B \in R^{d \times r}$, $A \in ^{r \times k}$ 라고 서술하면 **최종적인 parameter update $\Delta W=BA$ 로 서술**할 수 있습니다. 

LoRA 가 적용된 모델의 forward pass 를 수식으로 표현하면 아래와 같습니다.

$$
h = W_0 x + \Delta Wx = W_0x + BAx
$$

당연히 이 r 값이 커지면 커질수록 full fine-tuning 과 비슷한 효과를 가집니다.

- **Initializaiton**

LoRA 논문은 $B$ module parameter를 0으로 초기화합니다. 이는 훈련 시작 단계에서 LoRA 모듈, $\Delta W = BA$ 가 0이 되도록 합니다. $A$ 모듈 parameter는 Gaussian Initialization을 따릅니다.

- **Scalining Parameter**

또한 $\Delta Wx$ 의 값을 $\alpha / r$로 스케일링합니다. $\alpha$ 값을 $r$ 에 대한 함수로써 고정된 상수값을 가집니다. 이러한 방식의 스케일링은 사실 Adam류 optimizer를 사용할때 learning rate 를 조정하는 효과와 동일하기에 저자들은 $\alpha$ 값을 $r$ 값으로 설정하고 따로 튜닝을 진행하지 않습니다. 

그럼 scaliing factor $\alpha$는 왜 있는 걸까요? 이 스케일링은 $r$ 값을 조정할 때 hyperparameter tuning 의 노고를 줄여준다고 합니다. 상세한 정보는 나오지 않았는데 $r$을 2배로 늘릴 때 다른 hyper parameter는 조정하지 않고 $alpha$ 값만 2배로 늘리는 방식으로 실험을 진행한 것 같습니다.

- **LoRA in Transformer**

**Transformer에 대해서** LoRA의 저자들은 self-attention layer에 대해서만 LoRA 모듈을 적용했습니다. 또한 그 외의 MLP 모듈들은 freeze시켰습니다. 이 부분에 대한 ablation study 가 논문에 기재되어 있습니다. 최종적으로 **GPT-3(175B)** 에 대해서 저자들은 $r=4$를 활용해서 **10,000x 가 넘는 VRAM consumption 을 줄였다**고 합니다. 또한 **25% 이상의 학습 속도 향상**을 보였다고 합니다. 

## Result

### Effect of Model Size

LoRA의 결과에 대한 분석이 너무 많아서 중요한 부분을 위주로 설명하겠습니다. 저자들은 DeBERTa 수준의 작은 모델부터 GPT-3라는 큰 모델까지 실험을 진행합니다. 아래 그림은 Trainiable paremter 수에 따른 model tuning 후의 성능을 보여주고 있습니다.

<div style={{textAlign: 'Center'}}>
    <img src={lora_result} style={{border: 'solid', width: 600}} />
</div>

LoRA 모델은 다른 방법론에 비해서 training paramter의 수에 크게 영향을 받지 않는 모습을 보여줍니다. 참고로 $r$ 값 역시 8로 고정되어 있을 때의 결과입니다.

### Optimal $r$

LoRA 논문 저자들은 최적 $r$ 값을 찾기 위해서 먼저 GPT-2에서 $r$값을 바꾸어가며 모델의 성능을 측정합니다.

<div style={{textAlign: 'Center'}}>
    <img src={lora_optimal_r} style={{border: 'solid', width: 600}} />
</div>

엄청 놀랍게도 $r=1$ 만 되도 매우 높은 성능이 나오고, $r=4 \sim 8$ 정도에서 거의 최종 성능과 동일하거나 더 좋은 성능을 확인할 수 있습니다. $r=64$ 이상으로 늘려보는 실험은 딱히 성능 향상을 더 보여주지는 않았다고 합니다. 이 실험 결과는 실제로 **모델 내부 데이터는 하나의 차원만으로도 꽤 잘 설명할 수 있으며 4~8 차원 정도면 거의 완전하게 설명**할 수 있음을 의미합니다.

이 부분을 확인하기 위해서 LoRA 저자들은 $r=8$ 일떄 $A$ module 과 $r=64$ 일때의 $A$ module을 비교합니다. 이 모듈들은 linear layer이므로 parameter 를 $R^{d \times r}$ matrix 로 표현가능합니다. 그리고 논문에서는 **두 matrix 의 유사도**를 **두 matrix 가 표현하는 subspace의 유사도**로 측정합니다. 

Matrix 의 subspace를 찾는 방법 중 가장 유명한 방법은 **singular value decomposition** 입니다. singular value decomposition 을 수행하면 matrix 의 eigenvalue와 eigenvector를 구할 수 있습니다. **matrix 의 subspace는 각각의 eigenvector가 대응하는 eigenvalue 만큼 기여하고 있는 subspace로 구상**할 수 있습니다.

:::tip

Singular Value Decomposition : 

$$
A = U \Sigma V^*
$$

where $\Sigma$ is a diagnal matrix whose have eigenvalues as its diagonal elements.

and $U, V$ is orthogonal matrices.

:::

그 중에서 right unitary matrix : $U_{A_{r=8}}$, $U_{A_{r=64}}$ - 들의 유사도를 어떻게 측정할 수 있을까요? 저자들은 **Grassmann distance**를 사용했다고 합니다. 이 부분은 제가 충분히 읽지 못해서 나중에 더 보충하겠지만 직관적인 개념은, eigenvector와 그에 대응하는 eigenvalue의 유사도를 측정하는 방식으로 보여집니다.

이 유사도 측정의 결과가 참 놀라운데요,

<div style={{textAlign: 'Center'}}>
    <img src={lora_sim} style={{border: 'solid', width: 600}} />
</div>

r=8 로 학습한 $A_{r=8}$ 와 r=64에서 학습한 $A_{r=64}$ 에서 **상위 singular vector일수록 다른 singular vector과의 유사도가 높게** 나오고, **하위 singular vecotr일수록 다른 singular vector와의 유사도가 낮게 나옵니다.** 이는, 상위 singular vector들이 중요한 정보를 많이 포함하고 있으며 하위 singular vector는 중요하지 않은 정보 또는 noise를 많이 포함하고 있음을 의미합니다. 즉, LORA 모듈이 낮은 r을 사용해도 충분하다는 의미입니다!

서로 다른 seed 에서 r=64 로 학습된 두 개의 module A를 비교한 그림을 보면 위 그림에 대한 이해가 더 쉬울 것 같습니다.

<div style={{textAlign: 'Center'}}>
    <img src={lora_seed_sim} style={{border: 'solid', width: 600}} />
</div>

## Conclusion

LoRA 는 vLLM, hugging face, peft 등의 라이브러리에서 제공하는 기능이라 활용하기 쉽습니다. 기회가 된다면 내용을 더 보충하고 실제 코딩에 관한 글도 써보겠습니다.

# Ref

1. [LoRA: LOW-RANK ADAPTATION OF LARGE LANGUAGE MODELS](https://arxiv.org/pdf/2106.09685.pdf)
2. [MEASURING THE INTRINSIC DIMENSION OF OBJECTIVE LANDSCAPES](https://arxiv.org/pdf/1804.08838.pdf)