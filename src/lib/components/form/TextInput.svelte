<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import { _ } from 'svelte-i18n';
	import Button from '../button/Button.svelte';
	import IconEyeClosed from '~icons/ph/eye-closed';
	import IconEyeOpened from '~icons/ph/eye';

	export let variants: VariantProps<typeof inputStyles> = {};
	export let label: string;
	export let id: string;
	export let error: string = '';
	export let type: string = 'text';
	export let element: HTMLInputElement | null = null;

	const isInitialTypePassword = type === 'password';

	$: isPasswordHidden = type === 'password';

	function togglePassword() {
		type = isPasswordHidden ? 'text' : 'password';
	}

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

<label class={`flex flex-col items-start gap-1 w-full ${$$props.class}`} for={id}>
	<span class="label-text">{label}</span>
	<div class="w-full flex gap-2">
		<input
			bind:this={element}
			maxlength="255"
			class={inputStyles({ intent: !!error ? 'error' : variants.intent })}
			data-testid={`${id}-input`}
			{id}
			name={id}
			{type}
			{...$$restProps}
		/>
		{#if isInitialTypePassword}
			<Button variants={{ intent: 'ghost' }} on:click={togglePassword}>
				{#if isPasswordHidden}
					<IconEyeClosed width="24px" height="24px" />
				{:else}
					<IconEyeOpened width="24px" height="24px" />
				{/if}
			</Button>
		{/if}
		<slot name="right" />
	</div>
	{#if !!error}
		<span class="text-error font-bold text-xs mb-2 h-2" data-testid={`${id}-error`}>
			{$_(error)}
		</span>
	{/if}
</label>
