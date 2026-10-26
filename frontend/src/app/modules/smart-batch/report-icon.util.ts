/**
 * SVG icons placed on the report sheet.
 *
 * The section stores a cleaned, standalone `<svg>` string. Color is applied when
 * rendering, so the same markup can be recolored without fetching it again. The
 * backend has its own copy of the cleaning and coloring rules for the PDF.
 */

export interface ReportIconSet {
    id: string;
    labelKey: string;
    url: string;
}

export interface ReportIconChoice {
    /** `set:name` for built-in icons, `prefix:name` for Iconify, `upload:file` for files. */
    name: string;
    svg: string;
}

/** Sprite files already shipped with the app (see `IconsService`). */
export const REPORT_ICON_SETS: ReportIconSet[] = [
    { id: 'mat_solid', labelKey: 'reportIcons.setMaterialSolid', url: 'icons/material-solid.svg' },
    { id: 'mat_outline', labelKey: 'reportIcons.setMaterialOutline', url: 'icons/material-outline.svg' },
    { id: 'heroicons_outline', labelKey: 'reportIcons.setHeroOutline', url: 'icons/heroicons-outline.svg' },
    { id: 'heroicons_solid', labelKey: 'reportIcons.setHeroSolid', url: 'icons/heroicons-solid.svg' },
    { id: 'feather', labelKey: 'reportIcons.setFeather', url: 'icons/feather.svg' },
];

export const ICONIFY_API = 'https://api.iconify.design';

/** Stored markup larger than this is refused; it keeps the template document small. */
export const REPORT_ICON_MAX_LENGTH = 60_000;

const SVG_NS = 'http://www.w3.org/2000/svg';

const BLOCKED_TAGS = new Set([
    'script',
    'foreignobject',
    'iframe',
    'object',
    'embed',
    'audio',
    'video',
    'canvas',
    'set',
    'animate',
    'animatemotion',
    'animatetransform',
    'handler',
    'listener',
]);

