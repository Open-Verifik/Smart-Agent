import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    EventEmitter,
    inject,
    Input,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import {
    CatalogEndpointItem,
    EndpointPolicy,
    EndpointPolicyMode,
    TeamFeatureBudgetDto,
} from 'app/core/permissions/staff-permission.types';
import { StaffRbacApiService } from 'app/core/permissions/staff-rbac-api.service';
import { take } from 'rxjs';

@Component({
    selector: 'app-endpoint-policy-picker',
    standalone: true,
    imports: [CommonModule, FormsModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule],
    templateUrl: './endpoint-policy-picker.component.html',
    host: {
        class: 'block',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndpointPolicyPickerComponent implements OnInit {
    private readonly _api = inject(StaffRbacApiService);

    private readonly _policy = signal<EndpointPolicy>({ mode: 'all', features: [] });
    private readonly _featureBudgets = signal<TeamFeatureBudgetDto[]>([]);

    @Input()
    set policy(value: EndpointPolicy | null | undefined) {
        if (!value) {
            this._policy.set({ mode: 'all', features: [] });
            return;
        }
        this._policy.set({
            mode: value.mode === 'blocklist' || value.mode === 'allowlist' ? value.mode : 'all',
            features: Array.isArray(value.features) ? [...value.features] : [],
        });
    }
    get policy(): EndpointPolicy {
        return this._policy();
    }

    @Input()
    set featureBudgets(value: TeamFeatureBudgetDto[] | null | undefined) {
        this._featureBudgets.set(Array.isArray(value) ? value.map((item) => ({ ...item })) : []);
    }
    get featureBudgets(): TeamFeatureBudgetDto[] {
        return this._featureBudgets();
    }

    @Input() showFeatureBudgets = false;
    @Input() readonly = false;
    @Input() compact = false;

    @Output() policyChange = new EventEmitter<EndpointPolicy>();
    @Output() featureBudgetsChange = new EventEmitter<TeamFeatureBudgetDto[]>();

    readonly loading = signal(false);
    readonly catalog = signal<CatalogEndpointItem[]>([]);
    readonly searchQuery = signal('');
    readonly countryFilter = signal('');

    // Per-endpoint cap inline creator state
    readonly capSearchQuery = signal('');
    readonly capPickerOpen = signal(false);
    readonly selectedCapEndpoint = signal<CatalogEndpointItem | null>(null);
    capMonthlyAmount: number | null = 50;

    readonly currentPolicy = computed(() => this._policy());
    readonly currentBudgets = computed(() => this._featureBudgets());

    readonly catalogByCode = computed(() => {
        const map = new Map<string, CatalogEndpointItem>();
        for (const item of this.catalog()) {
            map.set(item.code, item);
        }
        return map;
    });

    readonly availableCountries = computed(() => {
        const counts = new Map<string, number>();
        for (const item of this.catalog()) {
            const c = (item.country || '').trim();
            if (!c) continue;
            counts.set(c, (counts.get(c) || 0) + 1);
        }
        return Array.from(counts.entries())
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(([country]) => country);
    });

    readonly selectedFeatureItems = computed(() => {
        const lookup = this.catalogByCode();
        return this._policy().features.map((code) => {
            const found = lookup.get(code);
            return (
                found || {
                    code,
                    name: code,
                }
            );
        });
    });

    readonly matchingEndpoints = computed(() => {
        const selected = new Set(this._policy().features);
        const query = this.searchQuery().trim().toLowerCase();
        const country = this.countryFilter().trim().toLowerCase();

        return this.catalog().filter((item) => {
            if (selected.has(item.code)) return false;
            if (country && (item.country || '').toLowerCase() !== country) return false;
            if (!query) return true;
            return (
                item.name.toLowerCase().includes(query) ||
                item.code.toLowerCase().includes(query) ||
                (item.nameES || '').toLowerCase().includes(query) ||
                (item.url || '').toLowerCase().includes(query) ||
                (item.country || '').toLowerCase().includes(query) ||
                (item.group || '').toLowerCase().includes(query)
            );
        });
    });

    readonly visibleMatches = computed(() => this.matchingEndpoints().slice(0, 30));

    readonly matchingCapEndpoints = computed(() => {
        const capped = new Set(this._featureBudgets().map((fb) => fb.featureCode));
        const query = this.capSearchQuery().trim().toLowerCase();
        return this.catalog()
            .filter((item) => {
                if (capped.has(item.code)) return false;
                if (!query) return true;
                return (
                    item.name.toLowerCase().includes(query) ||
                    item.code.toLowerCase().includes(query) ||
                    (item.url || '').toLowerCase().includes(query) ||
                    (item.country || '').toLowerCase().includes(query)
                );
            })
            .slice(0, 20);
    });

    ngOnInit(): void {
        this.loading.set(true);
        this._api
            .listAvailableEndpoints()
            .pipe(take(1))
            .subscribe({
                next: (items) => {
                    this.catalog.set(items);
                    this.loading.set(false);
                },
                error: () => {
                    this.loading.set(false);
                },
            });
    }

    setMode(mode: EndpointPolicyMode): void {
        if (this.readonly) return;
        const next: EndpointPolicy = {
            mode,
            features: mode === 'all' ? [] : [...this._policy().features],
        };
        this._policy.set(next);
        this.policyChange.emit(next);
    }

    addFeature(code: string): void {
        if (this.readonly || !code) return;
        const curr = this._policy();
        if (curr.features.includes(code)) return;
        const next: EndpointPolicy = {
            mode: curr.mode === 'all' ? 'blocklist' : curr.mode,
            features: [...curr.features, code],
        };
        this._policy.set(next);
        this.policyChange.emit(next);
    }

    addAllMatching(): void {
        if (this.readonly) return;
        const matches = this.matchingEndpoints();
        if (!matches.length) return;
        const curr = this._policy();
        const merged = Array.from(new Set([...curr.features, ...matches.map((m) => m.code)]));
        const next: EndpointPolicy = {
            mode: curr.mode === 'all' ? 'blocklist' : curr.mode,
            features: merged,
        };
        this._policy.set(next);
        this.policyChange.emit(next);
    }

    removeFeature(code: string): void {
        if (this.readonly) return;
        const curr = this._policy();
        const next: EndpointPolicy = {
            mode: curr.mode,
            features: curr.features.filter((c) => c !== code),
        };
        this._policy.set(next);
        this.policyChange.emit(next);
    }

    clearAllFeatures(): void {
        if (this.readonly) return;
        const next: EndpointPolicy = {
            mode: this._policy().mode,
            features: [],
        };
        this._policy.set(next);
        this.policyChange.emit(next);
    }

    // ---- Per-endpoint monthly budget caps ----

    pickCapEndpoint(item: CatalogEndpointItem): void {
        this.selectedCapEndpoint.set(item);
        this.capSearchQuery.set(item.name);
        this.capPickerOpen.set(false);
    }

    onCapSearchInput(val: string): void {
        this.capSearchQuery.set(val);
        this.selectedCapEndpoint.set(null);
        this.capPickerOpen.set(true);
    }

    addFeatureCap(): void {
        if (this.readonly) return;
        const chosen = this.selectedCapEndpoint();
        const amount = Number(this.capMonthlyAmount);
        if (!chosen || !Number.isFinite(amount) || amount < 0) return;

        const curr = this._featureBudgets();
        if (curr.some((item) => item.featureCode === chosen.code)) return;

        const next: TeamFeatureBudgetDto[] = [
            ...curr,
            {
                featureCode: chosen.code,
                monthlyBudget: Number(amount.toFixed(2)),
                currentPeriodUsage: 0,
            },
        ];
        this._featureBudgets.set(next);
        this.featureBudgetsChange.emit(next);

        this.selectedCapEndpoint.set(null);
        this.capSearchQuery.set('');
        this.capPickerOpen.set(false);
        this.capMonthlyAmount = 50;
    }

    updateFeatureCapAmount(featureCode: string, rawAmount: number | string): void {
        if (this.readonly) return;
        const amount = Number(rawAmount);
        if (!Number.isFinite(amount) || amount < 0) return;

        const next = this._featureBudgets().map((item) =>
            item.featureCode === featureCode ? { ...item, monthlyBudget: Number(amount.toFixed(2)) } : item
        );
        this._featureBudgets.set(next);
        this.featureBudgetsChange.emit(next);
    }

    removeFeatureCap(featureCode: string): void {
        if (this.readonly) return;
        const next = this._featureBudgets().filter((item) => item.featureCode !== featureCode);
        this._featureBudgets.set(next);
        this.featureBudgetsChange.emit(next);
    }

    endpointLabel(code: string): string {
        return this.catalogByCode().get(code)?.name || code;
    }

    endpointCountry(code: string): string {
        return this.catalogByCode().get(code)?.country || '';
    }
}
