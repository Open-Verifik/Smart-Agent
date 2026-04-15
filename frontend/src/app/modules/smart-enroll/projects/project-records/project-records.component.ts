import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { TranslocoModule } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { SmartEnrollProjectsService } from '../smart-enroll-projects.service';
import type { AppRegistrationRow } from '../smart-enroll-projects.types';

@Component({
    selector: 'project-records',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatTableModule,
        TranslocoModule,
    ],
    templateUrl: './project-records.component.html',
})
export class ProjectRecordsComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _searchDebounce: ReturnType<typeof setTimeout> | null = null;

    displayedColumns = ['status', 'email', 'phone', 'createdAt'];
    dataSource: AppRegistrationRow[] = [];
    loading = signal(true);
    errorKey = signal<string | null>(null);
    projectId = '';
    projectName = signal<string | null>(null);
    total = signal(0);
    pageSize = 10;
    pageIndex = 0;
    searchInput = '';

    ngOnInit(): void {
        this.projectId = this._route.snapshot.paramMap.get('projectId') ?? '';
        if (!this.projectId) {
            this._router.navigate(['/smart-enroll/projects']);
            return;
        }
        this._loadProjectName();
        this.fetchRecords();
    }

    ngOnDestroy(): void {
        if (this._searchDebounce) clearTimeout(this._searchDebounce);
    }

    onSearchInput(): void {
        if (this._searchDebounce) clearTimeout(this._searchDebounce);
        this._searchDebounce = setTimeout(() => {
            this._searchDebounce = null;
            this.pageIndex = 0;
            this.fetchRecords();
        }, 400);
    }

    onPage(ev: PageEvent): void {
        this.pageIndex = ev.pageIndex;
        this.pageSize = ev.pageSize;
        this.fetchRecords();
    }

    goToProject(): void {
        this._router.navigate(['/smart-enroll/projects', this.projectId]);
    }

    goToList(): void {
        this._router.navigate(['/smart-enroll/projects']);
    }

    formatDate(date?: string): string {
        if (!date) return '—';
        return DateTime.fromISO(date).toFormat('MMM dd, yyyy HH:mm');
    }

    displayEmail(row: AppRegistrationRow): string {
        return row.emailValidation?.email ?? '—';
    }

    displayPhone(row: AppRegistrationRow): string {
        const p = row.phoneValidation;
        if (!p?.phone) return '—';
        return p.countryCode ? `${p.countryCode} ${p.phone}` : p.phone;
    }

    private _loadProjectName(): void {
        this._projectsService.getProject(this.projectId).subscribe({
            next: (p) => this.projectName.set(p?.name ?? null),
            error: () => this.projectName.set(null),
        });
    }

    private fetchRecords(): void {
        this.loading.set(true);
        this.errorKey.set(null);
        const search = this.searchInput.trim() || undefined;
        this._projectsService
            .listAppRegistrations(this.projectId, this.pageIndex + 1, this.pageSize, search)
            .subscribe({
                next: (res) => {
                    this.dataSource = res.data ?? [];
                    this.total.set(res.total ?? 0);
                    this.loading.set(false);
                },
                error: () => {
                    this.errorKey.set('smartEnrollProjects.recordsLoadError');
                    this.loading.set(false);
                },
            });
    }
}
