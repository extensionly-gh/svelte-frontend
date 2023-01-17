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

	const buttonStyles = cva(
		'transition-all h-[2.5rem] min-h-[2.5rem] inline-flex items-center gap-1 text-sm',
		{
			variants: {
				intent: {
					primary: 'btn btn-primary ',
					secondary: 'btn btn-secondary',
					accent: 'btn btn-accent',
					ghost: 'btn btn-ghost',
					link: 'btn btn-link',
					text: 'hover:opacity-70 text-neutral-content',
					'text-base': 'hover:opacity-70 text-base-content',
					'no-style': 'hover:scale-95',
					danger: 'btn btn-error hover:bg-red-300 hover:border-red-300',
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
				isLoading: {
					true: 'flex gap-2'
				},
				animated: {
					true: 'hover:-translate-y-0.5'
				},
				size: {
					sm: 'btn-sm h-[1.5rem] min-h-[1.5rem] px-2',
					full: 'w-full'
				}
			},
			defaultVariants: {
				intent: 'primary'
			}
		}
	);
</script>

{#if to !== ''}
	<a
		{...$$restProps}
		href={to}
		class={`${buttonStyles(variants)}  ${$$props.class}`}
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
		class={`${buttonStyles({ ...variants, disabled: disabled || isLoading })} ${$$props.class}`}
		on:click
	>
		<slot />
		{#if isLoading}
			<IconLoading width="20px" height="20px" />
		{/if}
	</button>
{/if}
