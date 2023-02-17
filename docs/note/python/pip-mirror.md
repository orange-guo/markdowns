# pip源

## 常用源列表

- 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple
- 豆瓣 http://pypi.douban.com/simple/
- 腾讯 http://mirrors.cloud.tencent.com/pypi/simple
- 阿里 https://mirrors.aliyun.com/pypi/simple/

## 临时使用源

```bash
pip install scrapy -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### 永久修改

修改`~/.config/pip/pip.conf`
内容如下
```bash
[global]

index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```