import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostListener,
    inject,
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
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import type { ClientSettingsOverrideSnapshot } from 'app/core/client-settings/override-conditions';
import { resolveStaffSeatLimit } from 'app/core/client-settings/staff-seat-limit';
import { HasStaffPermissionDirective } from 'app/core/permissions/has-staff-permission.directive';
import {
    defaultPermissionsForRole,
    normalizePermissions,
    RESOURCE_MAP,
    resolveRoleSlug,
    SYSTEM_ROLE_METADATA,
    SYSTEM_ROLES,
} from 'app/core/permissions/staff-permission.constants';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import {
    ClientRoleDto,
    EndpointPolicy,
    PermissionMap,
    StaffTemporaryGrant,
    SystemRoleSlug,
    TeamDto,
} from 'app/core/permissions/staff-permission.types';
import { StaffRbacApiService } from 'app/core/permissions/staff-rbac-api.service';
import { CountryDialCode, CountryService } from 'app/core/services/country.service';
import { forkJoin, of, Subject, takeUntil } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { SettingsService, StaffMember, StaffRoleSlug } from '../settings.service';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { EndpointPolicyPickerComponent } from '../team/endpoint-policy-picker/endpoint-policy-picker.component';
import { StaffPermissionMatrixComponent } from '../team/permission-matrix/staff-permission-matrix.component';
import { extractClientSettingsPayload } from '../utils/invoice-billing-complete';
import { getBusinessUserClientId } from '../utils/settings-business-user.util';
import { resolveStaffSaveErrorMessage } from '../utils/staff-save-error.util';

