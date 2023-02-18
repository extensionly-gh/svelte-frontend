<script lang="ts">
	import { page } from '$app/stores';
	import { Button, TextInput } from '$lib/components';
	import { toastSuccess } from '$lib/components/toast';
	import { forgotpwSchema } from '$lib/schemas';
	import { authDialog } from '$lib/stores';
	import { trpc } from '$lib/trpc/client';
	import { handleErrorInClient } from '$lib/utils';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	const { form, errors, isValid, isSubmitting } = createForm<z.infer<typeof forgotpwSchema>>({
		onSubmit: async ({ email }) => {
			try {
				await trpc().user.sendEmail.mutate({
					email,
					url: $page.url.origin,
					type: 'RESET_PASSWORD'
				});
				toastSuccess($_('v-password.sent-email'));
				authDialog.update(() => ({ isOpen: false }));
			} catch (error) {
				handleErrorInClient(error);
			}
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
	<Button
		data-testid="forgotpw-submit-button"
		variants={{ intent: 'primary', width: 'full' }}
		disabled={!$isValid}
		type="submit"
		isLoading={$isSubmitting}
	>
		{$_('terms.forgotpw')}
	</Button>
</form>
