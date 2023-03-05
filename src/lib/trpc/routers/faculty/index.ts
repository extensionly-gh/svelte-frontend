import { router } from '$lib/trpc/t';
import { getFaculties } from './getFaculties';

export const facultyRouter = router({
	getFaculties
});
