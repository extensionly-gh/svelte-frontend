import { trpc } from '$lib/trpc/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const query = event.url.searchParams.get('query') || '';
	return {
		activities: trpc(event).activity.getActivities.query({ take: 6, search: query }),
		query
	};
};
