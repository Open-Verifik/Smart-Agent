import { describe, expect, it } from 'vitest';
import {
    CHILE_POSTMAN_SANDBOX_BY_CODE,
    CHILE_VEHICLE_STOLEN_ENDPOINT_CODE,
} from './countries/chile.postman-sandbox';
import {
    applyPostmanSandboxParamDefaults,
    getPostmanSandboxProfiles,
    isPostmanSandboxEndpoint,
} from './postman-sandbox.util';
import {
    SANDBOX_DEFAULT_STOLEN_PLATE,
    SANDBOX_STOLEN_REPORT_PLATE,
} from './vehicle-stolen-profiles';

describe('chile_api_vehicle_stolen sandbox', () => {
    it('registers the endpoint in the sandbox registry', () => {
        expect(isPostmanSandboxEndpoint(CHILE_VEHICLE_STOLEN_ENDPOINT_CODE)).toBe(true);
        expect(CHILE_POSTMAN_SANDBOX_BY_CODE[CHILE_VEHICLE_STOLEN_ENDPOINT_CODE]).toBeDefined();
    });

    it('defaults to PTKX93 and includes the stolen-report plate', () => {
        expect(CHILE_POSTMAN_SANDBOX_BY_CODE[CHILE_VEHICLE_STOLEN_ENDPOINT_CODE]?.defaultPlate).toBe(
            SANDBOX_DEFAULT_STOLEN_PLATE
        );

        const profiles = getPostmanSandboxProfiles(CHILE_VEHICLE_STOLEN_ENDPOINT_CODE);
        const plates = profiles.map((profile) => profile.paramOverrides?.plate);

        expect(plates).toContain(SANDBOX_DEFAULT_STOLEN_PLATE);
        expect(plates).toContain(SANDBOX_STOLEN_REPORT_PLATE);
        expect(profiles.find((profile) => profile.profileKey === 'stolen-ng8245')?.fullName).toContain(
            'active theft report'
        );
    });

    it('includes a missing-plate conflict and never sends force', () => {
        const profiles = getPostmanSandboxProfiles(CHILE_VEHICLE_STOLEN_ENDPOINT_CODE);
        const missingPlate = profiles.find((profile) => profile.profileKey === '409-missing-stolen-plate');

        expect(missingPlate?.expectedStatus).toBe(409);
        expect(missingPlate?.paramOverrides?.plate).toBe('');

        for (const profile of profiles) {
            expect(profile.paramOverrides?.force).toBeUndefined();
        }
    });

    it('applies plate defaults for stolen-vehicle params', () => {
        const params = [{ key: 'plate', value: '' }];

        applyPostmanSandboxParamDefaults({ code: CHILE_VEHICLE_STOLEN_ENDPOINT_CODE, params }, undefined);

        expect(params.find((param) => param.key === 'plate')?.value).toBe(SANDBOX_DEFAULT_STOLEN_PLATE);
    });
});
