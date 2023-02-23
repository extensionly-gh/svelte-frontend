import { checkVerificationByEmailSchema } from '$lib/schemas';
import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';
import { TRPCError } from '@trpc/server';

export const checkVerificationByEmail = publicProcedure
	.input(checkVerificationByEmailSchema)
	.query(async ({ input }) => {
		const userVerifications = (
			await prisma.user.findUnique({
				select: {
					Verification: {
						where: {
							type: input.type
						}
					}
				},
				where: { email: input.email }
			})
		)?.Verification;

		if (!userVerifications || !userVerifications.length) {
			throw new TRPCError({
				message: `exceptions.users.verifications.${input.type.toLowerCase()}.no-verifications`,
				code: 'BAD_REQUEST'
			});
		}

		const verified = userVerifications.filter((verification) => verification.isVerified);

		if (verified.length > 0) {
			return true;
		}

		throw new TRPCError({
			message: `exceptions.users.verifications.${input.type.toLowerCase()}.not-verified`,
			code: 'BAD_REQUEST'
		});
	});
