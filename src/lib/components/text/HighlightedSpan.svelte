<script lang="ts">
	import { DateIs } from '$lib/utils/activity.utils';
	import { cva, type VariantProps } from 'class-variance-authority';

	export let variants: VariantProps<typeof spanStyles> = {};

	const spanStyles = cva('font-semibold', {
		variants: {
			intent: {
				accent: 'text-accent dark:brightness-75'
			},
			dateStatus: {
				[DateIs.Ended]: 'text-red-400 dark:text-red-500 font-semibold',
				[DateIs.NotStarted]: 'text-blue-400 dark:text-blue-500 font-semibold',
				[DateIs.Open]: 'text-green-400 dark:text-green-500'
			}
		},
		defaultVariants: {
			intent: 'accent'
		}
	});
</script>

<span class={spanStyles(variants)}>
	<slot />
</span>
