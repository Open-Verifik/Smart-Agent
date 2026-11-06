import type { ReportSection, SampleReportData } from './smart-report.service';

export type ScalarParamEntry = { key: string; label: string; value: string };

export type NestedObjectTable = {
    key: string;
    label: string;
    columns: { key: string; label: string }[];
    rows: Record<string, string>[];
};

export type LayoutSheetItem =
    | { kind: 'field'; key: string; label: string; entry: ScalarParamEntry }
    | { kind: 'table'; key: string; label: string; table: NestedObjectTable };

export type LayoutSheetChunk =
    | { kind: 'fields'; entries: ScalarParamEntry[] }
    | { kind: 'table'; table: NestedObjectTable };

export const sortByKeyOrder = <T>(
    items: T[],
    keyOrder: string[] | undefined,
    getKey: (item: T) => string
): T[] => {
    if (!keyOrder?.length || items.length < 2) return items;
    const rank = new Map(keyOrder.map((key, index) => [key, index]));
    return items
        .map((item, index) => ({ item, index, rank: rank.get(getKey(item)) }))
        .sort((left, right) => {
            const leftRank = left.rank ?? keyOrder.length + left.index;
            const rightRank = right.rank ?? keyOrder.length + right.index;
            return leftRank - rightRank || left.index - right.index;
        })
        .map((entry) => entry.item);
};

/** Keep prior field order; append newly discovered keys at the end (never drop known keys). */
export const mergeLayoutKeyOrder = (existing: string[] | undefined, discovered: string[]): string[] => {
    if (!discovered.length) return existing?.length ? [...existing] : [];
    if (!existing?.length) return [...discovered];
    const present = new Set(discovered);
    const merged = existing.filter((key) => present.has(key));
    for (const key of discovered) {
        if (!merged.includes(key)) merged.push(key);
    }
    return merged;
};

export const applyVisibleKeyReorder = (fullOrder: string[], visibleOrdered: string[]): string[] => {
    const visibleSet = new Set(visibleOrdered);
    let visibleIndex = 0;
    const next = fullOrder.map((key) => {
        if (!visibleSet.has(key)) return key;
        return visibleOrdered[visibleIndex++] ?? key;
    });
    for (const key of visibleOrdered) {
        if (!next.includes(key)) next.push(key);
    }
    return next;
};

export const orderRecordKeys = (
    map: Record<string, string>,
    keyOrder?: string[]
): Record<string, string> => {
    if (!keyOrder?.length) return map;
    const ordered: Record<string, string> = {};
    for (const key of keyOrder) {
        if (key in map) ordered[key] = map[key];
    }
    for (const [key, value] of Object.entries(map)) {
        if (!(key in ordered)) ordered[key] = value;
    }
    return ordered;
};

export const collectLayoutSheetItems = (
    value: unknown,
    options?: { hiddenKeys?: string[]; keyOrder?: string[]; keyOverrides?: Record<string, unknown> }
): LayoutSheetItem[] => {
    const hiddenKeys = options?.hiddenKeys;
    const fields: LayoutSheetItem[] = collectScalarParams(value, {
        hiddenKeys,
        skipObjectArrays: true,
        maxDepth: 8,
        maxItems: 400,
    }).map((entry) => ({
        kind: 'field',
        key: entry.key,
        label: entry.label,
        entry,
    }));
    const tables: LayoutSheetItem[] = collectObjectTables(value, {
        hiddenKeys,
        keyOrder: options?.keyOrder,
        keyOverrides: options?.keyOverrides,
    }).map((table) => ({
        kind: 'table',
        key: table.key,
        label: table.label,
        table,
    }));
    return sortByKeyOrder([...fields, ...tables], options?.keyOrder, (item) => item.key);
};

export const chunkLayoutSheetItems = (items: LayoutSheetItem[]): LayoutSheetChunk[] => {
    const chunks: LayoutSheetChunk[] = [];
    for (const item of items) {
        if (item.kind === 'table') {
            chunks.push({ kind: 'table', table: item.table });
            continue;
        }
        const last = chunks[chunks.length - 1];
        if (last?.kind === 'fields') last.entries.push(item.entry);
        else chunks.push({ kind: 'fields', entries: [item.entry] });
    }
    return chunks;
};

export type LayoutParamGroup = {
    key: string;
    label: string;
    kind: 'table' | 'fields';
    keys: string[];
};

const BLOB_KEY_PATTERN = /base64|pdfbytes|pdfdata/i;
const ROOT_TABLE_KEY = '__list';

export const DEFAULT_PARAM_LABELS: Record<string, string> = {
    tipoTarifa: 'Tipo de tarifa',
    soat: 'SOAT',
    consultStats: 'Estadísticas de consultas',
    successPercent: 'Porcentaje de éxito',
    foundPercent: 'Porcentaje encontradas',
    failedPercent: 'Porcentaje de fallos',
    arrayName: 'Nombres desglosados',
    fullName: 'Nombre completo',
    firstName: 'Nombres',
    lastName: 'Apellidos',
    firstSurname: 'Primer apellido',
    secondSurname: 'Segundo apellido',
    lastSurname: 'Segundo apellido',
    consultedSubject: 'Sujeto consultado',
    foundInFbi: 'Hallazgo en FBI',
    foundInDea: 'Hallazgo en DEA',
    foundInOnu: 'Hallazgo en ONU',
    foundInOfac: 'Hallazgo en OFAC',
    foundInInterpol: 'Hallazgo en Interpol',
    details: 'Resultado de la consulta',
    legend: 'Nota legal',
    records: 'Registros asociados',
    code: 'Estado',
    message: 'Detalle',
    status: 'Estado',
    hasRecords: 'Posee registros',
    hasAntecedentes: 'Posee registros',
    hasMatches: 'Posee registros',
    documentNumber: 'Número de documento',
    documentType: 'Tipo de documento',
};

