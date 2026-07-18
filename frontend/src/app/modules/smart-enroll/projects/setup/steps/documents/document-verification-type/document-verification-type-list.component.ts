import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    ElementRef,
    Input,
    OnInit,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

import { CountryService } from 'app/core/services/country.service';
import { SetupFormFactory } from '../../../setup-form.factory';
import { DocumentTypeLite, PromptTemplateLite, SetupService } from '../../../setup.service';
import {
    DocumentTypePreviewData,
    DocumentTypePreviewDialogComponent,
} from '../document-type-preview-dialog/document-type-preview-dialog.component';

type CategoryBucket = Record<string, PromptTemplateLite[]>;

/** Collapse long template checklists above this count by default. */
const CATEGORY_LIST_COLLAPSE_THRESHOLD = 6;

/**
 * Editable list of "document verification types" (one per country).
 *
 * For each country block, fetches available prompt templates from the backend
 * (`{ in_country: [country, 'World'], populates: ['documentType'] }`), groups
 * them by `documentCategory`, and lets the user check/uncheck individual
 * document types. Each item has a preview button that opens
 * {@link DocumentTypePreviewDialogComponent} with the populated
 * `documentType.frontImage` / `backImage`.
 *
 * Saved payload still uses the v3 shape:
 * `documents.documentTypes[i].configurations[j].documentTemplates: [{ promptTemplate, required }]`.
 */
