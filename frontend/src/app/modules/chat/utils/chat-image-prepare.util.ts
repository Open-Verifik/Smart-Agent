/**
 * Limits and targets for chat image uploads (JSON body must stay under nginx/koa ~1MB).
 */
export const CHAT_IMAGE_MAX_SOURCE_FILE_BYTES = 15 * 1024 * 1024;
export const CHAT_IMAGE_MAX_LONG_EDGE_PX = 1920;
export const CHAT_IMAGE_MIN_LONG_EDGE_PX = 800;
export const CHAT_IMAGE_TARGET_DATA_URL_BYTES = 700_000;
/** Max total estimated bytes for all attachments + JSON overhead in one send. */
export const CHAT_IMAGE_MAX_PAYLOAD_BYTES = 950_000;
export const CHAT_IMAGE_JSON_OVERHEAD_BYTES = 8_000;
export const CHAT_IMAGE_JPEG_QUALITIES = [0.85, 0.75, 0.65, 0.55, 0.45, 0.35] as const;
export const CHAT_IMAGE_LONG_EDGE_SCALE_FACTOR = 0.85;

const SUPPORTED_MIME_TYPES = new Set([
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
]);
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

export type ChatImagePrepareErrorCode =
    | 'unsupported_format'
    | 'source_too_large'
    | 'still_too_large'
    | 'decode_failed';

export class ChatImagePrepareError extends Error {
    readonly code: ChatImagePrepareErrorCode;
    readonly maxBytes?: number;
    readonly actualBytes?: number;

    constructor(
        code: ChatImagePrepareErrorCode,
        message: string,
        options?: { maxBytes?: number; actualBytes?: number },
    ) {
        super(message);
        this.name = 'ChatImagePrepareError';
        this.code = code;
        this.maxBytes = options?.maxBytes;
        this.actualBytes = options?.actualBytes;
    }
}

export interface ChatImagePrepareResult {
    dataUrl: string;
    originalSizeKb: number;
    compressedSizeKb: number;
}

/**
 * Approximate byte size of a data URL string as it will appear in JSON (ASCII base64).
 * @param dataUrl - `data:image/...;base64,...` string.
 */
export const estimateDataUrlByteSize = (dataUrl: string): number => {
    if (!dataUrl?.startsWith('data:')) {
        return dataUrl?.length ?? 0;
    }
    const commaIndex = dataUrl.indexOf(',');
    if (commaIndex < 0) {
        return dataUrl.length;
    }
    const base64Payload = dataUrl.slice(commaIndex + 1);
    return base64Payload.length;
};

/**
 * True when the file is a browser-decodable image type we allow in chat.
 * @param sourceFile - File from input, paste, or drag-drop.
 */
export const isSupportedChatImageFile = (sourceFile: File): boolean => {
    if (SUPPORTED_MIME_TYPES.has(sourceFile.type)) {
        return true;
    }
    const extension = '.' + (sourceFile.name.split('.').pop()?.toLowerCase() ?? '');
    return SUPPORTED_EXTENSIONS.has(extension);
};

/**
 * Target canvas dimensions preserving aspect ratio with long edge capped.
 * @param naturalWidth - Source image width in pixels.
 * @param naturalHeight - Source image height in pixels.
 * @param maxLongEdgePx - Maximum allowed long edge.
 */
export const computeScaledDimensions = (
    naturalWidth: number,
    naturalHeight: number,
    maxLongEdgePx: number,
): { drawWidth: number; drawHeight: number } => {
    if (naturalWidth <= 0 || naturalHeight <= 0) {
        return { drawWidth: 1, drawHeight: 1 };
    }
    const longEdge = Math.max(naturalWidth, naturalHeight);
    if (longEdge <= maxLongEdgePx) {
        return { drawWidth: naturalWidth, drawHeight: naturalHeight };
    }
    const scale = maxLongEdgePx / longEdge;
    return {
        drawWidth: Math.max(1, Math.round(naturalWidth * scale)),
        drawHeight: Math.max(1, Math.round(naturalHeight * scale)),
    };
};

const loadImageElement = (objectUrl: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new ChatImagePrepareError('decode_failed', 'Failed to decode image'));
        img.src = objectUrl;
    });

const canvasToJpegBlob = (
    canvas: HTMLCanvasElement,
    jpegQuality: number,
): Promise<Blob | null> =>
    new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob), 'image/jpeg', jpegQuality);
    });

const blobToDataUrl = (blob: Blob): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new ChatImagePrepareError('decode_failed', 'Failed to read compressed image'));
        reader.readAsDataURL(blob);
    });

