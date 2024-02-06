<script lang="ts">
	import { ChevronLeftIcon } from 'svelte-feather-icons';

	export let data;

	$: ({ metadata: article, content } = data);
</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<article class="prose prose-stone dark:prose-invert mx-auto flex flex-col gap-8">
	<div class="flex items-center gap-2">
		<ChevronLeftIcon /> <a href="/articles">Back to articles</a>
	</div>

	<header class="border-b border-stone-500">
		<h1>{article.title}</h1>
		<p class="text-balance">
			{article.description}
		</p>
		<div class="flex items-center gap-2">
			<p class="text-sm text-stone-500">
				{new Date(article.date).toLocaleDateString()}
			</p>
			<span class="rounded-full bg-stone-500 size-1" />
			<p class="text-sm text-stone-500">
				{Math.round(article.readingTime / 1000 / 60)}
				{Math.round(article.readingTime / 1000 / 60) === 1 ? 'Minute' : 'Minutes'}
			</p>
		</div>
	</header>

	<section>
		<svelte:component this={content} />
	</section>
</article>
