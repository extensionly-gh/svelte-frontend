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
		currentPwd: z.string(),
		newPwd: password,
		confirmPwd: z.string()
	})
	.superRefine(({ confirmPwd, newPwd }, ctx) => {
		if (confirmPwd !== newPwd) {
			ctx.addIssue({
				code: 'custom',
				path: ['confirmPwd'],
				message: 'zod.password.mismatch'
			});
		}
	});
