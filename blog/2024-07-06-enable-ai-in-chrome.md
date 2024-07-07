# 在Chrome中内置端侧大模型

最近`Chrome`在开发者预览版中发布了`Built-in AI Early Preview Program`, 这个功能能够让`Chrome`启用生成式AI, 这个功能目前处于预览阶段, 通过一些配置才可以启用, 以下是启用步骤:

<!--truncate-->

## 启用步骤

1. 打开`https://www.google.com/chrome/dev/`下载最新的`Chrome Dev`版本.
2. 打开`chrome://flags/#optimization-guide-on-device-model `, 找到`Enables optimization guide on device`功能, 并配置为`Enabled BypassPerfRequirement`.
3. 打开`chrome://flags/#prompt-api-for-gemini-nano`, 找到`Prompt API for Gemini Nano`功能, 配置为`Enabled`.
4. 打开`chrome://components/`确认`Optimization Guide On Device Model`组件下载成功并且是最新版本.
5. 打开`console`, 输入`await window.ai.canCreateTextSession();`, 如果返回值为`readily`, 那么说明已经启用了生成式AI.

## 试用

创建`html`文件, 并将以下内容复制到其中:

```html title="index.html"
<!doctype html>
<html>

<head>
	<meta charset="utf-8" />
	<title>Marked in the browser</title>
	<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>

<body>
</body>

</html>
```

打开`F12`, 赋值以下代码到`Console`中, `prompt`根据需求进行修改:

```js
session = await window.ai.createTextSession();
for await (var res of session.promptStreaming`Give me typescript code about generic type`) { document.body.innerHTML = marked.parse(res) }
```


## 备注

由于该功能尚处于预览阶段, 随着迭代更新, 配置可能会发生变化, 请关注`Chrome`官方文档以获取最新配置信息.



## 参考资料

- [Built-in AI Early Preview Program](https://docs.google.com/document/d/1VG8HIyz361zGduWgNG7R_R8Xkv0OOJ8b5C9QKeCjU0c)