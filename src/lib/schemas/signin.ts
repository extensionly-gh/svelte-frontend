import { z } from 'zod';

export const signinSchema = z.object({
	email: z.string().email('zod.email.invalid'),
	password: z.string()
});

export const signupSchema = z
	.object({
		email: z.string().email('zod.email.invalid'),
		password: z.string().min(8, 'zod.password.min').max(255, 'zod.string.max'),
		cpassword: z.string()
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

export const forgotpwSchema = z.object({
	email: z.string().email('zod.email.invalid')
});
