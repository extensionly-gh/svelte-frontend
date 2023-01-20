import { z } from 'zod';

export const ActivityStatusSchema = z.enum(['CREATED', 'ACCEPTED', 'REJECTED']);
