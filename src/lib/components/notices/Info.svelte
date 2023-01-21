<script lang="ts">
	import IconInfo from '~icons/ph/info';

	export let text: string;
</script>

<div class="bg-info rounded-lg p-2 flex gap-2 items-center">
	<IconInfo class="text-info-content flex-grow" width="42px" height="42px" />
	<p class="text-sm text-info-content font-semibold">
		{text}
	</p>
</div>
