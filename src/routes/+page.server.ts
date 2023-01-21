import { sendInBlueApi } from '$lib/server/singletons';
import { buildEmail } from '$lib/server/utils/email.utils';
import { createContext } from '$lib/trpc/context';
import { appRouter } from '$lib/trpc/router';
import { fail } from '@sveltejs/kit';
import { TRPCError } from '@trpc/server';
import { FelteSubmitError } from 'felte';
import type { Actions } from './$types';

export const actions: Actions = {
	forgotPw: async (event) => {
		const data = await event.request.formData();
		try {
			const userExists = await appRouter
				.createCaller(await createContext(event))
				.user.userExists({ email: data.get('email') as string });

			const builtEmail = buildEmail({
				type: 'reset_password',
				toEmail: data.get('email') as string,
				recipientName: 'Igor Dalepiane da Costa'
			});

			sendInBlueApi.sendTransacEmail(builtEmail).then(
				function (data: any) {
					console.log('API called successfully. Returned data: ' + JSON.stringify(data));
				},
				function (error: any) {
					console.error(error);
				}
			);
		} catch (error) {
			if (error instanceof TRPCError) {
				return fail(500, { message: error.message });
			}
		}
	}
};
