import { CommonModule, Location } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    DestroyRef,
    ElementRef,
    inject,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subscription } from 'rxjs';
import { ImagePreviewDialogComponent } from '../../projects/image-preview-dialog.component';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { SmartScanService } from '../smart-scan.service';
import { ScanToolReviewStepComponent } from './scan-tool-review-step.component';
import { ScanToolSmartCheckResultComponent } from './scan-tool-smart-check-result.component';
import type {
    DocumentType,
    DocumentClassification,
    DocumentTypeField,
    RecentDocumentType,
    SmartCheckResult,
} from '../smart-scan.types';

type ScanToolStep = 'select' | 'preview' | 'upload' | 'results';

const COUNTRY_FLAGS: Record<string, string> = {
    argentina: '🇦🇷', bolivia: '🇧🇴', brazil: '🇧🇷', canada: '🇨🇦',
    chile: '🇨🇱', colombia: '🇨🇴', 'costa rica': '🇨🇷', cuba: '🇨🇺',
    'dominican republic': '🇩🇴', ecuador: '🇪🇨', 'el salvador': '🇸🇻',
    guatemala: '🇬🇹', honduras: '🇭🇳', mexico: '🇲🇽', nicaragua: '🇳🇮',
    panama: '🇵🇦', paraguay: '🇵🇾', peru: '🇵🇪', 'puerto rico': '🇵🇷',
    spain: '🇪🇸', 'united states': '🇺🇸', uruguay: '🇺🇾', venezuela: '🇻🇪',
    portugal: '🇵🇹', france: '🇫🇷', germany: '🇩🇪', italy: '🇮🇹',
    'united kingdom': '🇬🇧', japan: '🇯🇵', 'south korea': '🇰🇷', china: '🇨🇳',
    india: '🇮🇳', australia: '🇦🇺', 'new zealand': '🇳🇿',
    'south africa': '🇿🇦', nigeria: '🇳🇬', kenya: '🇰🇪', egypt: '🇪🇬',
    'saudi arabia': '🇸🇦', 'united arab emirates': '🇦🇪', israel: '🇮🇱',
    turkey: '🇹🇷', russia: '🇷🇺', poland: '🇵🇱', netherlands: '🇳🇱',
    belgium: '🇧🇪', switzerland: '🇨🇭', austria: '🇦🇹', sweden: '🇸🇪',
    norway: '🇳🇴', denmark: '🇩🇰', finland: '🇫🇮', ireland: '🇮🇪',
    philippines: '🇵🇭', thailand: '🇹🇭', indonesia: '🇮🇩', malaysia: '🇲🇾',
    singapore: '🇸🇬', vietnam: '🇻🇳', taiwan: '🇹🇼', 'hong kong': '🇭🇰',
};

@Component({
    selector: 'scan-tool',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatChipsModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        ScanToolReviewStepComponent,
        ScanToolSmartCheckResultComponent,
    ],
    templateUrl: './scan-tool.component.html',
    styleUrls: ['./scan-tool.component.scss'],
})
export class ScanToolComponent implements OnInit, OnDestroy {
    @ViewChild('frontInput') frontInput!: ElementRef<HTMLInputElement>;
    @ViewChild('backInput') backInput!: ElementRef<HTMLInputElement>;
    @ViewChild('editMenuTrigger') editMenuTrigger?: MatMenuTrigger;

    private _scanService = inject(SmartScanService);
    private _cdr = inject(ChangeDetectorRef);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _location = inject(Location);
    private _transloco = inject(TranslocoService);
    private _dialog = inject(MatDialog);
    private _destroyRef = inject(DestroyRef);
    private _authGate = inject(AuthRequiredGateService);

    step: ScanToolStep = 'select';
    /** Review or upload requested in the URL before the document type has loaded. */
    private pendingStep: ScanToolStep | null = null;

    selectedCountry = '';
    countryPickerOpen = false;
    searchQuery = '';
    selectedCategory = '';
    countries: string[] = [];
    categories: string[] = [];
    documentTypesLoading = false;
    showMine = false;
    flippedCardId: string | null = null;
    recentTypes: RecentDocumentType[] = [];
    recentLoading = false;
    private requestedCode = '';
    private requestedValidationId = '';

