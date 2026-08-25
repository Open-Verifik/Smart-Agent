import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    ValidationErrors,
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
import { CountryService } from 'app/core/services/country.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId } from '../utils/settings-business-user.util';
import { ClientSettings, SettingsService } from '../settings.service';
import {
    BillingDocumentTypeOption,
    filterBillingDocumentTypes,
    getBillingDocumentTypes,
} from './billing-document-types.util';

interface CountryCodeOption {
    code: string;
    name: string;
}

const COLOMBIA_COUNTRY = 'Colombia';

const nitFormatValidator = (control: AbstractControl): ValidationErrors | null => {
    const digits = `${control.value || ''}`.replace(/\D/g, '');

    if (!digits || digits.length < 5) {
        return { nitFormat: true };
    }

    return null;
};

@Component({
    selector: 'app-billing-details',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        SettingsBusinessAccountEmptyStateComponent,
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
export class BillingDetailsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() user: unknown;
    @Output() userChange = new EventEmitter<unknown>();

    private _unsubscribeAll = new Subject<void>();
    payerForm: FormGroup;
    addressForm: FormGroup;
    billingData: ClientSettings = null;
    billingLoaded = false;
    isSavingBilling = false;

    businessNameError = '';
    businessDocumentError = '';
    personNameError = '';
    personDocumentError = '';

    /** JSON snapshot of the last successfully loaded/saved state — basis for dirty tracking. */
    private _initialSnapshot = '';

    filteredDocumentTypes: Observable<BillingDocumentTypeOption[]>;
    filteredBusinessCountryCodes: Observable<CountryCodeOption[]>;
    filteredPersonCountryCodes: Observable<CountryCodeOption[]>;
    filteredBusinessBillingCountries: Observable<CountryCodeOption[]>;
    filteredPersonBillingCountries: Observable<CountryCodeOption[]>;

    billingCountryCodes: CountryCodeOption[] = [];

    constructor(
        private _formBuilder: FormBuilder,
        private _settingsService: SettingsService,
        private _countryService: CountryService,
        private _cdr: ChangeDetectorRef,
        private _snackBar: MatSnackBar,
        private _translocoService: TranslocoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.billingCountryCodes = this._countryService.countryDialCodes.map((country) => ({
            code: country.dialCode,
            name: country.name,
        }));
        this._initBillingForms();
    }

    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    onBusinessAccountLinked(account: unknown): void {
        this.userChange.emit(account);
        this.billingLoaded = false;
        this.loadBillingData();
    }

    ngOnInit(): void {
        this._setupBillingFilters();
        this._setupDirtyTracking();
        this._updatePayerValidators();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes['user']) return;

        const prevId = getBusinessUserClientId(changes['user'].previousValue);
        const nextId = getBusinessUserClientId(changes['user'].currentValue);

        if (prevId === nextId && this.billingLoaded) return;

        this.billingLoaded = false;
        this.loadBillingData();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    private _initBillingForms(): void {
        this.payerForm = this._formBuilder.group({
            type: ['person'],
            business_name: [''],
            business_country: [''],
            business_documentType: [''],
            business_documentNumber: [''],
            business_countryCode: [''],
            business_phone: [''],
            business_email: [''],
            business_legalRepresentative: [''],
            person_name: [''],
            person_country: [''],
            person_documentType: [''],
            person_documentNumber: [''],
            person_countryCode: [''],
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

    getBusinessDocumentTypes(): BillingDocumentTypeOption[] {
        return getBillingDocumentTypes(this.payerForm?.get('business_country')?.value, 'business');
    }

    getPersonDocumentTypes(): BillingDocumentTypeOption[] {
        return getBillingDocumentTypes(this.payerForm?.get('person_country')?.value, 'person');
    }

    loadBillingData(): void {
        const clientId = this.userClientId;

        if (!clientId) {
            this.billingLoaded = true;
            this._cdr.markForCheck();
            return;
        }

        if (this.billingLoaded) return;

        this._settingsService
            .getBillingConfig(clientId)
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
                                business_country: this._resolveBillingCountry(
                                    invoice.business.business_country
                                ),
                                business_documentType: invoice.business.business_documentType,
                                business_documentNumber: invoice.business.business_documentNumber,
                                business_countryCode: this._findCountryOption(
                                    invoice.business.business_countryCode,
                                    invoice.business.business_country
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
                                person_country: this._resolveBillingCountry(
                                    invoice.person.person_country
                                ),
                                person_documentType: invoice.person.person_documentType,
                                person_documentNumber: invoice.person.person_documentNumber,
                                person_countryCode: this._findCountryOption(
                                    invoice.person.person_countryCode,
                                    invoice.person.person_country
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

                        this._updatePayerValidators();
                        if (invoice.business) {
                            this._syncDocumentTypeForCountry('business');
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

    saveBillingConfig(): void {
        this._clearFieldErrors();
        this._updatePayerValidators();
        this.payerForm.markAllAsTouched();
        this.addressForm.markAllAsTouched();

        const clientId = this.userClientId;

        if (this.payerForm.invalid || this.addressForm.invalid || !clientId) {
            this._cdr.markForCheck();
            return;
        }

        this.isSavingBilling = true;
        this._cdr.markForCheck();

        const payerValue = this.payerForm.value;
        const addressValue = this.addressForm.value;
        const type = payerValue.type;

        const billingData: any = {
            client: clientId,
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
                              business_country: this._resolveCountryName(
                                  payerValue.business_country
                              ),
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
                              person_country: this._resolveCountryName(payerValue.person_country),
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
                    const resolved = this._resolveSaveErrorMessage(error);
                    this.businessNameError = resolved.businessNameError;
                    this.businessDocumentError = resolved.businessDocumentError;
                    this.personNameError = resolved.personNameError;
                    this.personDocumentError = resolved.personDocumentError;

                    this._snackBar.open(resolved.message, null, {
                        duration: 4000,
                        panelClass: ['billing-details__snack--error'],
                    });
                    this.isSavingBilling = false;
                    this._cdr.markForCheck();
                },
            });
    }

    discardChanges(): void {
        if (!this._initialSnapshot) return;

        try {
            const snap = JSON.parse(this._initialSnapshot);
            this.payerForm.reset(snap.payer);
            this.addressForm.reset(snap.address);
            this._clearFieldErrors();
            this._updatePayerValidators();
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

    get isDirty(): boolean {
        if (!this._initialSnapshot) return false;
        return this._currentSnapshotString() !== this._initialSnapshot;
    }

    get isComplete(): boolean {
        if (!this.billingLoaded) return false;
        if (this.addressForm.invalid) return false;

        if (this.isABusiness()) {
            return (
                !this.payerForm.get('business_name')?.invalid &&
                !this.payerForm.get('business_country')?.invalid &&
                !this.payerForm.get('business_documentType')?.invalid &&
                !this.payerForm.get('business_documentNumber')?.invalid &&
                !this.payerForm.get('business_email')?.invalid
            );
        }

        return (
            !this.payerForm.get('person_name')?.invalid &&
            !this.payerForm.get('person_country')?.invalid &&
            !this.payerForm.get('person_documentType')?.invalid &&
            !this.payerForm.get('person_documentNumber')?.invalid &&
            !this.payerForm.get('person_email')?.invalid
        );
    }

    displayCountryCodeFn(country: CountryCodeOption): string {
        return country && country.code ? `${country.code} ${country.name}` : '';
    }

    displayBillingCountryFn = (country: CountryCodeOption | string): string => {
        if (!country) return '';
        return typeof country === 'string' ? country : country.name;
    };

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

    onBillingCountryBlur(type: 'business' | 'person'): void {
        const controlName = type === 'business' ? 'business_country' : 'person_country';
        const control = this.payerForm.get(controlName);

        if (!control?.value || typeof control.value !== 'string') return;

        const match = this.billingCountryCodes.find(
            (c) => c.name.toLowerCase() === control.value.toLowerCase()
        );

        if (match) {
            this._applyBillingCountrySelection(type, match);
        }
    }

    onCountryCodeSelected(_event: MatAutocompleteSelectedEvent, type: 'business' | 'person'): void {
        const controlName = type === 'business' ? 'business_countryCode' : 'person_countryCode';
        const selected = this.payerForm.get(controlName)?.value as CountryCodeOption;

        if (selected?.name) {
            const countryControl = this.payerForm.get(
                type === 'business' ? 'business_country' : 'person_country'
            );
            countryControl?.setValue(selected, { emitEvent: false });
            this._syncDocumentTypeForCountry(type);
            this._updatePayerValidators();
            this._cdr.markForCheck();
        }
    }

    onBillingCountrySelected(
        event: MatAutocompleteSelectedEvent,
        type: 'business' | 'person'
    ): void {
        this._applyBillingCountrySelection(type, event.option.value as CountryCodeOption);
    }

    private _applyBillingCountrySelection(
        type: 'business' | 'person',
        country: CountryCodeOption
    ): void {
        const countryControl = this.payerForm.get(
            type === 'business' ? 'business_country' : 'person_country'
        );
        const codeControl = this.payerForm.get(
            type === 'business' ? 'business_countryCode' : 'person_countryCode'
        );

        countryControl?.setValue(country);
        codeControl?.setValue(country, { emitEvent: false });
        this._syncDocumentTypeForCountry(type);

        const documentControlName =
            type === 'business' ? 'business_documentType' : 'person_documentType';
        const allowed =
            type === 'business' ? this.getBusinessDocumentTypes() : this.getPersonDocumentTypes();

        if (!this.payerForm.get(documentControlName)?.value && allowed[0]?.value) {
            this.payerForm.patchValue({ [documentControlName]: allowed[0].value });
        }

        this._updatePayerValidators();
        this._cdr.markForCheck();
    }

    private _syncDocumentTypeForCountry(type: 'business' | 'person'): void {
        const isBusiness = type === 'business';
        const allowed = isBusiness
            ? this.getBusinessDocumentTypes()
            : this.getPersonDocumentTypes();
        const controlName = isBusiness ? 'business_documentType' : 'person_documentType';
        const current = this.payerForm.get(controlName)?.value;

        if (current && !allowed.some((option) => option.value === current)) {
            this.payerForm.patchValue({
                [controlName]: allowed[0]?.value || '',
                [isBusiness ? 'business_documentNumber' : 'person_documentNumber']: '',
            });
        }
    }

    private _setupBillingFilters(): void {
        this.filteredDocumentTypes = this.payerForm.valueChanges.pipe(
            startWith(''),
            map(() => {
                const source = this.isABusiness()
                    ? this.getBusinessDocumentTypes()
                    : this.getPersonDocumentTypes();
                const control = this.isABusiness()
                    ? this.payerForm.get('business_documentType')
                    : this.payerForm.get('person_documentType');
                return filterBillingDocumentTypes(source, control?.value, (key) =>
                    this._translocoService.translate(key)
                );
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

        this.filteredBusinessBillingCountries = this.payerForm
            .get('business_country')
            .valueChanges.pipe(
                startWith(''),
                map((value) => this._filterCountryCodes(value))
            );

        this.filteredPersonBillingCountries = this.payerForm
            .get('person_country')
            .valueChanges.pipe(
                startWith(''),
                map((value) => this._filterCountryCodes(value))
            );
    }

    private _setupDirtyTracking(): void {
        this.payerForm.valueChanges.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
            this._clearFieldErrors();
            this._cdr.markForCheck();
        });
        this.addressForm.valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => this._cdr.markForCheck());

        this.payerForm
            .get('type')
            ?.valueChanges.pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this._updatePayerValidators();
                this._cdr.markForCheck();
            });

        [
            'business_country',
            'business_documentType',
            'person_country',
            'person_documentType',
        ].forEach((field) => {
            this.payerForm
                .get(field)
                ?.valueChanges.pipe(takeUntil(this._unsubscribeAll))
                .subscribe(() => {
                    this._updatePayerValidators();
                    this._cdr.markForCheck();
                });
        });
    }

    private _updatePayerValidators(): void {
        const businessFields = [
            'business_name',
            'business_country',
            'business_documentType',
            'business_documentNumber',
            'business_email',
        ];
        const personFields = [
            'person_name',
            'person_country',
            'person_documentType',
            'person_documentNumber',
            'person_email',
        ];

        businessFields.forEach((field) => {
            this.payerForm.get(field)?.clearValidators();
        });
        personFields.forEach((field) => {
            this.payerForm.get(field)?.clearValidators();
        });

        if (this.isABusiness()) {
            this.payerForm.get('business_name')?.setValidators([Validators.required]);
            this.payerForm.get('business_country')?.setValidators([Validators.required]);
            this.payerForm.get('business_documentType')?.setValidators([Validators.required]);
            this.payerForm.get('business_documentNumber')?.setValidators([Validators.required]);
            this.payerForm
                .get('business_email')
                ?.setValidators([Validators.required, Validators.email]);

            if (
                this._isColombia(this.payerForm.get('business_country')?.value) &&
                this.payerForm.get('business_documentType')?.value === 'NIT'
            ) {
                this.payerForm.get('business_documentNumber')?.addValidators(nitFormatValidator);
            }
        } else {
            this.payerForm.get('person_name')?.setValidators([Validators.required]);
            this.payerForm.get('person_country')?.setValidators([Validators.required]);
            this.payerForm.get('person_documentType')?.setValidators([Validators.required]);
            this.payerForm.get('person_documentNumber')?.setValidators([Validators.required]);
            this.payerForm
                .get('person_email')
                ?.setValidators([Validators.required, Validators.email]);
        }

        [...businessFields, ...personFields].forEach((field) => {
            this.payerForm.get(field)?.updateValueAndValidity({ emitEvent: false });
        });
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

    private _findCountryOption(code: string, countryName?: string): CountryCodeOption | string {
        if (!code && !countryName) return '';

        if (countryName) {
            const byName = this.billingCountryCodes.find(
                (c) => c.name.toLowerCase() === countryName.toLowerCase()
            );
            if (byName) return byName;
        }

        const found = this.billingCountryCodes.find((c) => c.code === code || c.name === code);
        return found || code;
    }

    private _resolveBillingCountry(value: string | CountryCodeOption): CountryCodeOption | string {
        if (!value) return '';

        if (typeof value === 'object' && value.name) {
            return value;
        }

        return this._findCountryOption('', `${value}`);
    }

    private _resolveCountryName(value: string | CountryCodeOption): string {
        if (!value) return '';

        if (typeof value === 'object' && value.name) {
            return value.name;
        }

        return `${value}`.trim();
    }

    private _isColombia(value: string | CountryCodeOption): boolean {
        const name = this._resolveCountryName(value);
        return name.toLowerCase() === COLOMBIA_COUNTRY.toLowerCase();
    }

    private _clearFieldErrors(): void {
        this.businessNameError = '';
        this.businessDocumentError = '';
        this.personNameError = '';
        this.personDocumentError = '';
    }

    private _emptySaveErrors(message: string) {
        return {
            message,
            businessNameError: '',
            businessDocumentError: '',
            personNameError: '',
            personDocumentError: '',
        };
    }

    private _resolveSaveErrorMessage(error: any): {
        message: string;
        businessNameError: string;
        businessDocumentError: string;
        personNameError: string;
        personDocumentError: string;
    } {
        const backendMessage = `${error?.error?.message || ''}`.trim();
        const fallback = this._translocoService.translate('settings.billing.save_error');
        const translate = (key: string) => this._translocoService.translate(key);

        switch (backendMessage) {
            case 'dian_nit_not_found':
                return {
                    ...this._emptySaveErrors(translate('settings.billing.dian_nit_not_found')),
                    businessDocumentError: translate('settings.billing.dian_nit_not_found'),
                };
            case 'dian_name_mismatch':
                return {
                    ...this._emptySaveErrors(translate('settings.billing.dian_name_mismatch')),
                    businessNameError: translate('settings.billing.dian_name_mismatch'),
                };
            case 'citizen_not_found':
                return {
                    ...this._emptySaveErrors(translate('settings.billing.citizen_not_found')),
                    personDocumentError: translate('settings.billing.citizen_not_found'),
                };
            case 'citizen_name_mismatch':
                return {
                    ...this._emptySaveErrors(translate('settings.billing.citizen_name_mismatch')),
                    personNameError: translate('settings.billing.citizen_name_mismatch'),
                };
            case 'invalid_document_type':
                return this._emptySaveErrors(translate('settings.billing.invalid_document_type'));
            case 'missing_billing_field':
                return this._emptySaveErrors(translate('settings.billing.missing_billing_field'));
            default:
                return this._emptySaveErrors(backendMessage || fallback);
        }
    }

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
