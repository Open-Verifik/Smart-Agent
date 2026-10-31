import { describe, expect, it } from 'vitest';
import {
    WORLD_POSTMAN_SANDBOX_BY_CODE,
    WORLD_SANDBOX_NAMES,
    WORLD_DEA_ENDPOINT_CODE,
    WORLD_FBI_ENDPOINT_CODE,
    WORLD_EUROPOL_ENDPOINT_CODE,
    WORLD_INTERPOL_ENDPOINT_CODE,
    WORLD_OFAC_ENDPOINT_CODE,
    WORLD_ONU_ENDPOINT_CODE,
    WORLD_CSL_ENDPOINT_CODE,
    WORLD_DSS_MOST_WANTED_ENDPOINT_CODE,
    WORLD_US_TERRORISTS_ENDPOINT_CODE,
    WORLD_SECRET_SERVICE_ENDPOINT_CODE,
    WORLD_SEC_ENDPOINT_CODE,
    WORLD_HEALTH_EXCLUSIONS_ENDPOINT_CODE,
    WORLD_CIA_WORLD_LEADERS_ENDPOINT_CODE,
    WORLD_EU_TERRORISTS_ENDPOINT_CODE,
    WORLD_EU_FSF_ENDPOINT_CODE,
    WORLD_OFSI_ENDPOINT_CODE,
    WORLD_WORLD_BANK_ENDPOINT_CODE,
    WORLD_IADB_ENDPOINT_CODE,
    WORLD_OFFSHORE_LEAKS_ENDPOINT_CODE,
    buildDocumentSearchProfiles,
    buildNameSearchProfiles,
    buildWorldDocAndNameEndpointConfig,
    buildWorldNameEndpointConfig,
    buildWorldNameSearchDemos,
} from './world.postman-sandbox';
import {
    COLOMBIA_POSTMAN_SANDBOX_BY_CODE,
    COLOMBIA_CEDULA_ENDPOINT_CODE,
    COLOMBIA_RUNT_VEHICLE_ENDPOINT_CODE,
    COLOMBIA_JCC_SANCTIONS_ENDPOINT_CODE,
    COLOMBIA_PACO_SANCTIONS_ENDPOINT_CODE,
    COLOMBIA_RAMA_JEPMS_ENDPOINT_CODE,
    COLOMBIA_ADVERSE_MEDIA_ENDPOINT_CODE,
} from './colombia.postman-sandbox';
import {
    applyPostmanSandboxParamDefaults,
    findMatchingPostmanSandboxProfile,
    getPostmanSandboxConfig,
    getPostmanSandboxDefaultDocumentType,
    getPostmanSandboxI18nKey,
    getPostmanSandboxProfilePickerValue,
    getPostmanSandboxProfiles,
    getPostmanSandboxShowProfileMeta,
    isPostmanSandboxEndpoint,
} from '../postman-sandbox.util';
import { formatPostmanSandboxProfileLabel } from '../sandbox-error-profiles';
import { POSTMAN_SANDBOX_BY_ENDPOINT_CODE } from '../postman-sandbox.registry';
import { PostmanSandboxProfile } from '../postman-sandbox.types';

const LEGACY_WORLD_CODES = [
    WORLD_DEA_ENDPOINT_CODE,
    WORLD_FBI_ENDPOINT_CODE,
    WORLD_EUROPOL_ENDPOINT_CODE,
    WORLD_INTERPOL_ENDPOINT_CODE,
    WORLD_OFAC_ENDPOINT_CODE,
    WORLD_ONU_ENDPOINT_CODE,
] as const;

const NEW_WATCHLIST_CODES = [
    WORLD_CSL_ENDPOINT_CODE,
    WORLD_DSS_MOST_WANTED_ENDPOINT_CODE,
    WORLD_US_TERRORISTS_ENDPOINT_CODE,
    WORLD_SECRET_SERVICE_ENDPOINT_CODE,
    WORLD_SEC_ENDPOINT_CODE,
    WORLD_HEALTH_EXCLUSIONS_ENDPOINT_CODE,
    WORLD_CIA_WORLD_LEADERS_ENDPOINT_CODE,
    WORLD_EU_TERRORISTS_ENDPOINT_CODE,
    WORLD_EU_FSF_ENDPOINT_CODE,
    WORLD_OFSI_ENDPOINT_CODE,
    WORLD_WORLD_BANK_ENDPOINT_CODE,
    WORLD_IADB_ENDPOINT_CODE,
    WORLD_OFFSHORE_LEAKS_ENDPOINT_CODE,
] as const;

