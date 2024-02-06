import { escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';
import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

function remarkReadingTime() {
	return function (tree, { data }) {
		const textOnPage = toString(tree);
		const readingTime = getReadingTime(textOnPage);
		data.fm.readingTime = readingTime.time;
	};
}

/** @type {import('mdsvex').MdsvexOptions} */
const config = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'txt') => {
			const html = escapeSvelte(
				await codeToHtml(code, {
					lang,
					themes: {
						light: 'github-light',
						dark: 'github-dark'
					}
				})
			);
			return `{@html \`${html}\`}`;
		}
	},
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	remarkPlugins: [remarkReadingTime]
};

export default config;
