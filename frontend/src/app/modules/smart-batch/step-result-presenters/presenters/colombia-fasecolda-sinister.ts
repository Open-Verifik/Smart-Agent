import {
    stepDisplayLabelFromSegments,
    type StepDisplayRow,
} from '../../step-result-display.util';
import type { ReportTableModel } from '../../colombia-vehicle-report/colombia-vehicle-report.types';
import { isBenignNoRecord } from '../../colombia-vehicle-report/colombia-vehicle-report.utils';
import type { StepResultPresenter } from '../registry';

const row = (label: string, value: unknown): StepDisplayRow => ({
    label,
    value: value == null || value === '' ? '—' : String(value),
});

export const presentColombiaFasecoldaSinister: StepResultPresenter = (data) => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    const o = data as Record<string, unknown>;
    const claims = o.sinister ?? o.siniestros ?? o.claims;

    if (isBenignNoRecord(data)) {
        return [row('Historial de siniestros', 'Sin historial registrado')];
    }

    if (!Array.isArray(claims) || claims.length === 0) {
        return [
            row('Placa', o.plate),
            row('Historial de siniestros', 'Sin siniestros registrados'),
        ];
    }

    const rows: StepDisplayRow[] = [row('Placa', o.plate), row('Total siniestros', claims.length)];

    claims.forEach((claim, i) => {
        const c = (claim ?? {}) as Record<string, unknown>;
        rows.push({
            label: stepDisplayLabelFromSegments(['Siniestro', String(i + 1)]),
            value: [
                c.accidentDate ?? c.fechaAccidente ?? c.fecha,
                c.protection ?? c.proteccion ?? c.tipo,
                c.id,
            ]
                .filter((p) => p != null && String(p).trim() !== '')
                .join(' · '),
        });
    });

    return rows;
};

export const extractColombiaFasecoldaSinisterTables = (data: unknown): ReportTableModel[] => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return [];
    if (isBenignNoRecord(data)) return [];

    const claims = (data as Record<string, unknown>).sinister;
    if (!Array.isArray(claims) || claims.length === 0) return [];

    return [
        {
            id: 'fasecolda-claims',
            title: 'Historial de siniestros',
            columns: [
                { key: 'id', label: 'ID' },
                { key: 'fecha', label: 'Fecha accidente' },
                { key: 'proteccion', label: 'Protección' },
            ],
            rows: claims.map((claim) => {
                const c = (claim ?? {}) as Record<string, unknown>;
                return {
                    id: String(c.id ?? '—'),
                    fecha: String(c.accidentDate ?? c.fechaAccidente ?? '—'),
                    proteccion: String(c.protection ?? c.proteccion ?? '—'),
                };
            }),
        },
    ];
};
