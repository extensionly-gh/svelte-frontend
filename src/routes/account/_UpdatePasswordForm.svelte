<script lang="ts">
	import { Button, TextInput } from '$lib/components';
	import { Notice } from '$lib/components/notice';
	import { toastSuccess } from '$lib/components/toast';
	import { passwordUpdateSchema } from '$lib/schemas';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import SettingsCard from './_SettingsCard.svelte';

	export let isPasswordEmpty: boolean;

	const { form, errors, isSubmitting, data, isDirty } = createForm<
		z.infer<typeof passwordUpdateSchema>
	>({
		onSuccess() {
			toastSuccess($_(`r-acc.password.success`));
		},
		validate: validateSchema(passwordUpdateSchema)
	});
</script>

<form use:form method="POST" action="/account?/update" enctype="application/x-www-form-urlencoded">
	<SettingsCard title={$_('r-acc.password.title')}>
		<TextInput
			type="password"
			error={$errors.password?.[0]}
			id="password"
			label={$_('r-acc.password.pw.label')}
		/>
		<TextInput
			type="password"
			error={$errors.cpassword?.[0]}
			id="cpassword"
			label={$_('r-acc.password.cpw.label')}
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
