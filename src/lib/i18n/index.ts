import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'pt-BR';

const modulesPtBr = import.meta.glob(`./locales/pt-BR/**/*.json`);
for (const path in modulesPtBr) {
	register('pt-BR', modulesPtBr[path]);
}

const modulesEn = import.meta.glob(`./locales/en/**/*.json`);
for (const path in modulesEn) {
	register('en', modulesEn[path]);
}

function getLang() {
	if (browser) {
		const cookieLang = document.cookie
			.split('; ')
			.find((row) => row.startsWith('lang='))
			?.split('=')[1];
		return cookieLang || window.navigator.language;
	}
	return defaultLocale;
}

init({
	fallbackLocale: defaultLocale,
	initialLocale: getLang()
});
