import type { Article } from '$articles/article.js';
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetch('/api/articles');
	if (!res.ok) {
		error(400, 'Failed to fetch articles');
	}
	const articles: Article[] = await res.json();
	return {
		articles
	};
}
