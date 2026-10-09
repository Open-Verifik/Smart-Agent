/**
 * Conditional formatting for report values, in the spirit of Excel's
 * "conditional formatting": the first rule whose condition matches the value
 * decides its color, background, weight, status icon and, optionally, text.
 *
 * The backend mirrors this file in `report-value-rules.service.js`; keep the
 * operators, parsing and badge artwork in sync.
 */
import { colorIconSvg, REPORT_ICON_MAX_LENGTH, safeIconColor, sanitizeIconSvg } from './report-icon.util';

export const REPORT_RULE_OPERATORS = [
    'contains',
    'notContains',
    'equals',
    'notEquals',
    'startsWith',
    'isEmpty',
    'notEmpty',
    'gt',
    'gte',
    'lt',
    'lte',
    'between',
    'isTrue',
    'isFalse',
    'datePast',
    'dateFuture',
    'dateWithinDays',
    'dateOlderThanDays',
] as const;

export type ReportRuleOperator = (typeof REPORT_RULE_OPERATORS)[number];

export const REPORT_RULE_BADGES = ['check', 'cross', 'warning', 'info', 'dot', 'clock', 'up', 'down'] as const;

export type ReportRuleBadge = (typeof REPORT_RULE_BADGES)[number];

export interface ReportValueRule {
    id: string;
    operator: ReportRuleOperator;
    /** Words separated by commas for text operators, a number, or a number of days. */
    value?: string;
    /** Upper bound for `between`. */
    value2?: string;
    color?: string;
    backgroundColor?: string;
    bold?: boolean;
    badge?: ReportRuleBadge;
    /** Any icon from the library, Iconify or an uploaded SVG; replaces `badge`. */
    iconSvg?: string;
    iconName?: string;
    /** Multicolor icons keep their artwork instead of taking `color`. */
    iconKeepColors?: boolean;
    /** Shown instead of the value when set, e.g. "VENCIDO". */
    text?: string;
}

export type ReportRuleOperatorGroup = 'text' | 'number' | 'date' | 'other';

export const RULE_OPERATOR_GROUPS: { group: ReportRuleOperatorGroup; operators: ReportRuleOperator[] }[] = [
    { group: 'text', operators: ['contains', 'notContains', 'equals', 'notEquals', 'startsWith'] },
    { group: 'number', operators: ['gt', 'gte', 'lt', 'lte', 'between'] },
    { group: 'date', operators: ['datePast', 'dateFuture', 'dateWithinDays', 'dateOlderThanDays'] },
    { group: 'other', operators: ['isEmpty', 'notEmpty', 'isTrue', 'isFalse'] },
];

/** Operators that need no typed value. */
export const RULE_OPERATORS_WITHOUT_VALUE = new Set<ReportRuleOperator>([
    'isEmpty',
    'notEmpty',
    'isTrue',
    'isFalse',
    'datePast',
    'dateFuture',
]);

export const MAX_VALUE_RULES = 12;

const EMPTY_MARKERS = new Set(['', '-', '--', '---', '—', 'n/a', 'na', 'null', 'undefined', 'sin dato', 'sin informacion']);
const TRUE_MARKERS = new Set(['true', 'si', 'yes', '1', 'verdadero', 'x']);
const FALSE_MARKERS = new Set(['false', 'no', '0', 'falso']);

const MONTHS: Record<string, number> = {
    ene: 0, enero: 0, jan: 0, january: 0,
    feb: 1, febrero: 1, february: 1,
    mar: 2, marzo: 2, march: 2,
    abr: 3, abril: 3, apr: 3, april: 3,
    may: 4, mayo: 4,
    jun: 5, junio: 5, june: 5,
    jul: 6, julio: 6, july: 6,
    ago: 7, agosto: 7, aug: 7, august: 7,
    sep: 8, sept: 8, septiembre: 8, setiembre: 8, september: 8,
    oct: 9, octubre: 9, october: 9,
    nov: 10, noviembre: 10, november: 10,
    dic: 11, diciembre: 11, dec: 11, december: 11,
};

