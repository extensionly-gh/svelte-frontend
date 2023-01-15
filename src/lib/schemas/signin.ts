import { z } from 'zod';

export const signinSchema = z.object({
  email: z.string().email({ message: 'validations.email.invalid' }),
  password: z.string(),
});

export const signupSchema = z.object({
  email: z.string().email({ message: 'validations.email.invalid' }),
  password: z.string().min(8, { message: 'validations.password.min' }),
  cpassword: z.string()
}).superRefine(({ cpassword, password }, ctx) => {
  if (cpassword !== password) {
    ctx.addIssue({
      code: "custom",
      path: ['cpassword'],
      message: "validations.password.mismatch"
    });
  }
});

export const forgotpwSchema = z.object({
  email: z.string().email({ message: 'validations.email.invalid' }),
});