import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetch('/api/articles');
	if (!res.ok) {
		error(400, 'Failed to fetch articles');
	}
	const articles = await res.json();
	return {
		articles
	};
}
