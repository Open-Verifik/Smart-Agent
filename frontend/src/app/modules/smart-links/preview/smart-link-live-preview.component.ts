import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { Subscription } from 'rxjs';

import {
    VERIFY_FONT_HREF,
    VERIFY_STYLES,
    VERIFY_STYLE_COLOR_DEFAULTS,
    VerifyStyle,
    VerifyStyleId,
    parseVerifyStyle,
} from 'app/modules/smart-enroll/projects/setup/preview/preview-verify-shell/verify-style';
import { environment } from 'environments/environment';
import { SMART_LINK_STYLE_DEFAULTS } from '../smart-links.service';
import type {
    SmartLinkBranding,
    SmartLinkCompletionMode,
    SmartLinkIdentifier,
    SmartLinkProject,
} from '../smart-links.types';

type DeviceType = 'desktop' | 'tablet' | 'mobile';
type PreviewScreen = 'identify' | 'verify' | 'verified';

/**
 * Side-by-side live preview of the customer-facing SmartLink experience.
 *
 * Shows the real 3-step user flow:
 *   1. Identify (Email or Phone, skipped when pre-set on the link)
 *   2. Verify (Face Liveness fast-lane, or ID Document + Face when per-link requireDocument=true)
 *   3. Verified (Identity proof receipt & signed JWT handoff)
 */