const ALL_19_WORLD_CODES = [
    ...LEGACY_WORLD_CODES,
    ...NEW_WATCHLIST_CODES,
] as const;

const COLOMBIA_4_NATIONAL_CODES = [
    COLOMBIA_JCC_SANCTIONS_ENDPOINT_CODE,
    COLOMBIA_PACO_SANCTIONS_ENDPOINT_CODE,
    COLOMBIA_RAMA_JEPMS_ENDPOINT_CODE,
    COLOMBIA_ADVERSE_MEDIA_ENDPOINT_CODE,
] as const;

describe('Adversarial Test Suite 1: Exact Key Count & Registry Mapping', () => {
    it('validates that WORLD_POSTMAN_SANDBOX_BY_CODE contains all expected watchlist keys', () => {
        const keys = Object.keys(WORLD_POSTMAN_SANDBOX_BY_CODE);
        expect(keys.length).toBeGreaterThanOrEqual(19);

        // Every expected code must exist
        for (const code of ALL_19_WORLD_CODES) {
            expect(keys).toContain(code);
            expect(WORLD_POSTMAN_SANDBOX_BY_CODE[code]).toBeDefined();
        }
    });

    it('validates that POSTMAN_SANDBOX_BY_ENDPOINT_CODE contains all 19 keys directly', () => {
        for (const code of ALL_19_WORLD_CODES) {
            expect(POSTMAN_SANDBOX_BY_ENDPOINT_CODE[code]).toBeDefined();
            expect(POSTMAN_SANDBOX_BY_ENDPOINT_CODE[code]).toBe(WORLD_POSTMAN_SANDBOX_BY_CODE[code]);
            expect(isPostmanSandboxEndpoint(code)).toBe(true);
        }
    });

    it('validates that the 4 Colombia national sources exist in COLOMBIA_POSTMAN_SANDBOX_BY_CODE and global registry', () => {
        for (const code of COLOMBIA_4_NATIONAL_CODES) {
            expect(COLOMBIA_POSTMAN_SANDBOX_BY_CODE[code]).toBeDefined();
            expect(POSTMAN_SANDBOX_BY_ENDPOINT_CODE[code]).toBeDefined();
            expect(isPostmanSandboxEndpoint(code)).toBe(true);
        }
    });
});

