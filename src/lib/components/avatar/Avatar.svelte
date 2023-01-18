<script lang="ts">
	export let src: string;
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
	referrerpolicy="no-referrer"
	src={`${
		/^https?:\/\//g.test(src)
			? src
			: `https://avatars.dicebear.com/api/initials/${src}.svg?fontWeight=800}`
	}`}
	width={sizes[size]}
/>
