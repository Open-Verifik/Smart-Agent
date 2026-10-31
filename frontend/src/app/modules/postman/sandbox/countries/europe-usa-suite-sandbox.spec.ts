import { describe, expect, it } from 'vitest';
import {
    EU_VIES_VAT_ENDPOINT_CODE,
    FRANCE_COMPANY_SIRENE_ENDPOINT_CODE,
    UK_COMPANY_LOOKUP_ENDPOINT_CODE,
    WORLD_GLEIF_LEI_ENDPOINT_CODE,
    WORLD_POSTMAN_SANDBOX_BY_CODE,
} from './world.postman-sandbox';
import {
    SPAIN_TAX_ID_VALIDATE_ENDPOINT_CODE,
    SPAIN_POSTMAN_SANDBOX_BY_CODE,
} from './spain.postman-sandbox';
import {
    USA_DRIVER_LICENSE_BARCODE_ENDPOINT_CODE,
    USA_DRIVER_LICENSE_CROSSCHECK_ENDPOINT_CODE,
    USA_VEHICLE_RECALLS_ENDPOINT_CODE,
    USA_POSTMAN_SANDBOX_BY_CODE,
} from './usa.postman-sandbox';
import { POSTMAN_SANDBOX_BY_ENDPOINT_CODE } from '../postman-sandbox.registry';
import {
    applyPostmanSandboxParamDefaults,
    findMatchingPostmanSandboxProfile,
    getPostmanSandboxConfig,
    getPostmanSandboxProfiles,
    isPostmanSandboxEndpoint,
} from '../postman-sandbox.util';
import { getPostmanSandboxProfileKey } from '../sandbox-error-profiles';
import { ENDPOINT_IO_CATALOG } from '../../../smart-batch/endpoint-io-catalog';
import postmanEndpointsIo from '../../postman-endpoints-io.json';

const ALL_8_NEW_ENDPOINT_CODES = [
    EU_VIES_VAT_ENDPOINT_CODE,
    FRANCE_COMPANY_SIRENE_ENDPOINT_CODE,
    UK_COMPANY_LOOKUP_ENDPOINT_CODE,
    SPAIN_TAX_ID_VALIDATE_ENDPOINT_CODE,
    WORLD_GLEIF_LEI_ENDPOINT_CODE,
    USA_DRIVER_LICENSE_BARCODE_ENDPOINT_CODE,
    USA_DRIVER_LICENSE_CROSSCHECK_ENDPOINT_CODE,
    USA_VEHICLE_RECALLS_ENDPOINT_CODE,
] as const;

