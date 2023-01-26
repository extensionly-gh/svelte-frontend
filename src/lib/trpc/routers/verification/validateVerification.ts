import { validateVerificationTokenSchema } from '$lib/schemas';
import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';
import { TRPCError } from '@trpc/server';
import { DateTime } from 'luxon';

export const validateVerification = publicProcedure
	.input(validateVerificationTokenSchema)
	.mutation(async ({ input }) => {
		const verificationWithUser = await prisma.verification.findUnique({
			include: {
				user: true
			},
			where: { id: input.token }
		});

		if (!verificationWithUser) {
			throw new TRPCError({
				message: `v-password.invalid-token`,
				code: 'BAD_REQUEST'
			});
		}

		if (verificationWithUser.isVerified) {
			throw new TRPCError({
				message: `exceptions.users.verifications.${input.type.toLowerCase()}.already-verified`,
				code: 'BAD_REQUEST'
			});
		}

		const tokenCreationAndNowDiff = DateTime.fromJSDate(verificationWithUser.createdAt).diffNow(
			'minutes'
		);

		if (tokenCreationAndNowDiff.minutes <= -15) {
			throw new TRPCError({
				message: `exceptions.users.verifications.expired-token`,
				code: 'BAD_REQUEST'
			});
		}

		return verificationWithUser;
	});
