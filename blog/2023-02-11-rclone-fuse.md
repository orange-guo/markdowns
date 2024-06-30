---
authors: [ orange ]
tags: [rclone, docker, fuse]
---

# 在`Docker`中使用`Rclone`并将对应的`fuse`挂载到宿主机

在`Docker`中使用`Rclone`时需要将`fuse`挂载到宿主机.<br/>
这样可以在宿主机上使用`Rclone`挂载的文件夹以及可以对`fuse`进行操作<br/>

<!--truncate-->

## 解决方案

```bash
# perform mount inside Docker container, expose result to host
mkdir -p ~/data/mount
docker run --rm \
    --volume ~/.config/rclone:/config/rclone \
    --volume ~/data:/data:shared \
    --user $(id -u):$(id -g) \
    --volume /etc/passwd:/etc/passwd:ro --volume /etc/group:/etc/group:ro \
    --device /dev/fuse --cap-add SYS_ADMIN --security-opt apparmor:unconfined \
    rclone/rclone \
    mount dropbox:Photos /data/mount &
ls ~/data/mount
kill %1
```

## 参考

- [Rclone docker | Explained](https://bobcares.com/blog/rclone-docker/)


