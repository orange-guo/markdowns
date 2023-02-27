---
authors: [xiangcheng.kuo]
tags: [testcontainers, docker]
---

# 在`TestContainers`中实现`Docker registry`认证

在`docker registry`配置了认证后, 项目中`CICD`中运行的`test case`失败, 错误日志如下

```log
Caused by: org.testcontainers.containers.ContainerFetchException: Can't get Docker image: RemoteDockerImage(imageName=hub.fastonetech.com/cce/fastone-auditing:latest, imagePullPolicy=AlwaysPullPolicy(), imageNameSubstitutor=org.testcontainers.utility.ImageNameSubstitutor$LogWrappedImageNameSubstitutor@3b68a50c)
	at app//org.testcontainers.containers.GenericContainer.getDockerImageName(GenericContainer.java:1371)
	at app//org.testcontainers.containers.GenericContainer.logger(GenericContainer.java:651)
	at app//org.testcontainers.containers.GenericContainer.doStart(GenericContainer.java:331)
	... 153 more
Caused by: org.testcontainers.containers.ContainerFetchException: Failed to pull image: hub.fastonetech.com/cce/fastone-auditing:latest
	at app//org.testcontainers.images.RemoteDockerImage.resolve(RemoteDockerImage.java:119)
	at app//org.testcontainers.images.RemoteDockerImage.resolve(RemoteDockerImage.java:28)
	at app//org.testcontainers.utility.LazyFuture.getResolvedValue(LazyFuture.java:17)
	at app//org.testcontainers.utility.LazyFuture.get(LazyFuture.java:39)
	at app//org.testcontainers.containers.GenericContainer.getDockerImageName(GenericContainer.java:1369)
	... 155 more
Caused by: com.github.dockerjava.api.exception.InternalServerErrorException: Status 500: {"message":"unauthorized: unauthorized to access repository: cce/fastone-auditing, action: pull: unauthorized to access repository: cce/fastone-auditing, action: pull"}

	at app//org.testcontainers.shaded.com.github.dockerjava.core.DefaultInvocationBuilder.execute(DefaultInvocationBuilder.java:247)
	at app//org.testcontainers.shaded.com.github.dockerjava.core.DefaultInvocationBuilder.lambda$executeAndStream$1(DefaultInvocationBuilder.java:269)
	at java.base@17.0.1/java.lang.Thread.run(Thread.java:833)
```

<!--truncate-->

## 解决方案

根据上述日志中的关键信息得出由于`docker registry`未认证导致该问题的出现

```log
Caused by: com.github.dockerjava.api.exception.InternalServerErrorException: Status 500: {"message":"unauthorized: unauthorized to access repository: cce/fastone-auditing, action: pull: unauthorized to access repository: cce/fastone-auditing, action: pull"}
```

执行`docker login`命令，然后从`~/.docker/config.json`中获取认证信息作为`DOCKER_AUTH_CONFIG`环境变量的值

```bash
docker login -u <username> -p <password> <registry>
DOCKER_AUTH_CONFIG=""
DOCKER_AUTH_CONFIG=$(cat ~/.docker/config.json)
export DOCKER_AUTH_CONFIG
```

## 参考

- [Docker registry authentication](https://www.testcontainers.org/supported_docker_environment/#docker-registry-authentication)