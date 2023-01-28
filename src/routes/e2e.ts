import test, { expect, type Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('dismisses cookie banner', async ({ page }) => {
	const banner = page.getByTestId('cookie-banner');

	await expect(banner).toBeVisible();
	await expect(banner).toHaveCount(1);

	await page.getByTestId('cookie-banner-btn').click();

	// element does not exist in the dom
	await expect(banner).toHaveCount(0);
});

test.describe('footer', () => {
	test.beforeEach(async ({ page }) => {
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

test.describe('navbar', () => {
	test.beforeEach(async ({ page }) => {
		await page.getByTestId('nav-signin-btn').click();
	});

	test.only('signs in', async ({ page }) => {
		await page.getByTestId('signin-email-input').fill('admin-dev@extensionly.app');
		await page.getByTestId('signin-password-input').fill('StrongPassword1.');

		const responsePromise = page.waitForResponse((resp) =>
			resp.url().includes('/auth/callback/credentials')
		);

		await page.getByTestId('signin-submit-button').click();

		try {
			await (await responsePromise).json();
		} catch (error) {
			// success if the body is empty
			return expect(1).toBe(1);
		}
		// fail
		expect(1).toBe(2);
	});
});
