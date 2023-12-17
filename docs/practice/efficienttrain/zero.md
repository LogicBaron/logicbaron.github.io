---
id: 1
sidebar_position: 1
---
import zero from './asset/zero.png';
import zero_result from './asset/zero_result.png';
import zero_result2 from './asset/zero_result2.png';
import zero_result3 from './asset/zero_result3.png';

# ZERO
# ZERO: Memory Optimization Toward Training Trillion Parameter Models

Deepspeed 에서 발표한 빅모델을 위한 메모리 최적화 방안인 ZERO 에 대한 리뷰.

## Background

large model training strategy 로 크게 MP, 그리고 DP 가 있습니다.

MP 의 경우 메모리 효용성은 좋으나 communication cost 가 커서, multi-GPU 환경에서는 성능이 좋지만 multi-machine 에서 성능이 급격하게 안 좋아진다는 단점이 있습니다.

DP 는 모델 전체의 replication 을 필요로 해서 메모리 효율성이 매우 낮은 대신, communication 효용성은 높습니다.

ZERO 에서는 MP 와 DP 의 장점을 최대한 활용하면서 large model 을 메모리에 올리고 학습을 가능하게 하는 것을 목표로 합니다.

## Zero-DP

일반적으로 사용되는 Zero-3stage. model state memory 효용성에 집중.

- 주요 인사이트
  - DP 의 communication efficiency 와 MP 의 memory efficiency 를 합쳐보자.
  - 모델 partitioning 해서 분산시키자. 그 후 dynamic communication scheduling 을 이용해 학습 및 param update 진행.

<div style={{textAlign: 'center'}}>
 <img src={zero} style={{width: 800}} />
</div>

### Zero-1 : Optimizer state Partitioning (32-bit)
- 4x memory reduction. same communication volume as DP
- 각 프로세스가 optimizer state partition 만 저장 및 업데이트.
- training step 종료 시에 all-gather 연산을 수행.

### Zero-2 : Gradient Partitioning (32-bit)
- memory reduction, same communication volume as Dp
- partitioned optimizer state 에 해당하는 gradient 정보만 있으면 됨.
- gradient 도 reduce-scatter
- bucketization strategy 
  - 기본적으로 all-gather 그리고 reduce-scatter 연산(intra-GPU 연산) 들은 연산 대상의 메모리가 클수록 효율적이다. 그래서 torch 내의 DDP 구현도 bucketization 을 사용하는데, 여기서 gradient 도 bucketization 을 사용함.
  - 연산 대상의 크기가 클수록 효율적인 이유는 PCIE 와 같은 제한된 bandwidth 를 한 번의 통신에 최대한 효율적으로 활용하므로.

### Zero-3 : Parameter Partitioning (16-bit)
- memory reduction is linear with DP degree. 최대 50% communication cost 감소.
- each process only stores the parameters corresponding to its partition.
- forward / backward propagation 과정에서 broad cast 과정을 통해 필요한 data 를 받아옴.
- 당연히, communication cost 가 엄청 증가할 것으로 보이는데 실제로 계산해보면 그렇지 않다.
- Baseline DP system 에 비해 1.5 배 정도 communication cost 가 증가하고, memory 소모는 훨씬 준다.
- 계산 과정은 논문 참조.

## Zero-R

residual memory 효용성에 집중.

- activation memory 가 MP 에서는 특히 문제가 됨.
- 모델이 커질수록 AIT w.r.t activation memory 가 커진다.

그래서 ZERO-R 은

- activation checkpoints 역시 partitioning 한다.
- activation 을 CPU 로 offload 하기도 하자, 효율적으로!
- 그 외에, 메모리의 효율적인 사용을 위한 코드가 삽입되어잇음. Temporary Buffer, fragment memory 처리.

### ZeRO-R-P_a: partitioned Activation Checkpointing
- activation 이 계산 된 후에, activation checkpoint 를 process 별로 partitioning.
- backpropagation 시 all-gather 연산.
- MP degree 에 propotional 한 activation memory 감소

### ZeRO-R_C_B : Constant Size Buffers
- large all-reduce operation achieves much higher bandwith than a smaller one.
- high performance libraries fuses all the parameters into a single buffer.
  - memory overhead of the fused buffers is proportional to the model size, and become inhibiting.
  - 예를 들어서, 3B size model 은 이 fused buffer 가 12GB 임.
- 효율적인 constant-size fused buffer 를 사용해서 통신.

### ZeRO-R_M_D : Memory Defragmentation
- activation checkpointing 과 gradient computation 과정에서 필요한 메모리가 또다른 이슈를 만듬.
- 또한 activation checkpointing 과 gradient computation 을 진행하고 나면 memory 가 free 된다.(long live)
- 임시로 backpropagation 과정에서 recomputing 이 되는 activation 은 계산 직후 memory free. (short live)
- long live memory 와 short live memory 에 대한 효율적 접근을 위해 torch 는 memory interleaving 을 사용.
  - 근데 모델 사이즈가 커지면, interleaving 을 위한 memory fragmentation 이 매우 큰 이슈가 된다.
  - contiguous memory 가 충분하지 않거나, 충분한 사이즈의 메모리 청크를 찾는데도 시간이 많이 걸릴 수 있음.
- ZERO 는 미리 메모리 청크들을 할당해놓고 사용함으로써 이 문제를 해결함.

# Evaluation

<div style={{textAlign: 'center'}}>
 <img src={zero_result} style={{width: 500}} />
</div>


Zero-2 를 사용했을 때 speed up. 큰 모델일수록 성능 향상이 눈에 띔.

<div style={{textAlign: 'center'}}>
 <img src={zero_result2} style={{width: 500}} />
</div>

GPU 의 갯수에 거의 이상적으로 linear 한 전체 성능이 나옴을 알 수 있음.

<div style={{textAlign: 'center'}}>
 <img src={zero_result3} style={{width: 500}} />
</div>

# Conclusion

ZERO 는 ZERO-R 그리고 ZERO-DP 의 각 단계를 설정해서 사용 가능.
ZERO-R 은 deepspeed zero library 사용시 config 로 줄 수 있다.

- ZERO-1, ZERO-2
  - 일반적인 multi-GPU, multi-machine 학습 환경에서 효율적으로 사용할 수 있을 것으로 보인다.
  - batch size 에 큰 연관이 없음. batch size 는 ZERO-R configuration 에서 더 큰 영향을 미칠 것.
  - multi-GPU training 을 한다면 이론상 모델 사이즈 상관없이 좋음. 다만 model 의 autograd graph 구성에 따라 communication 이 많이 발생하는 경우에는 비 효율적일 것 같음
- ZERO-3
  - 모델 사이즈가 너무 큰 게 아니라면 그냥 사용하는 게 더 좋을듯.
  - 마찬가지로 모델 사이즈가 매우 커서 사용해야한다면 multi-GPU, multi-machine, batchsize 상관없이 효용성이 클 것.

# Reference
- https://www.deepspeed.ai/tutorials/zero/
- [Zero](https://arxiv.org/abs/1910.02054)