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
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { CountryDialCode, CountryService } from 'app/core/services/country.service';
import { Subject, takeUntil } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SettingsService, StaffMember } from '../settings.service';

@Component({
    selector: 'app-staff-list',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
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
    showStaffCountryDropdown = false;

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
        this._initStaffForm();
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
        this._settingsService
            .getMySubscription(this.user._id)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (response) => {
                    if (response?.data?.subscriptionPlan) {
                        this.selectedSubscription = response.data.subscriptionPlan;
                        this.hasSubscription = true;
                        // Find the "chairs" addon to get the staff limit
                        const chairsAddon = this.selectedSubscription.changesInPrices?.find(
                            (addon: any) => addon?.addOn === 'chairs'
                        );
                        this.staffLimit = chairsAddon?.count || 0;
                    } else {
                        this.selectedSubscription = { name: 'PAYG' };
                        this.hasSubscription = false;
                        this.staffLimit = 0;
                    }
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.selectedSubscription = { name: 'PAYG' };
                    this.hasSubscription = false;
                    this.staffLimit = 0;
                    this._cdr.markForCheck();
                },
            });
    }

    canAddMoreStaff(): boolean {
        // If no subscription or PAYG, check if limit is 0 (no staff allowed)
        if (!this.hasSubscription || this.staffLimit === 0) {
            return false;
        }
        // Check if current count is less than limit
        return this.staffMembers.length < this.staffLimit;
    }

    openStaffModal(staff?: StaffMember): void {
        this._resetStaffForm();
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