describe('Adversarial Test Suite 2: Boundary Conditions & Malformed Inputs in Helpers', () => {
    describe('applyPostmanSandboxParamDefaults with edge cases and malformed inputs', () => {
        it('handles null, undefined, and empty endpoint objects gracefully without throwing', () => {
            expect(() => applyPostmanSandboxParamDefaults({} as any, undefined)).not.toThrow();
            expect(() => applyPostmanSandboxParamDefaults({ code: undefined, params: undefined }, undefined)).not.toThrow();
            expect(() => applyPostmanSandboxParamDefaults({ code: '', params: [] }, '')).not.toThrow();
            expect(() => applyPostmanSandboxParamDefaults({ code: 'world_api_csl', params: [] }, undefined)).not.toThrow();
            expect(() => applyPostmanSandboxParamDefaults({ code: 'unknown_endpoint', params: [{ key: 'documentNumber', value: '' }] }, undefined)).not.toThrow();
        });

        it('handles weird characters, SQL injection, XSS, and Unicode in documentNumber parameter without throwing', () => {
            const attackStrings = [
                "' OR '1'='1",
                '<script>alert("xss")</script>',
                '../../../../etc/passwd',
                '🚀💥🔥 SPECIAL_EMOJI',
                'Ñandú — Árbol — Niño',
                'null',
                'undefined',
                'NaN',
                '\\x00\\x1f\\x7f',
                'A'.repeat(5000),
            ];

            for (const attackStr of attackStrings) {
                // Test on doc+name endpoint
                const paramsDoc = [
                    { key: 'documentType', value: 'CC' },
                    { key: 'documentNumber', value: '' },
                ];
                expect(() => {
                    applyPostmanSandboxParamDefaults(
                        { code: WORLD_CSL_ENDPOINT_CODE, params: paramsDoc },
                        attackStr
                    );
                }).not.toThrow();
                expect(paramsDoc.find((p) => p.key === 'documentNumber')?.value).toBe(attackStr);

                // Test on name-only endpoint
                const paramsName = [{ key: 'fullName', value: '' }];
                expect(() => {
                    applyPostmanSandboxParamDefaults(
                        { code: WORLD_DSS_MOST_WANTED_ENDPOINT_CODE, params: paramsName },
                        attackStr
                    );
                }).not.toThrow();
            }
        });

        it('handles unexpected document types without crashing', () => {
            const unexpectedDocTypes = ['PASSPORT', 'XYZ', '12345', '', '   ', 'INVALID', '!@#$%^&*()'];

            for (const docType of unexpectedDocTypes) {
                const params = [
                    { key: 'documentType', value: docType },
                    { key: 'documentNumber', value: '' },
                ];

                expect(() => {
                    applyPostmanSandboxParamDefaults(
                        { code: WORLD_CSL_ENDPOINT_CODE, params },
                        '10000001'
                    );
                }).not.toThrow();

                // Because documentType already had a non-empty value (except empty string/whitespace),
                // applySandboxParamValue only overrides if value is empty/whitespace.
                if (docType.trim()) {
                    expect(params.find((p) => p.key === 'documentType')?.value).toBe(docType);
                } else {
                    expect(params.find((p) => p.key === 'documentType')?.value).toBe('CC');
                }
            }
        });

        it('handles corrupted and edge-case param structures gracefully', () => {
            const weirdParams = [
                { key: '', value: '' },
                { key: 'unrelatedKey', value: 'someValue' },
                { key: 'documentNumber', value: '   ' }, // whitespace only
            ];

            expect(() => {
                applyPostmanSandboxParamDefaults(
                    { code: WORLD_CSL_ENDPOINT_CODE, params: weirdParams },
                    undefined
                );
            }).not.toThrow();

            // Whitespace docNumber should be populated with default
            expect(weirdParams.find((p) => p.key === 'documentNumber')?.value).toBe('10000001');
        });
    });

    describe('findMatchingPostmanSandboxProfile & matchesPostmanSandboxProfile edge cases', () => {
        it('handles undefined, null, empty array, and non-existent codes gracefully', () => {
            expect(findMatchingPostmanSandboxProfile(null, undefined)).toBeNull();
            expect(findMatchingPostmanSandboxProfile(undefined, [])).toBeNull();
            expect(findMatchingPostmanSandboxProfile('', [])).toBeNull();
            expect(findMatchingPostmanSandboxProfile('non_existent_code', [{ key: 'documentNumber', value: '10000001' }])).toBeNull();
        });

        it('does not crash when regex special characters are present in param values', () => {
            const regexPayloads = [
                '.*',
                '+',
                '[0-9]+',
                '(a|b)*',
                '\\d{4}',
                '???^^^$$$',
                '{0,100}',
            ];

            for (const payload of regexPayloads) {
                expect(() => {
                    findMatchingPostmanSandboxProfile(WORLD_CSL_ENDPOINT_CODE, [
                        { key: 'documentType', value: 'CC' },
                        { key: 'documentNumber', value: payload },
                    ]);
                }).not.toThrow();

                expect(() => {
                    findMatchingPostmanSandboxProfile(WORLD_DSS_MOST_WANTED_ENDPOINT_CODE, [
                        { key: 'fullName', value: payload },
                    ]);
                }).not.toThrow();
            }
        });

        it('correctly matches active, clean, 404, and 409 profiles for doc+name endpoints', () => {
            // Match active 10000001
            const matchActive = findMatchingPostmanSandboxProfile(WORLD_CSL_ENDPOINT_CODE, [
                { key: 'documentType', value: 'CC' },
                { key: 'documentNumber', value: '10000001' },
            ]);
            expect(matchActive).toBeDefined();
            expect(matchActive?.expectedStatus).toBe(200);
            expect(matchActive?.fullName).toContain('found');

            // Match clean 10000002
            const matchClean = findMatchingPostmanSandboxProfile(WORLD_CSL_ENDPOINT_CODE, [
                { key: 'documentType', value: 'CC' },
                { key: 'documentNumber', value: '10000002' },
            ]);
            expect(matchClean).toBeDefined();
            expect(matchClean?.expectedStatus).toBe(200);
            expect(matchClean?.fullName).toContain('clean');

            // Match 404
            const match404 = findMatchingPostmanSandboxProfile(WORLD_CSL_ENDPOINT_CODE, [
                { key: 'documentType', value: 'CC' },
                { key: 'documentNumber', value: '90040401' },
            ]);
            expect(match404).toBeDefined();
            expect(match404?.expectedStatus).toBe(404);

            // Match 409 invalid documentType
            const match409 = findMatchingPostmanSandboxProfile(WORLD_CSL_ENDPOINT_CODE, [
                { key: 'documentType', value: 'INVALID' },
                { key: 'documentNumber', value: '10000001' },
            ]);
            expect(match409).toBeDefined();
            expect(match409?.expectedStatus).toBe(409);
        });

        it('correctly matches active, clean, 404, and 409 profiles for name-only endpoints', () => {
            // Match active found name
            const matchActive = findMatchingPostmanSandboxProfile(WORLD_DSS_MOST_WANTED_ENDPOINT_CODE, [
                { key: 'fullName', value: WORLD_SANDBOX_NAMES[0] },
            ]);
            expect(matchActive).toBeDefined();
            expect(matchActive?.expectedStatus).toBe(200);
            expect(matchActive?.fullName).toContain('found');

            // Match clean name
            const matchClean = findMatchingPostmanSandboxProfile(WORLD_DSS_MOST_WANTED_ENDPOINT_CODE, [
                { key: 'fullName', value: WORLD_SANDBOX_NAMES[1] },
            ]);
            expect(matchClean).toBeDefined();
            expect(matchClean?.expectedStatus).toBe(200);
            expect(matchClean?.fullName).toContain('clean');

            // Match 404 name
            const match404 = findMatchingPostmanSandboxProfile(WORLD_DSS_MOST_WANTED_ENDPOINT_CODE, [
                { key: 'fullName', value: '90040401' },
            ]);
            expect(match404).toBeDefined();
            expect(match404?.expectedStatus).toBe(404);

            // Match 409 empty fullName
            const match409 = findMatchingPostmanSandboxProfile(WORLD_DSS_MOST_WANTED_ENDPOINT_CODE, [
                { key: 'fullName', value: '' },
            ]);
            expect(match409).toBeDefined();
            expect(match409?.expectedStatus).toBe(409);
        });
    });

    describe('formatPostmanSandboxProfileLabel robustness', () => {
        it('formats every profile across all 19 world endpoints without error', () => {
            for (const code of ALL_19_WORLD_CODES) {
                const profiles = getPostmanSandboxProfiles(code);
                expect(profiles.length).toBeGreaterThan(0);

                for (const profile of profiles) {
                    const label = formatPostmanSandboxProfileLabel(profile);
                    expect(typeof label).toBe('string');
                    expect(label.length).toBeGreaterThan(0);
                    expect(label).not.toContain('undefined');
                }
            }
        });

        it('formats every profile across all 4 Colombia national sources without error', () => {
            for (const code of COLOMBIA_4_NATIONAL_CODES) {
                const profiles = getPostmanSandboxProfiles(code);
                expect(profiles.length).toBeGreaterThan(0);

                for (const profile of profiles) {
                    const label = formatPostmanSandboxProfileLabel(profile);
                    expect(typeof label).toBe('string');
                    expect(label.length).toBeGreaterThan(0);
                    expect(label).not.toContain('undefined');
                }
            }
        });

        it('handles boundary profiles gracefully (e.g. error without HTTP prefix in fullName)', () => {
            const edgeProfile: PostmanSandboxProfile = {
                documentNumber: '12345678',
                fullName: 'Simple error message',
                responseType: 'error',
                expectedStatus: 400,
            };
            const label = formatPostmanSandboxProfileLabel(edgeProfile);
            expect(label).toBe('12345678 — HTTP 400 · Simple error message');
        });
    });

    describe('Config generator helpers boundary testing', () => {
        it('buildWorldDocAndNameEndpointConfig handles special label characters', () => {
            const weirdLabels = ['Special & Co.', 'Test/Slash', 'With Spaces And (Parens)', 'Üñîçødé'];
            for (const label of weirdLabels) {
                expect(() => {
                    const config = buildWorldDocAndNameEndpointConfig('test_code', label);
                    expect(config.profiles.length).toBeGreaterThanOrEqual(14);
                }).not.toThrow();
            }
        });

        it('buildWorldNameEndpointConfig handles special label characters', () => {
            const weirdLabels = ['Special & Co.', 'Test/Slash', 'With Spaces And (Parens)', 'Üñîçødé'];
            for (const label of weirdLabels) {
                expect(() => {
                    const config = buildWorldNameEndpointConfig(label);
                    expect(config.profiles.length).toBe(12);
                }).not.toThrow();
            }
        });
    });
});

