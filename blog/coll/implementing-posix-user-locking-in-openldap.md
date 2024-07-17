---
authors: [ orange ]
tags: [ problem-solving, ldap, openldap, posix ]
---

# 研究在openldap中实现posix用户的锁定

目前锁定用户能够达成的效果是禁止用户在portal中登录, 但是用户仍然可以在linux中进行登录.<br/>
调研一下`AccountDisable`属性

<!--truncate-->


## [AccountDisable](https://ldapwiki.com/wiki/ACCOUNTDISABLE)属性属于AD下的解决方案

## 在linux中没有比较优雅的办法实现锁定posixAccount

[posixAccount](https://ldapwiki.com/wiki/posixAccount)和[shadowAccount](https://ldapwiki.com/wiki/shadowAccount)
以及[nslcd.conf](https://linux.die.net/man/5/nslcd.conf)中的`mapT`参数均没有相关的说明

## 替代方案的问题

目前有以下替代方案以下替代方案都有一定的问题, 可以作为参考

> 1. 直接改用户用户密码从而让用户无法登录到系统中, 缺点是只能阻挡密码形式认证, ssh免密形式无法拦截
> 2. 修改`loginShell`为/usr/sbin/nologin, 缺点是对于远程桌面连接场景则可能覆盖不到
> 3. `FreeIPA`中有`ipa user-disable`命令, 但不是主流的解决方案, 因为我们的ldap是openldap

## 备注

- [ACCOUNTDISABLE](https://ldapwiki.com/wiki/ACCOUNTDISABLE)
- [PosixAccount](https://ldapwiki.com/wiki/posixAccount)
- [ShadowAccount](https://ldapwiki.com/wiki/shadowAccount)
- [nslcd.conf(5) - Linux man page](https://linux.die.net/man/5/nslcd.conf)
- [How to disable User Accounts on Linux System](https://linuxconfig.org/how-to-disable-user-accounts-in-linux)
- [WHAT IS SHADOW ACCOUNT LDAP?](https://www.trentonsocial.com/what-is-shadow-account-ldap/)
- [Understanding the /etc/shadow File](https://linuxize.com/post/etc-shadow-file/)
- [FreeIPA > Enabling and Disabling User Accounts](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/linux_domain_identity_authentication_and_policy_guide/activating_and_deactivating_user_accounts#:~:text=Select%20the%20Identity%20%E2%86%92%20Users%20tab.%20From%20the,a%20user%20account%2C%20use%20the%20ipa%20user-disable%20command.)
