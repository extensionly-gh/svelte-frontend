import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'winter' | 'night' | undefined | null;

export const theme = writable<Theme>('winter', (set) => {
	if (!browser) return;

	const preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

	preferredColorScheme.addEventListener('change', (e) => {
		const useSystemTheme = document.cookie
			.split('; ')
			.find((row) => row.startsWith('useSystemTheme='))
			?.split('=')[1] as string;

		if (useSystemTheme === 'true') {
			const theme = e.matches ? 'night' : 'winter';
			console.log('theme', theme);

			set(theme);
			fetch('/api/theme', {
				method: 'PUT',
				body: JSON.stringify({ theme })
			});
		}
	});

	return () => {
		preferredColorScheme.removeEventListener('change', (e) => set(e.matches ? 'night' : 'winter'));
	};
});

export const getThemeFromCookie = (): Theme => {
	if (browser) {
		const userThemeFromCookie = document.cookie
			.split('; ')
			.find((row) => row.startsWith('theme='))
			?.split('=')[1] as Theme;

		return userThemeFromCookie || 'winter';
	}
};