const COLOR_PATTERN = /^(#[0-9a-f]{3,8}|rgba?\([\d\s.,%]+\)|hsla?\([\d\s.,%deg]+\)|[a-z]{3,20})$/i;

/** A CSS color that is safe to write into an SVG attribute. */
export function safeIconColor(value: string | null | undefined, fallback = '#111827'): string {
    const color = String(value ?? '').trim();

    return COLOR_PATTERN.test(color) ? color : fallback;
}

const _isSafeHref = (value: string): boolean => {
    const href = value.trim().toLowerCase();

    return href.startsWith('#') || /^data:image\/(png|jpe?g|gif|webp);base64,/.test(href);
};

const _cleanStyleText = (value: string): string =>
    value
        .replace(/@import[^;]*;?/gi, '')
        .replace(/expression\s*\(/gi, '')
        .replace(/url\(\s*(['"]?)(?!#)[^)]*\1\s*\)/gi, 'none');

/**
 * Parse any SVG text, drop anything that can run code or load remote content, and
 * return a standalone `<svg>` that fills its box. Ids and classes get a unique
 * prefix so two icons on the same sheet cannot restyle each other.
 */
export function sanitizeIconSvg(raw: string): string | null {
    if (!raw || typeof DOMParser === 'undefined') return null;

    const doc = new DOMParser().parseFromString(raw, 'image/svg+xml');
    const root = doc.documentElement;

    if (!root || root.nodeName.toLowerCase() !== 'svg' || doc.getElementsByTagName('parsererror').length) {
        return null;
    }

    const prefix = `i${Math.random().toString(36).slice(2, 8)}-`;
    const walk = (element: Element): void => {
        for (const child of Array.from(element.children)) {
            if (BLOCKED_TAGS.has(child.nodeName.toLowerCase())) {
                child.remove();
                continue;
            }
            walk(child);
        }

        for (const attribute of Array.from(element.attributes)) {
            const name = attribute.name.toLowerCase();

            if (name.startsWith('on')) {
                element.removeAttribute(attribute.name);
                continue;
            }

            if ((name === 'href' || name === 'xlink:href') && !_isSafeHref(attribute.value)) {
                element.removeAttribute(attribute.name);
                continue;
            }

            if (name === 'style') {
                element.setAttribute('style', _cleanStyleText(attribute.value));
            }
        }

        if (element.nodeName.toLowerCase() === 'style') {
            element.textContent = _cleanStyleText(element.textContent ?? '');
        }
    };

    walk(root);

    let markup = new XMLSerializer().serializeToString(_standalone(root));

    markup = _prefixReferences(markup, prefix);

    return markup.length <= REPORT_ICON_MAX_LENGTH ? markup : null;
}

/** Root `<svg>` that scales to its box and keeps the drawing's own coordinates. */
function _standalone(root: Element): Element {
    const svg = root.cloneNode(true) as Element;

    if (!svg.getAttribute('viewBox')) {
        const width = parseFloat(svg.getAttribute('width') ?? '');
        const height = parseFloat(svg.getAttribute('height') ?? '');

        svg.setAttribute('viewBox', `0 0 ${width > 0 ? width : 24} ${height > 0 ? height : 24}`);
    }

    for (const name of ['width', 'height', 'x', 'y', 'id', 'class', 'style', 'aria-hidden']) {
        svg.removeAttribute(name);
    }

    svg.setAttribute('xmlns', SVG_NS);
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    return svg;
}

function _prefixReferences(markup: string, prefix: string): string {
    return markup
        .replace(/\sid="([^"]+)"/g, (_m, id) => ` id="${prefix}${id}"`)
        .replace(/url\(\s*#([^)\s]+)\s*\)/g, (_m, id) => `url(#${prefix}${id})`)
        .replace(/(\s(?:xlink:)?href)="#([^"]+)"/g, (_m, attr, id) => `${attr}="#${prefix}${id}"`)
        .replace(/\sclass="([^"]+)"/g, (_m, names: string) =>
            ` class="${names
                .split(/\s+/)
                .filter(Boolean)
                .map((name) => `${prefix}${name}`)
                .join(' ')}"`
        )
        .replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/g, (_m, open, css: string, close) =>
            `${open}${css.replace(/\.(-?[_a-zA-Z][\w-]*)/g, `.${prefix}$1`)}${close}`
        );
}

/**
 * One-color icons take the chosen color on every painted fill and stroke.
 * `keepColors` leaves multicolor artwork (logos, flags) untouched.
 */
export function colorIconSvg(svg: string, color: string, keepColors = false): string {
    if (!svg || keepColors) return svg;

    const paint = safeIconColor(color);
    const unpainted = (value: string) => /^(none|transparent)$/i.test(value.trim());

    return svg
        .replace(/(\s(?:fill|stroke))\s*=\s*"([^"]*)"/gi, (match, attr, value) =>
            unpainted(value) ? match : `${attr}="${paint}"`
        )
        .replace(/((?:^|[;{\s"])(?:fill|stroke))\s*:\s*([^;"}]+)/gi, (match, prop, value) =>
            unpainted(value) ? match : `${prop}:${paint}`
        )
        .replace(/<svg\b([^>]*)>/i, (match, attrs: string) =>
            /\sfill\s*=/.test(attrs) ? match : `<svg${attrs} fill="${paint}">`
        );
}

const _spriteCache = new Map<string, Promise<Document>>();

function _loadSprite(set: ReportIconSet): Promise<Document> {
    let pending = _spriteCache.get(set.id);

    if (!pending) {
        pending = fetch(set.url)
            .then((response) => {
                if (!response.ok) throw new Error(`icons ${response.status}`);
                return response.text();
            })
            .then((text) => new DOMParser().parseFromString(text, 'image/svg+xml'));
        pending.catch(() => _spriteCache.delete(set.id));
        _spriteCache.set(set.id, pending);
    }

    return pending;
}

/** Icon ids inside a built-in sprite, in file order. */
export async function listSpriteIcons(set: ReportIconSet): Promise<string[]> {
    const doc = await _loadSprite(set);

    return Array.from(doc.querySelectorAll('symbol[id], defs > svg[id]'))
        .map((node) => node.getAttribute('id') || '')
        .filter(Boolean);
}

/** Standalone, unsanitized SVG for one sprite entry. */
export async function spriteIconSvg(set: ReportIconSet, id: string): Promise<string | null> {
    const doc = await _loadSprite(set);
    const node = Array.from(doc.querySelectorAll('symbol[id], defs > svg[id]')).find(
        (item) => item.getAttribute('id') === id
    );

    if (!node) return null;

    const svg = doc.createElementNS(SVG_NS, 'svg');

    for (const attribute of Array.from(node.attributes)) {
        if (attribute.name !== 'id') svg.setAttribute(attribute.name, attribute.value);
    }

    svg.innerHTML = node.innerHTML;

    return new XMLSerializer().serializeToString(svg);
}

/** Iconify search. Results are `prefix:name` ids. */
export async function searchIconify(query: string, limit = 96, prefixes?: string): Promise<string[]> {
    const term = query.trim();

    if (!term) return [];

    const scope = prefixes ? `&prefixes=${encodeURIComponent(prefixes)}` : '';
    const response = await fetch(`${ICONIFY_API}/search?query=${encodeURIComponent(term)}&limit=${limit}${scope}`);

    if (!response.ok) throw new Error(`iconify ${response.status}`);

    const body = (await response.json()) as { icons?: string[] };

    return Array.isArray(body.icons) ? body.icons : [];
}

export function iconifyPreviewUrl(id: string): string {
    const [prefix, name] = id.split(':');

    return `${ICONIFY_API}/${encodeURIComponent(prefix)}/${encodeURIComponent(name)}.svg`;
}

export async function iconifySvg(id: string): Promise<string | null> {
    const response = await fetch(iconifyPreviewUrl(id));

    return response.ok ? response.text() : null;
}