const PARAM_KEY_LABELS: Record<string, string> = { ...DEFAULT_PARAM_LABELS };

export const PARAM_FIELD_I18N_KEY: Record<string, string> = {
    arrayName: 'visitaGuide.arrayName',
    fullName: 'visitaGuide.fullName',
    firstName: 'visitaGuide.firstName',
    lastName: 'visitaGuide.lastName',
    firstSurname: 'visitaGuide.firstSurname',
    secondSurname: 'visitaGuide.secondSurname',
    lastSurname: 'visitaGuide.lastSurname',
    consultedSubject: 'visitaGuide.consultedSubject',
    foundInFbi: 'visitaGuide.foundInFbi',
    foundInDea: 'visitaGuide.foundInDea',
    foundInOnu: 'visitaGuide.foundInOnu',
    foundInOfac: 'visitaGuide.foundInOfac',
    foundInInterpol: 'visitaGuide.foundInInterpol',
    details: 'visitaGuide.details',
    legend: 'visitaGuide.legend',
    records: 'visitaGuide.records',
    code: 'visitaGuide.code',
    message: 'visitaGuide.message',
    status: 'visitaGuide.status',
    hasRecords: 'visitaGuide.hasRecords',
    hasAntecedentes: 'visitaGuide.hasAntecedentes',
    hasMatches: 'visitaGuide.hasMatches',
    documentNumber: 'visitaGuide.documentNumber',
    documentType: 'visitaGuide.documentType',
};

export const lookupNormalizedKey = <T>(map: Record<string, T>, key: string): T | undefined => {
    if (map[key] !== undefined) return map[key];
    const leaf = paramKeyLeaf(key);
    if (map[leaf] !== undefined) return map[leaf];
    const normalized = leaf.toLowerCase().replace(/[-_\s]+/g, '');
    for (const [k, v] of Object.entries(map)) {
        if (k.toLowerCase().replace(/[-_\s]+/g, '') === normalized) {
            return v;
        }
    }
    return undefined;
};

export const translateParamField = (
    field: string,
    translate?: (key: string) => string
): string => {
    const leaf = paramKeyLeaf(field);
    const i18nKey = lookupNormalizedKey(PARAM_FIELD_I18N_KEY, leaf);
    if (translate && i18nKey) {
        const translated = translate(i18nKey);
        if (translated && translated !== i18nKey) {
            return translated;
        }
    }
    const defaultLabel = lookupNormalizedKey(DEFAULT_PARAM_LABELS, leaf);
    if (defaultLabel) {
        return defaultLabel;
    }
    return humanizeParamKey(field);
};

export const formatParamDisplayValue = (
    key: string,
    value: unknown,
    options?: { lang?: 'es' | 'en' }
): string => {
    const lang = options?.lang ?? 'es';
    const leaf = paramKeyLeaf(key);
    const isBool =
        typeof value === 'boolean' ||
        (typeof value === 'string' &&
            (value.trim().toLowerCase() === 'true' || value.trim().toLowerCase() === 'false'));

    if (isBool) {
        const boolVal = typeof value === 'boolean' ? value : value.trim().toLowerCase() === 'true';
        if (
            /^(foundIn|isFound|hasMatch|hasRecord|hasAntecedentes|hasMatches|hasAlert|hasSanction|isPep|pep)/i.test(
                leaf
            )
        ) {
            if (lang === 'en') {
                return boolVal ? 'Match found' : 'No matches found';
            }
            return boolVal ? 'Con hallazgos' : 'Sin hallazgos';
        }
        if (lang === 'en') {
            return boolVal ? 'Yes' : 'No';
        }
        return boolVal ? 'Sí' : 'No';
    }

    if (value == null) return '—';
    return String(value);
};

export const isNotFoundPayload = (node: unknown): boolean => {
    if (!node || typeof node !== 'object' || Array.isArray(node)) return false;
    const rec = node as Record<string, unknown>;
    const code = rec.code != null ? String(rec.code).trim() : '';
    const message = rec.message != null ? String(rec.message).trim() : '';
    if (!/^not_?found$/i.test(code)) return false;
    if (!/^record not found/i.test(message)) return false;
    const allowed = new Set(['code', 'message', 'status', 'error', 'statuscode', 'httpstatus']);
    return Object.keys(rec).every((k) => allowed.has(k.toLowerCase()));
};

