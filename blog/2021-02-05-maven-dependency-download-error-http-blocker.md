---
authors: [ orange ]
tags: [ troubleshooting, java, maven, maven-blocker, maven-dependency ]
---

# maven下载依赖时出现报错Could not transfer artifact xxx from/to maven-default-http-blocker (http://0.0.0.0/)

maven下载依赖时出现报错

```log
[ERROR] Failed to execute goal on project specification-lib: Could not resolve dependencies for project com.fastonetech:specification-lib:jar:3.0.0-SNAPSHOT: Failed to collect dependencies at io.cucumber:cucumber-spring:jar:7.9.0 -> io.cucumber:cucumber-core:jar:7.9.0 -> io.cucumber:html-formatter:jar:20.1.0 -> io.cucumber:messages:jar:19.1.4-SNAPSHOT: Failed to read artifact descriptor for io.cucumber:messages:jar:19.1.4-SNAPSHOT: Could not transfer artifact io.cucumber:messages:pom:19.1.4-SNAPSHOT from/to maven-default-http-blocker (http://0.0.0.0/): Blocked mirror for repositories: [nexus-tencentyun (http://mirrors.tencent.com/nexus/repository/maven-public/, default, releases+snapshots), fastone (http://nexus.fastonetech.com/repository/fastone-snapshot/, default, releases+snapshots)] -> [Help 1]
```

- (How to disable maven blocking external HTTP
  repositories?)[https://stackoverflow.com/questions/67001968/how-to-disable-maven-blocking-external-http-repositories]