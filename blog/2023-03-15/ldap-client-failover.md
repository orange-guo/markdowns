---
authors: [xiangcheng.kuo]
tags: [problem-solving, java, ldap, failover, spring]
---

# 通过增加`timeout-control`以解决当`tcp`连接一直处于`SYN_SENT`状态导致`java`中的`ldap-client`的`failover`不工作的问题

今天遇到一个问题是当测试模拟`ldap`的服务端主节点挂掉的时候并在页面点击登录, 后端一直未作出响应.<br/>
这个问题的原因是因为代码中的`ldap-client`的`failover`未生效, 通过排查发现`ldap-client`一直在连接`ldap`的主节点,
并且`tcp`连接一直处于`SYN_SENT`状态.<br/>
由于`ldap-client`没有默认情况下没有控制超时, 导致代码一直堵塞, 从而导致`failover`不工作.<br/>
下面将开始介绍具体细节以及解决方案.<br/>

<!--truncate-->

## 排查过程

### 确认服务配置的`ldap`地址有那些

执行`docker inspect`命令, 确认服务配置的`ldap`地址

```log
sudo docker inspect fastone-api |grep 'spring.ldap.urls'
```

输出如下

```log
                "spring.ldap.urls=ldap://10.0.3.16:389,ldap://10.0.3.3:389",
```

可以看到配置了两个`ldap`地址分别为

- ldap://10.0.3.16:389
- ldap://10.0.3.3:389

### 确认服务的进程ID

执行`ps`命令, 确认服务的进程ID

```bash
ps -ef |grep FastoneApplication
```

命令输出如下

```log
ubuntu   22663 14459  0 16:52 pts/5    00:00:00 grep --color=auto FastoneApplication
root     31320 31246  1 14:23 ?        00:02:39 java -cp @/app/jib-classpath-file com.fastonetech.fastone.FastoneApplication
```

可以看到进程ID为`31320`, 接下来通过`lsof`命令查看`31320`进程的`tcp`连接状态<br/>

### 确认服务进程的`tcp`连接状态

通过`lsof`查看`tcp`连接状态

```bash
sudo lsof -p 31320 |grep '10.0.3.16'
```

命令输出如下

```log
java    31320 root  506u     IPv6            5728853       0t0     TCP fastone:37408->10.0.3.16:ldap (SYN_SENT)
```

可以看到服务进程的`tcp`连接状态一直处于`SYN_SENT`状态.<br/>

> `SYN_SENT`状态的连接, 说明客户端已经发送了`SYN`包, 但是没有收到`SYN/ACK`包, 此时会处于`SYN_SENT`状态<br/>

## Workaround

由于这个问题会`blocking`测试进度所以需要先给出一个`workaround`来解决这个问题.<br/>
目前的解决方案是通过`iptables`限制`tcp`连接, 使其直接`Connection refused`. 这样可以确保测试能够继续进行<br/>

### 通过`iptables`新增`OUTPUT`规则使`tcp`连接直接失败

- 新增OUTPUT规则

> 注意`target`应该为`REJECT`而不是`DROP`.<br/>
> 这是因为`DROP`对于`tcp`连接来说, 会直接丢弃数据包.<br/>
> 所以需要使用`REJECT`来拒绝连接, 并且需要指定`--reject-with tcp-reset`来拒绝连接.<br/>
> 这样客户端会知道连接被拒绝了而不是一直处于`SYN_SENT`状态.<br/>

```bash
sudo iptables -A OUTPUT -p tcp -d 10.0.3.16 --dport 389 -j REJECT --reject-with tcp-reset
```

- 查看规则列表

```bash
sudo iptables -L OUTPUT -v -n
```

输出如下

```log
Chain OUTPUT (policy ACCEPT 301 packets, 95101 bytes)
pkts bytes target     prot opt in     out     source               destination         
0     0 REJECT     tcp  --  *      *       0.0.0.0/0            10.0.3.16            tcp dpt:389 reject-with tcp-reset
```

可以看到, 新增了一条`REJECT`规则<br/>

- 测试规则是否生效

```bash
telnet 10.0.3.16 389
```

输出如下

```log
Trying 10.0.3.16...
telnet: Unable to connect to remote host: Connection refused
```

可以看到连接被拒绝了, 说明规则生效了<br/>

