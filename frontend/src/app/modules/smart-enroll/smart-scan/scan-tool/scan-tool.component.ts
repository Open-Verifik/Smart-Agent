import { CommonModule, Location } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    inject,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subscription } from 'rxjs';
import { SmartScanService } from '../smart-scan.service';
import type { DocumentType, DocumentClassification, DocumentTypeField, SmartCheckResult } from '../smart-scan.types';

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
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatChipsModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        TranslocoModule,
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

    step: ScanToolStep = 'select';

    selectedCountry = '';
    searchQuery = '';
    selectedCategory = '';
    countries: string[] = [];
    categories: string[] = [];
    documentTypesLoading = false;
    showMine = false;
    flippedCardId: string | null = null;

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
        this._scanService.resetScanState();
        this._scanService.documentTypes.set([]);
        const requestedCountry = this._route.snapshot.queryParamMap.get('country') || '';
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
        this.selectedCategory = '';
        this.searchQuery = '';
        this.flippedCardId = null;
        this.loadDocumentTypes(country);
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
        this.selectedCountry = this.lastCountry;
        this.selectedCategory = this.lastCategory;
        this.searchQuery = this.lastSearchQuery;
        this.step = 'select';

        if (this.selectedCountry && this.documentTypes().length === 0) {
            this.loadDocumentTypes(this.selectedCountry);
        }

        this._cdr.markForCheck();
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
                this.step = 'preview';
                this._cdr.markForCheck();
            },
            error: () => {
                this.requiresBackSide = false;
                this.step = 'preview';
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

    proceedToUpload() {
        this.step = 'upload';
    }

    backToSelect() {
        this.restoreSelectStep();
    }

    backToPreview() {
        this.step = 'preview';
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
                this.step = 'results';
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
        this.step = 'select';
        this.frontFile = null;
        this.frontUrl = null;
        this.backFile = null;
        this.backUrl = null;
        this.clearCountrySelection();
        this.showRawJson = false;
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
            { id: 'front', labelKey: 'smartScan.frontSideFields', fields: rows.filter((row) => front.has(row.key)) },
            {
                id: 'back',
                labelKey: 'smartScan.backSideFields',
                fields: rows.filter((row) => back.has(row.key) && !front.has(row.key)),
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

    isFlowStepCurrent(stepId: ScanToolStep): boolean {
        return this.step === stepId;
    }

    isFlowStepDone(stepId: ScanToolStep): boolean {
        const currentIdx = this._flowStepOrder.indexOf(this.step);
        const stepIdx = this._flowStepOrder.indexOf(stepId);
        return stepIdx >= 0 && stepIdx < currentIdx;
    }
}
