---
authors: [xiangcheng.kuo]
tags: [problem-solving, spring-boot, spring, ]
---

# 升级`springboot3`遇到的问题

本文主要整理了在升级`springboot3`的过程中遇到的问题.

<!--truncate-->

## 升级`spring-boot3`后代码中的`javax`包需要切换为`jakarta`

项目中使用到了`apache-guacamole-common`依赖, 该依赖中使用了`javax`包

### 解决方案

由于该依赖目前最新的版本还没有升级到`jakarta`, 所以需要相关依赖代码复制到项目中, 并将`javax`包切换为`jakarta`.<br/>

```java title="GuacamoleWebSocketTunnelEndpoint.java"
package com.fastonetech.remote.access.websocket;
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import java.io.IOException;
import java.util.List;
import jakarta.websocket.CloseReason;
import jakarta.websocket.CloseReason.CloseCode;
import jakarta.websocket.Endpoint;
import jakarta.websocket.EndpointConfig;
import jakarta.websocket.MessageHandler;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.RemoteEndpoint;
import jakarta.websocket.Session;
import org.apache.guacamole.GuacamoleException;
import org.apache.guacamole.io.GuacamoleReader;
import org.apache.guacamole.io.GuacamoleWriter;
import org.apache.guacamole.net.GuacamoleTunnel;
import org.apache.guacamole.GuacamoleClientException;
import org.apache.guacamole.GuacamoleConnectionClosedException;
import org.apache.guacamole.protocol.FilteredGuacamoleWriter;
import org.apache.guacamole.protocol.GuacamoleFilter;
import org.apache.guacamole.protocol.GuacamoleInstruction;
import org.apache.guacamole.protocol.GuacamoleStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * A WebSocket implementation of GuacamoleTunnel functionality, compatible with
 * the Guacamole.WebSocketTunnel object included with the JavaScript API.
 * Messages sent/received are simply chunks of the Guacamole protocol
 * instruction stream.
 */
public abstract class GuacamoleWebSocketTunnelEndpoint extends Endpoint {

	/**
	 * The default, minimum buffer size for instructions.
	 */
	private static final int BUFFER_SIZE = 8192;

	/**
	 * The opcode of the instruction used to indicate a connection stability
	 * test ping request or response. Note that this instruction is
	 * encapsulated within an internal tunnel instruction (with the opcode
	 * being the empty string), thus this will actually be the value of the
	 * first element of the received instruction.
	 */
	private static final String PING_OPCODE = "ping";

	/**
	 * Logger for this class.
	 */
	private final Logger logger = LoggerFactory.getLogger(GuacamoleWebSocketTunnelEndpoint.class);

	/**
	 * The underlying GuacamoleTunnel. WebSocket reads/writes will be handled
	 * as reads/writes to this tunnel. This value may be null if no connection
	 * has been established.
	 */
	private GuacamoleTunnel tunnel;

	/**
	 * Remote (client) side of this connection. This value will always be
	 * non-null if tunnel is non-null.
	 */
	private RemoteEndpoint.Basic remote;

	/**
	 * Sends the numeric Guacaomle Status Code and Web Socket
	 * code and closes the connection.
	 *
	 * @param session
	 *     The outbound WebSocket connection to close.
	 *
	 * @param guacamoleStatusCode
	 *     The numeric Guacamole status to send.
	 *
	 * @param webSocketCode
	 *     The numeric WebSocket status to send.
	 */
	private void closeConnection(Session session, int guacamoleStatusCode,
								 int webSocketCode) {

		try {
			CloseCode code = CloseReason.CloseCodes.getCloseCode(webSocketCode);
			String message = Integer.toString(guacamoleStatusCode);
			session.close(new CloseReason(code, message));
		} catch (IOException e) {
			logger.debug("Unable to close WebSocket connection.", e);
		}

	}

	/**
	 * Sends the given Guacaomle Status and closes the given
	 * connection.
	 *
	 * @param session
	 *     The outbound WebSocket connection to close.
	 *
	 * @param guacStatus
	 *     The status to use for the connection.
	 */
	private void closeConnection(Session session, GuacamoleStatus guacStatus) {
		closeConnection(session, guacStatus.getGuacamoleStatusCode(),
			guacStatus.getWebSocketCode());
	}

	/**
	 * Sends a Guacamole instruction along the outbound WebSocket connection to
	 * the connected Guacamole client. If an instruction is already in the
	 * process of being sent by another thread, this function will block until
	 * in-progress instructions are complete.
	 *
	 * @param instruction
	 *     The instruction to send.
	 *
	 * @throws IOException
	 *     If an I/O error occurs preventing the given instruction from being
	 *     sent.
	 */
	private void sendInstruction(String instruction)
		throws IOException {

		// NOTE: Synchronization on the non-final remote field here is
		// intentional. The remote (the outbound websocket connection) is only
		// sensitive to simultaneous attempts to send messages with respect to
		// itself. If the remote changes, then the outbound websocket
		// connection has changed, and synchronization need only be performed
		// in context of the new remote.
		synchronized (remote) {
			remote.sendText(instruction);
		}

	}

	/**
	 * Sends a Guacamole instruction along the outbound WebSocket connection to
	 * the connected Guacamole client. If an instruction is already in the
	 * process of being sent by another thread, this function will block until
	 * in-progress instructions are complete.
	 *
	 * @param instruction
	 *     The instruction to send.
	 *
	 * @throws IOException
	 *     If an I/O error occurs preventing the given instruction from being
	 *     sent.
	 */
	private void sendInstruction(GuacamoleInstruction instruction)
		throws IOException {
		sendInstruction(instruction.toString());
	}

	/**
	 * Returns a new tunnel for the given session. How this tunnel is created
	 * or retrieved is implementation-dependent.
	 *
	 * @param session The session associated with the active WebSocket
	 *                connection.
	 * @param config Configuration information associated with the instance of
	 *               the endpoint created for handling this single connection.
	 * @return A connected tunnel, or null if no such tunnel exists.
	 * @throws GuacamoleException If an error occurs while retrieving the
	 *                            tunnel, or if access to the tunnel is denied.
	 */
	protected abstract GuacamoleTunnel createTunnel(Session session, EndpointConfig config)
		throws GuacamoleException;

	@Override
	@OnOpen
	public void onOpen(final Session session, EndpointConfig config) {

		// Store underlying remote for future use via sendInstruction()
		remote = session.getBasicRemote();

		try {

			// Get tunnel
			tunnel = createTunnel(session, config);
			if (tunnel == null) {
				closeConnection(session, GuacamoleStatus.RESOURCE_NOT_FOUND);
				return;
			}

		} catch (GuacamoleException e) {
			logger.error("Creation of WebSocket tunnel to guacd failed: {}", e.getMessage());
			logger.debug("Error connecting WebSocket tunnel.", e);
			closeConnection(session, e.getStatus().getGuacamoleStatusCode(),
				e.getWebSocketCode());
			return;
		}

		// Manually register message handler
		session.addMessageHandler(new MessageHandler.Whole<String>() {

			@Override
			public void onMessage(String message) {
				GuacamoleWebSocketTunnelEndpoint.this.onMessage(message);
			}

		});

		// Prepare read transfer thread
		Thread readThread = new Thread() {

			@Override
			public void run() {

				StringBuilder buffer = new StringBuilder(BUFFER_SIZE);
				GuacamoleReader reader = tunnel.acquireReader();
				char[] readMessage;

				try {

					// Send tunnel UUID
					sendInstruction(new GuacamoleInstruction(
						GuacamoleTunnel.INTERNAL_DATA_OPCODE,
						tunnel.getUUID().toString()
					));

					try {

						// Attempt to read
						while ((readMessage = reader.read()) != null) {

							// Buffer message
							buffer.append(readMessage);

							// Flush if we expect to wait or buffer is getting full
							if (!reader.available() || buffer.length() >= BUFFER_SIZE) {
								sendInstruction(buffer.toString());
								buffer.setLength(0);
							}

						}

						// No more data
						closeConnection(session, GuacamoleStatus.SUCCESS);

					}

					// Catch any thrown guacamole exception and attempt
					// to pass within the WebSocket connection, logging
					// each error appropriately.
					catch (GuacamoleClientException e) {
						logger.info("WebSocket connection terminated: {}", e.getMessage());
						logger.debug("WebSocket connection terminated due to client error.", e);
						closeConnection(session, e.getStatus().getGuacamoleStatusCode(),
							e.getWebSocketCode());
					} catch (GuacamoleConnectionClosedException e) {
						logger.debug("Connection to guacd closed.", e);
						closeConnection(session, GuacamoleStatus.SUCCESS);
					} catch (GuacamoleException e) {
						logger.error("Connection to guacd terminated abnormally: {}", e.getMessage());
						logger.debug("Internal error during connection to guacd.", e);
						closeConnection(session, e.getStatus().getGuacamoleStatusCode(),
							e.getWebSocketCode());
					}

				} catch (IOException e) {
					logger.debug("I/O error prevents further reads.", e);
					closeConnection(session, GuacamoleStatus.SERVER_ERROR);
				}

			}

		};

		readThread.start();

	}

	@OnMessage
	public void onMessage(String message) {

		// Ignore inbound messages if there is no associated tunnel
		if (tunnel == null)
			return;

		// Filter received instructions, handling tunnel-internal instructions
		// without passing through to guacd
		GuacamoleWriter writer = new FilteredGuacamoleWriter(tunnel.acquireWriter(), new GuacamoleFilter() {

			@Override
			public GuacamoleInstruction filter(GuacamoleInstruction instruction)
				throws GuacamoleException {

				// Filter out all tunnel-internal instructions
				if (instruction.getOpcode().equals(GuacamoleTunnel.INTERNAL_DATA_OPCODE)) {

					// Respond to ping requests
					List<String> args = instruction.getArgs();
					if (args.size() >= 2 && args.get(0).equals(PING_OPCODE)) {

						try {
							sendInstruction(new GuacamoleInstruction(
								GuacamoleTunnel.INTERNAL_DATA_OPCODE,
								PING_OPCODE, args.get(1)
							));
						} catch (IOException e) {
							logger.debug("Unable to send \"ping\" response for WebSocket tunnel.", e);
						}

					}

					return null;

				}

				// Pass through all non-internal instructions untouched
				return instruction;

			}

		});

		try {
			// Write received message
			writer.write(message.toCharArray());
		} catch (GuacamoleConnectionClosedException e) {
			logger.debug("Connection to guacd closed.", e);
		} catch (GuacamoleException e) {
			logger.debug("WebSocket tunnel write failed.", e);
		}

		tunnel.releaseWriter();

	}

	@Override
	@OnClose
	public void onClose(Session session, CloseReason closeReason) {

		try {
			if (tunnel != null)
				tunnel.close();
		} catch (GuacamoleException e) {
			logger.debug("Unable to close WebSocket tunnel.", e);
		}

	}

}

```

