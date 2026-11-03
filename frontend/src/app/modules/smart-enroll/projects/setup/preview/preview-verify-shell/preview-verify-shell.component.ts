import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';

import { DEFAULT_PHONE_COUNTRY_CODE } from 'app/core/constants/phone-country-codes.constant';
import { PreviewView } from '../../setup.service';
import { Branding } from '../../setup.types';
import { VERIFY_FONT_HREF, VerifyStyleId } from './verify-style';

export type VerifyPreviewScreen =
    | 'consent'
    | 'decline'
    | 'contact'
    | 'otp'
    | 'ready'
    | 'front'
    | 'reviewFront'
    | 'selfie'
    | 'submitted';

export type VerifySheetType = 'acceptedIds' | 'language' | 'document' | 'trouble' | null;

export type PreviewFlowOrder = 'contact_first' | 'consent_first';

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
    imports: [CommonModule, TranslocoModule],
    templateUrl: './preview-verify-shell.component.html',
    styleUrls: ['./preview-verify-shell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewVerifyShellComponent implements OnInit, OnChanges {
    @Input() branding: Branding | null = null;
    @Input() deviceType: 'desktop' | 'tablet' | 'mobile' = 'tablet';
    @Input() form: FormGroup | null = null;
    @Input() styleId: VerifyStyleId = 'a';
    @Input() view: PreviewView = 'signup';
    @Input() flowOrder: PreviewFlowOrder = 'contact_first';

    private _cdr = inject(ChangeDetectorRef);

    get screens(): VerifyPreviewScreen[] {
        return this.flowOrder === 'consent_first' ? CONSENT_FIRST_SCREENS : ORDERED_SCREENS;
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
    sheet: VerifySheetType = null;

    ngOnInit(): void {
        this._loadStyleFonts();
        this.activeScreen = this._mapViewToScreen(this.view);
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
                return 4;
            default:
                return 0;
        }
    }

    get signUpGroup(): FormGroup | null {
        return (this.form?.get('projectFlow.signUpForm') as FormGroup) || null;
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

    selectScreen(screen: VerifyPreviewScreen): void {
        this.activeScreen = screen;
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
                return 'submitted';
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

