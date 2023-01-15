<script lang="ts">
	export let name: string;
	export let size: 'sm' | 'md' | 'lg' = 'md';

	const sizes = {
		sm: 24,
		md: 32,
		lg: 48
	};
</script>

<img
	alt=""
	class="rounded-sm"
	height={sizes[size]}
	src="https://avatars.dicebear.com/api/initials/{name}.svg?fontWeight=800"
	width={sizes[size]}
/>
