<script lang="ts">
	import { Button } from '$lib/components';
	import { _ } from 'svelte-i18n';

	const people = [
		{
			name: 'Lucas Fell',
			social: 'https://www.linkedin.com/in/lucas-fell',
			handle: 'fell-lucas',
			description: $_('r-about.description-lucas'),
			tags: [
				$_('r-about.programming'),
				$_('r-about.reading'),
				$_('r-about.yerbamate'),
				'jazz',
				'star wars'
			],
			imageUrl: '/assets/lucas.avif'
		},
		{
			name: 'Igor Dalepiane',
			social: 'https://github.com/igordalepiane',
			handle: 'igordalepiane',
			description: $_('r-about.description-igor'),
			tags: [$_('r-about.microservices'), $_('r-about.programming'), 'gaming', 'netflix'],
			imageUrl: '/assets/igor.jpg'
		},
		{
			name: 'Maicon Bernardino',
			social: 'mailto:bernardino@unipampa.edu.br',
			handle: 'bernardino',
			description: $_('r-about.description-bernardino'),
			tags: [
				$_('r-about.teaching'),
				$_('r-about.software-engineering'),
				$_('r-about.cooking'),
				$_('r-about.cats')
			],
			imageUrl: '/assets/bernardino.jpg'
		}
	];
</script>

<article class="prose mb-16 px-8 text-start w-full prose-lg">
	<h1 class="font-semibold">{$_('r-about.about-us')}</h1>
	<h3>{$_('terms.a')} Extensionly</h3>
	<p>{$_('r-about.p1')}</p>
	<h3>{$_('r-about.whoarewe')}</h3>
	<p>
		{$_('r-about.p2')}{' '}
		<Button variants={{ intent: 'text-base' }} to="https://zallpy.com/en">Zallpy Digital.</Button>
	</p>
</article>
<div class="flex flex-wrap items-center justify-center gap-6">
	{#each people as p}
		<div
			class="flex max-w-xs md:max-w-2xl flex-col md:flex-row rounded-lg shadow-lg bg-base-300 w-[600px]"
		>
			<div class="flex flex-1">
				<img
					alt={`Contributor ${p.name}`}
					class="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
					src={p.imageUrl}
				/>
			</div>
			<div class="flex flex-col items-center p-4 justify-evenly prose w-full md:w-1/2">
				<h3>{p.name}</h3>
				<Button variants={{ intent: 'text-base' }} to={p.social}>
					{p.handle}
				</Button>
				<p class="text-center font-medium">{p.description}</p>
				<div class="flex flex-wrap gap-2 justify-center ">
					{#each p.tags as tag}
						<div class="p-2 bg-base-200 uppercase leading-none">
							<span class="text-xs p-0 font-semibold">{tag}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
