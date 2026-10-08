import { CommonModule, Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { SmartScanService } from '../smart-scan.service';
import type { AppFeatureOption, DocumentType, DocumentTypeField, PromptTemplate } from '../smart-scan.types';

@Component({
    selector: 'document-type-wizard',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './document-type-wizard.component.html',
    styleUrls: ['./document-type-wizard.component.scss'],
})
export class DocumentTypeWizardComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _location = inject(Location);
    private _scanService = inject(SmartScanService);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    readonly steps = ['details', 'sides', 'fields', 'smartCheck'] as const;
    readonly categories = [
        'government_id',
        'passport',
        'license',
        'criminal',
        'bank_document',
        'tax_document',
        'business_document',
        'draft',
    ];
    readonly fieldTypes = ['string', 'number', 'date', 'boolean'];

    country = '';
    stepIndex = 0;
    saving = false;
    loading = false;
    openedAsEdit = false;
    errorMessage = '';

    name = '';
    code = '';
    category = 'government_id';
    version = '';
    requiresBackSide = true;
    frontImage = '';
    backImage = '';
    fields: DocumentTypeField[] = [this.emptyField(0)];
    documentTypeId = '';
    defaultTemplateId = '';

    features: AppFeatureOption[] = [];
    featuresLoading = false;
    selectedFeatureId = '';
    fieldMap: Record<string, string> = {};
    extracting = false;
    extractionAttempted = false;
    extractionError = '';
    extractionRows: Array<{ key: string; value: string }> = [];

    ngOnInit() {
        const id = this._route.snapshot.paramMap.get('id');
        if (id) {
            this.openedAsEdit = true;
            this.documentTypeId = id;
            this.loadForEdit(id);
            return;
        }
        this.country = this._route.snapshot.queryParamMap.get('country') || '';
        if (!this.country) {
            this._router.navigate(['/smart-enroll/smart-scan/new']);
        }
    }

    get selectedFeature(): AppFeatureOption | undefined {
        return this.features.find((feature) => feature._id === this.selectedFeatureId);
    }

    get mapKeys(): string[] {
        const keys = this.fields.map((field) => field.mapKey);
        return [...new Set(keys.map((key) => key.trim()).filter(Boolean))];
    }

    isStepCurrent(index: number): boolean {
        return this.stepIndex === index;
    }

    goToStep(index: number) {
        if (this.saving || this.loading || index < 0 || index >= this.steps.length || index === this.stepIndex) return;
        if (!this.openedAsEdit && index > this.stepIndex) return;
        if (index < this.stepIndex) {
            this.moveToStep(index);
            return;
        }
        if (this.stepIndex <= 2) {
            if (!this.canGoNext()) return;
            if (index > this.stepIndex + 1 && !this.canSaveProgress()) return;
            this.persistProgress(index);
            return;
        }
        this.moveToStep(index);
    }

    canTryExtraction(): boolean {
        if (this.saving || this.extracting || !this.frontImage) return false;
        return !this.requiresBackSide || Boolean(this.backImage);
    }

    tryExtraction() {
        if (!this.canTryExtraction()) return;
        this.extractionError = '';
        this.runExtraction();
    }

    get countryLabel(): string {
        const normalized = this.country.trim().toLowerCase().replace(/[\s-]+/g, '_');
        const key = `smartScan.countries.${normalized}`;
        const translated = this._transloco.translate(key);
        if (translated === key) {
            return this.country.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
        }
        return translated;
    }

    get identityReady(): boolean {
        return Boolean(this.name.trim() && this.code.trim());
    }

    get filledFieldCount(): number {
        return this.fields.filter((field) => field.name.trim() && field.mapKey.trim()).length;
    }

    get choiceLabel(): string {
        if (this.stepIndex === 0) return this.countryLabel;
        if (this.stepIndex === 1) {
            return this._transloco.translate(
                this.requiresBackSide ? 'smartScan.wizard.bothSides' : 'smartScan.wizard.frontOnly'
            );
        }
        if (this.stepIndex === 2) {
            return this._transloco.translate('smartScan.wizard.fieldsStep.choice', { count: this.filledFieldCount });
        }
        return this.selectedFeature?.name || this._transloco.translate('smartScan.wizard.skipSmartCheck');
    }

    get stepCopyKey(): string {
        return ['details', 'sidesStep', 'fieldsStep', 'smartCheckStep'][this.stepIndex] || 'details';
    }

    get explainerNotes(): string[] {
        const notes: Record<string, string[]> = {
            details: ['noteCountry', 'noteCode', 'noteCategory'],
            sidesStep: ['noteFront', 'noteBack', 'noteImages'],
            fieldsStep: ['noteMapKey', 'notePage', 'notePrivate'],
            smartCheckStep: ['noteOptional', 'noteMap', 'noteSkip'],
        };
        return (notes[this.stepCopyKey] || []).map((note) =>
            this._transloco.translate(`smartScan.wizard.${this.stepCopyKey}.${note}`)
        );
    }

    canGoNext(): boolean {
        if (this.saving || this.loading) return false;
        if (this.stepIndex === 0) return Boolean(this.name.trim() && this.code.trim() && this.category);
        if (this.stepIndex === 1) {
            if (!this.frontImage) return false;
            return !this.requiresBackSide || Boolean(this.backImage);
        }
        if (this.stepIndex === 2) return this.fields.some((field) => field.name.trim() && field.mapKey.trim());
        return true;
    }

    previousStep() {
        if (this.stepIndex === 0) {
            this.backToScan();
            return;
        }
        this.stepIndex -= 1;
        this.errorMessage = '';
    }

    nextStep() {
        if (!this.canGoNext()) return;
        this.errorMessage = '';

        if (this.stepIndex <= 2) {
            this.persistProgress(this.stepIndex + 1);
            return;
        }
        if (this.stepIndex === this.steps.length - 1) {
            this.finish();
        }
    }

    backToScan() {
        this._router.navigate(['/smart-enroll/smart-scan/new'], {
            queryParams: this.country ? { country: this.country } : {},
        });
    }

    onCodeInput(value: string) {
        this.code = value.toUpperCase().replace(/[^A-Z0-9_]/g, '');
    }

    onRequiresBackSideChange(bothSides: boolean) {
        this.requiresBackSide = bothSides;
        if (!bothSides) {
            this.backImage = '';
            this.fields.forEach((field) => {
                if (field.page === 1) field.page = 0;
            });
        }
    }

    onImageSelected(event: Event, side: 'front' | 'back') {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file || !file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = () => {
            const result = typeof reader.result === 'string' ? reader.result : '';
            if (side === 'front') this.frontImage = result;
            else this.backImage = result;
            this._cdr.markForCheck();
        };
        reader.readAsDataURL(file);
    }

    addField(target: DocumentTypeField[] = this.fields) {
        target.push(this.emptyField(0));
    }

    removeField(target: DocumentTypeField[], index: number) {
        if (target.length === 1) return;
        target.splice(index, 1);
    }

    onFeatureChange(featureId: string) {
        this.selectedFeatureId = featureId;
        this.fieldMap = {};
        for (const dependency of this.selectedFeature?.dependencies || []) {
            const match = this.mapKeys.find((key) => key === dependency.field);
            if (match) this.fieldMap[dependency.field] = match;
        }
    }

    private persistProgress(nextIndex: number) {
        if (this.documentTypeId) {
            this.updateOwnedDocumentType(nextIndex);
            return;
        }
        this.createDocumentType(nextIndex);
    }

    private createDocumentType(nextIndex: number) {
        this.saving = true;
        this._scanService
            .createDocumentType({
                name: this.name.trim(),
                code: this.code.trim(),
                category: this.category,
                country: this.country,
                version: this.version.trim() || undefined,
                fields: this.cleanFields(this.fields),
                frontImage: this.frontImage,
                backImage: this.requiresBackSide ? this.backImage : '',
                requiresBackSide: this.requiresBackSide,
            })
            .subscribe({
                next: (response) => {
                    this.documentTypeId = response.data?._id || '';
                    this.defaultTemplateId = response.data?.promptTemplate?._id || '';
                    this.adoptSavedImages(response.data);
                    this.rememberDocumentUrl();
                    this.afterOwnedSave(nextIndex);
                },
                error: (err) => this.fail(err),
            });
    }

    private loadFeatures() {
        this.featuresLoading = true;
        this._scanService.getSmartCheckFeatures(this.country).subscribe({
            next: (response) => {
                const rows = Array.isArray(response.data) ? response.data : [];
                this.features = rows.filter((feature) => feature.smartCheckEnabled);
                this.featuresLoading = false;
                this._cdr.markForCheck();
            },
            error: () => {
                this.features = [];
                this.featuresLoading = false;
                this._cdr.markForCheck();
            },
        });
    }

    private finish() {
        if (!this.selectedFeatureId) {
            this.backToScan();
            return;
        }

        const smartCheckFieldMap = (this.selectedFeature?.dependencies || [])
            .map((dependency) => ({
                dependencyField: dependency.field,
                mapKey: this.fieldMap[dependency.field] || '',
            }))
            .filter((row) => row.mapKey);

        this.saving = true;
        this._scanService
            .updateDocumentType(this.documentTypeId, {
                appFeature: this.selectedFeatureId,
                smartCheckFieldMap,
            })
            .subscribe({
                next: () => this.backToScan(),
                error: (err) => this.fail(err),
            });
    }

    private fail(err: { error?: { message?: string }; message?: string }) {
        this.saving = false;
        this.errorMessage =
            err?.error?.message || err?.message || this._transloco.translate('smartScan.wizard.saveError');
        this._cdr.markForCheck();
    }

    private cleanFields(fields: DocumentTypeField[]): DocumentTypeField[] {
        return fields
            .filter((field) => field.name.trim() && field.mapKey.trim())
            .map((field) => ({
                name: field.name.trim(),
                type: field.type || 'string',
                mapKey: field.mapKey.trim(),
                page: this.requiresBackSide ? field.page : 0,
            }));
    }

    private emptyField(page: number): DocumentTypeField {
        return { name: '', type: 'string', mapKey: '', page };
    }

    private loadForEdit(id: string) {
        this.loading = true;
        this._scanService.getDocumentType(id).subscribe({
            next: (response) => {
                const documentType = response?.data;
                if (!documentType?.client) {
                    this.backToScan();
                    return;
                }
                this.applyLoadedType(documentType);
                this.loadOwnedTemplates(id, documentType.name);
            },
            error: () => this.backToScan(),
        });
    }

    private applyLoadedType(documentType: DocumentType) {
        this.country = documentType.country || '';
        this.name = documentType.name || '';
        this.code = documentType.code || '';
        this.category = documentType.category || 'government_id';
        this.version = documentType.version || '';
        this.frontImage = documentType.frontImage || '';
        this.backImage = documentType.backImage || '';
        this.requiresBackSide = Boolean(documentType.backImage);
        this.fields = this.copyFields(documentType.fields);
        this.selectedFeatureId = this.featureId(documentType.appFeature);
        this.fieldMap = {};
        for (const row of documentType.smartCheckFieldMap || []) {
            if (row.dependencyField && row.mapKey) this.fieldMap[row.dependencyField] = row.mapKey;
        }
    }

    private loadOwnedTemplates(documentTypeId: string, documentName: string) {
        this._scanService.getPromptTemplates(documentTypeId).subscribe({
            next: (response) => {
                const rows = Array.isArray(response.data) ? response.data : [];
                this.splitTemplates(rows, documentName);
                this.loading = false;
                this._cdr.markForCheck();
            },
            error: () => {
                this.loading = false;
                this._cdr.markForCheck();
            },
        });
    }

    private splitTemplates(rows: PromptTemplate[], documentName: string) {
        const named = rows.find((row) => row.name === documentName) || rows[0];
        this.defaultTemplateId = named?._id || '';
    }

    private updateOwnedDocumentType(nextIndex = 3) {
        this.saving = true;
        const fields = this.cleanFields(this.fields);
        this._scanService
            .updateDocumentType(this.documentTypeId, {
                name: this.name.trim(),
                code: this.code.trim(),
                category: this.category,
                country: this.country,
                version: this.version.trim() || null,
                fields,
                frontImage: this.frontImage,
                backImage: this.requiresBackSide ? this.backImage : '',
            })
            .subscribe({
                next: (response) => {
                    this.adoptSavedImages(response.data);
                    this.syncDefaultTemplate(fields, nextIndex);
                },
                error: (err) => this.fail(err),
            });
    }

    private syncDefaultTemplate(fields: DocumentTypeField[], nextIndex: number) {
        if (!this.defaultTemplateId) {
            this.afterOwnedSave(nextIndex);
            return;
        }
        this._scanService
            .updatePromptTemplate(this.defaultTemplateId, {
                active: true,
                country: this.country,
                description: this.name.trim(),
                documentCategory: this.category,
                fields,
                format: 'json',
                name: this.name.trim(),
                requiresBackSide: this.requiresBackSide,
            })
            .subscribe({
                next: () => this.afterOwnedSave(nextIndex),
                error: (err) => this.fail(err),
            });
    }

    private afterOwnedSave(nextIndex: number) {
        this.saving = false;
        this.rememberDocumentUrl();
        if (nextIndex !== this.stepIndex) this.moveToStep(nextIndex);
        this._cdr.markForCheck();
    }

    private rememberDocumentUrl() {
        if (!this.documentTypeId) return;
        const url = this._router.serializeUrl(
            this._router.createUrlTree(['/smart-enroll/smart-scan/document-type', this.documentTypeId])
        );
        this._location.replaceState(url);
        this.openedAsEdit = true;
    }

    private adoptSavedImages(documentType: DocumentType | null | undefined) {
        if (!documentType?.frontImage && !documentType?.backImage) return;
        if (documentType.frontImage) this.frontImage = documentType.frontImage;
        this.backImage = documentType.backImage || '';
    }

    private runExtraction() {
        if (!this.frontImage) return;
        this.extracting = true;
        this.extractionError = '';
        this._scanService.identifyDocumentFields(this.frontImage, this.requiresBackSide ? this.backImage : undefined).subscribe({
            next: (response) => {
                const rows = Array.isArray(response?.data) ? response.data : [];
                const fields = this.toDocumentFields(rows);
                if (fields.length) this.fields = fields;
                this.extractionRows = fields.map((field) => ({ key: field.mapKey, value: field.name }));
                this.extractionAttempted = true;
                this.extracting = false;
                this._cdr.markForCheck();
            },
            error: (err) => {
                this.extracting = false;
                this.extractionError =
                    err?.error?.message || err?.message || this._transloco.translate('smartScan.wizard.fieldsStep.extractionError');
                this._cdr.markForCheck();
            },
        });
    }

    private toDocumentFields(rows: DocumentTypeField[]): DocumentTypeField[] {
        const fields = rows
            .filter((field) => field?.name?.trim() && field?.mapKey?.trim())
            .map((field) => ({
                name: field.name.trim(),
                mapKey: field.mapKey.trim(),
                type: this.normalizeFieldType(field.type),
                page: this.requiresBackSide && (Number(field.page) === 1 || Number(field.page) === 2) ? 1 : 0,
            }));

        return fields;
    }

    private normalizeFieldType(type: string | undefined): string {
        const normalized = (type || '').toLowerCase();
        if (normalized === 'string' || normalized === 'number' || normalized === 'date' || normalized === 'boolean') {
            return normalized;
        }
        return 'string';
    }

    private canSaveProgress(): boolean {
        if (!this.name.trim() || !this.code.trim() || !this.category || !this.frontImage) return false;
        if (this.requiresBackSide && !this.backImage) return false;
        return this.fields.some((field) => field.name.trim() && field.mapKey.trim());
    }

    private moveToStep(index: number) {
        this.stepIndex = index;
        this.errorMessage = '';
        if (this.steps[index] === 'smartCheck') this.loadFeatures();
    }

    private copyFields(fields: DocumentTypeField[] | undefined): DocumentTypeField[] {
        if (!fields?.length) return [this.emptyField(0)];
        return fields.map((field) => ({
            name: field.name,
            type: field.type || 'string',
            mapKey: field.mapKey || '',
            page: field.page || 0,
        }));
    }

    private featureId(value: DocumentType['appFeature']): string {
        if (!value) return '';
        if (typeof value === 'string') return value;
        return value._id || '';
    }
}
