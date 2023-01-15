<script lang="ts">
	import { Button, Dialog } from '$lib/components';
	import { _ } from 'svelte-i18n';
	import IconGoogle from '~icons/logos/google-icon';
	import SigninForm from './_SigninForm.svelte';
	import SignupForm from './_SignupForm.svelte';
	import ForgotpwForm from './_ForgotpwForm.svelte';

	export let isOpen = false;

	let authContext: 'signin' | 'signup' | 'forgotpw' = 'signin';
	$: providerBtnString = authContext === 'signup' ? 'signup' : 'signin';

	function handleSwitchContext() {
		switch (authContext) {
			case 'signin':
				authContext = 'signup';
				break;
			case 'signup':
				authContext = 'signin';
				break;
			case 'forgotpw':
				authContext = 'signin';
				break;
		}
	}
</script>

<Dialog
	size="xs"
	description={$_('dialog.auth.description')}
	title={$_('dialog.auth.title')}
	bind:isOpen
>
	<div class="px-2 flex justify-center items-center flex-col my-2">
		<Button variants={{ intent: 'provider', provider: 'google' }}>
			<IconGoogle width="18px" height="18px" />
			<p class="flex-1">{$_(`terms.${providerBtnString}`)} with Google</p>
		</Button>
		<div class="relative flex py-4 items-center w-full">
			<div class="flex-grow border-t border-base-content" />
			<span class="flex-shrink mx-4 text-sm text-base-content">{$_('dialog.auth.or-continue')}</span
			>
			<div class="flex-grow border-t border-base-content" />
		</div>
		{#if authContext == 'signin'}
			<SigninForm />
		{:else if authContext == 'signup'}
			<SignupForm />
		{:else if authContext == 'forgotpw'}
			<ForgotpwForm />
		{/if}
		<div class="flex flex-col gap-3 my-4 items-center justify-center">
			<Button on:click={handleSwitchContext} variants={{ intent: 'text-base', size: 'sm' }}>
				{$_(`dialog.auth.content.${authContext}-btn`)}
			</Button>
			{#if authContext == 'signin'}
				<Button
					on:click={() => (authContext = 'forgotpw')}
					variants={{ intent: 'text-base', size: 'sm' }}
				>
					{$_('dialog.auth.forgot-password')}
				</Button>
			{/if}
		</div>
	</div>
</Dialog>
