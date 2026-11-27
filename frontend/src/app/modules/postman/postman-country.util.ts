import { ApiEndpoint } from './postman.types';

/** ISO 3166-1 alpha-2 (lowercase in URL) or "world" for globe icon — not emoji (Windows often shows "US" instead of 🇺🇸). */
export const POSTMAN_COUNTRY_ISO: Record<string, 'world' | string> = {
    world: 'world',
    Global: 'world',
    World: 'world',
    Argentina: 'ar',
    Australia: 'au',
    Austria: 'at',
    Azerbaijan: 'az',
    Belarus: 'by',
    Belgium: 'be',
    Bolivia: 'bo',
    Brazil: 'br',
    Bulgaria: 'bg',
    Canada: 'ca',
    Chile: 'cl',
    China: 'cn',
    Colombia: 'co',
    'Costa Rica': 'cr',
    Croatia: 'hr',
    Cuba: 'cu',
    Cyprus: 'cy',
    'Czech Republic': 'cz',
    Czechia: 'cz',
    Denmark: 'dk',
    'Dominican Republic': 'do',
    'República Dominicana': 'do',
    'Republica Dominicana': 'do',
    Ecuador: 'ec',
    Egypt: 'eg',
    'El Salvador': 'sv',
    Estonia: 'ee',
    'European Union': 'eu',
    Europe: 'eu',
    Finland: 'fi',
    France: 'fr',
    Georgia: 'ge',
    Germany: 'de',
    Greece: 'gr',
    Guatemala: 'gt',
    Guernsey: 'gg',
    Honduras: 'hn',
    'Hong Kong': 'hk',
    Hungary: 'hu',
    Iceland: 'is',
    India: 'in',
    Indonesia: 'id',
    Iran: 'ir',
    Ireland: 'ie',
    'Isle of Man': 'im',
    Israel: 'il',
    Italy: 'it',
    Jamaica: 'jm',
    Japan: 'jp',
    Kazakhstan: 'kz',
    Kenya: 'ke',
    Kyrgyzstan: 'kg',
    Latvia: 'lv',
    Lithuania: 'lt',
    Luxembourg: 'lu',
    Malaysia: 'my',
    Malta: 'mt',
    Mexico: 'mx',
    Moldova: 'md',
    Monaco: 'mc',
    Morocco: 'ma',
    Nepal: 'np',
    Netherlands: 'nl',
    'The Netherlands': 'nl',
    'New Zealand': 'nz',
    Nicaragua: 'ni',
    Nigeria: 'ng',
    Norway: 'no',
    Pakistan: 'pk',
    Palestine: 'ps',
    Panama: 'pa',
    Paraguay: 'py',
    Peru: 'pe',
    Philippines: 'ph',
    Poland: 'pl',
    Portugal: 'pt',
    'Puerto Rico': 'pr',
    Qatar: 'qa',
    Romania: 'ro',
    Russia: 'ru',
    'Saudi Arabia': 'sa',
    Serbia: 'rs',
    Singapore: 'sg',
    Slovakia: 'sk',
    Slovenia: 'si',
    'South Africa': 'za',
    'South Korea': 'kr',
    Spain: 'es',
    Sweden: 'se',
    Switzerland: 'ch',
    Taiwan: 'tw',
    Thailand: 'th',
    'Trinidad and Tobago': 'tt',
    'Trinidad & Tobago': 'tt',
    Turkey: 'tr',
    Türkiye: 'tr',
    Ukraine: 'ua',
    'United Arab Emirates': 'ae',
    UAE: 'ae',
    'United Kingdom': 'gb',
    UK: 'gb',
    'Great Britain': 'gb',
    'United States': 'us',
    USA: 'us',
    Uruguay: 'uy',
    Venezuela: 've',
    Vietnam: 'vn',
};

/** Lowercase, accent-stripped token for fuzzy country prefix matching. */
export function normalizeCountryToken(value: string): string {
    return value.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().trim();
}

