---
authors: [xiangcheng.kuo]
tags: [snap]
---

# 使用`snap`安装指定版本的应用

在使用`snap`安装应用时，如果没有指定版本，会默认安装最新版本的应用.<br/>
有些场景下需要安装指定版本的应用<br/>
例如`UI`项目目前仅支持`nodejs`的`v12`版本, 那么就不能安装最新版本的`nodejs`<br/>
这个例子仅作为参考, 因为更好的解决方案是使用`nvm`来管理`nodejs`的版本<br/>
在`python`中,可以使用`pyenv virtualenv`来管理python的版本<br/>
下面将介绍如何使用`snap`安装指定版本的应用

<!--truncate-->

## 解决方案

通过`snap`安装指定版本的应用, 需要使用以下命令

```bash
snap install <app> --channel=<channel>
```

以nodejs为例, 安装`v12`版本的应用, 需要使用以下命令

```bash
snap install node --channel=12/stable
```

## 备注

- [man snap](https://manpages.org/snap)