---
authors: [ orange ]
tags: [ linux,  desktop,  xorg,  x11 ]
---

# X Window System

`X Window System`(简称`X`), 因为其最新版本为`11`, 所以也被称为`X11`. <br/>

这是一个为图形桌面系统设计的规范框架, 涵盖了以下关键功能:

- 屏幕图像的渲染和显示
- 鼠标和键盘的交互处理

在`Linux`环境下, `X Window System`的实现是`X.Org`.

## 架构概述

`X`采用客户端/服务器(C/S)架构, 由`X Server`和多个`X Client`组成. <br/>
这意味着`X Server`和`X Client`可以分别在不同的设备上运行. <br/>
常见应用场景如`SSH X11 Forwarding`, 其中SSH客户端运行`X Server`
, 图形应用则在SSH服务器上运行, 所有图形交互都在SSH客户端完成. <br/>

## 主要组件

### X Server

`X Server`作为桥梁, 连接底层硬件设备和上层`X Client`, 提供与硬件交互的接口. 硬件设备包括:

- 鼠标
- 键盘
- 触摸板
- 屏幕

这些设备按功能分为`输入设备`和`输出设备`.

### X Client

`X Client`是`X Server`的客户端, 常见的`X Client`包括:

- Firefox
- Chromium
- Thunderbird

### X Window Manager

`Window Manager`是一个特殊类型的`X Client`, 负责管理其他`Client`, 如调整窗口大小和缩放. 常见的`Window Manager`包括:

- GNOME
- KDE
- XFCE

### X Display Manager

`X Display Manager`负责用户登录控制, 验证用户身份(如用户名和密码或指纹), 并决定是否启动图形系统. <br/>

常见的`Display Manager`包括:

- GDM
- SDDM
- LightDM
- KDM

## 初始化流程

图形系统的初始化通常从`startx`开始, 它负责:

- 初始化`X Server`
- 启动`X Client`, 包括桌面管理组件, 这是用户界面的入口点

### CentOS (6.9, 7.5) 的初始化

`CentOS`使用`/etc/X11/xinit/Xclients`进行初始化, 主要支持`GNOME`和`KDE`. <br/>
如果需要使用其他桌面, 需手动配置此文件, 将`PREFERRED`变量设置为相应桌面的完整二进制文件路径.

### Ubuntu (18.04, 20.04, 22.04) 的初始化

Ubuntu使用`/etc/X11/Xsession`进行初始化, 并通过`/etc/X11/Xsession.d/`目录下的脚本进行进一步的初始化, 最终启动
`/etc/alternatives/x-session-manager`来启动桌面.

## 参考资料

- [X Window System](https://en.wikipedia.org/wiki/X_Window_System)
- [X.Org Server](https://en.wikipedia.org/wiki/X.Org_Server)
- [X display manager](https://en.wikipedia.org/wiki/X_display_manager)