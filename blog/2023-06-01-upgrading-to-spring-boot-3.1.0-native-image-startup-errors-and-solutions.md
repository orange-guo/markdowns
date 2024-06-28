---
authors: [ xiangcheng.kuo ]
tags: [ problem-solving, spring-boot, spring-framework, native-image ]
---

# 升级到spring-boot-3.1.0后native-image启动报错以及问题解决

本文主要介绍升级到spring-boot-3.1.0后native-image启动报错以及对应问题的解决方案

<!--truncate-->

## org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory': No classes have been predefined during the image build to load from bytecodes at runtime.

日志如下

```log
org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory': No classes have been predefined during the image build to load from bytecodes at runtime.
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1770) ~[fastone-auditing:6.0.9]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:598) ~[fastone-auditing:6.0.9]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:520) ~[fastone-auditing:6.0.9]
        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:326) ~[fastone-auditing:6.0.9]
        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[fastone-auditing:6.0.9]
        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:324) ~[fastone-auditing:6.0.9]
        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:200) ~[fastone-auditing:6.0.9]
        at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1156) ~[fastone-auditing:6.0.9]
        at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:931) ~[fastone-auditing:6.0.9]
        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:608) ~[fastone-auditing:6.0.9]
        at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[fastone-auditing:3.1.0]
        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:733) ~[fastone-auditing:3.1.0]
        at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:435) ~[fastone-auditing:3.1.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:311) ~[fastone-auditing:3.1.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1305) ~[fastone-auditing:3.1.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1294) ~[fastone-auditing:3.1.0]
        at com.fastonetech.auditing.FastoneAuditingApplicationKt.main(FastoneAuditingApplication.kt:13) ~[fastone-auditing:na]
        at com.fastonetech.auditing.FastoneAuditingApplicationKt.main(FastoneAuditingApplication.kt) ~[fastone-auditing:na]
Caused by: com.oracle.svm.core.jdk.UnsupportedFeatureError: No classes have been predefined during the image build to load from bytecodes at runtime.
        at org.graalvm.nativeimage.builder/com.oracle.svm.core.util.VMError.unsupportedFeature(VMError.java:89) ~[na:na]
        at org.graalvm.nativeimage.builder/com.oracle.svm.core.hub.PredefinedClassesSupport.throwNoBytecodeClasses(PredefinedClassesSupport.java:76) ~[na:na]
        at org.graalvm.nativeimage.builder/com.oracle.svm.core.hub.PredefinedClassesSupport.loadClass(PredefinedClassesSupport.java:130) ~[na:na]
        at java.base@17.0.5/java.lang.ClassLoader.defineClass(ClassLoader.java:294) ~[fastone-auditing:na]
        at net.bytebuddy.utility.dispatcher.JavaDispatcher$DynamicClassLoader.invoker(JavaDispatcher.java:1383) ~[na:na]
        at net.bytebuddy.utility.dispatcher.JavaDispatcher$InvokerCreationAction.run(JavaDispatcher.java:459) ~[na:na]
        at net.bytebuddy.utility.dispatcher.JavaDispatcher$InvokerCreationAction.run(JavaDispatcher.java:452) ~[na:na]
        at java.base@17.0.5/java.security.AccessController.executePrivileged(AccessController.java:168) ~[na:na]
        at java.base@17.0.5/java.security.AccessController.doPrivileged(AccessController.java:318) ~[na:na]
        at net.bytebuddy.utility.dispatcher.JavaDispatcher.doPrivileged(JavaDispatcher.java) ~[na:na]
        at net.bytebuddy.utility.dispatcher.JavaDispatcher.<clinit>(JavaDispatcher.java:87) ~[na:na]
        at net.bytebuddy.description.type.TypeDescription$ForLoadedType.<clinit>(TypeDescription.java:8659) ~[na:na]
        at net.bytebuddy.matcher.ElementMatchers.isFinalizer(ElementMatchers.java:1624) ~[na:na]
        at org.hibernate.bytecode.internal.bytebuddy.ByteBuddyState$ProxyDefinitionHelpers.<init>(ByteBuddyState.java:296) ~[na:na]
        at org.hibernate.bytecode.internal.bytebuddy.ByteBuddyState.<clinit>(ByteBuddyState.java:71) ~[na:na]
        at org.hibernate.bytecode.internal.bytebuddy.BytecodeProviderImpl.<init>(BytecodeProviderImpl.java:123) ~[na:na]
        at org.hibernate.bytecode.internal.bytebuddy.BytecodeProviderImpl.<init>(BytecodeProviderImpl.java:115) ~[na:na]
        at org.hibernate.bytecode.internal.BytecodeProviderInitiator.buildBytecodeProvider(BytecodeProviderInitiator.java:59) ~[na:na]
        at org.hibernate.bytecode.internal.BytecodeProviderInitiator.buildDefaultBytecodeProvider(BytecodeProviderInitiator.java:46) ~[na:na]
        at org.hibernate.jpa.internal.enhance.EnhancingClassTransformerImpl.<init>(EnhancingClassTransformerImpl.java:34) ~[na:na]
        at org.hibernate.jpa.boot.internal.PersistenceUnitInfoDescriptor.pushClassTransformer(PersistenceUnitInfoDescriptor.java:113) ~[fastone-auditing:6.2.2.Final]
        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.<init>(EntityManagerFactoryBuilderImpl.java:340) ~[na:na]
        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.<init>(EntityManagerFactoryBuilderImpl.java:190) ~[na:na]
        at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:60) ~[na:na]
        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:376) ~[fastone-auditing:6.0.9]
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:409) ~[fastone-auditing:6.0.9]
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:396) ~[fastone-auditing:6.0.9]
        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:352) ~[fastone-auditing:6.0.9]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1816) ~[fastone-auditing:6.0.9]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1766) ~[fastone-auditing:6.0.9]
        ... 17 common frames omitted
```

