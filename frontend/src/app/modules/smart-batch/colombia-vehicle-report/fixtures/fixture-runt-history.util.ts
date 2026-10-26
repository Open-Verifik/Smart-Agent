/** Target history length for SOAT / RTM rows in preview fixtures (inclusive range). */
export const FIXTURE_SOAT_RTM_MIN = 3;
export const FIXTURE_SOAT_RTM_MAX = 4;

export type FixtureRuntHistoryOptions = {
    /** Stable offset so different plates get 3 vs 4 rows. */
    seed?: number;
    min?: number;
    max?: number;
    plate?: string;
};

const defaultSoatRow = (plate: string): Record<string, unknown> => ({
    origen: 'NACIONAL',
    tipoTarifa: '112',
    noPoliza: '900000001',
    fechaExpedicion: '01/01/2024',
    fechaExpediSoat: '01/01/2024',
    fechaVigencia: '02/01/2024',
    fechaVencimiento: '01/01/2025',
    entidadExpideSoat: 'SEGUROS DE EJEMPLO S.A.',
    estado: 'NO VIGENTE',
    estadoSoat: 'EMITIDA',
    placa: plate || null,
    nombrePais: null,
});

const defaultRtmRow = (plate: string): Record<string, unknown> => ({
    fechaExpedicion: '15/03/2023',
    fechaVencimiento: '15/03/2024',
    cdaExpide: 'CDA DIAGNÓSTICO EJEMPLO',
    estado: 'APROBADA',
    tipoRevision: 'REVISION TECNICO-MECANICO',
    vigente: 'NO',
    nroCertificado: '900000001',
    numeroPlaca: plate || null,
    informacionConsistente: 'SI',
    url: null,
});

const shiftRuntDate = (raw: unknown, yearsBack: number): string => {
    const text = String(raw ?? '').trim();
    const match = text.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!match) return text;
    const date = new Date(Number(match[3]) - yearsBack, Number(match[2]) - 1, Number(match[1]));
    if (Number.isNaN(date.getTime())) return text;
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    return `${dd}/${mm}/${date.getFullYear()}`;
};

const targetCount = (seed: number, min: number, max: number): number =>
    min + (Math.abs(seed) % (max - min + 1));

const expandHistory = <T extends Record<string, unknown>>(
    items: T[] | undefined,
    target: number,
    mutate: (base: T, index: number) => T,
    fallback: () => T
): T[] => {
    const seedRows = items?.length ? [...items] : [fallback()];
    if (seedRows.length >= target) {
        return seedRows.slice(0, target);
    }
    const out: T[] = [...seedRows];
    while (out.length < target) {
        const base = seedRows[out.length % seedRows.length];
        out.push(mutate({ ...base } as T, out.length));
    }
    return out;
};

/**
 * Ensures RUNT preview payloads expose 3–4 SOAT policies and 3–4 RTM certificates
 * so report templates can exercise tables and conditional image rules.
 */
export function enrichRuntVehicleHistory(
    runt: Record<string, unknown>,
    options?: FixtureRuntHistoryOptions
): Record<string, unknown> {
    const min = options?.min ?? FIXTURE_SOAT_RTM_MIN;
    const max = options?.max ?? FIXTURE_SOAT_RTM_MAX;
    const seed = options?.seed ?? 0;
    const plate = String(options?.plate ?? runt.plate ?? runt.noPlaca ?? '').trim();
    const soatTarget = targetCount(seed, min, max);
    const rtmTarget = targetCount(seed + 17, min, max);

    const soat = expandHistory(
        runt.soat as Record<string, unknown>[] | undefined,
        soatTarget,
        (row, index) => {
            if (index === 0) return row;
            const yearsBack = index;
            const next = { ...row };
            if (next.fechaExpedicion) next.fechaExpedicion = shiftRuntDate(next.fechaExpedicion, yearsBack);
            if (next.fechaExpediSoat) next.fechaExpediSoat = shiftRuntDate(next.fechaExpediSoat, yearsBack);
            if (next.fechaVigencia) next.fechaVigencia = shiftRuntDate(next.fechaVigencia, yearsBack);
            if (next.fechaVencimiento) next.fechaVencimiento = shiftRuntDate(next.fechaVencimiento, yearsBack);
            if (next.noPoliza != null) next.noPoliza = `${String(next.noPoliza).replace(/\d+$/, '')}${9000 + index}`;
            if (String(next.estado ?? '').toUpperCase() === 'VIGENTE') {
                next.estado = 'NO VIGENTE';
            }
            return next;
        },
        () => defaultSoatRow(plate)
    );

    const tecnoMecanica = expandHistory(
        runt.tecnoMecanica as Record<string, unknown>[] | undefined,
        rtmTarget,
        (row, index) => {
            if (index === 0) return row;
            const yearsBack = index;
            const next = { ...row };
            if (next.fechaExpedicion) next.fechaExpedicion = shiftRuntDate(next.fechaExpedicion, yearsBack);
            if (next.fechaVencimiento) next.fechaVencimiento = shiftRuntDate(next.fechaVencimiento, yearsBack);
            if (next.nroCertificado != null) next.nroCertificado = `${String(next.nroCertificado).slice(0, -3)}${100 + index}`;
            next.vigente = 'NO';
            return next;
        },
        () => defaultRtmRow(plate)
    );

    return { ...runt, soat, tecnoMecanica };
}

/** Applies RUNT history enrichment to every vehicle-by-plate result in a preview row. */
export function enrichResultsRecordForPreview(
    results: Record<number | string, unknown> | undefined,
    seed = 0
): Record<number | string, unknown> {
    if (!results) return {};
    const next: Record<number | string, unknown> = { ...results };
    for (const [key, value] of Object.entries(next)) {
        if (!value || typeof value !== 'object' || Array.isArray(value)) continue;
        const payload = value as Record<string, unknown>;
        if (!('informacionGeneral' in payload) && !('soat' in payload) && !('tecnoMecanica' in payload)) {
            continue;
        }
        const stepSeed = seed + Number(key) * 31;
        next[key] = enrichRuntVehicleHistory(payload, {
            seed: stepSeed,
            plate: String(payload.plate ?? payload.noPlaca ?? ''),
        });
    }
    return next;
}
