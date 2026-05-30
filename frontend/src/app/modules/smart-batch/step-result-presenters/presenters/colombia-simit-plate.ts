import {
    stepDisplayLabelFromSegments,
    type StepDisplayRow,
} from '../../step-result-display.util';
import type { ReportTableModel } from '../../colombia-vehicle-report/colombia-vehicle-report.types';
import {
    formatCop,
    formatInfractorLine,
    formatYesNo,
} from '../../colombia-vehicle-report/colombia-vehicle-report.utils';
import type { StepResultPresenter } from '../registry';

const row = (label: string, value: unknown): StepDisplayRow => ({
    label,
    value: value == null || value === '' ? '—' : String(value),
});

export const presentColombiaSimitPlate: StepResultPresenter = (data) => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    const o = data as Record<string, unknown>;

    const rows: StepDisplayRow[] = [
        row('Placa', o.plate),
        row('Total general', formatCop(o.totalGeneral)),
        row('Multas a pagar', o.totalMultasPagar),
        row('Paz y salvo', formatYesNo(o.pazSalvo)),
        row('Suspendida', formatYesNo(o.suspendida)),
        row('Cancelada', formatYesNo(o.cancelada)),
    ];

    const multas = o.multas;
    if (!Array.isArray(multas) || multas.length === 0) {
        rows.push(row('Multas', 'Sin multas registradas'));
        return rows;
    }

    multas.forEach((multa, index) => {
        const m = (multa ?? {}) as Record<string, unknown>;
        const prefix = `Multa ${index + 1}`;
        rows.push(
            row(`${prefix} — Resolución`, m.numeroResolucion),
            row(`${prefix} — Organismo`, m.organismoTransito),
            row(`${prefix} — Fecha comparendo`, m.fechaComparendo),
            row(`${prefix} — Estado cartera`, m.estadoCartera),
            row(`${prefix} — Valor a pagar`, formatCop(m.valorPagar ?? m.valor)),
            row(`${prefix} — Infractor`, formatInfractorLine(m.infractor))
        );

        const infracciones = m.infracciones;
        if (Array.isArray(infracciones)) {
            infracciones.forEach((inf, j) => {
                const item = (inf ?? {}) as Record<string, unknown>;
                const code = item.codigoInfraccion ?? '';
                const desc = item.descripcionInfraccion ?? '';
                rows.push({
                    label: stepDisplayLabelFromSegments([prefix, 'Infracción', String(j + 1)]),
                    value: `${code} — ${desc} (${formatCop(item.valorInfraccion)})`,
                });
            });
        }
    });

    return rows;
};

export const extractColombiaSimitPlateTables = (data: unknown): ReportTableModel[] => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return [];
    const multas = (data as Record<string, unknown>).multas;
    if (!Array.isArray(multas) || multas.length === 0) return [];

    return [
        {
            id: 'simit-fines',
            title: 'Multas SIMIT',
            columns: [
                { key: 'resolucion', label: 'Resolución' },
                { key: 'organismo', label: 'Organismo' },
                { key: 'fecha', label: 'Fecha' },
                { key: 'valorPagar', label: 'Valor a pagar' },
                { key: 'estado', label: 'Estado' },
            ],
            rows: multas.map((multa) => {
                const m = (multa ?? {}) as Record<string, unknown>;
                return {
                    resolucion: String(m.numeroResolucion ?? '—'),
                    organismo: String(m.organismoTransito ?? '—'),
                    fecha: String(m.fechaComparendo ?? m.fechaResolucion ?? '—'),
                    valorPagar: formatCop(m.valorPagar ?? m.valor),
                    estado: String(m.estadoCartera ?? '—'),
                };
            }),
        },
    ];
};
