<script lang="ts">
	import { page } from '$app/stores';
</script>

<div>
	{$page.url.searchParams.get('q')}
</div>
