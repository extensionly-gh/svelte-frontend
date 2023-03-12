import test, { expect } from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test('validate email successfully', async ({ page }) => {
	// Token is mocked for this user in the seed file
	const mockedToken = 'm0ck3d-3m41l-v4lid4t10n-t0k3n';

	await page.goto('/verify/validate-email/' + mockedToken, { waitUntil: 'networkidle' });
	await expect(page.getByTestId('toast-body')).toHaveText('Email successfully validated!');
});
