import { z } from 'zod';

export const signinSchema = z.object({
	email: z.string().email('zod.email.invalid'),
	password: z.string()
});

export const signupSchema = z
	.object({
		email: z.string().email('zod.email.invalid'),
		password: z
			.string()
			.min(8, 'zod.password.min')
			.max(255, 'zod.string.max')
			.refine((v) => /[A-Z]/.test(v), 'zod.string.uppercase')
			.refine((v) => /[a-z]/.test(v), 'zod.string.lowercase')
			.refine((v) => /[0-9]/.test(v), 'zod.string.numeric')
			.refine((v) => /[^A-Za-z0-9]/.test(v), 'zod.string.symbol'),
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
