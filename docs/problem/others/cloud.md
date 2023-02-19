# Cloud

## AWS

- AWS无法连接到实例

> 检查`internetgateway`, 并attach到vpc， 并且修改 route table
> 0.0.0.0/0 to igw

## Oracle

- centos镜像用户名为opc
- 最低磁盘大小50GB
- 不能超过10个tag
- 开启windows机器会做安全检查(大概十几分钟)
- 镜像导出后机型兼容配置就没有了(需要重新导入)

## AZURE

### 资源组位于订阅下

只能使用同一个资源组内的资源
并且region得是同一个例如`chinanorth2`

### 垃圾清理

1. 停止deploy
2. 删除/fastone/services/deploy
3. 删除deploy数据库
4. 删除相关VirtualMachines
5. 删除相关VirtualNetworkPeerings
6. 删除相关VirtualNetwork

### subnet最小网络位为28

### 导入disk

> 从镜像启动实例<br/>
> 进入实例并执行命令`sudo /usr/sbin/waagent -force -deprovision && export HISTSIZE=0 && sync`(下次使用此实例做出的镜像开机可以重新注入密钥,
> 但老的密钥不生效)
> 启动完成之后关机<br/>
> 进入对应开启的实例详情页面找到对应的Disk<br/>
> 点击`Disk Export`生成对应的分享链接并下载<br/>
> 使用azcopy上传到对应的blob<br/>

- https://learn.microsoft.com/en-us/answers/questions/776005/how-to-download-azure-vm-imagevhd.html
- https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/agent-linux
