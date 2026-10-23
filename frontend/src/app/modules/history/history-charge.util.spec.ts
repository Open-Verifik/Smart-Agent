import { describe, expect, it } from 'vitest';
import {
    historyNotChargedExplanationKey,
    isHistoryRequestCharged,
    isHistoryRequestNotCharged,
} from './history-charge.util';

const cedula = {
    endpoint: '/v2/co/cedula',
    code: 'colombia_api_identity_lookup',
    cost: 0.3,
};

describe('history-charge.util', () => {
    it('charges a successful request and leaves its list price visible', () => {
        expect(isHistoryRequestCharged({ ...cedula, status: 'ok', statusCode: 200 })).toBe(true);
        expect(
            isHistoryRequestNotCharged({
                status: 'ok',
                statusCode: 201,
                endpoint: '/v2/br/cpf',
                cost: 1,
            })
        ).toBe(false);
    });

    it('does not charge pending rows', () => {
        expect(
            isHistoryRequestNotCharged({ status: 'queue', endpoint: '/v2/co/cedula', cost: 0.3 })
        ).toBe(true);
        expect(isHistoryRequestNotCharged({ historyStatus: 'pending', cost: 0.3 })).toBe(true);
        expect(historyNotChargedExplanationKey({ status: 'queue' })).toBe(
            'history.notChargedExplanation'
        );
    });

    it('does not charge ordinary failures, even when cost is the list price', () => {
        for (const statusCode of [400, 403, 409, 412, 422, 500]) {
            expect(
                isHistoryRequestNotCharged({
                    status: 'ok',
                    statusCode,
                    endpoint: '/v2/co/cedula',
                    cost: 0.3,
                })
            ).toBe(true);
        }
        expect(
            isHistoryRequestNotCharged({
                status: 'failed',
                statusCode: 409,
                endpoint: '/v2/pe/cedula',
                cost: 0.2,
            })
        ).toBe(true);
        expect(
            isHistoryRequestNotCharged({
                status: 'timed-out',
                endpoint: '/v2/co/cedula',
                cost: 0.3,
            })
        ).toBe(true);
        expect(historyNotChargedExplanationKey({ status: 'failed', statusCode: 500 })).toBe(
            'history.notChargedFailedExplanation'
        );
    });

    it('keeps the cédula list price for a CEDULA NO EXISTE 404 on GET and POST', () => {
        const body = { code: 'NotFound', message: 'CEDULA NO EXISTE' };
        expect(
            isHistoryRequestCharged({
                ...cedula,
                method: 'GET',
                status: 'failed',
                statusCode: 404,
                apiResponse: body,
            })
        ).toBe(true);
        expect(
            isHistoryRequestCharged({
                ...cedula,
                method: 'POST',
                endpoint: 'https://api.verifik.co/v2/co/cedula?documentType=CC',
                statusCode: '404',
                apiResponse: { data: { documentStatus: 'CÉDULA NO EXISTE' } },
            })
        ).toBe(true);
        expect(
            isHistoryRequestCharged({
                ...cedula,
                endpoint: 'v2/co/cedula',
                statusCode: 404,
                response: { code: 'NotFound', message: 'Record not found.' },
            })
        ).toBe(true);
    });

    it('treats a cédula 404 without a stored body as the billed not-found', () => {
        expect(isHistoryRequestCharged({ ...cedula, status: 'ok', statusCode: 404 })).toBe(true);
    });

    it('does not charge a cédula 404 that is a different error', () => {
        expect(
            isHistoryRequestNotCharged({
                ...cedula,
                statusCode: 404,
                apiResponse: { code: 'MissingParameter', message: 'missing documentNumber' },
            })
        ).toBe(true);
        expect(
            isHistoryRequestNotCharged({
                endpoint: '/v2/co/cedula/extra',
                code: 'colombia_api_identity_lookup_extra',
                statusCode: 404,
                cost: 0.5,
            })
        ).toBe(true);
        expect(
            isHistoryRequestNotCharged({
                endpoint: '/v2/co/cedula/vigencia',
                statusCode: 404,
                apiResponse: { code: 'NotFound', message: 'Record not found.' },
            })
        ).toBe(true);
    });

    it('charges Colombia RUNT 404 NotFound rows and leaves other RUNT errors uncharged', () => {
        const paths = [
            '/v2/co/runt/conductor',
            '/v3/co/runt/conductor',
            '/v2/co/runt/vehiculo',
            '/v2/co/runt/vehiculo-completo',
            '/v2/co/runt/vehiculo-soat',
            '/v2/co/runt/vehicle-by-plate',
            '/v2/co/runt/vehicle-by-vin',
            '/v2/co/runt/vehicle-by-plate-simplified',
            '/v2/co/runt/vehicle-by-plate-only',
        ];
        paths.forEach((endpoint) => {
            expect(
                isHistoryRequestCharged({
                    endpoint,
                    statusCode: 404,
                    apiResponse: { code: 'NotFound', message: 'Record not found.' },
                    cost: 0.4,
                })
            ).toBe(true);
        });
        expect(
            isHistoryRequestNotCharged({
                endpoint: '/v2/co/runt/vehiculo',
                statusCode: 404,
                apiResponse: { code: 'timeout_data_source', message: 'timeout_data_source' },
            })
        ).toBe(true);
        expect(
            isHistoryRequestNotCharged({
                endpoint: '/v2/co/runt/vehiculo',
                statusCode: 409,
                cost: 0.4,
            })
        ).toBe(true);
        expect(
            isHistoryRequestNotCharged({
                endpoint: '/v2/co/runt/propietarios',
                statusCode: 404,
                apiResponse: { code: 'NotFound' },
            })
        ).toBe(true);
    });

    it('charges every afiliaciones 404 and only a SIBGA NotFound 404', () => {
        expect(
            isHistoryRequestCharged({
                endpoint: '/v2/co/afiliaciones',
                code: 'colombia_api_affiliations',
                statusCode: 404,
                apiResponse: { code: 'MissingParameter', message: 'missing documentNumber' },
            })
        ).toBe(true);
        expect(
            isHistoryRequestNotCharged({ endpoint: '/v2/co/afiliaciones', statusCode: 500 })
        ).toBe(true);
        expect(
            isHistoryRequestCharged({
                code: 'colombia_api_vehicle_valuation_sibga',
                endpoint: '/v2/co/sibga/valuation',
                statusCode: 404,
                apiResponse: '{"code":"NotFound","message":"Record not found."}',
            })
        ).toBe(true);
        expect(
            isHistoryRequestNotCharged({
                endpoint: '/v2/co/sibga/valuation',
                statusCode: 404,
                apiResponse: { code: 'Conflict', message: 'upstream' },
            })
        ).toBe(true);
    });

    it('uses the feature code only when the row has no endpoint path', () => {
        expect(
            isHistoryRequestCharged({ code: 'colombia_api_affiliations', statusCode: 404 })
        ).toBe(true);
        expect(
            isHistoryRequestNotCharged({
                code: 'colombia_api_identity_lookup',
                endpoint: '/v2/co/cedula/extra',
                statusCode: 404,
            })
        ).toBe(true);
    });

    it('prefers an explicit charged flag over the endpoint list and the list price', () => {
        expect(
            isHistoryRequestNotCharged({
                ...cedula,
                statusCode: 404,
                apiResponse: { code: 'NotFound', message: 'CEDULA NO EXISTE' },
                charged: false,
            })
        ).toBe(true);
        expect(
            isHistoryRequestCharged({
                status: 'failed',
                statusCode: 500,
                endpoint: '/v2/co/cedula',
                charged: true,
            })
        ).toBe(true);
        expect(
            isHistoryRequestNotCharged({
                status: 'ok',
                statusCode: 200,
                creditsCharged: 0,
                cost: 0.3,
            })
        ).toBe(true);
        expect(
            isHistoryRequestCharged({
                statusCode: 409,
                credits: { charged: true },
                cost: 0.3,
            })
        ).toBe(true);
        expect(
            isHistoryRequestCharged({
                statusCode: 500,
                apiResponse: { billing: { chargedCredits: 2 } },
            })
        ).toBe(true);
    });

    it('keeps an on-chain payment amount visible', () => {
        expect(
            isHistoryRequestCharged({
                status: 'failed',
                statusCode: 500,
                endpoint: '/v2/co/cedula',
                paymentTx: '0xabc',
                paymentAmount: '0.01',
                cost: 0.3,
            })
        ).toBe(true);
    });
});