    private _countriesSub: Subscription | null = null;
    private _documentTypesSub: Subscription | null = null;

    lastCountry = '';
    lastCategory = '';
    lastSearchQuery = '';

    documentTypes = this._scanService.documentTypes;
    selectedDocType = this._scanService.selectedDocumentType;

    frontFile: File | null = null;
    frontUrl: string | null = null;
    backFile: File | null = null;
    backUrl: string | null = null;
    requiresBackSide = false;

    scanResult = this._scanService.scanResult;
    scanLoading = this._scanService.scanLoading;
    errorMessage: string | null = null;

    showRawJson = false;
    showClassificationReason = false;

    readonly ACCEPTED = '.jpg,.jpeg,.png,image/jpeg,image/png';

    readonly flowStepDefs: ReadonlyArray<{ id: ScanToolStep; labelKey: string }> = [
        { id: 'select', labelKey: 'smartScan.flowStepSelect' },
        { id: 'preview', labelKey: 'smartScan.flowStepReview' },
        { id: 'upload', labelKey: 'smartScan.flowStepUpload' },
        { id: 'results', labelKey: 'smartScan.flowStepResults' },
    ];

    private readonly _flowStepOrder: ScanToolStep[] = ['select', 'preview', 'upload', 'results'];

    ngOnInit() {
        this._authGate.runWithAuthOrDialog({
            directAuthModal: true,
            onAuthenticated: () => this._initScanTool(),
        });
    }

    private _initScanTool(): void {
        this._scanService.resetScanState();
        this._scanService.documentTypes.set([]);
        this.requestedCode = (this._route.snapshot.queryParamMap.get('documentType') || '').trim();
        this.requestedValidationId = (this._route.snapshot.queryParamMap.get('documentValidation') || '').trim();
        const requestedCountry = this._route.snapshot.queryParamMap.get('country') || '';
        this.bindStepToUrl();
        if (this.requestedValidationId) this.loadRequestedValidation(this.requestedValidationId);
        this.loadRecentTypes();
        this._countriesSub = this._scanService.getDocumentTypeCountries().subscribe({
            next: (countries) => {
                this.countries = countries;
                const match = countries.find(
                    (country) => country.toLowerCase() === requestedCountry.toLowerCase()
                );
                if (match) this.toggleCountry(match);
                this._cdr.markForCheck();
            },
            error: () => {
                this.errorMessage = 'Failed to load document types';
                this._cdr.markForCheck();
            },
        });
    }

    ngOnDestroy() {
        this._countriesSub?.unsubscribe();
        this._documentTypesSub?.unsubscribe();
    }

    get stepTitleKey(): string {
        const titles: Record<ScanToolStep, string> = {
            select: 'smartScan.stepSelectTitle',
            preview: 'smartScan.stepReviewTitle',
            upload: 'smartScan.stepUploadTitle',
            results: 'smartScan.stepResultsTitle',
        };
        return titles[this.step];
    }

    get stepHelpKey(): string {
        const help: Record<ScanToolStep, string> = {
            select: 'smartScan.stepSelectHelp',
            preview: 'smartScan.stepReviewHelp',
            upload: 'smartScan.stepUploadHelp',
            results: 'smartScan.stepResultsHelp',
        };
        return help[this.step];
    }

    get choiceLabel(): string {
        const selected = this.selectedDocType();
        if (!selected) return this._transloco.translate('smartScan.choiceNone');
        return `${selected.code} — ${selected.name}`;
    }

    get choiceDetail(): string {
        if (this.step === 'upload' || this.step === 'preview' || this.step === 'results') {
            return this._transloco.translate(this.requiresBackSide ? 'smartScan.backRequired' : 'smartScan.onePhoto');
        }
        if (this.recentTypes.length) {
            return this._transloco.translate('smartScan.recentCount', { count: this.recentTypes.length });
        }
        return this._transloco.translate('smartScan.choiceCatalog');
    }

    formatLastUsed(value: string | undefined): string {
        if (!value) return '';
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return '';
        return new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
    }