export const getParamSemanticPriority = (
    rawKey: string
): { group: number; subRank: number; leaf: string } => {
    const leaf = paramKeyLeaf(rawKey);
    const norm = leaf.toLowerCase().replace(/[-_\s]+/g, '');

    // Priority 1 (Primary findings / results):
    if (
        /^foundin/i.test(leaf) ||
        /^isfound/i.test(leaf) ||
        /^hasmatch/i.test(leaf) ||
        /^hasrecord/i.test(leaf) ||
        /^hasantecedentes/i.test(leaf) ||
        /^hasmatches/i.test(leaf) ||
        /^hasalert/i.test(leaf) ||
        /^hassanction/i.test(leaf) ||
        /^ispep/i.test(leaf) ||
        /^pep/i.test(leaf)
    ) {
        return { group: 1, subRank: 10, leaf };
    }
    if (norm === 'status') return { group: 1, subRank: 20, leaf };
    if (norm === 'result' || norm === 'resultado') return { group: 1, subRank: 30, leaf };
    if (norm === 'estado') return { group: 1, subRank: 40, leaf };
    if (norm === 'details' || norm === 'detalle') return { group: 1, subRank: 50, leaf };
    if (norm === 'summary' || norm === 'resumen') return { group: 1, subRank: 60, leaf };
    if (norm === 'code') return { group: 1, subRank: 70, leaf };

    // Priority 4 (Full-width footnotes / notices - ALWAYS LAST):
    if (norm === 'records') return { group: 4, subRank: 10, leaf };
    if (norm === 'message' || norm === 'mensaje') return { group: 4, subRank: 20, leaf };
    if (norm === 'observations' || norm === 'observaciones') return { group: 4, subRank: 30, leaf };
    if (norm === 'notes' || norm === 'notas') return { group: 4, subRank: 40, leaf };
    if (norm === 'legend' || norm === 'leyenda') return { group: 4, subRank: 50, leaf };

    // Priority 3 (Subject identity fields):
    if (norm === 'fullname' || norm === 'nombrecompleto') return { group: 3, subRank: 10, leaf };
    if (norm === 'firstname' || norm === 'nombres') return { group: 3, subRank: 20, leaf };
    if (norm === 'lastname' || norm === 'apellidos') return { group: 3, subRank: 30, leaf };
    if (norm === 'firstsurname' || norm === 'primerapellido') return { group: 3, subRank: 40, leaf };
    if (norm === 'secondsurname' || norm === 'segundoapellido' || norm === 'lastsurname') return { group: 3, subRank: 50, leaf };
    if (norm === 'documenttype' || norm === 'tipodocumento') return { group: 3, subRank: 60, leaf };
    if (norm === 'documentnumber' || norm === 'numerodocumento') return { group: 3, subRank: 70, leaf };
    if (norm === 'consultedsubject' || norm === 'sujetoconsultado') return { group: 3, subRank: 80, leaf };
    if (norm === 'arrayname' || norm === 'nombresdesglosados') return { group: 3, subRank: 90, leaf };

    // Priority 2 (Domain-specific fields):
    return { group: 2, subRank: 0, leaf };
};

export const sortScalarParamEntries = (entries: ScalarParamEntry[]): ScalarParamEntry[] => {
    return [...entries].sort((a, b) => {
        const prioA = getParamSemanticPriority(a.key);
        const prioB = getParamSemanticPriority(b.key);
        if (prioA.group !== prioB.group) {
            return prioA.group - prioB.group;
        }
        if (prioA.group === 1 || prioA.group === 3 || prioA.group === 4) {
            if (prioA.subRank !== prioB.subRank) {
                return prioA.subRank - prioB.subRank;
            }
            return prioA.leaf.localeCompare(prioB.leaf);
        }
        // Priority 2 (Domain-specific fields): sorted alphabetically
        return a.key.localeCompare(b.key, undefined, { numeric: true });
    });
};

export const LONG_SPAN_LEAF_KEYS = new Set([
    'legend',
    'leyenda',
    'details',
    'detalle',
    'message',
    'mensaje',
    'observations',
    'observaciones',
    'notes',
    'notas',
    'description',
    'descripcion',
    'summary',
    'resumen',
]);

export const isLongSpanParamEntry = (entry: { key: string; value?: string | null }): boolean => {
    const leaf = paramKeyLeaf(entry.key);
    const norm = leaf.toLowerCase().replace(/[-_\s]+/g, '');
    if (LONG_SPAN_LEAF_KEYS.has(norm)) {
        return true;
    }
    return String(entry.value || '').length > 65;
};

export const shouldAutoSpanFullRow = (
    entry: { key: string; value: string },
    gridCols = 2
): boolean => {
    return gridCols > 1 && isLongSpanParamEntry(entry);
};

export const IDENTITY_ECHO_KEYS = new Set([
    'arrayname',
    'fullname',
    'firstname',
    'lastname',
    'firstsurname',
    'secondsurname',
    'lastsurname',
    'documentnumber',
    'documenttype',
    'consultedsubject',
    'nombrecompleto',
    'nombres',
    'apellidos',
    'numerodocumento',
    'tipodocumento',
]);

export const isIdentityEchoKey = (rawKey: string): boolean => {
    const leaf = paramKeyLeaf(rawKey);
    const norm = leaf.toLowerCase().replace(/[-_\s]+/g, '');
    if (norm === 'arrayname') return true;
    return IDENTITY_ECHO_KEYS.has(norm);
};

export interface SmartFormatSectionOptions {
    hideIdentityEchoes?: boolean;
    gridCols?: number;
    translate?: (key: string) => string;
}

export const applySmartFormatToSection = <
    T extends {
        id?: string;
        type?: string;
        dataPath?: string;
        label?: string;
        columns?: string[];
        keyOverrides?: Record<string, any>;
        statusRules?: any[];
        style?: Record<string, any>;
    }
