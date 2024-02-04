<script lang="ts">
	import { Dot } from 'lucide-svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<article class="prose prose-stone dark:prose-invert mx-auto flex flex-col gap-8">
	<header>
		<h1>{data.metadata.title}</h1>
		<div class="flex items-center">
			<p class="text-sm text-gray-500">
				{data.metadata.date}
			</p>

			<Dot class="text-gray-500" />
			<p class="text-sm text-gray-500">
				{data.readingTime}
				{data.readingTime === 1 ? 'Minute' : 'Minutes'}
			</p>
		</div>
	</header>

	<section data-toc-content>
		<svelte:component this={data.content} />
	</section>
</article>
