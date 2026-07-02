import {
    ARGENTINA_POSTMAN_SANDBOX_BY_CODE,
    ARGENTINA_RTO_ENDPOINT_CODE,
    ARGENTINA_TECHNICAL_INSPECTION_ENDPOINT_CODE,
    ARGENTINA_TRAFFIC_INFRACTIONS_ENDPOINT_CODE,
    ARGENTINA_VEHICLE_V3_ENDPOINT_CODE,
} from './countries/argentina.postman-sandbox';
import {
    applyPostmanSandboxParamDefaults,
    getPostmanSandboxProfiles,
    isPostmanSandboxEndpoint,
} from './postman-sandbox.util';
import { SANDBOX_DEFAULT_PLATE } from './vehicle-plate-profiles';

const ARGENTINA_VEHICLE_SERVICE_CODES = [
    ARGENTINA_VEHICLE_V3_ENDPOINT_CODE,
    ARGENTINA_TRAFFIC_INFRACTIONS_ENDPOINT_CODE,
    ARGENTINA_TECHNICAL_INSPECTION_ENDPOINT_CODE,
    ARGENTINA_RTO_ENDPOINT_CODE,
];

describe('Argentina vehicle services sandbox', () => {
    it('registers all new Argentina vehicle service endpoints', () => {
        for (const code of ARGENTINA_VEHICLE_SERVICE_CODES) {
            expect(isPostmanSandboxEndpoint(code)).toBe(true);
            expect(ARGENTINA_POSTMAN_SANDBOX_BY_CODE[code]).toBeDefined();
        }
    });

    it('uses shared plate fixtures and documented error examples', () => {
        for (const code of ARGENTINA_VEHICLE_SERVICE_CODES) {
            const profiles = getPostmanSandboxProfiles(code);
            const successProfiles = profiles.filter((profile) => profile.responseType !== 'error');
            const notFoundProfile = profiles.find((profile) => profile.expectedStatus === 404);
            const missingPlateProfile = profiles.find(
                (profile) => profile.profileKey === '409-missing-plate'
            );

            expect(successProfiles).toHaveLength(10);
            expect(successProfiles[0].plate).toBe(SANDBOX_DEFAULT_PLATE);
            expect(notFoundProfile?.plate).toBe('ERR40401');
            expect(missingPlateProfile?.paramOverrides?.plate).toBe('');
        }
    });

    it('applies the shared plate default to empty plate params', () => {
        for (const code of ARGENTINA_VEHICLE_SERVICE_CODES) {
            const params = [{ key: 'plate', value: '' }];

            applyPostmanSandboxParamDefaults({ code, params }, undefined);

            expect(params.find((param) => param.key === 'plate')?.value).toBe(SANDBOX_DEFAULT_PLATE);
        }
    });

    it('only exposes customer-facing plate overrides in profiles', () => {
        for (const code of ARGENTINA_VEHICLE_SERVICE_CODES) {
            for (const profile of getPostmanSandboxProfiles(code)) {
                const keys = Object.keys(profile.paramOverrides ?? {});

                expect(keys.every((key) => key === 'plate')).toBe(true);
            }
        }
    });
});
