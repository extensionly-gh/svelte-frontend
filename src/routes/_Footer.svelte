<script lang="ts">
	import { Button } from '$lib/components';
	import { _ } from 'svelte-i18n';
</script>

<footer
	class={`flex z-[5] flex-col bg-base-100 bg-opacity-40 text-base-content rounded-t-2xl mt-20`}
>
	<div class="flex items-start justify-around flex-col sm:flex-row gap-12 p-8">
		<div class="flex flex-col justify-between h-36">
			<Button variants={{ intent: 'no-style' }} to="/" class="text-3xl font-semibold"
				>Extensionly</Button
			>
			<div class="flex-none flex-col gap-1 flex">
				<Button variants={{ intent: 'text-base', size: 'sm' }} to={'/about'}>
					{$_('footer.about-us')}
				</Button>
				<Button
					variants={{ intent: 'text-base', size: 'sm' }}
					to="https://bitbucket.org/fell-lucas/extensionly-frontend/src/main"
				>
					{$_('footer.open-source')}
				</Button>
				<Button
					variants={{ intent: 'text-base', size: 'sm' }}
					to="https://plausible.extensionly.app/extensionly.app"
				>
					{$_('footer.public-analytics')}
				</Button>
			</div>
		</div>
		<div class="flex flex-col">
			<h6 class="font-semibold text-sm mb-4 px-2">{$_('footer.legal')}</h6>
			<Button variants={{ intent: 'text-base', size: 'sm' }} to={'/legal/cookies'}>
				{$_('terms.cookies-policy')}
			</Button>
			<!-- {/* https://www.privacypolicies.com/live/4a9e0e1b-9515-4987-8b7a-de0316c0b09a */} -->
			<Button variants={{ intent: 'text-base', size: 'sm' }} to={'/legal/privacy'}>
				{$_('terms.privacy-policy')}
			</Button>
			<!-- {/* https://www.termsandconditionsgenerator.com/live.php?token=Ob89qlaVSUUa8FhUBBCsJ5uYczADSFKG */} -->
			<Button variants={{ intent: 'text-base', size: 'sm' }} to={'/legal/terms'}>
				{$_('terms.terms-and-conditions')}
			</Button>
		</div>
	</div>
	<div
		class="bg-base-300 brightness-[.7] bg-opacity-30 flex flex-col sm:flex-row justify-center sm:justify-evenly items-center p-2 px-4 gap-4"
	>
		<span class="text-sm text-center">{$_('footer.reserved')}</span>
		<div class="flex gap-6">
			<!-- <LanguageSwitch />
			<ThemeSwitch /> -->
		</div>
	</div>
</footer>
