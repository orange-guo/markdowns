---
authors: [ orange ]
tags: [ problem-solving, docker, network ]
---

# Docker网段遮挡

172.17.0.0/16默认为docker的网段
尽量避免网段跟docker网段冲突
例如设置为173.0.0.0/16

```shell
ip route get 172.17.0.13
```