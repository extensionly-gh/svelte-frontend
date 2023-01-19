<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';

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

	export let title: string;
	export let variants: VariantProps<typeof settingsCardStyles> = {};
</script>

<div class={`${settingsCardStyles(variants)} md:w-[36rem]`}>
	<h3 class="text-xl font-semibold">{title}</h3>
	<div class="flex gap-2 items-end justify-center">
		<slot />
	</div>
</div>
