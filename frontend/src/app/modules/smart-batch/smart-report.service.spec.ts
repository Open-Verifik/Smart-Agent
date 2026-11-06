import { of, throwError } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    extractDisallowedFields,
    omitDisallowedPath,
    ReportSection,
    sanitizeSectionForApi,
    sanitizeTemplateForApi,
    SmartReportService,
    SmartReportTemplate,
    TEMPLATE_WRITE_KEYS,
} from './smart-report.service';

describe('smart-report.service', () => {
    describe('TEMPLATE_WRITE_KEYS & sanitizeTemplateForApi', () => {
        it('includes all valid top-level keys like pageNumberDivider and endpointDesign', () => {
            expect(TEMPLATE_WRITE_KEYS).toContain('pageNumberDivider');
            expect(TEMPLATE_WRITE_KEYS).toContain('endpointDesign');
            expect(TEMPLATE_WRITE_KEYS).toContain('sections');
            expect(TEMPLATE_WRITE_KEYS).toContain('name');
            expect(TEMPLATE_WRITE_KEYS).toContain('pageSize');
            expect(TEMPLATE_WRITE_KEYS).toContain('orientation');
        });

        it('retains pageNumberDivider and endpointDesign while removing disallowed top-level keys', () => {
            const rawTemplate: any = {
                _id: 'tpl_123',
                client: 'cli_456',
                thumbnail: { image: 'data:...' },
                createdAt: '2026-01-01',
                updatedAt: '2026-01-02',
                name: 'Test Template',
                pageNumberDivider: true,
                endpointDesign: {
                    source: 'simulated',
                    endpoints: [{ sequence: 1, appFeatureCode: 'co_runt' }],
                },
                randomGarbageField: 'should_be_stripped',
            };

            const sanitized = sanitizeTemplateForApi(rawTemplate, 'create');
            expect(sanitized._id).toBeUndefined();
            expect(sanitized.client).toBeUndefined();
            expect(sanitized.thumbnail).toBeUndefined();
            expect((sanitized as any).randomGarbageField).toBeUndefined();
            expect(sanitized.name).toBe('Test Template');
            expect(sanitized.pageNumberDivider).toBe(true);
            expect(sanitized.endpointDesign?.source).toBe('simulated');
        });

        it('sanitizes nested sections, frames, and styles, preserving fixedBox and removing transient flags', () => {
            const section: any = {
                id: 'sec_1',
                type: 'field',
                order: 1,
                selected: true,
                isDragging: true,
                frame: {
                    x: 10,
                    y: 20,
                    width: 100,
                    height: 50,
                    fixedBox: true,
                    dragging: true,
                    resizing: false,
                },
                style: {
                    color: '#000000',
                    fontSize: 14,
                    selected: true,
                    isDragging: true,
                },
            };

            const cleaned = sanitizeSectionForApi(section);
            expect(cleaned.id).toBe('sec_1');
            expect((cleaned as any).selected).toBeUndefined();
            expect((cleaned as any).isDragging).toBeUndefined();
            expect(cleaned.frame?.fixedBox).toBe(true);
            expect((cleaned.frame as any)?.dragging).toBeUndefined();
            expect((cleaned.frame as any)?.resizing).toBeUndefined();
            expect(cleaned.style?.color).toBe('#000000');
            expect((cleaned.style as any)?.selected).toBeUndefined();
        });

        it('cleans sections, header, and footer inside sanitizeTemplateForApi', () => {
            const template: any = {
                name: 'Report with sections',
                sections: [
                    {
                        id: 's1',
                        type: 'text',
                        order: 0,
                        selected: true,
                        frame: { x: 0, y: 0, fixedBox: true, transientHelper: 123 },
                    },
                ],
                header: {
                    id: 'hdr',
                    type: 'header',
                    order: 0,
                    active: true,
                },
            };

            const sanitized = sanitizeTemplateForApi(template, 'create');
            expect((sanitized.sections![0] as any).selected).toBeUndefined();
            expect(sanitized.sections![0].frame?.fixedBox).toBe(true);
            expect((sanitized.sections![0].frame as any).transientHelper).toBeUndefined();
            expect((sanitized.header as any).active).toBeUndefined();
        });
    });

    describe('extractDisallowedFields & omitDisallowedPath', () => {
        it('extracts field names from Joi validation error text', () => {
            const error1 = { error: { message: '"disallowedProperty" is not allowed' } };
            expect(extractDisallowedFields(error1)).toEqual(['disallowedProperty']);

            const error2 = {
                error: {
                    message: '"fixedBox" is not allowed. "sections[0].extraKey" is not allowed',
                },
            };
            expect(extractDisallowedFields(error2)).toEqual(['fixedBox', 'sections[0].extraKey']);
        });

        it('omits disallowed fields at root and inside nested sections', () => {
            const payload: any = {
                name: 'Template',
                unknownRoot: 'bad',
                sections: [
                    {
                        id: 'sec1',
                        frame: {
                            x: 0,
                            y: 0,
                            fixedBox: true,
                        },
                    },
                ],
            };

            expect(omitDisallowedPath(payload, 'unknownRoot')).toBe(true);
            expect(payload.unknownRoot).toBeUndefined();

            expect(omitDisallowedPath(payload, 'sections.0.frame.fixedBox')).toBe(true);
            expect(payload.sections[0].frame.fixedBox).toBeUndefined();
        });

        it('finds and omits nested fields by name across sections if path is single key', () => {
            const payload: any = {
                name: 'Template',
                sections: [
                    {
                        id: 'sec1',
                        transientUIState: true,
                    },
                ],
            };

            expect(omitDisallowedPath(payload, 'transientUIState')).toBe(true);
            expect(payload.sections[0].transientUIState).toBeUndefined();
        });
    });

    describe('createTemplate and updateTemplate automatic retry on 409/400', () => {
        let httpClientMock: any;
        let service: SmartReportService;

        beforeEach(() => {
            httpClientMock = {
                post: vi.fn(),
                put: vi.fn(),
                get: vi.fn(),
                delete: vi.fn(),
            };
            service = new SmartReportService(httpClientMock);
        });

        it('automatically retries createTemplate after stripping disallowed fields on 409', async () => {
            const initialPayload: Partial<SmartReportTemplate> = {
                name: 'New Template',
                sections: [
                    {
                        id: 's1',
                        type: 'text',
                        order: 0,
                        frame: { x: 0, y: 0, fixedBox: true },
                    },
                ],
            };

            const failureResponse = {
                status: 409,
                error: { message: '"fixedBox" is not allowed' },
            };

            const successResult = {
                data: {
                    _id: 'created_123',
                    name: 'New Template',
                },
            };

            // First call fails with 409, second call succeeds
            httpClientMock.post
                .mockReturnValueOnce(throwError(() => failureResponse))
                .mockReturnValueOnce(of(successResult));

            const result = await new Promise((resolve, reject) => {
                service.createTemplate(initialPayload).subscribe({
                    next: resolve,
                    error: reject,
                });
            });

            expect(httpClientMock.post).toHaveBeenCalledTimes(2);
            // Verify second call had fixedBox omitted
            const secondCallBody = httpClientMock.post.mock.calls[1][1];
            expect(secondCallBody.sections[0].frame.fixedBox).toBeUndefined();
            expect(result).toEqual(successResult.data);
        });

        it('automatically retries updateTemplate after stripping disallowed fields on 400', async () => {
            const updatePayload: Partial<SmartReportTemplate> = {
                name: 'Updated Template',
                sections: [
                    {
                        id: 's1',
                        type: 'text',
                        order: 0,
                        frame: { x: 0, y: 0, fixedBox: true },
                    },
                ],
            };

            const failureResponse = {
                status: 400,
                error: { message: '"sections.0.frame.fixedBox" is not allowed' },
            };

            const successResult = {
                data: {
                    _id: 'updated_123',
                    name: 'Updated Template',
                },
            };

            httpClientMock.put
                .mockReturnValueOnce(throwError(() => failureResponse))
                .mockReturnValueOnce(of(successResult));

            const result = await new Promise((resolve, reject) => {
                service.updateTemplate('updated_123', updatePayload).subscribe({
                    next: resolve,
                    error: reject,
                });
            });

            expect(httpClientMock.put).toHaveBeenCalledTimes(2);
            const secondCallBody = httpClientMock.put.mock.calls[1][1];
            expect(secondCallBody.sections[0].frame.fixedBox).toBeUndefined();
            expect(result).toEqual(successResult.data);
        });
    });
});
