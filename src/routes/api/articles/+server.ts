import { getArticles } from '$articles/article';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const articles = await getArticles();
	return json(articles);
};

export const prerender = true;
