import { CommonModule } from '@angular/common';
import {
    Component,
    Input,
    computed,
    inject,
    signal,
    SecurityContext,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { FuseHighlightService } from '@fuse/components/highlight/highlight.service';

import {
    ApiEndpoint,
    EndpointDocLang,
    EndpointDocLocale,
    EndpointDocRequestExample,
    EndpointDocResponse,
    EndpointDocs,
} from '../postman.types';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';

/**
 * "About" tab for the Postman-style request editor.
 *
 * Renders a structured overview for the selected endpoint using `AppFeature.docs` when present
 * (seeded from verifik-documentation MDX). Locale resolution uses the active Transloco language
 * with a fallback to English; when only a non-active locale is present we surface a small
 * badge so the user knows the displayed content is in a different language.
 */
@Component({
    selector: 'postman-about-endpoint',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatTooltipModule, TranslocoPipe, MarkdownPipe],
    host: { class: 'block h-full' },
    template: `
        <div class="flex h-full flex-col overflow-hidden">
            <div class="flex-1 overflow-y-auto">
                <div class="mx-auto w-full max-w-4xl space-y-6 p-6 select-text">
                    @if (showFallbackBadge()) {
                        <div
                            class="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300"
                        >
                            <mat-icon class="icon-size-4">translate</mat-icon>
                            {{ 'postman.requestEditor.about.fallbackLocale' | transloco }}
                        </div>
                    }

                    @if (overview()) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.overview' | transloco }}
                            </h3>
                            <div
                                class="endpoint-overview-md prose prose-sm max-w-none text-slate-700 dark:prose-invert dark:text-slate-200 prose-p:mb-0 prose-p:leading-relaxed [&_p:not(:last-child)]:mb-2"
                                [innerHTML]="overview() | markdown"
                            ></div>
                        </section>
                    }

                    @if (headers().length) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.headers' | transloco }}
                            </h3>
                            <div
                                class="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700"
                            >
                                <table class="w-full text-left text-sm">
                                    <thead
                                        class="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800/60 dark:text-slate-400"
                                    >
                                        <tr>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.headers.key' | transloco }}
                                            </th>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.headers.value' | transloco }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                        @for (h of headers(); track h.name) {
                                            <tr>
                                                <td class="px-3 py-2 font-mono text-slate-700 dark:text-slate-200">
                                                    {{ h.name }}
                                                </td>
                                                <td class="px-3 py-2 font-mono text-slate-600 dark:text-slate-300">
                                                    {{ h.value }}
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    }

                    @if (paramsRows().length) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.parameters' | transloco }}
                            </h3>
                            <div
                                class="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700"
                            >
                                <table class="w-full text-left text-sm">
                                    <thead
                                        class="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800/60 dark:text-slate-400"
                                    >
                                        <tr>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.about.paramsColumns.field' | transloco }}
                                            </th>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.about.paramsColumns.type' | transloco }}
                                            </th>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.about.paramsColumns.required' | transloco }}
                                            </th>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.about.paramsColumns.allowed' | transloco }}
                                            </th>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.about.paramsColumns.description' | transloco }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                        @for (row of paramsRows(); track row.field) {
                                            <tr class="align-top">
                                                <td class="px-3 py-2 font-mono text-slate-700 dark:text-slate-200">
                                                    {{ row.field }}
                                                </td>
                                                <td class="px-3 py-2 text-slate-600 dark:text-slate-300">
                                                    {{ row.type || '—' }}
                                                </td>
                                                <td class="px-3 py-2 text-slate-600 dark:text-slate-300">
                                                    {{ (row.required ? 'postman.requestEditor.about.yes' : 'postman.requestEditor.about.no') | transloco }}
                                                </td>
                                                <td class="px-3 py-2">
                                                    @if (row.allowed?.length) {
                                                        <div class="flex flex-wrap gap-1">
                                                            @for (allowed of row.allowed; track allowed) {
                                                                <span
                                                                    class="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                                                                    >{{ allowed }}</span
                                                                >
                                                            }
                                                        </div>
                                                    } @else {
                                                        <span class="text-slate-400">—</span>
                                                    }
                                                </td>
                                                <td class="px-3 py-2 text-slate-600 dark:text-slate-300">
                                                    {{ row.description || '—' }}
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    }

                    @if (requestExamples().length) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.requestExamples' | transloco }}
                            </h3>
                            <div class="rounded-xl border border-slate-200 dark:border-slate-700">
                                <div
                                    class="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-800/60"
                                >
                                    @for (ex of requestExamples(); let i = $index; track ex.lang) {
                                        <button
                                            type="button"
                                            class="rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                                            [class.bg-white]="selectedRequestIdx() === i"
                                            [class.shadow-sm]="selectedRequestIdx() === i"
                                            [class.text-slate-900]="selectedRequestIdx() === i"
                                            [class.dark:bg-slate-900]="selectedRequestIdx() === i"
                                            [class.dark:text-white]="selectedRequestIdx() === i"
                                            [class.text-slate-500]="selectedRequestIdx() !== i"
                                            [class.hover:text-slate-900]="selectedRequestIdx() !== i"
                                            (click)="selectedRequestIdx.set(i)"
                                        >
                                            {{ ex.label }}
                                        </button>
                                    }
                                    <div class="ml-auto flex items-center">
                                        <button
                                            type="button"
                                            class="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                                            (click)="copy(currentRequest()?.code || '', 'request-' + selectedRequestIdx())"
                                        >
                                            <mat-icon class="icon-size-3.5">content_copy</mat-icon>
                                            {{ (copiedKey() === 'request-' + selectedRequestIdx() ? 'postman.requestEditor.about.copied' : 'postman.requestEditor.about.copy') | transloco }}
                                        </button>
                                    </div>
                                </div>
                                @if (currentRequest(); as req) {
                                    <pre
                                        class="hljs block overflow-x-auto p-3 text-xs leading-relaxed"
                                    ><code [innerHTML]="highlightedRequest()"></code></pre>
                                }
                            </div>
                        </section>
                    }

                    @if (responses().length) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.responseSamples' | transloco }}
                            </h3>
                            <div class="rounded-xl border border-slate-200 dark:border-slate-700">
                                <div
                                    class="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-800/60"
                                >
                                    @for (res of responses(); let i = $index; track res.status) {
                                        <button
                                            type="button"
                                            class="rounded-md px-2.5 py-1 text-xs font-semibold transition-colors"
                                            [class.bg-emerald-100]="selectedResponseIdx() === i && res.status === '200'"
                                            [class.text-emerald-700]="selectedResponseIdx() === i && res.status === '200'"
                                            [class.bg-amber-100]="selectedResponseIdx() === i && res.status === '404'"
                                            [class.text-amber-700]="selectedResponseIdx() === i && res.status === '404'"
                                            [class.bg-rose-100]="selectedResponseIdx() === i && (res.status === '409' || res.status === '400' || res.status === '500')"
                                            [class.text-rose-700]="selectedResponseIdx() === i && (res.status === '409' || res.status === '400' || res.status === '500')"
                                            [class.bg-slate-200]="selectedResponseIdx() === i && !['200','404','409','400','500'].includes(res.status)"
                                            [class.text-slate-900]="selectedResponseIdx() === i && !['200','404','409','400','500'].includes(res.status)"
                                            [class.text-slate-500]="selectedResponseIdx() !== i"
                                            [class.hover:text-slate-900]="selectedResponseIdx() !== i"
                                            (click)="selectedResponseIdx.set(i)"
                                        >
                                            {{ res.label || res.status }}
                                        </button>
                                    }
                                    <div class="ml-auto flex items-center">
                                        <button
                                            type="button"
                                            class="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                                            (click)="copy(prettyCurrentResponse(), 'response-' + selectedResponseIdx())"
                                        >
                                            <mat-icon class="icon-size-3.5">content_copy</mat-icon>
                                            {{ (copiedKey() === 'response-' + selectedResponseIdx() ? 'postman.requestEditor.about.copied' : 'postman.requestEditor.about.copy') | transloco }}
                                        </button>
                                    </div>
                                </div>
                                @if (responses()[selectedResponseIdx()]) {
                                    <pre
                                        class="hljs block overflow-x-auto p-3 text-xs leading-relaxed"
                                    ><code [innerHTML]="highlightedResponse()"></code></pre>
                                }
                            </div>
                        </section>
                    }

                    @if (notes().length) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.notes' | transloco }}
                            </h3>
                            <ul class="list-disc space-y-1.5 pl-5 text-sm text-slate-700 dark:text-slate-200">
                                @for (note of notes(); track note) {
                                    <li>{{ note }}</li>
                                }
                            </ul>
                        </section>
                    }

                    @if (isEmpty()) {
                        <div
                            class="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 bg-slate-50 py-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-800/40"
                        >
                            <mat-icon class="icon-size-8 opacity-60">menu_book</mat-icon>
                            <span>{{ 'postman.requestEditor.about.noDocsYet' | transloco }}</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
            }
            pre.hljs {
                background-color: rgb(15 23 42);
                color: rgb(226 232 240);
                border-radius: 0.5rem;
                margin: 0;
            }
        `,
    ],
})
export class AboutEndpointComponent {
    private _highlight = inject(FuseHighlightService);
    private _sanitizer = inject(DomSanitizer);
    private _transloco = inject(TranslocoService);