const NORMALIZED_COUNTRY_TO_ISO: ReadonlyMap<string, string> = (() => {
    const map = new Map<string, string>();
    for (const [name, iso] of Object.entries(POSTMAN_COUNTRY_ISO)) {
        const normalized = normalizeCountryToken(name);
        if (normalized && !map.has(normalized)) {
            map.set(normalized, iso.toLowerCase());
        }
    }
    return map;
})();

const ISO_TO_CANONICAL_NAME: ReadonlyMap<string, string> = (() => {
    const map = new Map<string, string>();
    for (const [name, iso] of Object.entries(POSTMAN_COUNTRY_ISO)) {
        const code = iso.toLowerCase();
        if (!map.has(code)) {
            map.set(code, name);
        }
    }
    return map;
})();

/** Extra i18n title prefixes not covered by POSTMAN_COUNTRY_ISO keys alone. */
const COUNTRY_TITLE_PREFIX_EXTRAS: Record<string, string[]> = {
    Australia: ['AU', 'Australie', 'Austrália', '호주', 'オーストラリア', '澳大利亚'],
    Belarus: ['Bielorrusia', 'BY'],
    Belgium: ['Bélgica', 'Belgique', 'BE', 'ベルギー', '벨기에', '比利时'],
    Bolivia: ['玻利维亚', 'BO'],
    Brazil: ['Brasil', 'Brésil', 'ブラジル', '브라질', '巴西', 'BR'],
    Canada: ['Canadá', 'CA'],
    'Czech Republic': [
        'República Checa',
        'Czechia',
        'Chequia',
        'Tchéquie',
        'Chéquia',
        'Tchéquia',
        'Česko',
        'CZ',
        '체코',
        'チェコ',
        '捷克',
    ],
    Denmark: ['Dinamarca', 'Danemark', 'Danmark', 'DK', '덴마크', 'デンマーク', '丹麦'],
    'Dominican Republic': [
        'República Dominicana',
        'Republica Dominicana',
        'République dominicaine',
        'DO',
        '도미니카 공화국',
        'ドミニカ共和国',
        '多米尼加共和国',
    ],
    Ecuador: ['厄瓜多尔', 'EC'],
    Estonia: ['EE', 'Estonie', 'Estônia', '에스토니아', 'エストニア', '爱沙尼亚'],
    'European Union': ['EU', 'Europe', 'Unión Europea', 'Union Européenne'],
    Europe: ['European Union', 'EU', 'Unión Europea', 'Union Européenne'],
    Finland: ['Finlandia', 'Finlande', 'Finlândia', 'FI', '핀란드', 'フィンランド', '芬兰'],
    France: ['Francia', 'França', 'FR', '프랑스', 'フランス', '法国'],
    Germany: ['Alemania', 'Deutschland', 'DE'],
    Iceland: ['Islandia', 'IS'],
    Israel: ['Israël', '이스라엘', 'イスラエル', '以色列'],
    Japan: ['Japón', 'Japon', 'Japão', 'JP', '일본', '日本'],
    Latvia: ['Letonia', 'Lettonie', 'Letônia', 'LV', '라트비아', 'ラトビア', '拉脱维亚'],
    Lithuania: ['Lituania', 'LT'],
    Mexico: ['México', 'MX'],
    Netherlands: ['Países Bajos', 'Holanda', 'NL'],
    'New Zealand': [
        'Nueva Zelanda',
        'Nouvelle-Zélande',
        'Nova Zelândia',
        'NZ',
        '뉴질랜드',
        'ニュージーランド',
        '新西兰',
    ],
    Norway: ['Noruega', 'Norvège', 'NO', '노르웨이', 'ノルウェー', '挪威'],
    Peru: ['Perú', 'PE'],
    Poland: ['Polonia', 'Pologne', 'Polônia', 'PL', '폴란드', 'ポーランド', '波兰'],
    Portugal: ['PT', '포르투갈', 'ポルトガル', '葡萄牙'],
    'Puerto Rico': ['PR', 'Porto Rico', '푸에르토리코', 'プエルトリコ', '波多黎各'],
    Romania: ['Rumania', 'Rumanía', 'Roumanie', 'Romênia', 'Roménia', 'RO', '루마니아', 'ルーマニア', '罗马尼亚'],
    Singapore: ['Singapur', 'Singapour', 'Singapura', 'SG', '싱가포르', 'シンガポール', '新加坡'],
    Slovakia: ['Eslovaquia', 'Slovaquie', 'Eslováquia', 'SK', '슬로바키아', 'スロバキア', '斯洛伐克'],
    Spain: ['España', 'ES'],
    Sweden: ['Suecia', 'SE'],
    Switzerland: ['Suiza', 'Suisse', 'Suíça', 'CH', '스위스', 'スイス', '瑞士'],
    Taiwan: ['Taiwán', 'Taïwan', 'TW', '대만', '台湾', '臺灣'],
    'Trinidad and Tobago': [
        'Trinidad y Tobago',
        'Trinidad & Tobago',
        'Trinité-et-Tobago',
        'Trindade e Tobago',
        'TT',
        '트리니다드 토바고',
        'トリニダード・トバゴ',
        '特立尼达和多巴哥',
    ],
    'United Kingdom': ['UK', 'Reino Unido', 'Great Britain', 'GB'],
    'United States': ['USA', 'Estados Unidos', 'États-Unis', 'US', '미국', 'アメリカ合衆国', '美国'],
    Uruguay: ['Uruguai', '우루과이', 'ウルグアイ', '乌拉圭'],
    Venezuela: ['베네수엘라', 'ベネズエラ', '委内瑞拉'],
};

