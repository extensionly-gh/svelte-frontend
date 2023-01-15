<script lang="ts">
	export let seed: string;
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
	src="https://api.dicebear.com/5.x/identicon/svg?seed={seed}"
	width={sizes[size]}
/>
