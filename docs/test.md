## link

https://javaguide.cn
www.javalearn.cn
https://www.pdai.tech/
https://github.com/livk-cloud/spring-boot-example
一纸简历
https://medium.com/

## 方法论

ab testing
故事框架法

## linux

netstat
lsof
linux中常见的故障排查命令学习(lsof, netstat, iptables, strace, journalctl, systemctl, service,
linux中文件处理相关学习(cat输出重定向到文件通过ctrl+D结束输入, tee, head, tail, wc, sort, uniq, cut grep ...)

博弈论
范畴论/集合论
国富论 君主论

## ldap

ldap的fd配置
ldap禁止匿名登录

## gradle

gradle依赖升级分析插件gradle-versions-plugin```./gradlew dependencyUpdates -Drevision=release```
gradle中的platform概念并通过platfrom作为maven pom
gradle如何确保snapshot包永远是最新的
gradle中的api和implementation的区别

## 抽象解释

https://www.zhihu.com/question/27789493/answer/38107549?utm_psn=1624747536068857856&utm_source=wechatMessage_answer_bottom
https://www.zhihu.com/question/27789493/answer/38090669?utm_source=wechat_session&utm_medium=social&utm_oi=748589335799930880&utm_content=group2_Answer&utm_campaign=shareopn
https://existentialtype.wordpress.com/2011/03/15/boolean-blindness/

## gitops devops finops

- devops：开发运维，是指将软件开发（Dev）和IT运维（Ops）的工作集成和自动化，以便改进和缩短系统开发生命周期。
- mlops：机器学习运维，是指将机器学习模型有效地部署和维护到生产环境中的一套实践。
- secops：安全运维，是指将安全性集成到整个开发和运维过程中，以提高系统的安全性和可靠性。
- dataops：数据运维，是指将数据科学、工程和分析团队协同工作，以提高数据质量、速度和价值。
- cloudops：云运维，是指在云计算环境中管理和优化IT资源和服务的过程。
- alops：智能运维，是指利用人工智能、机器学习和大数据技术，以提高IT运维的效率和效果。
- chatops：聊天运维，是指利用聊天平台和机器人，以提高团队的沟通和协作能力。
- bizops：业务运维，是指将业务目标、数据分析和自动化工具结合起来，以提高业务决策和执行的效果。
- edgeops：边缘运维，是指在边缘计算环境中管理和优化设备、网络和应用程序的过程。
- finops：金融运维，是指在云计算环境中管理和优化金融资源和服务的过程。
- gitops：Git运维，是指利用Git作为单一事实源来管理基础设施和应用程序的配置的方法。
- noops：无运维，是指利用无服务器架构和自动化工具，减少或消除运维的需求和成本。
- devsecops：开发安全运维，是指将安全性作为开发和运维过程的一部分，以提高软件的安全性和可信度。
- chaos engineering：混沌工程，是一种软件工程实践，通过有意地在系统中引入故障，来测试系统的稳定性和可恢复性。

## tech
https://makelinux.github.io/kernel/map/
https://github.com/giscus/giscus
https://github.com/utkuozdemir/nvidia_gpu_exporter
spring http interface
https://www.h3c.com/cn/d_202104/1404155_30005_0.htm

## other
https://openjdk.org/jeps/8302326
康威定律
https://copy.sh/v86/

## 书
1984
反脆弱
https://github.com/LeonLi0102/cloud-native-spring-in-action-translate/tree/main/cn-translate/01-Introduction-to-cloud-native/1.1-What-is-cloud-native


## onecompile
```javascript
var text = window.document.getElementsByClassName('ace_text-input')[0]
var event = document.createEvent("Event");
event.initEvent("input", true, false);
text.dispatchEvent(event);
```

## kotlin-coroutines

好的，我很乐意帮助你整理一下关于kotlin协程的细节。kotlin协程是一种并发设计模式，可以在Android平台上使用它来简化异步执行的代码1。kotlin协程是基于其他语言的既定概念，在kotlin 1.3版本中添加到语言中，但不是关键字或标准库的一部分2。kotlin协程提供了一些核心概念，例如：

挂起函数：可以在不阻塞线程的情况下暂停和恢复执行的函数，用suspend关键字标记。
协程作用域：管理一个或多个相关协程的生命周期的对象，用CoroutineScope接口表示。
协程上下文：包含一些元素，如协程的标识、调度器、异常处理器等，用CoroutineContext类型表示。
协程构建器：创建并启动新协程的函数，如launch、async、runBlocking等。
协程调度器：决定协程在哪个线程或线程池上执行的对象，如Dispatchers.Main、Dispatchers.IO等。
Job：表示一个协程或一组协程的任务，可以取消、等待完成或附加子任务，用Job接口表示。
Deferred：表示一个异步计算的结果，可以等待获取或取消，用Deferred接口表示，是Job的子接口。
Continuation：表示一个挂起函数在暂停和恢复时的状态，用Continuation接口表示。
挂起点：挂起函数中可能暂停执行的位置，用suspend修饰的函数调用或表达式表示。
除了这些核心概念外，kotlin协程还提供了一些高级特性，例如：

结构化并发：在一个作用域内启动多个协程，并自动管理它们的生命周期和取消。
取消与超时：通过协作机制，在协程层次结构内传播取消信号，并设置超时时间来终止长时间运行的任务。
异常处理与监督：通过异常处理器或监督作用域来处理协程中抛出的未捕获异常。
异步流：表示异步生成和消费多个值的序列，用Flow接口和相关操作符表示。
通道：提供一种在协程之间传递数据的方式，类似于阻塞队列，但支持挂起操作，用Channel接口和相关操作符表示。
共享的可变状态与并发：通过原子变量、锁、线程安全集合、协程同步原语等方式来保证对共享状态的安全访问和修改。
Select 表达式：实验性的特性，可以同时等待多个挂起操作，并选择第一个可用的操作执行。
如果你想更深入地了解kotlin协程，我建议你阅读以下参考资料：

1: Android 上的 Kotlin 协程 | Android Developers 2: 协程指南 - Kotlin 语言中文站 3: 协程 · Kotlin 官方文档 中文版

## others
实现在docusaurus中执行代码的插件
- [Judge0 CE - API Docs](https://ce.judge0.com/)
- [Judge0 IDE](https://ide.judge0.com/)
- [OneCompiler](https://onecompiler.com/)
- [OneCompiler APIs Cheatsheet](https://onecompiler.com/cheatsheets/onecompiler-apis)
- [OneCompiler Embedding Demos](https://onecompiler.github.io/editor-embed-demo/)
- [Ideone](https://www.ideone.com/F7mT6q)
- [OnlineGDB](https://www.onlinegdb.com/online_java_compiler)