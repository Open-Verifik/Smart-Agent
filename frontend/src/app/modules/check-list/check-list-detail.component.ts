import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, computed, effect, inject, input, output, signal, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { ApiEndpoint } from '../postman/postman.types';
import { getAppFeatureCatalogCopy, resolvePostmanEndpointCopy } from '../postman/postman-endpoint-copy.util';
import { getPostmanRequestValidationIssues } from '../postman/postman-request-validation';
import { AboutEndpointComponent } from '../postman/request-editor/about-endpoint.component';
import { JsonTableComponent } from '../postman/response-viewer/json-table.component';
import { formatCatalogPrice, sanitizeDisplayPayload } from '../postman/postman-docs-params.util';
import { CheckListRequestService } from './check-list-request.service';

type DetailTab = 'about' | 'request' | 'result';
type ResultView = 'table' | 'json';

@Component({
    selector: 'app-check-list-detail',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        TranslocoPipe,
        AboutEndpointComponent,
        JsonTableComponent,
    ],
    styleUrls: ['./check-list.styles.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
        <aside class="check-list-card flex h-full min-h-0 flex-col overflow-hidden">
            <header class="flex items-start justify-between gap-3 border-b border-[var(--cl-line)] p-5">
                <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cl-muted)]">
                        {{ endpoint()?.country }}
                    </p>
                    <h3 class="mt-1 text-lg font-semibold">{{ title() }}</h3>
                    <p class="mt-2 text-sm text-[var(--cl-muted)]">{{ description() }}</p>
                </div>
                <button type="button" class="check-list-pill" (click)="closed.emit()">
                    <mat-icon class="!h-4 !w-4 !text-[16px]">close</mat-icon>
                </button>
            </header>

            <div class="flex flex-wrap gap-2 border-b border-[var(--cl-line)] px-5 py-3">
                <span class="check-list-pill">
                    {{ 'checkList.cost' | transloco: { value: costLabel() } }}
                </span>
                <button type="button" class="check-list-pill" (click)="toggleSaved.emit()">
                    {{ saved() ? ('checkList.removeFromList' | transloco) : ('checkList.addToList' | transloco) }}
                </button>
                <button type="button" class="check-list-cta check-list-pill" (click)="batch.emit()">
                    {{ 'checkList.createSmartBatch' | transloco }}
                </button>
            </div>

            <div class="check-list-tabs px-5 pt-3">
                @for (tab of tabs; track tab.id) {
                    <button
                        type="button"
                        class="check-list-tab"
                        [class.is-on]="activeTab() === tab.id"
                        (click)="activeTab.set(tab.id)"
                    >
                        {{ tab.key | transloco }}
                    </button>
                }
            </div>

            <div class="min-h-0 flex-1 overflow-auto">
                @if (activeTab() === 'about') {
                    <postman-about-endpoint
                        [docs]="endpoint()?.docs"
                        [endpoint]="endpoint()"
                    ></postman-about-endpoint>
                }

                @if (activeTab() === 'request') {
                    <section class="space-y-3 p-5">
                        <h4 class="text-sm font-semibold">{{ 'checkList.tryIt' | transloco }}</h4>
                        @for (param of visibleParams(); track param.key) {
                            <label class="block">
                                <span class="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--cl-muted)]">
                                    {{ param.key }}
                                    @if (param.required) {
                                        <span class="text-rose-500">*</span>
                                    } @else {
                                        <span class="font-medium normal-case tracking-normal">
                                            {{ 'checkList.optional' | transloco }}
                                        </span>
                                    }
                                </span>
                                @if (param.enum?.length) {
                                    <select
                                        class="check-list-field"
                                        [ngModel]="param.value"
                                        (ngModelChange)="request.updateParam(param.key, $event)"
                                    >
                                        <option value="">{{ 'checkList.chooseValue' | transloco }}</option>
                                        @for (option of param.enum; track option) {
                                            <option [value]="option">{{ option }}</option>
                                        }
                                    </select>
                                } @else {
                                    <input
                                        class="check-list-field"
                                        [ngModel]="param.value"
                                        (ngModelChange)="request.updateParam(param.key, $event)"
                                        [placeholder]="param.description || param.key"
                                    />
                                }
                            </label>
                        }
                        <button
                            type="button"
                            class="check-list-cta check-list-pill w-full"
                            [disabled]="request.loading() || !canSend()"
                            (click)="run()"
                        >
                            @if (request.loading()) {
                                <span class="check-list-spinner"></span>
                            }
                            {{ request.loading() ? ('checkList.running' | transloco) : ('checkList.runCheck' | transloco) }}
                        </button>
                        @if (issues().length) {
                            <p class="text-xs text-rose-600">{{ 'checkList.fillRequired' | transloco }}</p>
                        }
                    </section>
                }

                @if (activeTab() === 'result') {
                    <section class="p-5">
                        @if (request.loading()) {
                            <div class="flex min-h-48 flex-col items-center justify-center gap-3">
                                <span class="check-list-spinner check-list-spinner-lg"></span>
                                <p class="text-sm text-[var(--cl-muted)]">{{ 'checkList.waitingResult' | transloco }}</p>
                            </div>
                        } @else if (request.response() || request.error()) {
                            <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
                                <p class="text-xs font-semibold uppercase tracking-wide text-[var(--cl-muted)]">
                                    {{ 'checkList.result' | transloco }}
                                    @if (request.responseTime(); as time) {
                                        · {{ time }}ms
                                    }
                                </p>
                                <div class="check-list-tabs">
                                    <button
                                        type="button"
                                        class="check-list-tab"
                                        [class.is-on]="resultView() === 'table'"
                                        (click)="resultView.set('table')"
                                    >
                                        {{ 'postman.responseViewer.viewMode.table' | transloco }}
                                    </button>
                                    <button
                                        type="button"
                                        class="check-list-tab"
                                        [class.is-on]="resultView() === 'json'"
                                        (click)="resultView.set('json')"
                                    >
                                        {{ 'postman.responseViewer.viewMode.json' | transloco }}
                                    </button>
                                </div>
                            </div>
                            <div class="rounded-xl border border-[var(--cl-line)] p-4">
                                @if (resultView() === 'table') {
                                    <postman-json-table [data]="displayPayload()"></postman-json-table>
                                } @else {
                                    <pre class="check-list-json">{{ displayPayload() | json }}</pre>
                                }
                            </div>
                        } @else {
                            <p class="text-sm text-[var(--cl-muted)]">{{ 'checkList.noResult' | transloco }}</p>
                        }
                    </section>
                }
            </div>
        </aside>
    `,
})
export class CheckListDetailComponent {
    private _transloco = inject(TranslocoService);
    request = inject(CheckListRequestService);

    endpoint = input<ApiEndpoint | null>(null);
    saved = input(false);
    closed = output<void>();
    toggleSaved = output<void>();
    batch = output<void>();
    activeTab = signal<DetailTab>('about');
    resultView = signal<ResultView>('table');

    tabs: Array<{ id: DetailTab; key: string }> = [
        { id: 'about', key: 'checkList.tabs.about' },
        { id: 'request', key: 'checkList.tabs.request' },
        { id: 'result', key: 'checkList.tabs.result' },
    ];

    constructor() {
        effect(() => {
            this.endpoint();
            untracked(() => {
                this.activeTab.set('about');
                this.resultView.set('table');
            });
        });
    }

    copy = computed(() => {
        const endpoint = this.endpoint();
        if (!endpoint) return { title: '', description: '' };
        const catalog = getAppFeatureCatalogCopy(this._transloco, endpoint.code);
        return resolvePostmanEndpointCopy({
            endpoint,
            catalogTitle: catalog.title || endpoint.label,
            catalogDescription: catalog.description || endpoint.description || '',
            locale: this._transloco.getActiveLang(),
        });
    });

    title = computed(() => this.copy().title);
    description = computed(() => this.copy().description);
    costLabel = computed(() => formatCatalogPrice(this.endpoint()?.estimatedCost));

    visibleParams = computed(() =>
        (this.request.endpoint()?.params || []).filter((param) => param.system !== 'includeCost')
    );

    issues = computed(() => {
        const endpoint = this.request.endpoint();
        if (!endpoint) return [];
        const postDraft =
            endpoint.method === 'GET' || endpoint.method === 'DELETE'
                ? undefined
                : JSON.stringify(endpoint.body && typeof endpoint.body === 'object' ? endpoint.body : {});
        return getPostmanRequestValidationIssues(endpoint, postDraft);
    });

    canSend = computed(() => this.issues().length === 0);

    run(): void {
        this.activeTab.set('result');
        this.request.send();
    }

    displayPayload = computed(() => {
        const response = this.request.response();
        const raw = response ? (response.body ?? response) : this.request.error()?.error ?? this.request.error();
        return sanitizeDisplayPayload(raw);
    });
}
