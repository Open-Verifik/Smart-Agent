import { describe, expect, it } from 'vitest';
import {
    buildNameSearchProfiles,
    WORLD_CIA_WORLD_LEADERS_ENDPOINT_CODE,
    WORLD_CSL_ENDPOINT_CODE,
    WORLD_DEA_ENDPOINT_CODE,
    WORLD_DSS_MOST_WANTED_ENDPOINT_CODE,
    WORLD_EU_FSF_ENDPOINT_CODE,
    WORLD_EU_TERRORISTS_ENDPOINT_CODE,
    WORLD_EUROPOL_ENDPOINT_CODE,
    WORLD_FBI_ENDPOINT_CODE,
    WORLD_HEALTH_EXCLUSIONS_ENDPOINT_CODE,
    WORLD_IADB_ENDPOINT_CODE,
    WORLD_INTERPOL_ENDPOINT_CODE,
    WORLD_OFAC_ENDPOINT_CODE,
    WORLD_OFFSHORE_LEAKS_ENDPOINT_CODE,
    WORLD_OFSI_ENDPOINT_CODE,
    WORLD_ONU_ENDPOINT_CODE,
    WORLD_POSTMAN_SANDBOX_BY_CODE,
    WORLD_SANDBOX_NAMES,
    WORLD_SEC_ENDPOINT_CODE,
    WORLD_SECRET_SERVICE_ENDPOINT_CODE,
    WORLD_US_TERRORISTS_ENDPOINT_CODE,
    WORLD_WORLD_BANK_ENDPOINT_CODE,
} from './world.postman-sandbox';
import {
    COLOMBIA_ADVERSE_MEDIA_ENDPOINT_CODE,
    COLOMBIA_JCC_SANCTIONS_ENDPOINT_CODE,
    COLOMBIA_PACO_SANCTIONS_ENDPOINT_CODE,
    COLOMBIA_POSTMAN_SANDBOX_BY_CODE,
    COLOMBIA_RAMA_JEPMS_ENDPOINT_CODE,
} from './colombia.postman-sandbox';
import {
    applyPostmanSandboxParamDefaults,
    getPostmanSandboxConfig,
    getPostmanSandboxProfiles,
    isPostmanSandboxEndpoint,
} from '../postman-sandbox.util';

const DOC_AND_NAME_WATCHLIST_CODES = [
    WORLD_CSL_ENDPOINT_CODE,
    WORLD_US_TERRORISTS_ENDPOINT_CODE,
    WORLD_SEC_ENDPOINT_CODE,
    WORLD_HEALTH_EXCLUSIONS_ENDPOINT_CODE,
    WORLD_EU_TERRORISTS_ENDPOINT_CODE,
    WORLD_EU_FSF_ENDPOINT_CODE,
    WORLD_OFSI_ENDPOINT_CODE,
    WORLD_IADB_ENDPOINT_CODE,
] as const;

const NAME_ONLY_WATCHLIST_CODES = [
    WORLD_DSS_MOST_WANTED_ENDPOINT_CODE,
    WORLD_SECRET_SERVICE_ENDPOINT_CODE,
    WORLD_CIA_WORLD_LEADERS_ENDPOINT_CODE,
    WORLD_WORLD_BANK_ENDPOINT_CODE,
    WORLD_OFFSHORE_LEAKS_ENDPOINT_CODE,
] as const;

const ALL_13_WATCHLIST_CODES = [
    ...DOC_AND_NAME_WATCHLIST_CODES,
    ...NAME_ONLY_WATCHLIST_CODES,
] as const;

const LEGACY_WORLD_CODES = [
    WORLD_DEA_ENDPOINT_CODE,
    WORLD_FBI_ENDPOINT_CODE,
    WORLD_EUROPOL_ENDPOINT_CODE,
    WORLD_INTERPOL_ENDPOINT_CODE,
    WORLD_OFAC_ENDPOINT_CODE,
    WORLD_ONU_ENDPOINT_CODE,
] as const;

const COLOMBIA_4_NATIONAL_CODES = [
    COLOMBIA_JCC_SANCTIONS_ENDPOINT_CODE,
    COLOMBIA_PACO_SANCTIONS_ENDPOINT_CODE,
    COLOMBIA_RAMA_JEPMS_ENDPOINT_CODE,
    COLOMBIA_ADVERSE_MEDIA_ENDPOINT_CODE,
] as const;

