<script context="module">
	export const preload = () => {};
</script>

<script>
	import { stores } from "@sapper/app";
	// You may not want to use `segment`, but it is passed for the time being and will
	// create a warning if not expected: https://github.com/sveltejs/sapper-template/issues/210
	// https://github.com/sveltejs/sapper/issues/824
	export let segment: string = "";
	// Silence unused export property warning
	if (segment) {};
	const { page } = stores();
	let path: string;
	$: path = $page.path.slice(1);

	import Menu from '../components/Menu.svelte'

</script>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Index"}
	</title>
</svelte:head>

<div class="main">
	<div class="inner">
		<Menu />
		<hr>
		<slot/>
	</div>
</div>

<style>
	.main {
		width: 100%;
		font-family: monospace;
	}
	.inner {
		max-width: 850px;
		margin: 0 auto;
		padding: 7px;
	}
</style>


