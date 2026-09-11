import { CommonModule } from '@angular/common';
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
import { fileToBase64, getDemoOs, DEMO_HUMANID_PRIVATE_DATA_DEFAULT, isLivenessApiErrorCode, translateLivenessApiError } from '../../services/biometrics-demo.util';
import { DemoCaptureOptionHeadingComponent } from '../../shared/demo-capture-option-heading.component';
import { DemoChooseOneCalloutComponent } from '../../shared/demo-choose-one-callout.component';
import { DemoOrDividerComponent } from '../../shared/demo-or-divider.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';
import { DemoUploadImageButtonComponent } from '../../shared/demo-upload-image-button.component';
import { FaceGuidedCameraComponent } from '../../shared/face-guided-camera.component';
import { HumanIdJsonKeyValueFieldComponent } from '../../shared/human-id-json-key-value-field.component';
import { HumanIdLivenessToggleComponent } from '../../shared/human-id-liveness-toggle.component';
import { HumanIdStructuredResultComponent } from '../../shared/human-id-structured-result.component';

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/biometrics/humanID-encrypt-qr-code`,
    `${DOCS_BASE}/biometrics/humanID-encrypt`,
    `${DOCS_BASE}/biometrics/humanID-decrypt`,
    `${DOCS_BASE}/biometrics/humanID-preview`,
    `${DOCS_BASE}/biometrics/liveness`,
] as const;

const RELATED_DOC_BADGE_MUTED = [false, false, false, false, false] as const;

type Step = 'form' | 'processing' | 'result';
type Tolerance = 'REGULAR' | 'SOFT' | 'HARDENED';

@Component({
    selector: 'app-humanid-create-qr-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoRelatedDocsSectionComponent,
        DemoChooseOneCalloutComponent,
        DemoCaptureOptionHeadingComponent,
        FaceGuidedCameraComponent,
        DemoOrDividerComponent,
        DemoUploadImageButtonComponent,
        HumanIdJsonKeyValueFieldComponent,
        HumanIdLivenessToggleComponent,
        HumanIdStructuredResultComponent,
    ],
    templateUrl: './humanid-create-qr-demo.component.html',
    styleUrl: '../../styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanidCreateQrDemoComponent implements OnInit {
    @ViewChild('publicDataField') publicDataField?: HumanIdJsonKeyValueFieldComponent;
    @ViewChild('metadataField') metadataField?: HumanIdJsonKeyValueFieldComponent;
    @ViewChild('fileInput') fileInput?: ElementRef<HTMLInputElement>;

    authChecked = false;
    step: Step = 'form';
    identifier = '';
    livenessDetectionPriorCreation = false;
    requireLiveness = true;
    tolerance: Tolerance = 'HARDENED';
    facePreview: string | null = null;
    faceB64: string | null = null;
    publicData: Record<string, string> = { name: 'Jane Doe', documentNumber: '12345678' };
    metadata: Record<string, string> = { ...DEMO_HUMANID_PRIVATE_DATA_DEFAULT };
    password = '';
    result: Record<string, unknown> | null = null;
    qrDataUrl: string | null = null;
    error: string | null = null;
    errorCode: string | null = null;
    relatedDocs: DemoRelatedDocItem[] = [];

    readonly toleranceOptions: Tolerance[] = ['SOFT', 'REGULAR', 'HARDENED'];

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

    onFile(event: Event): void {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) return;
        void fileToBase64(file).then((b64) => {
            this.faceB64 = b64;
            this.facePreview = URL.createObjectURL(file);
            this._cdr.markForCheck();
        });
    }

    onCapture(payload: { dataUrl: string; base64: string }): void {
        this.facePreview = payload.dataUrl;
        this.faceB64 = payload.base64;
        this._cdr.markForCheck();
    }

    clearFace(): void {
        this.faceB64 = null;
        this.facePreview = null;
        this._cdr.markForCheck();
    }

    triggerFaceUpload(): void {
        this.fileInput?.nativeElement.click();
    }

    submit(event: Event): void {
        event.preventDefault();
        if (!this._api.ensureAuthenticated() || !this.faceB64) return;

        const pub = this.publicDataField?.commitJsonIfNeeded();
        if (pub == null) {
            this.error = this._transloco.translate('smartEnrollDemos.humanidCreateQr.errorPublicDataJson');
            this._cdr.markForCheck();
            return;
        }
        const meta = this.metadataField?.commitJsonIfNeeded();
        if (meta == null) {
            this.error = this._transloco.translate('smartEnrollDemos.humanidCreateQr.errorMetadataJson');
            this._cdr.markForCheck();
            return;
        }
        if (Object.keys(pub).length === 0 || Object.keys(meta).length === 0) {
            this.error = this._transloco.translate('smartEnrollDemos.humanidCreateQr.errorKeysRequired');
            this._cdr.markForCheck();
            return;
        }

        this.step = 'processing';
        this.error = null;
        this.errorCode = null;
        this._cdr.markForCheck();

        this._api
            .createHumanIdQr({
                publicData: pub,
                faceBase64: this.faceB64,
                metadata: meta,
                os: getDemoOs(),
                identifier: this.identifier,
                livenessDetectionPriorCreation: this.livenessDetectionPriorCreation,
                requireLiveness: this.requireLiveness,
                tolerance: this.tolerance,
                password: this.password || undefined,
                includeCost: true,
            })
            .subscribe({
                next: (data) => {
                    const envelope = data as Record<string, unknown>;
                    const innerData = (envelope?.['data'] ?? envelope) as Record<string, unknown>;
                    this.qrDataUrl = typeof innerData?.['humanIDQR'] === 'string' ? innerData['humanIDQR'] : null;
                    this.result = envelope;
                    this.step = 'result';
                    this._cdr.markForCheck();
                },
                error: (err: ApiErrorResponse) => {
                    this.errorCode = err.code ?? null;
                    this.error = translateLivenessApiError((key) => this._transloco.translate(key), err);
                    this.step = 'form';
                    this._cdr.markForCheck();
                },
            });
    }

    isLivenessError(code: string | null): boolean {
        return isLivenessApiErrorCode(code);
    }

    reset(): void {
        this.step = 'form';
        this.faceB64 = null;
        this.facePreview = null;
        this.result = null;
        this.qrDataUrl = null;
        this.error = null;
        this.errorCode = null;
        this.publicData = { name: 'Jane Doe', documentNumber: '12345678' };
        this.metadata = { ...DEMO_HUMANID_PRIVATE_DATA_DEFAULT };
        this._cdr.markForCheck();
    }

    backToDemos(): void {
        void this._router.navigate(['/smart-enroll/demos']);
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.humanidCreateQr.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.humanidCreateQr.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.humanidCreateQr.relatedDocs.${i}.badge`),
            badgeMuted: RELATED_DOC_BADGE_MUTED[i],
        }));
    }
}