>(
    section: T,
    rawSectionData: unknown,
    options?: SmartFormatSectionOptions
): T => {
    const cloned: T = {
        ...section,
        keyOverrides: { ...(section.keyOverrides || {}) },
    };

    const isProfile =
        Boolean(section.id && (section.id.includes('profile') || section.id.includes('input'))) ||
        section.dataPath === 'inputData' ||
        /perfil|identidad|profile/i.test(section.label || '');

    const gridCols = options?.gridCols ?? 2;
    const scalars = collectScalarParams(rawSectionData, { translate: options?.translate });

    if (isProfile) {
        for (const entry of scalars) {
            const existing = cloned.keyOverrides?.[entry.key] || {};
            const nextOverride = { ...existing };
            const leaf = paramKeyLeaf(entry.key);
            const norm = leaf.toLowerCase().replace(/[-_\s]+/g, '');

            if (norm === 'arrayname') {
                nextOverride.hidden = true;
            }
            if (!nextOverride.label) {
                const label = translateParamField(entry.key, options?.translate);
                if (label) nextOverride.label = label;
            }
            if (shouldAutoSpanFullRow(entry, gridCols)) {
                nextOverride.colSpan = gridCols;
            }
            cloned.keyOverrides![entry.key] = nextOverride;
        }
        if (!cloned.keyOverrides!['arrayName']?.hidden) {
            cloned.keyOverrides!['arrayName'] = {
                ...(cloned.keyOverrides!['arrayName'] || {}),
                hidden: true,
            };
        }
        return cloned;
    }

    // Lookup / step sections (e.g. results.*)
    const tables = collectObjectTables(rawSectionData);
    const nonEchoScalars = scalars.filter((entry) => !isIdentityEchoKey(entry.key));
    const hasNonEchoContent = nonEchoScalars.length > 0 || tables.length > 0;

    const shouldHideIdentity = (entryKey: string): boolean => {
        if (options?.hideIdentityEchoes === false) return false;
        const leaf = paramKeyLeaf(entryKey);
        const norm = leaf.toLowerCase().replace(/[-_\s]+/g, '');
        if (norm === 'arrayname') return true;
        if (!isIdentityEchoKey(entryKey)) return false;

        if (hasNonEchoContent) {
            return true;
        }

        // If ALL fields in the response were identity fields, keep fullName, documentType, documentNumber visible
        const keepKeys = new Set([
            'fullname',
            'nombrecompleto',
            'documenttype',
            'tipodocumento',
            'documentnumber',
            'numerodocumento',
        ]);
        if (keepKeys.has(norm)) {
            return false;
        }
        return true;
    };

    for (const entry of scalars) {
        const existing = cloned.keyOverrides?.[entry.key] || {};
        const nextOverride = { ...existing };

        if (shouldHideIdentity(entry.key)) {
            nextOverride.hidden = true;
        }
        if (!nextOverride.label) {
            const label = translateParamField(entry.key, options?.translate);
            if (label) nextOverride.label = label;
        }
        if (shouldAutoSpanFullRow(entry, gridCols)) {
            nextOverride.colSpan = gridCols;
        }
        cloned.keyOverrides![entry.key] = nextOverride;
    }

    if (!cloned.statusRules || cloned.statusRules.length === 0) {
        cloned.statusRules = [
            {
                id: 'smart-ok',
                match: 'contains',
                value: 'Sin hallazgos',
                tone: 'success',
                target: 'badge',
                badgeText: 'Sin hallazgos',
            },
            {
                id: 'smart-no-req',
                match: 'contains',
                value: 'NO ES REQUERIDO',
                tone: 'success',
                target: 'badge',
                badgeText: 'Sin requerimientos',
            },
            {
                id: 'smart-no-reg',
                match: 'contains',
                value: 'No se encontraron registros',
                tone: 'neutral',
                target: 'badge',
                badgeText: 'Sin registros',
            },
            {
                id: 'smart-match',
                match: 'contains',
                value: 'Con hallazgos',
                tone: 'danger',
                target: 'badge',
                badgeText: 'Con hallazgos',
            },
        ];
    }

    return cloned;
};

const splitParamSegment = (segment: string): string =>
    segment
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/[_-]+/g, ' ')
        .replace(/^./, (letter) => letter.toUpperCase())
        .trim();

const humanizeSegment = (segment: string): string => {
    if (/^\d+$/.test(segment)) return String(Number(segment) + 1);
    return PARAM_KEY_LABELS[segment] ?? splitParamSegment(segment);
};

const paramKeyLeaf = (key: string): string =>
    key.split('.').filter((part) => part && part !== ROOT_TABLE_KEY).pop() || key;

/** Live RUNT extras that previews used to invent; they are not part of the sheet design. */
const AUTO_OMITTED_PARAM_LEAVES = new Set(['tipoTarifa']);

export const isAutoOmittedParamKey = (key: string): boolean =>
    AUTO_OMITTED_PARAM_LEAVES.has(paramKeyLeaf(key));

const sameLabel = (left: string, right: string): boolean =>
    left.localeCompare(right, 'es', { sensitivity: 'accent' }) === 0 ||
    left.toLocaleLowerCase('es').trim() === right.toLocaleLowerCase('es').trim();

export const humanizeParamKey = (key: string): string =>
    key.split('.').filter((part) => part && part !== ROOT_TABLE_KEY).map(humanizeSegment).join(' · ') ||
    key;

/** Name of the records a table shows, with the table's own word first. */
export const tableDataName = (key: string): string => {
    const parts = String(key || '')
        .split('.')
        .filter((part) => part && part !== ROOT_TABLE_KEY)
        .map((part) => humanizeSegment(part));
    return parts.reverse().join(' · ');
};

/** Prefer the field's own name. A path such as `item.nombre` must not keep the parent word in front. */
export const displayParamLabel = (key: string, fallback?: string): string => {
    const base = layoutTableRulesKey(key);
    const leaf = paramKeyLeaf(base);
    const mapped = PARAM_KEY_LABELS[leaf];
    const naive = splitParamSegment(leaf);
    const autoFull = humanizeParamKey(base);
    if (
        fallback &&
        !sameLabel(fallback, base) &&
        !sameLabel(fallback, leaf) &&
        !sameLabel(fallback, naive) &&
        !sameLabel(fallback, autoFull) &&
        !(mapped && sameLabel(fallback, mapped))
    ) {
        return fallback;
    }
    return mapped || naive || fallback || leaf;
};

const isScalar = (value: unknown): boolean =>
    value != null && typeof value !== 'object';

const PERIOD_OBJECT_KEYS = new Set([
    'days',
    'dias',
    'months',
    'meses',
    'years',
    'anios',
    'anos',
    'años',
]);

/** RUNT / colombian-vehicle-owners `ownershipDuration` and raw `tiempoPropiedad`. */
const isPeriodObject = (value: unknown): value is Record<string, unknown> => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    const keys = Object.keys(value);
    if (!keys.length || keys.length > PERIOD_OBJECT_KEYS.size) return false;
    if (!keys.every((key) => PERIOD_OBJECT_KEYS.has(key))) return false;
    return keys.some((key) => value[key] != null && value[key] !== '');
};

