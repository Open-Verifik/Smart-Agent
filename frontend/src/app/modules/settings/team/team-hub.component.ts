import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import { StaffListComponent } from '../staff-list/staff-list.component';
import { TeamAccessPolicyComponent } from './team-access-policy/team-access-policy.component';
import { TeamAccessRequestsComponent } from './team-access-requests/team-access-requests.component';
import { TeamRolesComponent } from './team-roles/team-roles.component';
import { TeamSubteamsComponent } from './team-subteams/team-subteams.component';

const TAB_SLUGS = ['members', 'teams', 'roles', 'requests', 'policy'] as const;

@Component({
    selector: 'app-team-hub',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        RouterModule,
        TranslocoModule,
        StaffListComponent,
        TeamSubteamsComponent,
        TeamRolesComponent,
        TeamAccessRequestsComponent,
        TeamAccessPolicyComponent,
    ],
    templateUrl: './team-hub.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamHubComponent implements OnInit {
    @Input() user: any;
    @Output() readonly staffChanged = new EventEmitter<void>();
    @Output() readonly userChange = new EventEmitter<unknown>();

    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);
    readonly permService = inject(StaffPermissionService);

    readonly selectedTabIndex = signal(0);

    ngOnInit(): void {
        this._route.queryParamMap.subscribe((params) => {
            const tab = params.get('tab');
            if (tab) {
                const idx = TAB_SLUGS.indexOf(tab as (typeof TAB_SLUGS)[number]);
                if (idx >= 0) this.selectedTabIndex.set(idx);
            }
        });
    }

    onTabChange(index: number): void {
        this.selectedTabIndex.set(index);
        const slug = TAB_SLUGS[index] || 'members';
        void this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { tab: slug },
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }

    onPendingCountChange(count: number): void {
        this.permService.updatePendingRequestsCount(count);
    }
}
