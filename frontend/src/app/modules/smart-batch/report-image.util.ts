const SVG_DATA_URL = /^data:image\/svg\+xml(;[^,]*)?,/i;

function decodeSvgDataUrl(src: string): string | null {
    const match = SVG_DATA_URL.exec(src);
    if (!match) return null;
    const body = src.slice(match[0].length);
    try {
        if ((match[1] ?? '').toLowerCase().includes(';base64')) {
            const bytes = Uint8Array.from(atob(body), (char) => char.charCodeAt(0));
            return new TextDecoder().decode(bytes);
        }
        return decodeURIComponent(body);
    } catch {
        return null;
    }
}

function encodeSvgDataUrl(markup: string): string {
    const bytes = new TextEncoder().encode(markup);
    let binary = '';
    bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
    return `data:image/svg+xml;base64,${btoa(binary)}`;
}

function svgLength(value: string | null): number {
    if (!value || value.trim().endsWith('%')) return 0;
    const number = parseFloat(value);
    return Number.isFinite(number) && number > 0 ? number : 0;
}

/**
 * An SVG with `width`/`height` but no `viewBox` paints at its own size inside
 * an `<img>`, so a bigger or smaller box crops it instead of scaling it.
 * Adds the missing `viewBox`; any other image comes back unchanged.
 */
export function scalableImageSrc(src: string): string {
    const markup = decodeSvgDataUrl(src);
    if (!markup) return src;
    const doc = new DOMParser().parseFromString(markup, 'image/svg+xml');
    const root = doc.documentElement;
    if (root.nodeName.toLowerCase() !== 'svg' || doc.querySelector('parsererror')) return src;
    let changed = false;
    if (!root.getAttribute('viewBox')) {
        const width = svgLength(root.getAttribute('width'));
        const height = svgLength(root.getAttribute('height'));
        if (!width || !height) return src;
        root.setAttribute('viewBox', `0 0 ${width} ${height}`);
        changed = true;
    }
    if (root.getAttribute('preserveAspectRatio') === 'none') {
        root.removeAttribute('preserveAspectRatio');
        changed = true;
    }
    return changed ? encodeSvgDataUrl(new XMLSerializer().serializeToString(root)) : src;
}

/** Width / height of an image, or null when the browser cannot tell. */
export function imageAspectRatio(src: string): Promise<number | null> {
    return new Promise((resolve) => {
        const image = new Image();
        image.onload = () =>
            resolve(image.naturalWidth > 0 && image.naturalHeight > 0 ? image.naturalWidth / image.naturalHeight : null);
        image.onerror = () => resolve(null);
        image.src = src;
    });
}
