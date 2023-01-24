import { z } from 'zod';
import { name, email, password } from './strings';

export const userUpdateSchema = z.object({
	name,
	email,
	phone: z.string(),
	image: z.string().url('zod.url.invalid').nullable().or(z.literal(''))
});

const basePasswordSchema = z.object({
	currentPwd: z.string(),
	newPwd: password,
	confirmPwd: z.string()
});

export const passwordResetSchema = z.object({
	token: z.string(),
	newPwd: password,
	confirmPwd: z.string()
});

export const passwordUpdateSchema = basePasswordSchema.superRefine(
	({ confirmPwd, newPwd }, ctx) => {
		if (confirmPwd !== newPwd) {
			ctx.addIssue({
				code: 'custom',
				path: ['confirmPwd'],
				message: 'zod.password.mismatch'
			});
		}
	}
);

export const passwordCreateSchema = basePasswordSchema
	.omit({ currentPwd: true })
	.superRefine(({ confirmPwd, newPwd }, ctx) => {
		if (confirmPwd !== newPwd) {
			ctx.addIssue({
				code: 'custom',
				path: ['confirmPwd'],
				message: 'zod.password.mismatch'
			});
		}
	});

export const formPasswordResetSchema = passwordResetSchema
	.omit({ token: true })
	.superRefine(({ confirmPwd, newPwd }, ctx) => {
		if (confirmPwd !== newPwd) {
			ctx.addIssue({
				code: 'custom',
				path: ['confirmPwd'],
				message: 'zod.password.mismatch'
			});
		}
	});
