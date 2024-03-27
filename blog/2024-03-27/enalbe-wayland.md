---
authors: [ xiangcheng.kuo ]
tags: [ linux, wayland, gnome ]
---

# 启用Wayland

默认情况下, 图形应用和`display server`之间的通信协议是`X11`协议. `Wayland`是`X11`的替代品, 可以提供更好的性能和体验.
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


