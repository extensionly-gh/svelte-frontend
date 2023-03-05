<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import { _ } from 'svelte-i18n';
	import { Listbox, ListboxButton, ListboxOptions } from '@rgossiaux/svelte-headlessui';
	import IconCaretDoubleDown from '~icons/ph/caret-double-down';
	import IconCaretDoubleUp from '~icons/ph/caret-double-up';

	export let label: string = '';
	export let error: string = '';
	export let id: string;
	export let selected: any = null;
	export let buttonText: string = '';
	export let variants: VariantProps<typeof selectStyle> = {};

	const selectStyle = cva(
		'flex justify-between items-center text-sm w-full rounded-md text-left p-2',
		{
			variants: {
				intent: {
					primary: 'border bg-base-200 focus:border-base-content/40'
				}
			},
			defaultVariants: { intent: 'primary' }
		}
	);
</script>

<div>
	{#if Boolean(label)}
		<span class="label-text cursor-default">{label}</span>
	{/if}
	<Listbox value={selected} let:open on:change={(e) => (selected = e.detail)}>
		<ListboxButton class={`${selectStyle(variants)}`}
			>{buttonText}
			{#if open}
				<IconCaretDoubleUp />
			{:else}
				<IconCaretDoubleDown />
			{/if}
		</ListboxButton>
		<ListboxOptions
			class="text-sm py-1 shadow-sm max-h-60 overflow-auto bg-base-200 rounded-md mt-1 border"
		>
			<slot />
		</ListboxOptions>
	</Listbox>
	{#if Boolean(error)}
		<span class="text-error font-bold text-xs mb-2 h-2" data-testid={`${id}-error`}>
			{$_(error)}
		</span>
	{/if}
</div>
