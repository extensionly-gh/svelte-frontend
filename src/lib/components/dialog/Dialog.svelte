<script lang="ts">
	import { theme } from '$lib/stores';
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription
	} from '@rgossiaux/svelte-headlessui';
	import { createEventDispatcher } from 'svelte';
	import IconX from '~icons/ph/x';

	export let isOpen = false;
	export let title: string;
	export let description: string;
	export let size: 'xs' | 'sm' | 'md' | 'lg' = 'sm';
	export let close: () => void;

	const sizes = {
		xs: '20rem',
		sm: '24rem',
		md: '28rem',
		lg: '32rem'
	};
</script>

<Dialog open={isOpen} on:close={() => close()}>
	<DialogOverlay class="fixed animate-slide-down inset-0 z-20 bg-black/70" />

	<div
		data-theme={$theme}
		style="max-width: {sizes[size]};"
		class={`fixed z-50 w-[95vw] rounded-lg p-4 md:w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-base-300 flex flex-col text-base-content`}
	>
		<div class="flex justify-between mb-4">
			<div class="flex-1" />
			<button on:click={() => close()} class="brightness-75  hover:brightness-100 transition-all">
				<IconX width="28px" height="28px" />
			</button>
		</div>
		<DialogTitle class="text-lg font-semibold text-center mb-2">{title}</DialogTitle>
		<DialogDescription class="text-center">{description}</DialogDescription>
		<slot />
	</div>
</Dialog>
