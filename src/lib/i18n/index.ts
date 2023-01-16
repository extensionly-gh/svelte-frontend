import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'pt-BR'

register('pt-BR', () => import('./locales/pt-BR/default.json'))
register('pt-BR', () => import('./locales/pt-BR/cookies.json'))
register('pt-BR', () => import('./locales/pt-BR/privacy.json'))
register('pt-BR', () => import('./locales/pt-BR/terms.json'))
register('en', () => import('./locales/en/default.json'))
register('en', () => import('./locales/en/cookies.json'))
register('en', () => import('./locales/en/privacy.json'))
register('en', () => import('./locales/en/terms.json'))

function getLang() {
	if (browser) {
		const cookieLang = document.cookie.split('; ').find(row => row.startsWith('lang='))?.split('=')[1]
		return cookieLang || window.navigator.language
	}
	return defaultLocale
}

init({
	fallbackLocale: defaultLocale,
	initialLocale: getLang(),
})