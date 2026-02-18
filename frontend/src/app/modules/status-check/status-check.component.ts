import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    inject,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import ApexCharts from 'apexcharts';
import { DateTime } from 'luxon';
import { catchError, forkJoin, Observable, of, Subject, takeUntil } from 'rxjs';
import { StatusCheckService } from './status-check.service';

@Component({
    selector: 'status-check',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatSelectModule,
        MatOptionModule,
        MatDialogModule,
    ],
    templateUrl: './status-check.component.html',
    styleUrls: ['./status-check.component.scss'],
})
export class StatusCheckComponent implements OnInit, OnDestroy, AfterViewInit {
    private _statusCheckService = inject(StatusCheckService);
    private _cdr = inject(ChangeDetectorRef);
    private _translocoService = inject(TranslocoService);
    private _dialog = inject(MatDialog);

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    public dataSource: any[] = [];
    public filteredData: any[] = [];
    public loading: boolean = false;

    // Search & Filters
    public searchInput: string = '';
    public selectedCountry: string | null = null;
    public selectedCategory: string | null = null;

    // Filter Options
    public countries: any[] = [];
    public categories: string[] = [];

    // Data holders
    public featureCodes: any[] = [];

    // Helper for same-code optimization
    private sameCodeData = [
        'colombia_api_vehicle_complete_by_vin',
        'colombia_api_vehicle_complete_by_plate',
    ];
    private sameData: any[] = [];

    // Track active charts to destroy them
    private activeCharts: Map<string, ApexCharts> = new Map();

    private _subscriptions: any[] = [];

    constructor() {}

