import { z } from 'zod';
import { base } from './_base';

export const signinSchema = z.object({
	email: base.strings.email,
	password: base.strings.default
});
