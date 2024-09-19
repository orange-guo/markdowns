---
authors: [ orange ]
tags: [ troubleshooting, java, openfeign, http ]
---

# FeignClient中Pageable被当作body传输

调用FeignClient进行GET且分页请求时发现Pageable被生成为BODY

<!--truncate-->

## 原因

自己定义的SpringEncoder有问题, 没有用PageableSpringEncoder, 导致SpringEncoder认为其是RequestBody并将其生成为body

## 解决方案

采用框架默认的Encoder

## 备注

- 若要支持文件上传, 加入@Headers注解来提醒框架这是文件上传操作
- 另外Spring将停止对Commons.file进行支持, 要及时迁移