export type PostmanCountryFlagUi =
    | { k: 'img'; src: string }
    | { k: 'globe' }
    | { k: 'initials'; text: string };

export function postmanCountryFlagUi(country: string): PostmanCountryFlagUi {
    const code = countryNameToIso(country);
    if (code === 'world') {
        return { k: 'globe' };
    }
    if (typeof code === 'string' && code.length === 2) {
        return { k: 'img', src: `https://flagcdn.com/w40/${code}.png` };
    }
    return { k: 'initials', text: postmanCountryInitials(country) };
}

export function postmanCountryInitials(name: string): string {
    const trim = name.trim();
    if (!trim) {
        return '?';
    }
    const words = trim.split(/\s+/).filter(Boolean);
    if (words.length === 1) {
        return trim.slice(0, 2).toUpperCase();
    }
    return (words[0][0] + words[1][0]).toUpperCase();
}

/**
 * Returns the lowercase ISO token (e.g. "es", "co", "world") for a display country name.
 * Also accepts 2-letter ISO-3166-1 alpha-2 codes directly (e.g. "DE" -> "de") and
 * case/accent-insensitive country names.
 * Falls back to `null` for unknown names so callers can drop the URL param defensively.
 */
export function countryNameToIso(name: string | null | undefined): string | null {
    if (!name) return null;
    const trimmed = name.trim();
    if (!trimmed) return null;

    const direct = POSTMAN_COUNTRY_ISO[trimmed];
    if (typeof direct === 'string' && direct.length > 0) {
        return direct.toLowerCase();
    }

    const normalized = normalizeCountryToken(trimmed);
    const fromNormalized = NORMALIZED_COUNTRY_TO_ISO.get(normalized);
    if (fromNormalized) {
        return fromNormalized;
    }

    if (/^[a-z]{2}$/i.test(trimmed)) {
        const lower = trimmed.toLowerCase();
        if (ISO_TO_CANONICAL_NAME.has(lower)) {
            return lower;
        }
    }

    for (const [canonicalName, extras] of Object.entries(COUNTRY_TITLE_PREFIX_EXTRAS)) {
        for (const extra of extras) {
            if (normalizeCountryToken(extra) === normalized) {
                const iso = POSTMAN_COUNTRY_ISO[canonicalName];
                if (iso) return iso.toLowerCase();
            }
        }
    }

    return null;
}

/**
 * Returns the canonical catalog country name for any country alias or ISO code
 * (e.g. "CO" -> "Colombia", "World" -> "world", "República Dominicana" -> "Dominican Republic").
 */
