import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
	const browser = await chromium.launch();
	const page = await browser.newPage();
	await page.goto('http://localhost:4173');
	await page.getByTestId('cookie-banner-btn').click();
	await page.getByTestId('nav-signin-btn').click();
	await page.getByTestId('signin-email-input').fill('extensionly-user-dev@mailinator.com');
	await page.getByTestId('signin-password-input').fill('StrongPassword1.');

	await page.getByTestId('signin-submit-button').click();
	await page.getByTestId('menu-trigger-user-menu').click();
	await page.context().storageState({ path: 'playwright-logged-in-state.json' });
	await browser.close();
}

export default globalSetup;
