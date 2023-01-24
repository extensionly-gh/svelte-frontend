<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, SettingsCard, TextInput } from '$lib/components';
	import { toastSuccess } from '$lib/components/toast';
	import { formPasswordResetSchema, passwordResetSchema } from '$lib/schemas';
	import { trpc } from '$lib/trpc/client';
	import { handleErrorInClient } from '$lib/utils';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form, errors, isSubmitting, isDirty, reset } = createForm<
		z.infer<typeof formPasswordResetSchema>
	>({
		onSubmit: async ({ newPwd, confirmPwd }) => {
			try {
				await trpc().user.resetPassword.query({
					token: data.token,
					newPwd,
					confirmPwd
				});
				toastSuccess($_('r-acc.password.not-empty.success'));
				goto('/');
			} catch (error) {
				handleErrorInClient(error);
			}
		},
		validate: validateSchema(formPasswordResetSchema)
	});
</script>

<form use:form>
	<SettingsCard title={$_('v-password.reset-pw-title')}>
		<TextInput
			type="password"
			error={$errors.newPwd?.[0]}
			id="newPwd"
			label={$_('r-acc.password.pw-label')}
			autocomplete="new-password"
		/>
		<TextInput
			type="password"
			error={$errors.confirmPwd?.[0]}
			id="confirmPwd"
			label={$_('r-acc.password.cpw-label')}
			autocomplete="new-password"
		/>
		<Button
			disabled={!$isDirty}
			variants={{ width: 'short' }}
			isLoading={$isSubmitting}
			type="submit"
		>
			{$_('terms.save')}
		</Button>
	</SettingsCard>
</form>
