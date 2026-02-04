import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import {
    BatchConfiguration,
    SmartBatch,
    SmartBatchService,
    SmartBatchStats,
} from '../smart-batch.service';

@Component({
    selector: 'batch-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
    ],
    templateUrl: './batch-dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class BatchDashboardComponent implements OnInit {
    private _smartBatchService = inject(SmartBatchService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _dialog = inject(MatDialog);

    configId = signal<string | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    batches = signal<SmartBatch[]>([]);
    stats = signal<SmartBatchStats | null>(null);
    isLoading = signal(true);

    // Panel visibility
    showStepsPanel = signal(false);
    showCostPanel = signal(false);

    // Computed values
    stepsCount = computed(() => this.configuration()?.steps?.length ?? 0);

    stepsDetails = computed(() => {
        const config = this.configuration();
        if (!config?.steps) return [];
        return config.steps
            .sort((a, b) => a.sequence - b.sequence)
            .map((step) => {
                const feature = step.appFeature as any;
                return {
                    sequence: step.sequence,
                    name: feature?.name || feature?.code || 'Unknown',
                    url: feature?.url || '',
                    price: feature?.price || feature?.smartCheckPrice || 0,
                    enabled: step.enabled,
                };
            });
    });

    estimatedCostPerRow = computed(() => {
        return this.stepsDetails().reduce((sum, step) => sum + step.price, 0);
    });

    toggleStepsPanel() {
        this.showStepsPanel.update((v) => !v);
        if (this.showStepsPanel()) {
            this.showCostPanel.set(false);
        }
    }

    toggleCostPanel() {
        this.showCostPanel.update((v) => !v);
        if (this.showCostPanel()) {
            this.showStepsPanel.set(false);
        }
    }

    ngOnInit() {
        const id = this._route.snapshot.paramMap.get('configId');
        if (id) {
            this.configId.set(id);
            this.loadData(id);
        } else {
            this._router.navigate(['/smart-batch']);
        }
    }

    loadData(configId: string) {
        this.isLoading.set(true);

        // Load configuration
        this._smartBatchService.getConfiguration(configId).subscribe({
            next: (res) => {
                this.configuration.set(res.data);
            },
            error: () => {
                this._router.navigate(['/smart-batch']);
            },
        });

        // Load batches
        this._smartBatchService.getSmartBatches(configId).subscribe({
            next: (res) => {
                this.batches.set(res.data || []);
                this.isLoading.set(false);
            },
            error: () => {
                this.isLoading.set(false);
            },
        });

        // Load stats
        this._smartBatchService.getSmartBatchStats(configId).subscribe({
            next: (res) => {
                this.stats.set(res.data);
            },
        });
    }

    createBatch() {
        this._router.navigate(['smart-batch', this.configId(), 'batch', 'new']);
    }

    viewBatch(batchId: string) {
        // For future implementation
        console.log('View batch:', batchId);
    }

    getCountryFlag(country: string): string {
        const map: Record<string, string> = {
            colombia: '🇨🇴',
            col: '🇨🇴',
            co: '🇨🇴',
            'united states': '🇺🇸',
            usa: '🇺🇸',
            us: '🇺🇸',
            peru: '🇵🇪',
            pe: '🇵🇪',
            world: '🌐',
            mexico: '🇲🇽',
            mx: '🇲🇽',
            brazil: '🇧🇷',
            br: '🇧🇷',
            chile: '🇨🇱',
            cl: '🇨🇱',
            argentina: '🇦🇷',
            ar: '🇦🇷',
            ecuador: '🇪🇨',
            ec: '🇪🇨',
            venezuela: '🇻🇪',
            ve: '🇻🇪',
            bolivia: '🇧🇴',
            bo: '🇧🇴',
            uruguay: '🇺🇾',
            uy: '🇺🇾',
            paraguay: '🇵🇾',
            py: '🇵🇾',
            panama: '🇵🇦',
            pa: '🇵🇦',
            'costa rica': '🇨🇷',
            cr: '🇨🇷',
            guatemala: '🇬🇹',
            gt: '🇬🇹',
            honduras: '🇭🇳',
            hn: '🇭🇳',
            'el salvador': '🇸🇻',
            sv: '🇸🇻',
            'dominican republic': '🇩🇴',
            'república dominicana': '🇩🇴',
            'republica dominicana': '🇩🇴',
            do: '🇩🇴',
            canada: '🇨🇦',
            ca: '🇨🇦',
            spain: '🇪🇸',
            es: '🇪🇸',
        };
        const key = (country || '').trim().toLowerCase();
        return map[key] ?? '🏳️';
    }

    getStatusColor(status: string): string {
        const colors: Record<string, string> = {
            draft: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
            pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
            processing: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            failed: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
            cancelled: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        };
        return colors[status] || colors.draft;
    }

    getBatchProgress(batch: SmartBatch): number {
        if (batch.totalRows === 0) return 0;
        return ((batch.completedRows + batch.failedRows) / batch.totalRows) * 100;
    }

    formatDate(dateString?: string): string {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    }
}
