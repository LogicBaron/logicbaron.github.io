---
id: 0
sidebar_position: 0
---
import tuning from './assets/tuning.png';


# Instruction Tuning

## Instruction Tuning?

Large Language Model(LLM) 의 가장 큰 특징이자 높은 task 수행력의 원인은 pre-train 과정에서 유입된 방대한 학습 데이터입니다. LLM은 기존 Language Model에 비해 압도적으로 많은 Parameter를 가지고 있고 방대한 데이터로 학습하기 때문에 모델 자체가 알고있는 "정보"의 양은 충분합니다.

그렇기에 LLM 의 관건은 **"모델이 사람의 말(Instruction)을 얼마나 잘 이해하는가"** 에 달려 있습니다. 잘 알려진 Propmt Engineering 기법 중 하나인 ICL 은 모델에게 질문에 대한 정답의 예시를 제공함으로써 모델이 사람의 질문을 더 잘 이해할 수 있도록 유도합니다. 이 과정에서 사람은 일반적으로 **대답의 형식 정도만을 알려줄 뿐, 정답을 찾기 위한 정보를 추가적으로 제공하지 않습니다.** **모델이 정답을 찾기 위한 충분한 지식을 가지고 있다고 가정**하기 때문입니다.

### Instruction Tuning vs. Finetuning
**Instruction Tuning의 인사이트와 목적** 역시 **"모델은 충분한 지식을 가지고 있으니 Instruction 을 더 잘 이해할 수 있도록 도와주자"** 입니다. **Finetuning 의 목적과는 크게 상이**합니다. 

<div style={{textAlign: 'Center'}}>
    <img src={tuning} style={{border: 'solid', width: 600}} />
</div>

일반적인 모델은 general task를 별 문제 없이 수행할 수 있을 정도의 지식을 학습하지도, 지식을 저장하기 위한 parameter 도 가지고 있지 않습니다. 그렇기에 finetuning 의 주목적은 **특정 task에 맞도록 모델의 지식을 업데이트**하는 것입니다. 그렇기에 Finetuning 방식은 충분한 지식 - 충분한 데이터; 를 필요로 하며 고질적으로 zero-shot 수행능력에서 한계를 보입니다.

Instruction Tuning 은 Finetuning 의 한계를 분명하게 뛰어넘고 있습니다. 일반적으로 **Finetuning은 몇 만건~몇 십만건의 충분한 데이터를 사용**합니다. task와 관련된 거의 모든 데이터를 한번씩 모델이 학습할 수 있도록 하는 것이 목표가 되니까요. 반면 **Instruction Tuning 은 몇 백 건 수준의 데이터로도 충분한 성능**을 보여줍니다. 지식은 충분하고 질의응답의 예시만 모델에게 보여주면 되니까요!

:::tip
**Instruction Tuning vs. Fine-Tuning**

- **Instruction Tuning**
  - 충분한 지식을 가진 모델이 질의 응답의 형식, Instruction 위주로 학습하도록 하는 것이 목적.
  - 몇 백건 ~ 몇 천건 수준의 데이터로도 충분히 학습.
  - 모델의 지식 기반으로 높은 zero-shot 성능 기대 가능.

- **Fine-Tuning**
  - 제한된 지식을 가지고 있고(가질 수 있는) 모델에게 task에 맞는 지식을 학습하도록 하는 것이 목적.
  - 몇 만건 이상의 데이터가 필요.
  - 고질적으로 낮은 zero-shot 성능.
:::

## Varations of Instruction Tuning

Instruction Tuning 방법은 1) **데이터를 어떻게 생성하는가** 그리고 2) **모델을 어떻게 효율적으로 학습시키는가** 로 나뉘어집니다. 

### 데이터 관점

- RLHF
- RRHF
- SliC-HF
- DPO
- RFT
- LiMA

### 학습 방법 관점

- [**LORA**](./lora)
- STILITs
- MTL

## Ref

1. [OpenAI Instruction Following](https://openai.com/research/instruction-following)