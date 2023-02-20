<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { Notice } from '$lib/components/notice';
	import { Button, Dialog, SettingsCard, TextInput } from '$lib/components';
	import { createForm } from 'felte';
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';

	let isOpen = false;

	function handleCloseDialog() {
		isOpen = false;
	}

	const { form, isSubmitting, data } = createForm({
		initialValues: {
			emailDelete: ''
		},
		onSuccess() {
			signOut({ callbackUrl: '/?success=r-acc.delete.success' });
		}
	});
</script>

<SettingsCard variants={{ intent: 'danger' }} title={$_('r-acc.delete.title')}>
	<Notice variants={{ intent: 'danger' }} text={$_('r-acc.delete.info-short')} />
	<Button
		data-testid="delete-account-dialog-open-button"
		variants={{ width: 'short', intent: 'danger' }}
		on:click={() => (isOpen = true)}
	>
		{$_('terms.delete')}
	</Button>
</SettingsCard>

<Dialog
	size="xs"
	{isOpen}
	close={handleCloseDialog}
	description={$_('r-acc.delete.dialog.subtitle')}
	title={$_('r-acc.delete.dialog.title')}
>
	<div class="mt-4">
		<form
			use:form
			method="POST"
			action="/account?/deleteAccount"
			class="flex items-center gap-4 flex-col"
		>
			<TextInput id="emailDelete" label={$_('r-acc.delete.dialog.description')} />
			<Button
				data-testid="delete-account-dialog-confirm-button"
				type="submit"
				isLoading={$isSubmitting}
				disabled={$data.emailDelete !== $page.data.session?.user.email}
				variants={{ intent: 'danger' }}
			>
				{$_('r-acc.delete.dialog.confirm')}
			</Button>
		</form>
	</div>
</Dialog>
