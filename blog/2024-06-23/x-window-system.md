---
authors: [ xiangcheng.kuo ]
tags: [ linux, desktop, xorg, x11 ]
---

# X Window System

`X Window System`, 后续简称`X`, 由于其最后一个版本为`11`, 所以又名`X11`.<br/>

它是一个图形桌面系统, 其提供了一套规范架构规范, 在这个规范中, 涵盖了以下功能:

- 屏幕图像的绘制与呈现
- 鼠标键盘的交互

在`Linux`中, 其实现为`X.Org`.<br/>

## 架构

`X`采用的是`C/S`架构模型, 由一个`X Server`和多个`X Client`进行通信,
这意味着`X Server`和`X Client`可以在两台设备上运行, 常见的应用场景是`SSH X11 Forward`, SSH客户端运行一个`X Server`,
图形应用运行在SSH服务器中, 所有图形相关的交互都在SSH客户端机器上完成

## 图形系统中的常见组件

一个完整的图形系统主要包含以下几个组件:

### X Server

`X Server`对接两侧, 对接底层`硬件设备`以及对上层`X Client`提供和底层硬件设备进行交互的接口.

硬件设备包含:

- 鼠标
- 键盘
- 触摸板
- 屏幕

上述设备中, 按照功能分类可以分为`输入设备`和`输出设备`.<br/>

以用户在浏览器中滑动了滚轮进行翻页为例介绍底层的具体过程.<br/>

首先`Server`接收到来自鼠标的事件, `Server`确定并将事件传达到目标`Client`, `Client`收到事件后计算翻页后的窗口内容,
并请求`Server`进行屏幕图形绘制, `Server`收到请求后将图形绘制到屏幕中.<br/>

需要注意的是和Server之间通信的`API`通常不会直接面向开发人员, 这些`API`通常被一些上层库进行封装最终提供给了客户端进行使用,
例如:

- GTK
- QT

### X Client

`X Client`是`X Server`的客户端, 常见的`X Client`有: <br/>

- Firefox
- Chromium
- Thunderbird

### X Window Manager

`Window Manager`是一个特殊的`X Client`, 其特殊性在于其负责管理其他`Client`, 例如`控制窗口大小`, `缩放`.<br/>

常见的`Window Manager有:

- `GNOME`
- `KDE`
- `XFCE`

### X Display Manager

`X Display Manager`是一个登录控制器, 让用户提供证明其身份的证明, 例如, `用户名密码`, `指纹`,
根据用户提供的信息确定是否进行图形系统的初始化.<br/>
常见的, 常见的`Display Manger`有

- GDM
- SDDM
- LightDM
- KDM

## 图形系统的初始化

此初始化流程从`startx`开始,

`startx`中主要做了两件事情

### X server初始化

### X Client初始化

通过`xinit`来启动`X Client`.<br/>
这里的要启动的`X Client`包括桌面管理组件, 因为它是面向最终用户的入口, 用户通过它启动终端应用组件.<br/>
`xinit`是一个脚本负责`X Client`的初始化.<br/>
不同的发行版启动的方式不同, 但入口是一致是`/etc/X11/xinit/xinitrc`

#### CentOS (6.9, 7.5)

对于CentOS, 其内部委托`/etc/X11/xinit/Xclients`进行初始化<br/>

其仅对`GNOME` `KDE`提供了支持.<br/>
这意味者在安装了这两个桌面后, 不需要修改配置文件即可使用VNC远程桌面.<br/>
如果需要使用其他桌面, 则需要手动配置此文件, 将PREFERRED变量修改为对应桌面的完整二进制文件的路径.<br/>

以i3wm为例, 参考以下命令修改配置文件.<br/>

```bash
sudo sed -i 's/^PREFERRED=.*$/PREFERRED=$(type -p i3)/' /etc/X11/xinit/Xclients
```

### Ubuntu (18.04, 20.04, 22.04)

对于Ubuntu, 其内部委托`/etc/X11/Xsession`进行初始化, 并通过`/etc/X11/Xsession.d/`目录下的脚本进行初始化.

最终启动`/etc/alternatives/x-session-manager`来启动桌面, 此文件是一个软链接, 可以通过以下命令检查此软链接的指向

```bash
readlink /etc/alternatives/x-session-manager
# 例如 /usr/bin/gnome-session
```

> 在安装完桌面后, 请确保/etc/alternatives/x-session-manager指向了正确的桌面启动脚本.
> 如果发现启动的桌面不是期望的, 则需要手动修改此软链接.
> 以xfce4为例, 参考以下命令修改配置文件
> ```bash
> sudo rm /etc/alternatives/x-session-manager
> sudo ln -s /usr/bin/startxfce4 /etc/alternatives/x-session-manager
> ```

## 参考

- [X Window System](https://en.wikipedia.org/wiki/X_Window_System)
- [X.Org Server](https://en.wikipedia.org/wiki/X.Org_Server)
- [X display manager](https://en.wikipedia.org/wiki/X_display_manager)