describe('World Watchlists Sandbox - Registry & Inventory', () => {
    it('registers all 13 international watchlist endpoints in WORLD_POSTMAN_SANDBOX_BY_CODE', () => {
        expect(ALL_13_WATCHLIST_CODES).toHaveLength(13);

        for (const code of ALL_13_WATCHLIST_CODES) {
            expect(WORLD_POSTMAN_SANDBOX_BY_CODE[code]).toBeDefined();
            expect(isPostmanSandboxEndpoint(code)).toBe(true);
            expect(getPostmanSandboxConfig(code)).toBeDefined();
        }
    });

    it('retains all 6 legacy world endpoints unchanged in the registry', () => {
        expect(LEGACY_WORLD_CODES).toHaveLength(6);

        for (const code of LEGACY_WORLD_CODES) {
            expect(WORLD_POSTMAN_SANDBOX_BY_CODE[code]).toBeDefined();
            expect(isPostmanSandboxEndpoint(code)).toBe(true);
            expect(getPostmanSandboxProfiles(code).length).toBeGreaterThan(0);
        }
    });

    it('contains at least 19 registered endpoints in WORLD_POSTMAN_SANDBOX_BY_CODE', () => {
        const registeredCount = Object.keys(WORLD_POSTMAN_SANDBOX_BY_CODE).length;
        expect(registeredCount).toBeGreaterThanOrEqual(19);
    });
});

describe('World Watchlists Sandbox - 8 Document + Name Endpoints', () => {
    it.each(DOC_AND_NAME_WATCHLIST_CODES)(
        'configures %s with valid defaults, document type, and profiles',
        (code) => {
            const config = WORLD_POSTMAN_SANDBOX_BY_CODE[code];
            expect(config).toBeDefined();
            expect(config.defaultDocumentNumber).toBe('10000001');
            expect(config.documentTypeByCode?.[code]).toBe('CC');
            expect(config.showProfileMeta).toBe(false);

            const profiles = getPostmanSandboxProfiles(code);
            expect(profiles.length).toBeGreaterThanOrEqual(14);

            // Active document-based success profiles (odd index: 10000001, etc.)
            const activeDocProfile = profiles.find(
                (p) => p.documentNumber === '10000001' && p.responseType !== 'error'
            );
            expect(activeDocProfile).toBeDefined();
            expect(activeDocProfile?.expectedStatus).toBe(200);
            expect(activeDocProfile?.paramOverrides?.documentType).toBe('CC');
            expect(activeDocProfile?.paramOverrides?.documentNumber).toBe('10000001');
            expect(activeDocProfile?.fullName).toContain('found');

            // Clean document-based profile (even index: 10000002)
            const cleanDocProfile = profiles.find(
                (p) => p.documentNumber === '10000002' && p.responseType !== 'error'
            );
            expect(cleanDocProfile).toBeDefined();
            expect(cleanDocProfile?.expectedStatus).toBe(200);
            expect(cleanDocProfile?.paramOverrides?.documentType).toBe('CC');
            expect(cleanDocProfile?.paramOverrides?.documentNumber).toBe('10000002');
            expect(cleanDocProfile?.fullName).toContain('clean');

            // Name-based search active fixture
            const nameSearchFoundProfile = profiles.find(
                (p) => p.profileKey?.endsWith('-name-found')
            );
            expect(nameSearchFoundProfile).toBeDefined();
            expect(nameSearchFoundProfile?.expectedStatus).toBe(200);
            expect(nameSearchFoundProfile?.paramOverrides?.fullName).toBe(WORLD_SANDBOX_NAMES[0]);
            expect(nameSearchFoundProfile?.paramOverrides?.documentNumber).toBe('');
            expect(nameSearchFoundProfile?.paramOverrides?.documentType).toBe('');

            // Name-based search clean fixture
            const nameSearchCleanProfile = profiles.find(
                (p) => p.profileKey?.endsWith('-name-clean')
            );
            expect(nameSearchCleanProfile).toBeDefined();
            expect(nameSearchCleanProfile?.expectedStatus).toBe(200);
            expect(nameSearchCleanProfile?.paramOverrides?.fullName).toBe(WORLD_SANDBOX_NAMES[1]);

            // 404 Error profile(s)
            const notFoundProfiles = profiles.filter(
                (p) => p.expectedStatus === 404 && p.responseType === 'error'
            );
            expect(notFoundProfiles.length).toBeGreaterThanOrEqual(1);
            expect(notFoundProfiles.some((p) => p.documentNumber === '90040401')).toBe(true);

            // 409 Conflict profiles (missing doc, invalid doc type, missing params)
            const conflictProfiles = profiles.filter(
                (p) => p.expectedStatus === 409 && p.responseType === 'error'
            );
            expect(conflictProfiles.length).toBeGreaterThanOrEqual(2);
            expect(
                conflictProfiles.some((p) => p.paramOverrides?.documentNumber === '')
            ).toBe(true);
            expect(
                conflictProfiles.some((p) => p.paramOverrides?.documentType === 'INVALID')
            ).toBe(true);
        }
    );

    it.each(DOC_AND_NAME_WATCHLIST_CODES)(
        'applies sandbox defaults for documentNumber and documentType on %s',
        (code) => {
            const params = [
                { key: 'documentType', value: '' },
                { key: 'documentNumber', value: '' },
            ];

            applyPostmanSandboxParamDefaults({ code, params }, undefined);

            expect(params.find((p) => p.key === 'documentNumber')?.value).toBe('10000001');
            expect(params.find((p) => p.key === 'documentType')?.value).toBe('CC');
        }
    );
});

