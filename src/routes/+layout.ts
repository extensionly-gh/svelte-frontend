import '$lib/i18n'
import { browser } from '$app/environment'
import { locale, waitLocale } from 'svelte-i18n'

export const load = (async () => {
	if (browser) {
		// Gets language from cookie and if its not present, sets it
		const cookieLang = document.cookie.split('; ').find(row => row.startsWith('lang='))?.split('=')[1]
		if (!cookieLang) {
			fetch('/api/locale', {
				method: 'PUT',
				body: JSON.stringify({ lang: window.navigator.language }),
			})
		}
		locale.set(cookieLang || window.navigator.language)
	}
	await waitLocale()
})

export const prerender = true