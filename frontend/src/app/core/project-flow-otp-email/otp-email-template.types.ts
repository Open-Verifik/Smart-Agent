export type EmailTemplateDesign = 'standard' | 'custom';

export const normalizeEmailTemplateDesign = (design?: string | null): EmailTemplateDesign =>
    design === 'custom' || design === 'tcc' ? 'custom' : 'standard';

export type HtmlSlotState = 'present' | 'removed';

export type HtmlSlotStatus = Partial<Record<HtmlEditableSlot, HtmlSlotState>>;

export type HtmlEditableSlot =
    | 'greeting'
    | 'message'
    | 'otpLabel'
    | 'doNotShare'
    | 'didNotRequest'
    | 'buttonText'
    | 'signature'
    | 'footerNote';

export interface OtpEmailTemplateForm {
    subject: string;
    message: string;
    doNotShare: string;
    didNotRequest: string;
    buttonText: string;
    buttonColor: string;
    buttonTxtColor: string;
    showButton: boolean;
    greeting: string;
    otpLabel: string;
    signature: string;
    footerNote: string;
    contentHtml: string;
    htmlSlotStatus?: HtmlSlotStatus;
}

export interface OtpEmailTemplateBranding {
    logo?: string;
    name?: string;
    buttonColor: string;
    buttonTextColor: string;
}

export interface ContentHtmlVariable {
    token: string;
    slot?: HtmlEditableSlot;
}

/**
 * Allowed tokens for the raw HTML editor, mirroring the backend contract in
 * Utilities/email-template-content-html.helper.js. Tokens with a `slot` map to
 * a copy field; the rest are system-injected values.
 */
export const OTP_CONTENT_HTML_VARIABLES: Record<EmailTemplateDesign, ContentHtmlVariable[]> = {
    standard: [
        { token: 'greeting', slot: 'greeting' },
        { token: 'message', slot: 'message' },
        { token: 'do_not_share', slot: 'doNotShare' },
        { token: 'did_not_request', slot: 'didNotRequest' },
        { token: 'buttonText', slot: 'buttonText' },
        { token: 'otp' },
        { token: 'subject' },
        { token: 'authLink' },
        { token: 'projectName' },
        { token: 'logo' },
        { token: 'buttonColor' },
        { token: 'buttonTxtColor' },
    ],
    custom: [
        { token: 'greeting', slot: 'greeting' },
        { token: 'message', slot: 'message' },
        { token: 'otp_label', slot: 'otpLabel' },
        { token: 'do_not_share', slot: 'doNotShare' },
        { token: 'did_not_request', slot: 'didNotRequest' },
        { token: 'signature', slot: 'signature' },
        { token: 'footer_note', slot: 'footerNote' },
        { token: 'otp' },
        { token: 'subject' },
        { token: 'projectName' },
        { token: 'logo' },
        { token: 'address' },
        { token: 'buttonColor' },
        { token: 'buttonTxtColor' },
    ],
};

/**
 * Full generic OTP email document (Verifik shell + custom content).
 * Default import for non-TCC clients in the HTML editor.
 */