@Component({
    selector: 'document-verification-type-list',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    templateUrl: './document-verification-type-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentVerificationTypeListComponent implements OnInit {
    @Input() form!: FormGroup;
    @Input() documentTypes!: FormArray;
    @Input() target: 'business' | 'personal' = 'personal';

    private _factory = inject(SetupFormFactory);
    private _countries = inject(CountryService);
    private _setup = inject(SetupService);
    private _dialog = inject(MatDialog);
    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _host = inject(ElementRef<HTMLElement>);
    private _transloco = inject(TranslocoService);

    countries = this._countries.worldCountries;

    /** PromptTemplate buckets keyed by `country` then `documentCategory`. */
    private _templatesByCountry: Record<string, CategoryBucket> = {};
    /** In-flight fetch tracker per country to avoid duplicate requests. */
    private _loadingCountries = new Set<string>();
    /** Countries we've already attempted to fetch (success or failure). */
    private _fetchedCountries = new Set<string>();

    /** Explicitly expanded country card indices (user opened a valid card). */
    private _expandedCountries = new Set<number>();
    /** Explicitly collapsed country card indices (user closed a card). */
    private _userCollapsedCountries = new Set<number>();
    /** Expanded category template lists: `${countryIndex}:${category}`. */
    private _expandedCategoryLists = new Set<string>();

    readonly categoryListCollapseThreshold = CATEGORY_LIST_COLLAPSE_THRESHOLD;

    ngOnInit(): void {
        this.documentTypes?.controls.forEach((group) => this._watchCountry(group as FormGroup));
    }

    get verificationErrors(): string[] {
        const errors = this.documentTypes?.errors;
        if (!errors) return [];
        return Object.keys(errors).filter((k) => errors[k] === true);
    }

    asGroup(control: unknown): FormGroup {
        return control as FormGroup;
    }

    asArray(control: unknown): FormArray {
        return control as FormArray;
    }

    /**
     * Transloco key for the country display name, or the raw code / empty.
     */
    countryNameKey(countryCode: string): string {
        if (!countryCode) return '';
        const match = this.countries.find((c) => c.country === countryCode);
        return match?.name || countryCode;
    }

    totalSelected(group: FormGroup): number {
        const arr = this.asArray(group.get('configurations'));
        if (!arr) return 0;
        return arr.controls.reduce((sum, cfg) => sum + this.selectedCount(cfg), 0);
    }

    /**
     * True when the country row needs user attention (empty, invalid, or no active category).
     */
    countryNeedsAttention(group: FormGroup): boolean {
        const country = (group.get('country')?.value as string) || '';
        if (!country) return true;
        if (group.invalid) return true;
        if (this.activeCategories(group).length === 0) return true;
        return false;
    }

    isCountryExpanded(index: number): boolean {
        const group = this.asGroup(this.documentTypes.at(index));
        if (this.countryNeedsAttention(group)) return true;
        if (this._userCollapsedCountries.has(index)) return false;
        return this._expandedCountries.has(index);
    }

    toggleCountry(index: number, event?: Event): void {
        event?.stopPropagation();
        const group = this.asGroup(this.documentTypes.at(index));
        // Incomplete rows stay open so the user can finish configuration.
        if (this.countryNeedsAttention(group)) return;

        if (this.isCountryExpanded(index)) {
            this._userCollapsedCountries.add(index);
            this._expandedCountries.delete(index);
        } else {
            this._expandedCountries.add(index);
            this._userCollapsedCountries.delete(index);
        }
        this._cdr.markForCheck();
    }

    focusCountry(index: number): void {
        this._expandedCountries.add(index);
        this._userCollapsedCountries.delete(index);
        this._cdr.markForCheck();

        queueMicrotask(() => {
            const el = this._host.nativeElement.querySelector(
                `#doc-country-${index}`
            ) as HTMLElement | null;
            el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    categoryListKey(countryIndex: number, category: string): string {
        return `${countryIndex}:${category}`;
    }

    isCategoryListExpanded(
        countryIndex: number,
        category: string,
        templatesLength: number
    ): boolean {
        if (templatesLength === 0) return false;
        if (templatesLength <= CATEGORY_LIST_COLLAPSE_THRESHOLD) return true;
        return this._expandedCategoryLists.has(this.categoryListKey(countryIndex, category));
    }

    toggleCategoryList(countryIndex: number, category: string, event?: Event): void {
        event?.stopPropagation();
        const key = this.categoryListKey(countryIndex, category);
        if (this._expandedCategoryLists.has(key)) {
            this._expandedCategoryLists.delete(key);
        } else {
            this._expandedCategoryLists.add(key);
        }
        this._cdr.markForCheck();
    }

    addType(): void {
        this._factory.addDocumentTypesWithDefaults(this.documentTypes, this.target);
        const lastIndex = this.documentTypes.length - 1;
        const last = this.documentTypes.at(lastIndex) as FormGroup;
        this._watchCountry(last);
        this._expandedCountries.add(lastIndex);
        this._userCollapsedCountries.delete(lastIndex);
        this._factory.updateValidatorsForActiveState(this.documentTypes);
        this.documentTypes?.updateValueAndValidity();
        this._cdr.markForCheck();
    }

    removeType(index: number): void {
        this.documentTypes.removeAt(index);
        this._reindexCollapseState(index);
        this._cdr.markForCheck();
    }

    activeCategories(group: FormGroup): string[] {
        const arr = this.asArray(group.get('configurations'));
        return (
            arr?.controls
                ?.filter((c) => c.get('active')?.value)
                .map((c) => c.get('documentCategory')?.value as string) ?? []
        );
    }

    isLoading(country: string): boolean {
        return !!country && this._loadingCountries.has(country);
    }

    /** Templates available for a given country/category combo. Empty array when none. */
    templatesFor(country: string, category: string): PromptTemplateLite[] {
        if (!country || !category) return [];
        return this._templatesByCountry[country]?.[category] || [];
    }

    /**
     * Categories with catalog templates first so empty Government ID does not
     * hide License (e.g. United States state driver licenses).
     */
    orderedConfigurationControls(group: FormGroup): AbstractControl[] {
        const country = group?.get('country')?.value as string;
        const arr = this.asArray(group?.get('configurations'));
        const controls = arr?.controls ? [...arr.controls] : [];
        if (!country || !this._fetchedCountries.has(country)) return controls;

        return controls.sort((a, b) => {
            const catA = a.get('documentCategory')?.value as string;
            const catB = b.get('documentCategory')?.value as string;
            const countA = this.templatesFor(country, catA).length;
            const countB = this.templatesFor(country, catB).length;
            if (countA > 0 && countB === 0) return -1;
            if (countA === 0 && countB > 0) return 1;
            return 0;
        });
    }

    /** Other categories on this country that have catalog templates (for empty-state hints). */
    categoriesWithTemplates(country: string, excludeCategory: string): string[] {
        if (!country) return [];
        const buckets = this._templatesByCountry[country] || {};
        return Object.keys(buckets).filter(
            (category) => category !== excludeCategory && (buckets[category]?.length || 0) > 0
        );
    }

    /** Comma-separated translated labels for empty-state “try other categories” hints. */
    otherCategoryLabels(country: string, excludeCategory: string): string {
        return this.categoriesWithTemplates(country, excludeCategory)
            .map((category) =>
                this._transloco.translate(`smartEnrollProjects.setup.documents.category.${category}`)
            )
            .join(', ');
    }

    /** Helper to look up the populated DocumentType on a prompt template. */
    documentTypeOf(pt: PromptTemplateLite): DocumentTypeLite | null {
        if (!pt?.documentType || typeof pt.documentType === 'string') return null;
        return pt.documentType;
    }

    templateLabel(pt: PromptTemplateLite): string {
        const dt = this.documentTypeOf(pt);
        if (dt?.code) return `${dt.code.toUpperCase()} – ${dt.name || pt.name}`;
        return pt?.name || '';
    }

    /** True when the prompt template (or its populated DocumentType) is global (`country: 'World'`). */
    isGlobalTemplate(pt: PromptTemplateLite): boolean {
        const ptCountry = pt?.country;
        const dtCountry = this.documentTypeOf(pt)?.country;
        return ptCountry === 'World' || dtCountry === 'World';
    }

    isTemplateSelected(configCtrl: AbstractControl, promptTemplateId: string): boolean {
        const arr = configCtrl?.get('documentTemplates') as FormArray | null;
        if (!arr) return false;
        return arr.controls.some((c) => c.get('promptTemplate')?.value === promptTemplateId);
    }

    toggleTemplate(configCtrl: AbstractControl, pt: PromptTemplateLite, checked: boolean): void {
        if (!pt?._id) return;

        const arr = configCtrl?.get('documentTemplates') as FormArray | null;
        const activeCtrl = configCtrl?.get('active');
        if (!arr) return;

        if (checked) {
            const placeholderIndex = arr.controls.findIndex((c) => !c.get('promptTemplate')?.value);
            if (placeholderIndex >= 0) {
                arr.removeAt(placeholderIndex);
            }
            const exists = arr.controls.some((c) => c.get('promptTemplate')?.value === pt._id);
            if (!exists) {
                arr.push(
                    this._factory.createDocumentTemplateFormGroup(
                        { promptTemplate: pt._id, required: 'optional' },
                        this.target
                    )
                );
            }
            activeCtrl?.setValue(true);
        } else {
            const idx = arr.controls.findIndex((c) => c.get('promptTemplate')?.value === pt._id);
            if (idx >= 0) arr.removeAt(idx);
            const stillSelected = arr.controls.some((c) => !!c.get('promptTemplate')?.value);
            if (!stillSelected) activeCtrl?.setValue(false);
        }

        arr.markAsDirty();
        arr.updateValueAndValidity();
        configCtrl?.updateValueAndValidity();
        this.documentTypes?.updateValueAndValidity();
        this._cdr.markForCheck();
    }

    selectedCount(configCtrl: AbstractControl): number {
        const arr = configCtrl?.get('documentTemplates') as FormArray | null;
        if (!arr) return 0;
        return arr.controls.filter((c) => !!c.get('promptTemplate')?.value).length;
    }

    /**
     * When a category toggle turns on: pre-select **all** templates for that bucket so UX is opt-out.
     * When it turns off: clear selections (prior behavior).
     */
    onActiveToggleChange(
        documentGroup: FormGroup,
        configCtrl: AbstractControl,
        countryValue: string,
        category: string,
        checked: boolean
    ): void {
        if (!checked) {
            const arr = configCtrl?.get('documentTemplates') as FormArray | null;
            if (!arr) return;
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr.at(i).get('promptTemplate')?.value) arr.removeAt(i);
            }
            arr.markAsDirty();
            arr.updateValueAndValidity();
            configCtrl?.updateValueAndValidity();
            documentGroup?.updateValueAndValidity();
            this.documentTypes?.updateValueAndValidity();
            this._cdr.markForCheck();
            return;
        }

        const templates = this.templatesFor(countryValue, category);
        this._selectAllTemplates(configCtrl, templates);
        documentGroup?.updateValueAndValidity();
        configCtrl?.updateValueAndValidity();
        this.documentTypes?.updateValueAndValidity();
        this._cdr.markForCheck();
    }

    private _selectAllTemplates(configCtrl: AbstractControl, templates: PromptTemplateLite[]): void {
        if (!templates.length) return;
        for (const pt of templates) {
            if (!pt?._id) continue;
            if (this.isTemplateSelected(configCtrl, pt._id)) continue;
            this.toggleTemplate(configCtrl, pt, true);
        }
    }

    /**
     * If templates load after `active` was already true (e.g. latency), backfill selections.
     */
    private _selectAllTemplatesForActiveEmptyCategories(country: string): void {
        if (!this.documentTypes?.length) return;
        for (const ctrl of this.documentTypes.controls) {
            const dg = ctrl as FormGroup;
            if (dg.get('country')?.value !== country) continue;
            const configs = dg.get('configurations') as FormArray | undefined;
            if (!configs) continue;
            for (let i = 0; i < configs.length; i++) {
                const configCtrl = configs.at(i);
                if (!configCtrl.get('active')?.value) continue;
                const category = configCtrl.get('documentCategory')?.value as string;
                const templates = this.templatesFor(country, category);
                if (!templates.length) continue;
                if (this.selectedCount(configCtrl) > 0) continue;
                this._selectAllTemplates(configCtrl, templates);
            }
        }
    }

    openPreview(pt: PromptTemplateLite): void {
        const dt = this.documentTypeOf(pt);
        const data: DocumentTypePreviewData = {
            name: dt?.name || pt?.name || '',
            code: dt?.code,
            country: dt?.country,
            frontImage: dt?.frontImage,
            backImage: dt?.backImage,
        };
        this._dialog.open(DocumentTypePreviewDialogComponent, {
            data,
            width: '720px',
            maxWidth: '95vw',
            maxHeight: '90vh',
            autoFocus: false,
        });
    }

    private _reindexCollapseState(removedIndex: number): void {
        const nextExpanded = new Set<number>();
        const nextCollapsed = new Set<number>();
        for (const i of this._expandedCountries) {
            if (i === removedIndex) continue;
            nextExpanded.add(i > removedIndex ? i - 1 : i);
        }
        for (const i of this._userCollapsedCountries) {
            if (i === removedIndex) continue;
            nextCollapsed.add(i > removedIndex ? i - 1 : i);
        }
        this._expandedCountries = nextExpanded;
        this._userCollapsedCountries = nextCollapsed;

        const nextCategory = new Set<string>();
        for (const key of this._expandedCategoryLists) {
            const [idxStr, category] = key.split(':');
            const idx = Number(idxStr);
            if (Number.isNaN(idx) || idx === removedIndex) continue;
            const newIdx = idx > removedIndex ? idx - 1 : idx;
            nextCategory.add(`${newIdx}:${category}`);
        }
        this._expandedCategoryLists = nextCategory;
    }

    private _watchCountry(group: FormGroup): void {
        const countryCtrl = group?.get('country');
        if (!countryCtrl) return;
        const initial = countryCtrl.value as string | undefined;
        if (initial) this._fetchTemplatesForCountry(initial);
        countryCtrl.valueChanges
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((country: string) => {
                if (country) this._fetchTemplatesForCountry(country);
                this._cdr.markForCheck();
            });
    }

    private _fetchTemplatesForCountry(country: string): void {
        if (!country) return;
        if (this._loadingCountries.has(country)) return;
        if (this._fetchedCountries.has(country)) return;

        this._loadingCountries.add(country);
        this._cdr.markForCheck();

        this._setup
            .listAllPromptTemplates({
                in_country: country === 'World' ? ['World'] : [country, 'World'],
                populates: ['documentType'],
            })
            .subscribe({
                next: (response) => {
                    const buckets: CategoryBucket = {};
                    for (const pt of response?.data || []) {
                        const dt = this.documentTypeOf(pt);
                        const category = pt.documentCategory || dt?.category;
                        if (!category) continue;
                        if (!buckets[category]) buckets[category] = [];
                        buckets[category].push(pt);
                    }
                    Object.keys(buckets).forEach((k) =>
                        buckets[k].sort((a, b) =>
                            this.templateLabel(a).localeCompare(this.templateLabel(b))
                        )
                    );
                    this._templatesByCountry[country] = buckets;
                    this._fetchedCountries.add(country);
                    this._loadingCountries.delete(country);
                    this._selectAllTemplatesForActiveEmptyCategories(country);
                    this._cdr.markForCheck();
                },
                error: () => {
                    this._templatesByCountry[country] = {};
                    this._fetchedCountries.add(country);
                    this._loadingCountries.delete(country);
                    this._cdr.markForCheck();
                },
            });
    }
}
