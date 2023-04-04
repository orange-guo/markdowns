import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Giscus from "@giscus/react";

import {useBlogPost} from '@docusaurus/theme-common/internal'
import useIsBrowser from '@docusaurus/useIsBrowser';


export default function BlogPostItemWrapper(props) {
	const {metadata, isBlogPostPage} = useBlogPost()
	return (
		<>
			<BlogPostItem {...props} />
			{(isBlogPostPage ) && (
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
					theme="preferred_color_scheme"
					lang="en"
					crossorigin="anonymous"
					term="Welcome to @giscus/react component!"
					loading="lazy"
					async
				/>
			)}
		</>
	);
}