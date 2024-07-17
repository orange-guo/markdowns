---
authors: [ orange ]
tags: [ problem-solving, java, bpmn, spring-boot, camunda, db-transaction ]
---

# `JavaDelegate`里调用`Service`的方法并且`Service`方法上有`@Transactional`注解但DB修改未生效

## 原因

Camunda调用Delegate时会开启事务(为了保证失败时可以回滚数据), Spring的@Transaction propagation = Propagation.REQUIRED ,
然后就用了Camunda的那个事务，
Camunda的事务中修改是对DB不生效的所以你看不到事务过程中修改的数据提交的结果

## 解决方案

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