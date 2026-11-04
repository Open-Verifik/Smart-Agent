import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

import { environment } from 'environments/environment';

import featureDocsUrls from '../feature-docs-urls.json';
import { canonicalChainField } from '../endpoint-chain.util';
import { chunkLayoutSheetItems, collectLayoutSheetItems, displayParamLabel } from '../report-param-entries.util';
import { ENDPOINT_IO_CATALOG } from '../endpoint-io-catalog';
import { humanizeParamField, paramFieldLabelKey } from '../endpoint-param-highlight.util';
import { QueryMode, QueryModeField, queryModesForFeature } from '../query-modes.util';
import { isClientVisibleBatchDependencyField } from '../smart-batch-dependency.constants';
import { getAppFeatureCatalogCopy } from '../../postman/postman-endpoint-copy.util';
import { AppFeature, SmartBatchService } from '../smart-batch.service';

export type EndpointInfoDialogData = {
    feature: AppFeature;
    allowAdd: boolean;
};

type SheetParam = {
    field: string;
    label: string;
    required: boolean;
    type: string;
    enums: string[];
    description: string;
    when: string;
    dateFormat: string;
};

type ResponseField = {
    field: string;
    type: string;
    example: string;
};

type FeatureDetail = AppFeature & {
    price?: number;
    documentationUrl?: string;
    baseCategory?: string;
    catalogHidden?: boolean;
    docs?: Record<string, {
        title?: string;
        description?: string;
        overview?: string;
        params?: { field?: string; description?: string }[];
        requestExamples?: { lang?: string; label?: string; language?: string; code?: string }[];
        responses?: { status?: string; label?: string; body?: string }[];
    } | undefined>;
};

const DATE_FIELDS = new Set(['dateofbirth', 'birthdate', 'expirationdate', 'expeditiondate', 'issuedate', 'fechanacimiento', 'fechaexpedicion']);

const DOCS_LOCALE_PREFIX: Record<string, string> = {
    es: 'verifik-es/',
    fr: 'verifik-fr/',
};

const STEP_INDEX_FIELDS = new Set(['record', 'row', 'index', 'item', 'orden', 'nro', 'numero', 'número']);

