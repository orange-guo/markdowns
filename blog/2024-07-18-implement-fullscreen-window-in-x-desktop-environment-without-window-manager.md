---
authors: [ orange ]
tags: [ problem-solving, linux,  vnc, tigervnc, desktop,  xorg,  x11, xdotool, xwininfo, xrandr, xprop, vncserver ]
---

# 实现在X桌面环境中在不引入窗口管理器的情况下实现窗口的全屏

<!--truncate-->

最近需要完成一个`Remote App`的功能, 这个功能大致是这样的:

> 用户在浏览器中完成对桌面端程序的所有的操作, 例如`Ansys Fluent`, 整个过程用户不需要下载任何相关桌面程序, 所有软件都安装在远端的实例中, 平台根据用户选择的应用在系统的桌面资源池中分配一个虚拟桌面, 并在这个虚拟桌面中启动相关应用程序.

## 技术实现

整个技术实现是在远程主机中通过`VNC`协议对外暴露远程桌面访问, 在`VNC`会话中单独启动一个桌面应用(不包含桌面管理器部分, 典型的例如`GNOME`, `KDE Plasma`), `VNC`会话会被基于`web-vnc`的前端组件嵌入到浏览器页面中, 例如`iframe`中, 然后`UI`侧将相关`iframe`封装为一个桌面窗口, 最终实现一个`Remote App`的功能.


## 问题

在整个实现过程中, 遇到的问题如标题所述, 需要解决在`VNC`会话中单独启动一个桌面应用并将其全屏化, 否则如果没有全屏会导致桌面周边为黑色的(因为应用没有完全覆盖整个`VNC`桌面), 这样用户的体验效果会不友好 

## 思路

> 需要注意的是, 应用自动全屏这个功能目前已经有窗口管理器能够实现, 典型的是`dwm`这类平铺式窗口管理器(`Tiling Window Manager`)
> 但是考虑到我们要解决的问题很简单, 而且不希望引入太多的依赖, 所以我们需要自己手动编写一个来用于实现应用全屏的脚本.

简单的思路是调用`X`提供的工具获取到系统中的所有窗口, 
获取到系统中的窗口后, 通过调整窗口大小的命令来实现窗口的全屏, 

## 获取所有窗口

首先的需要获取到目前系统中的活动窗口, 获取窗口可以通过`xwininfo`命令, 该命令用法如下

```bash
xwininfo -root -children
```

上述命令将能够获取到所有窗口, 输出结果如下

```log
xwininfo: Window id: 0x51a (the root window) (has no name)

  Root window id: 0x51a (the root window) (has no name)
  Parent window id: 0x0 (none)
     11 children:
     0x533 (has no name): ()  100x100+0+0  +0+0
     0xa00000 "Chromium clipboard": ()  10x10+-100+-100  +-100+-100
     0x200101 "StringDecoderBenchmark.java ? test.sh": ("jetbrains-idea" "jetbrains-idea")  2560x1440+0+0  +0+0
     0x200108 "sun-awt-X11-XIconWindow": ()  16x16+0+0  +0+0
     0x2000d7 "jetbrains-idea": ("jetbrains-idea" "jetbrains-idea")  1x1+1+1  +1+1
     0x800011 "java": ("java" "Java")  4x4+0+0  +0+0
     0x80000d "java": ("java" "Java")  200x200+0+0  +0+0
     0x800007 "java": ("java" "Java")  200x200+0+0  +0+0
     0x800003 "java": ("java" "Java")  200x200+0+0  +0+0
     0x800001 "java": ("java" "Java")  10x10+10+10  +10+10
     0x400001 (has no name): ()  10x10+-20+-20  +-20+-20
```

在上面的例子中, 整个`VNC`会话只启动了一个`Intellij IDEA`进程, 但是可以发现, 结果中出现了多个窗口, 这是因为我们平时看到的窗口可能是多个窗口的组合, 例如:

