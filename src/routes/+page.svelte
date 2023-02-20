<script lang="ts">
	import { Button } from '$lib/components';
	import { _ } from 'svelte-i18n';
	import { authDialog } from '$lib/stores';
	import { page } from '$app/stores';
</script>

<img
	alt=""
	class="z-[5] pointer-events-none fixed w-full h-full"
	height={100}
	src="./assets/home-gradient.svg"
	width={100}
/>
<div class="flex w-full flex-col justify-center  mx-auto text-secondary/80">
	<div class="flex flex-col justify-center items-center text-center rounded-sm">
		<h1 data-testid="home-h1" class="text-5xl font-semibold leading-none sm:text-6xl">
			{$_('r-home.title-1')} <br />
			<span class="text-accent dark:brightness-75">{$_('r-home.title-2')}</span>
		</h1>
		<p class="my-8 sm:mb-12 text-xl max-w-4xl">{$_('r-home.subtitle')}</p>
		<div class="flex gap-2 flex-col sm:flex-row">
			{#if !$page.data.session?.user}
				<Button on:click={() => authDialog.update(() => ({ isOpen: true, context: 'signup' }))}
					>{$_('r-home.signup-now')}</Button
				>
			{/if}
			<Button variants={{ intent: 'secondary' }} to={'/activities'}>
				{$_('r-home.browse-activities')}
			</Button>
		</div>
	</div>
</div>
