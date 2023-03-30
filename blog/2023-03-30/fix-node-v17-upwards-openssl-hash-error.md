---
authors: [ xiangcheng.kuo ]
tags: [ problem-solving, nodejs, openssl, compatibility, jetbrains, code2art, open-radiant ]
---

# node.js v17及以上版本使用openssl v3.0引发的哈希算法错误及其解决方法

最近在本地构建[open-radiant](https://github.com/JetBrains/open-radiant)项目时遇到了一些问题.<br/>
该项目是`JetBrains`开源的一个项目, 用于生成AI艺术图片, 在线演示地址为: [code2art](https://code2art.jetbrains.com/)<br/>

其中的一个问题是当执行`npm start`时报错, 相关错误信息如下:

```bash

> jb-animation-generator@1.0.0 start
> ./node_modules/.bin/webpack-dev-server --mode=development

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /home/orange/Documents/Project/Github/open-radiant
node:internal/crypto/hash:71
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (/home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (/home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:417:16)
    at handleParseError (/home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:471:10)
    at /home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:503:5
    at /home/orange/Documents/Project/Github/open-radiant/node_modules/webpack/lib/NormalModule.js:358:12
    at /home/orange/Documents/Project/Github/open-radiant/node_modules/loader-runner/lib/LoaderRunner.js:373:3
    at iterateNormalLoaders (/home/orange/Documents/Project/Github/open-radiant/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
    at Array.<anonymous> (/home/orange/Documents/Project/Github/open-radiant/node_modules/loader-runner/lib/LoaderRunner.js:205:4) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v18.12.1
```

## 问题原因

经过网上的一番搜索, 发现这个问题是由于`node.js`的版本升级到`v17`及以上版本, 而`openssl`的版本升级到`v3.0`引起的.<br/>

`openssl`是一个开源的安全套接字层密码库, 用于提供加密和认证服务.<br/>
`node.js`在`v17`及以上版本中使用了`openssl`的`v3.0`版本, 该版本中移除了一些哈希算法, 导致在使用这些算法时报错.<br/>

## 解决方案

这个问题的解决解决方案有以下几种:

- 降低`node.js`的版本到v16及以下版本
- `npm start`之前先执行`export NODE_OPTIONS=--openssl-legacy-provider`
  <br/>通过该环境变量可以启用`openssl`的`legacy provider`，支持一些旧的哈希算法.<br/>
- 升级相关依赖包到最新版本，可能会修复这个问题.<br/>

## 参考资料

- [Stack Overflow上关于这个问题的讨论](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)
- [Node.js官方文档中关于OpenSSL 3.0的说明](https://nodejs.org/api/crypto.html#crypto_openssl_3_0)
- [GitHub上关于这个问题的报告](https://github.com/nodejs/help/issues/4021)