    private _docs = signal<EndpointDocs | undefined>(undefined);
    private _endpoint = signal<ApiEndpoint | null>(null);

    /** Active Transloco language as a signal for reactive recomputation. */
    private _activeLang = toSignal(this._transloco.langChanges$, {
        initialValue: this._transloco.getActiveLang(),
    });

    @Input({ required: false })
    set docs(value: EndpointDocs | undefined) {
        this._docs.set(value);
        this.selectedRequestIdx.set(0);
        this.selectedResponseIdx.set(0);
    }

    @Input({ required: false })
    set endpoint(value: ApiEndpoint | null) {
        this._endpoint.set(value);
    }

    /** Index of the active request/response tab. */
    selectedRequestIdx = signal(0);
    selectedResponseIdx = signal(0);
    copiedKey = signal<string | null>(null);

    /** Resolve the best-matching doc entry for the active locale. */
    readonly resolvedLocale = computed<{ locale: EndpointDocLocale; isFallback: boolean } | null>(() => {
        const docs = this._docs();
        if (!docs) return null;
        const active = this._toLocale(this._activeLang());
        if (active && docs[active]) return { locale: active, isFallback: false };
        if (docs.en) return { locale: 'en', isFallback: active !== 'en' };
        const firstKey = (Object.keys(docs) as EndpointDocLocale[]).find((k) => !!docs[k]);
        return firstKey ? { locale: firstKey, isFallback: true } : null;
    });

