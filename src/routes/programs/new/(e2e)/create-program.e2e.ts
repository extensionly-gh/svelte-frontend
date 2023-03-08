import { test, expect } from '@playwright/test';

test('creates program user logged in', async ({ page }) => {
	await page.goto('/programs/new', { waitUntil: 'networkidle' });

	await page.getByTestId('title-input').fill('My new program');
	await page.getByTestId('description-textarea').fill('My new programs description');
	await page.getByTestId('select-facultyId-btn').click();
	await page.getByRole('option', { name: 'CBM - Centro Universitário Barão de Mauá' }).click();
	await page.getByTestId('submit-btn').click();

	expect(page.getByTestId('toast-error')).toHaveCount(0);
	expect(page.getByTestId('toast-success')).toHaveCount(1);
});
