<script lang="ts">
	import { Button, Dialog } from '$lib/components';
	import { _ } from 'svelte-i18n';
	import IconGoogle from '~icons/logos/google-icon';
	import SigninForm from './_SigninForm.svelte';
	import SignupForm from './_SignupForm.svelte';
	import ForgotpwForm from './_ForgotpwForm.svelte';
	import { authDialog } from '$lib/stores';

	let isOpen: boolean;
	let context: 'signin' | 'signup' | 'forgotpw';

	$: providerBtnString = context === 'signup' ? 'signup' : 'signin';

	authDialog.subscribe((v) => {
		isOpen = v.isOpen;
		context = v.context ?? 'signin';
	});

	function handleSwitchContext() {
		switch (context) {
			case 'signin':
				context = 'signup';
				break;
			case 'signup':
				context = 'signin';
				break;
			case 'forgotpw':
				context = 'signin';
				break;
		}
	}
</script>

<Dialog
	size="xs"
	description={$_('dialog.auth.description')}
	title={$_('dialog.auth.title')}
	bind:isOpen
	close={() => authDialog.update(() => ({ isOpen: false }))}
>
	<div class="px-2 flex justify-center items-center flex-col mt-8">
		<Button variants={{ intent: 'provider', provider: 'google' }}>
			<IconGoogle width="18px" height="18px" />
			<p class="flex-1">{$_(`terms.${providerBtnString}`)} with Google</p>
		</Button>
		<div class="relative flex py-8 items-center w-full">
			<div class="flex-grow border-t border-base-content" />
			<span class="flex-shrink mx-4 text-sm text-base-content">{$_('dialog.auth.or-continue')}</span
			>
			<div class="flex-grow border-t border-base-content" />
		</div>
		{#if context == 'signin'}
			<SigninForm />
		{:else if context == 'signup'}
			<SignupForm />
		{:else if context == 'forgotpw'}
			<ForgotpwForm />
		{/if}
		<div class="flex flex-col gap-3 my-4 items-center justify-center">
			<Button on:click={handleSwitchContext} variants={{ intent: 'text-base', size: 'sm' }}>
				{$_(`dialog.auth.content.${context}-btn`)}
			</Button>
			{#if context == 'signin'}
				<Button
					on:click={() => (context = 'forgotpw')}
					variants={{ intent: 'text-base', size: 'sm' }}
				>
					{$_('dialog.auth.forgot-password')}
				</Button>
			{/if}
		</div>
	</div>
</Dialog>
