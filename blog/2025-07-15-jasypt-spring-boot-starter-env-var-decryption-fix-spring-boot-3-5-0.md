---
authors: [ orange ]
tags: [ troubleshooting, java, spring-boot, jasypt, jasypt-spring-boot-starter ]
---

# 解决 Spring Boot 3.5.0 后 Jasypt 无法解析环境变量中的加密字符串问题

当 Spring Boot 项目升级到 3.5.0 及更高版本后，使用 `jasypt-spring-boot-starter`
会遇到一个问题：应用程序无法正确解析环境变量中配置的加密字符串。具体表现为，在应用程序运行期间，读取到的配置值仍然是加密后的字符串（例如
ENC(加密字符串)），而非解密后的原始值。

<!--truncate-->

## 问题示例

考虑以下 Spring Boot 配置属性类：

```java

@ConfigurationProperties(prefix = "test")
class TestProperties {

	private String password;

	public void setPassword(String password) {
		this.password = password;
	}

}
```

并在环境变量中配置加密后的密码：

```bash
TEST_PASSWORD=ENC(加密字符串) # 假设其原始值为 password
```

**预期行为：** 在 Spring Boot 3.5.0 之前的版本中，`TestProperties.password` 的值会是 password。

**实际行为** (Spring Boot 3.5.0 及以上)： `TestProperties.password` 的值仍然是 ENC(加密字符串)。

## 原因分析

此问题源于 Spring Boot 3.5.0 版本中 `SpringConfigurationPropertySource` 类的内部变化。

自 Spring Boot 3.5.0 起，`SpringConfigurationPropertySource` 对其内部代理的 `PropertySource` 进行了检查。如果代理的
`PropertySource` 类型为 `SystemEnvironmentPropertySource`（`SystemEnvironmentPropertySource` 是对操作系统环境变量的抽象），Spring
Boot 会直接调用其 `getSource()` 方法来获取原始的 `Map<String, String>`，而不再通过 `getProperty()` 方法逐个获取属性。

然而，`jasypt-spring-boot-starter` 在设计之初，其加密代理逻辑主要集中在对 `getProperty()` 方法的封装和解析上，而没有对
`getSource()` 方法进行相应的代理或处理。这种“直通”（`pass-through`）场景的遗漏，导致 jasypt 无法在 Spring Boot 3.5.0
及以上版本中正确拦截和解密从环境变量中获取的加密字符串。

## spring-boot为什么要这样修改

spring-boot为了提高性能，通常来说，Environment在程序启动后是不会变化的，因此其值是不会变化的，因此`spring-boot`
的维护者为了减少不必要的方法调用直接调用`getSource()`方法获取原始的`Map<String, String>`，而不是每次都调用`getProperty()`
方法。

但是对于jasypt来说，其需要解析环境变量中的加密字符串，在设计之初，遗漏了这种pass-through场景，因此导致了上述问题的发生。

## 解决方案

鉴于 `jasypt-spring-boot-starter` 项目已有一段时间未进行更新，通过创建 Issue 可能难以获得及时响应。从长远来看，迁移到其他活跃维护的加密库是最佳的解决方案。

然而，为了提供一个快速的临时 `workaround`，我们可以通过自定义 `PropertySource` 包装器来适配 Spring Boot 的新行为。

临时 Workaround
将以下 Java 代码复制到 Spring Boot 应用项目中。请注意：此代码不能放置在自定义的公共库中，否则类加载器可能不会优先加载我们覆盖的类，导致
`workaround` 不生效。

```java
package com.ulisesbocchio.jasyptspringboot.wrapper;

import com.ulisesbocchio.jasyptspringboot.EncryptablePropertyFilter;
import com.ulisesbocchio.jasyptspringboot.EncryptablePropertyResolver;
import com.ulisesbocchio.jasyptspringboot.EncryptablePropertySource;
import com.ulisesbocchio.jasyptspringboot.caching.CachingDelegateEncryptablePropertySource;
import java.util.Collections;
import java.util.HashMap;
import org.jetbrains.annotations.NotNull;
import org.springframework.boot.origin.Origin;
import org.springframework.boot.origin.SystemEnvironmentOrigin;
import org.springframework.core.env.PropertySource;
import org.springframework.core.env.SystemEnvironmentPropertySource;

import java.util.Map;

/**
 * <p>EncryptableSystemEnvironmentPropertySourceWrapper class.</p>
 *
 * @author Tomas Tulka (@ttulka)
 * @version $Id: $Id
 */
public class EncryptableSystemEnvironmentPropertySourceWrapper extends SystemEnvironmentPropertySource implements EncryptablePropertySource<Map<String, Object>> {

	private final CachingDelegateEncryptablePropertySource<Map<String, Object>> encryptableDelegate;

	private Map<String, Object> newSource = new HashMap<>();

	/**
	 * <p>Constructor for EncryptableSystemEnvironmentPropertySourceWrapper.</p>
	 *
	 * @param delegate a {@link org.springframework.core.env.SystemEnvironmentPropertySource} object
	 * @param resolver a {@link com.ulisesbocchio.jasyptspringboot.EncryptablePropertyResolver} object
	 * @param filter a {@link com.ulisesbocchio.jasyptspringboot.EncryptablePropertyFilter} object
	 */
	public EncryptableSystemEnvironmentPropertySourceWrapper(SystemEnvironmentPropertySource delegate, EncryptablePropertyResolver resolver, EncryptablePropertyFilter filter) {
		super(delegate.getName(), delegate.getSource());
		encryptableDelegate = new CachingDelegateEncryptablePropertySource<>(delegate, resolver, filter);
		// see fastone/cce-project#14093
		delegate.getSource().forEach((key, value) -> {
			if (value instanceof String s) {
				newSource.put(key, resolver.resolvePropertyValue(s));
			}
		});
		newSource = Collections.unmodifiableMap(newSource);
	}

	@NotNull
	@Override
	public Map<String, Object> getSource() {
		return this.newSource;
	}

	/** {@inheritDoc} */
	@Override
	public Object getProperty(String name) {
		return encryptableDelegate.getProperty(name);
	}

	/** {@inheritDoc} */
	@Override
	public PropertySource<Map<String, Object>> getDelegate() {
		return encryptableDelegate;
	}

	/** {@inheritDoc} */
	@Override
	public Origin getOrigin(String key) {
		Origin fromSuper = EncryptablePropertySource.super.getOrigin(key);
		if (fromSuper != null) {
			return fromSuper;
		}
		String property = resolvePropertyName(key);
		if (super.containsProperty(property)) {
			return new SystemEnvironmentOrigin(property);
		}
		return null;
	}
}
```

