import test from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test.describe('auth dialog', () => {
	test('signs in', async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		await page.getByTestId('nav-signin-btn').click();
		await page.getByTestId('signin-email-input').fill('ext-signin@mailinator.com');
		await page.getByTestId('signin-password-input').fill('#1Abcdef');
		await page.getByTestId('signin-submit-button').click();
		await page.getByTestId('menu-trigger-user-menu').click();
	});
});
