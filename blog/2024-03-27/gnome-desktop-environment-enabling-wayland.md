---
authors: [ xiangcheng.kuo ]
tags: [ linux, wayland, gnome ]
---

# Gnome桌面环境启用Wayland

默认情况下, Gnome桌面环境使用的协议是`X11`协议. <br/>
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

## 应用`Wayland`支持

### Chrome

```bash
com.google.Chrome --ozone-platform=wayland
```

- [Latest update of chrome on Wayland](https://www.reddit.com/r/linux/comments/1c63fgz/latest_update_of_chrome_on_wayland/)

### VsCode

```
code --ozone-platform=wayland
```

## 参考资料

- [How to enable/disable wayland on Ubuntu 22.04 Desktop](https://linuxconfig.org/how-to-enable-disable-wayland-on-ubuntu-22-04-desktop)

## Update 2024-03-28 (`InteiliJ IDEA`目前对`Wayland`的原生支持还在进行中)

### `Wayland`的支持不足

`InteiliJ IDEA`对`Wayland`的支持不足, 其底层基于`Java`的`Swing`实现图形渲染, 但是目前`Swing`还是基于`X11`协议, 因此无法使用`Wayland`协议,
会导致系统使用`XWayland`来模拟`X11`协议, 从而影响其性能,
主要的影响是:
- 打字输入的渲染会比较卡顿
- 应用内部窗口初始化时会出现短暂的黑色背景
- 编辑器滑动会比较卡顿不够流畅

### `Jetbrains`对`Wayland`的支持仍在继续

`Jetbrains`去年发布过一个博客, 该博客详细介绍了基于`IDE`对`Wayland`的支持.<br/>
[Wayland Support for IntelliJ-based IDEs](https://blog.jetbrains.com/platform/2023/08/wayland-support/)<br/>
该博客中首先对`Wayland`作出了介绍, 以及目前`Java`对`Wayland`的支持现状由于历史的原因, `Java`尚未支持`Wayland`而是采用`Xwayland`兼容性过渡方案.<br/>
其次介绍了目前对于`Java`原生`Wayland`支持的挑战.<br/>
最后是对未来支持`Wayland`的展望.<br/>

### OpenJDK Project Wakefield

`OpenJDK`中的`Wakefield`项目致力于解决让在`JDK`中实现`Wayland display server`的支持<br/>

**该项目有中短期和中长期两个目标:**

> 短期到中期解决方案:<br/>
> a short to medium term solution for JDK running on Wayland in X11 compatibility mode.<br/>
> JDK在X11兼容模式下运行在Wayland上.<br/>

> 中期到长期解决方案:<br/>
> a medium to long term solution for JDK running as a native Wayland client. Pure Wayland toolkit plan proposal.<br/>
> JDK作为原生Wayland客户端, 需要一个纯Wayland工具包方案.<br/>

### 参考

- [OpenJDK Project Wakefield - Wayland desktop support for JDK on Linux](https://wiki.openjdk.org/display/wakefield)
- [Project Wakefield: A New Wayland Desktop for Java On Linux](https://cr.openjdk.org/~prr/javaone/2022/wakefield/wakefield_bof.pdf)

## Update 2024-06-04 (启用`InteiliJ IDEA`对`Wayland`的原生支持)

`InteiliJ IDEA`底层的`Runtime`正在支持`Wayland`, 可以通过修改`Java Runtime`来启用`Wayland`原生支持, 启用后`UI`交互相较于`XWayland`会比较流畅

### 已知问题

启用后会有一些问题, 例如:

- Cannot use the input method (fcitx) to input chinese characters.
- Cannot open dialog for renaming files.

### 启用步骤

1. 进入[Releases](https://github.com/JetBrains/JetBrainsRuntime/releases)下载最新的`JetBrains Runtime`
2. 修改`idea64.vmoptions`增加以下内容
```
--add-opens=java.base/java.io=ALL-UNNAMED \
-ea \
-Dawt.toolkit.name=WLToolkit \
--add-opens=java.base/java.lang=ALL-UNNAMED \
--add-opens=java.base/java.lang.ref=ALL-UNNAMED \
--add-opens=java.base/java.lang.reflect=ALL-UNNAMED \
--add-opens=java.base/java.net=ALL-UNNAMED \
--add-opens=java.base/java.nio=ALL-UNNAMED \
--add-opens=java.base/java.nio.charset=ALL-UNNAMED \
--add-opens=java.base/java.text=ALL-UNNAMED \
--add-opens=java.base/java.time=ALL-UNNAMED \
--add-opens=java.base/java.util=ALL-UNNAMED \
--add-opens=java.base/java.util.concurrent=ALL-UNNAMED \
--add-opens=java.base/java.util.concurrent.atomic=ALL-UNNAMED \
--add-opens=java.base/jdk.internal.vm=ALL-UNNAMED \
--add-opens=java.base/sun.nio.ch=ALL-UNNAMED \
--add-opens=java.base/sun.nio.fs=ALL-UNNAMED \
--add-opens=java.base/sun.security.ssl=ALL-UNNAMED \
--add-opens=java.base/sun.security.util=ALL-UNNAMED \
--add-opens=java.base/sun.net.dns=ALL-UNNAMED \
--add-opens=java.desktop/com.sun.java.swing.plaf.gtk=ALL-UNNAMED \
--add-opens=java.desktop/java.awt=ALL-UNNAMED \
--add-opens=java.desktop/java.awt.dnd.peer=ALL-UNNAMED \
--add-opens=java.desktop/java.awt.event=ALL-UNNAMED \
--add-opens=java.desktop/java.awt.image=ALL-UNNAMED \
--add-opens=java.desktop/java.awt.peer=ALL-UNNAMED \
--add-opens=java.desktop/java.awt.font=ALL-UNNAMED \
--add-opens=java.desktop/javax.swing=ALL-UNNAMED \
--add-opens=java.desktop/javax.swing.plaf.basic=ALL-UNNAMED \
--add-opens=java.desktop/javax.swing.text.html=ALL-UNNAMED \
--add-opens=java.desktop/sun.awt.X11=ALL-UNNAMED \
--add-opens=java.desktop/sun.awt.wl=ALL-UNNAMED \
--add-opens=java.desktop/sun.awt.datatransfer=ALL-UNNAMED \
--add-opens=java.desktop/sun.awt.image=ALL-UNNAMED \
--add-opens=java.desktop/sun.awt=ALL-UNNAMED \
--add-opens=java.desktop/sun.font=ALL-UNNAMED \
--add-opens=java.desktop/sun.java2d=ALL-UNNAMED \
--add-opens=java.desktop/sun.swing=ALL-UNNAMED \
--add-opens=jdk.attach/sun.tools.attach=ALL-UNNAMED \
--add-opens=jdk.compiler/com.sun.tools.javac.api=ALL-UNNAMED \
--add-opens=jdk.internal.jvmstat/sun.jvmstat.monitor=ALL-UNNAMED \
--add-opens=jdk.jdi/com.sun.tools.jdi=ALL-UNNAMED com.intellij.idea.Main
```
3. 在`IDEA`内进入`Choose Boot Java Runtime for the IDE`修改`Runtime`为新下载的包.
4. 重启`IDEA`
5. 启动后执行`xlsclients`检查`IDEA`是否运行在`X`模式下, 进程名为`java`


### 参考

- [testing wayland](https://github.com/JetBrains/JetBrainsRuntime/issues/242)