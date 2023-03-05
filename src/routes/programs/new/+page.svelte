<script lang="ts">
	import { Button, SettingsCard, TextInput } from '$lib/components';
	import { TextArea } from '$lib/components/form';
	import { createProgramSchema } from '$lib/schemas/programs';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	const { form, errors, isValid, isSubmitting } = createForm<z.infer<typeof createProgramSchema>>({
		validate: validateSchema(createProgramSchema)
	});
</script>

<h1 class="text-4xl text-secondary font-semibold text-center mb-12">{$_('p-new.title')}</h1>
<form use:form class="flex flex-col w-full max-w-xl gap-4">
	<TextInput
		error={$errors.title?.[0]}
		id="title"
		label={$_('p-new.form.title-label')}
		placeholder={$_('p-new.form.title-placeholder')}
	/>
	<TextArea
		error={$errors.description?.[0]}
		id="description"
		label={$_('p-new.form.description-label')}
		placeholder={$_('p-new.form.description-placeholder')}
	/>
	<Button variants={{ intent: 'primary', width: 'full' }} type="submit" isLoading={$isSubmitting}>
		{$_('terms.submit')}
	</Button>
</form>
