import {
    stepDisplayLabelFromSegments,
    type StepDisplayRow,
} from '../../step-result-display.util';
import type { ReportTableModel } from '../../colombia-vehicle-report/colombia-vehicle-report.types';
import {
    formatYesNo,
    pickRtmForReport,
    pickVigenteSoat,
} from '../../colombia-vehicle-report/colombia-vehicle-report.utils';
import type { StepResultPresenter } from '../registry';

const row = (label: string, value: unknown): StepDisplayRow => ({
    label,
    value: value == null || value === '' ? '—' : String(value),
});

const buildLiensTable = (items: unknown): ReportTableModel | undefined => {
    if (!Array.isArray(items) || items.length === 0) return undefined;
    return {
        id: 'runt-liens',
        title: 'Garantías a favor de',
        columns: [
            { key: 'acreedor', label: 'Acreedor' },
            { key: 'numeroDocumentoAcreedor', label: 'Documento' },
            { key: 'fechaInscripcion', label: 'Fecha inscripción' },
        ],
        rows: items.map((item) => {
            const g = (item ?? {}) as Record<string, unknown>;
            return {
                acreedor: String(g.acreedor ?? '—'),
                numeroDocumentoAcreedor: String(g.numeroDocumentoAcreedor ?? '—'),
                fechaInscripcion: String(g.fechaInscripcion ?? '—'),
            };
        }),
    };
};

const buildProceduresTable = (items: unknown): ReportTableModel | undefined => {
    if (!Array.isArray(items) || items.length === 0) return undefined;
    return {
        id: 'runt-procedures',
        title: 'Solicitudes',
        columns: [
            { key: 'fechaSolicitud', label: 'Fecha' },
            { key: 'estado', label: 'Estado' },
            { key: 'tramitesRealizados', label: 'Trámites' },
            { key: 'entidad', label: 'Entidad' },
        ],
        rows: items.map((item) => {
            const s = (item ?? {}) as Record<string, unknown>;
            return {
                fechaSolicitud: String(s.fechaSolicitud ?? '—'),
                estado: String(s.estado ?? '—'),
                tramitesRealizados: String(s.tramitesRealizados ?? '—'),
                entidad: String(s.entidad ?? '—'),
            };
        }),
    };
};

export const presentColombiaRuntVehicleByPlate: StepResultPresenter = (data) => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    const o = data as Record<string, unknown>;
    const info = (o.informacionGeneral ?? {}) as Record<string, unknown>;
    const blindaje = (o.informacionBlindaje ?? {}) as Record<string, unknown>;
    const soat = pickVigenteSoat(o.soat as Record<string, unknown>[] | undefined) as
        | Record<string, unknown>
        | undefined;
    const rtmPick = pickRtmForReport(o.tecnoMecanica as Record<string, unknown>[] | undefined);
    const rtm = rtmPick?.row;

    const rows: StepDisplayRow[] = [
        row('Placa', info.noPlaca ?? o.plate),
        row('VIN', o.vin ?? info.noVin),
        row('Marca', info.marca),
        row('Modelo', info.modelo),
        row('Línea', info.linea),
        row('Color', info.color),
        row('Clase', info.claseVehiculo),
        row('Carrocería', info.tipoCarroceria),
        row('Combustible', info.tipoCombustible),
        row('Servicio', info.tipoServicio),
        row('Estado vehículo', info.estadoDelVehiculo),
        row('Organismo tránsito', info.organismoTransito),
        row('Motor', info.noMotor),
        row('Chasis', info.noChasis),
        row('Fecha matrícula', info.fechaMatricula),
        row('Prendas', info.prendas),
        row('Gravámenes', formatYesNo(info.tieneGravamenes)),
        row('Blindado', formatYesNo(blindaje.blindado)),
        row('Validación DIAN', info.validacionDIAN),
    ];

    if (soat) {
        rows.push(
            row('SOAT — Póliza', soat.noPoliza),
            row('SOAT — Estado', soat.estado),
            row('SOAT — Vigencia', soat.fechaVigencia),
            row('SOAT — Vencimiento', soat.fechaVencimiento),
            row('SOAT — Aseguradora', soat.entidadExpideSoat)
        );
    }

    if (rtm) {
        rows.push(
            row('RTM — Certificado', rtm.nroCertificado),
            row('RTM — Estado', rtm.estado),
            row('RTM — Vigente', rtmPick?.isVigente ? 'Sí' : 'No (vencida o última registrada)'),
            row('RTM — Vencimiento', rtm.fechaVencimiento),
            row('RTM — CDA', rtm.cdaExpide)
        );
    }

    const liens = buildLiensTable(o.garantiasFavorDe);
    if (liens?.rows.length) {
        liens.rows.forEach((line, i) => {
            rows.push({
                label: stepDisplayLabelFromSegments(['Garantías', String(i + 1)]),
                value: `${line.acreedor} · ${line.numeroDocumentoAcreedor} · ${line.fechaInscripcion}`,
            });
        });
    }

    const procedures = buildProceduresTable(o.solicitudes);
    if (procedures?.rows.length) {
        procedures.rows.forEach((line, i) => {
            rows.push({
                label: stepDisplayLabelFromSegments(['Solicitudes', String(i + 1)]),
                value: `${line.fechaSolicitud} · ${line.estado} · ${line.tramitesRealizados}`,
            });
        });
    }

    return rows;
};

export const extractColombiaRuntTables = (data: unknown): ReportTableModel[] => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return [];
    const o = data as Record<string, unknown>;
    return [buildLiensTable(o.garantiasFavorDe), buildProceduresTable(o.solicitudes)].filter(
        (t): t is ReportTableModel => !!t
    );
};
