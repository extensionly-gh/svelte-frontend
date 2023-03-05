<script lang="ts">
	import type { VariantProps } from 'class-variance-authority';
	import { inputStyles } from './text-styles';
	import { _ } from 'svelte-i18n';

	export let label: string = '';
	export let placeholder: string = '';
	export let id: string;
	export let error: string = '';
	export let element: HTMLTextAreaElement | null = null;
	export let variants: VariantProps<typeof inputStyles> = {};
</script>

<div class={`flex flex-col items-start gap-1 w-full ${$$props.class}`}>
	{#if Boolean(label)}
		<label class="label-text" for={id}>{label}</label>
	{/if}
	<textarea
		{placeholder}
		class={`w-full ${inputStyles({
			intent: !!error ? 'error' : variants.intent,
			height: 'textarea'
		})}`}
		bind:this={element}
		name={id}
		{id}
		cols="30"
		rows="10"
	/>
	{#if !!error}
		<span class="text-error font-bold text-xs mb-2 h-2" data-testid={`${id}-error`}>
			{$_(error)}
		</span>
	{/if}
</div>
