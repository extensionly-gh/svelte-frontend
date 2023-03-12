import { z } from 'zod';
import { base } from './_base';

export const createActivitySchema = z.object({
	title: base.strings.default,
	shortDescription: base.strings.default,
	description: base.strings.large
});
