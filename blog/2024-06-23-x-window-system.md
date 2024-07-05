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

## 启动流程


`X`的启动入口为`startx`命令(此命令位于`/bin/startx`)


```bash
#
# This is just a sample implementation of a slightly less primitive
# interface than xinit. It looks for XINITRC and XSERVERRC environment
# variables, then user .xinitrc and .xserverrc files, and then system
# xinitrc and xserverrc files, else lets xinit choose its default.
# The system xinitrc should probably do things like check for
# .Xresources files and merge them in, start up a window manager, and
# pop a clock and several xterms.
#
# Site administrators are STRONGLY urged to write nicer versions.
#
```

这个命令是对`xinit`命令的封装, 它会根据`X Server`和`X Client`的配置, 启动`X Server`和`X Client`.

`xinit`命令负责初始化`X Server`和`X Client`.

### `X Server`

`X Server`初始化脚本位于`/etc/X11/xinit/xserverrc`, 内容比较简单, 只是启动`X Server`.

### `X Client`

`X Client`初始化脚本位于`/etc/X11/xinit/xinitrc`(或`$HOME/.xinitrc`, 取决于用户目录是否有对应文件).<br/>
此脚本中负责初始化`X Client`, 这里要初始化的`X Client`通常为桌面.<br/>

由于发行版的不同, `X Client`具体逻辑也会不同.

#### REHL

基于`RedHat`的发行版, 例如`CentOS`, 脚本内部调用`/etc/X11/xinit/Xclients`进行初始化, 
在较旧的系统中(`CentOS 6.9`, `CentOS 7.5`), 仅支持`GNOME`和`KDE`. <br/>
如果需要使用其他桌面, 需手动配置此文件, 将`PREFERRED`变量设置为相应桌面的完整二进制文件路径.

#### Debian

基于`Debian`的发行版, 例如`Ubuntu`, 脚本内部调用`/etc/X11/Xsession`进行初始化, 

在这个脚本中会调用`/etc/X11/Xsession.d/`目录下的脚本进行初始化, 
在`/etc/X11/Xsession.d/50x11-common_determine-startup`中推断`STARTUP`变量, 值通常为`/usr/bin/x-session-manager`
> 这个文件是一个link, 通过`readlink /usr/bin/x-session-manager`可以看到`link`的位置为`/etc/alternatives/x-session-manager`
> 而`/etc/alternatives/x-session-manager`也是一个link, 通过`readlink /etc/alternatives/x-session-manager`可以得到最终的`link`位置, 例如: `/usr/bin/startxfce4`

最终`/etc/X11/Xsession.d/99x11-common_start`通过`$STARTUP`变量启动桌面, 完成图形系统的初始化.

#### Arch

基于`Arch`的发行版, 例如`Manjaro`,
`xinitrc`位于`$HOME/.xinitrc`, 

脚本内部调用`/etc/X11/xinit/xinitrc.d`目录下的脚本进行初始化. <br/>
这个脚本内部的`get_session`函数用于获取桌面的启动路径, 支持常见的桌面, 例如:

- awesome
- bspwm
- budgie
- deepin
- enlightenment
- fluxbox
- gnome
- i3/i3wm
- jwm
- kde
- lxde
- lxqt
- mate
- xfce
- openbox
- gnome

通过`DEFAULT_SESSION`变量可以设置默认的桌面, 此变量默认值为`gnome-session`

## 参考资料

- [X Window System](https://en.wikipedia.org/wiki/X_Window_System)
- [X.Org Server](https://en.wikipedia.org/wiki/X.Org_Server)
- [X display manager](https://en.wikipedia.org/wiki/X_display_manager)