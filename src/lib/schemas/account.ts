import { z } from 'zod';
import { name, email, password } from './strings';

export const userUpdateSchema = z.object({
	name,
	email,
	phone: z.string(),
	image: z.string().url('zod.url.invalid').nullable().or(z.literal(''))
});

export const passwordUpdateSchema = z
	.object({
		password,
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
