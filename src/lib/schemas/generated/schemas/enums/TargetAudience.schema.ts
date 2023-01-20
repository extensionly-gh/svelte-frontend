import { z } from 'zod';

export const TargetAudienceSchema = z.enum([
	'STUDENT',
	'PROFESSOR',
	'ADMINISTRATIVE_TECHNICIAN',
	'EXTERNAL'
]);
