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
import { MatSnackBar } from '@angular/material/snack-bar';
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
        TranslocoModule,
    ],
    templateUrl: './billing-details.component.html',
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
        private _translocoService: TranslocoService
    ) {
        this._initBillingForms();
        this._initDocumentTypes();
    }

    ngOnInit(): void {
        this.loadBillingData();
        this._setupBillingFilters();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // Billing Form Initialization
    private _initBillingForms(): void {
        this.payerForm = this._formBuilder.group({
            type: ['person'],
            // Business fields
            business_name: [''],
            business_documentType: [''],
            business_documentNumber: [''],
            business_countryCode: [''],
            business_country: [''],
            business_phone: [''],
            business_email: [''],
            business_legalRepresentative: [''],
            // Person fields
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
            {
                value: 'CC',
                label: 'settings.billing.document_types.CC',
            },
            {
                value: 'CE',
                label: 'settings.billing.document_types.CE',
            },
            {
                value: 'TI',
                label: 'settings.billing.document_types.TI',
            },
            {
                value: 'NIT',
                label: 'settings.billing.document_types.NIT',
            },
            {
                value: 'PPT',
                label: 'settings.billing.document_types.PPT',
            },
            {
                value: 'DNI',
                label: 'settings.billing.document_types.DNI',
            },
            {
                value: 'RUC',
                label: 'settings.billing.document_types.RUC',
            },
            {
                value: 'CURP',
                label: 'settings.billing.document_types.CURP',
            },
            {
                value: 'RUT',
                label: 'settings.billing.document_types.RUT',
            },
        ];

        this.businessDocumentTypes = [
            {
                value: 'NO_TAX',
                label: 'settings.billing.document_types.NO_TAX',
            },
            {
                value: 'INTERNATIONAL_TAX',
                label: 'settings.billing.document_types.INTERNATIONAL_TAX',
            },
            {
                value: 'NIT',
                label: 'settings.billing.document_types.NIT',
            },
        ];
    }

    // Data Loading
    loadBillingData(): void {
        if (!this.user?._id || this.billingLoaded) return;

        this._settingsService
            .getBillingConfig(this.user._id)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (response) => {
                    const settings = response.data;
                    this.billingData = settings;
                    this.billingLoaded = true;

                    if (settings?.invoiceSettings) {
                        const invoice = settings.invoiceSettings;

                        // Set type
                        this.payerForm.patchValue({
                            type: invoice.type || 'person',
                        });

                        // Set business fields if available
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

                        // Set person fields if available
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

                        // Set address fields
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
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.billingLoaded = true;
                    this._cdr.markForCheck();
                },
            });
    }

    private _findCountryOption(code: string): any {
        if (!code) return '';
        const found = this.billingCountryCodes.find((c) => c.code === code || c.name === code);
        return found || code;
    }

    // Saving
    saveBillingConfig(): void {
        if (this.payerForm.invalid || this.addressForm.invalid || !this.user?._id) {
            return;
        }

        this.isSavingBilling = true;
        this._cdr.markForCheck();

        const payerValue = this.payerForm.value;
        const addressValue = this.addressForm.value;
        const type = payerValue.type;

        // Prepare billing object based on interface
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
                              business_country: 'Colombia', // Default or from form? Assuming default for now or extracted from code
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
                    const message = this._translocoService.translate(
                        'settings.billing.save_success'
                    );
                    this._snackBar.open(message, null, { duration: 3000 });
                    this.isSavingBilling = false;
                    this._cdr.markForCheck();
                },
                error: (error) => {
                    const message =
                        error?.error?.message ||
                        this._translocoService.translate('settings.billing.save_error');
                    this._snackBar.open(message, null, { duration: 3000 });
                    this.isSavingBilling = false;
                    this._cdr.markForCheck();
                },
            });
    }

    // Helpers
    isABusiness(): boolean {
        return this.payerForm.get('type').value === 'business';
    }

    isAPerson(): boolean {
        return this.payerForm.get('type').value === 'person';
    }

    // Filters and Display Fns
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
                    ? source.filter((opt) => opt.label.toLowerCase().includes(filterValue))
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

    displayDocumentTypeFn(value: string): string {
        return value;
    }

    onCountryBlur(type: 'business' | 'person'): void {
        const controlName = type === 'business' ? 'business_countryCode' : 'person_countryCode';
        const control = this.payerForm.get(controlName);
        if (control.value && typeof control.value === 'string') {
            // If the value is a string (user typed but didn't select), try to find a match or clear
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

    onCountryCodeSelected(event: MatAutocompleteSelectedEvent, type: 'business' | 'person'): void {
        // Handle selection if extra logic needed
    }
}
