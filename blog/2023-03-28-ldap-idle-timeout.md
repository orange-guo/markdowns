---
authors: [ orange ]
tags: [troubleshooting, ldap, nslcd]
---

# 通过延长`olcIdleTimeout`以减少`nslcd`中的`Can't contact LDAP server`日志报错

客户用例执行失败, 其猜测可能是`nslcd`服务中的`Can't contact LDAP server`相关报错导致其生产用例执行失败.<br/>

`nslcd`日志如下:

```log
[fastone@layout01 ~]$ sudo journalctl -t nslcd| tail --line 20
Mar 28 11:58:24 layout01 nslcd[25607]: [debc9e] <group="fsadmin"> connected to LDAP server ldap://172.20.3.126:389
Mar 28 11:59:17 layout01 nslcd[25607]: [fe8aa7] <passwd=2032> ldap_search_ext() failed: Can't contact LDAP server: Broken pipe
Mar 28 11:59:17 layout01 nslcd[25607]: [fe8aa7] <passwd=2032> no available LDAP server found, sleeping 1 seconds
Mar 28 11:59:18 layout01 nslcd[25607]: [fe8aa7] <passwd=2032> connected to LDAP server ldap://172.20.3.126:389
Mar 28 12:00:01 layout01 nslcd[25607]: [272b88] <group/member="root"> ldap_result() failed: Can't contact LDAP server
Mar 28 12:00:36 layout01 nslcd[25607]: [66b17f] <group=2001> ldap_search_ext() failed: Can't contact LDAP server: Broken pipe
Mar 28 12:00:36 layout01 nslcd[25607]: [66b17f] <group=2001> no available LDAP server found, sleeping 1 seconds
Mar 28 12:00:37 layout01 nslcd[25607]: [66b17f] <group=2001> connected to LDAP server ldap://172.20.3.126:389
Mar 28 12:00:38 layout01 nslcd[25607]: [a15030] <passwd=2004> ldap_search_ext() failed: Can't contact LDAP server: Broken pipe
Mar 28 12:00:38 layout01 nslcd[25607]: [a15030] <passwd=2004> no available LDAP server found, sleeping 1 seconds
Mar 28 12:00:39 layout01 nslcd[25607]: [a15030] <passwd=2004> connected to LDAP server ldap://172.20.3.126:389
Mar 28 12:00:39 layout01 nslcd[25607]: [9b7b93] <passwd=2001> ldap_result() failed: Can't contact LDAP server
Mar 28 12:00:54 layout01 nslcd[25607]: [97bb68] <passwd=2011> ldap_result() failed: Can't contact LDAP server
Mar 28 12:01:36 layout01 nslcd[25607]: [005d16] <group=2011> ldap_result() failed: Can't contact LDAP server
Mar 28 12:03:39 layout01 nslcd[25607]: [b9081a] <group="fsadmin"> ldap_search_ext() failed: Can't contact LDAP server: Broken pipe
Mar 28 12:03:39 layout01 nslcd[25607]: [b9081a] <group="fsadmin"> no available LDAP server found, sleeping 1 seconds
Mar 28 12:03:40 layout01 nslcd[25607]: [b9081a] <group="fsadmin"> connected to LDAP server ldap://172.20.3.126:389
Mar 28 12:03:47 layout01 nslcd[25607]: [0f614b] <group/member="root"> ldap_search_ext() failed: Can't contact LDAP server: Broken pipe
Mar 28 12:03:47 layout01 nslcd[25607]: [0f614b] <group/member="root"> no available LDAP server found, sleeping 1 seconds
Mar 28 12:03:48 layout01 nslcd[25607]: [0f614b] <group/member="root"> connected to LDAP server ldap://172.20.3.126:389
```

从日志中可以发现`nslcd`服务经常出现`Can't contact LDAP server`.<br/>

## 问题原因

### 触发了`ldap-server`的连接超时

这个问题的原因是因为触发了`ldap-server`的超时时间, 从而导致`nslcd`服务中的`Can't contact LDAP server`相关报错.<br/>
`ldap-server`的连接超时时间我们设置的默认为`30s`为了确保连接不会被一直占用从而导致服务端负载过高.<br/>
但是频繁出现这个错误会让客户认为是我们的`ldap-server`出现问题导致其用例失败, 我们需要延长超时时间来避免客户的误解.<br/>

## 解决方案

为了解决这个问题, 我们需要修改`ldap-server`的超时时间.<br/>
`ldap-server`中的超时时间是通过`olcIdleTimeout`来设置的.<br/>
通过修改此值可以延长`ldap-server`的连接超时时间.<br/>
需要注意的是, `olcIdleTimeout`的单位是秒.<br/>
另外的一个注意事项是修改此值需要通过`ldap`中的`config`数据库的`admin`用户来修改.<br/>
修改完成之后, 我们需要重启`ldap-server`服务.<br/>

