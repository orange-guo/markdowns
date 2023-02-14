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

## Transport endpoint is not connected

- [Transport endpoint is not connected](https://stackoverflow.com/questions/24966676/transport-endpoint-is-not-connected)