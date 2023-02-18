import test, { expect } from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test.only('delete account', async ({ page }) => {
	const email = 'extensionly-delete-account@mailinator.com';
	const password = 'StrongPassword1.';

	await page.goto('/', { waitUntil: 'networkidle' });
	await page.getByTestId('nav-signin-btn').click();

	await page.getByTestId('signin-email-input').fill(email);
	await page.getByTestId('signin-password-input').fill(password);
	await page.getByTestId('signin-submit-button').click();
	await page.getByTestId('menu-trigger-user-menu').click();
	await page.getByTestId('menu-item-my-account').click();

	await page.getByTestId('delete-account-dialog-open-button').click();

	await page.getByTestId('emailDelete-input').fill(email);
	await page.getByTestId('delete-account-dialog-confirm-button').click();
	await expect(page.getByTestId('toast-body')).toHaveText('Your account was deleted successfully.');
});
