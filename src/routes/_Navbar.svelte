<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Avatar, Button, Menu } from '$lib/components';
	import { authDialog } from '$lib/stores';
	import { signOut } from '@auth/sveltekit/client';
	import { _ } from 'svelte-i18n';
	import IconHouse from '~icons/ph/house-fill';
	import IconList from '~icons/ph/list';
	import IconMagnifyingGlass from '~icons/ph/magnifying-glass';
	import IconSignOut from '~icons/ph/sign-out';
	import IconUser from '~icons/ph/user';

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
	class="navbar sticky flex justify-between top-2 shadow-md bg-base-300 m-2 rounded-box mb-20 z-10 gap-2 px-3"
>
	<div class="lg:w-52">
		<Button to="/" variants={{ intent: 'ghost' }} data-testid="nav-home-btn">
			<IconHouse width="32px" height="32px" />
		</Button>
	</div>
	<div class="flex-grow items-center justify-center text-lg gap-2 max-w-xs">
		<Button
			class="flex-grow"
			id="search"
			on:click={() => goto(`/activities`)}
			disabled={$page.url.pathname == '/activities'}
		>
			<IconMagnifyingGlass width="24px" height="24px" />
			{$_('terms.search')}
		</Button>
	</div>
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
				class="hover:-translate-y-0.5"
				on:click={() => authDialog.update(() => ({ isOpen: true }))}
			>
				{$_('terms.signin')}
			</Button>
		{/if}
	</div>
</div>
