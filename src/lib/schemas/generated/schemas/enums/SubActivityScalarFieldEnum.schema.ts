import { z } from 'zod';

export const SubActivityScalarFieldEnumSchema = z.enum([
	'id',
	'name',
	'description',
	'startDate',
	'endDate',
	'location',
	'visibility',
	'modality',
	'createdAt',
	'updatedAt',
	'activityId'
]);
