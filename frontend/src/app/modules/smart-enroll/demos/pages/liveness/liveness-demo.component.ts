import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DEFAULT_LIVENESS_STANDALONE_MIN_SCORE } from '../../services/biometrics-demo.types';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import { fileToBase64, getDemoOs, imageUrlToRawBase64, parseLivenessResult } from '../../services/biometrics-demo.util';
import { DemoCaptureOptionHeadingComponent } from '../../shared/demo-capture-option-heading.component';
import { DemoChooseOneCalloutComponent } from '../../shared/demo-choose-one-callout.component';
import { DemoOrDividerComponent } from '../../shared/demo-or-divider.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoScannerShellComponent } from '../../shared/demo-scanner-shell.component';
import { DemoResultActionsComponent } from '../../shared/demo-result-actions.component';
import { DemoUploadImageButtonComponent } from '../../shared/demo-upload-image-button.component';
import { FaceGuidedCameraComponent } from '../../shared/face-guided-camera.component';

type Step = 'capture' | 'processing' | 'result';

const LIVENESS_SAMPLE_IMAGES = [
    '/demos/assets/ppic1.jpg',
    '/demos/assets/ppic2.jpg',
    '/demos/assets/ppic3.jpg',
    '/demos/assets/ppic4.jpg',
    '/demos/assets/ppic5.jpg',
    '/demos/assets/ppic6.jpg',
] as const;

@Component({
    selector: 'app-liveness-demo',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoChooseOneCalloutComponent,
        DemoCaptureOptionHeadingComponent,
        DemoScannerShellComponent,
        FaceGuidedCameraComponent,
        DemoOrDividerComponent,
        DemoUploadImageButtonComponent,
        DemoResultActionsComponent,
    ],
    templateUrl: './liveness-demo.component.html',
    styleUrl: '../../styles/demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LivenessDemoComponent {
    readonly sampleImages = LIVENESS_SAMPLE_IMAGES;
    readonly defaultMinScore = DEFAULT_LIVENESS_STANDALONE_MIN_SCORE;

    step: Step = 'capture';
    result: { isLive: boolean; confidence: number; message: string } | null = null;
    error: string | null = null;
    previewUrl: string | null = null;
    uploadReading = false;
    uploadFileName: string | null = null;

    private _api = inject(BiometricsDemoApiService);
    private _cdr = inject(ChangeDetectorRef);
    private _transloco = inject(TranslocoService);

    constructor() {
        this._api.ensureAuthenticated();
    }

    get numericStep(): 1 | 2 {
        return this.step === 'capture' ? 1 : 2;
    }

    onFileUpload(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        this.uploadReading = true;
        this.uploadFileName = file.name;
        this.error = null;
        this._cdr.markForCheck();

        void fileToBase64(file)
            .then((b64) => {
                this.previewUrl = URL.createObjectURL(file);
                this.uploadReading = false;
                input.value = '';
                this.runLiveness(b64);
            })
            .catch(() => {
                this.uploadReading = false;
                this.uploadFileName = null;
                input.value = '';
                this.error = this._transloco.translate('smartEnrollDemos.liveness.sampleLoadError');
                this._cdr.markForCheck();
            });
    }

    runSampleImage(src: string): void {
        void imageUrlToRawBase64(src)
            .then((b64) => {
                this.previewUrl = src;
                this.runLiveness(b64);
            })
            .catch(() => {
                this.error = this._transloco.translate('smartEnrollDemos.liveness.sampleLoadError');
                this._cdr.markForCheck();
            });
    }

    onCapture(payload: { dataUrl: string; base64: string }): void {
        this.previewUrl = payload.dataUrl;
        this.runLiveness(payload.base64);
    }

    runLiveness(base64Image: string): void {
        if (!this._api.ensureAuthenticated()) {
            this.error = this._transloco.translate('smartEnrollDemos.common.mustBeSignedIn');
            this.uploadReading = false;
            this.uploadFileName = null;
            this._cdr.markForCheck();
            return;
        }

        this.step = 'processing';
        this.error = null;
        this.uploadReading = false;
        this._cdr.markForCheck();

        this._api.detectLiveness({ os: getDemoOs(), image: base64Image }).subscribe({
            next: (data) => {
                const parsed = parseLivenessResult(data);
                const score01 = parsed.livenessScore ?? 0;
                this.result = {
                    isLive: parsed.passed,
                    confidence: score01,
                    message:
                        parsed.message ||
                        this._transloco.translate(
                            parsed.passed ? 'smartEnrollDemos.liveness.defaultPass' : 'smartEnrollDemos.liveness.defaultFail'
                        ),
                };
                this.step = 'result';
                this._cdr.markForCheck();
            },
            error: (err) => {
                this.error = err.error ?? err.message ?? 'Request failed';
                this.step = 'capture';
                this._cdr.markForCheck();
            },
        });
    }

    reset(): void {
        this.step = 'capture';
        this.result = null;
        this.error = null;
        this.previewUrl = null;
        this.uploadReading = false;
        this.uploadFileName = null;
        this._cdr.markForCheck();
    }
}
