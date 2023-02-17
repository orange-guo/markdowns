# Kubernetes

## 暴露公网(AWS EKS)

- 将`spec.type`从`ClusterIP`改为`LoadBalancer`
- `metadata.annotations`增加以下值

```yaml
service.beta.kubernetes.io/aws-load-balancer-nlb-target-type: ip
service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing
service.beta.kubernetes.io/aws-load-balancer-type: external
```

修改前

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mgmt-ui
  namespace: global
spec:
  ports:
    - name: http
      port: 80
      protocol: TCP
      targetPort: 80
  selector:
    app: mgmt-ui
  type: ClusterIP
```

修改后

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mgmt-ui
  namespace: global
  annotations:
    service.beta.kubernetes.io/aws-load-balancer-nlb-target-type: ip
    service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing
    service.beta.kubernetes.io/aws-load-balancer-type: external
spec:
  ports:
    - name: http
      port: 80
      protocol: TCP
      targetPort: 80
  selector:
    app: mgmt-ui
  type: LoadBalancer

status:
  loadBalancer:
    ingress:
      - hostname: k8s-traefik-devtraef-fc7fa64375-5885555f601d8e57.elb.cn-northwest-1.amazonaws.com.cn
```