---
authors: [ xiangcheng.kuo ]
tags: [ golang, git, gitlab, cicd ]
---

# 在`GitLab`的`CI/CD`中支持`Go Module`引用同一代码库下的其他`Go`仓库

在`Golang`中, 代码复用的实现方式是通过`git`方式引用代码.<br/>
如果在`CI/CD`中引用同一代码库下的其他`Go`仓库, 由于`Gitlab`对仓库的访问权限限制, 还需要执行一些配置来确保`go mod`
能够正确下载依赖项.

<!--truncate-->

## 操作步骤

### 设置`GOPRIVATE`环境变量

设置`GOPRIVATE`变量

```bash
export GOPRIVATE=${CI_SERVER_HOST}
```

这里的`${CI_SERVER_HOST}`是gitlab代码库的域名.

### 使用`git config`的`insteadOf`指令替换原始的`https`请求并添加认证信息

`go mod`通过`git`下载依赖项.<br/>
对于私有的git仓库, 如果不进行认证, 将会出现错误.<br/>

使用下述命令替换原始的`https`请求并添加认证信息

```bash
git config --global url."https://gitlab-ci-token:${CI_JOB_TOKEN}@${CI_SERVER_HOST}".insteadOf "https://${CI_SERVER_HOST}"
```

上述`insteadOf`指令为原始的`https`请求添加了认证信息.<br/>
认证凭证来自于`CI_JOB_TOKEN`, 这是CI/CD生命周期中自动生成的.<br/>

### 配置被依赖的仓库允许其他项目通过`CI_JOB_TOKEN`进行访问

在`GitLab`中进入被依赖的仓库, 在`Settings > CI/CD > Token Access`中配置允许其他项目通过`CI_JOB_TOKEN`进行访问。