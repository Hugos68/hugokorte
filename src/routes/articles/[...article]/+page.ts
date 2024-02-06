import type { Article } from '$articles/article';
import { error } from '@sveltejs/kit';

export async function load({ params: { article } }) {
	try {
		const { default: content, metadata } = await import(`../../../articles/${article}.md`);

		return {
			content,
			metadata: { ...metadata, slug: article } as Article
		};
	} catch (e) {
		error(404, `Article not found: ${article}`);
	}
}