const formatPeriodObject = (value: Record<string, unknown>): string => {
    const years = value.years ?? value.anios ?? value.años ?? value.anos;
    const months = value.months ?? value.meses;
    const days = value.days ?? value.dias;
    const parts: string[] = [];
    const push = (raw: unknown, singular: string, plural: string): void => {
        if (raw == null || raw === '') return;
        const num = Number(raw);
        if (!Number.isFinite(num) || num < 0) return;
        if (num === 0) return;
        parts.push(num === 1 ? `1 ${singular}` : `${num} ${plural}`);
    };
    push(years, 'año', 'años');
    push(months, 'mes', 'meses');
    push(days, 'día', 'días');
    return parts.length ? parts.join(', ') : '—';
};

const isCodeDescriptionObject = (value: unknown): value is Record<string, unknown> => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    const item = value as Record<string, unknown>;
    const code = item.code ?? item.codigo ?? item.Code;
    const desc = item.description ?? item.descripcion ?? item.Description;
    return (typeof code === 'string' || typeof code === 'number') && typeof desc === 'string';
};

const formatCodeDescriptionLine = (item: Record<string, unknown>): string => {
    const code = item.code ?? item.codigo ?? item.Code;
    const desc = item.description ?? item.descripcion ?? item.Description;
    const codeText = code != null ? String(code) : '';
    const descText = desc != null ? String(desc) : '';
    if (codeText && descText) return `${codeText} — ${descText}`;
    return codeText || descText || '—';
};

export const joinReportDataPath = (base: string | undefined, key: string): string => {
    const left = (base || '').replace(/\.+$/, '');
    const right = (key || '').replace(/^\.+/, '');
    if (!left) return right;
    if (!right) return left;
    return `${left}.${right}`;
};

/** Blocks that can host fields and nested tables after a drag. */
export const LAYOUT_HOST_SECTION_TYPES = new Set(['keyValueGrid', 'card', 'table']);

/**
 * Key of an item relative to another block's `dataPath`.
 * `null` means the payloads do not nest; empty string means the target is already that item.
 */
export const relativeLayoutItemKey = (
    sourcePath: string | undefined,
    targetPath: string | undefined,
    key: string
): string | null => {
    const full = joinReportDataPath(sourcePath, key);
    if (!full) return null;
    const prefix = (targetPath || '').replace(/\.+$/, '');
    if (!prefix) return full;
    if (full === prefix) return '';
    if (full.startsWith(`${prefix}.`)) return full.slice(prefix.length + 1);
    return null;
};

export const remapLayoutOverrideKey = (storedKey: string, fromKey: string, toKey: string): string => {
    if (storedKey === fromKey) return toKey;
    if (storedKey.startsWith(`${fromKey}.`) || storedKey.startsWith(`${fromKey}#`)) {
        return `${toKey}${storedKey.slice(fromKey.length)}`;
    }
    return storedKey;
};

const PATH_KEY_ALIASES: Record<string, string[]> = {
    cilidraje: ['cilindraje'],
    cilindraje: ['cilidraje'],
};

const readPathKey = (current: unknown, part: string): unknown => {
    if (current == null || typeof current !== 'object') return undefined;
    const record = current as Record<string, unknown>;
    if (Object.prototype.hasOwnProperty.call(record, part) || record[part] !== undefined) {
        return record[part];
    }
    if (/^\d+$/.test(part)) {
        const index = Number(part);
        if (Number.isInteger(index) && record[index] !== undefined) return record[index];
    }
    for (const alias of PATH_KEY_ALIASES[part] ?? []) {
        if (record[alias] !== undefined) return record[alias];
    }
    const nested = record['data'];
    if (nested && typeof nested === 'object' && nested !== current) {
        return readPathKey(nested, part);
    }
    return undefined;
};

const walkDataPath = (root: unknown, parts: string[]): unknown => {
    let current: unknown = root;
    for (const part of parts) {
        if (current == null || typeof current !== 'object') return undefined;
        current = readPathKey(current, part);
    }
    return current;
};

export const valueAtDataPath = (root: unknown, dataPath?: string): unknown => {
    if (!dataPath) return root;
    const parts = dataPath.split('.').filter(Boolean);
    const direct = walkDataPath(root, parts);
    if (direct !== undefined) return direct;

    // Cloned templates often keep `results.2.*` from the designer while the
    // client batch stores that consult at another sequence (or under `.data`).
    if (parts[0] === 'results' && parts.length > 2) {
        const results = (root as { results?: Record<string | number, unknown> } | null)?.results;
        if (!results || typeof results !== 'object') return null;
        const addressed = String(parts[1]);
        const rest = parts.slice(2);
        const hits: unknown[] = [];
        for (const [key, payload] of Object.entries(results)) {
            if (String(key) === addressed) continue;
            const found = walkDataPath(payload, rest);
            if (found !== undefined) hits.push(found);
        }
        if (hits.length === 1) return hits[0];
    }
    return null;
};

export const isHiddenParamKey = (key: string, hiddenKeys?: string[]): boolean => {
    if (!hiddenKeys?.length) return false;
    for (const hidden of hiddenKeys) {
        if (!hidden) continue;
        if (key === hidden || key.startsWith(`${hidden}.`)) return true;
    }
    return false;
};

const isObjectRecordArray = (value: unknown): value is Record<string, unknown>[] =>
    Array.isArray(value) &&
    value.length > 0 &&
    value.every((item) => item && typeof item === 'object' && !Array.isArray(item)) &&
    !value.every((item) => isCodeDescriptionObject(item));

/** Display string for a table cell or bound field (mirrors backend `_sheetCellText`). */
export const formatReportCellValue = (value: unknown): string => {
    if (value == null) return '—';
    if (isScalar(value)) return String(value);
    if (isCodeDescriptionObject(value)) return formatCodeDescriptionLine(value);
    if (isPeriodObject(value)) return formatPeriodObject(value);
    const nested = collectScalarParams(value, { maxItems: 12, maxDepth: 4, skipObjectArrays: false });
    if (!nested.length) return '—';
    return nested.map((entry) => `${entry.label}: ${entry.value}`).join('; ');
};

