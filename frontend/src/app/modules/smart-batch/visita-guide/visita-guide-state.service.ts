import { computed, Injectable, signal } from '@angular/core';
import { BatchConfiguration, SmartBatch } from '../smart-batch.service';
import { SmartReportTemplate } from '../smart-report.service';
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
    wantsReport = signal(false);

    configId = signal<string | null>(null);
    batchId = signal<string | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    batch = signal<SmartBatch | null>(null);
    clonedTemplate = signal<SmartReportTemplate | null>(null);
    selectedTemplate = signal<SmartReportTemplate | null>(null);
    templateChoice = signal<GuideTemplateChoice | null>(null);
    includeItems = signal<GuideIncludeItem[]>([]);

    reportTitle = signal('');
    primaryColor = signal('#0f172a');
    logoDataUrl = signal<string | null>(null);

    consultError = signal<string | null>(null);
    pdfDataUrl = signal<string | null>(null);
    step = signal<GuideStepId>('intent');

    inputFields = computed(() => inputFieldsFor(this.entities(), this.countryIso() ?? 'co'));

    isMixed = computed(() => this.entities().length > 1);

    visibleSteps = computed((): GuideStepId[] => {
        const intent = this.intent();
        const steps: GuideStepId[] = ['intent'];
        if (intent === 'report') steps.push('entity');
        if (this.entities().length && availableCountries().length > 1) steps.push('country');
        if (this.entities().length) steps.push('mode');
        if (this.mode() === 'single' && this.entities().length) {
            steps.push('input', 'consult', 'results');
            if (intent === 'report' || this.wantsReport()) {
                steps.push('include', 'template', 'customize', 'preview', 'generate');
            }
        }
        if (this.mode() === 'batch' && this.entities().length) {
            steps.push('consult');
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
            return;
        }
        this.entities.set([...current, entity]);
    }

    setInputValue(key: string, value: string): void {
        this.inputValues.update((current) => ({ ...current, [key]: value }));
    }

    buildRow(): Record<string, string> {
        return buildInputRow(this.entities(), this.countryIso() ?? 'co', this.inputValues());
    }

    resetAll(): void {
        this.intent.set(null);
        this.entities.set([]);
        this.countryIso.set(null);
        this.mode.set(null);
        this.inputValues.set({});
        this.wantsReport.set(false);
        this.configId.set(null);
        this.batchId.set(null);
        this.configuration.set(null);
        this.batch.set(null);
        this.clonedTemplate.set(null);
        this.selectedTemplate.set(null);
        this.templateChoice.set(null);
        this.includeItems.set([]);
        this.reportTitle.set('');
        this.primaryColor.set('#0f172a');
        this.logoDataUrl.set(null);
        this.consultError.set(null);
        this.pdfDataUrl.set(null);
        this.step.set('intent');
    }
}
