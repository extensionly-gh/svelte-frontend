import test, { expect } from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test.describe('auth dialog', () => {
	test('send reset password instructions', async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		await page.getByTestId('nav-signin-btn').click();
		await page.getByTestId('auth-dialog-forgotpw-btn').click();

		// Sends to a random email because we only care about the success toast in this test
		await page.getByTestId('email-input').fill('random-email-' + Date.now() + '@mailinator.com');
		await page.getByTestId('forgotpw-submit-button').click();

		await expect(page.getByTestId('toast-body')).toHaveText(
			'Instructions to reset your password were sent successfully to your inbox!'
		);
	});
});
