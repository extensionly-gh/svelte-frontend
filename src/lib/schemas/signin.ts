import { z } from 'zod';

export const signinSchema = z.object({
  email: z.string().email({ message: 'validations.email.invalid' }),
  password: z.string()
});