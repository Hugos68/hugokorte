<script>
	import { GithubIcon, MoonIcon, SunIcon } from 'svelte-feather-icons';
	import { mode, setMode } from 'mode-watcher';
</script>

<header
	class="max-w-screen-xl mx-auto px-4 py-8 flex items-center justify-between border-b-stone-500 border-b"
>
	<nav class="flex items-center gap-4 sm:gap-8">
		<a href="/" class="text-xl font-extrabold">HK</a>
		<a href="/articles">Articles</a>
		<a href="/projects">Projects</a>
	</nav>
	<nav class="flex items-center gap-4 sm:gap-8">
		<a href="https://www.github.com/hugos68" target="_blank"><GithubIcon /></a>
		<button
			on:contextmenu|preventDefault={() => setMode('system')}
			on:click={() => setMode($mode === 'light' ? 'dark' : 'light')}
		>
			{#if $mode === 'light'}
				<MoonIcon size="24" />
			{:else}
				<SunIcon size="24" />
			{/if}
		</button>
	</nav>
</header>
