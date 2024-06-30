---
authors: [ orange ]
tags: [spring]
---

# 通过环境变量注入数组到应用程序配置

容器启动时, 需要通过环境变量注入配置给应用程序.<br/>
以`spring.ldap.urls`此配置为例, 它是一个数组.

<!--truncate-->

## 解决方案

有两种方式可以实现此需要, 选其中一个即可.<br/>
推荐第二种, 因为下标的配置方式对于列表的数量是非固定的场景是不够灵活的

**方式1: 下标配置**
```bash
SPRING_LDAP_URLS[0]=ldap://host-1:389
SPRING_LDAP_URLS[1]=ldap://host-2:389
```

**方式2: 无下标配置**
```bash
SPRING_LDAP_URLS=ldap://host-1:389,ldap://host-2:389
```

## 参考

- [Inject Arrays and Lists From Spring Properties Files](https://www.baeldung.com/spring-inject-arrays-lists#reading-properties-programmatically)