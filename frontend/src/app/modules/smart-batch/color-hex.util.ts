/** `#rrggbb`, or `#rrggbbaa` when the color is not fully opaque. */
export const normalizeHexColor = (
    raw: string | null | undefined,
    options?: { allowShort?: boolean }
): string | null => {
    if (raw == null) return null;
    let value = raw.trim();
    if (!value) return null;
    if (value.startsWith('0x') || value.startsWith('0X')) value = value.slice(2);
    if (value[0] !== '#') value = `#${value}`;
    if (options?.allowShort !== false) {
        if (/^#([0-9a-f]{3})$/i.test(value)) {
            const short = value.slice(1);
            value = `#${short[0]}${short[0]}${short[1]}${short[1]}${short[2]}${short[2]}`;
        }
        if (/^#([0-9a-f]{4})$/i.test(value)) {
            const short = value.slice(1);
            value = `#${short[0]}${short[0]}${short[1]}${short[1]}${short[2]}${short[2]}${short[3]}${short[3]}`;
        }
    }
    if (!/^#[0-9a-f]{6}([0-9a-f]{2})?$/i.test(value)) return null;
    value = value.toLowerCase();
    if (value.length === 9 && value.slice(7) === 'ff') return value.slice(0, 7);
    return value;
};
