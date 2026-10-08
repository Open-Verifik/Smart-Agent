import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { ReportTemplateThumbComponent } from 'app/modules/smart-batch/report-template-thumb.component';
import { SmartReportService, SmartReportTemplate } from 'app/modules/smart-batch/smart-report.service';

@Component({
    selector: 'fleet-template-preview-dialog',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        ReportTemplateThumbComponent,
    ],
    template: `
        <div class="flex items-start justify-between gap-3 px-4 pt-4">
            <h2 class="min-w-0 truncate text-sm font-semibold text-stone-950 dark:text-white">
                {{ template()?.name || data.fallback.name }}
            </h2>
            <button
                mat-icon-button
                type="button"
                (click)="close()"
                [attr.aria-label]="'smartFleet.dismiss' | transloco"
            >
                <mat-icon>close</mat-icon>
            </button>
        </div>
        <div class="fleet-template-preview px-4 pb-4">
            <div *ngIf="loading()" class="flex h-80 items-center justify-center">
                <mat-spinner diameter="32"></mat-spinner>
            </div>
            <report-template-thumb *ngIf="!loading() && template()" [template]="template()!"></report-template-thumb>
        </div>
    `,
    styles: `
        .fleet-template-preview {
            width: 16rem;
        }

        :host ::ng-deep .fleet-template-preview .report-template-thumb {
            height: 22rem;
        }
    `,
})
export class FleetTemplatePreviewDialogComponent implements OnInit {
    private _reports = inject(SmartReportService);
    private _ref = inject(MatDialogRef<FleetTemplatePreviewDialogComponent>);
    data = inject<{ templateId?: string; fallback: SmartReportTemplate }>(MAT_DIALOG_DATA);

    loading = signal(true);
    template = signal<SmartReportTemplate | null>(null);

    ngOnInit(): void {
        const id = this.data.templateId;

        if (!id) {
            this.template.set(this.data.fallback);
            this.loading.set(false);
            return;
        }

        this._reports.getTemplate(id).subscribe({
            next: (full) => {
                this.template.set(full ?? this.data.fallback);
                this.loading.set(false);
            },
            error: () => {
                this.template.set(this.data.fallback);
                this.loading.set(false);
            },
        });
    }

    close(): void {
        this._ref.close();
    }
}
