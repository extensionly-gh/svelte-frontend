import { createContext } from '$lib/trpc/context';
import { appRouter } from '$lib/trpc/router';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.params.token) {
		try {
			const user = await appRouter
				.createCaller(await createContext(event))
				.user.checkVerification({ id: event.params.token });
			return {
				userEmail: user?.email
			};
		} catch (_) {
			throw error(404, 'Not found');
		}
	}
	throw error(404, 'Not found');
};
