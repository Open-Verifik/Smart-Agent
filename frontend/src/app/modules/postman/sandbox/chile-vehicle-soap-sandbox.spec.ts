import { CHILE_VEHICLE_SOAP_ENDPOINT_CODE, CHILE_POSTMAN_SANDBOX_BY_CODE } from './countries/chile.postman-sandbox';
import {
    applyPostmanSandboxParamDefaults,
    getPostmanSandboxProfiles,
    isPostmanSandboxEndpoint,
} from './postman-sandbox.util';
import {
    SANDBOX_DEFAULT_SOAP_PLATE,
    SANDBOX_VEHICLE_SOAP_DEMO_PROFILE,
} from './vehicle-soap-profiles';

describe('chile_api_vehicle_soap sandbox', () => {
    it('registers the endpoint in the sandbox registry', () => {
        expect(isPostmanSandboxEndpoint(CHILE_VEHICLE_SOAP_ENDPOINT_CODE)).toBe(true);
        expect(CHILE_POSTMAN_SANDBOX_BY_CODE[CHILE_VEHICLE_SOAP_ENDPOINT_CODE]).toBeDefined();
    });

    it('uses 6-char plates that pass SOAP middleware (max 6)', () => {
        const profiles = getPostmanSandboxProfiles(CHILE_VEHICLE_SOAP_ENDPOINT_CODE);
        const successProfiles = profiles.filter((profile) => profile.responseType !== 'error');

        for (const profile of successProfiles) {
            const plate = profile.paramOverrides?.plate ?? profile.plate ?? '';
            expect(plate.length).toBeLessThanOrEqual(6);
            expect(plate.length).toBeGreaterThanOrEqual(4);
        }
    });

    it('includes fixture, demo, error, and conflict profiles', () => {
        const profiles = getPostmanSandboxProfiles(CHILE_VEHICLE_SOAP_ENDPOINT_CODE);
        expect(profiles.length).toBeGreaterThanOrEqual(14);

        const ab1004 = profiles.find((profile) => profile.paramOverrides?.plate === 'AB1004');
        expect(ab1004?.paramOverrides?.policyNumber).toBe('94590004');
        expect(ab1004?.fullName).toContain('VENCIDO');

        expect(profiles).toContainEqual(
            expect.objectContaining({
                paramOverrides: SANDBOX_VEHICLE_SOAP_DEMO_PROFILE.paramOverrides,
            })
        );

        const notFoundProfile = profiles.find((profile) => profile.expectedStatus === 404);
        expect(notFoundProfile?.paramOverrides?.plate).toBe('ERR404');

        const missingPolicy = profiles.find(
            (profile) => profile.profileKey === '409-missing-policyNumber'
        );
        expect(missingPolicy?.paramOverrides?.policyNumber).toBe('');
    });

    it('applies plate and policyNumber defaults for SOAP params', () => {
        const params = [
            { key: 'plate', value: '' },
            { key: 'policyNumber', value: '' },
            { key: 'includeCost', value: 'true' },
        ];

        applyPostmanSandboxParamDefaults(
            { code: CHILE_VEHICLE_SOAP_ENDPOINT_CODE, params },
            undefined
        );

        expect(params.find((param) => param.key === 'plate')?.value).toBe(SANDBOX_DEFAULT_SOAP_PLATE);
        expect(params.find((param) => param.key === 'policyNumber')?.value).toBe('94590001');
    });
});