    /**
     * Opens the document photo full screen so it can be zoomed.
     */
    openImagePreview(imageSrc: string | undefined, title?: string): void {
        if (!imageSrc) return;
        this._dialog.open(ImagePreviewDialogComponent, {
            data: { imageSrc, title },
            panelClass: 'image-preview-dialog-panel',
            width: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
        });
    }

    useMyFields(documentType: DocumentType, event?: Event) {
        event?.stopPropagation();
        this._router.navigate(['/smart-enroll/smart-scan/document-type/new'], {
            queryParams: { fork: documentType._id },
        });
    }

    private loadRecentTypes() {
        this.recentLoading = true;
        this._scanService.getRecentDocumentTypes().subscribe({
            next: (rows) => {
                this.recentTypes = rows;
                this.recentLoading = false;
                if (this.requestedCode) this.openRequestedType(this.requestedCode);
                this._cdr.markForCheck();
            },
            error: () => {
                this.recentLoading = false;
                if (this.requestedCode) this.openRequestedType(this.requestedCode);
                this._cdr.markForCheck();
            },
        });
    }

    private openRequestedType(code: string) {
        const recent = this.recentTypes.find((row) => row.documentType?.code === code);
        if (recent?.documentType) {
            this.requestedCode = '';
            this.openRequestedDocument(recent.documentType);
            return;
        }

        this._scanService.getDocumentTypesByCode(code).subscribe({
            next: (types) => {
                const owned = types.find((type) => type.client);
                const chosen = owned || types[0];
                this.requestedCode = '';
                if (chosen) this.openRequestedDocument(chosen);
                else {
                    this.pendingStep = null;
                    this.writeStep(this.fallbackStep(), true);
                }
                this._cdr.markForCheck();
            },
            error: () => {
                this.requestedCode = '';
                this.pendingStep = null;
                this.writeStep(this.fallbackStep(), true);
            },
        });
    }

    getFlag(country: string): string {
        const key = country?.toLowerCase().replace(/_/g, ' ');
        return COUNTRY_FLAGS[key ?? ''] ?? '🏳️';
    }

    getCountryLabel(country: string): string {
        if (!country) return '';
        const normalized = country.trim().toLowerCase().replace(/[\s-]+/g, '_');
        const key = `smartScan.countries.${normalized}`;
        const translated = this._transloco.translate(key);
        if (translated === key) {
            return country.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        }
        return translated;
    }

    getCategoryLabel(category: string): string {
        if (!category) return '';
        const key = `smartScan.categories.${category}`;
        const translated = this._transloco.translate(key);
        if (translated === key) {
            return category.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        }
        return translated;
    }

    toggleCountry(country: string) {
        if (this.selectedCountry === country) {
            this.clearCountrySelection();
            return;
        }

        this.selectedCountry = country;
        this.countryPickerOpen = false;
        this.selectedCategory = '';
        this.searchQuery = '';
        this.flippedCardId = null;
        this.loadDocumentTypes(country);
    }

    /**
     * Shows every country again without clearing the current choice.
     */
    openCountryPicker(): void {
        this.countryPickerOpen = true;
    }

    toggleCategory(category: string) {
        this.selectedCategory = this.selectedCategory === category ? '' : category;
    }

    toggleMine(mine: boolean) {
        if (this.showMine === mine || !this.selectedCountry) return;
        this.showMine = mine;
        this.selectedCategory = '';
        this.loadDocumentTypes(this.selectedCountry);
    }

    private loadDocumentTypes(country: string) {
        if (!country) return;

        this._documentTypesSub?.unsubscribe();
        this.documentTypesLoading = true;
        this.categories = [];
        this._scanService.documentTypes.set([]);
        this._cdr.markForCheck();

        this._documentTypesSub = this._scanService.getDocumentTypes(country, this.showMine).subscribe({
            next: () => {
                const types = this._scanService.documentTypes();
                this.categories = [...new Set(types.map((t) => t.category).filter(Boolean))].sort();
                this.documentTypesLoading = false;
                this._cdr.markForCheck();
            },
            error: () => {
                this.documentTypesLoading = false;
                this.errorMessage = 'Failed to load document types';
                this._cdr.markForCheck();
            },
        });
    }

