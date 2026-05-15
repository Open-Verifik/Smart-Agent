import { FormGroup } from '@angular/forms';

import {
    DIAL_CODES,
    PROJECT_NAME_PREFIXES,
    luminanceOkForWhiteText,
    randomAddressLine,
    randomChoice,
    randomDigits,
    randomHexColor,
    randomPersonName,
    randomPostalCode,
    randomTokenHex,
    resolveAllowedCountries,
    resolveDevSampleRedirectOrigin,
    slugFromToken,
    randomChoiceCity,
} from './setup-dev-sample-core.util';

export type SmartEnrollDevSampleOptions = {
    /** Used for integrations redirect URL (`${origin}/...`). */
    redirectOrigin?: string;
    /**
     * `country` field values compatible with enrollment (e.g. from {@link CountryService}.ipCountries).
     * When omitted, a small built-in list is used.
     */
    allowedCountryPool?: readonly string[];
};

/**
 * Fills randomized sample values so local QA can slam through Smart Enroll setup.
 * Targets personal onboarding with documents + liveness **skipped**, sign-up enabled via email only.
 *
 * Intended for **`!environment.production`** only — callers must guard.
 */
export function patchSmartEnrollSetupDevSample(form: FormGroup, options?: SmartEnrollDevSampleOptions): void {
    const origin = resolveDevSampleRedirectOrigin(options?.redirectOrigin);

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
            city: randomChoiceCity(),
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
