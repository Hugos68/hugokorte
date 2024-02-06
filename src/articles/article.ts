export type Article = {
	title: string;
	descriptin: string;
	date: string;
	readingTime: number;
	published: boolean;
	slug: string;
};

export async function getArticles() {
	const articles: Article[] = [];

	const paths = import.meta.glob('$articles/*.md', {
		eager: true
	});

	for (const [path, file] of Object.entries(paths)) {
		if (!isValidArticle(file)) {
			continue;
		}

		const slug = path.replace(/^\/?src\/articles\/|\.md$/g, '');
		const metadata = file.metadata as Omit<Article, 'slug'>;

		metadata.published && articles.push({ ...metadata, slug });
	}

	// Sort articles by date to show the latest first
	return articles.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

function isValidArticle(file: unknown): file is { metadata: Omit<Article, 'slug'> } {
	return (
		typeof file === 'object' &&
		file !== null &&
		'metadata' in file &&
		typeof file.metadata === 'object' &&
		file.metadata !== null &&
		'title' in file.metadata &&
		typeof file.metadata.title === 'string'
	);
}
