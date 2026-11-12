import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';

import { DEFAULT_PHONE_COUNTRY_CODE } from 'app/core/constants/phone-country-codes.constant';
import { PreviewView } from '../../setup.service';
import { Branding } from '../../setup.types';
import {
    DEFAULT_VERIFY_LOGO_METRICS,
    resolveLogoMetrics,
    VERIFY_FONT_HREF,
    VerifyLogoMetrics,
    VerifyStyleId,
} from './verify-style';

export type VerifyPreviewScreen =
    | 'kycPrompt'
    | 'consent'
    | 'decline'
    | 'contact'
    | 'otp'
    | 'ready'
    | 'front'
    | 'reviewFront'
    | 'selfie'
    | 'submitted'
    | 'humanId';

export type VerifySheetType = 'acceptedIds' | 'language' | 'document' | 'trouble' | null;

export type PreviewFlowOrder = 'contact_first' | 'consent_first';

export interface OcrFieldDef {
    key: string;
    labelKey: string;
    fallbackLabel: string;
}

export const MOCK_OCR_FIELDS: OcrFieldDef[] = [
    { key: 'firstName', labelKey: 'verify.ocrFieldFirstName', fallbackLabel: 'Nombres' },
    { key: 'lastName', labelKey: 'verify.ocrFieldLastName', fallbackLabel: 'Apellidos' },
    { key: 'documentNumber', labelKey: 'verify.ocrFieldDocumentNumber', fallbackLabel: 'Número de documento' },
    { key: 'documentType', labelKey: 'verify.ocrFieldDocumentType', fallbackLabel: 'Tipo de documento' },
    { key: 'dateOfBirth', labelKey: 'verify.ocrFieldDateOfBirth', fallbackLabel: 'Fecha de nacimiento' },
    { key: 'expirationDate', labelKey: 'verify.ocrFieldExpirationDate', fallbackLabel: 'Fecha de expiración' },
    { key: 'dateOfIssue', labelKey: 'verify.ocrFieldDateOfIssue', fallbackLabel: 'Fecha de emisión' },
    { key: 'address', labelKey: 'verify.ocrFieldAddress', fallbackLabel: 'Dirección' },
];

export const DEFAULT_MOCK_OCR_VALUES: Record<string, string> = {
    firstName: 'Mark Allen',
    lastName: 'Sample',
    documentNumber: '1234-56-7890',
    documentType: "Driver's License",
    dateOfBirth: '11/17/1970',
    expirationDate: '11/17/2027',
    dateOfIssue: '11/17/2021',
    address: '123 Main Street, Indianapolis, IN',
};

const ORDERED_SCREENS: VerifyPreviewScreen[] = [
    'contact',
    'consent',
    'otp',
    'ready',
    'front',
    'reviewFront',
    'selfie',
    'submitted',
];

/** Order B starts on consent like Stripe Identity; the screens after sign-up stay the same. */
const CONSENT_FIRST_SCREENS: VerifyPreviewScreen[] = [
    'consent',
    'contact',
    'otp',
    'ready',
    'front',
    'reviewFront',
    'selfie',
    'submitted',
];

