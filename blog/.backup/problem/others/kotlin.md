# Kotlin

## 非空参数当Json序列化时未包含该参数将抛错就算在构造器设置默认值也不行

## `data class` JpaNull检查未生效

kotlin-jpa插件会为`data class`生成无参构造器，导致非空字段跳过了Null检查

```kotlin
@Entity
class ProjectInfo(
	var name: String,
	var code: String,
	var ownerName: String,
	var applicantName: String,
	var companyCode: String,
	var companyName: String,
	var projectType: ProjectType,
	var submitDate: LocalDateTime = LocalDateTime.now(),
	var planStartDate: LocalDate?,
	var planEndDate: LocalDate?,
	var endDate: String,
	var targetCustomers: Array<String>?,
	var formStatus: ApplicationStatus = ApplicationStatus.DRAFT,
	var projectStatus: ApplicationProjectStatus = ApplicationProjectStatus.DRAFT,
	var comments: String?
) {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	val id: Long = -1
}
```