describe('Adversarial Test Suite 3: Regression Prevention on Pre-existing Endpoints', () => {
    it('ensures legacy world endpoints have unmodified configuration signatures', () => {
        for (const code of LEGACY_WORLD_CODES) {
            const config = WORLD_POSTMAN_SANDBOX_BY_CODE[code];
            expect(config).toBeDefined();
            expect(config.defaultDocumentNumber).toBe('10000001');
            expect(config.documentTypeByCode?.[code]).toBe('CC');
            expect(config.showProfileMeta).toBe(false);

            const profiles = config.profiles;
            expect(profiles.length).toBeGreaterThanOrEqual(13);

            // DEA and FBI must have their name demo profiles
            if (code === WORLD_DEA_ENDPOINT_CODE) {
                expect(profiles.some((p) => p.profileKey === 'dea-name-demo')).toBe(true);
            }
            if (code === WORLD_FBI_ENDPOINT_CODE) {
                expect(profiles.some((p) => p.profileKey === 'fbi-name-demo')).toBe(true);
            }

            // Error profiles
            expect(profiles.some((p) => p.expectedStatus === 404)).toBe(true);
            expect(profiles.some((p) => p.expectedStatus === 409)).toBe(true);
        }
    });

    it('ensures existing Colombia core endpoints (Cedula, RUNT) are untouched', () => {
        const cedulaConfig = COLOMBIA_POSTMAN_SANDBOX_BY_CODE[COLOMBIA_CEDULA_ENDPOINT_CODE];
        expect(cedulaConfig).toBeDefined();
        expect(cedulaConfig.defaultDocumentNumber).toBe('10000001');
        expect(cedulaConfig.documentTypeByCode?.[COLOMBIA_CEDULA_ENDPOINT_CODE]).toBe('CC');

        const runtConfig = COLOMBIA_POSTMAN_SANDBOX_BY_CODE[COLOMBIA_RUNT_VEHICLE_ENDPOINT_CODE];
        expect(runtConfig).toBeDefined();
    });
});

