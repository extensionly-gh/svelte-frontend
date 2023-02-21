import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { visualizer } from 'rollup-plugin-visualizer';

const config: UserConfig = {
	build: {
		rollupOptions: {
			plugins: process.env.ANALYZE ? [visualizer({ emitFile: true, filename: 'stats.html' })] : []
		}
	},
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	]
};

export default config;
