import test, { expect } from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test.describe('auth dialog', () => {
	const emailId = 'extensionly-signup-test';
	const email = emailId + '@mailinator.com';
	const password = 'StrongPassword1.';

	test('signs up', async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		await page.getByTestId('nav-signin-btn').click();
		await page.getByTestId('auth-dialog-context-btn').click();
		await page.getByTestId('signup-name-input').fill('Signup Test');
		await page.getByTestId('signup-email-input').fill(email);
		await page.getByTestId('signup-phone-input').fill('+5551999999996');
		await page.getByTestId('signup-password-input').fill(password);
		await page.getByTestId('signup-cpassword-input').fill(password);
		await page.getByTestId('isTermsAccepted-checkbox').click();

		await page.getByTestId('signup-submit-button').click();
		await expect(page.getByTestId('toast-body')).toHaveText(
			'Check your e-mail inbox to complete the registration!'
		);
	});
});
