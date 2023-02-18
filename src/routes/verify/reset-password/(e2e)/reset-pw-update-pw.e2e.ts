import test, { expect } from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test.describe('reset-password', () => {
	const email = 'extensionly-reset-pw@mailinator.com';
	const firstPassword = 'StrongPassword1.';
	const newPassword = '#1Abcdef';

	test('send reset password form successfully', async ({ page }) => {
		// Token is mocked for this user in the seed file
		const mockedToken = 'm0ck3d-p4ssw0rd-r3s3t-t0k3n';

		await page.goto('/verify/reset-password/' + mockedToken);
		await page.getByTestId('newPwd-input').fill(newPassword);
		await page.getByTestId('confirmPwd-input').fill(newPassword);
		await page.getByTestId('resetpw-submit-button').click();

		await expect(page.getByTestId('toast-body')).toHaveText('Password updated successfully!');
	});

	test('fails to sign in with previous password', async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		await page.getByTestId('nav-signin-btn').click();

		await page.getByTestId('signin-email-input').fill(email);
		await page.getByTestId('signin-password-input').fill(firstPassword);
		await page.getByTestId('signin-submit-button').click();

		await expect(page.getByTestId('toast-body')).toHaveText('User not found');
	});
});
