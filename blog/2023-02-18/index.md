---
authors: [xiangcheng.kuo]
tags: [aliyundrive, rclone, docker]
---

# 使用`aliyundrive-webdav`搭配`rclone`实现以本地文件系统的方式操作阿里云盘中的文件

`aliyun-webdav`是一个开源的工具, 可以根据配置的阿里云盘帐号信息对外提供`WebDAV`服务.<br/>
`rclone`是一个开源的工具, 可以将各种网络文件协议的文件挂载到本地文件系统并通过本地文件系统的方式进行文件的操作.<br/>
其支持的网络文件协议如下

- S3
- WebDAV
- FTP
- SFTP
- ...

以下将介绍如何使用`aliyun-webdav`搭配`rclone`实现本地文件同步到阿里云盘.
本案例是基于`ubuntu`实现的, 由于该解决方案使用了`docker`, 因此理论上可以在任何支持`docker`的系统中实现.

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

### 获取阿里云盘中的`refresh_token`

- 登录[阿里云盘](https://www.aliyundrive.com/drive)
- 打开浏览器的`开发者工具`(`F12`快捷键), 切换到`Console`选项卡, 输入以下命令, 并按下回车

```js
JSON.parse(localStorage.token).refresh_token
```

- 复制输出的`refresh_token`值, 作为后续配置, 注意不要包含引号

### 新增`docker-compose.yml`文件

以下内容作为参考并填入需要的配置

- `<填写上一个步骤获取到的refresh_token>`

```yaml title="docker-compose.yml"
version: "2"
services:
  aliyundrive:
    image: messense/aliyundrive-webdav:1.11.0
    container_name: aliyundrive
    hostname: aliyundrive
    ports:
      - "8080:8080"
    restart: always
    environment:
      REFRESH_TOKEN: <填写上一个步骤获取到的refresh_token>

  rclone:
    restart: always
    image: rclone/rclone
    container_name: rclone
    hostname: rclone
    user: "1000:1000"
    volumes:
      - "./rclone.conf:/config/rclone/rclone.conf"
      - "./Aliyundrive:/Aliyundrive:rshared"
      - "/etc/passwd:/etc/passwd:ro"
      - "/etc/group:/etc/group:ro"
    devices:
      - "/dev/fuse:/dev/fuse"
    cap_add:
      - SYS_ADMIN
    security_opt:
      - "apparmor:unconfined"
    command:
      - "mount"
      - "--dir-cache-time=1h"
      - "--buffer-size=64M"
      - "--vfs-cache-mode=full"
      - "--transfers=16"
      - "--allow-non-empty"
      - "--no-update-modtime"
      - "aliyundrive:"
      - "/Aliyundrive"

networks:
  network:
    driver: bridge
    ipam:
      driver: default
```

### 新增`rclone.conf`文件

```ini title="rclone.conf"
[aliyundrive]
type = webdav
url = http://aliyundrive:8080
vendor = nextcloud
```

### 新增脚本`start.sh`, `stop.sh`

```bash title="start.sh"
mkdir -p ./Aliyundrive
docker-compose up -d
```

```bash title="stop.sh"
umount ./Aliyundrive
docker-compose kill
docker-compose rm -f
```

## 备注

- [aliyundrive-webdav](https://github.com/messense/aliyundrive-webdav)
- [rclone](https://rclone.org/)
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)
- [阿里云盘](https://www.aliyundrive.com/drive)