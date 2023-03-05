<script lang="ts">
	import { ListboxOption } from '@rgossiaux/svelte-headlessui';
	import IconCheck from '~icons/ph/check-bold';

	export let value: string | number;
</script>

<ListboxOption
	{value}
	let:selected
	class="p-2 hover:text-secondary cursor-pointer hover:bg-secondary-content/50"
>
	{#if selected}
		<span class="font-semibold">
			<slot />
		</span>
		<IconCheck width="22px" height="22px" class="float-right" />
	{:else}
		<slot />
	{/if}
</ListboxOption>
