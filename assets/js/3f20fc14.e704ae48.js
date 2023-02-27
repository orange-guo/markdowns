"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[2784],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=p(e.components);return r.createElement(c.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=p(t),d=o,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||n;return t?r.createElement(m,i(i({ref:a},l),{},{components:t})):r.createElement(m,i({ref:a},l))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=d;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[g]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6530:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const n={authors:["xiangcheng.kuo"],tags:["testcontainers","docker"]},i="\u89e3\u51b3TestContainers\u4e2d\u62c9\u53d6\u7279\u5b9adocker registry\u4e2d\u7684\u955c\u50cf\u9700\u8981\u8ba4\u8bc1\u7684\u95ee\u9898",s={permalink:"/markdowns/blog/2023/02/27/index",source:"@site/blog/2023-02-27/index.md",title:"\u89e3\u51b3TestContainers\u4e2d\u62c9\u53d6\u7279\u5b9adocker registry\u4e2d\u7684\u955c\u50cf\u9700\u8981\u8ba4\u8bc1\u7684\u95ee\u9898",description:"\u80cc\u666f",date:"2023-02-27T00:00:00.000Z",formattedDate:"February 27, 2023",tags:[{label:"testcontainers",permalink:"/markdowns/blog/tags/testcontainers"},{label:"docker",permalink:"/markdowns/blog/tags/docker"}],readingTime:3.695,hasTruncateMarker:!1,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["testcontainers","docker"]},nextItem:{title:"\u542f\u7528SSH\u5bc6\u7801\u9a8c\u8bc1",permalink:"/markdowns/blog/2023/02/24/index"}},c={authorsImageUrls:[void 0]},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],l={toc:p};function g(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"docker registry"),"\u914d\u7f6e\u4e86\u8ba4\u8bc1\u540e, \u9879\u76ee\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"CICD"),"\u4e2d\u8fd0\u884c\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"test case"),"\u5931\u8d25, \u9519\u8bef\u65e5\u5fd7\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"java.lang.IllegalStateException: Failed to load ApplicationContext for [WebMergedContextConfiguration@24f6f6bf testClass = com.fastonetech.lib.auditing.JaversAspectTest, locations = [], classes = [com.fastonetech.lib.auditing.TestApplication], contextInitializerClasses = [], activeProfiles = [], propertySourceLocations = [], propertySourceProperties = [\"org.springframework.boot.test.context.SpringBootTestContextBootstrapper=true\"], contextCustomizers = [org.springframework.boot.test.autoconfigure.actuate.observability.ObservabilityContextCustomizerFactory$DisableObservabilityContextCustomizer@9da1, org.springframework.boot.test.autoconfigure.properties.PropertyMappingContextCustomizer@0, org.springframework.boot.test.autoconfigure.web.servlet.WebDriverContextCustomizerFactory$Customizer@7e22550a, org.springframework.boot.test.context.filter.ExcludeFilterContextCustomizer@5bc9ba1d, org.springframework.boot.test.json.DuplicateJsonObjectContextCustomizerFactory$DuplicateJsonObjectContextCustomizer@4189d70b, org.springframework.boot.test.mock.mockito.MockitoContextCustomizer@e20413a0, org.springframework.boot.test.web.client.TestRestTemplateContextCustomizer@6cfcd46d, org.springframework.boot.test.context.SpringBootTestAnnotation@35498888], resourceBasePath = \"src/main/webapp\", contextLoader = org.springframework.boot.test.context.SpringBootContextLoader, parent = null]\n    at org.springframework.test.context.cache.DefaultCacheAwareContextLoaderDelegate.loadContext(DefaultCacheAwareContextLoaderDelegate.java:142)\n    at org.springframework.test.context.support.DefaultTestContext.getApplicationContext(DefaultTestContext.java:127)\n    at org.springframework.test.context.web.ServletTestExecutionListener.setUpRequestContextIfNecessary(ServletTestExecutionListener.java:191)\n    at org.springframework.test.context.web.ServletTestExecutionListener.prepareTestInstance(ServletTestExecutionListener.java:130)\n    at org.springframework.test.context.TestContextManager.prepareTestInstance(TestContextManager.java:241)\n    at org.springframework.test.context.junit.jupiter.SpringExtension.postProcessTestInstance(SpringExtension.java:138)\n    at org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.lambda$invokeTestInstancePostProcessors$10(ClassBasedTestDescriptor.java:377)\n    at org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.executeAndMaskThrowable(ClassBasedTestDescriptor.java:382)\n    at org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.lambda$invokeTestInstancePostProcessors$11(ClassBasedTestDescriptor.java:377)\n    at java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n    at java.base/java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:179)\n    at java.base/java.util.ArrayList$ArrayListSpliterator.forEachRemaining(ArrayList.java:1625)\n    at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:509)\n    at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\n    at java.base/java.util.stream.StreamSpliterators$WrappingSpliterator.forEachRemaining(StreamSpliterators.java:310)\n    at java.base/java.util.stream.Streams$ConcatSpliterator.forEachRemaining(Streams.java:735)\n    at java.base/java.util.stream.Streams$ConcatSpliterator.forEachRemaining(Streams.java:734)\n    at java.base/java.util.stream.ReferencePipeline$Head.forEach(ReferencePipeline.java:762)\n    at org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.invokeTestInstancePostProcessors(ClassBasedTestDescriptor.java:376)\n    at org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.lambda$instantiateAndPostProcessTestInstance$6(ClassBasedTestDescriptor.java:289)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.instantiateAndPostProcessTestInstance(ClassBasedTestDescriptor.java:288)\n    at org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.lambda$testInstancesProvider$4(ClassBasedTestDescriptor.java:278)\n    at java.base/java.util.Optional.orElseGet(Optional.java:364)\n    at org.junit.jupiter.engine.descriptor.ClassBasedTestDescriptor.lambda$testInstancesProvider$5(ClassBasedTestDescriptor.java:277)\n    at org.junit.jupiter.engine.execution.TestInstancesProvider.getTestInstances(TestInstancesProvider.java:31)\n    at org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.lambda$prepare$0(TestMethodTestDescriptor.java:105)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.prepare(TestMethodTestDescriptor.java:104)\n    at org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.prepare(TestMethodTestDescriptor.java:68)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$prepare$2(NodeTestTask.java:123)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.prepare(NodeTestTask.java:123)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:90)\n    at java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\n    at org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:41)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$6(NodeTestTask.java:155)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:141)\n    at org.junit.platform.engine.support.hierarchical.Node.around(Node.java:137)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$9(NodeTestTask.java:139)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:138)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:95)\n    at java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\n    at org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:41)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$6(NodeTestTask.java:155)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:141)\n    at org.junit.platform.engine.support.hierarchical.Node.around(Node.java:137)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$9(NodeTestTask.java:139)\n    at org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:138)\n    at org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:95)\n    at org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.submit(SameThreadHierarchicalTestExecutorService.java:35)\n    at org.junit.platform.engine.support.hierarchical.HierarchicalTestExecutor.execute(HierarchicalTestExecutor.java:57)\n    at org.junit.platform.engine.support.hierarchical.HierarchicalTestEngine.execute(HierarchicalTestEngine.java:54)\n    at org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:107)\n    at org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:88)\n    at org.junit.platform.launcher.core.EngineExecutionOrchestrator.lambda$execute$0(EngineExecutionOrchestrator.java:54)\n    at org.junit.platform.launcher.core.EngineExecutionOrchestrator.withInterceptedStreams(EngineExecutionOrchestrator.java:67)\n    at org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:52)\n    at org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:114)\n    at org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:86)\n    at org.junit.platform.launcher.core.DefaultLauncherSession$DelegatingLauncher.execute(DefaultLauncherSession.java:86)\n    at org.junit.platform.launcher.core.SessionPerRequestLauncher.execute(SessionPerRequestLauncher.java:53)\n    at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor$CollectAllTestClassesExecutor.processAllTestClasses(JUnitPlatformTestClassProcessor.java:99)\n    at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor$CollectAllTestClassesExecutor.access$000(JUnitPlatformTestClassProcessor.java:79)\n    at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor.stop(JUnitPlatformTestClassProcessor.java:75)\n    at org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:62)\n    at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n    at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\n    at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n    at java.base/java.lang.reflect.Method.invoke(Method.java:568)\n    at org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n    at org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n    at org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)\n    at org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)\n    at jdk.proxy1/jdk.proxy1.$Proxy2.stop(Unknown Source)\n    at org.gradle.api.internal.tasks.testing.worker.TestWorker$3.run(TestWorker.java:193)\n    at org.gradle.api.internal.tasks.testing.worker.TestWorker.executeAndMaintainThreadName(TestWorker.java:129)\n    at org.gradle.api.internal.tasks.testing.worker.TestWorker.execute(TestWorker.java:100)\n    at org.gradle.api.internal.tasks.testing.worker.TestWorker.execute(TestWorker.java:60)\n    at org.gradle.process.internal.worker.child.ActionExecutionWorker.execute(ActionExecutionWorker.java:56)\n    at org.gradle.process.internal.worker.child.SystemApplicationClassLoaderWorker.call(SystemApplicationClassLoaderWorker.java:113)\n    at org.gradle.process.internal.worker.child.SystemApplicationClassLoaderWorker.call(SystemApplicationClassLoaderWorker.java:65)\n    at worker.org.gradle.process.internal.worker.GradleWorkerMain.run(GradleWorkerMain.java:69)\n    at worker.org.gradle.process.internal.worker.GradleWorkerMain.main(GradleWorkerMain.java:74)\nCaused by: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'javersRepository' defined in class path resource [com/fastonetech/lib/auditing/autoconfigure/JaversConfiguration.class]: Unsatisfied dependency expressed through method 'javersRepository' parameter 0: Error creating bean with name 'javersClientConfiguration' defined in com.fastonetech.lib.auditing.TestApplication: Unsatisfied dependency expressed through method 'javersClientConfiguration' parameter 0: Error creating bean with name 'containerHelper' defined in com.fastonetech.lib.auditing.TestApplication: Failed to instantiate [com.fastonetech.lib.auditing.ContainerHelper]: Factory method 'containerHelper' threw exception with message: Container startup failed\n    at app//org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:798)\n    at app//org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:548)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1324)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1161)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:561)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:521)\n    at app//org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:326)\n    at app//org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234)\n    at app//org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:324)\n    at app//org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:200)\n    at app//org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:961)\n    at app//org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:915)\n    at app//org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:584)\n    at app//org.springframework.boot.SpringApplication.refresh(SpringApplication.java:730)\n    at app//org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:432)\n    at app//org.springframework.boot.SpringApplication.run(SpringApplication.java:308)\n    at app//org.springframework.boot.test.context.SpringBootContextLoader.lambda$loadContext$3(SpringBootContextLoader.java:137)\n    at app//org.springframework.util.function.ThrowingSupplier.get(ThrowingSupplier.java:59)\n    at app//org.springframework.util.function.ThrowingSupplier.get(ThrowingSupplier.java:47)\n    at app//org.springframework.boot.SpringApplication.withHook(SpringApplication.java:1386)\n    at app//org.springframework.boot.test.context.SpringBootContextLoader$ContextLoaderHook.run(SpringBootContextLoader.java:543)\n    at app//org.springframework.boot.test.context.SpringBootContextLoader.loadContext(SpringBootContextLoader.java:137)\n    at app//org.springframework.boot.test.context.SpringBootContextLoader.loadContext(SpringBootContextLoader.java:108)\n    at app//org.springframework.test.context.cache.DefaultCacheAwareContextLoaderDelegate.loadContextInternal(DefaultCacheAwareContextLoaderDelegate.java:184)\n    at app//org.springframework.test.context.cache.DefaultCacheAwareContextLoaderDelegate.loadContext(DefaultCacheAwareContextLoaderDelegate.java:118)\n    ... 87 more\nCaused by: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'javersClientConfiguration' defined in com.fastonetech.lib.auditing.TestApplication: Unsatisfied dependency expressed through method 'javersClientConfiguration' parameter 0: Error creating bean with name 'containerHelper' defined in com.fastonetech.lib.auditing.TestApplication: Failed to instantiate [com.fastonetech.lib.auditing.ContainerHelper]: Factory method 'containerHelper' threw exception with message: Container startup failed\n    at app//org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:798)\n    at app//org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:548)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1324)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1161)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:561)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:521)\n    at app//org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:326)\n    at app//org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234)\n    at app//org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:324)\n    at app//org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:200)\n    at app//org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254)\n    at app//org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1405)\n    at app//org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1325)\n    at app//org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:885)\n    at app//org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:789)\n    ... 111 more\nCaused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'containerHelper' defined in com.fastonetech.lib.auditing.TestApplication: Failed to instantiate [com.fastonetech.lib.auditing.ContainerHelper]: Factory method 'containerHelper' threw exception with message: Container startup failed\n    at app//org.springframework.beans.factory.support.ConstructorResolver.instantiate(ConstructorResolver.java:657)\n    at app//org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:491)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1324)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1161)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:561)\n    at app//org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:521)\n    at app//org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:326)\n    at app//org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234)\n    at app//org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:324)\n    at app//org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:200)\n    at app//org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:254)\n    at app//org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1405)\n    at app//org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1325)\n    at app//org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:885)\n    at app//org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:789)\n    ... 125 more\nCaused by: org.springframework.beans.BeanInstantiationException: Failed to instantiate [com.fastonetech.lib.auditing.ContainerHelper]: Factory method 'containerHelper' threw exception with message: Container startup failed\n    at app//org.springframework.beans.factory.support.SimpleInstantiationStrategy.instantiate(SimpleInstantiationStrategy.java:171)\n    at app//org.springframework.beans.factory.support.ConstructorResolver.instantiate(ConstructorResolver.java:653)\n    ... 139 more\nCaused by: org.testcontainers.containers.ContainerLaunchException: Container startup failed\n    at app//org.testcontainers.containers.GenericContainer.doStart(GenericContainer.java:349)\n    at app//org.testcontainers.containers.GenericContainer.start(GenericContainer.java:322)\n    at app//com.fastonetech.lib.auditing.ContainerHelper.<init>(ContainerHelper.kt:46)\n    at app//com.fastonetech.lib.auditing.TestApplication.containerHelper(TestApplication.kt:20)\n    at app//com.fastonetech.lib.auditing.TestApplication$$SpringCGLIB$$0.CGLIB$containerHelper$1(<generated>)\n    at app//com.fastonetech.lib.auditing.TestApplication$$SpringCGLIB$$2.invoke(<generated>)\n    at app//org.springframework.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:258)\n    at app//org.springframework.context.annotation.ConfigurationClassEnhancer$BeanMethodInterceptor.intercept(ConfigurationClassEnhancer.java:331)\n    at app//com.fastonetech.lib.auditing.TestApplication$$SpringCGLIB$$0.containerHelper(<generated>)\n    at java.base@17.0.1/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n    at java.base@17.0.1/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\n    at java.base@17.0.1/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n    at java.base@17.0.1/java.lang.reflect.Method.invoke(Method.java:568)\n    at app//org.springframework.beans.factory.support.SimpleInstantiationStrategy.instantiate(SimpleInstantiationStrategy.java:139)\n    ... 140 more\nCaused by: org.testcontainers.containers.ContainerFetchException: Can't get Docker image: RemoteDockerImage(imageName=hub.fastonetech.com/cce/fastone-auditing:latest, imagePullPolicy=AlwaysPullPolicy(), imageNameSubstitutor=org.testcontainers.utility.ImageNameSubstitutor$LogWrappedImageNameSubstitutor@3b68a50c)\n    at app//org.testcontainers.containers.GenericContainer.getDockerImageName(GenericContainer.java:1371)\n    at app//org.testcontainers.containers.GenericContainer.logger(GenericContainer.java:651)\n    at app//org.testcontainers.containers.GenericContainer.doStart(GenericContainer.java:331)\n    ... 153 more\nCaused by: org.testcontainers.containers.ContainerFetchException: Failed to pull image: hub.fastonetech.com/cce/fastone-auditing:latest\n    at app//org.testcontainers.images.RemoteDockerImage.resolve(RemoteDockerImage.java:119)\n    at app//org.testcontainers.images.RemoteDockerImage.resolve(RemoteDockerImage.java:28)\n    at app//org.testcontainers.utility.LazyFuture.getResolvedValue(LazyFuture.java:17)\n    at app//org.testcontainers.utility.LazyFuture.get(LazyFuture.java:39)\n    at app//org.testcontainers.containers.GenericContainer.getDockerImageName(GenericContainer.java:1369)\n    ... 155 more\nCaused by: com.github.dockerjava.api.exception.InternalServerErrorException: Status 500: {\"message\":\"unauthorized: unauthorized to access repository: cce/fastone-auditing, action: pull: unauthorized to access repository: cce/fastone-auditing, action: pull\"}\n\n    at app//org.testcontainers.shaded.com.github.dockerjava.core.DefaultInvocationBuilder.execute(DefaultInvocationBuilder.java:247)\n    at app//org.testcontainers.shaded.com.github.dockerjava.core.DefaultInvocationBuilder.lambda$executeAndStream$1(DefaultInvocationBuilder.java:269)\n    at java.base@17.0.1/java.lang.Thread.run(Thread.java:833)\n")),(0,o.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,"\u6839\u636e\u4e0a\u8ff0\u65e5\u5fd7\u4e2d\u7684\u5173\u952e\u4fe1\u606f\u5f97\u51fa\u7531\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"docker registry"),"\u672a\u8ba4\u8bc1\u5bfc\u81f4\u8be5\u95ee\u9898\u7684\u51fa\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},'Caused by: com.github.dockerjava.api.exception.InternalServerErrorException: Status 500: {"message":"unauthorized: unauthorized to access repository: cce/fastone-auditing, action: pull: unauthorized to access repository: cce/fastone-auditing, action: pull"}\n')),(0,o.kt)("p",null,"\u5728\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\u4e4b\u524d\uff0c\u5148\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"docker login"),"\u547d\u4ee4\uff0c\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\u5373\u53ef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker login -u <username> -p <password> <registry>\n")),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/testcontainers/testcontainers-java/issues/968#issuecomment-872924394"},"How to login to private DockerHub registry in runtime?"))))}g.isMDXComponent=!0}}]);