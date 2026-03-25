<script>
	// import '../style/layout.css';
	import '../style/main.css';
	// import favicon from '$lib/assets/favicon.svg';
	import AppHeader from '@/components/global/app-header/app-header.svelte';
	import MainControls from '@/components/global/top-controls/top-controls.svelte';

	let { children } = $props();
</script>

<div class="wrapper">
	<header>
		<AppHeader />
		<MainControls />
	</header>
	<main>
		{@render children()}
	</main>
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100vh;
		width: 100vw;
	}

	header {
		display: grid;
	}

	main {
		border: 1px solid red;
		height: 100%;
		overflow-y: scroll;
		padding: 0.5rem 1rem;
	}
</style>
