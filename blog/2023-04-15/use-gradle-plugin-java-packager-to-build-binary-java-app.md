---
authors: [ xiangcheng.kuo ]
tags: [ native-image, java-packager, gradle-plugin, github-pr ]
---

# 使用Gradle的JavaPackager插件将Java应用打包成二进制文件

在之前的文章中, 我介绍过如何通过`graalvm`将`java`应用打包成二进制文件, 但是这种方式需要在`graalvm`中安装`native-image`
工具, 并且需要在`graalvm`中编译`java`应用, 这样的方式对于`java`应用的开发者来说, 有一定的门槛, 而且也不够灵活.
并且构建过程中由于代码没有满足`graalvm`的要求, 例如使用了`java`的反射机制, 会导致构建失败(
graalvm需要在编译时就知道这些信息来生成)
下面将介绍另一种方式, 通过`gradle`的`JavaPackager`插件来构建二进制文件.

<!--truncate-->

## 添加插件

要启用此插件, 需要在`build.gradle.kts`中添加如下配置:

:::note
由于该插件没有发布到`gradle`的插件仓库中, 所以需要在`buildscript`中添加对应的依赖并通过`apply`来启用该插件
:::

```kotlin title="build.gradle.kts"
buildscript {
	repositories {
		maven { setUrl("https://mirrors.huaweicloud.com/repository/maven/") }
		maven { setUrl("https://mirrors.tencent.com/nexus/repository/maven-public/") }
		maven { setUrl("https://maven.aliyun.com/nexus/content/groups/public/") }
		maven { setUrl("https://oss.sonatype.org/content/repositories/snapshots") }
	}
	dependencies {
		classpath("io.github.fvarrui:javapackager:1.7.0")
	}
}

apply(plugin = "io.github.fvarrui.javapackager.plugin")
```

## 插件配置

以`linux`为例, 介绍如何配置`JavaPackager`插:

```kotlin title="build.gradle.kts"
configure<PackagePluginExtension>() {
	mainClass("<MAIN-CLASS>")
	platform(Platform.linux)
	packagingJdk(file(System.getProperty("java.home")))
	// arch(Arch.x64) not work
	// arch is not configured in DefaultPackageTask(导致自定义arch失效)
	// packagingJdk没有设置默认值(导致jink定位到了/bin目录下而不是用户的jdk的home目录下的bin目录)
}
```

将上面的的模板替换为自己的`mainClass`即可, 其他的配置可以根据需要进行修改.

## 构建

执行如下命令即可构建:

```bash
./gradlew package -x test
```

## 已知问题

### `packagingJdk`不会自动推断导致打包失败

执行过程中出现如下错误

```log
 /bin/sh: 1: /bin/jdeps: not found
 ```

#### 问题原因

该问题的原因是`JavaPackager`插件在执行`jdeps`命令时会根据`packagingJdk`配置的值拼接`/bin/jdeps`来执行,
但是由于没有配置`packagingJdk`的值, 所以默认使用了`/bin/jdeps`来执行, 但是`/bin/jdeps`并不存在, 所以导致了上面的错误.

相关代码在`io.github.fvarrui.javapackager.packagers.BundleJre`类的`doApply`方法中, 这个方法中会调用`jdeps`命令来获取依赖信息.

#### 解决方案

解决方案就是在上面的配置中添加`packagingJdk`的配置`packagingJdk(file(System.getProperty("java.home")))`.

