import { prisma, sendInBlueApi } from '$lib/server/singletons';
import { buildEmail } from '$lib/server/utils/email.utils';
import { appRouter } from '$lib/trpc/router';
import { publicProcedure } from '$lib/trpc/t';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const sendEmail = publicProcedure
	.input(
		z.object({
			email: z.string().email('validations.email.invalid'),
			url: z.string(),
			type: z.enum(['VALIDATE_EMAIL', 'RESET_PASSWORD'])
		})
	)
	.mutation(async ({ ctx, input }) => {
		const user = await prisma.user.findUnique({
			where: { email: input.email }
		});

		if (!user) return;

		const verification = await appRouter.createCaller(ctx).verification.createVerification({
			type: input.type,
			email: input.email
		});

		const email = buildEmail({
			verificationType: verification.type,
			recipientEmail: input.email,
			recipientName: user.name,
			frontendUrl: input.url,
			token: verification.id
		});

		try {
			if (ctx.canSendEmail) {
				await sendInBlueApi.sendTransacEmail({ sendSmtpEmail: email });
			}
		} catch (error) {
			console.log(
				`error-sending-${verification.type.toLowerCase().replaceAll('_', '-')}-email`,
				error
			);
			throw new TRPCError({
				message: `exceptions.users.error-sending-email`,
				code: 'BAD_REQUEST'
			});
		}
	});
