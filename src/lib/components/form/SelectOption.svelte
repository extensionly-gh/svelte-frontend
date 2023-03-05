<script lang="ts">
	import { ListboxOption } from '@rgossiaux/svelte-headlessui';
	import IconCheck from '~icons/ph/check-bold';
	import { _ } from 'svelte-i18n';

	export let skeleton = false;
	export let value: string | number = '';
</script>

<ListboxOption
	{value}
	let:selected
	class={`${
		skeleton ? 'cursor-wait' : 'cursor-pointer'
	} p-2 hover:text-secondary hover:bg-secondary-content/50 flex justify-between items-center`}
>
	{#if skeleton}
		<div class="h-4 w-full bg-base-content/20 rounded-md animate-pulse" />
	{:else if selected}
		<span class="font-semibold pr-2">
			<slot />
		</span>
		<IconCheck width="22px" height="22px" />
	{:else}
		<slot />
	{/if}
</ListboxOption>
