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
import {
    DEFAULT_FACE_SEARCH_MIN_SCORE,
    FACE_SEARCH_SCORE_PRESETS,
    type ApiErrorResponse,
    type FaceCollectionListItem,
} from '../../services/biometrics-demo.types';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import { filesToImagesAndPreviews, removeGalleryImageAt } from '../../services/biometrics-demo.util';
import { CollectionMultiSelectComponent } from '../../shared/collection-multi-select.component';
import { DemoCapturePanelComponent, type CaptureMethod } from '../../shared/demo-capture-panel.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoScoreSliderComponent } from '../../shared/demo-score-slider.component';
import { DemoSearchModeToggleComponent } from '../../shared/demo-search-mode-toggle.component';
import { DemoStageCardComponent } from '../../shared/demo-stage-card.component';
import { DemoStageHeroComponent } from '../../shared/demo-stage-hero.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';
import { DemoResultActionsComponent } from '../../shared/demo-result-actions.component';
import { SearchPersonResultComponent } from '../../shared/search-person-result.component';

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/resources/the-person-object`,
    `${DOCS_BASE}/resources/list-all-persons`,
    `${DOCS_BASE}/resources/retrieve-a-person`,
    `${DOCS_BASE}/resources/persons/update-a-person`,
    `${DOCS_BASE}/resources/persons/delete-a-person`,
    `${DOCS_BASE}/biometrics/search`,
] as const;

const RELATED_DOC_BADGE_MUTED = [true, false, false, false, false, false] as const;

@Component({
    selector: 'app-search-person-demo',
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
        SearchPersonResultComponent,
        CollectionMultiSelectComponent,
        DemoResultActionsComponent,
    ],
    templateUrl: './search-person-demo.component.html',
    styleUrl: '../../styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPersonDemoComponent implements OnInit {
    readonly scorePresets = FACE_SEARCH_SCORE_PRESETS;

    private _api = inject(BiometricsDemoApiService);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);
    private _router = inject(Router);

    authChecked = false;
    captureMode: CaptureMethod = 'upload';
    images: string[] = [];
    previews: string[] = [];
    minScore = DEFAULT_FACE_SEARCH_MIN_SCORE;
    searchMode: 'FAST' | 'ACCURATE' = 'FAST';
    collectionItems: FaceCollectionListItem[] = [];
    collectionsLoading = false;
    collectionsError: string | null = null;
    selectedCollectionIds: string[] = [];
    noCollectionsEmptySlot = '';
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
        this.noCollectionsEmptySlot = this.buildNoCollectionsEmptySlot();
        this.loadCollections();
    }

    get showApiReference(): boolean {
        return this.result === null;
    }

    appendCapturedImage(preview: string, b64: string): void {
        this.images = [...this.images, b64];
        this.previews = [...this.previews, preview];
        this._cdr.markForCheck();
    }

    onFaceCapture(event: { dataUrl: string; base64: string }): void {
        this.appendCapturedImage(event.dataUrl, event.base64);
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

    handleSearch(): void {
        if (!this._api.ensureAuthenticated() || !this.images.length) return;

        this.loading = true;
        this.error = null;
        this.result = null;
        this._cdr.markForCheck();

        const selectedId = this.selectedCollectionIds[0];
        const selectedCollection = this.collectionItems.find((c) => c._id === selectedId);
        const collectionCode = selectedCollection ? selectedCollection.code : undefined;

        this._api
            .searchPersons({
                images: this.images,
                min_score: this.minScore,
                search_mode: this.searchMode,
                collection_id: collectionCode || undefined,
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
        this.images = [];
        this.previews = [];
        this.selectedCollectionIds = [];
        this.result = null;
        this.error = null;
        this._cdr.markForCheck();
    }

    backToDemos(): void {
        void this._router.navigate(['/smart-enroll/demos']);
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

    private buildNoCollectionsEmptySlot(): string {
        const lead = this._transloco.translate('smartEnrollDemos.createPerson.noCollectionsLead');
        const cta = this._transloco.translate('smartEnrollDemos.createPerson.noCollectionsCta');
        const tail = this._transloco.translate('smartEnrollDemos.createPerson.noCollectionsTail');
        return `${lead} <a href="/smart-enroll/demos/create-collection" class="text-primary font-semibold underline underline-offset-2">${cta}</a> ${tail}`;
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.searchPerson.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.searchPerson.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.searchPerson.relatedDocs.${i}.badge`),
            badgeMuted: RELATED_DOC_BADGE_MUTED[i],
        }));
    }
}