@Component({
    selector: 'smart-link-live-preview',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, TranslocoModule],
    templateUrl: './smart-link-live-preview.component.html',
    styleUrls: ['./smart-link-live-preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartLinkLivePreviewComponent implements OnInit, OnChanges {
    @Input() form?: FormGroup;
    @Input() project?: SmartLinkProject | null = null;
    @Input() branding: Partial<SmartLinkBranding> | null = null;
    @Input() defaultDevice: DeviceType = 'tablet';

    @ViewChild('fullscreenDialog') fullscreenDialog?: ElementRef<HTMLDialogElement>;

    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _formSub?: Subscription;

    deviceType: DeviceType = 'tablet';
    previewScreen: PreviewScreen = 'identify';
    previewIdentifier: SmartLinkIdentifier = 'email';
    previewRequireDocument = false;
    isFullscreen = false;

    ngOnInit(): void {
        this.deviceType = this.defaultDevice || 'tablet';
        this._loadStyleFonts();
        this._bindForm();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['defaultDevice'] && changes['defaultDevice'].firstChange) {
            this.deviceType = this.defaultDevice || 'tablet';
        }
        if (changes['form']) {
            this._bindForm();
        }
        this._cdr.markForCheck();
    }

    private _bindForm(): void {
        this._formSub?.unsubscribe();
        this._formSub = undefined;
        if (!this.form) return;
        this._formSub = this.form.valueChanges
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => this._cdr.markForCheck());
    }

    private get flowValue(): Record<string, any> {
        if (this.form) {
            return (this.form.get('projectFlow')?.value as Record<string, any>) || {};
        }
        const rawFlows = this.project?.projectFlows as unknown;
        const flow = Array.isArray(rawFlows)
            ? rawFlows.find((f) => f && typeof f === 'object' && (f as { type?: string }).type === 'smartlink')
            : rawFlows && typeof rawFlows === 'object' && (rawFlows as { type?: string }).type === 'smartlink'
              ? rawFlows
              : undefined;
        return (flow as Record<string, any>) || {};
    }

    get projectName(): string {
        const fromForm = `${this.form?.get('name')?.value ?? ''}`.trim();
        if (fromForm) return fromForm;
        return `${this.project?.name ?? ''}`.trim() || 'SmartLink';
    }

    get slug(): string {
        return `${this.flowValue?.['slug'] ?? ''}`.trim();
    }

    get publicUrlPreview(): string {
        const base = (environment.kycBaseUrl || 'https://access.verifik.co').replace(/\/+$/, '');
        const handle = this.slug || `${this.project?._id ?? ''}`.trim() || 'your-slug';
        return `${base}/l/${handle}`;
    }

    get allowedIdentifiers(): SmartLinkIdentifier[] {
        const list = this.flowValue?.['routing']?.['allowedIdentifiers'];
        if (Array.isArray(list) && list.length > 0) {
            return list as SmartLinkIdentifier[];
        }
        return ['email', 'phone'];
    }

    get activeIdentifier(): SmartLinkIdentifier {
        const list = this.allowedIdentifiers;
        return list.includes(this.previewIdentifier) ? this.previewIdentifier : list[0];
    }

    get completionMode(): SmartLinkCompletionMode {
        const mode = this.flowValue?.['completion']?.['mode'];
        if (mode === 'redirect' || mode === 'postMessage' || mode === 'receipt') return mode;
        return 'receipt';
    }

    get receiptMessage(): string {
        return `${this.flowValue?.['completion']?.['receiptMessage'] ?? ''}`.trim();
    }

    get allowPdfDownload(): boolean {
        return Boolean(this.flowValue?.['completion']?.['allowPdfDownload'] ?? true);
    }

    get verifyStyleId(): VerifyStyleId | null {
        const raw = this.flowValue?.['onboardingSettings']?.['verifyStyle'];
        return parseVerifyStyle(raw);
    }

    get verifyStyleLabel(): string {
        const id = this.verifyStyleId;
        return id ? `Style ${id.toUpperCase()}` : 'Custom';
    }

    get activeStyleDef(): VerifyStyle | null {
        const id = this.verifyStyleId;
        return id ? VERIFY_STYLES[id] : null;
    }

    get styleVars(): Record<string, string> {
        return this.activeStyleDef ? { ...this.activeStyleDef.variables } : {};
    }

    get effectiveBranding(): SmartLinkBranding {
        const formBranding = (this.form?.get('branding')?.value as Partial<SmartLinkBranding> | null) || {};
        const projBranding = this.project?.branding || {};
        const styleId = this.verifyStyleId;
        const styleDefaults = styleId ? VERIFY_STYLE_COLOR_DEFAULTS[styleId] : {};
        return {
            logo: '',
            image: '',
            ...SMART_LINK_STYLE_DEFAULTS.a,
            ...styleDefaults,
            ...projBranding,
            ...(this.branding || {}),
            ...formBranding,
        } as SmartLinkBranding;
    }

    get canvasBg(): string {
        return (
            this.effectiveBranding.backgroundColor ||
            (this.activeStyleDef ? this.styleVars['--style-page'] : '#f8fafc') ||
            '#f8fafc'
        );
    }

    get cardBg(): string {
        if (this.activeStyleDef) {
            return this.styleVars['--style-card'] || this.canvasBg;
        }
        return '#ffffff';
    }

    get isDarkSurface(): boolean {
        return this.verifyStyleId === 'd' || this._relativeLuminance(this.cardBg) < 0.18;
    }

    get accessibleTitleColor(): string {
        const raw = this.effectiveBranding.titleColor || (this.isDarkSurface ? '#f8fafc' : '#0f172a');
        if (this._contrastRatio(raw, this.cardBg) < 4.5) {
            return this.isDarkSurface ? '#f8fafc' : '#0f172a';
        }
        return raw;
    }

    get accessibleBodyColor(): string {
        const raw = this.effectiveBranding.textColor || (this.isDarkSurface ? '#cbd5e1' : '#475569');
        if (this._contrastRatio(raw, this.cardBg) < 4.5) {
            return this.isDarkSurface ? '#cbd5e1' : '#475569';
        }
        return raw;
    }

    get accessibleAccentTextColor(): string {
        if (this.verifyStyleId === 'd') return '#60a5fa';
        if (this.verifyStyleId === 'a') return '#163300';
        if (this.verifyStyleId === 'e') return '#151581';
        if (this.verifyStyleId === 'f' || this.verifyStyleId === 'b') return '#000000';

        const btnColor = this.effectiveBranding.buttonColor || '#4f46e5';
        if (this._contrastRatio(btnColor, this.cardBg) >= 4.5) return btnColor;
        const btnText = this.effectiveBranding.buttonTextColor || '#ffffff';
        if (this._contrastRatio(btnText, this.cardBg) >= 4.5) return btnText;
        return this.isDarkSurface ? '#60a5fa' : '#4338ca';
    }

    get accessiblePrimaryBg(): string {
        return (
            this.effectiveBranding.buttonColor ||
            (this.activeStyleDef ? this.styleVars['--style-cta'] : '#4f46e5') ||
            '#4f46e5'
        );
    }

    get accessiblePrimaryText(): string {
        const bg = this.accessiblePrimaryBg;
        const raw =
            this.effectiveBranding.buttonTextColor ||
            (this.activeStyleDef ? this.styleVars['--style-cta-text'] : '#ffffff') ||
            '#ffffff';
        if (this._contrastRatio(raw, bg) >= 4.5) return raw;
        return this._relativeLuminance(bg) > 0.35 ? '#0f172a' : '#ffffff';
    }

    get inputBgColor(): string {
        if (this.verifyStyleId === 'd') return '#0b1b33';
        if (this.activeStyleDef) return this.styleVars['--style-input-bg'] || '#ffffff';
        return this.isDarkSurface ? '#0f172a' : '#ffffff';
    }

    get inputBorderStyle(): string {
        if (this.verifyStyleId === 'd') return '1.5px solid #2d5284';
        if (this.verifyStyleId === 'f') return '1.5px solid #000000';
        if (this.verifyStyleId === 'e') return '1.5px solid #a1a1cd';
        if (this.activeStyleDef) {
            return '1.5px solid ' + (this.styleVars['--style-line'] || '#d6d3d1');
        }
        return this.isDarkSurface ? '1.5px solid #334155' : '1.5px solid #cbd5e1';
    }

    get hasBannerImage(): boolean {
        return Boolean(`${this.effectiveBranding.image ?? ''}`.trim());
    }

    get bannerPanelBg(): string {
        if (
            !this.hasBannerImage &&
            this.verifyStyleId === 'd' &&
            (!this.effectiveBranding.imageBackgroundColor ||
                this.effectiveBranding.imageBackgroundColor === '#e8ebe6' ||
                this.effectiveBranding.imageBackgroundColor === '#ffffff')
        ) {
            return '#071426';
        }
        return this.effectiveBranding.imageBackgroundColor || (this.isDarkSurface ? '#0b1b33' : '#e2e8f0');
    }

    get isBannerDarkSurface(): boolean {
        return this._relativeLuminance(this.bannerPanelBg) < 0.22;
    }

    get bannerTitleColor(): string {
        return this.isBannerDarkSurface ? '#f8fafc' : '#0f172a';
    }

    get bannerBodyColor(): string {
        return this.isBannerDarkSurface ? '#cbd5e1' : '#475569';
    }

    setDeviceType(device: DeviceType): void {
        this.deviceType = device;
        this._cdr.markForCheck();
    }

    setPreviewScreen(screen: PreviewScreen): void {
        this.previewScreen = screen;
        this._cdr.markForCheck();
    }

    setPreviewIdentifier(id: SmartLinkIdentifier): void {
        this.previewIdentifier = id;
        this._cdr.markForCheck();
    }

    setPreviewRequireDocument(required: boolean): void {
        this.previewRequireDocument = required;
        this._cdr.markForCheck();
    }

    toggleFullscreen(): void {
        if (this.isFullscreen) {
            this.closeFullscreen();
        } else {
            this.openFullscreen();
        }
    }

    openFullscreen(): void {
        const dialogEl = this.fullscreenDialog?.nativeElement;
        this.isFullscreen = true;
        this._cdr.detectChanges();
        if (dialogEl && !dialogEl.open) {
            dialogEl.showModal();
        }
    }

    closeFullscreen(): void {
        const dialogEl = this.fullscreenDialog?.nativeElement;
        if (dialogEl?.open) {
            dialogEl.close();
        }
        this.isFullscreen = false;
        this._cdr.markForCheck();
    }

    onDialogClosed(): void {
        this.isFullscreen = false;
        this._cdr.markForCheck();
    }

    onDialogBackdropClick(event: MouseEvent): void {
        if (event.target === this.fullscreenDialog?.nativeElement) {
            this.closeFullscreen();
        }
    }

    contentDeviceClasses(): string {
        switch (this.deviceType) {
            case 'mobile':
                return 'max-w-80 w-full mx-auto';
            case 'tablet':
                return 'max-w-128 w-full mx-auto';
            case 'desktop':
            default:
                return 'w-full max-w-2xl mx-auto';
        }
    }

    private _parseHexRgb(hex: string): [number, number, number] | null {
        const clean = String(hex || '').trim().replace(/^#/, '');
        if (/^[0-9a-fA-F]{3}$/.test(clean)) {
            return [
                parseInt(clean[0] + clean[0], 16),
                parseInt(clean[1] + clean[1], 16),
                parseInt(clean[2] + clean[2], 16),
            ];
        }
        if (/^[0-9a-fA-F]{6}$/.test(clean)) {
            return [
                parseInt(clean.slice(0, 2), 16),
                parseInt(clean.slice(2, 4), 16),
                parseInt(clean.slice(4, 6), 16),
            ];
        }
        return null;
    }

    private _relativeLuminance(hex: string): number {
        const rgb = this._parseHexRgb(hex);
        if (!rgb) return 1;
        const [r, g, b] = rgb.map((v) => {
            const s = v / 255;
            return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    private _contrastRatio(hex1: string, hex2: string): number {
        const l1 = this._relativeLuminance(hex1);
        const l2 = this._relativeLuminance(hex2);
        return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
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
