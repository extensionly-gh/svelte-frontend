import { createContext } from '$lib/trpc/context';
import { appRouter } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	return {
		activities: await appRouter
			.createCaller(await createContext(event))
			.activity.getActivities({ take: 6 }),
		query: event.url.searchParams.get('query') || ''
	};
};
