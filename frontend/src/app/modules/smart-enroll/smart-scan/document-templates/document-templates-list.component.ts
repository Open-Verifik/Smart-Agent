import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    OnInit,
    ViewEncapsulation,
    computed,
    inject,
    signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import {
    DocumentTypePreviewDialogComponent,
    type DocumentTypePreviewData,
} from '../../projects/setup/steps/documents/document-type-preview-dialog/document-type-preview-dialog.component';
import {
    BUSINESS_SCAN_CATEGORIES,
    PERSONAL_SCAN_CATEGORIES,
    SmartScanService,
    type ScanTargetMode,
} from '../smart-scan.service';
import type { DocumentType, DocumentTypeField } from '../smart-scan.types';

export type TemplateSourceFilter = 'all' | 'system' | 'custom';

const COUNTRY_FLAGS: Record<string, string> = {
    argentina: '🇦🇷',
    bolivia: '🇧🇴',
    brazil: '🇧🇷',
    canada: '🇨🇦',
    chile: '🇨🇱',
    colombia: '🇨🇴',
    costa_rica: '🇨🇷',
    'costa rica': '🇨🇷',
    cuba: '🇨🇺',
    dominican_republic: '🇩🇴',
    'dominican republic': '🇩🇴',
    ecuador: '🇪🇨',
    el_salvador: '🇸🇻',
    'el salvador': '🇸🇻',
    guatemala: '🇬🇹',
    honduras: '🇭🇳',
    mexico: '🇲🇽',
    nicaragua: '🇳🇮',
    panama: '🇵🇦',
    paraguay: '🇵🇾',
    peru: '🇵🇪',
    puerto_rico: '🇵🇷',
    'puerto rico': '🇵🇷',
    spain: '🇪🇸',
    united_states: '🇺🇸',
    'united states': '🇺🇸',
    uruguay: '🇺🇾',
    venezuela: '🇻🇪',
    portugal: '🇵🇹',
    france: '🇫🇷',
    germany: '🇩🇪',
    italy: '🇮🇹',
    united_kingdom: '🇬🇧',
    'united kingdom': '🇬🇧',
    japan: '🇯🇵',
    south_korea: '🇰🇷',
    'south korea': '🇰🇷',
    china: '🇨🇳',
    india: '🇮🇳',
    australia: '🇦🇺',
    new_zealand: '🇳🇿',
    'new zealand': '🇳🇿',
    world: '🌐',
};

