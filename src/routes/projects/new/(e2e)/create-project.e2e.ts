import { test, expect } from '@playwright/test';

test('creates project user logged in', async ({ page }) => {
	await page.goto('/projects/new', { waitUntil: 'networkidle' });

	await page.getByTestId('title-input').fill('My new project');
	await page.getByTestId('description-textarea').fill('My new projects description');
	await page.getByTestId('select-programId-btn').click();
	await page
		.getByRole('option', { name: 'UNIPAMPA | Programa de Extensão em Engenharia de Software' })
		.click();
	await page.getByTestId('submit-btn').click();

	expect(page.getByTestId('toast-error')).toHaveCount(0);
	expect(page.getByTestId('toast-success')).toHaveCount(1);
});
