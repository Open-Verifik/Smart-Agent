import { computed, Injectable, signal } from '@angular/core';
import { AppFeature, BatchConfiguration, SmartBatch } from '../smart-batch.service';
import { ReportSection, SmartReportTemplate } from '../smart-report.service';
import {
    availableCountries,
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
    countryIso = signal<string | null>(null);
    mode = signal<GuideMode | null>(null);
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
    pageBackgroundColor = signal('#ffffff');
    logoDataUrl = signal<string | null>(null);
    logoX = signal(32);
    logoY = signal(32);
    logoWidth = signal(160);
    logoHeight = signal(60);
    logoRotation = signal(0);
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

    inputFields = computed(() =>
        inputFieldsFor(this.entities(), this.countryIso() ?? 'co', this.selectedFeatures())
    );

    isMixed = computed(() => this.entities().length > 1);

    visibleSteps = computed((): GuideStepId[] => {
        const intent = this.intent();
        const steps: GuideStepId[] = ['intent'];
        if (intent === 'report' || intent === 'template') steps.push('entity');
        if (this.entities().length && availableCountries().length > 1) steps.push('country');
        if (this.entities().length) steps.push('endpoints', 'mode');
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

        const countries = availableCountries();
        if (!this.countryIso() && countries.length === 1) {
            this.countryIso.set(countries[0].iso);
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
            this.countryIso() ?? 'co',
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
    }
}
