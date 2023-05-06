---
authors: [ xiangcheng.kuo ]
tags: [ jsch, openssh, sshd, ssh-keygen, rsa ]
---

# 通过创建`rsa`格式的私钥以及服务端启用`rsa`认证解决`jsch`连接`ssh`失败的问题

服务建立`ssh`连接失败, 问题定位为`jsch`不支持`openssh`格式的私钥.<br/>
在`OpenSSH 7.8`及之后的版本, `ssh-keygen`命令默认生成的私钥格式为`openssh`.<br/>
该格式的头部为`-----BEGIN OPENSSH PRIVATE KEY-----`.<br/>

在将私钥转换为`rsa`格式后, 发现服务端还需要启用`rsa`认证, 在启用`rsa`认证后问题解决.<br/>

下面将详细介绍如何生成`rsa`格式的私钥以及服务端启用`rsa`认证.

<!--truncate-->

## 生成rsa格式的私钥

服务建立`ssh`链接失败, 日志如下

```log
Caused by: com.jcraft.jsch.JSchException: invalid privatekey: [B@e4487af
    at com.jcraft.jsch.KeyPair.load(KeyPair.java:664)
    at com.jcraft.jsch.KeyPair.load(KeyPair.java:561)
    at com.jcraft.jsch.IdentityFile.newInstance(IdentityFile.java:40)
    at com.jcraft.jsch.JSch.addIdentity(JSch.java:407)
    at com.jcraft.jsch.JSch.addIdentity(JSch.java:367)
```

在查阅了相关问题后, 发现`jsch`不支持`openssh`格式的私钥, 需要将私钥转换为`rsa`格式.<br/>

通过以下命令生成`rsa`格式的私钥

```bash
ssh-keygen -t rsa -b 4096 -m PEM
```

后续会提示输入私钥的文件名, 以及私钥的密码, 一般直接回车即可.

## 服务端启用rsa认证

:::note
`OpenSSH 8.8`及之后的版本默认禁用rsa认证, 需要手动启用, 可以通过`ssh -V`查看`sshd`版本
:::

在生成了`rsa`格式的私钥后, 通过`ssh`连接服务端, 发现连接失败, 查看`sshd`日志发现如下错误

```bash
journalctl -t sshd -f
```

该命令输出如下内容

```log
May 05 18:05:00 orange sshd[289365]: userauth_pubkey: signature algorithm ssh-rsa not in PubkeyAcceptedAlgorithms [preauth]
May 05 18:05:00 orange sshd[289365]: error: Received disconnect from 127.0.0.1 port 55904:3: com.jcraft.jsch.JSchException: Auth fail [preauth]
May 05 18:05:00 orange sshd[289365]: Disconnected from authenticating user fastone 127.0.0.1 port 55904 [preauth]
```

上述日志中的`signature algorithm ssh-rsa not in PubkeyAcceptedAlgorithms [preauth]`说明`sshd`不支持`ssh-rsa`算法.<br/>

为了解决这个问题, 我们需要编辑`/etc/ssh/sshd_config`并增加以下内容

```properties title="/etc/ssh/sshd_config"
PubkeyAcceptedAlgorithms +ssh-rsa
```

编辑完成后重启`sshd`服务

```bash
sudo systemctl restart sshd
```

## 参考资料

- ["Invalid privatekey" when using JSch](https://stackoverflow.com/questions/53134212/invalid-privatekey-when-using-jsch)
- [support for openssh default key format in jsch fork](https://www.matez.de/index.php/2020/10/16/support-for-openssh-default-key-format-in-jsch-fork/#:~:text=If%20you%20are%20a%20user,them%20to%20old%20pem%20format.&text=Please%20upgrade%20to%20version%200.1,and%20give%20it%20a%20try.)
- [SSH server gives "userauth_pubkey: key type ssh-rsa not in PubkeyAcceptedAlgorithms [preauth]" when connecting with Putty](https://unix.stackexchange.com/questions/721606/ssh-server-gives-userauth-pubkey-key-type-ssh-rsa-not-in-pubkeyacceptedalgorit)
- [第三方基于jsch fork出来的库](https://github.com/mwiede/jsch)
- [Openssh Private Key to RSA Private Key](https://stackoverflow.com/questions/54994641/openssh-private-key-to-rsa-private-key)
- [SSH keys](https://wiki.archlinux.org/title/SSH_keys)