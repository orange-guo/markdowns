# PyPI

## 常用repository列表

- 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple
- 豆瓣 http://pypi.douban.com/simple/
- 腾讯 http://mirrors.cloud.tencent.com/pypi/simple
- 阿里 https://mirrors.aliyun.com/pypi/simple/

## 临时使用repository

```bash
pip install scrapy -i https://pypi.tuna.tsinghua.edu.cn/simple
```

## 永久修改

修改`~/.config/pip/pip.conf`
内容如下

```bash
[global]

index-url = https://pypi.tuna.tsinghua.edu.cn/simple

```

## 参考

- [The Python Package Index](https://pypi.org/)
- [更换（Pypi）pip源到国内镜像](https://developer.aliyun.com/article/652884)