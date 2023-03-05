import { router } from '$lib/trpc/t';
import { createProgram } from './createProgram';

export * from './createProgram';

export const programRouter = router({
	createProgram: createProgram
});