describe('World Watchlists Sandbox - 5 Name-Only Endpoints', () => {
    it.each(NAME_ONLY_WATCHLIST_CODES)(
        'configures %s with valid fullName default and name search profiles',
        (code) => {
            const config = WORLD_POSTMAN_SANDBOX_BY_CODE[code];
            expect(config).toBeDefined();
            expect(config.defaultDocumentNumber).toBe(WORLD_SANDBOX_NAMES[0]);
            expect(config.showProfileMeta).toBe(false);

            const profiles = getPostmanSandboxProfiles(code);
            expect(profiles.length).toBe(12); // 10 names + 1 conflict 409 + 1 notFound 404

            // Active 200 success profiles
            const activeProfile = profiles[0];
            expect(activeProfile.responseType).toBe('success');
            expect(activeProfile.expectedStatus).toBe(200);
            expect(activeProfile.paramOverrides?.fullName).toBe(WORLD_SANDBOX_NAMES[0]);
            expect(activeProfile.fullName).toContain('found');

            // Clean 200 success profile
            const cleanProfile = profiles[1];
            expect(cleanProfile.responseType).toBe('success');
            expect(cleanProfile.expectedStatus).toBe(200);
            expect(cleanProfile.paramOverrides?.fullName).toBe(WORLD_SANDBOX_NAMES[1]);
            expect(cleanProfile.fullName).toContain('clean');

            // 404 notFound fixture
            const notFoundProfile = profiles.find(
                (p) => p.expectedStatus === 404 && p.responseType === 'error'
            );
            expect(notFoundProfile).toBeDefined();
            expect(notFoundProfile?.documentNumber).toBe('90040401');
            expect(notFoundProfile?.paramOverrides?.fullName).toBe('90040401');

            // 409 missing fullName conflict fixture
            const conflictProfile = profiles.find(
                (p) => p.expectedStatus === 409 && p.responseType === 'error'
            );
            expect(conflictProfile).toBeDefined();
            expect(conflictProfile?.profileKey).toBe('409-missing-fullName');
            expect(conflictProfile?.paramOverrides?.fullName).toBe('');
        }
    );

    it('buildNameSearchProfiles helper produces expected profile structure', () => {
        const testLabel = 'Test Watchlist';
        const profiles = buildNameSearchProfiles(testLabel);

        expect(profiles).toHaveLength(12);

        // First profile (found)
        expect(profiles[0].fullName).toBe(`${WORLD_SANDBOX_NAMES[0]} — ${testLabel} found`);
        expect(profiles[0].responseType).toBe('success');
        expect(profiles[0].expectedStatus).toBe(200);
        expect(profiles[0].paramOverrides?.fullName).toBe(WORLD_SANDBOX_NAMES[0]);

        // Second profile (clean)
        expect(profiles[1].fullName).toBe(`${WORLD_SANDBOX_NAMES[1]} — ${testLabel} clean`);
        expect(profiles[1].responseType).toBe('success');
        expect(profiles[1].expectedStatus).toBe(200);
        expect(profiles[1].paramOverrides?.fullName).toBe(WORLD_SANDBOX_NAMES[1]);

        // 409 Missing fullName
        const conflict = profiles.find((p) => p.expectedStatus === 409);
        expect(conflict).toBeDefined();
        expect(conflict?.paramOverrides?.fullName).toBe('');

        // 404 Not found
        const notFound = profiles.find((p) => p.expectedStatus === 404);
        expect(notFound).toBeDefined();
        expect(notFound?.paramOverrides?.fullName).toBe('90040401');
    });

    it.each(NAME_ONLY_WATCHLIST_CODES)(
        'applies sandbox default fullName on %s',
        (code) => {
            const params = [{ key: 'fullName', value: '' }];

            applyPostmanSandboxParamDefaults({ code, params }, undefined);

            expect(params[0].value).toBe(WORLD_SANDBOX_NAMES[0]);
        }
    );
});

