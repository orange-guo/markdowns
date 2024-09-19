---
authors: [ orange ]
tags: [ troubleshooting, grafana, component-upgrade ]
---

# 升级grafana过程中遇到的问题的以及对应修复方案

<!--truncate-->

## 访问grafana报错403 origin not allowed

这个issue[Unable to Create/Save Dashboard after v8.3.5 Update](https://github.com/grafana/grafana/issues/45117)
提到了403问题的解决方案, 这个问题是grafana新版本引入了`breaking change`, 如果请求的`host`
和配置中的`server.domian`不匹配, 则会返回403.<br/>

这个问题通常是`reverse proxy`的问题, `reverse proxy`转发时会丢失原始的客户端请求的`host`信息, 传递的`host`
信息为`reverse proxy`代理规则中对应的`host`信息(通常是内网的hostname).

解决方案是修改`reverse proxy`的配置, 在转发时将`host`替换为`grafana`中配置的`server.domain`即可

## dashboard中依赖的panel组件过时

当`dashboard`中依赖的`panel`过时时, panel上会有警告图标提示需要更新, 解决方案是在`Dashboard`管理界面中点击`panel`
的`edit`按钮, 替换为最新的`panel`组件, 然后保存`dashboard`即可.

## 参考

- [Configure Grafana](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#cookie_samesite)