<script lang="ts">
	import NotFound from '$lib/assets/exceptions/404.svg';
	import NotFoundDark from '$lib/assets/exceptions/404-dark.svg';
	import GenericError from '$lib/assets/exceptions/500.svg';
	import GenericErrorDark from '$lib/assets/exceptions/500-dark.svg';
	import { theme } from '$lib/stores';
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { Button } from '$lib/components';

	$: resolveImageByStatusCode = (status: number) => {
		switch (status) {
			case 404:
				return $theme === 'winter' ? NotFound : NotFoundDark;
			default:
				return $theme === 'winter' ? GenericError : GenericErrorDark;
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
<div class="max-w-3xl h-full flex items-center justify-center flex-col">
	<h1 data-testid="error-fallback-title" class="text-3xl font-medium text-center">
		{$_(`exceptions.status.${$page.status}.title`)}
	</h1>
	<h3 class="text-md text-center my-4">{$_(`exceptions.status.${$page.status}.message`)}</h3>
	<img class="max-w-md my-12" src={resolveImageByStatusCode($page.status)} alt="Error" />
	<Button to="/" variants={{ intent: 'ghost' }}>{$_('exceptions.go-back')}</Button>
</div>
