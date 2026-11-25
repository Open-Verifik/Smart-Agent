import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    ACTION_LABELS,
    AccessRequestBundlePreset,
    getPresetsForResource,
    RESOURCE_MAP,
    SYSTEM_ROLE_METADATA,
    SYSTEM_ROLES,
} from '../staff-permission.constants';
import { StaffPermissionService } from '../staff-permission.service';
import {
    AccessRequestType,
    ClientRoleDto,
    RequestDurationOption,
    StaffAction,
    StaffResource,
    SystemRoleSlug,
} from '../staff-permission.types';
import { StaffRbacApiService } from '../staff-rbac-api.service';

export interface RequestAccessDialogData {
    mode?: AccessRequestType;
    resource?: StaffResource;
    action?: StaffAction;
    sourcePath?: string;
    teamId?: string;
    teamName?: string;
    suggestedBoostAmount?: number;
}

@Component({
    selector: 'app-request-access-dialog',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './request-access-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestAccessDialogComponent {
    private readonly _dialogRef = inject(MatDialogRef<RequestAccessDialogComponent>);
    private readonly _api = inject(StaffRbacApiService);
    private readonly _permService = inject(StaffPermissionService);
    private readonly _snackBar = inject(MatSnackBar);
    private readonly _transloco = inject(TranslocoService);

    mode: AccessRequestType;
    resource: StaffResource;
    selectedPresetId = 'operator';
    customActions = new Set<StaffAction>();
    useCustomActions = false;
    duration: RequestDurationOption = '7d';
    reason = '';
    sourcePath = '';

    // Role upgrade mode
    targetRoleType: 'system' | 'custom' = 'system';
    targetSystemRole: SystemRoleSlug = 'operator';
    targetCustomRoleId = '';
    customRoles: ClientRoleDto[] = [];

    // Budget increase mode
    requestedBoostAmount = 100;
    boostMode: 'one_time' | 'recurring' = 'one_time';

    submitting = false;
    errorMessage = '';

    readonly systemRoles = SYSTEM_ROLES.map((slug) => SYSTEM_ROLE_METADATA[slug]);
    readonly durationOptions: Array<{ value: RequestDurationOption; labelKey: string; defaultLabel: string }> = [
        { value: '24h', labelKey: 'staffRbac.durations.24h', defaultLabel: '24 Hours' },
        { value: '7d', labelKey: 'staffRbac.durations.7d', defaultLabel: '7 Days' },
        { value: '30d', labelKey: 'staffRbac.durations.30d', defaultLabel: '30 Days' },
        { value: 'permanent', labelKey: 'staffRbac.durations.permanent', defaultLabel: 'Permanent' },
    ];

    constructor(@Inject(MAT_DIALOG_DATA) public data: RequestAccessDialogData | null) {
        this.mode = data?.mode ?? 'resource_access';
        this.resource = data?.resource ?? 'smartReportsTemplates';
        this.duration = this._permService.accessPolicy().defaultRequestDuration || '7d';
        this.sourcePath = data?.sourcePath || (typeof window !== 'undefined' ? window.location.pathname : '');
        this.requestedBoostAmount = data?.suggestedBoostAmount || 100;

        if (data?.action) {
            this.customActions.add(data.action);
            if (data.action !== 'read') {
                const applicable = new Set(this.resourceMeta?.applicableActions ?? []);
                if (applicable.has('read')) this.customActions.add('read');
            }
            const presets = this.presets;
            const matching = presets.find((p) => p.actions.includes(data.action!));
            if (matching) {
                this.selectedPresetId = matching.id;
            }
        } else {
            this.presets[0]?.actions.forEach((a) => this.customActions.add(a));
        }

        if (this.mode === 'role_upgrade') {
            this._api.listClientRoles().subscribe({
                next: (roles) => {
                    this.customRoles = roles;
                },
                error: () => {},
            });
        }
    }

    get resourceMeta() {
        return RESOURCE_MAP[this.resource];
    }

    get presets(): AccessRequestBundlePreset[] {
        return getPresetsForResource(this.resource);
    }

    get applicableActions(): StaffAction[] {
        return (this.resourceMeta?.applicableActions ?? ['read']).filter(
            (a) => !(this.resource === 'workspaceSettings' && a === 'delete')
        );
    }

    get teamSummary() {
        return this._permService.team();
    }

    actionLabel(action: StaffAction): string {
        return this._transloco.translate(ACTION_LABELS[action].labelKey) || ACTION_LABELS[action].label;
    }

    isCustomActionSelected(action: StaffAction): boolean {
        return this.customActions.has(action);
    }

    toggleCustomAction(action: StaffAction): void {
        if (this.customActions.has(action)) {
            if (this.customActions.size > 1) {
                this.customActions.delete(action);
            }
        } else {
            this.customActions.add(action);
        }
    }

    get resolvedSelectedActions(): StaffAction[] {
        if (this.useCustomActions) {
            return Array.from(this.customActions);
        }
        const preset = this.presets.find((p) => p.id === this.selectedPresetId) || this.presets[0];
        return preset ? preset.actions : ['read'];
    }

    submit(): void {
        const trimmedReason = this.reason.trim();
        if (trimmedReason.length < 3) {
            this.errorMessage = this._transloco.translate('staffRbac.requestDialog.reasonRequired');
            return;
        }

        this.submitting = true;
        this.errorMessage = '';

        let payload: Parameters<StaffRbacApiService['createAccessRequest']>[0];

        if (this.mode === 'budget_increase') {
            payload = {
                requestType: 'budget_increase',
                requestedTeamBudget: {
                    team: this.data?.teamId || this.teamSummary?._id,
                    requestedAmount: Number(this.requestedBoostAmount),
                    boostMode: this.boostMode,
                },
                requestedDuration: 'permanent',
                reason: trimmedReason,
                sourcePath: this.sourcePath,
            };
        } else if (this.mode === 'role_upgrade') {
            payload = {
                requestType: 'role_upgrade',
                requestedRole:
                    this.targetRoleType === 'custom' && this.targetCustomRoleId
                        ? { customRole: this.targetCustomRoleId }
                        : { role: this.targetSystemRole },
                requestedDuration: 'permanent',
                reason: trimmedReason,
                sourcePath: this.sourcePath,
            };
        } else {
            payload = {
                requestType: 'resource_access',
                requestedResources: [
                    {
                        resource: this.resource,
                        actions: this.resolvedSelectedActions,
                    },
                ],
                requestedDuration: this.duration,
                reason: trimmedReason,
                sourcePath: this.sourcePath,
            };
        }

        this._api.createAccessRequest(payload).subscribe({
            next: (created) => {
                this.submitting = false;
                this._snackBar.open(
                    this._transloco.translate('staffRbac.requestDialog.submittedToast'),
                    undefined,
                    { duration: 4000 }
                );
                this._dialogRef.close(created);
            },
            error: (err) => {
                this.submitting = false;
                const msg = err?.error?.message || '';
                if (msg === 'pending_access_request_already_exists') {
                    this.errorMessage = this._transloco.translate('staffRbac.requestDialog.duplicatePending');
                } else if (msg === 'access_requests_disabled') {
                    this.errorMessage = this._transloco.translate('staffRbac.requestDialog.disabled');
                } else {
                    this.errorMessage = msg || this._transloco.translate('staffRbac.requestDialog.submitError');
                }
            },
        });
    }

    close(): void {
        this._dialogRef.close(null);
    }
}
