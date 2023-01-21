import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';
import { buildSmtpEmail } from '../singletons';

export const buildEmail = (params: EmailParams): any => {
	buildSmtpEmail.subject = `${get(_)(`emails.type.${params.type}.subject`)}`;
	buildSmtpEmail.htmlContent = `
  <!DOCTYPE html>
<html>
  <body>
    <div>
      <p>${params.recipientName}, ${get(_)(`emails.type.${params.type}.title`)}</p>
      <p>${get(_)(`emails.type.${params.type}.subtitle`)}</p>
      <a style="margin-top: 4rem; margin-bottom: 4rem;" target="_blank" href="${
				params.url
			}/account/reset-password/${params.token}">
      Botão Teste
      </a>
      <p>
        ${get(_)('emails.footer.best-wishes')}<br />
        ${get(_)('emails.footer.team')}<br />
        ${get(_)('emails.footer.address')}
      </p>
    </div>
  </body>
</html>`;
	buildSmtpEmail.sender = { name: 'Extensionly', email: 'extensionly@gmail.com' };
	buildSmtpEmail.to = [{ email: params.toEmail }];
	return buildSmtpEmail;
};

export interface EmailParams {
	type: string;
	recipientName: string;
	toEmail: string;
	url: string;
	token: string;
}
