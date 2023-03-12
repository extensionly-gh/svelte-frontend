import { router } from '$lib/trpc/t';
import { createProject } from './createProject';

export const projectRouter = router({
	createProject: createProject
});
