import { FormsModule } from '@angular/forms';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import type { ApiErrorResponse } from '../../services/biometrics-demo.types';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import { fileToBase64 } from '../../services/biometrics-demo.util';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoRasterImageComponent } from '../../shared/demo-raster-image.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';
import { DemoUploadImageButtonComponent } from '../../shared/demo-upload-image-button.component';
import { HumanIdPreviewResultComponent } from '../../shared/human-id-preview-result.component';

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/api/tags/preview-zelfproof`,
    `${DOCS_BASE}/functions/create-zelfproof`,
    `${DOCS_BASE}/functions/decrypt-zelfproof`,
    `${DOCS_BASE}/functions/create-qr-zelfproof`,
    `${DOCS_BASE}/biometrics/liveness`,
] as const;

const RELATED_DOC_BADGE_MUTED = [false, false, false, false, false] as const;

type Step = 'form' | 'processing' | 'result';
type ProofMode = 'paste' | 'qr';

@Component({
    selector: 'app-humanid-preview-demo',
    standalone: true,
    imports: [
        FormsModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoRelatedDocsSectionComponent,
        DemoUploadImageButtonComponent,
        DemoRasterImageComponent,
        HumanIdPreviewResultComponent,
    ],
    templateUrl: './humanid-preview-demo.component.html',
    styleUrl: '../../styles/demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanidPreviewDemoComponent implements OnInit {
    @ViewChild('qrFileInput') qrFileInput?: ElementRef<HTMLInputElement>;

    authChecked = false;
    step: Step = 'form';
    proofMode: ProofMode = 'paste';
    zelfProof = '';
    verifierKey = '';
    result: Record<string, unknown> | null = null;
    error: string | null = null;
    qrPreview: string | null = null;
    qrExtracting = false;
    qrExtractMessage: string | null = null;
    relatedDocs: DemoRelatedDocItem[] = [];

    private _api = inject(BiometricsDemoApiService);
    private _cdr = inject(ChangeDetectorRef);
    private _transloco = inject(TranslocoService);
    private _router = inject(Router);

    ngOnInit(): void {
        if (!this._api.ensureAuthenticated()) {
            this.authChecked = true;
            return;
        }
        this.authChecked = true;
        this.relatedDocs = this.buildRelatedDocs();
    }

    get showApiReference(): boolean {
        return this.step !== 'result';
    }

    get canPreview(): boolean {
        return Boolean(this.zelfProof.trim() && !this.qrExtracting);
    }

    setProofMode(mode: ProofMode): void {
        this.proofMode = mode;
        this.error = null;
        this.qrExtractMessage = null;
        if (mode === 'paste') {
            this.qrPreview = null;
            this.zelfProof = '';
        } else {
            this.zelfProof = '';
        }
        this._cdr.markForCheck();
    }

    triggerQrUpload(): void {
        this.qrFileInput?.nativeElement.click();
    }

    async onQrFile(event: Event): Promise<void> {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) return;

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
            const zelfProofQRCode = `data:${mime};base64,${rawB64}`;
            this._api
                .previewZelfIdQr({ zelfProofQRCode, verifierKey: this.verifierKey.trim() || undefined })
                .subscribe({
                    next: (data) => {
                        const envelope = data as Record<string, unknown>;
                        const inner = envelope?.['data'] as Record<string, unknown> | undefined;
                        const extracted = inner?.['zelfProof'];
                        if (typeof extracted !== 'string' || !extracted) {
                            this.zelfProof = '';
                            this.error = this._transloco.translate('smartEnrollDemos.humanidPreview.errorReadProof');
                            this.qrExtractMessage = null;
                        } else {
                            this.zelfProof = extracted;
                            this.qrExtractMessage = this._transloco.translate('smartEnrollDemos.humanidPreview.qrExtractSuccess');
                        }
                        this.qrExtracting = false;
                        this._cdr.markForCheck();
                    },
                    error: (err: ApiErrorResponse) => {
                        this.zelfProof = '';
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
        if (!this._api.ensureAuthenticated() || !this.zelfProof.trim()) return;

        this.step = 'processing';
        this.error = null;
        this._cdr.markForCheck();

        this._api
            .previewHumanId({ zelfProof: this.zelfProof.trim(), verifierKey: this.verifierKey || undefined })
            .subscribe({
                next: (data) => {
                    this.result = data as Record<string, unknown>;
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
        this.step = 'form';
        this.zelfProof = '';
        this.verifierKey = '';
        this.result = null;
        this.error = null;
        this.qrExtractMessage = null;
        this.qrPreview = null;
        this.proofMode = 'paste';
        this._cdr.markForCheck();
    }

    backToDemos(): void {
        void this._router.navigate(['/smart-enroll/demos']);
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.humanidPreview.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.humanidPreview.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.humanidPreview.relatedDocs.${i}.badge`),
            badgeMuted: RELATED_DOC_BADGE_MUTED[i],
        }));
    }
}
