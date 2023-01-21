import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'winter' | 'night' | undefined | null;

export const theme = writable<Theme>('winter');

export const getThemeFromCookie = (): Theme => {
	if (browser) {
		const userThemeFromCookie = document.cookie
			.split('; ')
			.find((row) => row.startsWith('theme='))
			?.split('=')[1] as Theme;

		return userThemeFromCookie || 'winter';
	}
};
