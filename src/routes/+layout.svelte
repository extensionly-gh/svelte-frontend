<script>
	import '../app.css';
	import CookieBanner from './(components)/CookieBanner.svelte';
	import Navbar from './(components)/Navbar.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Footer from './(components)/Footer.svelte';
	import { theme } from '$lib/stores';
	import { dev } from '$app/environment';
	import AuthDialog from './(components)/AuthDialog.svelte';
	import { onMount } from 'svelte';
	import { toastError, toastInfo, toastSuccess } from '$lib/components/toast';
	import { _ } from 'svelte-i18n';
	import NProgress from 'nprogress';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Gradient from '$lib/assets/images/home-gradient.svg';

	NProgress.configure({
		easing: 'ease',
		speed: 200,
		minimum: 0.25,
		trickleSpeed: 90
	});

	beforeNavigate(() => {
		NProgress.start();
	});

	afterNavigate(() => {
		NProgress.done();
	});

	onMount(() => {
		const params = Object.fromEntries(new URLSearchParams(window.location.search));

		if (Object.keys(params).length !== 0 && (params.error || params.success || params.info)) {
			if (params.error) {
				toastError($_(params.error));
			} else if (params.success) {
				toastSuccess($_(params.success));
			} else if (params.info) {
				toastInfo($_(params.info));
			}

			delete params.error;
			delete params.success;
			delete params.info;

			let paramsString = '?';

			for (let key in params) {
				paramsString += key + '=' + params[key] + '&';
			}
			paramsString = paramsString.substring(0, paramsString.length - 1);

			window.history.replaceState({}, document.title, window.location.pathname + paramsString);
		}
	});
</script>

<svelte:head>
	<!-- Google Auth -->
	{#if dev}
		<meta name="referrer" content="no-referrer-when-downgrade" />
	{/if}
	<!-- <meta
		httpequiv="Content-Security-Policy"
		content="script-src https://accounts.google.com/gsi/client; frame-src https://accounts.google.com/gsi/; connect-src https://accounts.google.com/gsi/;"
	/> -->
</svelte:head>
<div
	id="theme-container"
	data-testid="theme-container"
	data-theme={$theme}
	class="dark:bg-base-300/70"
>
	<img
		alt=""
		class:opacity-25={$page.error?.message !== undefined || $page.route.id !== '/'}
		class="z-[5] pointer-events-none fixed w-full h-full"
		height={100}
		src={Gradient}
		width={100}
	/>
	<AuthDialog />
	<main class="lg:max-w-7xl flex m-auto flex-1 flex-col items-center justify-start w-[90%]">
		<SvelteToast />
		<CookieBanner />
		<Navbar />
		<slot />
	</main>
	<Footer />
</div>
