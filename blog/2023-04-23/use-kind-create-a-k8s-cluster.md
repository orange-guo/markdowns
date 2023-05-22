---
authors: [ xiangcheng.kuo ]
tags: [ kind, k8s, docker, github-pr ]
---

# 使用kind创建一个k8s集群

kind是一个用于创建`k8s`集群的工具, 它使用`docker`容器作为节点, 可以快速创建一个`k8s`集群,
用于测试或者开发.<br/>
官方提供了相应的文档[Ingress](https://kind.sigs.k8s.io/docs/user/ingress/), 在使用该文档的时候出现了一些问题.<br/>
本文基于官方文档并作出了一定的修改介绍如何使用`kind`创建一个`k8s`集群, 并在集群中部署`kong-ingress`.最后部署一个测试应用并通过`kong-ingress`访问该应用.

<!--truncate-->

## 安装kind

执行以下命令安装`kind`

```bash
go install sigs.k8s.io/kind@v0.18.0
```

## 创建一个k8s集群

执行以下命令创建一个`k8s`集群, 集群中包含一个`master`节和一个`worker`节点.<br/>
同时将`master`节点的`80&443`端口映射到宿主机的`80&443`端口, 用于后续将`ingress`映射到宿主机的`80&443`端口.<br/>

```bash
cat <<EOF | kind create cluster --config=-
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
    kubeadmConfigPatches:
      - |
        kind: InitConfiguration
        nodeRegistration:
          kubeletExtraArgs:
            node-labels: "ingress-ready=true"
    extraPortMappings:
      - containerPort: 80
        hostPort: 80
        protocol: TCP
      - containerPort: 443
        hostPort: 443
        protocol: TCP
  - role: worker
EOF
```

执行`docker ps`命令查看`kind`创建的`docker`容器

```bash
CONTAINER ID   IMAGE                               COMMAND                  CREATED       STATUS       PORTS                                                                 NAMES
b4368e7fbfb1   kindest/node:v1.26.3                "/usr/local/bin/entr…"   2 hours ago   Up 2 hours   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp, 127.0.0.1:45145->6443/tcp   kind-control-plane
c0638805438a   kindest/node:v1.26.3                "/usr/local/bin/entr…"   2 hours ago   Up 2 hours                                                                         kind-worker
```

## 安装`kong`

执行以下命令安装`kong-ingress`

```bash
kubectl apply -f https://raw.githubusercontent.com/Kong/kubernetes-ingress-controller/main/deploy/single/all-in-one-dbless.yaml
```

## 配置`kong`

执行以下命令配置`kong`.<br/>
第一个命令用于将`deployment`为`proxy-kong`下面的`pod`的`replicas`设置为`1`同时将端口映射到`host`上(
这里的host就是`docker`容器的`host`, 同时docker容器对应的`port`又映射到了本地的端口).<br/>

第二个命令用于将`kong-proxy`的`service`的类型设置为`NodePort`, 这样就可以通过`host`的`port`访问`kong`了.

```bash
kubectl patch deployment -n kong proxy-kong -p '{"spec":{"replicas":1, "template":{"spec":{"containers":[{"name":"proxy", "ports":[{"containerPort":8000,"hostPort":80,"name":"proxy","protocol":"TCP"},{"containerPort":8443,"hostPort":443,"name":"proxy-ssl","protocol":"TCP"}]}],"nodeSelector":{"ingress-ready":"true"},"tolerations":[{"key":"node-role.kubernetes.io/control-plane","operator":"Equal","effect":"NoSchedule"},{"key":"node-role.kubernetes.io/master","operator":"Equal","effect":"NoSchedule"}]}}}}'
```

```bash
kubectl patch service -n kong kong-proxy -p '{"spec":{"type":"NodePort"}}'
```

## 启动测试应用

创建如下文件用于后续执行`kubectl apply`命令

```yaml title="usage.yml"
kind: Pod
apiVersion: v1
metadata:
  name: foo-app
  labels:
    app: foo
spec:
  containers:
    - command:
        - /agnhost
        - netexec
        - --http-port
        - "8080"
      image: opsdockerimage/e2e-test-images-agnhost:2.26
      name: foo-app
---
kind: Service
apiVersion: v1
metadata:
  name: foo-service
spec:
  selector:
    app: foo
  ports:
    # Default port used by the image
    - port: 8080
---
kind: Pod
apiVersion: v1
metadata:
  name: bar-app
  labels:
    app: bar
spec:
  containers:
    - command:
        - /agnhost
        - netexec
        - --http-port
        - "8080"
      image: opsdockerimage/e2e-test-images-agnhost:2.26
      name: bar-app
---
kind: Service
apiVersion: v1
metadata:
  name: bar-service
spec:
  selector:
    app: bar
  ports:
    # Default port used by the image
    - port: 8080
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /$2
spec:
  rules:
    - http:
        paths:
          - pathType: Prefix
            path: /foo(/|$)(.*)
            backend:
              service:
                name: foo-service
                port:
                  number: 8080
          - pathType: Prefix
            path: /bar(/|$)(.*)
            backend:
              service:
                name: bar-service
                port:
                  number: 8080
---
```

```bash
docker puull kind load docker-image opsdockerimage/e2e-test-images-agnhost:2.26s
kind load docker-image opsdockerimage/e2e-test-images-agnhost:2.26
kubectl apply -f usage.yml
```

## 测试

执行以下命令测试

```bash
curl localhost/foo/hostname
curl localhost/bar/hostname
```

## 遇到的问题

### `nginx`和`contour`等`ingress`安装失败

这个问题的原因是因为国内无法下载对应的镜像导致无法安装成功.<br/>
解决方案是采用`kong`作为`ingress`.<br/>

### 官方文档中的关于`kong`的`ingress`的配置无法生效

执行官方文档中的如下命令失败

```bash
kubectl patch deployment -n kong ingress-kong -p '{"spec":{"template":{"spec":{"containers":[{"name":"proxy","ports":[{"containerPort":8000,"hostPort":80,"name":"proxy","protocol":"TCP"},{"containerPort":8443,"hostPort":443,"name":"proxy-ssl","protocol":"TCP"}]}],"nodeSelector":{"ingress-ready":"true"},"tolerations":[{"key":"node-role.kubernetes.io/control-plane","operator":"Equal","effect":"NoSchedule"},{"key":"node-role.kubernetes.io/master","operator":"Equal","effect":"NoSchedule"}]}}}}'
```

报错如下

```log
The Deployment "ingress-kong" is invalid: spec.template.spec.containers[0].image: Required value
```

这个问题的原因是因为`deployment`给错了, 正确的`deployment`应该是`proxy-kong`.<br/>

将命令中的`ingress-kong`替换为`proxy-kong`后, 执行成功.<br/>

对于这个问题, 我已经提交了pr, 但是还没有被合并, 可以参考<br/>
[doc: fix wrong implementation of creation of kong-ingress #3183](https://github.com/kubernetes-sigs/kind/pull/3183)

## 参考资料

- [kind](https://kind.sigs.k8s.io/)