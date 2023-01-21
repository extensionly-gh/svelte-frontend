<script lang="ts">
	import { Button, TextInput } from '$lib/components';
	import { toastSuccess } from '$lib/components/toast';
	import { userUpdateSchema } from '$lib/schemas';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import SettingsCard from './_SettingsCard.svelte';

	export let initialValues: z.infer<typeof userUpdateSchema>;

	const { form, errors, isSubmitting } = createForm<z.infer<typeof userUpdateSchema>>({
		initialValues,
		onSuccess() {
			toastSuccess($_(`r-acc.details.success`));
		},
		validate: validateSchema(userUpdateSchema)
	});
</script>

<form
	use:form
	method="POST"
	action="/account?/updateName"
	enctype="application/x-www-form-urlencoded"
>
	<SettingsCard title={$_('r-acc.details.title')}>
		<TextInput error={$errors.name?.[0]} id="name" label={$_('r-acc.details.name.description')} />
		<TextInput
			error={$errors.email?.[0]}
			id="email"
			label={$_('r-acc.details.email.description')}
		/>
		<Button variants={{ width: 'short' }} isLoading={$isSubmitting} type="submit" class="h-full">
			{$_('terms.save')}
		</Button>
	</SettingsCard>
</form>
