/** Keys that commonly hold image payloads in tool/API responses. */
const IMAGE_FIELD_KEYS = new Set([
    'image',
    'imagebase64',
    'base64',
    'file',
    'document',
    'imagedata',
    'image_data',
]);

const BASE64_MIN_LENGTH = 200;
const BASE64_PLACEHOLDER = '[Image attachment]';
const DATA_URL_PREFIX = /^data:image\/[a-z0-9+.-]+;base64,/i;
const RAW_BASE64_PATTERN = /^[A-Za-z0-9+/=\s]+$/;

export interface ChatMessageDisplayInput {
    role: string;
    content: string;
    tool_call?: { tool: string; args: Record<string, unknown> };
    data?: unknown;
    images?: string[];
}

export interface MessageDisplayView {
    displayContent: string;
    displayData: unknown;
    allImages: string[];
    displayToolCall?: { tool: string; args: Record<string, unknown> };
}

/**
 * Returns true when value looks like embedded image base64 (not short arbitrary strings).
 */
export const isLikelyBase64 = (value: unknown): value is string => {
    if (typeof value !== 'string' || value.length < BASE64_MIN_LENGTH) {
        return false;
    }
    const trimmed = value.trim();
    if (DATA_URL_PREFIX.test(trimmed)) {
        return true;
    }
    const payload = trimmed.replace(/\s/g, '');
    return payload.length >= BASE64_MIN_LENGTH && RAW_BASE64_PATTERN.test(payload);
};

/**
 * Normalizes raw or data-URL base64 into a browser-safe data URL for <img src>.
 */
export const toImageDataUrl = (value: string): string => {
    const trimmed = value.trim();
    if (DATA_URL_PREFIX.test(trimmed)) {
        return trimmed;
    }
    const payload = trimmed.replace(/\s/g, '');
    const mime = payload.startsWith('iVBORw0KGgo') ? 'image/png' : 'image/jpeg';
    return `data:${mime};base64,${payload}`;
};

const isImageFieldKey = (key: string): boolean => IMAGE_FIELD_KEYS.has(key.toLowerCase());

/**
 * Deep-clones and redacts base64 image fields; collects extracted image URLs.
 */
export const redactBase64InObject = (
    value: unknown,
    extractedImages: string[],
): unknown => {
    if (value === null || value === undefined) {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map((item) => redactBase64InObject(item, extractedImages));
    }
    if (typeof value !== 'object') {
        return value;
    }
    const result: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
        if (typeof child === 'string' && isImageFieldKey(key) && isLikelyBase64(child)) {
            extractedImages.push(toImageDataUrl(child));
            result[key] = BASE64_PLACEHOLDER;
            continue;
        }
        result[key] = redactBase64InObject(child, extractedImages);
    }
    return result;
};

const tryParseToolJson = (text: string): { tool: string; args: Record<string, unknown> } | null => {
    const trimmed = text.trim();
    if (!trimmed.startsWith('{')) {
        return null;
    }
    try {
        const parsed = JSON.parse(trimmed) as Record<string, unknown>;
        if (typeof parsed.tool === 'string' && parsed.args && typeof parsed.args === 'object') {
            return { tool: parsed.tool, args: parsed.args as Record<string, unknown> };
        }
    } catch {
        /* fall through */
    }
    const match = trimmed.match(/\{[\s\S]*\}/);
    if (!match) {
        return null;
    }
    try {
        const parsed = JSON.parse(match[0]) as Record<string, unknown>;
        if (typeof parsed.tool === 'string' && parsed.args && typeof parsed.args === 'object') {
            return { tool: parsed.tool, args: parsed.args as Record<string, unknown> };
        }
    } catch {
        return null;
    }
    return null;
};

const redactInlineBase64InText = (text: string, extractedImages: string[]): string => {
    const dataUrlPattern =
        /data:image\/[a-z0-9+.-]+;base64,[A-Za-z0-9+/=\s]{200,}/gi;
    let result = text.replace(dataUrlPattern, (match) => {
        extractedImages.push(match.trim());
        return BASE64_PLACEHOLDER;
    });

    const jsonImagePattern =
        /("(?:image|imageBase64|base64|file|document)"\s*:\s*")([A-Za-z0-9+/=\s]{200,})(")/gi;
    result = result.replace(jsonImagePattern, (_full, prefix, payload, suffix) => {
        extractedImages.push(toImageDataUrl(payload));
        return `${prefix}${BASE64_PLACEHOLDER}${suffix}`;
    });

    return result;
};

const formatToolCallSummary = (tool: string, args: Record<string, unknown>): string => {
    const redactedImages: string[] = [];
    const safeArgs = redactBase64InObject(args, redactedImages) as Record<string, unknown>;
    const parts = Object.entries(safeArgs)
        .filter(([, v]) => v !== BASE64_PLACEHOLDER && v !== '' && v != null)
        .map(([k, v]) => `${k} ${typeof v === 'object' ? JSON.stringify(v) : String(v)}`);
    const detail = parts.length > 0 ? ` (${parts.join(', ')})` : '';
    return `Calling **${tool}**${detail}.`;
};

const mergeImages = (existing: string[] | undefined, extra: string[]): string[] => {
    const seen = new Set<string>();
    const out: string[] = [];
    for (const src of [...(existing ?? []), ...extra]) {
        if (!src || seen.has(src)) {
            continue;
        }
        seen.add(src);
        out.push(src);
    }
    return out;
};

/**
 * Builds display-safe content, data, tool_call preview, and image list without mutating the source message.
 */
export const prepareMessageForDisplay = (msg: ChatMessageDisplayInput): MessageDisplayView => {
    const extractedImages: string[] = [];
    let displayContent = msg.content ?? '';
    let displayToolCall: MessageDisplayView['displayToolCall'];

    const parsedFromContent = tryParseToolJson(displayContent);
    if (parsedFromContent) {
        displayContent = formatToolCallSummary(parsedFromContent.tool, parsedFromContent.args);
        const redactedArgs = redactBase64InObject(parsedFromContent.args, extractedImages) as Record<
            string,
            unknown
        >;
        displayToolCall = { tool: parsedFromContent.tool, args: redactedArgs };
    } else {
        displayContent = redactInlineBase64InText(displayContent, extractedImages);
    }

    if (msg.tool_call?.tool) {
        const redactedArgs = redactBase64InObject(msg.tool_call.args, extractedImages) as Record<
            string,
            unknown
        >;
        displayToolCall = { tool: msg.tool_call.tool, args: redactedArgs };
        if (!parsedFromContent && !displayContent.trim()) {
            displayContent = formatToolCallSummary(msg.tool_call.tool, msg.tool_call.args);
        }
    }

    const displayData =
        msg.data !== undefined && msg.data !== null
            ? redactBase64InObject(msg.data, extractedImages)
            : msg.data;

    return {
        displayContent,
        displayData,
        allImages: mergeImages(msg.images, extractedImages),
        displayToolCall,
    };
};
