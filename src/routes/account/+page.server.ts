import { createContext } from '$lib/trpc/context';
import { appRouter, type AppRouterInput } from '$lib/trpc/router';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	return {
		user: await appRouter.createCaller(await createContext(event)).user.getAccountData()
	};
};

export const actions: Actions = {
	update: async (event) => {
		const data = await event.request.formData();
		const formDataAsObject = Object.fromEntries(
			data.entries()
		) as AppRouterInput['user']['updateUser'];
		await appRouter.createCaller(await createContext(event)).user.updateUser(formDataAsObject);
	},
	deleteAccount: async (event) => {
		await appRouter.createCaller(await createContext(event)).user.deleteMyAccount();
	}
};
