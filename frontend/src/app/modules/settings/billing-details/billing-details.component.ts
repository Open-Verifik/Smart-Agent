import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {
    MatAutocompleteModule,
    MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Observable, Subject, takeUntil } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClientSettings, SettingsService } from '../settings.service';

interface CountryCodeOption {
    code: string;
    name: string;
}

interface DocumentTypeOption {
    value: string;
    label: string;
}

@Component({
    selector: 'app-billing-details',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    templateUrl: './billing-details.component.html',
    styleUrl: './billing-details.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillingDetailsComponent implements OnInit, OnDestroy {
    @Input() user: any;

    private _unsubscribeAll = new Subject<void>();
    payerForm: FormGroup;
    addressForm: FormGroup;
    billingData: ClientSettings = null;
    billingLoaded = false;
    isSavingBilling = false;

    /** JSON snapshot of the last successfully loaded/saved state — basis for dirty tracking. */
    private _initialSnapshot = '';

    filteredDocumentTypes: Observable<DocumentTypeOption[]>;
    filteredBusinessCountryCodes: Observable<CountryCodeOption[]>;
    filteredPersonCountryCodes: Observable<CountryCodeOption[]>;

    personDocumentTypes: DocumentTypeOption[] = [];
    businessDocumentTypes: DocumentTypeOption[] = [];

    billingCountryCodes: CountryCodeOption[] = [
        { code: '+1', name: 'United States' },
        { code: '+1', name: 'Canada' },
        { code: '+52', name: 'Mexico' },
        { code: '+57', name: 'Colombia' },
        { code: '+54', name: 'Argentina' },
        { code: '+56', name: 'Chile' },
        { code: '+55', name: 'Brazil' },
        { code: '+51', name: 'Peru' },
        { code: '+58', name: 'Venezuela' },
        { code: '+593', name: 'Ecuador' },
        { code: '+591', name: 'Bolivia' },
        { code: '+595', name: 'Paraguay' },
        { code: '+598', name: 'Uruguay' },
        { code: '+507', name: 'Panama' },
        { code: '+506', name: 'Costa Rica' },
        { code: '+505', name: 'Nicaragua' },
        { code: '+504', name: 'Honduras' },
        { code: '+503', name: 'El Salvador' },
        { code: '+502', name: 'Guatemala' },
        { code: '+44', name: 'United Kingdom' },
        { code: '+33', name: 'France' },
        { code: '+49', name: 'Germany' },
        { code: '+39', name: 'Italy' },
        { code: '+34', name: 'Spain' },
        { code: '+351', name: 'Portugal' },
        { code: '+31', name: 'Netherlands' },
        { code: '+32', name: 'Belgium' },
        { code: '+41', name: 'Switzerland' },
        { code: '+43', name: 'Austria' },
        { code: '+46', name: 'Sweden' },
        { code: '+47', name: 'Norway' },
        { code: '+45', name: 'Denmark' },
        { code: '+358', name: 'Finland' },
        { code: '+48', name: 'Poland' },
        { code: '+81', name: 'Japan' },
        { code: '+82', name: 'South Korea' },
        { code: '+86', name: 'China' },
        { code: '+91', name: 'India' },
        { code: '+61', name: 'Australia' },
        { code: '+64', name: 'New Zealand' },
        { code: '+971', name: 'United Arab Emirates' },
        { code: '+966', name: 'Saudi Arabia' },
        { code: '+972', name: 'Israel' },
        { code: '+90', name: 'Turkey' },
    ];

    constructor(
        private _formBuilder: FormBuilder,
        private _settingsService: SettingsService,
        private _cdr: ChangeDetectorRef,
        private _snackBar: MatSnackBar,
        private _translocoService: TranslocoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this._initBillingForms();
        this._initDocumentTypes();
    }

    ngOnInit(): void {
        this.loadBillingData();
        this._setupBillingFilters();
        this._setupDirtyTracking();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    private _initBillingForms(): void {
        this.payerForm = this._formBuilder.group({
            type: ['person'],
            business_name: [''],
            business_documentType: [''],
            business_documentNumber: [''],
            business_countryCode: [''],
            business_country: [''],
            business_phone: [''],
            business_email: [''],
            business_legalRepresentative: [''],
            person_name: [''],
            person_documentType: [''],
            person_documentNumber: [''],
            person_countryCode: [''],
            person_country: [''],
            person_phone: [''],
            person_email: [''],
        });

        this.addressForm = this._formBuilder.group({
            address: ['', Validators.required],
            city: ['', Validators.required],
            province: ['', Validators.required],
            country: ['', Validators.required],
            postalCode: ['', Validators.required],
        });
    }

    private _initDocumentTypes(): void {
        this.personDocumentTypes = [
            { value: 'CC', label: 'settings.billing.document_types.CC' },
            { value: 'CE', label: 'settings.billing.document_types.CE' },
            { value: 'TI', label: 'settings.billing.document_types.TI' },
            { value: 'NIT', label: 'settings.billing.document_types.NIT' },
            { value: 'PPT', label: 'settings.billing.document_types.PPT' },
            { value: 'DNI', label: 'settings.billing.document_types.DNI' },
            { value: 'RUC', label: 'settings.billing.document_types.RUC' },
            { value: 'CURP', label: 'settings.billing.document_types.CURP' },
            { value: 'RUT', label: 'settings.billing.document_types.RUT' },
        ];

        this.businessDocumentTypes = [
            {
                value: 'INTERNATIONAL_TAX',
                label: 'settings.billing.document_types.INTERNATIONAL_TAX',
            },
            { value: 'NIT', label: 'settings.billing.document_types.NIT' },
        ];
    }

    loadBillingData(): void {
        if (!this.user?._id || this.billingLoaded) return;

        this._settingsService
            .getBillingConfig(this.user._id)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (response) => {
                    const settings = response?.data ?? null;
                    this.billingData = settings;
                    this.billingLoaded = true;

                    if (settings?.invoiceSettings) {
                        const invoice = settings.invoiceSettings;

                        this.payerForm.patchValue({ type: invoice.type || 'person' });

                        if (invoice.business) {
                            this.payerForm.patchValue({
                                business_name: invoice.business.business_name,
                                business_documentType: invoice.business.business_documentType,
                                business_documentNumber: invoice.business.business_documentNumber,
                                business_countryCode: this._findCountryOption(
                                    invoice.business.business_countryCode
                                ),
                                business_phone: invoice.business.business_phone,
                                business_email: invoice.business.business_email,
                                business_legalRepresentative:
                                    invoice.business.business_legalRepresentative,
                            });
                        }

                        if (invoice.person) {
                            this.payerForm.patchValue({
                                person_name: invoice.person.person_name,
                                person_documentType: invoice.person.person_documentType,
                                person_documentNumber: invoice.person.person_documentNumber,
                                person_countryCode: this._findCountryOption(
                                    invoice.person.person_countryCode
                                ),
                                person_phone: invoice.person.person_phone,
                                person_email: invoice.person.person_email,
                            });
                        }

                        if (invoice.address) {
                            this.addressForm.patchValue({
                                address: invoice.address.address,
                                city: invoice.address.city,
                                province: invoice.address.province,
                                country: invoice.address.country,
                                postalCode: invoice.address.postalCode,
                            });
                        }
                    }

                    this._captureSnapshot();
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.billingLoaded = true;
                    this._captureSnapshot();
                    this._cdr.markForCheck();
                },
            });
    }

    private _findCountryOption(code: string): any {
        if (!code) return '';
        const found = this.billingCountryCodes.find((c) => c.code === code || c.name === code);
        return found || code;
    }

    saveBillingConfig(): void {
        if (this.payerForm.invalid || this.addressForm.invalid || !this.user?._id) {
            return;
        }

        this.isSavingBilling = true;
        this._cdr.markForCheck();

        const payerValue = this.payerForm.value;
        const addressValue = this.addressForm.value;
        const type = payerValue.type;

        const billingData: any = {
            client: this.user._id,
            invoiceSettings: {
                type: type,
                address: addressValue,
                business:
                    type === 'business'
                        ? {
                              business_name: payerValue.business_name,
                              business_documentType: payerValue.business_documentType,
                              business_documentNumber: payerValue.business_documentNumber,
                              business_countryCode:
                                  typeof payerValue.business_countryCode === 'object'
                                      ? payerValue.business_countryCode.code
                                      : payerValue.business_countryCode,
                              business_country: 'Colombia',
                              business_phone: payerValue.business_phone,
                              business_email: payerValue.business_email,
                              business_legalRepresentative: payerValue.business_legalRepresentative,
                          }
                        : null,
                person:
                    type === 'person'
                        ? {
                              person_name: payerValue.person_name,
                              person_documentType: payerValue.person_documentType,
                              person_documentNumber: payerValue.person_documentNumber,
                              person_countryCode:
                                  typeof payerValue.person_countryCode === 'object'
                                      ? payerValue.person_countryCode.code
                                      : payerValue.person_countryCode,
                              person_country: 'Colombia',
                              person_phone: payerValue.person_phone,
                              person_email: payerValue.person_email,
                          }
                        : null,
            },
        };

        this._settingsService
            .saveBillingConfig(billingData)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (response) => {
                    this.billingData = response.data;
                    this._captureSnapshot();
                    const message = this._translocoService.translate(
                        'settings.billing.save_success'
                    );
                    this._snackBar.open(message, null, {
                        duration: 3000,
                        panelClass: ['billing-details__snack--success'],
                    });
                    this.isSavingBilling = false;
                    this._cdr.markForCheck();

                    const returnUrl = this._route.snapshot.queryParams['returnUrl'];
                    if (returnUrl && returnUrl.startsWith('/') && !returnUrl.includes('//')) {
                        this._router.navigateByUrl(returnUrl);
                    }
                },
                error: (error) => {
                    const message =
                        error?.error?.message ||
                        this._translocoService.translate('settings.billing.save_error');
                    this._snackBar.open(message, null, {
                        duration: 3000,
                        panelClass: ['billing-details__snack--error'],
                    });
                    this.isSavingBilling = false;
                    this._cdr.markForCheck();
                },
            });
    }

    /**
     * Reverts both forms back to the last persisted snapshot.
     */
    discardChanges(): void {
        if (!this._initialSnapshot) return;

        try {
            const snap = JSON.parse(this._initialSnapshot);
            this.payerForm.reset(snap.payer);
            this.addressForm.reset(snap.address);
            this._cdr.markForCheck();
        } catch {
            // Fallback: nothing to revert to.
        }
    }

    isABusiness(): boolean {
        return this.payerForm.get('type').value === 'business';
    }

    isAPerson(): boolean {
        return this.payerForm.get('type').value === 'person';
    }

    /** True when the current form state differs from the last persisted snapshot. */
    get isDirty(): boolean {
        if (!this._initialSnapshot) return false;
        return this._currentSnapshotString() !== this._initialSnapshot;
    }

    /** Used to drive the "Complete / Incomplete" status pill. */
    get isComplete(): boolean {
        if (!this.billingLoaded) return false;
        if (this.addressForm.invalid) return false;
        const value = this.payerForm.value;
        const type = value.type;
        if (type === 'business') {
            return !!(
                value.business_name &&
                value.business_documentType &&
                value.business_documentNumber &&
                value.business_email
            );
        }
        return !!(
            value.person_name &&
            value.person_documentType &&
            value.person_documentNumber &&
            value.person_email
        );
    }

    private _setupBillingFilters(): void {
        this.filteredDocumentTypes = this.payerForm.valueChanges.pipe(
            startWith(''),
            map(() => {
                const source = this.isABusiness()
                    ? this.businessDocumentTypes
                    : this.personDocumentTypes;
                const control = this.isABusiness()
                    ? this.payerForm.get('business_documentType')
                    : this.payerForm.get('person_documentType');
                const value = control?.value;
                const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
                return filterValue
                    ? source.filter((opt) =>
                          this._translocoService
                              .translate(opt.label)
                              .toLowerCase()
                              .includes(filterValue)
                      )
                    : source;
            })
        );

        this.filteredBusinessCountryCodes = this.payerForm
            .get('business_countryCode')
            .valueChanges.pipe(
                startWith(''),
                map((value) => this._filterCountryCodes(value))
            );

        this.filteredPersonCountryCodes = this.payerForm
            .get('person_countryCode')
            .valueChanges.pipe(
                startWith(''),
                map((value) => this._filterCountryCodes(value))
            );
    }

    /**
     * Triggers change detection on every form mutation so the dirty/complete pills
     * and Save button state stay in sync without explicit subscriptions everywhere.
     */
    private _setupDirtyTracking(): void {
        this.payerForm.valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => this._cdr.markForCheck());
        this.addressForm.valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => this._cdr.markForCheck());
    }

    private _filterCountryCodes(value: string | CountryCodeOption): CountryCodeOption[] {
        if (!value || (typeof value === 'string' && value.trim().length === 0)) {
            return this.billingCountryCodes;
        }

        const filterValue =
            typeof value === 'string'
                ? value.toLowerCase().trim()
                : `${value.code} ${value.name}`.toLowerCase();

        return this.billingCountryCodes.filter(
            (country) =>
                country.name.toLowerCase().includes(filterValue) ||
                country.code.toLowerCase().includes(filterValue) ||
                country.code.replace('+', '').includes(filterValue)
        );
    }

    displayCountryCodeFn(country: CountryCodeOption): string {
        return country && country.code ? `${country.code} ${country.name}` : '';
    }

    displayDocumentTypeFn = (value: string): string => {
        if (!value) return '';
        return (
            this._translocoService?.translate('settings.billing.document_types.' + value) ?? value
        );
    };

    onCountryBlur(type: 'business' | 'person'): void {
        const controlName = type === 'business' ? 'business_countryCode' : 'person_countryCode';
        const control = this.payerForm.get(controlName);
        if (control.value && typeof control.value === 'string') {
            const match = this.billingCountryCodes.find(
                (c) =>
                    c.name.toLowerCase() === control.value.toLowerCase() ||
                    c.code === control.value ||
                    `${c.code} ${c.name}`.toLowerCase() === control.value.toLowerCase()
            );

            if (match) {
                control.setValue(match);
            }
        }
    }

    onCountryCodeSelected(_event: MatAutocompleteSelectedEvent, _type: 'business' | 'person'): void {
        // No-op for now; selection state lives in the form control.
    }

    /** Stable JSON representation of both forms used for dirty-comparison. */
    private _currentSnapshotString(): string {
        return JSON.stringify({
            payer: this.payerForm.getRawValue(),
            address: this.addressForm.getRawValue(),
        });
    }

    private _captureSnapshot(): void {
        this._initialSnapshot = this._currentSnapshotString();
    }
}
