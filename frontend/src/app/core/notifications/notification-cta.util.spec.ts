import { describe, expect, it } from 'vitest';
import {
    isSelfReferentialSmartAgentCta,
    resolveInAppCtaPath,
    shouldShowNotificationCta,
} from './notification-cta.util';

describe('notification-cta.util', () => {
    const origin = 'https://ai.verifik.co';

    it('detects self-referential Smart Agent home CTAs', () => {
        expect(
            isSelfReferentialSmartAgentCta(
                'https://ai.verifik.co/?openNotifications=1',
                origin
            )
        ).toBe(true);
        expect(isSelfReferentialSmartAgentCta('https://ai.verifik.co/home', origin)).toBe(
            true
        );
        expect(isSelfReferentialSmartAgentCta('https://ai.verifik.co/postman', origin)).toBe(
            false
        );
    });

    it('hides self-referential CTAs', () => {
        expect(
            shouldShowNotificationCta(
                {
                    label: 'Open Smart Agent',
                    url: 'https://ai.verifik.co/?openNotifications=1',
                },
                origin
            )
        ).toBe(false);
        expect(
            shouldShowNotificationCta(
                {
                    label: 'Open API Explorer',
                    url: 'https://ai.verifik.co/postman',
                },
                origin
            )
        ).toBe(true);
    });

    it('resolves same-origin and relative paths for in-app navigation', () => {
        expect(resolveInAppCtaPath('/postman', origin)).toBe('/postman');
        expect(
            resolveInAppCtaPath('https://ai.verifik.co/postman', origin)
        ).toBe('/postman');
        expect(
            resolveInAppCtaPath('https://docs.verifik.co/identity/panama', origin)
        ).toBeNull();
    });
});
