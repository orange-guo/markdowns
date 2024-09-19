---
authors: [ orange ]
tags: [troubleshooting, ssh, ldap]
---

# SSH命令无法创建远程连接

今天线上出现了一个问题, 此问题的现象是用户在页面上点击创建`VNC`远程链接会等待很久且响应失败<br/>

<!--truncate-->

## 原因

这个问题的原因是因为`ssh`命令执行超时, `ssh`命令超时的原因是因为每次`ssh`执行命令时需要进行用户认证,
系统中接入了外置认证系统`ldap`进行认证, 但由于访问外部认证服务很慢导致触发了超时.<br/>
认证服务对应`lb`会转发到出问题的`ldap`服务器, 从而导致认证服务访问很慢.<br/>

## 排查过程

### 1. 查看后端服务日志

后端日志如下<br/>

```bash
2023-03-09 10:34:37	2023-03-09T02:34:36.844168954Z stdout F 2023-03-09 02:34:36.844  INFO 1 --- [nio-2000-exec-6] c.f.c.s.c.LocalAuthenticationProvider    : into local DB authenticate, user is::foo
2023-03-09 10:34:40	2023-03-09T02:34:40.258742954Z stdout F 2023-03-09 02:34:40.258  INFO 1 --- [io-2000-exec-11] com.jcabi.ssh.Execution$Default          : $ getent passwd foo | awk -F: '{print $6}'
2023-03-09 10:34:44	2023-03-09T02:34:44.382676144Z stdout F 2023-03-09 02:34:44.382  INFO 1 --- [io-2000-exec-11] com.jcabi.ssh.Execution$Default          : $ sudo -i -u foo mkdir -p /fastone/users/foo/.foo
2023-03-09 10:34:49	2023-03-09T02:34:49.36267293Z stdout F 2023-03-09 02:34:49.362  INFO 1 --- [io-2000-exec-11] com.jcabi.ssh.Execution$Default          : $ echo -e "foo\foo\nn\n" | sudo -i -u foo sh -c "VNC_HOME=/fastone/users/foo/.foo vncserver -nolisten unix -listen tcp -maxclients 512 2>&1"
2023-03-09 10:35:04	2023-03-09T02:35:04.409356857Z stdout F 2023-03-09 02:35:04.409  WARN 1 --- [io-2000-exec-11] com.jcabi.ssh.Ssh                        : an exception during authentication
2023-03-09 10:35:04	2023-03-09T02:35:04.409378051Z stdout F java.net.SocketTimeoutException: Read timed out
2023-03-09 10:35:04	2023-03-09T02:35:04.410988161Z stdout F 2023-03-09 02:35:04.410 ERROR 1 --- [io-2000-exec-11] c.f.common.ssh.client.SshClient          : 命令执行失败!
2023-03-09 10:35:04	2023-03-09T02:35:04.411003386Z stdout F
2023-03-09 10:35:04	2023-03-09T02:35:04.411007586Z stdout F java.io.IOException: com.jcraft.jsch.JSchException: Auth fail
2023-03-09 10:35:04	2023-03-09T02:35:04.411011213Z stdout F 	at com.jcabi.ssh.Ssh.session(Ssh.java:281) ~[jcabi-ssh-1.6.1.jar:na]
2023-03-09 10:35:04	2023-03-09T02:35:04.411014796Z stdout F 	at com.jcabi.ssh.AbstractSshShell.exec(AbstractSshShell.java:95) ~[jcabi-ssh-1.6.1.jar:na]
2023-03-09 10:35:04	2023-03-09T02:35:04.41101828Z stdout F 	at com.jcabi.ssh.Ssh.exec(Ssh.java:77) ~[jcabi-ssh-1.6.1.jar:na]
```

在代码中, 我们使用了`jcabi-ssh`来执行`ssh`命令.<br/>
整个创建`VNC`远程连接的事务需要执行四条`ssh`命令, 前三条命令都执行成功了, 但是最后一条命令执行失败了<br/>
报错信息如下<br/>

```log
java.net.SocketTimeoutException: Read timed out
java.io.IOException: com.jcraft.jsch.JSchException: Auth fail
```

### 2. 登录服务器并查看`sshd`日志

首先需要看下`sshd`的日志, 通过`journalctl`命令查看<br/>

```bash
sudo journalctl -t sshd
```

输出如下<br/>

