import { signupSchema } from '$lib/schemas';
import { prisma } from '$lib/server/singletons';
import { hashPassword } from '$lib/server/utils';
import { publicProcedure } from '$lib/trpc/t';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { TRPCError } from '@trpc/server';

export const createUser = publicProcedure.input(signupSchema).mutation(async ({ input }) => {
	try {
		await prisma.user.create({
			data: {
				name: input.name,
				email: input.email,
				phone: input.phone,
				isTermsAccepted: input.isTermsAccepted,
				password: await hashPassword(input.password)
			}
		});
	} catch (error) {
		if (error instanceof PrismaClientKnownRequestError) {
			// P2002 is the error code for unique constraint violations
			if (error.code === 'P2002') {
				throw new TRPCError({
					message: 'exceptions.users.email-already-in-use',
					code: 'BAD_REQUEST'
				});
			}
		}
		throw error;
	}
});
