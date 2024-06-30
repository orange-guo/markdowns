---
authors: [ orange ]
tags: [ docusaurus, react, mdx, asciinema, remark, mdast, mdast-util-mdx-jsx, mdast-util-mdxjs-esm, rehype-katex, remark-math ]
---

# 将Asciinema集成到Docusaurus项目中

在`Markdown`文档中, 涉及到一些终端操作时, 需要一种方式来展示这些操作.

<!--truncate-->

## 常见的解决方案

虽然`Markdown`内置的`codeblock`语法方便, 但在某些情况下, 它也有不足之处. <br/>
比如, 当终端操作步骤过长, 包含大量输入输出内容时, 会导致文档占用过多空间, 影响阅读体验. <br/>
另一种方法是将终端操作录制成视频并通过链接引用, 这样视频可以嵌入页面中展示操作过程. <br/>
然而, 视频文件通常较大, 占用较多空间, 而终端操作本质上只是字符串.

## 工具介绍

### Asciinema

[Asciinema](https://asciinema.org/)是一个开源的终端录制工具, 可以记录终端操作并生成可播放的文件.<br/>
这个文件仅包含文本信息, 不占用太多空间, 非常适合展示终端操作演示.<br/>

要生成终端操作演示, 需要安装`Asciinema`的命令行工具, 并使用该工具进行录制.<br/>
详细的安装和使用教程可以参考[getting-started](https://docs.asciinema.org/getting-started/)页面. 

### Docusaurus

[Docusaurus](https://docusaurus.io/)是一个开源的静态网站生成器, 基于 `React` 实现, 允许使用`Markdown`编写文档, 并用`React`渲染. <br/>
在`Docusaurus`中, 支持使用`MDX`扩展.<br/>

### MDX

[MDX](https://mdxjs.com/)是`Markdown`的扩展, 允许我们在`Markdown`文档中使用`JavaScript`代码来实现更丰富的文档内容渲染.<br/>

## 功能设计

`Docusaurus`支持`MDX`语法, 因此我们可以在文档中引入`JavaScript`代码来渲染页面.<br/>
虽然`Asciinema`提供了用于页面渲染的`JavaScript`库, 但遗憾的是目前只有基本的`JavaScript`实现. <br/>
由于`Docusaurus`是基于`React`实现的, 因此我们需要将`Asciinema`提供的`JavaScript`库封装为`Docusaurus`支持的`React`组件.<br/>

### 封装`React`组件

如果我们需要在`Docusaurus`中集成`Asciinema`, 那么需要完成以下步骤:

- 将`Asciinema`提供的`JavaScript`库封装为`Docusaurus`支持的`React`组件.

完成上述实现后, 我们就可以在`Markdown`文档中引入`Asciinema`动画文件, 并将其渲染到页面中.

例如：

```mdxjs
import AsciinemaPlayer from '@site/src/components/asciinema/react';

<AsciinemaPlayer src="/blog/2024-06-28-demo.cast" />
```

这样, 最终的渲染效果应该是:<br/>

[x](/blog/2024-06-28-demo.cast)

### 扩展`Markdown`解析器并实现`link`语法的渲染

在上一个步骤中, 最终的`Markdown`文件中需要编写`JavaScript`代码来完成渲染, 但对于文档编写者来说会面临以下问题:

- 如果文档项目由多人编写, 语法问题的概率会增加.
- `Markdown`迁移难度加大, 因为`JS`代码只是实现某个功能的一种方式, 而不应该在`Markdown`文件中显式依赖解决方案空间的细节.

为了解决以上问题, 我们需要优化使用方式, 降低使用者的难度, 同时屏蔽底层的细节. <br/>

最终的使用者可能更希望在`Markdown`中使用`link`语法来引入`Asciinema`动画文件, 而在底层我们需要通过`Docusaurus`提供的功能进行扩展渲染. 

例如, 用户在文档中增加如下内容:

```markdown
[x](/blog/2024-06-28-demo.cast)
```

那么, 最终的渲染效果应该是:<br/>

[x](/blog/2024-06-28-demo.cast)

上述实现思路主要是扩展`Docusaurus`的`Markdown`解析器, 并对其进行扩展, 最终转换为上一个步骤中的`React`组件.<br/>
在`Docusaurus`中, 可以通过扩展`remark`和`rehype`来实现对`Markdown`语法解析的扩展. <br/>
这种方法允许我们在`Markdown`解析为`AST`后进行修改, 从而实现对`Markdown`的扩展功能. <br/>

详细的文档和插件开发信息, 请参考[MDX Plugins](https://docusaurus.io/docs/Markdown-features/plugins).

## 功能实现

### 封装`Asciinema`库为`React`组件

首先, 将`Asciinema`添加到项目中:

```bash
yarn add asciinema-player
```

接下来, 我们需要封装成`React`组件.

```typescript title="src/components/asciinema/react/index.js"

// import 'asciinema-player/dist/bundle/asciinema-player.css';
import './asciinema-player.css'; // We hacked the CSS of the asciinema-player located at 'asciinema-player/dist/bundle/asciinema-player.css'.

import {FC, useEffect, useRef, useState} from 'react';
import {useColorMode} from '@docusaurus/theme-common';

type Props = {
	src: string;
	cols: string;
	rows: string;
	autoPlay: boolean
	preload: boolean;
	loop: boolean | number;
	startAt: number | string;
	speed: number;
	idleTimeLimit: number;
	theme: string;
	poster: string;
	fit: string;
	fontSize: string;
};

const AsciinemaPlayer: FC<Props> = ({src, ...rest}) => {
	const [player, setPlayer] = useState<typeof import ('asciinema-player')>()
	useEffect(() => {
		import("asciinema-player").then(p => {setPlayer(p)})
	}, []) // executed once

	const { colorMode } = useColorMode();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(
		() => {
			const currentRef = ref.current

			const instance = player?.create(src, currentRef, {...rest, theme: colorMode === 'dark' ? 'docusaurus-classic-dark' : 'docusaurus-classic-light'});

			return () => {
				instance?.dispose()
			}
		}, [src, rest, colorMode, player] // executed every time the array items change
	);

	return <div ref={ref}/>;
};

export default AsciinemaPlayer;
```

[src/components/asciinema/react/asciinema-player.css](/blog/2024-06-28-asciinema-player.css)

上面的代码中, 我们将`Asciinema`的`JavaScript`库封装为`React`组件.<br/>
利用`React`提供的`Ref`功能, 将`Asciinema`操作的`DOM`组件与`React`组件关联起来, 以确保`React`能够集成该组件. <br/>
为了避免重复渲染, 需要确保组件在适当的时候被`dispose`.<br/>
为了适配`Docusaurus`的主题, 我们需要引入自定义的`CSS`样式. 在`Asciinema`提供的基础样式上, 添加对`Docusaurus`主题的支持.

### 自定义`Markdown`语法树解析

首先, 我们需要将下面的依赖安装到项目中:

```bash
yarn add rehype-katex remark-math
```

这两个库用于解析`Markdown`语法树, 并对语法树内容进行修改, 以实现我们的目的.<br/>


现在可以开始编写下面的代码来实现

```typescript title="src/components/asciinema/Markdown/Markdown.ts"
import {visit} from 'unist-util-visit';

const plugin = (options) => {
	const transformer = async (tree) => {
		let importInserted = false;

		visit(tree, 'link', (node, index, parent) => {
			if (!node.url.endsWith(".cast")) {
				return
			}

			if (!importInserted) {
				const importNode = {
					type: 'mdxjsEsm',
					value: `import AsciinemaPlayer from '@site/src/components/asciinema/react';`,
					data: {
						estree: {
							type: 'Program',
							body: [
								{
									type: 'ImportDeclaration',
									specifiers: [
										{
											type: 'ImportDefaultSpecifier',
											local: { type: 'Identifier', name: 'AsciinemaPlayer' }
										}
									],
									source: { type: 'Literal', value: '@site/src/components/asciinema/react' }
								}
							]
						}
					}
				};

				tree.children.unshift(importNode);
				importInserted = true;
			}

			const jsxNode = {
				type: 'mdxJsxFlowElement',
				name: 'AsciinemaPlayer',
				attributes: [
					{ type: 'mdxJsxAttribute', name: 'src', value: node.url },
					{ type: 'mdxJsxAttribute', name: 'theme', value: 'docusaurus-classic-light' },
					{ type: 'mdxJsxAttribute', name: 'rows', value: 30 },
					{ type: 'mdxJsxAttribute', name: 'idleTimeLimit', value: 3 },
					{ type: 'mdxJsxAttribute', name: 'preload', value: true }
				],
				children: []
			};

			parent.children.splice(index, 1, jsxNode);
		});
	};
	return transformer;
};

export default plugin;
```

在上述代码中, 我们对`link`进行了修改, 并将其转换为`JSX`语法, 这样可以在`Markdown`中直接使用`Asciinema`组件.
除了上述代码, 我们还需要在`Docusaurus`中进行配置以进行功能集成.<br/>

参考以下配置来配置`Docusaurus`:

```typescript title="docusaurus.config.js"
import rehypeKatex from 'rehype-katex';
import asciinema from './src/components/asciinema/Markdown/Markdown';

export default {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          beforeDefaultRemarkPlugins: [asciinema],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          beforeDefaultRemarkPlugins: [asciinema],
          rehypePlugins: [rehypeKatex],
       }
      },
    ],
  ],
};
```

上述配置对`Docusaurus`中的`Docs`和`Blog`进行了配置, 并实现了`Markdown`中的`Asciinema`组件的解析.<br/>

需要注意的一点是, 我们使用`beforeDefaultRemarkPlugins`而不是`remarkPlugins`进行配置的主要原因是, <br/>
`Docusaurus`会对`Markdown`语法树进行修改, 因此我们需要在其修改之前进行配置, 以确保最终的结果正确.<br/>

## 参考

- [MDX](https://mdxjs.com/)
- [MDX Plugins](https://docusaurus.io/docs/Markdown-features/plugins)
- [remark](https://github.com/remarkjs/remark)
- [mdast](https://github.com/syntax-tree/mdast)
- [mdast-util-mdx-jsx](https://github.com/syntax-tree/mdast-util-mdx-jsx)
- [mdast-util-mdxjs-esm](https://github.com/syntax-tree/mdast-util-mdxjs-esm?tab=readme-ov-file#mdxjsesm)