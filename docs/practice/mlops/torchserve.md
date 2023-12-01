---
title: Torchserve
sidebar_position: 0
tags: [mlops, torchserve]
---
import torchserve_torchserve from './asset/torchserve_torchserve.png';

# [Torchserve](https://github.com/pytorch/serve)

torch serve 사용에 대한 간략한 정리입니다.

## Torchserve Framework

<div style={{textAlign: 'center'}}>
 <img src={torchserve_torchserve} style={{width: 800}} />
</div>

- server
  - 모델 inference 와 관련된 모든 걸 모아서 model archive 를 생성하고 model_store에 저장합니다.
  - torchserve 를 이용해 model-server 를 띄웁니다.
    - model-server 는 multi-thread 기반 worker 를 돌리면서 Request 대기.

- client
  - inference api 를 통해 model-server 에 request.
  - handler의 data entry point method 를 통해 데이터 인입.
  - handler process, inference 함수 실행 후 inference Result를 send.

## [model archive](https://github.com/pytorch/serve/blob/master/model-archiver/README.md)
 - seperate CLI 로 inference model 관련된 artifacts 를 패키징화해서 관리.
```sh
# model archive 생성
torch-model-archive --model-name <model_name> --version 1.0 --model-file <./my_model.py> \
    --serialized-file <./my_model_state_dict.pth> --extra-files <./extra files...> --handler <./my_handler.py>
```
 - serving 시, torchserve command 를 주로 통해 model archive 파일을 불러와서 사용.
 - 모든 Dependencies 를 패키징화 하기에, 편한 점도 있지만 dependency 패키징화 과정에서 불편함이 따름.
   - packaging method
     - `--extra-files` 의 arugument 로 file 전달.
        - import 경로는 `--extra-files` 등으로 전달된 모든 파일이 같은 위치
     - requirements.txt 사용
         - [configuration](https://pytorch.org/serve/configuration.html) 설정 필요 : `install_py_dep_per_model=-true`
         - [step1:configuration 설정](https://github.com/pytorch/serve/blob/master/docs/configuration.md#allow-model-specific-custom-python-packages) -> [step2:requirements 전달](https://github.com/pytorch/serve/blob/master/model-archiver/README.md#torch-model-archiver-command-line-interface)
     - [dockerization](https://github.com/pytorch/serve/blob/master/docker/README.md) (구매옵션 api에서 사용)
          - 도커화 시켜서 필요한 dependency 설치 후 작업.
          
- `--model_name` 값을 통해 관리. `--serialized file` : state_dict

- entry point
  - inference api 요청이 들어오면, `data`, `context` 값이 전달됨. 
    - data : input data from the incoming request
    - [context](https://github.com/pytorch/serve/blob/master/ts/context.py) : contains worker information

```python3
# module level handler example
model = model(args)
def entry_point_function(data, context):
    global model

    if data:
        return model(data)
```

  - `--handler model_handler[:<entry_point_function_name>]` 을 통해 설정.
  - **module level** entry point
      - `--handler module_name:method_name` 형태로 사용.
  - **class level** entry point
      - handler class 의 `handle(data, context)` 메서드.

## [handler](https://github.com/pytorch/serve/blob/master/docs/custom_service.md)
- `curl --request POST --data <data> http://127.0.0.1:8080/predictions/{model_name} ` 로 request 가 들어오면 model_name에 맞는 entry point가 engage 됩니다.
- [BaseHandler](https://github.com/pytorch/serve/blob/01f8c5cfa9f8c06d0d224a7d2b3a272521e0409c/ts/torch_handler/base_handler.py#L17) 를 상속받아 작성 -> initialize, preprocess, inference, postprocess method 를 override 하는 게 큰 틀입니다.

  - initialize : 초기 torchserve 를 통해 서버 올릴 때 실행. 모델 생성 및 state_dict load 등 초기 설정.
  - preprocess, inference, postprocess : 이름 그대로.
  - **handle**
    - Entry point for handler. (inference 요청 들어오면 request data, context 가 타게 되는 메인 inference 메서드 느낌)
    - handle 도 override 해서 자유롭게 작성가능한데, 기본적으로 각 method 를 다음과 같이 handle 을 통해 처리된다.

```python3
# handle 함수에서 데이터 흐름 요약
class BaseHandler(abc.ABC):
    ...
    def handle(self, data, context):
        data_preprocess = self.preprocess(data)
        output = self.inference(data_preprocess)
        output = self.postprocess(output)
        return output
```
- 추가 ref: [doc](https://pytorch.org/serve/custom_service.html)

## [torchserve](https://pytorch.org/serve/server.html) and configuration.
- torchserve command 를 이용해 model-server 생성

```
torchserve --start --foreground \
    --model-store <where model(model archive 파일 등) files are located>
    --models [model1=]model1.mar [model2=]model2.mar
    --ts-config <config.properties path>
```
- `--foreground` 가 없으면 기본적으로 daemon 으로 실행됨.
- `--models [model1=]model1.mar`
    - request 날릴 때, `http://127.0.0.1:8080/predictions/<model1>`로 request 를 날리면 model1.mar 을 타게 됨.
    - `--models find_human=imgenet.mar` 처럼, Model name 과 실제 Model file 같을 필요 없습니다.
- `--ts_config` : configuration 파일 위치.
   - [공식 doc.](https://pytorch.org/serve/configuration.html) 에서 지원하는 configuation 옵션 설명 있습니다. 

## Optional ) [GPU 설정](https://github.com/pytorch/serve/blob/master/model-archiver/README.md#torch-model-archiver-command-line-interface)
  - torch-serve 는 GPU가 가용이면, worker 들에게 적절히 자원을 분배(round-robin)합니다. entry point 설계 시, worker 의 GPU id 는 context 에 들어있습니다.

```python3
class MyHandler(BaseHandler):
    ...
    def initialize(self, context):
        properties = context.system_properties
        self.device = torch.device("cuda:" + str(properties.get("gpu_id"))
                                    if torch.cuda.is_available() else "cpu")
```

  - configuration 을 통해 GPU 관련 설정 가능합니다.
  - 대표적으로, `number_of_gpus` 를 통해 model 당 GPU 의 수를 설정할 수 있습니다. torch-server 는 GPU 당 worker 를 하나씩 생성합니다. 참고로, 공식 문서는 적절한 `number_of_gpus = (number_of_gpus)/(number_of_unique_models_in_model_store)` 로 제안합니다.
