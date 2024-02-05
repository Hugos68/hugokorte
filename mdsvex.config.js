import { escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const config = {
	extensions: ['.svelte', '.md'],
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
	}
};

export default config;
