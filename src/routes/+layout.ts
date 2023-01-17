import '$lib/i18n'
import { browser } from '$app/environment'
import { locale, waitLocale } from 'svelte-i18n'
import { theme } from '$lib/stores'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = (async ({ data }) => {
	if (browser) {
		theme.set(data.theme || 'winter')
		locale.set(data.lang || window.navigator.language)

		if (!data.lang) {
			fetch('/api/locale', {
				method: 'PUT',
				body: JSON.stringify({ lang: window.navigator.language }),
			})
		}
	}
	await waitLocale(data.lang || window.navigator.language)
}) 