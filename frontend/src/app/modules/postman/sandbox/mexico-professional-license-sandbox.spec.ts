import {
    MEXICO_CEDULA_PROFESIONAL_ENDPOINT_CODE,
    MEXICO_HEALTH_WORKER_ENDPOINT_CODE,
    MEXICO_SIGED_CERTIFICATE_ENDPOINT_CODE,
} from './countries/mexico.postman-sandbox';
import {
    applyPostmanSandboxParamDefaults,
    getPostmanSandboxProfiles,
    isPostmanSandboxEndpoint,
} from './postman-sandbox.util';

const errorStatuses = (code: string): number[] =>
    getPostmanSandboxProfiles(code)
        .filter((profile) => profile.responseType === 'error')
        .map((profile) => profile.expectedStatus ?? 0);

describe('mexico professional license sandbox', () => {
    it('registers the three endpoints', () => {
        expect(isPostmanSandboxEndpoint(MEXICO_CEDULA_PROFESIONAL_ENDPOINT_CODE)).toBe(true);
        expect(isPostmanSandboxEndpoint(MEXICO_HEALTH_WORKER_ENDPOINT_CODE)).toBe(true);
        expect(isPostmanSandboxEndpoint(MEXICO_SIGED_CERTIFICATE_ENDPOINT_CODE)).toBe(true);
    });

    it('defaults the professional license lookup to the shared CURP fixture', () => {
        const params = [
            { key: 'documentType', value: '' },
            { key: 'documentNumber', value: '' },
            { key: 'firstName', value: '' },
            { key: 'lastName', value: '' },
        ];

        applyPostmanSandboxParamDefaults(
            { code: MEXICO_CEDULA_PROFESIONAL_ENDPOINT_CODE, params },
            undefined
        );

        expect(params.find((param) => param.key === 'documentNumber')?.value).toBe('LOPE900501HDFGRN01');
        expect(params.find((param) => param.key === 'documentType')?.value).toBe('CURP');
    });

    it('clears document params on the name-search profile', () => {
        const profile = getPostmanSandboxProfiles(MEXICO_CEDULA_PROFESIONAL_ENDPOINT_CODE).find(
            (item) => item.profileKey === 'name-search'
        );

        expect(profile?.paramOverrides?.documentType).toBe('');
        expect(profile?.paramOverrides?.documentNumber).toBe('');
        expect(profile?.paramOverrides?.firstName).toBe('ANA');
        expect(profile?.paramOverrides?.lastName).toBe('LOPEZ RUIZ');
    });

    it('covers 404 and 409 professional license errors', () => {
        expect(errorStatuses(MEXICO_CEDULA_PROFESIONAL_ENDPOINT_CODE)).toEqual(
            expect.arrayContaining([404, 409])
        );
    });

    it('treats a law-only license as a health-worker 404 and a nursing license as success', () => {
        const profiles = getPostmanSandboxProfiles(MEXICO_HEALTH_WORKER_ENDPOINT_CODE);
        const law = profiles.find((profile) => profile.paramOverrides?.documentNumber === '10000001');
        const nursing = profiles.find((profile) => profile.paramOverrides?.documentNumber === '10000002');

        expect(law?.expectedStatus).toBe(404);
        expect(nursing?.responseType).toBeUndefined();
    });

    it('defaults the education certificate to the shared folio', () => {
        const params = [
            { key: 'folio', value: '' },
            { key: 'fullName', value: '' },
            { key: 'curp', value: '' },
        ];

        applyPostmanSandboxParamDefaults(
            { code: MEXICO_SIGED_CERTIFICATE_ENDPOINT_CODE, params },
            undefined
        );

        expect(params.find((param) => param.key === 'folio')?.value).toBe('SIGED10000001');
    });

    it('covers folio, name mismatch, and CURP education certificate profiles', () => {
        const profiles = getPostmanSandboxProfiles(MEXICO_SIGED_CERTIFICATE_ENDPOINT_CODE);
        const mismatch = profiles.find((profile) => profile.profileKey === 'folio-name-mismatch');
        const curp = profiles.find((profile) => profile.profileKey === 'curp-match');

        expect(mismatch?.expectedStatus).toBe(409);
        expect(mismatch?.paramOverrides?.fullName).toBe('Maria Perez');
        expect(curp?.paramOverrides?.curp).toBe('LOPE900501HDFGRN01');
        expect(errorStatuses(MEXICO_SIGED_CERTIFICATE_ENDPOINT_CODE)).toEqual(
            expect.arrayContaining([404, 409])
        );
    });
});
