import {
    CHILE_POSTMAN_SANDBOX_BY_CODE,
    CHILE_VEHICLE_SOAP_ENDPOINT_CODE,
    CHILE_VEHICLE_SOAP_PLATE_ENDPOINT_CODE,
} from './countries/chile.postman-sandbox';
import {
    applyPostmanSandboxParamDefaults,
    getPostmanSandboxProfiles,
    isPostmanSandboxEndpoint,
} from './postman-sandbox.util';
import {
    SANDBOX_DEFAULT_SOAP_PLATE_ONLY,
    SANDBOX_VEHICLE_SOAP_PLATE_DEMO_PROFILE,
} from './vehicle-soap-plate-profiles';

describe('chile_api_vehicle_soap_plate sandbox', () => {
    it('registers the endpoint in the sandbox registry', () => {
        expect(isPostmanSandboxEndpoint(CHILE_VEHICLE_SOAP_PLATE_ENDPOINT_CODE)).toBe(true);
        expect(CHILE_POSTMAN_SANDBOX_BY_CODE[CHILE_VEHICLE_SOAP_PLATE_ENDPOINT_CODE]).toBeDefined();
    });

    it('uses 4–6 char plates and plate-only paramOverrides', () => {
        const profiles = getPostmanSandboxProfiles(CHILE_VEHICLE_SOAP_PLATE_ENDPOINT_CODE);
        const successProfiles = profiles.filter((profile) => profile.responseType !== 'error');

        for (const profile of successProfiles) {
            const plate = profile.paramOverrides?.plate ?? profile.plate ?? '';
            expect(plate.length).toBeLessThanOrEqual(6);
            expect(plate.length).toBeGreaterThanOrEqual(4);
            expect(profile.paramOverrides?.policyNumber).toBeUndefined();
        }
    });

    it('includes fixture, demo, live probe, error, and conflict profiles', () => {
        const profiles = getPostmanSandboxProfiles(CHILE_VEHICLE_SOAP_PLATE_ENDPOINT_CODE);
        expect(profiles.length).toBeGreaterThanOrEqual(18);

        const ab1004 = profiles.find((profile) => profile.paramOverrides?.plate === 'AB1004');
        expect(ab1004?.fullName).toContain('VENCIDO');

        expect(profiles).toContainEqual(
            expect.objectContaining({
                paramOverrides: SANDBOX_VEHICLE_SOAP_PLATE_DEMO_PROFILE.paramOverrides,
            })
        );

        const csxz27 = profiles.find((profile) => profile.paramOverrides?.plate === 'CSXZ27');
        expect(csxz27?.fullName).toContain('sin SOAP activo');

        const notFoundProfile = profiles.find((profile) => profile.expectedStatus === 404);
        expect(notFoundProfile?.paramOverrides?.plate).toBe('ERR404');

        const missingPlate = profiles.find(
            (profile) => profile.profileKey === '409-missing-plate-only'
        );
        expect(missingPlate?.paramOverrides?.plate).toBe('');
    });

    it('applies plate-only defaults for SOAP plate params', () => {
        const params = [{ key: 'plate', value: '' }];

        applyPostmanSandboxParamDefaults(
            { code: CHILE_VEHICLE_SOAP_PLATE_ENDPOINT_CODE, params },
            undefined
        );

        expect(params.find((param) => param.key === 'plate')?.value).toBe(SANDBOX_DEFAULT_SOAP_PLATE_ONLY);
    });

    it('registers plate-only SOAP separately from plate+policy SOAP', () => {
        expect(isPostmanSandboxEndpoint(CHILE_VEHICLE_SOAP_ENDPOINT_CODE)).toBe(true);
        expect(isPostmanSandboxEndpoint(CHILE_VEHICLE_SOAP_PLATE_ENDPOINT_CODE)).toBe(true);

        expect(CHILE_POSTMAN_SANDBOX_BY_CODE[CHILE_VEHICLE_SOAP_ENDPOINT_CODE]?.defaultPlate).toBe('AB1001');
        expect(CHILE_POSTMAN_SANDBOX_BY_CODE[CHILE_VEHICLE_SOAP_PLATE_ENDPOINT_CODE]?.defaultPlate).toBe('AB1001');
    });
});
