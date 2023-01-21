import { z } from 'zod';

export const userUpdateSchema = z.object({
	name: z.string().min(3, 'zod.string.min').max(255, 'zod.string.max'),
	email: z.string().email('zod.email.invalid'),
	phone: z
		.string()
		.min(10, 'zod.string.min')
		.max(20, 'zod.string.max')
		.nullable()
		.or(z.literal('')),
	image: z.string().url('zod.url.invalid').nullable().or(z.literal(''))
});

export const passwordUpdateSchema = z
	.object({
		password: z
			.string()
			.min(8, 'zod.password.min')
			.max(255, 'zod.string.max')
			.refine((v) => /[A-Z]/.test(v), 'zod.string.uppercase'),
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