export function canonicalPostmanCountryName(country: string | null | undefined): string {
    const trimmed = country?.trim() ?? '';
    if (!trimmed) return '';
    const iso = countryNameToIso(trimmed);
    if (!iso) return trimmed;
    return ISO_TO_CANONICAL_NAME.get(iso) ?? trimmed;
}

/**
 * Country for a feature whose `country` field is missing or the string "undefined".
 * Multi-word codes (`trinidad_and_tobago_api_…`, `new_zealand_api_…`) are matched
 * before the URL's ISO segment (`v2/tt/company`).
 */
export function inferPostmanCountryFromCodeAndUrl(
    code: string | null | undefined,
    url: string | null | undefined
): string {
    const parts = (code ?? '')
        .trim()
        .toLowerCase()
        .split('_')
        .filter(Boolean);
    const max = Math.min(parts.length, 4);
    for (let len = max; len >= 1; len -= 1) {
        const iso = countryNameToIso(parts.slice(0, len).join(' '));
        if (!iso) continue;
        const canonical = canonicalPostmanCountryName(iso);
        if (canonical && canonical.toLowerCase() !== 'undefined') return canonical;
    }

    const match = (url ?? '').match(/(?:^|\/)v\d+\/([a-z]{2})(?:\/|$)/i);
    if (match?.[1]) {
        const iso = countryNameToIso(match[1]);
        if (iso) {
            const canonical = canonicalPostmanCountryName(iso);
            if (canonical && canonical.toLowerCase() !== 'undefined') return canonical;
        }
    }
    return '';
}

/**
 * Expands a list of country names into all known catalog aliases and uppercase ISO codes
 * so `in_country` backend queries match both canonical names ("Norway", "Dominican Republic", "world")
 * and legacy/localized variants ("NO", "República Dominicana", "World").
 */
export function expandPostmanCountryQueryVariants(countries: readonly string[]): string[] {
    const out = new Set<string>();
    for (const raw of countries) {
        const trimmed = raw?.trim();
        if (!trimmed) continue;
        out.add(trimmed);
        const canonical = canonicalPostmanCountryName(trimmed);
        if (canonical) {
            out.add(canonical);
        }
        const iso = countryNameToIso(trimmed);
        if (!iso) continue;
        if (iso === 'world') {
            out.add('world');
            out.add('World');
            out.add('Global');
            continue;
        }
        out.add(iso.toUpperCase());
        for (const [alias, code] of Object.entries(POSTMAN_COUNTRY_ISO)) {
            if (code.toLowerCase() === iso) {
                out.add(alias);
            }
        }
    }
    return [...out];
}

/**
 * True when two country strings refer to the same country (exact match or shared ISO code).
 */
export function areSamePostmanCountry(
    left: string | null | undefined,
    right: string | null | undefined
): boolean {
    const a = left?.trim() ?? '';
    const b = right?.trim() ?? '';
    if (!a || !b) return false;
    if (a === b) return true;
    const isoA = countryNameToIso(a);
    const isoB = countryNameToIso(b);
    if (isoA && isoB) {
        return isoA === isoB;
    }
    return normalizeCountryToken(a) === normalizeCountryToken(b);
}

/**
 * Formats a country name for display in the active UI locale using `Intl.DisplayNames` when available.
 */
export function formatPostmanCountryDisplayName(
    country: string | null | undefined,
    locale = 'en',
    worldLabel = 'World'
): string {
    const trimmed = country?.trim() ?? '';
    if (!trimmed) return '';
    const iso = countryNameToIso(trimmed);
    if (iso === 'world') {
        return worldLabel;
    }
    const canonical = canonicalPostmanCountryName(trimmed);
    const lang = (locale || 'en').split('-')[0].toLowerCase();
    if (lang === 'en') {
        return canonical;
    }
    if (iso && iso.length === 2 && typeof Intl !== 'undefined' && typeof Intl.DisplayNames === 'function') {
        try {
            const displayNames = new Intl.DisplayNames([lang, 'en'], { type: 'region' });
            const localized = displayNames.of(iso.toUpperCase());
            if (localized && localized.toUpperCase() !== iso.toUpperCase()) {
                return localized;
            }
        } catch {
            // Fall through to canonical name
        }
    }
    return canonical;
}

