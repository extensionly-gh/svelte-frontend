<script>
	import { Button } from '$lib/components';
	import { _ } from 'svelte-i18n';
</script>

<div>
	<Button to="/programs/new">
		{$_('p-programs.create-new')}
	</Button>
</div>