### 删除规则

当修复代码后, 需要删除规则, 以便测试继续进行<br/>

- 删除规则

```bash
sudo iptables -D OUTPUT -p tcp -d 10.0.3.16 --dport 389 -j REJECT --reject-with tcp-reset
```

- 查看规则列表

```bash
sudo iptables -L OUTPUT -v -n
```

输出如下

```log
Chain OUTPUT (policy ACCEPT 1922 packets, 947K bytes)
 pkts bytes target     prot opt in     out     source               destination    
```

- 确认连接状态恢复如初

```bash
telnet 10.0.3.16 389
```

输出如下

```log
Trying 10.0.3.16...
^C
```

可以看到连接状态恢复如初, 客户端一直处于`SYN_SENT`状态<br/>

## 问题原因

根据上面的分析, 问题的原因`TCP`连接状态一直处于`SYN_SENT`状态导致`ldap`的`failover`未生效<br/>

### 偏离设计预期

这里跟我一开始设计有偏差, 因为我一开始的设想的预期应该是直接`Connection refused`, 类似如下行为

#### 非堵塞

```bash
telnet localhost 389
```

当执行上述命令时, 会直接报错

```log
Trying 127.0.0.1...
telnet: Unable to connect to remote host: Connection refused
```

服务端会直接拒绝连接, 但是实际上并没有这样的行为, 服务端一直处于`SYN_SENT`状态, 也就是说服务端一直在尝试连接<br/>

#### 堵塞

类似如下行为

```bash
telnet 10.0.3.16 389
```

输出如下

```log
Trying 10.0.3.16...
^C
```

可以看到一直在尝试连接, 但是并没有超时, 也就是说一直在尝试连接<br/>

### `ldap-client`的`timeout-control`未生效

另外一个问题是`tpc`一直处于`SYN_SENT`状态理论来说应该触发`timeout-control`, 但是实际上并没有触发<br/>

接下来我们需要看一下`java-ldap`中是如何实现`timeout-control`的<br/>

#### 默认超时时间

在`java`中`ldap`的连接是由`com.sun.jndi.ldap.LdapCtx.connectTimeout`控制的.<br/>
参考代码如下

```java
public final class LdapCtx extends ComponentDirContext
	implements EventDirContext, LdapContext {

	private int connectTimeout = -1;         // no timeout value

}
```

可以看到`connectTimeout`默认值为`-1`, 也就是说默认情况下是没有超时的. 这其实不合理, 因为网络连接是有超时的,
否则会导致代码一直堵塞<br/>

## 解决方案

### 继承`LdapContextSource`并增加`timeout-control`配置

默认情况下`ldap`是没有`timeout-control`的, 不过其提供了配置`connectTimeout`的方法, 是通过`environment`来配置的.<br/>
对于上层应用来说我们用的是通过`spring`封装过的`ldap`, 所以我们需要对于`spring`进行扩展,
主要是通过继承`LdapContextSource`来实现<br/>

```java title="WithMoreEnvironmentContextSource.java"
/**
 * The extension of {@link LdapContextSource} to support more environment.
 * Sometimes we need to set more environment to environment.
 * For example, we need to set the connectTimeout to avoid thread blocking and makesure the failover works.
 * For more details about the connectTimeout, see {@link com.sun.jndi.ldap.LdapCtx.connectTimeout}
 * For more details about the readTimeout, see {@link com.sun.jndi.ldap.LdapCtx.readTimeout}
 * For more details about the ldap failover, see {@link com.sun.jndi.ldap.LdapCtxFactory#getUsingURLs}
 *
 * @author Xiangcheng.Kuo
 */
public class WithMoreEnvironmentContextSource extends LdapContextSource {

	private Integer connectTimeout = -1;

	private Integer readTimeout = -1;

	public void setConnectTimeout(Integer connectTimeout) {
		this.connectTimeout = connectTimeout;
	}

	public void setReadTimeout(Integer readTimeout) {
		this.readTimeout = readTimeout;
	}

	@Override
	protected DirContext getDirContextInstance(Hashtable<String, Object> environment) throws NamingException {
		// The module named "com.sun.jndi.ldap.LdapCtx" is not exported.
		// So we can't use the following code
		// LdapCtx.CONNECT_TIMEOUT
		// For more information about CONNECT_TIMEOUT
		// see 1. LdapCtx.initEnv 2. Connection.createSocket
		environment.put("com.sun.jndi.ldap.connect.timeout", connectTimeout.toString());
		environment.put("com.sun.jndi.ldap.read.timeout", readTimeout.toString());
		return super.getDirContextInstance(environment);
	}

}
```

