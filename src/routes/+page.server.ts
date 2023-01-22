import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	signUp: async (event) => {
		const data = await event.request.formData();
		const formDataAsObject = Object.fromEntries(data.entries());
		console.log(formDataAsObject);
	}
};
