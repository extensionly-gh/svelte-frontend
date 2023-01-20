import { z } from 'zod';

export const ActivityScalarFieldEnumSchema = z.enum([
	'id',
	'title',
	'description',
	'category',
	'location',
	'prerequisites',
	'startDate',
	'endDate',
	'enrollmentStart',
	'enrollmentEnd',
	'contact',
	'faculty',
	'targetAudience',
	'visibility',
	'status',
	'modality',
	'proponentId',
	'projectId',
	'createdAt',
	'updatedAt'
]);
