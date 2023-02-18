import test, { expect } from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test.only('update password', async ({ page }) => {
	// Signin
	await page.goto('/', { waitUntil: 'networkidle' });
	await page.getByTestId('nav-signin-btn').click();
	await page.getByTestId('signin-email-input').fill('extensionly-change-pw@mailinator.com');
	await page.getByTestId('signin-password-input').fill('StrongPassword1.');
	await page.getByTestId('signin-submit-button').click();

	await page.getByTestId('menu-trigger-user-menu').click();
	await page.getByTestId('menu-item-my-account').click();

	await page.getByTestId('currentPwd-input').fill('StrongPassword1.');
	await page.getByTestId('newPwd-input').fill('#1Abcdef');
	await page.getByTestId('confirmPwd-input').fill('#1Abcdef');
	await page.getByTestId('updatepw-submit-button').click();

	await expect(page.getByTestId('toast-body')).toHaveText('Password updated successfully!');

	// Revert
	await page.getByTestId('currentPwd-input').fill('#1Abcdef');
	await page.getByTestId('newPwd-input').fill('StrongPassword1.');
	await page.getByTestId('confirmPwd-input').fill('StrongPassword1.');
	const updateResponse = page.waitForResponse((response) =>
		response.url().includes('user.updatePassword')
	);
	await page.getByTestId('updatepw-submit-button').click();
	await updateResponse;
});