- 设置选项的下拉框, 在`X`看来这是一个独立的窗口, 但是`IDEA`程序将这些窗口进行组合, 形成了最终的窗口
- 此外还有一些系统中的对话框, 这些也是属于`Window`

我们需要忽略这些窗口, 只获取到`IDEA`程序的主窗口, 所以这里的主要问题是如何获取到主窗口

## 获取主窗口

为了能够获取到主窗口, 在`Google`上搜索相关问题, 没有找到完整的解决方案, 在这种情况下, 我们只能自己自己查看窗口管理器的逻辑来探索解决方案.<br/>
在之前的工作中, 我们使用过`dwm`作为窗口管理器, 在`dwm`中, 当整个桌面只有一个窗口时, 应用会自动全屏, 只会对应用的主窗口进行管理, 而不会对子窗口进行管理, 为了能够知道这里的逻辑, 我们需要在`dwm`中查看相关代码, 可以通过以下命令`clone`dwm项目的代码

```bash
git clone https://git.suckless.org/dwm
```

`dwm`是一个很简单的窗口管理器, 整个逻辑都在`dwm.c`文件中, 我们可以查看`dwm.c`文件中的`main`函数, 该函数代码如下

```c
int
main(int argc, char *argv[])
{
	if (argc == 2 && !strcmp("-v", argv[1]))
		die("dwm-"VERSION);
	else if (argc != 1)
		die("usage: dwm [-v]");
	if (!setlocale(LC_CTYPE, "") || !XSupportsLocale())
		fputs("warning: no locale support\n", stderr);
	if (!(dpy = XOpenDisplay(NULL)))
		die("dwm: cannot open display");
	checkotherwm();
	setup();
#ifdef __OpenBSD__
	if (pledge("stdio rpath proc exec", NULL) == -1)
		die("pledge");
#endif /* __OpenBSD__ */
	scan();
	run();
	cleanup();
	XCloseDisplay(dpy);
	return EXIT_SUCCESS;
}
```

上述代码中, 我们需要关心的是`scan`函数, 这个函数从名字上来看是扫描窗口的, 具体的扫描窗口逻辑我们可以查看`scan`函数的实现, 该函数代码如下

```c
void
scan(void)
{
	unsigned int i, num;
	Window d1, d2, *wins = NULL;
	XWindowAttributes wa;

	if (XQueryTree(dpy, root, &d1, &d2, &wins, &num)) {
		for (i = 0; i < num; i++) {
			if (!XGetWindowAttributes(dpy, wins[i], &wa)
			|| wa.override_redirect || XGetTransientForHint(dpy, wins[i], &d1))
				continue;
			if (wa.map_state == IsViewable || getstate(wins[i]) == IconicState)
				manage(wins[i], &wa);
		}
		for (i = 0; i < num; i++) { /* now the transients */
			if (!XGetWindowAttributes(dpy, wins[i], &wa))
				continue;
			if (XGetTransientForHint(dpy, wins[i], &d1)
			&& (wa.map_state == IsViewable || getstate(wins[i]) == IconicState))
				manage(wins[i], &wa);
		}
		if (wins)
			XFree(wins);
	}
}
```

在这段代码中, 我们可以看到, `dwm`会扫描整个桌面的所有窗口, 并且会根据窗口的属性来判断是否需要管理窗口, 窗口的属性可以通过`XGetWindowAttributes`函数获取, 窗口的属性包括窗口的

- `map_state`(表示窗口是否可见, `IsViewable`表示窗口可见, `IsUnmapped`表示窗口不可见)
- `override_redirect`(表示窗口是否被重定向)
- `transient_for`(临时窗口, 例如对话框, 这个指指向了和这个窗口关联的窗口, 通常为父窗口)

根据上述逻辑, 我们可以提取出`dwm`管理窗口的关键线索

- `map_state`必须为`IsViewable`
- `override_redirect`必须为`False`
- `transient_for`必须为`None`

根据上述线索, 我们已经知道了要做哪些判断, 接下来我们需要知道如何获取到窗口的属性, 上述属性可以通过

