---
authors: [xiangcheng.kuo]
tags: [evans, grpc]
---

# 通过使用evans来更加便捷地调试grpc服务

有的时候需要调试`grpc`服务, 但是通过代码来进行调试比较麻烦, 因为需要编写相关代码, 这个时候需要一个工具来帮助我们进行调试,
这里介绍一个工具`evans`.

<!--truncate-->

## 安装

进入[Releases](https://github.com/ktr0731/evans/releases)页面下载对应的版本, 然后进行解压. <br/>
解压后的文件夹中有一个`evans`的可执行文件, 如果想在任意位置都通过`evans`来调用, 那么需要做以下操作列表中的任意一种

- 放到`/usr/local/bin`目录下.
- 将`/path/to/evans`添加到`PATH`环境变量中.

## 启动

通过`evans`命令启动, 由于服务调用需要知道契约, 所以需要指定契约文件, 有两种方式

- 给定protobuf文件

```log
evans --host <HOST> --port <PORT> --path <PROTOBUF_ROOT> --proto <PROTOBUF_FILE>
```

其中:<br/>
`<PROTOBUF_ROOT>`是protobuf文件的根目录<br/>
`<PROTOBUF_FILE>`是protobuf文件相对于`<PROTOBUF_ROOT>`的路径<br/>

例如以下给定参数:<br/>
`--path /Users/kuoxiangcheng/protobuf --proto test/test.proto`<br/>
在这个例子中`test/test.proto`是处于`/Users/kuoxiangcheng/protobuf`目录下的文件.<br/>
当多个`protobuf`之间存在依赖关系时, 配置`--path`是一个很好的方式, 因为可以通过`--path`来指定protobuf文件的根目录

- 通过reflection方式运行

```log
evans --host <HOST> --port <PORT> -r
```

当执行上面的命令后, 会进入evans的交互式界面, 内容如下

```log

  ______
 |  ____|
 | |__    __   __   __ _   _ __    ___
 |  __|   \ \ / /  / _. | | '_ \  / __|
 | |____   \ V /  | (_| | | | | | \__ \
 |______|   \_/    \__,_| |_| |_| |___/

 more expressive universal gRPC client


192.168.16.243:27778>
```

## 服务调用

当进入evans的交互式界面后, 后续连接特定的服务, 调用特定的方法, 以及传递参数都是通过交互式界面来完成的.<br/>
接下来需要几个步骤来完成服务的调用

- 设置`package`
- 设置`service`
- 调用`rpc`

### 列出`package`

通过`show package`命令来查看当前连接的服务中的`package`

```bash
show package
```

当执行上述命令后, 会列出当前连接的服务中的所有`package`, 参考输出如下

```log
+---------------+
|    PACKAGE    |
+---------------+
| nott.v1.nottd |
| nott.v1.nottm |
+---------------+
```

### 设置`package`

根据命令执行的结果选择一个特定的`package`进行设置.<br/>
例如: 设置`package`为`nott.v1.nottm`

```bash
service nott.v1.nottm
```

### 列出`service`

当设置完`package`后, 还需要设置`service`, 通过`show service`命令来查看当前`package`下的所有`service`

```bash
show service
```

当执行上述命令后, 会列出当前连接的服务中的所有`service`, 参考输出如下

```log
+---------+---------------------+-----------------------+------------------------+
| SERVICE |         RPC         |     REQUEST TYPE      |     RESPONSE TYPE      |
+---------+---------------------+-----------------------+------------------------+
| Nottm   | Register            | RegisterRequest       | RegisterResponse       |
| Nottm   | ListRegisters       | ListRegistersRequest  | ListRegistersResponse  |
| Nottm   | UpdateRegister      | UpdateRegisterRequest | UpdateRegisterResponse |
| Nottm   | RevokeRegister      | RevokeRegisterRequest | RevokeRegisterResponse |
| Nottm   | Push                | PushRequest           | PushResponse           |
| Nottm   | Poll                | PollRequest           | PollResponse           |
| Nottm   | RetrieveSentMessage | PollRequest           | PollResponse           |
| Nottm   | QueryMessages       | QueryMessagesRequest  | QueryMessagesResponse  |
| Nottm   | CheckState          | CheckStateRequest     | CheckStateResponse     |
| Nottm   | QueueStatus         | QueueStatusRequest    | QueueStatusResponse    |
| Nottm   | InspectNottd        | InspectNottdRequest   | InspectNottdResponse   |
| Nottm   | InspectNottm        | InspectNottmRequest   | InspectNottmResponse   |
| Nottm   | RestartNottd        | RestartNottdRequest   | RestartNottdResponse   |
+---------+---------------------+-----------------------+------------------------+
```

### 设置`service`

根据命令执行的结果选择一个特定的`service`进行设置.<br/>
例如: 设置`service`为`Nottm`

```bash
service Nottm
```

### 调用`rpc`

当设置完`service`后, 可以通过`call <RPC>`命令来调用`rpc`方法.<br/>

例如: 调用`Register`方法

```bash
call Register
```

然后根据提示输入参数, 当输入完毕后, 会返回调用结果.<br/>

## 参考

- [evans](https://github.com/ktr0731/evans)
- [超实用的 gRPC 客户端调试工具](https://cloud.tencent.com/developer/article/1892716)