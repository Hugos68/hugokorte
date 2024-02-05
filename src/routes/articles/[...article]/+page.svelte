<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<article class="prose prose-stone dark:prose-invert mx-auto flex flex-col gap-8">
	<header>
		<h1>{data.metadata.title}</h1>
		<div class="flex items-center gap-2">
			<p class="text-sm text-stone-500">
				{data.metadata.date}
			</p>
			<span class="rounded-full bg-stone-500 size-1" />
			<p class="text-sm text-stone-500">
				{data.readingTime}
				{data.readingTime === 1 ? 'Minute' : 'Minutes'}
			</p>
		</div>
	</header>

	<section data-toc-content>
		<svelte:component this={data.content} />
	</section>
</article>
