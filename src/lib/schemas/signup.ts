import { z } from 'zod';
import { baseZodObjects } from './strings';

export const signupSchema = z
	.object({
		name: baseZodObjects.strings.default,
		email: baseZodObjects.strings.email,
		phone: baseZodObjects.strings.default,
		password: baseZodObjects.strings.password,
		cpassword: z.string(),
		isTermsAccepted: z.literal(true)
	})
	.superRefine(({ cpassword, password }, ctx) => {
		if (cpassword !== password) {
			ctx.addIssue({
				code: 'custom',
				path: ['cpassword'],
				message: 'zod.password.mismatch'
			});
		}
	});
