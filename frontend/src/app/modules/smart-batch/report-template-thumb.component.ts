import { CommonModule } from '@angular/common';
import { Component, computed, effect, ElementRef, input, signal, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReportPreviewComponent } from './report-preview/report-preview.component';
import { extractReportThemeConfig, normalizeReportThemeId } from './report-theme/report-theme.model';
import { ensureVerificationSample } from './report-theme/report-theme.sample';
import { starterSections, withStarterFrames } from './report-theme/report-theme.starters';
import { SampleReportData, SmartReportTemplate, templateLayerZ } from './smart-report.service';

const MM_TO_PX = 3.7795275591;

@Component({
    selector: 'report-template-thumb',
    standalone: true,
    imports: [CommonModule, MatIconModule, ReportPreviewComponent],
    template: `
        <div
            class="report-template-thumb relative flex h-52 items-center justify-center overflow-hidden rounded-xl border border-stone-200 bg-stone-100/90 p-2.5 dark:border-gray-800 dark:bg-gray-900/70"
            [class.report-template-thumb--landscape]="isLandscape()"
            [style.box-shadow]="'inset 0 4px 0 0 ' + accentStripe()"
        >
            @if (template().thumbnail?.image) {
                <img
                    [src]="template().thumbnail.image"
                    [alt]="template().name"
                    class="h-full max-w-full rounded-md object-contain object-top shadow-md ring-1 ring-black/10"
                />
            } @else if (renderTemplate().sections?.length) {
                <div #frame class="report-template-thumb__frame rounded-md shadow-md ring-1 ring-black/10">
                    <div class="report-template-thumb__sheet" [style.width.mm]="pageWidthMm()" [style.transform]="sheetScale()">
                        <report-preview
                            [template]="renderTemplate()"
                            [previewData]="previewData()"
                            [thumbnailMode]="true"
                            [primaryColor]="renderTemplate().primaryColor || '#4F46E5'"
                            [pageBackgroundColor]="renderPageBg()"
                            [orientation]="renderTemplate().orientation || 'portrait'"
                            [pageSize]="renderTemplate().pageSize || 'A4'"
                            [layerZ]="layerZ()"
                            [clickable]="false"
                            [logoUrl]="renderTemplate().headerLogos?.length ? null : renderTemplate().logo || null"
                            [logoEnabled]="!renderTemplate().headerLogos?.length && !!renderTemplate().logo"
                            [logoX]="renderTemplate().logoSettings?.x ?? 32"
                            [logoY]="renderTemplate().logoSettings?.y ?? 32"
                            [logoWidth]="renderTemplate().logoSettings?.width ?? 160"
                            [logoHeight]="renderTemplate().logoSettings?.height ?? 60"
                            [logoRotation]="renderTemplate().logoSettings?.rotation ?? 0"
                            [logoAutoFitContent]="renderTemplate().logoSettings?.autoFitContent ?? false"
                            [sheetImages]="renderTemplate().sheetImages ?? []"
                            [bodyTopPadding]="renderTemplate().bodyTopPadding ?? 0"
                            [legend]="renderTemplate().legend || ''"
                            [legendPosition]="renderTemplate().legendPosition || 'left'"
                            [showPageNumbers]="renderTemplate().showPageNumbers || false"
                            [pageNumberPosition]="renderTemplate().pageNumberPosition || 'bottom-center'"
                            [pageNumberDivider]="renderTemplate().pageNumberDivider || false"
                            [watermarkEnabled]="renderTemplate().watermark?.enabled || false"
                            [watermarkType]="renderTemplate().watermark?.type || 'text'"
                            [watermarkLogoUrl]="renderTemplate().watermark?.logo || undefined"
                            [watermarkText]="renderTemplate().watermark?.text || renderTemplate().name || 'CONFIDENTIAL'"
                            [watermarkOpacity]="renderTemplate().watermark?.opacity ?? 0.08"
                            [watermarkPattern]="renderTemplate().watermark?.pattern || 'single'"
                            [watermarkX]="renderTemplate().watermark?.x ?? 250"
                            [watermarkY]="renderTemplate().watermark?.y ?? 420"
                            [watermarkWidth]="renderTemplate().watermark?.width ?? 280"
                            [watermarkHeight]="renderTemplate().watermark?.height ?? 160"
                            [watermarkRotation]="renderTemplate().watermark?.rotation ?? -15"
                            [signatureEnabled]="!!(renderTemplate().signature?.enabled && renderTemplate().signature?.image)"
                            [signatureImage]="renderTemplate().signature?.image || null"
                            [signatureX]="renderTemplate().signature?.x ?? 48"
                            [signatureY]="renderTemplate().signature?.y ?? 720"
                            [signatureWidth]="renderTemplate().signature?.width ?? 160"
                            [signatureHeight]="renderTemplate().signature?.height ?? 64"
                            [signaturePage]="renderTemplate().signature?.page ?? 0"
                        ></report-preview>
                    </div>
                </div>
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
    private _scale = signal(0.16);

    isLandscape = computed(() => this.template().orientation === 'landscape');
    layerZ = computed(() => templateLayerZ(this.template()));
    pageWidthMm = computed(() => (this.isLandscape() ? 297 : 210));
    pageHeightMm = computed(() => (this.isLandscape() ? 210 : 297));
    sheetScale = computed(() => `scale(${this._scale()})`);

    accentStripe = computed(() => {
        const tpl = this.template();
        const themeId = normalizeReportThemeId(tpl.reportTheme);
        if (themeId) {
            const parsed = extractReportThemeConfig(tpl.reportTheme, tpl.themeTokens, tpl.scoreSettings, tpl.scoreScale);
            return parsed.tokens.accent || '#7145d6';
        }
        return tpl.identityColor || tpl.primaryColor || '#1e293b';
    });

    renderTemplate = computed<SmartReportTemplate>(() => {
        const tpl = this.template();
        const themeId = normalizeReportThemeId(tpl.reportTheme);
        if (!themeId) return tpl;
        const sections = tpl.sections?.length
            ? withStarterFrames(
                  tpl.sections.filter((s) => (s.type as string) !== 'sourceCards'),
                  themeId
              )
            : starterSections(themeId);
        return { ...tpl, sections };
    });

    renderPageBg = computed(() => {
        const tpl = this.template();
        const themeId = normalizeReportThemeId(tpl.reportTheme);
        if (themeId) {
            const parsed = extractReportThemeConfig(tpl.reportTheme, tpl.themeTokens, tpl.scoreSettings, tpl.scoreScale);
            return parsed.tokens.cover || parsed.tokens.page;
        }
        return tpl.pageBackgroundColor || '#ffffff';
    });

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
        const base = {
            batchName: sample.batchName || template.name || '',
            rowIndex: sample.rowIndex ?? 0,
            inputData: sample.inputData ?? {},
            results: sample.results ?? {},
            steps: sample.steps ?? [],
            errors: sample.errors,
            report: sample.report,
        };
        if (normalizeReportThemeId(template.reportTheme)) {
            const parsed = extractReportThemeConfig(
                template.reportTheme,
                template.themeTokens,
                template.scoreSettings,
                template.scoreScale
            );
            return ensureVerificationSample(base, parsed.scoreSettings, parsed.tokens.locale);
        }
        return base;
    });
}