### 创建`change-timeout.ldif`文件

先创建如下文件, 为了方便, 我们将超时时间设置为`12h`.

```ldif title="change-timeout.ldif"
dn: cn=config
changetype: modify
replace: olcIdleTimeout
olcIdleTimeout: 43200
```

### 通过`ldapmodify`命令修改超时时间

我们需要连接`ldap-server`并执行`ldapmodify`命令来修改`ldap`连接超时时间.<br/>
然后执行如下命令

需要注意的是, 执行`ldapmodify`命令`bind`的用户为`cn=admin,cn=config`用户, 该用户是`config`数据库的`admin`用户.<br/>

```bash
ldapmodify -x -D cn=admin,cn=config -w <password-of-config-admin> -f change-timeout.ldif
```

该命令将会输出如下内容

```log
modifying entry "cn=config"
```

当看到上面的输出时, 说明超时时间已经修改成功.<br/>

### 确认超时时间是否修改成功

执行如下命令

```bash
ldapsearch -x -D cn=admin,cn=config -w <password-of-config-admin> -b cn=config|grep olcIdleTimeout
```

该命令将会输出如下内容

```log
olcIdleTimeout: 43200
olcAttributeTypes: ( OLcfgGlAt:18 NAME 'olcIdleTimeout' SYNTAX OMsInteger SING
 PendingAuth $ olcDisallows $ olcGentleHUP $ olcIdleTimeout $ olcIndexSubstrIf
```

通过输出的内容可以看到`olcIdleTimeout`的值已经被修改为`43200`.<br/>

### 重启`ldap-server`

为了确保配置生效, 我们需要重启`ldap`服务.<br/>
不同的`ldap`服务的重启方式不同, 这里以`ldap`容器为例.<br/>

```bash
docker restart <ldap-container>
```

### 验证配置是否生效

在安装有`nslcd`服务的机器上执行如下命令.<br/>
两个命令中间间隔`35s`. 如果配置没生效那么30s后会再次出现`Can't contact LDAP server`的报错.<br/>
因为我们一开始默认的超时时间是`30s`, 所以我们需要间隔`35s`来验证配置是否生效.<br/>

```bash
getent passwd -s ldap && sleep 35s && getent passwd -s ldap
```

执行期间我们需要观察`nslcd`服务的日志.<br/>
最好开两个终端, 一个执行命令, 一个查看日志. 这样可以更加直观的看到日志.<br/>

```bash
journalctl -u nslcd -f
```

如果配置生效那么我们将不会看到`Can't contact LDAP server`的报错.<br/>

## 备注

### 默认超时时间的配置文件

```ldif title="change-timeout.ldif"
dn: cn=config
changetype: modify
replace: olcIdleTimeout
olcIdleTimeout: 30
```

### 查看系统中的`nslcd`服务的配置文件

```bash
cat /etc/nslcd.conf
```

### 查看`ldap-server`的`olcRoot`用户的信息

`olcRoot`是`ldap-server`的超级管理员, 通过该用户可以对`ldap-server`进行管理.<br/>

执行如下命令查看`ldap-server`的`olcRoot`用户的信息.<br/>

```bash
cd /etc/ldap/slapd.d/cn=config && grep -r 'olcRoot' *
```

该命令将会输出如下参考内容

```log
olcDatabase={0}config.ldif:olcRootDN: cn=admin,cn=config
olcDatabase={0}config.ldif:olcRootPW:: xxxx
olcDatabase={1}mdb.ldif:olcRootDN: cn=admin,dc=demo,dc=com
olcDatabase={1}mdb.ldif:olcRootPW:: xxxx
```

通过上述输出可以看到有两个`olcRoot`用户, 一个是`cn=admin,cn=config`, 另一个是`cn=admin,dc=demo,dc=com`.<br/>
有这两个用户的原因是因为其是不同`olcDatabase`的`olcRoot`用户.<br/>
`olcDatabase={0}config.ldif`是`ldap-server`的配置数据库. 其主要存放了`ldap-server`的配置信息.<br/>
`olcDatabase={1}mdb.ldif`是`ldap-server`的数据数据库. 其主要存放了`ldap-server`的数据信息, 该数据是给我们使用的.<br/>

### 确保`fd`数量可用

因为上面修改了`ldap-server`的超时时间, 所以我们需要确保`ldap-server`的`fd`数量足够.<br/>

## 参考资料

- [Configuring slapd](https://www.openldap.org/devel/admin/slapdconf2.html)
- [ldapmodify(1) - Linux man page](https://linux.die.net/man/1/ldapmodify)