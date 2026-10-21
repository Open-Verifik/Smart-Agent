import { describe, expect, it } from 'vitest';
import { ApiEndpoint } from './postman.types';
import { getPostmanRequestValidationIssues, getPostmanXorParamLayout } from './postman-request-validation';
import {
    getMexicoLicenseTripleValidationIssues,
    prepareMexicoLicenseEndpoint,
    resolveMexicoLicenseUi,
    setMexicoLicenseCedulaNumber,
    setMexicoLicenseCurpNumber,
} from './postman-mexico-license-input.util';

const mexicoEndpoint = (params: ApiEndpoint['params'], ui?: ApiEndpoint['mexicoLicenseUi']): ApiEndpoint =>
    ({
        id: 'mx-hw',
        label: 'Health Worker',
        code: 'mexico_api_health_worker',
        method: 'GET',
        url: 'https://api.verifik.co/v2/mx/health-worker',
        params,
        ...(ui ? { mexicoLicenseUi: ui } : {}),
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
        expect(layout.curpRows).toEqual([]);
        expect(layout.cedulaRows).toEqual([]);
    });
});

describe('Mexico license validation and send params', () => {
    const baseParams = [
        { key: 'documentType', value: '', type: 'string', required: false },
        { key: 'documentNumber', value: '', type: 'string', required: false },
        { key: 'firstName', value: '', type: 'string', required: false },
        { key: 'lastName', value: '', type: 'string', required: false },
    ];

    it('keeps independent CURP and license staging values in the UI state', () => {
        let ep = mexicoEndpoint(baseParams);
        ep = setMexicoLicenseCurpNumber(ep, 'LOPE900501HDFGRN01');
        expect(resolveMexicoLicenseUi(ep).curpDocumentNumber).toBe('LOPE900501HDFGRN01');
        expect(resolveMexicoLicenseUi(ep).cedulaDocumentNumber).toBe('');

        ep = setMexicoLicenseCedulaNumber(ep, '10000001');
        expect(resolveMexicoLicenseUi(ep).curpDocumentNumber).toBe('');
        expect(resolveMexicoLicenseUi(ep).cedulaDocumentNumber).toBe('10000001');
    });

    it('syncs only the active CURP group onto wire params for send', () => {
        const ep = setMexicoLicenseCurpNumber(
            mexicoEndpoint(baseParams),
            'LOPE900501HDFGRN01'
        );
        const prepared = prepareMexicoLicenseEndpoint(ep);
        expect(prepared.params?.find((p) => p.key === 'documentType')?.value).toBe('CURP');
        expect(prepared.params?.find((p) => p.key === 'documentNumber')?.value).toBe(
            'LOPE900501HDFGRN01'
        );
        expect(getPostmanRequestValidationIssues(prepared, null)).toEqual([]);
    });

    it('syncs only the active license group onto wire params for send', () => {
        const ep = setMexicoLicenseCedulaNumber(mexicoEndpoint(baseParams), '10000001');
        const prepared = prepareMexicoLicenseEndpoint(ep);
        expect(prepared.params?.find((p) => p.key === 'documentType')?.value).toBe('CEDULA');
        expect(prepared.params?.find((p) => p.key === 'documentNumber')?.value).toBe('10000001');
        expect(getPostmanRequestValidationIssues(prepared, null)).toEqual([]);
    });

    it('accepts name mode without document fields', () => {
        const ep = mexicoEndpoint(
            baseParams.map((p) => {
                if (p.key === 'firstName') return { ...p, value: 'ANA' };
                if (p.key === 'lastName') return { ...p, value: 'LOPEZ RUIZ' };
                return p;
            }),
            { curpDocumentNumber: '', cedulaDocumentNumber: '' }
        );
        expect(getPostmanRequestValidationIssues(prepareMexicoLicenseEndpoint(ep), null)).toEqual(
            []
        );
    });

    it('rejects mixing document number and name fields', () => {
        const ep = mexicoEndpoint(
            baseParams.map((p) => {
                if (p.key === 'firstName') return { ...p, value: 'ANA' };
                return p;
            }),
            {
                curpDocumentNumber: 'LOPE900501HDFGRN01',
                cedulaDocumentNumber: '',
            }
        );
        const issues = getMexicoLicenseTripleValidationIssues(ep, 'API');
        expect(issues.map((i) => i.translationKey)).toContain('createBatch.validationXorBothModes');
    });
});
