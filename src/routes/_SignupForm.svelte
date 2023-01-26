<script lang="ts">
	import { page } from '$app/stores';
	import { Button, TextInput } from '$lib/components';
	import { PhoneInput } from '$lib/components/form';
	import { toastInfo } from '$lib/components/toast';
	import { signupSchema } from '$lib/schemas';
	import { authDialog } from '$lib/stores';
	import { trpc } from '$lib/trpc/client';
	import { handleErrorInClient } from '$lib/utils';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	let isPhoneValid: boolean = false;

	const { form, errors, isValid, touched, data, isSubmitting } = createForm<
		z.infer<typeof signupSchema>
	>({
		onSubmit: async (values) => {
			try {
				await trpc().user.createUser.mutate(values);
				await trpc().user.sendVerificationEmail.mutate({
					email: values.email,
					url: $page.url.origin
				});
				toastInfo($_('dialogs.auth.signup-success'), { initial: 0 });
				authDialog.update(() => ({ isOpen: false }));
			} catch (error) {
				handleErrorInClient(error);
			}
		},
		validate: [
			validateSchema(signupSchema),
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

<form use:form class="flex flex-col w-full gap-4">
	<TextInput
		error={$errors.name?.[0]}
		id="name"
		label={$_('dialogs.auth.name-label')}
		placeholder={$_('dialogs.auth.name-placeholder')}
	/>
	<TextInput
		error={$errors.email?.[0]}
		id="email"
		label={$_('dialogs.auth.email-label')}
		placeholder={$_('dialogs.auth.email-placeholder')}
		type="email"
	/>
	<PhoneInput
		bind:isTouched={$touched.phone}
		bind:isValid={isPhoneValid}
		bind:parsedValue={$data.phone}
		id="phone"
		label={$_('dialogs.auth.phone-label')}
		placeholder={$_('dialogs.auth.phone-placeholder')}
		autocomplete="tel"
	/>
	<TextInput
		error={$errors.password?.[0]}
		id="password"
		label={$_('dialogs.auth.password-label')}
		placeholder={$_('dialogs.auth.password-placeholder')}
		autocomplete="new-password"
		type="password"
	/>
	<TextInput
		error={$errors.cpassword?.[0]}
		id="cpassword"
		label={$_('dialogs.auth.cpassword-label')}
		placeholder={$_('dialogs.auth.password-placeholder')}
		autocomplete="new-password"
		type="password"
	/>
	<Button
		variants={{ intent: 'primary', width: 'full' }}
		isLoading={$isSubmitting}
		disabled={!$isValid}
		type="submit"
	>
		{$_('terms.signup')}
	</Button>
</form>
