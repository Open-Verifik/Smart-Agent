import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { CountryDialCode, CountryService } from 'app/core/services/country.service';
import { forkJoin, of, Subject, takeUntil } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { SettingsService, StaffMember } from '../settings.service';

@Component({
    selector: 'app-staff-list',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        TranslocoModule,
        RouterModule,
    ],
    templateUrl: './staff-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaffListComponent implements OnInit, OnChanges, OnDestroy {
    private static readonly _ACCESS_ENROLL_STAFF_BONUS = 5;

    @Input() user: any;
    @Output() staffChanged = new EventEmitter<void>();

    private _unsubscribeAll = new Subject<void>();

    staffMembers: StaffMember[] = [];
    staffLoaded = false;
    isLoadingStaff = false;
    isSavingStaff = false;
    editingStaff: StaffMember = null;
    staffForm: FormGroup;
    countryCodes: CountryDialCode[] = [];
    filteredStaffCountryCodes: CountryDialCode[] = [];
    isStaffCountryDropdownOpen = false;
    staffCountrySearchTerm = '';
    staffCountryDropdownPosition: { top: string; left: string } | null = null;

    // Subscription state for team limits
    selectedSubscription: any = null;
    staffLimit = 0;
    hasSubscription = false;

    @ViewChild('staffFormDialog') staffFormDialog: TemplateRef<any>;
    staffDialogRef: any;

    constructor(
        private _cdr: ChangeDetectorRef,
        private _settingsService: SettingsService,
        private _formBuilder: FormBuilder,
        private _countryService: CountryService,
        private _dialog: MatDialog,
        private _snackBar: MatSnackBar,
        private _translocoService: TranslocoService
    ) {
        this.countryCodes = this._countryService.countryDialCodes;
        this.filteredStaffCountryCodes = [...this.countryCodes];
        this._initStaffForm();
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (
            this.isStaffCountryDropdownOpen &&
            !target.closest('.staff-country-picker')
        ) {
            this.isStaffCountryDropdownOpen = false;
            this.staffCountryDropdownPosition = null;
            this._cdr.markForCheck();
        }
    }

    ngOnInit(): void {
        this.loadStaffData();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.user && !changes.user.firstChange && this.user) {
            this.loadStaffData();
        }
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    private _initStaffForm(): void {
        this.staffForm = this._formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            countryCode: ['+1'],
            phone: ['', [Validators.required, Validators.pattern(/^\d{8,15}$/)]],
            role: ['empleado'],
        });
    }

    loadStaffData(): void {
        if (!this.user?._id) return;

        this.isLoadingStaff = true;
        this._cdr.markForCheck();

        // Load subscription first to get the staff limit
        this._loadSubscription();

        this._settingsService
            .getStaff()
            .pipe(
                finalize(() => {
                    this.isLoadingStaff = false;
                    this.staffLoaded = true;
                    this._cdr.markForCheck();
                }),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe({
                next: (response) => {
                    this.staffMembers = response?.data || [];
                },
                error: () => {
                    this.staffMembers = [];
                },
            });
    }

    private _loadSubscription(): void {
        const clientId = this.user._id;
        const empty = of({ data: null });

        forkJoin({
            smartCheck: this._settingsService
                .getMySubscription(clientId)
                .pipe(catchError(() => empty)),
            smartAccess: this._settingsService
                .getSmartAccessPlan(clientId)
                .pipe(catchError(() => empty)),
            smartEnroll: this._settingsService
                .getSmartEnrollPlan(clientId)
                .pipe(catchError(() => empty)),
        })
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: ({ smartCheck, smartAccess, smartEnroll }) => {
                    this._applyTeamSubscriptionLimits(smartCheck, smartAccess, smartEnroll);
                },
                error: () => {
                    this._resetTeamSubscriptionState();
                },
            });
    }

    /**
     * SmartCheck chair count plus a one-time bonus when SmartAccess or SmartEnroll is active.
     */
    private _applyTeamSubscriptionLimits(smartCheckRes: any, accessRes: any, enrollRes: any): void {
        const subscriptionPlan = smartCheckRes?.data?.subscriptionPlan;

        const hasSmartCheck = !!subscriptionPlan;

        let chairCount = 0;

        if (subscriptionPlan) {
            const chairsAddon = subscriptionPlan.changesInPrices?.find(
                (addon: any) => addon?.addOn === 'chairs'
            );
            chairCount = chairsAddon?.count ?? 0;
        }

        const accessData = accessRes?.data;
        const enrollData = enrollRes?.data;
        const hasAccess = !!accessData && accessData.status === 'active';
        const hasEnroll = !!enrollData && enrollData.status === 'active';
        const accessEnrollBonus =
            hasAccess || hasEnroll ? StaffListComponent._ACCESS_ENROLL_STAFF_BONUS : 0;

        this.hasSubscription = hasSmartCheck || hasAccess || hasEnroll;
        this.staffLimit = chairCount + accessEnrollBonus;

        if (hasSmartCheck) {
            this.selectedSubscription = subscriptionPlan;
        } else if (hasAccess && hasEnroll) {
            this.selectedSubscription = {
                name: `${accessData.name} + ${enrollData.name}`,
            };
        } else if (hasAccess) {
            this.selectedSubscription = { name: accessData.name };
        } else if (hasEnroll) {
            this.selectedSubscription = { name: enrollData.name };
        } else {
            this.selectedSubscription = { name: 'PAYG' };
        }
        this._cdr.markForCheck();
    }

    private _resetTeamSubscriptionState(): void {
        this.selectedSubscription = { name: 'PAYG' };
        this.hasSubscription = false;
        this.staffLimit = 0;
        this._cdr.markForCheck();
    }

    canAddMoreStaff(): boolean {
        if (!this.hasSubscription || this.staffLimit === 0) {
            return false;
        }
        // Check if current count is less than limit
        return this.staffMembers.length < this.staffLimit;
    }

    openStaffModal(staff?: StaffMember): void {
        this._resetStaffForm();
        this._resetStaffCountryPicker();
        if (staff) {
            this.editingStaff = staff;
            this.staffForm.patchValue({
                name: staff.name,
                email: staff.email,
                countryCode: staff.countryCode || '+1',
                phone: staff.phone,
                role: staff.role || 'empleado',
            });
        }

        this.staffDialogRef = this._dialog.open(this.staffFormDialog, {
            width: '500px',
            maxWidth: '90vw',
        });
    }

    closeStaffDialog(): void {
        if (this.staffDialogRef) {
            this.staffDialogRef.close();
        }
        this._resetStaffForm();
        this._resetStaffCountryPicker();
    }

    private _resetStaffCountryPicker(): void {
        this.staffCountrySearchTerm = '';
        this.filteredStaffCountryCodes = [...this.countryCodes];
        this.isStaffCountryDropdownOpen = false;
        this.staffCountryDropdownPosition = null;
    }

    toggleStaffCountryDropdown(event: Event): void {
        event.stopPropagation();
        const opening = !this.isStaffCountryDropdownOpen;
        this.isStaffCountryDropdownOpen = opening;
        if (opening) {
            const btn = event.currentTarget as HTMLElement;
            const rect = btn.getBoundingClientRect();
            this.staffCountryDropdownPosition = {
                top: `${rect.bottom + 4}px`,
                left: `${rect.left}px`,
            };
        } else {
            this.staffCountryDropdownPosition = null;
        }
        this._cdr.markForCheck();
    }

    onStaffCountrySearchChange(value: string): void {
        this.staffCountrySearchTerm = value;
        this.filteredStaffCountryCodes = this._countryService.filterCountryDialCodes(
            this.countryCodes,
            value
        );
        this._cdr.markForCheck();
    }

    selectStaffCountry(country: CountryDialCode): void {
        this.staffForm.patchValue({ countryCode: country.dialCode });
        this._resetStaffCountryPicker();
        this._cdr.markForCheck();
    }

    getSelectedStaffCountry(): CountryDialCode | undefined {
        const code = this.staffForm?.get('countryCode')?.value as string | undefined;
        if (!code) return undefined;
        return this._countryService.getCountryByDialCode(code);
    }

    isStaffCountryRowSelected(country: CountryDialCode): boolean {
        const sel = this.getSelectedStaffCountry();
        return (
            !!sel &&
            sel.dialCode === country.dialCode &&
            sel.countryCode === country.countryCode
        );
    }

    private _resetStaffForm(): void {
        this.editingStaff = null;
        this.staffForm.reset({
            name: '',
            email: '',
            countryCode: '+1',
            phone: '',
            role: 'empleado',
        });
    }

    saveStaff(): void {
        if (this.staffForm.invalid || this.isSavingStaff) return;

        // Check staff limit before creating (not when editing)
        if (!this.editingStaff && !this.canAddMoreStaff()) {
            const message = this._translocoService.translate('settings.team.limit_reached');
            this._snackBar.open(message, null, { duration: 4000 });
            return;
        }

        this.isSavingStaff = true;
        this._cdr.markForCheck();

        const formValue = this.staffForm.value;
        const payload: Partial<StaffMember> = {
            name: formValue.name,
            email: formValue.email,
            countryCode: formValue.countryCode,
            phone: String(formValue.phone),
            role: formValue.role,
            client: this.user._id,
        };

        const saveOperation = this.editingStaff
            ? this._settingsService.updateStaff(this.editingStaff._id, payload)
            : this._settingsService.createStaff(payload);

        saveOperation
            .pipe(
                finalize(() => {
                    this.isSavingStaff = false;
                    this._cdr.markForCheck();
                }),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe({
                next: () => {
                    this.closeStaffDialog();
                    this.loadStaffData();
                    const message = this._translocoService.translate('settings.team.save_success');
                    this._snackBar.open(message, null, { duration: 3000 });
                    this.staffChanged.emit();
                },
                error: (error) => {
                    let message = this._translocoService.translate('settings.team.save_error');
                    // Check for specific backend error about subscription
                    if (error?.error?.message === 'cannot_create_staff' || error?.status === 412) {
                        message = this._translocoService.translate('settings.team.no_plan_error');
                    }
                    this._snackBar.open(message, null, { duration: 4000 });
                },
            });
    }

    deleteStaff(staff: StaffMember): void {
        if (!staff?._id) return;

        this._settingsService
            .deleteStaff(staff._id)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => {
                    this.loadStaffData();
                    const message = this._translocoService.translate(
                        'settings.team.delete_success'
                    );
                    this._snackBar.open(message, null, { duration: 3000 });
                    this.staffChanged.emit();
                },
                error: () => {
                    const message = this._translocoService.translate('settings.team.delete_error');
                    this._snackBar.open(message, null, { duration: 3000 });
                },
            });
    }

    reinviteStaff(staff: StaffMember): void {
        if (!staff?._id) return;

        this._settingsService
            .reinviteStaff(staff)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => {
                    const message = this._translocoService.translate(
                        'settings.team.reinvite_success'
                    );
                    this._snackBar.open(message, null, { duration: 3000 });
                },
                error: () => {
                    const message = this._translocoService.translate(
                        'settings.team.reinvite_error'
                    );
                    this._snackBar.open(message, null, { duration: 3000 });
                },
            });
    }

    getStaffInitials(name: string): string {
        if (!name) return '';
        const words = name.trim().split(/\s+/);
        return words
            .slice(0, 2)
            .map((w) => w[0]?.toUpperCase())
            .join('');
    }

    truncateEmail(email: string, maxLength = 25): string {
        if (!email || email.length <= maxLength) return email;
        return email.substring(0, maxLength) + '...';
    }
}
