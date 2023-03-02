---
authors: [xiangcheng.kuo]
tags: [k8s, aws]
---

# 通过为`aws-eks`托管的`k8s`中的`service`启用`nlb`以实现对外暴露服务

默认情况下`k8s`中的`Service`为`ClusterIP`类型, 即只能在集群内部访问, 无法通过外部访问(这里的外部指的是`k8s`集群外部,
即`k8s`集群所在的`VPC`外部).<br/>
`NodeProt`也存在同样的问题, 无法通过外部访问.<br/>
为了能够通过外部访问`k8s`中的`service`, 需要启用`nlb`以实现为`aws-eks`托管的`k8s`中的`service`启用外部访问能力.

<!--truncate-->

## 解决方案

### 前提

`kubernetes`上存在`aws-load-balancer-controller`, 否则该功能无法使用

### 更新`Service`, 追加`annotations`以及修改`type`为`LoadBalancer`

```yaml
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/aws-load-balancer-nlb-target-type: ip
    service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing
    service.beta.kubernetes.io/aws-load-balancer-type: external
spec:
  type: LoadBalancer
```

稍等片刻后通过`kubectl get svc`查看`service`的`status`信息, 可以看到`status`中的`loadBalancer`信息中包含了`hostname`信息.
通过`hostname`即可访问`service`.

## 参考

- [Installing the AWS Load Balancer Controller add-on](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html)
- [Network load balancing on Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/network-load-balancing.html)
- [Network Load Balancer](https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.4/guide/service/nlb/)