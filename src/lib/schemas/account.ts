import { z } from "zod";

export const userWithNameSchema = z.object({
  name: z.string().min(3, 'validations.string.min').max(255, 'validations.string.max'),
})

export const userWithEmailSchema = z.object({
  email: z.string().email('validations.email.invalid'),
})