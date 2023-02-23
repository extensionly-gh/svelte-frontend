import test, { expect } from '@playwright/test';

test.describe('error fallback', () => {
	test('shows not found error message', async ({ page }) => {
		await page.goto('/page-that-does-not-exist', { waitUntil: 'networkidle' });
		await expect(page.getByTestId('error-fallback-title')).toHaveText(
			'The page you are looking for does not exist.'
		);
	});
});
