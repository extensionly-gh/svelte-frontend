import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
	const { baseURL, storageState } = config.projects[0].use;

	const browser = await chromium.launch();
	const context = await browser.newContext({ locale: 'en-US' });
	const page = await context.newPage();

	try {
		await context.tracing.start({ screenshots: true, snapshots: true });

		await page.goto(baseURL!);
		await page.getByTestId('cookie-banner-btn').click();
		await page.getByTestId('nav-signin-btn').click();
		await page.getByTestId('signin-email-input').fill('extensionly-user-dev@mailinator.com');
		await page.getByTestId('signin-password-input').fill('StrongPassword1.');
		await page.getByTestId('signin-submit-button').click();
		await page.getByTestId('menu-trigger-user-menu').click();
		await context.storageState({ path: storageState as string });
		await context.tracing.stop({
			path: './playwright-report-1_4/setup-trace.zip'
		});
		await browser.close();
	} catch (error) {
		await context.tracing.stop({
			path: './playwright-report-1_4/failed-setup-trace.zip'
		});
		await browser.close();
		throw error;
	}
}

export default globalSetup;
