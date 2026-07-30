import { PhoneGateway } from './phone-validations.service';

export type MessageSourceBadge =
    | 'manual'
    | 'smart_enroll'
    | 'smart_access'
    | 'flow';

export const MASKED_OTP = '*** ***';

/** Matches Meta WhatsApp `flow2_*` body copy used by the backend. */
const WHATSAPP_OTP_PREVIEW: Record<string, string> = {
    en: '{code}. Thank you for your request, you can Verify your code in {section}',
    es: '{code}. Gracias por tu solicitud, puedes Verificar tu código en {section}',
    fr: '{code}. Merci pour votre demande, vous pouvez Vérifiez votre code dans {section}',
    pt: '{code}. Obrigado por sua solicitação, você pode Verificar seu código em {section}',
};

/** Matches backend `sms.otp` i18n strings. */
const SMS_OTP_PREVIEW: Record<string, string> = {
    en: '{section} - Thank you for your request {code}. You can continue your process in {section}',
    es: '{section} - Gracias por tu solicitud {code}. Puedes continuar tu proceso en {section}',
    fr: '{section} - Merci pour votre demande {code}. Vous pouvez poursuivre votre processus dans {section}',
    pt: '{section} - Obrigado por sua solicitação {code}. Você pode continuar seu processo em {section}',
};

export const resolveMessageSource = (row: any): MessageSourceBadge => {
    if (row?.source === 'manual') return 'manual';
    if (row?.appRegistration || row?.type === 'onboarding') return 'smart_enroll';
    if (row?.type === 'login') return 'smart_access';
    return 'flow';
};

export const formatMessagePhone = (row: any): string =>
    `${row?.countryCode || ''}${row?.phone || ''}`;

export const resolveSenderTitle = (row: any, fallback = 'Verifik'): string => {
    const fromPhoneData = row?.phoneData?.title;
    const fromProject = row?.project?.name;
    const raw = `${fromPhoneData || fromProject || fallback}`.trim();

    return raw.substring(0, 15).split('.')[0] || fallback;
};

/**
 * Build the on-device OTP preview using the same copy the provider sends.
 */
export const buildOtpPreviewBody = (
    phoneGateway: PhoneGateway | string,
    section: string,
    language: string = 'en',
    code: string = MASKED_OTP
): string => {
    const lang = `${language || 'en'}`.toLowerCase().slice(0, 2);
    const templates =
        phoneGateway === 'sms' ? SMS_OTP_PREVIEW : WHATSAPP_OTP_PREVIEW;
    const template = templates[lang] || templates.en;

    return template
        .split('{section}')
        .join(section || 'Verifik')
        .split('{code}')
        .join(code);
};
