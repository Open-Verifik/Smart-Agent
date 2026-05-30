import {
    stepDisplayLabelFromSegments,
    type StepDisplayRow,
} from '../../step-result-display.util';
import type { ReportTableModel } from '../../colombia-vehicle-report/colombia-vehicle-report.types';
import { formatCop } from '../../colombia-vehicle-report/colombia-vehicle-report.utils';
import type { StepResultPresenter } from '../registry';

const row = (label: string, value: unknown): StepDisplayRow => ({
    label,
    value: value == null || value === '' ? '—' : String(value),
});

export const presentColombiaSimitAgreements: StepResultPresenter = (data) => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    const o = data as Record<string, unknown>;

    const rows: StepDisplayRow[] = [
        row('Documento', o.documentNumber),
        row('Tipo documento', o.documentType),
        row('Total acuerdos', o.totalAp ?? o.cantAcuerdosPagar),
        row('Total general', formatCop(o.totalGeneral)),
    ];

    const acuerdos = o.acuerdosPago;
    if (!Array.isArray(acuerdos) || acuerdos.length === 0) {
        rows.push(row('Acuerdos de pago', 'Sin acuerdos registrados'));
        return rows;
    }

    acuerdos.forEach((item, i) => {
        const a = (item ?? {}) as Record<string, unknown>;
        rows.push({
            label: stepDisplayLabelFromSegments(['Acuerdo', String(i + 1)]),
            value: [
                a.numeroResolucion,
                a.organismoTransito,
                formatCop(a.valorPagar ?? a.valor),
            ]
                .filter((p) => p != null && String(p).trim() !== '')
                .join(' · '),
        });
    });

    return rows;
};

export const extractColombiaSimitAgreementsTables = (data: unknown): ReportTableModel[] => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return [];
    const acuerdos = (data as Record<string, unknown>).acuerdosPago;
    if (!Array.isArray(acuerdos) || acuerdos.length === 0) return [];

    return [
        {
            id: 'simit-agreements',
            title: 'Acuerdos de pago SIMIT',
            columns: [
                { key: 'resolucion', label: 'Resolución' },
                { key: 'organismo', label: 'Organismo' },
                { key: 'valor', label: 'Valor' },
            ],
            rows: acuerdos.map((item) => {
                const a = (item ?? {}) as Record<string, unknown>;
                return {
                    resolucion: String(a.numeroResolucion ?? '—'),
                    organismo: String(a.organismoTransito ?? '—'),
                    valor: formatCop(a.valorPagar ?? a.valor),
                };
            }),
        },
    ];
};
