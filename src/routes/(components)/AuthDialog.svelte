<script lang="ts">
	import { Button, Dialog } from '$lib/components';
	import { _ } from 'svelte-i18n';
	import IconGoogle from '~icons/logos/google-icon';
	import SigninForm from './SigninForm.svelte';
	import SignupForm from './SignupForm.svelte';
	import ForgotpwForm from './ForgotpwForm.svelte';
	import { authDialog } from '$lib/stores';
	import { openPopupWindow } from '$lib/utils';

	$: context = $authDialog.context ?? 'signin';
	$: providerBtnString = context === 'signup' ? 'signup' : 'signin';

	function handleSwitchContext() {
		switch (context) {
			case 'signin':
				authDialog.update(() => ({ isOpen: true, context: 'signup' }));
				break;
			case 'signup':
				authDialog.update(() => ({ isOpen: true, context: 'signin' }));
				break;
			case 'forgotpw':
				authDialog.update(() => ({ isOpen: true, context: 'signin' }));
				break;
		}
	}

	async function handleSigninWithGoogle() {
		openPopupWindow({ url: '/auth/google', w: 400, h: 500 });
	}
</script>

<Dialog
	size="xs"
	description={$_(`dialogs.auth.description.${context}`)}
	title={$_(`dialogs.auth.title.${context}`)}
	isOpen={$authDialog.isOpen}
	close={() => authDialog.update(() => ({ isOpen: false }))}
>
	<div class="px-2 flex justify-center items-center flex-col mt-4">
		{#if context == 'signin' || context == 'signup'}
			<div class={`${context == 'signin' ? 'block' : 'hidden'}`}>
				<Button
					on:click={handleSigninWithGoogle}
					variants={{ intent: 'provider', provider: 'google' }}
				>
					<IconGoogle width="18px" height="18px" />
					<p class="flex-1">{$_(`terms.${providerBtnString}`)} {$_('terms.with')} Google</p>
				</Button>
				<p class="text-xs text-center font-medium mt-2">
					{$_('dialogs.auth.terms-agreement.1')}
					<a class="hover:opacity-75 transition-opacity font-bold" href="/legal/privacy">
						{$_('terms.privacy-policy')}
					</a>
					{$_('dialogs.auth.terms-agreement.2')}
					<a class="hover:opacity-75 transition-opacity font-bold" href="/legal/terms">
						{$_('terms.terms-and-conditions')}.
					</a>
				</p>
				<div class="relative flex py-4 items-center w-full">
					<div class="flex-grow border-t border-base-content" />
					<span class="flex-shrink mx-4 text-sm text-base-content"
						>{$_('dialogs.auth.or-continue')}</span
					>
					<div class="flex-grow border-t border-base-content" />
				</div>
				<SigninForm />
			</div>
			<div class={`${context == 'signup' ? 'block' : 'hidden'}`}>
				<SignupForm />
			</div>
		{:else if context == 'forgotpw'}
			<ForgotpwForm />
		{/if}
		<div class="flex flex-col gap-3 my-4 items-center justify-center">
			<Button
				data-testid="auth-dialog-context-btn"
				on:click={handleSwitchContext}
				variants={{ intent: 'text-base', size: 'sm' }}
			>
				{$_(`dialogs.auth.content.${context}-btn`)}
			</Button>
			{#if context == 'signin'}
				<Button
					data-testid="auth-dialog-forgotpw-btn"
					on:click={() => (context = 'forgotpw')}
					variants={{ intent: 'text-base', size: 'sm' }}
				>
					{$_('dialogs.auth.forgot-password')}
				</Button>
			{/if}
		</div>
	</div>
</Dialog>
