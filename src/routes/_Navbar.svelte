<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Avatar, Button, Dialog, Menu } from '$lib/components';
	import { _ } from 'svelte-i18n';
	import IconHouse from '~icons/ph/house-fill';
	import IconBackspace from '~icons/ph/backspace';
	import IconSignOut from '~icons/ph/sign-out';
	import { authDialog } from '$lib/stores';
	import { signOut } from '@auth/sveltekit/client';

	let searchQuery: string = $page.url.searchParams.get('q') || '';
	let searchInput: HTMLInputElement | null = null;
	let isSearchFocused: boolean = false;
	let debounceTimer: any;
	let user = false;

	function handleSearchReset() {
		searchQuery = '';
		searchInput?.focus();
	}

	const debounceSearchKeyup = (v: string) => {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			searchQuery = v;
			goto(`/activities?q=${searchQuery}`);
		}, 250);
	};
</script>

<div
	class="navbar sticky flex justify-between top-2 shadow-md bg-base-300 m-2 mt-2 rounded-box mb-20 z-10"
>
	<Button
		class={`${isSearchFocused ? 'hidden md:flex' : ''}`}
		to="/"
		variants={{ intent: 'ghost' }}
		data-testid="nav-home-btn"
	>
		<IconHouse width="32px" height="32px" />
	</Button>
	<div class="flex-1 items-center justify-center text-lg gap-2">
		<label
			class={`bg-base-200 border brightness-70 flex gap-2 items-center p-2 rounded-lg cursor-text ${
				isSearchFocused ? 'border-base-content/40' : 'border-transparent'
			}`}
		>
			<input
				class={`bg-transparent w-24 md:w-72 xl:w-96 placeholder:text-base-content/40 outline-none px-2 ${
					isSearchFocused ? 'w-[22rem]' : ''
				} transition-all`}
				data-testid="nav-search"
				on:blur={() => (isSearchFocused = false)}
				bind:value={searchQuery}
				bind:this={searchInput}
				on:focus={() => (isSearchFocused = true)}
				placeholder={$_('terms.search')}
				type="text"
			/>
			<button
				class={searchQuery === '' ? 'invisible' : 'visible'}
				on:click={handleSearchReset}
				type="button"
			>
				<IconBackspace
					class="hover:scale-90 hover:text-accent text-base-content/70 transition-all"
					width="24px"
					height="24px"
				/>
			</button>
		</label>
	</div>
	<div
		class={`${isSearchFocused ? 'hidden md:flex' : ''} flex-none gap-2`}
		data-testid="nav-right-div"
	>
		<div class="hidden sm:flex items-center gap-2">
			{#if $page.data.session}
				<Button data-testid="nav-account-btn" variants={{ intent: 'no-style' }} to="/account">
					<Avatar name={'user.name'} size="sm" />
				</Button>
				<Button class="btn-circle" variants={{ intent: 'ghost' }} on:click={signOut}>
					<IconSignOut width="28px" height="28px" />
				</Button>
			{:else}
				<Button
					on:click={() => authDialog.update(() => ({ isOpen: true }))}
					variants={{ animated: true }}
				>
					{$_('terms.signin')}
				</Button>
			{/if}
		</div>
	</div>
</div>
