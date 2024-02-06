<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from './Header.svelte';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		// @ts-expect-error - `document.startViewTransition` is not in the DOM types
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			// @ts-expect-error - `document.startViewTransition` is not in the DOM types
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<ModeWatcher />

<Header />

<main class="max-w-screen-lg mx-auto px-4 py-16">
	<slot />
</main>
