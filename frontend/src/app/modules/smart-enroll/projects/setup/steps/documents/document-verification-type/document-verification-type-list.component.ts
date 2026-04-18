import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
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
import { TranslocoModule } from '@jsverse/transloco';

import { CountryService } from 'app/core/services/country.service';
import { SetupFormFactory } from '../../../setup-form.factory';
import { DocumentTypeLite, PromptTemplateLite, SetupService } from '../../../setup.service';
import {
    DocumentTypePreviewData,
    DocumentTypePreviewDialogComponent,
} from '../document-type-preview-dialog/document-type-preview-dialog.component';

type CategoryBucket = Record<string, PromptTemplateLite[]>;

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

    countries = this._countries.worldCountries;

    /** PromptTemplate buckets keyed by `country` then `documentCategory`. */
    private _templatesByCountry: Record<string, CategoryBucket> = {};
    /** In-flight fetch tracker per country to avoid duplicate requests. */
    private _loadingCountries = new Set<string>();
    /** Countries we've already attempted to fetch (success or failure). */
    private _fetchedCountries = new Set<string>();

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

    addType(): void {
        this._factory.addDocumentTypesWithDefaults(this.documentTypes, this.target);
        const last = this.documentTypes.at(this.documentTypes.length - 1) as FormGroup;
        this._watchCountry(last);
        this._cdr.markForCheck();
    }

    removeType(index: number): void {
        this.documentTypes.removeAt(index);
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
                arr.push(this._factory.createDocumentTemplateFormGroup({ promptTemplate: pt._id, required: 'optional' }, this.target));
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

    onActiveToggleChange(configCtrl: AbstractControl, checked: boolean): void {
        if (checked) return;
        const arr = configCtrl?.get('documentTemplates') as FormArray | null;
        if (!arr) return;
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr.at(i).get('promptTemplate')?.value) arr.removeAt(i);
        }
        arr.markAsDirty();
        arr.updateValueAndValidity();
        configCtrl?.updateValueAndValidity();
        this._cdr.markForCheck();
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

    private _watchCountry(group: FormGroup): void {
        const countryCtrl = group?.get('country');
        if (!countryCtrl) return;
        const initial = countryCtrl.value as string | undefined;
        if (initial) this._fetchTemplatesForCountry(initial);
        countryCtrl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((country: string) => {
            if (country) this._fetchTemplatesForCountry(country);
        });
    }

    private _fetchTemplatesForCountry(country: string): void {
        if (!country) return;
        if (this._loadingCountries.has(country)) return;
        if (this._fetchedCountries.has(country)) return;

        this._loadingCountries.add(country);
        this._cdr.markForCheck();

        this._setup
            .listPromptTemplates({
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
                        buckets[k].sort((a, b) => this.templateLabel(a).localeCompare(this.templateLabel(b)))
                    );
                    this._templatesByCountry[country] = buckets;
                    this._fetchedCountries.add(country);
                    this._loadingCountries.delete(country);
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
