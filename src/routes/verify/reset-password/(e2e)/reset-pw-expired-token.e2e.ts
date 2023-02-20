import test, { expect } from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test.describe('reset-password', () => {
	test('user uses an expired token', async ({ page }) => {
		// Token is mocked for this user in the seed file
		const mockedToken = 'm0ck3d-p4ssw0rd-r3s3t-t0k3n-3xp1r3d';

		await page.goto('/verify/reset-password/' + mockedToken);

		await expect(page.getByTestId('toast-body')).toHaveText('Verification token expired');
	});
});
