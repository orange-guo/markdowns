---
authors: [ xiangcheng.kuo ]
tags: [ aliyundrive, rclone, docker, fuse ]
---

# 使用aliyundrive-webdav和rclone实现阿里云盘文件挂载到本地

`aliyun-webdav`是一个开源的工具, 可以为阿里云盘提供`WebDAV`服务.<br/>
`rclone`是一个开源的工具, 可以将本地文件同步到各种云存储服务中, 包括但不限于

- S3
- WebDAV
- FTP
- SFTP
- ...

以下将介绍如何使用`aliyun-webdav`搭配`rclone`实现将本地文件同步到阿里云盘.<br/>
本案例是基于`ubuntu`实现的, 方案使用到了`docker`因此理论上可以在任何支持`docker`的系统中实现.

<!--truncate-->

## 解决方案

### 要求

系统中必须存在以下工具

- docker
- docker-compose

另外确保当前用户有`docker`权限, 如果没有, 可以通过以下命令添加

```bash
sudo usermod -aG docker $USER
sudo newgrp docker
```

### 获取阿里云盘的`refresh_token`

新版本的阿里云盘不再支持在浏览器中直接获取`refresh_token`, 所以需要访问该项目对应的开发者提供的获取`refresh_token`的页面,
并在该页面中获取`refresh_token`

进入[aliyundrive-webdav refresh token 获取](https://messense-aliyundrive-webdav-backendrefresh-token-ucs0wn.streamlit.app/)
并根据页面提示获取`refresh_token`

### 配置`aliyundrive-webdav`

下载并解压[aliyundrive.zip](/blog/2023-02-18-aliyundrive.zip)`aliyundrive-webdav`, 这个压缩包中包含了相关服务的配置以及启动脚本.<br/>
解压后的文件夹中存在`docker-compose.yml`文件, 编辑该文件.<br/>
将`REFRESH_TOKEN: "<REFRESH_TOKEN>"`中的`<REFRESH_TOKEN>`
改为上一步获取到的`refresh_token`.<br/>

### 启动

在刚才的目录中执行以下命令

```bash
./start.sh
```

## 参考

- [aliyundrive-webdav](https://github.com/messense/aliyundrive-webdav)
- [rclone](https://rclone.org/)
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)
- [阿里云盘](https://www.aliyundrive.com/drive)