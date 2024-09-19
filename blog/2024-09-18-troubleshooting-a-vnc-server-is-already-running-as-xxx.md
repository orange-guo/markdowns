---
authors: [ orange ]
tags: [ troubleshooting, linux,  vnc, tigervnc, vncserver, x11, xorg, xserver ]
---

# 创建VNC会话报错A VNC server is already running as :xxx

在执行`vncserver`命令时, 出现以下错误提示:

```bash
vncserver -nolisten unix -listen tcp :1
```

错误信息如下:

```text
A VNC server is already running as :1
```

该错误说明VNC会话已被占用.<br/>

如果无法正常访问VNC会话, 可能是会话出现问题. 请按照以下步骤进行故障排除.

<!--truncate-->

## 排查步骤

### 检查残留进程

使用以下命令检查是否有残留的进程:

```bash
# 假设 display_number 为 1
sudo ps -ef | grep Xtigervnc | grep :1
```

如果有残留进程, 请将其杀死.

```bash
sudo kill -9 <pid>
```

### 检查进程残留文件

一个VNC会话会创建以下文件. 如果这些文件存在, 则说明VNC会话可能处于异常状态, 需要清理.<br/>

```bash
/tmp/.X$n-lock
/tmp/.X11-unix/X$n
/usr/spool/sockets/X11/$n
```

假设 display_number 为 1, 那么文件为. <br/>

```bash
/tmp/.X1-lock
/tmp/.X11-unix/X1
/usr/spool/sockets/X11/1
```

请删除以上文件以解决问题.

```bash
sudo rm -rf /tmp/.X1-lock /tmp/.X11-unix/X1 /usr/spool/sockets/X11/1
```

### 检查端口

在`VNC`中, 每个`VNC`会话由两个主要组件组成:

- `VNC Server`
  <br/>`VNC服务器`, 处理`VNC客户端`的连接请求.<br/>
- `X Server`
  <br/>`X11服务器`，负责管理显示和处理`X客户端`的请求.<br/>

> 默认情况下, `X Server`部分不会监听端口, 而是监听Unix域套接字, 如果在创建VNC会话时给定了`-nolisten unix -listen tcp`那么
`X Server`会监听端口
> 端口的计算规则如下: <br/>
> VNC Server 端口 = 5900 + display_number(例如 :1 对应端口 5901) <br/>
> X Server 端口 = 6000 + display_number(例如 :1 对应端口 6001)

#### 检查服务端口占用

可以使用以下命令检查端口占用情况: <br/>

```bash
# 假设 display_number 为 1
sudo lsof -iTCP:5901 -sTCP:LISTEN -P -n
sudo lsof -iTCP:6001 -sTCP:LISTEN -P -n
```

如果端口占用情况如下, 则说明存在残留进程.

```text
$ sudo lsof -iTCP:5901 -sTCP:LISTEN -P -n
COMMAND    PID  USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
xxx 8552 admin   10u  IPv4  57576      0t0  TCP *:5901 (LISTEN)
xxx 8552 admin   11u  IPv6  57577      0t0  TCP *:5901 (LISTEN)
$ sudo lsof -iTCP:6001 -sTCP:LISTEN -P -n
COMMAND    PID  USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
xxx 8552 admin    6u  IPv6  57567      0t0  TCP *:6001 (LISTEN)
xxx 8552 admin    7u  IPv4  57568      0t0  TCP *:6001 (LISTEN)
```

#### 检查ip_local_port_range配置的TCP客户端端口是否和VNC会话使用的端口重叠

`ip_local_port_range`是一个内核参数, 用于控制TCP客户端端口范围. <br/>

默认配置为`32768 60999`, 如果定制了此配置, 并且配置的范围恰好与VNC会话使用的端口重叠, 则可能会导致
`A VNC server is already running as :xxx`错误. <br/>

如果存在重叠, 修改`/etc/sysctl.conf`中的`net.ipv4.ip_local_port_range`, 避开VNC会话使用的端口范围. <br/>

示例如下: <br/>

```properties
net.ipv4.ip_local_port_range=32768 60999
```

然后执行以下命令使配置生效:

```bash
sysctl -p
```

#### 检查sshd配置中的X11DisplayOffset配置

在`sshd`配置中, 提供了`X11DisplayOffset`参数，用于指定`X11`转发的起始`display number`.

```text
X11DisplayOffset
         Specifies the first display number available for sshd(8)'s X11
         forwarding.  This prevents sshd from interfering with real X11
         servers.  The default is 10.
```

该配置位于`/etc/ssh/sshd_config`文件中, 默认值为`10`. <br/>

如果通过`SSH`客户端连接并启用了`X11 Forwarding`功能, 系统会从`10`开始分配 display number`.<br/>
这可能导致与VNC会话的`display number`(如 :10)产生冲突.<br/>

为避免这种冲突, 可以将`X11DisplayOffset`设置为较大的值, 例如:

```text
X11DisplayOffset 200
```

这样, 通过`X11 Forwarding`创建的第一个`display number`将从200开始, 有效避免与VNC会话的冲突.<br/>

## 备注

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

## 参考资料

- [vncserver源码](https://github.com/TigerVNC/tigervnc/blob/master/unix/vncserver/vncserver.in#L96)
- [net.ipv4.ip_local_port_range 的值究竟影响了啥](https://mozillazg.com/2019/05/linux-what-net.ipv4.ip_local_port_range-effect-or-mean.html)