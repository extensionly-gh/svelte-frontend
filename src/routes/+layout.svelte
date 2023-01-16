<script>
	import '../app.css';
	import CookieBanner from './_CookieBanner.svelte';
	import Navbar from './_Navbar.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Footer from './_Footer.svelte';
</script>

<div id="theme-container" data-theme="night" class="bg-base-300/70">
	<main class="lg:max-w-7xl flex m-auto flex-1 flex-col items-center justify-start w-[90%]">
		<SvelteToast />
		<CookieBanner />
		<Navbar />
		<slot />
	</main>
	<Footer />
</div>
