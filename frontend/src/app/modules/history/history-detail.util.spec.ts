import { extractConsultedDocument, normalizeHistoryDetail } from './history-detail.util';
import { ApiRequest } from './history.service';

describe('history-detail.util', () => {
    const baseRow: ApiRequest = {
        _id: 'row-1',
        project: 'p',
        endpoint: '/v2/co/cedula',
        code: 'colombia_api_identity_lookup',
        params: { documentNumber: '123456789' },
        method: 'GET',
        status: 'ok',
        statusCode: 200,
        duration: 10,
        createdAt: '2026-10-01T00:00:00.000Z',
        client: 'client-1',
    };

    it('maps backend response field to apiResponse', () => {
        const detail = normalizeHistoryDetail(baseRow, {
            response: { data: { documentNumber: '123456789' } },
        });

        expect(detail.apiResponse).toEqual({ data: { documentNumber: '123456789' } });
    });

    it('keeps list params when detail omits them', () => {
        const detail = normalizeHistoryDetail(baseRow, { statusCode: 404 });

        expect(detail.params).toEqual({ documentNumber: '123456789' });
    });

    it('extracts consulted document from common param keys', () => {
        expect(extractConsultedDocument({ documentNumber: ' 99887766 ' })).toBe('99887766');
        expect(extractConsultedDocument({ plate: 'ABC123' })).toBe('ABC123');
        expect(extractConsultedDocument(null)).toBeNull();
    });
});
