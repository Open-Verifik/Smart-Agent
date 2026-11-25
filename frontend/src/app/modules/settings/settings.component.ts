import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { TranslocoModule } from '@jsverse/transloco';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import { StaffAction, StaffResource } from 'app/core/permissions/staff-permission.types';
import { Subject, takeUntil } from 'rxjs';
import { ApiKeySettingsComponent } from './api-key-settings/api-key-settings.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { CostCentersComponent } from './cost-centers/cost-centers.component';
import { DataRetentionSettingsComponent } from './data-retention-settings/data-retention-settings.component';
import { MyAccessComponent } from './my-access/my-access.component';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { TeamHubComponent } from './team/team-hub.component';
import { UsageHistoryComponent } from './usage-history/usage-history.component';
import { UsageReportComponent } from './usage-report/usage-report.component';
import { getSettingsUser } from './utils/settings-business-user.util';
import { WorkspaceSettingsComponent } from './workspace-settings/workspace-settings.component';

interface SettingsPanel {
    id: string;
    icon: string;
    title: string;
    description?: string;
    disabled?: boolean;
    badge?: string;
    staffOnly?: boolean;
    locked?: boolean;
    permission?: { resource: StaffResource; action?: StaffAction };
}

interface SettingsSection {
    id: string;
    title: string;
    panels: SettingsPanel[];
}

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        TranslocoModule,
        RouterModule,
        TeamHubComponent,
        MyAccessComponent,
        BillingDetailsComponent,
        PaymentHistoryComponent,
        ApiKeySettingsComponent,
        ProfileSettingsComponent,
        WorkspaceSettingsComponent,
        NotificationSettingsComponent,
        UsageHistoryComponent,
        UsageReportComponent,
        CostCentersComponent,
        DataRetentionSettingsComponent,
    ],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit, OnDestroy {
    private _unsubscribeAll = new Subject<void>();
    readonly permService = inject(StaffPermissionService);

    drawerMode: 'over' | 'side' = 'side';
    drawerOpened = true;
    selectedPanel = 'profile';
    user: any;
    settingsUser: unknown = null;
    isWeb2User = false;

    sections: SettingsSection[] = [
        {
            id: 'account',
            title: 'settings.sections.account',
            panels: [
                {
                    id: 'profile',
                    icon: 'heroicons_outline:user-circle',
                    title: 'settings.panels.profile',
                    description: 'settings.panels.profile_desc',
                },
                {
                    id: 'my_access',
                    icon: 'heroicons_outline:identification',
                    title: 'settings.panels.my_access',
                    description: 'settings.panels.my_access_desc',
                    staffOnly: true,
                },
                {
                    id: 'security',
                    icon: 'heroicons_outline:lock-closed',
                    title: 'settings.panels.security',
                    description: 'settings.panels.security_desc',
                    badge: 'settings.coming_soon',
                    disabled: true,
                },
                {
                    id: 'notifications',
                    icon: 'heroicons_outline:bell',
                    title: 'settings.panels.notifications',
                    description: 'settings.panels.notifications_desc',
                    permission: { resource: 'workspaceSettings', action: 'read' },
                },
            ],
        },
        {
            id: 'workspace',
            title: 'settings.sections.workspace',
            panels: [
                {
                    id: 'general',
                    icon: 'heroicons_outline:building-office',
                    title: 'settings.panels.general',
                    description: 'settings.panels.general_desc',
                    permission: { resource: 'workspaceSettings', action: 'read' },
                },
                {
                    id: 'team',
                    icon: 'heroicons_outline:user-group',
                    title: 'settings.panels.team',
                    description: 'settings.panels.team_desc',
                    permission: { resource: 'team', action: 'read' },
                },
                {
                    id: 'data_retention',
                    icon: 'heroicons_outline:shield-check',
                    title: 'settings.panels.data_retention',
                    description: 'settings.panels.data_retention_desc',
                    permission: { resource: 'workspaceSettings', action: 'read' },
                },
            ],
        },
        {
            id: 'billing',
            title: 'settings.sections.billing',
            panels: [
                {
                    id: 'billing_details',
                    icon: 'heroicons_outline:credit-card',
                    title: 'settings.panels.billing_details',
                    description: 'settings.panels.billing_details_desc',
                    permission: { resource: 'billingCredits', action: 'read' },
                },
                {
                    id: 'payment_history',
                    icon: 'heroicons_outline:document-text',
                    title: 'settings.panels.payment_history',
                    description: 'settings.panels.payment_history_desc',
                    permission: { resource: 'billingCredits', action: 'read' },
                },
                {
                    id: 'usage_history',
                    icon: 'heroicons_outline:chart-bar',
                    title: 'settings.panels.usage_history',
                    description: 'settings.panels.usage_history_desc',
                    permission: { resource: 'billingUsage', action: 'read' },
                },
                {
                    id: 'usage_report',
                    icon: 'heroicons_outline:globe-americas',
                    title: 'settings.panels.usage_report',
                    description: 'settings.panels.usage_report_desc',
                    permission: { resource: 'billingUsage', action: 'read' },
                },
            ],
        },
        {
            id: 'developers',
            title: 'settings.sections.developers',
            panels: [
                {
                    id: 'api_key',
                    icon: 'heroicons_outline:key',
                    title: 'settings.panels.api_key',
                    description: 'settings.panels.api_key_desc',
                    permission: { resource: 'apiKeys', action: 'read' },
                },
                {
                    id: 'cost_centers',
                    icon: 'heroicons_outline:rectangle-group',
                    title: 'settings.panels.cost_centers',
                    description: 'settings.panels.cost_centers_desc',
                    permission: { resource: 'billingUsage', action: 'read' },
                },
            ],
        },
    ];

    private _panelToSlug: { [key: string]: string } = {
        profile: 'profile',
        my_access: 'my-access',
        security: 'security',
        notifications: 'notifications',
        general: 'general',
        team: 'team',
        data_retention: 'data-retention',
        billing_details: 'billing-details',
        payment_history: 'payment-history',
        usage_history: 'usage-history',
        usage_report: 'usage-report',
        api_key: 'api-key',
        cost_centers: 'cost-centers',
    };

    private _slugToPanel: { [key: string]: string } = {
        profile: 'profile',
        'my-access': 'my_access',
        security: 'security',
        notifications: 'notifications',
        general: 'general',
        team: 'team',
        'data-retention': 'data_retention',
        'billing-details': 'billing_details',
        'payment-history': 'payment_history',
        'usage-history': 'usage_history',
        'usage-report': 'usage_report',
        'api-key': 'api_key',
        'cost-centers': 'cost_centers',
    };

    constructor(
        private _cdr: ChangeDetectorRef,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this._loadUserData();
    }

    ngOnInit(): void {
        this._observeMediaChanges();
        this._observeRouteChanges();
        this.permService.state$.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
            this._cdr.markForCheck();
        });
    }

    get visibleSections(): SettingsSection[] {
        const isStaff = this.permService.isStaff();
        const hideRestricted = this.permService.hideRestrictedNavigation();

        return this.sections
            .map((section) => {
                const panels: SettingsPanel[] = [];
                for (const panel of section.panels) {
                    if (panel.staffOnly && !isStaff) {
                        continue;
                    }

                    const allowed =
                        !panel.permission ||
                        this.permService.can(panel.permission.resource, panel.permission.action ?? 'read');

                    if (!allowed && hideRestricted) {
                        continue;
                    }

                    panels.push({
                        ...panel,
                        locked: !allowed,
                    });
                }
                return { ...section, panels };
            })
            .filter((section) => section.panels.length > 0);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    /**
     * Persists merged user emitted from profile/general panels and refreshes sidebar/footer bindings.
     */
    onUserChanged(nextUser: unknown): void {
        this.user = nextUser as typeof this.user;
        this.isWeb2User = true;
        this._persistAccount();
        this._syncSettingsUser();
        this._cdr.markForCheck();
    }

    selectPanel(panelId: string): void {
        const panel = this._findPanel(panelId);
        if (panel?.disabled) return;

        const slug = this._panelToSlug[panelId] || panelId;
        if (
            panel?.permission &&
            this.permService.isStaff() &&
            !this.permService.can(panel.permission.resource, panel.permission.action ?? 'read')
        ) {
            void this._router.navigate(['/access-restricted'], {
                queryParams: {
                    resource: panel.permission.resource,
                    action: panel.permission.action ?? 'read',
                    from: `/settings/${slug}`,
                },
            });
            return;
        }

        this._router.navigate(['/settings', slug]);
    }

    private _onPanelChanged(panelId: string): void {
        this.selectedPanel = panelId;
        if (this.drawerMode === 'over') {
            this.drawerOpened = false;
        }
        this._cdr.markForCheck();
    }

    isPanelSelected(panelId: string): boolean {
        return this.selectedPanel === panelId;
    }

    private _syncSettingsUser(): void {
        this.settingsUser = getSettingsUser(this.user);
    }

    private _persistAccount(): void {
        const storageKey = localStorage.getItem('verifik_account') ? 'verifik_account' : 'user';

        localStorage.setItem(storageKey, JSON.stringify(this.user));
    }

    private _loadUserData(): void {
        const userStr = localStorage.getItem('verifik_account') || localStorage.getItem('user');
        this.user = userStr ? JSON.parse(userStr) : null;
        this.isWeb2User = !!localStorage.getItem('verifik_account');
        this._syncSettingsUser();
    }

    private _observeMediaChanges(): void {
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                if (matchingAliases.includes('lg')) {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                } else {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
                this._cdr.markForCheck();
            });
    }

    private _observeRouteChanges(): void {
        this._route.params.pipe(takeUntil(this._unsubscribeAll)).subscribe((params) => {
            const slug = params['panel'];
            if (!slug) return;

            const panelId = this._slugToPanel[slug] || slug;
            const panel = this._findPanel(panelId);
            if (panel && !panel.disabled) {
                if (
                    panel.permission &&
                    this.permService.isStaff() &&
                    !this.permService.can(panel.permission.resource, panel.permission.action ?? 'read')
                ) {
                    void this._router.navigate(['/access-restricted'], {
                        queryParams: {
                            resource: panel.permission.resource,
                            action: panel.permission.action ?? 'read',
                            from: `/settings/${slug}`,
                        },
                        replaceUrl: true,
                    });
                    return;
                }
                this._onPanelChanged(panelId);
            } else {
                this._router.navigate(['/settings', 'profile'], { replaceUrl: true });
            }
        });
    }

    private _findPanel(panelId: string): SettingsPanel | undefined {
        for (const section of this.sections) {
            const panel = section.panels.find((p) => p.id === panelId);
            if (panel) return panel;
        }
        return undefined;
    }
}
