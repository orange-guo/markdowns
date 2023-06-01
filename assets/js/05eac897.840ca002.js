"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[219],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>d});var n=t(67294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function o(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function g(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},o=Object.keys(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var p=n.createContext({}),s=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},l=function(a){var e=s(a.components);return n.createElement(p.Provider,{value:e},a.children)},c="mdxType",b={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,o=a.originalType,p=a.parentName,l=g(a,["components","mdxType","originalType","parentName"]),c=s(t),m=r,d=c["".concat(p,".").concat(m)]||c[m]||b[m]||o;return t?n.createElement(d,i(i({ref:e},l),{},{components:t})):n.createElement(d,i({ref:e},l))}));function d(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var o=t.length,i=new Array(o);i[0]=m;var g={};for(var p in e)hasOwnProperty.call(e,p)&&(g[p]=e[p]);g.originalType=a,g[c]="string"==typeof a?a:r,i[1]=g;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44239:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>g,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const o={authors:["xiangcheng.kuo"],tags:["problem-solving","spring-boot","spring-framework","native-image"]},i="\u5347\u7ea7\u5230spring-boot-3.1.0\u540enative-image\u542f\u52a8\u62a5\u9519\u4ee5\u53ca\u95ee\u9898\u89e3\u51b3",g={permalink:"/blog/2023/06/01/upgrading-to-spring-boot-3.1.0-native-image-startup-errors-and-solutions",source:"@site/blog/2023-06-01/upgrading-to-spring-boot-3.1.0-native-image-startup-errors-and-solutions.md",title:"\u5347\u7ea7\u5230spring-boot-3.1.0\u540enative-image\u542f\u52a8\u62a5\u9519\u4ee5\u53ca\u95ee\u9898\u89e3\u51b3",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5347\u7ea7\u5230spring-boot-3.1.0\u540enative-image\u542f\u52a8\u62a5\u9519\u4ee5\u53ca\u5bf9\u5e94\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848",date:"2023-06-01T00:00:00.000Z",formattedDate:"June 1, 2023",tags:[{label:"problem-solving",permalink:"/blog/tags/problem-solving"},{label:"spring-boot",permalink:"/blog/tags/spring-boot"},{label:"spring-framework",permalink:"/blog/tags/spring-framework"},{label:"native-image",permalink:"/blog/tags/native-image"}],readingTime:4.9,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","spring-boot","spring-framework","native-image"]},nextItem:{title:"\u57fa\u4e8ehibernate\u7684spring-data-jpa\u7684\u5e76\u53d1\u6027\u80fd\u4f18\u5316\u914d\u7f6e",permalink:"/blog/2023/05/26/performance-optimization-strategies-for-hibernate-in-concurrent-scenarios"}},p={authorsImageUrls:[void 0]},s=[{value:"org.springframework.beans.factory.BeanCreationException: Error creating bean with name &#39;entityManagerFactory&#39;: No classes have been predefined during the image build to load from bytecodes at runtime.",id:"orgspringframeworkbeansfactorybeancreationexception-error-creating-bean-with-name-entitymanagerfactory-no-classes-have-been-predefined-during-the-image-build-to-load-from-bytecodes-at-runtime",level:2},{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"org.springframework.beans.factory.BeanCreationException: Error creating bean with name &#39;entityManagerFactory&#39;: null",id:"orgspringframeworkbeansfactorybeancreationexception-error-creating-bean-with-name-entitymanagerfactory-null",level:2},{value:"\u95ee\u9898\u539f\u56e0",id:"\u95ee\u9898\u539f\u56e0-1",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-1",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599-1",level:2}],l={toc:s},c="wrapper";function b(a){let{components:e,...t}=a;return(0,r.kt)(c,(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5347\u7ea7\u5230spring-boot-3.1.0\u540enative-image\u542f\u52a8\u62a5\u9519\u4ee5\u53ca\u5bf9\u5e94\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("h2",{id:"orgspringframeworkbeansfactorybeancreationexception-error-creating-bean-with-name-entitymanagerfactory-no-classes-have-been-predefined-during-the-image-build-to-load-from-bytecodes-at-runtime"},"org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory': No classes have been predefined during the image build to load from bytecodes at runtime."),(0,r.kt)("p",null,"\u65e5\u5fd7\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory': No classes have been predefined during the image build to load from bytecodes at runtime.\n        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1770) ~[fastone-auditing:6.0.9]\n        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:598) ~[fastone-auditing:6.0.9]\n        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:520) ~[fastone-auditing:6.0.9]\n        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:326) ~[fastone-auditing:6.0.9]\n        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[fastone-auditing:6.0.9]\n        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:324) ~[fastone-auditing:6.0.9]\n        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:200) ~[fastone-auditing:6.0.9]\n        at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1156) ~[fastone-auditing:6.0.9]\n        at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:931) ~[fastone-auditing:6.0.9]\n        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:608) ~[fastone-auditing:6.0.9]\n        at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[fastone-auditing:3.1.0]\n        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:733) ~[fastone-auditing:3.1.0]\n        at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:435) ~[fastone-auditing:3.1.0]\n        at org.springframework.boot.SpringApplication.run(SpringApplication.java:311) ~[fastone-auditing:3.1.0]\n        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1305) ~[fastone-auditing:3.1.0]\n        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1294) ~[fastone-auditing:3.1.0]\n        at com.fastonetech.auditing.FastoneAuditingApplicationKt.main(FastoneAuditingApplication.kt:13) ~[fastone-auditing:na]\n        at com.fastonetech.auditing.FastoneAuditingApplicationKt.main(FastoneAuditingApplication.kt) ~[fastone-auditing:na]\nCaused by: com.oracle.svm.core.jdk.UnsupportedFeatureError: No classes have been predefined during the image build to load from bytecodes at runtime.\n        at org.graalvm.nativeimage.builder/com.oracle.svm.core.util.VMError.unsupportedFeature(VMError.java:89) ~[na:na]\n        at org.graalvm.nativeimage.builder/com.oracle.svm.core.hub.PredefinedClassesSupport.throwNoBytecodeClasses(PredefinedClassesSupport.java:76) ~[na:na]\n        at org.graalvm.nativeimage.builder/com.oracle.svm.core.hub.PredefinedClassesSupport.loadClass(PredefinedClassesSupport.java:130) ~[na:na]\n        at java.base@17.0.5/java.lang.ClassLoader.defineClass(ClassLoader.java:294) ~[fastone-auditing:na]\n        at net.bytebuddy.utility.dispatcher.JavaDispatcher$DynamicClassLoader.invoker(JavaDispatcher.java:1383) ~[na:na]\n        at net.bytebuddy.utility.dispatcher.JavaDispatcher$InvokerCreationAction.run(JavaDispatcher.java:459) ~[na:na]\n        at net.bytebuddy.utility.dispatcher.JavaDispatcher$InvokerCreationAction.run(JavaDispatcher.java:452) ~[na:na]\n        at java.base@17.0.5/java.security.AccessController.executePrivileged(AccessController.java:168) ~[na:na]\n        at java.base@17.0.5/java.security.AccessController.doPrivileged(AccessController.java:318) ~[na:na]\n        at net.bytebuddy.utility.dispatcher.JavaDispatcher.doPrivileged(JavaDispatcher.java) ~[na:na]\n        at net.bytebuddy.utility.dispatcher.JavaDispatcher.<clinit>(JavaDispatcher.java:87) ~[na:na]\n        at net.bytebuddy.description.type.TypeDescription$ForLoadedType.<clinit>(TypeDescription.java:8659) ~[na:na]\n        at net.bytebuddy.matcher.ElementMatchers.isFinalizer(ElementMatchers.java:1624) ~[na:na]\n        at org.hibernate.bytecode.internal.bytebuddy.ByteBuddyState$ProxyDefinitionHelpers.<init>(ByteBuddyState.java:296) ~[na:na]\n        at org.hibernate.bytecode.internal.bytebuddy.ByteBuddyState.<clinit>(ByteBuddyState.java:71) ~[na:na]\n        at org.hibernate.bytecode.internal.bytebuddy.BytecodeProviderImpl.<init>(BytecodeProviderImpl.java:123) ~[na:na]\n        at org.hibernate.bytecode.internal.bytebuddy.BytecodeProviderImpl.<init>(BytecodeProviderImpl.java:115) ~[na:na]\n        at org.hibernate.bytecode.internal.BytecodeProviderInitiator.buildBytecodeProvider(BytecodeProviderInitiator.java:59) ~[na:na]\n        at org.hibernate.bytecode.internal.BytecodeProviderInitiator.buildDefaultBytecodeProvider(BytecodeProviderInitiator.java:46) ~[na:na]\n        at org.hibernate.jpa.internal.enhance.EnhancingClassTransformerImpl.<init>(EnhancingClassTransformerImpl.java:34) ~[na:na]\n        at org.hibernate.jpa.boot.internal.PersistenceUnitInfoDescriptor.pushClassTransformer(PersistenceUnitInfoDescriptor.java:113) ~[fastone-auditing:6.2.2.Final]\n        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.<init>(EntityManagerFactoryBuilderImpl.java:340) ~[na:na]\n        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.<init>(EntityManagerFactoryBuilderImpl.java:190) ~[na:na]\n        at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:60) ~[na:na]\n        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:376) ~[fastone-auditing:6.0.9]\n        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:409) ~[fastone-auditing:6.0.9]\n        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:396) ~[fastone-auditing:6.0.9]\n        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:352) ~[fastone-auditing:6.0.9]\n        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1816) ~[fastone-auditing:6.0.9]\n        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1766) ~[fastone-auditing:6.0.9]\n        ... 17 common frames omitted\n")),(0,r.kt)("h3",{id:"\u95ee\u9898\u539f\u56e0"},"\u95ee\u9898\u539f\u56e0"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"springframework"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"hibernate"),"\u4e4b\u95f4\u7684\u96c6\u6210\u95ee\u9898, \u9700\u8981\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"springframework"),"\u5347\u7ea7\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"6.0.10-SNAPSHOT"),"\u7248\u672c\u5373\u53ef\u89e3\u51b3\u8be5\u95ee\u9898\n\u8be6\u7ec6",(0,r.kt)("inlineCode",{parentName:"p"},"issue"),"\n\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-framework/issues/30492"},"Skip class transformer in PersistenceUnitInfoDescriptor for native images #30492")),(0,r.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u73b0\u5728\u5728\u5199\u89e3\u51b3\u65b9\u6848\u7684\u65f6\u5019, ",(0,r.kt)("inlineCode",{parentName:"p"},"springframework"),"\u7684\u6700\u65b0\u7248\u672c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"6.0.9"),", \u5982\u679c\u540e\u7eed",(0,r.kt)("inlineCode",{parentName:"p"},"6.0.10"),"\u7248\u672c\u53d1\u5e03, \u5219\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"6.0.10"),"\u7248\u672c.")),(0,r.kt)("p",null,"\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"springframework"),"\u5347\u7ea7\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"6.0.10-SNAPSHOT"),"\u7248\u672c, \u8be5\u7248\u672c\u4e2d\u4fee\u590d\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"hibernate"),"\u7684\u96c6\u6210\u95ee\u9898."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation(platform("org.springframework:spring-framework-bom:6.0.10-SNAPSHOT"))\n')),(0,r.kt)("h2",{id:"orgspringframeworkbeansfactorybeancreationexception-error-creating-bean-with-name-entitymanagerfactory-null"},"org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory': null"),(0,r.kt)("p",null,"\u65e5\u5fd7\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory': null\n        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1770) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:598) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:520) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:326) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:324) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:200) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1156) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:931) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:608) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[springboot3-todo:3.1.0]\n        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:733) ~[springboot3-todo:3.1.0]\n        at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:435) ~[springboot3-todo:3.1.0]\n        at org.springframework.boot.SpringApplication.run(SpringApplication.java:311) ~[springboot3-todo:3.1.0]\n        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1305) ~[springboot3-todo:3.1.0]\n        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1294) ~[springboot3-todo:3.1.0]\n        at com.example.Application.main(Application.java:16) ~[springboot3-todo:na]\nCaused by: java.lang.ExceptionInInitializerError: null\n        at org.hibernate.engine.jdbc.dialect.internal.DialectFactoryImpl.logSelectedDialect(DialectFactoryImpl.java:93) ~[springboot3-todo:6.2.2.Final]\n        at org.hibernate.engine.jdbc.dialect.internal.DialectFactoryImpl.buildDialect(DialectFactoryImpl.java:88) ~[springboot3-todo:6.2.2.Final]\n        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:224) ~[na:na]\n        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:34) ~[na:na]\n        at org.hibernate.boot.registry.internal.StandardServiceRegistryImpl.initiateService(StandardServiceRegistryImpl.java:119) ~[na:na]\n        at org.hibernate.service.internal.AbstractServiceRegistryImpl.createService(AbstractServiceRegistryImpl.java:264) ~[springboot3-todo:6.2.2.Final]\n        at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:239) ~[springboot3-todo:6.2.2.Final]\n        at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:216) ~[springboot3-todo:6.2.2.Final]\n        at org.hibernate.boot.model.relational.Database.<init>(Database.java:45) ~[na:na]\n        at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.getDatabase(InFlightMetadataCollectorImpl.java:229) ~[springboot3-todo:6.2.2.Final]\n        at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.<init>(InFlightMetadataCollectorImpl.java:197) ~[springboot3-todo:6.2.2.Final]\n        at org.hibernate.boot.model.process.spi.MetadataBuildingProcess.complete(MetadataBuildingProcess.java:166) ~[na:na]\n        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.metadata(EntityManagerFactoryBuilderImpl.java:1380) ~[na:na]\n        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1451) ~[na:na]\n        at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:74) ~[na:na]\n        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:376) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:409) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:396) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:352) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1816) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1766) ~[springboot3-todo:6.0.10-SNAPSHOT]\n        ... 16 common frames omitted\nCaused by: java.lang.IllegalArgumentException: Invalid logger interface org.hibernate.dialect.DialectLogging (implementation not found in jdk.internal.loader.ClassLoaders$AppClassLoader@3ecf72fd)\n        at org.jboss.logging.Logger.doGetMessageLogger(Logger.java:2564) ~[springboot3-todo:3.5.0.Final]\n        at org.jboss.logging.Logger.getMessageLogger(Logger.java:2530) ~[springboot3-todo:3.5.0.Final]\n        at org.jboss.logging.Logger.getMessageLogger(Logger.java:2516) ~[springboot3-todo:3.5.0.Final]\n        at org.hibernate.dialect.DialectLogging.<clinit>(DialectLogging.java:31) ~[na:na]\n        ... 37 common frames omitted\n")),(0,r.kt)("h3",{id:"\u95ee\u9898\u539f\u56e0-1"},"\u95ee\u9898\u539f\u56e0"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"hibernate"),"\u4e2d\u6d89\u53ca\u5230\u53cd\u5c04\u8c03\u7528\u7684\u76f8\u5173\u7684\u7c7b\u6ca1\u6709\u6ce8\u518c\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"reflect-config.json"),"\u4e2d\u5bfc\u81f4\u7684."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u73b0\u5728\u5728\u5199\u8fd9\u7bc7\u6587\u7ae0\u7684\u65f6\u5019,",(0,r.kt)("inlineCode",{parentName:"p"},"org.graalvm.buildtools.native"),"\u7684\u63d2\u4ef6\u4f7f\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"metadataRepository"),"\u7684\u7248\u672c\u8fd8\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"0.3.0"),".\n\u8fd9\u4e2a\u7248\u672c\u4e2d\u8fd8\u6ca1\u6709\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"hibernate"),"\u76f8\u5173\u7684\u7c7b\u6ce8\u518c\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"reflect-config.json"),"\u4e2d, \u5982\u679c\u540e\u7eed",(0,r.kt)("inlineCode",{parentName:"p"},"0.3.2"),"\u7248\u672c\u53d1\u5e03\u4e86, \u90a3\u4e48\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"0.3.2"),"\n\u7248\u672c\u7684\u63d2\u4ef6, \u4e0d\u9700\u8981\u518d\u624b\u52a8\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"reflect-config.json"),"\u6587\u4ef6\u4e86.")),(0,r.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-1"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),"\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF/native-image"),"\u4e0b\u7684\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"reflect-config.json"),"\u7684\u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=META-INF/native-image/reflect-config.json",title:"META-INF/native-image/reflect-config.json"},'[\n    {\n        "name": "org.hibernate.dialect.DialectLogging_$logger",\n        "methods": [\n            {\n                "name": "<init>",\n                "parameterTypes": [\n                    "org.jboss.logging.Logger"\n                ]\n            }\n        ]\n    },\n    {\n        "name": "org.hibernate.metamodel.mapping.MappingModelCreationLogging_$logger",\n        "methods": [\n            {\n                "name": "<init>",\n                "parameterTypes": [\n                    "org.jboss.logging.Logger"\n                ]\n            }\n        ]\n    },\n    {\n        "name": "org.hibernate.engine.jdbc.env.internal.LobCreationLogging_$logger",\n        "methods": [\n            {\n                "name": "<init>",\n                "parameterTypes": [\n                    "org.jboss.logging.Logger"\n                ]\n            }\n        ]\n    },\n    {\n        "name": "org.hibernate.boot.jaxb.JaxbLogger_$logger",\n        "methods": [\n            {\n                "name": "<init>",\n                "parameterTypes": [\n                    "org.jboss.logging.Logger"\n                ]\n            }\n        ]\n    },\n    {\n        "name": "org.hibernate.cache.spi.SecondLevelCacheLogger_$logger",\n        "methods": [\n            {\n                "name": "<init>",\n                "parameterTypes": [\n                    "org.jboss.logging.Logger"\n                ]\n            }\n        ]\n    },\n    {\n        "name": "org.hibernate.engine.jdbc.JdbcLogging_$logger",\n        "methods": [\n            {\n                "name": "<init>",\n                "parameterTypes": [\n                    "org.jboss.logging.Logger"\n                ]\n            }\n        ]\n    },\n    {\n        "name": "org.hibernate.resource.beans.internal.BeansMessageLogger_$logger",\n        "methods": [\n            {\n                "name": "<init>",\n                "parameterTypes": [\n                    "org.jboss.logging.Logger"\n                ]\n            }\n        ]\n    },\n    {\n        "name": "org.hibernate.sql.results.graph.embeddable.EmbeddableLoadingLogger_$logger",\n        "methods": [\n            {\n                "name": "<init>",\n                "parameterTypes": [\n                    "org.jboss.logging.Logger"\n                ]\n            }\n        ]\n    }\n]\n')),(0,r.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/oracle/graalvm-reachability-metadata/pull/286"},"Fix compatibility with Hibernate 6.2.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/oracle/graalvm-reachability-metadata/issues/297"},"Missing logger reflection entries for Hibernate 6.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/oracle/graalvm-reachability-metadata/commit/afb9a1ee44e0a18b9cd31f04e038caea32d308a3"},"Add missing logger metadata for Hibernate 6.2"))),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u4e0a\u9762\u662f\u6211\u76ee\u524d\u5347\u7ea7\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"spring-boot-3.1.0"),"\u540e\u9047\u5230\u7684\u95ee\u9898, \u603b\u7684\u6765\u8bf4\u8fd9\u4e9b\u95ee\u9898\u90fd\u662f\u56e0\u4e3a\u6846\u67b6\u5185\u90e8\u7684\u4e00\u4e9b\u96c6\u6210\u95ee\u9898\u5bfc\u81f4\u7684.",(0,r.kt)("br",null),"\n\u76ee\u524d",(0,r.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"native-image"),"\u63d2\u4ef6\u8fd8\u4e0d\u662f\u5f88\u5b8c\u5584, \u6709\u4e9b\u95ee\u9898\u8fd8\u9700\u8981\u6211\u4eec\u81ea\u5df1\u53bb\u89e3\u51b3, \u4f46\u662f\u76f8\u4fe1\u968f\u7740",(0,r.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u7684\u53d1\u5c55, \u8fd9\u4e9b\u95ee\u9898\u90fd\u4f1a\u9010\u6e10\u89e3\u51b3\u7684.\n",(0,r.kt)("inlineCode",{parentName:"p"},"oracle"),"\u7ef4\u62a4\u4e86\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"graalvm"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"reachability-metadata"),"\u7684\u9879\u76ee, \u7528\u6765\u89e3\u51b3\u4e00\u4e9b\u6846\u67b6\u96c6\u6210\u7684\u95ee\u9898, \u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u4e2a\u9879\u76ee\u4e2d\u67e5\u770b\u5230\u4e00\u4e9b\u6846\u67b6\u7684\u96c6\u6210\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848."),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599-1"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/oracle/graalvm-reachability-metadata"},"graalvm-reachability-metadata"))))}b.isMDXComponent=!0}}]);