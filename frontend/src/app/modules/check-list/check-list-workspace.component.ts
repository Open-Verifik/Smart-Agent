import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { Subject, debounceTime } from 'rxjs';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { PostmanService } from '../postman/postman.service';
import { catalogCountryScopeForCountries } from '../postman/postman-catalog.util';
import { ApiEndpoint } from '../postman/postman.types';
import { getAppFeatureCatalogCopy, resolvePostmanEndpointCopy } from '../postman/postman-endpoint-copy.util';
import { postmanCountryFlagUi } from '../postman/postman-country.util';
import { formatCatalogPrice } from '../postman/postman-docs-params.util';
import { CheckListDetailComponent } from './check-list-detail.component';
import { CheckListRequestService } from './check-list-request.service';
import { CheckListService } from './check-list.service';
import { CheckListStatus } from './check-list.types';
import {
    CheckListDomain,
    featureMatchesCheckListCatalog,
    isWorldBackgroundCheck,
    isWorldCatalogCountry,
    normalizeCheckListCategory,
    resolveCheckListDomains,
} from './check-list-taxonomy';

@Component({
    selector: 'app-check-list-workspace',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterLink,
        MatIconModule,
        TranslocoPipe,
        CheckListDetailComponent,
    ],
    styleUrls: ['./check-list.styles.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="check-list-root">
            <div class="check-list-wrap">
                <a routerLink="/check-list" class="inline-flex items-center gap-2 text-sm font-medium text-[var(--cl-muted)]">
                    <mat-icon class="!h-4 !w-4 !text-[16px]">arrow_back</mat-icon>
                    {{ 'checkList.back' | transloco }}
                </a>

                <header class="mt-6 flex flex-wrap items-end justify-between gap-4">
                    <div class="min-w-0 flex-1">
                        <p class="mb-2 text-sm text-[var(--cl-muted)]">
                            {{ 'checkList.workspaceKicker' | transloco }}
                        </p>
                        <input
                            class="check-list-display w-full border-0 bg-transparent text-2xl outline-none"
                            [ngModel]="name()"
                            (ngModelChange)="name.set($event)"
                            [placeholder]="'checkList.namePlaceholder' | transloco"
                        />
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                        <div class="check-list-tabs" role="group" [attr.aria-label]="'checkList.status.label' | transloco">
                            <button
                                type="button"
                                class="check-list-tab"
                                [class.is-on]="status() === 'draft'"
                                [disabled]="saving()"
                                (click)="setStatus('draft')"
                            >
                                {{ 'checkList.status.draft' | transloco }}
                            </button>
                            <button
                                type="button"
                                class="check-list-tab"
                                [class.is-on]="status() === 'active'"
                                [disabled]="saving()"
                                (click)="setStatus('active')"
                            >
                                {{ 'checkList.status.active' | transloco }}
                            </button>
                        </div>
                        @if (saving()) {
                            <span class="check-list-pill">{{ 'checkList.saving' | transloco }}</span>
                        }
                        <button type="button" class="check-list-cta check-list-pill" [disabled]="!canBatch()" (click)="openBatch()">
                            {{ 'checkList.createSmartBatch' | transloco }}
                        </button>
                    </div>
                    @if (batchCountryNeeded()) {
                        <div class="flex w-full flex-wrap gap-2">
                            <p class="w-full text-sm text-[var(--cl-muted)]">
                                {{ 'checkList.chooseBatchCountry' | transloco }}
                            </p>
                            @for (country of selectedCountries(); track country) {
                                <button type="button" class="check-list-pill" (click)="confirmBatch(country)">
                                    {{ country }}
                                </button>
                            }
                        </div>
                    }
                </header>

                @if (error()) {
                    <p class="mt-4 text-sm text-rose-600">{{ error() | transloco }}</p>
                }

                <section class="mt-6">
                    <div class="flex flex-wrap gap-2">
                        @for (country of selectedCountries(); track country) {
                            <span class="check-list-pill is-readonly">
                                @switch (flagUi(country).k) {
                                    @case ('img') {
                                        <img [src]="$any(flagUi(country)).src" alt="" class="h-4 w-4 rounded-full object-cover" />
                                    }
                                    @case ('globe') {
                                        <mat-icon class="!h-4 !w-4 !text-[16px]">public</mat-icon>
                                    }
                                }
                                {{ country }}
                            </span>
                        } @empty {
                            <span class="text-sm text-[var(--cl-muted)]">
                                {{ 'checkList.noCountries' | transloco }}
                            </span>
                        }
                    </div>
                </section>

                <section class="mt-8">
                    <div class="mb-4 flex items-center justify-between gap-3">
                        <h2 class="text-base font-semibold">{{ 'checkList.savedServices' | transloco }}</h2>
                        <span class="check-list-pill">
                            {{ selectedCodes().length }} {{ 'checkList.selected' | transloco }}
                        </span>
                    </div>
                    @if (!savedEndpoints().length) {
                        <div class="check-list-card p-6">
                            <p class="check-list-display text-xl">{{ 'checkList.emptyServicesTitle' | transloco }}</p>
                            <p class="mt-2 max-w-lg text-sm text-[var(--cl-muted)]">
                                {{ 'checkList.emptyServicesBody' | transloco }}
                            </p>
                        </div>
                    } @else {
                        <div class="grid gap-3 md:grid-cols-2">
                            @for (endpoint of savedEndpoints(); track endpoint.code || endpoint.id) {
                                <article
                                    class="check-list-card relative flex flex-col gap-4 p-5"
                                    [class.is-selected]="selectedEndpoint()?.code === endpoint.code"
                                >
                                    <span class="check-list-price">
                                        {{ 'checkList.cost' | transloco: { value: endpointCost(endpoint) } }}
                                    </span>
                                    <div class="pr-24">
                                        <h3 class="text-lg font-semibold">{{ endpointTitle(endpoint) }}</h3>
                                        <p class="mt-1 line-clamp-2 text-sm text-[var(--cl-muted)]">
                                            {{ endpointDescription(endpoint) }}
                                        </p>
                                    </div>
                                    <div class="mt-auto flex flex-wrap gap-2">
                                        <button type="button" class="check-list-cta check-list-pill" (click)="openEndpoint(endpoint)">
                                            {{ 'checkList.open' | transloco }}
                                        </button>
                                        <button type="button" class="check-list-pill is-danger" (click)="removeFeature(endpoint)">
                                            {{ 'checkList.removeFromList' | transloco }}
                                        </button>
                                    </div>
                                </article>
                            }
                        </div>
                    }
                </section>

                <section class="mt-8">
                    <h2 class="text-base font-semibold">{{ 'checkList.addServices' | transloco }}</h2>
                    <p class="mt-1 text-sm text-[var(--cl-muted)]">{{ 'checkList.addServicesHint' | transloco }}</p>
                    <label class="relative mt-4 block max-w-xl">
                        <mat-icon class="pointer-events-none absolute left-3 top-1/2 !h-4 !w-4 -translate-y-1/2 !text-[18px] text-[var(--cl-muted)]">search</mat-icon>
                        <input
                            class="check-list-field !pl-10"
                            [ngModel]="catalogQuery()"
                            (ngModelChange)="catalogQuery.set($event)"
                            [placeholder]="'checkList.searchPlaceholder' | transloco"
                        />
                    </label>
                    <div class="mt-4 flex flex-wrap gap-2">
                        @for (domain of domains; track domain.id) {
                            <button
                                type="button"
                                class="check-list-pill"
                                [class.is-on]="activeDomain() === domain.id"
                                (click)="selectDomain(domain.id)"
                            >
                                {{ domain.titleKey | transloco }}
                                <span class="opacity-70">{{ domain.count() }}</span>
                            </button>
                        }
                    </div>
                    @for (group of catalogGroups(); track group.id) {
                        <div class="mt-6">
                            <h3 class="text-sm font-semibold uppercase tracking-wide text-[var(--cl-muted)]">
                                {{ group.titleKey | transloco }}
                            </h3>
                            <div class="mt-3 grid gap-3 md:grid-cols-2">
                                @for (endpoint of group.endpoints; track endpoint.code || endpoint.id) {
                                    <article class="check-list-card relative flex flex-col gap-4 p-5">
                                        <span class="check-list-price">
                                            {{ 'checkList.cost' | transloco: { value: endpointCost(endpoint) } }}
                                        </span>
                                        <div class="pr-24">
                                            <h3 class="text-lg font-semibold">{{ endpointTitle(endpoint) }}</h3>
                                            <p class="mt-1 line-clamp-2 text-sm text-[var(--cl-muted)]">
                                                {{ endpointDescription(endpoint) }}
                                            </p>
                                        </div>
                                        <div class="mt-auto flex flex-wrap gap-2">
                                            <button type="button" class="check-list-cta check-list-pill" (click)="openEndpoint(endpoint)">
                                                {{ 'checkList.open' | transloco }}
                                            </button>
                                            <button type="button" class="check-list-pill" (click)="addFeature(endpoint)">
                                                {{ 'checkList.select' | transloco }}
                                            </button>
                                        </div>
                                    </article>
                                }
                            </div>
                        </div>
                    } @empty {
                        <p class="mt-4 text-sm text-[var(--cl-muted)]">
                            {{ (catalogQuery().trim() ? 'checkList.searchEmpty' : 'checkList.allAdded') | transloco }}
                        </p>
                    }
                </section>
            </div>

            @if (selectedEndpoint()) {
                <div class="fixed inset-0 z-40 bg-black/30" (click)="closeDetail()"></div>
                <div class="check-list-drawer fixed inset-y-0 right-0 z-50 p-3 sm:p-4">
                    <app-check-list-detail
                        class="block h-full"
                        [endpoint]="selectedEndpoint()"
                        [saved]="isSelected(selectedEndpoint())"
                        (closed)="closeDetail()"
                        (toggleSaved)="toggleFeature(selectedEndpoint())"
                        (batch)="openBatch(selectedEndpoint())"
                    ></app-check-list-detail>
                </div>
            }
        </div>
    `,
})
export class CheckListWorkspaceComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _lists = inject(CheckListService);
    private _postman = inject(PostmanService);
    private _request = inject(CheckListRequestService);
    private _transloco = inject(TranslocoService);
    private _authGate = inject(AuthRequiredGateService);
    private _save$ = new Subject<void>();
    private _saveSub = this._save$.pipe(debounceTime(450)).subscribe(() => this.persist());

    name = signal('Untitled checklist');
    status = signal<CheckListStatus>('draft');
    selectedCountries = signal<string[]>([]);
    selectedDomains = signal<CheckListDomain[]>([]);
    selectedCodes = signal<string[]>([]);
    activeDomain = signal<CheckListDomain | null>('people');
    selectedEndpoint = signal<ApiEndpoint | null>(null);
    catalogQuery = signal('');
    checklistId = signal<string | null>(null);
    private _hydrated = false;
    private _pendingPersist = false;
    batchCountryNeeded = signal(false);
    private _batchCodes: string[] = [];

    saving = this._lists.saving;
    error = this._lists.error;

    domains = [
        {
            id: 'people' as const,
            titleKey: 'checkList.domains.peopleTitle',
            count: computed(() => this.availableCount('people')),
        },
        {
            id: 'vehicles' as const,
            titleKey: 'checkList.domains.vehiclesTitle',
            count: computed(() => this.availableCount('vehicles')),
        },
        {
            id: 'businesses' as const,
            titleKey: 'checkList.domains.businessesTitle',
            count: computed(() => this.availableCount('businesses')),
        },
    ];

    savedEndpoints = computed(() => {
        const byCode = new Map(
            this._postman
                .visibleEndpoints()
                .filter((endpoint) => endpoint.code)
                .map((endpoint) => [endpoint.code as string, endpoint] as const)
        );
        return this.selectedCodes()
            .map((code) => byCode.get(code))
            .filter((endpoint): endpoint is ApiEndpoint => Boolean(endpoint));
    });

    catalogEndpoints = computed(() => {
        const query = this.catalogQuery().trim().toLowerCase();
        const domain = this.activeDomain();
        const saved = new Set(this.selectedCodes());
        const pool = query
            ? this.catalogPool()
            : domain
              ? this.endpointsForDomain(domain)
              : [];
        return pool.filter(
            (endpoint) =>
                (!endpoint.code || !saved.has(endpoint.code)) && this.matchesCatalogQuery(endpoint, query)
        );
    });

    catalogGroups = computed(() => {
        const available = this.catalogEndpoints();
        const countryEndpoints = available.filter((endpoint) => !isWorldCatalogCountry(endpoint.country));
        const worldChecks = available.filter((endpoint) => isWorldBackgroundCheck(endpoint));
        const byCategory = new Map<string, ApiEndpoint[]>();

        for (const endpoint of countryEndpoints) {
            const category = normalizeCheckListCategory(endpoint);
            const rows = byCategory.get(category) || [];
            rows.push(endpoint);
            byCategory.set(category, rows);
        }

        const groups = this.orderedCategories(byCategory).map((category) => ({
            id: category,
            titleKey: this.categoryTitleKey(category),
            endpoints: byCategory.get(category) || [],
        }));

        if (worldChecks.length) {
            groups.push({
                id: 'world-background',
                titleKey: 'checkList.worldBackground',
                endpoints: worldChecks,
            });
        }

        return groups;
    });

    constructor() {
        effect(() => {
            this.name();
            if (this._hydrated && this.checklistId()) this._save$.next();
        });
    }

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this.boot(),
        });
    }

    ngOnDestroy(): void {
        this._saveSub.unsubscribe();
        this._request.clear();
    }

    private boot(): void {
        const id = this._route.snapshot.paramMap.get('id');
        if (!id) {
            this._router.navigate(['/check-list']);
            return;
        }
        this._lists.show(id).subscribe({
            next: (response) => {
                const record = response.data;
                this.name.set(record.name);
                this.status.set(record.status === 'active' ? 'active' : 'draft');
                this.selectedCountries.set(record.countries || []);
                this.selectedDomains.set(record.domains || []);
                this.selectedCodes.set(record.featureCodes || []);
                this.activeDomain.set(record.domains?.[0] || 'people');
                this.checklistId.set(record._id);
                this._postman.loadFeaturesForCountries(
                    catalogCountryScopeForCountries(record.countries)
                );
                this._hydrated = true;
            },
            error: () => this._router.navigate(['/check-list']),
        });
    }

    selectDomain(domain: CheckListDomain): void {
        this.activeDomain.set(domain);
        if (!this.selectedDomains().includes(domain)) {
            this.selectedDomains.set([...this.selectedDomains(), domain]);
            this.persist();
        }
    }

    catalogPool(): ApiEndpoint[] {
        return this._postman
            .visibleEndpoints()
            .filter((endpoint) => featureMatchesCheckListCatalog(endpoint, this.selectedCountries()));
    }

    endpointsForDomain(domain: CheckListDomain): ApiEndpoint[] {
        return this.catalogPool().filter((endpoint) => resolveCheckListDomains(endpoint).includes(domain));
    }

    matchesCatalogQuery(endpoint: ApiEndpoint, query: string): boolean {
        if (!query) return true;
        const haystack = [
            this.endpointTitle(endpoint),
            this.endpointDescription(endpoint),
            endpoint.code,
            endpoint.country,
            endpoint.category,
            endpoint.label,
        ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
        return haystack.includes(query);
    }

    availableCount(domain: CheckListDomain): number {
        const saved = new Set(this.selectedCodes());
        return this.endpointsForDomain(domain).filter((endpoint) => !endpoint.code || !saved.has(endpoint.code))
            .length;
    }

    endpointTitle(endpoint: ApiEndpoint): string {
        return this.endpointCopy(endpoint).title;
    }

    endpointDescription(endpoint: ApiEndpoint): string {
        return this.endpointCopy(endpoint).description;
    }

    endpointCost(endpoint: ApiEndpoint): string {
        return formatCatalogPrice(endpoint.estimatedCost);
    }

    isSelected(endpoint: ApiEndpoint | null): boolean {
        return Boolean(endpoint?.code && this.selectedCodes().includes(endpoint.code));
    }

    openEndpoint(endpoint: ApiEndpoint): void {
        this.selectedEndpoint.set(endpoint);
        this._request.prepare(endpoint);
        this._postman.hydrateEndpointDetails(endpoint).subscribe((hydrated) => {
            if (this.selectedEndpoint()?.code !== hydrated.code) return;
            this.selectedEndpoint.set(hydrated);
            this._request.prepare(hydrated);
        });
    }

    addFeature(endpoint: ApiEndpoint): void {
        if (!endpoint.code || this.selectedCodes().includes(endpoint.code)) return;
        this.selectedCodes.set([...this.selectedCodes(), endpoint.code]);
        this.persist();
    }

    removeFeature(endpoint: ApiEndpoint): void {
        if (!endpoint.code) return;
        this.selectedCodes.set(this.selectedCodes().filter((code) => code !== endpoint.code));
        this.persist();
        if (this.selectedEndpoint()?.code === endpoint.code) this.closeDetail();
    }

    closeDetail(): void {
        this.selectedEndpoint.set(null);
        this._request.clear();
    }

    toggleFeature(endpoint: ApiEndpoint | null): void {
        if (!endpoint?.code) return;
        this.selectedCodes.set(
            this.isSelected(endpoint)
                ? this.selectedCodes().filter((code) => code !== endpoint.code)
                : [...this.selectedCodes(), endpoint.code]
        );
        this.persist();
    }

    canBatch(): boolean {
        return this.selectedCodes().length > 0 && this.selectedCountries().length > 0;
    }

    openBatch(endpoint?: ApiEndpoint | null): void {
        const countries = this.selectedCountries();
        this._batchCodes = endpoint?.code ? [endpoint.code] : this.selectedCodes();
        const preferred =
            endpoint?.country && endpoint.country.toLowerCase() !== 'world' ? endpoint.country : null;
        if (preferred) {
            this.confirmBatch(preferred);
            return;
        }
        if (countries.length === 1) {
            this.confirmBatch(countries[0]);
            return;
        }
        this.batchCountryNeeded.set(true);
    }

    confirmBatch(country: string): void {
        this.batchCountryNeeded.set(false);
        this._router.navigate(['/smart-batch/create'], {
            queryParams: {
                from: 'check-list',
                checkListId: this.checklistId(),
                country,
                codes: this._batchCodes.join(','),
                name: this.name(),
            },
        });
    }

    setStatus(status: CheckListStatus): void {
        if (this.status() === status) return;
        this.status.set(status);
        this.persist();
    }

    flagUi(country: string) {
        return postmanCountryFlagUi(country);
    }

    private categoryTitleKey(category: string): string {
        return `categories.${category.toUpperCase()}`;
    }

    private orderedCategories(byCategory: Map<string, ApiEndpoint[]>): string[] {
        const order = [
            'identity',
            'health',
            'judicial',
            'background_check',
            'transit',
            'autodata',
            'business',
            'certificates',
            'finance',
        ];
        return [...byCategory.keys()].sort((left, right) => {
            const leftRank = order.indexOf(left);
            const rightRank = order.indexOf(right);
            return (
                (leftRank === -1 ? order.length : leftRank) -
                    (rightRank === -1 ? order.length : rightRank) || left.localeCompare(right)
            );
        });
    }

    private endpointCopy(endpoint: ApiEndpoint) {
        const catalog = getAppFeatureCatalogCopy(this._transloco, endpoint.code);
        return resolvePostmanEndpointCopy({
            endpoint,
            catalogTitle: catalog.title || endpoint.label,
            catalogDescription: catalog.description || endpoint.description || '',
            locale: this._transloco.getActiveLang(),
        });
    }

    private persist(): void {
        const id = this.checklistId();
        if (!id) return;
        if (this._lists.saving()) {
            this._pendingPersist = true;
            return;
        }
        this._lists
            .update(id, {
                name: this.name().trim() || 'Untitled checklist',
                countries: this.selectedCountries(),
                domains: this.selectedDomains(),
                featureCodes: this.selectedCodes(),
                status: this.status(),
            })
            .subscribe({
                next: () => {
                    if (!this._pendingPersist) return;
                    this._pendingPersist = false;
                    this.persist();
                },
            });
    }
}
