---
authors: [ orange ]
tags: [ problem-solving, kotlin, jpa, spring-data-jpa, spring-data ]
---

# 在kotlin项目中`kotlin-jpa`插件导致导致`null`检查失效

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