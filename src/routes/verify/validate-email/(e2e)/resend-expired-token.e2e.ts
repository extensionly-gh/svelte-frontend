import test, { expect } from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test('resend expired email token', async ({ page }) => {
	const mockedToken = 'm0ck3d-3m41l-v4lid4t10n-t0k3n-3xp1r3d';

	await page.goto('/verify/validate-email/' + mockedToken);
	await expect(page.getByTestId('toast-body')).toHaveText(
		'A new email has been sent to your email address. Please check your inbox and click the new link to validate your account.'
	);
});
