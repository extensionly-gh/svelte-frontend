<script lang="ts">
	import SettingsCard from './_SettingsCard.svelte';
	import { ButtonWithTimer } from '$lib/components/button';
	import type { Verification } from '@prisma/client';
	import { _ } from 'svelte-i18n';
	import { DateTime } from 'luxon';
	import { Notice } from '$lib/components/notice';
	import type { AppRouterOutput } from '$lib/trpc/router';

	export let verification: AppRouterOutput['user']['getAccountData']['Verification'][0];

	let date = DateTime.now().toISO();

	function handleVerifyEmail() {
		console.log('handleVerifyEmail');
		date = DateTime.now().plus({ seconds: 5 }).toISO();
	}
</script>

<form action="">
	<SettingsCard title={$_('r-acc.email.title')}>
		{#if !verification.isVerified}
			<Notice variants={{ intent: 'warning' }} text={$_('r-acc.email.not-yet-verified')} />
			<ButtonWithTimer
				variants={{ width: 'short' }}
				endTime={date}
				onSubmit={() => handleVerifyEmail()}
			>
				{$_('r-acc.email.resend-email')}
			</ButtonWithTimer>
		{:else}
			<Notice variants={{ intent: 'success' }} text={$_('r-acc.email.email-verified')} />
		{/if}
	</SettingsCard>
</form>
