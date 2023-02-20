import { z } from 'zod';
import { baseZodObjects } from './strings';

export const userUpdateSchema = z.object({
	name: baseZodObjects.strings.default,
	email: baseZodObjects.strings.email,
	phone: baseZodObjects.strings.default,
	image: baseZodObjects.strings.url.nullable().or(z.literal(''))
});

const basePasswordSchema = z.object({
	currentPwd: baseZodObjects.strings.default,
	newPwd: baseZodObjects.strings.password,
	confirmPwd: baseZodObjects.strings.default
});

export const passwordResetSchema = z.object({
	token: baseZodObjects.strings.default,
	newPwd: baseZodObjects.strings.password,
	confirmPwd: baseZodObjects.strings.default
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
