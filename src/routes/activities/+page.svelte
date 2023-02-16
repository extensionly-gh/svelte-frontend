<script lang="ts">
	import { ActivityCard } from '$lib/components/cards';
	import { searchHandler } from '$lib/utils';
	import { _ } from 'svelte-i18n';
	import type { PageData } from './$types';

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
	<h1 class="text-4xl text-secondary font-semibold text-center mb-12">{$_('a-default.title')}</h1>
	{#if filteredResults.length > 0}
		<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center">
			{#each filteredResults as activity}
				<ActivityCard activity={{ ...activity }} />
			{/each}
		</div>
	{:else}
		<div class="flex justify-center items-center h-full">
			<h3 class="text-lg text-secondary">{$_('a-default.no-activities-found')}</h3>
		</div>
	{/if}
</div>