export const GENERIC_FULL_EMAIL_HTML = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title><%= subject %></title>
</head>
<body style="margin:0;padding:0;width:100%;background-color:#f5f5f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1c1917;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#f5f5f4;"><%= subject %></div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background-color:#f5f5f4;" bgcolor="#f5f5f4">
<tbody>
<tr>
<td align="center" valign="top" style="padding:32px 16px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:separate;max-width:600px;width:100%;margin:0 auto;background-color:#ffffff;border:1px solid #e7e5e4;border-radius:16px;overflow:hidden;">
<tbody>
<tr>
<td style="padding:0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
<tbody>
<tr>
<td align="center" valign="middle" style="padding:40px 40px 24px;border-bottom:1px solid #f5f5f4;font-size:0;line-height:0;">
<img alt="<%= projectName %>" src="<%= logo %>" height="96" style="display:inline-block;height:96px;max-height:96px;width:auto;max-width:280px;min-width:64px;outline:none;border:0;text-decoration:none;" />
</td>
</tr>
</tbody>
</table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
<tbody>
<tr>
<td style="padding:32px 40px 40px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1c1917;">
<p style="margin:0 0 18px;font-size:18px;line-height:26px;font-weight:600;color:#1c1917;text-align:left;"><%- greeting %></p>
<p style="margin:0 0 24px;font-size:15px;line-height:24px;font-weight:400;color:#57534e;text-align:left;"><%= message %></p>
<p style="margin:0 0 12px;font-size:13px;line-height:20px;font-weight:600;color:#44403c;text-align:left;"><%= otp_label %></p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;">
<tbody>
<tr>
<td align="center" style="padding:20px 24px;background-color:#f8fafc;border:2px solid #cbd5e1;border-radius:12px;">
<div style="font-family:'SF Mono',SFMono-Regular,ui-monospace,Menlo,Consolas,monospace;font-size:30px;line-height:38px;font-weight:700;letter-spacing:8px;color:<%= buttonColor %>;text-align:center;padding-left:8px;"><%= otp %></div>
</td>
</tr>
</tbody>
</table>
<p style="margin:28px 0 0;font-size:13px;line-height:20px;font-weight:400;color:#78716c;text-align:left;"><%= footer_note %></p>
<p style="margin:24px 0 0;font-size:13px;line-height:20px;font-weight:400;color:#78716c;text-align:left;"><%= do_not_share %></p>
<p style="margin:8px 0 0;font-size:13px;line-height:20px;font-weight:400;color:#78716c;text-align:left;"><%= did_not_request %></p>
<p style="margin:28px 0 0;font-size:14px;line-height:20px;font-weight:400;color:#57534e;text-align:left;"><%= signature %></p>
<p style="margin:4px 0 0;font-size:15px;line-height:22px;font-weight:600;color:#1c1917;text-align:left;"><%= projectName %></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;max-width:600px;width:100%;margin:0 auto;">
<tbody>
<tr>
<td align="center" valign="top" style="padding:24px 32px 8px;text-align:center;">
<p style="margin:0 0 8px;font-size:12px;line-height:18px;font-weight:400;color:#a8a29e;"><%= address %></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</body>
</html>`;

/** @deprecated Legacy content fragment; full documents use GENERIC_FULL_EMAIL_HTML. */
export const GENERIC_CUSTOM_CONTENT_HTML = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse">
	<tbody>
		<tr>
			<td style="padding: 32px 40px 40px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c1917;">
				<p style="margin: 0 0 18px; font-size: 18px; line-height: 26px; font-weight: 600; color: #1c1917; text-align: left">
					<%- greeting %>
				</p>

				<p style="margin: 0 0 24px; font-size: 15px; line-height: 24px; font-weight: 400; color: #57534e; text-align: left">
					<%= message %>
				</p>

				<p style="margin: 0 0 12px; font-size: 13px; line-height: 20px; font-weight: 600; color: #44403c; text-align: left">
					<%= otp_label %>
				</p>

				<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: separate">
					<tbody>
						<tr>
							<td align="center" style="padding: 20px 24px; background-color: #f8fafc; border: 2px solid #cbd5e1; border-radius: 12px;">
								<div style="font-family: 'SF Mono', SFMono-Regular, ui-monospace, Menlo, Consolas, monospace; font-size: 30px; line-height: 38px; font-weight: 700; letter-spacing: 8px; color: <%= buttonColor %>; text-align: center; padding-left: 8px;">
									<%= otp %>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

				<p style="margin: 28px 0 0; font-size: 13px; line-height: 20px; font-weight: 400; color: #78716c; text-align: left">
					<%= footer_note %>
				</p>

				<p style="margin: 24px 0 0; font-size: 13px; line-height: 20px; font-weight: 400; color: #78716c; text-align: left">
					<%= do_not_share %>
				</p>
				<p style="margin: 8px 0 0; font-size: 13px; line-height: 20px; font-weight: 400; color: #78716c; text-align: left">
					<%= did_not_request %>
				</p>

				<p style="margin: 28px 0 0; font-size: 14px; line-height: 20px; font-weight: 400; color: #57534e; text-align: left">
					<%= signature %>
				</p>
				<p style="margin: 4px 0 0; font-size: 15px; line-height: 22px; font-weight: 600; color: #1c1917; text-align: left">
					<%= projectName %>
				</p>
			</td>
		</tr>
	</tbody>
</table>`;

/**
 * Full TCC OTP email document (standalone, no Verifik shell).
 * Loaded via "Import TCC default" for TCC clients only.
 */
