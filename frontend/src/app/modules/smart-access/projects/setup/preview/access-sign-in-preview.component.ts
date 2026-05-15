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

type DeviceType = 'desktop' | 'tablet' | 'mobile';
type Branding = NonNullable<AccessProjectLike['branding']>;

/**
 * Side-by-side mock of the customer-facing sign-in screen for Smart Access.
 *
 * Mirrors the Smart Enroll preview shell (toolbar, device toggle, fullscreen)
 * but renders a sign-in card themed live by the wizard's `branding` and the
 * enabled methods from `projectFlow.loginSettings`. Resets nothing on step
 * change (single view), but still subscribes to `stepIndex$` to mark for check
 * when the host swaps steps.
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

    ngOnInit(): void {
        this._setup.stepIndex$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
            this._cdr.markForCheck();
        });
    }

    /** Effective branding object: caller value layered over service defaults. */
    get effectiveBranding(): Branding {
        return { ...this._setup.defaultBranding, ...(this.branding || {}) } as Branding;
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
     * Defaults to email when available; derived purely from form values.
     */
    get activeTab(): 'email' | 'phone' {
        return this.emailEnabled ? 'email' : 'phone';
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
}
