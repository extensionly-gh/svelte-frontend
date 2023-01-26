import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params: { token } }) => {
	return { token };
};