    ngOnInit(): void {
        this.loading = true;
        this.getFeatures();
        this.getSubscriptions();

        // Subscribe to language changes to update feature names
        this._translocoService.langChanges$.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
            this.updateTranslations();
        });
    }

    ngAfterViewInit(): void {
        // Logic for charts usually handled on demand when toggling view
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();

        // Destroy all charts
        this.activeCharts.forEach((chart) => chart.destroy());
        this.activeCharts.clear();
    }

    getFeatures(): void {
        this._statusCheckService
            .getAppFeatures({
                where_group: 'apiRequest',
                where_isAvailable: true,
                wherenot_legacy: true,
                sort: 'code',
            })
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (result: any) => {
                    const listUserFeatures = [];

                    const data = result.data || result;

                    if (Array.isArray(data)) {
                        data.forEach((e) => {
                            if (e.code !== 'pdf_generator' && e.code !== 'online_postman') {
                                listUserFeatures.push({
                                    code: e.code,
                                    name: e.name,
                                    url: e.url,
                                    country: e.country,
                                    currentTranslation: '', // Will be set by updateTranslations
                                    baseCategory: e.baseCategory,
                                    group: e.group,
                                    price: e.price,
                                });
                            }
                        });
                    }

                    this.featureCodes = listUserFeatures;
                    this.updateTranslations();
                    this.calculateFilters();
                    this.getUptimes();
                },
                error: (err) => {
                    console.error(err);
                    this.loading = false;
                    this._cdr.markForCheck();
                },
            });
    }

    getSubscriptions(): void {
        this._statusCheckService
            .getIncidentsSubscriptions({ populates: ['appFeature'] })
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (result: any) => {
                    this._subscriptions = result.data || result;
                    this.updateSubscriptionInfo();
                },
            });
    }

    private updateSubscriptionInfo(): void {
        if (!this.dataSource.length || !this._subscriptions.length) return;

        this.dataSource.forEach((item) => {
            const found = this._subscriptions.find(
                (sub) => sub.appFeature?.code === item.subject.method.code
            );
            item.subject.isSubscribed = !!found;
            item.subject.subscription = found || null;
        });

        this._cdr.markForCheck();
    }

    private updateTranslations(): void {
        if (!this.featureCodes.length) return;

        this.featureCodes.forEach((f) => {
            const key = `appFeatures.${f.code}.title`;
            const translated = this._translocoService.translate(key);
            f.currentTranslation = translated !== key ? translated : f.name;
        });

        // Also update dataSource if it exists
        if (this.dataSource.length) {
            this.dataSource.forEach((item) => {
                const f = item.subject.method;
                const key = `appFeatures.${f.code}.title`;
                const translated = this._translocoService.translate(key);
                f.currentTranslation = translated !== key ? translated : f.name;
            });
        }

        this._cdr.markForCheck();
    }

    calculateFilters(): void {
        // Calculate Countries
        const countryCounts: Record<string, number> = {};
        this.featureCodes.forEach((f) => {
            if (f.country) {
                countryCounts[f.country] = (countryCounts[f.country] || 0) + 1;
            }
        });
        this.countries = Object.entries(countryCounts)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);

        // Calculate Categories
        const cats = new Set<string>();
        this.featureCodes.forEach((f) => {
            if (f.baseCategory) {
                cats.add(f.baseCategory);
            }
            // Add Biometrics category if it matches
            if (['biometrics', 'faceRecognition', 'faceVerification'].includes(f.group)) {
                cats.add('Biometrics');
            }
        });
        this.categories = Array.from(cats).sort();
    }

    getUptimes(): void {
        const promises = this.generatePromises(this.featureCodes);

        const methodMap = promises.map((p) => p.method);
        const obsList = promises.map((p) => p.promise);

        if (obsList.length === 0) {
            this.loading = false;
            return;
        }

        this.dataSource = [];

        forkJoin(obsList)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (results) => {
                    for (let index = 0; index < results.length; index++) {
                        const resultData = results[index]?.data || [];
                        const method = methodMap[index];

                        if (this.sameCodeData.includes(method.code)) {
                            if (!this.sameData.length) {
                                this.sameData = resultData;
                            }
                            this.processStatusRecord([...this.sameData], method);
                            continue;
                        }

                        this.processStatusRecord(resultData, method);
                    }

                    this.dataSource.sort((a, b) => {
                        return a.subject.percentage < b.subject.percentage ? 1 : -1;
                    });

                    this.applyFilters();
                    this.loading = false;
                    this._cdr.markForCheck();
                },
                error: (err) => {
                    this.loading = false;
                    this._cdr.markForCheck();
                },
                complete: () => {
                    this.updateSubscriptionInfo();
                },
            });
    }

    generatePromises(features: any[]): Array<{ method: any; promise: Observable<any> }> {
        const promises = [];
        for (const method of features) {
            const payload = {
                where_code: method.code,
                page: 1,
                perPage: 50,
                sort: '-createdAt',
            };

            promises.push({
                method: method,
                promise: this._statusCheckService
                    .getStatusRecord(payload)
                    .pipe(catchError(() => of({ data: [] }))),
            });
        }
        return promises;
    }

    processStatusRecord(listStatusRecord: any[], method: any): void {
        if (listStatusRecord && listStatusRecord.length < 50) {
            const filler = {
                group: 'apiRequest',
                status: 'awaiting',
                responseTime: 0,
                createdAt: null,
            };
            const copyList = [...listStatusRecord];
            const needed = 50 - listStatusRecord.length;
            for (let i = 0; i < needed; i++) {
                copyList.push(filler);
            }
            listStatusRecord = copyList.reverse();
        } else if (listStatusRecord) {
            listStatusRecord = [...listStatusRecord].reverse();
        }

        let errorCount = 0;
        const validPoints = listStatusRecord.filter((x) => x.status && x.status !== 'awaiting');

        validPoints.forEach((singleData) => {
            if (singleData.status !== 'ok') {
                errorCount += 1;
            }
        });

        const percentage =
            validPoints.length > 0
                ? ((validPoints.length - errorCount) * 100) / validPoints.length
                : 100;

        const firstDate = listStatusRecord.find((x) => x.createdAt)?.createdAt;
        const lastDate = listStatusRecord[listStatusRecord.length - 1]?.createdAt;

        const record = {
            data: listStatusRecord,
            subject: {
                method: method,
                showGraph: false,
                percentage: percentage,
                firstDate: firstDate,
                lastDate: lastDate,
                isSubscribed: false,
                subscription: null,
            },
        };

        this.dataSource.push(record);
    }

    async toggleView(item: any, mode: 'uptime' | 'graph'): Promise<void> {
        const id = item.subject.method.code;

        // Cleanup existing chart if any
        if (this.activeCharts.has(id)) {
            this.activeCharts.get(id).destroy();
            this.activeCharts.delete(id);
        }

        if (mode === 'uptime') {
            item.subject.showGraph = false;
        } else {
            item.subject.showGraph = true;
            this._cdr.detectChanges(); // Update view to create the container for chart

            // Wait a tick for DOM to update
            setTimeout(() => {
                const chartDiv = document.getElementById(`chart-${id}`);
                if (chartDiv) {
                    const options = this.getGraphOptions(item.data);
                    const chart = new ApexCharts(chartDiv, options);
                    chart.render();
                    this.activeCharts.set(id, chart);
                }
            }, 0);
        }
    }

    getGraphOptions(data: any[]): any {
        const responseTimes = data.map((d) => d.responseTime || 0);
        return {
            series: [
                {
                    name: this._translocoService.translate('network.latency_unit'),
                    data: responseTimes,
                },
            ],
            chart: {
                type: 'line',
                height: 80,
                sparkline: {
                    enabled: true,
                },
                animations: {
                    enabled: false,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#4f46e5'],
            tooltip: {
                fixed: {
                    enabled: false,
                },
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return '';
                        },
                    },
                },
                marker: {
                    show: false,
                },
            },
        };
    }

    // Unified Filter
    applyFilters(): void {
        let data = [...this.dataSource];

        // Search
        if (this.searchInput) {
            const lowerQuery = this.searchInput.toLowerCase();
            data = data.filter((item) => {
                const m = item.subject.method;
                return (
                    (m.name && m.name.toLowerCase().includes(lowerQuery)) ||
                    (m.url && m.url.toLowerCase().includes(lowerQuery)) ||
                    (m.currentTranslation &&
                        m.currentTranslation.toLowerCase().includes(lowerQuery))
                );
            });
        }

        // Country
        if (this.selectedCountry) {
            data = data.filter((item) => item.subject.method.country === this.selectedCountry);
        }

        // Category
        if (this.selectedCategory) {
            if (this.selectedCategory === 'Biometrics') {
                data = data.filter((item) =>
                    ['biometrics', 'faceRecognition', 'faceVerification'].includes(
                        item.subject.method.group
                    )
                );
            } else {
                data = data.filter(
                    (item) => item.subject.method.baseCategory === this.selectedCategory
                );
            }
        }

        this.filteredData = data;
    }

    openDialog(item: any): void {
        // Dynamic import to avoid circular dependencies or heavy entry loads
        import('./subscribe/subscribe.component').then(({ SubscribeComponent }) => {
            const dialogRef = this._dialog.open(SubscribeComponent, {
                data: item,
                width: '100%',
                maxWidth: '480px',
                panelClass: 'subscribe-dialog-panel',
            });

            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    if (result.create || result.update) {
                        item.subject.isSubscribed = true;
                        item.subject.subscription = result.subscription;
                    } else if (result.delete) {
                        item.subject.isSubscribed = false;
                        item.subject.subscription = null;
                    }
                    this._cdr.markForCheck();
                }
            });
        });
    }

    filterData(query: string): void {
        this.searchInput = query;
        this.applyFilters();
    }

    toggleCountry(country: string): void {
        if (this.selectedCountry === country) {
            this.selectedCountry = null;
        } else {
            this.selectedCountry = country;
        }
        this.applyFilters();
    }

    setCategory(category: string): void {
        this.selectedCategory = category;
        this.applyFilters();
    }

    formatDate(dateStr: string): string {
        if (!dateStr) return '';
        return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATETIME_MED);
    }

    // Copied from PostmanComponent
    getCountryFlag(country: string): string {
        const map: Record<string, string> = {
            Colombia: '🇨🇴',
            'United States': '🇺🇸',
            Peru: '🇵🇪',
            world: '🌐',
            Mexico: '🇲🇽',
            Brazil: '🇧🇷',
            Chile: '🇨🇱',
            Argentina: '🇦🇷',
            Ecuador: '🇪🇨',
            Venezuela: '🇻🇪',
            Bolivia: '🇧🇴',
            Uruguay: '🇺🇾',
            Paraguay: '🇵🇾',
            Panama: '🇵🇦',
            'Costa Rica': '🇨🇷',
            Guatemala: '🇬🇹',
            Honduras: '🇭🇳',
            'El Salvador': '🇸🇻',
            'Dominican Republic': '🇩🇴',
            'República Dominicana': '🇩🇴',
            Canada: '🇨🇦',
            Spain: '🇪🇸',
        };
        return map[country] || '🏳️';
    }

    // Keep strict flag url for image if needed, but we are using emojis for filter
    getFlagUrl(countryCode: string): string {
        if (!countryCode || countryCode === 'All') return '';
        return `https://cdn.verifik.co/assets/flags/${countryCode}.svg`;
    }
}
