import {
    enrichResultsRecordForPreview,
    enrichRuntVehicleHistory,
    FIXTURE_SOAT_RTM_MAX,
    FIXTURE_SOAT_RTM_MIN,
} from './fixture-runt-history.util';

describe('fixture-runt-history.util', () => {
    it('expands sparse RUNT to 3–4 SOAT and RTM rows', () => {
        const runt = enrichRuntVehicleHistory(
            {
                plate: 'TST123',
                soat: [{ estado: 'VIGENTE', noPoliza: '1', fechaVencimiento: '01/01/2026' }],
                tecnoMecanica: [{ vigente: 'NO', nroCertificado: '99', fechaExpedicion: '01/01/2024' }],
            },
            { seed: 0 }
        );
        const soat = runt.soat as unknown[];
        const rtm = runt.tecnoMecanica as unknown[];
        expect(soat.length).toBeGreaterThanOrEqual(FIXTURE_SOAT_RTM_MIN);
        expect(soat.length).toBeLessThanOrEqual(FIXTURE_SOAT_RTM_MAX);
        expect(rtm.length).toBeGreaterThanOrEqual(FIXTURE_SOAT_RTM_MIN);
        expect(rtm.length).toBeLessThanOrEqual(FIXTURE_SOAT_RTM_MAX);
        expect((soat[0] as { estado?: string }).estado).toBe('VIGENTE');
    });

    it('trims long SOAT history to at most four rows', () => {
        const many = Array.from({ length: 6 }, (_, index) => ({
            estado: 'NO VIGENTE',
            noPoliza: String(index),
        }));
        const runt = enrichRuntVehicleHistory({ soat: many, tecnoMecanica: many }, { seed: 1 });
        expect((runt.soat as unknown[]).length).toBeLessThanOrEqual(FIXTURE_SOAT_RTM_MAX);
    });

    it('enriches RUNT entries inside a results map', () => {
        const results = enrichResultsRecordForPreview(
            {
                1: { plate: 'ABC', informacionGeneral: {}, soat: [], tecnoMecanica: [] },
                2: { multas: [] },
            },
            5
        );
        const runt = results[1] as { soat: unknown[]; tecnoMecanica: unknown[] };
        expect(runt.soat.length).toBeGreaterThanOrEqual(FIXTURE_SOAT_RTM_MIN);
        expect(runt.tecnoMecanica.length).toBeGreaterThanOrEqual(FIXTURE_SOAT_RTM_MIN);
        expect(results[2]).toEqual({ multas: [] });
    });
});
