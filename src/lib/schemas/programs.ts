import { z } from 'zod';
import { base } from './_base';

export const createProgramSchema = z.object({
	title: base.strings.default,
	facultyId: z
		.string({ required_error: 'zod.select.invalid' })
		.min(1, 'zod.select.invalid')
		.max(255, 'zod.select.invalid'),
	description: base.strings.large,
	visibility: base.enums.visibilityType
});
