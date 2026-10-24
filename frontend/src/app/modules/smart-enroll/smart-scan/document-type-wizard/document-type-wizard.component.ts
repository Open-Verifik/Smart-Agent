import { CommonModule, Location } from '@angular/common';
import { ChangeDetectorRef, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { SmartScanService } from '../smart-scan.service';
import type { AppFeatureOption, DocumentType, DocumentTypeField, PromptTemplate } from '../smart-scan.types';
import { DocumentTypeWizardDetailsComponent } from './document-type-wizard-details.component';
import { DocumentTypeWizardFieldsComponent } from './document-type-wizard-fields.component';
import { DocumentTypeWizardSidesComponent } from './document-type-wizard-sides.component';
import { DocumentTypeWizardSmartCheckComponent } from './document-type-wizard-smart-check.component';
import { DOCUMENT_TYPE_WIZARD } from './document-type-wizard.token';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';

@Component({
    selector: 'document-type-wizard',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        DocumentTypeWizardDetailsComponent,
        DocumentTypeWizardSidesComponent,
        DocumentTypeWizardFieldsComponent,
        DocumentTypeWizardSmartCheckComponent,
    ],
    providers: [{ provide: DOCUMENT_TYPE_WIZARD, useExisting: DocumentTypeWizardComponent }],
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
    private _destroyRef = inject(DestroyRef);
    private _authGate = inject(AuthRequiredGateService);
    /** True after replaceState swaps /document-type/new for /document-type/:id without remounting. */
    private urlRewritten = false;

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
    expandedField: DocumentTypeField | null = null;
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
        this._authGate.runWithAuthOrDialog({
            directAuthModal: true,
            onAuthenticated: () => this._initWizard(),
        });
    }

    private _initWizard(): void {
        const id = this._route.snapshot.paramMap.get('id');
        if (id) {
            this.openedAsEdit = true;
            this.documentTypeId = id;
            this.bindStepToUrl();
            this.loadForEdit(id);
            return;
        }
        const forkId = this._route.snapshot.queryParamMap.get('fork');
        if (forkId) {
            this.bindStepToUrl();
            this.loadFork(forkId);
            return;
        }
        this.country = this._route.snapshot.queryParamMap.get('country') || '';
        if (!this.country) {
            this._router.navigate(['/smart-enroll/smart-scan/new']);
            return;
        }
        this.bindStepToUrl();
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
        this.writeStep(this.stepIndex - 1);
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
        const queryParams: Record<string, string> = {};
        if (this.country) queryParams['country'] = this.country;
        if (this.documentTypeId && this.code.trim()) queryParams['documentType'] = this.code.trim();
        this._router.navigate(['/smart-enroll/smart-scan/new'], { queryParams });
    }

    private loadFork(id: string) {
        this.loading = true;
        this._scanService.getDocumentType(id).subscribe({
            next: (response) => {
                const documentType = response?.data;
                if (!documentType || documentType.client) {
                    if (documentType?.client) {
                        this._router.navigate(['/smart-enroll/smart-scan/document-type', documentType._id]);
                        return;
                    }
                    this.backToScan();
                    return;
                }
                this.prefillFromSystem(documentType);
            },
            error: () => this.backToScan(),
        });
    }

    private prefillFromSystem(documentType: DocumentType) {
        this.applyLoadedType(documentType);
        this.documentTypeId = '';
        this._scanService.getPromptTemplates(documentType._id).subscribe({
            next: (response) => {
                const rows = Array.isArray(response.data) ? response.data : [];
                const template = rows[0];
                if (template?.fields?.length) this.fields = this.copyFields(template.fields);
                this.requiresBackSide = template?.requiresBackSide ?? Boolean(documentType.backImage);
                this.openOwnedCopyOrStay(documentType.code);
            },
            error: () => this.openOwnedCopyOrStay(documentType.code),
        });
    }

    private openOwnedCopyOrStay(code: string) {
        this._scanService.getDocumentTypes(this.country, true).subscribe({
            next: () => {
                const owned = this._scanService.documentTypes().find((type) => type.code === code && type.client);
                if (owned) {
                    this._router.navigate(['/smart-enroll/smart-scan/document-type', owned._id]);
                    return;
                }
                this.loading = false;
                this._cdr.markForCheck();
            },
            error: () => {
                this.loading = false;
                this._cdr.markForCheck();
            },
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

    get frontFields(): DocumentTypeField[] {
        return this.fields.filter((field) => field.page !== 1);
    }

    get backFields(): DocumentTypeField[] {
        return this.fields.filter((field) => field.page === 1);
    }

    /**
     * Adds a field on the given side and opens it for editing.
     */
    addField(page: 0 | 1): void {
        const field = this.emptyField(page);
        this.fields.push(field);
        this.expandedField = field;
    }

    /**
     * Opens one field and closes whichever field was open.
     */
    toggleField(field: DocumentTypeField): void {
        this.expandedField = this.expandedField === field ? null : field;
    }

    /**
     * Moves a field between the front and back boxes.
     */
    moveField(field: DocumentTypeField, page: 0 | 1): void {
        field.page = page;
    }

    removeField(field: DocumentTypeField): void {
        if (this.fields.length === 1) return;
        const index = this.fields.indexOf(field);
        if (index < 0) return;
        this.fields.splice(index, 1);
        if (this.expandedField === field) this.expandedField = null;
    }

    fieldLabel(field: DocumentTypeField, index: number): string {
        const name = field.name.trim();
        if (name) return name;
        const title = this._transloco.translate('smartScan.wizard.fieldsStep.fieldTitle');
        return `${title} ${index + 1}`;
    }

    onFeatureChange(featureId: string) {
        this.selectedFeatureId = featureId;
        this.fieldMap = {};
        for (const dependency of this.featureDependencies(this.selectedFeature)) {
            const fixed = this.dependencyEnums(dependency);
            if (fixed.length === 1) {
                this.fieldMap[dependency.field] = `literal:${fixed[0]}`;
                continue;
            }
            const match = this.mapKeys.find((key) => key === dependency.field);
            if (match) this.fieldMap[dependency.field] = match;
        }
    }

    /**
     * Values the endpoint accepts as a constant, such as CCPA for documentType.
     */
    dependencyEnums(dependency: { enum?: string[] | null }): string[] {
        if (!Array.isArray(dependency.enum)) return [];
        return dependency.enum.map((value) => String(value).trim()).filter(Boolean);
    }

    /**
     * Dependencies the catalog actually returned as a list.
     */
    featureDependencies(feature?: AppFeatureOption): NonNullable<AppFeatureOption['dependencies']> {
        if (!feature || !Array.isArray(feature.dependencies)) return [];
        return feature.dependencies;
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
                error: (err) => {
                    const message = err?.error?.message || err?.message || '';
                    if (String(message).includes('code_already_exists')) {
                        this.saving = false;
                        this.openOwnedCopyOrStay(this.code.trim());
                        return;
                    }
                    this.fail(err);
                },
            });
    }

    private loadFeatures() {
        this.featuresLoading = true;
        this._scanService.getSmartCheckFeatures(this.country).subscribe({
            next: (response) => {
                const rows = Array.isArray(response.data) ? response.data : [];
                const country = this.country.trim().toLowerCase();
                this.features = rows
                    .filter((feature) => !country || (feature.country || '').trim().toLowerCase() === country)
                    .sort((left, right) => this.featureRank(left) - this.featureRank(right) || left.name.localeCompare(right.name));
                this.applyLiteralDefaults();
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
            .map((dependency) => this.fieldMapRow(dependency.field))
            .filter((row) => row.mapKey || row.literal);

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
            if (!row.dependencyField) continue;
            if (row.literal) this.fieldMap[row.dependencyField] = `literal:${row.literal}`;
            else if (row.mapKey) this.fieldMap[row.dependencyField] = row.mapKey;
        }
        if (this.steps[this.stepIndex] === 'smartCheck') this.loadFeatures();
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
        const url = this.documentUrl(this.steps[this.stepIndex]);
        this._location.replaceState(url);
        this.openedAsEdit = true;
        if (!this._route.snapshot.paramMap.get('id')) this.urlRewritten = true;
    }

    private documentUrl(step: string): string {
        return this._router.serializeUrl(
            this._router.createUrlTree(['/smart-enroll/smart-scan/document-type', this.documentTypeId], {
                queryParams: { step },
            })
        );
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
        this.writeStep(index);
    }

    /**
     * Keeps the visible step aligned with ?step=, including browser back and forward.
     * Reading the param never saves the document.
     */
    private bindStepToUrl() {
        this._route.queryParamMap.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((params) => {
            if (this.urlRewritten) return;
            this.syncStepFromParam(params.get('step'));
        });

        const locationSub = this._location.subscribe(() => {
            if (!this.urlRewritten) return;
            const index = this.stepIndexFromParam(this.stepFromLocation());
            this.applyStep(index ?? 0);
        });
        this._destroyRef.onDestroy(() => locationSub.unsubscribe());
    }

    private syncStepFromParam(step: string | null) {
        const index = this.stepIndexFromParam(step);
        if (index == null) {
            this.writeStep(0, { replaceUrl: true });
            return;
        }
        this.applyStep(index);
    }

    private stepIndexFromParam(step: string | null): number | null {
        if (!step) return null;
        const index = (this.steps as readonly string[]).indexOf(step);
        if (!this.canOpenStep(index)) return null;
        return index;
    }

    private canOpenStep(index: number): boolean {
        if (index < 0 || index >= this.steps.length) return false;
        if (this._route.snapshot.paramMap.get('id') || this.documentTypeId) return true;
        return index === 0;
    }

    private stepFromLocation(): string | null {
        const path = this._location.path();
        const query = path.includes('?') ? path.slice(path.indexOf('?') + 1) : '';
        return new URLSearchParams(query).get('step');
    }

    private writeStep(index: number, options?: { replaceUrl?: boolean }) {
        if (!this.canOpenStep(index)) return;
        const step = this.steps[index];

        if (this.urlRewritten && this.documentTypeId) {
            const url = this.documentUrl(step);
            const current = this._location.path().split('#')[0];
            if (current !== url) {
                if (options?.replaceUrl) this._location.replaceState(url);
                else this._location.go(url);
            }
            this.applyStep(index);
            return;
        }

        if (this._route.snapshot.queryParamMap.get('step') === step) {
            this.applyStep(index);
            return;
        }

        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { step },
            queryParamsHandling: 'merge',
            replaceUrl: options?.replaceUrl ?? false,
        });
    }

    private applyStep(index: number) {
        if (index === this.stepIndex) return;
        this.stepIndex = index;
        this.errorMessage = '';
        if (this.steps[index] === 'smartCheck' && this.country) this.loadFeatures();
        this._cdr.markForCheck();
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

    /**
     * A dependency with one accepted code, such as CCPA, is sent as that code unless the user chose a field.
     */
    private applyLiteralDefaults() {
        for (const dependency of this.featureDependencies(this.selectedFeature)) {
            if (this.fieldMap[dependency.field]) continue;
            const fixed = this.dependencyEnums(dependency);
            if (fixed.length !== 1) continue;
            this.fieldMap[dependency.field] = `literal:${fixed[0]}`;
        }
    }

    private fieldMapRow(field: string): { dependencyField: string; mapKey: string; literal: string } {
        const chosen = this.fieldMap[field] || '';
        if (chosen.startsWith('literal:')) {
            return { dependencyField: field, mapKey: '', literal: chosen.slice('literal:'.length) };
        }
        return { dependencyField: field, mapKey: chosen, literal: '' };
    }

    /**
     * Identity checks and endpoints that already name this document code come first.
     * Every other endpoint for the country stays in the list.
     */
    private featureRank(feature: AppFeatureOption): number {
        const code = this.code.trim().toUpperCase();
        const dependencies = this.featureDependencies(feature);
        const enums = dependencies.flatMap((dependency) => this.dependencyEnums(dependency).map((value) => value.toUpperCase()));
        if (code && enums.includes(code)) return 0;
        const identity =
            feature.baseCategory === 'identity' ||
            dependencies.some((dependency) => dependency.field === 'documentNumber' || dependency.field === 'documentType');
        return identity ? 1 : 2;
    }
}
