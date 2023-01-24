import { z } from 'zod';
import { email, name, password } from './strings';

export const signinSchema = z.object({
	email,
	password: z.string()
});

const baseSignupSchema = z.object({
	name,
	email,
	phone: z.string(),
	password,
	cpassword: z.string()
});

export const signupSchema = baseSignupSchema.superRefine(({ cpassword, password }, ctx) => {
	if (cpassword !== password) {
		ctx.addIssue({
			code: 'custom',
			path: ['cpassword'],
			message: 'zod.password.mismatch'
		});
	}
});

export const forgotpwSchema = z.object({ email });

export const createUserSchema = baseSignupSchema.omit({ cpassword: true });