@Component({
    selector: 'preview-verify-shell',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslocoModule],
    templateUrl: './preview-verify-shell.component.html',
    styleUrls: ['./preview-verify-shell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewVerifyShellComponent implements OnInit, OnChanges, OnDestroy {
    @Input() branding: Branding | null = null;
    @Input() deviceType: 'desktop' | 'tablet' | 'mobile' = 'tablet';
    @Input() form: FormGroup | null = null;
    @Input() styleId: VerifyStyleId = 'a';
    @Input() view: PreviewView = 'signup';
    @Input() flowOrder: PreviewFlowOrder = 'contact_first';
    /** HumanAuthn flavor: the journey ends on the HumanID screen instead of the verification summary. */
    @Input() humanAuthn = false;

    private _cdr = inject(ChangeDetectorRef);

    get screens(): VerifyPreviewScreen[] {
        const raw = this.flowOrder === 'consent_first' ? CONSENT_FIRST_SCREENS : ORDERED_SCREENS;
        const base = this.humanAuthn
            ? raw.map((screen) => (screen === 'submitted' ? ('humanId' as const) : screen))
            : raw;
        if (!this.canSkipKyc) {
            return base;
        }
        const consentIdx = base.indexOf('consent');
        if (consentIdx < 0) {
            return base;
        }
        return [...base.slice(0, consentIdx), 'kycPrompt', ...base.slice(consentIdx)];
    }

    readonly segments = ['contact', 'consent', 'document', 'selfie', 'done'];
    readonly otpSample = ['4', '8', '2', '9', '1', '6'];
    readonly languages = [
        { id: 'en', label: 'English' },
        { id: 'es', label: 'Español' },
        { id: 'fr', label: 'Français' },
    ];

    activeLang = 'en';
    activeScreen: VerifyPreviewScreen = 'contact';
    captureMode: 'auto' | 'manual' = 'auto';
    phoneGateway: 'sms' | 'whatsapp' = 'whatsapp';
    logoMetrics: VerifyLogoMetrics = { ...DEFAULT_VERIFY_LOGO_METRICS };
    sheet: VerifySheetType = null;

    previewRedirectSeconds = 7;
    private _redirectInterval: ReturnType<typeof setInterval> | null = null;

    ocrFields: OcrFieldDef[] = [...MOCK_OCR_FIELDS];
    ocrDraft: Record<string, string> = { ...DEFAULT_MOCK_OCR_VALUES };
    ocrOriginal: Record<string, string> = { ...DEFAULT_MOCK_OCR_VALUES };
    ocrEditing = false;
    nameValidationState: 'idle' | 'running' | 'passed' | 'mismatch' = 'passed';
    documentPreviewImage = 'images/ui/placeholders/drivers-license.png';
    documentFaceImage = 'images/ui/placeholders/face.png';

    get modifiedOcrCount(): number {
        return this.ocrFields.filter((f) => this.isOcrFieldModified(f.key)).length;
    }

    isOcrFieldModified(key: string): boolean {
        const current = (this.ocrDraft[key] ?? '').trim();
        const original = (this.ocrOriginal[key] ?? '').trim();
        return current !== original;
    }

    toggleOcrEditing(): void {
        this.ocrEditing = !this.ocrEditing;
        this._cdr.markForCheck();
    }

    resetOcrField(key: string): void {
        if (key in this.ocrOriginal) {
            this.ocrDraft[key] = this.ocrOriginal[key];
            this._cdr.markForCheck();
        }
    }

    resetAllOcrFields(): void {
        this.ocrDraft = { ...this.ocrOriginal };
        this._cdr.markForCheck();
    }

    onOcrDraftChange(): void {
        this._cdr.markForCheck();
    }

    ngOnInit(): void {
        this._loadStyleFonts();
        this.activeScreen = this._mapViewToScreen(this.view);
        this._startCountdownSimulation();
    }

    ngOnDestroy(): void {
        if (this._redirectInterval) {
            clearInterval(this._redirectInterval);
            this._redirectInterval = null;
        }
    }

    private _startCountdownSimulation(): void {
        if (this._redirectInterval) {
            clearInterval(this._redirectInterval);
        }
        this._redirectInterval = setInterval(() => {
            if (this.activeScreen === 'submitted') {
                this.previewRedirectSeconds = this.previewRedirectSeconds <= 1 ? 7 : this.previewRedirectSeconds - 1;
                this._cdr.markForCheck();
            }
        }, 1000);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['view'] && !changes['view'].firstChange) {
            this.activeScreen = this._mapViewToScreen(this.view);
            this.sheet = null;
        }
        if (changes['flowOrder'] && !changes['flowOrder'].firstChange && this.view === 'signup') {
            this.activeScreen = this._mapViewToScreen(this.view);
            this.sheet = null;
        }
        if (changes['styleId']) {
            this._cdr.markForCheck();
        }
    }

    get projectName(): string {
        const raw = this.form?.get('name')?.value;
        return typeof raw === 'string' && raw.trim() ? raw.trim() : 'Verifik';
    }

    get hasBanner(): boolean {
        const img = this.branding?.image;
        return typeof img === 'string' && img.trim().length > 0;
    }

    onLogoLoad(event: Event): void {
        const img = event.target as HTMLImageElement | null;
        if (!img) return;
        this.logoMetrics = resolveLogoMetrics(img.naturalWidth, img.naturalHeight);
        this._cdr.markForCheck();
    }

    get privacyUrl(): string {
        const raw = this.form?.get('privacyUrl')?.value;
        return typeof raw === 'string' && raw.trim() ? raw.trim() : '';
    }

    get activeLanguageLabel(): string {
        return this.languages.find((l) => l.id === this.activeLang)?.label || 'English';
    }

    get progressAt(): number {
        switch (this.activeScreen) {
            case 'contact':
            case 'otp':
                return 0;
            case 'kycPrompt':
            case 'consent':
            case 'decline':
                return 1;
            case 'ready':
            case 'front':
            case 'reviewFront':
                return 2;
            case 'selfie':
                return 3;
            case 'submitted':
            case 'humanId':
                return 4;
            default:
                return 0;
        }
    }

    /** HumanID preview data, read live from the HumanAuthn flow. */
    get humanIdOutputIsQr(): boolean {
        return this.form?.get('projectFlow.humanAuthn.outputFormat')?.value === 'qrCode';
    }

    get humanIdPublicKeys(): string[] {
        const keys = this.form?.get('projectFlow.humanAuthn.publicDataKeys')?.value;
        return Array.isArray(keys) ? keys : [];
    }

    get humanIdStorageProvider(): string {
        return (this.form?.get('projectFlow.storage.provider')?.value as string) || 'ipfs';
    }

    /** Stable sample key; never derived from real biometrics. */
    readonly humanIdSample = 'hid_8f3a…c71e9b04d2';

    /** Deterministic 7x7 pseudo-QR so the preview reads as a QR without a library. */
    readonly qrCells: boolean[] = Array.from({ length: 49 }, (_, i) => {
        const row = Math.floor(i / 7);
        const col = i % 7;
        const finder = (row < 3 && col < 3) || (row < 3 && col > 3) || (row > 3 && col < 3);
        return finder || (row * 5 + col * 3 + ((row * col) % 4)) % 3 === 0;
    });

    get signUpGroup(): FormGroup | null {
        return (this.form?.get('projectFlow.signUpForm') as FormGroup) || null;
    }

    get additionalFields(): string[] {
        const allow = Boolean(this.signUpGroup?.get('allowAdditionalFields')?.value);
        const list = this.signUpGroup?.get('additionalFields')?.value;
        return allow && Array.isArray(list) ? list : [];
    }

    hasAdditionalField(field: string): boolean {
        return this.additionalFields.includes(field);
    }

    get showFullNameSeparate(): boolean {
        const enabled = this.signUpGroup?.get('fullName')?.value !== false;
        const style = this.signUpGroup?.get('fullNameStyle')?.value || 'separate';
        return enabled && style === 'separate';
    }

    get showFullNameTogether(): boolean {
        const enabled = this.signUpGroup?.get('fullName')?.value !== false;
        const style = this.signUpGroup?.get('fullNameStyle')?.value || 'separate';
        return enabled && style === 'together';
    }

    get showEmail(): boolean {
        return this.signUpGroup?.get('email')?.value !== false;
    }

    get showPhone(): boolean {
        return Boolean(this.signUpGroup?.get('phone')?.value ?? true);
    }

    get phoneCountryCode(): string {
        return this.signUpGroup?.get('countryCode')?.value || DEFAULT_PHONE_COUNTRY_CODE;
    }

    get showTerms(): boolean {
        return Boolean(this.signUpGroup?.get('showTermsAndConditions')?.value ?? true);
    }

    get showPrivacy(): boolean {
        return Boolean(this.signUpGroup?.get('showPrivacyNotice')?.value ?? true);
    }

    get showAgreements(): boolean {
        return this.showTerms || this.showPrivacy;
    }

    get showLivenessRow(): boolean {
        const step =
            this.form?.get('projectFlow.steps.liveness')?.value ??
            this.form?.get('projectFlow.biometrics.livenessStep')?.value;
        return step !== 'skip';
    }

    get previewDocumentCategoryLabel(): string {
        const allowedTypes =
            this.form?.get('projectFlow.documents.allowedTypes')?.value ??
            this.form?.get('projectFlow.documents.documentTypes')?.value;
        if (Array.isArray(allowedTypes) && allowedTypes.length > 0) {
            const typesStr = JSON.stringify(allowedTypes).toLowerCase();
            if (typesStr.includes('license') || typesStr.includes('licencia') || typesStr.includes('drivers_license')) {
                return 'Licencia de conducción';
            }
            if (typesStr.includes('passport') || typesStr.includes('pasaporte')) {
                return 'Pasaporte';
            }
            return 'Cédula de Ciudadanía';
        }
        return 'Cédula de Ciudadanía';
    }

    get readyTitleKey(): string {
        const methods = this.form?.get('projectFlow.documents.verificationMethods')?.value;
        if (Array.isArray(methods)) {
            const hasCamera = methods.includes('CAMERA');
            const hasUpload = methods.includes('UPLOAD');
            if (hasUpload && !hasCamera) return 'smart_enroll.verify.readyTitleUpload';
            if (hasUpload && hasCamera) return 'smart_enroll.verify.readyTitleBoth';
        }
        return 'smart_enroll.verify.readyTitle';
    }

    get readyBodyKey(): string {
        const methods = this.form?.get('projectFlow.documents.verificationMethods')?.value;
        if (Array.isArray(methods)) {
            const hasCamera = methods.includes('CAMERA');
            const hasUpload = methods.includes('UPLOAD');
            if (hasUpload && !hasCamera) return 'smart_enroll.verify.readyBodyUpload';
            if (hasUpload && hasCamera) return 'smart_enroll.verify.readyBodyBoth';
        }
        return 'smart_enroll.verify.readyBody';
    }

    get isDocumentOptional(): boolean {
        return this.form?.get('projectFlow.steps.document')?.value === 'optional';
    }

    get isLivenessOptional(): boolean {
        const step =
            this.form?.get('projectFlow.steps.liveness')?.value ??
            this.form?.get('projectFlow.biometrics.livenessStep')?.value;
        return step === 'optional';
    }

    get showDocumentRow(): boolean {
        return this.form?.get('projectFlow.steps.document')?.value !== 'skip';
    }

    get canSkipKyc(): boolean {
        if (!this.form) return false;
        const docStep = this.form.get('projectFlow.steps.document')?.value || 'mandatory';
        const livenessStep =
            this.form.get('projectFlow.steps.liveness')?.value ??
            this.form.get('projectFlow.biometrics.livenessStep')?.value ??
            'mandatory';
        return (
            docStep !== 'mandatory' &&
            livenessStep !== 'mandatory' &&
            (docStep === 'optional' || livenessStep === 'optional')
        );
    }

    skipKycForNow(): void {
        this.selectScreen(this.humanAuthn ? 'humanId' : 'submitted');
    }

    skipDocumentStep(): void {
        if (this.showLivenessRow) {
            this.activeScreen = 'selfie';
        } else {
            this.activeScreen = this.humanAuthn ? 'humanId' : 'submitted';
        }
        this.sheet = null;
        this._cdr.markForCheck();
    }

    restartPreviewFlow(): void {
        this.activeScreen = this.flowOrder === 'consent_first' ? 'consent' : 'contact';
        this.previewRedirectSeconds = 7;
        this.sheet = null;
        this._cdr.markForCheck();
    }

    selectScreen(screen: VerifyPreviewScreen): void {
        this.activeScreen = screen;
        if (screen === 'submitted') {
            this.previewRedirectSeconds = 7;
        }
        this.sheet = null;
        this._cdr.markForCheck();
    }

    nextScreen(): void {
        const order = this.screens;
        const idx = order.indexOf(this.activeScreen);
        const nextIdx = idx >= 0 ? (idx + 1) % order.length : 0;
        this.activeScreen = order[nextIdx];
        this.sheet = null;
        this._cdr.markForCheck();
    }

    previousScreen(): void {
        const order = this.screens;
        const idx = order.indexOf(this.activeScreen);
        const prevIdx = idx > 0 ? idx - 1 : order.length - 1;
        this.activeScreen = order[prevIdx];
        this.sheet = null;
        this._cdr.markForCheck();
    }

    openSheet(kind: VerifySheetType): void {
        this.sheet = kind;
        this._cdr.markForCheck();
    }

    closeSheet(): void {
        this.sheet = null;
        this._cdr.markForCheck();
    }

    selectLanguage(id: string): void {
        this.activeLang = id;
        this.sheet = null;
        this._cdr.markForCheck();
    }

    private _mapViewToScreen(view: PreviewView): VerifyPreviewScreen {
        switch (view) {
            case 'signup':
                return this.flowOrder === 'consent_first' ? 'consent' : 'contact';
            case 'document-upload':
                return 'ready';
            case 'document-scan':
                return 'front';
            case 'document-result':
                return 'reviewFront';
            case 'liveness':
                return 'selfie';
            case 'liveness-result':
                return this.humanAuthn ? 'humanId' : 'submitted';
            case 'human-id-result':
                return 'humanId';
            case 'human-id-access':
                return 'selfie';
            default:
                return 'contact';
        }
    }

    private _loadStyleFonts(): void {
        if (typeof document === 'undefined' || document.getElementById('verify-style-fonts')) return;

        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = 'https://fonts.googleapis.com';
        document.head.appendChild(preconnect);

        const files = document.createElement('link');
        files.rel = 'preconnect';
        files.href = 'https://fonts.gstatic.com';
        files.crossOrigin = 'anonymous';
        document.head.appendChild(files);

        const sheet = document.createElement('link');
        sheet.id = 'verify-style-fonts';
        sheet.rel = 'stylesheet';
        sheet.href = VERIFY_FONT_HREF;
        document.head.appendChild(sheet);
    }
}

