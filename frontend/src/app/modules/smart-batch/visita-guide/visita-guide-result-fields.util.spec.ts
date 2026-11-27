import { describe, expect, it } from 'vitest';
import { buildGuideResultFields } from './visita-guide-result-fields.util';

describe('buildGuideResultFields (#1195)', () => {
    it('formats SENA certificates cleanly, omits internal record hashes, and turns long tokenized download URLs into links', () => {
        const longToken = 'QTDJ8D0p0cblxgbh8stDsy7MNXqgcmWLVnj' + 'a'.repeat(180);
        const payload = [
            {
                record: '9513001025648CC80176161C',
                title: 'CURSO ESPECIAL EN',
                type: 'Título',
                program: 'ADMINISTRATIVO PARA JEFES DE AREA TRABAJO SEGURO EN ALTURAS',
                certificationDate: '06/08/2015',
                certificationSignature: '10/08/2015',
                certificateDownload: `https://certificados.sena.edu.co/certificados/descargar/9513001025648CC80176161?token=${longToken}`,
            },
            {
                record: '9513001025648CC80176161E',
                title: 'CURSO BASICO',
                type: 'Título',
                program: 'SEGURIDAD INDUSTRIAL',
                certificationDate: '12/09/2018',
                certificateDownload: `https://certificados.sena.edu.co/certificados/descargar/9513001025648CC80176161E?token=${longToken}`,
            },
        ];

        const fields = buildGuideResultFields({ featureCode: 'colombia_api_sena' }, payload, 'es', 16);

        expect(fields.some((f) => f.value.includes('9513001025648CC'))).toBe(false);
        expect(fields.some((f) => f.value.includes('token='))).toBe(false);
        expect(fields).toContainEqual({
            label: 'Certificado 1 · Programa',
            value: 'ADMINISTRATIVO PARA JEFES DE AREA TRABAJO SEGURO EN ALTURAS',
        });
        expect(fields).toContainEqual({
            label: 'Certificado 1 · Certificado',
            value: 'Descargar certificado',
            href: `https://certificados.sena.edu.co/certificados/descargar/9513001025648CC80176161?token=${longToken}`,
            linkKind: 'certificate',
        });
    });

    it('filters technical keys, raw JSON, and strips noisy Vehicle container prefixes while localizing labels', () => {
        const payload = {
            documentNumber: '80176161',
            documentType: 'CC',
            plate: 'BRH797',
            idConexion: 'internal-conn-99',
            rawText: 'RAW OCR BLOB',
            debugMeta: '{"internal":true}',
            vehicle: {
                cilindraje: '1360',
                claseVehiculo: 'AUTOMOVIL',
                capacidadCarga: '0',
            },
        };

        const fields = buildGuideResultFields({ featureCode: 'colombia_api_vehicle_simplified' }, payload, 'es', 12);

        expect(fields).toEqual([
            { label: 'Número de documento', value: '80176161' },
            { label: 'Tipo de documento', value: 'CC' },
            { label: 'Placa', value: 'BRH797' },
            { label: 'Cilindraje', value: '1360' },
            { label: 'Clase de vehículo', value: 'AUTOMOVIL' },
            { label: 'Capacidad de carga', value: '0' },
        ]);
    });

    it('handles fallback SENA list payloads even when featureCode is omitted', () => {
        const fields = buildGuideResultFields(
            {},
            [
                {
                    record: '9513001025648CC80176161C',
                    program: 'GESTION DE PROYECTOS',
                    certificationSignature: '10/08/2015',
                    certificateDownload: 'https://certificados.sena.edu.co/certificados/descargar/1?token=abc',
                },
            ],
            'es',
            12
        );

        expect(fields.some((f) => f.label.includes('Record'))).toBe(false);
        expect(fields).toContainEqual({
            label: 'Registro 1 · Fecha de firma',
            value: '10/08/2015',
        });
        expect(fields).toContainEqual({
            label: 'Registro 1 · Certificado',
            value: 'Descargar certificado',
            href: 'https://certificados.sena.edu.co/certificados/descargar/1?token=abc',
            linkKind: 'certificate',
        });
    });
});
