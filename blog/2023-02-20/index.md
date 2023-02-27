---
authors: [xiangcheng.kuo]
tags: [snap]
---

# 清理旧版本的`snap`应用以释放空间

`snap`默认会保留旧版本的应用, 但是这些旧版本的应用占用了大量的空间, 所以我们需要清理旧版本的应用, 以释放空间.

<!--truncate-->

## 解决方案

新增脚本用于清理旧版本的`snap`应用.

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

- [How To Remove Old Snap Versions To Free Up Disk Space](https://www.linuxuprising.com/2019/04/how-to-remove-old-snap-versions-to-free.html)