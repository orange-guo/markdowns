---
authors: [ orange ]
tags: [ problem-solving, linux, ubuntu, network ]
---

# ubuntu网卡显示有线未托管

原因是因为Ubuntu没有管理该系统中的网卡

## 解决方案

- 修改/etc/network/interfaces 注释掉`iface ens33 inet dhcp`

```
auto lo
iface lo inet loopback

auto ens33
# iface ens33 inet dhcp
# dns-nameservers 8.8.8.8
```

- `sudo service network-manager restart`

## Reference:

- https://jingyan.baidu.com/article/0f5fb09915c52a6d8334ea0d.html