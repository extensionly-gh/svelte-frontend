import { test, expect } from '@playwright/test';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test('fails to create project user not logged in', async ({ page }) => {
	await page.goto('/projects/new', { waitUntil: 'networkidle' });

	await page.getByTestId('title-input').fill('My new project');
	await page.getByTestId('description-textarea').fill('My new projects description');
	await page.getByTestId('select-programId-btn').click();
	await page
		.getByRole('option', { name: 'UNIPAMPA | Programa de Extensão em Engenharia de Software' })
		.click();
	await page.getByTestId('submit-btn').click();

	expect(page.getByTestId('toast-error')).toHaveCount(1);
	expect(page.getByTestId('toast-success')).toHaveCount(0);
});
