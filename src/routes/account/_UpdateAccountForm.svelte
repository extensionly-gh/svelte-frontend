<script lang="ts">
	import { Button, TextInput } from '$lib/components';
	import { Notice } from '$lib/components/notice';
	import { toastSuccess } from '$lib/components/toast';
	import { userUpdateSchema } from '$lib/schemas';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import SettingsCard from './_SettingsCard.svelte';

	export let initialValues: z.infer<typeof userUpdateSchema>;

	const { form, errors, isSubmitting, data, isDirty } = createForm<
		z.infer<typeof userUpdateSchema>
	>({
		initialValues,
		onSuccess() {
			toastSuccess($_(`r-acc.details.success`));
		},
		validate: validateSchema(userUpdateSchema)
	});
</script>

<form use:form method="POST" action="/account?/update" enctype="application/x-www-form-urlencoded">
	<SettingsCard title={$_('r-acc.details.title')}>
		<TextInput error={$errors.name?.[0]} id="name" label={$_('r-acc.details.name.label')} />
		<TextInput error={$errors.email?.[0]} id="email" label={$_('r-acc.details.email.label')} />
		<TextInput error={$errors.phone?.[0]} id="phone" label={$_('r-acc.details.phone.label')} />
		<div class="w-full flex gap-2">
			<TextInput error={$errors.image?.[0]} id="image" label={$_('r-acc.details.image.label')} />
			{#if $data.image}
				<img class="rounded-md" width="64px" src={$data.image} alt="Your profile avatar" />
			{/if}
		</div>
		{#if $isDirty}
			<Notice text={$_('r-acc.details.info')} />
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