describe('Adversarial Test Suite 4: Exhaustive "force" Prohibition Check', () => {
    it('asserts that NO profile in WORLD_POSTMAN_SANDBOX_BY_CODE has any property containing "force"', () => {
        for (const [code, config] of Object.entries(WORLD_POSTMAN_SANDBOX_BY_CODE)) {
            const configStr = JSON.stringify(config);
            expect(configStr.toLowerCase()).not.toContain('"force"');
            expect(configStr.toLowerCase()).not.toContain('"force":true');
            expect(configStr.toLowerCase()).not.toContain('"force":false');

            for (const profile of config.profiles) {
                expect(profile.paramOverrides?.force).toBeUndefined();
                expect((profile as any).force).toBeUndefined();
            }
        }
    });

    it('asserts that NO profile in the 4 Colombia national sources has any property containing "force"', () => {
        for (const code of COLOMBIA_4_NATIONAL_CODES) {
            const config = COLOMBIA_POSTMAN_SANDBOX_BY_CODE[code];
            const configStr = JSON.stringify(config);
            expect(configStr.toLowerCase()).not.toContain('"force"');

            for (const profile of config.profiles) {
                expect(profile.paramOverrides?.force).toBeUndefined();
                expect((profile as any).force).toBeUndefined();
            }
        }
    });
});
