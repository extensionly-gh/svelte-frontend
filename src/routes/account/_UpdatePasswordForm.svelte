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

	export let isPasswordEmpty: boolean;

	const { form, errors, isSubmitting, data, isDirty } = createForm<
		z.infer<typeof passwordUpdateSchema>
	>({
		onSubmit: async (values) => {
			try {
				await trpc().user.updatePassword.mutate(values);
				toastSuccess($_(`r-acc.password.success`));
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
	<SettingsCard title={$_('r-acc.password.title')}>
		<TextInput
			type="password"
			error={$errors.currentPwd?.[0]}
			id="currentPwd"
			label={$_('r-acc.password.currpw.label')}
			autocomplete="current-password"
		/>
		<TextInput
			type="password"
			error={$errors.newPwd?.[0]}
			id="newPwd"
			label={$_('r-acc.password.pw.label')}
			autocomplete="new-password"
		/>
		<TextInput
			type="password"
			error={$errors.confirmPwd?.[0]}
			id="confirmPwd"
			label={$_('r-acc.password.cpw.label')}
			autocomplete="new-password"
		/>
		{#if isPasswordEmpty}
			<Notice text={$_('r-acc.password.info')} />
		{/if}
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
