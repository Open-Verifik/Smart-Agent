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
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { BatchConfiguration, BatchStep, SmartBatchService } from '../smart-batch.service';

@Component({
    selector: 'create-batch-config',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatStepperModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatExpansionModule,
        DragDropModule,
        TranslocoModule,
    ],
    templateUrl: './create-batch-config.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class CreateBatchConfigComponent {
    private _formBuilder = inject(FormBuilder);
    private _smartBatchService = inject(SmartBatchService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    // Edit mode
    isEditMode = signal(false);
    editConfigId = signal<string | null>(null);
    isLoadingConfig = signal(false);

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
    });

    // Step 2: Selection
    selectedFeatures = signal<any[]>([]); // Ordered list of selected features
    endpointSearchQuery = signal('');
    /** Country selected in Basic Info; used to limit endpoints to that country + world. */
    selectedCountryForEndpoints = signal<string>('');

    // Available features limited to selected country + world endpoints
    availableFeaturesForCountry = computed(() => {
        const all = this.availableFeatures();
        const country = this.selectedCountryForEndpoints();
        if (!country) return [];
        return all.filter(
            (f) =>
                f.country === country || (f.country && String(f.country).toLowerCase() === 'world')
        );
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
        // Check if we're in edit mode
        const id = this._route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode.set(true);
            this.editConfigId.set(id);
            this.loadConfiguration(id);
        }

        // When country changes, fetch features
        this.step1Form.get('country')?.valueChanges.subscribe((country) => {
            if (country && !this.isLoadingConfig()) {
                this.fetchFeatures(country);
            }
        });
    }

    loadConfiguration(id: string) {
        this.isLoadingConfig.set(true);
        this._smartBatchService.getConfiguration(id).subscribe({
            next: (res) => {
                const config = res.data;

                // Populate form
                this.step1Form.patchValue({
                    name: config.name,
                    description: config.description || '',
                    country: config.country,
                    inputFormat: config.inputFormat,
                    outputFormat: config.outputFormat,
                    mergeStrategy: config.mergeStrategy,
                });

                // Load features first, then set selected
                this.selectedCountryForEndpoints.set(config.country);
                this._smartBatchService.getAvailableFeatures().subscribe({
                    next: (featuresRes) => {
                        this.availableFeatures.set(featuresRes.data || []);

                        // Map steps to selected features (steps have populated appFeature objects)
                        const selectedFeats = config.steps
                            .sort((a, b) => a.sequence - b.sequence)
                            .map((step) => {
                                // step.appFeature could be an object or just an ID
                                if (typeof step.appFeature === 'object' && step.appFeature) {
                                    return step.appFeature;
                                }
                                // Find from available features
                                return featuresRes.data.find((f: any) => f._id === step.appFeature);
                            })
                            .filter(Boolean);

                        this.selectedFeatures.set(selectedFeats);
                        this.isLoadingConfig.set(false);
                    },
                    error: () => {
                        this.isLoadingConfig.set(false);
                    },
                });
            },
            error: () => {
                this.isLoadingConfig.set(false);
                this._router.navigate(['/smart-batch']);
            },
        });
    }

    fetchFeatures(country: string) {
        this.isLoadingFeatures.set(true);
        this.selectedFeatures.set([]);
        this.endpointSearchQuery.set('');
        this.selectedCountryForEndpoints.set(country);

        // Fetch all features; we filter to selected country + world on the frontend
        this._smartBatchService.getAvailableFeatures().subscribe({
            next: (res) => {
                this.availableFeatures.set(res.data || []);
                this.isLoadingFeatures.set(false);
            },
            error: () => {
                this.isLoadingFeatures.set(false);
            },
        });
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

    // Submission
    submit() {
        if (this.step1Form.invalid) return;
        if (this.selectedFeatures().length === 0) return;

        const basicInfo = this.step1Form.value;

        // Build steps with fixed defaults (enabled: true, maxRetries: 3)
        const steps: BatchStep[] = this.selectedFeatures().map((feature, index) => {
            return {
                appFeature: feature._id,
                sequence: index + 1,
                enabled: true,
                parameterDefaults: {},
                maxRetries: 3,
                inputFieldMapping: {},
                outputFieldsToKeep: [],
                retryDelayBaseSeconds: 4,
                timeoutSeconds: 30,
            };
        });

        const config: BatchConfiguration = {
            name: basicInfo.name,
            description: basicInfo.description,
            country: basicInfo.country,
            inputFormat: basicInfo.inputFormat,
            outputFormat: basicInfo.outputFormat,
            mergeStrategy: basicInfo.mergeStrategy,
            steps: steps,
            isActive: true,
        };

        if (this.isEditMode() && this.editConfigId()) {
            this._smartBatchService.updateConfiguration(this.editConfigId()!, config).subscribe({
                next: () => {
                    this._router.navigate(['/smart-batch']);
                },
                error: (err) => {
                    console.error('Error updating batch', err);
                },
            });
        } else {
            this._smartBatchService.createConfiguration(config).subscribe({
                next: () => {
                    this._router.navigate(['/smart-batch']);
                },
                error: (err) => {
                    console.error('Error creating batch', err);
                },
            });
        }
    }
}
