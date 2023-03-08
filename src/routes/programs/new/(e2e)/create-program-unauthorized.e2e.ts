import { test, expect } from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test('fails to create program user not logged in', async ({ page }) => {
	await page.goto('/programs/new', { waitUntil: 'networkidle' });

	await page.getByTestId('title-input').fill('My new program');
	await page.getByTestId('description-textarea').fill('My new programs description');
	await page.getByTestId('select-facultyId-btn').click();
	await page.getByRole('option', { name: 'CBM - Centro Universitário Barão de Mauá' }).click();
	await page.getByTestId('submit-btn').click();

	expect(page.getByTestId('toast-error')).toHaveCount(1);
});
