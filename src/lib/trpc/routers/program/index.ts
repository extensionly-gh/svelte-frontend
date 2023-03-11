import { router } from '$lib/trpc/t';
import { createProgram } from './createProgram';
import { getProgramsForSelect } from './getProgramsForSelect';

export const programRouter = router({
	createProgram: createProgram,
	getProgramsForSelect: getProgramsForSelect
});
