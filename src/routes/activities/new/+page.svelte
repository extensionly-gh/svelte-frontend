<script lang="ts">
	import { page } from '$app/stores';
	import { TextInput } from '$lib/components';
	import { TextArea } from '$lib/components/form';
	import { Heading } from '$lib/components/text';
	import { toastSuccess } from '$lib/components/toast';
	import { createActivitySchema } from '$lib/schemas';
	import { trpc } from '$lib/trpc/client';
	import { handleErrorInClient } from '$lib/utils';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	const { form, errors, isSubmitting, data, resetField } = createForm<
		z.infer<typeof createActivitySchema>
	>({
		onSubmit: async (values) => {
			try {
				// await trpc($page).project.createProject.mutate(values);
				toastSuccess($_('a-new.toast.success'));
				resetField('title');
				resetField('description');
				resetField('shortDescription');
			} catch (error) {
				handleErrorInClient(error);
			}
		},
		validate: validateSchema(createActivitySchema)
	});
</script>

<Heading>{$_('a-new.title')}</Heading>
<form use:form class="flex bg-base-300 p-4 rounded-md flex-col w-full max-w-xl gap-4">
	<TextInput
		error={$errors.title?.[0]}
		id="title"
		label={$_('p-new.form.title-label')}
		placeholder={$_('a-new.form.title-placeholder')}
	/>
	<TextInput
		error={$errors.shortDescription?.[0]}
		id="shortDescription"
		label={$_('a-new.form.shortDescription-label')}
		placeholder={$_('a-new.form.shortDescription-placeholder')}
	/>
	<TextArea
		error={$errors.description?.[0]}
		id="description"
		label={$_('p-new.form.description-label')}
		placeholder={$_('a-new.form.description-placeholder')}
	/>
</form>
