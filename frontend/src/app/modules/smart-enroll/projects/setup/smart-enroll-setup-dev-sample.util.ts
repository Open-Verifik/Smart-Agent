import { FormGroup } from '@angular/forms';

export type SmartEnrollDevSampleOptions = {
    /** Used for integrations redirect URL (`${origin}/...`). */
    redirectOrigin?: string;
    /**
     * `country` field values compatible with enrollment (e.g. from {@link CountryService}.ipCountries).
     * When omitted, a small built-in list is used.
     */
    allowedCountryPool?: readonly string[];
};

const FALLBACK_ALLOWED_COUNTRIES = [
    'Canada',
    'Mexico',
    'Germany',
    'France',
    'Japan',
    'Brazil',
    'Andorra',
    'Ireland',
    'Spain',
    'Portugal',
] as const;

const FIRST_NAMES = [
    'Alex',
    'Jordan',
    'Riley',
    'Morgan',
    'Casey',
    'Taylor',
    'Quinn',
    'Avery',
    'Jamie',
    'Parker',
] as const;

const LAST_NAMES = [
    'Miller',
    'Nguyen',
    'Silva',
    'Martinez',
    'Okafor',
    'Chen',
    'Patel',
    'Klein',
    'Santos',
    'Murphy',
] as const;

const STREETS = ['Oak Lane', 'Maple Ave', 'Cedar Blvd', 'River Road', 'Hillcrest Dr', 'Bay Street'] as const;

const CITY_NAMES = ['Denver', 'Austin', 'Portland', 'Madrid', 'Oslo', 'Lyon', 'Calgary', 'Tampa'] as const;

const DIAL_CODES = ['+1', '+34', '+44', '+49', '+33', '+52', '+507'] as const;

const PROJECT_NAME_PREFIXES = ['Sandbox', 'Smoke', 'Local', 'Preview', 'Lab', 'Scratch'] as const;

const randomDigits = (len: number): string =>
    Array.from({ length: len }, () => Math.floor(Math.random() * 10).toString()).join('');

const randomTokenHex = (byteLength: number): string => {
    const bytes = new Uint8Array(byteLength);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
};

const randomChoice = <T,>(xs: readonly T[]): T => xs[Math.floor(Math.random() * xs.length)]!;

const pickUniqueRandom = <T,>(pool: readonly T[], count: number): T[] => {
    if (count <= 0 || pool.length === 0) return [];
    if (pool.length <= count) return [...pool];
    const copy = [...pool];
    const out: T[] = [];
    while (out.length < count && copy.length > 0) {
        const i = Math.floor(Math.random() * copy.length);
        out.push(copy.splice(i, 1)[0] as T);
    }
    return out;
};

/** Relative luminance; pick light text on dark buttons. */
const luminanceOkForWhiteText = (hex: string): boolean => {
    const x = /^#([0-9a-f]{6})$/i.exec(hex);
    if (!x) return false;
    const n = Number.parseInt(x[1], 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    const y = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return y < 0.55;
};

const randomHexColor = (): string => `#${randomTokenHex(3)}`;

const randomAddressLine = (): string =>
    `${100 + Number(randomDigits(2))} ${randomChoice(STREETS)}`;

const randomPostalCode = (): string =>
    `${randomChoice(['A', 'B', 'C', 'K', 'V'])}${randomDigits(1)}${randomChoice(['A', 'B', 'C'])} ${randomDigits(3)}`;

const randomPersonName = (): string =>
    `${randomChoice(FIRST_NAMES)} ${randomChoice(LAST_NAMES)}`;

const slugFromToken = (token: string): string => token.slice(0, 12);

function resolveAllowedCountries(pool: readonly string[] | undefined): string[] {
    const usable = (pool ?? [...FALLBACK_ALLOWED_COUNTRIES]).filter((c) => !!c?.trim?.() && c !== 'All' && c !== 'World');
    const uniq = [...new Set(usable)];
    const pickCount = uniq.length <= 2 ? uniq.length : 2 + Math.floor(Math.random() * 2); // 2–3 where possible
    const picks = pickUniqueRandom(uniq, pickCount);
    return picks.length > 0 ? picks : [...FALLBACK_ALLOWED_COUNTRIES].slice(0, 2);
}

/**
 * Fills randomized sample values so local QA can slam through Smart Enroll setup.
 * Targets personal onboarding with documents + liveness **skipped**, sign-up enabled via email only.
 *
 * Intended for **`!environment.production`** only — callers must guard.
 */
export function patchSmartEnrollSetupDevSample(form: FormGroup, options?: SmartEnrollDevSampleOptions): void {
    const origin =
        typeof options?.redirectOrigin === 'string' && options.redirectOrigin.trim()
            ? options.redirectOrigin.trim().replace(/\/+$/, '')
            : 'https://localhost:4201';

    const token = randomTokenHex(6);
    const slug = slugFromToken(token);
    const allowedCountries = resolveAllowedCountries(
        options?.allowedCountryPool?.length ? [...options.allowedCountryPool] : undefined,
    );
    const contactLocal = `contact.${slug}`;
    const officerLocal = `dpo.${slug}`;
    const nameSuffix = slug.slice(0, 10);
    const btn = randomHexColor();
    const buttonTextColor = luminanceOkForWhiteText(btn) ? '#ffffff' : '#0f172a';

    form.patchValue({
        name: `${randomChoice(PROJECT_NAME_PREFIXES)} enroll ${nameSuffix}`,
        allowedCountries,
        contactEmail: `${contactLocal}@example.com`,
        privacyUrl: `https://example.com/privacy-policy-${slug}`,
        termsAndConditionsUrl: `https://example.com/terms-${slug}`,
        target: 'personal',
        dataProtection: {
            name: randomPersonName(),
            email: `${officerLocal}@example.com`,
            address: randomAddressLine(),
            address2: `Suite ${100 + Number(randomDigits(2))}`,
            city: randomChoice(CITY_NAMES),
            postalCode: randomPostalCode(),
            country: randomChoice(allowedCountries),
        },
        branding: {
            logo: `https://picsum.photos/seed/${slug}/240/240`,
            imageBackgroundColor: '#ffffff',
            image: '',
            titleColor: randomHexColor(),
            textColor: randomHexColor(),
            backgroundColor: '#ffffff',
            buttonColor: btn,
            buttonTextColor,
        },
        projectFlow: {
            steps: {
                document: 'skip',
                liveness: 'skip',
                legalRepresentative: 'skip',
                businessVerification: false,
            },
            signUpForm: {
                email: true,
                phone: false,
                emailGateway: 'mailgun',
                countryCode: randomChoice(DIAL_CODES),
            },
            integrations: {
                source: 'NONE',
                strategy: 'none',
                redirectUrl: `${origin}/smart-enroll/dev-r/${slug}`,
                apiUrl: '',
                apiTestType: 'email',
                apiTestValue: '',
                webhook: null,
            },
            documents: {
                verificationMethods: ['scan'],
            },
        },
    });
}
