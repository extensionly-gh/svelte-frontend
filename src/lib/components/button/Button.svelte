<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import IconLoading from '~icons/eos-icons/loading';
	import IconArrowSquareOut from '~icons/ph/arrow-square-out';

	export let variants: VariantProps<typeof buttonStyles> = {};
	export let to: string = '';
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let isLoading: boolean = false;
	export let disabled: boolean = false;

	const isExternal = to ? !/^(\/|#)(.*)/g.test(to) : false;

	const buttonStyles = cva('transition-all flex items-center gap-1', {
		variants: {
			intent: {
				primary: 'btn btn-primary',
				secondary: 'btn btn-secondary',
				accent: 'btn btn-accent',
				ghost: 'btn btn-ghost',
				link: 'btn btn-link',
				text: 'hover:opacity-75 transition-opacity font-bold h-[1rem] min-h-[1rem] whitespace-normal',
				'text-base': 'hover:opacity-70 text-base-content',
				'no-style': 'hover:scale-95',
				danger: 'btn btn-error hover:bg-error/80 hover:border-error/80',
				provider: 'btn normal-case hover:opacity-70 text-[0.95rem] w-full border-0'
			},
			case: {
				normal: 'normal-case',
				upper: 'uppercase',
				lower: 'lowercase'
			},
			provider: {
				google: 'bg-white text-black hover:bg-white'
			},
			disabled: {
				true: 'cursor-not-allowed'
			},
			icon: {
				true: 'text-accent hover:bg-accent/20 btn-circle'
			},
			anchor: {
				true: 'rounded-full w-full h-full'
			},
			isLoading: {
				true: 'flex gap-2'
			},
			width: {
				full: 'w-full',
				short: 'w-[6rem]',
				icon: 'w-[2rem] p-1'
			},
			size: {
				sm: 'btn-sm h-[1.5rem] min-h-[1.5rem] px-2',
				md: 'btn-md h-[2.5rem] min-h-[2.5rem] px-3'
			}
		},
		defaultVariants: {
			intent: 'primary',
			size: 'md'
		},
		compoundVariants: [
			{
				intent: 'text',
				size: 'sm'
			}
		]
	});
</script>

{#if to !== ''}
	<a
		{...$$restProps}
		href={to}
		class={buttonStyles({ ...variants, class: $$props.class })}
		target={isExternal ? '_blank' : ''}
	>
		<slot />
		{#if isExternal}
			<IconArrowSquareOut width="16px" height="16px" />
		{/if}
	</a>
{:else}
	<button
		{...$$restProps}
		{type}
		disabled={disabled || isLoading}
		class={buttonStyles({ ...variants, disabled: disabled || isLoading, class: $$props.class })}
		on:click
	>
		{#if isLoading}
			<IconLoading width="20px" height="20px" />
		{:else}
			<slot />
		{/if}
	</button>
{/if}