### 问题原因

这个问题是`springframework`和`hibernate`之间的集成问题, 需要将`springframework`升级到`6.0.10-SNAPSHOT`版本即可解决该问题
详细`issue`
见[Skip class transformer in PersistenceUnitInfoDescriptor for native images #30492](https://github.com/spring-projects/spring-framework/issues/30492)

### 解决方案

:::note
现在在写解决方案的时候, `springframework`的最新版本是`6.0.9`, 如果后续`6.0.10`版本发布, 则可以直接使用`6.0.10`版本.
:::

将`springframework`升级到`6.0.10-SNAPSHOT`版本, 该版本中修复了`hibernate`的集成问题.

```kotlin
implementation(platform("org.springframework:spring-framework-bom:6.0.10-SNAPSHOT"))
```

## org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory': null

日志如下

```log
org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory': null
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1770) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:598) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:520) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:326) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:324) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:200) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1156) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:931) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:608) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[springboot3-todo:3.1.0]
        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:733) ~[springboot3-todo:3.1.0]
        at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:435) ~[springboot3-todo:3.1.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:311) ~[springboot3-todo:3.1.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1305) ~[springboot3-todo:3.1.0]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1294) ~[springboot3-todo:3.1.0]
        at com.example.Application.main(Application.java:16) ~[springboot3-todo:na]
Caused by: java.lang.ExceptionInInitializerError: null
        at org.hibernate.engine.jdbc.dialect.internal.DialectFactoryImpl.logSelectedDialect(DialectFactoryImpl.java:93) ~[springboot3-todo:6.2.2.Final]
        at org.hibernate.engine.jdbc.dialect.internal.DialectFactoryImpl.buildDialect(DialectFactoryImpl.java:88) ~[springboot3-todo:6.2.2.Final]
        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:224) ~[na:na]
        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:34) ~[na:na]
        at org.hibernate.boot.registry.internal.StandardServiceRegistryImpl.initiateService(StandardServiceRegistryImpl.java:119) ~[na:na]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.createService(AbstractServiceRegistryImpl.java:264) ~[springboot3-todo:6.2.2.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:239) ~[springboot3-todo:6.2.2.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:216) ~[springboot3-todo:6.2.2.Final]
        at org.hibernate.boot.model.relational.Database.<init>(Database.java:45) ~[na:na]
        at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.getDatabase(InFlightMetadataCollectorImpl.java:229) ~[springboot3-todo:6.2.2.Final]
        at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.<init>(InFlightMetadataCollectorImpl.java:197) ~[springboot3-todo:6.2.2.Final]
        at org.hibernate.boot.model.process.spi.MetadataBuildingProcess.complete(MetadataBuildingProcess.java:166) ~[na:na]
        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.metadata(EntityManagerFactoryBuilderImpl.java:1380) ~[na:na]
        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1451) ~[na:na]
        at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:74) ~[na:na]
        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:376) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:409) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:396) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:352) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1816) ~[springboot3-todo:6.0.10-SNAPSHOT]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1766) ~[springboot3-todo:6.0.10-SNAPSHOT]
        ... 16 common frames omitted
Caused by: java.lang.IllegalArgumentException: Invalid logger interface org.hibernate.dialect.DialectLogging (implementation not found in jdk.internal.loader.ClassLoaders$AppClassLoader@3ecf72fd)
        at org.jboss.logging.Logger.doGetMessageLogger(Logger.java:2564) ~[springboot3-todo:3.5.0.Final]
        at org.jboss.logging.Logger.getMessageLogger(Logger.java:2530) ~[springboot3-todo:3.5.0.Final]
        at org.jboss.logging.Logger.getMessageLogger(Logger.java:2516) ~[springboot3-todo:3.5.0.Final]
        at org.hibernate.dialect.DialectLogging.<clinit>(DialectLogging.java:31) ~[na:na]
        ... 37 common frames omitted
```

### 问题原因

这个问题是`hibernate`中涉及到反射调用的相关的类没有注册到`reflect-config.json`中导致的.

:::note
现在在写这篇文章的时候,`org.graalvm.buildtools.native`的插件使用的`metadataRepository`的版本还是`0.3.0`.
这个版本中还没有为`hibernate`相关的类注册到`reflect-config.json`中, 如果后续`0.3.2`版本发布了, 那么可以直接使用`0.3.2`
版本的插件, 不需要再手动添加`reflect-config.json`文件了.
:::

### 解决方案

在`resources`下的`META-INF/native-image`下的名为`reflect-config.json`的文件中增加如下内容

```json title=META-INF/native-image/reflect-config.json
[
	{
		"name": "org.hibernate.dialect.DialectLogging_$logger",
		"methods": [
			{
				"name": "<init>",
				"parameterTypes": [
					"org.jboss.logging.Logger"
				]
			}
		]
	},
	{
		"name": "org.hibernate.metamodel.mapping.MappingModelCreationLogging_$logger",
		"methods": [
			{
				"name": "<init>",
				"parameterTypes": [
					"org.jboss.logging.Logger"
				]
			}
		]
	},
	{
		"name": "org.hibernate.engine.jdbc.env.internal.LobCreationLogging_$logger",
		"methods": [
			{
				"name": "<init>",
				"parameterTypes": [
					"org.jboss.logging.Logger"
				]
			}
		]
	},
	{
		"name": "org.hibernate.boot.jaxb.JaxbLogger_$logger",
		"methods": [
			{
				"name": "<init>",
				"parameterTypes": [
					"org.jboss.logging.Logger"
				]
			}
		]
	},
	{
		"name": "org.hibernate.cache.spi.SecondLevelCacheLogger_$logger",
		"methods": [
			{
				"name": "<init>",
				"parameterTypes": [
					"org.jboss.logging.Logger"
				]
			}
		]
	},
	{
		"name": "org.hibernate.engine.jdbc.JdbcLogging_$logger",
		"methods": [
			{
				"name": "<init>",
				"parameterTypes": [
					"org.jboss.logging.Logger"
				]
			}
		]
	},
	{
		"name": "org.hibernate.resource.beans.internal.BeansMessageLogger_$logger",
		"methods": [
			{
				"name": "<init>",
				"parameterTypes": [
					"org.jboss.logging.Logger"
				]
			}
		]
	},
	{
		"name": "org.hibernate.sql.results.graph.embeddable.EmbeddableLoadingLogger_$logger",
		"methods": [
			{
				"name": "<init>",
				"parameterTypes": [
					"org.jboss.logging.Logger"
				]
			}
		]
	}
]
```

### 参考资料

- [Fix compatibility with Hibernate 6.2.2](https://github.com/oracle/graalvm-reachability-metadata/pull/286)
- [Missing logger reflection entries for Hibernate 6.2](https://github.com/oracle/graalvm-reachability-metadata/issues/297)
- [Add missing logger metadata for Hibernate 6.2](https://github.com/oracle/graalvm-reachability-metadata/commit/afb9a1ee44e0a18b9cd31f04e038caea32d308a3)

## 总结

上面是我目前升级到`spring-boot-3.1.0`后遇到的问题, 总的来说这些问题都是因为框架内部的一些集成问题导致的.<br/>
目前`graalvm`的`native-image`插件还不是很完善, 有些问题还需要我们自己去解决, 但是相信随着`graalvm`的发展, 这些问题都会逐渐解决的.
`oracle`维护了一个`graalvm`的`reachability-metadata`的项目, 用来解决一些框架集成的问题, 我们可以在这个项目中查看到一些框架的集成问题的解决方案.

## 参考资料

- [graalvm-reachability-metadata](https://github.com/oracle/graalvm-reachability-metadata)