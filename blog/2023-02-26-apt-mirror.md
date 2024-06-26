---
authors: [ orange ]
tags: [apt, ubuntu, linux]
---

# `ubuntu`中常用的`apt`源

本文记录了`ubuntu`中常用的`apt`源, 以及如何配置`apt`源.

<!--truncate-->

## 解决方案

### 确认`codename`

不同的版本的`ubuntu`, `codename`会有所不同, 比如`20.04`的`codename`是`focal`, `22.10`的`codename`是`kinetic`.

执行以下命令，确认`codename`

```bash
lsb_release -a
```

输出结果参考

```log
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 22.10
Release:        22.10
Codename:       kinetic
```

### 编辑`/etc/apt/sources.list`

将下面的内容中的`kinetic`替换为上一步中的`codename`, 然后保存到`/etc/apt/sources.list`中.

```text title="/etc/apt/sources.list"
# Jiaotong University
deb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic main restricted universe multiverse
deb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic-updates main restricted universe multiverse
deb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic-backports main restricted universe multiverse
deb https://ftp.sjtu.edu.cn/sites/archive.ubuntu.com/ kinetic-security main restricted universe multiverse


# Tsinghua
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse

# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse

# Ali
deb http://mirrors.aliyun.com/ubuntu/ kinetic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ kinetic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ kinetic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ kinetic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ kinetic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ kinetic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ kinetic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ kinetic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ kinetic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ kinetic-backports main restricted universe multiverse


# Netease
deb http://mirrors.163.com/ubuntu/ kinetic main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ kinetic-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ kinetic-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ kinetic-proposed main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ kinetic-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ kinetic main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ kinetic-security main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ kinetic-updates main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ kinetic-proposed main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ kinetic-backports main restricted universe multiverse


# 中科大镜像源
deb https://mirrors.ustc.edu.cn/ubuntu/ kinetic main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse

#deb cdrom:[Ubuntu 22.04 LTS _kinetic Jellyfish_ - Release amd64 (20220419)]/ kinetic main restricted

# See http://help.ubuntu.com/community/UpgradeNotes for how to upgrade to
# newer versions of the distribution.
deb http://cn.archive.ubuntu.com/ubuntu/ kinetic main restricted
# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic main restricted

## Major bug fix updates produced after the final release of the
## distribution.
deb http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates main restricted
# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates main restricted

## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu
## team. Also, please note that software in universe WILL NOT receive any
## review or updates from the Ubuntu security team.
deb http://cn.archive.ubuntu.com/ubuntu/ kinetic universe
# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic universe
deb http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates universe
# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates universe

## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu 
## team, and may not be under a free licence. Please satisfy yourself as to 
## your rights to use the software. Also, please note that software in 
## multiverse WILL NOT receive any review or updates from the Ubuntu
## security team.
deb http://cn.archive.ubuntu.com/ubuntu/ kinetic multiverse
# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic multiverse
deb http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates multiverse
# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-updates multiverse

## N.B. software from this repository may not have been tested as
## extensively as that contained in the main release, although it includes
## newer versions of some applications which may provide useful features.
## Also, please note that software in backports WILL NOT receive any review
## or updates from the Ubuntu security team.
deb http://cn.archive.ubuntu.com/ubuntu/ kinetic-backports main restricted universe multiverse
# deb-src http://cn.archive.ubuntu.com/ubuntu/ kinetic-backports main restricted universe multiverse

deb http://security.ubuntu.com/ubuntu kinetic-security main restricted
# deb-src http://security.ubuntu.com/ubuntu kinetic-security main restricted
deb http://security.ubuntu.com/ubuntu kinetic-security universe
# deb-src http://security.ubuntu.com/ubuntu kinetic-security universe
deb http://security.ubuntu.com/ubuntu kinetic-security multiverse
# deb-src http://security.ubuntu.com/ubuntu kinetic-security multiverse

# This system was installed using small removable media
# (e.g. netinst, live or single CD). The matching "deb cdrom"
# entries were disabled at the end of the installation process.
# For information about how to configure apt package sources,
# see the sources.list(5) manual.
```

## 参考

- [Official Archive Mirrors for Ubuntu](https://launchpad.net/ubuntu/+archivemirrors)
- [SourcesList](https://wiki.debian.org/SourcesList)