---
authors: [ orange ]
tags: [ssh]
---
# 跳过`SSH`连接时的确认提示

平时在写一些脚本的时候, 需要频繁地连接在云上新创建的机器.<br/>
在ssh中第一次连接时, 会输出如下提示.<br/>

```log
RSA key fingerprint is 96:a9:23:5c:cc:d1:0a:d4:70:22:93:e9:9e:1e:74:2f.
Are you sure you want to continue connecting (yes/no)? yes
```

这样会导致每次都需要输入yes来确认是否连接.<br/>
因为脚本不可以交互, 会导致脚本卡在这一步无法执行后续的操作.<br/>
因此需要跳过这一步的确认.<br/>

<!--truncate-->

## 解决方案

在ssh连接时, 通过`-o StrictHostKeyChecking=no`参数来跳过确认.<br/>

```bash
ssh -o StrictHostKeyChecking=no -i <your-key> <username>@<hostname>
```

## 备注

在`man ssh`中对于`StrictHostKeyChecking`参数的描述如下:

```text
The StrictHostKeyChecking option can be used to control logins to machines whose host key is not known or has changed.
```

## 参考

- [how to avoid ssh asking permission?](https://unix.stackexchange.com/questions/33271/how-to-avoid-ssh-asking-permission)
- [How to accept 'yes' from shell script "Are you sure you want to continue connecting (yes/no)?" using ssh. Without using StrictHostKeyChecking=no](https://stackoverflow.com/questions/64449495/how-to-accept-yes-from-shell-script-are-you-sure-you-want-to-continue-connect)