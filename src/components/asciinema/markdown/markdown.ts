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