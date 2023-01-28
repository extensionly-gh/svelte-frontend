import test from '@playwright/test';

test.describe('navbar', () => {
	const email = 'signup-test@extensionly.app';
	const password = 'StrongPassword1.';

	test.beforeEach(async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		await page.getByTestId('nav-signin-btn').click();
	});

	test('signs up', async ({ page }) => {
		await page.getByTestId('auth-dialog-context-btn').click();

		await page.getByTestId('signup-name-input').fill('Signup Test');
		await page.getByTestId('signup-email-input').fill(email);
		await page.getByTestId('signup-phone-input').fill('+555199999996');
		await page.getByTestId('signup-password-input').fill(password);
		await page.getByTestId('signup-cpassword-input').fill(password);

		await page.route('**/*', (route) => {
			const headers = route.request().headers();
			headers['x-send-email'] = 'false';
			route.continue({ headers });
		});

		await page.getByTestId('signup-submit-button').click();
	});

	test('signs in', async ({ page }) => {
		await page.getByTestId('signin-email-input').fill(email);
		await page.getByTestId('signin-password-input').fill(password);

		await page.getByTestId('signin-submit-button').click();

		await page.getByTestId('menu-trigger-user-menu').click();
	});

	test('deletes account', async ({ page }) => {
		await page.getByTestId('signin-email-input').fill(email);
		await page.getByTestId('signin-password-input').fill(password);
		await page.getByTestId('signin-submit-button').click();

		await page.getByTestId('menu-trigger-user-menu').click();
		await page.getByTestId('menu-item-my-account').click();

		await page.getByRole('button', { name: 'Delete' }).click();
		await page.getByTestId('emailDelete-input').fill('signup-test@extensionly.app');
		await page.getByRole('button', { name: 'Delete my account' }).click();
	});
});