### 参考

- [Apache Tomcat 10.0 Servlet API incompatibility](https://issues.apache.org/jira/browse/GUACAMOLE-1325)

## querydsl依赖变更

由于`springboot3`中的`javax`依赖变为了`jakarta`, 所以`querydsl`的依赖也需要变更

### 解决方案

将`querydsl`相关依赖的`classfiier`设置为`jakarta`.

```kotlin title="build.kts"
implementation("com.querydsl:querydsl-jpa:5.0.0:jakarta")
kapt("com.querydsl:querydsl-apt:5.0.0:jakarta")
```

### 参考

- [Are there plans to support SpringBoot3.0(Java17)?](https://github.com/querydsl/querydsl/issues/3296)

`springboot3`的`javax`依赖变为了`jakarta`, 代码中需要将包导入从`javax`切换到`jakarta`.

## 升级`spring-boot3`后访问由`@PreAuthorize`注解保护的接口报错

升级`spring-boot3`后访问由`@PreAuthorize`注解保护的接口报错, 报错为401

### 原因

`RoleHierarchy`失效, 导致`MGMT_SUPER_ADMIN`无法访问`@PreAuthorize("hasRole("MGMT_ADMIN")")`注解保护的接口。<br/>
因为`MGMT_SUPER_ADMIN`继承自`MGMT_ADMIN`。<br/>
这个问题的原因是由`@EnableGlobalMethodSecurity`到`@EnableMethodSecurity`的迁移导致。<br/>
这两者内部对于`defaultMethodExpressionHandler`的初始化行为不一致导致`RoleHierarchy`失效。<br/>
区别如下

- `@EnableGlobalMethodSecurity`
  <br/>实现类`GlobalMethodSecurityConfiguration`创建`defaultMethodExpressionHandler`时会尝试从容器中获取`RoleHierarchy`。
- `@EnableMethodSecurity`
  <br/>实现类`PrePostMethodSecurityConfiguration`创建`defaultMethodExpressionHandler`时不会从容器中获取`RoleHierarchy`。

### 解决方案

- 为`spring-security`创建`pull request`确保初始化`defaultMethodExpressionHandler`行为保持一致
- 对于自身项目当前的解决办法是初始化`MethodExpressionHandler`

### 备注

```java title="GlobalMethodSecurityConfiguration.java"
public class GlobalMethodSecurityConfiguration implements ImportAware, SmartInitializingSingleton, BeanFactoryAware {

	@Override
	public void afterSingletonsInstantiated() {
		try {
			initializeMethodSecurityInterceptor();
		} catch (Exception ex) {
			throw new RuntimeException(ex);
		}
		PermissionEvaluator permissionEvaluator = getSingleBeanOrNull(PermissionEvaluator.class);
		if (permissionEvaluator != null) {
			this.defaultMethodExpressionHandler.setPermissionEvaluator(permissionEvaluator);
		}
		RoleHierarchy roleHierarchy = getSingleBeanOrNull(RoleHierarchy.class);
		if (roleHierarchy != null) {
			this.defaultMethodExpressionHandler.setRoleHierarchy(roleHierarchy);
		}
		AuthenticationTrustResolver trustResolver = getSingleBeanOrNull(AuthenticationTrustResolver.class);
		if (trustResolver != null) {
			this.defaultMethodExpressionHandler.setTrustResolver(trustResolver);
		}
		GrantedAuthorityDefaults grantedAuthorityDefaults = getSingleBeanOrNull(GrantedAuthorityDefaults.class);
		if (grantedAuthorityDefaults != null) {
			this.defaultMethodExpressionHandler.setDefaultRolePrefix(grantedAuthorityDefaults.getRolePrefix());
		}

		this.defaultMethodExpressionHandler = this.objectPostProcessor.postProcess(this.defaultMethodExpressionHandler);
	}

}
```

```java title="PrePostMethodSecurityConfiguration.java"
final class PrePostMethodSecurityConfiguration {

	private static MethodSecurityExpressionHandler defaultExpressionHandler(
		ObjectProvider<GrantedAuthorityDefaults> defaultsProvider, ApplicationContext context) {
		DefaultMethodSecurityExpressionHandler handler = new DefaultMethodSecurityExpressionHandler();
		defaultsProvider.ifAvailable((d) -> handler.setDefaultRolePrefix(d.getRolePrefix()));
		handler.setApplicationContext(context);
		return handler;
	}

}
```

### 参考

- [issue](https://github.com/spring-projects/spring-security/issues/12662)
- [pull request](https://github.com/spring-projects/spring-security/pull/12673)
- [GlobalMethodSecurityConfiguration.java ](https://github.com/spring-projects/spring-security/blob/6.0.x/config/src/main/java/org/springframework/security/config/annotation/method/configuration/GlobalMethodSecurityConfiguration.java)
- [PrePostMethodSecurityConfiguration.java](https://github.com/spring-projects/spring-security/blob/6.0.x/config/src/main/java/org/springframework/security/config/annotation/method/configuration/PrePostMethodSecurityConfiguration.java)

## 升级`spring-boot3`后使用Token请求保护资源报错

使用Token请求保护资源报错401

### 原因

这个问题的原因是`spring-security`中进行了重构需要对`securityContext`进行配置

### 解决方案

1. `http.securityContext().requireExplicitSave(false).and()`
2. `http.securityContext().securityContextRepository(new HttpSessionSecurityContextRepository()).and()`

### 备注

> spring6之后SecurityContextHolderFilter替换了SecurityContextPersistenceFilter<br/>
> SecurityContextRepository默认实现也变了<br/>
> (HttpSessionSecurityContextRepository) -> (RequestAttributeSecurityContextRepository)<br/>

### 参考

- [Spring Security 6 CustomAuthenticationFilter(intend to replace the UsernamePasswordAuthenticationFilter) does not work](https://stackoverflow.com/questions/74629234/spring-security-6-customauthenticationfilterintend-to-replace-the-usernamepassw)
- [Default to SecurityContextHolderFilter instead of SecurityContextPersistenceFilter #11110](https://github.com/spring-projects/spring-security/issues/11110)

## 升级`spring-boot3`后请求`/swagger-ui/index.html`报错

接口报错, 内容如下

```log title="chrome"
This page isn’t working
If the problem continues, contact the site owner.
HTTP ERROR 401
```

### 原因

springdoc版本过老, 需要升级到v2版本。<br/>
[springdoc.org](https://springdoc.org/)
上的有相关说明`For spring-boot v3 support, make sure you use springdoc-openapi v2`

本项目的原始配置如下

```xml title="pom.xml"

<dependency>
	<groupId>org.springdoc</groupId>
	<artifactId>springdoc-openapi-ui</artifactId>
	<version>1.6.14</version>
</dependency>
```

### 解决方案

升级springdoc版本到v2, 升级后的配置如下, v2的artifactId发生了变化

```xml title="pom.xml"

<dependency>
	<groupId>org.springdoc</groupId>
	<artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
	<version>2.0.2</version>
</dependency>
```

### 参考

- [springdoc.org](https://springdoc.org/)
- [springdocv2](https://springdoc.org/v2/)
- [How to run Swagger 3 on Spring Boot 3](https://stackoverflow.com/questions/74614369/how-to-run-swagger-3-on-spring-boot-3)

### 代码调用流程

```log title="AuthorizationFilter.doFilter"
this.authorizationManager.check(this::getAuthentication, request);
```

```log title="ObservationAuthorizationManager.check"
AuthorizationDecision decision = this.delegate.check(wrapped, object);
```

```log title="RequestMatcherDelegatingAuthorizationManager.check"
matcher.matcher(request);
```

```log title="MvcRequestMatcher.matcher"
// 返回了`path`为`/error`的`handlerMapping`(说明没有找到对应的`handlerMapping`)
MatchableHandlerMapping mapping = getMapping(request);
```

```log title="RequestMatcherDelegatingAuthorizationManager.check"
RequestMatcher matcher = mapping.getRequestMatcher();
MatchResult matchResult = matcher.matcher(request);
// 由于swagger对应的handler找不到, 所以没有Match
if (matchResult.isMatch()) {
	AuthorizationManager<RequestAuthorizationContext> manager = mapping.getEntry();
	if (this.logger.isTraceEnabled()) {
		this.logger.trace(LogMessage.format("Checking authorization on %s using %s", request, manager));
	}
	// 后续命中了Mvc [pattern='/*/*.html']对应的Matcher, 而该Matcher对应的匹配规则要求需要`authentication`不为空, 导致报错
	return manager.check(authentication, new RequestAuthorizationContext(request, matchResult.getVariables()));
}
```

## api接口报错后没有返回异常信息

### 解决方案

新版本的`spring-boot`默认不返回异常信息, 需要在`application.yml`中增加以下配置

```yaml
server:
  error:
    include-message: always
```