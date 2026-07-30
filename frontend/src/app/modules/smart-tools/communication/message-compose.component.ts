import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import {
    FormBuilder,
    FormControl,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    CountryDialCode,
    CountryService,
} from 'app/core/services/country.service';
import { UserService } from 'app/core/user/user.service';
import { firstValueFrom, take } from 'rxjs';
import {
    LastApiResponse,
    MessageDevGuideComponent,
} from './message-dev-guide.component';
import {
    MASKED_OTP,
    buildOtpPreviewBody,
} from './message-preview.util';
import {
    PhoneGateway,
    PhoneValidationsService,
} from './phone-validations.service';

/** Default ISO country for compose (Colombia), matching prior +57 default. */
const DEFAULT_COUNTRY_ISO = 'co';

@Component({
    selector: 'communication-message-compose',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        TranslocoModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSnackBarModule,
        MessageDevGuideComponent,
    ],
    templateUrl: './message-compose.component.html',
    styleUrls: ['./message-compose.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComposeComponent implements OnInit, OnDestroy {
    @ViewChild('countryCodeSearchInput')
    countryCodeSearchInput?: ElementRef<HTMLInputElement>;

    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _fb = inject(FormBuilder);
    private _service = inject(PhoneValidationsService);
    private _userService = inject(UserService);
    private _countryService = inject(CountryService);
    private _cdr = inject(ChangeDetectorRef);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _expiryTimer: ReturnType<typeof setInterval> | null = null;

    /** WhatsApp/SMS template section name provider limit. */
    readonly senderTitleMaxLength = 15;

    phoneGateway: PhoneGateway = 'whatsapp';
    readonly allPhoneCountryCodes: CountryDialCode[] =
        this._countryService.countryDialCodes;
    filteredPhoneCountryCodes: CountryDialCode[] =
        this._countryService.countryDialCodes;
    countryCodeSearchTerm = '';
    sending = false;
    verifying = false;
    /** Shown after a successful provider send so the user can verify on this screen. */
    otpSent = false;
    pendingValidationId: string | null = null;
    expiresAt: Date | null = null;
    remainingSeconds = 0;
    lastApiResponse: LastApiResponse | null = null;

    form = this._fb.group({
        countryIso: [DEFAULT_COUNTRY_ISO, Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^\d{6,15}$/)]],
        title: [
            'Verifik',
            [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(this.senderTitleMaxLength),
            ],
        ],
        language: ['en', Validators.required],
    });

    /** Separate from send form so partial OTP input does not block resend. */
    otpControl = new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\d{6}$/)],
    });

    languages = [
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' },
        { code: 'fr', label: 'Français' },
        { code: 'pt', label: 'Português' },
    ];

    ngOnInit(): void {
        this.phoneGateway =
            (this._route.snapshot.data['phoneGateway'] as PhoneGateway) ||
            'whatsapp';

        try {
            const account = JSON.parse(localStorage.getItem('verifik_account') || 'null');
            if (account?.name) {
                this._setDefaultSenderTitle(account.name);
            }
        } catch {
            // ignore malformed account blob
        }

        this._userService.user$.pipe(take(1)).subscribe((user) => {
            const name = (user as any)?.name || (user as any)?.clientName;
            if (name) {
                this._setDefaultSenderTitle(name);
                this._cdr.markForCheck();
            }
        });

        this.form.get('countryIso')?.valueChanges.subscribe(() => {
            this._resetVerifyState();
        });
        this.form.get('phone')?.valueChanges.subscribe(() => {
            this._resetVerifyState();
        });
        this.otpControl.valueChanges.subscribe(() => {
            this._cdr.markForCheck();
        });
    }

    ngOnDestroy(): void {
        this._clearExpiryTimer();
    }

    /**
     * Clear pending verify UI when destination phone identity changes.
     */
    private _resetVerifyState(): void {
        if (
            !this.otpSent &&
            !this.otpControl.value &&
            !this.pendingValidationId
        ) {
            return;
        }

        this.otpSent = false;
        this.otpControl.reset('');
        this.otpControl.enable({ emitEvent: false });
        this.pendingValidationId = null;
        this.expiresAt = null;
        this.remainingSeconds = 0;
        this._clearExpiryTimer();
        this._cdr.markForCheck();
    }

    private _clearExpiryTimer(): void {
        if (this._expiryTimer) {
            clearInterval(this._expiryTimer);
            this._expiryTimer = null;
        }
    }

    private _startExpiryCountdown(expiresAtValue: string | Date): void {
        this._clearExpiryTimer();
        this.expiresAt = new Date(expiresAtValue);
        this._tickExpiry();
        this._expiryTimer = setInterval(() => this._tickExpiry(), 1000);
    }

    private _tickExpiry(): void {
        if (!this.expiresAt) {
            this.remainingSeconds = 0;
            this._cdr.markForCheck();
            return;
        }

        const ms = this.expiresAt.getTime() - Date.now();
        this.remainingSeconds = Math.max(0, Math.floor(ms / 1000));
        if (this.remainingSeconds === 0) {
            this._clearExpiryTimer();
            this.otpControl.disable({ emitEvent: false });
        }
        this._cdr.markForCheck();
    }

    get isOtpExpired(): boolean {
        return this.otpSent && this.remainingSeconds <= 0 && Boolean(this.expiresAt);
    }

    get expiryCountdownLabel(): string {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
        const time = `${minutes}:${`${seconds}`.padStart(2, '0')}`;
        return this._transloco.translate(
            'communication_messages.compose.expires_in',
            { time }
        );
    }

    /**
     * Prefill title from client name only when the user has not edited it yet.
     */
    private _setDefaultSenderTitle(name: string): void {
        const control = this.form.get('title');
        if (!control || control.dirty) {
            return;
        }

        control.setValue(this._normalizeSenderTitle(name));
    }

    private _normalizeSenderTitle(name: string): string {
        return `${name || 'Verifik'}`.substring(0, this.senderTitleMaxLength).split('.')[0] || 'Verifik';
    }

    get senderName(): string {
        return this._normalizeSenderTitle(this.form.get('title')?.value || 'Verifik');
    }

    get selectedCountry(): CountryDialCode | undefined {
        const iso = this.form.get('countryIso')?.value;
        if (!iso) return undefined;
        return this.allPhoneCountryCodes.find((c) => c.countryCode === iso);
    }

    get selectedDialCode(): string {
        return this.selectedCountry?.dialCode || '';
    }

    get selectedCountryName(): string {
        return this.selectedCountry?.name || '';
    }

    trackByPhoneCountryCode(_index: number, country: CountryDialCode): string {
        return country.countryCode;
    }

    onCountryCodeSearchChange(searchTerm: string): void {
        this.countryCodeSearchTerm = searchTerm;
        this.filteredPhoneCountryCodes =
            this._countryService.filterCountryDialCodes(
                this.allPhoneCountryCodes,
                searchTerm
            );
        this._cdr.markForCheck();
    }

    clearCountryCodeSearch(event?: Event): void {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.countryCodeSearchTerm = '';
        this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
        this._cdr.detectChanges();
        setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 0);
    }

    onCountryCodeSelectOpened(): void {
        this.countryCodeSearchTerm = '';
        this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
        this._cdr.markForCheck();
        setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 100);
    }

    onCountryCodeSelectClosed(): void {
        this.countryCodeSearchTerm = '';
        this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
        this._cdr.markForCheck();
    }

    get titleKey(): string {
        return this.phoneGateway === 'sms'
            ? 'communication_messages.compose.title_sms'
            : 'communication_messages.compose.title_whatsapp';
    }

    get listLink(): string {
        return this.phoneGateway === 'sms'
            ? '/smart-tools/sms-messages'
            : '/smart-tools/whatsapp-messages';
    }

    get previewBody(): string {
        return buildOtpPreviewBody(
            this.phoneGateway,
            this.senderName || 'Verifik',
            this.form.get('language')?.value || 'en',
            MASKED_OTP
        );
    }

    get previewPhone(): string {
        const countryCode = this.selectedDialCode || '';
        const phone = this.form.value.phone || '••••••••';
        return `${countryCode}${phone}`;
    }

    goBack(): void {
        this._router.navigateByUrl(this.listLink);
    }

    submit(): void {
        if (this.form.invalid || this.sending) {
            this.form.markAllAsTouched();
            return;
        }

        const dialCode = this.selectedDialCode;
        if (!dialCode) {
            this.form.markAllAsTouched();
            return;
        }

        this.sending = true;
        this._cdr.markForCheck();

        const { phone, language, title } = this.form.getRawValue();

        this._service
            .sendManual({
                countryCode: dialCode,
                phone: phone!,
                phoneGateway: this.phoneGateway,
                title: this._normalizeSenderTitle(title || 'Verifik'),
                language: language || 'en',
            })
            .subscribe({
                next: (response) => this._onSendSuccess(response),
                error: (err) => this._onSendError(err),
            });
    }

    private _onSendSuccess(response: any): void {
        this.sending = false;
        this.lastApiResponse = {
            ok: Boolean(response?.data?.sent),
            status: 200,
            body: response,
            operation: 'send',
        };

        if (!response?.data?.sent) {
            this._cdr.markForCheck();
            this._snack.open(
                this._transloco.translate('communication_messages.compose.error'),
                undefined,
                { duration: 4000 }
            );
            return;
        }

        this.otpSent = true;
        this.otpControl.reset('');
        this.otpControl.enable({ emitEvent: false });
        this.pendingValidationId = response.data._id || null;
        if (response.data.expiresAt) {
            this._startExpiryCountdown(response.data.expiresAt);
        } else {
            this.expiresAt = null;
            this.remainingSeconds = 0;
            this._clearExpiryTimer();
        }

        this._snack.open(
            this._transloco.translate('communication_messages.compose.success'),
            undefined,
            { duration: 3000 }
        );
        this._cdr.markForCheck();
    }

    private _onSendError(err: any): void {
        this.sending = false;
        this.lastApiResponse = {
            ok: false,
            status: err?.status,
            body: err?.error || { message: err?.message },
            operation: 'send',
        };
        this._cdr.markForCheck();
        const message =
            err?.error?.message ||
            this._transloco.translate('communication_messages.compose.error');
        this._snack.open(message, undefined, { duration: 4000 });
    }

    get canVerify(): boolean {
        return (
            this.otpSent &&
            !this.verifying &&
            !this.isOtpExpired &&
            this.otpControl.valid
        );
    }

    verify(): void {
        if (!this.canVerify) {
            this.otpControl.markAsTouched();
            return;
        }

        const dialCode = this.selectedDialCode;
        const phone = this.form.get('phone')?.value;
        const otpRaw = this.otpControl.value;
        if (!dialCode || !phone || !otpRaw) {
            return;
        }

        this.verifying = true;
        this._cdr.markForCheck();

        this._service
            .verify({
                countryCode: dialCode,
                phone,
                otp: Number(otpRaw),
                phoneGateway: this.phoneGateway,
            })
            .subscribe({
                next: (response) => this._onVerifySuccess(response),
                error: (err) => void this._onVerifyError(err),
            });
    }

    private _onVerifySuccess(response: any): void {
        this.verifying = false;
        const validated = response?.data?.status === 'validated';
        this.lastApiResponse = {
            ok: validated,
            status: 200,
            body: response,
            operation: 'verify',
        };
        this._cdr.markForCheck();

        if (!validated) {
            this._snack.open(
                this._transloco.translate(
                    'communication_messages.compose.verify_error'
                ),
                undefined,
                { duration: 4000 }
            );
            this._scrollToLastApiResponse();
            return;
        }

        this._clearExpiryTimer();
        this._snack.open(
            this._transloco.translate(
                'communication_messages.compose.verify_success'
            ),
            undefined,
            { duration: 3000 }
        );
        this._scrollToLastApiResponse();
    }

    private async _onVerifyError(err: any): Promise<void> {
        this.verifying = false;
        this.lastApiResponse = {
            ok: false,
            status: err?.status,
            body: err?.error || { message: err?.message },
            operation: 'verify',
        };
        this._cdr.markForCheck();

        const message = await this._resolveVerifyErrorMessage(err);
        this._snack.open(message, undefined, { duration: 5000 });
        this._scrollToLastApiResponse();
    }

    /**
     * Bring the developer "Last API response" panel into view after verify.
     */
    private _scrollToLastApiResponse(): void {
        setTimeout(() => {
            document
                .getElementById('communication-last-api-response')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    }

    private async _resolveVerifyErrorMessage(err: any): Promise<string> {
        const apiMessage = `${err?.error?.message || ''}`.trim();

        if (apiMessage === 'phoneValidation_has_expired') {
            this.remainingSeconds = 0;
            this._clearExpiryTimer();
            return this._t('error_expired');
        }

        if (apiMessage === 'phone_validation_already_validated') {
            return this._t('error_already_validated');
        }

        if (apiMessage === 'otp_does_not_match') {
            return this._t('error_otp_mismatch');
        }

        if (apiMessage === 'phone_validation_not_found') {
            return this._diagnoseNotFoundMessage();
        }

        return apiMessage || this._t('verify_error');
    }

    /**
     * When API only says not found, check local expiry and/or GET by id.
     */
    private async _diagnoseNotFoundMessage(): Promise<string> {
        if (this.isOtpExpired || this._isLocalExpiryPast()) {
            this.remainingSeconds = 0;
            this._clearExpiryTimer();
            return this._t('error_expired');
        }

        if (!this.pendingValidationId) {
            return this._t('error_not_found');
        }

        try {
            const response = await firstValueFrom(
                this._service.getById(this.pendingValidationId)
            );
            const record = response?.data || response;
            if (!record) {
                return this._t('error_not_found');
            }

            if (record.status === 'validated') {
                return this._t('error_already_validated');
            }

            if (
                record.status === 'failed' ||
                (record.expiresAt && new Date(record.expiresAt).getTime() <= Date.now())
            ) {
                this.remainingSeconds = 0;
                this._clearExpiryTimer();
                return this._t('error_expired');
            }
        } catch {
            // Fall through to generic not-found copy.
        }

        return this._t('error_not_found');
    }

    private _isLocalExpiryPast(): boolean {
        return Boolean(this.expiresAt && this.expiresAt.getTime() <= Date.now());
    }

    private _t(key: string): string {
        return this._transloco.translate(
            `communication_messages.compose.${key}`
        );
    }
}
