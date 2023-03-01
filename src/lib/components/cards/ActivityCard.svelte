<script lang="ts">
	import type { AppRouterOutput } from '$lib/trpc/router';
	import { DateFormats } from '$lib/utils';
	import { getDateStatus } from '$lib/utils/activity.utils';
	import { Modality } from '@prisma/client';
	import { formatRelative } from 'date-fns';
	import enUS from 'date-fns/locale/en-US/index.js';
	import ptBR from 'date-fns/locale/pt-BR/index.js';
	import { DateTime } from 'luxon';
	import { locale, _ } from 'svelte-i18n';
	import IconVideoCamera from '~icons/heroicons-solid/video-camera';
	import IconMapPin from '~icons/map/map-pin';
	import { Avatar } from '..';
	import Button from '../button/Button.svelte';
	import Tag from '../tag/Tag.svelte';
	import HighlightedSpan from '../text/HighlightedSpan.svelte';

	export let activity: AppRouterOutput['activity']['getActivities'][0];

	const isActivityFinished = DateTime.fromISO(activity.endDate).diffNow().milliseconds < 0;
	const isActivityStartInThePast = DateTime.fromISO(activity.startDate).diffNow().milliseconds < 0;

	const dateStatus = getDateStatus({
		end: activity.endDate,
		start: activity.startDate
	});
	const enrollmentStatus = getDateStatus({
		end: activity.enrollmentEnd,
		start: activity.enrollmentStart
	});

	$: formatDate = (ISODate: string) => {
		const date = DateTime.fromISO(ISODate);
		const now = DateTime.now();

		if (date.diff(now, 'days').days >= 1) {
			return date.setLocale($locale === 'pt-BR' ? 'pt-BR' : 'en').toLocaleString(DateFormats.long);
		}

		return formatRelative(date.toJSDate(), new Date(), {
			locale: $locale === 'pt-BR' ? ptBR : enUS
		});
	};
</script>

<div class="bg-base-300 rounded-box shadow-md flex flex-col max-w-sm">
	<div class="flex gap-2 rounded-t-xl bg-base-200 items-center px-3 py-3 justify-between">
		<div class="flex flex-col">
			<span class="font-semibold text-lg line-clamp-3 max-w-[17rem]">{activity.title}</span>
			<span class="text-sm max-w-[17rem] line-clamp-1">{activity.User.name}</span>
		</div>
		<Avatar src={activity.User?.image || activity.User.name} size="md" class="rounded-3xl" />
	</div>
	<!-- href={`${ProjectsRoute}/${activity.projectId}`}> -->
	<a
		href="/"
		class="flex items-center justify-center text-center text-sm font-semibold border-2 border-transparent bg-secondary-content text-secondary dark:text-secondary-content dark:bg-secondary py-2 px-2 line-clamp-5"
	>
		{activity.Project.name}
	</a>
	<div class="flex flex-col px-3 pb-3 gap-2 flex-1">
		<div class="flex-wrap flex gap-2 text-sm font-semibold items-center my-2">
			{#if activity.modality === Modality.REMOTE}
				<Tag variants={{ intent: 'modality' }}>
					<IconVideoCamera class="w-5" />
					<span>Online</span>
				</Tag>
			{:else}
				<Tag variants={{ intent: 'modality' }}>
					<IconVideoCamera class="w-5" />
					<span>Presential</span>
				</Tag>
			{/if}
		</div>
		<p class="line-clamp-3">{activity.shortDescription}</p>
		<div class="flex gap-2 flex-col px-1 flex-1 justify-center my-3 h-full">
			{#if isActivityFinished}
				<p class="text-center">
					<span class="font-semibold text-lg">{$_('a-default.activity-finished')}</span>
				</p>
			{:else}
				<p class="text-center">
					{#if isActivityStartInThePast}
						{$_('a-default.began')}
					{:else}
						{$_('a-default.begins')}
					{/if}
					{' '}
					<!-- TODO: add tooltip with full ISO date -->
					<HighlightedSpan variants={{ dateStatus }}
						>{formatDate(activity.startDate)}</HighlightedSpan
					>{' '}
					{$_('a-default.and-ends')}{' '}
					<HighlightedSpan variants={{ dateStatus }}
						>{formatDate(activity.endDate)}.</HighlightedSpan
					>{' '}
				</p>
			{/if}
			{#if enrollmentStatus === 'ENDED' && !isActivityFinished}
				<p class="text-center text-sm">
					{$_('a-default.enrollments.are')}{' '}
					<HighlightedSpan variants={{ dateStatus: enrollmentStatus }}
						>{$_('a-default.enrollments.closed')}.</HighlightedSpan
					>
				</p>
			{/if}
			{#if enrollmentStatus === 'NOT_STARTED' && !isActivityFinished}
				<p class="text-center text-sm">
					{$_('a-default.enrollments.will-open')}{' '}
					<HighlightedSpan variants={{ dateStatus: enrollmentStatus }}>
						{formatDate(activity.enrollmentStart)}.
					</HighlightedSpan>
				</p>
			{/if}
			{#if enrollmentStatus === 'OPEN' && !isActivityFinished}
				<p class="text-center text-sm">
					{$_('a-default.enrollments.are')}{' '}
					<HighlightedSpan variants={{ dateStatus: enrollmentStatus }}>
						{$_('a-default.enrollments.open')}
						{$_('a-default.enrollments.until')}
						{formatDate(activity.enrollmentEnd)}
					</HighlightedSpan>
				</p>
			{/if}
		</div>
		{#if activity.location}
			<div class="flex gap-1.5 items-center">
				<IconMapPin class="flex-none text-blue-500 font-bold w-5" />
				<p>{activity.location}</p>
			</div>
		{/if}
		<div class="flex gap-2">
			<Button variants={{ intent: 'ghost' }} class="w-full flex-shrink text-secondary">
				{$_('a-default.buttons.message-professor')}
			</Button>
			<!-- <Button class="w-full flex-shrink" to={`${ActivitiesRoute}/${activity.id}`}> -->
			<Button class="w-full flex-shrink" to="/">
				{$_('a-default.buttons.see-details')}
			</Button>
		</div>
	</div>
</div>
