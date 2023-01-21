<script lang="ts">
	import { signupSchema } from '$lib/schemas';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import { createForm } from 'felte';
	import { validateSchema } from '@felte/validator-zod';
	import { Button, TextInput } from '$lib/components';

	const { form, errors, isValid } = createForm<z.infer<typeof signupSchema>>({
		validate: validateSchema(signupSchema)
	});
</script>

<form use:form class="flex flex-col w-full gap-4">
	<TextInput
		error={$errors.email?.[0]}
		id="email"
		label={$_('dialogs.auth.email-label')}
		placeholder={$_('dialogs.auth.email-placeholder')}
		type="email"
	/>
	<TextInput
		error={$errors.password?.[0]}
		id="password"
		label={$_('dialogs.auth.password-label')}
		placeholder={$_('dialogs.auth.password-placeholder')}
		type="password"
	/>
	<TextInput
		error={$errors.cpassword?.[0]}
		id="cpassword"
		label={$_('dialogs.auth.cpassword-label')}
		placeholder={$_('dialogs.auth.password-placeholder')}
		type="password"
	/>
	<Button variants={{ intent: 'primary', width: 'full' }} disabled={!$isValid} type="submit">
		{$_('terms.signup')}
	</Button>
</form>