/**
 * Resolves an ISO token from the URL back to the canonical country name actually used
 * by the loaded endpoint catalog. Prefers a live match against `endpoints[*].country`
 * to avoid mismatches when several display names share an ISO; falls back to the
 * static reverse map derived from `POSTMAN_COUNTRY_ISO`.
 */
export function resolveCountryNameFromIso(
    iso: string | null | undefined,
    endpoints: ApiEndpoint[]
): string | null {
    if (!iso) return null;
    const target = iso.trim().toLowerCase();
    if (!target) return null;

    const targetIso = countryNameToIso(target) ?? target;

    for (const ep of endpoints) {
        if (!ep.country) continue;
        const epIso = countryNameToIso(ep.country);
        if (epIso && epIso === targetIso) {
            return ep.country;
        }
    }

    return ISO_TO_CANONICAL_NAME.get(targetIso) ?? null;
}

/**
 * All acceptable title prefixes for a country (e.g. "USA" for United States, "España" for Spain).
 */
export function getCountryTitlePrefixVariants(country: string | null | undefined): string[] {
    if (!country) {
        return [];
    }

    const canonical = canonicalPostmanCountryName(country);
    const variants = new Set<string>([country, canonical]);
    const iso = countryNameToIso(country);

    if (iso) {
        for (const [name, code] of Object.entries(POSTMAN_COUNTRY_ISO)) {
            if (code === iso) {
                variants.add(name);
            }
        }
    }

    if (country === 'world' || iso === 'world') {
        variants.add('Global');
        variants.add('World');
    }

    for (const extra of COUNTRY_TITLE_PREFIX_EXTRAS[canonical] ?? COUNTRY_TITLE_PREFIX_EXTRAS[country] ?? []) {
        variants.add(extra);
    }

    return [...variants];
}

/**
 * Match score for the country picker. `100` is exact, `80` is a prefix, `50` is a
 * substring. Localized title prefixes (Tchéquie, 호주, États-Unis) count as names.
 */
export function scorePostmanCountryQuery(country: string, query: string): number {
    const q = query.trim();
    if (!q || !country.trim()) return 0;
    const qToken = normalizeCountryToken(q);
    const qLower = q.toLowerCase();
    const iso = (countryNameToIso(country) || '').toLowerCase();
    const tokens = new Set(
        getCountryTitlePrefixVariants(country).map(normalizeCountryToken).filter(Boolean)
    );
    if (iso === qLower || tokens.has(qToken)) return 100;
    if ([...tokens].some((token) => token.startsWith(qToken))) return 80;
    if (qLower.length <= 2 && iso.startsWith(qLower)) return 70;
    if (qToken.length >= 2 && [...tokens].some((token) => token.includes(qToken))) return 50;
    if (qLower.length >= 2 && iso.includes(qLower)) return 50;
    return 0;
}

/**
 * Removes a leading "{Country} - " style prefix from a title when it matches endpoint.country.
 */
export function stripCountryPrefixFromTitle(
    title: string | null | undefined,
    country: string | null | undefined
): string {
    let trimmed = title?.trim();
    if (!trimmed) {
        return '';
    }

    if (/^undefined\s*(?:[-–—:]\s*|\s+|$)/i.test(trimmed)) {
        trimmed = trimmed.replace(/^undefined\s*(?:[-–—:]\s*|\s+|$)/i, '').trim();
    }

    if (!country || !trimmed) {
        return trimmed ?? '';
    }

    const match = trimmed.match(/^(.+?)\s*(?:[-–—]\s+|:\s+)/);
    if (!match) {
        return trimmed;
    }

    const prefix = match[1];
    const normalizedPrefix = normalizeCountryToken(prefix);
    const variantTokens = getCountryTitlePrefixVariants(country).map(normalizeCountryToken);

    if (variantTokens.includes(normalizedPrefix)) {
        return trimmed.slice(match[0].length).trim();
    }

    return trimmed;
}
