import test, { expect } from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test.describe('reset-password', () => {
	test('user send an invalid token', async ({ page }) => {
		const mockedToken = 'invalid-token';

		await page.goto('/verify/reset-password/' + mockedToken, { waitUntil: 'networkidle' });

		await expect(page.getByTestId('toast-body')).toHaveText('Invalid verification token');
	});
});
