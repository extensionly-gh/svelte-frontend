import { router } from '$lib/trpc/t';
import { getActivities } from './getActivities';

export const activityRouter = router({
	getActivities
});
