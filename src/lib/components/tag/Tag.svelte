<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';

	export let variants: VariantProps<typeof tagStyles> = {};

	const tagStyles = cva(
		'px-1 rounded-lg flex gap-1 items-center font-semibold border-2 dark:brightness-75',
		{
			variants: {
				intent: {
					primary: 'border-accent text-accent dark:brightness-75 line-clamp-1',
					online: 'border-transparent bg-red-700 text-red-100',
					project: 'border-transparent bg-secondary text-secondary-content line-clamp-1'
				}
			},
			defaultVariants: {
				intent: 'primary'
			}
		}
	);
</script>

<div class={tagStyles(variants)}>
	<slot />
</div>
