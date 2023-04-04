import React from 'react';
import Giscus from "@giscus/react";

export default function GiscusComponent() {
	return (
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
	);
}