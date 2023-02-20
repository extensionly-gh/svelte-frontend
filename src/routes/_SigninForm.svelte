<script lang="ts">
	import { signinSchema } from '$lib/schemas';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import { createForm } from 'felte';
	import { validateSchema } from '@felte/validator-zod';
	import { Button, TextInput } from '$lib/components';
	import { signIn } from '@auth/sveltekit/client';
	import { toastError } from '$lib/components/toast';

	const { form, data, errors, isValid, isSubmitting } = createForm<z.infer<typeof signinSchema>>({
		onSubmit: async ({ email, password }) => {
			const response = await signIn('credentials', {
				email,
				password,
				redirect: false
			});
			// If the request fails, SveltekitAuth returns an object with a URL
			// which has the error thrown as a query parameter.
			try {
				const { url } = await response?.json();
				const errorMessage = url?.split('error=')[1];
				toastError($_(errorMessage));
			} catch (e) {}
		},
		validate: validateSchema(signinSchema)
	});
</script>

<form use:form class="flex flex-col w-full gap-4">
	<TextInput
		data-testid="signin-email-input"
		error={$errors.email?.[0]}
		id="email"
		label={$_('dialogs.auth.email-label')}
		placeholder={$_('dialogs.auth.email-placeholder')}
		type="email"
	/>
	<TextInput
		data-testid="signin-password-input"
		id="password"
		label={$_('dialogs.auth.password-label')}
		placeholder={$_('dialogs.auth.password-placeholder')}
		type="password"
	/>
	<Button
		data-testid="signin-submit-button"
		variants={{ intent: 'primary', width: 'full' }}
		disabled={!$isValid || $data.password == ''}
		isLoading={$isSubmitting}
		type="submit"
	>
		{$_('terms.signin')}
	</Button>
</form>
