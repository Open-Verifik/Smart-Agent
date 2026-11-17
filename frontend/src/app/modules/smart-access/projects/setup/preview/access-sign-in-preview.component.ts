import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    HostListener,
    Input,
    OnInit,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

import { SmartAccessSetupService } from '../../smart-access-setup.service';
import type { AccessProjectLike } from '../../smart-access-setup.service';
import {
    VERIFY_FONT_HREF,
    VERIFY_STYLES,
    VERIFY_STYLE_COLOR_DEFAULTS,
    VerifyStyle,
    VerifyStyleId,
    parseVerifyStyle,
} from 'app/modules/smart-enroll/projects/setup/preview/preview-verify-shell/verify-style';

type DeviceType = 'desktop' | 'tablet' | 'mobile';
type Branding = NonNullable<AccessProjectLike['branding']>;

/**
 * Side-by-side mock of the customer-facing sign-in screen for Smart Access.
 *
 * Mirrors the Smart Enroll preview shell (toolbar, device toggle, fullscreen)
 * but renders a sign-in card themed live by the wizard's `branding`,
 * `projectFlow.onboardingSettings.verifyStyle`, and the enabled methods from
 * `projectFlow.loginSettings`.
 */
@Component({
    selector: 'access-sign-in-preview',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, TranslocoModule],
    templateUrl: './access-sign-in-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessSignInPreviewComponent implements OnInit {
    @Input() branding: Branding | null = null;
    @Input() form!: FormGroup;

    private _setup = inject(SmartAccessSetupService);
    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);

    deviceType: DeviceType = 'tablet';
    isFullscreen = false;
    selectedTabOverride: 'email' | 'phone' | null = null;

    ngOnInit(): void {
        this._loadStyleFonts();
        this._setup.stepIndex$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
            this._cdr.markForCheck();
        });
        this.form?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
            this._cdr.markForCheck();
        });
    }

    /** Currently selected verify style ('a'..'f'), or null when 'none' is chosen. */
    get verifyStyleId(): VerifyStyleId | null {
        const raw = this.form?.get('projectFlow.onboardingSettings.verifyStyle')?.value;
        return parseVerifyStyle(raw);
    }

    get activeStyleDef(): VerifyStyle | null {
        const id = this.verifyStyleId;
        return id ? VERIFY_STYLES[id] : null;
    }

    /** CSS custom properties for the selected verify style. */
    get styleVars(): Record<string, string> {
        return this.activeStyleDef ? { ...this.activeStyleDef.variables } : {};
    }

    /** Effective branding object: caller/form value layered over style & service defaults. */
    get effectiveBranding(): Branding {
        const formBranding = (this.form?.get('branding')?.value as Branding | null) || {};
        const styleId = this.verifyStyleId;
        const styleDefaults = styleId ? VERIFY_STYLE_COLOR_DEFAULTS[styleId] : {};
        return {
            ...this._setup.defaultBranding,
            ...styleDefaults,
            ...(this.branding || {}),
            ...formBranding,
        } as Branding;
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
        return this.canvasBg;
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

    /** High-contrast accent for text links and secondary buttons against the active card surface. */
    get accessibleAccentTextColor(): string {
        if (this.verifyStyleId === 'd') return '#60a5fa';
        if (this.verifyStyleId === 'a') return '#163300';
        if (this.verifyStyleId === 'e') return '#151581';
        if (this.verifyStyleId === 'f') return '#000000';
        if (this.verifyStyleId === 'b') return '#000000';

        const btnColor = this.effectiveBranding.buttonColor || '#4f46e5';
        if (this._contrastRatio(btnColor, this.cardBg) >= 4.5) {
            return btnColor;
        }
        const btnText = this.effectiveBranding.buttonTextColor || '#ffffff';
        if (this._contrastRatio(btnText, this.cardBg) >= 4.5) {
            return btnText;
        }
        return this.isDarkSurface ? '#60a5fa' : '#4338ca';
    }

    /** High-contrast primary CTA button background and foreground pair (WCAG AA >= 4.5:1). */
    get accessiblePrimaryBg(): string {
        const raw = this.effectiveBranding.buttonColor || (this.activeStyleDef ? this.styleVars['--style-cta'] : '#4f46e5') || '#4f46e5';
        return raw;
    }

    get accessiblePrimaryText(): string {
        const bg = this.accessiblePrimaryBg;
        const raw = this.effectiveBranding.buttonTextColor || (this.activeStyleDef ? this.styleVars['--style-cta-text'] : '#ffffff') || '#ffffff';
        if (this._contrastRatio(raw, bg) >= 4.5) {
            return raw;
        }
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
            return '1.5px solid ' + (this.styleVars['--style-line'] || '#94a3b8');
        }
        return this.isDarkSurface ? '1.5px solid #334155' : '1.5px solid #94a3b8';
    }

    get inputPlaceholderColor(): string {
        return this.isDarkSurface ? '#94a3b8' : '#64748b';
    }

    get segmentTrackBg(): string {
        if (this.verifyStyleId === 'd') return '#0b1b33';
        if (this.activeStyleDef) return this.styleVars['--style-segment'] || '#e2e8f0';
        return this.isDarkSurface ? '#0f172a' : '#f1f5f9';
    }

    get segmentTrackBorder(): string {
        if (this.verifyStyleId === 'd') return '1px solid #1e3a5f';
        if (this.verifyStyleId === 'f' || this.verifyStyleId === 'b') return '1.5px solid #000000';
        return this.isDarkSurface ? '1px solid #334155' : '1px solid #e2e8f0';
    }

    get segmentActiveBg(): string {
        if (this.verifyStyleId === 'd') return '#1c6cff';
        if (this.activeStyleDef) return this.styleVars['--style-segment-on'] || '#ffffff';
        return this.isDarkSurface ? '#1e293b' : '#ffffff';
    }

    get segmentActiveTextColor(): string {
        if (this.verifyStyleId === 'd') return '#ffffff';
        if (this.activeStyleDef) return this.styleVars['--style-segment-on-text'] || this.accessibleAccentTextColor;
        return this.accessibleAccentTextColor;
    }

    get segmentInactiveTextColor(): string {
        return this.isDarkSurface ? '#94a3b8' : '#475569';
    }

    get secondaryButtonBorder(): string {
        if (this.verifyStyleId === 'd') return '1.5px solid #3b82f6';
        if (this.verifyStyleId === 'a') return '1.5px solid #163300';
        if (this.verifyStyleId === 'e') return '1.5px solid #151581';
        if (this.verifyStyleId === 'f') return '1.5px solid #000000';
        if (this.activeStyleDef) {
            const raw = this.styleVars['--style-secondary-border'];
            if (raw && raw !== '0') return raw;
        }
        return '1.5px solid ' + this.accessibleAccentTextColor;
    }

    get secondaryButtonBg(): string {
        return this.isDarkSurface ? 'rgba(59, 130, 246, 0.12)' : 'transparent';
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
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);
    }

    /** Live login settings group from the wizard form. */
    get loginSettings(): FormGroup | null {
        return (this.form?.get('projectFlow.loginSettings') as FormGroup) || null;
    }

    get phoneEnabled(): boolean {
        return !!this.loginSettings?.get('phone')?.value;
    }

    get emailEnabled(): boolean {
        return !!this.loginSettings?.get('email')?.value;
    }

    get faceLivenessEnabled(): boolean {
        return !!this.loginSettings?.get('faceLiveness')?.value;
    }

    get passkeysEnabled(): boolean {
        return !!this.loginSettings?.get('allowPasskeys')?.value;
    }

    /**
     * Active tab for the tab switcher when both email and phone are enabled.
     * Defaults to email when available; user can also click tabs in the preview.
     */
    get activeTab(): 'email' | 'phone' {
        if (this.selectedTabOverride === 'phone' && this.phoneEnabled) return 'phone';
        if (this.selectedTabOverride === 'email' && this.emailEnabled) return 'email';
        return this.emailEnabled ? 'email' : 'phone';
    }

    selectTab(tab: 'email' | 'phone'): void {
        this.selectedTabOverride = tab;
        this._cdr.markForCheck();
    }

    /** Subtitle for the phone tile based on selected gateway. */
    get phoneChannelLabel(): 'whatsapp' | 'sms' | 'both' | 'none' {
        const value = `${this.loginSettings?.get('phoneGateway')?.value ?? 'none'}`;
        if (value === 'whatsapp' || value === 'sms' || value === 'both') return value;
        return 'none';
    }

    /** True when no method is enabled — show an empty-state hint. */
    get hasAnyMethod(): boolean {
        return this.phoneEnabled || this.emailEnabled || this.faceLivenessEnabled || this.passkeysEnabled;
    }

    /** True when the form's branding contains a banner/background image. */
    get hasBannerImage(): boolean {
        return !!this.effectiveBranding.image;
    }

    get buttonStyle(): { 'background-color': string; color: string } {
        const b = this.effectiveBranding;
        return {
            'background-color': (b.buttonColor as string) || '#3f3f46',
            color: (b.buttonTextColor as string) || '#ffffff',
        };
    }

    get titleStyle(): { color: string } {
        return { color: (this.effectiveBranding.titleColor as string) || '#3f3f46' };
    }

    get textStyle(): { color: string } {
        return { color: (this.effectiveBranding.textColor as string) || '#3f3f46' };
    }

    setDeviceType(device: DeviceType): void {
        this.deviceType = device;
        this._cdr.markForCheck();
    }

    toggleFullscreen(): void {
        this.isFullscreen = !this.isFullscreen;
        /** Lock document scroll while in fullscreen. */
        document.body.style.overflow = this.isFullscreen ? 'hidden' : '';
        this._cdr.markForCheck();
    }

    @HostListener('document:keydown.escape')
    onEscapeClose(): void {
        if (!this.isFullscreen) return;
        this.toggleFullscreen();
    }

    /** Tailwind classes for the inner content's max-width based on the device toggle. */
    contentDeviceClasses(): string {
        switch (this.deviceType) {
            case 'mobile':
                return 'max-w-80 w-full mx-auto';
            case 'tablet':
                return 'max-w-128 w-full mx-auto';
            case 'desktop':
            default:
                return 'w-full max-w-160 mx-auto';
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