const cellText = formatReportCellValue;

export type CollectScalarOptions = {
    hiddenKeys?: string[];
    maxDepth?: number;
    maxItems?: number;
    /** When true, arrays of objects are left for tables instead of exploding into cells. */
    skipObjectArrays?: boolean;
    keyOrder?: string[];
    lang?: 'es' | 'en';
    translate?: (key: string) => string;
};

/**
 * Flatten nested endpoint payloads into label/value pairs for the canvas and PDF.
 */
export const collectScalarParams = (
    value: unknown,
    options?: CollectScalarOptions
): ScalarParamEntry[] => {
    const hidden = options?.hiddenKeys ?? [];
    const maxDepth = options?.maxDepth ?? 8;
    const maxItems = options?.maxItems ?? 200;
    const skipObjectArrays = options?.skipObjectArrays === true;
    const rows: ScalarParamEntry[] = [];
    const seen = new WeakSet<object>();

    const isNotFoundRoot =
        isNotFoundPayload(value) ||
        (value != null &&
            typeof value === 'object' &&
            'data' in value &&
            isNotFoundPayload((value as Record<string, unknown>).data));

    const push = (key: string, rawVal: unknown, inNotFoundNode?: boolean): void => {
        if (isAutoOmittedParamKey(key) || isHiddenParamKey(key, hidden) || rows.length >= maxItems) return;
        const leaf = paramKeyLeaf(key);
        let text: string;
        const inNotFound = inNotFoundNode || isNotFoundRoot;
        if (inNotFound && leaf.toLowerCase() === 'code' && /^not_?found$/i.test(String(rawVal ?? ''))) {
            text = 'Sin registros';
        } else if (
            inNotFound &&
            leaf.toLowerCase() === 'message' &&
            /^record not found/i.test(String(rawVal ?? ''))
        ) {
            text = 'No se encontraron registros en la fuente oficial.';
        } else {
            text = formatParamDisplayValue(key, rawVal, { lang: options?.lang });
        }
        rows.push({ key, label: translateParamField(key, options?.translate), value: text });
    };

    const walk = (node: unknown, prefix: string, depth: number): void => {
        if (rows.length >= maxItems || node == null) return;

        const inNotFoundNode = isNotFoundPayload(node);

        if (isScalar(node)) {
            if (!prefix) return;
            push(prefix, node, inNotFoundNode);
            return;
        }

        if (typeof node !== 'object') return;
        if (seen.has(node)) return;
        seen.add(node);

        if (depth > maxDepth) {
            if (prefix) push(prefix, '…', inNotFoundNode);
            return;
        }

        if (Array.isArray(node)) {
            if (node.length === 0) {
                if (prefix) push(prefix, '—', inNotFoundNode);
                return;
            }
            if (skipObjectArrays && isObjectRecordArray(node)) return;
            if (node.every((item) => isCodeDescriptionObject(item))) {
                node.forEach((item, index) => {
                    const key = prefix ? `${prefix}.${index}` : String(index);
                    push(key, formatCodeDescriptionLine(item), inNotFoundNode);
                });
                return;
            }
            if (node.every((item) => item == null || isScalar(item))) {
                push(prefix || 'items', node.map((item) => (item == null ? '—' : String(item))).join(', '), inNotFoundNode);
                return;
            }
            node.forEach((item, index) => {
                const next = prefix ? `${prefix}.${index}` : String(index);
                walk(item, next, depth + 1);
            });
            return;
        }

        const record = node as Record<string, unknown>;
        const keys = Object.keys(record);
        if (keys.length === 0) {
            if (prefix) push(prefix, '—', inNotFoundNode);
            return;
        }

        for (const rawKey of keys) {
            if (rows.length >= maxItems) return;
            const key = prefix ? `${prefix}.${rawKey}` : rawKey;
            if (BLOB_KEY_PATTERN.test(rawKey) || isHiddenParamKey(key, hidden)) continue;
            const entry = record[rawKey];
            if (isScalar(entry)) {
                push(key, entry, inNotFoundNode);
                continue;
            }
            walk(entry, key, depth + 1);
        }
    };

    walk(value, '', 1);
    return options?.keyOrder?.length
        ? sortByKeyOrder(rows, options.keyOrder, (r) => r.key)
        : sortScalarParamEntries(rows);
};

export const tableColumnPath = (tableKey: string, column: string): string =>
    !tableKey || tableKey === ROOT_TABLE_KEY ? column : `${tableKey}.${column}`;

/** Column key for rules and styles — strips `#row` from table cell store keys. */
export const layoutTableRulesKey = (key: string): string => {
    const hash = key.lastIndexOf('#');
    if (hash <= 0) return key;
    const row = key.slice(hash + 1);
    return /^\d+$/.test(row) ? key.slice(0, hash) : key;
};

/** Row index from a table cell store key (`column#2`), or null when absent. */
export const layoutTableRowIndex = (key: string): number | null => {
    const hash = key.lastIndexOf('#');
    if (hash <= 0) return null;
    const row = Number(key.slice(hash + 1));
    return Number.isFinite(row) && row >= 0 ? row : null;
};

const columnLeafForTable = (tableKey: string, rawKey: string): string | null => {
    const key = layoutTableRulesKey(rawKey);
    if (!key) return null;
    if (!tableKey || tableKey === ROOT_TABLE_KEY) {
        return key.includes('.') ? null : key;
    }
    if (key === tableKey) return null;
    if (!key.startsWith(`${tableKey}.`)) return null;
    return key.slice(tableKey.length + 1).split('.')[0] || null;
};

/**
 * Columns the designer put in keyOrder for this table.
 * A label, color, or other override on one column must not drop the rest.
 */
