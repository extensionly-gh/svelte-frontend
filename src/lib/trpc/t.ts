import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from '$lib/trpc/context';

export const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const isAuthenticated = t.middleware(async ({ ctx, next }) => {
	if (!ctx.session) {
		throw new TRPCError({ message: 'exceptions.users.not-authorized', code: 'UNAUTHORIZED' });
	}

	return next({
		ctx: {
			session: ctx.session
		}
	});
});

export const authProcedure = publicProcedure.use(isAuthenticated);
