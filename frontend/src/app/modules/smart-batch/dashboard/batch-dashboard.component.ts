import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { WebhookEventsComponent } from '../../smart-monitor/webhooks/webhook-events.component';
import { WebhooksService } from '../../smart-monitor/webhooks/webhooks.service';
import { BatchExecutorControlComponent } from '../batch-executor-control.component';
import {
    BatchConfiguration,
    DEFAULT_PER_PAGE,
    SmartBatch,
    SmartBatchExecutor,
    SmartBatchService,
    SmartBatchStats,
} from '../smart-batch.service';
import { getCountryFlag as flagForCountry } from '../smart-batch-country.util';
import { inferBatchCategory, SmartBatchInputModeService } from '../smart-batch-input-mode.service';

@Component({
    selector: 'batch-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatSnackBarModule,
        WebhookEventsComponent,
        BatchExecutorControlComponent,
    ],
    templateUrl: './batch-dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class BatchDashboardComponent implements OnInit {
    private _smartBatchService = inject(SmartBatchService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _inputModeService = inject(SmartBatchInputModeService);
    private _webhooksService = inject(WebhooksService);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);

    configId = signal<string | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    batches = signal<SmartBatch[]>([]);
    stats = signal<SmartBatchStats | null>(null);
    isLoading = signal(true);
    isLoadingBatches = signal(false);

    page = signal(1);
    perPage = signal(DEFAULT_PER_PAGE);
    totalBatches = signal(0);
    totalPages = signal(1);

    rangeStart = computed(() =>
        this.totalBatches() === 0 ? 0 : (this.page() - 1) * this.perPage() + 1
    );
    rangeEnd = computed(() => Math.min(this.page() * this.perPage(), this.totalBatches()));
    canGoPrevious = computed(() => this.page() > 1 && !this.isLoadingBatches());
    canGoNext = computed(() => this.page() < this.totalPages() && !this.isLoadingBatches());

    // Panel visibility
    showStepsPanel = signal(false);
    showCostPanel = signal(false);
    webhookId = signal<string | null>(null);
    webhookName = signal('');
    webhookUrl = computed(() => this.configuration()?.notification?.webhookUrl || '');
    webhookLabel = computed(() => {
        const name = this.webhookName().trim();
        if (name) return name;
        const url = this.webhookUrl();
        if (!url) return '';
        try {
            return new URL(url).host;
        } catch {
            return url;
        }
    });
    canOpenWebhook = computed(() => Boolean(this.webhookId() || this.webhookUrl()));
    savingExecutor = signal(false);

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
                this.resolveWebhook(res.data);
            },
            error: () => {
                this._router.navigate(['/smart-batch']);
            },
        });

        this.loadBatches(1);

        // Load stats
        this._smartBatchService.getSmartBatchStats(configId).subscribe({
            next: (res) => {
                this.stats.set(res.data);
            },
        });
    }

    private resolveWebhook(config?: BatchConfiguration | null): void {
        const ref = config?.notification?.webhook;
        const storedId = typeof ref === 'object' && ref ? ref._id : typeof ref === 'string' ? ref : '';

        if (storedId) {
            this.webhookId.set(storedId);
            this.webhookName.set(typeof ref === 'object' && ref?.name ? ref.name : '');
            return;
        }

        const trimmed = (config?.notification?.webhookUrl || '').trim();

        if (!trimmed) {
            this.webhookId.set(null);
            this.webhookName.set('');
            return;
        }

        this._webhooksService.get({ where_url: trimmed, where_isActive: true, perPage: 1 }).subscribe({
            next: (res) => {
                const match = (res.data || []).find((webhook: { url?: string; name?: string }) => webhook.url === trimmed);
                this.webhookId.set(match?._id ?? null);
                this.webhookName.set(match?.name ?? '');
            },
            error: () => {
                this.webhookId.set(null);
                this.webhookName.set('');
            },
        });
    }

    openLinkedWebhook(): void {
        const id = this.webhookId();
        if (id) {
            this._router.navigate(['/smart-monitor/webhooks', id]);
            return;
        }
        if (this.webhookUrl()) {
            this._router.navigate(['/smart-monitor/webhooks']);
        }
    }

    loadBatches(page: number) {
        const configId = this.configId();
        if (!configId) return;

        this.isLoadingBatches.set(true);

        this._smartBatchService
            .getSmartBatches(configId, { page, perPage: this.perPage() })
            .subscribe({
                next: (res) => {
                    this.batches.set(res.data || []);
                    this.page.set(res.page ?? page);
                    this.perPage.set(res.limit ?? this.perPage());
                    this.totalBatches.set(res.total ?? res.data?.length ?? 0);
                    this.totalPages.set(Math.max(1, res.pages ?? 1));
                    this.isLoadingBatches.set(false);
                    this.isLoading.set(false);
                },
                error: () => {
                    this.isLoadingBatches.set(false);
                    this.isLoading.set(false);
                },
            });
    }

    previousPage() {
        if (!this.canGoPrevious()) return;
        this.loadBatches(this.page() - 1);
    }

    nextPage() {
        if (!this.canGoNext()) return;
        this.loadBatches(this.page() + 1);
    }

    setConfigExecutor(executor: SmartBatchExecutor): void {
        const config = this.configuration();
        const id = this.configId();
        if (!id || !config || this.savingExecutor() || config.executor === executor) return;

        this.savingExecutor.set(true);
        this._smartBatchService.updateConfiguration(id, { executor }).subscribe({
            next: (res) => {
                this.configuration.set({ ...config, ...res.data, executor });
                this.savingExecutor.set(false);
            },
            error: () => {
                this.savingExecutor.set(false);
                this._snackBar.open(
                    this._transloco.translate('batchDashboard.executorUpdateFailed'),
                    undefined,
                    { duration: 4000 }
                );
            },
        });
    }

    createBatch() {
        const configId = this.configId();
        if (!configId) {
            return;
        }

        const title = this.configuration()?.name ?? '';
        const category = inferBatchCategory(title);

        this._inputModeService
            .openModeDialog({
                context: 'useTemplate',
                title,
                category,
            })
            .subscribe((mode) => {
                if (!mode) {
                    return;
                }

                if (mode === 'single') {
                    this._router.navigate(
                        ['/smart-batch', configId, 'quick-validate'],
                        { queryParams: { from: 'dashboard' } }
                    );
                    return;
                }

                this._router.navigate(['/smart-batch', configId, 'batch', 'new']);
            });
    }

    viewBatch(batchId: string) {
        this._router.navigate(['/smart-batch', this.configId(), 'batch', batchId]);
    }

    addInputs(batchId: string) {
        const configId = this.configId();
        if (!configId) {
            return;
        }

        const batch = this.batches().find((b) => b._id === batchId);
        if (batch?.status === 'processing') {
            return;
        }

        const title = batch?.name ?? this.configuration()?.name ?? '';
        const category = inferBatchCategory(title || this.configuration()?.name);

        this._inputModeService
            .openModeDialog({
                context: 'addInputs',
                title,
                category,
            })
            .subscribe((mode) => {
                if (!mode) {
                    return;
                }

                if (mode === 'single') {
                    this._router.navigate([
                        '/smart-batch',
                        configId,
                        'batch',
                        batchId,
                        'quick-validate',
                    ]);
                    return;
                }

                this._router.navigate(['/smart-batch', configId, 'batch', batchId, 'inputs']);
            });
    }

    canAddInputs(batch: SmartBatch): boolean {
        return batch.status !== 'processing';
    }

    getCountryFlag(country?: string): string {
        return flagForCountry(country);
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
        return (
            ((batch.completedRows + batch.failedRows + (batch.partialRows || 0)) /
                batch.totalRows) *
            100
        );
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
