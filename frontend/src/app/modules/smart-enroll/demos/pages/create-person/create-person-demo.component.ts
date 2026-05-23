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
import type { ApiErrorResponse, FaceCollectionListItem } from '../../services/biometrics-demo.types';
import { fileToBase64, isPersonAlreadySetError } from '../../services/biometrics-demo.util';
import { CollectionMultiSelectComponent } from '../../shared/collection-multi-select.component';
import { CreatePersonAlreadyExistsResultComponent } from '../../shared/create-person-already-exists-result.component';
import { CreatePersonResultComponent } from '../../shared/create-person-result.component';
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
    `${DOCS_BASE}/resources/the-person-object`,
    `${DOCS_BASE}/resources/list-all-persons`,
    `${DOCS_BASE}/resources/retrieve-a-person`,
    `${DOCS_BASE}/resources/persons/update-a-person`,
    `${DOCS_BASE}/resources/persons/delete-a-person`,
    '/smart-enroll/demos/update-person',
    '/smart-enroll/demos/delete-person',
] as const;

const RELATED_DOC_BADGE_MUTED = [true, false, false, false, false, false, false] as const;

type Step = 'form' | 'processing' | 'result' | 'conflict';

@Component({
    selector: 'app-create-person-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoRelatedDocsSectionComponent,
        CollectionMultiSelectComponent,
        CreatePersonResultComponent,
        CreatePersonAlreadyExistsResultComponent,
        DemoCaptureOptionHeadingComponent,
        DemoChooseOneCalloutComponent,
        DemoOrDividerComponent,
        DemoScannerShellComponent,
        DemoUploadImageButtonComponent,
        DemoRasterImageComponent,
        FaceGuidedCameraComponent,
    ],
    templateUrl: './create-person-demo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePersonDemoComponent implements OnInit {
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
    collectionItems: FaceCollectionListItem[] = [];
    collectionsLoading = false;
    collectionsError: string | null = null;
    selectedCollectionIds: string[] = [];
    nationality = '';
    images: string[] = [];
    previews: string[] = [];
    result: Record<string, unknown> | null = null;
    error: string | null = null;
    relatedDocs: DemoRelatedDocItem[] = [];
    noCollectionsEmptySlot = '';

    readonly apiFetchExample = `await fetch("https://api.verifik.co/v2/face-recognition/persons", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: \`Bearer \${accessToken}\`,
  },
  body: JSON.stringify({
    name: "Jane Doe",
    gender: "F",
    date_of_birth: "1990-01-15",
    collections: ["<collectionMongoId>"],
    nationality: "CO",
    images: ["<base64>", "<base64>"],
  }),
});`;

    readonly apiResponseExample = `// 200 OK — example shape
{
  "data": {
    "id": "…",
    "name": "Jane Doe",
    "gender": "F",
    "date_of_birth": "1990-01-15",
    "collections": ["…"],
    "…": "…"
  }
}`;

    ngOnInit(): void {
        if (!this._api.ensureAuthenticated()) {
            this.authChecked = true;
            return;
        }
        this.authChecked = true;
        this.relatedDocs = this.buildRelatedDocs();
        this.noCollectionsEmptySlot = this.buildNoCollectionsEmptySlot();
        this.loadCollections();
    }

    get showApiReference(): boolean {
        return this.step !== 'result' && this.step !== 'conflict';
    }

    loadCollections(): void {
        this.collectionsLoading = true;
        this.collectionsError = null;
        this._cdr.markForCheck();

        this._api.listCollections().subscribe({
            next: (items) => {
                this.collectionItems = items;
                this.collectionsLoading = false;
                this._cdr.markForCheck();
            },
            error: (err: ApiErrorResponse) => {
                this.collectionsError = err.error ?? err.message ?? 'Failed to load collections';
                this.collectionItems = [];
                this.collectionsLoading = false;
                this._cdr.markForCheck();
            },
        });
    }

    appendCapturedImage(preview: string, b64: string): void {
        this.images = [...this.images, b64];
        this.previews = [...this.previews, preview];
        this._cdr.markForCheck();
    }

    onFaceCapture(event: { dataUrl: string; base64: string }): void {
        this.appendCapturedImage(event.dataUrl, event.base64);
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
        if (!this.images.length || !this.selectedCollectionIds.length) return;

        this.step = 'processing';
        this.error = null;
        this._cdr.markForCheck();

        this._api
            .createPerson({
                name: this.name,
                images: this.images,
                gender: this.gender,
                date_of_birth: this.dob,
                collections: this.selectedCollectionIds,
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
        this.selectedCollectionIds = [];
        this.nationality = '';
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

    private buildNoCollectionsEmptySlot(): string {
        const lead = this._transloco.translate('smartEnrollDemos.createPerson.noCollectionsLead');
        const cta = this._transloco.translate('smartEnrollDemos.createPerson.noCollectionsCta');
        const tail = this._transloco.translate('smartEnrollDemos.createPerson.noCollectionsTail');
        return `${lead} <a href="/smart-enroll/demos/create-collection" class="text-primary font-semibold underline underline-offset-2">${cta}</a> ${tail}`;
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.createPerson.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.createPerson.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.createPerson.relatedDocs.${i}.badge`),
            badgeMuted: RELATED_DOC_BADGE_MUTED[i],
        }));
    }
}
