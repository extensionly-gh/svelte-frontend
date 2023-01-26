import type { VerificationType } from '@prisma/client';
import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';
import type { SendSmtpEmail } from '../adapters/sendinblue/apiclient';

const getHtmlContent = (params: EmailParams): string => {
	let buttonUrl = '';

	switch (params.verificationType) {
		case 'VALIDATE_EMAIL':
			buttonUrl = `${params.frontendUrl}verify/email/${params.token}`;
			break;
		case 'RESET_PASSWORD':
			buttonUrl = `${params.frontendUrl}verify/password/${params.token}`;
			break;
		default:
			break;
	}

	if (!buttonUrl) throw new Error('Invalid verification type');

	return `
    <!DOCTYPE html>
    <html>
      <body>
        <div>
          <p>${params.recipientName}, ${get(_)(
		`emails.type.${params.verificationType.toLowerCase()}.title`
	)}</p>
          <p>${get(_)(`emails.type.${params.verificationType.toLowerCase()}.subtitle`)}</p>
          <a style="margin-top: 4rem; margin-bottom: 4rem;" target="_blank" href="${buttonUrl}">
          ${buttonUrl}
          </a>
          <p>
            ${get(_)('emails.footer.best-wishes')}<br />
            ${get(_)('emails.footer.team')}<br />
            ${get(_)('emails.footer.address')}
          </p>
        </div>
      </body>
    </html>
  `.trim();
};

export const buildEmail = (params: EmailParams): SendSmtpEmail => ({
	sender: { name: 'Extensionly', email: 'no-reply@extensionly.app' },
	to: [{ email: params.recipientEmail }],
	subject: get(_)(`emails.type.${params.verificationType.toLowerCase()}.subject`),
	htmlContent: getHtmlContent(params)
});

export interface EmailParams {
	verificationType: VerificationType;
	recipientName: string;
	recipientEmail: string;
	frontendUrl: string;
	token: string;
}
