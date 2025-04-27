---
id: RLHF
sidebar_position: 0
---
# Concept

GPT-4o 의 설명.

좋아, RLHF (Reinforcement Learning from Human Feedback), 제대로 전체 구조부터 깔끔하게 정리해줄게.

⸻

✅ RLHF (Reinforcement Learning from Human Feedback)란?

사람의 피드백을 이용해 모델(특히 LLM)을 훈련하는 강화학습 방법이야.

핵심 아이디어:
	•	인간이 직접 좋은 응답/행동을 평가하거나,
	•	인간이 만들어준 선호도(preference) 데이터를 사용해서
	•	모델이 더 인간 친화적인 행동을 하도록 학습시키는 것.

⸻

🎯 왜 RLHF를 쓸까?
	•	GPT나 LLM 같은 모델은 단순한 언어 예측만으로는
사람이 원하는 답변을 제대로 못함.
	•	그냥 Language Modeling만 하면:
	•	부정확하거나,
	•	비윤리적이거나,
	•	터무니없는 답변이 나올 수 있음.
	•	그래서 사람의 “이게 좋은 답변이야”라는 피드백을 써서 모델 출력을 제어하려는 거야.

⸻

🚀 RLHF 전체 과정 (3단계 구조)

단계	설명
1단계	Supervised Fine-Tuning (SFT)우선 사람 작성 답변을 모아서 모델을 정식 지도학습 시킴
2단계	Reward Model Training (RM)사람이 선호하는 응답쌍 데이터를 모아서 보상모델(Reward Model)을 학습
3단계	Reinforcement Learning (RL)Reward Model을 이용해서 모델을 PPO 같은 강화학습으로 튜닝



⸻

📈 조금 더 자세히 들어가면

1. SFT (Supervised Fine-Tuning)
	•	대규모로 인간이 작성한 질문-답변 쌍을 학습
	•	이걸로 초기 인간 친화성 확보

2. Reward Model (RM) 학습
	•	같은 질문에 대한 두 가지 답변을 모델이 생성
	•	인간이 “A vs B 중 무엇이 더 좋아?” 라고 평가
	•	이걸 모아서 보상함수를 학습
	•	Reward Model은 응답에 점수를 매길 수 있게 됨

3. PPO (Proximal Policy Optimization)
	•	기존 모델이 생성한 응답에 대해 Reward Model이 보상을 줌
	•	보상을 극대화하도록 Policy(모델)를 업데이트
	•	이 과정을 반복해서 모델을 점점 더 “사람 취향”에 맞게 조정

⸻

🧠 핵심 특징
	•	Human Feedback이 “진짜 답”을 직접 주는 게 아니라
→ 좋다/나쁘다는 상대적 신호를 주는 거야 (preference-based)
	•	Direct Supervised Signal 없이도 모델을 개선 가능
	•	특히 LLM(대형 언어모델) 같은 open-ended output에서는 굉장히 효과적

⸻

🧩 그림으로 보면

[Pretrained LM] 
      ↓ (Supervised Fine-Tuning)
[SFT 모델]
      ↓ (Human Preferences 수집)
[Reward Model]
      ↓ (PPO 강화학습)
[최종 RLHF 모델]



⸻

📦 요약

키포인트	설명
목적	모델을 인간 선호에 맞춰 정제
방법	인간 선호 데이터 + 강화학습
과정	SFT → Reward Model → PPO 최적화
효과	더 안전하고 일관된 모델 응답 생성



⸻

📚 RLHF 실제 적용 예시
	•	GPT-3.5, GPT-4 학습에 RLHF 적용
	•	InstructGPT (GPT-3 + RLHF로 만들어진 대폭 향상 버전)
	•	Anthropic의 Claude 모델도 RLHF 기반
	•	OpenAI는 RLHF 없으면 모델을 절대 서비스 안 함 (안전성 때문)

⸻

🚀 추가로 알려줄 수 있는 것
	•	RLHF 세부 알고리즘 (PPO vs DPO 차이)
	•	RLHF를 넘어 RLAIF (RL from AI Feedback) 등장한 이유
	•	RLHF 데이터셋 수집 실제 방법
	•	RLHF 코드 예제 (PPO+transformers)

⸻

필요하면 RLHF 학습 파이프라인 아키텍처나,
“왜 PPO를 쓰는지?” 같은 심화도 갈 수 있어.

좀 더 깊게 들어가볼까? 🔥
(예를 들면 “DPO(Direct Preference Optimization)“랑 RLHF 비교 같은 것도 있음)