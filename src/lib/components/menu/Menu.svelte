<script lang="ts">
	import { Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';
	import { Button } from '..';
	import IconArrowDown from '~icons/material-symbols/keyboard-arrow-down-rounded';

	export let trigger: string;
	export let items: {
		text: string;
		icon: any;
		classes?: string;
		to?: string;
		action?: () => void;
	}[];
</script>

<Menu class="relative">
	<MenuButton>
		<Button variants={{ intent: 'ghost', case: 'normal', size: 'sm' }}>
			<p class="text-sm font-semibold">{trigger}</p>
			<IconArrowDown width="20px" height="20px" />
		</Button>
	</MenuButton>
	<MenuItems
		class="absolute shadow bg-base-200 rounded-lg p-1 z-50 mt-3 right-0 flex flex-col gap-1"
	>
		{#each items as item}
			<MenuItem
				class="cursor-pointer transition-transform hover:scale-95 hover:bg-primary hover:text-primary-content rounded-md {item.classes}"
			>
				<Button
					class="p-2 items-center justify-center whitespace-nowrap font-semibold text-sm"
					variants={{ intent: 'no-style' }}
					to={item.to}
					on:click={() => {
						if (item.action && !item.to) {
							item.action();
						}
					}}
				>
					<svelte:component this={item.icon} width="24px" height="24px" />
					{item.text}
				</Button>
			</MenuItem>
		{/each}
	</MenuItems>
</Menu>
