<script lang="ts">
	import { ChevronLeftIcon, ChevronUpIcon } from 'svelte-feather-icons';
	import { fade } from 'svelte/transition';

	export let data;

	let scrollY: number;

	$: ({ metadata: article, content } = data);
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<article
	class="prose prose-stone prose-headings:scroll-mt-4 dark:prose-invert mx-auto flex flex-col gap-8"
>
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

{#if scrollY > 250}
	<a
		in:fade
		class="fixed bottom-8 left-1/2 -translate-x-1/2 bg-stone-200 dark:bg-stone-800 rounded-md flex items-center gap-2 p-2"
		href="#top"
	>
		Back to top
		<ChevronUpIcon class="inline" />
	</a>
{/if}

<style>
	/* TODO: Convert this to a tailwind class */
	:global(h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a) {
		text-decoration-line: none !important;
	}
</style>