在上述代码中，我们重写了 `getSource()` 方法，确保它返回的是一个已经过 jasypt 解析器处理（即解密）后的 `Map<String, Object>`
对象。这样，当 Spring Boot 直接调用 `getSource()` 时，也能获取到解密后的值。

## 相关原理介绍

为了更好地理解此问题和解决方案，我们简要介绍 Spring 和 `jasypt-spring-boot-starter` 中的相关概念和机制。

**PropertySource**

`PropertySource` 是 Spring 框架中一个核心接口，它抽象了各种不同的配置来源，如`系统环境变量`、`JVM 系统属性`、外部配置文件（如
`application.properties`、`application.yml`）等。
其常见的实现类包括：

- `SystemEnvironmentPropertySource`：用于封装操作系统环境变量。
- `PropertiesPropertySource`：用于封装 java.util.Properties 对象。

这种设计提高了 Spring 框架的灵活性和扩展性，使得配置来源可以灵活地扩展和替换。

**jasypt-spring-boot-starter 如何封装 PropertySource**
`jasypt-spring-boot-starter` 引入了“包装器”（`Wrapper`）机制。它通过继承 Spring 框架中常见的 `PropertySource` 实现类，完成了对原始
`PropertySource` 的封装。
例如：

- `EncryptableSystemEnvironmentPropertySourceWrapper`：用于包装 SystemEnvironmentPropertySource。
- `EncryptableEnumerablePropertySourceWrapper`：用于包装 EnumerablePropertySource（一个可以枚举所有属性的 PropertySource）。

**jasypt-spring-boot-starter 如何完成对原始 PropertySource 的替换**

Spring Boot 提供了自动配置（`factories`）的机制，允许第三方库自定义配置类。spring-boot 会在应用程序启动时读取到这些相关配置类，而无需用户手动导入。
`jasypt-spring-boot-starter` 的配置类中引入了 `EncryptablePropertySourceBeanFactoryPostProcessor` 类。它是
`BeanFactoryPostProcessor` 的实现类，在 Spring 容器初始化阶段（Bean 定义加载后，Bean 实例化前）被调用。

`EncryptablePropertySourceBeanFactoryPostProcessor` 会拦截并修改 `Environment` 中的原始 `PropertySource` 实例，将其替换为封装后的
`Wrapper` 实现（例如 `EncryptableSystemEnvironmentPropertySourceWrapper`）。

至此，原始的 PropertySource 就被封装后的 Wrapper 实现了替换，从而 jasypt 可以介入属性的读取过程。

## 总结

`jasypt-spring-boot-starter` 在 Spring Boot 3.5.0 版本中遇到了兼容性问题，主要是因为 Spring Boot 对
SystemEnvironmentPropertySource 的内部处理方式发生了变化。为了解决这个问题，可以通过自定义
`EncryptableSystemEnvironmentPropertySourceWrapper` 类来适配新的实现方式。

> 值得注意的是，虽然这种方法可以作为临时 workaround 解决当前问题，但从长远来看，考虑到项目的可维护性和安全性，建议寻找替代的解决方案（例如，将敏感配置通过更安全的密钥管理服务注入，或者使用
> Spring Cloud Config 的解密功能）。

## 相关链接

- [jasypt-spring-boot-starter GitHub 仓库](https://github.com/ulisesbocchio/jasypt-spring-boot)
- [Spring Boot SpringConfigurationPropertySource 相关的 Git 提交记录](https://github.com/spring-projects/spring-boot/commit/d9d206a761d49aa216cd114d7d897326432b14d4)
- [Spring Boot 相关 Issue](https://github.com/spring-projects/spring-boot/issues/44862)
- [SpringConfigurationPropertySource.java 源码](https://github.com/spring-projects/spring-boot/blob/main/core/spring-boot/src/main/java/org/springframework/boot/context/properties/source/SpringConfigurationPropertySource.java)