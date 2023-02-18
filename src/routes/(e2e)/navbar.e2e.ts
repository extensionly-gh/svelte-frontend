import test, { expect } from '@playwright/test';

const mailinatorUrl = 'https://www.mailinator.com/v4/public/inboxes.jsp?to=';

test.use({
	locale: 'en-US',
	storageState: {
		cookies: [],
		origins: []
	}
});

test.describe('navbar', () => {
	const emailId = 'extensionly-signup-test-' + Date.now();
	const email = emailId + '@mailinator.com';
	const firstPassword = 'StrongPassword1.';
	const newPassword = '#1Abcdef';

	test.beforeEach(async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		await page.getByTestId('nav-signin-btn').click();
	});

	test('signs up and verifies email', async ({ page, context }) => {
		await page.getByTestId('auth-dialog-context-btn').click();

		await page.getByTestId('signup-name-input').fill('Signup Test');
		await page.getByTestId('signup-email-input').fill(email);
		await page.getByTestId('signup-phone-input').fill('+5551999999996');
		await page.getByTestId('signup-password-input').fill(firstPassword);
		await page.getByTestId('signup-cpassword-input').fill(firstPassword);

		await page.getByTestId('signup-submit-button').click();
		await expect(page.getByTestId('toast-body')).toHaveText(
			'Check your e-mail inbox to complete the registration!'
		);

		const mailinator = await context.newPage();
		await mailinator.goto(mailinatorUrl + emailId);
		await mailinator
			.getByRole('row', { name: 'just now' })
			.getByRole('cell', { name: '📧' })
			.first()
			.click();
		await mailinator.getByRole('tab', { name: 'LINKS' }).click();
		const link = await mailinator
			.locator('xpath=//*[@id="pills-links-content"]/table/tbody/tr/td[1]')
			.innerText();
		await mailinator.close();

		await page.goto(link);
		await expect(page.getByTestId('toast-body')).toHaveText(
			'Email successfully validated, please proceed with your login!'
		);
	});

	test('resets password', async ({ page, context }) => {
		await page.getByTestId('auth-dialog-forgotpw-btn').click();
		await page.getByTestId('email-input').fill(email);
		await page.getByTestId('forgotpw-submit-button').click();
		await expect(page.getByTestId('toast-body')).toHaveText(
			'Instructions to reset your password were sent successfully to your inbox!'
		);

		const mailinator = await context.newPage();
		await mailinator.goto(mailinatorUrl + emailId);
		await mailinator
			.getByRole('row', { name: 'just now' })
			.getByRole('cell', { name: '🔒' })
			.first()
			.click();
		await mailinator.getByRole('tab', { name: 'LINKS' }).click();
		const link = await mailinator
			.locator('xpath=//*[@id="pills-links-content"]/table/tbody/tr/td[1]')
			.innerText();
		await mailinator.close();

		await page.goto(link);
		await page.getByTestId('newPwd-input').fill(newPassword);
		await page.getByTestId('confirmPwd-input').fill(newPassword);
		await page.getByTestId('resetpw-submit-button').click();
		await expect(page.getByTestId('toast-body')).toHaveText('Password updated successfully!');
	});

	test('tries to sign in with previous password', async ({ page }) => {
		await page.getByTestId('signin-email-input').fill(email);
		await page.getByTestId('signin-password-input').fill(firstPassword);

		await page.getByTestId('signin-submit-button').click();

		await expect(page.getByTestId('toast-body')).toHaveText('User not found');
	});

	test('signs in and deletes account', async ({ page }) => {
		await page.getByTestId('signin-email-input').fill(email);
		await page.getByTestId('signin-password-input').fill(newPassword);

		await page.getByTestId('signin-submit-button').click();

		await page.getByTestId('menu-trigger-user-menu').click();
		await page.getByTestId('menu-item-my-account').click();

		await page.getByRole('button', { name: 'Delete' }).click();
		await page.getByTestId('emailDelete-input').fill(email);
		await page.getByRole('button', { name: 'Delete my account' }).click();
	});
});
