<script lang="ts">
	import type { VariantProps } from 'class-variance-authority';
	import type { inputStyles } from './text-styles';

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
	<textarea {placeholder} class="w-full " bind:this={element} name={id} {id} cols="30" rows="10" />
	<span>{error}</span>
</div>
