## link


https://github.com/livk-cloud/spring-boot-example
一纸简历
https://medium.com/

## 方法论

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

## others

实现在docusaurus中执行代码的插件

- [Judge0 CE - API Docs](https://ce.judge0.com/)
- [Judge0 IDE](https://ide.judge0.com/)
- [OneCompiler](https://onecompiler.com/)
- [OneCompiler APIs Cheatsheet](https://onecompiler.com/cheatsheets/onecompiler-apis)
- [OneCompiler Embedding Demos](https://onecompiler.github.io/editor-embed-demo/)
- [Ideone](https://www.ideone.com/F7mT6q)
- [OnlineGDB](https://www.onlinegdb.com/online_java_compiler)

```
-Xms16g
-Xmx16g
-XX:+UseZGC
-XX:+ZGenerational
-XX:ConcGCThreads=6
-XX:+UseLargePages
-XX:+UseTransparentHugePages
-XX:MaxDirectMemorySize=4g
-XX:MetaspaceSize=4g
-XX:MaxMetaspaceSize=4g
-Dsplash=true
--add-opens=java.base/java.io=ALL-UNNAMED
-ea
-Dawt.toolkit.name=WLToolkit
--add-opens=java.base/java.lang=ALL-UNNAMED
--add-opens=java.base/java.lang.ref=ALL-UNNAMED
--add-opens=java.base/java.lang.reflect=ALL-UNNAMED
--add-opens=java.base/java.net=ALL-UNNAMED
--add-opens=java.base/java.nio=ALL-UNNAMED
--add-opens=java.base/java.nio.charset=ALL-UNNAMED
--add-opens=java.base/java.text=ALL-UNNAMED
--add-opens=java.base/java.time=ALL-UNNAMED
--add-opens=java.base/java.util=ALL-UNNAMED
--add-opens=java.base/java.util.concurrent=ALL-UNNAMED
--add-opens=java.base/java.util.concurrent.atomic=ALL-UNNAMED
--add-opens=java.base/jdk.internal.vm=ALL-UNNAMED
--add-opens=java.base/sun.nio.ch=ALL-UNNAMED
--add-opens=java.base/sun.nio.fs=ALL-UNNAMED
--add-opens=java.base/sun.security.ssl=ALL-UNNAMED
--add-opens=java.base/sun.security.util=ALL-UNNAMED
--add-opens=java.base/sun.net.dns=ALL-UNNAMED
--add-opens=java.desktop/com.sun.java.swing.plaf.gtk=ALL-UNNAMED
--add-opens=java.desktop/java.awt=ALL-UNNAMED
--add-opens=java.desktop/java.awt.dnd.peer=ALL-UNNAMED
--add-opens=java.desktop/java.awt.event=ALL-UNNAMED
--add-opens=java.desktop/java.awt.image=ALL-UNNAMED
--add-opens=java.desktop/java.awt.peer=ALL-UNNAMED
--add-opens=java.desktop/java.awt.font=ALL-UNNAMED
--add-opens=java.desktop/javax.swing=ALL-UNNAMED
--add-opens=java.desktop/javax.swing.plaf.basic=ALL-UNNAMED
--add-opens=java.desktop/javax.swing.text.html=ALL-UNNAMED
--add-opens=java.desktop/sun.awt.X11=ALL-UNNAMED
--add-opens=java.desktop/sun.awt.wl=ALL-UNNAMED
--add-opens=java.desktop/sun.awt.datatransfer=ALL-UNNAMED
--add-opens=java.desktop/sun.awt.image=ALL-UNNAMED
--add-opens=java.desktop/sun.awt=ALL-UNNAMED
--add-opens=java.desktop/sun.font=ALL-UNNAMED
--add-opens=java.desktop/sun.java2d=ALL-UNNAMED
--add-opens=java.desktop/sun.swing=ALL-UNNAMED
--add-opens=jdk.attach/sun.tools.attach=ALL-UNNAMED
--add-opens=jdk.compiler/com.sun.tools.javac.api=ALL-UNNAMED
--add-opens=jdk.internal.jvmstat/sun.jvmstat.monitor=ALL-UNNAMED
--add-opens=jdk.jdi/com.sun.tools.jdi=ALL-UNNAMED
-Dide.managed.by.toolbox=/home/orange/.local/share/JetBrains/Toolbox/bin/jetbrains-toolbox
-Dtoolbox.notification.token=d0b89c15-5671-49a3-8846-a4081ed0bf21
-Dtoolbox.notification.portFile=/home/orange/.cache/JetBrains/Toolbox/ports/50821552.port

```