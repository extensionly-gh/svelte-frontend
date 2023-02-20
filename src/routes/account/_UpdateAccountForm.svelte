<script lang="ts">
	import { Button, SettingsCard, TextInput } from '$lib/components';
	import { PhoneInput } from '$lib/components/form';
	import { Notice } from '$lib/components/notice';
	import { toastSuccess } from '$lib/components/toast';
	import { userUpdateSchema } from '$lib/schemas';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	export let initialValues: z.infer<typeof userUpdateSchema>;

	let isPhoneValid: boolean = false;

	const { form, errors, isSubmitting, data, isDirty, touched } = createForm<
		z.infer<typeof userUpdateSchema>
	>({
		initialValues,
		onSuccess() {
			toastSuccess($_(`r-acc.details.success`));
		},
		validate: [
			validateSchema(userUpdateSchema),
			() => {
				if (!isPhoneValid) {
					return {
						phone: 'zod.phone.invalid'
					};
				}
			}
		]
	});
</script>

<form use:form method="POST" action="/account?/update" enctype="application/x-www-form-urlencoded">
	<SettingsCard title={$_('r-acc.details.title')}>
		<TextInput error={$errors.name?.[0]} id="name" label={$_('r-acc.details.name.label')} />
		<TextInput error={$errors.email?.[0]} id="email" label={$_('r-acc.details.email.label')} />
		<PhoneInput
			bind:isTouched={$touched.phone}
			bind:isValid={isPhoneValid}
			bind:parsedValue={$data.phone}
			value={initialValues.phone}
			id="phone"
			label={$_('r-acc.details.phone.label')}
			autocomplete="tel"
		/>
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
			data-testid="update-details-submit-button"
			disabled={!$touched.phone && !$isDirty}
			variants={{ width: 'short' }}
			isLoading={$isSubmitting}
			type="submit"
		>
			{$_('terms.save')}
		</Button>
	</SettingsCard>
</form>
