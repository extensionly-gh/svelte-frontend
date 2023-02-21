<script lang="ts">
	import NotFound from '$lib/assets/exceptions/404.svg';
	import NotFoundDark from '$lib/assets/exceptions/404-dark.svg';
	import { theme } from '$lib/stores';
	import { locale, _ } from 'svelte-i18n';
	import { page } from '$app/stores';

	$: resolveImageByStatusCode = (status: number) => {
		switch (status) {
			case 404:
				return $theme === 'winter' ? NotFound : NotFoundDark;
			default:
				return NotFound;
		}
	};
</script>

<img
	alt=""
	class="z-[5] pointer-events-none fixed w-full h-full"
	height={100}
	src="/assets/home-gradient.svg"
	width={100}
/>
<div class="max-w-lg w-full">
	<h1 class="text-3xl font-medium text-center mb-12">{$_('exceptions.status.' + $page.status)}</h1>
	<img src={resolveImageByStatusCode($page.status)} alt="Not found" />
</div>
