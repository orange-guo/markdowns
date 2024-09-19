---
authors: [ orange ]
tags: [ troubleshooting, linux,  vnc, tigervnc, vncserver, x11, xorg, xserver ]
---

# 解决因`ip_local_port_range`配置的端口范围包含VNC会话端口导致建VNC会话时报错'A VNC server is already running as :xxx'

执行`vncserver`命令时出现报错, 提示`A VNC server is already running as :xxx`, 命令示例如下:

```bash
vncserver :1
```

错误信息如下:

```text
A VNC server is already running as :1
```

<!--truncate-->

## 问题原因

在`VNC`中, 每个`VNC会话`由两个主要组件组成:

- `VNC Server`
  <br/>`VNC服务器`, 处理`VNC客户端`的连接请求.<br/>
- `X Server`
  <br/>`X11服务器`，负责管理显示和处理`X客户端`的请求.<br/>

这两个组件分别占用各自的端口, 具体规则如下:

端口的计算规则如下:

> VNC Server 端口 = 5900 + display_number(例如 :1 对应端口 5901) <br/>
> X Server 端口 = 6000 + display_number(例如 :1 对应端口 6001)

如果Linux系统为其他进程分配的端口(通过 ip_local_port_range 配置的范围)恰好与VNC会话使用的端口重叠, 则会导致`A VNC server is already running as :xxx`错误.

## 解决方案

修改`/etc/sysctl.conf`中的`net.ipv4.ip_local_port_range`, 避开VNC会话使用的端口范围. <br/>

示例如下: <br/>

```properties
net.ipv4.ip_local_port_range=6500 65000
```

然后执行以下命令使配置生效:

```bash
sysctl -p
```

## 排查过程

通过查看`vncserver`源码, 搜索错误信息`A VNC server is already running as`确认代码位置, 相关代码如下: <br/>

```perl
# Find display number.
if ((@ARGV == 1) && ($ARGV[0] =~ /^:(\d+)$/)) {
    $displayNumber = $1;
    if (!&CheckDisplayNumber($displayNumber)) {
	die "A VNC server is already running as :$displayNumber\n";
    }
} else {
    &Usage();
}
```

通过`CheckDisplayNumber`函数检查`display_number`是否可用, 如果不可用, 则会报错. <br/>

该函数的代码如下:<br/>

```perl
#
# CheckDisplayNumber checks if the given display number is available.  A
# display number n is taken if something is listening on the VNC server port
# (5900+n) or the X server port (6000+n).
#

sub CheckDisplayNumber
{
    my($n) = @_;

    use Socket;

    my $x11_lock_path = "/tmp/.X$n-lock";

    if (-e $x11_lock_path) {
        my($pid) = `cat "$x11_lock_path"` =~ /^\s*(\d+)\s*$/;
        if (defined($pid) && kill(0, $pid)) {
            # Lock is associated with valid PID.
            return 0;
        }
    }

    my $rfb_port = 5900 + $n;
    my $x11_port = 6000 + $n;

    for my $port ($rfb_port, $x11_port) {
        # Bind to port to confirm it is not in use.
        socket(S, PF_INET, SOCK_STREAM, 0) || die "$prog: socket failed: $!\n";
        setsockopt(S, SOL_SOCKET, SO_REUSEADDR, 1);
        if (!bind(S, sockaddr_in($port, INADDR_ANY))) {
            # Port is in use.
            close(S);
            return 0;
        }
        close(S);
    }

    my $x11_unix_domain = "/tmp/.X11-unix/X$n";

    if (-e $x11_unix_domain) {
        # Connect to UNIX domain socket to confirm it is not in use.
        socket(S, PF_UNIX, SOCK_STREAM, 0) || die "$prog: socket failed: $!\n";
        if (connect(S, sockaddr_un($x11_unix_domain))) {
            # UNIX domain socket is in use.
            close(S);
            return 0;
        }
        close(S);
    }

    return 1;
}
```

`CheckDisplayNumber`函数检查`VNC Server`和`X Server`端口是否被占用. <br/>

可以使用以下命令检查端口占用情况: <br/>

```bash
# 假设 display_number 为 1
lsof -i :5901
lsof -i :6001
```

如果端口没有被占用, 这些命令的输出应该为空

## 参考资料

- [vncserver源码](https://github.com/TigerVNC/tigervnc/blob/master/unix/vncserver/vncserver.in#L96)
- [net.ipv4.ip_local_port_range 的值究竟影响了啥](https://mozillazg.com/2019/05/linux-what-net.ipv4.ip_local_port_range-effect-or-mean.html)