    private clearCountrySelection() {
        this._documentTypesSub?.unsubscribe();
        this._documentTypesSub = null;
        this.selectedCountry = '';
        this.selectedCategory = '';
        this.searchQuery = '';
        this.categories = [];
        this.documentTypesLoading = false;
        this.flippedCardId = null;
        this._scanService.documentTypes.set([]);
        this._cdr.markForCheck();
    }

    private restoreSelectStep() {
        this.writeStep('select');
    }

    get filteredDocumentTypes(): DocumentType[] {
        if (!this.selectedCountry) return [];

        let types = this.documentTypes();

        if (this.selectedCategory) {
            types = types.filter((t) => t.category === this.selectedCategory);
        }
        if (this.searchQuery) {
            const q = this.searchQuery.toLowerCase();
            types = types.filter(
                (t) =>
                    t.name?.toLowerCase().includes(q) ||
                    t.code?.toLowerCase().includes(q) ||
                    t.category?.toLowerCase().includes(q)
            );
        }

        return types;
    }

    flipCard(id: string, event: Event) {
        event.stopPropagation();
        this.flippedCardId = this.flippedCardId === id ? null : id;
    }

    menuX = 0;
    menuY = 0;
    contextDocumentType: DocumentType | null = null;

    onOwnedCardContextMenu(event: MouseEvent, documentType: DocumentType) {
        if (!documentType.client) return;
        event.preventDefault();
        event.stopPropagation();
        this.contextDocumentType = documentType;
        this.menuX = event.clientX;
        this.menuY = event.clientY;
        this._cdr.detectChanges();
        this.editMenuTrigger?.openMenu();
    }

    editDocumentType(documentType: DocumentType, event?: Event) {
        event?.stopPropagation();
        this._router.navigate(['/smart-enroll/smart-scan/document-type', documentType._id]);
    }

    editContextDocumentType() {
        if (!this.contextDocumentType) return;
        this.editDocumentType(this.contextDocumentType);
    }

    selectDocumentType(dt: DocumentType) {
        this.pendingStep = null;
        this.openDocument(dt, 'preview');
    }

    /**
     * Opens a document requested from the URL, keeping upload when that step was requested.
     */
    private openRequestedDocument(dt: DocumentType) {
        if (this.pendingStep === 'results' || this.requestedValidationId) {
            this.loadDocumentContext(dt);
            return;
        }
        const next = this.pendingStep === 'upload' ? 'upload' : 'preview';
        this.pendingStep = null;
        this.openDocument(dt, next);
    }

    /**
     * Loads the document type and its templates without changing the active step.
     */
    private loadDocumentContext(dt: DocumentType) {
        this._scanService.selectedDocumentType.set(dt);
        this._scanService.getPromptTemplates(dt._id).subscribe({
            next: () => {
                const tpl = this._scanService.promptTemplates()[0];
                this.requiresBackSide = tpl?.requiresBackSide ?? false;
                this._scanService.selectedPromptTemplate.set(tpl ?? null);
                this._cdr.markForCheck();
            },
            error: () => {
                this.requiresBackSide = false;
                this._cdr.markForCheck();
            },
        });
    }

