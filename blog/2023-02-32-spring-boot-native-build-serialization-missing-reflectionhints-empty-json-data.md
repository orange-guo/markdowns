---
authors: [ orange ]
tags: [ problem-solving, java, spring-boot, aot, native-image ]
---

# `Spring Boot`项目启用`native`构建后由于序列化对象缺少`ReflectionHints`导致json数据为'{}'

基于`graalvm`的`spring boot`项目打包好后调用`/scheduling/api/v1/taskDefinitions`接口返回如下数据, 其中`triggerStrategy`字段是空`json`对象

```json
[
	{
		"id": "BILLING_SYNC_FOR_DEPLOYMENT_127",
		"triggerStrategy": {},
		"tags": {
			"EXECUTOR": "com.fastonetech.billing.sync.scheduling.BillingSyncTaskExecutor"
		},
		"variables": {
			"SOURCE_RCLONE_CONFIG": "TENCENT_ap-beijing",
			"SOURCE_BUCKET": "cheng1201-1310454728",
			"SOURCE_PATH": "",
			"TARGET_RCLONE_CONFIG": "aggregation",
			"TARGET_BUCKET": "billing-aggregation",
			"TARGET_PATH": "TENCENT/ap-beijing/cheng1201-1310454728"
		}
	}
]
```

<!--truncate-->

## 原因

`triggerStrategy`字段对应的java中的类型是`interface`, 需要为spring-aot进行配置, 以便其能够在运行时被正确地序列化

## 解决方案

在`ReflectiveProcessor`实现类中新增如下配置, 这里只展示了本次修复的内容<br/>
其中, `TaskTriggerStrategy`为`interface`, `CronTaskTriggerStrategy`和`PeriodicTaskTriggerStrategy`为其实现类

```kotlin
class ReflectiveProcessorImpl : ReflectiveProcessor {

	override fun registerReflectionHints(hints: ReflectionHints, element: AnnotatedElement) {
		val registrar = BindingReflectionHintsRegistrar()
		registrar.registerReflectionHints(
			hints,
			arrayOf(
				TaskTriggerStrategy::class.java,
				CronTaskTriggerStrategy::class.java,
				PeriodicTaskTriggerStrategy::class.java
			)
		)
	}

}
```

## 备注

- [JsonApplication.java](https://github.com/spring-projects/spring-aot-smoke-tests/blob/main/boot/json/src/main/java/com/example/json/JsonApplication.java)
- [spring-aot-smoke-tests](https://github.com/spring-projects/spring-aot-smoke-tests)