- xwininfo
- xprop

来获取到

## 工具

### xwininfo

xwininfo可以获取到`Map State`和`Override Redirect State`

命令用例如下:

```bash
xwininfo -id 0x200101
```

```log

xwininfo: Window id: 0x200101 "StringDecoderBenchmark.java ? test.sh"

  Absolute upper-left X:  0
  Absolute upper-left Y:  0
  Relative upper-left X:  0
  Relative upper-left Y:  0
  Width: 2560
  Height: 1440
  Depth: 24
  Visual: 0x21
  Visual Class: TrueColor
  Border width: 0
  Class: InputOutput
  Colormap: 0x20 (installed)
  Bit Gravity State: NorthWestGravity
  Window Gravity State: NorthWestGravity
  Backing Store State: NotUseful
  Save Under State: no
  Map State: IsViewable
  Override Redirect State: no
  Corners:  +0+0  -0+0  -0-0  +0-0
  -geometry 2560x1440+0+0


```

### xprop

xprop可以获取到`WM_TRANSIENT_FOR(WINDOW)`信息, 如果获取不到, 说明窗口没有设置`WM_TRANSIENT_FOR`属性

命令用例如下:

```bash
xprop -id 0x200101
```

```log
_MOTIF_DRAG_RECEIVER_INFO(_MOTIF_DRAG_RECEIVER_INFO) = 0x6c, 0x0, 0x5, 0x0, 0x1, 0x1, 0x20, 0x0, 0x0, 0x0, 0x0, 0x0, 0x10, 0x0, 0x0, 0x0
XdndAware(ATOM) = BITMAP
_MOTIF_WM_HINTS(_MOTIF_WM_HINTS) = 0x3, 0x1, 0x1, 0x0, 0x0
WM_HINTS(WM_HINTS):
                Client accepts input or input focus: False
                Initial state is Normal State.
                bitmap id # to use for icon: 0x20010f
                bitmap id # of mask for icon: 0x200111
                window id # to use for icon: 0x200108
_NET_WM_PID(CARDINAL) = 3009322
WM_CLIENT_MACHINE(STRING) = "gxc-stack-node-1"
WM_PROTOCOLS(ATOM): protocols  WM_TAKE_FOCUS, WM_DELETE_WINDOW
WM_CLASS(STRING) = "jetbrains-idea", "jetbrains-idea"
WM_CLIENT_LEADER(WINDOW): window id # 0x2000d7
_NET_WM_ICON_NAME(UTF8_STRING) = "StringDecoderBenchmark.java ? test.sh"
WM_ICON_NAME(COMPOUND_TEXT) = "StringDecoderBenchmark.java ? test.sh"
_NET_WM_NAME(UTF8_STRING) = "StringDecoderBenchmark.java ? test.sh"
WM_NAME(COMPOUND_TEXT) = "StringDecoderBenchmark.java ? test.sh"
WM_NORMAL_HINTS(WM_SIZE_HINTS):
                user specified location: 0, 0
                program specified location: 0, 0
                program specified size: 2560 by 1440
                program specified minimum size: 340 by 0
                window gravity: NorthWest
```

### xdotool

`xdotool`可以用来修改窗口的大小以及偏移, 命令用例如下:

```bash
xdotool windowsize 0x200101 2560 1440 # 修改窗口大小为2560x1440
xdotool windowmove 0x200101 0 0 修改窗口偏移为(0,0), 这个值是相对于窗口左上角的偏移
```

#### xrandr

`xrandr`可以用来获取当前桌面的屏幕大小, 命令用例如下:

```bash
xrandr 
```

```log
Screen 0: minimum 32 x 32, current 2560 x 1440, maximum 32768 x 32768
VNC-0 connected 2560x1440+0+0 0mm x 0mm
   2560x1440     60.00*+
   1920x1200     60.00  
   1920x1080     60.00  
   1600x1200     60.00  
   1680x1050     60.00  
   1400x1050     60.00  
   1360x768      60.00  
   1280x1024     60.00  
   1280x960      60.00  
   1280x800      60.00  
   1280x720      60.00  
   1024x768      60.00  
   800x600       60.00  
   640x480       60.00  
```

