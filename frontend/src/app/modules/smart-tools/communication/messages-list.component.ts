import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import {
    formatMessagePhone,
    resolveMessageSource,
    MessageSourceBadge,
} from './message-preview.util';
import {
    PhoneGateway,
    PhoneValidationsService,
} from './phone-validations.service';

export type { MessageSourceBadge };

@Component({
    selector: 'communication-messages-list',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TranslocoModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSnackBarModule,
        MatTableModule,
    ],
    templateUrl: './messages-list.component.html',
    styleUrls: ['./messages-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _service = inject(PhoneValidationsService);
    private _cdr = inject(ChangeDetectorRef);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _destroy$ = new Subject<void>();
    private _search$ = new Subject<string>();

    phoneGateway: PhoneGateway = 'whatsapp';
    loading = true;
    rows: any[] = [];
    total = 0;
    page = 1;
    limit = 20;
    search = '';
    sourceFilter = '';
    statusFilter = '';

    displayedColumns = ['phone', 'status', 'source', 'project', 'createdAt'];
    readonly pageSizeOptions = [10, 20, 50];

    ngOnInit(): void {
        this.phoneGateway =
            (this._route.snapshot.data['phoneGateway'] as PhoneGateway) ||
            'whatsapp';

        this._search$
            .pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this._destroy$))
            .subscribe((value) => {
                this.search = value;
                this.page = 1;
                this._load();
            });

        this._load();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    get titleKey(): string {
        return this.phoneGateway === 'sms'
            ? 'communication_messages.list.title_sms'
            : 'communication_messages.list.title_whatsapp';
    }

    get composeLink(): string {
        return this.phoneGateway === 'sms'
            ? '/smart-tools/sms-messages/new'
            : '/smart-tools/whatsapp-messages/new';
    }

    onSearchInput(value: string): void {
        this._search$.next(value ?? '');
    }

    onFilterChange(): void {
        this.page = 1;
        this._load();
    }

    onPage(event: PageEvent): void {
        this.page = event.pageIndex + 1;
        this.limit = event.pageSize;
        this._load();
    }

    onPageSizeChange(pageSize: number): void {
        if (!pageSize || pageSize === this.limit) return;
        this.page = 1;
        this.limit = pageSize;
        this._load();
    }

    goCompose(): void {
        this._router.navigateByUrl(this.composeLink);
    }

    goDetail(row: any): void {
        if (!row?._id) return;

        const base =
            this.phoneGateway === 'sms'
                ? '/smart-tools/sms-messages'
                : '/smart-tools/whatsapp-messages';

        this._router.navigateByUrl(`${base}/${row._id}`);
    }

    formatPhone(row: any): string {
        return formatMessagePhone(row);
    }

    resolveSource(row: any): MessageSourceBadge {
        return resolveMessageSource(row);
    }

    projectLabel(row: any): string {
        return row?.project?.name || '—';
    }

    private _load(): void {
        this.loading = true;
        this._cdr.markForCheck();

        this._service
            .list({
                phoneGateway: this.phoneGateway,
                page: this.page,
                limit: this.limit,
                like_phone: this.search || undefined,
                where_source: this.sourceFilter || undefined,
                where_status: this.statusFilter || undefined,
            })
            .subscribe({
                next: (response) => {
                    this.rows = response?.data || [];
                    this.total = response?.total ?? this.rows.length;
                    this.loading = false;
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.loading = false;
                    this.rows = [];
                    this.total = 0;
                    this._cdr.markForCheck();
                    this._snack.open(
                        this._transloco.translate('communication_messages.compose.error'),
                        undefined,
                        { duration: 3000 }
                    );
                },
            });
    }
}
