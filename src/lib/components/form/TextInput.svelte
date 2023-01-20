<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import { _ } from 'svelte-i18n';

	export let variants: VariantProps<typeof inputStyles> = {};
	export let label: string;
	export let id: string;
	export let error: string = '';

	const inputStyles = cva(
		'focus:outline-none input p-2 h-[2.5rem] rounded-md placeholder:text-base-content/40 placeholder:text-sm w-full text-sm',
		{
			variants: {
				intent: {
					primary: 'border bg-base-200 focus:border-base-content/40',
					darker: 'bg-gray-200 dark:bg-gray-900',
					error: 'border-error border-2'
				}
			},
			defaultVariants: {
				intent: 'primary'
			}
		}
	);
</script>

<label class="flex flex-col items-start gap-1 w-full" for={id}>
	<span class="label-text">{label}</span>
	<div class="w-full flex gap-2">
		<input
			class={inputStyles({ intent: !!error ? 'error' : variants.intent })}
			data-testid={`${id}-input`}
			{id}
			name={id}
			{...$$restProps}
		/>
		<slot name="right" />
	</div>
	{#if !!error}
		<span class="text-error font-bold text-xs my-2 h-2" data-testid={`${id}-error`}>
			{$_(error)}
		</span>
	{/if}
</label>
