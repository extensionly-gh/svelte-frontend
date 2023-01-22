<script lang="ts">
	import { signupSchema } from '$lib/schemas';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import { createForm } from 'felte';
	import { validateSchema } from '@felte/validator-zod';
	import { Button, TextInput } from '$lib/components';
	import { PhoneInput } from '$lib/components/form';
	import type { NormalizedTelNumber } from 'svelte-tel-input/types';

	let parsedTelInput: NormalizedTelNumber;

	const { form, errors, isValid, data, touched } = createForm<z.infer<typeof signupSchema>>({
		onSubmit(values) {
			console.log(values);
			console.log($touched);
		},
		validate: [
			validateSchema(signupSchema),
			() => {
				if (!parsedTelInput?.isValid) {
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
		bind:touched={$touched.phone}
		bind:value={$data.phone}
		bind:parsedTelInput
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