export const designedTableColumns = (
    tableKey: string,
    available: string[],
    options?: { keyOrder?: string[]; hiddenKeys?: string[]; keyOverrides?: Record<string, unknown> }
): string[] | null => {
    const designed: string[] = [];
    for (const ref of options?.keyOrder ?? []) {
        const leaf = columnLeafForTable(tableKey, ref);
        if (leaf && available.includes(leaf) && !isAutoOmittedParamKey(leaf) && !designed.includes(leaf)) {
            designed.push(leaf);
        }
    }
    return designed.length ? designed : null;
};

const orderColumnKeys = (
    columnKeys: string[],
    tableKey: string,
    options?: { keyOrder?: string[]; hiddenKeys?: string[]; keyOverrides?: Record<string, unknown> }
): string[] => {
    const usable = columnKeys.filter((column) => !isAutoOmittedParamKey(column));
    const designed = designedTableColumns(tableKey, usable, options);
    if (designed?.length) {
        const rest = usable.filter((column) => !designed.includes(column));
        return [...designed, ...rest].filter(
            (column) => !isHiddenParamKey(tableColumnPath(tableKey, column), options?.hiddenKeys)
        );
    }
    const keyOrder = options?.keyOrder;
    if (!keyOrder?.length || usable.length < 2) return usable;
    const rank = new Map(keyOrder.map((key, index) => [key, index]));
    return usable
        .map((column, index) => ({ column, index }))
        .sort((left, right) => {
            const leftRank =
                rank.get(tableColumnPath(tableKey, left.column)) ??
                rank.get(left.column) ??
                keyOrder.length + left.index;
            const rightRank =
                rank.get(tableColumnPath(tableKey, right.column)) ??
                rank.get(right.column) ??
                keyOrder.length + right.index;
            return leftRank - rightRank || left.index - right.index;
        })
        .map((entry) => entry.column);
};

const tableFromRecords = (
    records: Record<string, unknown>[],
    key: string,
    options?: { keyOrder?: string[]; hiddenKeys?: string[]; keyOverrides?: Record<string, unknown> }
): NestedObjectTable | null => {
    const tableKey = key || ROOT_TABLE_KEY;
    const columnKeys: string[] = [];
    for (const record of records) {
        for (const column of Object.keys(record)) {
            if (BLOB_KEY_PATTERN.test(column) || isAutoOmittedParamKey(column)) continue;
            if (!columnKeys.includes(column)) columnKeys.push(column);
        }
    }
    const ordered = orderColumnKeys(columnKeys, tableKey, options);
    if (!ordered.length) return null;
    return {
        key: tableKey,
        label: humanizeParamKey(tableKey),
        columns: ordered.map((column) => ({ key: column, label: humanizeParamKey(column) })),
        rows: records.map((record) => {
            const row: Record<string, string> = {};
            for (const column of ordered) {
                row[column] = cellText(record[column]);
            }
            return row;
        }),
    };
};

const withVisibleColumns = (table: NestedObjectTable, hiddenKeys?: string[]): NestedObjectTable | null => {
    if (isHiddenParamKey(table.key, hiddenKeys)) return null;
    const columns = table.columns.filter(
        (column) => !isHiddenParamKey(tableColumnPath(table.key, column.key), hiddenKeys)
    );
    if (!columns.length) return null;
    const keys = columns.map((column) => column.key);
    return {
        ...table,
        columns,
        rows: table.rows.map((row) => {
            const next: Record<string, string> = {};
            for (const key of keys) next[key] = row[key] ?? '—';
            return next;
        }),
    };
};

/** Arrays of objects become tables. Nested arrays become their own tables and grow with the data. */
export const collectObjectTables = (
    value: unknown,
    options?: {
        hiddenKeys?: string[];
        maxTables?: number;
        keyOrder?: string[];
        keyOverrides?: Record<string, unknown>;
        hideColumns?: boolean;
    }
): NestedObjectTable[] => {
    const hidden = options?.hiddenKeys ?? [];
    const maxTables = options?.maxTables ?? 12;
    const hideColumns = options?.hideColumns !== false;
    const keyOrder = options?.keyOrder;
    const tables: NestedObjectTable[] = [];
    const seen = new WeakSet<object>();

    const absorb = (records: Record<string, unknown>[], key: string, depth: number): void => {
        if (tables.length >= maxTables || depth > 8) return;
        const nestedColumns: string[] = [];
        for (const record of records) {
            for (const [column, entry] of Object.entries(record)) {
                if (isObjectRecordArray(entry) && !nestedColumns.includes(column)) nestedColumns.push(column);
            }
        }
        const flatRecords = records.map((record) => {
            if (!nestedColumns.length) return record;
            const copy: Record<string, unknown> = { ...record };
            for (const column of nestedColumns) delete copy[column];
            return copy;
        });
        const table = tableFromRecords(flatRecords, key, {
            keyOrder,
            hiddenKeys: hidden,
            keyOverrides: options?.keyOverrides,
        });
        const visible = table ? (hideColumns ? withVisibleColumns(table, hidden) : table) : null;
        if (visible && !isHiddenParamKey(visible.key, hidden)) tables.push(visible);
        for (const column of nestedColumns) {
            if (tables.length >= maxTables) return;
            const childKey = key ? `${key}.${column}` : column;
            if (isHiddenParamKey(childKey, hidden)) continue;
            const merged: Record<string, unknown>[] = [];
            records.forEach((record, index) => {
                const child = record[column];
                if (!isObjectRecordArray(child)) return;
                for (const item of child) merged.push({ row: index + 1, ...item });
            });
            if (merged.length) absorb(merged, childKey, depth + 1);
        }
    };

    const walk = (node: unknown, prefix: string, depth: number): void => {
        if (tables.length >= maxTables || node == null || typeof node !== 'object') return;
        if (seen.has(node)) return;
        seen.add(node);
        if (depth > 8) return;

        if (isObjectRecordArray(node)) {
            absorb(node, prefix, depth);
            return;
        }

        if (Array.isArray(node)) return;

        for (const [rawKey, entry] of Object.entries(node as Record<string, unknown>)) {
            if (BLOB_KEY_PATTERN.test(rawKey)) continue;
            const key = prefix ? `${prefix}.${rawKey}` : rawKey;
            if (isHiddenParamKey(key, hidden)) continue;
            walk(entry, key, depth + 1);
        }
    };

    walk(value, '', 1);
    return tables;
};

