---
authors: [xiangcheng.kuo]
tags: [ssh]
---

# 启用`SSH`密码验证

## 背景

在`ssh`中, 默认是不允许使用`password`认证的, 但是有时候, 我们需要使用`password`认证.<br/>
为了能够实现这个功能, 我们需要对`ssh`进行配置

## 解决方案

### 修改`sshd`配置文件

修改`/etc/ssh/sshd_config`文件, 将`PasswordAuthentication`设置为`yes`

```
PasswordAuthentication no
```

### 重启`ssh`服务

以下有两种方式, 选择一种即可

**方式1: systemd**

```bash
sudo systemctl restart sshd
```

**方式2: service**

```bash
sudo service sshd restart
```

## 参考

- [How to Enable SSH Password Authentication](https://serverpilot.io/docs/how-to-enable-ssh-password-authentication/)