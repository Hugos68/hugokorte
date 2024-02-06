<script lang="ts">
	export let data;
</script>

<section class="flex flex-col gap-8">
	<h1 class="text-3xl">Articles</h1>
	<ul class="flex justify-between flex-wrap gap-8">
		{#each data.articles as article}
			<li class="contents">
				<a
					class="flex flex-col gap-8 max-w-sm w-full p-2 border-b border-stone-500"
					href="/articles/{article.slug}"
				>
					<div class="flex flex-col gap-2">
						<p class="text-lg font-bold">
							{article.title}
						</p>
						<p class="text-balance">
							{article.description}
						</p>
					</div>

					<div class="flex items-center gap-2 text-sm text-stone-500">
						<p>
							{new Date(article.date).toLocaleDateString()}
						</p>
						<span class="rounded-full bg-stone-500 size-1" />
						<p>
							{Math.round(article.readingTime / 1000 / 60)}
							{article.readingTime === 1 ? 'Minute' : 'Minutes'}
						</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>
