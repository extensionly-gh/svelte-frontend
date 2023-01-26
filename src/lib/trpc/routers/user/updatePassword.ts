import { passwordUpdateSchema } from '$lib/schemas';
import { prisma } from '$lib/server/singletons';
import { comparePassword, hashPassword } from '$lib/server/utils';
import { authProcedure } from '$lib/trpc/t';
import { TRPCError } from '@trpc/server';

export const updatePassword = authProcedure
	.input(passwordUpdateSchema)
	.mutation(async ({ ctx, input }) => {
		const { id } = ctx.session.user;

		const { password: hashedPwd } = await prisma.user.findUniqueOrThrow({
			where: { id },
			select: {
				password: true
			}
		});

		if (!hashedPwd) {
			throw new TRPCError({
				message: 'exceptions.users.password.no-password',
				code: 'BAD_REQUEST'
			});
		}

		if (!(await comparePassword(input.currentPwd, hashedPwd))) {
			throw new TRPCError({
				message: 'exceptions.users.password.incorrect-current',
				code: 'BAD_REQUEST'
			});
		}

		await prisma.user.update({
			where: { id },
			data: {
				password: await hashPassword(input.newPwd)
			}
		});
	});
