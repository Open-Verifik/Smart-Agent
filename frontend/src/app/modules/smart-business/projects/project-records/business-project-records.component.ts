import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { SmartBusinessService } from '../../smart-business.service';
import type { BusinessRegistrationDossier } from '../../smart-business.types';

export type DossierSortColumn = 'company' | 'documents' | 'members' | 'status' | 'risk' | 'updatedAt';
export type SortDirection = 'ascending' | 'descending';

const COLLATOR = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

@Component({
    selector: 'business-project-records',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './business-project-records.component.html',
    styleUrls: ['./business-project-records.component.scss'],
})
export class BusinessProjectRecordsComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _businessService = inject(SmartBusinessService);

    projectId = '';
    records = signal<BusinessRegistrationDossier[]>([]);
    loading = signal(true);

    sortColumn = signal<DossierSortColumn>('updatedAt');
    sortDirection = signal<SortDirection>('descending');
    sortStatusAnnouncement = signal('');

    sortedRecords = computed(() => {
        const list = [...this.records()];
        const col = this.sortColumn();
        const dir = this.sortDirection();
        const factor = dir === 'ascending' ? 1 : -1;

        return list.sort((a, b) => {
            if (col === 'updatedAt') {
                const ta = new Date(a.updatedAt || a.createdAt || 0).getTime();
                const tb = new Date(b.updatedAt || b.createdAt || 0).getTime();
                return factor * (ta - tb);
            }
            if (col === 'documents') {
                return factor * ((a.documents?.length || 0) - (b.documents?.length || 0));
            }
            if (col === 'members') {
                return factor * ((a.representatives?.length || 0) - (b.representatives?.length || 0));
            }
            if (col === 'company') {
                const na = a.company?.legalName || '';
                const nb = b.company?.legalName || '';
                return factor * COLLATOR.compare(na, nb);
            }
            if (col === 'status') {
                return factor * COLLATOR.compare(a.status || '', b.status || '');
            }
            if (col === 'risk') {
                const rank = { LOW: 1, MEDIUM: 2, HIGH: 3 };
                const ra = rank[a.riskAssessment?.score || 'LOW'] || 1;
                const rb = rank[b.riskAssessment?.score || 'LOW'] || 1;
                return factor * (ra - rb);
            }
            return 0;
        });
    });

    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            this.projectId = params['projectId'] || '';
            if (this.projectId) {
                this._loadRecords(this.projectId);
            }
        });
    }

    private _loadRecords(projId: string): void {
        this.loading.set(true);
        this._businessService.getCompanyRecords(projId).subscribe({
            next: (list) => {
                this.records.set(list);
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
            },
        });
    }

    toggleSort(column: DossierSortColumn, label: string): void {
        if (this.sortColumn() === column) {
            this.sortDirection.set(this.sortDirection() === 'ascending' ? 'descending' : 'ascending');
        } else {
            this.sortColumn.set(column);
            this.sortDirection.set(column === 'updatedAt' ? 'descending' : 'ascending');
        }
        this.sortStatusAnnouncement.set(
            `Sorted by ${label}, ${this.sortDirection()}, ${this.records().length} rows`
        );
    }

    getAriaSort(column: DossierSortColumn): SortDirection | null {
        return this.sortColumn() === column ? this.sortDirection() : null;
    }

    openRecord(record: BusinessRegistrationDossier): void {
        void this._router.navigate(['/smart-business/projects', this.projectId, 'records', record._id]);
    }

    returnToProjects(): void {
        if (this.projectId) {
            void this._router.navigate(['/smart-business/projects', this.projectId]);
            return;
        }
        void this._router.navigate(['/smart-business/projects']);
    }
}
