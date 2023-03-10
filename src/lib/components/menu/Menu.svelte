<script lang="ts">
	import { Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';
	import { Button } from '..';
	import IconArrowDown from '~icons/material-symbols/keyboard-arrow-down-rounded';
	import { createPopperActions } from 'svelte-popperjs';

	const [popperRef, popperContent] = createPopperActions({
		placement: 'auto',
		strategy: 'fixed',
		modifiers: [
			{
				name: 'flip',
				options: {
					allowedAutoPlacements: ['bottom', 'top']
				}
			}
		]
	});

	export let trigger: string | null = null;
	export let triggerId: string = '';
	export let items: {
		id?: string;
		text: string;
		icon: any;
		classes?: string;
		to?: string;
		action?: () => void;
	}[];
</script>

<Menu {...$$restProps} let:open>
	<div use:popperRef>
		<MenuButton>
			{#if trigger !== null}
				<Button
					data-testid={`menu-trigger-${triggerId}`}
					variants={{ intent: 'ghost', case: 'normal', size: 'sm' }}
				>
					<p class="text-sm font-semibold truncate max-w-[7rem]">{trigger}</p>
					<IconArrowDown width="20px" height="20px" />
				</Button>
			{:else}
				<slot name="trigger" />
			{/if}
		</MenuButton>
	</div>
	{#if open}
		<div use:popperContent>
			<MenuItems class="shadow bg-base-200 rounded-lg p-1 my-2 flex flex-col gap-1">
				{#each items as item}
					<MenuItem
						class="cursor-pointer transition-transform hover:scale-95 hover:bg-primary hover:text-primary-content rounded-md {item.classes}"
					>
						<Button
							data-testid={`menu-item-${item.id ?? item.text}`}
							class="p-2 items-center justify-center whitespace-nowrap font-semibold text-sm"
							variants={{ intent: 'no-style' }}
							to={item.to ?? ''}
							on:click={() => {
								if (item.action) {
									item.action();
								}
							}}
						>
							<svelte:component this={item.icon} width="20px" height="20px" />
							{item.text}
						</Button>
					</MenuItem>
				{/each}
			</MenuItems>
		</div>
	{/if}
</Menu>
