import { z } from "zod";

export const userWithNameSchema = z.object({
  name: z.string().max(255, { message: "validations.string.max" }),
})