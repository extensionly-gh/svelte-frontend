import test, { expect, type Locator } from '@playwright/test';

test.describe('footer', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		await page.getByTestId('cookie-banner-btn').click();
	});

	test('switches languages', async ({ page }) => {
		await expect(page.getByTestId('home-h1')).toContainText('Extension actions');

		await page.getByTestId('menu-trigger-language-switcher').click();
		await page.getByTestId('menu-item-language-pt').click();

		await expect(page.getByTestId('home-h1')).toContainText('Ações de extensão');

		await page.getByTestId('menu-trigger-language-switcher').click();
		await page.getByTestId('menu-item-language-en').click();

		await expect(page.getByTestId('home-h1')).toContainText('Extension actions');
	});

	test.describe('switches themes', () => {
		let themeContainer: Locator;

		test.beforeEach(async ({ page }) => {
			themeContainer = page.getByTestId('theme-container');
			await page.getByTestId('menu-trigger-theme-switcher').click();
		});

		test('to light', async ({ page }) => {
			await page.getByTestId('menu-item-theme-light').click();

			expect(await themeContainer.getAttribute('data-theme')).toEqual('winter');
		});

		test('to dark', async ({ page }) => {
			await page.getByTestId('menu-item-theme-dark').click();

			expect(await themeContainer.getAttribute('data-theme')).toEqual('night');
		});

		test('to system', async ({ page }) => {
			await page.emulateMedia({ colorScheme: 'dark' });
			await page.goto('/');
			expect(await themeContainer.getAttribute('data-theme')).toEqual('night');

			await page.getByTestId('menu-trigger-theme-switcher').click();
			await page.getByTestId('menu-item-theme-light').click();
			expect(await themeContainer.getAttribute('data-theme')).toEqual('winter');

			await page.getByTestId('menu-trigger-theme-switcher').click();
			await page.getByTestId('menu-item-theme-system').click();

			expect(await themeContainer.getAttribute('data-theme')).toEqual('night');
		});
	});
});
