import { userRouter } from './routers/user';
import { router } from '$lib/trpc/t';

export const appRouter = router({
	user: userRouter
});

export type AppRouter = typeof appRouter;
