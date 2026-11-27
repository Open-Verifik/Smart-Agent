import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    signal,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { HasStaffPermissionDirective } from 'app/core/permissions/has-staff-permission.directive';
import {
    defaultPermissionsForRole,
    STAFF_RESOURCES,
    SYSTEM_ROLE_METADATA,
    SYSTEM_ROLES,
} from 'app/core/permissions/staff-permission.constants';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import {
    ClientRoleDto,
    EndpointPolicy,
    PermissionMap,
    StaffResource,
    SystemRoleSlug,
} from 'app/core/permissions/staff-permission.types';
import { StaffRbacApiService } from 'app/core/permissions/staff-rbac-api.service';
import { EndpointPolicyPickerComponent } from '../endpoint-policy-picker/endpoint-policy-picker.component';
import { StaffPermissionMatrixComponent } from '../permission-matrix/staff-permission-matrix.component';

const ROLE_COLORS = ['blue', 'emerald', 'indigo', 'amber', 'rose', 'violet', 'cyan', 'slate'] as const;

@Component({
    selector: 'app-team-roles',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSlideToggleModule,
        TranslocoModule,
        HasStaffPermissionDirective,
        StaffPermissionMatrixComponent,
        EndpointPolicyPickerComponent,
    ],
    templateUrl: './team-roles.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamRolesComponent implements OnInit {
    private readonly _api = inject(StaffRbacApiService);
    private readonly _dialog = inject(MatDialog);
    private readonly _snackBar = inject(MatSnackBar);
    private readonly _transloco = inject(TranslocoService);
    readonly permService = inject(StaffPermissionService);

    readonly loading = signal(false);
    readonly saving = signal(false);
    readonly customRoles = signal<ClientRoleDto[]>([]);

    readonly selectedKind = signal<'system' | 'custom'>('system');
    readonly selectedSystemSlug = signal<SystemRoleSlug>('admin');
    readonly selectedCustomRole = signal<ClientRoleDto | null>(null);

    // Editable custom role buffer
    editName = '';
    editDescription = '';
    editColor = 'blue';
    editPermissions: PermissionMap = {};
    editEndpointPolicy: EndpointPolicy = { mode: 'all', features: [] };
    editAllowAccessRequests = true;
    editRequestableMode: 'all' | 'none' | 'custom' = 'all';
    editRequestableResources: StaffResource[] = [];
    isCreatingNew = false;

    // Delete & Reassign dialog state
    reassignTargetType: 'system' | 'custom' = 'system';
    reassignSystemRole: SystemRoleSlug = 'operator';
    reassignCustomRoleId = '';

    readonly systemRoles = SYSTEM_ROLES.map((slug) => SYSTEM_ROLE_METADATA[slug]);
    readonly allResources = STAFF_RESOURCES;
    readonly roleColors = ROLE_COLORS;

    @ViewChild('deleteRoleDialog') deleteRoleDialog!: TemplateRef<unknown>;
    private _dialogRef: MatDialogRef<unknown> | null = null;

    ngOnInit(): void {
        this.loadRoles();
    }

    loadRoles(): void {
        this.loading.set(true);
        this._api.listClientRoles().subscribe({
            next: (roles) => {
                this.customRoles.set(roles);
                this.loading.set(false);
            },
            error: () => {
                this.customRoles.set([]);
                this.loading.set(false);
            },
        });
    }

    get callerCeiling(): PermissionMap | null {
        if (!this.permService.isStaff()) return null;
        return this.permService.permissions();
    }

    selectSystemRole(slug: SystemRoleSlug): void {
        this.isCreatingNew = false;
        this.selectedKind.set('system');
        this.selectedSystemSlug.set(slug);
        this.selectedCustomRole.set(null);
        this.editPermissions = defaultPermissionsForRole(slug);
        this.editEndpointPolicy = { mode: 'all', features: [] };
        const meta = SYSTEM_ROLE_METADATA[slug];
        this.editAllowAccessRequests = meta.allowAccessRequests;
        this._syncRequestableBuffer(meta.requestableResources);
    }

    selectCustomRole(role: ClientRoleDto): void {
        this.isCreatingNew = false;
        this.selectedKind.set('custom');
        this.selectedCustomRole.set(role);
        this.editName = role.name;
        this.editDescription = role.description || '';
        this.editColor = role.color || 'blue';
        this.editPermissions = JSON.parse(JSON.stringify(role.permissions || {}));
        this.editEndpointPolicy = role.endpointPolicy
            ? {
                  mode: role.endpointPolicy.mode || 'all',
                  features: [...(role.endpointPolicy.features || [])],
              }
            : { mode: 'all', features: [] };
        this.editAllowAccessRequests = role.allowAccessRequests !== false;
        this._syncRequestableBuffer(role.requestableResources ?? null);
    }

    startNewCustomRole(basedOn: SystemRoleSlug = 'viewer'): void {
        this.isCreatingNew = true;
        this.selectedKind.set('custom');
        this.selectedCustomRole.set(null);
        const baseMeta = SYSTEM_ROLE_METADATA[basedOn];
        this.editName = `${baseMeta.name} Custom`;
        this.editDescription = '';
        this.editColor = 'indigo';
        this.editPermissions = defaultPermissionsForRole(basedOn);
        this.editEndpointPolicy = { mode: 'all', features: [] };
        this.editAllowAccessRequests = baseMeta.allowAccessRequests;
        this._syncRequestableBuffer(baseMeta.requestableResources ?? null);
    }

    duplicateSelected(): void {
        if (this.selectedKind() === 'system') {
            this.startNewCustomRole(this.selectedSystemSlug());
            return;
        }
        const custom = this.selectedCustomRole();
        if (!custom) return;
        this.saving.set(true);
        this._api.duplicateClientRole(custom._id, { name: `${custom.name} (Copy)` }).subscribe({
            next: (created) => {
                this.saving.set(false);
                this._snackBar.open(
                    this._transloco.translate('staffRbac.rolesTab.duplicatedToast'),
                    undefined,
                    { duration: 3000 }
                );
                this.loadRoles();
                this.selectCustomRole(created);
            },
            error: (err) => {
                this.saving.set(false);
                this._snackBar.open(err?.error?.message || 'Error', undefined, { duration: 4000 });
            },
        });
    }

    saveCustomRole(): void {
        const name = this.editName.trim();
        if (!name || this.saving()) return;
        this.saving.set(true);

        const requestableResources =
            !this.editAllowAccessRequests || this.editRequestableMode === 'none'
                ? []
                : this.editRequestableMode === 'custom'
                  ? [...this.editRequestableResources]
                  : null;

        const req$ = this.isCreatingNew
            ? this._api.createClientRole({
                  name,
                  description: this.editDescription.trim(),
                  color: this.editColor,
                  permissions: this.editPermissions,
                  endpointPolicy: this.editEndpointPolicy,
                  allowAccessRequests: this.editAllowAccessRequests,
                  requestableResources,
              })
            : this._api.updateClientRole(this.selectedCustomRole()!._id, {
                  name,
                  description: this.editDescription.trim(),
                  color: this.editColor,
                  permissions: this.editPermissions,
                  endpointPolicy: this.editEndpointPolicy,
                  allowAccessRequests: this.editAllowAccessRequests,
                  requestableResources,
              });

        req$.subscribe({
            next: (saved) => {
                this.saving.set(false);
                this.isCreatingNew = false;
                this._snackBar.open(
                    this._transloco.translate('staffRbac.rolesTab.savedToast'),
                    undefined,
                    { duration: 3000 }
                );
                this.loadRoles();
                this.selectCustomRole(saved);
                this.permService.refresh().subscribe();
            },
            error: (err) => {
                this.saving.set(false);
                this._snackBar.open(
                    err?.error?.message || this._transloco.translate('staffRbac.rolesTab.saveError'),
                    undefined,
                    { duration: 4000 }
                );
            },
        });
    }

    openDeleteCustomRole(): void {
        if (!this.selectedCustomRole()) return;
        this.reassignTargetType = 'system';
        this.reassignSystemRole = 'operator';
        this.reassignCustomRoleId = '';
        this._dialogRef = this._dialog.open(this.deleteRoleDialog, {
            width: '440px',
            maxWidth: '95vw',
        });
    }

    confirmDeleteCustomRole(): void {
        const role = this.selectedCustomRole();
        if (!role) return;
        this.saving.set(true);

        const reassign =
            this.reassignTargetType === 'custom' && this.reassignCustomRoleId
                ? { reassignToCustomRole: this.reassignCustomRoleId }
                : { reassignToRole: this.reassignSystemRole };

        this._api.deleteClientRole(role._id, reassign).subscribe({
            next: () => {
                this.saving.set(false);
                this._dialogRef?.close();
                this._snackBar.open(
                    this._transloco.translate('staffRbac.rolesTab.deletedToast'),
                    undefined,
                    { duration: 3000 }
                );
                this.loadRoles();
                this.selectSystemRole('admin');
            },
            error: (err) => {
                this.saving.set(false);
                this._snackBar.open(err?.error?.message || 'Delete failed', undefined, { duration: 4000 });
            },
        });
    }

    closeModal(): void {
        this._dialogRef?.close();
    }

    get otherCustomRoles(): ClientRoleDto[] {
        const cur = this.selectedCustomRole();
        return this.customRoles().filter((r) => !cur || r._id !== cur._id);
    }

    get currentSystemMeta() {
        return SYSTEM_ROLE_METADATA[this.selectedSystemSlug()];
    }

    get currentMatrix(): PermissionMap {
        if (this.selectedKind() === 'system' && !this.isCreatingNew) {
            return defaultPermissionsForRole(this.selectedSystemSlug());
        }
        return this.editPermissions;
    }

    get isMatrixReadonly(): boolean {
        if (this.selectedKind() === 'system' && !this.isCreatingNew) return true;
        return !this.permService.can('team', 'update');
    }

    private _syncRequestableBuffer(resources: StaffResource[] | null): void {
        if (!Array.isArray(resources)) {
            this.editRequestableMode = 'all';
            this.editRequestableResources = [];
            return;
        }
        if (resources.length === 0) {
            this.editRequestableMode = 'none';
            this.editRequestableResources = [];
            return;
        }
        this.editRequestableMode = 'custom';
        this.editRequestableResources = [...resources];
    }
}
