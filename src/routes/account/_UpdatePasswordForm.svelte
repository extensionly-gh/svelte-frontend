<script lang="ts">
	import { Button, TextInput } from '$lib/components';
	import { Notice } from '$lib/components/notice';
	import { toastSuccess } from '$lib/components/toast';
	import { passwordUpdateSchema } from '$lib/schemas';
	import { trpc } from '$lib/trpc/client';
	import { handleErrorInClient } from '$lib/utils';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import SettingsCard from './_SettingsCard.svelte';

	const { form, errors, isSubmitting, isDirty, reset } = createForm<
		z.infer<typeof passwordUpdateSchema>
	>({
		onSubmit: async (values) => {
			try {
				await trpc().user.updatePassword.mutate(values);
				toastSuccess($_(`r-acc.password.not-empty.success`));
				reset();
			} catch (error) {
				handleErrorInClient(error);
			}
		},
		validate: validateSchema(passwordUpdateSchema)
	});
</script>

<form
	use:form
	method="POST"
	action="/account?/updatePassword"
	enctype="application/x-www-form-urlencoded"
>
	<SettingsCard title={$_(`r-acc.password.not-empty.title`)}>
		<TextInput
			type="password"
			error={$errors.currentPwd?.[0]}
			id="currentPwd"
			label={$_('r-acc.password.currpw-label')}
			autocomplete="current-password"
		/>
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
