import { z } from 'zod';
import { baseZodObjects } from './strings';

export const signinSchema = z.object({
	email: baseZodObjects.strings.email,
	password: baseZodObjects.strings.default
});
