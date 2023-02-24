# snap

## snap安装特定版本的应用, 以node12为例

```bash
sudo snap install node --channel=12/stable --classic
```

## 清理旧版本应用

```bash title="cleanup-old-snaps.sh"
#!/bin/bash

set -eu

echo "Old versions of snaps will be removed."

sudo rm -rf /var/lib/snapd/cache/*
snap list --all | awk '/disabled/{print $1, $3}' | while read -r package revision; do
  snap remove "$package" --revision="$revision"
done

echo "Old revisions of snaps are removed."
```

## 参考