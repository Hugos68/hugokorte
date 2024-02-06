import { getReadingTime } from '$articles/article';
import { error } from '@sveltejs/kit';

export async function load({ params: { article } }) {
	try {
		const { default: content, metadata } = await import(`../../../articles/${article}.md`);
		const { default: rawContent } = await import(`../../../articles/${article}.md?raw`);

		return {
			content,
			metadata: { ...metadata, readingTime: getReadingTime(rawContent) }
		};
	} catch (e) {
		error(404, `Article not found: ${article}`);
	}
}
