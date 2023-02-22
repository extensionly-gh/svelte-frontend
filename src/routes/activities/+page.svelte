<script lang="ts">
	import Empty from '$lib/assets/images/empty.svg';
	import EmptyDark from '$lib/assets/images/empty-dark.svg';
	import { ActivityCard } from '$lib/components/cards';
	import { searchHandler } from '$lib/utils';
	import { _ } from 'svelte-i18n';
	import type { PageData } from './$types';
	import { theme } from '$lib/stores';

	export let data: PageData;

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

<div>
	<h1 class="text-3xl font-medium text-center mb-4">{$_('a-default.title')}</h1>
	{#if filteredResults.length > 0}
		<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center">
			{#each filteredResults as activity}
				<ActivityCard {activity} />
			{/each}
		</div>
	{:else}
		<div class="flex justify-center items-center flex-col">
			<h3 class="text-md text-center">{$_('a-default.no-activities-found')}</h3>
			<img class="max-w-md my-12" src={$theme === 'winter' ? Empty : EmptyDark} alt="Empty" />
		</div>
	{/if}
</div>
