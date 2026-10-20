import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { formatCatalogPrice } from 'app/modules/postman/postman-docs-params.util';
import type { DocumentType, ScanResult, SmartCheckResult } from '../smart-scan.types';

export interface NameComparisonRow {
    id: 'firstName' | 'lastName' | 'fullName';
    labelKey: string;
    ocrValue: string;
    sourceValue: string;
    percent: number;
}

const FIRST_KEYS = ['firstName', 'firstNames', 'nombres', 'givenName', 'givenNames', 'name'] as const;
const LAST_KEYS = ['lastName', 'lastNames', 'apellidos', 'surname', 'surnames', 'familyName'] as const;
const FULL_KEYS = ['fullName', 'completeName', 'nombreCompleto'] as const;

const stripDiacritics = (value: string): string =>
    value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase()
        .replace(/[^A-Z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

/**
 * Dice bigram similarity, matching backend string-similarity.
 */
const diceSimilarity = (leftRaw: string, rightRaw: string): number => {
    const left = leftRaw.replace(/\s+/g, '');
    const right = rightRaw.replace(/\s+/g, '');
    if (!left && !right) return 1;
    if (!left || !right) return 0;
    if (left === right) return 1;
    if (left.length < 2 || right.length < 2) return 0;

    const counts = new Map<string, number>();
    for (let i = 0; i < left.length - 1; i++) {
        const pair = left.slice(i, i + 2);
        counts.set(pair, (counts.get(pair) || 0) + 1);
    }

    let intersection = 0;
    for (let i = 0; i < right.length - 1; i++) {
        const pair = right.slice(i, i + 2);
        const count = counts.get(pair) || 0;
        if (count > 0) {
            counts.set(pair, count - 1);
            intersection++;
        }
    }

    return (2 * intersection) / (left.length + right.length - 2);
};

/**
 * Compares two names directly and with sorted tokens so reversed surnames still score fairly.
 */
const scoreNamePair = (ocrRaw: string, sourceRaw: string): number => {
    const ocr = stripDiacritics(ocrRaw);
    const source = stripDiacritics(sourceRaw);
    if (!ocr || !source) return 0;
    if (ocr === source) return 100;

    const direct = diceSimilarity(ocr, source);
    const sortedOcr = ocr.split(' ').sort().join(' ');
    const sortedSource = source.split(' ').sort().join(' ');
    const reordered = diceSimilarity(sortedOcr, sortedSource);

    return Math.round(Math.max(direct, reordered) * 100);
};

const pickString = (record: Record<string, unknown>, keys: readonly string[]): string => {
    for (const key of keys) {
        const value = record[key];
        if (typeof value === 'string' && value.trim()) return value.trim();
    }
    return '';
};

const extractNames = (raw: unknown): { firstName: string; lastName: string; fullName: string } | null => {
    if (!raw || typeof raw !== 'object') return null;
    const record = raw as Record<string, unknown>;
    const nested =
        record['data'] && typeof record['data'] === 'object' ? (record['data'] as Record<string, unknown>) : record;

    let firstName = pickString(nested, FIRST_KEYS);
    let lastName = pickString(nested, LAST_KEYS);
    let fullName = pickString(nested, FULL_KEYS);

    if (!fullName && Array.isArray(nested['arrayName'])) {
        fullName = nested['arrayName']
            .map((part) => String(part || '').trim())
            .filter(Boolean)
            .join(' ');
    }

    if (!fullName && (firstName || lastName)) {
        fullName = [firstName, lastName].filter(Boolean).join(' ');
    }

    if ((!firstName || !lastName) && fullName) {
        const tokens = fullName.split(/\s+/).filter(Boolean);
        if (!firstName && tokens.length) {
            firstName = tokens.slice(0, Math.ceil(tokens.length / 2)).join(' ');
        }
        if (!lastName && tokens.length > 1) {
            lastName = tokens.slice(Math.ceil(tokens.length / 2)).join(' ');
        }
    }

    if (!firstName && !lastName && !fullName) return null;

    return { firstName, lastName, fullName };
};

@Component({
    selector: 'scan-tool-smart-check-result',
    standalone: true,
    imports: [CommonModule, MatIconModule, TranslocoModule],
    templateUrl: './scan-tool-smart-check-result.component.html',
    styleUrls: ['./scan-tool-smart-check-result.component.scss'],
})
export class ScanToolSmartCheckResultComponent {
    readonly scanResult = input.required<ScanResult>();
    readonly documentType = input<DocumentType | null>(null);

    readonly ticks = [0, 25, 50, 75, 100];

    readonly smartCheck = computed<SmartCheckResult | null>(() => this.scanResult()?.smartCheck ?? null);

    readonly endpointName = computed<string>(() => {
        const check = this.smartCheck();
        const linked = this.documentType()?.appFeature;
        if (check?.featureName) return check.featureName;
        if (linked && typeof linked === 'object' && linked.name) return linked.name;
        return check?.featureCode || '';
    });

    readonly endpointUrl = computed<string>(() => {
        const check = this.smartCheck();
        const linked = this.documentType()?.appFeature;
        if (check?.featureUrl) return check.featureUrl;
        if (linked && typeof linked === 'object' && linked.url) return linked.url;
        return '';
    });

    readonly endpointMethod = computed<string>(() => this.smartCheck()?.method || 'GET');

    readonly ocrCost = computed<number | null>(() => {
        const value = this.scanResult()?.cost?.ocr ?? this.scanResult()?.creditsCharged;
        return typeof value === 'number' && Number.isFinite(value) ? value : null;
    });

    readonly smartCheckCost = computed<number | null>(() => {
        const value = this.scanResult()?.cost?.smartCheck ?? this.smartCheck()?.creditsCharged;
        return typeof value === 'number' && Number.isFinite(value) ? value : null;
    });

    readonly totalCost = computed<number | null>(() => {
        const explicit = this.scanResult()?.cost?.total;
        if (typeof explicit === 'number' && Number.isFinite(explicit)) return explicit;
        const ocr = this.ocrCost();
        const check = this.smartCheckCost();
        if (ocr == null && check == null) return null;
        return (ocr || 0) + (check || 0);
    });

    readonly nameRows = computed<NameComparisonRow[]>(() => {
        const ocr = extractNames(this.scanResult()?.OCRExtraction);
        const source = extractNames(this.smartCheck()?.data);
        if (!ocr || !source) return [];

        const rows: NameComparisonRow[] = [
            {
                id: 'firstName',
                labelKey: 'smartScan.nameMatch.firstName',
                ocrValue: ocr.firstName,
                sourceValue: source.firstName,
                percent: scoreNamePair(ocr.firstName, source.firstName),
            },
            {
                id: 'lastName',
                labelKey: 'smartScan.nameMatch.lastName',
                ocrValue: ocr.lastName,
                sourceValue: source.lastName,
                percent: scoreNamePair(ocr.lastName, source.lastName),
            },
            {
                id: 'fullName',
                labelKey: 'smartScan.nameMatch.fullName',
                ocrValue: ocr.fullName,
                sourceValue: source.fullName,
                percent: scoreNamePair(ocr.fullName, source.fullName),
            },
        ];

        return rows.filter((row) => row.ocrValue || row.sourceValue);
    });

    readonly overallPercent = computed<number>(() => {
        const rows = this.nameRows();
        if (!rows.length) return 0;
        const full = rows.find((row) => row.id === 'fullName');
        const parts = rows.filter((row) => row.id !== 'fullName');
        const partsAvg = parts.length
            ? Math.round(parts.reduce((sum, row) => sum + row.percent, 0) / parts.length)
            : 0;
        if (!full) return partsAvg;
        return Math.max(full.percent, partsAvg);
    });

    /**
     * Needle angle from -90deg (0%) to +90deg (100%).
     */
    readonly needleDegrees = computed<number>(() => (this.overallPercent() / 100) * 180 - 90);

    readonly verdictKey = computed<string>(() => {
        const score = this.overallPercent();
        if (score >= 90) return 'smartScan.nameMatch.verdictExact';
        if (score >= 70) return 'smartScan.nameMatch.verdictClose';
        return 'smartScan.nameMatch.verdictMismatch';
    });

    readonly tone = computed<'high' | 'mid' | 'low'>(() => {
        const score = this.overallPercent();
        if (score >= 85) return 'high';
        if (score >= 65) return 'mid';
        return 'low';
    });

    formatCredits(value: number | null): string {
        return formatCatalogPrice(value ?? 0);
    }

    rowTone(percent: number): 'high' | 'mid' | 'low' {
        if (percent >= 85) return 'high';
        if (percent >= 65) return 'mid';
        return 'low';
    }
}
