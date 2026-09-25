import { computed, Injectable, signal } from '@angular/core';
import { AppFeature, BatchConfiguration, SmartBatch } from '../smart-batch.service';
import { ReportSection, ReportSheetImage, SmartReportTemplate } from '../smart-report.service';
import {
    buildInputRow,
    GuideBatchSettings,
    GuideConfigOrigin,
    GuideEntity,
    GuideFileFormat,
    GuideIntent,
    GuideMergeStrategy,
    GuideMode,
    GuideRunMode,
    GuideStepId,
    inputFieldsFor,
    intentEntity,
} from './visita-guide.catalog';

export interface GuideIncludeItem {
    sequence: number;
    label: string;
    featureCode?: string;
    included: boolean;
}

export type GuideTemplateChoice = 'visita' | 'mine' | 'scratch';

@Injectable({ providedIn: 'root' })
export class VisitaGuideStateService {
    intent = signal<GuideIntent | null>(null);
    entities = signal<GuideEntity[]>([]);
    countryIso = signal<string | null>(null);
    mode = signal<GuideMode | null>(null);
    inputValues = signal<Record<string, string>>({});
    selectedFeatures = signal<AppFeature[]>([]);
    endpointSearchQuery = signal('');
    requiredParamFilters = signal<string[]>([]);
    wantsReport = signal(false);

    libraryCreate = signal(false);
    reusingSaved = signal(false);
    configOrigin = signal<GuideConfigOrigin | null>(null);
    setupName = signal('');
    setupDescription = signal('');
    setupInputFormat = signal<GuideFileFormat>('csv');
    setupOutputFormat = signal<GuideFileFormat>('xlsx');
    setupMergeStrategy = signal<GuideMergeStrategy>('sequential');
    setupExecutor = signal<GuideRunMode>('queue');
    setupWebhookUrl = signal('');
    setupEmails = signal<string[]>([]);

    configId = signal<string | null>(null);
    batchId = signal<string | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    batch = signal<SmartBatch | null>(null);
    clonedTemplate = signal<SmartReportTemplate | null>(null);
    selectedTemplate = signal<SmartReportTemplate | null>(null);
    templateChoice = signal<GuideTemplateChoice | null>(null);
    includeItems = signal<GuideIncludeItem[]>([]);
    layoutSections = signal<ReportSection[]>([]);

    reportTitle = signal('');
    primaryColor = signal('#0f172a');
    pageBackgroundColor = signal('#ffffff');
    logoDataUrl = signal<string | null>(null);
    logoX = signal(32);
    logoY = signal(32);
    logoWidth = signal(160);
    logoHeight = signal(60);
    logoRotation = signal(0);
    sheetImages = signal<ReportSheetImage[]>([]);
    legend = signal('');
    watermarkEnabled = signal(false);
    watermarkType = signal<'text' | 'logo'>('text');
    watermarkText = signal('');
    watermarkOpacity = signal(0.08);
    watermarkPattern = signal<'single' | 'repeated'>('single');
    watermarkX = signal(250);
    watermarkY = signal(420);
    watermarkWidth = signal(280);
    watermarkHeight = signal(160);
    watermarkRotation = signal(-15);
    showPageNumbers = signal(true);

    consultError = signal<string | null>(null);
    pdfDataUrl = signal<string | null>(null);
    step = signal<GuideStepId>('intent');
    /** Opened a saved template in the layout designer from the workspace. */
    editingSavedLayout = signal(false);

    inputFields = computed(() =>
        inputFieldsFor(this.entities(), this.countryIso() ?? '', this.selectedFeatures())
    );

    isMixed = computed(() => this.entities().length > 1);

    batchSettings(): GuideBatchSettings {
        return {
            name: this.setupName().trim(),
            description: this.setupDescription().trim(),
            inputFormat: this.setupInputFormat(),
            outputFormat: this.setupOutputFormat(),
            mergeStrategy: this.setupMergeStrategy(),
            executor: this.setupExecutor(),
            webhookUrl: this.setupWebhookUrl().trim(),
            emailOnCompletion: this.setupEmails(),
        };
    }

