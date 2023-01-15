<script>
	import '../app.css';
	import AuthDialog from './_AuthDialog.svelte';
	import CookieBanner from './_CookieBanner.svelte';
	import Navbar from './_Navbar.svelte';

	export const prerender = true;
</script>

<div id="theme-container" data-theme="night" class="bg-base-300">
	<main class="lg:max-w-7xl flex m-auto flex-1 flex-col items-center justify-start w-[90%]">
		<AuthDialog />
		<CookieBanner />
		<Navbar />
		<slot />
	</main>
</div>
