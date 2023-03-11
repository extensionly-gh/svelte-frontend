import { router } from '$lib/trpc/t';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import {
	activityRouter,
	facultyRouter,
	programRouter,
	projectRouter,
	userRouter,
	verificationRouter
} from './routers';

export const appRouter = router({
	user: userRouter,
	verification: verificationRouter,
	activity: activityRouter,
	faculty: facultyRouter,
	program: programRouter,
	project: projectRouter
});

export type AppRouter = typeof appRouter;
export type AppRouterInput = inferRouterInputs<AppRouter>;
export type AppRouterOutput = inferRouterOutputs<AppRouter>;
