<script>
	import { Button } from '$lib/components';
	import { _ } from 'svelte-i18n';
</script>

<div>
	<Button to="/projects/new">
		{$_('p-projects.create-new')}
	</Button>
</div>
