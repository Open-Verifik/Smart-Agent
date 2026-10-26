export type PlateReportChannel = 'email' | 'phone';

/** Colombian plates are short alphanumeric codes. Strip spaces and dashes first. */
export const normalizePlate = (value: string): string =>
    value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 7);

export const isValidPlate = (value: string): boolean =>
    /^[A-Z0-9]{5,7}$/.test(value) && /[A-Z]/.test(value) && /\d/.test(value);

/** Collapse repeated spaces and keep a person's name within a form field. */
export const normalizePersonName = (value: string): string => value.trim().replace(/\s+/g, ' ').slice(0, 80);

export const isValidPersonName = (value: string): boolean =>
    value.trim().length >= 2 && /\p{L}/u.test(value);

export const isValidEmail = (value: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const isValidPhoneDigits = (value: string): boolean => {
    const digits = value.replace(/\D/g, '');
    return digits.length >= 7 && digits.length <= 15;
};

/** Drop a repeated country prefix so the OTP API receives the national number. */
export const nationalPhone = (phone: string, dialCode: string): string => {
    let digits = phone.replace(/\D/g, '');
    const prefix = dialCode.replace(/\D/g, '');
    if (prefix && digits.startsWith(prefix) && digits.length > prefix.length + 6) {
        digits = digits.slice(prefix.length);
    }
    return digits;
};
