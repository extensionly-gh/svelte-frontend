<script>
	import { _ } from 'svelte-i18n';
</script>

<article class="prose prose-slate">
	<h1>{$_('cookiep.intro.title')}</h1>
	<p>{$_('cookiep.intro.last-updated')}</p>
	<p>{$_('cookiep.intro.par-1')}</p>
	<p>{$_('cookiep.intro.par-2')}</p>
	<p>{$_('cookiep.intro.par-3')}</p>
	<h2>{$_('cookiep.interpretation.title')}</h2>
	<h3>{$_('cookiep.interpretation.subtitle')}</h3>
	<p>{$_('cookiep.interpretation.description')}</p>
	<h3>{$_('cookiep.interpretation.definitions.title')}</h3>
	<p>{$_('cookiep.interpretation.definitions.description')}</p>
	<ul>
		<li>
			<b>{$_('cookiep.interpretation.definitions.li-1.bold')}</b>
			{$_('cookiep.interpretation.definitions.li-1.text')}
		</li>
		<li>
			<b>{$_('cookiep.interpretation.definitions.li-2.bold')}</b>
			{$_('cookiep.interpretation.definitions.li-2.text')}
		</li>
		<li>
			<b>{$_('cookiep.interpretation.definitions.li-3.bold')}</b>
			{$_('cookiep.interpretation.definitions.li-3.text')}{' '}
			<a href={$_('cookiep.interpretation.definitions.li-3.link')}
				>{$_('cookiep.interpretation.definitions.li-3.link')}</a
			>
		</li>
		<li>
			<b>{$_('cookiep.interpretation.definitions.li-4.bold')}</b>
			{$_('cookiep.interpretation.definitions.li-4.text')}
		</li>
	</ul>
	<h2>{$_('cookiep.use-of-cookies.title')}</h2>
	<h3>{$_('cookiep.use-of-cookies.type-of-cookies.subtitle')}</h3>
	<p>{$_('cookiep.use-of-cookies.type-of-cookies.description.par-1')}</p>
	<p>{$_('cookiep.use-of-cookies.type-of-cookies.description.par-2')}</p>
	<ul>
		<li>
			<b>{$_('cookiep.use-of-cookies.type-of-cookies.li-1.bold')}</b>
			<p>{$_('cookiep.use-of-cookies.type-of-cookies.li-1.type')}</p>
			<p>{$_('cookiep.use-of-cookies.type-of-cookies.li-1.administered-by')}</p>
			<p>{$_('cookiep.use-of-cookies.type-of-cookies.li-1.purpose')}</p>
		</li>
	</ul>
	<h3>{$_('cookiep.use-of-cookies.your-choices.subtitle')}</h3>
	<p>{$_('cookiep.use-of-cookies.your-choices.description.par-1')}</p>
	<p>{$_('cookiep.use-of-cookies.your-choices.description.par-2')}</p>
	<p>{$_('cookiep.use-of-cookies.your-choices.description.par-3')}</p>
	<ul>
		<li>
			<p>{$_('cookiep.use-of-cookies.your-choices.li-1.text')}</p>
			<a href={$_('cookiep.use-of-cookies.your-choices.li-1.link')}>
				{$_('cookiep.use-of-cookies.your-choices.li-1.link')}
			</a>
		</li>
		<li>
			<p>{$_('cookiep.use-of-cookies.your-choices.li-2.text')}</p>
			<a href={$_('cookiep.use-of-cookies.your-choices.li-2.link')}>
				{$_('cookiep.use-of-cookies.your-choices.li-2.link')}
			</a>
		</li>
		<li>
			<p>{$_('cookiep.use-of-cookies.your-choices.li-3.text')}</p>
			<a href={$_('cookiep.use-of-cookies.your-choices.li-3.link')}>
				{$_('cookiep.use-of-cookies.your-choices.li-3.link')}
			</a>
		</li>
		<li>
			<p>{$_('cookiep.use-of-cookies.your-choices.li-4.text')}</p>
			<a href={$_('cookiep.use-of-cookies.your-choices.li-4.link')}>
				{$_('cookiep.use-of-cookies.your-choices.li-4.link')}
			</a>
		</li>
	</ul>
	<p>{$_('cookiep.use-of-cookies.your-choices.footer')}</p>
	<h3>{$_('cookiep.more-info.subtitle')}</h3>
	<p>{$_('cookiep.more-info.description')}</p>
	<a href={$_('cookiep.more-info.link')}>{$_('cookiep.more-info.link-text')}</a>
	<h3>{$_('cookiep.contact.title')}</h3>
	<p>{$_('cookiep.contact.description')}</p>
	<ul>
		<li>
			<p>{$_('cookiep.contact.li-1.text')}</p>
			<a href={$_('cookiep.contact.li-1.link')} rel="noreferrer" target="_blank">
				{$_('cookiep.contact.li-1.link-text')}
			</a>
		</li>
	</ul>
</article>
