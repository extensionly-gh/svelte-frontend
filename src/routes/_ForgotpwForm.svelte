<script lang="ts">
	import { Button, TextInput } from '$lib/components';
	import { forgotpwSchema } from '$lib/schemas';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm, FelteSubmitError } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	const { form, errors, isValid } = createForm<z.infer<typeof forgotpwSchema>>({
		validate: validateSchema(forgotpwSchema),
		onError: async (errors) => {
			console.log(errors);
			if (errors instanceof FelteSubmitError) {
				console.log(errors);
				console.log(errors.response);
			}
		}
	});
</script>

<form
	use:form
	class="flex flex-col w-full gap-4"
	action="?/forgotPw"
	method="POST"
	enctype="application/x-www-form-urlencoded"
>
	<TextInput
		error={$errors.email?.[0]}
		id="email"
		label={$_('dialogs.auth.email-label')}
		placeholder={$_('dialogs.auth.email-placeholder')}
		type="email"
	/>
	<Button variants={{ intent: 'primary', size: 'full' }} disabled={!$isValid} type="submit">
		{$_('terms.forgotpw')}
	</Button>
</form>