const docsSlugFor = (url: string | undefined, lang: string): string => {
    const key = (url || '')
        .trim()
        .replace(/`/g, '')
        .replace(/^(get|post|put|patch|delete|head|options)\s+/i, '')
        .replace(/^https?:\/\/[^/]+\//i, '')
        .replace(/^\/+/, '')
        .replace(/\/+$/, '')
        .toLowerCase();
    if (!key) return '';
    const map = featureDocsUrls as Record<string, Record<string, string>>;
    const entry = map[key] || map[key.replace(/\/\{[^}]+\}/g, '')];
    if (!entry) return '';
    const locale = (lang || 'es').split('-')[0];
    const slug = entry[locale] || entry.en;
    if (!slug) return '';
    const prefix = entry[locale] ? DOCS_LOCALE_PREFIX[locale] || '' : '';
    const page = slug.replace(/^\/+/, '').replace(/\/+$/, '');
    const host = ((environment as { documentationBaseUrl?: string }).documentationBaseUrl || 'https://docs.verifik.co').replace(/\/$/, '');
    return `${host}/${prefix}${page}/`;
};

const isStepIndex = (key: string, values: string[]): boolean => {
    const leaf = (key.split('.').pop() || key).replace(/#\d+$/, '').toLowerCase();
    if (!STEP_INDEX_FIELDS.has(leaf)) return false;
    const present = values.map((value) => value.trim()).filter((value) => value && value !== '—');
    return present.length > 0 && present.every((value) => /^\d{1,3}$/.test(value));
};

const previewLabel = (key: string, fallback?: string): string =>
    displayParamLabel(key, fallback).replace(/^(?:\d+\s*·\s*)+/, '').trim();

type InfoTab = 'summary' | 'params' | 'response' | 'design' | 'api';

type DesignField = { key: string; label: string; value: string };
type DesignTable = { label: string; columns: { key: string; label: string }[]; rows: Record<string, string>[] };

@Component({
    selector: 'endpoint-info-dialog',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule],
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }
            .ui-icon {
                width: 16px;
                height: 16px;
                font-size: 16px;
                line-height: 16px;
            }
            .fact-row,
            .field-row,
            .response-row {
                display: grid;
                align-items: center;
                column-gap: 12px;
            }
            .fact-row {
                grid-template-columns: 7rem minmax(0, 1fr);
                min-height: 32px;
            }
            .field-row {
                grid-template-columns: minmax(0, 1fr) 6.5rem;
                min-height: 40px;
            }
            .response-row {
                grid-template-columns: minmax(0, 1.4fr) 5.5rem minmax(0, 1fr);
                min-height: 36px;
            }
            .param-grid {
                display: grid;
                grid-template-columns: minmax(5.5rem, 0.95fr) 3.75rem minmax(5.75rem, 0.85fr) minmax(7.5rem, 1.05fr) minmax(8.5rem, 1.25fr);
                align-items: start;
                column-gap: 10px;
                padding: 8px 10px;
            }
        `,
    ],
    template: `
        <div class="flex max-h-[70vh] w-full flex-col bg-white text-slate-950 dark:bg-gray-950 dark:text-white">
            <header class="shrink-0 px-3 pt-2.5">
                <div class="flex items-center gap-2">
                    <span class="inline-flex h-7 max-w-[16rem] items-center truncate rounded-full border border-slate-200 px-3 text-[11px] font-semibold uppercase tracking-wide text-slate-700 dark:border-gray-700 dark:text-slate-200">{{ sourceLabel() }}</span>
                    <span class="inline-flex h-7 shrink-0 items-center rounded-full px-3 text-xs font-semibold" [ngClass]="methodTone()">{{ method() }}</span>
                    <span class="inline-flex h-7 min-w-0 items-center truncate rounded-full bg-slate-100 px-3 font-mono text-xs text-slate-600 dark:bg-gray-800 dark:text-slate-300">{{ path() || '—' }}</span>
                    <span class="ml-auto"></span>
                    <button type="button" class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-800" (click)="close()">
                        <mat-icon class="ui-icon">close</mat-icon>
                    </button>
                </div>

                @if (!loading()) {
                    <div class="mt-2 flex flex-wrap items-center gap-1.5">
                        @if (countryLabel() !== '—') {
                            <span class="inline-flex h-6 items-center rounded-full bg-emerald-50 px-2.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">{{ countryLabel() }}</span>
                        }
                        <span class="inline-flex h-6 items-center rounded-full bg-emerald-50 px-2.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">{{ costLabel() }}</span>
                    </div>
                    <h2 class="mt-2 text-lg font-semibold leading-6 tracking-tight">{{ title() }}</h2>
                    <p class="mt-1 line-clamp-2 text-[13px] leading-5 text-slate-500">{{ purpose() || ('visitaGuide.endpointInfoNoPurpose' | transloco) }}</p>

                    <div class="mt-3 flex flex-wrap gap-x-4 border-b border-slate-200 dark:border-gray-800">
                        @for (item of tabs; track item.id) {
                            <button type="button" class="relative -mb-px inline-flex items-center gap-1 pb-2 text-[13px]" [ngClass]="tab() === item.id ? 'font-medium text-blue-600' : 'text-slate-500'" (click)="tab.set(item.id)">
                                <mat-icon class="ui-icon">{{ item.icon }}</mat-icon>
                                <span>{{ item.key | transloco }}</span>
                                @if (tab() === item.id) {
                                    <span class="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-blue-600"></span>
                                }
                            </button>
                        }
                    </div>
                }
            </header>

            <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2">
                @if (loading()) {
                    <div class="flex justify-center py-16"><mat-spinner diameter="28"></mat-spinner></div>
                } @else if (tab() === 'summary') {
                    <div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-800">
                        <div class="fact-row border-b border-slate-100 px-4 dark:border-gray-800">
                            <span class="text-sm text-slate-500">{{ 'visitaGuide.endpointInfoCountry' | transloco }}</span>
                            <span class="truncate text-sm font-medium">{{ countryLabel() }}</span>
                        </div>
                        <div class="fact-row border-b border-slate-100 px-4 dark:border-gray-800">
                            <span class="text-sm text-slate-500">{{ 'visitaGuide.endpointInfoCategory' | transloco }}</span>
                            <span class="truncate text-sm font-medium">{{ categoryLabel() }}</span>
                        </div>
                        <div class="fact-row border-b border-slate-100 px-4 dark:border-gray-800">
                            <span class="text-sm text-slate-500">{{ 'visitaGuide.endpointInfoCost' | transloco }}</span>
                            <span class="truncate text-sm font-semibold tabular-nums">{{ costLabel() }}</span>
                        </div>
                        <div class="fact-row px-4">
                            <span class="text-sm text-slate-500">{{ 'visitaGuide.endpointInfoOutput' | transloco }}</span>
                            <span class="truncate text-sm font-medium">{{ shapeLabel() }}</span>
                        </div>
                    </div>
                } @else if (tab() === 'params') {
                    @if (queryOptions().length > 1) {
                        <div class="space-y-3">
                            @for (option of queryOptions(); track option.id) {
                                <section class="overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-800">
                                    <div class="flex items-center gap-2 border-b border-slate-100 px-3 py-2 dark:border-gray-800">
                                        <mat-icon class="ui-icon text-slate-500">{{ modeIcon(option) }}</mat-icon>
                                        <span class="min-w-0 truncate text-xs font-semibold uppercase tracking-wide">{{ modeHeadline(option) }}</span>
                                        @if (hasAlternatives(option)) {
                                            <button type="button" class="ml-auto inline-flex h-8 shrink-0 items-center rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-600 dark:border-gray-700 dark:text-slate-300" (click)="toggleAlternatives(option.id)">
                                                {{ (alternativesOpen(option.id) ? 'visitaGuide.endpointInfoHideAlternatives' : 'visitaGuide.endpointInfoMoreAlternatives') | transloco }}
                                            </button>
                                        }
                                    </div>
                                    @if (modeHint(option)) {
                                        <p class="px-3 py-2 text-[13px] leading-5 text-slate-500">{{ modeHint(option) }}</p>
                                    }
                                    <div class="mx-3 mb-3 overflow-x-auto rounded-xl border border-slate-200 dark:border-gray-800">
                                        <ng-container *ngTemplateOutlet="paramTable; context: { rows: visibleOptionFields(option) }"></ng-container>
                                    </div>
                                </section>
                            }
                        </div>
                    } @else if (!params().length) {
                        <p class="text-sm leading-5 text-slate-500">{{ 'visitaGuide.endpointInfoNoParams' | transloco }}</p>
                    } @else {
                        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-gray-800">
                            <ng-container *ngTemplateOutlet="paramTable; context: { rows: params() }"></ng-container>
                        </div>
                    }
                } @else if (tab() === 'response') {
                    @if (topResponse().length) {
                        <div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-800">
                            <div class="response-row border-b border-slate-100 bg-slate-50 px-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400 dark:border-gray-800 dark:bg-gray-900">
                                <span>{{ 'visitaGuide.endpointInfoField' | transloco }}</span>
                                <span>{{ 'visitaGuide.endpointInfoType' | transloco }}</span>
                                <span class="text-right">{{ 'visitaGuide.endpointInfoExample' | transloco }}</span>
                            </div>
                            @for (row of topResponse(); track row.field) {
                                <div class="response-row border-b border-slate-100 px-4 last:border-b-0 dark:border-gray-800">
                                    <span class="truncate font-mono text-xs">{{ row.field }}</span>
                                    <span class="text-xs text-slate-500">{{ typeLabel(row.type) }}</span>
                                    <span class="truncate text-right text-xs text-slate-500">{{ row.example || '—' }}</span>
                                </div>
                            }
                        </div>
                    } @else {
                        <p class="text-sm leading-5 text-slate-500">{{ 'visitaGuide.endpointInfoNoSample' | transloco }}</p>
                    }
                    @if (sampleJson()) {
                        <pre class="mt-3 max-h-40 overflow-auto rounded-2xl bg-[#0c1424] p-4 font-mono text-[12px] leading-5 text-slate-100">{{ sampleJson() }}</pre>
                    }
                } @else if (tab() === 'design') {
                    @let block = designBlock();
                    <p class="mb-2 text-[13px] leading-5 text-slate-500">{{ 'visitaGuide.endpointInfoDesignHint' | transloco }}</p>
                    <div class="rounded-xl border border-stone-200 bg-white p-3 text-slate-950 shadow-sm">
                        @if (block.fields.length) {
                            <div class="grid grid-cols-2 gap-x-4">
                                @for (field of block.fields; track field.key) {
                                    <div class="min-w-0 border-b border-stone-200 px-2 py-1.5">
                                        <div class="text-[10px] font-medium uppercase tracking-wide text-slate-400">{{ field.label }}</div>
                                        <div class="mt-0.5 break-words text-sm leading-5">{{ field.value }}</div>
                                    </div>
                                }
                            </div>
                        }
                        @if (block.table; as table) {
                            <div class="mt-3 overflow-x-auto rounded-lg border border-stone-200">
                                @if (table.label) {
                                    <div class="border-b border-stone-200 px-3 py-2 text-xs font-semibold tracking-wide">{{ table.label }}</div>
                                }
                                <table class="w-full text-left text-xs">
                                    <thead>
                                        <tr class="border-b border-stone-200 text-[10px] uppercase tracking-wide text-slate-400">
                                            @for (column of table.columns; track column.key) {
                                                <th class="px-3 py-2 font-medium">{{ column.label }}</th>
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @for (row of table.rows; track $index) {
                                            <tr class="border-b border-stone-100 last:border-b-0">
                                                @for (column of table.columns; track column.key) {
                                                    <td class="px-3 py-2">{{ row[column.key] || '—' }}</td>
                                                }
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                        @if (!block.fields.length && !block.table) {
                            <p class="text-sm text-slate-500">{{ 'visitaGuide.endpointInfoNoSample' | transloco }}</p>
                        }
                        @if (block.extra > 0) {
                            <p class="mt-3 text-xs text-slate-400">{{ 'visitaGuide.endpointInfoDesignMore' | transloco: { count: block.extra } }}</p>
                        }
                    </div>
                } @else {
                    <h3 class="text-sm font-semibold">{{ 'visitaGuide.endpointInfoApiLead' | transloco }}</h3>
                    <p class="mt-1 text-sm leading-5 text-slate-500">{{ 'visitaGuide.endpointInfoApiHint' | transloco }}</p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        @for (sample of codeSamples(); track sample.id) {
                            <button type="button" class="inline-flex h-9 items-center rounded-lg px-4 text-sm font-medium" [ngClass]="activeSample()?.id === sample.id ? 'bg-slate-900 text-white dark:bg-white dark:text-gray-950' : 'border border-slate-200 text-slate-700 dark:border-gray-700'" (click)="codeLang.set(sample.id)">{{ sample.label }}</button>
                        }
                    </div>
                    @if (activeSample(); as sample) {
                        <div class="mt-3 overflow-hidden rounded-2xl bg-[#0c1424]">
                            <div class="flex items-center justify-between px-4 py-3">
                                <span class="text-xs text-slate-400">{{ sample.label }}</span>
                                <button type="button" class="inline-flex h-8 items-center gap-1.5 rounded-lg border border-slate-600 px-3 text-xs text-slate-200" (click)="copy(sample.code, sample.id)">
                                    <mat-icon class="ui-icon">content_copy</mat-icon>
                                    {{ copyLabel(sample.id) }}
                                </button>
                            </div>
                            <pre class="max-h-48 overflow-auto px-4 pb-4 font-mono text-[13px] leading-6 text-slate-100">{{ sample.code }}</pre>
                        </div>
                    }
                }
            </div>

            <footer class="flex shrink-0 items-center gap-2 border-t border-slate-200 px-3 py-2 dark:border-gray-800">
                @if (docsUrl()) {
                    <a class="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-[13px] font-medium text-slate-800 dark:border-gray-700 dark:text-white" [href]="docsUrl()" target="_blank" rel="noopener noreferrer">
                        <mat-icon class="ui-icon">menu_book</mat-icon>
                        {{ 'visitaGuide.endpointInfoDocsOfficial' | transloco }}
                    </a>
                } @else {
                    <button type="button" class="inline-flex h-9 cursor-not-allowed items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-[13px] font-medium text-slate-400 dark:border-gray-700" disabled>
                        <mat-icon class="ui-icon">menu_book</mat-icon>
                        {{ 'visitaGuide.endpointInfoDocsOfficial' | transloco }}
                    </button>
                }
                <button type="button" class="ml-auto inline-flex h-9 items-center gap-1.5 rounded-lg bg-blue-600 px-3 text-[13px] font-medium text-white hover:bg-blue-700" (click)="openPostman()">
                    <mat-icon class="ui-icon">play_arrow</mat-icon>
                    {{ 'visitaGuide.endpointInfoTryGo' | transloco }}
                </button>
            </footer>

            <ng-template #paramTable let-rows="rows">
                <div class="min-w-[640px]">
                    <div class="param-grid border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wide text-slate-400 dark:border-gray-800">
                        <span>{{ 'visitaGuide.endpointInfoParameter' | transloco }}</span>
                        <span>{{ 'visitaGuide.endpointInfoType' | transloco }}</span>
                        <span>{{ 'visitaGuide.endpointInfoRequirement' | transloco }}</span>
                        <span>{{ 'visitaGuide.endpointInfoAllowed' | transloco }}</span>
                        <span>{{ 'visitaGuide.endpointInfoDescription' | transloco }}</span>
                    </div>
                    @for (row of rows; track row.field) {
                        <div class="param-grid border-b border-slate-100 last:border-b-0 dark:border-gray-800">
                            <span class="font-mono text-sm font-semibold">{{ row.field }}</span>
                            <span class="text-sm text-slate-600 dark:text-slate-300">{{ dataTypeLabel(row) }}</span>
                            <span>
                                @if (row.when) {
                                    <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                                        <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                        {{ 'visitaGuide.endpointInfoConditional' | transloco }}
                                    </span>
                                    <span class="mt-1 block text-xs leading-4 text-slate-500">{{ row.when }}</span>
                                } @else if (row.required) {
                                    <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-rose-500">
                                        <span class="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
                                        {{ 'visitaGuide.endpointInfoRequiredBadge' | transloco }}
                                    </span>
                                } @else {
                                    <span class="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{{ 'visitaGuide.endpointInfoOptional' | transloco }}</span>
                                }
                            </span>
                            <span>
                                @if (row.enums.length) {
                                    <span class="flex flex-wrap gap-1">
                                        @for (value of shownEnums(row); track value) {
                                            <span class="rounded-md border border-slate-200 px-1.5 py-0.5 text-[11px] font-medium text-slate-600 dark:border-gray-700 dark:text-slate-300">{{ value }}</span>
                                        }
                                        @if (extraEnums(row) > 0) {
                                            <span class="self-center text-[11px] text-slate-400">{{ 'visitaGuide.endpointInfoMoreValues' | transloco: { count: extraEnums(row) } }}</span>
                                        }
                                    </span>
                                } @else if (row.dateFormat) {
                                    <span class="text-xs text-slate-500">{{ row.dateFormat }}</span>
                                } @else {
                                    <span class="text-slate-300">—</span>
                                }
                            </span>
                            <span class="text-xs leading-5 text-slate-500">{{ row.description || '—' }}</span>
                        </div>
                    }
                </div>
            </ng-template>
        </div>
    `,
})
export class EndpointInfoDialogComponent implements OnInit {
    readonly data = inject<EndpointInfoDialogData>(MAT_DIALOG_DATA);
    private readonly _ref = inject(MatDialogRef<EndpointInfoDialogComponent>);
    private readonly _batch = inject(SmartBatchService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _router = inject(Router);

    readonly tabs: { id: InfoTab; key: string; icon: string }[] = [
        { id: 'summary', key: 'visitaGuide.endpointInfoSummary', icon: 'info' },
        { id: 'params', key: 'visitaGuide.endpointInfoSends', icon: 'outbound' },
        { id: 'response', key: 'visitaGuide.endpointInfoResponse', icon: 'data_object' },
        { id: 'design', key: 'visitaGuide.endpointInfoDesign', icon: 'dashboard' },
        { id: 'api', key: 'visitaGuide.endpointInfoApi', icon: 'code' },
    ];

    readonly tab = signal<InfoTab>('summary');
    readonly expandedModes = signal<Record<string, boolean>>({});
    readonly loading = signal(true);
    readonly detail = signal<FeatureDetail>(this.data.feature as FeatureDetail);
    readonly copied = signal('');
    readonly codeLang = signal('curl');

    ngOnInit(): void {
        const id = this.data.feature.code || this.data.feature._id;
        if (!id) {
            this.loading.set(false);
            return;
        }
        this._batch.getFeatureDetail(id).subscribe((loaded) => {
            if (loaded && typeof loaded === 'object') {
                this.detail.set({ ...this.data.feature, ...(loaded as FeatureDetail) });
            }
            this.loading.set(false);
        });
    }

    title(): string {
        const feature = this.detail();
        const catalog = getAppFeatureCatalogCopy(this._transloco, feature.code);
        const lang = (this._transloco.getActiveLang() || 'es').split('-')[0];
        return catalog.title || feature.docs?.[lang]?.title || (lang === 'es' ? feature.nameES : '') || feature.name || feature.code;
    }

    method(): string {
        return (this.detail().method || 'GET').toUpperCase();
    }

    path(): string {
        return (this.detail().url || this.detail().endpoint || '').trim();
    }

    sourceLabel(): string {
        const category = this.categoryLabel();
        if (!category || category === '—') return this._transloco.translate('visitaGuide.endpointInfoSourcePlain');
        return this._transloco.translate('visitaGuide.endpointInfoSource', { name: category });
    }

    methodTone(): string {
        const method = this.method();
        if (method === 'POST') return 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300';
        if (method === 'PUT' || method === 'PATCH') return 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
        if (method === 'DELETE') return 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300';
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300';
    }

    countryLabel(): string {
        return this.detail().country?.trim() || '—';
    }

    categoryLabel(): string {
        const raw = (this.detail().baseCategory || '').trim();
        if (raw) {
            const key = `categories.${raw}`;
            const translated = this._transloco.translate(key);
            if (translated && translated !== key) return translated;
            return raw.replace(/[_-]+/g, ' ');
        }
        return this.detail().group || '—';
    }

    costLabel(): string {
        const price = Number(this.detail().price);
        if (!Number.isFinite(price)) return '—';
        const cost = price.toLocaleString(undefined, { maximumFractionDigits: 4 });
        return this._transloco.translate('visitaGuide.endpointInfoCredits', { cost });
    }

    description(): string {
        const feature = this.detail();
        const catalog = getAppFeatureCatalogCopy(this._transloco, feature.code);
        return (catalog.description || feature.description || this.localeDoc()?.description || '').trim();
    }

    purpose(): string {
        return this.description()
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/[`*_#>]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    typeLabel(type: string): string {
        const key =
            type === 'string'
                ? 'visitaGuide.endpointInfoTypeText'
                : type === 'number'
                  ? 'visitaGuide.endpointInfoTypeNumber'
                  : type === 'boolean'
                    ? 'visitaGuide.endpointInfoTypeBoolean'
                    : type === 'lista'
                      ? 'visitaGuide.endpointInfoTypeList'
                      : type === 'objeto'
                        ? 'visitaGuide.endpointInfoTypeObject'
                        : '';
        return key ? this._transloco.translate(key) : type;
    }

    overview(): string {
        return (this.localeDoc()?.overview || this.description() || '').trim();
    }

    docsUrl(): string {
        const explicit = this.detail().documentationUrl?.trim() || '';
        if (/^https?:\/\//i.test(explicit)) return explicit;
        const mapped = docsSlugFor(this.path(), this._transloco.getActiveLang());
        if (mapped) return mapped;
        const match = this.overview().match(/https:\/\/docs\.verifik\.co[^\s)]+/);
        return match?.[0] || '';
    }

    queryOptions(): QueryMode[] {
        return queryModesForFeature(this.detail());
    }

    optionTitle(option: QueryMode): string {
        const primary = option.fields.filter((field) => !field.requiredWhen?.values.length);
        return (primary.length ? primary : option.fields).map((field) => this.fieldLabel(field.field)).join(' + ');
    }

    optionFields(option: QueryMode): SheetParam[] {
        return option.fields.map((field) => this._sheet(field));
    }

    visibleOptionFields(option: QueryMode): SheetParam[] {
        const rows = this.optionFields(option);
        if (this.alternativesOpen(option.id)) return rows;
        const primary = rows.filter((row) => !row.when);
        return primary.length ? primary : rows;
    }

    hasAlternatives(option: QueryMode): boolean {
        return option.fields.some((field) => !!field.requiredWhen);
    }

    alternativesOpen(id: string): boolean {
        return this.expandedModes()[id] === true;
    }

    toggleAlternatives(id: string): void {
        this.expandedModes.update((state) => ({ ...state, [id]: !state[id] }));
    }

    modeIcon(option: QueryMode): string {
        const names = this._modeNames(option);
        if (names.has('documentType') || names.has('documentNumber')) return 'badge';
        if (names.has('plate') || names.has('vin')) return 'directions_car';
        return 'person';
    }

    modeHeadline(option: QueryMode): string {
        return this._transloco.translate(this._modeKey(option, 'title'), { letter: option.letter });
    }

    modeHint(option: QueryMode): string {
        return this._transloco.translate(this._modeKey(option, 'hint'));
    }

    dataTypeLabel(row: SheetParam): string {
        if (row.type === 'date') return this._transloco.translate('visitaGuide.endpointInfoTypeDate');
        if (row.type === 'number') return this._transloco.translate('visitaGuide.endpointInfoTypeNumber');
        return 'String';
    }

    shownEnums(row: SheetParam): string[] {
        return row.enums.slice(0, 6);
    }

    extraEnums(row: SheetParam): number {
        return Math.max(0, row.enums.length - 6);
    }

    params(): SheetParam[] {
        const feature = this.detail();
        const descriptions = new Map<string, string>();
        for (const row of this.localeDoc()?.params ?? []) {
            if (row.field && row.description) descriptions.set(row.field, row.description);
        }
        const enums = new Map<string, string[]>();
        const required = new Map<string, boolean>();
        const formats = new Map<string, string>();
        const depDescriptions = new Map<string, string>();
        const whens = new Map<string, string>();
        for (const dep of feature.dependencies ?? []) {
            const extra = dep as {
                field?: string;
                description?: string;
                dateFormat?: string;
                requiredWhen?: { field?: string; in?: unknown[] };
            };
            if (!dep.field) continue;
            if (dep.enum?.length) enums.set(dep.field, dep.enum.map(String));
            required.set(dep.field, dep.required !== false);
            if (extra.description) depDescriptions.set(dep.field, extra.description);
            if (extra.dateFormat) formats.set(dep.field, extra.dateFormat);
            const whenValues = Array.isArray(extra.requiredWhen?.in) ? extra.requiredWhen.in.map(String) : [];
            if (extra.requiredWhen?.field && whenValues.length) {
                whens.set(
                    dep.field,
                    this._transloco.translate('visitaGuide.flowQueryWhen', {
                        when: this.fieldLabel(extra.requiredWhen.field),
                        values: whenValues.join(', '),
                    })
                );
            }
        }
        for (const field of feature.requiredParams ?? []) required.set(field, true);
        const catalog = ENDPOINT_IO_CATALOG[feature.code];
        for (const [field, values] of Object.entries(catalog?.inputEnums ?? {})) {
            if (!enums.has(field)) enums.set(field, values);
        }
        const fields = [
            ...new Set([
                ...(feature.dependencies ?? []).map((dep) => dep.field).filter(Boolean),
                ...(catalog?.inputs ?? []),
                ...(feature.requiredParams ?? []),
            ]),
        ].filter((field) => isClientVisibleBatchDependencyField(field)) as string[];
        return fields.map((field) => {
            const allowed = enums.get(field) ?? [];
            const leaf = field.split('.').pop()?.toLowerCase() || field.toLowerCase();
            const dateFormat = formats.get(field) || '';
            return {
                field,
                label: this.fieldLabel(field),
                required: required.get(field) === true && !whens.has(field),
                type: allowed.length ? 'enum' : dateFormat || DATE_FIELDS.has(leaf) ? 'date' : 'text',
                enums: allowed,
                description: descriptions.get(field) || depDescriptions.get(field) || '',
                when: whens.get(field) || '',
                dateFormat,
            };
        });
    }

    designBlock(): { fields: DesignField[]; table: DesignTable | null; extra: number } {
        const placeholder = this._transloco.translate('visitaGuide.endpointInfoSampleText');
        const clip = (value: string): string => {
            const text = value.replace(/\s+/g, ' ').trim();
            if (!text || text === '—') return placeholder;
            return text.length > 72 ? `${text.slice(0, 69)}…` : text;
        };
        const value = this._designValue();
        if (value == null) {
            const outputs = ENDPOINT_IO_CATALOG[this.detail().code]?.outputs ?? [];
            return {
                fields: outputs.slice(0, 8).map((key) => ({
                    key,
                    label: previewLabel(key),
                    value: placeholder,
                })),
                table: null,
                extra: Math.max(0, outputs.length - 8),
            };
        }
        const chunks = chunkLayoutSheetItems(collectLayoutSheetItems(value));
        const fields: DesignField[] = [];
        let table: DesignTable | null = null;
        for (const chunk of chunks) {
            if (chunk.kind === 'fields') {
                for (const entry of chunk.entries) {
                    if (this._isSignatureField(entry.key, entry.value)) continue;
                    if (isStepIndex(entry.key, [entry.value])) continue;
                    fields.push({
                        key: entry.key,
                        label: previewLabel(entry.key, entry.label),
                        value: clip(entry.value),
                    });
                }
                continue;
            }
            if (table) continue;
            const columns = chunk.table.columns
                .filter((column) => !isStepIndex(column.key, chunk.table.rows.map((row) => row[column.key] || '')))
                .slice(0, 4);
            if (!columns.length) continue;
            const label = previewLabel(chunk.table.key, chunk.table.label);
            table = {
                label: label && label !== '__list' ? label : '',
                columns: columns.map((column) => ({
                    key: column.key,
                    label: previewLabel(column.key, column.label),
                })),
                rows: chunk.table.rows.slice(0, 2).map((row) =>
                    Object.fromEntries(columns.map((column) => [column.key, clip(row[column.key] || '')]))
                ),
            };
        }
        return { fields: fields.slice(0, 8), table, extra: Math.max(0, fields.length - 8) };
    }

    sampleJson(): string {
        const body = this.localeDoc()?.responses?.find((item) => item.body)?.body?.trim();
        if (!body) return '';
        try {
            return JSON.stringify(JSON.parse(body), null, 2);
        } catch {
            return body;
        }
    }

    topResponse(): ResponseField[] {
        const sample = this.sampleJson();
        if (!sample) {
            return (ENDPOINT_IO_CATALOG[this.detail().code]?.outputs ?? []).slice(0, 12).map((field) => ({
                field,
                type: 'string',
                example: '',
            }));
        }
        try {
            const parsed = JSON.parse(sample) as unknown;
            const value = Array.isArray(parsed) ? parsed[0] : parsed;
            if (!value || typeof value !== 'object') return [];
            return Object.entries(value as Record<string, unknown>).slice(0, 8).map(([key, entry]) => ({
                field: key,
                type: Array.isArray(entry) ? 'lista' : entry && typeof entry === 'object' ? 'objeto' : entry === null ? 'null' : typeof entry,
                example: entry == null || typeof entry === 'object' ? '' : String(entry).slice(0, 42),
            }));
        } catch {
            return [];
        }
    }

    shapeLabel(): string {
        const sample = this.sampleJson();
        if (sample.trim().startsWith('[')) return this._transloco.translate('visitaGuide.endpointInfoShapeList');
        if (this.topResponse().some((row) => row.type === 'lista')) {
            return this._transloco.translate('visitaGuide.endpointInfoShapeNested');
        }
        return this._transloco.translate('visitaGuide.endpointInfoShapeObject');
    }

    codeSamples(): { id: string; label: string; code: string }[] {
        const documented = (this.localeDoc()?.requestExamples ?? [])
            .filter((item) => item.code)
            .map((item) => ({
                id: (item.lang || item.label || 'sample').toLowerCase(),
                label: item.label || item.lang || 'Sample',
                code: item.code || '',
            }));
        const generated = this._generatedSamples();
        const merged = [...documented];
        for (const sample of generated) {
            if (!merged.some((item) => item.id === sample.id)) merged.push(sample);
        }
        return merged.length ? merged : generated;
    }

    activeSample(): { id: string; label: string; code: string } | null {
        const samples = this.codeSamples();
        return samples.find((item) => item.id === this.codeLang()) || samples[0] || null;
    }

    copy(value: string, id: string): void {
        void navigator.clipboard?.writeText(value).then(() => {
            this.copied.set(id);
            setTimeout(() => {
                if (this.copied() === id) this.copied.set('');
            }, 1600);
        });
    }

    copyLabel(id: string): string {
        return this._transloco.translate(this.copied() === id ? 'visitaGuide.endpointInfoCopied' : 'visitaGuide.endpointInfoCopyCode');
    }

    openPostman(): void {
        const code = this.detail().code;
        void this._router.navigate(['/postman'], { queryParams: code ? { code } : {} });
        this.close();
    }

    close(): void {
        this._ref.close();
    }

    fieldLabel(field: string): string {
        return this._transloco.translate(paramFieldLabelKey(field), { field: humanizeParamField(field) });
    }

    private _sheet(field: QueryModeField): SheetParam {
        const leaf = canonicalChainField(field.field).toLowerCase();
        const identity = ['fullname', 'name', 'firstname', 'lastname', 'documenttype', 'documentnumber', 'plate', 'vin'].includes(leaf);
        return {
            field: field.field,
            label: this.fieldLabel(field.field),
            required: !field.requiredWhen && (field.required || identity),
            type: field.enums.length ? 'enum' : field.dateFormat || DATE_FIELDS.has(leaf) ? 'date' : 'text',
            enums: field.enums,
            description: this._paramDescription(field.field, field.description),
            dateFormat: field.dateFormat || '',
            when: field.requiredWhen
                ? this._transloco.translate('visitaGuide.flowQueryWhen', {
                      when: this.fieldLabel(field.requiredWhen.field),
                      values: field.requiredWhen.values.join(', '),
                  })
                : '',
        };
    }

    private _modeNames(option: QueryMode): Set<string> {
        return new Set(option.fields.map((field) => canonicalChainField(field.field)));
    }

    private _modeKey(option: QueryMode, kind: 'title' | 'hint'): string {
        const names = this._modeNames(option);
        const document = names.has('documentType') || names.has('documentNumber');
        const name = names.has('fullName') || names.has('name') || names.has('firstName');
        if (kind === 'title') {
            if (name) return 'visitaGuide.endpointInfoModeNameSearch';
            if (document) return 'visitaGuide.endpointInfoModeDocumentSearch';
            if (names.has('plate')) return 'visitaGuide.endpointInfoModePlateSearch';
            if (names.has('vin')) return 'visitaGuide.endpointInfoModeVinSearch';
            return 'visitaGuide.endpointInfoModeGeneric';
        }
        if (document) return 'visitaGuide.endpointInfoModeDocumentHint';
        if (names.has('plate')) return 'visitaGuide.endpointInfoModePlateHint';
        if (names.has('vin')) return 'visitaGuide.endpointInfoModeVinHint';
        return 'visitaGuide.endpointInfoModeNameHint';
    }

    private _paramDescription(field: string, fallback = ''): string {
        const fromDocs = this.localeDoc()?.params?.find((row) => row.field === field)?.description?.trim();
        return fromDocs || fallback;
    }

    private localeDoc() {
        const docs = this.detail().docs;
        if (!docs) return undefined;
        const lang = (this._transloco.getActiveLang() || 'es').split('-')[0];
        return docs[lang] || docs.es || docs.en;
    }

    private _designValue(): unknown {
        const raw = this.sampleJson();
        if (!raw) return null;
        try {
            return this._payloadOnly(JSON.parse(raw) as unknown);
        } catch {
            return null;
        }
    }

    /** The certificate body. The Verifik signature stays out of the block. */
    private _payloadOnly(value: unknown): unknown {
        if (Array.isArray(value)) return value;
        if (!value || typeof value !== 'object') return value;
        const record = value as Record<string, unknown>;
        if ('data' in record) return record.data;
        const copy = { ...record };
        delete copy.signature;
        return copy;
    }

    private _isSignatureField(key: string, value: string): boolean {
        const leaf = key.split('.').pop()?.toLowerCase() || key.toLowerCase();
        if (key.toLowerCase().startsWith('signature')) return true;
        if (leaf === 'signature' || leaf === 'datetime') return true;
        return /certified by verifik/i.test(value);
    }

    private _absoluteUrl(): string {
        const path = this.path();
        if (!path) return String(environment.apiUrl || '');
        if (/^https?:\/\//i.test(path)) return path;
        const base = String(environment.apiUrl || '').replace(/\/$/, '');
        return `${base}/${path.replace(/^\//, '')}`;
    }

    private _exampleFields(): SheetParam[] {
        const option = this.queryOptions()[0];
        if (option) return this.optionFields(option).filter((field) => !field.when);
        return this.params();
    }

    private _generatedSamples(): { id: string; label: string; code: string }[] {
        const url = this._absoluteUrl();
        const fields = this._exampleFields();
        const query = fields.map((param) => `${encodeURIComponent(param.field)}={{${param.field}}}`).join('&');
        const full = this.method() === 'GET' && query ? `${url}?${query}` : url;
        const payload = JSON.stringify(Object.fromEntries(fields.map((param) => [param.field, `{{${param.field}}}`])), null, 2);
        const curlBody = this.method() === 'GET' ? '' : ` \\\n  -H 'Content-Type: application/json' \\\n  -d '${payload}'`;
        return [
            {
                id: 'curl',
                label: 'cURL',
                code: `curl -X ${this.method()} '${full}' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer <your_token>'${curlBody}`,
            },
            {
                id: 'javascript',
                label: 'JavaScript',
                code:
                    this.method() === 'GET'
                        ? `const response = await fetch('${full}', {\n  headers: { Authorization: 'Bearer <your_token>' }\n});\nconst data = await response.json();`
                        : `const response = await fetch('${url}', {\n  method: '${this.method()}',\n  headers: {\n    Authorization: 'Bearer <your_token>',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify(${payload})\n});\nconst data = await response.json();`,
            },
            {
                id: 'python',
                label: 'Python',
                code:
                    this.method() === 'GET'
                        ? `import requests\n\nresponse = requests.get('${full}', headers={'Authorization': 'Bearer <your_token>'})\nprint(response.json())`
                        : `import requests\n\nresponse = requests.request('${this.method()}', '${url}', headers={'Authorization': 'Bearer <your_token>'}, json=${payload})\nprint(response.json())`,
            },
        ];
    }
}
