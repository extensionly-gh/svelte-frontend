<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';

	export let title: string;
	export let variants: VariantProps<typeof settingsCardStyles> = {};

	const settingsCardStyles = cva('flex flex-col shadow-md rounded-md p-4 gap-4', {
		variants: {
			intent: {
				primary: 'bg-base-300',
				danger: 'dark:bg-[#140004] bg-[#6d0000] text-error'
			}
		},
		defaultVariants: {
			intent: 'primary'
		}
	});
</script>

<div class={`${settingsCardStyles(variants)} w-[24rem] lg:w-[28rem]`}>
	<h3 class="text-xl font-semibold">{title}</h3>
	<div class="flex gap-4 items-end justify-center flex-col">
		<slot />
	</div>
</div>
