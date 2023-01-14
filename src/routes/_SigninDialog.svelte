<script lang="ts">
	import { Button, Dialog, TextInput } from '$lib/components';
	import { signinSchema } from '$lib/schemas';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import { createForm } from 'felte';
	import { validateSchema } from '@felte/validator-zod';
	import IconGoogle from '~icons/logos/google-icon';

	export let isOpen = false;

	const { form, data, errors, isValid } = createForm<z.infer<typeof signinSchema>>({
		validate: validateSchema(signinSchema)
	});
</script>

<Dialog
	size="xs"
	description={$_('dialog.signin.description')}
	title={$_('dialog.signin.title')}
	bind:isOpen
>
	<div class="px-2 flex justify-center items-center flex-col my-4">
		<Button variants={{ intent: 'provider', provider: 'google' }}>
			<IconGoogle width="18px" height="18px" />
			<p class="flex-1">Sign in with Google</p>
		</Button>
		<div class="relative flex py-4 items-center w-full">
			<div class="flex-grow border-t border-base-content" />
			<span class="flex-shrink mx-4 text-sm text-base-content"
				>{$_('dialog.signin.or-continue')}</span
			>
			<div class="flex-grow border-t border-base-content" />
		</div>
		<form use:form class="w-full">
			<TextInput
				error={$errors.email?.[0]}
				id="email"
				label={$_('dialog.signin.email-label')}
				placeholder={$_('dialog.signin.email-placeholder')}
				type="email"
			/>
			<TextInput
				id="password"
				label={$_('dialog.signin.password-label')}
				placeholder={$_('dialog.signin.password-placeholder')}
				type="password"
			/>
			<Button variants={{ intent: 'primary', size: 'full' }} disabled={!$isValid} type="submit"
				>Sign in</Button
			>
		</form>
	</div>
</Dialog>
