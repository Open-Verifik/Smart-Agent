import { Injectable, signal } from '@angular/core';
import { SampleReportData } from './smart-report.service';

/**
 * Passes preview data from report viewer to report builder when navigating.
 * Router state can be unreliable (getCurrentNavigation() may be null), so this
 * service provides a reliable bridge.
 */
@Injectable({
    providedIn: 'root',
})
export class ReportBuilderPreviewDataService {
    /** Data to use when opening report builder from report viewer */
    private _pendingPreviewData = signal<SampleReportData | null>(null);

    /** Set preview data before navigating to report builder */
    setPendingPreviewData(data: SampleReportData): void {
        this._pendingPreviewData.set(data);
    }

    /** Consume and return pending preview data (clears after read) */
    consumePendingPreviewData(): SampleReportData | null {
        const data = this._pendingPreviewData();
        this._pendingPreviewData.set(null);
        return data;
    }
}
