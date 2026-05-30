import {
    stepDisplayLabelFromSegments,
    type StepDisplayRow,
} from '../../step-result-display.util';
import type { ReportTableModel } from '../../colombia-vehicle-report/colombia-vehicle-report.types';
import {
    filterValueModelByYear,
    formatCop,
} from '../../colombia-vehicle-report/colombia-vehicle-report.utils';
import type { StepResultPresenter } from '../registry';

const row = (label: string, value: unknown): StepDisplayRow => ({
    label,
    value: value == null || value === '' ? '—' : String(value),
});

export const presentColombiaFasecoldaValues: StepResultPresenter = (data) => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    const o = data as Record<string, unknown>;

    const rows: StepDisplayRow[] = [
        row('Placa', o.plate),
        row('Marca', o.marke ?? o.marca),
        row('Año', o.year),
        row('Código Fasecolda', o.code),
        row('Clase', o.class),
        row('Tipología', o.typology),
        row('Combustible', o.fuel),
        row('Servicio', o.service),
        row('Línea 1', o.line1),
        row('Línea 2', o.line2),
        row('Línea 3', o.line3),
        row('BCPP', formatCop(o.bcpp)),
        row('Transmisión', o.transmission),
        row('Frenos', o.brakes),
    ];

    const filtered = filterValueModelByYear(o.valueModel, o.year);
    if (filtered.length === 0) {
        rows.push(row('Valores por modelo', '—'));
        return rows;
    }

    filtered.forEach((vm, i) => {
        const v = vm as Record<string, unknown>;
        rows.push({
            label: stepDisplayLabelFromSegments(['Valor', String(i + 1)]),
            value: `${v.estado} ${v.modelo}: ${formatCop(v.valor)}`,
        });
    });

    return rows;
};

export const extractColombiaFasecoldaValuesTables = (data: unknown): ReportTableModel[] => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return [];
    const o = data as Record<string, unknown>;
    const filtered = filterValueModelByYear(o.valueModel, o.year);
    if (filtered.length === 0) return [];

    return [
        {
            id: 'fasecolda-valuation',
            title: 'Valores Fasecolda',
            columns: [
                { key: 'modelo', label: 'Modelo' },
                { key: 'estado', label: 'Estado' },
                { key: 'valor', label: 'Valor' },
            ],
            rows: filtered.map((vm) => {
                const v = vm as Record<string, unknown>;
                return {
                    modelo: String(v.modelo ?? '—'),
                    estado: String(v.estado ?? '—'),
                    valor: formatCop(v.valor),
                };
            }),
        },
    ];
};
