import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { filterFeaturesForCountry } from '../smart-batch-country.util';
import { AppFeature, SmartBatchService } from '../smart-batch.service';

export interface ReportBuilderAddConsultDialogData {
    country: string;
    /** Features already on the linked Smart Batch configuration. */
    excludeFeatureIds: string[];
}

@Component({
    selector: 'report-builder-add-consult-dialog',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    template: `
        <h2 mat-dialog-title class="!text-lg !font-semibold">
            {{ 'smartReport.addConsultTitle' | transloco }}
        </h2>
        <mat-dialog-content class="!max-h-[min(70vh,32rem)]">
            <p class="mb-3 text-sm text-stone-500 dark:text-stone-400">
                {{ 'smartReport.addConsultBody' | transloco }}
            </p>
            <mat-form-field appearance="outline" class="w-full">
                <mat-label>{{ 'smartReport.addConsultSearch' | transloco }}</mat-label>
                <input matInput [ngModel]="query()" (ngModelChange)="onQueryChange($event)" />
                <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>

            @if (loading()) {
                <div class="flex justify-center py-8">
                    <mat-spinner diameter="32"></mat-spinner>
                </div>
            } @else if (filtered().length === 0) {
                <p class="py-6 text-center text-sm italic text-stone-400">
                    {{ 'smartReport.addConsultEmpty' | transloco }}
                </p>
            } @else {
                <ul class="mt-2 max-h-[min(50vh,24rem)] space-y-1 overflow-y-auto pr-1">
                    @for (feature of filtered(); track feature._id) {
                        <li>
                            <button
                                type="button"
                                class="flex w-full items-start gap-3 rounded-xl border border-stone-200 px-3 py-2.5 text-left transition hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-gray-700 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-950/20"
                                (click)="pick(feature)"
                            >
                                <mat-icon class="mt-0.5 shrink-0 !text-[20px] text-stone-400">api</mat-icon>
                                <span class="min-w-0">
                                    <span class="block text-sm font-medium text-stone-900 dark:text-stone-100">{{
                                        feature.nameES || feature.name || feature.code
                                    }}</span>
                                    @if (feature.description) {
                                        <span class="mt-0.5 block line-clamp-2 text-xs text-stone-500">{{
                                            feature.description
                                        }}</span>
                                    }
                                </span>
                            </button>
                        </li>
                    }
                </ul>
            }
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button type="button" (click)="close()">
                {{ 'smartReport.addConsultCancel' | transloco }}
            </button>
        </mat-dialog-actions>
    `,
})
export class ReportBuilderAddConsultDialogComponent implements OnInit {
    private _batch = inject(SmartBatchService);
    private _ref = inject(MatDialogRef<ReportBuilderAddConsultDialogComponent, AppFeature | undefined>);
    data = inject<ReportBuilderAddConsultDialogData>(MAT_DIALOG_DATA);

    loading = signal(true);
    query = signal('');
    features = signal<AppFeature[]>([]);

    filtered = computed(() => {
        const q = this.query().trim().toLowerCase();
        let list = filterFeaturesForCountry(this.features(), this.data.country);

        if (q) {
            list = list.filter((feature) => {
                const haystack = `${feature.name ?? ''} ${feature.nameES ?? ''} ${feature.code ?? ''} ${feature.description ?? ''}`.toLowerCase();
                return haystack.includes(q);
            });
        }

        return list.slice(0, 80);
    });

    ngOnInit(): void {
        this._batch.getAvailableFeatures(this.data.country).subscribe({
            next: (response) => {
                const exclude = new Set(this.data.excludeFeatureIds);
                const list = (response.data ?? []).filter(
                    (feature: AppFeature) => feature._id && !exclude.has(feature._id)
                );
                this.features.set(list);
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
                this.features.set([]);
            },
        });
    }

    onQueryChange(value: string): void {
        this.query.set(value);
    }

    pick(feature: AppFeature): void {
        this._ref.close(feature);
    }

    close(): void {
        this._ref.close(undefined);
    }

}
