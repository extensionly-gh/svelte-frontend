<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';

	export let title: string;
	export let variants: VariantProps<typeof settingsCardStyles> = {};

	const settingsCardStyles = cva('flex flex-col shadow-md rounded-md p-4 gap-4', {
		variants: {
			intent: {
				primary: 'bg-base-300',
				danger: 'shadow-red-200 dark:shadow-none text-error-content dark:text-red-300'
			}
		},
		defaultVariants: {
			intent: 'primary'
		}
	});
</script>

<div class={`${settingsCardStyles(variants)} md:w-[32rem]`}>
	<h3 class="text-xl font-semibold">{title}</h3>
	<div class="flex gap-2 items-end justify-center flex-col">
		<slot />
	</div>
</div>
