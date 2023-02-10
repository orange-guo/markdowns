# Util

## Yq更新属性为.的值并保存到yaml文件

```bash
yq -i '.["."] = "value"' file.yaml
```

## snap安装特定版本的应用, 以node12为例

```bash
sudo snap install node --channel=12/stable --classic
```