<script lang="ts">
	export let data;
</script>

{#each data.articles as article}
	<a href="/articles/{article.slug}">{article.title}</a>
{/each}
