import type { Theme } from '$lib/stores/theme.store';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	return {
		session: await event.locals.getSession(),
		lang: event.cookies.get('lang'),
		theme: event.cookies.get('theme') as Theme
	};
};
