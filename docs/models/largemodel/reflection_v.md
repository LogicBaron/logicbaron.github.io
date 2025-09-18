---
id: reflection_v
sidebar_position: 5
title: look again, Think slowly
---
import aha from './assets/reflectionv_aha.png';
import data from './assets/reflectionv_dataconstruct.png';
import result from './assets/reflectionv_result.png';
import result2 from './assets/reflectionv_result2.png';

# Look Again, Think Slowly: Enhancing Visual Reflection in Vision-Language Models

기존 VLM 은 긴 추론에서 시각 정보를 거의 다시 확인하지 않아, 텍스트에만 의존함. 결과적으로 hallucination 이 늘고 정확도가 떨어짐. 저자들이 확인해본 결과 진짜 aha momnet 는 추론 과정에서 이미지를 다시 확인해야 함.

<div style={{textAlign: 'Center'}}>
    <img src={aha} style={{border: 'solid', width: 600}} />
</div>

이 논문은 보다 시간 반성을 잘 하는 모델을 아래 전략을 이용해서 학습시킵니다.

- 시각 정보를 보다 잘 활용하는 reasoning dataset 구축.
- 시각 정보를 잘 반영해야 하는 보상 함수를 사용한 GRPO 보상 추가.

## Visual-Reflection 데이터 구축

<div style={{textAlign: 'Center'}}>
    <img src={data} style={{border: 'solid', width: 600}} />
</div>

모델이 답을 내기까지의 과정에 여러번의 multi-turn 으로 이미지를 재확인하도록 함.

llm-requester 와 llm-responder, 그리고 llm-summarizer 가 존재함.

requester 가 재확인해야하는 포인트를 지시하면, responder 가 이미지를 재확인하고 답변함. 이를 summarizer 가 진위 여부 판단,요약, 부족분 등을 식별함. 부족분이 있다고 판단되면 이 과정을 한 번 더 반복함. 전반적인 데이터를 요약해서 최종적인 visual-reflection data 를 구축함.

## GRPO

GRPO 보상은 아래와 같이 설계됨.

$$
r_v = 
\begin{cases} 
\dfrac{\sum\limits_{n > |T_{\text{res}}|/2} \text{Attn}(n, T_{\text{vis}})}
      {\sum\limits_{n < |T_{\text{res}}|/2} \text{Attn}(n, T_{\text{vis}})}, & \text{if } r_a = 1 \\[2ex]
0, & \text{if } r_a = 0
\end{cases}
$$

답을 맞춘 경우에, visual attention 의 응답 토큰의 초반 절반과 후반 절반을 비교함. 응답의 초반부에 비해 후반에서 visual attention 이 많이 이루어질수록 높은 보상을 받음.

## 결과

결과, reflectionv 모델이 뒤 쪽 토큰 생성 시 이미지를 더 많이 참고함을 알 수 있다.

<div style={{textAlign: 'Center'}}>
    <img src={result} style={{border: 'solid', width: 600}} />
</div>

성능 향상이 보임. 사실 각 태스크 단위로 보면 top-1 이 아니지만 전반적으로 태스크에서 다 높은 점수를 받고 있음을 알 수 있다.

<div style={{textAlign: 'Center'}}>
    <img src={result2} style={{border: 'solid', width: 600}} />
</div>