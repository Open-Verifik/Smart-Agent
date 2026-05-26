import { describe, expect, it } from 'vitest';
import {
    CHAT_IMAGE_MAX_SOURCE_FILE_BYTES,
    CHAT_IMAGE_TARGET_DATA_URL_BYTES,
    computeScaledDimensions,
    estimateChatPayloadBytes,
    estimateDataUrlByteSize,
    isSupportedChatImageFile,
} from './chat-image-prepare.util';

describe('chat-image-prepare.util', () => {
    describe('estimateDataUrlByteSize', () => {
        it('counts base64 payload length after comma', () => {
            const dataUrl = 'data:image/jpeg;base64,' + 'A'.repeat(100);
            expect(estimateDataUrlByteSize(dataUrl)).toBe(100);
        });
    });

    describe('isSupportedChatImageFile', () => {
        it('accepts jpeg mime type', () => {
            const file = new File(['x'], 'photo.jpg', { type: 'image/jpeg' });
            expect(isSupportedChatImageFile(file)).toBe(true);
        });

        it('rejects pdf', () => {
            const file = new File(['x'], 'doc.pdf', { type: 'application/pdf' });
            expect(isSupportedChatImageFile(file)).toBe(false);
        });

        it('accepts extension when mime is empty', () => {
            const file = new File(['x'], 'photo.png', { type: '' });
            expect(isSupportedChatImageFile(file)).toBe(true);
        });
    });

    describe('computeScaledDimensions', () => {
        it('keeps dimensions when under max long edge', () => {
            expect(computeScaledDimensions(800, 600, 1920)).toEqual({
                drawWidth: 800,
                drawHeight: 600,
            });
        });

        it('scales down preserving aspect ratio', () => {
            const scaled = computeScaledDimensions(4000, 3000, 1920);
            expect(scaled.drawWidth).toBe(1920);
            expect(scaled.drawHeight).toBe(1440);
        });
    });

    describe('estimateChatPayloadBytes', () => {
        it('includes json overhead', () => {
            const urls = ['data:image/jpeg;base64,' + 'B'.repeat(1000)];
            expect(estimateChatPayloadBytes(urls)).toBeGreaterThan(1000);
        });
    });

    describe('constants', () => {
        it('target is below typical 1mb proxy limit', () => {
            expect(CHAT_IMAGE_TARGET_DATA_URL_BYTES).toBeLessThan(1_000_000);
        });

        it('max source allows large camera photos before reject', () => {
            expect(CHAT_IMAGE_MAX_SOURCE_FILE_BYTES).toBeGreaterThan(10 * 1024 * 1024);
        });
    });
});
