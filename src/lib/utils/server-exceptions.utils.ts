import { redirect } from '@sveltejs/kit';
import { TRPCError } from '@trpc/server';

export const handleErrorInServer = (error: unknown) => {
	if (error instanceof TRPCError) {
		throw redirect(302, `/?error=${error.message}`);
	}
	throw redirect(302, '/?error=exceptions.generic');
};