:::note
2023-05-23<br/>
相关pr已提交, 链接如下<br/>
[fix(gradle-default-package-task): Set default packagingJdk for bundle-jre #332](https://github.com/fvarrui/JavaPackager/pull/332).
:::

### `jdeps`命令执行失败报错`Module xxx not found, required by xxx`

在我的`case`中报错为:

```log
Module org.yaml.snakeyaml not found, required by com.fasterxml.jackson.dataformat.yaml
```

#### 问题原因

这个问题的原因通常是因为被依赖的模块版本需要升级到支持`java9`模块化之后的版本

#### 解决方案

在我的`case`中是`org.yaml.snakeyaml`需要升级, 在`build.gradle.kts`中添加如下配置后问题解决:

```kotlin title="build.gradle.kts"
implementation("org.yaml:snakeyaml:2.0")
```

### `jdeps`命令执行失败报错`java.util.concurrent.ExecutionException: com.sun.tools.jdeps.MultiReleaseException`

这个问题的原因是因为jdk17中的`jdeps`命令存在`bug`(无法处理不同jar中具有相同名称的类)导致的, 在jdk18中已经修复了这个问题.

关于这个问题的更多信息可以参考

- [jdeps can't print-module-deps due to a MultiReleaseException](https://stackoverflow.com/questions/69943899/jdeps-cant-print-module-deps-due-to-a-multireleaseexception)
- [JDK-8277165](https://bugs.openjdk.org/browse/JDK-8277165)
- [JDK-8277166](https://bugs.openjdk.org/browse/JDK-8277166)
- [JDK-8277123](https://bugs.openjdk.org/browse/JDK-8277123)

### 构建过程中出现`java.lang.Exception: https://github.com/AppImage/AppImageKit/releases/download/13/appimagetool-x86_64.AppImagenot found! ... Unsupported OS architecture x86_64?`

这个问题的原因是在打包`linux`的`AppImage`时, 会去下载`appimagetool`来进行打包, 下载过程中可能会出现网络问题导致下载失败,
从而导致打包失败.
但是作者捕获相关异常后没有将原始信息打印出来, 导致我们无法知道具体的错误信息, 从而导致了上面的错误.
(这个异常信息是伪信息)

相关代码在`io.github.fvarrui.javapackager.packagers.GenerateAppImage`中的`getAppImageTool`方法中.<br/>

#### 解决方案

重试后问题解决.对于这个问题后续计划提PR给作者.

:::note
2023-06-10<br/>
相关pr已提交, 链接如下<br/>
[improvement: Improve the error message when downloading the AppImageTool fails #337](https://github.com/fvarrui/JavaPackager/pull/337)
:::

### `arch`配置不生效导致生成出的deb文件无法安装

执行完`package`任务后, 会在`build`目录下生成相应的`deb`文件名称为`xxx.deb`.
对此文件执行`sudo dpkg -i xxx.deb`命令会出现如下错误:

```log
dpkg: warning: parsing file '/var/lib/dpkg/tmp.ci/control' near line 5 package 'upshift:${info.arch.deb}':
 '${info.arch.deb}' is not a valid architecture name in 'Architecture' field: must start with an alphanumeric
dpkg: error processing archive upshift_1.0-SNAPSHOT.deb (--install):
 package architecture (${info.arch.deb}) does not match system (amd64)
Errors were encountered while processing:
 upshift_1.0-SNAPSHOT.deb
```

后续在`gradle`中的task配置`arch(Arch.x64)`依然不生效.

#### 问题原因

这个问题的原因是`JavaPackager`插件对应的gradle中的实现类是`io.github.fvarrui.javapackager.gradle.DefaultPackageTask`,
此插件并没有获取我们配置的`PackagePluginExtension`中的值.
后续`io.github.fvarrui.javapackager.packagers.GenerateDeb`会调用`velocity`来渲染`control.vtl`.
由于`arch`为空, 所以导致`${info.arch.deb}`没有被渲染, 模板内容如下

```title="control.vtl"
Package: ${info.name}
Version: ${info.version}
Section: misc
Priority: optional
Architecture: ${info.arch.deb}
Maintainer: ${info.organizationName} <$!{info.organizationEmail}>
Description: ${info.description}
Distribution: development
#if(${info.url})
Homepage: ${info.url}
#end
```

#### 解决方案

目前没有一个好的办法解决此问题, 后续准备在`JavaPackager`插件中提一个`PR`来解决此问题.

:::note
2023-05-22<br/>
相关pr已提交, 链接如下<br/>
[fix(gradle-default-package-task): Set arch field for deb control file rendering #331](https://github.com/fvarrui/JavaPackager/pull/331)
:::

## 备注

### 解压AppImage

```bash
./xxx.AppImage --appimage-extract
```

## 参考资料

- [BundleJre.java](https://github.com/fvarrui/JavaPackager/blob/master/src/main/java/io/github/fvarrui/javapackager/packagers/BundleJre.java)
- [DefaultPackageTask.java](https://github.com/fvarrui/JavaPackager/blob/master/src/main/java/io/github/fvarrui/javapackager/gradle/DefaultPackageTask.java)
- [LinuxPackager.java](https://github.com/fvarrui/JavaPackager/blob/master/src/main/java/io/github/fvarrui/javapackager/packagers/LinuxPackager.java)
- [GenerateDeb.java](https://github.com/fvarrui/JavaPackager/blob/master/src/main/java/io/github/fvarrui/javapackager/packagers/GenerateDeb.java)
- [control.vtl](https://github.com/fvarrui/JavaPackager/blob/master/src/main/resources/linux/control.vtl)
- [GenerateAppImage.java](https://github.com/fvarrui/JavaPackager/blob/master/src/main/java/io/github/fvarrui/javapackager/packagers/GenerateAppImage.java)