@Component({
    selector: 'app-staff-list',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        TranslocoModule,
        RouterModule,
        HasStaffPermissionDirective,
        SettingsBusinessAccountEmptyStateComponent,
        StaffPermissionMatrixComponent,
        EndpointPolicyPickerComponent,
    ],
    templateUrl: './staff-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaffListComponent implements OnInit, OnChanges, OnDestroy {
    @Input() user: any;
    @Output() staffChanged = new EventEmitter<void>();
    @Output() userChange = new EventEmitter<unknown>();

    private readonly _rbacApi = inject(StaffRbacApiService);
    readonly permService = inject(StaffPermissionService);

    private _unsubscribeAll = new Subject<void>();

    staffMembers: StaffMember[] = [];
    teams: TeamDto[] = [];
    customRoles: ClientRoleDto[] = [];
    staffLoaded = false;
    endpointPolicyBuffer: EndpointPolicy = { mode: 'all', features: [] };
    showEndpointPolicyPanel = false;
    isLoadingStaff = false;
    isSavingStaff = false;
    staffFormSubmitted = false;
    editingStaff: StaffMember | null = null;
    staffForm: FormGroup;
    customPermissionsBuffer: PermissionMap = defaultPermissionsForRole('operator');

    countryCodes: CountryDialCode[] = [];
    filteredStaffCountryCodes: CountryDialCode[] = [];
    isStaffCountryDropdownOpen = false;
    staffCountrySearchTerm = '';
    staffCountryDropdownPosition: { top: string; left: string } | null = null;

    selectedSubscription: any = null;
    staffLimit = 0;
    hasSubscription = false;
    private clientSettingsSnapshot: ClientSettingsOverrideSnapshot | null = null;

    readonly systemRoles = SYSTEM_ROLES.map((slug) => SYSTEM_ROLE_METADATA[slug]);

    @ViewChild('staffFormDialog') staffFormDialog!: TemplateRef<any>;
    @ViewChild('grantsDialog') grantsDialog!: TemplateRef<any>;
    @ViewChild('confirmRemoveDialog') confirmRemoveDialog!: TemplateRef<any>;

    staffDialogRef: MatDialogRef<any> | null = null;
    grantsTargetStaff: StaffMember | null = null;
    removingStaff: StaffMember | null = null;

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
        if (this.isStaffCountryDropdownOpen && !target.closest('.staff-country-picker')) {
            this.isStaffCountryDropdownOpen = false;
            this.staffCountryDropdownPosition = null;
            this._cdr.markForCheck();
        }
    }

    ngOnInit(): void {
        this.loadStaffData();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['user']) {
            this.staffLoaded = false;
            this.loadStaffData();
        }
    }

    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    get callerCeiling(): PermissionMap | null {
        if (!this.permService.isStaff()) return null;
        return this.permService.permissions();
    }

    get selectedSystemRoleMeta() {
        const slug = resolveRoleSlug(this.staffForm?.get('role')?.value);
        return SYSTEM_ROLE_METADATA[slug] ?? SYSTEM_ROLE_METADATA.operator;
    }

    isControlInvalid(name: string): boolean {
        const control = this.staffForm?.get(name);
        return Boolean(control && control.invalid && (control.touched || this.staffFormSubmitted));
    }

    teamBudgetOptionLabel(team: TeamDto): string {
        const cap = team.budget?.effectiveCap ?? team.monthlyBudget;
        return cap != null && cap > 0 ? `${team.name} ($${cap}/mo)` : team.name;
    }

    onBusinessAccountLinked(account: unknown): void {
        this.user = account;
        this.userChange.emit(account);
        this.staffLoaded = false;
        this.loadStaffData();
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
            role: ['operator' as StaffRoleSlug],
            customRole: [''],
            team: [''],
            useCustomPermissions: [false],
            status: ['joined'],
        });
    }

    loadStaffData(): void {
        if (!this.userClientId) {
            this.staffLoaded = true;
            this.isLoadingStaff = false;
            this._cdr.markForCheck();
            return;
        }

        this.isLoadingStaff = true;
        this._cdr.markForCheck();

        this._loadSubscription();

        forkJoin({
            staff: this._settingsService.getStaff().pipe(catchError(() => of({ data: [] }))),
            teams: this._rbacApi.listTeams().pipe(catchError(() => of([]))),
            roles: this._rbacApi.listClientRoles().pipe(catchError(() => of([]))),
        })
            .pipe(
                finalize(() => {
                    this.isLoadingStaff = false;
                    this.staffLoaded = true;
                    this._cdr.markForCheck();
                }),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(({ staff, teams, roles }) => {
                this.staffMembers = staff?.data || [];
                this.teams = teams;
                this.customRoles = roles;
            });
    }

    private _loadSubscription(): void {
        const clientId = this.userClientId;
        if (!clientId) return;

        const empty = of({ data: null });

        forkJoin({
            smartCheck: this._settingsService.getMySubscription(clientId).pipe(catchError(() => empty)),
            smartAccess: this._settingsService.getSmartAccessPlan(clientId).pipe(catchError(() => empty)),
            smartEnroll: this._settingsService.getSmartEnrollPlan(clientId).pipe(catchError(() => empty)),
            clientSettings: this._settingsService.getBillingConfig(clientId).pipe(catchError(() => empty)),
        })
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: ({ smartCheck, smartAccess, smartEnroll, clientSettings }) => {
                    this.clientSettingsSnapshot =
                        (extractClientSettingsPayload(clientSettings) as ClientSettingsOverrideSnapshot | null) ??
                        this.user?.settings ??
                        null;
                    this._applyTeamSubscriptionLimits(smartCheck, smartAccess, smartEnroll);
                },
                error: () => {
                    this.clientSettingsSnapshot = this.user?.settings ?? null;
                    this._resetTeamSubscriptionState();
                },
            });
    }

    private _getClientSettingsSnapshot(): ClientSettingsOverrideSnapshot | null {
        return this.clientSettingsSnapshot ?? this.user?.settings ?? null;
    }

    private _applyTeamSubscriptionLimits(smartCheckRes: any, accessRes: any, enrollRes: any): void {
        const smartCheckData = smartCheckRes?.data;
        const subscriptionPlan = smartCheckData?.subscriptionPlan;
        const accessData = accessRes?.data;
        const enrollData = enrollRes?.data;
        const hasSmartCheck = !!subscriptionPlan;
        const hasAccess = !!accessData && accessData.status === 'active';
        const hasEnroll = !!enrollData && enrollData.status === 'active';
        const { eligible, seatLimit } = resolveStaffSeatLimit(
            {
                clientSubscriptionPlan: smartCheckData
                    ? { active: smartCheckData.active !== false, subscriptionPlan }
                    : null,
                smartAccessPlan: accessData,
                smartEnrollPlan: enrollData,
            },
            this._getClientSettingsSnapshot()
        );

        this.hasSubscription = eligible;
        this.staffLimit = seatLimit;

        if (hasSmartCheck) {
            this.selectedSubscription = subscriptionPlan;
        } else if (hasAccess && hasEnroll) {
            this.selectedSubscription = { name: `${accessData.name} + ${enrollData.name}` };
        } else if (hasAccess) {
            this.selectedSubscription = { name: accessData.name };
        } else if (hasEnroll) {
            this.selectedSubscription = { name: enrollData.name };
        } else if (eligible && seatLimit > 0) {
            this.selectedSubscription = { name: 'Override' };
        } else {
            this.selectedSubscription = { name: 'PAYG' };
        }
        this._cdr.markForCheck();
    }

    private _resetTeamSubscriptionState(): void {
        const { eligible, seatLimit } = resolveStaffSeatLimit(null, this._getClientSettingsSnapshot());
        this.selectedSubscription = eligible && seatLimit > 0 ? { name: 'Override' } : { name: 'PAYG' };
        this.hasSubscription = eligible;
        this.staffLimit = seatLimit;
        this._cdr.markForCheck();
    }

    canAddMoreStaff(): boolean {
        if (!this.hasSubscription || this.staffLimit <= 0) {
            return false;
        }
        return this.staffMembers.length < this.staffLimit;
    }

    openStaffModal(staff?: StaffMember): void {
        this._resetStaffForm();
        this._resetStaffCountryPicker();
        if (staff) {
            this.editingStaff = staff;
            const canonicalRole = resolveRoleSlug(staff.canonicalRole || staff.role);
            const customRoleId =
                typeof staff.customRole === 'object' ? staff.customRole?._id || '' : staff.customRole || '';
            const teamId = typeof staff.team === 'object' ? staff.team?._id || '' : staff.team || '';

            this.customPermissionsBuffer = staff.customPermissions
                ? normalizePermissions(staff.customPermissions)
                : defaultPermissionsForRole(canonicalRole);
            this.endpointPolicyBuffer = staff.endpointPolicy
                ? {
                      mode: staff.endpointPolicy.mode || 'all',
                      features: [...(staff.endpointPolicy.features || [])],
                  }
                : { mode: 'all', features: [] };
            this.showEndpointPolicyPanel = this.endpointPolicyBuffer.mode !== 'all';

            this.staffForm.patchValue({
                name: staff.name,
                email: staff.email,
                countryCode: staff.countryCode || '+1',
                phone: staff.phone,
                role: canonicalRole,
                customRole: customRoleId,
                team: teamId,
                useCustomPermissions: Boolean(staff.useCustomPermissions),
                status: staff.status || 'joined',
            });
        } else {
            this.customPermissionsBuffer = defaultPermissionsForRole('operator');
            this.endpointPolicyBuffer = { mode: 'all', features: [] };
            this.showEndpointPolicyPanel = false;
        }

        this.staffDialogRef = this._dialog.open(this.staffFormDialog, {
            width: this.staffForm.get('useCustomPermissions')?.value ? '920px' : '640px',
            maxWidth: '94vw',
            maxHeight: '90vh',
            panelClass: 'staff-member-dialog-panel',
            autoFocus: false,
        });
    }

    onRoleOrOverrideChange(): void {
        const useCustom = Boolean(this.staffForm.get('useCustomPermissions')?.value);
        if (!this.editingStaff?.customPermissions && useCustom) {
            const roleSlug = this.staffForm.get('role')?.value as SystemRoleSlug;
            const customRoleId = this.staffForm.get('customRole')?.value as string;
            const cr = customRoleId ? this.customRoles.find((r) => r._id === customRoleId) : null;
            this.customPermissionsBuffer = cr
                ? normalizePermissions(cr.permissions)
                : defaultPermissionsForRole(roleSlug);
        }
        this.staffDialogRef?.updateSize(useCustom ? '920px' : '640px');
        this._cdr.markForCheck();
    }

    closeStaffDialog(): void {
        this.staffDialogRef?.close();
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
        return !!sel && sel.dialCode === country.dialCode && sel.countryCode === country.countryCode;
    }

    private _resetStaffForm(): void {
        this.editingStaff = null;
        this.staffFormSubmitted = false;
        this.endpointPolicyBuffer = { mode: 'all', features: [] };
        this.showEndpointPolicyPanel = false;
        this.staffForm.reset({
            name: '',
            email: '',
            countryCode: '+1',
            phone: '',
            role: 'operator',
            customRole: '',
            team: '',
            useCustomPermissions: false,
            status: 'joined',
        });
    }

    saveStaff(): void {
        if (this.isSavingStaff) return;

        if (this.staffForm.invalid) {
            this.staffFormSubmitted = true;
            this.staffForm.markAllAsTouched();
            this._cdr.markForCheck();
            setTimeout(() => {
                const firstInvalid = document.querySelector<HTMLElement>(
                    '.staff-dialog [aria-invalid="true"]'
                );
                firstInvalid?.focus();
            });
            return;
        }

        if (!this.editingStaff && !this.canAddMoreStaff()) {
            const message = this._translocoService.translate('settings.team.limit_reached');
            this._snackBar.open(message, undefined, { duration: 4000 });
            return;
        }

        this.isSavingStaff = true;
        this._cdr.markForCheck();

        const fv = this.staffForm.value;
        const payload: Partial<StaffMember> = {
            name: fv.name,
            email: fv.email,
            countryCode: fv.countryCode,
            phone: String(fv.phone),
            role: fv.role,
            customRole: fv.customRole || null,
            team: fv.team || null,
            useCustomPermissions: Boolean(fv.useCustomPermissions),
            ...(fv.useCustomPermissions ? { customPermissions: this.customPermissionsBuffer } : {}),
            endpointPolicy: this.endpointPolicyBuffer,
            ...(this.editingStaff ? { status: fv.status } : {}),
            client: this.user._id,
        };

        const saveOperation = this.editingStaff
            ? this._settingsService.updateStaff(this.editingStaff._id!, payload)
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
                    this._snackBar.open(message, undefined, { duration: 3000 });
                    this.staffChanged.emit();
                },
                error: (error) => {
                    const message = resolveStaffSaveErrorMessage(error, (key) =>
                        this._translocoService.translate(key)
                    );
                    this._snackBar.open(message, undefined, { duration: 5000 });
                },
            });
    }

    toggleSuspend(staff: StaffMember): void {
        if (!staff?._id) return;
        const nextStatus = staff.status === 'banned' ? 'joined' : 'banned';
        this._settingsService
            .updateStaff(staff._id, { status: nextStatus })
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => {
                    this._snackBar.open(
                        this._translocoService.translate(
                            nextStatus === 'banned'
                                ? 'staffRbac.members.suspendedToast'
                                : 'staffRbac.members.reactivatedToast'
                        ),
                        undefined,
                        { duration: 3000 }
                    );
                    this.loadStaffData();
                },
                error: (err) => {
                    this._snackBar.open(err?.error?.message || 'Action failed', undefined, { duration: 4000 });
                },
            });
    }

    forceRevokeSession(staff: StaffMember): void {
        if (!staff?._id) return;
        this._rbacApi.revokeStaffSession(staff._id).subscribe({
            next: () => {
                this._snackBar.open(
                    this._translocoService.translate('staffRbac.members.sessionRevokedToast'),
                    undefined,
                    { duration: 3500 }
                );
            },
            error: (err) => {
                this._snackBar.open(err?.error?.message || 'Revoke failed', undefined, { duration: 4000 });
            },
        });
    }

    openGrantsModal(staff: StaffMember): void {
        this.grantsTargetStaff = staff;
        this.staffDialogRef = this._dialog.open(this.grantsDialog, {
            width: '540px',
            maxWidth: '94vw',
            panelClass: 'staff-member-dialog-panel',
        });
    }

    revokeGrant(staff: StaffMember, grant: StaffTemporaryGrant): void {
        if (!staff._id || !grant._id) return;
        this._rbacApi.revokeStaffGrant(staff._id, grant._id).subscribe({
            next: () => {
                this._snackBar.open(
                    this._translocoService.translate('staffRbac.members.grantRevokedToast'),
                    undefined,
                    { duration: 3000 }
                );
                this.staffDialogRef?.close();
                this.loadStaffData();
            },
        });
    }

    promptRemoveStaff(staff: StaffMember): void {
        this.removingStaff = staff;
        this.staffDialogRef = this._dialog.open(this.confirmRemoveDialog, {
            width: '440px',
            maxWidth: '94vw',
            panelClass: 'staff-member-dialog-panel',
        });
    }

    confirmDeleteStaff(): void {
        const staff = this.removingStaff;
        if (!staff?._id) return;
        this._settingsService
            .deleteStaff(staff._id)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => {
                    this.staffDialogRef?.close();
                    this.removingStaff = null;
                    this.loadStaffData();
                    const message = this._translocoService.translate('settings.team.delete_success');
                    this._snackBar.open(message, undefined, { duration: 3000 });
                    this.staffChanged.emit();
                },
                error: (err) => {
                    const msg =
                        err?.error?.message === 'cannot_delete_self'
                            ? this._translocoService.translate('staffRbac.members.cannotDeleteSelf')
                            : this._translocoService.translate('settings.team.delete_error');
                    this._snackBar.open(msg, undefined, { duration: 4000 });
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
                    const message = this._translocoService.translate('settings.team.reinvite_success');
                    this._snackBar.open(message, undefined, { duration: 3000 });
                },
                error: () => {
                    const message = this._translocoService.translate('settings.team.reinvite_error');
                    this._snackBar.open(message, undefined, { duration: 3000 });
                },
            });
    }

    roleDisplayName(staff: StaffMember): string {
        if (staff.customRole && typeof staff.customRole === 'object' && staff.customRole.name) {
            return staff.customRole.name;
        }
        const canonical = resolveRoleSlug(staff.canonicalRole || staff.role);
        const meta = SYSTEM_ROLE_METADATA[canonical];
        return meta ? this._translocoService.translate(meta.nameKey) || meta.name : canonical;
    }

    teamDisplayName(staff: StaffMember): string | null {
        if (!staff.team) return null;
        if (typeof staff.team === 'object') return staff.team.name || null;
        const found = this.teams.find((t) => String(t._id) === String(staff.team));
        return found?.name || null;
    }

    grantResourceLabel(resourceKey: string): string {
        const meta = RESOURCE_MAP[resourceKey];
        return meta ? this._translocoService.translate(meta.labelKey) || meta.label : resourceKey;
    }

    isActiveStatus(status?: string): boolean {
        return status === 'joined' || status === 'active';
    }

    statusTranslationKey(status?: string): string {
        if (status === 'joined' || status === 'active') return 'settings.team.status_active';
        if (status === 'banned' || status === 'inactive') return 'staffRbac.members.statusSuspended';
        return 'settings.team.status_pending';
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
