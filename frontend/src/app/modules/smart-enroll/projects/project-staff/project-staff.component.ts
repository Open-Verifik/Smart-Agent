import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { CountryDialCode, CountryService } from 'app/core/services/country.service';
import { SettingsService, StaffMember } from 'app/modules/settings/settings.service';
import { DateTime } from 'luxon';
import { forkJoin, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SmartEnrollProjectsService } from '../smart-enroll-projects.service';
import type {
    EnrollClientRef,
    EnrollProject,
    EnrollProjectMember,
    ProjectMemberRole,
    StaffInviteRow,
} from '../smart-enroll-projects.types';

@Component({
    selector: 'project-staff',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        TranslocoModule,
    ],
    templateUrl: './project-staff.component.html',
    styleUrl: './project-staff.component.scss',
})
export class ProjectStaffComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _settingsService = inject(SettingsService);
    private _formBuilder = inject(FormBuilder);
    private _countryService = inject(CountryService);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    project = signal<EnrollProject | null>(null);
    projectMembers = signal<EnrollProjectMember[]>([]);
    staffs = signal<StaffInviteRow[]>([]);
    loading = signal(true);
    loadError = signal<string | null>(null);
    saving = signal(false);

    currentUserProjectMember = signal<EnrollProjectMember | null>(null);
    currentPage = signal(1);
    readonly itemsPerPage = 5;
    readonly roles: ProjectMemberRole[] = ['viewer', 'editor', 'admin'];
    selectedStaffIdMap: Record<string, StaffInviteRow> = {};

    countryCodes: CountryDialCode[] = [];
    workspaceStaffForm: FormGroup;
    workspaceStaffContextLoaded = false;
    hasSubscription = false;
    staffLimit = 0;
    workspaceStaffCount = 0;
    /** Mirrors Settings team panel subscription shape */
    selectedSubscription: { name?: string; changesInPrices?: { addOn?: string; count?: number }[] } | null =
        null;
    isSavingWorkspaceStaff = false;

    private _clientUser: { _id?: string; staff?: string; role?: string } | null = null;

    constructor() {
        this.countryCodes = this._countryService.countryDialCodes;
        this.workspaceStaffForm = this._formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            countryCode: ['+1'],
            phone: ['', [Validators.required, Validators.pattern(/^\d{8,15}$/)]],
            role: ['empleado' as StaffMember['role']],
        });
    }

    ngOnInit(): void {
        this._clientUser = this._parseUser();
        const projectId = this._route.snapshot.paramMap.get('projectId');
        if (!projectId) {
            this._goToProjects();
            return;
        }
        this._projectsService.getProject(projectId).subscribe({
            next: (p) => {
                if (!p) {
                    this.loadError.set('smartEnrollProjects.projectNotFound');
                    this.loading.set(false);
                    return;
                }
                this.project.set(p);
                this._loadWorkspaceStaffLimits();
                this._loadMembers();
            },
            error: () => {
                this.loadError.set('smartEnrollProjects.loadError');
                this.loading.set(false);
            },
        });
    }

    canManageWorkspaceStaff(): boolean {
        const u = this._clientUser;
        if (!u) return false;
        if (u.staff && u.role !== 'administrador') return false;
        return true;
    }

    canAddMoreWorkspaceStaff(): boolean {
        if (!this.hasSubscription || this.staffLimit === 0) return false;
        return this.workspaceStaffCount < this.staffLimit;
    }

    saveWorkspaceStaff(): void {
        if (this.workspaceStaffForm.invalid || this.isSavingWorkspaceStaff) return;
        if (!this.canAddMoreWorkspaceStaff()) {
            this._snackBar.open(
                this._transloco.translate('settings.team.limit_reached'),
                undefined,
                { duration: 4000 }
            );
            return;
        }
        const clientId = this._clientId(this.project());
        if (!clientId) return;

        this.isSavingWorkspaceStaff = true;
        const formValue = this.workspaceStaffForm.value;
        const payload: Partial<StaffMember> = {
            name: formValue.name,
            email: formValue.email,
            countryCode: formValue.countryCode,
            phone: String(formValue.phone),
            role: formValue.role,
            client: clientId,
        };

        this._settingsService
            .createStaff(payload)
            .pipe(
                finalize(() => {
                    this.isSavingWorkspaceStaff = false;
                })
            )
            .subscribe({
                next: () => {
                    this._snackBar.open(
                        this._transloco.translate('settings.team.save_success'),
                        undefined,
                        { duration: 3000 }
                    );
                    this.workspaceStaffForm.reset({
                        name: '',
                        email: '',
                        countryCode: '+1',
                        phone: '',
                        role: 'empleado',
                    });
                    this._loadWorkspaceStaffLimits();
                    this._loadMembers();
                },
                error: (error: { error?: { message?: string }; status?: number }) => {
                    let message = this._transloco.translate('settings.team.save_error');
                    if (error?.error?.message === 'cannot_create_staff' || error?.status === 412) {
                        message = this._transloco.translate('settings.team.no_plan_error');
                    }
                    this._snackBar.open(message, undefined, { duration: 4000 });
                },
            });
    }

    get isCurrentUserMemberAdminOrOwner(): boolean {
        const m = this.currentUserProjectMember();
        return m?.role === 'admin' || m?.role === 'owner' || !m;
    }

    get hasSelectedStaff(): boolean {
        return Object.keys(this.selectedStaffIdMap).length > 0;
    }

    get isAllSelected(): boolean {
        const s = this.staffs();
        return s.length > 0 && s.length === Object.keys(this.selectedStaffIdMap).length;
    }

    get isSavingDisabled(): boolean {
        return !this.hasSelectedStaff || this.saving();
    }

    paginatedStaff(): StaffInviteRow[] {
        const s = this.staffs();
        const page = this.currentPage();
        return s.slice((page - 1) * this.itemsPerPage, page * this.itemsPerPage);
    }

    sortedMembers(): EnrollProjectMember[] {
        const list = [...this.projectMembers()];
        return list.sort((a, b) => {
            if (a.role === 'owner') return -1;
            if (b.role === 'owner') return 1;
            const tb = DateTime.fromISO(String(b.lastActive || '')).toMillis();
            const ta = DateTime.fromISO(String(a.lastActive || '')).toMillis();
            return tb - ta;
        });
    }

    get totalPages(): number {
        return Math.ceil(this.staffs().length / this.itemsPerPage) || 0;
    }

    docUrl(): string {
        const lang = this._transloco.getActiveLang();
        const useEn = lang === 'fr' || lang !== 'es';
        return useEn
            ? 'https://docs.verifik.co/services/smartaccess#id-5.-team-management-1'
            : 'https://docs.verifik.co/verifik-es/services/smartaccess#id-5.-gestion-de-equipos-1';
    }

    canInvite(): boolean {
        return this.isCurrentUserMemberAdminOrOwner;
    }

    canRemoveMember(member: EnrollProjectMember): boolean {
        return !this.isOwner(member) && this.isCurrentUserMemberAdminOrOwner;
    }

    canUpdateRole(member: EnrollProjectMember): boolean {
        return !this.isOwner(member) && this.isCurrentUserMemberAdminOrOwner;
    }

    isOwner(member: EnrollProjectMember): boolean {
        return member.role === 'owner';
    }

    isInviting(staff: StaffInviteRow): boolean {
        return !!staff.saving;
    }

    isUpdatingOrRemoving(member: EnrollProjectMember): boolean {
        return !!member.saving || !!member.removing;
    }

    formatAcronym(name?: string): string {
        if (!name?.trim()) return '?';
        const matches = name.match(/\b(\w)/g);
        return matches?.slice(0, 2).join('').toUpperCase() ?? '?';
    }

    lastActiveDisplay(date?: string): string {
        if (!date) return '';
        const dt = DateTime.fromISO(date);
        if (!dt.isValid) return '';
        return dt.toRelative() ?? '';
    }

    goBack(): void {
        const id = this.project()?._id;
        if (id) {
            this._router.navigate(['/smart-enroll/projects']);
            return;
        }
        this._goToProjects();
    }

    changePage(page: number): void {
        this.currentPage.set(page);
    }

    selectAll(): void {
        const staffList = this.staffs();
        if (this.isAllSelected) {
            this.selectedStaffIdMap = {};
            staffList.forEach((st) => {
                st.selected = false;
            });
            this.staffs.set([...staffList]);
            return;
        }
        this.selectedStaffIdMap = {};
        staffList.forEach((st) => {
            this.selectedStaffIdMap[st._id] = st;
            st.selected = true;
        });
        this.staffs.set([...staffList]);
    }

    toggleSelection(staff: StaffInviteRow): void {
        if (this.selectedStaffIdMap[staff._id]) {
            delete this.selectedStaffIdMap[staff._id];
        } else {
            this.selectedStaffIdMap[staff._id] = staff;
        }
        staff.selected = !staff.selected;
        this.staffs.set([...this.staffs()]);
    }

    createMember(staff: StaffInviteRow): Subscription | undefined {
        if (staff.saving || this.saving()) return undefined;
        const proj = this.project();
        const clientId = this._clientId(proj);
        if (!proj || !clientId) return undefined;
        staff.saving = true;
        this.staffs.set([...this.staffs()]);
        return this._projectsService
            .postProjectMember({
                client: clientId,
                project: proj._id,
                role: staff.role || 'viewer',
                staff: staff._id,
            })
            .subscribe({
                next: () => {
                    staff.saving = false;
                    this.selectedStaffIdMap = {};
                    this._loadMembers();
                },
                error: () => {
                    staff.saving = false;
                    this.staffs.set([...this.staffs()]);
                },
            });
    }

    createMembers(): void {
        if (!this.hasSelectedStaff || this.saving()) return;
        const proj = this.project();
        const clientId = this._clientId(proj);
        if (!proj || !clientId) return;
        this.saving.set(true);
        const observables = Object.values(this.selectedStaffIdMap).map((staff) =>
            this._projectsService.postProjectMember({
                client: clientId,
                project: proj._id,
                role: staff.role || 'viewer',
                staff: staff._id,
            })
        );
        if (!observables.length) {
            this.saving.set(false);
            return;
        }
        forkJoin(observables).subscribe({
            next: () => {
                this.saving.set(false);
                this.selectedStaffIdMap = {};
                this._loadMembers();
            },
            error: () => {
                this.saving.set(false);
            },
        });
    }

    removeMember(member: EnrollProjectMember): void {
        if (member.removing) return;
        member.removing = true;
        this.projectMembers.set([...this.projectMembers()]);
        this._projectsService.deleteProjectMember(member._id).subscribe({
            next: () => this._loadMembers(),
            error: () => {
                member.removing = false;
                this.projectMembers.set([...this.projectMembers()]);
            },
        });
    }

    updateRole(member: EnrollProjectMember, role: ProjectMemberRole): void {
        if (member.saving || !this.isCurrentUserMemberAdminOrOwner) return;
        if (member.role === role) return;
        member.saving = true;
        this.projectMembers.set([...this.projectMembers()]);
        this._projectsService.updateProjectMember(member._id, { role }).subscribe({
            next: () => this._loadMembers(),
            error: () => {
                member.saving = false;
                this.projectMembers.set([...this.projectMembers()]);
            },
        });
    }

    onMemberRoleChange(member: EnrollProjectMember, event: Event): void {
        const value = (event.target as HTMLSelectElement).value as ProjectMemberRole;
        this.updateRole(member, value);
    }

    onInviteRoleChange(staff: StaffInviteRow, event: Event): void {
        staff.role = (event.target as HTMLSelectElement).value;
        this.staffs.update((s) => [...s]);
    }

    private _parseUser(): { _id?: string; staff?: string; role?: string } | null {
        const raw = localStorage.getItem('user');
        if (!raw) return null;
        try {
            return JSON.parse(raw) as { _id?: string; staff?: string; role?: string };
        } catch {
            return null;
        }
    }

    private _goToProjects(): void {
        this._router.navigate(['/smart-enroll/projects']);
    }

    private _clientId(project: EnrollProject | null): string | null {
        if (!project?.client) return null;
        return typeof project.client === 'string' ? project.client : (project.client as EnrollClientRef)._id;
    }

    private _loadWorkspaceStaffLimits(): void {
        const clientId = this._clientId(this.project());
        if (!clientId || !this.canManageWorkspaceStaff()) {
            this.workspaceStaffContextLoaded = true;
            return;
        }

        forkJoin({
            sub: this._settingsService.getMySubscription(clientId),
            staff: this._settingsService.getStaff(),
        })
            .pipe(
                finalize(() => {
                    this.workspaceStaffContextLoaded = true;
                })
            )
            .subscribe({
                next: ({ sub, staff }) => {
                    this.workspaceStaffCount = staff?.data?.length ?? 0;
                    if (sub?.data?.subscriptionPlan) {
                        this.selectedSubscription = sub.data.subscriptionPlan;
                        this.hasSubscription = true;
                        const chairsAddon = this.selectedSubscription?.changesInPrices?.find(
                            (addon: { addOn?: string }) => addon?.addOn === 'chairs'
                        );
                        this.staffLimit = chairsAddon?.count ?? 0;
                    } else {
                        this.selectedSubscription = { name: 'PAYG' };
                        this.hasSubscription = false;
                        this.staffLimit = 0;
                    }
                },
                error: () => {
                    this.workspaceStaffCount = 0;
                    this.selectedSubscription = { name: 'PAYG' };
                    this.hasSubscription = false;
                    this.staffLimit = 0;
                },
            });
    }

    private _loadMembers(): void {
        const proj = this.project();
        if (!proj) return;
        this.loading.set(true);
        this._projectsService.getProjectMembers(proj._id).subscribe({
            next: (rows) => {
                this._prepareProjectMembers(rows);
            },
            error: () => {
                this.loadError.set('smartEnrollProjects.staff.loadMembersError');
                this.loading.set(false);
            },
        });
    }

    private _prepareProjectMembers(projectMembers: EnrollProjectMember[]): void {
        const proj = this.project();
        if (!proj) return;

        const members: EnrollProjectMember[] = [];
        const notIn: string[] = [];
        const hasProjectMembers = Array.isArray(projectMembers) && projectMembers.length > 0;
        let currentMember: EnrollProjectMember | null = this.currentUserProjectMember();

        if (hasProjectMembers) {
            for (const member of projectMembers) {
                if (!member.staff) continue;
                notIn.push(member.staff._id);
                if (this._clientUser?.staff && this._clientUser.staff === member.staff._id) {
                    currentMember = member;
                }
                members.push(member);
            }
        }

        const client = proj.client && typeof proj.client !== 'string' ? (proj.client as EnrollClientRef) : null;
        if (client) {
            const ownerRow: EnrollProjectMember = {
                _id: '000000000000000000000001',
                lastActive: client.updatedAt,
                role: 'owner',
                status: 'joined',
                project: proj._id,
                client: client._id,
                acceptedAt: proj.createdAt ? new Date(proj.createdAt) : undefined,
                bannedAt: null,
                staff: {
                    avatar: client.avatar,
                    email: client.email,
                    name: client.name,
                    _id: client._id,
                },
            };
            members.push(ownerRow);
            if (!this._clientUser?.staff) {
                currentMember = ownerRow;
            }
        }

        this.currentUserProjectMember.set(currentMember);
        this.projectMembers.set(members);

        const params: Record<string, string | string[]> = { where_status: 'joined' };
        if (notIn.length) {
            params['notIn__id'] = notIn;
        }

        this._projectsService.getStaffList(params).subscribe({
            next: (result) => {
                const mapped: StaffInviteRow[] = result.map((s) => ({
                    ...s,
                    role: 'viewer',
                }));
                this.staffs.set(mapped);
                this.currentPage.set(1);
                this.loading.set(false);
            },
            error: () => {
                this.loadError.set('smartEnrollProjects.staff.loadStaffError');
                this.loading.set(false);
            },
        });
    }
}