上述输出中输出了系统中支持的分辨率, 其中`*`表示当前屏幕的分辨率

## 实现代码

### vncserver

首先是`vncserver`创建`VNC`会话的命令

```bash
vncserver -xstartup ~/.vnc-1721295131/start-remote-app.sh
```

上述命令中, 我们配置了`-xstartup`参数, 这样来确保只运行我们期望的桌面应用而不是整个桌面环境,
需要注意的是, 脚本文件是动态生成的, 所以每次启动`vncserver`都会生成一个新的脚本文件

### `~/.vnc-1721295131/start-remote-app.sh`

接下来是`~/.vnc-1721295131/start-remote-app.sh`脚本内容, 大致的工作代码如下

```bash title="~/.vnc-1721295131/start-remote-app.sh"
#!/bin/bash
while true; do
  sleep 0.5s
  echo "Begin loop"
  screen_size=$(xrandr | grep '*+' | tr ' ' '\n' | grep "x" | tr 'x' ' ')
  for id in $(xwininfo -root -children | grep "^     0x" | awk '{print $1}'); do
    info=$(xwininfo -id $id)
    if ! (echo $info | grep -q "Override Redirect State: no" && echo $info | grep -q "Map State: IsViewable"); then
      continue
    fi
    # xwininfo -id $id

    # WM_TRANSIENT_FOR(WINDOW): window id # 0x1000f4
    if xprop -id $id | grep -q 'WM_TRANSIENT_FOR(WINDOW)'; then
      continue
    fi
    echo "Need to manage window $id"
    xdotool windowsize $id $screen_size
    xdotool windowmove $id 0 0
    echo "End inspect window $id"
  done
  echo "End loop"
done | tee /tmp/xwininfo.log &
loop_pid=$!

/fastone/users/admin/idea-IU-241.18034.62/bin/idea.sh &
desktop_app_pid=$!

wait $desktop_app_pid

while true; do
  if [ -z "$(xlsclients)" ]; then
    echo "There is no window, exit"
    kill $loop_pid
    break
  fi
  sleep 0.5s
  echo "There is window, continue"
done | tee /tmp/xlsclients.log
```

在上述脚本中`/fastone/users/admin/idea-IU-241.18034.62/bin/idea.sh`是实际桌面应用的的启动命令, 后期会根据实际应用进行替换

整个实现思路是:

- 在主bash中在后台开启一个进程<br/>
> 这个进程是一个循环, 用来将系统中所有满足条件的主窗口调整全屏
- 在后台开启桌面程序的进行, 并等待桌面程序退出<br/>
- 当桌面程序退出后, 进入循环, 通过`xlsclients`命令来判断是否还有窗口, 如果没有窗口了, 则退出循环并杀死循环进程确保循环进程退出<br/> 
> 通过`xlsclients`命令来判断的主要目的是有可能用户通过图形应用打开了另一个图形应用并将之前的应用退出, 如果不进行检查会导致VNC会话结束, 这不是我们期望的


## 参考

- [dwm](https://dwm.suckless.org/)
- [The X Window system](https://tronche.com/gui/x/)
- [The Xlib Manual](https://tronche.com/gui/x/xlib/)
- [Xlib - C Language X Interface](https://www.x.org/releases/current/doc/libX11/libX11/libX11.html)
- [3.2.8 Override Redirect Flag](https://tronche.com/gui/x/xlib/window/attributes/override-redirect.html)
- [3.5 Mapping Windows](https://tronche.com/gui/x/xlib/window/map.html)
- [14.1.9 Setting and Reading the WM_TRANSIENT_FOR Property](https://tronche.com/gui/x/xlib/ICCclient-to-window-manager/wm-transient-for.html)
- [The Python X Library](https://python-xlib.sourceforge.net/doc/html/)