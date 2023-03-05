import { router } from '$lib/trpc/t';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { activityRouter, facultyRouter, userRouter, verificationRouter } from './routers';

export const appRouter = router({
	user: userRouter,
	verification: verificationRouter,
	activity: activityRouter,
	faculty: facultyRouter
});

export type AppRouter = typeof appRouter;
export type AppRouterInput = inferRouterInputs<AppRouter>;
export type AppRouterOutput = inferRouterOutputs<AppRouter>;
