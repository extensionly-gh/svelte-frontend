<script lang="ts">
	import { signupSchema } from '$lib/schemas';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import { createForm } from 'felte';
	import { validateSchema } from '@felte/validator-zod';
	import { Button, TextInput } from '$lib/components';
	import { PhoneInput } from '$lib/components/form';

	let isPhoneValid: boolean = false;

	const { form, errors, isValid, touched, data } = createForm<z.infer<typeof signupSchema>>({
		initialValues: {
			name: 'Lucas Test',
			email: 'email@email.com',
			phone: '',
			password: 'StrongPassword1.',
			cpassword: 'StrongPassword1.'
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

<form
	use:form
	action="?/signUp"
	method="post"
	enctype="application/x-www-form-urlencoded"
	class="flex flex-col w-full gap-4"
>
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
	<Button variants={{ intent: 'primary', width: 'full' }} disabled={!$isValid} type="submit">
		{$_('terms.signup')}
	</Button>
</form>
