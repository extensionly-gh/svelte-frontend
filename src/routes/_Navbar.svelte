<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Avatar, Button, Menu, TextInput } from '$lib/components';
	import { _ } from 'svelte-i18n';
	import IconHouse from '~icons/ph/house-fill';
	import IconBackspace from '~icons/ph/backspace';
	import IconMagnifyingGlass from '~icons/ph/magnifying-glass';
	import IconList from '~icons/ph/list';
	import IconSignOut from '~icons/ph/sign-out';
	import IconUser from '~icons/ph/user';
	import { authDialog } from '$lib/stores';
	import { signOut } from '@auth/sveltekit/client';
	import { createForm } from 'felte';
	import type { z } from 'zod';
	import { searchSchema } from '$lib/schemas';
	import { validateSchema } from '@felte/validator-zod';

	const { form, data } = createForm<z.infer<typeof searchSchema>>({
		onSubmit: ({ search }) => {
			search != '' ? goto(`/activities?query=${search}`) : goto(`/activities`);
		},
		validate: validateSchema(searchSchema)
	});

	const userMenuItems = [
		{ text: $_('terms.my-account'), icon: IconUser, to: '/account', id: 'my-account' },
		{
			text: $_('terms.signout'),
			classes: 'text-error',
			action: signOut,
			icon: IconSignOut,
			id: 'signout'
		}
	];
</script>

<div
	class="navbar sticky flex justify-between top-2 shadow-md bg-base-300 m-2 rounded-box mb-20 z-10 gap-2"
>
	<div class="lg:w-52">
		<Button to="/" variants={{ intent: 'ghost' }} data-testid="nav-home-btn">
			<IconHouse width="32px" height="32px" />
		</Button>
	</div>
	<form use:form class="flex-grow items-center justify-center text-lg gap-2 max-w-md">
		<Button type="submit" variants={{ intent: 'ghost', width: 'icon' }}>
			<IconMagnifyingGlass width="24px" height="24px" />
		</Button>
		<TextInput id="search" placeholder={$_('terms.search')}>
			<div slot="right">
				{#if $data.search !== ''}
					<Button type="reset" variants={{ intent: 'ghost', width: 'icon' }}>
						<IconBackspace width="24px" height="24px" />
					</Button>
				{/if}
			</div>
		</TextInput>
	</form>
	<div class={`gap-2 lg:w-52 items-end justify-end flex`} data-testid="nav-right-div">
		{#if $page.data.session?.user}
			<div class="hidden sm:flex bg-base-200 p-2 items-center rounded-md gap-2">
				<Avatar
					data-testid="user-avatar"
					src={$page.data.session.user?.image || $page.data.session.user?.name}
					size="sm"
				/>
				<Menu trigger={$page.data.session.user.name} triggerId="user-menu" items={userMenuItems} />
			</div>
			<Menu class="flex sm:hidden" items={userMenuItems}>
				<Button slot="trigger" variants={{ intent: 'ghost' }}>
					<IconList width="32px" height="32px" />
				</Button>
			</Menu>
		{:else}
			<Button
				data-testid="nav-signin-btn"
				on:click={() => authDialog.update(() => ({ isOpen: true }))}
				variants={{ animated: true }}
			>
				{$_('terms.signin')}
			</Button>
		{/if}
	</div>
</div>
