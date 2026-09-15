import { describe, expect, it } from 'vitest';
import {
    COLOMBIA_POSTMAN_SANDBOX_BY_CODE,
    COLOMBIA_RUNT_VEHICLE_OWNERS_ENDPOINT_CODE,
} from './countries/colombia.postman-sandbox';
import {
    applyPostmanSandboxParamDefaults,
    getPostmanSandboxProfiles,
    isPostmanSandboxEndpoint,
} from './postman-sandbox.util';

const SANDBOX_DEFAULT_OWNERS_PLATE = 'CRL299';

describe('colombia_api_runt_owners sandbox', () => {
    it('registers the endpoint in the sandbox registry', () => {
        expect(isPostmanSandboxEndpoint(COLOMBIA_RUNT_VEHICLE_OWNERS_ENDPOINT_CODE)).toBe(true);
        expect(COLOMBIA_POSTMAN_SANDBOX_BY_CODE[COLOMBIA_RUNT_VEHICLE_OWNERS_ENDPOINT_CODE]).toBeDefined();
    });

    it('defaults to CRL299 for plate and document number', () => {
        const config = COLOMBIA_POSTMAN_SANDBOX_BY_CODE[COLOMBIA_RUNT_VEHICLE_OWNERS_ENDPOINT_CODE];

        expect(config?.defaultPlate).toBe(SANDBOX_DEFAULT_OWNERS_PLATE);
        expect(config?.defaultDocumentNumber).toBe(SANDBOX_DEFAULT_OWNERS_PLATE);
    });

    it('registers only the success and missing-plate profiles', () => {
        const profiles = getPostmanSandboxProfiles(COLOMBIA_RUNT_VEHICLE_OWNERS_ENDPOINT_CODE);
        const successProfile = profiles.find((profile) => profile.responseType !== 'error');
        const missingPlateProfile = profiles.find(
            (profile) => profile.profileKey === '409-missing-plate'
        );

        expect(profiles).toHaveLength(2);
        expect(successProfile?.plate).toBe(SANDBOX_DEFAULT_OWNERS_PLATE);
        expect(successProfile?.fullName).toContain('owner history');
        expect(missingPlateProfile?.expectedStatus).toBe(409);
        expect(missingPlateProfile?.paramOverrides?.plate).toBe('');
        expect(profiles.some((profile) => profile.expectedStatus === 404)).toBe(false);
    });

    it('never sends force on any profile', () => {
        const profiles = getPostmanSandboxProfiles(COLOMBIA_RUNT_VEHICLE_OWNERS_ENDPOINT_CODE);

        for (const profile of profiles) {
            expect(profile.paramOverrides?.force).toBeUndefined();
        }
    });

    it('applies CRL299 to an empty plate parameter', () => {
        const params = [{ key: 'plate', value: '' }];

        applyPostmanSandboxParamDefaults(
            { code: COLOMBIA_RUNT_VEHICLE_OWNERS_ENDPOINT_CODE, params },
            undefined
        );

        expect(params[0].value).toBe(SANDBOX_DEFAULT_OWNERS_PLATE);
    });

    it('does not overwrite an existing plate', () => {
        const params = [{ key: 'plate', value: 'ABC123' }];

        applyPostmanSandboxParamDefaults(
            { code: COLOMBIA_RUNT_VEHICLE_OWNERS_ENDPOINT_CODE, params },
            undefined
        );

        expect(params[0].value).toBe('ABC123');
    });
});
