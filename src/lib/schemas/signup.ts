import { z } from 'zod';
import { base } from './_base';

export const signupSchema = z
	.object({
		name: base.strings.default,
		email: base.strings.email,
		phone: base.strings.default,
		password: base.strings.password,
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