describe('European & US 8-Endpoint Suite Sandbox Verification', () => {
    describe('1. Endpoint Registration in Regional and Global Registries', () => {
        it.each(ALL_8_NEW_ENDPOINT_CODES)(
            'registers %s in global POSTMAN_SANDBOX_BY_ENDPOINT_CODE',
            (code) => {
                expect(POSTMAN_SANDBOX_BY_ENDPOINT_CODE[code]).toBeDefined();
                expect(isPostmanSandboxEndpoint(code)).toBe(true);
                expect(getPostmanSandboxConfig(code)).toBeDefined();
            }
        );

        it('registers spain_api_tax_id_validate in SPAIN_POSTMAN_SANDBOX_BY_CODE', () => {
            expect(SPAIN_POSTMAN_SANDBOX_BY_CODE[SPAIN_TAX_ID_VALIDATE_ENDPOINT_CODE]).toBeDefined();
        });

        it('registers the 3 US endpoints in USA_POSTMAN_SANDBOX_BY_CODE', () => {
            expect(USA_POSTMAN_SANDBOX_BY_CODE[USA_DRIVER_LICENSE_BARCODE_ENDPOINT_CODE]).toBeDefined();
            expect(USA_POSTMAN_SANDBOX_BY_CODE[USA_DRIVER_LICENSE_CROSSCHECK_ENDPOINT_CODE]).toBeDefined();
            expect(USA_POSTMAN_SANDBOX_BY_CODE[USA_VEHICLE_RECALLS_ENDPOINT_CODE]).toBeDefined();
        });

        it('registers the 4 European & Global endpoints in WORLD_POSTMAN_SANDBOX_BY_CODE', () => {
            expect(WORLD_POSTMAN_SANDBOX_BY_CODE[EU_VIES_VAT_ENDPOINT_CODE]).toBeDefined();
            expect(WORLD_POSTMAN_SANDBOX_BY_CODE[FRANCE_COMPANY_SIRENE_ENDPOINT_CODE]).toBeDefined();
            expect(WORLD_POSTMAN_SANDBOX_BY_CODE[UK_COMPANY_LOOKUP_ENDPOINT_CODE]).toBeDefined();
            expect(WORLD_POSTMAN_SANDBOX_BY_CODE[WORLD_GLEIF_LEI_ENDPOINT_CODE]).toBeDefined();
        });
    });

    describe('2. Endpoint Probing (200, 404, 409 & Mismatch)', () => {
        describe('eu_api_vies_vat', () => {
            it('matches 200 OK success probe for GOOGLE IRELAND LIMITED (IE)', () => {
                const match = findMatchingPostmanSandboxProfile(EU_VIES_VAT_ENDPOINT_CODE, [
                    { key: 'countryCode', value: 'IE' },
                    { key: 'vatNumber', value: '6388047V' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(200);
                expect(match?.fullName).toContain('GOOGLE IRELAND LIMITED');
            });

            it('matches 404 Not Found probe for vatNumber 999999999', () => {
                const match = findMatchingPostmanSandboxProfile(EU_VIES_VAT_ENDPOINT_CODE, [
                    { key: 'countryCode', value: 'IE' },
                    { key: 'vatNumber', value: '999999999' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(404);
            });

            it('matches 409 Missing Parameter probe when vatNumber is empty', () => {
                const match = findMatchingPostmanSandboxProfile(EU_VIES_VAT_ENDPOINT_CODE, [
                    { key: 'countryCode', value: '' },
                    { key: 'vatNumber', value: '' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(409);
            });
        });

        describe('france_api_company_sirene', () => {
            it('matches 200 OK success probe for LVMH (SIREN 775670417)', () => {
                const match = findMatchingPostmanSandboxProfile(FRANCE_COMPANY_SIRENE_ENDPOINT_CODE, [
                    { key: 'documentNumber', value: '775670417' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(200);
                expect(match?.fullName).toContain('LVMH MOET HENNESSY LOUIS VUITTON');
            });

            it('matches 404 Not Found probe for SIREN 999999999', () => {
                const match = findMatchingPostmanSandboxProfile(FRANCE_COMPANY_SIRENE_ENDPOINT_CODE, [
                    { key: 'documentNumber', value: '999999999' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(404);
            });

            it('matches 409 Missing Parameter probe when documentNumber is empty', () => {
                const match = findMatchingPostmanSandboxProfile(FRANCE_COMPANY_SIRENE_ENDPOINT_CODE, [
                    { key: 'documentNumber', value: '' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(409);
            });
        });

        describe('uk_api_company_lookup', () => {
            it('matches 200 OK success probe for BARCLAYS PLC (00048839)', () => {
                const match = findMatchingPostmanSandboxProfile(UK_COMPANY_LOOKUP_ENDPOINT_CODE, [
                    { key: 'companyNumber', value: '00048839' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(200);
                expect(match?.fullName).toContain('BARCLAYS PLC');
            });

            it('matches 404 Not Found probe for companyNumber 99999999', () => {
                const match = findMatchingPostmanSandboxProfile(UK_COMPANY_LOOKUP_ENDPOINT_CODE, [
                    { key: 'companyNumber', value: '99999999' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(404);
            });

            it('matches 409 Missing Parameter probe when companyNumber is empty', () => {
                const match = findMatchingPostmanSandboxProfile(UK_COMPANY_LOOKUP_ENDPOINT_CODE, [
                    { key: 'companyNumber', value: '' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(409);
            });
        });

        describe('spain_api_tax_id_validate', () => {
            it('matches 200 OK success probe for TELEFONICA SA (A28015865)', () => {
                const match = findMatchingPostmanSandboxProfile(SPAIN_TAX_ID_VALIDATE_ENDPOINT_CODE, [
                    { key: 'documentNumber', value: 'A28015865' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(200);
                expect(match?.fullName).toContain('TELEFONICA SA');
            });

            it('matches 404 Not Found probe for Tax ID 999999999', () => {
                const match = findMatchingPostmanSandboxProfile(SPAIN_TAX_ID_VALIDATE_ENDPOINT_CODE, [
                    { key: 'documentNumber', value: '999999999' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(404);
            });

            it('matches 409 Missing Parameter probe when documentNumber is empty', () => {
                const match = findMatchingPostmanSandboxProfile(SPAIN_TAX_ID_VALIDATE_ENDPOINT_CODE, [
                    { key: 'documentNumber', value: '' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(409);
            });
        });

        describe('world_api_gleif_lei', () => {
            it('matches 200 OK success probe for ALPHABET INC. (5493006MHB84DD0ZWV18)', () => {
                const match = findMatchingPostmanSandboxProfile(WORLD_GLEIF_LEI_ENDPOINT_CODE, [
                    { key: 'lei', value: '5493006MHB84DD0ZWV18' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(200);
                expect(match?.fullName).toContain('ALPHABET INC.');
            });

            it('matches 404 Not Found probe for dummy LEI 00000000000000000000', () => {
                const match = findMatchingPostmanSandboxProfile(WORLD_GLEIF_LEI_ENDPOINT_CODE, [
                    { key: 'lei', value: '00000000000000000000' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(404);
            });

            it('matches 409 Missing Parameter probe when lei is empty', () => {
                const match = findMatchingPostmanSandboxProfile(WORLD_GLEIF_LEI_ENDPOINT_CODE, [
                    { key: 'lei', value: '' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(409);
            });
        });

        describe('usa_api_driver_license_barcode', () => {
            it('matches 200 OK decoded probe for California D1234567', () => {
                const match = findMatchingPostmanSandboxProfile(USA_DRIVER_LICENSE_BARCODE_ENDPOINT_CODE, [
                    { key: 'licenseNumber', value: 'D1234567' },
                    { key: 'state', value: 'CA' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(200);
                expect(match?.fullName).toContain('JOHN DOE');
            });

            it('matches 404 Unreadable probe for UNREADABLE barcode', () => {
                const match = findMatchingPostmanSandboxProfile(USA_DRIVER_LICENSE_BARCODE_ENDPOINT_CODE, [
                    { key: 'licenseNumber', value: 'UNREADABLE' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(404);
            });

            it('matches 409 Missing Parameter probe when licenseNumber is empty', () => {
                const match = findMatchingPostmanSandboxProfile(USA_DRIVER_LICENSE_BARCODE_ENDPOINT_CODE, [
                    { key: 'licenseNumber', value: '' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(409);
            });
        });

        describe('usa_api_driver_license_crosscheck', () => {
            it('matches 200 OK confirmed probe with all 5 demographic parameters', () => {
                const match = findMatchingPostmanSandboxProfile(USA_DRIVER_LICENSE_CROSSCHECK_ENDPOINT_CODE, [
                    { key: 'licenseNumber', value: 'D1234567' },
                    { key: 'firstName', value: 'JOHN' },
                    { key: 'lastName', value: 'DOE' },
                    { key: 'dateOfBirth', value: '1990-01-15' },
                    { key: 'state', value: 'CA' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(200);
                expect(match?.fullName).toContain('Front-to-Back Match Confirmed');
            });

            it('matches 200 OK mismatch probe with tampered license number', () => {
                const match = findMatchingPostmanSandboxProfile(USA_DRIVER_LICENSE_CROSSCHECK_ENDPOINT_CODE, [
                    { key: 'licenseNumber', value: 'TAMPERED999' },
                    { key: 'firstName', value: 'JOHN' },
                    { key: 'lastName', value: 'DOE' },
                    { key: 'dateOfBirth', value: '1990-01-15' },
                    { key: 'state', value: 'CA' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(200);
                expect(match?.fullName).toContain('Mismatch');
            });

            it('matches 404 Unreadable probe for UNREADABLE license number', () => {
                const match = findMatchingPostmanSandboxProfile(USA_DRIVER_LICENSE_CROSSCHECK_ENDPOINT_CODE, [
                    { key: 'licenseNumber', value: 'UNREADABLE' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(404);
            });

            it('matches 409 Missing Parameter probe when licenseNumber is empty', () => {
                const match = findMatchingPostmanSandboxProfile(USA_DRIVER_LICENSE_CROSSCHECK_ENDPOINT_CODE, [
                    { key: 'licenseNumber', value: '' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(409);
            });
        });

        describe('usa_api_vehicle_recalls', () => {
            it('matches 200 OK probe for Tesla Model S VIN 5YJSA1E26MF123456', () => {
                const match = findMatchingPostmanSandboxProfile(USA_VEHICLE_RECALLS_ENDPOINT_CODE, [
                    { key: 'vin', value: '5YJSA1E26MF123456' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(200);
                expect(match?.fullName).toContain('TESLA MODEL S');
            });

            it('matches 404 Not Found probe for 17 zeroes VIN', () => {
                const match = findMatchingPostmanSandboxProfile(USA_VEHICLE_RECALLS_ENDPOINT_CODE, [
                    { key: 'vin', value: '00000000000000000' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(404);
            });

            it('matches 409 Missing Parameter probe when vin is empty', () => {
                const match = findMatchingPostmanSandboxProfile(USA_VEHICLE_RECALLS_ENDPOINT_CODE, [
                    { key: 'vin', value: '' },
                ]);
                expect(match).toBeDefined();
                expect(match?.expectedStatus).toBe(409);
            });
        });
    });

    describe('3. Anti-Shadowing & Profile Uniqueness Across All 8 Endpoints', () => {
        it.each(ALL_8_NEW_ENDPOINT_CODES)(
            'guarantees strictly unique profile keys for %s',
            (code) => {
                const profiles = getPostmanSandboxProfiles(code);
                expect(profiles.length).toBeGreaterThanOrEqual(3);
                const keys = profiles.map(getPostmanSandboxProfileKey);
                const uniqueKeys = new Set(keys);
                expect(uniqueKeys.size).toBe(profiles.length);
            }
        );

        it.each(ALL_8_NEW_ENDPOINT_CODES)(
            'has exactly one 404 and one 409 error profile for %s',
            (code) => {
                const profiles = getPostmanSandboxProfiles(code);
                const p404 = profiles.filter((p) => p.expectedStatus === 404);
                const p409 = profiles.filter((p) => p.expectedStatus === 409);
                expect(p404).toHaveLength(1);
                expect(p409).toHaveLength(1);
            }
        );
    });

    describe('4. Strict Zero "force" Rule Compliance', () => {
        it.each(ALL_8_NEW_ENDPOINT_CODES)(
            'ensures NO sandbox profile in %s contains any property or override with "force"',
            (code) => {
                const profiles = getPostmanSandboxProfiles(code);
                for (const profile of profiles) {
                    const serialized = JSON.stringify(profile);
                    expect(serialized.toLowerCase()).not.toContain('"force"');
                    if (profile.paramOverrides) {
                        expect(Object.keys(profile.paramOverrides)).not.toContain('force');
                    }
                }
            }
        );

        it.each(ALL_8_NEW_ENDPOINT_CODES)(
            'ensures postman-endpoints-io.json has no "force" parameter or body field for %s',
            (code) => {
                const ep = postmanEndpointsIo.endpoints.find((e) => e.code === code);
                expect(ep).toBeDefined();
                const depFields = (ep?.input?.dependencies ?? []).map((d) => d.field);
                expect(depFields).not.toContain('force');

                const docFields = (ep?.input?.documentedParams ?? []).map((d) => d.field);
                expect(docFields).not.toContain('force');
            }
        );
    });

    describe('5. Smart-Batch Catalog & Postman JSON Catalog Synchronization', () => {
        it.each(ALL_8_NEW_ENDPOINT_CODES)(
            'verifies %s is present in ENDPOINT_IO_CATALOG with valid inputs and outputs',
            (code) => {
                const entry = ENDPOINT_IO_CATALOG[code];
                expect(entry).toBeDefined();
                expect(entry.inputs.length).toBeGreaterThan(0);
                expect(entry.outputs.length).toBeGreaterThan(0);
            }
        );

        it.each(ALL_8_NEW_ENDPOINT_CODES)(
            'verifies %s has matching method and valid documented responses in postman-endpoints-io.json',
            (code) => {
                const ep = postmanEndpointsIo.endpoints.find((e) => e.code === code);
                expect(ep).toBeDefined();
                expect(ep?.method).toMatch(/^(GET|POST)$/);
                expect(ep?.responses?.length).toBeGreaterThanOrEqual(3);
                const statuses = ep?.responses?.map((r) => r.status);
                expect(statuses).toContain('200');
                expect(statuses).toContain('404');
                expect(statuses).toContain('409');
            }
        );

        it('applies default parameters correctly on endpoint parameter fill', () => {
            const fakeEp = {
                code: EU_VIES_VAT_ENDPOINT_CODE,
                params: [
                    { key: 'countryCode', value: '' },
                    { key: 'vatNumber', value: '' },
                ],
            };
            applyPostmanSandboxParamDefaults(fakeEp);
            expect(fakeEp.params.find((p) => p.key === 'countryCode')?.value).toBe('IE');
            expect(fakeEp.params.find((p) => p.key === 'vatNumber')?.value).toBe('6388047V');
        });
    });
});
