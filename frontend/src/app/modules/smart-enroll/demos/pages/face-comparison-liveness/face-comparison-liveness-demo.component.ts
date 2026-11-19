import { CommonModule } from '@angular/common';
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
import {
    DEFAULT_COMPARE_WITH_LIVENESS_LIVENESS_FLOOR,
    DEFAULT_FACE_COMPARE_MIN_SCORE,
    type ApiErrorResponse,
    type CompareWithLivenessParsed,
} from '../../services/biometrics-demo.types';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import { fileToBase64, parseCompareWithLivenessResult } from '../../services/biometrics-demo.util';
import { DemoCapturePanelComponent, type CaptureMethod } from '../../shared/demo-capture-panel.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoRasterImageComponent } from '../../shared/demo-raster-image.component';
import { DemoResultActionsComponent } from '../../shared/demo-result-actions.component';
import { DemoSandboxResultBannerComponent } from '../../shared/demo-sandbox-result-banner.component';
import { DemoStageHeroComponent } from '../../shared/demo-stage-hero.component';
import { DemoStepPillsComponent } from '../../shared/demo-step-pills.component';

type Step = 1 | 2 | 3;
type FaceSlot = { preview: string | null; b64: string | null };
type SlotKind = 'source' | 'target';

const emptySlot = (): FaceSlot => ({ preview: null, b64: null });

@Component({
    selector: 'app-face-comparison-liveness-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoStageHeroComponent,
        DemoStepPillsComponent,
        DemoCapturePanelComponent,
        DemoRasterImageComponent,
        DemoResultActionsComponent,
        DemoSandboxResultBannerComponent,
    ],
    templateUrl: './face-comparison-liveness-demo.component.html',
    styleUrl: '../../styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceComparisonLivenessDemoComponent implements OnInit, OnDestroy {
    readonly stepLabels = [
        'smartEnrollDemos.faceComparisonLiveness.stepSource',
        'smartEnrollDemos.faceComparisonLiveness.stepTarget',
        'smartEnrollDemos.faceComparisonLiveness.stepAnalyze',
    ] as const;
    readonly thresholdPresets = [
        { labelKey: 'smartEnrollDemos.faceComparison.presetRelaxed', value: 0.65 },
        { labelKey: 'smartEnrollDemos.faceComparison.presetStandard', value: 0.7 },
        { labelKey: 'smartEnrollDemos.faceComparison.presetBalanced', value: 0.75 },
        { labelKey: 'smartEnrollDemos.faceComparison.presetStrict', value: 0.85 },
    ] as const;

    authChecked = false;
    step: Step = 1;
    captureMode: CaptureMethod = 'upload';
    source: FaceSlot = emptySlot();
    target: FaceSlot = emptySlot();
    isLoading = false;
    result: CompareWithLivenessParsed | null = null;
    error: string | null = null;
    livenessMinScore = DEFAULT_COMPARE_WITH_LIVENESS_LIVENESS_FLOOR;
    compareMinScore = DEFAULT_FACE_COMPARE_MIN_SCORE;
    cropFace = false;
    highlightSlot: SlotKind | null = null;

    private _api = inject(BiometricsDemoApiService);
    private _cdr = inject(ChangeDetectorRef);
    private _transloco = inject(TranslocoService);
    private _highlightTimeout: ReturnType<typeof setTimeout> | null = null;

    ngOnInit(): void {
        if (!this._api.ensureAuthenticated()) {
            this.authChecked = true;
            return;
        }
        this.authChecked = true;
    }

    ngOnDestroy(): void {
        if (this._highlightTimeout) clearTimeout(this._highlightTimeout);
    }

    get currentSlot(): SlotKind {
        return this.step === 1 ? 'source' : 'target';
    }

    selectSlot(which: SlotKind): void {
        this.step = which === 'source' ? 1 : 2;
        this.error = null;
        this.result = null;
        this._cdr.markForCheck();
    }

    clearSlot(which: SlotKind): void {
        if (which === 'source') {
            this.source = emptySlot();
            this.step = 1;
        } else {
            this.target = emptySlot();
            this.step = 2;
        }
        this.result = null;
        this.error = null;
        this._cdr.markForCheck();
    }

    setThresholdPreset(value: number): void {
        this.compareMinScore = value;
        this._cdr.markForCheck();
    }

    pulseSlot(slot: SlotKind): void {
        if (this._highlightTimeout) clearTimeout(this._highlightTimeout);
        this.highlightSlot = slot;
        this._highlightTimeout = setTimeout(() => {
            this.highlightSlot = null;
            this._highlightTimeout = null;
            this._cdr.markForCheck();
        }, 2200);
        this._cdr.markForCheck();
    }

    applyCapturedSlot(which: SlotKind, slot: FaceSlot): void {
        this.pulseSlot(which);
        if (which === 'source') {
            this.source = slot;
            this.step = 2;
            this._cdr.markForCheck();
            return;
        }
        this.target = slot;
        if (this.source.b64 && slot.b64) {
            this.runComparison(this.source.b64, slot.b64);
        }
    }

    onCapture(payload: { dataUrl: string; base64: string }): void {
        this.applyCapturedSlot(this.currentSlot, { preview: payload.dataUrl, b64: payload.base64 });
    }

    async onFilePicked(file: File): Promise<void> {
        const b64 = await fileToBase64(file);
        this.applyCapturedSlot(this.currentSlot, { preview: URL.createObjectURL(file), b64 });
    }

    runComparison(galleryB64: string, probeB64: string): void {
        if (!this._api.ensureAuthenticated()) return;

        this.step = 3;
        this.isLoading = true;
        this.error = null;
        this.result = null;
        this._cdr.markForCheck();

        this._api
            .compareWithLiveness({
                gallery: [galleryB64],
                probe: probeB64,
                liveness_min_score: this.livenessMinScore,
                compare_min_score: this.compareMinScore,
                ...(this.cropFace ? { cropFace: true } : {}),
            })
            .subscribe({
                next: (data) => {
                    this.result = parseCompareWithLivenessResult(data);
                    this.isLoading = false;
                    this._cdr.markForCheck();
                },
                error: (err: ApiErrorResponse) => {
                    this.error = err.error ?? err.message ?? 'Request failed';
                    this.isLoading = false;
                    this._cdr.markForCheck();
                },
            });
    }

    reset(): void {
        if (this._highlightTimeout) {
            clearTimeout(this._highlightTimeout);
            this._highlightTimeout = null;
        }
        this.step = 1;
        this.source = emptySlot();
        this.target = emptySlot();
        this.result = null;
        this.error = null;
        this.highlightSlot = null;
        this.livenessMinScore = DEFAULT_COMPARE_WITH_LIVENESS_LIVENESS_FLOOR;
        this.compareMinScore = DEFAULT_FACE_COMPARE_MIN_SCORE;
        this.cropFace = false;
        this._cdr.markForCheck();
    }

    isVerified(): boolean {
        return Boolean(this.result?.match && this.result?.livenessPassed);
    }

    resultMessage(): string {
        if (!this.result) return '';
        if (this.result.message) return this.result.message;

        const { match, livenessSkipped } = this.result;
        const key = this.isVerified()
            ? 'msgVerified'
            : !match && livenessSkipped
              ? 'msgBelowSkip'
              : !match
                ? 'msgBelowMatch'
                : livenessSkipped
                  ? 'msgLivenessSkipped'
                  : 'msgLivenessLow';

        return this._transloco.translate(`smartEnrollDemos.faceComparisonLiveness.${key}`);
    }
}
