---
authors: [xiangcheng.kuo]
tags: [nvm, nodejs]
---

# 使用`nvm`实现`nodejs`多版本管理

在日常开发中, 有时候需要使用不同版本的`nodejs`来开发不同的项目.<br/>
例如, 有一个`UI`项目, 需要使用`nodejs`的`v12`版本, 而另一个项目需要使用`nodejs`的`v14`版本.<br/>
这时候就需要使用`nvm`来实现`nodejs`的多版本管理.<br/>
本文将以`nodejs-v18`为例介绍如何使用`nvm`来实现`nodejs`的多版本管理

<!--truncate-->

## 解决方案

### 安装

- 将`github`上的`nvm`项目克隆到本地

```bash
git clone git@github.com:nvm-sh/nvm.git
```

- 执行`nvm`的安装脚本

进入`nvm`项目的根目录, 执行`install.sh`脚本

```bash
./install.sh
```

### 将`nvm`添加到`~/.bashrc`中

- 配置`~/.bashrc`

追加以下内容到`~/.bashrc`文件中

```bash
export NVM_DIR=$DEV_SOFTWARE_HOME/Nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

- 重新加载`~/.bashrc`

```bash
source ~/.bashrc
```

### `node`安装

- 安装`nodejs`的`v18`版本

```bash
nvm install 18
```

- 执行`node -v`命令, 查看`nodejs`的版本

```bash
node -v
```

### 设置`nodejs`的默认版本

- 编辑`~/.bashrc`文件, 追加以下内容

```bash
nvm alias default 18
```

- 重新加载`~/.bashrc`

```bash
source ~/.bashrc
```

## 参考

- [nvm](https://github.com/nvm-sh/nvm)
