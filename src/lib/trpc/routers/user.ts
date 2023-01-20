import { prisma } from "$lib/server/singletons";
import { t } from "../t";

export const userRouter = t.router({
  verifications: t.procedure.query(async ({ ctx }) => {
    if (ctx.session) {
      const user = await prisma.user.findUnique({
        where: {
          id: ctx.session?.user.id
        },
        select: {
          Verification: true
        }
      });

      return user?.Verification
    }
  })
})