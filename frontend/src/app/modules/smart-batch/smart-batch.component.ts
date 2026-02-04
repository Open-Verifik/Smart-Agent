import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { SmartBatchService } from './smart-batch.service';

@Component({
    selector: 'smart-batch',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
    ],
    templateUrl: './smart-batch.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class SmartBatchComponent implements OnInit {
    private _smartBatchService = inject(SmartBatchService);
    private _router = inject(Router);

    configurations = this._smartBatchService.configurations;
    isLoading = this._smartBatchService.isLoading;

    ngOnInit() {
        this._smartBatchService.getConfigurations().subscribe({
            next: () => {
                const configs = this.configurations();
                console.log('[SmartBatch] configurations loaded', {
                    count: configs?.length,
                    configs: configs?.map((c) => ({
                        _id: c._id,
                        id: c.id,
                        name: c.name,
                        country: c.country,
                        countryType: typeof c.country,
                        countryJson: JSON.stringify(c.country),
                    })),
                });
            },
            error: (err) => console.error('[SmartBatch] getConfigurations error', err),
        });
    }

    createConfiguration() {
        this._router.navigate(['smart-batch/create']);
    }

    deleteConfiguration(id: string, event: Event) {
        event.stopPropagation();
        if (confirm('Are you sure you want to delete this configuration?')) {
            this._smartBatchService.deleteConfiguration(id).subscribe();
        }
    }

    editConfiguration(id: string, event: Event) {
        event.stopPropagation();
        this._router.navigate(['smart-batch/edit', id]);
    }

    openDashboard(id: string) {
        const targetUrl = `/smart-batch/${id}`;
        console.log('[SmartBatch] openDashboard called', {
            id,
            idType: typeof id,
            idLength: id?.length,
            targetUrl,
            currentUrl: this._router.url,
        });
        if (!id) {
            console.warn('[SmartBatch] openDashboard: id is falsy, skipping navigation');
            return;
        }
        this._router.navigateByUrl(targetUrl).then(
            (success) => {
                console.log('[SmartBatch] navigateByUrl result', { success, targetUrl });
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
        if (!country || flag === '🏳️') {
            console.log('[SmartBatch] getCountryFlag', {
                raw: country,
                key,
                resolved: flag,
                hasMatch: key in map,
            });
        }
        return flag;
    }
}
