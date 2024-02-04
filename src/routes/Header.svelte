<script>
	import { Github, Moon, Sun } from 'lucide-svelte';
	import { mode, setMode } from 'mode-watcher';
</script>

<header
	class="max-w-screen-xl mx-auto px-4 py-8 flex items-center justify-between border-b-stone-500 border-b"
>
	<nav class="flex items-center gap-8">
		<a href="/" class="text-xl font-extrabold">Hugo Korte</a>
		<a href="/about">About</a>
		<a href="/articles">Articles</a>
		<a href="/projects">Projects</a>
	</nav>
	<nav class="flex items-center gap-8">
		<a href="https://www.github.com/hugos68" target="_blank"><Github /></a>
		<button on:click={() => setMode($mode === 'light' ? 'dark' : 'light')}>
			{#if $mode === 'light'}
				<Moon size="24" />
			{:else}
				<Sun size="24" />
			{/if}
		</button>
	</nav>
</header>
