# SSH

## ssh-keygen

```bash
echo "y" | ssh-keygen -f /tmp/id_rsa -N "" # generate new key
ssh-keygen -p -N "" -m pem -f /tmp/id_rsa # Openssh Private Key to RSA Private Key
```

- https://stackoverflow.com/questions/54994641/openssh-private-key-to-rsa-private-key
- https://superuser.com/questions/1720991/differences-between-begin-rsa-private-key-and-begin-openssh-private-key
- https://stackoverflow.com/questions/59524727/how-to-overwrite-existing-ssh-key-file-using-ssh-keygen-and-powershell-without-t
- https://docs.aws.amazon.com/zh_cn/cloudhsm/classic/userguide/generate_ssh_key.html

## avoid asking permission

```log
RSA key fingerprint is 96:a9:23:5c:cc:d1:0a:d4:70:22:93:e9:9e:1e:74:2f.
Are you sure you want to continue connecting (yes/no)? yes
```

Solution

```bash
ssh -o StrictHostKeyChecking=no
```

- [how to avoid ssh asking permission?](https://unix.stackexchange.com/questions/33271/how-to-avoid-ssh-asking-permission)
- [How to accept 'yes' from shell script "Are you sure you want to continue connecting (yes/no)?" using ssh. Without using StrictHostKeyChecking=no](https://stackoverflow.com/questions/64449495/how-to-accept-yes-from-shell-script-are-you-sure-you-want-to-continue-connect)

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