@Component({
    selector: 'document-templates-list',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    templateUrl: './document-templates-list.component.html',
    styleUrls: ['./document-templates-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentTemplatesListComponent implements OnInit {
    private _scanService = inject(SmartScanService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _dialog = inject(MatDialog);
    private _transloco = inject(TranslocoService);
    private _authGate = inject(AuthRequiredGateService);
    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);

    templates = signal<DocumentType[]>([]);
    loading = signal<boolean>(true);
    error = signal<string | null>(null);

    viewMode = signal<'cards' | 'table'>('cards');
    selectedCountry = signal<string>('');
    selectedCategory = signal<string>('');
    selectedSource = signal<TemplateSourceFilter>('all');
    searchQuery = signal<string>('');
    flippedCardId = signal<string | null>(null);

    get isBusinessMode(): boolean {
        return this._router.url.startsWith('/smart-business');
    }

    get scanTarget(): ScanTargetMode {
        return this.isBusinessMode ? 'business' : 'personal';
    }

    get basePath(): string {
        return this.isBusinessMode
            ? '/smart-business/document-templates'
            : '/smart-enroll/document-templates';
    }

    get scanBasePath(): string {
        return this.isBusinessMode
            ? '/smart-business/smart-scan'
            : '/smart-enroll/smart-scan';
    }

    get targetCategories(): readonly string[] {
        return this.isBusinessMode ? BUSINESS_SCAN_CATEGORIES : PERSONAL_SCAN_CATEGORIES;
    }

    readonly countryStats = computed(() => {
        const counts = new Map<string, number>();
        const catFilter = this.selectedCategory();
        const srcFilter = this.selectedSource();

        for (const dt of this.templates()) {
            if (catFilter && dt.category !== catFilter) continue;
            if (srcFilter === 'system' && dt.client) continue;
            if (srcFilter === 'custom' && !dt.client) continue;
            const c = this.normalizeCountryKey(dt.country);
            if (!c) continue;
            counts.set(c, (counts.get(c) || 0) + 1);
        }

        return Array.from(counts.entries())
            .map(([key, count]) => ({
                key,
                count,
                flag: this.getFlag(key),
                label: this.getCountryLabel(key),
            }))
            .sort((a, b) => {
                if (a.key === 'world') return -1;
                if (b.key === 'world') return 1;
                return a.label.localeCompare(b.label);
            });
    });

    readonly categoryStats = computed(() => {
        const countryFilter = this.selectedCountry();
        const srcFilter = this.selectedSource();
        const counts = new Map<string, number>();

        for (const cat of this.targetCategories) {
            counts.set(cat, 0);
        }

        for (const dt of this.templates()) {
            const c = this.normalizeCountryKey(dt.country);
            if (countryFilter && c !== countryFilter) continue;
            if (srcFilter === 'system' && dt.client) continue;
            if (srcFilter === 'custom' && !dt.client) continue;
            if (dt.category && counts.has(dt.category)) {
                counts.set(dt.category, (counts.get(dt.category) || 0) + 1);
            }
        }

        return this.targetCategories.map((key) => ({
            key,
            count: counts.get(key) || 0,
        }));
    });

    readonly sourceStats = computed(() => {
        const countryFilter = this.selectedCountry();
        const catFilter = this.selectedCategory();
        let all = 0;
        let system = 0;
        let custom = 0;

        for (const dt of this.templates()) {
            const c = this.normalizeCountryKey(dt.country);
            if (countryFilter && c !== countryFilter) continue;
            if (catFilter && dt.category !== catFilter) continue;
            all++;
            if (dt.client) custom++;
            else system++;
        }

        return { all, system, custom };
    });

    readonly filteredTemplates = computed(() => {
        const country = this.selectedCountry();
        const category = this.selectedCategory();
        const source = this.selectedSource();
        const q = this.searchQuery().trim().toLowerCase();

        return this.templates().filter((dt) => {
            const dtCountry = this.normalizeCountryKey(dt.country);
            if (country && dtCountry !== country) return false;
            if (category && dt.category !== category) return false;
            if (source === 'system' && dt.client) return false;
            if (source === 'custom' && !dt.client) return false;

            if (!q) return true;

            const matchBasic =
                dt.name?.toLowerCase().includes(q) ||
                dt.code?.toLowerCase().includes(q) ||
                dtCountry.includes(q) ||
                this.getCountryLabel(dtCountry).toLowerCase().includes(q) ||
                dt.category?.toLowerCase().includes(q);

            if (matchBasic) return true;

            return (dt.fields || []).some(
                (f) =>
                    f.name?.toLowerCase().includes(q) ||
                    f.mapKey?.toLowerCase().includes(q)
            );
        });
    });

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._initFromRoute(),
            panelClass: 'auth-required-dialog',
        });
    }

    private _initFromRoute(): void {
        let initialFetchDone = false;

        this._route.queryParams
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((params) => {
                const view = params['view'] === 'table' ? 'table' : 'cards';
                if (this.viewMode() !== view) {
                    this.viewMode.set(view);
                }
                if (params['country'] !== undefined) {
                    this.selectedCountry.set(this.normalizeCountryKey(params['country']));
                }
                if (params['category'] !== undefined) {
                    this.selectedCategory.set(params['category'] || '');
                }
                if (
                    params['source'] === 'system' ||
                    params['source'] === 'custom' ||
                    params['source'] === 'all'
                ) {
                    this.selectedSource.set(params['source']);
                }
                if (!initialFetchDone) {
                    initialFetchDone = true;
                    this.loadCatalog();
                }
                this._cdr.markForCheck();
            });
    }

    loadCatalog(): void {
        this.loading.set(true);
        this.error.set(null);

        this._scanService
            .getDocumentTemplatesCatalog({ target: this.scanTarget })
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe({
                next: (rows) => {
                    this.templates.set(rows);
                    this.loading.set(false);
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.error.set('Failed to load document templates');
                    this.loading.set(false);
                    this._cdr.markForCheck();
                },
            });
    }

    setViewMode(mode: 'cards' | 'table'): void {
        this.viewMode.set(mode);
        this._syncQueryParams({ view: mode });
    }

    selectCountry(countryKey: string): void {
        const next = this.selectedCountry() === countryKey ? '' : countryKey;
        this.selectedCountry.set(next);
        this._syncQueryParams({ country: next || null });
    }

    selectCategory(categoryKey: string): void {
        const next = this.selectedCategory() === categoryKey ? '' : categoryKey;
        this.selectedCategory.set(next);
        this._syncQueryParams({ category: next || null });
    }

    selectSource(source: TemplateSourceFilter): void {
        this.selectedSource.set(source);
        this._syncQueryParams({ source: source === 'all' ? null : source });
    }

    onSearchChange(value: string): void {
        this.searchQuery.set(value);
    }

    resetAllFilters(): void {
        this.selectedCountry.set('');
        this.selectedCategory.set('');
        this.selectedSource.set('all');
        this.searchQuery.set('');
        this._syncQueryParams({ country: null, category: null, source: null });
    }

    get hasActiveFilters(): boolean {
        return Boolean(
            this.selectedCountry() ||
                this.selectedCategory() ||
                this.selectedSource() !== 'all' ||
                this.searchQuery().trim()
        );
    }

    flipCard(id: string, event: Event): void {
        event.stopPropagation();
        this.flippedCardId.set(this.flippedCardId() === id ? null : id);
    }

    inspectTemplate(dt: DocumentType, event?: Event): void {
        event?.stopPropagation();
        const data: DocumentTypePreviewData = {
            name: dt.name,
            code: dt.code,
            country: this.getCountryLabel(dt.country),
            category: dt.category,
            fields: (dt.fields || []).map((f) => ({
                name: f.name,
                mapKey: f.mapKey,
                type: f.type,
                page: f.page,
            })),
            frontImage: dt.frontImage || undefined,
            backImage: dt.backImage || undefined,
        };

        this._dialog.open(DocumentTypePreviewDialogComponent, {
            data,
            maxWidth: '720px',
            width: '92vw',
            autoFocus: false,
            panelClass: 'document-type-preview-dialog-panel',
        });
    }

    testScanWithTemplate(dt: DocumentType, event?: Event): void {
        event?.stopPropagation();
        this._router.navigate([`${this.scanBasePath}/new`], {
            queryParams: {
                country: this.normalizeCountryKey(dt.country),
                code: dt.code,
                step: 'upload',
            },
        });
    }

    createNewTemplate(): void {
        const defaultCountry =
            this.selectedCountry() || (this.isBusinessMode ? 'colombia' : 'colombia');
        this._router.navigate([`${this.basePath}/new`], {
            queryParams: { country: defaultCountry },
        });
    }

    editTemplate(dt: DocumentType, event?: Event): void {
        event?.stopPropagation();
        this._router.navigate([`${this.basePath}/${dt._id}`]);
    }

    forkTemplate(dt: DocumentType, event?: Event): void {
        event?.stopPropagation();
        this._router.navigate([`${this.basePath}/new`], {
            queryParams: { fork: dt._id },
        });
    }

    previewFields(dt: DocumentType): DocumentTypeField[] {
        return (dt.fields || []).slice(0, 4);
    }

    remainingFieldCount(dt: DocumentType): number {
        return Math.max(0, (dt.fields?.length || 0) - 4);
    }

    normalizeCountryKey(country?: string): string {
        return (country || '').trim().toLowerCase().replace(/\s+/g, '_');
    }

    getFlag(country?: string): string {
        const key = this.normalizeCountryKey(country);
        return COUNTRY_FLAGS[key] || COUNTRY_FLAGS[key.replace(/_/g, ' ')] || '🏳️';
    }

    getCountryLabel(country?: string): string {
        const key = this.normalizeCountryKey(country);
        if (!key) return '—';
        if (key === 'world') {
            return this._transloco.translate('smartEnrollProjects.setup.documents.category.world');
        }
        const i18nKey = `countries.${key}`;
        const translated = this._transloco.translate(i18nKey);
        if (translated && translated !== i18nKey) return translated;
        return key
            .replace(/_/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }

    getCategoryIcon(category?: string): string {
        switch (category) {
            case 'business_document':
                return 'domain';
            case 'tax_document':
                return 'receipt_long';
            case 'bank_document':
                return 'account_balance';
            case 'proof_of_address':
                return 'location_on';
            case 'passport':
                return 'public';
            case 'license':
                return 'directions_car';
            case 'criminal':
                return 'gavel';
            default:
                return 'badge';
        }
    }

    private _syncQueryParams(patch: Record<string, string | null>): void {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: patch,
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }
}

