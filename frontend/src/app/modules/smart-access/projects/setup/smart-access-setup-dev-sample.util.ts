import { FormGroup } from '@angular/forms';

import {
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
} from '../../../smart-enroll/projects/setup/setup-dev-sample-core.util';

export type SmartAccessDevSampleOptions = {
    redirectOrigin?: string;
    allowedCountryPool?: readonly string[];
};

/**
 * Fills randomized sample values so local QA can slam through Smart Access setup.
 * Email login enabled; security source unset (no API allow-list URL required).
 *
 * Intended for **`!environment.production`** only — callers must guard.
 */
export function patchSmartAccessSetupDevSample(form: FormGroup, options?: SmartAccessDevSampleOptions): void {
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
        name: `${randomChoice(PROJECT_NAME_PREFIXES)} access ${nameSuffix}`,
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
            loginSettings: {
                email: true,
                emailGateway: 'mailgun',
                faceLiveness: false,
                phone: false,
                phoneGateway: 'none',
                livenessMinScore: 0.65,
                searchMinScore: 0.85,
                searchMode: 'FAST',
                showFaceLivenessRecommendation: false,
                allowPasskeys: false,
            },
            integrations: {
                redirectUrl: `${origin}/smart-access/dev-r/${slug}`,
                webhook: null,
            },
            security: {
                source: null,
                strategy: 'whitelist',
                apiUrl: '',
                apiTestType: 'email',
                apiTestValue: '',
            },
        },
    });
}
