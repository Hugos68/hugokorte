<script lang="ts">
	export let data;
</script>

<ul class="flex justify-between flex-wrap gap-8">
	{#each data.articles as article}
		<li class="contents">
			<a class="flex flex-col gap-8 max-w-sm w-full p-2" href="/articles/{article.slug}">
				<div class="flex flex-col gap-2">
					<p class="text-lg font-bold" style="view-transition-name: article-title;">
						{article.title}
					</p>
					<p class="text-balance" style="view-transition-name: article-description;">
						{article.description}
					</p>
				</div>

				<div class="flex items-center gap-2 text-sm text-stone-500">
					<p style="view-transition-name: article-date;">
						{new Date(article.date).toLocaleDateString()}
					</p>
					<span
						class="rounded-full bg-stone-500 size-1"
						style="view-transition-name: article-dot;"
					/>
					<p style="view-transition-name: article-reading-time;">
						{Math.round(article.readingTime / 1000 / 60)}
						{article.readingTime === 1 ? 'Minute' : 'Minutes'}
					</p>
				</div>
				<hr class="bg-stone-500 h-0.5" style="view-transition-name: article-divider;" />
			</a>
		</li>
	{/each}
</ul>
