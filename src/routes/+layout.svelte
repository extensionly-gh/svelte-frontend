<script>
	import '../app.css';
	import CookieBanner from './_CookieBanner.svelte';
	import Navbar from './_Navbar.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Footer from './_Footer.svelte';
	import { theme } from '$lib/stores';
	import { dev } from '$app/environment';
	import AuthDialog from './_AuthDialog.svelte';
	import { onMount } from 'svelte';
	import { toastError, toastSuccess } from '$lib/components/toast';
	import { _ } from 'svelte-i18n';

	onMount(() => {
		const params = Object.fromEntries(new URLSearchParams(window.location.search));

		if (Object.keys(params).length !== 0) {
			window.history.replaceState({}, document.title, '/');
			if (params.error) {
				toastError($_(params.error));
			} else if (params.success) {
				toastSuccess($_(params.success));
			}
		}
	});
</script>

<svelte:head>
	<!-- Google Auth -->
	{#if dev}
		<meta name="referrer" content="no-referrer-when-downgrade" />
	{/if}
	<meta
		httpequiv="Content-Security-Policy"
		content="script-src https://accounts.google.com/gsi/client; frame-src https://accounts.google.com/gsi/; connect-src https://accounts.google.com/gsi/;"
	/>
</svelte:head>
<div id="theme-container" data-theme={$theme} class="dark:bg-base-300/70">
	<AuthDialog />
	<main class="lg:max-w-7xl flex m-auto flex-1 flex-col items-center justify-start w-[90%]">
		<SvelteToast />
		<CookieBanner />
		<Navbar />
		<slot />
	</main>
	<Footer />
</div>
