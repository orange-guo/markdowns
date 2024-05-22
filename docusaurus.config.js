// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const githubUrl = "https://github.com/orange-guo"
const editUrl = `${githubUrl}/markdowns/tree/master`
const githubHeadImg = `https://github.com/orange-guo.png`

const author = 'Xiangcheng Kuo'

module.exports = {
	title: author,
	tagline: `This is website from ${author}`,
	url: 'https://www.geek66.cyou/',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: githubHeadImg,

	organizationName: 'geek66',
	projectName: 'markdowns',

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh-CN'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: editUrl,
					showLastUpdateAuthor: true,
					showLastUpdateTime: true
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				blog: {
					blogSidebarTitle: 'All posts',
					blogSidebarCount: 'ALL',
				}
			}),
		],
	],

	themeConfig: ({
		navbar: {
			title: author,
			logo: {
				alt: 'My Site Logo',
				src: githubHeadImg,
			},
			items: [
				{
					type: 'doc',
					position: 'left',
					label: 'Software Engineering',
					docId: 'software-engineering/introduction',
				},
				{
					type: 'doc',
					position: 'left',
					label: 'Note',
					docId: 'note/introduction',
				},
				{
					to: 'blog',
					label: 'Blog',
					position: 'left'
				},
				{
					label: 'Github',
					href: githubUrl,
					position: 'right',
					className: 'header-github-link',
					'aria-label': 'GitHub repository',
				},
			],
		},
		footer: {
			style: 'dark',
			// links: [
			// 	{
			// 		title: 'Links',
			// 		items: [
			// 			{
			// 				label: "收藏",
			// 				to: "collection/introduction"
			// 			},
			// 			{
			// 				label: '笔记',
			// 				to: '/docs/note/introduction',
			// 			},
			// 			{
			// 				label: '读书笔记',
			// 				to: '/docs/booknote/introduction',
			// 			},
			// 			{
			// 				label: 'Blog',
			// 				to: '/blog',
			// 			},
			// 			{
			// 				label: 'Github',
			// 				href: githubUrl,
			// 			},
			// 		],
			// 	},
			// ],
			// logo: {
			// 	alt: 'Meta Open Source Logo',
			// 	src: githubHeadImg,
			// 	href: 'https://opensource.fb.com',
			// },
			copyright: `Copyright © ${new Date().getFullYear()}, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
			additionalLanguages: ["java", "kotlin", "clojure", "python"]
		},
		zoom: {
			selector: '.markdown :not(em) > img',
			config: {
				// options you can specify via https://github.com/francoischalifour/medium-zoom#usage
				background: {
					light: 'rgb(255, 255, 255)',
					dark: 'rgb(50, 50, 50)'
				}
			}
		},
		liveCodeBlock: {
			/**
			 * The position of the live playground, above or under the editor
			 * Possible values: "top" | "bottom"
			 */
			playgroundPosition: 'bottom',
		}
	}),
	themes: [
		// ... Your other themes.
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			/** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
			({
				// ... Your options.
				// `hashed` is recommended as long-term-cache of index file is possible.
				hashed: true
				// For Docs using Chinese, The `language` is recommended to set to:
				// ```
				// language: ["en", "zh"],
				// ```
			}),
		],
	],
	plugins: [require.resolve("docusaurus-plugin-image-zoom"), '@docusaurus/theme-live-codeblock']
};