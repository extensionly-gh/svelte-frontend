import { createContext } from '$lib/trpc/context';
import { appRouter } from '$lib/trpc/router';
import { handleErrorInServer } from '$lib/utils';
import { redirect } from '@sveltejs/kit';
import { TRPCError } from '@trpc/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	try {
		await appRouter
			.createCaller(await createContext(event))
			.user.validateEmail({ token: event.params.token });
	} catch (error) {
		if (
			error instanceof TRPCError &&
			error.message === 'exceptions.users.verifications.expired-token'
		) {
			const email = await appRouter
				.createCaller(await createContext(event))
				.verification.getUserByToken({ token: event.params.token });

			await appRouter
				.createCaller(await createContext(event))
				.user.sendEmail({ type: 'VALIDATE_EMAIL', email });

			throw redirect(302, '/?info=v-email.sent-new-email');
		} else {
			handleErrorInServer(error);
		}
	}
	throw redirect(302, '/?success=v-email.email-validated');
};
