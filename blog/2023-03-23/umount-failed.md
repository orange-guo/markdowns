---
authors: [xiangcheng.kuo]
tags: [problem-solving, umount, fuse]
---

# 解决umount失败报错transport endpoint is not connected

在升级执行过程中遇到问题, 升级执行过程会`down`老的环境并`setup`新的环境<br/>
在`ymir setup`过程中出现`transport endpoint is not connected`, 该问题导致升级失败<br/>

<!--truncate-->

## 原因

旧环境执行`ymir down`的时候没有成功`detach`掉相关挂载<br/>

目前`detach`挂载的行为是在`fastone-rclone`容器中负责的, 其执行原理是当进程收到`sigkill`信号(该信号由`ymir down`触发)
时进行调用`fusermount -u /fastone-mnt`命令来进行`detach`, 此detach行为没执行成功目前推测有以下几种可能

- 超出了`ymir down`最大容忍时间(`ymir down`底层调用`docker-compose`来停止服务默认超时时间是10s)
- 在`fastone-rclone`容器收到`sigkill`信号并执行`detach`时由于该`devide`下的`fd`被相关进程占用导致无法`detach`
  <br/>(如果在卸载设备或文件系统时, 仍然有进程使用相关文件句柄, 那么卸载操作通常会失败. 这是因为`linux`
  内核会检测到有进程仍然在使用文件句柄, 因此无法卸载设备或文件系统.)

## 解决方案

- `ymir down`的超时时间可配置确保服务能够都正常清理并成功退出 @faststone_sleep
- `fastone-rclone`服务`detach`挂载时需要强制`detach`, 考虑采用`umount -l`来实现该功能 @Jacky