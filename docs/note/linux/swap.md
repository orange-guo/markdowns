# swapfile

## 用法

### 开启

```bash
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
sudo swapon --show
sudo free -h
```

### 关闭

```bash
sudo swapoff /swapfile
```

## 参考

- [Create a Linux Swap File](https://linuxize.com/post/create-a-linux-swap-file/)