<script lang="ts">
	import { createForm } from 'felte';
	import Button from './Button.svelte';
	import { DateTime } from 'luxon';
	import { onMount } from 'svelte';

	export let endTime: string;
	export let onSubmit: (() => void) | (() => Promise<void>);

	let seconds = 0;

	const { form, isSubmitting } = createForm({
		onSubmit: async () => {
			await onSubmit();
		}
	});

	const timer = (endTime: string) => {
		const diffInSeconds = DateTime.fromISO(endTime).diffNow('seconds').seconds;
		if (diffInSeconds >= -1) {
			seconds = diffInSeconds;
		}
	};

	onMount(() => {
		timer(endTime);
		const interval = setInterval(() => {
			timer(endTime);
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

<form use:form class={`${seconds > 0 || $isSubmitting ? 'cursor-not-allowed' : ''}`}>
	<Button
		class={$$props.class}
		disabled={seconds > 0 || $isSubmitting}
		isLoading={$isSubmitting}
		type="submit"
	>
		{#if seconds > 0}
			<span class="tracking-wider">
				{String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(
					Math.floor(seconds) % 60
				).padStart(2, '0')}
			</span>
		{:else}
			<slot />
		{/if}
	</Button>
</form>
