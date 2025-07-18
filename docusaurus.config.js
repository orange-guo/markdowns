// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import rehypeKatex from 'rehype-katex';
import asciinema from './src/components/asciinema/markdown/markdown';

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
			({
				docs: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				blog: {
					// https://docusaurus.io/docs/blog#blog-only-mode
					routeBasePath: '/', // Serve the blog at the site's root
					blogSidebarTitle: 'All posts',
					blogSidebarCount: 'ALL',
					beforeDefaultRemarkPlugins: [asciinema],
					rehypePlugins: [rehypeKatex],
				}
			}),
		],
	],

	themeConfig: ({
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
	plugins: [require.resolve("docusaurus-plugin-image-zoom"), '@docusaurus/theme-live-codeblock']
};