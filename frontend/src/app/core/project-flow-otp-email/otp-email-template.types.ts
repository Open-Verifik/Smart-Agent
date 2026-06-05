export interface OtpEmailTemplateForm {
    subject: string;
    message: string;
    doNotShare: string;
    didNotRequest: string;
    buttonText: string;
    buttonColor: string;
    buttonTxtColor: string;
    showButton: boolean;
}

export interface OtpEmailTemplateBranding {
    logo?: string;
    name?: string;
    buttonColor: string;
    buttonTextColor: string;
}

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
        };
    }

    return formValues;
};
