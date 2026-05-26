import { describe, expect, it } from 'vitest';
import {
    isLikelyBase64,
    prepareMessageForDisplay,
    redactBase64InObject,
    toImageDataUrl,
} from './chat-message-display.util';

const LONG_B64 = 'A'.repeat(250);

describe('chat-message-display.util', () => {
    describe('isLikelyBase64', () => {
        it('returns false for short strings', () => {
            expect(isLikelyBase64('abc')).toBe(false);
        });

        it('returns true for long base64 payloads', () => {
            expect(isLikelyBase64(LONG_B64)).toBe(true);
        });

        it('returns true for data URLs', () => {
            expect(isLikelyBase64(`data:image/png;base64,${LONG_B64}`)).toBe(true);
        });
    });

    describe('toImageDataUrl', () => {
        it('prefixes raw base64 with image/jpeg by default', () => {
            expect(toImageDataUrl(LONG_B64)).toBe(`data:image/jpeg;base64,${LONG_B64}`);
        });

        it('uses image/png when payload starts with PNG magic', () => {
            const png = `iVBORw0KGgo${'A'.repeat(200)}`;
            expect(toImageDataUrl(png)).toContain('data:image/png;base64,');
        });
    });

    describe('redactBase64InObject', () => {
        it('redacts image fields and collects data URLs', () => {
            const images: string[] = [];
            const out = redactBase64InObject({ image: LONG_B64, name: 'DIAN' }, images) as Record<
                string,
                unknown
            >;
            expect(out.image).toBe('[Image attachment]');
            expect(out.name).toBe('DIAN');
            expect(images.length).toBe(1);
            expect(images[0]).toContain('data:image/jpeg;base64,');
        });
    });

    describe('prepareMessageForDisplay', () => {
        it('summarizes tool JSON in content instead of raw base64', () => {
            const payload = JSON.stringify({
                tool: 'ocr_scan_pro',
                args: { documentType: 'DIAN', country: 'Colombia', image: LONG_B64 },
            });
            const view = prepareMessageForDisplay({
                role: 'assistant',
                content: payload,
            });
            expect(view.displayContent).toContain('ocr_scan_pro');
            expect(view.displayContent).not.toContain(LONG_B64);
            expect(view.allImages.length).toBe(1);
        });

        it('redacts tool_call args for display without requiring content parse', () => {
            const view = prepareMessageForDisplay({
                role: 'assistant',
                content: 'I need to perform a paid action.',
                tool_call: {
                    tool: 'ocr_scan_gpt',
                    args: { image: LONG_B64, country: 'Colombia' },
                },
            });
            expect(view.displayToolCall?.args.image).toBe('[Image attachment]');
            expect(view.allImages.length).toBe(1);
        });

        it('redacts base64 inside msg.data', () => {
            const view = prepareMessageForDisplay({
                role: 'assistant',
                content: 'Tool executed successfully.',
                data: { result: { image: LONG_B64, text: 'ok' } },
            });
            const data = view.displayData as { result: { image: string; text: string } };
            expect(data.result.image).toBe('[Image attachment]');
            expect(data.result.text).toBe('ok');
            expect(view.allImages.length).toBe(1);
        });

        it('merges existing image URLs with extracted ones', () => {
            const view = prepareMessageForDisplay({
                role: 'user',
                content: 'hello',
                images: ['/api/uploads/foo.png'],
                tool_call: { tool: 't', args: { image: LONG_B64 } },
            });
            expect(view.allImages).toContain('/api/uploads/foo.png');
            expect(view.allImages.length).toBe(2);
        });
    });
});
