import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'winter' | 'night' | undefined | null;

export const theme = writable<Theme>('winter', (set) => {
	if (!browser) return;

	const preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

	const callback = (e: MediaQueryListEvent) => {
		const useSystemTheme =
			document.cookie
				.split('; ')
				.find((row) => row.startsWith('useSystemTheme='))
				?.split('=')[1] ?? 'true';

		if (useSystemTheme === 'true') {
			const theme = e.matches ? 'night' : 'winter';
			set(theme);
			fetch('/api/theme', {
				method: 'PUT',
				body: JSON.stringify({ theme })
			});
		}
	};

	// @ts-expect-error - we only care about the matches property
	callback({ matches: preferredColorScheme.matches });
	preferredColorScheme.addEventListener('change', callback);

	return () => {
		preferredColorScheme.removeEventListener('change', callback);
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
