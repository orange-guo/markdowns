---
authors: [ orange ]
tags: [ troubleshooting, ansible, ssh ]
---

# 通过调用shell模块来解决旧版本ansible无法设置密码过期时间的问题

最近线上发现了一个问题, 这个问题的原因是由于系统用户过期导致用户无法在`web`通过`SSH/VNC`连接集群, 下面将介绍这个问题的具体细节以及解决方案.

<!--truncate-->

## 原因

查看负责创建`SSH/VNC`的服务的日志发现该服务在使用对应节点上的系统用户进行`ssh`连接时报错, 错误提示`Auth fail`.<br/>
登录到对应节点查看系统用户的密码过期时间, 发现密码已经过期, 导致无法使用该用户进行`ssh`连接.<br/>

## 解决方案

修改`ansible`中的`fs-base.yml`相关代码如下

```yaml
- name: unlock and set xxx user never expire
  hosts: all
  become: yes
  gather_facts: no
  any_errors_fatal: no
  tasks:
    - name: unlock and set xxx user never expire
      user:
        name: xxx
        password: 'xxx'
        update_password: always
        expires: -1
    - name: set max expire to 100 years
      shell: chage -M 36500 xxx
```

## 排查步骤

使用云厂商提供的`login user`登录到对应头节点尝试使用系统用户进行ssh连接, 发现无法连接, 报错提示密码过期<br/>

```bash
sudo ssh -i /home/xxx/.ssh/id_rsa xxx@localhost
```

排查`deploy`对应关于账户的配置代码, 其是实现是基于`ansible`的`user`模块完成的, 相应代码如下<br/>

```yml
- name: unlock and set xxx user never expire
  hosts: all
  become: yes
  gather_facts: no
  any_errors_fatal: no
  tasks:
    - name: unlock and set xxx user never expire
      user:
        name: xxx
        password: ''
        update_password: always
        expires: -1
```

其中`expires`设置为了-1, 这个只能改变账户的过期时间而不会改变密码过期时间, 需要查看user模块的文档来查看对应的参数<br/>

在ansible的文档中提供了对应参数, 参数如下<br/>

```text
password_expire_max | added in ansible-core 2.11 | Maximum number of days between password change. Supported on Linux only.
password_expire_min | added in ansible-core 2.11 | Minimum number of days between password change. Supported on Linux only.
```

由于我们的`ansible`版本为`2.10`, 无法使用这两个参数, 所以需要另一种方式来解决这个问题<br/>
目前最快的解决办法是新建一个task, 通过`shell`模块来执行`chage`命令来修改密码过期时间, 代码如下<br/>

```yaml
- name: unlock and set xxx user never expire
  hosts: all
  become: yes
  gather_facts: no
  any_errors_fatal: no
  tasks:
    - name: unlock and set xxx user never expire
      user:
        name: xxx
        password: 'xxx'
        update_password: always
        expires: -1
    - name: set max expire to 100 years
      shell: chage -M 36500 xxx
```

## 参考

- [ansible.builtin.user module – Manage user accounts](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/user_module.html)
- [User password expiration - Ansible module user](https://www.ansiblepilot.com/articles/user-password-expiration-ansible-module-user/)
- [Linux: Set Password to NEVER Expire](https://www.shellhacks.com/linux-set-password-to-never-expire/)
- [Ansible User Module Tutorial](https://linuxhint.com/ansible-user-module-tutorial/)
- [Strong Password Generator](https://delinea.com/resources/password-generator-it-tool)