export const TCC_FULL_EMAIL_HTML = `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title><%= subject %></title>
</head>
<body style="margin:0;padding:0;width:100%;background-color:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#000000;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#ffffff;"><%= subject %></div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;color:#000000;font-size:17px;max-width:600px;margin:0 auto;">
<tbody>
<tr>
<td style="padding:0;">
<img src="https://cdn.smemails.com/tecco/images/tecco_01.jpg" alt="TECCO BY TCC" width="600" style="display:block;border:0;width:100%;max-width:600px;height:auto;" />
</td>
</tr>
<tr>
<td style="padding:28px 32px 8px;line-height:24px;"><%- greeting %></td>
</tr>
<tr>
<td style="padding:0 32px 8px;line-height:24px;"><%= message %></td>
</tr>
<tr>
<td style="padding:16px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tbody>
<tr>
<td align="center" bgcolor="#EDEDED" style="padding:18px 12px;font-weight:bold;font-size:26px;letter-spacing:6px;text-align:center;border-radius:6px;"><%= otp %></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style="padding:8px 32px 28px;line-height:24px;"><%= did_not_request %></td>
</tr>
</tbody>
</table>
</body>
</html>`;

/** @deprecated Legacy content fragment; use TCC_FULL_EMAIL_HTML for imports. */
export const TCC_DEFAULT_CONTENT_HTML = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; font-family: Arial, Helvetica, sans-serif; color: #000000; font-size: 17px;">
	<tbody>
		<tr>
			<td style="padding: 0">
				<img src="https://cdn.smemails.com/tecco/images/tecco_01.jpg" alt="TECCO BY TCC" width="600" style="display: block; border: 0; width: 100%; max-width: 600px; height: auto;" />
			</td>
		</tr>
		<tr>
			<td style="padding: 28px 32px 8px; line-height: 24px;">
				<%- greeting %>
			</td>
		</tr>
		<tr>
			<td style="padding: 0 32px 8px; line-height: 24px;">
				<%= message %>
			</td>
		</tr>
		<tr>
			<td style="padding: 16px 32px;">
				<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
					<tbody>
						<tr>
							<td align="center" bgcolor="#EDEDED" style="padding: 18px 12px; font-weight: bold; font-size: 26px; letter-spacing: 6px; text-align: center; border-radius: 6px;">
								<%= otp %>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
		<tr>
			<td style="padding: 8px 32px 28px; line-height: 24px;">
				<%= did_not_request %>
			</td>
		</tr>
	</tbody>
</table>`;

export const OTP_EMAIL_TEMPLATE_LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'pt', label: 'Português' },
    { code: 'fr', label: 'Français' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'zh', label: '中文' },
] as const;

export const EMPTY_OTP_EMAIL_TEMPLATE_FORM: OtpEmailTemplateForm = {
    subject: '',
    message: '',
    doNotShare: '',
    didNotRequest: '',
    buttonText: '',
    buttonColor: '',
    buttonTxtColor: '',
    showButton: true,
    greeting: '',
    otpLabel: '',
    signature: '',
    footerNote: '',
    contentHtml: '',
    htmlSlotStatus: {},
};

export const buildOtpEmailTemplatesForm = (
    emailTemplates: Record<string, Partial<OtpEmailTemplateForm>> | undefined,
    branding: OtpEmailTemplateBranding
): Record<string, OtpEmailTemplateForm> => {
    const formValues: Record<string, OtpEmailTemplateForm> = {};

    for (const lang of OTP_EMAIL_TEMPLATE_LANGUAGES) {
        const et = emailTemplates?.[lang.code] ?? {};
        formValues[lang.code] = {
            subject: et.subject ?? '',
            message: et.message ?? '',
            doNotShare: et.doNotShare ?? '',
            didNotRequest: et.didNotRequest ?? '',
            buttonText: et.buttonText ?? '',
            buttonColor: et.buttonColor || branding.buttonColor || '#4f46e5',
            buttonTxtColor: et.buttonTxtColor || branding.buttonTextColor || '#FFFFFF',
            showButton: et.showButton !== false,
            greeting: et.greeting ?? '',
            otpLabel: et.otpLabel ?? '',
            signature: et.signature ?? '',
            footerNote: et.footerNote ?? '',
            contentHtml: et.contentHtml ?? '',
            htmlSlotStatus: et.htmlSlotStatus ?? {},
        };
    }

    return formValues;
};
