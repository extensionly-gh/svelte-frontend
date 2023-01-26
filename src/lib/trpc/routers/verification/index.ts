import { router } from '$lib/trpc/t';
import { createVerification } from './createVerification';
import { getVerifications } from './getVerifications';
import { validateVerification } from './validateVerification';

export const verificationRouter = router({
	createVerification,
	getVerifications,
	validateVerification
});
