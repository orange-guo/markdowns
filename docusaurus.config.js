// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const gitPagesUrl = 'https://orange-guo.github.io'
const githubUrl = "https://github.com/orange-guo"
const editUrl = `${githubUrl}/markdowns/tree/master`

module.exports = {
	title: 'markdowns',
	tagline: 'Dinosaurs are cool',
	url: gitPagesUrl,
	baseUrl: '/markdowns/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.svg',

	organizationName: 'geek66',
	projectName: 'markdowns',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
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
			}),
		],
	],

	themeConfig: ({
		navbar: {
			title: 'markdowns',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'doc',
					docId: 'introduction',
					position: 'left',
					label: 'Docs',
				},
				{
					href: githubUrl,
					label: 'Github',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Introduction',
							to: '/docs/introduction',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/docusaurus',
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/docusaurus',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/docusaurus',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							label: 'Github',
							href: githubUrl,
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()}, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
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
	plugins: [require.resolve("docusaurus-plugin-image-zoom")]
};