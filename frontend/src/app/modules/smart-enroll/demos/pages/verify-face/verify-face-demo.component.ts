import { CommonModule, JsonPipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import type { ApiErrorResponse } from '../../services/biometrics-demo.types';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import { fileToBase64 } from '../../services/biometrics-demo.util';
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

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/biometrics/compare`,
    `${DOCS_BASE}/biometrics/compare-live`,
    `${DOCS_BASE}/biometrics/compare-with-liveness`,
    `${DOCS_BASE}/biometrics/search`,
    `${DOCS_BASE}/biometrics/liveness`,
] as const;

@Component({
    selector: 'app-verify-face-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        JsonPipe,
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
    ],
    templateUrl: './verify-face-demo.component.html',
    styleUrl: '../../styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyFaceDemoComponent implements OnInit {
    @ViewChild('fileInput') fileInput?: ElementRef<HTMLInputElement>;

    private _api = inject(BiometricsDemoApiService);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    authChecked = false;
    personId = '';
    images: string[] = [];
    previews: string[] = [];
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

    get showApiReference(): boolean {
        return this.result === null;
    }

    onFaceCapture(event: { dataUrl: string; base64: string }): void {
        this.images = [...this.images, event.base64];
        this.previews = [...this.previews, event.dataUrl];
        this._cdr.markForCheck();
    }

    triggerFilePicker(): void {
        this.fileInput?.nativeElement.click();
    }

    async onFilesSelected(event: Event): Promise<void> {
        const input = event.target as HTMLInputElement;
        const files = input.files;
        if (!files?.length) return;

        const fileList = Array.from(files);
        const b64s = await Promise.all(fileList.map((f) => fileToBase64(f)));
        const urls = fileList.map((f) => URL.createObjectURL(f));
        this.images = [...this.images, ...b64s];
        this.previews = [...this.previews, ...urls];
        input.value = '';
        this._cdr.markForCheck();
    }

    handleVerify(): void {
        if (!this._api.ensureAuthenticated() || !this.personId || !this.images.length) return;

        this.loading = true;
        this.error = null;
        this.result = null;
        this._cdr.markForCheck();

        this._api
            .verifyFace({
                id: this.personId,
                images: this.images,
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
        this.personId = '';
        this.collectionId = '';
        this.images = [];
        this.previews = [];
        this.result = null;
        this.error = null;
        this._cdr.markForCheck();
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.verifyFace.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.verifyFace.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.verifyFace.relatedDocs.${i}.badge`),
            badgeMuted: false,
        }));
    }
}
