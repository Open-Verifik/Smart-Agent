import { CommonModule } from '@angular/common';
import { Component, computed, effect, ElementRef, input, signal, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReportPreviewComponent } from './report-preview/report-preview.component';
import { SampleReportData, SmartReportTemplate } from './smart-report.service';

const MM_TO_PX = 3.7795275591;

@Component({
    selector: 'report-template-thumb',
    standalone: true,
    imports: [CommonModule, MatIconModule, ReportPreviewComponent],
    template: `
        <div
            class="report-template-thumb relative flex h-36 items-center justify-center overflow-hidden rounded-xl border border-stone-200 bg-stone-100 dark:border-gray-800 dark:bg-gray-950"
            [class.report-template-thumb--landscape]="isLandscape()"
        >
            @if (template().sections?.length) {
                <div #frame class="report-template-thumb__frame">
                    <div class="report-template-thumb__sheet" [style.width.mm]="pageWidthMm()" [style.transform]="sheetScale()">
                        <report-preview
                            [template]="template()"
                            [previewData]="previewData()"
                            [thumbnailMode]="true"
                            [primaryColor]="template().primaryColor || '#4F46E5'"
                            [pageBackgroundColor]="template().pageBackgroundColor || '#ffffff'"
                            [orientation]="template().orientation || 'portrait'"
                            [clickable]="false"
                            [logoUrl]="template().logo || null"
                            [logoEnabled]="!!template().logo"
                            [logoX]="template().logoSettings?.x ?? 32"
                            [logoY]="template().logoSettings?.y ?? 32"
                            [logoWidth]="template().logoSettings?.width ?? 160"
                            [logoHeight]="template().logoSettings?.height ?? 60"
                            [logoRotation]="template().logoSettings?.rotation ?? 0"
                            [logoAutoFitContent]="template().logoSettings?.autoFitContent ?? false"
                            [sheetImages]="template().sheetImages ?? []"
                            [bodyTopPadding]="template().bodyTopPadding ?? 0"
                            [legend]="template().legend || ''"
                            [showPageNumbers]="template().showPageNumbers || false"
                            [pageNumberPosition]="template().pageNumberPosition || 'bottom-center'"
                            [watermarkEnabled]="template().watermark?.enabled || false"
                            [watermarkType]="template().watermark?.type || 'text'"
                            [watermarkText]="template().watermark?.text || template().name || 'CONFIDENTIAL'"
                            [watermarkOpacity]="template().watermark?.opacity ?? 0.08"
                            [watermarkPattern]="template().watermark?.pattern || 'single'"
                            [watermarkX]="template().watermark?.x ?? 250"
                            [watermarkY]="template().watermark?.y ?? 420"
                            [watermarkWidth]="template().watermark?.width ?? 280"
                            [watermarkHeight]="template().watermark?.height ?? 160"
                            [watermarkRotation]="template().watermark?.rotation ?? -15"
                        ></report-preview>
                    </div>
                </div>
            } @else if (template().thumbnail?.image) {
                <img
                    [src]="template().thumbnail.image"
                    [alt]="template().name"
                    class="h-full w-full object-contain object-top"
                />
            } @else {
                <div class="flex h-full items-center justify-center">
                    <mat-icon class="!h-8 !w-8 !text-3xl text-stone-300 dark:text-gray-700">{{
                        icon()
                    }}</mat-icon>
                </div>
            }
            <ng-content></ng-content>
        </div>
    `,
    styles: `
        :host {
            display: block;
        }
        .report-template-thumb__frame {
            height: 100%;
            aspect-ratio: 210 / 297;
            container-type: size;
            overflow: hidden;
            pointer-events: none;
        }
        .report-template-thumb--landscape .report-template-thumb__frame {
            aspect-ratio: 297 / 210;
        }
        .report-template-thumb__sheet {
            transform-origin: top left;
        }
    `,
})
export class ReportTemplateThumbComponent {
    template = input.required<SmartReportTemplate>();
    icon = input('description');

    private _frame = viewChild<ElementRef<HTMLElement>>('frame');
    private _scale = signal(0.128);

    isLandscape = computed(() => this.template().orientation === 'landscape');
    pageWidthMm = computed(() => (this.isLandscape() ? 297 : 210));
    pageHeightMm = computed(() => (this.isLandscape() ? 210 : 297));
    sheetScale = computed(() => `scale(${this._scale()})`);

    constructor() {
        effect((onCleanup) => {
            const el = this._frame()?.nativeElement;
            if (!el) return;
            const update = () => {
                const height = el.clientHeight;
                if (!height) return;
                this._scale.set(height / (this.pageHeightMm() * MM_TO_PX));
            };
            const observer = new ResizeObserver(update);
            observer.observe(el);
            update();
            onCleanup(() => observer.disconnect());
        });
    }

    previewData = computed<Record<string, any>>(() => {
        const template = this.template();
        const sample: SampleReportData = template.sampleData ?? {};
        return {
            batchName: sample.batchName || template.name || '',
            rowIndex: sample.rowIndex ?? 0,
            inputData: sample.inputData ?? {},
            results: sample.results ?? {},
            errors: sample.errors,
            report: sample.report,
        };
    });
}
