<script lang="ts">
	import { page } from '$app/stores';
	import { Button, SettingsCard, TextInput } from '$lib/components';
	import { Select, SelectOption, TextArea } from '$lib/components/form';
	import { toastSuccess } from '$lib/components/toast';
	import { createProgramSchema } from '$lib/schemas/programs';
	import { trpc } from '$lib/trpc/client';
	import { handleErrorInClient } from '$lib/utils';
	import { validateSchema } from '@felte/validator-zod';
	import type { EventVisibility, Faculty } from '@prisma/client';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	const { form, errors, isSubmitting, data, resetField } = createForm<
		z.infer<typeof createProgramSchema>
	>({
		initialValues: {
			visibility: 'PUBLIC'
		},
		onSubmit: async (values) => {
			try {
				await trpc($page).program.createProgram.mutate(values);
				toastSuccess($_('p-new.toast.success'));
				resetField('title');
				resetField('description');
			} catch (error) {
				handleErrorInClient(error);
			}
		},
		validate: validateSchema(createProgramSchema)
	});

	let faculties: Faculty[] = [];

	let selectedFaculty = faculties[0]?.id;
	let selectedVisibility: EventVisibility = 'PUBLIC';

	$: $data.visibility = selectedVisibility;
	$: $data.facultyId = selectedFaculty?.toString();
	$: facultySelectButtonText =
		faculties.find((f) => f.id === selectedFaculty)?.name || $_('p-new.form.faculty-button');

	const fetchFaculties = async () => {
		faculties = await trpc($page).faculty.getFaculties.query();
	};
	let fetchFacultiesPromise: Promise<void> | undefined;
</script>

<h1 class="text-4xl text-secondary font-semibold text-center mb-12">{$_('p-new.title')}</h1>
<form use:form class="flex bg-base-300 p-4 rounded-md flex-col w-full max-w-xl gap-4">
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
	<Select
		id="facultyId"
		label={$_('p-new.form.faculty-label')}
		bind:selected={selectedFaculty}
		buttonText={facultySelectButtonText}
		error={$errors.facultyId?.[0]}
		on:click={() => (fetchFacultiesPromise ??= fetchFaculties())}
		info={$_('p-new.form.faculty-info')}
	>
		{#await fetchFacultiesPromise}
			{#each Array(10) as _}
				<SelectOption skeleton />
			{/each}
		{:then value}
			{#each faculties as faculty (faculty.id)}
				<SelectOption value={faculty.id}>
					{faculty.acronym + ' - ' + faculty.name}
				</SelectOption>
			{/each}
		{:catch error}
			<span class="px-2">
				{$_('p-new-form.faculty-fetch-error')}
			</span>
		{/await}
	</Select>
	<Select
		id="visibility"
		label={$_('p-new.form.visibility-label')}
		error={$errors.visibility?.[0]}
		info={$_('p-new.form.visibility-info')}
		bind:selected={selectedVisibility}
		buttonText={$_('p-new.form.visibility-' + selectedVisibility.toLowerCase())}
	>
		<SelectOption value="PUBLIC">{$_('p-new.form.visibility-public')}</SelectOption>
		<SelectOption value="PRIVATE">{$_('p-new.form.visibility-private')}</SelectOption>
	</Select>
	<Button
		data-testid="submit-btn"
		variants={{ intent: 'primary', width: 'full' }}
		type="submit"
		isLoading={$isSubmitting}
	>
		{$_('terms.submit')}
	</Button>
</form>
