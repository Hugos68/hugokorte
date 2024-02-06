<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<article class="prose prose-stone dark:prose-invert mx-auto flex flex-col gap-8">
	<header>
		<h1 style="view-transition-name: article-title;">{data.metadata.title}</h1>
		<p class="text-balance" style="view-transition-name: article-description;">
			{data.metadata.description}
		</p>
		<div class="flex items-center gap-2">
			<p class="text-sm text-stone-500" style="view-transition-name: article-date;">
				{new Date(data.metadata.date).toLocaleDateString()}
			</p>
			<span class="rounded-full bg-stone-500 size-1" style="view-transition-name: article-dot;" />
			<p class="text-sm text-stone-500" style="view-transition-name: article-reading-time;">
				{data.metadata.readingTime}
				{data.metadata.readingTime === 1 ? 'Minute' : 'Minutes'}
			</p>
		</div>
		<hr class="bg-stone-500 h-0.5" style="view-transition-name: article-divider;" />
	</header>

	<section style="view-transition-name: content;">
		<svelte:component this={data.content} />
	</section>
</article>
