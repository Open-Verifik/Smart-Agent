import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import {
    DEFAULT_FACE_SEARCH_MIN_SCORE,
    DEFAULT_LIVENESS_MIN_SCORE,
    FACE_SEARCH_SCORE_PRESETS,
    LIVENESS_SCORE_PRESETS,
    type ApiErrorResponse,
} from '../../services/biometrics-demo.types';
import {
    filesToImagesAndPreviews,
    isPersonAlreadySetError,
    removeGalleryImageAt,
} from '../../services/biometrics-demo.util';
import { CreatePersonAlreadyExistsResultComponent } from '../../shared/create-person-already-exists-result.component';
import { DemoCapturePanelComponent, type CaptureMethod } from '../../shared/demo-capture-panel.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoScoreSliderComponent } from '../../shared/demo-score-slider.component';
import { DemoSearchModeToggleComponent } from '../../shared/demo-search-mode-toggle.component';
import { DemoStageCardComponent } from '../../shared/demo-stage-card.component';
import { DemoStageHeroComponent } from '../../shared/demo-stage-hero.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';
import { DemoResultActionsComponent } from '../../shared/demo-result-actions.component';
import { DemoSandboxResultBannerComponent } from '../../shared/demo-sandbox-result-banner.component';
import { CountryService } from 'app/core/services/country.service';
import {
    NationalitySelectComponent,
    isCatalogNationality,
    nationalityDisplayName,
    normalizeNationalityCode,
} from '../../../shared/nationality-select.component';

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
        DemoStageHeroComponent,
        DemoStageCardComponent,
        DemoCapturePanelComponent,
        DemoScoreSliderComponent,
        DemoSearchModeToggleComponent,
        DemoRelatedDocsSectionComponent,
        CreatePersonAlreadyExistsResultComponent,
        DemoResultActionsComponent,
        DemoSandboxResultBannerComponent,
        NationalitySelectComponent,
    ],
    templateUrl: './create-person-with-liveness-demo.component.html',
    styleUrl: '../../styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePersonWithLivenessDemoComponent implements OnInit {
    readonly livenessPresets = LIVENESS_SCORE_PRESETS;
    readonly searchPresets = FACE_SEARCH_SCORE_PRESETS;

    private _api = inject(BiometricsDemoApiService);
    private _router = inject(Router);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);
    private _countries = inject(CountryService);

    authChecked = false;
    step: Step = 'form';
    captureMode: CaptureMethod = 'upload';
    name = '';
    gender: 'M' | 'F' = 'M';
    dob = '';
    collectionId = '';
    nationality = '';
    livenessMinScore = DEFAULT_LIVENESS_MIN_SCORE;
    minScore = DEFAULT_FACE_SEARCH_MIN_SCORE;
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
    min_score: 0.65,
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

    get nationalityChip(): string {
        return nationalityDisplayName(
            this.nationality,
            this._countries.countries,
            (key) => this._transloco.translate(key),
            this._transloco.translate('smartEnrollDemos.personForm.nationalityNotSet'),
        );
    }

    get nationalityBlocked(): boolean {
        return !isCatalogNationality(this.nationality, this._countries.countries);
    }

    get showApiReference(): boolean {
        return this.step !== 'result' && this.step !== 'conflict';
    }

    onFaceCapture(event: { dataUrl: string; base64: string }): void {
        this.images = [...this.images, event.base64];
        this.previews = [...this.previews, event.dataUrl];
        this._cdr.markForCheck();
    }

    async onFilesPicked(files: File[]): Promise<void> {
        const added = await filesToImagesAndPreviews(files);
        if (!added.images.length) return;
        this.images = [...this.images, ...added.images];
        this.previews = [...this.previews, ...added.previews];
        this._cdr.markForCheck();
    }

    onRemovePreview(index: number): void {
        const next = removeGalleryImageAt(this.images, this.previews, index);
        this.images = next.images;
        this.previews = next.previews;
        this._cdr.markForCheck();
    }

    handleSubmit(): void {
        if (!this.images.length || this.nationalityBlocked) return;

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
                nationality: normalizeNationalityCode(this.nationality) || undefined,
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
        this.livenessMinScore = DEFAULT_LIVENESS_MIN_SCORE;
        this.minScore = DEFAULT_FACE_SEARCH_MIN_SCORE;
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
