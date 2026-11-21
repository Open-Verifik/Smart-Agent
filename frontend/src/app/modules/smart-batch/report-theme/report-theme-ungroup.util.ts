import type { ReportSection } from '../smart-report.service';
import {
    fontStack,
    readThemeBlockConfig,
    themeBlockKindFromType,
    type ReportThemeId,
    type ReportThemeTokens,
    type ScoreDisplayFormat,
    type VerificationScoreModel,
} from './report-theme.model';

const SHEET_WIDTH = 794;
const MARGIN_X = 28;
const CONTENT_WIDTH = SHEET_WIDTH - MARGIN_X * 2;

const decisionColor = (decision: string, tokens: ReportThemeTokens): string => {
    if (decision === 'approve') return tokens.success;
    if (decision === 'reject') return tokens.danger;
    return tokens.warning;
};

/**
 * Converts composite Verification Score theme blocks (`coverPage`, `scoreGauge`,
 * `categoryBreakdown`, `findings`, `checkTable`, `sources`) into individually editable
 * native PDF Builder sections (`header`, `text`, `field`, `dataTable`) bound dynamically
 * via `dataPath` (`verificationScore.*`) so live requests always replace every number.
 */
export const ungroupThemeSections = (
    sections: ReportSection[],
    _theme: ReportThemeId,
    tokens: ReportThemeTokens,
    score: VerificationScoreModel | null | undefined,
    _format: ScoreDisplayFormat = 'percent',
    lang: 'en' | 'es' = 'es'
): ReportSection[] => {
    const out: ReportSection[] = [];
    const uid = (prefix: string) => `${prefix}-${Date.now().toString(36)}-${out.length + 1}`;
    const displayFont = fontStack(tokens.displayFont);
    const bodyFont = fontStack(tokens.bodyFont);
    const isEn = lang === 'en';
    const borderHex = tokens.line.startsWith('#') ? tokens.line : '#243656';

    const push = (sec: Omit<ReportSection, 'order'>) => {
        out.push({ ...sec, order: out.length });
    };

    for (const section of sections) {
        const kind = themeBlockKindFromType(section.type);
        if (!kind) {
            push({ ...section });
            continue;
        }

        const cfg = readThemeBlockConfig(section.config);
        const frame = section.frame ?? { x: MARGIN_X, y: 18, width: CONTENT_WIDTH, height: 180, page: 0 };
        const x = frame.x ?? MARGIN_X;
        const y = frame.y ?? 18;
        const width = frame.width ?? CONTENT_WIDTH;
        const height = frame.height ?? 180;
        const page = frame.page ?? 0;
        const cardBg =
            section.style?.backgroundColor && section.style.backgroundColor !== 'transparent'
                ? section.style.backgroundColor
                : tokens.surface;
        const ink = section.style?.color || tokens.ink;

        if (kind === 'coverPage') {
            const wordmark = tokens.logoText?.trim() || 'verifik';
            const eyebrow =
                cfg.eyebrow?.trim() ||
                tokens.eyebrow?.trim() ||
                score?.eyebrowText ||
                (isEn ? 'VERIFICATION REPORT' : 'INFORME DE VERIFICACIÓN');
            const title =
                tokens.coverTitle?.trim() ||
                score?.coverTitleText ||
                (isEn ? 'Verification Report' : 'Verificación de identidad');

            push({
                id: uid('ug-brand'),
                type: 'header',
                label: wordmark,
                layerName: isEn ? 'Brand wordmark' : 'Marca',
                staticContent: wordmark,
                style: {
                    fontSize: 22,
                    fontWeight: 'bold',
                    fontFamily: displayFont,
                    color: tokens.brand,
                    backgroundColor: 'transparent',
                    padding: '0',
                    zIndex: 5,
                },
                frame: { x, y, width: Math.round(width * 0.55), height: 32, page },
            });

            push({
                id: uid('ug-meta'),
                type: 'field',
                label: isEn ? 'Generated' : 'Fecha de emisión',
                layerName: isEn ? 'Report date' : 'Fecha del informe',
                dataPath: 'consultedAt',
                pairLayout: 'stack',
                style: {
                    fontSize: 10,
                    fontFamily: bodyFont,
                    textAlign: 'right',
                    color: tokens.muted,
                    labelColor: tokens.muted,
                    valueColor: ink,
                    backgroundColor: 'transparent',
                    padding: '0',
                    zIndex: 5,
                },
                frame: { x: x + Math.round(width * 0.58), y, width: Math.round(width * 0.42), height: 36, page },
            });

            push({
                id: uid('ug-eyebrow'),
                type: 'text',
                label: eyebrow,
                layerName: isEn ? 'Eyebrow' : 'Antetítulo',
                staticContent: eyebrow.toUpperCase(),
                style: {
                    fontSize: 10,
                    fontWeight: 'bold',
                    fontFamily: bodyFont,
                    color: tokens.accent,
                    backgroundColor: 'transparent',
                    padding: '0',
                    zIndex: 5,
                },
                frame: { x, y: y + 38, width, height: 20, page },
            });

            push({
                id: uid('ug-title'),
                type: 'header',
                label: title,
                layerName: isEn ? 'Cover title' : 'Título de portada',
                staticContent: title,
                style: {
                    fontSize: 26,
                    fontWeight: 'bold',
                    fontFamily: displayFont,
                    color: ink,
                    backgroundColor: 'transparent',
                    padding: '0',
                    zIndex: 5,
                },
                frame: { x, y: y + 60, width, height: 38, page },
            });

            push({
                id: uid('ug-subject'),
                type: 'field',
                label: isEn ? 'Subject' : 'Sujeto consultado',
                layerName: isEn ? 'Subject name' : 'Sujeto consultado',
                dataPath: 'verificationScore.subjectName',
                pairLayout: 'inline',
                style: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    fontFamily: bodyFont,
                    color: tokens.brand,
                    labelColor: tokens.muted,
                    valueColor: tokens.brand,
                    backgroundColor: 'transparent',
                    padding: '0',
                    zIndex: 5,
                },
                frame: { x, y: y + 100, width, height: 28, page },
            });
            continue;
        }

        if (kind === 'scoreGauge') {
            const dColor = score ? decisionColor(score.decision, tokens) : tokens.success;
            const gap = 10;
            const scoreCardW = Math.round(width * 0.42);
            const kpiW = Math.floor((width - scoreCardW - gap * 3) / 3);
            const cardH = Math.min(height, 140);

            push({
                id: uid('ug-score'),
                type: 'field',
                label: 'VERIFICATION SCORE',
                layerName: 'Verification Score',
                dataPath: 'verificationScore.scoreDisplay',
                pairLayout: 'stack',
                style: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontFamily: displayFont,
                    color: dColor,
                    labelColor: tokens.accent,
                    valueColor: dColor,
                    backgroundColor: cardBg,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: borderHex,
                    padding: '14px',
                    zIndex: 5,
                },
                frame: { x, y, width: scoreCardW, height: cardH, page },
            });

            const kpis = [
                {
                    label: isEn ? 'COVERAGE' : 'COBERTURA',
                    dataPath: 'verificationScore.coverageDisplay',
                },
                {
                    label: isEn ? 'CONFIDENCE' : 'CONFIANZA',
                    dataPath: 'verificationScore.confidenceLabel',
                },
                {
                    label: isEn ? 'CHECKS' : 'CHEQUEOS',
                    dataPath: 'verificationScore.checkCount',
                },
            ];

            kpis.forEach((kpi, idx) => {
                push({
                    id: uid(`ug-kpi-${idx}`),
                    type: 'field',
                    label: kpi.label,
                    layerName: kpi.label,
                    dataPath: kpi.dataPath,
                    pairLayout: 'stack',
                    style: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        fontFamily: displayFont,
                        color: ink,
                        labelColor: tokens.muted,
                        valueColor: ink,
                        backgroundColor: cardBg,
                        borderRadius: 14,
                        borderWidth: 1,
                        borderColor: borderHex,
                        padding: '14px',
                        zIndex: 5,
                    },
                    frame: {
                        x: x + scoreCardW + gap + idx * (kpiW + gap),
                        y,
                        width: kpiW,
                        height: cardH,
                        page,
                    },
                });
            });
            continue;
        }

        if (kind === 'categoryBreakdown') {
            const label = cfg.eyebrow?.trim() || (isEn ? 'SCORE BY CATEGORY' : 'PUNTAJE POR CATEGORÍA');
            push({
                id: uid('ug-categories'),
                type: 'dataTable',
                label,
                layerName: label,
                dataPath: 'verificationScore.categories',
                columns: [
                    { key: 'label', label: isEn ? 'Category' : 'Categoría' },
                    ...(cfg.showWeights ? [{ key: 'weight', label: isEn ? 'Weight' : 'Peso' }] : []),
                    { key: 'score', label: isEn ? 'Score' : 'Puntaje' },
                ],
                style: {
                    fontSize: 12,
                    fontFamily: bodyFont,
                    color: tokens.accent,
                    backgroundColor: cardBg,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: borderHex,
                    tableHeaderBackground: tokens.card,
                    tableHeaderColor: tokens.muted,
                    tableCellBackground: cardBg,
                    tableCellColor: ink,
                    tableBorderColor: borderHex,
                    padding: '14px',
                    zIndex: 5,
                },
                frame: { x, y, width, height, page },
            });
            continue;
        }

        if (kind === 'findings') {
            const heading = cfg.eyebrow?.trim() || (isEn ? 'KEY FINDINGS' : 'HALLAZGOS CLAVE');
            push({
                id: uid('ug-findings'),
                type: 'dataTable',
                label: heading,
                layerName: heading,
                dataPath: 'verificationScore.findings',
                columns: [
                    { key: 'title', label: isEn ? 'Finding' : 'Hallazgo' },
                    { key: 'detail', label: isEn ? 'Detail' : 'Detalle' },
                ],
                style: {
                    fontSize: 11,
                    fontFamily: bodyFont,
                    color: tokens.accent,
                    backgroundColor: cardBg,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: borderHex,
                    tableHeaderBackground: tokens.card,
                    tableHeaderColor: tokens.muted,
                    tableCellBackground: cardBg,
                    tableCellColor: ink,
                    tableBorderColor: borderHex,
                    padding: '14px',
                    zIndex: 5,
                },
                frame: { x, y, width, height: Math.max(140, height - 36), page },
            });

            if (tokens.legalNote?.trim()) {
                push({
                    id: uid('ug-legal'),
                    type: 'text',
                    label: isEn ? 'Legal note' : 'Nota legal',
                    layerName: isEn ? 'Legal note' : 'Nota legal',
                    staticContent: tokens.legalNote.trim(),
                    style: {
                        fontSize: 9,
                        fontFamily: bodyFont,
                        color: tokens.muted,
                        backgroundColor: 'transparent',
                        padding: '0',
                        zIndex: 5,
                    },
                    frame: { x, y: y + Math.max(146, height - 30), width, height: 28, page },
                });
            }
            continue;
        }

        if (kind === 'checkTable') {
            const label = cfg.eyebrow?.trim() || (isEn ? 'CHECKS' : 'CHEQUEOS');
            push({
                id: uid('ug-checks'),
                type: 'dataTable',
                label,
                layerName: label,
                dataPath: 'verificationScore.checks',
                columns: [
                    { key: 'label', label: isEn ? 'Check' : 'Chequeo' },
                    { key: 'status', label: isEn ? 'Status' : 'Estado' },
                    { key: 'score', label: isEn ? 'Score' : 'Puntaje' },
                    ...(cfg.showDeductions ? [{ key: 'deduction', label: isEn ? 'Deduction' : 'Descuento' }] : []),
                ],
                style: {
                    fontSize: 11,
                    fontFamily: bodyFont,
                    color: tokens.accent,
                    backgroundColor: cardBg,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: borderHex,
                    tableHeaderBackground: tokens.card,
                    tableHeaderColor: tokens.muted,
                    tableCellBackground: cardBg,
                    tableCellColor: ink,
                    tableBorderColor: borderHex,
                    padding: '14px',
                    zIndex: 5,
                },
                frame: { x, y, width, height, page },
            });
            continue;
        }

        if (kind === 'sources') {
            const label = cfg.eyebrow?.trim() || (isEn ? 'SOURCES' : 'FUENTES');
            push({
                id: uid('ug-sources'),
                type: 'dataTable',
                label,
                layerName: label,
                dataPath: 'verificationScore.sources',
                columns: [
                    { key: 'name', label: isEn ? 'Source' : 'Fuente' },
                    { key: 'status', label: isEn ? 'Status' : 'Estado' },
                    { key: 'reference', label: isEn ? 'Reference' : 'Referencia' },
                    { key: 'consultedAt', label: isEn ? 'Time' : 'Hora' },
                ],
                style: {
                    fontSize: 11,
                    fontFamily: bodyFont,
                    color: tokens.accent,
                    backgroundColor: cardBg,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: borderHex,
                    tableHeaderBackground: tokens.card,
                    tableHeaderColor: tokens.muted,
                    tableCellBackground: cardBg,
                    tableCellColor: ink,
                    tableBorderColor: borderHex,
                    padding: '14px',
                    zIndex: 5,
                },
                frame: { x, y, width, height, page },
            });
        }
    }

    return out;
};
