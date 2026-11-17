import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AccountEnvironmentService } from 'app/core/account/account-environment.service';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import { DEFAULT_LIVENESS_STANDALONE_MIN_SCORE } from '../../services/biometrics-demo.types';
import {
    applySandboxFaceFailMarker,
    fileToBase64,
    getDemoOs,
    imageUrlToRawBase64,
    isInsufficientCreditsError,
    parseLivenessResult,
    translateLivenessApiError,
} from '../../services/biometrics-demo.util';
import { DemoCapturePanelComponent, type CaptureMethod } from '../../shared/demo-capture-panel.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';
import { DemoResultActionsComponent } from '../../shared/demo-result-actions.component';
import { DemoSandboxResultBannerComponent } from '../../shared/demo-sandbox-result-banner.component';
import { DemoStageHeroComponent } from '../../shared/demo-stage-hero.component';
import { DemoStepPillsComponent } from '../../shared/demo-step-pills.component';

type Step = 'capture' | 'processing' | 'result';

type LivenessDemoResult = {
    isLive: boolean;
    confidence: number | null;
    message: string;
    price?: number | null;
    isApiError?: boolean;
    isInsufficientCredits?: boolean;
};

const LIVENESS_SAMPLE_IMAGES = [
    { src: '/demos/assets/ppic1.jpg', fail: false },
    { src: '/demos/assets/ppic2.jpg', fail: false },
    { src: '/demos/assets/ppic3.jpg', fail: false },
    { src: '/demos/assets/ppic4.jpg', fail: false },
    { src: '/demos/assets/ppic5.jpg', fail: true },
    { src: '/demos/assets/ppic6.jpg', fail: true },
] as const;

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/biometrics/liveness`,
    `${DOCS_BASE}/biometrics/humanauthn`,
    `${DOCS_BASE}/biometrics/humanID-encrypt`,
    `${DOCS_BASE}/biometrics/humanID-encrypt-qr-code`,
    `${DOCS_BASE}/biometrics/humanID-decrypt`,
    `${DOCS_BASE}/biometrics/humanID-preview`,
] as const;

@Component({
    selector: 'app-liveness-demo',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        TranslocoModule,
        DemoPageShellComponent,
        DemoStageHeroComponent,
        DemoStepPillsComponent,
        DemoCapturePanelComponent,
        DemoRelatedDocsSectionComponent,
        DemoResultActionsComponent,
        DemoSandboxResultBannerComponent,
    ],
    templateUrl: './liveness-demo.component.html',
    styleUrl: '../../styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LivenessDemoComponent implements OnInit {
    readonly sampleImages = LIVENESS_SAMPLE_IMAGES;
    readonly defaultMinScore = DEFAULT_LIVENESS_STANDALONE_MIN_SCORE;
    readonly stepLabels = [
        'smartEnrollDemos.liveness.stepCapture',
        'smartEnrollDemos.liveness.stepResult',
    ] as const;

    step: Step = 'capture';
    captureMode: CaptureMethod = 'upload';
    result: LivenessDemoResult | null = null;
    error: string | null = null;
    previewUrl: string | null = null;
    uploadReading = false;
    relatedDocs: DemoRelatedDocItem[] = [];

    private _api = inject(BiometricsDemoApiService);
    private _cdr = inject(ChangeDetectorRef);
    private _transloco = inject(TranslocoService);
    private _accountEnv = inject(AccountEnvironmentService);

    constructor() {
        this._api.ensureAuthenticated();
    }

    ngOnInit(): void {
        this.relatedDocs = this.buildRelatedDocs();
    }

    get numericStep(): 1 | 2 {
        return this.step === 'capture' ? 1 : 2;
    }

    onFilePicked(file: File): void {
        this.uploadReading = true;
        this.error = null;
        this._cdr.markForCheck();

        void fileToBase64(file)
            .then((b64) => {
                this.previewUrl = URL.createObjectURL(file);
                this.uploadReading = false;
                this.runLiveness(b64);
            })
            .catch(() => {
                this.uploadReading = false;
                this.error = this._transloco.translate('smartEnrollDemos.liveness.sampleLoadError');
                this._cdr.markForCheck();
            });
    }

    runSampleImage(sample: { src: string; fail: boolean }): void {
        void imageUrlToRawBase64(sample.src)
            .then((b64) => {
                this.previewUrl = sample.src;
                const payload =
                    this._accountEnv.isSandboxModeActive() && sample.fail
                        ? applySandboxFaceFailMarker(b64)
                        : b64;
                this.runLiveness(payload);
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
            this._cdr.markForCheck();
            return;
        }

        this.step = 'processing';
        this.error = null;
        this.result = null;
        this.uploadReading = false;
        this._cdr.markForCheck();

        this._api.detectLiveness({ os: getDemoOs(), image: base64Image, includeCost: true }).subscribe({
            next: (data) => {
                const parsed = parseLivenessResult(data);
                this.result = {
                    isLive: parsed.passed,
                    confidence: parsed.livenessScore,
                    message:
                        parsed.message ||
                        this._transloco.translate(
                            parsed.passed ? 'smartEnrollDemos.liveness.defaultPass' : 'smartEnrollDemos.liveness.defaultFail'
                        ),
                    price: parsed.creditsCharged,
                    isApiError: false,
                };
                this.error = null;
                this.step = 'result';
                this._cdr.markForCheck();
            },
            error: (err) => {
                this.result = {
                    isLive: false,
                    confidence: null,
                    message: translateLivenessApiError((key) => this._transloco.translate(key), err),
                    price: typeof err?.creditsCharged === 'number' ? err.creditsCharged : null,
                    isApiError: true,
                    isInsufficientCredits: isInsufficientCreditsError(err),
                };
                this.error = null;
                this.step = 'result';
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
        this._cdr.markForCheck();
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.liveness.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.liveness.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.liveness.relatedDocs.${i}.badge`),
            badgeMuted: false,
        }));
    }
}
