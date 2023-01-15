<script lang="ts">
	import { forgotpwSchema } from '$lib/schemas';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import { createForm } from 'felte';
	import { validateSchema } from '@felte/validator-zod';
	import { Button, TextInput } from '$lib/components';

	const { form, errors, isValid } = createForm<z.infer<typeof forgotpwSchema>>({
		validate: validateSchema(forgotpwSchema)
	});
</script>

<form use:form class="flex flex-col w-full gap-1">
	<TextInput
		error={$errors.email?.[0]}
		id="email"
		label={$_('dialog.auth.email-label')}
		placeholder={$_('dialog.auth.email-placeholder')}
		type="email"
	/>
	<Button variants={{ intent: 'primary', size: 'full' }} disabled={!$isValid} type="submit">
		{$_('terms.forgotpw')}
	</Button>
</form>
