<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import IconInfo from '~icons/ph/info';
	import IconDanger from '~icons/ph/warning-octagon';
	import IconSuccess from '~icons/ph/check-circle';
	import IconWarning from '~icons/ph/warning';

	export let text: string;
	export let variants: VariantProps<typeof noticeStyles> = { intent: 'info' };

	const noticeStyles = cva('flex gap-2 items-center rounded-lg p-2 w-full', {
		variants: {
			intent: {
				info: 'bg-info-content text-info',
				success: 'bg-success-content text-success',
				warning: 'bg-warning-content text-warning',
				danger: 'bg-error-content text-error'
			}
		},
		defaultVariants: {
			intent: 'info'
		}
	});
</script>

<div class={noticeStyles(variants)}>
	{#if variants.intent === 'danger'}
		<IconDanger class="w-10" width="2.5rem" height="2.5rem" />
	{:else if variants.intent === 'success'}
		<IconSuccess class="w-10" width="2.5rem" height="2.5rem" />
	{:else if variants.intent === 'info'}
		<IconInfo class="w-10" width="2.5rem" height="2.5rem" />
	{:else if variants.intent === 'warning'}
		<IconWarning class="w-10" width="2.5rem" height="2.5rem" />
	{/if}
	<p class="text-sm font-semibold w-full">
		{text}
	</p>
</div>
