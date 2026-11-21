import type {
    ScoreSettings,
    VerificationCategory,
    VerificationCheck,
    VerificationFinding,
    VerificationScoreModel,
    VerificationSource,
} from './report-theme.model';
import { decisionForScore } from './report-theme.format';

interface SampleInputShape {
    verificationScore?: VerificationScoreModel;
    reportId?: string;
    batchName?: string;
    inputData?: Record<string, any>;
    results?: Record<string, any>;
    steps?: { sequence: number; featureCode?: string; appFeature?: { code?: string }; name?: string; enabled?: boolean }[];
    errors?: { step: number; code?: string; message?: string }[];
    scoreProfile?: string;
}

const maskDoc = (val: unknown): string => {
    const s = String(val ?? '').trim();
    if (!s) return '—';
    return s.length <= 4 ? s : `••••${s.slice(-4)}`;
};

const formatCop = (val: unknown): string | null => {
    const num = Number(String(val ?? '').replace(/[^0-9.-]/g, ''));
    if (!Number.isFinite(num) || num <= 0) return null;
    return `$${Math.round(num).toLocaleString('es-CO')} COP`;
};

const firstPayloadByPrefix = (
    results: Record<string, any>,
    steps: { sequence: number; featureCode?: string; appFeature?: { code?: string } }[],
    predicate: (code: string) => boolean
): Record<string, any> | null => {
    for (const step of steps) {
        const code = step.featureCode || step.appFeature?.code || '';
        if (predicate(code) && results[step.sequence]) return results[step.sequence];
    }
    return null;
};

/**
 * Dynamically builds a preview VerificationScoreModel from real template `sampleData`
 * (Colombia Vehicle, Driver, Identity) so previews never hardcode another country's sample.
 */
