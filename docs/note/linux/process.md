# process

## 通过`pstree`命令查看进程树

```bash
pstree -p -s <pid> -T
```

## 通过`strace`命令查看进行的系统调用

```bash
strace -p <pid>
```

## 通过`lsof`命令查看管道

```bash
# grep pipe
lsof|grep FIFO
```

## 通过`lsof`命令查看文件句柄

```bash
lsof -p <pid>
```

- [lsof -p PID vs lsof | grep PID](https://unix.stackexchange.com/questions/252134/lsof-p-pid-vs-lsof-grep-pid)