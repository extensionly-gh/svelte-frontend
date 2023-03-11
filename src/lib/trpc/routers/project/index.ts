import { router } from '$lib/trpc/t';
import { createProgram } from './createProject';

export const projectRouter = router({
	createProgram: createProgram
});