```log
Mar 09 02:34:38 desktop-1 sshd[11758]: Accepted publickey for fastone from 10.0.109.90 port 49590 ssh2: RSA SHA256:
sqOIF4lpjrA0+1At5dDQRZgcwWEK+oO1Lwv9fad
Mar 09 02:34:38 desktop-1 sshd[11758]: pam_unix(sshd:session): session opened for user fastone by (uid=0)
Mar 09 02:34:41 desktop-1 sshd[11758]: pam_unix(sshd:session): session closed for user fastone
Mar 09 02:34:42 desktop-1 sshd[11766]: Accepted publickey for fastone from 10.0.109.90 port 57700 ssh2: RSA SHA256:
sqOIF4lpjrA0+1At5dDQRZgcwWEK+oO1Lwv9fad
Mar 09 02:34:42 desktop-1 sshd[11766]: pam_unix(sshd:session): session opened for user fastone by (uid=0)
Mar 09 02:34:46 desktop-1 sshd[11766]: pam_unix(sshd:session): session closed for user fastone
Mar 09 02:34:47 desktop-1 sshd[11778]: Accepted publickey for fastone from 10.0.109.90 port 57710 ssh2: RSA SHA256:
sqOIF4lpjrA0+1At5dDQRZgcwWEK+oO1Lwv9fad
Mar 09 02:34:47 desktop-1 sshd[11778]: pam_unix(sshd:session): session opened for user fastone by (uid=0)
Mar 09 02:34:54 desktop-1 sshd[11778]: pam_unix(sshd:session): session closed for user fastone
Mar 09 02:35:04 desktop-1 sshd[11875]: error: Received disconnect from 10.0.109.90 port 41620:3:
com.jcraft.jsch.JSchException: Auth fail [preauth]
Mar 09 02:35:04 desktop-1 sshd[11875]: Disconnected from authenticating user fastone 10.0.109.90 port 41620 [preauth]
```

ssh日志中前三次是正常的, 但是第四次就报错了, 从报错信息来看, 是`Auth fail`的问题.<br/>
从日志上看发现每次执行命令的时间都很长, 有时候会超过`10s`, 所以我猜测是`ssh`连接超时了.<br/>

### 3. 查看`nslcd`日志

根据上述的日志得出是`auth fail`的问题, 那么大概率跟用户认证有关<br/>
目前系统中使用的认证服务是`ldap`, 并通过`nslcd`服务来连接`ldap`并提供认证服务的.<br/>
根据经验判断可能是系统中的`nslcd`服务问题. 接下来需要查看其日志<br/>

```bash
sudo service nslcd status
```

输出如下<br/>

```log
● nslcd.service - LSB: LDAP connection daemon
Loaded: loaded (/etc/init.d/nslcd; generated)
Active: active (running) since Thu 2023-03-09 02:00:08 UTC; 58min ago
Docs: man:systemd-sysv-generator(8)
Process: 1360 ExecStart=/etc/init.d/nslcd start (code=exited, status=0/SUCCESS)
Tasks: 6 (limit: 4915)
CGroup: /system.slice/nslcd.service
└─1497 /usr/sbin/nslcd




Mar 09 02:53:36 desktop-1 nslcd[1497]: [de9570] <group/member="root"> ldap_result() failed: Can't contact LDAP server
Mar 09 02:53:51 desktop-1 nslcd[1497]: [39d9ef] <group/member="root"> ldap_result() failed: Can't contact LDAP server
Mar 09 02:53:51 desktop-1 nslcd[1497]: [2e5952] <passwd=9159> ldap_result() failed: Can't contact LDAP server
Mar 09 02:54:01 desktop-1 nslcd[1497]: [0d1fd6] <passwd=9159> ldap_result() failed: Can't contact LDAP server
Mar 09 02:54:57 desktop-1 nslcd[1497]: [bec5a1] <passwd=9159> ldap_result() failed: Can't contact LDAP server
Mar 09 02:54:57 desktop-1 nslcd[1497]: [44bbc8] <passwd=9159> ldap_result() failed: Can't contact LDAP server
Mar 09 02:55:34 desktop-1 nslcd[1497]: [f50bda] <passwd=9159> ldap_result() failed: Can't contact LDAP server
Mar 09 02:56:25 desktop-1 nslcd[1497]: [c5f72e] <group/member="fastone"> ldap_result() timed out
Mar 09 02:56:25 desktop-1 nslcd[1497]: [f644f7] <group/member="u18846424945"> ldap_result() timed out
Mar 09 02:56:25 desktop-1 nslcd[1497]: [4db6bf] <group/member="u18846424945"> ldap_result() timed out
```

从日志中可以看到, `nslcd`服务访问`ldap`超时了

### 4. 启用`nscd`服务从而`workaround`此问题

启用`nscd`服务, 从而`workaround`此问题, `nscd`服务会缓存`nslcd`服务的结果, 从而提升速度.<br/>
但是这个方案只是`workaround`而已, 后续需要运维同学来解决`ldap`的连接问题<br/>

```bash
sudo service nscd start
```

启用`nscd`服务后, 确认下速度是否有提升

```bash
time sudo getent passwd -s ldap
```

```log
real0m1.326s
user0m0.023s
sys0m0.023s
```

## 备注

### 如何避免类似问题

#### 服务侧

对于认证服务侧需要确保服务的稳定性

#### 客户端侧

对于认证系统的客户端侧, 需要确保客户端的稳定, 例如增加缓存机制, 从而提升速度

## 参考

- [Multiple SSH connections to the same system - is it possible?](https://superuser.com/questions/1032251/multiple-ssh-connections-to-the-same-system-is-it-possible)
- [How to check sshd log?](https://serverfault.com/questions/130482/how-to-check-sshd-log)