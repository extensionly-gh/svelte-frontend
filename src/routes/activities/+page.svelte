<script lang="ts">
	import { Button, TextInput } from '$lib/components';
	import { ActivityCard } from '$lib/components/cards';
	import { searchHandler } from '$lib/utils';
	import { _ } from 'svelte-i18n';
	import type { PageData } from './$types';
	import IconBackspace from '~icons/ph/backspace';
	import { createForm } from 'felte';
	import { searchBarSchema } from '$lib/schemas';
	import { validateSchema } from '@felte/validator-zod';
	import IconMagnifyingGlass from '~icons/ph/magnifying-glass';
	import type { z } from 'zod';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const { form, data: formData } = createForm<z.infer<typeof searchBarSchema>>({
		onSubmit: ({ search }) => {
			goto(`?query=${search}`);
			console.log(search);
		},
		validate: validateSchema(searchBarSchema)
	});

	const searchActivities = data.activities.map((activity) => ({
		...activity,
		searchTerms:
			`${activity.title} ${activity.description} ${activity.faculty} ${activity.location} ${activity.prerequisites}`.replaceAll(
				'null',
				''
			)
	}));

	$: filteredResults = searchHandler(data.query, searchActivities);
</script>

<!-- <h1 class="text-4xl text-secondary font-semibold text-center mb-12">{$_('a-default.title')}</h1> -->
<div class="flex flex-row justify-center items-center mb-20 w-full">
	<form use:form class="flex flex-grow max-w-3xl">
		<TextInput id="search" placeholder={$_('a-default.title')} variants={{ intent: 'searchBar' }}>
			<div slot="left" class="flex items-center">
				<IconMagnifyingGlass class="" width="24px" height="24px" />
			</div>
			<div slot="right">
				{#if data.query !== ''}
					<Button
						type="reset"
						variants={{ intent: 'ghost', width: 'icon' }}
						on:click={() => {
							goto('/activities');
						}}
					>
						<IconBackspace width="24px" height="24px" />
					</Button>
				{/if}
			</div>
		</TextInput>
	</form>
</div>
<div>
	{#if filteredResults.length > 0}
		<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center">
			{#each filteredResults as activity}
				<ActivityCard {activity} />
			{/each}
		</div>
	{:else}
		<div class="flex justify-center items-center h-full">
			<h3 class="text-lg text-secondary">{$_('a-default.no-activities-found')}</h3>
		</div>
	{/if}
</div>
