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
					repo="orange-guo/markdowns-comment"
					repoId="R_kgDOJSYyJA"
					category="Announcements"
					categoryId="DIC_kwDOJSYyJM4CVg1x"
					mapping="pathname"
					strict="0"
					reactionsEnabled="1"
					emitMetadata="0"
					inputPosition="bottom"
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