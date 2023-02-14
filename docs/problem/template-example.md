---
sidebar_position: 1
---

# 模板: 在consul中修改mgmt-api服务的属性配置时触发协程报错(内容由copilot生成, 仅供参考, 内容可能不实)

## 现象

在consul中修改mgmt-api服务的属性配置时触发协程报错

## 原因

- consul中修改mgmt-api服务的属性配置时会触发`org.springframework.cloud.consul.config.ConsulPropertySourceLocator#locate`
  方法
- 该方法会调用`org.springframework.cloud.consul.config.ConsulConfigProperties#init`方法
- 因为`org.springframework.cloud.consul.config.ConsulConfigProperties#init`
  方法中使用了`org.springframework.cloud.consul.config.ConsulConfigProperties#setPrefix`方法
- 而`org.springframework.cloud.consul.config.ConsulConfigProperties#setPrefix`
  方法中使用了`org.springframework.cloud.consul.config.ConsulConfigProperties#setPrefix`方法
- 从而导致了死循环

## 解决方案

- 重写`org.springframework.cloud.consul.config.ConsulConfigProperties#setPrefix`方法,
  使其不再调用`org.springframework.cloud.consul.config.ConsulConfigProperties#setPrefix`方法

## 备注

- 该问题在`spring-cloud-starter-consul-config`版本`2.2.6.RELEASE`中已经修复

## 日志

```log
2020-11-19 15:00:00.000 [reactor-http-nio-2] ERROR reactor.core.publisher.Operators - Operator called default onErrorDropped
java.lang.StackOverflowError: null
	at org.springframework.cloud.consul.config.ConsulConfigProperties.setPrefix(ConsulConfigProperties.java:111) ~[spring-cloud-consul-config-2.2.6.RELEASE.jar:2.2.6.RELEASE]
	at org.springframework.cloud.consul.config.ConsulConfigProperties.setPrefix(ConsulConfigProperties.java:111) ~[spring-cloud-consul-config-2.2.6.RELEASE.jar:2.2.6.RELEASE]
	at org.springframework.cloud.consul.config.ConsulConfigProperties.setPrefix(ConsulConfigProperties.java:111) ~[spring-cloud-consul-config-2.2.6.RELEASE.jar:2.2.6.RELEASE]
	at org.springframework.cloud.consul.config.ConsulConfigProperties.setPrefix(ConsulConfigProperties.java:111) ~[spring-cloud-consul-config-2.2.6.RELEASE.jar:2.2.6.RELEASE]
	at org.springframework.cloud.consul.config.ConsulConfigProperties.setPrefix(ConsulConfigProperties.java:111) ~[spring-cloud-consul-config-2.2.6.RELEASE.jar:2.2.6.RELEASE]
	at org.springframework.cloud.consul.config.ConsulConfigProperties.setPrefix(ConsulConfigProperties.java:111) ~[spring-cloud-consul-config-2.2.6.RELEASE.jar:2.2.6.RELEASE]
	at org.springframework.cloud.consul.config.ConsulConfigProperties.setPrefix(ConsulConfigProperties.java:111) ~[spring-cloud-consul-config-2.2.6.RELEASE.jar:2.2.6.RELEASE]
	at org.springframework.cloud.consul.config.ConsulConfigProperties.setPrefix(ConsulConfigProperties.java:111) ~[spring-cloud-consul-config-2.2.6.RELEASE.jar:2.2.6.RELEASE]
	at org.springframework.cloud.consul.config.ConsulConfigProperties.setPrefix(ConsulConfigProperties.java:111) ~[spring-cloud-consul-config-2.2.6.RELEASE.jar:2.2.6.RELEASE]
	at org.springframework.cloud.consul.config.ConsulConfigProperties.setPrefix(ConsulConfigProperties.java:111) ~[spring-cloud-consul-config-2.2.6.RELEASE.jar:2.2.6.RELEASE]
	at org.springframework.cloud.consul.config.ConsulConfigProperties.setPrefix(ConsulConfigProperties.java:111
```

## 参考

- [StackOverflowError: null when using ConsulConfigProperties](https://stackoverflow.com/questions/64110010/stackoverflowerror-null-when-using-consulconfigproperties)