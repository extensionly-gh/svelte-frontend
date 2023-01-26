import { router } from '$lib/trpc/t';
import { createPassword } from './createPassword';
import { createUser } from './createUser';
import { deleteMyAccount } from './deleteMyAccount';
import { getAccountData } from './getAccountData';
import { resetPassword } from './resetPassword';
import { sendEmail } from './sendEmail';
import { updatePassword } from './updatePassword';
import { updateUser } from './updateUser';
import { validateEmail } from './validateEmail';

export const userRouter = router({
	deleteMyAccount,
	getAccountData,
	createPassword,
	updatePassword,
	createUser,
	updateUser,
	resetPassword,
	validateEmail,
	sendEmail
});
