import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import type { ApiErrorResponse } from '../../services/biometrics-demo.types';
import { fileToBase64, getDemoOs } from '../../services/biometrics-demo.util';
import { DemoCapturePanelComponent, type CaptureMethod } from '../../shared/demo-capture-panel.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoRasterImageComponent } from '../../shared/demo-raster-image.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';
import { DemoStageCardComponent } from '../../shared/demo-stage-card.component';
import { DemoStageHeroComponent } from '../../shared/demo-stage-hero.component';
import { HumanIdDecryptResultComponent } from '../../shared/human-id-decrypt-result.component';

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/biometrics/humanID-decrypt`,
    `${DOCS_BASE}/biometrics/humanID-encrypt`,
    `${DOCS_BASE}/biometrics/humanID-preview`,
    `${DOCS_BASE}/biometrics/humanID-encrypt-qr-code`,
    `${DOCS_BASE}/biometrics/liveness`,
] as const;

type Step = 'form' | 'processing' | 'result';
type ProofMode = 'paste' | 'qr';

@Component({
    selector: 'app-humanid-decrypt-demo',
    standalone: true,
    imports: [
        FormsModule,
        NgClass,
        TranslocoModule,
        DemoPageShellComponent,
        DemoStageHeroComponent,
        DemoStageCardComponent,
        DemoCapturePanelComponent,
        DemoRelatedDocsSectionComponent,
        DemoRasterImageComponent,
        HumanIdDecryptResultComponent,
    ],
    templateUrl: './humanid-decrypt-demo.component.html',
    styleUrl: '../../styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanidDecryptDemoComponent implements OnInit, OnDestroy {
    authChecked = false;
    step: Step = 'form';
    proofMode: ProofMode = 'paste';
    captureMode: CaptureMethod = 'upload';
    humanID = '';
    password = '';
    facePreview: string | null = null;
    faceB64: string | null = null;
    faceHighlighted = false;
    result: Record<string, unknown> | null = null;
    error: string | null = null;
    qrPreview: string | null = null;
    qrExtracting = false;
    qrExtractMessage: string | null = null;
    isQrDragging = false;
    relatedDocs: DemoRelatedDocItem[] = [];

    private _api = inject(BiometricsDemoApiService);
    private _cdr = inject(ChangeDetectorRef);
    private _transloco = inject(TranslocoService);
    private _router = inject(Router);
    private _highlightTimeout: ReturnType<typeof setTimeout> | null = null;

    ngOnInit(): void {
        if (!this._api.ensureAuthenticated()) {
            this.authChecked = true;
            return;
        }
        this.authChecked = true;
        this.relatedDocs = this.buildRelatedDocs();
    }

    ngOnDestroy(): void {
        if (this._highlightTimeout) clearTimeout(this._highlightTimeout);
    }

    get showApiReference(): boolean {
        return this.step !== 'result';
    }

    get canDecrypt(): boolean {
        return Boolean(this.faceB64 && this.humanID.trim() && !this.qrExtracting);
    }

    private _pulseFace(): void {
        if (this._highlightTimeout) clearTimeout(this._highlightTimeout);
        this.faceHighlighted = true;
        this._highlightTimeout = setTimeout(() => {
            this.faceHighlighted = false;
            this._highlightTimeout = null;
            this._cdr.markForCheck();
        }, 2000);
        this._cdr.markForCheck();
    }

    setProofMode(mode: ProofMode): void {
        this.proofMode = mode;
        this.error = null;
        this.qrExtractMessage = null;
        if (mode === 'paste') {
            this.qrPreview = null;
            this.humanID = '';
        } else {
            this.humanID = '';
        }
        this._cdr.markForCheck();
    }

    onFilePicked(file: File): void {
        void fileToBase64(file).then((b64) => {
            this.faceB64 = b64;
            this.facePreview = URL.createObjectURL(file);
            this.error = null;
            this._pulseFace();
        });
    }

    onCapture(payload: { dataUrl: string; base64: string }): void {
        this.facePreview = payload.dataUrl;
        this.faceB64 = payload.base64;
        this.error = null;
        this._pulseFace();
    }

    clearFace(): void {
        this.faceB64 = null;
        this.facePreview = null;
        this.faceHighlighted = false;
        this._cdr.markForCheck();
    }

    onQrDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        if (!this.isQrDragging) {
            this.isQrDragging = true;
            this._cdr.markForCheck();
        }
    }

    onQrDragLeave(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        if (this.isQrDragging) {
            this.isQrDragging = false;
            this._cdr.markForCheck();
        }
    }

    onQrDrop(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isQrDragging = false;
        const file = event.dataTransfer?.files?.[0];
        if (file && file.type.startsWith('image/')) {
            void this._processQrFile(file);
        }
        this._cdr.markForCheck();
    }

    onQrFile(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;
        input.value = '';
        void this._processQrFile(file);
    }

    private async _processQrFile(file: File): Promise<void> {
        this.error = null;
        this.qrExtractMessage = null;
        this.qrPreview = URL.createObjectURL(file);
        this.qrExtracting = true;
        this._cdr.markForCheck();

        if (!this._api.ensureAuthenticated()) {
            this.qrExtracting = false;
            this.error = this._transloco.translate('smartEnrollDemos.common.mustBeSignedIn');
            this._cdr.markForCheck();
            return;
        }

        try {
            const rawB64 = await fileToBase64(file);
            const mime = file.type?.startsWith('image/') ? file.type : 'image/png';
            const humanIDQR = `data:${mime};base64,${rawB64}`;
            this._api.previewHumanIdQr({ humanIDQR }).subscribe({
                next: (data) => {
                    const envelope = data as Record<string, unknown>;
                    const inner = envelope?.['data'] as Record<string, unknown> | undefined;
                    const extracted = inner?.['humanID'];
                    if (typeof extracted !== 'string' || !extracted) {
                        this.humanID = '';
                        this.error = this._transloco.translate('smartEnrollDemos.humanidDecrypt.errorReadProof');
                        this.qrExtractMessage = null;
                    } else {
                        this.humanID = extracted;
                        this.qrExtractMessage = this._transloco.translate('smartEnrollDemos.humanidDecrypt.qrExtractSuccess');
                    }
                    this.qrExtracting = false;
                    this._cdr.markForCheck();
                },
                error: (err: ApiErrorResponse) => {
                    this.humanID = '';
                    this.error = err.error ?? err.message ?? 'Request failed';
                    this.qrExtractMessage = null;
                    this.qrExtracting = false;
                    this._cdr.markForCheck();
                },
            });
        } catch {
            this.qrExtracting = false;
            this._cdr.markForCheck();
        }
    }

    submit(event: Event): void {
        event.preventDefault();
        if (!this._api.ensureAuthenticated() || !this.faceB64 || !this.humanID.trim()) return;

        this.step = 'processing';
        this.error = null;
        this._cdr.markForCheck();

        this._api
            .decryptHumanId({
                faceBase64: this.faceB64,
                os: getDemoOs(),
                humanID: this.humanID.trim(),
                password: this.password || undefined,
            })
            .subscribe({
                next: (data) => {
                    this.result = (data as Record<string, unknown>) ?? null;
                    this.step = 'result';
                    this._cdr.markForCheck();
                },
                error: (err: ApiErrorResponse) => {
                    this.error = err.error ?? err.message ?? 'Request failed';
                    this.step = 'form';
                    this._cdr.markForCheck();
                },
            });
    }

    reset(): void {
        if (this._highlightTimeout) {
            clearTimeout(this._highlightTimeout);
            this._highlightTimeout = null;
        }
        this.step = 'form';
        this.faceB64 = null;
        this.facePreview = null;
        this.faceHighlighted = false;
        this.result = null;
        this.error = null;
        this.humanID = '';
        this.password = '';
        this.qrExtractMessage = null;
        this.qrPreview = null;
        this.proofMode = 'paste';
        this._cdr.markForCheck();
    }

    backToDemos(): void {
        void this._router.navigate(['/human-authn/demos']);
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.humanidDecrypt.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.humanidDecrypt.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.humanidDecrypt.relatedDocs.${i}.badge`),
            badgeMuted: false,
        }));
    }
}
