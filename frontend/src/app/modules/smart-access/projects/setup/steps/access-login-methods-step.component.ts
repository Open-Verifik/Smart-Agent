import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    Input,
    OnInit,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

/** External docs anchors keyed by section id, matching client-panel ProjectFlowLogin. */
const DOC_LINKS: Record<number, Record<'en' | 'es', string>> = {
    1: {
        en: 'https://docs.verifik.co/services/smartaccess#id-2.-configure-login-methods',
        es: 'https://docs.verifik.co/verifik-es/services/smartaccess#id-2.-configurar-metodos-de-inicio-de-sesion',
    },
    2: {
        en: 'https://docs.verifik.co/services/smartaccess#id-2.-configure-login-methods',
        es: 'https://docs.verifik.co/verifik-es/services/smartaccess#id-2.-configurar-metodos-de-inicio-de-sesion',
    },
    3: {
        en: 'https://docs.verifik.co/services/smartaccess#biometric-authentication',
        es: 'https://docs.verifik.co/verifik-es/services/smartaccess#autenticacion-biometrica',
    },
    4: {
        en: 'https://docs.verifik.co/services/smartaccess#biometric-authentication',
        es: 'https://docs.verifik.co/verifik-es/services/smartaccess#autenticacion-biometrica',
    },
    5: {
        en: 'https://docs.verifik.co/services/smartaccess#id-2.-configure-login-methods',
        es: 'https://docs.verifik.co/verifik-es/services/smartaccess#id-2.-configurar-metodos-de-inicio-de-sesion',
    },
};

type PhoneGateway = 'whatsapp' | 'sms' | 'both' | 'none' | '' | null;

/** Resolve a phone gateway from independent WA/SMS toggles (client-panel parity). */
const computePhoneGateway = (wa: boolean, sms: boolean): PhoneGateway => {
    if (wa && sms) return 'both';
    if (wa) return 'whatsapp';
    if (sms) return 'sms';
    return 'none';
};

@Component({
    selector: 'access-login-methods-step',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        TranslocoModule,
    ],
    templateUrl: './access-login-methods-step.component.html',
    styleUrls: ['./access-login-methods-step.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessLoginMethodsStepComponent implements OnInit {
    @Input({ required: true }) form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _transloco = inject(TranslocoService);

    /** Live tile selection state derived from `phoneGateway`. */
    whatsapp = false;
    sms = false;

    ngOnInit(): void {
        this._syncEmailGatewayFromToggle(!!this.loginSettings.get('email')?.value);

        this.loginSettings
            .get('email')
            ?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((on: boolean) => {
                this._syncEmailGatewayFromToggle(!!on);
                this._cdr.markForCheck();
            });

        this._syncTilesFromGateway(this.loginSettings.get('phoneGateway')?.value);

        this.loginSettings
            .get('phone')
            ?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((on: boolean) => {
                if (!on) {
                    this.whatsapp = false;
                    this.sms = false;
                    this._writeGateway('none');
                }
                this._cdr.markForCheck();
            });

        this.loginSettings
            .get('phoneGateway')
            ?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((g: PhoneGateway) => {
                this._syncTilesFromGateway(g);
                this._cdr.markForCheck();
            });
    }

    get loginSettings(): FormGroup {
        return this.form.get('projectFlow.loginSettings') as FormGroup;
    }

    get phoneOn(): boolean {
        return !!this.loginSettings.get('phone')?.value;
    }

    get faceLivenessOn(): boolean {
        return !!this.loginSettings.get('faceLiveness')?.value;
    }

    get livenessMinScore(): number {
        return Number(this.loginSettings.get('livenessMinScore')?.value ?? 0);
    }

    get searchMinScore(): number {
        return Number(this.loginSettings.get('searchMinScore')?.value ?? 0);
    }

    livenessPct(): number {
        return Math.round(this.livenessMinScore * 100);
    }

    searchPct(): number {
        return Math.round(this.searchMinScore * 100);
    }

    /** True when phone is on and neither WhatsApp nor SMS is selected. */
    get phoneGatewayMissing(): boolean {
        return this.phoneOn && !this.whatsapp && !this.sms;
    }

    /** True when no auth method is enabled — group-level error from host validator. */
    get noMethodSelected(): boolean {
        return !!this.loginSettings.errors?.['atLeastOneMethod'];
    }

    togglePhoneTile(channel: 'whatsapp' | 'sms'): void {
        if (this.loading || this.saving) return;
        if (channel === 'whatsapp') this.whatsapp = !this.whatsapp;
        if (channel === 'sms') this.sms = !this.sms;

        if (!this.phoneOn && (this.whatsapp || this.sms)) {
            this.loginSettings.get('phone')?.setValue(true, { emitEvent: false });
            this.loginSettings.markAsDirty();
        }
        if (this.phoneOn && !this.whatsapp && !this.sms) {
            this.loginSettings.get('phone')?.setValue(false, { emitEvent: false });
            this.loginSettings.markAsDirty();
        }
        this._writeGateway(computePhoneGateway(this.whatsapp, this.sms));
        this._cdr.markForCheck();
    }

    docUrl(sectionId: number): string {
        const lang = this._transloco.getActiveLang?.() === 'es' ? 'es' : 'en';
        return DOC_LINKS[sectionId]?.[lang as 'en' | 'es'] ?? DOC_LINKS[sectionId]?.en ?? '#';
    }

    private _writeGateway(value: PhoneGateway): void {
        const ctl = this.loginSettings.get('phoneGateway');
        const normalized = value ?? 'none';
        if (!ctl) return;
        if (ctl.value === normalized) {
            this.loginSettings.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            return;
        }
        ctl.setValue(normalized, { emitEvent: false });
        this.loginSettings.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        /** Programmatic setValue stays pristine — SmartAccessSetupSaveGuard only saves when dirty. */
        this.loginSettings.markAsDirty();
    }

    /**
     * Matches client-panel: email off ⇒ `none`, email on ⇒ `mailgun` (no user-facing provider pick).
     */
    private _syncEmailGatewayFromToggle(emailEnabled: boolean): void {
        const ctl = this.loginSettings.get('emailGateway');
        const next = emailEnabled ? 'mailgun' : 'none';
        if (!ctl) return;
        if (ctl.value === next) {
            this.loginSettings.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            return;
        }
        ctl.setValue(next, { emitEvent: false });
        this.loginSettings.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        this.loginSettings.markAsDirty();
    }

    private _syncTilesFromGateway(g: PhoneGateway): void {
        switch (g) {
            case 'both':
                this.whatsapp = true;
                this.sms = true;
                return;
            case 'whatsapp':
                this.whatsapp = true;
                this.sms = false;
                return;
            case 'sms':
                this.whatsapp = false;
                this.sms = true;
                return;
            default:
                this.whatsapp = false;
                this.sms = false;
        }
    }
}
