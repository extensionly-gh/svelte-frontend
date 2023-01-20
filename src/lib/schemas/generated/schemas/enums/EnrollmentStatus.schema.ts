import { z } from 'zod';

export const EnrollmentStatusSchema = z.enum(['CREATED', 'ACCEPTED']);
