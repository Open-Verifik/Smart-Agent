import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoDirective, TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { take } from 'rxjs';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { getPresetStepCount } from './batch-required-fields.util';
import { SmartBatchInputModeService } from './smart-batch-input-mode.service';
import { BatchConfiguration, SmartBatchService } from './smart-batch.service';
import { BatchConfigurationRef, SmartReportService, SmartReportTemplate } from './smart-report.service';

@Component({
    selector: 'smart-batch',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoDirective,
        TranslocoModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
    ],
    templateUrl: './smart-batch.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class SmartBatchComponent implements OnInit {
    private _smartBatchService = inject(SmartBatchService);
    private _smartReportService = inject(SmartReportService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _transloco = inject(TranslocoService);
    private _authGate = inject(AuthRequiredGateService);
    private _inputModeService = inject(SmartBatchInputModeService);
    private _snackBar = inject(MatSnackBar);

    configurations = this._smartBatchService.configurations;
    isLoading = this._smartBatchService.isLoading;
    activeTab = signal<'configurations' | 'templates'>('configurations');
    templates = this._smartReportService.templates;
    isLoadingTemplates = this._smartReportService.isLoading;
    isCloningPreset = signal(false);
    isModeDialogOpen = signal(false);

    systemTemplates = computed(() =>
        this.templates().filter((t) => t.type === 'System').sort((a, b) => {
            const cat = (a.category ?? '').localeCompare(b.category ?? '');
            if (cat !== 0) return cat;
            return (a.tier ?? '').localeCompare(b.tier ?? '');
        })
    );

    clientTemplates = computed(() =>
        this.templates().filter((t) => t.type !== 'System')
    );

    ngOnInit() {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => {
                const tab = this._route.snapshot.queryParamMap.get('tab');
                if (tab === 'templates') {
                    this.activeTab.set('templates');
                }
                this._route.queryParamMap.subscribe((params) => {
                    const queryTab = params.get('tab');
                    if (queryTab === 'templates') {
                        this.activeTab.set('templates');
                    }
                });
                this._loadLandingData();
            },
            panelClass: 'auth-required-dialog',
        });
    }

    private _loadLandingData(): void {
        this._smartBatchService.getConfigurations().subscribe({
            error: (err) => console.error('[SmartBatch] getConfigurations error', err),
        });
        this._smartReportService.getTemplates().subscribe({
            error: (err) => console.error('[SmartBatch] getTemplates error', err),
        });
    }

    setActiveTab(tab: 'configurations' | 'templates') {
        this.activeTab.set(tab);
    }

    createConfiguration() {
        this._router.navigate(['smart-batch/create']);
    }

    createBlankTemplate(): void {
        this._router.navigate(['/smart-batch', 'report-builder']);
    }

    useSystemTemplate(template: SmartReportTemplate, event: Event) {
        event.stopPropagation();
        if (!template.systemKey) return;

        this._openUseTemplateDialog(template, (mode) => {
            this._cloneAndNavigate(template.systemKey!, mode);
        });
    }

    useClientTemplate(template: SmartReportTemplate, event: Event) {
        event.stopPropagation();

        const configId = this.resolveBatchConfigRef(template.batchConfiguration).id;
        if (!configId) {
            this._snackBar.open(
                this._transloco.translate('smartBatchSystemPresets.unlinkedTemplate'),
                undefined,
                { duration: 4000 }
            );
            return;
        }

        this._openUseTemplateDialog(template, (mode) => {
            this._navigateForMode(configId, mode);
        });
    }

    private _openUseTemplateDialog(
        template: SmartReportTemplate,
        onMode: (mode: 'single' | 'batch') => void
    ): void {
        if (this.isCloningPreset() || this.isModeDialogOpen()) return;

        this.isModeDialogOpen.set(true);

        this._inputModeService
            .openModeDialog({ template, context: 'useTemplate' })
            .pipe(take(1))
            .subscribe((mode) => {
                this.isModeDialogOpen.set(false);
                if (!mode) return;
                onMode(mode);
            });
    }

    private _navigateForMode(configId: string, mode: 'single' | 'batch'): void {
        if (mode === 'single') {
            this._router.navigate(['/smart-batch', configId, 'quick-validate']);
            return;
        }

        this._router.navigate(['/smart-batch', configId, 'batch', 'new']);
    }

    private _cloneAndNavigate(systemKey: string, mode: 'single' | 'batch'): void {
        if (this.isCloningPreset()) return;

        this.isCloningPreset.set(true);
        this._smartBatchService.cloneSystemPreset(systemKey).subscribe({
            next: (res) => {
                this.isCloningPreset.set(false);
                const configId = res.data.batchConfiguration._id ?? res.data.batchConfiguration.id;
                if (!configId) return;

                if (res.data.reused) {
                    this._snackBar.open(
                        this._transloco.translate('smartBatchSystemPresets.reusedExisting'),
                        undefined,
                        { duration: 3500 }
                    );
                }

                this._smartBatchService.getConfigurations().subscribe();
                this._smartReportService.getTemplates().subscribe();

                this._navigateForMode(configId, mode);
            },
            error: (err) => {
                this.isCloningPreset.set(false);
                console.error('[SmartBatch] cloneSystemPreset error', err);
                this._snackBar.open(
                    this._transloco.translate('smartBatchSystemPresets.cloneFailed'),
                    undefined,
                    { duration: 4000 }
                );
            },
        });
    }

    deleteConfiguration(id: string, event: Event) {
        event.stopPropagation();
        if (confirm('Are you sure you want to delete this configuration?')) {
            this._smartBatchService.deleteConfiguration(id).subscribe();
        }
    }

    deleteTemplate(id: string, event: Event) {
        event.stopPropagation();
        const message = this._transloco.translate('smartBatchLanding.deleteConfirmation');
        if (confirm(message)) {
            this._smartReportService.deleteTemplate(id).subscribe();
        }
    }

    openTemplateEditor(template: SmartReportTemplate, event: Event) {
        event.stopPropagation();
        if (template.type === 'System') return;

        const templateId = template._id ?? '';
        if (!templateId) return;

        const configId = this.resolveBatchConfigRef(template.batchConfiguration).id;
        if (configId) {
            this._router.navigate(['smart-batch', configId, 'report-builder', templateId]);
            return;
        }

        this._router.navigate(['/smart-batch', 'report-builder', templateId]);
    }

    resolveBatchConfigRef(
        ref: string | BatchConfiguration | BatchConfigurationRef | null | undefined
    ): { id: string | null; name: string | null } {
        if (!ref) {
            return { id: null, name: null };
        }

        const id = this._toConfigIdString(typeof ref === 'string' ? ref : (ref._id ?? ref.id));
        if (!id) {
            return { id: null, name: null };
        }

        const populatedName = typeof ref === 'object' ? ref.name ?? null : null;
        const config = this.configurations().find((c) => this._toConfigIdString(c._id ?? c.id) === id);

        return {
            id,
            name: populatedName ?? config?.name ?? null,
        };
    }

    getConfigName(
        configRef: string | BatchConfiguration | BatchConfigurationRef | null | undefined
    ): string {
        const resolved = this.resolveBatchConfigRef(configRef);
        return resolved.name ?? resolved.id ?? '';
    }

    private _toConfigIdString(value: unknown): string | null {
        if (value == null) {
            return null;
        }

        if (typeof value === 'string') {
            return value;
        }

        if (typeof value === 'object') {
            const record = value as { _id?: unknown; id?: unknown; toString?: () => string };
            const nestedId = record._id ?? record.id;

            if (nestedId != null && nestedId !== value) {
                return this._toConfigIdString(nestedId);
            }

            if (typeof record.toString === 'function') {
                const asString = record.toString();
                if (asString && asString !== '[object Object]') {
                    return asString;
                }
            }
        }

        return null;
    }

    templateTitle(template: SmartReportTemplate): string {
        if (template.nameKey) {
            return this._transloco.translate(template.nameKey);
        }
        return template.name;
    }

    templateDescription(template: SmartReportTemplate): string {
        if (template.descriptionKey) {
            return this._transloco.translate(template.descriptionKey);
        }
        return template.description ?? '';
    }

    getStepCount(template: SmartReportTemplate): number {
        return getPresetStepCount(template);
    }

    getCategoryIcon(category?: string): string {
        const map: Record<string, string> = {
            citizen: 'person',
            company: 'business',
            vehicle: 'directions_car',
        };
        return map[category ?? ''] ?? 'description';
    }

    getTierLabel(tier?: string): string {
        if (tier === 'comprehensive') {
            return this._transloco.translate('smartBatchSystemPresets.comprehensive');
        }
        return this._transloco.translate('smartBatchSystemPresets.essential');
    }

    editConfiguration(id: string, event: Event) {
        event.stopPropagation();
        this._router.navigate(['smart-batch/edit', id]);
    }

    openDashboard(id: string) {
        if (!id) return;
        this._router.navigateByUrl(`/smart-batch/${id}`);
    }

    getCategoryLabel(category?: string): string {
        const map: Record<string, string> = {
            citizen: this._transloco.translate('smartBatchSystemPresets.citizen'),
            company: this._transloco.translate('smartBatchSystemPresets.company'),
            vehicle: this._transloco.translate('smartBatchSystemPresets.vehicle'),
        };
        return map[category ?? ''] ?? category ?? '';
    }

    getCountryFlag(country: string): string {
        const map: Record<string, string> = {
            colombia: '🇨🇴',
            col: '🇨🇴',
            co: '🇨🇴',
        };
        const key = (country || '').trim().toLowerCase();
        return map[key] ?? '🏳️';
    }
}
