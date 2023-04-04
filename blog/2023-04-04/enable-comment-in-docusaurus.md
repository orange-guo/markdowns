---
authors: [ xiangcheng.kuo ]
tags: [ docusaurus,  giscus, github ]
---

# 为Docusaurus中的Blog启用评论功能

最近想在`Docusaurus`中启用评论功能, 但是官方并没有提供这个功能, 所以只能自己动手了.<br/>

目前的解决方案是通过`Giscus`来实现, 它是一个基于`Github`的`Discussions`的评论系统实现的.<br/>
`Discussions`需要依赖`Github`账号来进行评论, 所以后续需要一个公共的仓库来存放评论数据.<br/>
如果你的博客是私有项目, 可以考虑创建一个新的公共的仓库用于存放评论数据, 这样可以确保原来的项目还可以为私有的.<br/>

以下内容会假设你拥有`Github`相关知识<br/>

<!--truncate-->

## 配置`Giscus`

进入[Giscus](https://giscus.app/)官网浏览文档, 然后根据文档中的要求进行配置.<br/>
主要有以下几个步骤:

- 准备一个公共的仓库
  <br/>该仓库主要用于存放评论数据, 如果你的博客是私有项目可以考虑创建一个公共的仓库用于存放评论数据
- 为公共的仓库启用`Github Discussions`,
  参考[Enabling or disabling GitHub Discussions for a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)
- 安装[giscus-github-app](https://github.com/apps/giscus)并配置可以访问哪些仓库,
  安装页面完成后可以在应用页面中可以找到`Configure`按钮, 点击该按钮进入配置页面

以上是大致的配置步骤, 还有一些细节可以在刚才的官网页面中查看具体的配置说明. 例如:<br/>

- `Docusaurus`博客的评论到`Discussion`中的映射关系

## 验证配置

这些配置做好之后, 你需要对你的配置进行验证, 以确保你的配置是正确的.<br/>

[giscus](https://giscus.app/)页面下的`Repository`提供了一个可以验证你的`repo`

## 获取启用评论功能所需的参数

为了后续在`Docusaurus`中启用评论功能, 还需要获取一些参数, 这些参数后续会在`Docusaurus`中使用.<br/>

[giscus](https://giscus.app/)页面下的`Enable giscus`会根据你的配置生成一段代码, 该代码包含了你需要的参数.<br/>
它看起来像这样:

```html

<script src="https://giscus.app/client.js"
		data-repo="[ENTER REPO HERE]"
		data-repo-id="[ENTER REPO ID HERE]"
		data-category="[ENTER CATEGORY NAME HERE]"
		data-category-id="[ENTER CATEGORY ID HERE]"
		data-mapping="pathname"
		data-strict="0"
		data-reactions-enabled="1"
		data-emit-metadata="0"
		data-input-position="bottom"
		data-theme="preferred_color_scheme"
		data-lang="en"
		crossorigin="anonymous"
		async>
</script>
```

## 安装`Giscus`组件

`Giscus`组件是一个`React`组件, 用于在`Docusaurus`中启用评论功能.<br/>
我们需要在项目中安装`Giscus`组件

```bash
npm install --save @giscus/react
```

## 通过`Swizzling`扩展`Docusaurus`中的`BlogPostItem`组件

`Docusaurus`中提供了[Swizzling](https://docusaurus.io/docs/swizzling)功能, 可以对`Docusaurus`
中的组件进行扩展并增加新的功能.<br/>
`BlogPostItem`是`Docusaurus`中用于展示博客文章的组件, 该组件位于`@theme-original/BlogPostItem`中.<br/>
为了给在`Docusaurus`中启用评论功能, 需要对`BlogPostItem`进行扩展.<br/>

执行`swizzle`命令创建`BlogPostItem`组件

```bash
npm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap
```

该命令执行完成后`src/theme/BlogPostItem/index.js`文件会被创建<br/>

接下来对该文件进行编辑<br/>

> 注意: 该文件中的`Giscus`组件的xxx参数需要根据你的配置进行修改, 配置的参数在上一节中已经介绍过了

```jsx title="src/theme/BlogPostItem/index.js"
import React from 'react'
import BlogPostItem from '@theme-original/BlogPostItem'
import Giscus from "@giscus/react"
import {useBlogPost} from '@docusaurus/theme-common/internal'
import {useColorMode} from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function BlogPostItemWrapper(props) {
  const {i18n: {defaultLocale, localeConfigs}} = useDocusaurusContext()

  const {colorMode} = useColorMode()

  const {metadata, isBlogPostPage} = useBlogPost()
  return (
      <>
        <BlogPostItem {...props} />
        {(isBlogPostPage) && (
            <Giscus
                repo="xxx"
                repoId="xxx"
                category="xxx"
                categoryId="xxx"
                mapping="xxx"
                strict="xxx"
                reactionsEnabled="xxx"
                emitMetadata="xxx"
                inputPosition="xxx"
                theme={colorMode}
                lang={defaultLocale}
                crossorigin="anonymous"
                term="Welcome to @giscus/react component!"
                loading="lazy"
                async
            />
        )}
      </>
  );
}
```

## 效果

![enable-comment-in-docusaurus.png](enable-comment-in-docusaurus.png)

## 参考资料

- [Giscus官网](https://giscus.app/)
- [Giscus的github-app](https://github.com/apps/giscus)
- [启用Github中的Discussions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)
- [关于useBlogPost函数的github-issue](https://github.com/facebook/docusaurus/issues/7759)
- [Swizzling的相关介绍](https://docusaurus.io/docs/swizzling)
- [在Docusaurus上配置Giscus评论系统](https://www.wjwei.blog/docs/Potpourri/giscus-docusaurus)
- [How to add Giscus comments to Docusaurus](https://m19v.github.io/blog/how-to-add-giscus-to-docusaurus)