export const buildScoreModelFromSampleData = (
    sample: SampleInputShape,
    settings: ScoreSettings | null | undefined,
    language: 'en' | 'es' = 'es'
): VerificationScoreModel => {
    const profile = settings?.profile || sample.scoreProfile || 'cabify_driver';
    const input = sample.inputData ?? {};
    const results = sample.results ?? {};
    const rawSteps: NonNullable<SampleInputShape['steps']> = Array.isArray(sample.steps)
        ? sample.steps.filter((s) => s.enabled !== false)
        : [];
    const steps: NonNullable<SampleInputShape['steps']> = rawSteps.length
        ? rawSteps
        : Object.keys(results)
              .map((k) => Number(k))
              .filter((n) => Number.isFinite(n))
              .sort((a, b) => a - b)
              .map((sequence) => ({
                  sequence,
                  enabled: true,
                  featureCode: `step_${sequence}`,
                  name: `Paso ${sequence}`,
              }));
    const errors = Array.isArray(sample.errors) ? sample.errors : [];

    if (!steps.length && !Object.keys(results).length && !Object.keys(input).length) {
        return syntheticVerificationScore(profile, language);
    }

    const runPayload =
        firstPayloadByPrefix(results, steps, (c) => c.includes('vehicle_complete')) ??
        Object.values(results).find((r) => r && typeof r === 'object' && 'informacionGeneral' in r) ??
        null;
    const simitPayload =
        firstPayloadByPrefix(results, steps, (c) => c.includes('simit')) ??
        Object.values(results).find((r) => r && typeof r === 'object' && ('multas' in r || 'fines' in r)) ??
        null;
    const fasecoldaPayload =
        firstPayloadByPrefix(results, steps, (c) => c.includes('valores_fasecolda')) ??
        Object.values(results).find((r) => r && typeof r === 'object' && 'valueModel' in r) ??
        null;
    const claimsPayload =
        firstPayloadByPrefix(results, steps, (c) => c.includes('sinister_fasecolda')) ??
        Object.values(results).find((r) => r && typeof r === 'object' && ('sinister' in r || 'claims' in r)) ??
        null;

    const gen = runPayload?.informacionGeneral ?? {};
    const isVehicle = Boolean(
        runPayload ||
            fasecoldaPayload ||
            profile === 'fleet' ||
            profile === 'vehicle_purchase' ||
            (input['plate'] && !input['fullName'])
    );

    const errSteps = new Set(errors.map((e) => Number(e.step)));
    const checks: VerificationCheck[] = [];
    const findings: VerificationFinding[] = [];
    const sources: VerificationSource[] = [];
    const categories: VerificationCategory[] = [];
    const isEn = language === 'en';

    if (isVehicle) {
        const plate = String(gen.noPlaca || runPayload?.plate || input['plate'] || 'DSV067');
        const makeModel = [gen.marca || fasecoldaPayload?.marke, gen.linea || fasecoldaPayload?.line1, gen.modelo]
            .filter(Boolean)
            .join(' ');
        const latestSoat = Array.isArray(runPayload?.soat) ? runPayload.soat[0] : null;
        const latestRtm = Array.isArray(runPayload?.tecnoMecanica) ? runPayload.tecnoMecanica[0] : null;
        const soatOk = latestSoat ? /vigente/i.test(String(latestSoat.estado || '')) : true;
        const rtmOk = latestRtm ? latestRtm.vigente === 'SI' || /vigente|aprobad/i.test(String(latestRtm.estado || '')) : true;
        const fineCount = Array.isArray(simitPayload?.fines)
            ? simitPayload.fines.length
            : Array.isArray(simitPayload?.multas)
              ? simitPayload.multas.length
              : Number(simitPayload?.cantMultasPagar ?? 0);
        const latestVal = Array.isArray(fasecoldaPayload?.valueModel)
            ? fasecoldaPayload.valueModel.find((v: any) => String(v.modelo) === String(gen.modelo)) ??
              fasecoldaPayload.valueModel[0]
            : null;
        const valCop = latestVal?.valor ? formatCop(Number(latestVal.valor) * 1000) : null;
        const claimsCount = Array.isArray(claimsPayload?.sinister) ? claimsPayload.sinister.length : Number(claimsPayload?.totalClaims ?? 0);

        const vehicleStatus: 'clear' | 'review' = soatOk && rtmOk && fineCount === 0 && claimsCount === 0 ? 'clear' : 'review';
        const scoreVal = vehicleStatus === 'clear' ? 1 : 0.85;

        categories.push({ id: 'vehicle', labelKey: 'reportTheme.sample.catVehicle', label: isEn ? 'Vehicle' : 'Vehículo', score: scoreVal, weight: 0.7 });
        categories.push({ id: 'driving', labelKey: 'reportTheme.sample.catDriving', label: isEn ? 'Traffic & Fines' : 'Tránsito y multas', score: fineCount === 0 ? 1 : 0.75, weight: 0.3 });

        checks.push({
            id: 'vehicle_registry',
            labelKey: 'reportTheme.sample.catVehicle',
            label: isEn ? 'Vehicle registry & status' : 'Registro oficial del vehículo',
            status: 'clear',
            score: 1,
            deduction: 0,
            fields: [
                { labelKey: 'reportTheme.sample.fieldPlate', label: isEn ? 'Plate' : 'Placa', value: plate },
                { labelKey: 'reportTheme.sample.vehicle', label: isEn ? 'Vehicle' : 'Vehículo', value: makeModel || plate },
                { labelKey: 'reportTheme.sample.status', label: isEn ? 'Status' : 'Estado', value: String(gen.estadoDelVehiculo || 'ACTIVO') },
            ],
        });
        checks.push({
            id: 'soat',
            labelKey: 'reportTheme.sample.soat',
            label: isEn ? 'Mandatory insurance (SOAT)' : 'Seguro obligatorio (SOAT)',
            status: soatOk ? 'clear' : 'review',
            score: soatOk ? 1 : 0.6,
            deduction: soatOk ? 0 : 0.4,
            fields: [
                { labelKey: 'reportTheme.sample.status', label: isEn ? 'Status' : 'Estado', value: latestSoat?.estado || 'VIGENTE' },
                ...(latestSoat?.fechaVencimiento ? [{ labelKey: 'reportTheme.sample.fieldValidUntil', label: isEn ? 'Expires' : 'Vence', value: String(latestSoat.fechaVencimiento) }] : []),
            ],
        });
        checks.push({
            id: 'rtm',
            labelKey: 'reportTheme.sample.rtm',
            label: isEn ? 'Technical inspection' : 'Revisión técnico-mecánica',
            status: rtmOk ? 'clear' : 'review',
            score: rtmOk ? 1 : 0.6,
            deduction: rtmOk ? 0 : 0.4,
            fields: [
                { labelKey: 'reportTheme.sample.status', label: isEn ? 'Status' : 'Estado', value: rtmOk ? (isEn ? 'Valid' : 'Vigente') : String(latestRtm?.estado || 'Vencida') },
                ...(latestRtm?.fechaVencimiento ? [{ labelKey: 'reportTheme.sample.fieldValidUntil', label: isEn ? 'Expires' : 'Vence', value: String(latestRtm.fechaVencimiento) }] : []),
            ],
        });
        if (simitPayload) {
            checks.push({
                id: 'fines',
                labelKey: 'reportTheme.sample.fines',
                label: isEn ? 'Traffic citations' : 'Comparendos e infracciones',
                status: fineCount === 0 ? 'clear' : 'review',
                score: fineCount === 0 ? 1 : 0.75,
                deduction: fineCount === 0 ? 0 : 0.25,
                fields: [{ labelKey: 'reportTheme.sample.fines', label: isEn ? 'Pending' : 'Pendientes', value: String(fineCount) }],
            });
        }
        if (valCop) {
            checks.push({
                id: 'valuation',
                labelKey: 'reportTheme.sample.valuation',
                label: isEn ? 'Commercial valuation' : 'Valoración comercial',
                status: 'clear',
                score: 1,
                deduction: 0,
                fields: [{ labelKey: 'reportTheme.sample.valuation', label: isEn ? 'Guide value' : 'Valor guía', value: valCop }],
            });
        }

        findings.push({
            tone: vehicleStatus === 'clear' ? 'success' : 'warning',
            titleKey: 'vehicle_status',
            title: isEn ? (vehicleStatus === 'clear' ? 'Active vehicle & valid coverages' : 'Check coverage expiry') : (vehicleStatus === 'clear' ? 'Vehículo activo y coberturas al día' : 'Revisar vigencia o hallazgos'),
            detailKey: 'vehicle_detail',
            detail: `${plate} · ${makeModel || ''} · ${valCop || (isEn ? 'SOAT & inspection verified' : 'SOAT y técnico-mecánica verificados')}`,
        });

        for (const s of steps) {
            const hasErr = errSteps.has(s.sequence);
            const hasRes = Boolean(results[s.sequence]);
            sources.push({
                nameKey: s.name || s.featureCode || `Step ${s.sequence}`,
                name: s.name || s.featureCode || `Paso ${s.sequence}`,
                status: hasErr ? 'error' : hasRes ? 'ok' : 'empty',
                reference: String(s.featureCode || s.sequence),
                consultedAt: '15:42',
            });
        }

        return {
            profile,
            rulesVersion: '1.1.0',
            value: scoreVal,
            decision: decisionForScore(scoreVal),
            coverage: steps.length ? Math.round(((steps.length - errSteps.size) / steps.length) * 100) / 100 : 1,
            confidence: 'high',
            checkCount: checks.length,
            reviewCount: checks.filter((c) => c.status === 'review').length,
            isVehicle: true,
            subjectName: makeModel ? `${plate} · ${makeModel}` : plate,
            documentLabel: isEn ? 'Plate' : 'Placa',
            documentMasked: plate,
            plate,
            licenseClass: [gen.claseVehiculo, gen.tipoServicio].filter(Boolean).join(' · ') || '—',
            reportNumber: sample.reportId || 'SR-CO-VEH-0001',
            issuedLabel: isEn ? 'Nov 9, 2026, 13:42 COT' : '9 nov 2026, 13:42 COT',
            verificationCode: `VK-${plate}`,
            weightedAverage: scoreVal,
            deductions: Math.round((1 - scoreVal) * 100) / 100,
            eyebrowText: isEn ? 'Verification report · Vehicles · Colombia' : 'Informe de verificación · Vehículos · Colombia',
            coverTitleText: isEn ? 'Vehicle verification' : 'Verificación de vehículo',
            headlineText: isEn ? (vehicleStatus === 'clear' ? 'Vehicle approved' : 'Manual vehicle review') : (vehicleStatus === 'clear' ? 'Vehículo aprobado' : 'Revisión manual del vehículo'),
            summaryText: isEn ? 'Registry status, mandatory insurance, inspection, and traffic history evaluated.' : 'Se verificaron registro oficial, SOAT, técnico-mecánica y comparendos de tránsito.',
            subjectRows: [
                { label: isEn ? 'Plate' : 'Placa', value: plate, ok: true },
                { label: isEn ? 'Vehicle' : 'Vehículo', value: makeModel || '—', ok: true },
                { label: 'SOAT', value: latestSoat?.estado || 'VIGENTE', ok: soatOk },
                { label: isEn ? 'Valuation' : 'Valor comercial', value: valCop || (fineCount === 0 ? (isEn ? 'Clear' : 'Sin multas') : `${fineCount}`), ok: fineCount === 0 },
            ],
            categories,
            checks,
            findings,
            sources,
        };
    }

    const r1 = (steps[0] ? results[steps[0].sequence] : null) ?? Object.values(results)[0] ?? {};
    const fullName = String(input['fullName'] || r1?.fullName || (isEn ? 'Sample Citizen' : 'Ciudadano de muestra'));
    const docType = String(input['documentType'] || 'CC');
    const docNum = maskDoc(input['documentNumber'] || r1?.documentNumber || '1000000001');
    const isDriver = Boolean(profile.includes('driver') || sample.batchName?.toLowerCase().includes('conductor'));

    for (const s of steps) {
        const hasErr = errSteps.has(s.sequence);
        const res = results[s.sequence];
        const code = s.featureCode || s.appFeature?.code || '';
        const title = s.name || code.replace(/_/g, ' ') || `Check ${s.sequence}`;
        const criminalHit =
            Boolean(res?.hasRecord) ||
            (Array.isArray(res?.antecedentes) && res.antecedentes.length > 0) ||
            (Array.isArray(res?.data) && res.data.some((entry: any) => entry?.hasSanctions || entry?.inhabilidad));
        const listHit =
            Boolean(res?.isPep) ||
            Boolean(res?.foundInOFAC) ||
            Boolean(res?.foundInONU) ||
            Boolean(res?.foundInInterpol) ||
            Boolean(res?.foundInEU);
        const judicialCount = Array.isArray(res?.procesos) ? res.procesos.length : 0;
        const hit = criminalHit || listHit;
        const status: 'clear' | 'review' | 'fail' = hit ? 'review' : 'clear';
        const score = hit ? 0.75 : hasErr ? 0.95 : 1;
        const deduction = hit ? 0.08 : 0;
        const detailValue = hasErr
            ? isEn
                ? 'Source timeout'
                : 'No respondió'
            : hit
              ? isEn
                  ? 'Record found — review'
                  : 'Hallazgo para revisión'
              : judicialCount > 0
                ? isEn
                    ? `${judicialCount} civil filings (plaintiff)`
                    : `${judicialCount} procesos (demandante)`
                : isEn
                  ? 'Clear'
                  : 'Sin hallazgos';
        checks.push({
            id: code || `step_${s.sequence}`,
            labelKey: title,
            label: title,
            status,
            score,
            deduction,
            fields: [{ labelKey: title, label: isEn ? 'Result' : 'Resultado', value: detailValue }],
        });
        sources.push({
            nameKey: title,
            name: title,
            status: hasErr ? 'error' : res ? 'ok' : 'empty',
            reference: code || String(s.sequence),
            consultedAt: '15:42',
        });
    }

    const totalDeductions = Math.round(checks.reduce((acc, c) => acc + c.deduction, 0) * 100) / 100;
    const hitChecks = checks.filter((c) => c.status !== 'clear');
    const overallScore = Math.max(0.5, Math.round((1 - Math.min(0.4, totalDeductions)) * 100) / 100);
    const coverage = steps.length ? Math.round(((steps.length - errSteps.size) / steps.length) * 100) / 100 : 1;

    const bgScore = hitChecks.length ? 0.78 : 1;
    categories.push(
        { id: 'identity', labelKey: 'reportTheme.sample.catIdentity', label: isEn ? 'Identity' : 'Identidad', score: 1, weight: 0.3 },
        { id: 'records', labelKey: 'reportTheme.sample.catBackground', label: isEn ? 'Background' : 'Antecedentes', score: bgScore, weight: 0.35 },
        { id: 'judicial', labelKey: 'reportTheme.sample.catDriving', label: isEn ? 'Judicial & Fiscal' : 'Judicial y fiscal', score: errSteps.size ? 0.95 : 1, weight: 0.2 },
        { id: 'watchlists', labelKey: 'reportTheme.sample.catLists', label: isEn ? 'Lists & PEP' : 'Listas y PEP', score: 1, weight: 0.15 },
    );

    findings.push({
        tone: 'success',
        titleKey: 'identity_verified',
        title: isEn ? 'Document & identity confirmed' : 'Documento e identidad verificados',
        detailKey: 'identity_verified_detail',
        detail: `${fullName} · ${docType} ${docNum}`,
    });
    if (hitChecks.length) {
        findings.push({
            tone: 'warning',
            titleKey: 'records_review',
            title: isEn ? `${hitChecks.length} check(s) require manual review` : `${hitChecks.length} consulta(s) con hallazgo para revisión`,
            detailKey: 'records_review_detail',
            detail: hitChecks.map((c) => c.label).join(', '),
        });
    }
    if (errSteps.size > 0) {
        findings.push({
            tone: 'info',
            titleKey: 'source_timeout',
            title: isEn ? `${errSteps.size} external source did not respond` : `${errSteps.size} fuente externa no respondió a tiempo`,
            detailKey: 'source_timeout_detail',
            detail: isEn
                ? `${steps.length - errSteps.size} of ${steps.length} sources verified (${Math.round(coverage * 100)}% coverage).`
                : `Se completaron ${steps.length - errSteps.size} de ${steps.length} consultas (${Math.round(coverage * 100)}% de cobertura).`,
        });
    } else {
        findings.push({
            tone: 'success',
            titleKey: 'identity_summary',
            title: isEn ? 'Official checks completed' : 'Consultas oficiales completadas',
            detailKey: 'identity_detail',
            detail: isEn ? `${steps.length} sources verified with ${Math.round(coverage * 100)}% coverage.` : `Se verificaron ${steps.length} fuentes con cobertura del ${Math.round(coverage * 100)}%.`,
        });
    }

    return {
        profile,
        rulesVersion: '1.1.0',
        value: overallScore,
        decision: decisionForScore(overallScore),
        coverage,
        confidence: 'high',
        checkCount: checks.length,
        reviewCount: hitChecks.length,
        subjectName: fullName,
        documentLabel: docType,
        documentMasked: docNum,
        plate: String(input['plate'] || '—'),
        licenseClass: isDriver ? 'C1' : '—',
        reportNumber: sample.reportId || 'SR-CO-0001',
        issuedLabel: isEn ? 'Nov 9, 2026, 13:42 COT' : '9 nov 2026, 13:42 COT',
        verificationCode: `VK-SYN-${docNum.slice(-4)}`,
        weightedAverage: overallScore,
        deductions: totalDeductions,
        eyebrowText: isEn
            ? `Verification report · ${isDriver ? 'Drivers' : 'Identity'} · Colombia`
            : `Informe de verificación · ${isDriver ? 'Conductores' : 'Identidad'} · Colombia`,
        coverTitleText: isEn
            ? isDriver
                ? 'Driver verification'
                : 'Identity verification'
            : isDriver
              ? 'Verificación de conductor'
              : 'Verificación de identidad',
        headlineText: isEn
            ? overallScore >= 0.9
                ? isDriver
                    ? 'Driver approved'
                    : 'Identity verified'
                : 'Manual review'
            : overallScore >= 0.9
              ? isDriver
                  ? 'Conductor aprobado'
                  : 'Identidad verificada'
              : 'Revisión manual',
        summaryText: isEn ? 'Checks summarized across official registries and restrictive lists.' : 'Resumen de consultas en fuentes oficiales y listas de control.',
        subjectRows: [
            { label: isEn ? 'Person' : 'Persona', value: fullName, ok: true },
            { label: docType, value: docNum, ok: true },
            { label: isEn ? 'Coverage' : 'Cobertura', value: `${Math.round(coverage * 100)}%`, ok: coverage >= 0.8 },
            ...(input['plate'] ? [{ label: isEn ? 'Plate' : 'Placa', value: String(input['plate']), ok: true }] : []),
        ],
        categories,
        checks,
        findings,
        sources,
    };
};