/** Lowercase, accent-free and trimmed, so "Vigente" matches "VIGENTE" and "vigénte". */
export const normalizeRuleText = (value: unknown): string =>
    String(value ?? '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim();

const ruleTokens = (value: string | undefined): string[] =>
    String(value ?? '')
        .split(/[,;|]/)
        .map(normalizeRuleText)
        .filter(Boolean);

/** Number from "1.234,56", "$ 1,234.56", "(500)" or "-12 %". */
export const parseRuleNumber = (raw: unknown): number => {
    if (typeof raw === 'number') return raw;
    if (typeof raw === 'boolean' || raw == null) return NaN;
    let text = String(raw).trim();
    if (!text) return NaN;
    const negative = /^\(.*\)$/.test(text) || /^-/.test(text.replace(/^[^\d-]+/, ''));
    text = text.replace(/[^\d.,]/g, '');
    if (!text || !/\d/.test(text)) return NaN;
    const lastDot = text.lastIndexOf('.');
    const lastComma = text.lastIndexOf(',');
    if (lastDot >= 0 && lastComma >= 0) {
        const decimal = lastDot > lastComma ? '.' : ',';
        const thousands = decimal === '.' ? ',' : '.';
        text = text.split(thousands).join('').replace(decimal, '.');
    } else if (lastComma >= 0) {
        const parts = text.split(',');
        text = parts.length === 2 && parts[1].length <= 2 ? parts.join('.') : parts.join('');
    } else if (lastDot >= 0) {
        const parts = text.split('.');
        text = parts.length > 2 || (parts.length === 2 && parts[1].length === 3 && parts[0].length <= 3) ? parts.join('') : text;
    }
    const value = Number(text);
    if (!Number.isFinite(value)) return NaN;
    return negative ? -Math.abs(value) : value;
};

const dayStart = (date: Date): number => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

const validDate = (year: number, month: number, day: number): Date | null => {
    if (year < 1000 || month < 0 || month > 11 || day < 1 || day > 31) return null;
    const date = new Date(year, month, day);
    return date.getMonth() === month ? date : null;
};

/** Date from ISO, "dd/mm/yyyy", "yyyy/mm/dd" or "15 de marzo de 2024". Day/month order is Latin American. */
export const parseRuleDate = (raw: unknown): Date | null => {
    if (raw instanceof Date) return Number.isNaN(raw.getTime()) ? null : raw;
    if (raw == null || typeof raw === 'boolean' || typeof raw === 'number') return null;
    const text = String(raw).trim();
    let match = /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/.exec(text);
    if (match) return validDate(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    match = /^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})/.exec(text);
    if (match) return validDate(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
    match = /^(\d{1,2})\s*(?:de\s+)?([a-z\u00e1\u00e9\u00ed\u00f3\u00fa]+)\.?\s*(?:de\s+|del\s+)?(\d{4})/i.exec(normalizeRuleText(text));
    if (match && MONTHS[match[2]] !== undefined) return validDate(Number(match[3]), MONTHS[match[2]], Number(match[1]));
    return null;
};

const isEmptyValue = (raw: unknown): boolean => {
    if (raw == null) return true;
    if (Array.isArray(raw)) return raw.length === 0;
    if (typeof raw === 'object') return Object.keys(raw as object).length === 0;
    return EMPTY_MARKERS.has(normalizeRuleText(raw));
};

export const ruleMatches = (rule: ReportValueRule, raw: unknown, today: Date = new Date()): boolean => {
    const text = normalizeRuleText(raw);
    const tokens = ruleTokens(rule.value);
    switch (rule.operator) {
        case 'contains':
            return tokens.length > 0 && tokens.some((token) => text.includes(token));
        case 'notContains':
            return tokens.length > 0 && !tokens.some((token) => text.includes(token));
        case 'equals':
            return tokens.some((token) => text === token);
        case 'notEquals':
            return tokens.length > 0 && !tokens.some((token) => text === token);
        case 'startsWith':
            return tokens.some((token) => text.startsWith(token));
        case 'isEmpty':
            return isEmptyValue(raw);
        case 'notEmpty':
            return !isEmptyValue(raw);
        case 'isTrue':
            return raw === true || TRUE_MARKERS.has(text);
        case 'isFalse':
            return raw === false || FALSE_MARKERS.has(text);
        case 'gt':
        case 'gte':
        case 'lt':
        case 'lte':
        case 'between': {
            const value = parseRuleNumber(raw);
            const target = parseRuleNumber(rule.value);
            if (!Number.isFinite(value) || !Number.isFinite(target)) return false;
            if (rule.operator === 'gt') return value > target;
            if (rule.operator === 'gte') return value >= target;
            if (rule.operator === 'lt') return value < target;
            if (rule.operator === 'lte') return value <= target;
            const upper = parseRuleNumber(rule.value2);
            if (!Number.isFinite(upper)) return false;
            return value >= Math.min(target, upper) && value <= Math.max(target, upper);
        }
        case 'datePast':
        case 'dateFuture':
        case 'dateWithinDays':
        case 'dateOlderThanDays': {
            const date = parseRuleDate(raw);
            if (!date) return false;
            const day = dayStart(date);
            const now = dayStart(today);
            const msDay = 86_400_000;
            if (rule.operator === 'datePast') return day < now;
            if (rule.operator === 'dateFuture') return day >= now;
            const days = Math.max(0, Math.round(parseRuleNumber(rule.value)));
            if (!Number.isFinite(days)) return false;
            if (rule.operator === 'dateWithinDays') return day >= now && day <= now + days * msDay;
            return day < now - days * msDay;
        }
        default:
            return false;
    }
};

/** First matching rule, or null. */
export const matchValueRule = (rules: ReportValueRule[] | null | undefined, raw: unknown, today?: Date): ReportValueRule | null => {
    if (!Array.isArray(rules) || !rules.length) return null;
    return rules.find((rule) => rule && ruleMatches(rule, raw, today)) ?? null;
};

/**
 * Rules for one value of a block: its own, then those of the closest parent key
 * (a table's rules reach its columns), then the block-wide ones.
 */
export const keyValueRules = (
    section: { keyOverrides?: Record<string, { rules?: ReportValueRule[] } | undefined>; valueRules?: ReportValueRule[] },
    key: string
): ReportValueRule[] => {
    let current = key;
    while (current) {
        const rules = section.keyOverrides?.[current]?.rules;
        if (rules?.length) return rules;
        const dot = current.lastIndexOf('.');
        current = dot > 0 ? current.slice(0, dot) : '';
    }
    return section.valueRules ?? [];
};

const BADGE_ART: Record<ReportRuleBadge, (color: string) => string> = {
    check: (c) =>
        `<circle cx="12" cy="12" r="10" fill="${c}"/><path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`,
    cross: (c) =>
        `<circle cx="12" cy="12" r="10" fill="${c}"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`,
    warning: (c) =>
        `<path d="M12 2.8L22.2 20.5H1.8z" fill="${c}" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 9v5" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="17.2" r="1.3" fill="#fff"/>`,
    info: (c) =>
        `<circle cx="12" cy="12" r="10" fill="${c}"/><path d="M12 11v6" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="7.6" r="1.4" fill="#fff"/>`,
    dot: (c) => `<circle cx="12" cy="12" r="6" fill="${c}"/>`,
    clock: (c) =>
        `<circle cx="12" cy="12" r="10" fill="${c}"/><path d="M12 7v5.5l3.5 2" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
    up: (c) => `<path d="M12 3.5l7.5 8.5h-4.75v8.5h-5.5V12H4.5z" fill="${c}"/>`,
    down: (c) => `<path d="M12 20.5l7.5-8.5h-4.75V3.5h-5.5V12H4.5z" fill="${c}"/>`,
};

/** Status icon drawn before the value; inline SVG so it prints identically. */
export const ruleBadgeSvg = (badge: ReportRuleBadge | undefined, color: string | undefined): string => {
    const art = badge ? BADGE_ART[badge] : null;
    if (!art) return '';
    return `<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" style="display:inline-block;vertical-align:-0.14em;margin-right:0.3em;flex-shrink:0">${art(safeIconColor(color, '#374151'))}</svg>`;
};

const _cleanIcons = new Map<string, string>();

/** Stored icon markup cleaned once per distinct value, since templates come from the API. */
const _cleanRuleIcon = (raw: string): string => {
    let clean = _cleanIcons.get(raw);
    if (clean === undefined) {
        if (_cleanIcons.size > 100) _cleanIcons.clear();
        clean = sanitizeIconSvg(raw) ?? '';
        _cleanIcons.set(raw, clean);
    }
    return clean;
};

/** Icon drawn before a value: the rule's own SVG when it has one, otherwise its status badge. */
export const ruleIconMarkup = (rule: Pick<ReportValueRule, 'badge' | 'color' | 'iconSvg' | 'iconKeepColors'>): string => {
    if (rule.iconSvg) {
        const clean = _cleanRuleIcon(rule.iconSvg);
        if (clean) {
            const art = colorIconSvg(clean, safeIconColor(rule.color, '#374151'), Boolean(rule.iconKeepColors));
            return `<span aria-hidden="true" style="display:inline-block;width:1em;height:1em;line-height:0;vertical-align:-0.14em;margin-right:0.3em;flex-shrink:0">${art}</span>`;
        }
    }
    return ruleBadgeSvg(rule.badge, rule.color);
};

const RED = { color: '#b91c1c', backgroundColor: '#fee2e2' };
const AMBER = { color: '#b45309', backgroundColor: '#fef3c7' };
const GREEN = { color: '#15803d', backgroundColor: '#dcfce7' };

let ruleSeq = 0;
export const newRuleId = (): string => `regla-${Date.now().toString(36)}-${(ruleSeq++).toString(36)}`;

export type ReportRulePresetId = 'status' | 'dates' | 'numbers' | 'yesNo' | 'empty';

export const REPORT_RULE_PRESETS: { id: ReportRulePresetId; icon: string; build: () => ReportValueRule[] }[] = [
    {
        id: 'status',
        icon: 'traffic',
        build: () => [
            {
                id: newRuleId(),
                operator: 'contains',
                value: 'no vigente, vencid, inactiv, cancelad, suspendid, revocad, rechazad, bloquead, embargad, negativ, invalid, con deuda, moroso, expired, revoked, rejected',
                ...RED,
                bold: true,
                badge: 'cross',
            },
            {
                id: newRuleId(),
                operator: 'contains',
                value: 'pendiente, en tramite, por vencer, en revision, en proceso, pending',
                ...AMBER,
                bold: true,
                badge: 'warning',
            },
            {
                id: newRuleId(),
                operator: 'contains',
                value: 'vigente, activ, aprobad, valid, positiv, al dia, paz y salvo, sin deuda, approved',
                ...GREEN,
                bold: true,
                badge: 'check',
            },
        ],
    },
    {
        id: 'dates',
        icon: 'event',
        build: () => [
            { id: newRuleId(), operator: 'datePast', ...RED, bold: true, badge: 'cross' },
            { id: newRuleId(), operator: 'dateWithinDays', value: '30', ...AMBER, bold: true, badge: 'clock' },
            { id: newRuleId(), operator: 'dateFuture', ...GREEN, badge: 'check' },
        ],
    },
    {
        id: 'numbers',
        icon: 'exposure',
        build: () => [
            { id: newRuleId(), operator: 'lt', value: '0', color: '#b91c1c', bold: true, badge: 'down' },
            { id: newRuleId(), operator: 'gt', value: '0', color: '#15803d', badge: 'up' },
        ],
    },
    {
        id: 'yesNo',
        icon: 'rule',
        build: () => [
            { id: newRuleId(), operator: 'isTrue', ...GREEN, badge: 'check', text: 'Sí' },
            { id: newRuleId(), operator: 'isFalse', ...RED, badge: 'cross', text: 'No' },
        ],
    },
    {
        id: 'empty',
        icon: 'block',
        build: () => [{ id: newRuleId(), operator: 'isEmpty', color: '#9ca3af', badge: 'dot', text: 'Sin información' }],
    },
];

const HEX = /^#[0-9a-f]{3,8}$/i;

/** Drop malformed rules; colors must be hex so they are safe inside inline styles. */
export const sanitizeValueRules = (rules: unknown): ReportValueRule[] => {
    if (!Array.isArray(rules)) return [];
    return rules
        .filter((rule): rule is ReportValueRule => Boolean(rule) && REPORT_RULE_OPERATORS.includes((rule as ReportValueRule).operator))
        .slice(0, MAX_VALUE_RULES)
        .map((rule) => {
            const clean: ReportValueRule = { id: String(rule.id || newRuleId()).slice(0, 60), operator: rule.operator };
            if (rule.value != null && rule.value !== '') clean.value = String(rule.value).slice(0, 500);
            if (rule.value2 != null && rule.value2 !== '') clean.value2 = String(rule.value2).slice(0, 60);
            if (rule.color && HEX.test(rule.color)) clean.color = rule.color;
            if (rule.backgroundColor && HEX.test(rule.backgroundColor)) clean.backgroundColor = rule.backgroundColor;
            if (rule.bold) clean.bold = true;
            if (typeof rule.iconSvg === 'string' && rule.iconSvg && rule.iconSvg.length <= REPORT_ICON_MAX_LENGTH) {
                clean.iconSvg = rule.iconSvg;
                if (rule.iconName) clean.iconName = String(rule.iconName).slice(0, 200);
                if (rule.iconKeepColors) clean.iconKeepColors = true;
            } else if (rule.badge && REPORT_RULE_BADGES.includes(rule.badge)) {
                clean.badge = rule.badge;
            }
            if (rule.text) clean.text = String(rule.text).slice(0, 120);
            return clean;
        });
};
