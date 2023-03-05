<script lang="ts">
	import { Popover, PopoverButton, PopoverPanel, Transition } from '@rgossiaux/svelte-headlessui';
	import { createPopperActions, type PopperOptions } from 'svelte-popperjs';

	export let placement:
		| 'auto'
		| 'auto-start'
		| 'auto-end'
		| 'top'
		| 'top-start'
		| 'top-end'
		| 'bottom'
		| 'bottom-start'
		| 'bottom-end'
		| 'right'
		| 'right-start'
		| 'right-end'
		| 'left'
		| 'left-start'
		| 'left-end' = 'auto';

	const [popperRef, popperContent] = createPopperActions({
		placement,
		strategy: 'absolute'
	});
</script>

<Popover class="relative">
	<PopoverButton use={[popperRef]}>
		<slot name="button" />
	</PopoverButton>

	<PopoverPanel class="absolute" use={[popperContent]}>
		<slot />
	</PopoverPanel>
</Popover>