/**
 * Synthetic Cabify Chile driver built only from API lookups.
 * Document, license, background, lists, vehicle, and company records.
 * No biometrics, liveness, or face match. Names and numbers are fake.
 */
export const syntheticVerificationScore = (profile: string, language: 'en' | 'es' = 'es'): VerificationScoreModel => {
    const value = 0.89;
    return {
        profile,
        rulesVersion: '1.1.0',
        value,
        decision: decisionForScore(value),
        coverage: 1,
        confidence: 'high',
        checkCount: 13,
        reviewCount: 2,
        subjectName: 'Valentina Prueba Soto',
        documentLabel: 'RUN',
        documentMasked: '••••78-5',
        plate: 'ZZTT99',
        licenseClass: 'B',
        reportNumber: 'SR-2611-0413',
        issuedLabel: language === 'en' ? 'Nov 9, 2026, 15:42 CLT' : '9 nov 2026, 15:42 CLT',
        verificationCode: 'VK-3HPL-91KC',
        weightedAverage: 0.9,
        deductions: 0.01,
        categories: [
            { id: 'identity', labelKey: 'reportTheme.sample.catIdentity', score: 1, weight: 0.2 },
            { id: 'background', labelKey: 'reportTheme.sample.catBackground', score: 1, weight: 0.2 },
            { id: 'driving', labelKey: 'reportTheme.sample.catDriving', score: 0.95, weight: 0.2 },
            { id: 'vehicle', labelKey: 'reportTheme.sample.catVehicle', score: 0.7, weight: 0.15 },
            { id: 'lists', labelKey: 'reportTheme.sample.catLists', score: 0.7, weight: 0.15 },
            { id: 'companies', labelKey: 'reportTheme.sample.catCompanies', score: 1, weight: 0.1 },
        ],
        checks: [
            {
                id: 'identity',
                labelKey: 'reportTheme.sample.catIdentity',
                status: 'clear',
                score: 1,
                deduction: 0,
                fields: [
                    { labelKey: 'reportTheme.sample.fieldDocument', value: language === 'en' ? 'Valid' : 'Vigente' },
                    { labelKey: 'reportTheme.sample.fieldName', value: 'Valentina Prueba Soto' },
                    { labelKey: 'reportTheme.sample.fieldDocumentNumber', value: '••••78-5' },
                ],
                noteKey: 'reportTheme.sample.noteIdentity',
            },
            {
                id: 'background',
                labelKey: 'reportTheme.sample.catBackground',
                status: 'clear',
                score: 1,
                deduction: 0,
                fields: [{ labelKey: 'reportTheme.sample.fieldRecords', value: '0' }],
                noteKey: 'reportTheme.sample.noteBackground',
            },
            {
                id: 'driving',
                labelKey: 'reportTheme.sample.catDriving',
                status: 'review',
                score: 0.95,
                deduction: 0.012,
                fields: [
                    { labelKey: 'reportTheme.sample.fieldClass', value: 'B' },
                    { labelKey: 'reportTheme.sample.fieldValidUntil', value: '03/2031' },
                    { labelKey: 'reportTheme.sample.fieldRestriction', value: language === 'en' ? 'Corrective lenses' : 'Uso de lentes' },
                ],
                noteKey: 'reportTheme.sample.noteLicense',
            },
            {
                id: 'lists',
                labelKey: 'reportTheme.sample.catLists',
                status: 'review',
                score: 0.7,
                deduction: 0.03,
                fields: [{ labelKey: 'reportTheme.sample.fieldMatch', value: language === 'en' ? 'Name only' : 'Solo nombre' }],
                noteKey: 'reportTheme.sample.noteLists',
            },
            {
                id: 'vehicle',
                labelKey: 'reportTheme.sample.catVehicle',
                status: 'review',
                score: 0.7,
                deduction: 0.03,
                fields: [
                    { labelKey: 'reportTheme.sample.fieldPlate', value: 'ZZTT99' },
                    { labelKey: 'reportTheme.sample.fieldInsurance', value: language === 'en' ? 'Expired 31 Oct 2026' : 'Venció el 31/10/2026' },
                ],
                noteKey: 'reportTheme.sample.noteVehicle',
            },
            {
                id: 'companies',
                labelKey: 'reportTheme.sample.catCompanies',
                status: 'clear',
                score: 1,
                deduction: 0,
                fields: [{ labelKey: 'reportTheme.sample.fieldCompanyRecords', value: '0' }],
                noteKey: 'reportTheme.sample.noteCompanies',
            },
        ],
        findings: [
            {
                tone: 'warning',
                titleKey: 'reportTheme.sample.findingListsTitle',
                detailKey: 'reportTheme.sample.findingListsDetail',
            },
            {
                tone: 'warning',
                titleKey: 'reportTheme.sample.findingInsuranceTitle',
                detailKey: 'reportTheme.sample.findingInsuranceDetail',
            },
            {
                tone: 'success',
                titleKey: 'reportTheme.sample.findingIdentityTitle',
                detailKey: 'reportTheme.sample.findingIdentityDetail',
            },
        ],
        sources: [
            { nameKey: 'reportTheme.sample.sourceRegistry', status: 'ok', reference: 'SRCeI', consultedAt: '15:41' },
            { nameKey: 'reportTheme.sample.sourceLicense', status: 'ok', reference: 'SRCeI licencia', consultedAt: '15:41' },
            { nameKey: 'reportTheme.sample.sourceLists', status: 'ok', reference: 'INT-LIST-04', consultedAt: '15:42' },
            { nameKey: 'reportTheme.sample.sourceInsurance', status: 'ok', reference: 'SOAP', consultedAt: '15:42' },
            { nameKey: 'reportTheme.sample.sourceVehicle', status: 'empty', reference: 'RVM', consultedAt: '15:42' },
            { nameKey: 'reportTheme.sample.sourceCompanies', status: 'ok', reference: 'SII', consultedAt: '15:42' },
        ],
    };
};

