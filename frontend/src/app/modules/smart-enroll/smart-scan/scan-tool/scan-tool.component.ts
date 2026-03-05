import { CommonModule } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    inject,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { SmartScanService } from '../smart-scan.service';
import type { DocumentType, DocumentClassification, DocumentTypeField } from '../smart-scan.types';

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
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './scan-tool.component.html',
    styleUrls: ['./scan-tool.component.scss'],
})
export class ScanToolComponent implements OnInit {
    @ViewChild('frontInput') frontInput!: ElementRef<HTMLInputElement>;
    @ViewChild('backInput') backInput!: ElementRef<HTMLInputElement>;

    private _scanService = inject(SmartScanService);
    private _cdr = inject(ChangeDetectorRef);
    private _router = inject(Router);
    private _transloco = inject(TranslocoService);

    step: ScanToolStep = 'select';

    selectedCountry = '';
    searchQuery = '';
    selectedCategory = '';
    countries: string[] = [];
    categories: string[] = [];
    flippedCardId: string | null = null;

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

    ngOnInit() {
        this._scanService.resetScanState();
        this._scanService.getDocumentTypes().subscribe({
            next: () => {
                const types = this._scanService.documentTypes();
                this.countries = [...new Set(types.map((t) => t.country).filter(Boolean))].sort();
                this.categories = [...new Set(types.map((t) => t.category).filter(Boolean))].sort();
                this._cdr.markForCheck();
            },
            error: () => {
                this.errorMessage = 'Failed to load document types';
                this._cdr.markForCheck();
            },
        });
    }

    getFlag(country: string): string {
        const key = country?.toLowerCase().replace(/_/g, ' ');
        return COUNTRY_FLAGS[key ?? ''] ?? '🏳️';
    }

    getCountryLabel(country: string): string {
        if (!country) return '';
        const key = `smartScan.countries.${country}`;
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
        this.selectedCountry = this.selectedCountry === country ? '' : country;
    }

    toggleCategory(category: string) {
        this.selectedCategory = this.selectedCategory === category ? '' : category;
    }

    get filteredDocumentTypes(): DocumentType[] {
        let types = this.documentTypes();

        if (this.selectedCountry) {
            types = types.filter((t) => t.country === this.selectedCountry);
        }
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
        this.selectedCountry = this.lastCountry;
        this.selectedCategory = this.lastCategory;
        this.searchQuery = this.lastSearchQuery;
        this.step = 'select';
        this._cdr.markForCheck();
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

        this.selectedCountry = this.lastCountry;
        this.selectedCategory = this.lastCategory;
        this.searchQuery = this.lastSearchQuery;
        this.step = 'select';
        this._cdr.markForCheck();
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

        this._scanService.scanDocument(docType.code, image, backImage).subscribe({
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
        this.selectedCountry = '';
        this.selectedCategory = '';
        this.searchQuery = '';
        this.showRawJson = false;
        this._cdr.markForCheck();
    }

    goToList() {
        this._router.navigate(['/smart-enroll/smart-scan/list']);
    }

    getExtractionFields(): Array<{ key: string; value: unknown }> {
        const extraction = this.scanResult()?.OCRExtraction;
        if (!extraction || typeof extraction !== 'object') return [];
        return Object.entries(extraction)
            .filter(([k]) => k !== 'documentClassification' && !k.startsWith('_'))
            .map(([key, value]) => ({ key, value }));
    }

    getClassification(): DocumentClassification | null {
        const extraction = this.scanResult()?.OCRExtraction as { documentClassification?: DocumentClassification } | undefined;
        return extraction?.documentClassification ?? null;
    }

    get confidencePercent(): number {
        const cls = this.getClassification();
        return Math.round((cls?.confidence ?? 0) * 100);
    }
}
