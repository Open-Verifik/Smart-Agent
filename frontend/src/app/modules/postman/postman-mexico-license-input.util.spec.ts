import { describe, expect, it } from 'vitest';
import { ApiEndpoint } from './postman.types';
import {
    applyMexicoLicenseParamEdit,
    detectMexicoLicenseInputMode,
    ensureMexicoLicenseDocumentTypeForSend,
    getMexicoLicenseTripleParamLayout,
    getMexicoLicenseTripleValidationIssues,
} from './postman-mexico-license-input.util';
import { getPostmanRequestValidationIssues, getPostmanXorParamLayout } from './postman-request-validation';

const mexicoEndpoint = (params: ApiEndpoint['params']): ApiEndpoint =>
    ({
        id: 'mx-hw',
        label: 'Health Worker',
        code: 'mexico_api_health_worker',
        method: 'GET',
        url: 'https://api.verifik.co/v2/mx/health-worker',
        params,
    }) as ApiEndpoint;

describe('Mexico license triple input layout', () => {
    const params = [
        { key: 'documentType', value: '', type: 'string', required: false },
        { key: 'documentNumber', value: '', type: 'string', required: false },
        { key: 'firstName', value: '', type: 'string', required: false },
        { key: 'lastName', value: '', type: 'string', required: false },
        { key: 'includeCost', value: 'true', type: 'string', required: false },
    ];

    it('uses the mexicoLicenseTriple layout for health worker and cedula profesional', () => {
        const layout = getPostmanXorParamLayout(mexicoEndpoint(params));
        expect(layout.kind).toBe('mexicoLicenseTriple');
        if (layout.kind !== 'mexicoLicenseTriple') return;
        expect(layout.nameRows.map((r) => r.param.key)).toEqual(['firstName', 'lastName']);
        expect(layout.otherRows.map((r) => r.param.key)).toEqual(['includeCost']);
    });

    it('orders groups as CURP, license number, then name in the template layout', () => {
        const layout = getMexicoLicenseTripleParamLayout(mexicoEndpoint(params));
        expect(layout.kind).toBe('mexicoLicenseTriple');
        if (layout.kind !== 'mexicoLicenseTriple') return;
        expect(layout.curpRows[0]?.param.key).toBe('documentNumber');
        expect(layout.cedulaRows[0]?.param.key).toBe('documentNumber');
    });
});

describe('Mexico license validation and send params', () => {
    const baseParams = [
        { key: 'documentType', value: '', type: 'string', required: false },
        { key: 'documentNumber', value: '', type: 'string', required: false },
        { key: 'firstName', value: '', type: 'string', required: false },
        { key: 'lastName', value: '', type: 'string', required: false },
    ];

    it('accepts CURP mode with document number only before send normalization', () => {
        const ep = mexicoEndpoint(
            baseParams.map((p) =>
                p.key === 'documentNumber'
                    ? { ...p, value: 'LOPE900501HDFGRN01' }
                    : p
            )
        );
        let edited = applyMexicoLicenseParamEdit(ep, 'documentNumber', 'curp');
        expect(detectMexicoLicenseInputMode({ documentNumber: 'LOPE900501HDFGRN01', documentType: 'CURP' })).toBe(
            'curp'
        );
        edited = ensureMexicoLicenseDocumentTypeForSend(edited);
        expect(edited.params?.find((p) => p.key === 'documentType')?.value).toBe('CURP');
        expect(getPostmanRequestValidationIssues(edited, null)).toEqual([]);
    });

    it('accepts license number mode with CEDULA type', () => {
        const ep = mexicoEndpoint(
            baseParams.map((p) => {
                if (p.key === 'documentType') return { ...p, value: 'CEDULA' };
                if (p.key === 'documentNumber') return { ...p, value: '10000001' };
                return p;
            })
        );
        expect(getPostmanRequestValidationIssues(ep, null)).toEqual([]);
    });

    it('accepts name mode without document fields', () => {
        const ep = mexicoEndpoint(
            baseParams.map((p) => {
                if (p.key === 'firstName') return { ...p, value: 'ANA' };
                if (p.key === 'lastName') return { ...p, value: 'LOPEZ RUIZ' };
                return p;
            })
        );
        expect(getPostmanRequestValidationIssues(ep, null)).toEqual([]);
    });

    it('rejects mixing document number and name fields', () => {
        const row = {
            documentType: 'CURP',
            documentNumber: 'LOPE900501HDFGRN01',
            firstName: 'ANA',
            lastName: '',
        };
        const issues = getMexicoLicenseTripleValidationIssues(row, 'API');
        expect(issues.map((i) => i.translationKey)).toContain('createBatch.validationXorBothModes');
    });
});