const withDisplayFields = (
    model: VerificationScoreModel,
    format: 'unit' | 'percent' = 'percent',
    language: 'en' | 'es' = 'es'
): VerificationScoreModel => {
    const isEn = language === 'en';
    const decisionLabel =
        model.headlineText ||
        (model.decision === 'approve'
            ? isEn
                ? 'Approved'
                : 'Aprobado'
            : model.decision === 'reject'
              ? isEn
                  ? 'Rejected'
                  : 'Rechazado'
              : isEn
                ? 'Manual review'
                : 'Revisión manual');
    const scoreText = format === 'unit' ? model.value.toFixed(2) : `${Math.round(model.value * 100)}%`;
    const confidenceLabel =
        model.confidence === 'high'
            ? isEn
                ? 'High'
                : 'Alta'
            : model.confidence === 'low'
              ? isEn
                  ? 'Low'
                  : 'Baja'
              : isEn
                ? 'Medium'
                : 'Media';
    return {
        ...model,
        scoreDisplay: model.scoreDisplay ?? `${scoreText} — ${decisionLabel}`,
        coverageDisplay: model.coverageDisplay ?? `${Math.round(model.coverage * 100)}%`,
        confidenceLabel: model.confidenceLabel ?? confidenceLabel,
        decisionLabel: model.decisionLabel ?? decisionLabel,
    };
};

/** Keep a live score. Build from real sampleData when present, or synthetic fallback when empty. */
export const ensureVerificationSample = <T extends SampleInputShape>(
    sample: T,
    settings: ScoreSettings | null | undefined,
    language: 'en' | 'es' = 'es'
): T => {
    if (!settings?.enabled) return sample;
    const format = settings.format === 'unit' ? 'unit' : 'percent';
    if (sample.verificationScore && typeof sample.verificationScore === 'object') {
        return { ...sample, verificationScore: withDisplayFields(sample.verificationScore, format, language) };
    }
    return {
        ...sample,
        verificationScore: withDisplayFields(buildScoreModelFromSampleData(sample, settings, language), format, language),
    };
};
