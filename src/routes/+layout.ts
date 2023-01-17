import '$lib/i18n'
import { browser } from '$app/environment'
import { locale, waitLocale } from 'svelte-i18n'
import { theme } from '$lib/stores'

export const load = (async () => {
	await waitLocale()
	if (browser) {
		// Gets language from cookie and if its not present, sets it
		const cookies = document.cookie.split('; ')
		const lang = cookies.find(row => row.startsWith('lang='))
		const userTheme = cookies.find(row => row.startsWith('theme='))

		if (!lang) {
			fetch('/api/locale', {
				method: 'PUT',
				body: JSON.stringify({ lang: window.navigator.language }),
			})
		}

		locale.set(lang || window.navigator.language)
		theme.set(userTheme?.split('=')[1] as 'winter' | 'night' || 'winter')
	}
}) 