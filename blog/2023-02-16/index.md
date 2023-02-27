---
authors: [xiangcheng.kuo]
tags: [linux]
---

# 在`linux`中通过启用`swapfile`来增加虚拟内存并提高性能

`swapfile`是`linux`中的一种虚拟内存, 与`windows`中的`pagefile`类似.<br/>
`swapfile`的作用是当`RAM`不足时, 将一部分`RAM`中的数据写入到`swapfile`中, 从而释放出`RAM`的空间.<br/>
例如, 平时使用浏览器时会开启页面, 这些页面通常会占用一定的`RAM`空间.<br/>
如果开启了太多的页面, 会导致`RAM`不足, 这时就需要将一部分页面的数据写入到`swapfile`中, 从而释放出`RAM`的空间<br/>

<!--truncate-->

## 解决方案

### 启用`swapfile`, 大小为`4G`

```bash
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
sudo swapon --show
sudo free -h
```

### 禁用`swapfile`

```bash
sudo swapoff /swapfile
```

## 参考

- [Create a Linux Swap File](https://linuxize.com/post/create-a-linux-swap-file/)