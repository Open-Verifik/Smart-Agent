import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatError, MatFormField, MatLabel, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { WebhooksService } from '../../smart-monitor/webhooks/webhooks.service';
import { isClientVisibleBatchDependencyField } from '../smart-batch-dependency.constants';
import { filterFeaturesForCountry, resolveDropdownCountry } from '../smart-batch-country.util';
import { AppFeature, BatchConfiguration, BatchStep, SmartBatchService } from '../smart-batch.service';

const EMAIL_TOKEN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SMART_BATCH_TEST_TYPE = 'smart_batch_batch_completed';

const parseEmailList = (value: string): string[] => {
    const seen = new Set<string>();
    const emails: string[] = [];
    for (const token of (value || '').split(/[,;\n]+/)) {
        const email = token.trim();
        if (!email) continue;
        const key = email.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        emails.push(email);
    }
    return emails;
};

@Component({
    selector: 'create-batch-config',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatButton,
        MatIconButton,
        MatInput,
        MatFormField,
        MatLabel,
        MatError,
        MatPrefix,
        MatSuffix,
        MatSelect,
        MatOption,
        MatIcon,
        MatProgressSpinner,
        DragDropModule,
        TranslocoModule,
    ],
    templateUrl: './create-batch-config.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class CreateBatchConfigComponent {
    private _formBuilder = inject(FormBuilder);
    private _smartBatchService = inject(SmartBatchService);
    private _webhooksService = inject(WebhooksService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _transloco = inject(TranslocoService);
    private _loadedConfig: BatchConfiguration | null = null;

    // Edit mode
    isEditMode = signal(false);
    editConfigId = signal<string | null>(null);
    isLoadingConfig = signal(false);
    isSavingStep = signal(false);
    errorMessage = signal<string | null>(null);
    wizardStep = signal(1);
    testingWebhook = signal(false);
    testResult = signal<{ status?: string; statusCode?: number; message?: string } | null>(null);
    readonly wizardLabels = [
        'createBatchConfig.basicInformation',
        'createBatchConfig.selectEndpoints',
        'createBatchConfig.reviewParameters',
        'createBatchConfig.reviewAndCreate',
    ] as const;

    // Data
    countries = signal([
        { code: 'Colombia', name: '🇨🇴 Colombia' },
        { code: 'Peru', name: '🇵🇪 Peru' },
        { code: 'Mexico', name: '🇲🇽 Mexico' },
        { code: 'Brazil', name: '🇧🇷 Brazil' },
        { code: 'Chile', name: '🇨🇱 Chile' },
        { code: 'Argentina', name: '🇦🇷 Argentina' },
        { code: 'Ecuador', name: '🇪🇨 Ecuador' },
        { code: 'Venezuela', name: '🇻🇪 Venezuela' },
        { code: 'United States', name: '🇺🇸 United States' },
        { code: 'Spain', name: '🇪🇸 Spain' },
    ]);

    availableFeatures = signal<any[]>([]);
    isLoadingFeatures = signal(false);

    // Forms
    step1Form: FormGroup = this._formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(150)]],
        description: ['', [Validators.maxLength(800)]],
        country: ['', Validators.required],
        inputFormat: ['csv', Validators.required],
        outputFormat: ['csv', Validators.required],
        mergeStrategy: ['sequential', Validators.required],
        executor: ['queue', Validators.required],
        webhookUrl: ['', [Validators.pattern(/^https?:\/\/.+/i)]],
    });
    emailChips = signal<string[]>([]);
    emailDraft = signal('');
    emailDraftError = signal(false);
    notificationsOpen = signal(false);
    private loadedWebhookUrl = '';
    verifiedWebhookUrl = signal<string | null>(null);

    // Step 2: Selection
    selectedFeatures = signal<any[]>([]); // Ordered list of selected features
    endpointSearchQuery = signal('');
    /** Country selected in Basic Info; used to limit endpoints to that country + world. */
    selectedCountryForEndpoints = signal<string>('');

    // Available features limited to selected country + world endpoints
    availableFeaturesForCountry = computed(() => {
        return filterFeaturesForCountry(this.availableFeatures(), this.selectedCountryForEndpoints());
    });

    // Filtered by search (title / URL) within country-filtered list
    filteredAvailableFeatures = computed(() => {
        const query = this.endpointSearchQuery().trim().toLowerCase();
        const features = this.availableFeaturesForCountry();
        if (!query) return features;
        return features.filter((feature) => {
            const name = (feature.name ?? '').toLowerCase();
            const url = this.getEndpointDisplay(feature).toLowerCase();
            const code = (feature.code ?? '').toLowerCase();
            return name.includes(query) || url.includes(query) || code.includes(query);
        });
    });

    // Cost calculation
    totalCostPerRecord = computed(() => {
        return this.selectedFeatures().reduce((sum, feature) => {
            return sum + (feature.price || feature.smartCheckPrice || 0);
        }, 0);
    });

    constructor() {
        const id = this._route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode.set(true);
            this.editConfigId.set(id);
            this.loadConfiguration(id);
        }

        this.step1Form.get('country')?.valueChanges.subscribe((country) => {
            if (!country || this.isLoadingConfig()) return;
            if (country === this.selectedCountryForEndpoints()) return;
            this.fetchFeatures(country, { resetSelection: true });
        });
        this.step1Form.get('webhookUrl')?.valueChanges.subscribe(() => this.testResult.set(null));
    }

    loadConfiguration(id: string) {
        this.errorMessage.set(null);
        this.isLoadingConfig.set(true);
        this._smartBatchService.getConfiguration(id).subscribe({
            next: (res) => this.applyLoadedConfiguration(res.data),
            error: () => {
                this.isLoadingConfig.set(false);
                this.showError('createBatchConfig.loadFailed');
            },
        });
    }

    private applyLoadedConfiguration(config: BatchConfiguration): void {
        this._loadedConfig = config;
        const countryValue = resolveDropdownCountry(
            config.country,
            this.countries().map((country) => country.code)
        );

        this.step1Form.patchValue(
            {
                name: config.name,
                description: config.description || '',
                country: countryValue,
                inputFormat: config.inputFormat,
                outputFormat: config.outputFormat,
                mergeStrategy: config.mergeStrategy,
                executor: config.executor === 'queue' ? 'queue' : 'browser',
                webhookUrl: config.notification?.webhookUrl || '',
            },
            { emitEvent: false }
        );
        this.loadedWebhookUrl = (config.notification?.webhookUrl || '').trim();
        this.emailChips.set([...(config.notification?.emailOnCompletion || [])]);
        this.emailDraft.set('');
        this.emailDraftError.set(false);
        this.notificationsOpen.set(Boolean(this.loadedWebhookUrl || this.emailChips().length));

        this.selectedCountryForEndpoints.set(countryValue);
        this._smartBatchService.getAvailableFeatures().subscribe({
            next: (featuresRes) => {
                const features = featuresRes.data || [];
                this.availableFeatures.set(features);
                this.selectedFeatures.set(this.mapStepsToFeatures(config, features));
                this.isLoadingConfig.set(false);
            },
            error: () => {
                this.isLoadingConfig.set(false);
                this.showError('createBatchConfig.featuresLoadFailed');
            },
        });
    }

    private mapStepsToFeatures(config: BatchConfiguration, features: AppFeature[]): AppFeature[] {
        return [...(config.steps || [])]
            .sort((a, b) => a.sequence - b.sequence)
            .map((step) => {
                if (typeof step.appFeature === 'object' && step.appFeature) {
                    return step.appFeature;
                }
                return features.find((feature) => feature._id === step.appFeature);
            })
            .filter((feature): feature is AppFeature => Boolean(feature));
    }

    fetchFeatures(country: string, options: { resetSelection?: boolean } = {}) {
        this.isLoadingFeatures.set(true);
        if (options.resetSelection) {
            this.selectedFeatures.set([]);
        }
        this.endpointSearchQuery.set('');
        this.selectedCountryForEndpoints.set(country);

        this._smartBatchService.getAvailableFeatures().subscribe({
            next: (res) => {
                this.availableFeatures.set(res.data || []);
                this.isLoadingFeatures.set(false);
            },
            error: () => {
                this.isLoadingFeatures.set(false);
                this.showError('createBatchConfig.featuresLoadFailed');
            },
        });
    }

    private showError(key: string): void {
        this.errorMessage.set(this._transloco.translate(key));
    }

    currentWebhookUrl(): string {
        return (this.step1Form.get('webhookUrl')?.value || '').trim();
    }

    canTestWebhook(): boolean {
        const control = this.step1Form.get('webhookUrl');
        return Boolean(this.currentWebhookUrl()) && !control?.invalid && !this.testingWebhook();
    }

    isWebhookReady(): boolean {
        const url = this.currentWebhookUrl();
        if (!url) return true;
        if (this.testingWebhook() || this.testResult()?.status === 'fail') return false;
        if (this.verifiedWebhookUrl() === url) return true;
        return url === this.loadedWebhookUrl;
    }

    canContinueStep1(): boolean {
        return this.step1Form.valid && !this.isSavingStep() && this.isWebhookReady();
    }

    showNotificationFields(): boolean {
        return this.notificationsOpen() || !this.isWebhookReady();
    }

    toggleNotifications(): void {
        this.notificationsOpen.update((open) => !open);
    }

    testWebhook(): void {
        const url = this.currentWebhookUrl();
        if (!this.canTestWebhook()) return;

        this.testingWebhook.set(true);
        this.testResult.set(null);
        this.verifiedWebhookUrl.set(null);
        this._webhooksService.test(url, SMART_BATCH_TEST_TYPE).subscribe({
            next: (response) => {
                this.testingWebhook.set(false);
                const result = response.data || null;
                this.testResult.set(result);
                if (result?.status === 'success') this.verifiedWebhookUrl.set(url);
            },
            error: (error) => {
                this.testingWebhook.set(false);
                this.testResult.set({
                    status: 'fail',
                    message:
                        error.error?.message || this._transloco.translate('createBatchConfig.testFailed'),
                });
            },
        });
    }

    addEmailChip(raw: string): void {
        const emails = parseEmailList(raw);
        if (!emails.length) return;
        if (emails.some((email) => !EMAIL_TOKEN.test(email))) {
            this.emailDraftError.set(true);
            return;
        }
        this.emailChips.update((current) => {
            const seen = new Set(current.map((email) => email.toLowerCase()));
            const next = [...current];
            for (const email of emails) {
                const key = email.toLowerCase();
                if (seen.has(key)) continue;
                seen.add(key);
                next.push(email);
            }
            return next;
        });
        this.emailDraft.set('');
        this.emailDraftError.set(false);
    }

    removeEmailChip(email: string): void {
        this.emailChips.update((current) => current.filter((item) => item !== email));
    }

    onEmailKeydown(event: KeyboardEvent): void {
        const draft = this.emailDraft().trim();
        if (event.key === 'Enter' || event.key === ',') {
            event.preventDefault();
            this.addEmailChip(draft);
            return;
        }
        if (event.key === 'Backspace' && !draft && this.emailChips().length) {
            this.emailChips.update((current) => current.slice(0, -1));
        }
    }

    onEmailInput(value: string): void {
        this.emailDraftError.set(false);
        if (value.includes(',') || value.includes(';')) {
            this.addEmailChip(value);
            return;
        }
        this.emailDraft.set(value);
    }

    onEmailBlur(): void {
        const draft = this.emailDraft().trim();
        if (draft) this.addEmailChip(draft);
    }

    // Feature Selection Logic
    toggleFeature(feature: any) {
        const current = this.selectedFeatures();
        const index = current.findIndex((f) => f._id === feature._id);

        if (index >= 0) {
            // Remove
            this.selectedFeatures.update((features) =>
                features.filter((f) => f._id !== feature._id)
            );
        } else {
            // Add
            this.selectedFeatures.update((features) => [...features, feature]);
        }
    }

    isSelected(feature: any): boolean {
        return this.selectedFeatures().some((f) => f._id === feature._id);
    }

    /** Display endpoint URL/path for a feature (e.g. /v2/co/cedula), fallback to code. */
    getEndpointDisplay(feature: any): string {
        const url = feature?.url;
        if (!url) return feature?.code ?? '';
        return url.startsWith('/') ? url : '/' + url;
    }

    drop(event: CdkDragDrop<string[]>) {
        const currentList = this.selectedFeatures();
        moveItemInArray(currentList, event.previousIndex, event.currentIndex);
        this.selectedFeatures.set([...currentList]);
    }

    private featureId(feature: BatchStep['appFeature'] | undefined): string | undefined {
        if (!feature) return undefined;
        return typeof feature === 'object' ? feature._id : feature;
    }

    /** Build config from current form state and selected features. */
    private buildConfigFromCurrentState(): BatchConfiguration {
        const basicInfo = this.step1Form.value;
        const existingSteps = this._loadedConfig?.steps || [];
        const steps: BatchStep[] = this.selectedFeatures().map((feature, index) => {
            const previous = existingSteps.find(
                (step) => this.featureId(step.appFeature) === feature._id
            );
            return {
                appFeature: feature._id,
                sequence: index + 1,
                enabled: previous?.enabled ?? true,
                parameterDefaults: previous?.parameterDefaults ?? {},
                maxRetries: previous?.maxRetries ?? 3,
                inputFieldMapping: previous?.inputFieldMapping ?? {},
                outputFieldsToKeep: previous?.outputFieldsToKeep ?? [],
                retryDelayBaseSeconds: Math.max(1, previous?.retryDelayBaseSeconds ?? 4),
                timeoutSeconds: Math.max(5, previous?.timeoutSeconds ?? 30),
            };
        });
        return {
            name: basicInfo.name,
            description: basicInfo.description,
            country: basicInfo.country,
            inputFormat: basicInfo.inputFormat,
            outputFormat: basicInfo.outputFormat,
            mergeStrategy: basicInfo.mergeStrategy,
            executor: this.currentRunMode(),
            notification: {
                webhookUrl: (basicInfo.webhookUrl || '').trim(),
                emailOnCompletion: this.emailChips(),
            },
            steps,
            isActive: this._loadedConfig?.isActive ?? true,
        };
    }

    currentRunMode(): 'queue' | 'browser' {
        return this.step1Form.get('executor')?.value === 'queue' ? 'queue' : 'browser';
    }

    isAsyncSelected(): boolean {
        return this.currentRunMode() === 'queue';
    }

    selectRunMode(mode: 'queue' | 'browser'): void {
        this.step1Form.patchValue({ executor: mode });
    }

    runModeLabelKey(): string {
        return this.isAsyncSelected()
            ? 'createBatchConfig.runModeAsync'
            : 'createBatchConfig.runModeSync';
    }

    runModeCardClass(selected: boolean): string {
        const base = 'rounded-xl border-2 p-4 text-left transition';
        if (selected) {
            return `${base} border-stone-900 bg-stone-900 text-white dark:border-white dark:bg-white/10`;
        }
        return `${base} border-stone-200 dark:border-gray-700`;
    }

    runModeHintClass(selected: boolean): string {
        if (selected) return 'mt-1 block text-xs leading-relaxed text-stone-300';
        return 'mt-1 block text-xs leading-relaxed text-stone-500 dark:text-stone-400';
    }

    goBack() {
        this.wizardStep.update((step) => Math.max(1, step - 1));
    }

    private advanceWizard() {
        this.errorMessage.set(null);
        this.wizardStep.update((step) => Math.min(4, step + 1));
    }

    /** Save current step and advance wizard (edit mode only). */
    onNext(stepIndex: 1 | 2 | 3) {
        if (this.isSavingStep()) return;
        if (stepIndex === 1 && !this.canContinueStep1()) return;
        // Review Parameters is read-only; persist on steps 1–2 and final submit.
        if (stepIndex === 3) {
            this.advanceWizard();
            return;
        }
        if (this.isEditMode() && this.editConfigId()) {
            const config = this.buildConfigFromCurrentState();
            if (config.steps.length === 0) {
                this.advanceWizard();
                return;
            }
            this.isSavingStep.set(true);
            this._smartBatchService.updateConfiguration(this.editConfigId()!, config).subscribe({
                next: () => {
                    this.isSavingStep.set(false);
                    this.advanceWizard();
                },
                error: (err) => {
                    console.error('Error saving step', err);
                    this.isSavingStep.set(false);
                    this.showError('createBatchConfig.saveFailed');
                },
            });
        } else {
            this.advanceWizard();
        }
    }

    /** Submit final step (create or full update). */
    submit() {
        if (!this.canContinueStep1()) return;
        if (this.selectedFeatures().length === 0) return;

        const config = this.buildConfigFromCurrentState();

        if (this.isEditMode() && this.editConfigId()) {
            this._smartBatchService.updateConfiguration(this.editConfigId()!, config).subscribe({
                next: () => {
                    this._router.navigate(['/smart-batch']);
                },
                error: (err) => {
                    console.error('Error updating batch', err);
                    this.showError('createBatchConfig.saveFailed');
                },
            });
        } else {
            this._smartBatchService.createConfiguration(config).subscribe({
                next: (res) => {
                    const id = res.data._id ?? res.data.id;
                    if (id) {
                        this._router.navigate(['/smart-batch', id]);
                        return;
                    }
                    this._router.navigate(['/smart-batch']);
                },
                error: (err) => {
                    console.error('Error creating batch', err);
                    this.showError('createBatchConfig.saveFailed');
                },
            });
        }
    }

    /** Dependencies shown in the wizard (hides internal-only fields such as `force`). */
    visibleDependencies(feature: { dependencies?: { field?: string }[] } | null | undefined) {
        const deps = feature?.dependencies;
        if (!deps?.length) return [];
        return deps.filter((d) => d?.field && isClientVisibleBatchDependencyField(d.field));
    }
}
