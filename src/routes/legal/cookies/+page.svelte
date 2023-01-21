<script>
	import { _ } from 'svelte-i18n';
</script>

<article class="prose prose-slate">
	<h1>{$_('l-c.intro.title')}</h1>
	<p>{$_('l-c.intro.last-updated')}</p>
	<p>{$_('l-c.intro.par-1')}</p>
	<p>{$_('l-c.intro.par-2')}</p>
	<p>{$_('l-c.intro.par-3')}</p>
	<h2>{$_('l-c.interpretation.title')}</h2>
	<h3>{$_('l-c.interpretation.subtitle')}</h3>
	<p>{$_('l-c.interpretation.description')}</p>
	<h3>{$_('l-c.interpretation.definitions.title')}</h3>
	<p>{$_('l-c.interpretation.definitions.description')}</p>
	<ul>
		<li>
			<b>{$_('l-c.interpretation.definitions.li-1.bold')}</b>
			{$_('l-c.interpretation.definitions.li-1.text')}
		</li>
		<li>
			<b>{$_('l-c.interpretation.definitions.li-2.bold')}</b>
			{$_('l-c.interpretation.definitions.li-2.text')}
		</li>
		<li>
			<b>{$_('l-c.interpretation.definitions.li-3.bold')}</b>
			{$_('l-c.interpretation.definitions.li-3.text')}{' '}
			<a href={$_('l-c.interpretation.definitions.li-3.link')}
				>{$_('l-c.interpretation.definitions.li-3.link')}</a
			>
		</li>
		<li>
			<b>{$_('l-c.interpretation.definitions.li-4.bold')}</b>
			{$_('l-c.interpretation.definitions.li-4.text')}
		</li>
	</ul>
	<h2>{$_('l-c.use-of-cookies.title')}</h2>
	<h3>{$_('l-c.use-of-cookies.type-of-cookies.subtitle')}</h3>
	<p>{$_('l-c.use-of-cookies.type-of-cookies.description.par-1')}</p>
	<p>{$_('l-c.use-of-cookies.type-of-cookies.description.par-2')}</p>
	<ul>
		<li>
			<b>{$_('l-c.use-of-cookies.type-of-cookies.li-1.bold')}</b>
			<p>{$_('l-c.use-of-cookies.type-of-cookies.li-1.type')}</p>
			<p>{$_('l-c.use-of-cookies.type-of-cookies.li-1.administered-by')}</p>
			<p>{$_('l-c.use-of-cookies.type-of-cookies.li-1.purpose')}</p>
		</li>
	</ul>
	<h3>{$_('l-c.use-of-cookies.your-choices.subtitle')}</h3>
	<p>{$_('l-c.use-of-cookies.your-choices.description.par-1')}</p>
	<p>{$_('l-c.use-of-cookies.your-choices.description.par-2')}</p>
	<p>{$_('l-c.use-of-cookies.your-choices.description.par-3')}</p>
	<ul>
		<li>
			<p>{$_('l-c.use-of-cookies.your-choices.li-1.text')}</p>
			<a href={$_('l-c.use-of-cookies.your-choices.li-1.link')}>
				{$_('l-c.use-of-cookies.your-choices.li-1.link')}
			</a>
		</li>
		<li>
			<p>{$_('l-c.use-of-cookies.your-choices.li-2.text')}</p>
			<a href={$_('l-c.use-of-cookies.your-choices.li-2.link')}>
				{$_('l-c.use-of-cookies.your-choices.li-2.link')}
			</a>
		</li>
		<li>
			<p>{$_('l-c.use-of-cookies.your-choices.li-3.text')}</p>
			<a href={$_('l-c.use-of-cookies.your-choices.li-3.link')}>
				{$_('l-c.use-of-cookies.your-choices.li-3.link')}
			</a>
		</li>
		<li>
			<p>{$_('l-c.use-of-cookies.your-choices.li-4.text')}</p>
			<a href={$_('l-c.use-of-cookies.your-choices.li-4.link')}>
				{$_('l-c.use-of-cookies.your-choices.li-4.link')}
			</a>
		</li>
	</ul>
	<p>{$_('l-c.use-of-cookies.your-choices.footer')}</p>
	<h3>{$_('l-c.more-info.subtitle')}</h3>
	<p>{$_('l-c.more-info.description')}</p>
	<a href={$_('l-c.more-info.link')}>{$_('l-c.more-info.link-text')}</a>
	<h3>{$_('l-c.contact.title')}</h3>
	<p>{$_('l-c.contact.description')}</p>
	<ul>
		<li>
			<p>{$_('l-c.contact.li-1.text')}</p>
			<a href={$_('l-c.contact.li-1.link')} rel="noreferrer" target="_blank">
				{$_('l-c.contact.li-1.link-text')}
			</a>
		</li>
	</ul>
</article>
