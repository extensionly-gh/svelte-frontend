import test, { expect } from '@playwright/test';

test.describe('navbar', () => {
	const emailId = 'extensionly-signup-test';
	const email = emailId + '@mailinator.com';
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

		await page.getByTestId('signup-submit-button').click();
		await expect(page.getByTestId('toast-body')).toHaveText(
			'Check your e-mail inbox to complete the registration!'
		);
	});

	test('verifies email', async ({ page, context }) => {
		const mailinator = await context.newPage();
		await mailinator.goto('https://www.mailinator.com/v4/public/inboxes.jsp?to=' + emailId);
		await mailinator
			.getByRole('row', { name: 'Extensionly 📧 Verify your email just now' })
			.getByRole('cell', { name: '📧 Verify your email' })
			.click();
		await mailinator.getByRole('tab', { name: 'LINKS' }).click();
		const link = await mailinator
			.locator('xpath=//*[@id="pills-links-content"]/table/tbody/tr/td[1]')
			.innerText();
		await mailinator.close();

		await page.goto(link, { waitUntil: 'networkidle' });
		await expect(page.getByTestId('toast-body')).toHaveText(
			'Email successfully validated, please proceed with your login!'
		);
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
		await page.getByTestId('emailDelete-input').fill(email);
		await page.getByRole('button', { name: 'Delete my account' }).click();
	});
});
