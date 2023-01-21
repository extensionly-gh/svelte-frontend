<script lang="ts">
	import { page } from '$app/stores';
	import { Button, TextInput } from '$lib/components';
	import { forgotpwSchema } from '$lib/schemas';
	import { trpc } from '$lib/trpc/client';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	const { form, errors, isValid } = createForm<z.infer<typeof forgotpwSchema>>({
		onSubmit: async (values, event) => {
			console.log(values);
			await trpc($page)?.user.sendForgotPasswordEmail.mutate({
				email: values.email,
				url: $page.url.toString()
			});
		},
		validate: validateSchema(forgotpwSchema)
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
	<Button variants={{ intent: 'primary', size: 'full' }} disabled={!$isValid} type="submit">
		{$_('terms.forgotpw')}
	</Button>
</form>
