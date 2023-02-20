import { z } from 'zod';
import { baseZodObjects } from './strings';

export const createVerificationSchema = z.object({
	type: baseZodObjects.enums.verificationType,
	email: baseZodObjects.strings.email
});

export const validateVerificationTokenSchema = z.object({
	type: baseZodObjects.enums.verificationType,
	token: baseZodObjects.strings.default
});

export const validateEmailSchema = z.object({
	token: baseZodObjects.strings.default
});

export const sendVerificationEmailSchema = z.object({
	type: baseZodObjects.enums.verificationType,
	email: baseZodObjects.strings.email,
	url: baseZodObjects.strings.default
});
