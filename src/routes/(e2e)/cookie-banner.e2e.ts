import test, { expect } from '@playwright/test';

test.use({
	storageState: {
		cookies: [],
		origins: []
	}
});

test('dismisses cookie banner', async ({ page }) => {
	await page.goto('/', { waitUntil: 'networkidle' });
	const banner = page.getByTestId('cookie-banner');

	await expect(banner).toBeVisible();
	await expect(banner).toHaveCount(1);

	await page.getByTestId('cookie-banner-btn').click();

	// element does not exist in the dom
	await expect(banner).toHaveCount(0);
});
