import { z } from 'zod';
import { base } from './_base';

export const createVerificationSchema = z.object({
	type: base.enums.verificationType,
	email: base.strings.email
});

export const checkVerificationByTokenSchema = z.object({
	type: base.enums.verificationType,
	token: base.strings.default
});

export const checkVerificationByEmailSchema = z.object({
	type: base.enums.verificationType,
	email: base.strings.default
});

export const validateEmailSchema = z.object({
	token: base.strings.default
});

export const sendVerificationEmailSchema = z.object({
	type: base.enums.verificationType,
	email: base.strings.email
});
