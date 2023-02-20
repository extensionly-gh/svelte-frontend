import { createContext } from '$lib/trpc/context';
import { appRouter } from '$lib/trpc/router';
import { handleErrorInServer } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	try {
		await appRouter
			.createCaller(await createContext(event))
			.verification.validateVerification({ type: 'RESET_PASSWORD', token: event.params.token });
	} catch (error) {
		handleErrorInServer(error);
	}

	return { token: event.params.token };
};
