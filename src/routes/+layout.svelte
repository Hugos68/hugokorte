<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from './Header.svelte';
</script>

<ModeWatcher />

<Header />

<main class="max-w-screen-lg mx-auto px-4 py-16">
	<slot />
</main>
