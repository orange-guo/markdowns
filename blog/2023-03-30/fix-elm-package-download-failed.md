---
authors: [ xiangcheng.kuo ]
tags: [ problem-solving, elm, jetbrains, code2art, open-radiant ]
---

# 通过手动下载并安装elm依赖解决elm下载失败问题

最近在本地构建[open-radiant](https://github.com/JetBrains/open-radiant)项目时遇到了一些问题.<br/>
该项目是`JetBrains`开源的一个项目, 用于生成AI艺术图片, 在线演示地址为: [code2art](https://code2art.jetbrains.com/)<br/>

其中的一个问题是当执行`elm make`时依赖下载失败, 日志如下:

```log
Starting downloads...

  ● elm/json 1.1.3
  ● elm-community/list-extra 8.2.2
  ● elm/random 1.0.0
  ● elm/file 1.0.5
  ● elm/virtual-dom 1.0.2
  ● elm/parser 1.1.0
  ● rtfeldman/elm-iso8601-date-strings 1.1.3
  ● elm/url 1.0.0
  ● elm-community/random-extra 3.1.0
  ● elm-explorations/webgl 1.1.1
  ● elm/core 1.0.2
  ✗ elm/http 2.0.0
  ✗ owanturist/elm-union-find 1.0.0
  ✗ elm/bytes 1.0.8
  ✗ elm/svg 1.0.1
  ✗ avh4/elm-color 1.0.0
  ✗ elm/time 1.0.0
  ✗ elm-community/json-extra 4.2.0
  ✗ fredcy/elm-parseint 2.0.1
  ✗ noahzgordon/elm-color-extra 1.0.2
  ✗ elm/html 1.0.0
  ✗ elm/browser 1.0.2
  ✗ newlandsvalley/elm-binary-base64 1.0.3
  ✗ elm-community/easing-functions 2.0.0

Dependency problem!           
-- PROBLEM DOWNLOADING PACKAGE -------------------------------------------------

I was trying to download the source code for avh4/elm-color 1.0.0, so I tried to
fetch:

    https://github.com/avh4/elm-color/zipball/1.0.0/

But my HTTP library is giving me the following error message:

    ConnectionTimeout

Are you somewhere with a slow internet connection? Or no internet? Does the link
I am trying to fetch work in your browser? Maybe the site is down? Does your
internet connection have a firewall that blocks certain domains? It is usually
something like that!

```

<!--truncate-->

## 问题原因

这个问题的原因是`elm`的依赖在国内访问会比较慢, 甚至会出现下载失败的情况.<br/>
为了解决这个问题, 我们可以手动下载依赖包, 然后放到`elm`的依赖目录下, 以后再执行`elm make`时就不会再去下载依赖了.<br/>

## 解决方案

案例:

- 项目依赖`avh4/elm-color 1.0.0`
- elm版本为`0.19.0`

### 确定依赖的目录

`elm`的依赖目录在`~/.elm`下, 依赖包的目录结构可以通过`tree`命令查看:

```bash
tree ~/.elm
```

```log
.
└── 0.19.1
    └── packages
        ├── avh4
        │   └── elm-color
        │       └── 1.0.0
        │           └── src
        ├── elm
        │   ├── browser
        │   │   └── 1.0.2
        │   │       └── src
        │   │           ├── Browser
        │   │           ├── Debugger
        │   │           └── Elm
        │   │               └── Kernel
        │   ├── bytes
        │   │   └── 1.0.8
        │   │       └── src
        │   │           ├── Bytes
        │   │           └── Elm
        │   │               └── Kernel
        │   ├── core
        │   │   └── 1.0.2
        │   │       └── src
        │   │           ├── Elm
        │   │           │   └── Kernel
        │   │           └── Platform
        │   ├── file
        │   │   └── 1.0.5
        │   │       └── src
        │   │           ├── Elm
        │   │           │   └── Kernel
        │   │           └── File
        │   ├── html
        │   │   └── 1.0.0
        │   │       └── src
        │   │           └── Html
        │   ├── http
        │   │   └── 2.0.0
        │   │       └── src
        │   │           └── Elm
        │   │               └── Kernel
        │   ├── json
        │   │   └── 1.1.3
        │   │       └── src
        │   │           ├── Elm
        │   │           │   └── Kernel
        │   │           └── Json
        │   ├── parser
        │   │   └── 1.1.0
        │   │       └── src
        │   │           ├── Elm
        │   │           │   └── Kernel
        │   │           └── Parser
        │   ├── random
        │   │   └── 1.0.0
        │   │       └── src
        │   ├── regex
        │   │   └── 1.0.0
        │   │       └── src
        │   │           └── Elm
        │   │               └── Kernel
        │   ├── svg
        │   │   └── 1.0.1
        │   │       └── src
        │   │           └── Svg
        │   ├── time
        │   │   └── 1.0.0
        │   │       └── src
        │   │           └── Elm
        │   │               └── Kernel
        │   ├── url
        │   │   └── 1.0.0
        │   │       └── src
        │   │           ├── Elm
        │   │           │   └── Kernel
        │   │           └── Url
        │   │               └── Parser
        │   └── virtual-dom
        │       └── 1.0.2
        │           └── src
        │               └── Elm
        │                   └── Kernel
        ├── elm-community
        │   ├── easing-functions
        │   │   └── 2.0.0
        │   │       └── src
        │   ├── json-extra
        │   │   └── 4.2.0
        │   │       └── src
        │   │           └── Json
        │   │               ├── Decode
        │   │               └── Encode
        │   ├── list-extra
        │   │   └── 8.2.2
        │   │       └── src
        │   │           └── List
        │   └── random-extra
        │       └── 3.1.0
        │           └── src
        │               └── Random
        ├── elm-explorations
        │   ├── linear-algebra
        │   │   └── 1.0.3
        │   │       └── src
        │   │           ├── Elm
        │   │           │   └── Kernel
        │   │           └── Math
        │   └── webgl
        │       └── 1.1.1
        │           └── src
        │               ├── Elm
        │               │   └── Kernel
        │               └── WebGL
        │                   └── Settings
        ├── fredcy
        │   └── elm-parseint
        │       └── 2.0.1
        │           └── src
        ├── newlandsvalley
        │   └── elm-binary-base64
        │       └── 1.0.3
        │           └── src
        ├── noahzgordon
        │   └── elm-color-extra
        │       └── 1.0.2
        │           └── src
        │               └── Color
        ├── owanturist
        │   └── elm-union-find
        │       └── 1.0.0
        │           └── src
        └── rtfeldman
            └── elm-iso8601-date-strings
                └── 1.1.3
                    └── src

135 directories
```

通过命令执行结果可以看到其目录结构大致如下

- 第一级目录为`packages`
- 第二级目录为`group`(以`avh4/elm-color 1.0.0`为例, `group`为`avh4`)
- 第三级目录为`artifact`(以`avh4/elm-color 1.0.0`为例, `artifact`为`elm-color`)
- 第四级目录为`version`(以`avh4/elm-color 1.0.0`为例, `version`为`1.0.0`)

### 下载依赖

以`avh4/elm-color 1.0.0`为例, 我们通过`https://github.com/avh4/elm-color/zipball/1.0.0/` 链接下载对应的安装包

### 安装

将该安装包里的文件解压到`~/.elm/0.19.0/package/avh4/elm-color/1.0.0`目录下

> 注意:
> 安装包打开会有一个单独的目录, 这个目录里面的文件是我们需要解压的文件

## 参考资料

- [open-radiant](https://github.com/JetBrains/open-radiant)
- [code2art](https://code2art.jetbrains.com/)
- [elm](https://elm-lang.org/)