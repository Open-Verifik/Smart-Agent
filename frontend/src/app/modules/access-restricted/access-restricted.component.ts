import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    ACTION_LABELS,
    AccessRequestBundlePreset,
    getPresetsForResource,
    RESOURCE_MAP,
    SYSTEM_ROLE_METADATA,
} from 'app/core/permissions/staff-permission.constants';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import {
    RequestDurationOption,
    StaffAccessRequestDto,
    StaffAction,
    StaffResource,
    SystemRoleSlug,
} from 'app/core/permissions/staff-permission.types';
import { StaffRbacApiService } from 'app/core/permissions/staff-rbac-api.service';

@Component({
    selector: 'app-access-restricted',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        RouterModule,
        TranslocoModule,
    ],
    templateUrl: './access-restricted.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessRestrictedComponent implements OnInit {
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);
    private readonly _api = inject(StaffRbacApiService);
    private readonly _snackBar = inject(MatSnackBar);
    private readonly _transloco = inject(TranslocoService);
    readonly permService = inject(StaffPermissionService);

    readonly resource = signal<StaffResource>('smartReportsTemplates');
    readonly requiredAction = signal<StaffAction>('read');
    readonly fromUrl = signal<string>('');
    readonly ownerOnly = signal<boolean>(false);

    readonly loadingPending = signal<boolean>(false);
    readonly pendingRequest = signal<StaffAccessRequestDto | null>(null);
    readonly submitting = signal<boolean>(false);
    readonly refreshing = signal<boolean>(false);
    readonly cancelling = signal<boolean>(false);
    readonly errorMessage = signal<string>('');

    selectedPresetId = 'operator';
    useCustomActions = false;
    customActions = new Set<StaffAction>();
    duration: RequestDurationOption = '7d';
    reason = '';

    readonly durationOptions: Array<{ value: RequestDurationOption; labelKey: string }> = [
        { value: '24h', labelKey: 'staffRbac.durations.24h' },
        { value: '7d', labelKey: 'staffRbac.durations.7d' },
        { value: '30d', labelKey: 'staffRbac.durations.30d' },
        { value: 'permanent', labelKey: 'staffRbac.durations.permanent' },
    ];

    ngOnInit(): void {
        this._route.queryParamMap.subscribe((params) => {
            const rawRes = params.get('resource') as StaffResource | null;
            const validRes = rawRes && RESOURCE_MAP[rawRes] ? rawRes : 'smartReportsTemplates';
            const rawAction = (params.get('action') as StaffAction | null) ?? 'read';
            const from = params.get('from') || '';
            const ownerOnly = params.get('ownerOnly') === '1';

            this.resource.set(validRes);
            this.requiredAction.set(rawAction);
            this.fromUrl.set(from);
            this.ownerOnly.set(ownerOnly);
            this.duration = this.permService.accessPolicy().defaultRequestDuration || '7d';

            this.customActions.clear();
            this.customActions.add(rawAction);
            const applicable = new Set(RESOURCE_MAP[validRes]?.applicableActions ?? []);
            if (rawAction !== 'read' && applicable.has('read')) {
                this.customActions.add('read');
            }
            const matchingPreset = this.presets.find((p) => p.actions.includes(rawAction));
            this.selectedPresetId = matchingPreset?.id ?? this.presets[0]?.id ?? 'viewer';

            // If user actually already holds access (e.g. navigated back or just approved), bounce cleanly
            if (!ownerOnly && this.permService.can(validRes, rawAction) && from && !from.startsWith('/access-restricted')) {
                this._router.navigateByUrl(from);
                return;
            }

            if (this.permService.isStaff() && !ownerOnly) {
                this._loadPendingRequest(validRes);
            }
        });
    }

    get resourceMeta() {
        return RESOURCE_MAP[this.resource()];
    }

    get presets(): AccessRequestBundlePreset[] {
        return getPresetsForResource(this.resource());
    }

    get applicableActions(): StaffAction[] {
        return (this.resourceMeta?.applicableActions ?? ['read']).filter(
            (a) => !(this.resource() === 'workspaceSettings' && a === 'delete')
        );
    }

    get currentRoleLabel(): string {
        const custom = this.permService.customRole();
        if (custom?.name) return custom.name;
        const slug = (this.permService.canonicalRole() || 'viewer') as SystemRoleSlug;
        const meta = SYSTEM_ROLE_METADATA[slug];
        return meta ? this._transloco.translate(meta.nameKey) || meta.name : slug;
    }

    actionLabel(action: StaffAction): string {
        return this._transloco.translate(ACTION_LABELS[action].labelKey) || ACTION_LABELS[action].label;
    }

    isCustomActionSelected(action: StaffAction): boolean {
        return this.customActions.has(action);
    }

    toggleCustomAction(action: StaffAction): void {
        if (this.customActions.has(action)) {
            if (this.customActions.size > 1) this.customActions.delete(action);
        } else {
            this.customActions.add(action);
        }
    }

    submitRequest(): void {
        const trimmed = this.reason.trim();
        if (trimmed.length < 3) {
            this.errorMessage.set(this._transloco.translate('staffRbac.requestDialog.reasonRequired'));
            return;
        }

        const actions = this.useCustomActions
            ? Array.from(this.customActions)
            : (this.presets.find((p) => p.id === this.selectedPresetId) || this.presets[0])?.actions ?? ['read'];

        this.submitting.set(true);
        this.errorMessage.set('');

        this._api
            .createAccessRequest({
                requestType: 'resource_access',
                requestedResources: [{ resource: this.resource(), actions }],
                requestedDuration: this.duration,
                reason: trimmed,
                sourcePath: this.fromUrl(),
            })
            .subscribe({
                next: (created) => {
                    this.submitting.set(false);
                    this.pendingRequest.set(created);
                    this.reason = '';
                    this._snackBar.open(
                        this._transloco.translate('staffRbac.requestDialog.submittedToast'),
                        undefined,
                        { duration: 4000 }
                    );
                },
                error: (err) => {
                    this.submitting.set(false);
                    const msg = err?.error?.message || '';
                    if (msg === 'pending_access_request_already_exists') {
                        this.errorMessage.set(this._transloco.translate('staffRbac.requestDialog.duplicatePending'));
                        this._loadPendingRequest(this.resource());
                    } else {
                        this.errorMessage.set(
                            msg || this._transloco.translate('staffRbac.requestDialog.submitError')
                        );
                    }
                },
            });
    }

    refreshAccess(): void {
        this.refreshing.set(true);
        this.permService.refresh().subscribe(() => {
            this.refreshing.set(false);
            if (!this.ownerOnly() && this.permService.can(this.resource(), this.requiredAction())) {
                const target = this.fromUrl();
                this._snackBar.open(
                    this._transloco.translate('staffRbac.restricted.accessGrantedToast'),
                    undefined,
                    { duration: 3500 }
                );
                if (target && !target.startsWith('/access-restricted')) {
                    this._router.navigateByUrl(target);
                } else {
                    this._router.navigate(['/home']);
                }
            } else {
                this._loadPendingRequest(this.resource());
                this._snackBar.open(
                    this._transloco.translate('staffRbac.restricted.stillRestrictedToast'),
                    undefined,
                    { duration: 3500 }
                );
            }
        });
    }

    cancelPendingRequest(): void {
        const req = this.pendingRequest();
        if (!req) return;
        this.cancelling.set(true);
        this._api.cancelAccessRequest(req._id).subscribe({
            next: () => {
                this.cancelling.set(false);
                this.pendingRequest.set(null);
                this._snackBar.open(
                    this._transloco.translate('staffRbac.myAccess.requestCancelled'),
                    undefined,
                    { duration: 3000 }
                );
            },
            error: () => {
                this.cancelling.set(false);
            },
        });
    }

    private _loadPendingRequest(targetResource: StaffResource): void {
        this.loadingPending.set(true);
        this._api.listMyAccessRequests('pending').subscribe({
            next: (list) => {
                this.loadingPending.set(false);
                const match =
                    list.find((r) =>
                        (r.requestedResources || []).some((item) => item.resource === targetResource)
                    ) ?? null;
                this.pendingRequest.set(match);
            },
            error: () => {
                this.loadingPending.set(false);
            },
        });
    }
}
