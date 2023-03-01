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
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { inview } from 'svelte-inview/dist/index';
	import type { z } from 'zod';
	import IconArrowUpBold from '~icons/ph/arrow-up-bold';
	import IconBackspace from '~icons/ph/backspace';
	import IconMagnifyingGlass from '~icons/ph/magnifying-glass';
	import type { PageData } from './$types';

	export let data: PageData;

	$: activities = data.activities;
	let newActivities = [];
	let cursor = 0;
	let activitiesLoading = false;
	let hasMore = true;

	const {
		form,
		data: formData,
		setFields
	} = createForm<z.infer<typeof searchBarSchema>>({
		onSubmit: async ({ search }) => {
			hasMore = true;
			await goto(`?query=${search}`, { keepFocus: true });
		},
		validate: validateSchema(searchBarSchema)
	});

	onMount(() => {
		hasMore = true;
		setFields('search', $page.url.searchParams.get('query') || '');
	});

	$: try {
		// Index out of bounds if no activities are found
		cursor = activities[activities.length - 1].paginationId;
	} catch (e) {
		cursor = 0;
	}

	const goTop = () => {
		document.body.scrollIntoView();
	};

	const handleChange = async () => {
		if (activities.length < 6 || !hasMore) {
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
			activitiesLoading = false;
			return;
		}

		activities = [...activities, ...newActivities];
		cursor = newActivities[newActivities.length - 1].paginationId;

		activitiesLoading = false;
	};
</script>

{#if activities.length > 0}
	<div class="relative z-50">
		<div class="fixed bottom-6 right-6  h-10 w-10 lg:h-16 lg:w-16">
			<Button variants={{ intent: 'secondary', anchor: true }} on:click={goTop}>
				<IconArrowUpBold width="24px" height="24px" />
			</Button>
		</div>
	</div>
{/if}
<h1 class="text-4xl text-secondary font-semibold text-center mb-12">{$_('a-default.title')}</h1>
<div class="flex flex-row justify-center items-center mb-20 w-full">
	<form use:form class="flex flex-grow max-w-3xl">
		<TextInput id="search" placeholder={$_('a-default.title')} variants={{ intent: 'searchBar' }}>
			<div slot="left" class="flex items-center">
				<IconMagnifyingGlass class="" width="24px" height="24px" />
			</div>
			<div slot="right" class="flex items-center">
				{#if $formData.search !== ''}
					<Button
						type="reset"
						variants={{ intent: 'ghost' }}
						on:click={async () => {
							hasMore = true;
							await goto('/activities');
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
		{/if}
		<div use:inview on:change={handleChange} />
	{:else}
		<div class="flex justify-center items-center flex-col">
			<h3 class="text-md text-center">{$_('a-default.no-activities-found')}</h3>
			<img class="max-w-md my-12" src={$theme === 'winter' ? Empty : EmptyDark} alt="Empty" />
		</div>
	{/if}
</div>