### 将`WithMoreEnvironmentContextSource`添加到容器中

接下来需要将`WithMoreEnvironmentContextSource`添加到容器中, 确保上层的依赖如`LdapTemplate`以及自定义的`Reposity`
使用到我们扩展的`LdapContextSource`<br/>

```java title="LdapConfiguration.java"

@Configuration
public class LdapConfiguration {

	@Bean
	public LdapContextSource ldapContextSource(
		LdapProperties properties,
		Environment environment,
		ObjectProvider<DirContextAuthenticationStrategy> dirContextAuthenticationStrategy
	) {
		// copy from org.springframework.boot.autoconfigure.ldap.LdapAutoConfiguration#ldapContextSource
		WithMoreEnvironmentContextSource source = new WithMoreEnvironmentContextSource();
		dirContextAuthenticationStrategy.ifUnique(source::setAuthenticationStrategy);
		PropertyMapper propertyMapper = PropertyMapper.get().alwaysApplyingWhenNonNull();
		propertyMapper.from(properties.getUsername()).to(source::setUserDn);
		propertyMapper.from(properties.getPassword()).to(source::setPassword);
		propertyMapper.from(properties.getAnonymousReadOnly()).to(source::setAnonymousReadOnly);
		propertyMapper.from(properties.getBase()).to(source::setBase);
		propertyMapper.from(properties.determineUrls(environment)).to(source::setUrls);
		propertyMapper.from(properties.getBaseEnvironment()).to(
			(baseEnvironment) -> source.setBaseEnvironmentProperties(Collections.unmodifiableMap(baseEnvironment)));

		// We need to make sure the failover works fast when using multiple ldap backend
		if (properties.getUrls().length > 1) {
			source.setConnectTimeout(2000);
			source.setReadTimeout(2000);
		}

		return source;
	}

}
```

主要代码复制自`org.springframework.boot.autoconfigure.ldap.LdapAutoConfiguration#ldapContextSource`,
具体细节可以参考其源码<br/>

## 备注

### 当`iptables`规则较多自定义的受影响, 如下所示

```bash
sudo iptables -L OUTPUT -v -n
```

```log
Chain OUTPUT (policy ACCEPT 186K packets, 95M bytes)
 pkts bytes target     prot opt in     out     source               destination         
    0     0 DROP       tcp  --  *      *       10.0.3.16            0.0.0.0/0            tcp dpt:3306
    0     0 DROP       tcp  --  *      *       10.0.3.16            0.0.0.0/0            tcp dpt:389
    0     0 DROP       tcp  --  *      *       10.0.3.16            0.0.0.0/0            tcp spt:389
    0     0 DROP       tcp  --  *      *       10.0.3.16            0.0.0.0/0            tcp spt:389
   63  3276 DROP       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            state NEW tcp dpt:389
    0     0 REJECT     tcp  --  *      *       0.0.0.0/0            10.0.3.16            tcp dpt:389 reject-with tcp-reset
```

需要清空所有OUTPUT规则

```bash
sudo iptables -F OUTPUT
```

重新查看OUTPUT规则

```bash
sudo iptables -L OUTPUT -v -n
```

```log
Chain OUTPUT (policy ACCEPT 1883 packets, 1126K bytes)
 pkts bytes target     prot opt in     out     source               destination      
```

## 参考

- [What means SYN_SENT status in a socket?](https://medium.com/devsys/what-means-syn-sent-status-in-a-socket-5ea03eaf6ca9)
- [Viewing NETSTAT Information](https://www.cisco.com/assets/sol/sb/CVR100W_GUI_EN/help/EN_help/status13.html)
- [What is SYN_SENT socket status?](http://karunsubramanian.com/network/what-is-syn_sent-socket-status/)
- [REJECT vs. DROP When Using iptables](https://www.baeldung.com/linux/iptables-reject-vs-drop)
- [REJECT vs DROP when using iptables](https://serverfault.com/questions/157375/reject-vs-drop-when-using-iptables)