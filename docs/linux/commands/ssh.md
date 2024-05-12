# ssh

## ssh-keygen

```bash
echo "y" | ssh-keygen -f /tmp/id_rsa -N "" # generate new key
ssh-keygen -p -N "" -m pem -f /tmp/id_rsa # Openssh Private Key to RSA Private Key
```

- https://stackoverflow.com/questions/54994641/openssh-private-key-to-rsa-private-key
- https://superuser.com/questions/1720991/differences-between-begin-rsa-private-key-and-begin-openssh-private-key
- https://stackoverflow.com/questions/59524727/how-to-overwrite-existing-ssh-key-file-using-ssh-keygen-and-powershell-without-t
- https://docs.aws.amazon.com/zh_cn/cloudhsm/classic/userguide/generate_ssh_key.html

## no matching host key type found. Their offer: ssh-rsa,ssh-dss

```log
Unable to negotiate with 52.131.77.121 port 22: no matching host key type found. Their offer: ssh-rsa,ssh-dss
```

solution

```bash
ssh -oHostKeyAlgorithms=+ssh-dss
# The latest OpenSSH version disables RSA, if you run into the error now, you should use +ssh-rsa instead of +ssh-dss
ssh -oHostKeyAlgorithms=+ssh-rsa

```

- [SSH returns: no matching host key type found. Their offer: ssh-dss](https://askubuntu.com/questions/836048/ssh-returns-no-matching-host-key-type-found-their-offer-ssh-dss)

## change directory

```bash
ssh -t user@host "cd /path/to/dir && command"
```

> -t Force pseudo-terminal allocation.<br/>
> This can be used to execute arbitrary screen-based programs on a remote machine, <br/>
> which can be very useful, e.g. when implementing menu services.

- [How can I ssh directly to a particular directory?](https://stackoverflow.com/questions/626533/how-can-i-ssh-directly-to-a-particular-directory)

## How to Keep Alive SSH Sessions

- [How to Keep Alive SSH Sessions](https://patrickmn.com/aside/how-to-keep-alive-ssh-sessions/)