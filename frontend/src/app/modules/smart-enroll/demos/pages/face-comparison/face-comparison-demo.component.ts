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
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DEFAULT_FACE_COMPARE_MIN_SCORE } from '../../services/biometrics-demo.types';
import type { ApiErrorResponse } from '../../services/biometrics-demo.types';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import { fileToBase64, parseFaceCompareResult } from '../../services/biometrics-demo.util';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoStageHeroComponent } from '../../shared/demo-stage-hero.component';
import { DemoRasterImageComponent } from '../../shared/demo-raster-image.component';
import { DemoScannerShellComponent } from '../../shared/demo-scanner-shell.component';
import { FaceGuidedCameraComponent } from '../../shared/face-guided-camera.component';
import { DemoResultActionsComponent } from '../../shared/demo-result-actions.component';

type Step = 1 | 2 | 3;
type FaceSlot = { preview: string | null; b64: string | null };
type SlotKind = 'source' | 'target';
type CaptureMode = 'upload' | 'camera';

const emptySlot = (): FaceSlot => ({ preview: null, b64: null });

@Component({
    selector: 'app-face-comparison-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoStageHeroComponent,
        DemoRasterImageComponent,
        DemoScannerShellComponent,
        FaceGuidedCameraComponent,
        DemoResultActionsComponent,
    ],
    templateUrl: './face-comparison-demo.component.html',
    styleUrl: '../../styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceComparisonDemoComponent implements OnInit, OnDestroy {
    @ViewChild('sourceFileInput') sourceFileInput?: ElementRef<HTMLInputElement>;
    @ViewChild('targetFileInput') targetFileInput?: ElementRef<HTMLInputElement>;

    readonly defaultMinScore = DEFAULT_FACE_COMPARE_MIN_SCORE;
    readonly thresholdPresets = [
        { labelKey: 'smartEnrollDemos.faceComparison.presetRelaxed', value: 0.65 },
        { labelKey: 'smartEnrollDemos.faceComparison.presetStandard', value: 0.7 },
        { labelKey: 'smartEnrollDemos.faceComparison.presetBalanced', value: 0.75 },
        { labelKey: 'smartEnrollDemos.faceComparison.presetStrict', value: 0.85 },
    ] as const;
    readonly stepLabels = [
        'smartEnrollDemos.faceComparison.stepSource',
        'smartEnrollDemos.faceComparison.stepTarget',
        'smartEnrollDemos.faceComparison.stepAnalyze',
    ] as const;

    authChecked = false;
    step: Step = 1;
    captureMode: CaptureMode = 'upload';
    isDragging = false;
    source: FaceSlot = emptySlot();
    target: FaceSlot = emptySlot();
    isLoading = false;
    result: { match: boolean; score: number; threshold: number | null; message: string } | null = null;
    error: string | null = null;
    compareMinScore = DEFAULT_FACE_COMPARE_MIN_SCORE;
    highlightSlot: SlotKind | null = null;

    private _api = inject(BiometricsDemoApiService);
    private _cdr = inject(ChangeDetectorRef);
    private _router = inject(Router);
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

    setCaptureMode(mode: CaptureMode): void {
        this.captureMode = mode;
        this._cdr.markForCheck();
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

    async onFileSelected(event: Event, which: SlotKind): Promise<void> {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;
        await this._applyImageFile(which, file);
        input.value = '';
    }

    onDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        if (!this.isDragging) {
            this.isDragging = true;
            this._cdr.markForCheck();
        }
    }

    onDragLeave(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        if (this.isDragging) {
            this.isDragging = false;
            this._cdr.markForCheck();
        }
    }

    async onFileDrop(event: DragEvent): Promise<void> {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = false;
        const file = event.dataTransfer?.files?.[0];
        if (file && file.type.startsWith('image/')) {
            await this._applyImageFile(this.currentSlot, file);
        }
        this._cdr.markForCheck();
    }

    private async _applyImageFile(which: SlotKind, file: File): Promise<void> {
        const b64 = await fileToBase64(file);
        this.applyCapturedSlot(which, { preview: URL.createObjectURL(file), b64 });
    }

    runComparison(srcB64: string, tgtB64: string): void {
        if (!this._api.ensureAuthenticated()) return;

        this.step = 3;
        this.isLoading = true;
        this.error = null;
        this.result = null;
        this._cdr.markForCheck();

        this._api
            .compareFaces({
                gallery: [srcB64],
                probe: [tgtB64],
                compare_min_score: this.compareMinScore,
            })
            .subscribe({
                next: (data) => {
                    this.result = parseFaceCompareResult(data);
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
        this.compareMinScore = DEFAULT_FACE_COMPARE_MIN_SCORE;
        this._cdr.markForCheck();
    }

    backToDemos(): void {
        void this._router.navigate(['/smart-enroll/demos']);
    }

    triggerUpload(which: SlotKind): void {
        if (which === 'source') this.sourceFileInput?.nativeElement.click();
        else this.targetFileInput?.nativeElement.click();
    }

    resultMessage(): string {
        if (!this.result) return '';
        if (this.result.message) return this.result.message;
        return this._transloco.translate(
            this.result.match ? 'smartEnrollDemos.faceComparison.fallbackMatch' : 'smartEnrollDemos.faceComparison.fallbackNoMatch'
        );
    }
}
