<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { Button, SettingsCard, TextInput } from '$lib/components';
	import { Notice } from '$lib/components/notice';
	import { toastSuccess } from '$lib/components/toast';
	import { passwordCreateSchema } from '$lib/schemas';
	import { trpc } from '$lib/trpc/client';
	import { handleErrorInClient } from '$lib/utils';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	const { form, errors, isSubmitting, data, isDirty } = createForm<
		z.infer<typeof passwordCreateSchema>
	>({
		onSubmit: async (values) => {
			try {
				await trpc().user.createPassword.mutate(values);
				toastSuccess($_(`r-acc.password.empty.success`));
				await invalidateAll();
			} catch (error) {
				handleErrorInClient(error);
			}
		},
		validate: validateSchema(passwordCreateSchema)
	});
</script>

<form
	use:form
	method="POST"
	action="/account?/createPassword"
	enctype="application/x-www-form-urlencoded"
>
	<SettingsCard title={$_(`r-acc.password.empty.title`)}>
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
		<Notice text={$_('r-acc.password.info')} />
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