    visibleSteps = computed((): GuideStepId[] => {
        if (this.editingSavedLayout()) return ['layout', 'generate'];
        if (this.libraryCreate()) {
            const librarySteps: GuideStepId[] = ['country', 'endpoints'];
            if (!this.reusingSaved()) librarySteps.push('setup');
            return librarySteps;
        }
        const intent = this.intent();
        const steps: GuideStepId[] = ['intent'];
        if (intent === 'report' || intent === 'template') steps.push('entity');
        if (this.entities().length) {
            steps.push('country', 'endpoints');
            if (!this.reusingSaved()) steps.push('setup');
            steps.push('mode');
        }
        if (this.mode() === 'single' && this.entities().length) {
            steps.push('input', 'consult', 'results');
            if (intent === 'report' || intent === 'template' || this.wantsReport()) {
                steps.push('template', 'layout', 'generate');
            }
        }
        if (this.mode() === 'batch' && this.entities().length) {
            steps.push('consult');
            if (intent === 'report' || intent === 'template' || this.wantsReport()) {
                steps.push('template');
            }
        }
        return steps;
    });

    applyDeductions(): void {
        const fromIntent = intentEntity(this.intent());
        if (fromIntent && (this.entities().length !== 1 || this.entities()[0] !== fromIntent)) {
            this.entities.set([fromIntent]);
        }
    }

    toggleEntity(entity: GuideEntity): void {
        const current = this.entities();
        if (current.includes(entity)) {
            this.entities.set(current.filter((item) => item !== entity));
            this.selectedFeatures.set([]);
            this.requiredParamFilters.set([]);
            return;
        }
        this.entities.set([...current, entity]);
        this.selectedFeatures.set([]);
        this.requiredParamFilters.set([]);
    }

    setInputValue(key: string, value: string): void {
        this.inputValues.update((current) => ({ ...current, [key]: value }));
    }

    buildRow(): Record<string, string> {
        return buildInputRow(
            this.entities(),
            this.countryIso() ?? '',
            this.inputValues(),
            this.selectedFeatures()
        );
    }

    resetAll(): void {
        this.intent.set(null);
        this.entities.set([]);
        this.countryIso.set(null);
        this.mode.set(null);
        this.inputValues.set({});
        this.selectedFeatures.set([]);
        this.endpointSearchQuery.set('');
        this.requiredParamFilters.set([]);
        this.wantsReport.set(false);
        this.libraryCreate.set(false);
        this.reusingSaved.set(false);
        this.configOrigin.set(null);
        this.setupName.set('');
        this.setupDescription.set('');
        this.setupInputFormat.set('csv');
        this.setupOutputFormat.set('xlsx');
        this.setupMergeStrategy.set('sequential');
        this.setupExecutor.set('queue');
        this.setupWebhookUrl.set('');
        this.setupEmails.set([]);
        this.configId.set(null);
        this.batchId.set(null);
        this.configuration.set(null);
        this.batch.set(null);
        this.clonedTemplate.set(null);
        this.selectedTemplate.set(null);
        this.templateChoice.set(null);
        this.includeItems.set([]);
        this.layoutSections.set([]);
        this.reportTitle.set('');
        this.primaryColor.set('#0f172a');
        this.pageBackgroundColor.set('#ffffff');
        this.logoDataUrl.set(null);
        this.logoX.set(32);
        this.logoY.set(32);
        this.logoWidth.set(160);
        this.logoHeight.set(60);
        this.logoRotation.set(0);
        this.sheetImages.set([]);
        this.legend.set('');
        this.watermarkEnabled.set(false);
        this.watermarkType.set('text');
        this.watermarkText.set('');
        this.watermarkOpacity.set(0.08);
        this.watermarkPattern.set('single');
        this.watermarkX.set(250);
        this.watermarkY.set(420);
        this.watermarkWidth.set(280);
        this.watermarkHeight.set(160);
        this.watermarkRotation.set(-15);
        this.showPageNumbers.set(true);
        this.consultError.set(null);
        this.pdfDataUrl.set(null);
        this.step.set('intent');
        this.editingSavedLayout.set(false);
    }
}
