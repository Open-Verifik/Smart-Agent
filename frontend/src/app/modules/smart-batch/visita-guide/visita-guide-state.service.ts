import { computed, Injectable, signal } from '@angular/core';
import { AppFeature, BatchConfiguration, SmartBatch, SmartBatchExecutor } from '../smart-batch.service';
import { ReportSection, ReportSheetImage, SmartReportTemplate } from '../smart-report.service';
import {
    buildInputRow,
    GuideEntity,
    GuideIntent,
    GuideMode,
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
    countryIsos = signal<string[]>([]);
    mode = signal<GuideMode | null>(null);
    /** queue = Async (background). browser = Sync (this tab). */
    executor = signal<SmartBatchExecutor>('queue');
    inputValues = signal<Record<string, string>>({});
    selectedFeatures = signal<AppFeature[]>([]);
    endpointSearchQuery = signal('');
    requiredParamFilters = signal<string[]>([]);
    wantsReport = signal(false);

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
    identityColor = signal('#000000');
    pageBackgroundColor = signal('#ffffff');
    logoDataUrl = signal<string | null>(null);
    logoX = signal(32);
    logoY = signal(32);
    logoWidth = signal(160);
    logoHeight = signal(60);
    logoRotation = signal(0);
    sheetImages = signal<ReportSheetImage[]>([]);
    legend = signal('');
    legendPosition = signal<'left' | 'center' | 'right'>('left');
    termsAndConditions = signal('');
    termsPosition = signal<'left' | 'center' | 'right'>('left');
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
    pageNumberPosition = signal<
        'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
    >('bottom-center');
    pageSize = signal<'A4' | 'Letter' | 'Legal'>('A4');
    orientation = signal<'portrait' | 'landscape'>('portrait');
    pdfEngine = signal<'puppeteer' | 'pdfkit'>('puppeteer');
    securityEnabled = signal(false);
    securityPassword = signal('');
    signatureEnabled = signal(false);
    signatureImage = signal<string | null>(null);
    signatureX = signal(48);
    signatureY = signal(720);
    signatureWidth = signal(160);
    signatureHeight = signal(64);
    /** 0-based sheet the signature is drawn on. */
    signaturePage = signal(0);

    consultError = signal<string | null>(null);
    pdfDataUrl = signal<string | null>(null);
    step = signal<GuideStepId>('intent');
    /** Opened a saved template in the layout designer from the workspace. */
    editingSavedLayout = signal(false);

    inputFields = computed(() =>
        inputFieldsFor(this.entities(), this.countryIsos()[0] ?? 'co', this.selectedFeatures())
    );

    isMixed = computed(() => this.entities().length > 1);

    visibleSteps = computed((): GuideStepId[] => {
        if (this.editingSavedLayout()) return ['layout', 'generate'];
        const intent = this.intent();
        const steps: GuideStepId[] = ['intent'];
        if (intent) steps.push('country');
        if ((intent === 'report' || intent === 'template') && this.countryIsos().length) {
            steps.push('entity');
        }
        if (this.entities().length && this.countryIsos().length) steps.push('endpoints', 'mode');
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
            this.countryIsos()[0] ?? 'co',
            this.inputValues(),
            this.selectedFeatures()
        );
    }

    resetAll(): void {
        this.intent.set(null);
        this.entities.set([]);
        this.countryIsos.set([]);
        this.mode.set(null);
        this.executor.set('queue');
        this.inputValues.set({});
        this.selectedFeatures.set([]);
        this.endpointSearchQuery.set('');
        this.requiredParamFilters.set([]);
        this.wantsReport.set(false);
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
        this.identityColor.set('#000000');
        this.pageBackgroundColor.set('#ffffff');
        this.logoDataUrl.set(null);
        this.logoX.set(32);
        this.logoY.set(32);
        this.logoWidth.set(160);
        this.logoHeight.set(60);
        this.logoRotation.set(0);
        this.sheetImages.set([]);
        this.legend.set('');
        this.legendPosition.set('left');
        this.termsAndConditions.set('');
        this.termsPosition.set('left');
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
        this.pageNumberPosition.set('bottom-center');
        this.pageSize.set('A4');
        this.orientation.set('portrait');
        this.pdfEngine.set('puppeteer');
        this.securityEnabled.set(false);
        this.securityPassword.set('');
        this.signatureEnabled.set(false);
        this.signatureImage.set(null);
        this.signatureX.set(48);
        this.signatureY.set(720);
        this.signatureWidth.set(160);
        this.signatureHeight.set(64);
        this.signaturePage.set(0);
        this.consultError.set(null);
        this.pdfDataUrl.set(null);
        this.step.set('intent');
        this.editingSavedLayout.set(false);
    }
}
