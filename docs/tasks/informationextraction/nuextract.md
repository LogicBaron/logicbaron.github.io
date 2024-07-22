---
id: nuextract
sidebar_position: 400
---
import nuextract from './asset/nuextract.png';

# NuExtract

Numind 에서 제안하고 발표한 llm 을 활용한 information extraction 의 framework 입니다. 모델이 아니고 framework 라고 설명한 이유는 데이터의 수집, 프롬프트 작성 그리고 모델 학습까지의 전 과정을 포함하고 있기 떄문입니다.

NuExtract Framework 핵심은 크게 두 가지 입니다.

- Template 을 활용해 원하는 양식에 맞는 information extraction output 을 생성할 수 있습니다.
- large-LLM 을 활용해 데이터를 구축하고, small-LLM 에 학습에 사용한다.

아래 그림은 NuExtract 프레임워크 전체 과정을 정리하고 있습니다. 

<div style={{textAlign: 'Center'}}>
    <img src={nuextract} style={{border: 'solid', width: 500}} />
</div>

먼저 Llama3 와 같은 Large-LLM 을 활용해 Information Extraction 과제의 input-output 을 생성합니다. 이 과정은 zero-shot 으로 수행합니다. NuExtract 의 특이점은 위에서 언급했듯 output 의 template 을 제공한다는 점입니다. 블로그에서 NuExtract 에서 사용한 prompt와, prompt 를 사용해 생성한 데이터의 예시를 전부 확인할 수 있습니다. 

먼저 prompt 의 예시입니다.

```
!!!START Context!!!

*<text-to-annotate>*

!!!END Context!!!

Goal: Generate an information extraction dataset.

Input: Text document + instructions for annotation.

Output: 1 JSON object (schema).

Schema:
Describes the information to be extracted.
Each field should:
Be a clear and concise name representing the extracted data.
ONLY STRING TYPE ARE ALLOWED AS VALUES (it can be an array of strings, or an object with string values, or an array of objects with string values...).
NO BOOLEAN, INT, ENUM, ETC.
The schema can focus only on part of the context document, or on the whole document.

Constraints:
Extracted information should be thematically coherent and form a well-structured JSON schema with a clear relationship between fields.

*<few-shot examples>*
```

# Ref
1.[NuExtract Blog](https://numind.ai/blog/nuextract-a-foundation-model-for-structured-extraction)