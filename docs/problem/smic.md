# SMIC

## SMIC集群FLEXLM监控数据未展示

### 原因

flexlm中配置有误, abaqus-license服务器的端口是27800, 不是28000

## SMIC集群FLEXLM监控数据未展示

### 原因

flexlm中配置有误, abaqus-license服务器的端口是27800, 不是28000

## SMIC集群重复执行开机任务排查

### 现象
开启集群任务被重复执行, 导致发送了通知邮件给客户

### 原因
- cs存储对应的机器已经不存在了， 导致任务一直处在调度中, 由于达到超时时间被重复调度
- 任务超过了最大执行时间`999999999`, 被重复执行

### 解决方案
删除脏数据

### 备注
```properties
camunda.bpm.job-execution.lock-time-in-millis: 999999999
```
```kotlin
"2022-11-11 06:00:51.792" // process-mgr started time
val endAt = ZonedDateTime.of(2022, 11, 11, 6, 0, 51, 792, ZoneId.of("UTC")).plus(Duration.ofMillis(999999999))
// 2022-11-22T19:47:30.999000792Z[UTC]
println(endAt)
```
为什么camunda在任务超时后不停止原有的线程




## SMIC项目一直处于关闭中的问题进行复现

### 原因
- 在`SMIC_IT_CLOUD_ADMIN_REVIEW_ENVIRONMENT`产生了新的集群工作流且未处于完成状态, 导致后续关闭项目时出现问题

### 复现步骤
- 新建EDA项目并审批到SMIC_IT_CLOUD_ADMIN_REVIEW_ENVIRONMENT步骤
- 进入上述步骤详情页面复制一份出来(为了后续可以DELIVERY项目)
- 在新的页面中点击START按钮对集群进行开机(此时会为对应集群创建一个工作流进行相关处理), 并关闭SMIC-API(为了让集群工作流处于错误处理状态)
- 等失败时进入老的页面点击delivery按钮对项目进行交付
- 交付后执行后续步骤
- 当所有步骤处理完时并且项目处于ACTIVE状态时, 对项目进行关闭, 则会发现项目一直处于`CLOSING`状态