/**
 * Every real column of a table pulled out of a block.
 * keyOrder only sorts. A column stays hidden only when the author hid it.
 */
export const extractedTableColumns = (
    value: unknown,
    tableKey: string,
    options?: {
        keyOrder?: string[];
        hiddenKeys?: string[];
        keyOverrides?: Record<string, { label?: string } | undefined>;
    }
): { columns: { key: string; label: string }[]; hiddenKeys: string[] } => {
    const table = collectObjectTables(value, {
        hiddenKeys: [],
        hideColumns: false,
        keyOrder: options?.keyOrder,
        keyOverrides: options?.keyOverrides,
    }).find((item) => item.key === tableKey);
    const columns = (table?.columns ?? []).map((column) => ({
        key: column.key,
        label: options?.keyOverrides?.[tableColumnPath(tableKey, column.key)]?.label || column.label,
    }));
    const known = new Set(columns.map((column) => column.key));
    const hiddenKeys: string[] = [];
    for (const stored of options?.hiddenKeys ?? []) {
        const leaf =
            !tableKey || tableKey === ROOT_TABLE_KEY
                ? stored
                : stored.startsWith(`${tableKey}.`)
                  ? stored.slice(tableKey.length + 1)
                  : '';
        if (!leaf || leaf.includes('.') || leaf.includes('#') || !known.has(leaf) || hiddenKeys.includes(leaf)) {
            continue;
        }
        hiddenKeys.push(leaf);
    }
    return { columns, hiddenKeys };
};

/**
 * Scalar fields the canvas shows beside tables. Arrays of objects stay out of
 * this map so the PDF can draw them as tables from the original payload.
 */
export const flattenPayloadToScalarMap = (
    value: unknown,
    hiddenKeys?: string[],
    keyOrder?: string[]
): Record<string, string> => {
    const map: Record<string, string> = {};
    for (const entry of collectScalarParams(value, {
        hiddenKeys,
        maxDepth: 8,
        maxItems: 400,
        skipObjectArrays: true,
    })) {
        map[entry.key] = entry.value;
    }
    return orderRecordKeys(map, keyOrder);
};

export const setHiddenParamKey = (
    hiddenKeys: string[] | undefined,
    key: string,
    visible: boolean
): string[] => {
    const hidden = new Set(hiddenKeys ?? []);
    if (visible) {
        for (const item of [...hidden]) {
            if (item === key || item.startsWith(`${key}.`) || key.startsWith(`${item}.`)) {
                hidden.delete(item);
            }
        }
    } else {
        hidden.add(key);
        for (const item of [...hidden]) {
            if (item !== key && item.startsWith(`${key}.`)) hidden.delete(item);
        }
    }
    return [...hidden];
};

export const layoutParamGroups = (value: unknown, hiddenKeys?: string[]): LayoutParamGroup[] => {
    const groups: LayoutParamGroup[] = collectObjectTables(value, { hiddenKeys }).map((table) => ({
        key: table.key,
        label: table.label,
        kind: 'table' as const,
        keys: [table.key],
    }));
    const scalars = collectScalarParams(value, {
        hiddenKeys,
        skipObjectArrays: true,
        maxDepth: 8,
        maxItems: 400,
    });

    const byPrefix = new Map<string, ScalarParamEntry[]>();
    for (const entry of scalars) {
        const prefix = entry.key.includes('.') ? entry.key.split('.')[0] : entry.key;
        byPrefix.set(prefix, [...(byPrefix.get(prefix) ?? []), entry]);
    }

    for (const [prefix, entries] of byPrefix) {
        groups.push({
            key: prefix,
            label: humanizeParamKey(prefix),
            kind: 'fields',
            keys: entries.map((entry) => entry.key),
        });
    }

    return groups.filter((group) => group.keys.length > 0);
};

const resultSequenceFromPath = (path: string | undefined): string | null => {
    const match = path?.match(/^results\.([^.]+)/);
    return match?.[1] ?? null;
};

/**
 * Replace nested `results.*` payloads with the same scalar map the canvas shows,
 * so Puppeteer does not dump objects/arrays as disordered JSON.
 */
export const flattenSampleResultsForPdf = (
    sample: SampleReportData,
    sections: ReportSection[]
): SampleReportData => {
    const results = { ...(sample.results ?? {}) } as Record<string, unknown>;
    const hiddenBySeq = new Map<string, string[]>();
    const keyOrderBySeq = new Map<string, string[]>();
    for (const section of sections) {
        const seq = resultSequenceFromPath(section.dataPath);
        if (seq == null) continue;
        hiddenBySeq.set(seq, [...(hiddenBySeq.get(seq) ?? []), ...(section.hiddenKeys ?? [])]);
        if (section.keyOrder?.length && !keyOrderBySeq.has(seq)) {
            keyOrderBySeq.set(seq, section.keyOrder);
        }
    }

    for (const [seq, payload] of Object.entries(results)) {
        const hidden = hiddenBySeq.get(String(seq));
        const flat = flattenPayloadToScalarMap(payload, hidden, keyOrderBySeq.get(String(seq)));
        if (Object.keys(flat).length > 0) results[seq] = flat;
    }

    return {
        ...sample,
        results,
    };
};
