import { createContext } from '$lib/trpc/context';
import { appRouter } from '$lib/trpc/router';
import { handleErrorInServer } from '$lib/utils';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	try {
		await appRouter
			.createCaller(await createContext(event))
			.user.validateEmail({ token: event.params.token });
	} catch (error) {
		handleErrorInServer(error);
	}
	throw redirect(302, '/?success=v-email.email-validated');
};
