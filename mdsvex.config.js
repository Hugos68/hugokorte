import { escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('mdsvex').MdsvexOptions} */
const config = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'txt') => {
			const html = escapeSvelte(
				await codeToHtml(code, {
					lang,
					theme: 'github-dark'
				})
			);	
			return `{@html \`${html}\`}`;
		}
	},
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
};

export default config;
