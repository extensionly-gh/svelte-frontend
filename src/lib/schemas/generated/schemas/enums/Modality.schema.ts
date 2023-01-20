import { z } from 'zod';

export const ModalitySchema = z.enum(['PRESENTIAL', 'REMOTE']);
