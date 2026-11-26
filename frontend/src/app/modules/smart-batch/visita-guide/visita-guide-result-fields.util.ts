import { getStepDisplayFields, StepDisplayContext } from '../step-result-presenters/registry';

export interface GuideResultField {
    label: string;
    value: string;
    href?: string;
    linkKind?: 'certificate' | 'link';
}

const HIDDEN_TECHNICAL_SEGMENT =
    /^(pdf\s*base64|raw\s*text|extraction\s*method|id\s*conexion|id\s*proceso|id\s*reg\s*sujeto|id\s*reg\s*proceso|id\s*reg\s*actuacion|captcha|cache|cookie|proxy|viewstate|raw\s*html|html|base64|connection\s*id|keywords|numero\s*interno|array\s*name|legend|stack|trace|client\s*id|request\s*id|job\s*id|attempt\s*id|status\s*code|access\s*token|refresh\s*token|api\s*key|client\s*secret|token|id|_id|v)$/i;

const NOISY_CONTAINER_PREFIX = /^(vehicle|vehiculo|vehículo|citizen|company|result|data)$/i;

const LABELS_ES: Record<string, string> = {
    'document number': 'Número de documento',
    'document type': 'Tipo de documento',
    plate: 'Placa',
    vin: 'VIN',
    capacidadcarga: 'Capacidad de carga',
    'capacidad carga': 'Capacidad de carga',
    cilindraje: 'Cilindraje',
    ciudad: 'Ciudad',
    clasevehiculo: 'Clase de vehículo',
    'clase vehiculo': 'Clase de vehículo',
    clasificacion: 'Clasificación',
    marca: 'Marca',
    mark: 'Marca',
    linea: 'Línea',
    modelo: 'Modelo',
    color: 'Color',
    estado: 'Estado',
    status: 'Estado',
    tiposervicio: 'Tipo de servicio',
    'tipo servicio': 'Tipo de servicio',
    service: 'Servicio',
    fullname: 'Nombre completo',
    'full name': 'Nombre completo',
    firstname: 'Nombre',
    'first name': 'Nombre',
    lastname: 'Apellido',
    'last name': 'Apellido',
    program: 'Programa',
    programa: 'Programa',
    title: 'Título',
    'título': 'Título',
    type: 'Tipo',
    tipo: 'Tipo',
    certificationdate: 'Fecha de certificación',
    'certification date': 'Fecha de certificación',
    certificationsignature: 'Fecha de firma',
    'certification signature': 'Fecha de firma',
    certificatedownload: 'Certificado',
    'certificate download': 'Certificado',
    certificado: 'Certificado',
};

const LABELS_EN: Record<string, string> = {
    certificatedownload: 'Certificate',
    'certificate download': 'Certificate',
    certificado: 'Certificate',
};

const isSpanish = (lang?: string): boolean =>
    !String(lang || 'es').toLowerCase().startsWith('en');

const safeHttpUrl = (raw: string): string | undefined => {
    const trimmed = raw.trim();
    if (!/^https?:\/\/\S+$/i.test(trimmed)) return undefined;
    try {
        const parsed = new URL(trimmed);
        return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.toString() : undefined;
    } catch {
        return undefined;
    }
};

const looksLikeRawJson = (value: string): boolean => {
    const trimmed = value.trim();
    if (trimmed.length < 4) return false;
    return (trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'));
};

const isOpaqueRecordKey = (leafSegment: string, value: string): boolean => {
    if (!/^(record|registro|record id|id)$/i.test(leafSegment.trim())) return false;
    const trimmed = value.trim();
    return /^[A-Za-z0-9_-]{16,}$/.test(trimmed) && !/\s/.test(trimmed);
};

const isTechnicalRow = (segments: string[], value: string): boolean => {
    const trimmedValue = value.trim();
    if (!trimmedValue || trimmedValue === '[omitted]' || trimmedValue === '[Circular]' || trimmedValue === '[Max depth]') {
        return true;
    }
    if (looksLikeRawJson(trimmedValue)) return true;

    const leaf = segments[segments.length - 1] ?? '';
    if (isOpaqueRecordKey(leaf, trimmedValue)) return true;

    return segments.some((segment) => {
        const normalized = segment.trim().toLowerCase();
        if (!normalized) return false;
        if (HIDDEN_TECHNICAL_SEGMENT.test(normalized)) return true;
        if (normalized === 'signature' && segments.length === 1) return true;
        if (normalized.startsWith('…')) return true;
        return false;
    });
};

const translateSegment = (segment: string, es: boolean): string => {
    const trimmed = segment.trim();
    const key = trimmed.toLowerCase();
    if (es) {
        return LABELS_ES[key] ?? LABELS_ES[key.replace(/\s+/g, '')] ?? trimmed;
    }
    return LABELS_EN[key] ?? LABELS_EN[key.replace(/\s+/g, '')] ?? trimmed;
};

const formatDisplayLabel = (rawLabel: string, es: boolean): string => {
    if (rawLabel === '…truncated' || rawLabel.startsWith('…')) return '';
    const segments = rawLabel
        .split(' › ')
        .map((part) => part.trim())
        .filter(Boolean);
    if (!segments.length) return '';

    const cleaned: string[] = [];
    for (let i = 0; i < segments.length; i += 1) {
        const part = segments[i];
        if (i === 0 && segments.length > 1 && NOISY_CONTAINER_PREFIX.test(part)) {
            continue;
        }
        if (/^\d+$/.test(part) && i === 0 && segments.length > 1) {
            cleaned.push(`${es ? 'Registro' : 'Item'} ${part}`);
            continue;
        }
        cleaned.push(translateSegment(part, es));
    }

    return cleaned.join(' · ') || rawLabel;
};

/**
 * Normalizes step results for client-facing UI cards:
 * hides internal/technical keys & raw JSON, localizes common labels,
 * and converts safe download/reference URLs into clean action links.
 */
export const buildGuideResultFields = (
    ctx: StepDisplayContext,
    payload: unknown,
    lang = 'es',
    maxFields = 12
): GuideResultField[] => {
    const es = isSpanish(lang);
    const rawRows = getStepDisplayFields(ctx, payload);
    const out: GuideResultField[] = [];
    const seenLabels = new Set<string>();

    for (const row of rawRows) {
        const rawLabel = String(row.label ?? '').trim();
        const rawValue = String(row.value ?? '').trim();
        if (!rawLabel || rawLabel === '…truncated') continue;

        const segments = rawLabel
            .split(' › ')
            .map((part) => part.trim())
            .filter(Boolean);
        if (isTechnicalRow(segments, rawValue)) continue;

        const label = formatDisplayLabel(rawLabel, es);
        if (!label) continue;

        const dedupedLabel = seenLabels.has(label) ? `${label} (${out.length + 1})` : label;
        seenLabels.add(dedupedLabel);

        const href = safeHttpUrl(rawValue);
        if (href) {
            const isCert = /certif|download|descarg|pdf|constancia|diploma/i.test(`${rawLabel} ${href}`);
            out.push({
                label: dedupedLabel,
                value: isCert
                    ? es
                        ? 'Descargar certificado'
                        : 'Download certificate'
                    : es
                      ? 'Abrir enlace'
                      : 'Open link',
                href,
                linkKind: isCert ? 'certificate' : 'link',
            });
        } else {
            out.push({
                label: dedupedLabel,
                value: rawValue,
            });
        }

        if (out.length >= maxFields) break;
    }

    return out;
};
