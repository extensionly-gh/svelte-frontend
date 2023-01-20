import { prisma } from "$lib/server/singletons";
import { TRPCError } from "@trpc/server";
import { DateTime } from "luxon";
import { authProcedure, router } from "$lib/trpc/t";
import { VerificationCreateOneSchema } from "$lib/server/schemas";

export const userRouter = router({
  createVerification: authProcedure.input(VerificationCreateOneSchema).mutation(async ({ ctx, input }) => {
    const verifications = await prisma.verification.findMany({
      where: {
        userId: ctx.session.user.id,
        type: input.data.type,
      },
    });

    if (verifications.find((v) => v.isVerified)) {
      throw new TRPCError({
        message: `exceptions.users.verifications.${input.data.type.toLowerCase()}.already-verified`,
        code: 'BAD_REQUEST'
      });
    }

    const nowMinusFifteenMinutes = DateTime.now().minus({ minutes: 15 }).toJSDate();

    const expired = verifications.filter((v) => {
      return v.createdAt <= nowMinusFifteenMinutes;
    });

    if (verifications.length > 0 && expired.length > 0) {
      await prisma.verification.deleteMany({
        where: {
          userId: ctx.session.user.id,
          type: input.data.type,
          isVerified: false,
          createdAt: {
            lte: nowMinusFifteenMinutes,
          },
        },
      });
    }

    const pendingVerification = verifications.find((v) => v.createdAt > nowMinusFifteenMinutes);
    const liftCooldownAt = DateTime.now().plus({ minutes: 5 }).toJSDate();

    if (pendingVerification) {
      const isCooldownLifted =
        DateTime.fromJSDate(pendingVerification.liftCooldownAt).diffNow('minutes').minutes <= 0;

      if (!isCooldownLifted) {
        throw new TRPCError({
          message: `exceptions.users.verifications.${input.data.type.toLowerCase()}.cooldown-not-lifted`,
          code: 'BAD_REQUEST'
        });
      }

      await prisma.verification.update({
        data: {
          liftCooldownAt,
        },
        where: {
          id: pendingVerification.id,
        },
      });

      return pendingVerification;
    }

    const verification = await prisma.verification.create({
      data: {
        userId: ctx.session.user.id,
        type: input.data.type,
        liftCooldownAt,
      },
    });

    return verification;
  }),
  getVerifications: authProcedure.query(async ({ ctx }) => {
    const user = await prisma.user.findUnique({
      where: {
        id: ctx.session.user.id
      },
      select: {
        Verification: true
      }
    });

    return user?.Verification
  })
})