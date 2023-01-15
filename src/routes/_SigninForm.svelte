<script lang="ts">
	import { signinSchema } from '$lib/schemas';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import { createForm } from 'felte';
	import { validateSchema } from '@felte/validator-zod';
	import { Button, TextInput } from '$lib/components';

	const { form, data, errors, isValid } = createForm<z.infer<typeof signinSchema>>({
		validate: validateSchema(signinSchema)
	});
</script>

<form use:form class="flex flex-col w-full gap-4">
	<TextInput
		error={$errors.email?.[0]}
		id="email"
		label={$_('dialog.auth.email-label')}
		placeholder={$_('dialog.auth.email-placeholder')}
		type="email"
	/>
	<TextInput
		id="password"
		label={$_('dialog.auth.password-label')}
		placeholder={$_('dialog.auth.password-placeholder')}
		type="password"
	/>
	<Button
		variants={{ intent: 'primary', size: 'full' }}
		disabled={!$isValid || $data.password == ''}
		type="submit"
	>
		{$_('terms.signin')}
	</Button>
</form>
