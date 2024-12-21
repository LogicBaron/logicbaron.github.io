---
id: tokenizer
sidebar_position :1
---
# Tokenizer

## BPE (Byte-Pair Encoding)

Byte pair encoding 은 기본 문자들로 시작해서,

매 스텝마다 단어들의 조합 중 등장 빈도가 가장 높은 단어 조합을 vocab 에 추가하는 방식.

```
(1, 2, 3, 4)

-> 

(1, 2, 3, 4, 23)
```

### Byte-level BPE

Byte-lvel 로 BPE를 수행함.

## WordPiece

**Bert, Electra 계열**에서 쓰인다.

유니코드 캐릭터 수준으로 기본 문자들을 vocab에 추가해놓고,

BPE 와 다르게 등장 빈도가 아니라, **가장 likelihood 가 높은 조합**을 추가한다.

이게 무슨 의미냐, a 가 100번, b 가 200번 등장하고 c가 10번 등장했다면 ab 조합이 20번만 등장해도 c와 관련된 조합의 최대값을 넘길 수 없다. workpiece 알고리즘은 각각의 등장횟수와 비례해서 얼마나 조합될 확률이 높나, 를 관찰한다고 보면 됨.

## Unigram

Unigram은 초기 가정부터가 좀 다름. Unigram은 가능한 모든 vocabulary를 설정해두고 Vocabulary 의 크기를 줄여나가는 식으로 이루어짐.

Unigram 알고리즘은 Vocabulary 에서 training data 에서 등장 확률이 가장 낮은 조합을 제거합니다. 