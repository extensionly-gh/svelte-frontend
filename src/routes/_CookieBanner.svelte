<script lang="ts">
	import { Button } from '$lib/components';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	const LS_COOKIE_CONSENT = '@extensionly:cookie-consent-1.0.0';
	let shouldShowBanner = false;

	function handleDismissBanner() {
		localStorage.setItem(LS_COOKIE_CONSENT, 'true');
		shouldShowBanner = false;
	}

	onMount(() => {
		const cookieNotice = localStorage.getItem(LS_COOKIE_CONSENT);
		if (!cookieNotice) {
			shouldShowBanner = true;
		}
	});
</script>

{#if shouldShowBanner}
	<div
		class="fixed z-50 w-96 bottom-8 right-8 card bg-base-300 shadow-xl"
		data-testid="cookie-banner"
	>
		<div class="card-body">
			<h2 class="card-title">{$_('cookies-notice.title')}</h2>
			<p>{$_('cookies-notice.subtitle')}</p>
			<p>
				{$_('cookies-notice.more-info')}
				<Button variants={{ intent: 'text-base' }} to={'/legal/cookie-policy'}>
					{$_('terms.cookies-policy')}.
				</Button>
			</p>
			<div class="card-actions justify-end">
				<Button
					on:click={handleDismissBanner}
					data-testid="cookie-banner-btn"
					variants={{ size: 'sm' }}
				>
					{$_('terms.dismiss')}
				</Button>
			</div>
		</div>
	</div>
{/if}
