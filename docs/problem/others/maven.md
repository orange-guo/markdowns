# Maven
## Mavne多仓库配置
- [Maven Settings for multiple repositories](https://stackoverflow.com/questions/25424338/maven-settings-for-multiple-repositories)
- [Maven配置多仓库无效？来看看这篇文章](https://cloud.tencent.com/developer/article/1677690)
```xml title="pom.xml" live

<repositories>
	<repository>
		<id>fastone</id>
		<url>http://nexus.fastonetech.com/repository/fastone-snapshot/</url>
		<releases>
			<enabled>true</enabled>
		</releases>
		<snapshots>
			<enabled>true</enabled>
			<updatePolicy>always</updatePolicy>
		</snapshots>
	</repository>
	<repository>
		<id>tencent</id>
		<url>https://mirrors.tencent.com/nexus/repository/maven-public/</url>
		<releases>
			<enabled>true</enabled>
		</releases>
		<snapshots>
			<enabled>true</enabled>
			<updatePolicy>always</updatePolicy>
		</snapshots>
	</repository>
</repositories>
```

## Could not transfer artifact `xxx` from/to maven-default-http-blocker (http://0.0.0.0/)
```log
[ERROR] Failed to execute goal on project specification-lib: Could not resolve dependencies for project com.fastonetech:specification-lib:jar:3.0.0-SNAPSHOT: Failed to collect dependencies at io.cucumber:cucumber-spring:jar:7.9.0 -> io.cucumber:cucumber-core:jar:7.9.0 -> io.cucumber:html-formatter:jar:20.1.0 -> io.cucumber:messages:jar:19.1.4-SNAPSHOT: Failed to read artifact descriptor for io.cucumber:messages:jar:19.1.4-SNAPSHOT: Could not transfer artifact io.cucumber:messages:pom:19.1.4-SNAPSHOT from/to maven-default-http-blocker (http://0.0.0.0/): Blocked mirror for repositories: [nexus-tencentyun (http://mirrors.tencent.com/nexus/repository/maven-public/, default, releases+snapshots), fastone (http://nexus.fastonetech.com/repository/fastone-snapshot/, default, releases+snapshots)] -> [Help 1]
```
- (How to disable maven blocking external HTTP repositories?)[https://stackoverflow.com/questions/67001968/how-to-disable-maven-blocking-external-http-repositories]
```xml title="$project/.m2/settings.xml" live

<mirrors>
	<mirror>
		<id>fastone</id>
		<mirrorOf>fastone</mirrorOf>
		<name>fastone</name>
		<url>http://nexus.fastonetech.com/repository/fastone-snapshot/</url>
	</mirror>
</mirrors>
```