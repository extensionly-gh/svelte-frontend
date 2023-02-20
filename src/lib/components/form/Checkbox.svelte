<script lang="ts">
	import { _ } from 'svelte-i18n';

	export let label: string = '';
	export let id: string;
	export let error: string = '';
</script>

<div class={`form-control w-full ${$$props.class}`}>
	<div class="w-full flex gap-2 items-center justify-center">
		<input
			class="checkbox"
			name={id}
			data-testid={`${id}-checkbox`}
			{id}
			type="checkbox"
			{...$$restProps}
		/>
		<slot name="label">
			<span class="label-text">{label}</span>
		</slot>
	</div>
	{#if !!error}
		<span class="text-error font-bold text-xs mb-2 h-2" data-testid={`${id}-error`}>
			{$_(error)}
		</span>
	{/if}
</div>
