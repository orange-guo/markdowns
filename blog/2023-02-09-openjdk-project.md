---
authors: [ orange ]
tags: [java, openjdk]
---
# JDK改进项目的介绍

以下列表是截至到目前`Open JDK`中部分进行的对`JDK`的改进项目

- Amber
- Galahad
- Leyden
- Lilliput
- Loom
- Panama
- Valhalla

这些改进项目的主要目的是为了改进`Java`的性能和开发体验. 
从而使`Java`能够更好地适应目前的软件开发需求.<br/>
以下是这些项目的简单介绍.

<!--truncate-->

## Amber

该项目的目标是在`Java`中引入新的语法来改进`Java`的开发体验

- [Project Amber](https://openjdk.org/projects/amber/)

## Galahad

该项目的目标是将`GraalVM`中使用`Java`编的`JIT`编译器替换掉`OpenJDK`中现有的`HotSpot`中使用`C++`实现的`JIT`编译器.

- [GraalVM, Galahad, and a New Release Schedule](https://medium.com/graalvm/graalvm-galahad-and-a-new-release-schedule-d081d1031bba)

## Leyden

该项目的目标是改进`Java`程序的启动时间

- [Project Leyden](https://openjdk.org/projects/leyden/)

## Lilliput

该项目的目标是将`Java`中对象的头部信息从`128`位压缩到`64`位或更低, 从而改善`Java`程序的内存占用

- [Lilliput](https://openjdk.org/projects/lilliput/)

## Loom

该项目的目标是在Java中引入协程(`coroutine`)以改进Java的并发性能

- [Loom - Fibers, Continuations and Tail-Calls for the JVM](https://openjdk.org/projects/loom/)

## Panama

该项目的目标是提供更好的`Java`与第三方代码的互操作性, 使`Java`与非`Java`编写的代码能够更好地交互

- [Project Panama: Interconnecting JVM and native code](https://openjdk.org/projects/panama/)

## Valhalla

该项目的目标是在`Java`中增加`Value Type`的功能以提高`Java`程序的性能和内存效率

- [Project Valhalla](https://openjdk.org/projects/valhalla/)