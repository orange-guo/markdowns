# Image-Builder

## SELINUX没有开启(cc-fs-head-centos)

> Oracle基础镜像没有关闭SELINUX, 需要手动关闭
> Centos默认开启SELINUX, UBUNTU默认关闭

## 没有为Fsadmin组配置sudoer(cc-fs-head)

> 需要添加feature将fsadmin组加入到sudoers里
> /etc/sudoers.d/fastonetech-init-users
> # User rules for fastone
> fastone ALL=(ALL) NOPASSWD:ALL
> %fsadmin ALL=(ALL) NOPASSWD:ALL