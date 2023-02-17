import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	let githubUrl = siteConfig.themeConfig.navbar.items.find(it => it.label === "Github").href;
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<p className={clsx(styles.heroSlogan)}>
					<p>Hello.<br/></p>
					<p>This is the website from <strong><a href={githubUrl}>Xiangcheng Kuo.</a></strong></p>
					<p>I'm a <strong>backend</strong> programmer.</p>
				</p>
				<div className={styles.buttons}>
					<Link
						className={clsx(
							'button button--outline button--secondary button--lg',
							styles.gettingStartedButton,
						)}
						to="/docs/introduction">
						Get Started
					</Link>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout
			title={`Markdowns`}
			description="Description will go into a meta tag in <head />">
			<HomepageHeader/>
			<main>
				<HomepageFeatures/>
			</main>
		</Layout>
	);
}
