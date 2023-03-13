---
authors: [xiangcheng.kuo]
tags: [java, decompiler, intellij-idea]
---

# 使用`IntelliJ IDEA`中的`java-decompiler`插件将`jar`包反编译为`java`源码

有的时候需要将`jar`包中的`class`文件反编译为`java`源码文件并对其行为进行分析.<br/>
`IntelliJ IDEA`中的`java-decompiler`插件可以将`jar`包中的`class`文件反编译为`java`源码文件.<br/>
下面介绍如何使用`IntelliJ IDEA`中的`java-decompiler`插件将`jar`包反编译为`java`源码.<br/>

<!--truncate-->

## 解决方案

### 获取`java-decompiler`插件

从`IDEA`安装目录下的`plugins/java-decompiler/lib`目录下获取`java-decompiler.jar`.<br/>
如果没有安装`java-decompiler`插件,可以从[点击这里](java-decompiler.jar)下载

### 反编译`jar`包

目前`java-decompiler`反编译后的的源码文件是打包在`jar`包中的,需要将其解压出来. <br/>
这样比较不方便, 下面我提供一个脚本来反编译以及解压`jar`包中的源码文件.<br/>

```bash title="decompile.sh"
#!/bin/bash

set -ex

JAR_FILE_PATH=$(realpath $1)
DEST_DIRECTORY=$(realpath $2)

rm -rf $DEST_DIRECTORY
mkdir $DEST_DIRECTORY
java -cp java-decompiler.jar org.jetbrains.java.decompiler.main.decompiler.ConsoleDecompiler -hdc=0 -dgs=1 -rsy=1 -rbr=1 -lit=1 -nls=1 -mpm=60 $JAR_FILE_PATH $DEST_DIRECTORY
unzip $DEST_DIRECTORY/$(basename $JAR_FILE_PATH) -d $DEST_DIRECTORY
```

使用方式如下

```bash
./decompile.sh drm-control.jar ./decompiled
```

这个脚本会将`drm-control.jar`反编译为`java`源码文件并解压到`./decompiled`目录下.<br/>

## 参考

- [How to decompile to java files intellij idea](https://stackoverflow.com/questions/28389006/how-to-decompile-to-java-files-intellij-idea)
- [java-decompiler](https://github.com/JetBrains/intellij-community/tree/master/plugins/java-decompiler/engine)
- [java-decompiler](java-decompiler.jar)
- [decompile.sh](decompile.sh)