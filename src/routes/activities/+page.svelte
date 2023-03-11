<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import EmptyDark from '$lib/assets/images/empty-dark.svg';
	import Empty from '$lib/assets/images/empty.svg';
	import { Button, TextInput } from '$lib/components';
	import { ActivityCard } from '$lib/components/cards';
	import { searchBarSchema } from '$lib/schemas';
	import { theme } from '$lib/stores';
	import { trpc } from '$lib/trpc/client';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import { inview } from 'svelte-inview/dist/index';
	import type { z } from 'zod';
	import IconBackspace from '~icons/ph/backspace';
	import IconMagnifyingGlass from '~icons/ph/magnifying-glass';
	import type { PageData } from './$types';
	import PhPlusBold from '~icons/ph/plus-bold';

	export let data: PageData;

	$: activities = data.activities;
	let newActivities = [];
	let cursor = 0;
	let activitiesLoading = false;
	let hasMore = true;

	const { form, data: formData } = createForm<z.infer<typeof searchBarSchema>>({
		initialValues: {
			search: data.query
		},
		onSubmit: async ({ search }) => {
			hasMore = true;
			await goto(`?query=${search}`, { keepFocus: true });
		},
		validate: validateSchema(searchBarSchema)
	});

	$: try {
		// Index out of bounds if no activities are found
		cursor = activities[activities.length - 1].paginationId;
	} catch (e) {
		cursor = 0;
	}

	const handleChange = async () => {
		if (activities.length < 6) {
			hasMore = false;
			return;
		}

		activitiesLoading = true;

		newActivities = await trpc($page).activity.getActivities.query({
			take: 6,
			cursor,
			search: data.query
		});

		if (newActivities.length === 0) {
			hasMore = false;
			console.log(hasMore);
			activitiesLoading = false;
			return;
		}

		activities = [...activities, ...newActivities];
		cursor = newActivities[newActivities.length - 1].paginationId;

		activitiesLoading = false;
	};
</script>

<h1 class="text-4xl text-secondary font-semibold text-center mb-12">{$_('a-default.title')}</h1>
<div class="flex flex-row justify-center items-center mb-20 w-full gap-8">
	<form use:form class="flex flex-grow max-w-xl">
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
	<Button to="/activities/new" variants={{ intent: 'accent' }}>
		<PhPlusBold width="20px" height="20px" />
		{$_('a-default.create-activity')}
	</Button>
</div>
<div>
	{#if activities.length > 0}
		<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center">
			{#each activities as activity}
				<ActivityCard {activity} />
			{/each}
			{#if activitiesLoading}
				{#each new Array(6) as _}
					<div
						class="animate-pulse bg-base-300 p-3 rounded-box shadow-md flex flex-col gap-2 max-w-sm h-[25rem]"
					/>
				{/each}
			{/if}
		</div>
		{#if !hasMore}
			<div class="flex justify-center items-center flex-col mt-12">
				<h1 data-testid="error-fallback-title" class="text-xl font-medium text-center">
					{$_('a-default.no-more-results')}
				</h1>
			</div>
		{:else}
			<div use:inview on:change={handleChange} />
		{/if}
	{:else}
		<div class="flex justify-center items-center flex-col">
			<h3 class="text-md text-center">{$_('a-default.no-activities-found')}</h3>
			<img class="max-w-md my-12" src={$theme === 'winter' ? Empty : EmptyDark} alt="Empty" />
		</div>
	{/if}
</div>
