import { test, expect } from '@playwright/test';

test('manipulates form then creates project without a program', async ({ page }) => {
	await page.goto('/projects/new', { waitUntil: 'networkidle' });

	await page.getByTestId('title-input').fill('My new project');
	await page.getByTestId('description-textarea').fill('My new projects description');
	await page.getByTestId('select-programId-btn').click();
	await page.getByRole('option', { name: 'Não atrelar a nenhum programa' }).click();
	await page.getByTestId('select-facultyId-btn').click();
	await page.getByRole('option', { name: 'FAINOR - Faculdade Independente do Nordeste' }).click();
	await page.getByTestId('select-visibility-btn').click();
	await page.getByRole('option', { name: 'Apenas pessoas com vínculo com a universidade' }).click();
	await page.getByTestId('accept-students-proposals').check();
	await page.getByTestId('select-programId-btn').click();
	await page
		.getByRole('option', { name: 'UNIPAMPA | Programa de Extensão em Engenharia de Software' })
		.click();
	await page.getByTestId('use-program-visibility').uncheck();
	await page.getByTestId('use-program-faculty').uncheck();
	await page.getByTestId('select-visibility-btn').click();
	await page.getByRole('option', { name: 'Todas as pessoas' }).click();
	await page.getByTestId('select-programId-btn').click();
	await page.getByRole('option', { name: 'Não atrelar a nenhum programa' }).click();
	await page.getByTestId('select-programId-btn').click();
	await page
		.getByRole('option', { name: 'UNIPAMPA | Programa de Extensão em Engenharia de Software' })
		.click();
	await page.getByTestId('use-program-faculty').check();
	await page.getByTestId('select-programId-btn').click();
	await page.getByRole('option', { name: 'Não atrelar a nenhum programa' }).click();

	await page.getByTestId('submit-btn').click();

	expect(page.getByTestId('toast-error')).toHaveCount(0);
	expect(page.getByTestId('toast-success')).toHaveCount(1);
});
