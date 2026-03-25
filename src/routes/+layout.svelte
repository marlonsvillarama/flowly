<script>
	import '../app.css';
	// import favicon from '$lib/assets/favicon.svg';
    import { Toaster, toast } from "svelte-sonner";
	import AppHeader from '@/components/global/app-header/app-header.svelte';
	import TopControls from '@/components/global/top-controls/top-controls.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
</svelte:head>

<div class="grid grid-rows-[auto_1fr] h-screen w-screen">
	<header class="grid">
		<AppHeader />
		<TopControls />
	</header>
	<main class="h-full py-2 px-4 overflow-y-auto">
		{@render children()}
	</main>
</div>

<Toaster position="top-right" expand={true} closeButton duration={4000} />