const renderJpegDataUrl = async (
    imageElement: HTMLImageElement,
    drawWidth: number,
    drawHeight: number,
    jpegQuality: number,
): Promise<string> => {
    const canvas = document.createElement('canvas');
    canvas.width = drawWidth;
    canvas.height = drawHeight;
    const context = canvas.getContext('2d');
    if (!context) {
        throw new ChatImagePrepareError('decode_failed', 'Canvas not supported');
    }
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, drawWidth, drawHeight);
    context.drawImage(imageElement, 0, 0, drawWidth, drawHeight);
    const jpegBlob = await canvasToJpegBlob(canvas, jpegQuality);
    if (!jpegBlob) {
        throw new ChatImagePrepareError('decode_failed', 'Failed to compress image');
    }
    return blobToDataUrl(jpegBlob);
};

/**
 * Resize and re-encode an image for chat upload; iterates quality and size until under target.
 * @param sourceFile - Original image file from the user.
 */
export const prepareChatImageAttachment = async (
    sourceFile: File,
): Promise<ChatImagePrepareResult> => {
    if (!isSupportedChatImageFile(sourceFile)) {
        throw new ChatImagePrepareError(
            'unsupported_format',
            'Unsupported image format',
        );
    }
    if (sourceFile.size > CHAT_IMAGE_MAX_SOURCE_FILE_BYTES) {
        throw new ChatImagePrepareError(
            'source_too_large',
            'Image file is too large',
            { maxBytes: CHAT_IMAGE_MAX_SOURCE_FILE_BYTES, actualBytes: sourceFile.size },
        );
    }

    const objectUrl = URL.createObjectURL(sourceFile);
    try {
        const imageElement = await loadImageElement(objectUrl);
        let maxLongEdgePx = CHAT_IMAGE_MAX_LONG_EDGE_PX;
        let bestDataUrl: string | null = null;
        let bestByteSize = Number.POSITIVE_INFINITY;

        while (maxLongEdgePx >= CHAT_IMAGE_MIN_LONG_EDGE_PX) {
            const { drawWidth, drawHeight } = computeScaledDimensions(
                imageElement.naturalWidth,
                imageElement.naturalHeight,
                maxLongEdgePx,
            );

            for (const jpegQuality of CHAT_IMAGE_JPEG_QUALITIES) {
                const candidateDataUrl = await renderJpegDataUrl(
                    imageElement,
                    drawWidth,
                    drawHeight,
                    jpegQuality,
                );
                const candidateByteSize = estimateDataUrlByteSize(candidateDataUrl);
                if (candidateByteSize < bestByteSize) {
                    bestByteSize = candidateByteSize;
                    bestDataUrl = candidateDataUrl;
                }
                if (candidateByteSize <= CHAT_IMAGE_TARGET_DATA_URL_BYTES) {
                    return {
                        dataUrl: candidateDataUrl,
                        originalSizeKb: Math.round(sourceFile.size / 1024),
                        compressedSizeKb: Math.round(candidateByteSize / 1024),
                    };
                }
            }

            maxLongEdgePx = Math.floor(maxLongEdgePx * CHAT_IMAGE_LONG_EDGE_SCALE_FACTOR);
        }

        if (bestDataUrl && bestByteSize <= CHAT_IMAGE_TARGET_DATA_URL_BYTES) {
            return {
                dataUrl: bestDataUrl,
                originalSizeKb: Math.round(sourceFile.size / 1024),
                compressedSizeKb: Math.round(bestByteSize / 1024),
            };
        }

        throw new ChatImagePrepareError(
            'still_too_large',
            'Image could not be compressed enough for upload',
            {
                maxBytes: CHAT_IMAGE_TARGET_DATA_URL_BYTES,
                actualBytes: bestByteSize === Number.POSITIVE_INFINITY ? 0 : bestByteSize,
            },
        );
    } finally {
        URL.revokeObjectURL(objectUrl);
    }
};

/**
 * Sum of attachment data URL sizes plus rough JSON wrapper overhead.
 * @param attachmentDataUrls - Pending chat attachments.
 */
export const estimateChatPayloadBytes = (attachmentDataUrls: string[]): number => {
    const attachmentsTotal = attachmentDataUrls.reduce(
        (sum, dataUrl) => sum + estimateDataUrlByteSize(dataUrl),
        0,
    );
    return attachmentsTotal + CHAT_IMAGE_JSON_OVERHEAD_BYTES;
};
