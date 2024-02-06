import { error } from '@sveltejs/kit';

export async function load({ params: { article } }) {
	try {
		const { default: content, metadata } = await import(`../../../articles/${article}.md`);

		return {
			content,
			metadata
		};
	} catch (e) {
		error(404, `Article not found: ${article}`);
	}
}
