# process

## 用例

### pstree

```bash
pstree -p -s <pid> -T
```

### strace

```bash
strace -p <pid>
```

### lsof

```bash
# grep pipe
lsof|grep FIFO
```