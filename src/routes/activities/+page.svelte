<script lang="ts">
	import Empty from '$lib/assets/images/empty.svg';
	import EmptyDark from '$lib/assets/images/empty-dark.svg';
	import { ActivityCard } from '$lib/components/cards';
	import { _ } from 'svelte-i18n';
	import type { PageData } from './$types';
	import { theme } from '$lib/stores';
	import { trpc } from '$lib/trpc/client';
	import InfiniteLoading from 'svelte-infinite-loading';
	import { page } from '$app/stores';

	export let data: PageData;

	let activities = data.activities;
	let newActivities = [];
	let cursor = 0;
	let activitiesLoading = false;

	try {
		// Index out of bounds if no activities are found
		cursor = activities[activities.length - 1].paginationId ?? 0;
	} catch (e) {}
</script>

<div>
	<h1 class="text-3xl font-medium text-center mb-4">{$_('a-default.title')}</h1>
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
		<InfiniteLoading
			forceUseInfiniteWrapper
			on:infinite={async ({ detail }) => {
				if (activities.length < 6) return;

				activitiesLoading = true;

				newActivities = await trpc($page).activity.getActivities.query({
					take: 6,
					cursor,
					search: data.query
				});

				if (newActivities.length === 0) {
					detail.complete();
					activitiesLoading = false;
					return;
				}

				activities = [...activities, ...newActivities];
				cursor = newActivities[newActivities.length - 1].paginationId;

				detail.loaded();
				activitiesLoading = false;
			}}
		>
			<div slot="spinner" />
			<div slot="noResults" />
			<div slot="noMore" />
		</InfiniteLoading>
	{:else}
		<div class="flex justify-center items-center flex-col">
			<h3 class="text-md text-center">{$_('a-default.no-activities-found')}</h3>
			<img class="max-w-md my-12" src={$theme === 'winter' ? Empty : EmptyDark} alt="Empty" />
		</div>
	{/if}
</div>
