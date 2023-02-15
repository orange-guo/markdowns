# yq

## 用例

### Yq更新属性为.的值并保存到yaml文件

```bash
yq -i '.["."] = "value"' file.yaml
```

## 参考