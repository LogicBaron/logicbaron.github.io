---
id: reflection
sidebar_position: 0
---
# Reflection

reasoning 과정에서,

reflection(리플렉션)은 인공지능, 특히 대형 언어 모델(LLM)에서 자기 자신의 출력이나 행동을 되돌아보고 평가하는 내부 '생각' 또는 '자기 성찰' 과정을 의미합니다. 즉, 모델이 한 번 답을 내고 끝내는 것이 아니라, 그 답을 다시 검토하고, 잘못된 점이나 개선할 점을 찾아 다음 답변을 더 좋게 만드는 일련의 자기 점검 과정을 말합니다. 이는 인간의 '메타인지(생각에 대한 생각)'와 비슷하며, 복잡한 추론이나 계획이 필요한 문제에서 성능을 높이기 위해 사용됩니다.

redundant reflection(중복 리플렉션, 중복 반추)은 이런 reflection 과정이 반복적으로 거의 같은 방식으로 이루어져서, 새로운 정보나 개선 없이 비슷한 내용만 계속 생성되는 현상을 가리킵니다. 즉, 이미 충분히 검토된 답변을 또다시 비슷하게 검토하거나, 같은 실수를 반복하거나, 불필요하게 많은 연산을 소비하는 상황입니다. 이런 중복 리플렉션은 정확도에는 영향을 주지 않을 수 있지만, 시간과 비용을 낭비하고, 오히려 성능 저하(예: drift, stubbornness)로 이어질 수도 있습니다.

## Proposed Solution

- diversity of thoughs : https://assets.amazon.science/1b/06/bed864e0409797f4e9c701fba88b/enhancing-language-model-agents-using-diversity-of-thoughts.pdf