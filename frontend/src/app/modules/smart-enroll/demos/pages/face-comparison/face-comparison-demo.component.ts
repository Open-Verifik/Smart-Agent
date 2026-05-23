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
import { DemoCaptureOptionHeadingComponent } from '../../shared/demo-capture-option-heading.component';
import { DemoChooseOneCalloutComponent } from '../../shared/demo-choose-one-callout.component';
import { DemoOrDividerComponent } from '../../shared/demo-or-divider.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoRasterImageComponent } from '../../shared/demo-raster-image.component';
import { DemoScannerShellComponent } from '../../shared/demo-scanner-shell.component';
import { DemoUploadImageButtonComponent } from '../../shared/demo-upload-image-button.component';
import { FaceGuidedCameraComponent } from '../../shared/face-guided-camera.component';
import { DemoResultActionsComponent } from '../../shared/demo-result-actions.component';

type Step = 1 | 2 | 3;
type FaceSlot = { preview: string | null; b64: string | null };
type SlotKind = 'source' | 'target';

const emptySlot = (): FaceSlot => ({ preview: null, b64: null });

@Component({
    selector: 'app-face-comparison-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoChooseOneCalloutComponent,
        DemoCaptureOptionHeadingComponent,
        DemoOrDividerComponent,
        DemoScannerShellComponent,
        DemoUploadImageButtonComponent,
        DemoRasterImageComponent,
        FaceGuidedCameraComponent,
        DemoResultActionsComponent,
    ],
    templateUrl: './face-comparison-demo.component.html',
    styleUrl: '../../styles/demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceComparisonDemoComponent implements OnInit, OnDestroy {
    @ViewChild('sourceFileInput') sourceFileInput?: ElementRef<HTMLInputElement>;
    @ViewChild('targetFileInput') targetFileInput?: ElementRef<HTMLInputElement>;

    readonly defaultMinScore = DEFAULT_FACE_COMPARE_MIN_SCORE;
    readonly stepLabels = [
        'smartEnrollDemos.faceComparison.stepSource',
        'smartEnrollDemos.faceComparison.stepTarget',
        'smartEnrollDemos.faceComparison.stepAnalyze',
    ] as const;

    authChecked = false;
    step: Step = 1;
    source: FaceSlot = emptySlot();
    target: FaceSlot = emptySlot();
    isLoading = false;
    result: { match: boolean; score: number; message: string } | null = null;
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
        if (this.source.b64) this.runComparison(this.source.b64, slot.b64!);
    }

    onCapture(payload: { dataUrl: string; base64: string }): void {
        this.applyCapturedSlot(this.currentSlot, { preview: payload.dataUrl, b64: payload.base64 });
    }

    async onFileSelected(event: Event, which: SlotKind): Promise<void> {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) return;
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
