import { sendVerificationEmailSchema } from '$lib/schemas';
import { prisma, sendInBlueApi } from '$lib/server/singletons';
import { buildEmail } from '$lib/server/utils/email.utils';
import { appRouter } from '$lib/trpc/router';
import { publicProcedure } from '$lib/trpc/t';
import { TRPCError } from '@trpc/server';

export const sendEmail = publicProcedure
	.input(sendVerificationEmailSchema)
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
			await sendInBlueApi.sendTransacEmail({ sendSmtpEmail: email });
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
