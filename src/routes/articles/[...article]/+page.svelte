<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<article class="prose prose-stone dark:prose-invert">
	<svelte:component this={data.content} />
</article>
