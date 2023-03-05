<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import { _ } from 'svelte-i18n';
	import { Listbox, ListboxButton, ListboxOptions } from '@rgossiaux/svelte-headlessui';
	import IconCaretDown from '~icons/ph/caret-down';
	import IconCaretUp from '~icons/ph/caret-up';
	import IconInfo from '~icons/ph/info';
	import Button from '../button/Button.svelte';
	import Popover from '../popover';

	export let label: string = '';
	export let error: string = '';
	export let id: string;
	export let selected: any = null;
	export let buttonText: string = '';
	export let variants: VariantProps<typeof selectStyle> = {};
	export let info: string = '';

	const selectStyle = cva(
		'flex justify-between items-center text-sm w-full rounded-md text-left p-2',
		{
			variants: {
				intent: {
					primary: 'border bg-base-200 border-transparent',
					error: 'border-2 border-error bg-base-200'
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
	<div class="flex gap-2">
		<Listbox class="w-full" value={selected} let:open on:change={(e) => (selected = e.detail)}>
			<ListboxButton
				on:click
				class={`${selectStyle({
					...variants,
					intent: Boolean(error) ? 'error' : variants.intent
				})}`}
			>
				{buttonText}
				{#if open}
					<IconCaretUp />
				{:else}
					<IconCaretDown />
				{/if}
			</ListboxButton>
			<ListboxOptions
				class="text-sm py-1 shadow-sm max-h-60 overflow-auto bg-base-200 rounded-md mt-1"
			>
				<slot />
			</ListboxOptions>
		</Listbox>
		{#if Boolean(info)}
			<Popover placement="right">
				<Button slot="button" variants={{ intent: 'ghost' }}>
					<IconInfo width="22px" height="22px" />
				</Button>
				<div class="text-sm m-2 w-full text-center shadow-md p-2 bg-base-200 rounded-md">
					{$_(info)}
				</div>
			</Popover>
		{/if}
	</div>
	{#if Boolean(error)}
		<span class="text-error font-bold text-xs mb-2 h-2" data-testid={`${id}-error`}>
			{$_(error)}
		</span>
	{/if}
</div>
