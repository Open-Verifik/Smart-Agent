import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import type { ApiErrorResponse } from '../../services/biometrics-demo.types';
import {
    DEMO_HUMANID_PRIVATE_DATA_DEFAULT,
    fileToBase64,
    getDemoOs,
    isLivenessApiErrorCode,
    translateLivenessApiError,
} from '../../services/biometrics-demo.util';
import { DemoCapturePanelComponent, type CaptureMethod } from '../../shared/demo-capture-panel.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';
import { DemoStageCardComponent } from '../../shared/demo-stage-card.component';
import { DemoStageHeroComponent } from '../../shared/demo-stage-hero.component';
import { HumanIdJsonKeyValueFieldComponent } from '../../shared/human-id-json-key-value-field.component';
import { HumanIdLivenessToggleComponent } from '../../shared/human-id-liveness-toggle.component';
import { HumanIdStructuredResultComponent } from '../../shared/human-id-structured-result.component';

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/biometrics/humanID-encrypt`,
    `${DOCS_BASE}/biometrics/humanID-encrypt-qr-code`,
    `${DOCS_BASE}/biometrics/humanID-decrypt`,
    `${DOCS_BASE}/biometrics/humanID-preview`,
    `${DOCS_BASE}/biometrics/liveness`,
] as const;

type Step = 'form' | 'processing' | 'result';
type Tolerance = 'REGULAR' | 'SOFT' | 'HARDENED';

@Component({
    selector: 'app-humanid-create-demo',
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
        HumanIdJsonKeyValueFieldComponent,
        HumanIdLivenessToggleComponent,
        HumanIdStructuredResultComponent,
    ],
    templateUrl: './humanid-create-demo.component.html',
    styleUrl: '../../styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanidCreateDemoComponent implements OnInit, OnDestroy {
    @ViewChild('publicDataField') publicDataField?: HumanIdJsonKeyValueFieldComponent;
    @ViewChild('metadataField') metadataField?: HumanIdJsonKeyValueFieldComponent;

    step: Step = 'form';
    captureMode: CaptureMethod = 'upload';
    identifier = '';
    livenessDetectionPriorCreation = false;
    requireLiveness = true;
    tolerance: Tolerance = 'HARDENED';
    facePreview: string | null = null;
    faceB64: string | null = null;
    faceHighlighted = false;
    publicData: Record<string, string> = { name: 'Jane Doe', documentNumber: '12345678' };
    metadata: Record<string, string> = { ...DEMO_HUMANID_PRIVATE_DATA_DEFAULT };
    password = '';
    result: Record<string, unknown> | null = null;
    error: string | null = null;
    errorCode: string | null = null;
    relatedDocs: DemoRelatedDocItem[] = [];

    readonly toleranceOptions: Tolerance[] = ['SOFT', 'REGULAR', 'HARDENED'];

    private _api = inject(BiometricsDemoApiService);
    private _cdr = inject(ChangeDetectorRef);
    private _transloco = inject(TranslocoService);
    private _router = inject(Router);
    private _highlightTimeout: ReturnType<typeof setTimeout> | null = null;

    constructor() {
        this._api.ensureAuthenticated();
    }

    ngOnInit(): void {
        this.relatedDocs = this.buildRelatedDocs();
    }

    ngOnDestroy(): void {
        if (this._highlightTimeout) clearTimeout(this._highlightTimeout);
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

    submit(event: Event): void {
        event.preventDefault();
        if (!this._api.ensureAuthenticated() || !this.faceB64) return;

        this.error = null;
        this.errorCode = null;
        const pub = this.publicDataField?.commitJsonIfNeeded();
        if (pub == null) {
            this.error = this._transloco.translate('smartEnrollDemos.humanidCreate.errorPublicDataJson');
            this._cdr.markForCheck();
            return;
        }
        const meta = this.metadataField?.commitJsonIfNeeded();
        if (meta == null) {
            this.error = this._transloco.translate('smartEnrollDemos.humanidCreate.errorMetadataJson');
            this._cdr.markForCheck();
            return;
        }
        if (Object.keys(pub).length === 0 || Object.keys(meta).length === 0) {
            this.error = this._transloco.translate('smartEnrollDemos.humanidCreate.errorKeysRequired');
            this._cdr.markForCheck();
            return;
        }

        this.step = 'processing';
        this._cdr.markForCheck();

        this._api
            .createHumanId({
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
                    this.result = data as Record<string, unknown>;
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
        this.errorCode = null;
        this.publicData = { name: 'Jane Doe', documentNumber: '12345678' };
        this.metadata = { ...DEMO_HUMANID_PRIVATE_DATA_DEFAULT };
        this._cdr.markForCheck();
    }

    backToDemos(): void {
        void this._router.navigate(['/human-authn/demos']);
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.humanidCreate.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.humanidCreate.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.humanidCreate.relatedDocs.${i}.badge`),
            badgeMuted: false,
        }));
    }
}
