import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, computed, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { firstValueFrom, interval, Subscription } from 'rxjs';
import { BatchBrowserRunnerService } from '../batch-browser-runner.service';
import { ReportBuilderPreviewDataService } from '../report-builder-preview-data.service';
import { ReportPreviewComponent } from '../report-preview/report-preview.component';
import { getCountryFlag } from '../smart-batch-country.util';
import { AppFeature, BatchConfiguration, SmartBatch, SmartBatchService } from '../smart-batch.service';
import { ReportSection, SmartReportService, SmartReportTemplate } from '../smart-report.service';
import { getStepDisplayFields } from '../step-result-presenters/registry';
import { buildRowDataForResolution } from '../template-match.util';
import { VisitaGuidePipelineService } from './visita-guide-pipeline.service';
import { VisitaGuideStateService } from './visita-guide-state.service';
import {
    availableCountries,
    GUIDE_ENTITIES,
    GUIDE_INTENTS,
    GuideEntity,
    GuideIntent,
    GuideMode,
    GuideStepId,
    pipelineName,
    STEP_TITLE_KEYS,
} from './visita-guide.catalog';

const POLL_MS = 2500;

@Component({
    selector: 'visita-guide',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        DragDropModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        TranslocoModule,
        ReportPreviewComponent,
    ],
    templateUrl: './visita-guide.component.html',
})
export class VisitaGuideComponent implements OnInit, OnDestroy {
    private _state = inject(VisitaGuideStateService);
    private _batch = inject(SmartBatchService);
    private _reports = inject(SmartReportService);
    private _pipeline = inject(VisitaGuidePipelineService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _authGate = inject(AuthRequiredGateService);
    private _transloco = inject(TranslocoService);
    private _snack = inject(MatSnackBar);
    private _browserRunner = inject(BatchBrowserRunnerService);
    private _previewBridge = inject(ReportBuilderPreviewDataService);
    private _destroyRef = inject(DestroyRef);

    readonly intents = GUIDE_INTENTS;
    readonly entityOptions = GUIDE_ENTITIES;
    readonly countries = availableCountries();

    step = this._state.step;
    isWorking = signal(false);
    isGenerating = signal(false);
    templates = this._reports.templates;

    private _pollSub: Subscription | null = null;
    private _alive = true;

    intent = this._state.intent;
    entities = this._state.entities;
    countryIso = this._state.countryIso;
    mode = this._state.mode;
    inputValues = this._state.inputValues;
    inputFields = this._state.inputFields;
    wantsReport = this._state.wantsReport;
    batch = this._state.batch;
    configuration = this._state.configuration;
    includeItems = this._state.includeItems;
    templateChoice = this._state.templateChoice;
    selectedTemplate = this._state.selectedTemplate;
    clonedTemplate = this._state.clonedTemplate;
    reportTitle = this._state.reportTitle;
    primaryColor = this._state.primaryColor;
    logoDataUrl = this._state.logoDataUrl;
    consultError = this._state.consultError;
    visibleSteps = this._state.visibleSteps;
    isMixed = this._state.isMixed;

    allowsMultiEntity = computed(() => this.intent() === 'report');

    stepIndex = computed(() => Math.max(0, this.visibleSteps().indexOf(this.step())));
    stepCount = computed(() => Math.max(this.visibleSteps().length, 1));
    currentTitleKey = computed(() => STEP_TITLE_KEYS[this.step()]);
    canGoBack = computed(() => this.step() !== 'intent' && this.step() !== 'consult');
    countryFlag = computed(() => getCountryFlag(this.countryIso() ?? 'Colombia'));

    visitaTemplates = computed(() => {
        const selected = this.entities();
        return this.templates().filter((template) => {
            if (template.type !== 'System') return false;
            if (selected.length !== 1) return false;
            return !template.category || template.category === selected[0];
        });
    });

    myTemplates = computed(() => this.templates().filter((template) => template.type !== 'System'));

    previewTemplate = computed((): SmartReportTemplate | null => {
        const template = this.selectedTemplate() ?? this.clonedTemplate();
        if (!template) return null;
        return {
            ...template,
            name: this.reportTitle() || template.name,
            primaryColor: this.primaryColor() || template.primaryColor,
            logo: this.logoDataUrl() || template.logo,
            sections: this._sectionsForPreview(template),
        };
    });

    previewData = computed(() => {
        const row = this.batch()?.rows?.[0];
        if (!row) return { inputData: {}, results: {} };
        return buildRowDataForResolution(row, {
            steps: this.configuration()?.steps,
            errors: row.errors,
        });
    });

    resultCards = computed(() => {
        const config = this.configuration();
        const row = this.batch()?.rows?.[0];
        if (!config || !row) return [];
        return [...(config.steps ?? [])]
            .filter((step) => step.enabled !== false)
            .sort((a, b) => a.sequence - b.sequence)
            .map((step) => {
                const feature = step.appFeature as AppFeature | string;
                const code = typeof feature === 'object' ? feature.code : undefined;
                const name = typeof feature === 'object' ? feature.name : `Paso ${step.sequence}`;
                const payload = row.results?.[step.sequence];
                const error = row.errors?.find((item) => item.step === step.sequence);
                const fields = payload
                    ? getStepDisplayFields({ featureCode: code }, payload).slice(0, 8)
                    : [];
                return {
                    sequence: step.sequence,
                    label: name,
                    code,
                    hasData: payload != null,
                    error: error?.message ?? null,
                    fields,
                };
            })
            .filter((card) => card.hasData || card.error);
    });

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => {
                this._alive = true;
                this._state.applyDeductions();
                this._reports.getTemplates().subscribe();
                this._resumeFromDesigner();
            },
            panelClass: 'auth-required-dialog',
        });
    }

    ngOnDestroy(): void {
        this._alive = false;
        this._stopPoll();
        this._browserRunner.stop();
    }

    selectIntent(intent: GuideIntent): void {
        if (intent === 'template') {
            this._state.resetAll();
            void this._router.navigate(['/smart-batch', 'report-builder'], {
                queryParams: { from: 'guide' },
            });
            return;
        }
        if (intent === 'other') {
            this._state.resetAll();
            void this._router.navigate(['/smart-batch', 'workspace']);
            return;
        }
        this._state.intent.set(intent);
        this._state.wantsReport.set(intent === 'report');
        this._state.applyDeductions();
        this.goNext();
    }

    toggleEntity(entity: GuideEntity): void {
        if (!this.allowsMultiEntity()) {
            this._state.entities.set([entity]);
            this._state.applyDeductions();
            this.goNext();
            return;
        }
        this._state.toggleEntity(entity);
    }

    isEntitySelected(entity: GuideEntity): boolean {
        return this.entities().includes(entity);
    }

    confirmEntities(): void {
        if (!this.entities().length) {
            this._snack.open(this._transloco.translate('visitaGuide.pickEntity'), undefined, {
                duration: 2500,
            });
            return;
        }
        this._state.applyDeductions();
        this.goNext();
    }

    selectCountry(iso: string): void {
        this._state.countryIso.set(iso);
        this.goNext();
    }

    selectMode(mode: GuideMode): void {
        this._state.mode.set(mode);
        this.goNext();
    }

    goNext(): void {
        this._state.applyDeductions();
        const steps = this.visibleSteps();
        const current = steps.indexOf(this.step());
        const next = steps[current + 1];
        if (!next) return;

        if (this.step() === 'input' && !this._hasRequiredInputs()) {
            this._snack.open(this._transloco.translate('visitaGuide.inputRequired'), undefined, {
                duration: 2500,
            });
            return;
        }

        if (next === 'consult') {
            this.step.set('consult');
            void this.runConsult();
            return;
        }

        if (this.step() === 'results' && !this.wantsReport()) {
            this._state.wantsReport.set(true);
            this._state.applyDeductions();
            this.ensureIncludeItems();
            this.step.set('include');
            return;
        }

        if (next === 'include') this.ensureIncludeItems();
        if (next === 'template' && !this.selectedTemplate()) this.pickVisitaTemplate();
        this.step.set(next);
    }

    goBack(): void {
        if (!this.canGoBack()) return;
        const steps = this.visibleSteps();
        const current = steps.indexOf(this.step());
        const previous = steps[Math.max(0, current - 1)];
        this.step.set(previous === 'consult' ? 'input' : previous);
    }

    startOver(): void {
        this._stopPoll();
        this._browserRunner.stop();
        this._state.resetAll();
    }

    continueToReport(): void {
        this._state.wantsReport.set(true);
        this._state.applyDeductions();
        this.ensureIncludeItems();
        this.step.set('include');
    }

    toggleInclude(sequence: number): void {
        this._state.includeItems.update((items) =>
            items.map((item) =>
                item.sequence === sequence ? { ...item, included: !item.included } : item
            )
        );
    }

    dropInclude(event: CdkDragDrop<unknown>): void {
        const items = [...this.includeItems()];
        moveItemInArray(items, event.previousIndex, event.currentIndex);
        this._state.includeItems.set(items);
    }

    pickVisitaTemplate(): void {
        const cloned = this.clonedTemplate();
        this._state.templateChoice.set('visita');
        this._state.selectedTemplate.set(cloned ?? this.visitaTemplates()[0] ?? null);
        if (cloned) this.hydrateCustomize(cloned);
    }

    pickMyTemplate(template: SmartReportTemplate): void {
        this._state.templateChoice.set('mine');
        this._state.selectedTemplate.set(template);
        this.hydrateCustomize(template);
    }

    pickScratch(): void {
        this._state.templateChoice.set('scratch');
        void this.openDesigner(true);
    }

    async openDesigner(blank: boolean): Promise<void> {
        this._bridgePreviewData();
        const configId = this._state.configId();
        const queryParams = { from: 'guide' };

        if (!blank) {
            let template = this.selectedTemplate() ?? this.clonedTemplate();
            if (template?.type === 'System' && template.sections?.length) {
                template = await firstValueFrom(
                    this._reports.createTemplate({
                        name: this.reportTitle() || template.name,
                        description: template.description,
                        type: 'client',
                        country: template.country,
                        batchConfiguration: configId ?? undefined,
                        sections: template.sections,
                        logo: template.logo,
                        primaryColor: template.primaryColor,
                        header: template.header,
                        footer: template.footer,
                        pageSize: template.pageSize ?? 'A4',
                        orientation: template.orientation ?? 'portrait',
                        pdfEngine: template.pdfEngine ?? 'puppeteer',
                    })
                );
                this._state.selectedTemplate.set(template);
                this._state.clonedTemplate.set(template);
            }
            const templateId = template?._id;
            if (configId && templateId && template?.type !== 'System') {
                void this._router.navigate(['/smart-batch', configId, 'report-builder', templateId], {
                    queryParams,
                });
                return;
            }
            if (templateId && template?.type !== 'System') {
                void this._router.navigate(['/smart-batch', 'report-builder', templateId], {
                    queryParams,
                });
                return;
            }
        }

        if (configId) {
            void this._router.navigate(['/smart-batch', configId, 'report-builder'], { queryParams });
            return;
        }
        void this._router.navigate(['/smart-batch', 'report-builder'], { queryParams });
    }

    openMoldEditor(): void {
        void this.openDesigner(false);
    }

    openFullReport(): void {
        const configId = this._state.configId();
        const batchId = this._state.batchId();
        if (!configId || !batchId) return;
        void this._router.navigate(['/smart-batch', configId, 'batch', batchId, 'report'], {
            queryParams: { rowIndex: '0' },
        });
    }

    onLogoSelected(event: Event): void {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => this._state.logoDataUrl.set(String(reader.result ?? ''));
        reader.readAsDataURL(file);
    }

    setFieldValue(key: string, value: string): void {
        this._state.setInputValue(key, value);
    }

    fieldValue(key: string): string {
        return this.inputValues()[key] ?? '';
    }

    async generatePdf(): Promise<void> {
        const batchId = this._state.batchId();
        if (!batchId) {
            this._snack.open(this._transloco.translate('visitaGuide.needTemplate'), undefined, {
                duration: 3000,
            });
            return;
        }

        this.isGenerating.set(true);
        try {
            const template = await this._persistWorkingTemplate();
            if (!template?._id) throw new Error('template');
            const report = await firstValueFrom(
                this._reports.createReport({
                    template: template._id,
                    smartBatch: batchId,
                    name: this.reportTitle() || template.name,
                })
            );
            const result = await firstValueFrom(
                this._reports.generateReport(report._id!, { rowIndex: 0 })
            );
            if (result.pdf?.buffer) {
                const dataUrl = `data:application/pdf;base64,${result.pdf.buffer}`;
                this._state.pdfDataUrl.set(dataUrl);
                this.downloadDataUrl(dataUrl, `${this.fileBaseName()}.pdf`);
            }
            this._snack.open(this._transloco.translate('visitaGuide.pdfReady'), undefined, {
                duration: 3000,
            });
        } catch {
            this._snack.open(this._transloco.translate('visitaGuide.pdfFailed'), undefined, {
                duration: 4000,
            });
        } finally {
            this.isGenerating.set(false);
        }
    }

    downloadJson(): void {
        const payload = {
            input: this._state.buildRow(),
            rows: this.batch()?.rows ?? [],
            included: this.includeItems().filter((item) => item.included),
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        this.downloadDataUrl(url, `${this.fileBaseName()}.json`);
        URL.revokeObjectURL(url);
    }

    entityTitleKeys(): string[] {
        return this.entities()
            .map((entity) => this.entityOptions.find((item) => item.id === entity)?.titleKey)
            .filter((key): key is string => Boolean(key));
    }

    flagFor(iso: string): string {
        return getCountryFlag(iso);
    }

    private _sectionsForPreview(template: SmartReportTemplate): ReportSection[] {
        const included = this.includeItems()
            .filter((item) => item.included)
            .map((item) => item.sequence);
        const includedSet = new Set(included);
        const ordered = included.length
            ? [...this.includeItems()].filter((item) => item.included)
            : [];
        const sections = (template.sections ?? []).filter((section) => {
            const path = section.dataPath ?? '';
            const match = path.match(/results\.(\d+)/);
            if (!match) return true;
            return includedSet.size === 0 || includedSet.has(Number(match[1]));
        });
        if (!ordered.length) return sections;
        const bySeq = new Map<number, ReportSection[]>();
        const rest: ReportSection[] = [];
        for (const section of sections) {
            const match = section.dataPath?.match(/results\.(\d+)/);
            if (!match) {
                rest.push(section);
                continue;
            }
            const seq = Number(match[1]);
            bySeq.set(seq, [...(bySeq.get(seq) ?? []), section]);
        }
        return [...rest, ...ordered.flatMap((item) => bySeq.get(item.sequence) ?? [])];
    }

    private async _persistWorkingTemplate(): Promise<SmartReportTemplate | null> {
        const draft = this.previewTemplate();
        if (!draft) return null;
        const configId = this._state.configId();
        const payload: Partial<SmartReportTemplate> = {
            name: this.reportTitle() || draft.name,
            primaryColor: this.primaryColor() || draft.primaryColor,
            logo: this.logoDataUrl() || draft.logo,
            sections: draft.sections,
            batchConfiguration: configId ?? draft.batchConfiguration,
        };

        if (draft._id && draft.type !== 'System') {
            const updated = await firstValueFrom(this._reports.updateTemplate(draft._id, payload));
            this._state.selectedTemplate.set(updated);
            if (configId && updated._id) {
                await firstValueFrom(
                    this._batch.updateConfiguration(configId, { preferredReportTemplate: updated._id })
                );
            }
            return updated;
        }

        const created = await firstValueFrom(
            this._reports.createTemplate({
                ...payload,
                type: 'client',
                country: this.countryIso() === 'co' ? 'Colombia' : draft.country,
                pageSize: draft.pageSize ?? 'A4',
                orientation: draft.orientation ?? 'portrait',
                pdfEngine: draft.pdfEngine ?? 'puppeteer',
            })
        );
        this._state.selectedTemplate.set(created);
        this._state.clonedTemplate.set(created);
        if (configId && created._id) {
            await firstValueFrom(
                this._batch.updateConfiguration(configId, { preferredReportTemplate: created._id })
            );
        }
        return created;
    }

    private hydrateCustomize(template: SmartReportTemplate): void {
        if (!this.reportTitle()) this._state.reportTitle.set(template.name);
        if (template.primaryColor) this._state.primaryColor.set(template.primaryColor);
        if (template.logo) this._state.logoDataUrl.set(template.logo);
    }

    private ensureIncludeItems(): void {
        if (this.includeItems().length) return;
        this._state.includeItems.set(
            this.resultCards()
                .filter((card) => card.hasData)
                .map((card) => ({
                    sequence: card.sequence,
                    label: card.label,
                    featureCode: card.code,
                    included: true,
                }))
        );
    }

    private _hasRequiredInputs(): boolean {
        return this.inputFields()
            .filter((field) => field.required)
            .every((field) => (this.inputValues()[field.key] ?? '').trim().length > 0);
    }

    private async runConsult(): Promise<void> {
        this.isWorking.set(true);
        this._state.consultError.set(null);

        try {
            const resolved = await this._pipeline.resolve(
                this.entities(),
                this.countryIso() ?? 'co',
                pipelineName(this.entities())
            );
            if (!this._alive) return;

            this._state.configId.set(resolved.configId);
            this._state.configuration.set(resolved.configuration);
            this._state.clonedTemplate.set(resolved.template);
            this._state.selectedTemplate.set(resolved.template);
            if (resolved.template) this.hydrateCustomize(resolved.template);

            if (this.mode() === 'batch') {
                this.isWorking.set(false);
                void this._router.navigate(['/smart-batch', resolved.configId, 'batch', 'new'], {
                    queryParams: { from: 'guide' },
                });
                return;
            }

            const row = this._state.buildRow();
            if (!Object.keys(row).length) throw new Error('empty row');

            const created = await firstValueFrom(
                this._batch.createSmartBatch({
                    batchConfiguration: resolved.configId,
                    name: `${pipelineName(this.entities())} — ${new Date().toISOString().slice(0, 16)}`,
                    rows: [row],
                })
            );
            const batchId = created.data._id;
            if (!batchId) throw new Error('missing batch');
            this._state.batchId.set(batchId);
            this._state.batch.set(created.data);

            const started = await firstValueFrom(this._batch.startSmartBatch(batchId));
            this._state.batch.set(started.data);
            if (!this._alive) return;
            this.maybeStartBrowserRunner(started.data, resolved.configuration);
            this._startPoll(batchId);
        } catch {
            this.isWorking.set(false);
            this._state.consultError.set(this._transloco.translate('visitaGuide.consultFailed'));
            this.step.set(this.mode() === 'batch' ? 'mode' : 'input');
        }
    }

    private maybeStartBrowserRunner(batch: SmartBatch, config: BatchConfiguration): void {
        const executor = batch.executor ?? config.executor;
        if (executor !== 'browser') return;
        void this._browserRunner.runBatch(
            batch,
            config.steps ?? [],
            (next) => this._state.batch.set(next),
            () => this._state.consultError.set(this._transloco.translate('visitaGuide.consultFailed'))
        );
    }

    private _startPoll(batchId: string): void {
        this._stopPoll();
        const tick = () => {
            this._batch.getSmartBatch(batchId).subscribe({
                next: (res) => {
                    this._state.batch.set(res.data);
                    const status = res.data.status;
                    if (status === 'completed' || status === 'failed' || status === 'cancelled') {
                        this._stopPoll();
                        this.isWorking.set(false);
                        this.ensureIncludeItems();
                        this.step.set('results');
                    }
                },
            });
        };
        tick();
        this._pollSub = interval(POLL_MS)
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => tick());
    }

    private _stopPoll(): void {
        this._pollSub?.unsubscribe();
        this._pollSub = null;
    }

    private _resumeFromDesigner(): void {
        const resume = this._route.snapshot.queryParamMap.get('resume') as GuideStepId | null;
        const templateId = this._route.snapshot.queryParamMap.get('templateId');
        if (resume && this.visibleSteps().includes(resume)) {
            this._state.step.set(resume);
        } else if (this._state.intent() && this._state.step() !== 'intent') {
            return;
        }

        if (!templateId) return;
        this._reports.getTemplate(templateId).subscribe({
            next: (template) => {
                this._state.selectedTemplate.set(template);
                this._state.clonedTemplate.set(template);
                this.hydrateCustomize(template);
                const configId = this._state.configId();
                if (configId && template._id) {
                    this._batch
                        .updateConfiguration(configId, { preferredReportTemplate: template._id })
                        .subscribe();
                }
            },
        });
    }

    private _bridgePreviewData(): void {
        const row = this.batch()?.rows?.[0];
        if (!row) return;
        const data = buildRowDataForResolution(row, {
            steps: this.configuration()?.steps,
            errors: row.errors,
        });
        this._previewBridge.setPendingPreviewData({
            inputData: data.inputData,
            results: data.results,
            errors: row.errors,
            report: data.report,
        });
    }

    private fileBaseName(): string {
        return (this.reportTitle() || pipelineName(this.entities()) || 'visita-report')
            .replace(/[^\w\-]+/g, '-')
            .slice(0, 60);
    }

    private downloadDataUrl(url: string, filename: string): void {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = filename;
        anchor.click();
    }
}