    readonly activeDoc = computed<EndpointDocLang | null>(() => {
        const resolved = this.resolvedLocale();
        return resolved ? this._docs()?.[resolved.locale] ?? null : null;
    });

    readonly showFallbackBadge = computed(() => !!this.resolvedLocale()?.isFallback);

    readonly overview = computed(() => {
        const fromDocs = this.activeDoc()?.overview;
        if (fromDocs && fromDocs.trim()) return fromDocs.trim();
        const desc = this._endpoint()?.description;
        return desc && desc.trim() ? desc.trim() : '';
    });

    readonly headers = computed(() => this.activeDoc()?.headers ?? []);

    /** Rich params table merging doc-level descriptions with catalog-level metadata. */
    readonly paramsRows = computed(() => {
        const doc = this.activeDoc();
        const catalog = this._endpoint()?.params ?? [];
        const byField = new Map<string, { type?: string; required?: boolean; allowed?: string[] }>();
        for (const p of catalog) {
            byField.set(p.key, { type: p.type, required: p.required, allowed: p.enum });
        }
        if (doc?.params?.length) {
            return doc.params.map((row) => {
                const extra = byField.get(row.field) || {};
                byField.delete(row.field);
                return {
                    field: row.field,
                    type: extra.type,
                    required: !!extra.required,
                    allowed: extra.allowed,
                    description: row.description,
                };
            });
        }
        return catalog.map((p) => ({
            field: p.key,
            type: p.type,
            required: !!p.required,
            allowed: p.enum,
            description: p.description || '',
        }));
    });

    readonly requestExamples = computed<EndpointDocRequestExample[]>(
        () => this.activeDoc()?.requestExamples ?? [],
    );

    readonly responses = computed<EndpointDocResponse[]>(() => this.activeDoc()?.responses ?? []);

    readonly notes = computed(() => this.activeDoc()?.notes ?? []);

    readonly currentRequest = computed(() => {
        const list = this.requestExamples();
        return list[this.selectedRequestIdx()] ?? list[0] ?? null;
    });

    readonly highlightedRequest = computed(() => {
        const req = this.currentRequest();
        if (!req) return '';
        const language = req.language || 'plaintext';
        return this._highlightSafe(req.code, language);
    });

    readonly prettyCurrentResponse = computed(() => {
        const res = this.responses()[this.selectedResponseIdx()];
        if (!res) return '';
        return this._prettyJson(res.body);
    });

    readonly highlightedResponse = computed(() =>
        this._highlightSafe(this.prettyCurrentResponse(), 'json'),
    );

    readonly isEmpty = computed(() => {
        return (
            !this.overview() &&
            !this.headers().length &&
            !this.paramsRows().length &&
            !this.requestExamples().length &&
            !this.responses().length &&
            !this.notes().length
        );
    });

    async copy(text: string, key: string): Promise<void> {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            this.copiedKey.set(key);
            setTimeout(() => {
                if (this.copiedKey() === key) this.copiedKey.set(null);
            }, 1500);
        } catch {
            /* clipboard might be denied; ignore */
        }
    }

    private _toLocale(lang: string): EndpointDocLocale | null {
        const normalized = (lang || '').toLowerCase();
        const supported: EndpointDocLocale[] = ['en', 'es', 'fr', 'pt', 'ko', 'ja', 'zh'];
        return (supported as string[]).includes(normalized) ? (normalized as EndpointDocLocale) : null;
    }

    private _prettyJson(raw: string): string {
        if (!raw) return '';
        try {
            return JSON.stringify(JSON.parse(raw), null, 2);
        } catch {
            return raw;
        }
    }

    private _highlightSafe(code: string, language: string): string {
        if (!code) return '';
        try {
            const html = this._highlight.highlight(code, language);
            return this._sanitizer.sanitize(SecurityContext.HTML, html) ?? '';
        } catch {
            return this._sanitizer.sanitize(SecurityContext.HTML, code) ?? '';
        }
    }
}
