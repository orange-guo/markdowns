[toc]

# Application Properties

## 1. Scalability(可扩展性)

| 方式 | 定义 | 是否需要可扩展性设计 | | :-: | :-: | :-: | | Vertical scalability(垂直扩展) | 向节点添加硬件资源(CPU/内存)，这种方法是有限的，因为不可能不断添加硬件资源 |否|
| Horizontal scalability(水平扩展) | 向系统(Kubernetes)增加更多节点或容器 |是|

### 区别

- 传统系统通常会在系统增加负载时采用垂直扩展, 无需重新设计可扩展性
- 垂直扩展为计算节点增加资源
- 水平扩展增加更多计算节点

### 总结

> 在环境不断变化的云中水平扩展是首要选择<br/>
> 可扩展性的一大障碍是应用程序状态

## 2. Manageability(可管理性)

> 外部输入在有限的时间间隔内改变系统状态或输出的能力<br/>
> 是一种无需更改其代码即可修改应用程序行为的能力

## 3. Observability(可观察性)

可观察性是衡量您可以从其外部输出推断其内部状态的程度。

### Monitoring(监控)

测量应用程序的特定方面，以获取有关其整体健康状况的信息并识别故障<br/>
e.g. Spring Boot Actuator

### Alerting/Visualization(告警/可视化)

当在监视应用程序时发现故障时触发警报并应采取一些措施来处理它, 仪表板用于可视化收集的数据并将其绘制在相关图表中<br/>
e.g. Grafana

### Distributed systems tracing infrastructure(分布式追踪基础设施)

跟踪流经不同子系统的数据<br/>
e.g. Spring Cloud Sleuth

### Log aggregation/analytics(日志聚合/分析)

跟踪应用程序中的事件并推断软件的行为，在出现问题时进行调试至关重要<br/>
e.g. EFK stack (Elastic, Fluentd, Kibana)

## 4. Resilience(弹性)

如果一个系统出现故障依然可以工作, 那么它就具有弹性

### 解决方案

- Circuit Breakers(断路器)
- Retries(重试)
- Redundancy(冗余)

### 相关技术

- Spring Cloud Circuit Breaker
- Resilience4j

## 5. Loose coupling(松耦合)

### 定义

- 系统的基本属性
- 系统中个部分之间了解尽可能少

### 目标

独立进化每个部分, 当一个部分发生变化时其他部分不需要作出相应的改变

### 模块化

- 对其他部分的依赖最小(松耦合)
- 模块中的代码封装在一起(高内聚)

### 模块化的好处

- 管理 每个模块都是松耦合的, 负责开发的人花费更少的开发时间, 因为不需要与其他团队沟通
- 产品灵活 每个模块独立于其他模块发展
- 可理解 没必要将系统作为一个整体来了解特定模块

## 总结

- 云原生软件是由你的计算方式定义的，而不是你在哪里计算的
- 云是关于哪里，云原生是关于如何