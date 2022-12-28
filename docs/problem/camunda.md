# Camunda

## JavaDelegate里调用Service的方法并且Service方法上有@Transactional注解但DB修改未生效

### 原因

Camunda调用Delegate时会开启事务(为了保证失败时可以回滚数据), Spring的@Transaction propagation = Propagation.REQUIRED ,
然后就用了Camunda的那个事务，
Camunda的事务中修改是对DB不生效的所以你看不到事务过程中修改的数据提交的结果

### 解决方案

```kotlin

@Component
class StartClusterDelegate(
	private val clusterOperator: ClusterOperator
) : JavaDelegate, LogCapability {

	override fun execute(execution: DelegateExecution) {
		clusterOperator.start(execution.getVariableAs(VARNAME_CLUSTER_ID))
	}
}

@Component
class ClusterOperator(
	private val clusterService: ClusterService,
	private val csClusterOperator: CsClusterOperator,
	private val csStorageOperator: CsStorageOperator,
	private val clusterBastionUserOperator: ClusterBastionUserOperator,
	private val netEnvOperator: NetEnvOperator
) : LongTimeOperationCapability {

	override fun start(id: Long) {
		clusterService.get(id).orNull()!!.let { cluster ->
			clusterService.patch(id) {
				state = ClusterState.STARTING
			}
			logger.info("Begin start cluster $id")
			csStorageOperator.start(cluster.csStorageId)
			csClusterOperator.start(cluster.csClusterId!!)
			clusterBastionUserOperator.start(cluster.id)
			logger.info("Successful to start cluster $id")
			clusterService.patch(id) {
				state = ClusterState.RUNNING
			}
		}

	}

}

@Service
class ClusterService(
	private val engine: ProcessEngine,
	private val clusterRepo: ClusterRepository,
	private val client: DeployService
) : LogCapability {

	@Transactional(propagation = Propagation.REQUIRES_NEW)
	fun patch(id: Long, patchFun: PatchClusterDto.() -> Unit): Either<ClusterOperationError, ClusterDetail> =
		clusterRepo.findById(id).map { originCluster ->
			val patch = PatchClusterDto(patchFun).apply {
				logger.info("patch request {}", this)
			}
			val patchedCluster = originCluster.copy(
				cloudAccount = patch.cloudAccount ?: originCluster.cloudAccount,
				csNetEnvId = patch.csNetEnvId ?: originCluster.csNetEnvId,
				csStorageId = patch.csStoreId ?: originCluster.csStorageId,
				csClusterId = patch.csClusterId ?: originCluster.csClusterId,
				isDelivered = when (patch.deliveryCluster) {
					DeliveryCluster.YES -> true
					DeliveryCluster.NO -> false
					DeliveryCluster.NONE -> originCluster.isDelivered
				},
				state = patch.state ?: originCluster.state
			)
			patchedCluster.apply {
				logger.info("patched cluster {}", this)
			}
		}.map {
			clusterRepo.save(it)
			get(it.id)
		}.orElseGet {
			Either.left(ClusterOperationError.NoSuchCluster(id))
		}
}

```

## service task 执行过长导致被重试, 不符合预期

```
camunda:
  bpm:
    job-execution:
      lock-time-in-millis: 999999999
```

## 如果task有assignee并且也有candidateGroup的话通过candidateGroupIn查询将查不到该task

### 解决方案

TaskQuery.taskCandidateGroupIn()
Per default it only selects tasks which are not already assigned to a user.
To also include assigned task in the result specify {@link #includeAssignedTasks()} in your query.

## 测试代码无法被执行

```
"--glue", "gradle.cucumber"
```

在gradle task里 javaexec传入的args时去除该参数
`"--glue", "gradle.cucumber"`

## Should point to a running camunda engine rest api

添加rest依赖

```
implementation("org.camunda.bpm.springboot:camunda-bpm-spring-boot-starter-rest:7.14.0")
```