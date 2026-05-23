import { CommonModule } from '@angular/common';
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
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import type { ApiErrorResponse } from '../../services/biometrics-demo.types';
import { fileToBase64, isPersonAlreadySetError } from '../../services/biometrics-demo.util';
import { CreatePersonAlreadyExistsResultComponent } from '../../shared/create-person-already-exists-result.component';
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
import { DemoResultActionsComponent } from '../../shared/demo-result-actions.component';

const DOCS_BASE = 'https://docs.verifik.co';
const DOCS_ES_BASE = 'https://docs.verifik.co/verifik-es';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/resources/the-person-object`,
    `${DOCS_BASE}/resources/list-all-persons`,
    `${DOCS_BASE}/resources/retrieve-a-person`,
    `${DOCS_BASE}/resources/persons/update-a-person`,
    `${DOCS_BASE}/resources/persons/delete-a-person`,
    `${DOCS_BASE}/resources/create-a-person-with-liveness/`,
    '/smart-enroll/demos/update-person',
    '/smart-enroll/demos/delete-person',
] as const;

const RELATED_DOC_BADGE_MUTED = [true, false, false, false, false, false, false, false] as const;

type Step = 'form' | 'processing' | 'result' | 'conflict';

@Component({
    selector: 'app-create-person-with-liveness-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoRelatedDocsSectionComponent,
        CreatePersonAlreadyExistsResultComponent,
        DemoCaptureOptionHeadingComponent,
        DemoChooseOneCalloutComponent,
        DemoOrDividerComponent,
        DemoScannerShellComponent,
        DemoUploadImageButtonComponent,
        DemoRasterImageComponent,
        FaceGuidedCameraComponent,
        DemoResultActionsComponent,
    ],
    templateUrl: './create-person-with-liveness-demo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePersonWithLivenessDemoComponent implements OnInit {
    @ViewChild('fileInput') fileInput?: ElementRef<HTMLInputElement>;

    private _api = inject(BiometricsDemoApiService);
    private _router = inject(Router);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    authChecked = false;
    step: Step = 'form';
    name = '';
    gender: 'M' | 'F' = 'M';
    dob = '';
    collectionId = '';
    nationality = '';
    livenessMinScore = 0.65;
    minScore = 0.8;
    searchMode: 'FAST' | 'ACCURATE' = 'FAST';
    images: string[] = [];
    previews: string[] = [];
    result: Record<string, unknown> | null = null;
    error: string | null = null;
    relatedDocs: DemoRelatedDocItem[] = [];

    readonly apiFetchExample = `await fetch("https://api.verifik.co/v2/face-recognition/persons/search-live-face", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: \`Bearer \${accessToken}\`,
  },
  body: JSON.stringify({
    name: "Jane Doe",
    gender: "F",
    date_of_birth: "1990-01-15",
    collection_id: "<collectionMongoId>",
    liveness_min_score: 0.65,
    min_score: 0.8,
    search_mode: "FAST",
    nationality: "CO",
    images: ["<base64>", "<base64>"],
  }),
});`;

    ngOnInit(): void {
        if (!this._api.ensureAuthenticated()) {
            this.authChecked = true;
            return;
        }
        this.authChecked = true;
        this.relatedDocs = this.buildRelatedDocs();
    }

    get showApiReference(): boolean {
        return this.step !== 'result' && this.step !== 'conflict';
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

    handleSubmit(): void {
        if (!this.images.length) return;

        this.step = 'processing';
        this.error = null;
        this._cdr.markForCheck();

        this._api
            .createPersonWithLiveness({
                name: this.name,
                images: this.images,
                gender: this.gender,
                date_of_birth: this.dob,
                collection_id: this.collectionId,
                liveness_min_score: this.livenessMinScore,
                min_score: this.minScore,
                search_mode: this.searchMode,
                nationality: this.nationality || undefined,
            })
            .subscribe({
                next: (data) => {
                    this.result = data as Record<string, unknown>;
                    this.step = 'result';
                    this._cdr.markForCheck();
                },
                error: (err: ApiErrorResponse) => {
                    if (isPersonAlreadySetError(err)) {
                        this.step = 'conflict';
                        this._cdr.markForCheck();
                        return;
                    }
                    this.error = err.error ?? err.message ?? 'Request failed';
                    this.step = 'form';
                    this._cdr.markForCheck();
                },
            });
    }

    reset(): void {
        this.step = 'form';
        this.name = '';
        this.gender = 'M';
        this.dob = '';
        this.collectionId = '';
        this.nationality = '';
        this.livenessMinScore = 0.65;
        this.minScore = 0.8;
        this.searchMode = 'FAST';
        this.images = [];
        this.previews = [];
        this.result = null;
        this.error = null;
    }

    backToFormFromConflict(): void {
        this.step = 'form';
        this.error = null;
    }

    backToDemos(): void {
        void this._router.navigate(['/smart-enroll/demos']);
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.createPersonWithLiveness.relatedDocs.${i}.title`),
            description: this._transloco.translate(
                `smartEnrollDemos.createPersonWithLiveness.relatedDocs.${i}.description`
            ),
            badge: this._transloco.translate(`smartEnrollDemos.createPersonWithLiveness.relatedDocs.${i}.badge`),
            badgeMuted: RELATED_DOC_BADGE_MUTED[i],
        }));
    }
}
