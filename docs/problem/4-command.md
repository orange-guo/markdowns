# 常用命令

## pstree

```bash
pstree -p -s <pid> -T
```

## strace

```bash
strace -p <pid>
```

## mount

```bash
NET USE Z: \\68.79.39.232\share "admin" /USER:"fastone"
```

## lsof

```bash
# grep pipe
lsof|grep FIFO
```

## ldd

```
ldd --version
```

## ssh-keygen

```bash
echo "y" | ssh-keygen -f /tmp/id_rsa -N "" # generate new key
ssh-keygen -p -N "" -m pem -f /tmp/id_rsa # Openssh Private Key to RSA Private Key
```

- https://stackoverflow.com/questions/54994641/openssh-private-key-to-rsa-private-key
- https://superuser.com/questions/1720991/differences-between-begin-rsa-private-key-and-begin-openssh-private-key
- https://stackoverflow.com/questions/59524727/how-to-overwrite-existing-ssh-key-file-using-ssh-keygen-and-powershell-without-t
- https://docs.aws.amazon.com/zh_cn/cloudhsm/classic/userguide/generate_ssh_key.html