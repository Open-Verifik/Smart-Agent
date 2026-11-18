import { CommonModule, JsonPipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    DEFAULT_FACE_COMPARE_MIN_SCORE,
    FACE_COMPARE_SCORE_PRESETS,
    type ApiErrorResponse,
} from '../../services/biometrics-demo.types';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import { filesToImagesAndPreviews, removeGalleryImageAt } from '../../services/biometrics-demo.util';
import { DemoCapturePanelComponent, type CaptureMethod } from '../../shared/demo-capture-panel.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoScoreSliderComponent } from '../../shared/demo-score-slider.component';
import { DemoSearchModeToggleComponent } from '../../shared/demo-search-mode-toggle.component';
import { DemoStageCardComponent } from '../../shared/demo-stage-card.component';
import { DemoStageHeroComponent } from '../../shared/demo-stage-hero.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';

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
        DemoStageHeroComponent,
        DemoStageCardComponent,
        DemoCapturePanelComponent,
        DemoScoreSliderComponent,
        DemoSearchModeToggleComponent,
        DemoRelatedDocsSectionComponent,
    ],
    templateUrl: './verify-face-demo.component.html',
    styleUrl: '../../styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyFaceDemoComponent implements OnInit {
    readonly scorePresets = FACE_COMPARE_SCORE_PRESETS;

    private _api = inject(BiometricsDemoApiService);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    authChecked = false;
    captureMode: CaptureMethod = 'upload';
    personId = '';
    images: string[] = [];
    previews: string[] = [];
    minScore = DEFAULT_FACE_COMPARE_MIN_SCORE;
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
