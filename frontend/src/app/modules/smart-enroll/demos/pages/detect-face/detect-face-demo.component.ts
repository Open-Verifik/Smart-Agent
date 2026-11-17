import { CommonModule, JsonPipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import type { ApiErrorResponse } from '../../services/biometrics-demo.types';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import { fileToBase64 } from '../../services/biometrics-demo.util';
import { DemoCapturePanelComponent, type CaptureMethod } from '../../shared/demo-capture-panel.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';
import { DemoStageHeroComponent } from '../../shared/demo-stage-hero.component';

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/biometrics/search`,
    `${DOCS_BASE}/biometrics/search-live-face`,
    `${DOCS_BASE}/biometrics/search-active-user`,
    `${DOCS_BASE}/biometrics/liveness`,
    `${DOCS_BASE}/biometrics/compare`,
    `${DOCS_BASE}/biometrics/compare-with-liveness`,
] as const;

@Component({
    selector: 'app-detect-face-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        JsonPipe,
        TranslocoModule,
        DemoPageShellComponent,
        DemoStageHeroComponent,
        DemoCapturePanelComponent,
        DemoRelatedDocsSectionComponent,
    ],
    templateUrl: './detect-face-demo.component.html',
    styleUrl: '../../styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetectFaceDemoComponent implements OnInit, OnDestroy {
    readonly scorePresets = [0.6, 0.75, 0.85] as const;
    readonly searchModes = ['FAST', 'ACCURATE'] as const;

    private _api = inject(BiometricsDemoApiService);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);
    private _previewHighlightTimeout: ReturnType<typeof setTimeout> | null = null;

    authChecked = false;
    captureMode: CaptureMethod = 'upload';
    image: string | null = null;
    preview: string | null = null;
    previewHighlighted = false;
    minScore = 0.75;
    searchMode: 'FAST' | 'ACCURATE' = 'FAST';
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

    get detectedFaces(): Record<string, unknown>[] {
        if (!this.result) return [];
        const data = this.result['data'];
        const rawFaces =
            (data && typeof data === 'object' && Array.isArray((data as Record<string, unknown>)['faces'])
                ? (data as Record<string, unknown>)['faces']
                : null) ??
            (Array.isArray(this.result['faces']) ? this.result['faces'] : null) ??
            (Array.isArray(data) ? data : []);
        return (rawFaces as unknown[]).filter(
            (f): f is Record<string, unknown> => Boolean(f && typeof f === 'object')
        );
    }

    faceScore(face: Record<string, unknown>): string | null {
        const val = face['score'] ?? face['confidence'] ?? face['detScore'];
        return typeof val === 'number' && Number.isFinite(val) ? `${(val * 100).toFixed(1)}%` : null;
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
        this.error = null;
        this.pulsePreview();
    }

    async onFilePicked(file: File): Promise<void> {
        this.image = await fileToBase64(file);
        this.preview = URL.createObjectURL(file);
        this.error = null;
        this.pulsePreview();
        this._cdr.markForCheck();
    }

    setSearchMode(mode: 'FAST' | 'ACCURATE'): void {
        this.searchMode = mode;
        this._cdr.markForCheck();
    }

    handleDetect(): void {
        if (!this._api.ensureAuthenticated() || !this.image) return;

        this.loading = true;
        this.error = null;
        this.result = null;
        this._cdr.markForCheck();

        this._api
            .detectFace({ image: this.image, min_score: this.minScore, search_mode: this.searchMode })
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
            title: this._transloco.translate(`smartEnrollDemos.detectFace.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.detectFace.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.detectFace.relatedDocs.${i}.badge`),
            badgeMuted: false,
        }));
    }
}