    /**
     * Restores the scan result when reloading `?step=results&documentValidation=:id`.
     */
    private loadRequestedValidation(id: string) {
        this._scanService.getScan(id).subscribe({
            next: (res) => {
                const scan = res?.data;
                this.requestedValidationId = '';
                if (!scan) {
                    this.pendingStep = null;
                    this.writeStep(this.fallbackStep(), true);
                    return;
                }
                const score = scan.scoreValidation;
                const savedSmartCheck =
                    scan.smartCheck ?? (score?.status ? (score as SmartCheckResult) : null);
                const ocrCost = scan.cost?.ocr ?? scan.creditsCharged ?? score?.ocrCreditsCharged;
                const smartCheckCost = scan.cost?.smartCheck ?? score?.creditsCharged;
                this._scanService.scanResult.set({
                    _id: scan._id,
                    documentType: scan.documentType,
                    documentNumber: scan.documentNumber,
                    OCRExtraction: scan.OCRExtraction,
                    status: scan.status,
                    url: scan.url,
                    backUrl: scan.backUrl,
                    cost:
                        scan.cost ??
                        (ocrCost != null || smartCheckCost != null
                            ? {
                                  ocr: ocrCost || 0,
                                  smartCheck: smartCheckCost || 0,
                                  total: Number(((ocrCost || 0) + (smartCheckCost || 0)).toFixed(6)),
                              }
                            : null),
                    creditsCharged: ocrCost,
                    smartCheck: savedSmartCheck,
                    fieldMapping: scan.fieldMapping,
                });
                const cls = this.getClassification();
                this.showClassificationReason = cls ? !cls.isMatch : false;
                if (!this.selectedDocType() && scan.documentType && !this.requestedCode) {
                    this.openRequestedType(scan.documentType);
                }
                if (this.pendingStep === 'results') {
                    this.pendingStep = null;
                    this.writeStep('results', true);
                }
                this._cdr.markForCheck();
            },
            error: () => {
                this.requestedValidationId = '';
                this.pendingStep = null;
                this.writeStep(this.fallbackStep(), true);
            },
        });
    }

    private openDocument(dt: DocumentType, next: ScanToolStep) {
        this._scanService.selectedDocumentType.set(dt);

        this.lastCountry = this.selectedCountry;
        this.lastCategory = this.selectedCategory;
        this.lastSearchQuery = this.searchQuery;

        this._scanService.getPromptTemplates(dt._id).subscribe({
            next: () => {
                const templates = this._scanService.promptTemplates();
                const tpl = templates[0];
                this.requiresBackSide = tpl?.requiresBackSide ?? false;
                this._scanService.selectedPromptTemplate.set(tpl ?? null);
                this.writeStep(next);
                this._cdr.markForCheck();
            },
            error: () => {
                this.requiresBackSide = false;
                this.writeStep(next);
                this._cdr.markForCheck();
            },
        });
    }

    get selectedTemplateFields(): DocumentTypeField[] {
        const tpl = this._scanService.selectedPromptTemplate();
        if (!tpl?.fields) return [];
        return tpl.fields.filter((f) => f.page === 0);
    }

    get selectedTemplateBackFields(): DocumentTypeField[] {
        const tpl = this._scanService.selectedPromptTemplate();
        if (!tpl?.fields) return [];
        return tpl.fields.filter((f) => f.page === 1);
    }

    /**
     * Opens the field editor for an owned type, or starts a copy of a Verifik type.
     */
    changeSelectedFields(): void {
        const documentType = this.selectedDocType();
        if (!documentType) return;
        if (documentType.client) {
            this.editDocumentType(documentType);
            return;
        }
        this.useMyFields(documentType);
    }

    /**
     * Opens the SmartCheck step for an owned type, or starts a copy when the type is shared.
     */
    connectGovernmentCheck(): void {
        const documentType = this.selectedDocType();
        if (!documentType) return;
        if (documentType.client) {
            this._router.navigate(['/smart-enroll/smart-scan/document-type', documentType._id], {
                queryParams: { step: 'smartCheck' },
            });
            return;
        }
        this.useMyFields(documentType);
    }

    proceedToUpload() {
        this.writeStep('upload');
    }

    backToSelect() {
        this.restoreSelectStep();
    }

    backToPreview() {
        this.writeStep('preview');
    }

    scanSimilar() {
        if (this.frontUrl) URL.revokeObjectURL(this.frontUrl);
        if (this.backUrl) URL.revokeObjectURL(this.backUrl);
        this.frontFile = null;
        this.frontUrl = null;
        this.backFile = null;
        this.backUrl = null;
        this._scanService.scanResult.set(null);
        this._scanService.selectedDocumentType.set(null);
        this._scanService.selectedPromptTemplate.set(null);
        this.showRawJson = false;

        this.restoreSelectStep();
    }

    triggerFrontInput() {
        this.frontInput?.nativeElement?.click();
    }

    triggerBackInput() {
        this.backInput?.nativeElement?.click();
    }

    onFrontSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (file) this.loadFrontFile(file);
        input.value = '';
    }

    onBackSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (file) this.loadBackFile(file);
        input.value = '';
    }

    onDropFront(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer?.files?.[0];
        if (file) this.loadFrontFile(file);
    }

    onDropBack(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer?.files?.[0];
        if (file) this.loadBackFile(file);
    }

    onDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    loadFrontFile(file: File) {
        if (!file.type.startsWith('image/')) return;
        if (this.frontUrl) URL.revokeObjectURL(this.frontUrl);
        this.frontFile = file;
        this.frontUrl = URL.createObjectURL(file);
        this._cdr.markForCheck();
    }

    loadBackFile(file: File) {
        if (!file.type.startsWith('image/')) return;
        if (this.backUrl) URL.revokeObjectURL(this.backUrl);
        this.backFile = file;
        this.backUrl = URL.createObjectURL(file);
        this._cdr.markForCheck();
    }

    fileToBase64(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    async scanDocument() {
        const docType = this.selectedDocType();
        if (!docType || !this.frontFile) return;

        this.errorMessage = null;
        const image = await this.fileToBase64(this.frontFile);
        const backImage = this.backFile ? await this.fileToBase64(this.backFile) : undefined;

        const templateId = this._scanService.selectedPromptTemplate()?._id;
        this._scanService.scanDocument(docType.code, image, backImage, templateId).subscribe({
            next: () => {
                this.writeStep('results', true);
                const cls = this.getClassification();
                this.showClassificationReason = cls ? !cls.isMatch : false;
                this._cdr.markForCheck();
            },
            error: (err) => {
                this.errorMessage = err?.error?.message || err?.message || 'Scan failed';
                this._cdr.markForCheck();
            },
        });
    }

    reset() {
        if (this.frontUrl) URL.revokeObjectURL(this.frontUrl);
        if (this.backUrl) URL.revokeObjectURL(this.backUrl);
        this._scanService.resetScanState();
        this.frontFile = null;
        this.frontUrl = null;
        this.backFile = null;
        this.backUrl = null;
        this.clearCountrySelection();
        this.lastCountry = '';
        this.lastCategory = '';
        this.lastSearchQuery = '';
        this.showRawJson = false;
        this.writeStep('select');
        this._cdr.markForCheck();
    }

    goBack(): void {
        const navigationId = window.history.state?.navigationId;
        if (typeof navigationId === 'number' && navigationId > 1) {
            this._location.back();
            return;
        }
        this._router.navigate(['/smart-enroll/smart-scan/list']);
    }

    goToList() {
        this._router.navigate(['/smart-enroll/smart-scan/list']);
    }

    getExtractionFields(): Array<{ key: string; value: unknown }> {
        const extraction = this.scanResult()?.OCRExtraction;
        if (!extraction || typeof extraction !== 'object') return [];
        return Object.entries(extraction)
            .filter(([k]) => k !== 'documentClassification' && k !== 'smartCheck' && !k.startsWith('_'))
            .map(([key, value]) => ({ key, value }));
    }

    extractionSections(): Array<{ id: string; labelKey: string; fields: Array<{ key: string; value: unknown }> }> {
        const rows = this.getExtractionFields();
        const { front, back } = this.sideKeys();
        if (!front.size && !back.size) return [{ id: 'all', labelKey: '', fields: rows }];

        return [
            { id: 'front', labelKey: 'smartScan.frontPhotoTitle', fields: rows.filter((row) => front.has(row.key)) },
            {
                id: 'back',
                labelKey: 'smartScan.backPhotoTitle',
                fields: this.requiresBackSide ? rows.filter((row) => back.has(row.key)) : [],
            },
            {
                id: 'other',
                labelKey: 'smartScan.otherFields',
                fields: rows.filter((row) => !front.has(row.key) && !back.has(row.key)),
            },
        ];
    }

    private sideKeys(): { front: Set<string>; back: Set<string> } {
        const mapping = this.scanResult()?.fieldMapping;
        if (mapping?.front || mapping?.back) {
            return {
                front: new Set(Object.keys(mapping.front || {})),
                back: new Set(Object.keys(mapping.back || {})),
            };
        }

        return {
            front: new Set(this.selectedTemplateFields.map((field) => field.mapKey).filter(Boolean)),
            back: new Set(this.selectedTemplateBackFields.map((field) => field.mapKey).filter(Boolean)),
        };
    }

    get smartCheck(): SmartCheckResult | null {
        return this.scanResult()?.smartCheck ?? null;
    }

    getClassification(): DocumentClassification | null {
        const extraction = this.scanResult()?.OCRExtraction as { documentClassification?: DocumentClassification } | undefined;
        return extraction?.documentClassification ?? null;
    }

    get confidencePercent(): number {
        const cls = this.getClassification();
        return Math.round((cls?.confidence ?? 0) * 100);
    }

    canOpenFlowStep(stepId: ScanToolStep): boolean {
        if (stepId === 'select') return true;
        if (stepId === 'preview' || stepId === 'upload') return Boolean(this.selectedDocType());
        return Boolean(this.scanResult());
    }

    /**
     * Moves to a step the scan has already reached.
     */
    goToFlowStep(stepId: ScanToolStep): void {
        if (stepId === this.step || !this.canOpenFlowStep(stepId)) return;
        if (stepId === 'select') {
            this.restoreSelectStep();
            return;
        }
        this.writeStep(stepId);
    }

    isFlowStepCurrent(stepId: ScanToolStep): boolean {
        return this.step === stepId;
    }

    isFlowStepDone(stepId: ScanToolStep): boolean {
        const currentIdx = this._flowStepOrder.indexOf(this.step);
        const stepIdx = this._flowStepOrder.indexOf(stepId);
        return stepIdx >= 0 && stepIdx < currentIdx;
    }

    /**
     * Keeps ?step= aligned with the visible scan step. Reading it never starts a scan.
     */
    private bindStepToUrl() {
        this._route.queryParamMap.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((params) => {
            this.syncStepFromParam(params.get('step'));
        });
    }

    private syncStepFromParam(raw: string | null) {
        const requested = raw ? this.stepFromQuery(raw) : null;
        if (!requested) {
            this.writeStep('select', true);
            return;
        }
        if (!this.canOpenFlowStep(requested)) {
            if (this.requestedValidationId && requested === 'results') {
                this.pendingStep = 'results';
                return;
            }
            if (this.requestedCode && (requested === 'preview' || requested === 'upload')) {
                this.pendingStep = requested;
                return;
            }
            this.writeStep(this.fallbackStep(), true);
            return;
        }
        this.pendingStep = null;
        if (raw !== this.queryForStep(requested)) {
            this.writeStep(requested, true);
            return;
        }
        this.applyStep(requested);
    }

    private stepFromQuery(value: string): ScanToolStep | null {
        if (value === 'select') return 'select';
        if (value === 'review' || value === 'preview') return 'preview';
        if (value === 'upload') return 'upload';
        if (value === 'results') return 'results';
        return null;
    }

    private queryForStep(step: ScanToolStep): string {
        return step === 'preview' ? 'review' : step;
    }

    private fallbackStep(): ScanToolStep {
        if (this.scanResult()) return 'results';
        if (this.selectedDocType()) return 'preview';
        return 'select';
    }

    private writeStep(step: ScanToolStep, replaceUrl = false) {
        if (!this.canOpenFlowStep(step) && step !== 'select') return;
        const queryStep = this.queryForStep(step);
        const validationId = step === 'results' ? this.scanResult()?._id || null : null;
        this.applyStep(step);
        const currentParams = this._route.snapshot.queryParamMap;
        if (
            currentParams.get('step') === queryStep &&
            (currentParams.get('documentValidation') || null) === validationId
        ) {
            return;
        }
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                step: queryStep,
                documentValidation: validationId,
            },
            queryParamsHandling: 'merge',
            replaceUrl,
        });
    }

    private applyStep(step: ScanToolStep) {
        if (step === 'select' && this.step !== 'select') {
            this.selectedCountry = this.lastCountry;
            this.selectedCategory = this.lastCategory;
            this.searchQuery = this.lastSearchQuery;
            if (this.selectedCountry && this.documentTypes().length === 0) {
                this.loadDocumentTypes(this.selectedCountry);
            }
        }
        if (this.step === step) return;
        this.step = step;
        this._cdr.markForCheck();
    }
}
