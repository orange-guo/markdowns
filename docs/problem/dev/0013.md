# remote-access服务的websocket无法连接显示401

## 现象

调用对用接口时显示401, 本地尝试复现时输出如下

```bash
orange@orange:~/Documents/Dev/Project/Fastone/fastone/services$ curl -I 'http://localhost:2000/vdi/ws-tunnel?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwibGludXhHaWQiOjIwMDEsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiZGlzYWJsZVBhc3RlIjpmYWxzZSwidXNlcklkIjo3LCJ2ZXJzaW9uIjoiMy5tYXN0ZXIuMTEzODI4IiwiZmFzdG9uZVNjZW5hcmlvIjoiRkNDRV9QVUJMSUMiLCJsaW51eFVpZCI6MjAwMSwibmFtZSI6ImFkbWluIiwidXNlclR5cGUiOiJMT0NBTCIsImV4cCI6MTY3NTk2MjEzMiwiaWF0IjoxNjc1OTE4OTMyLCJ1c2VybmFtZSI6ImFkbWluIiwiZGlzYWJsZUNvcHkiOmZhbHNlfQ.CAHWjkipa01xnZHwrm0Gh1E4kE0TWRyg4zvUFCi0WqdHg0mAlolgvw2F6qyiqX6t73Ne6n0dVGNesEohPhAOdQ&hostname=10.0.17.26&protocol=SSH&width=659&height=707&dpi=96'

HTTP/1.1 401 
Vary: Origin
Vary: Access-Control-Request-Method
Vary: Access-Control-Request-Headers
X-Content-Type-Options: nosniff
X-XSS-Protection: 0
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Pragma: no-cache
Expires: 0
X-Frame-Options: SAMEORIGIN
Content-Length: 0
Date: Fri, 10 Feb 2023 02:17:05 GMT
```

## 原因

目前`spring-boot3`使用的是`jakarta.websocket`,而`guacamole`实现方案是基于`javax.websocket`, 这两者不兼容。
`remote-access`服务的`web-socket`的入口代码类如下

```kotlin
class RemoteAccessEndpoint : GuacamoleWebSocketTunnelEndpoint() {}

abstract class GuacamoleWebSocketTunnelEndpoint : javax.websocket.Endpoint {}
```

## 解决方案

首先查看其Github仓库查看`guacamole-common`最新的代码, 其最新版本为1.5.0, 但是该版本仍然使用的是`javax.websocket`。

```xml title="pom.xml"

<dependency>
	<groupId>javax.websocket</groupId>
	<artifactId>javax.websocket-api</artifactId>
	<version>1.0</version>
	<scope>provided</scope>
</dependency>
```

为了能够支持`jakarta.websocket`, 需要copy相应依赖的代码到项目中, 其license为Apache License 2.0, 可以直接copy。

## 参考

- [GUACAMOLE-1325](https://issues.apache.org/jira/browse/GUACAMOLE-1325)
- [guacamole-client](https://github.com/apache/guacamole-client)