describe('World Watchlists Sandbox - Strict "force" Prohibition', () => {
    it('ensures paramOverrides.force is strictly undefined for every profile across all 13 watchlists', () => {
        for (const code of ALL_13_WATCHLIST_CODES) {
            const profiles = getPostmanSandboxProfiles(code);
            expect(profiles.length).toBeGreaterThan(0);

            for (const profile of profiles) {
                expect(profile.paramOverrides?.force).toBeUndefined();
                expect((profile as Record<string, unknown>)['force']).toBeUndefined();
            }

            const config = WORLD_POSTMAN_SANDBOX_BY_CODE[code];
            const configJson = JSON.stringify(config);
            expect(configJson).not.toContain('"force"');
        }
    });

    it('ensures paramOverrides.force is strictly undefined across all 6 legacy world endpoints', () => {
        for (const code of LEGACY_WORLD_CODES) {
            const profiles = getPostmanSandboxProfiles(code);
            expect(profiles.length).toBeGreaterThan(0);

            for (const profile of profiles) {
                expect(profile.paramOverrides?.force).toBeUndefined();
            }

            const config = WORLD_POSTMAN_SANDBOX_BY_CODE[code];
            const configJson = JSON.stringify(config);
            expect(configJson).not.toContain('"force"');
        }
    });
});

describe('Colombia National Sources - Sandbox Integrity & Strict "force" Prohibition', () => {
    it('verifies all 4 Colombia national sources are registered and intact', () => {
        expect(COLOMBIA_4_NATIONAL_CODES).toHaveLength(4);

        for (const code of COLOMBIA_4_NATIONAL_CODES) {
            expect(COLOMBIA_POSTMAN_SANDBOX_BY_CODE[code]).toBeDefined();
            expect(isPostmanSandboxEndpoint(code)).toBe(true);

            const profiles = getPostmanSandboxProfiles(code);
            expect(profiles.length).toBeGreaterThanOrEqual(3);

            // Active 200 profiles
            const successProfiles = profiles.filter(
                (p) => p.responseType === 'success' || p.expectedStatus === 200
            );
            expect(successProfiles.length).toBeGreaterThan(0);

            // Error profiles
            const errorProfiles = profiles.filter(
                (p) => p.responseType === 'error' || (p.expectedStatus && p.expectedStatus >= 400)
            );
            expect(errorProfiles.length).toBeGreaterThan(0);
        }
    });

    it('ensures paramOverrides.force is strictly undefined across all 4 Colombia national sources', () => {
        for (const code of COLOMBIA_4_NATIONAL_CODES) {
            const profiles = getPostmanSandboxProfiles(code);

            for (const profile of profiles) {
                expect(profile.paramOverrides?.force).toBeUndefined();
                expect((profile as Record<string, unknown>)['force']).toBeUndefined();
            }

            const config = COLOMBIA_POSTMAN_SANDBOX_BY_CODE[code];
            const configJson = JSON.stringify(config);
            expect(configJson).not.toContain('"force"');
        }
    });
});
