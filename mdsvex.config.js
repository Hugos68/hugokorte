import rehypeShiki from '@shikijs/rehype';

/** @type {import('mdsvex').MdsvexOptions} */
const config = {
	extensions: ['.svelte', '.md'],
	rehypePlugins: [rehypeShiki]
};

export default config;
