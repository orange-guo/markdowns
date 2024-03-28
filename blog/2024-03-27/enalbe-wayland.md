---
authors: [ xiangcheng.kuo ]
tags: [ linux, wayland, gnome ]
---

# 启用Wayland

默认情况下, 桌面应用和`Backend`通信协议是`X11`协议. <br/>
`Wayland`是`X11`的替代品, 可以提供更好的性能和体验.(绘图在Client侧而不是像`X11`一样由`XServer`负责).<br/>
下面将介绍如何启用`Wayland`协议.

<!--truncate-->

## 确认当前的通信协议

执行以下命令, 确认当前的通信协议:

```bash
echo $XDG_SESSION_TYPE
```

当输出结果为`x11`时, 说明当前使用的是`X11`协议.
如果输出结果为`wayland`时, 说明当前使用的是`Wayland`协议, 不需要做任何操作.

## 修改配置文件

执行以下命令, 修改配置文件:

```bash
sudo vim /etc/gdm3/custom.conf
```

将配置文件中的`WaylandEnable=false`改为`WaylandEnable=true`

## 重启gdm服务并进入桌面

执行以下命令, 重启gdm服务:

```bash
sudo systemctl restart gdm
```

当`gdm`服务重启后, 当前登录的会话会退出, 需要重新登录, 登录时选择`Wayland`登录方式即可.

## 验证

执行以下命令, 验证是否启用Wayland:

```bash
echo $XDG_SESSION_TYPE
```

当输出结果为`wayland`时, 说明启用Wayland成功.

## 参考资料

- [How to enable/disable wayland on Ubuntu 22.04 Desktop](https://linuxconfig.org/how-to-enable-disable-wayland-on-ubuntu-22-04-desktop)

## Update 2023-03-28

在使用了一段时间后, 发现部分应用对`Wayland`的支持不足.<br/>
例如`InteiliJ IDEA`, 其底层基于`Java`的`Swing`实现图形渲染, 但是目前`Swing`还是基于`X11`协议, 因此无法使用`Wayland`协议,
会导致系统使用`XWayland`来模拟`X11`协议, 从而影响其性能,
主要的影响是打字输入的渲染会比较卡顿以及应用内部窗口初始化时会出现短暂的黑色背景.<br/>

`Jetbrains`去年发布过一个博客, 该博客详细介绍了基于`IDE`对`Wayland`的支持.<br/>
[Wayland Support for IntelliJ-based IDEs](https://blog.jetbrains.com/platform/2023/08/wayland-support/)<br/>
该博客中首先对`Wayland`作出了介绍, 以及目前`Java`对`Wayland`的支持现状由于历史的原因, `Java`尚未支持`Wayland`而是采用`Xwayland`兼容性过渡方案.<br/>
其次介绍了目前对于`Java`原生`Wayland`支持的挑战.<br/>
最后是对未来支持`Wayland`的展望.<br/>
该博客中提到了目前`OpenJDK`中的`Wakefield`项目致力于解决让在`JDK`中实现`Wayland display server`的支持<br/>

**该项目有中短期和中长期两个目标:**

> 短期到中期解决方案:<br/>
> a short to medium term solution for JDK running on Wayland in X11 compatibility mode.<br/>
> JDK在X11兼容模式下运行在Wayland上.<br/>

> 中期到长期解决方案:<br/>
> a medium to long term solution for JDK running as a native Wayland client. Pure Wayland toolkit plan proposal.<br/>
> JDK作为原生Wayland客户端, 需要一个纯Wayland工具包方案.<br/>

更多信息参考:

- [OpenJDK Project Wakefield - Wayland desktop support for JDK on Linux](https://wiki.openjdk.org/display/wakefield)
- [Project Wakefield: A New Wayland Desktop for Java On Linux](https://cr.openjdk.org/~prr/javaone/2022/wakefield/wakefield_bof.pdf)