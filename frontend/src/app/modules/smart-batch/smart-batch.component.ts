import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { SmartBatchService } from './smart-batch.service';
import { SmartReportService, SmartReportTemplate } from './smart-report.service';

@Component({
    selector: 'smart-batch',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        RouterModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatMenuModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
    ],
    templateUrl: './smart-batch.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class SmartBatchComponent implements OnInit {
    private _smartBatchService = inject(SmartBatchService);
    private _smartReportService = inject(SmartReportService);
    private _router = inject(Router);
    private _transloco = inject(TranslocoService);

    configurations = this._smartBatchService.configurations;
    isLoading = this._smartBatchService.isLoading;
    activeTab = signal<'configurations' | 'templates'>('configurations');
    templates = this._smartReportService.templates;
    isLoadingTemplates = this._smartReportService.isLoading;

    ngOnInit() {
        this._smartBatchService.getConfigurations().subscribe({
            next: () => {},
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

    createTemplate(configId: string) {
        if (!configId) return;
        this._router.navigate(['smart-batch', configId, 'report-builder']);
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
        const configId = template.batchConfiguration;
        if (!configId) {
            alert(
                "This template is not linked to a configuration. Open it from a configuration's report builder."
            );
            return;
        }
        const templateId = template._id ?? (template as { id?: string }).id ?? '';
        if (!templateId) return;
        this._router.navigate(['smart-batch', configId, 'report-builder', templateId]);
    }

    getConfigName(configId: string): string {
        const config = this.configurations().find((c) => (c._id ?? c.id) === configId);
        return config?.name ?? configId;
    }

    editConfiguration(id: string, event: Event) {
        event.stopPropagation();
        this._router.navigate(['smart-batch/edit', id]);
    }

    openDashboard(id: string) {
        const targetUrl = `/smart-batch/${id}`;

        if (!id) {
            console.warn('[SmartBatch] openDashboard: id is falsy, skipping navigation');
            return;
        }
        this._router.navigateByUrl(targetUrl).then(
            (success) => {
                if (!success) {
                    console.warn(
                        '[SmartBatch] navigateByUrl returned false - route may not have matched'
                    );
                }
            },
            (err) => {
                console.error('[SmartBatch] navigateByUrl failed', { targetUrl, err });
            }
        );
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
        const flag = map[key] ?? '🏳️';

        return flag;
    }
}
