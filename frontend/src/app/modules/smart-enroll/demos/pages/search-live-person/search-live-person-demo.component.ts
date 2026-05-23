import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import type { ApiErrorResponse } from '../../services/biometrics-demo.types';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import { fileToBase64, getDemoOs } from '../../services/biometrics-demo.util';
import { DemoCaptureOptionHeadingComponent } from '../../shared/demo-capture-option-heading.component';
import { DemoChooseOneCalloutComponent } from '../../shared/demo-choose-one-callout.component';
import { DemoOrDividerComponent } from '../../shared/demo-or-divider.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoRasterImageComponent } from '../../shared/demo-raster-image.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';
import { DemoScannerShellComponent } from '../../shared/demo-scanner-shell.component';
import { DemoUploadImageButtonComponent } from '../../shared/demo-upload-image-button.component';
import { FaceGuidedCameraComponent } from '../../shared/face-guided-camera.component';
import { SearchLivePersonResultComponent } from '../../shared/search-live-person-result.component';

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/resources/the-person-object`,
    `${DOCS_BASE}/resources/list-all-persons`,
    `${DOCS_BASE}/resources/retrieve-a-person`,
    `${DOCS_BASE}/resources/persons/update-a-person`,
    `${DOCS_BASE}/resources/persons/delete-a-person`,
    `${DOCS_BASE}/biometrics/search-live-face`,
] as const;

const RELATED_DOC_BADGE_MUTED = [true, false, false, false, false, false] as const;

@Component({
    selector: 'app-search-live-person-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoRelatedDocsSectionComponent,
        DemoChooseOneCalloutComponent,
        DemoCaptureOptionHeadingComponent,
        DemoOrDividerComponent,
        DemoScannerShellComponent,
        DemoUploadImageButtonComponent,
        DemoRasterImageComponent,
        FaceGuidedCameraComponent,
        SearchLivePersonResultComponent,
    ],
    templateUrl: './search-live-person-demo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLivePersonDemoComponent implements OnInit, OnDestroy {
    @ViewChild('fileInput') fileInput?: ElementRef<HTMLInputElement>;

    private _api = inject(BiometricsDemoApiService);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);
    private _previewHighlightTimeout: ReturnType<typeof setTimeout> | null = null;

    authChecked = false;
    image: string | null = null;
    preview: string | null = null;
    previewHighlighted = false;
    livenessMinScore = 0.65;
    minScore = 0.75;
    searchMode: 'FAST' | 'ACCURATE' = 'FAST';
    collectionId = '';
    loading = false;
    result: Record<string, unknown> | null = null;
    error: string | null = null;
    relatedDocs: DemoRelatedDocItem[] = [];

    ngOnInit(): void {
        if (!this._api.ensureAuthenticated()) {
            this.authChecked = true;
            return;
        }
        this.authChecked = true;
        this.relatedDocs = this.buildRelatedDocs();
    }

    ngOnDestroy(): void {
        if (this._previewHighlightTimeout) clearTimeout(this._previewHighlightTimeout);
    }

    get showApiReference(): boolean {
        return this.result === null;
    }

    pulsePreview(): void {
        if (this._previewHighlightTimeout) clearTimeout(this._previewHighlightTimeout);
        this.previewHighlighted = true;
        this._previewHighlightTimeout = setTimeout(() => {
            this.previewHighlighted = false;
            this._previewHighlightTimeout = null;
            this._cdr.markForCheck();
        }, 2200);
        this._cdr.markForCheck();
    }

    onCapture(event: { dataUrl: string; base64: string }): void {
        this.preview = event.dataUrl;
        this.image = event.base64;
        this.pulsePreview();
    }

    triggerFilePicker(): void {
        this.fileInput?.nativeElement.click();
    }

    async onFileSelected(event: Event): Promise<void> {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) return;
        this.image = await fileToBase64(file);
        this.preview = URL.createObjectURL(file);
        this.pulsePreview();
        this._cdr.markForCheck();
    }

    handleSearch(): void {
        if (!this._api.ensureAuthenticated() || !this.image) return;

        this.loading = true;
        this.error = null;
        this.result = null;
        this._cdr.markForCheck();

        this._api
            .searchLivePerson({
                image: this.image,
                os: getDemoOs(),
                liveness_min_score: this.livenessMinScore,
                min_score: this.minScore,
                search_mode: this.searchMode,
                collection_id: this.collectionId || undefined,
            })
            .subscribe({
                next: (data) => {
                    this.result = data as Record<string, unknown>;
                    this.loading = false;
                    this._cdr.markForCheck();
                },
                error: (err: ApiErrorResponse) => {
                    this.error = err.error ?? err.message ?? 'Request failed';
                    this.loading = false;
                    this._cdr.markForCheck();
                },
            });
    }

    reset(): void {
        if (this._previewHighlightTimeout) {
            clearTimeout(this._previewHighlightTimeout);
            this._previewHighlightTimeout = null;
        }
        this.image = null;
        this.preview = null;
        this.result = null;
        this.error = null;
        this.previewHighlighted = false;
        this._cdr.markForCheck();
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.searchLivePerson.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.searchLivePerson.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.searchLivePerson.relatedDocs.${i}.badge`),
            badgeMuted: RELATED_DOC_BADGE_MUTED[i],
        }));
    }
}
