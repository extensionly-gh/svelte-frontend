import { z } from "zod";

export const userWithNameSchema = z.object({
  name: z.string().max(255, { message: "validations.string.max" }),
})

export const userWithEmailSchema = z.object({
  email: z.string().email({ message: "validations.email.invalid" }).max(255, { message: "validations.string.max" }),
})