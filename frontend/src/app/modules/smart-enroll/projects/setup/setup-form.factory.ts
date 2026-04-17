import { Injectable } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

import {
    BusinessDocumentConfiguration,
    BusinessDocumentType,
    PersonalDocumentConfiguration,
    PersonalDocumentType,
    ProjectDocumentTemplate,
} from './setup.types';

/**
 * Verbatim port of verifik-client-panel SetupFormFactory.
 * Builds typed FormGroup/FormArray nodes for the Smart Enroll setup wizard.
 */
@Injectable({ providedIn: 'root' })
export class SetupFormFactory {
    constructor(private _formBuilder: FormBuilder) {}

    static validators = {
        additionalFields: (): ValidatorFn => {
            return (control: AbstractControl): ValidationErrors | null => {
                const allowAdditionalFields = control.value;
                const additionalFields = control?.parent?.get("additionalFields")?.value;

                if (allowAdditionalFields && (!additionalFields || additionalFields.length === 0)) {
                    return { additionalFieldsRequired: true };
                }

                return null;
            };
        },

        documentsScreening: (): ValidatorFn => {
            return (group: AbstractControl): ValidationErrors | null => {
                const screening = group.get("screening")?.value;
                const criminalHistoryVerification = group.get("criminalHistoryVerification")?.value;
                const informationVerification = group.get("informationVerification")?.value;

                if (screening && !criminalHistoryVerification && !informationVerification) {
                    return { screeningRequiresVerification: true };
                }

                return null;
            };
        },

        documentVerificationTypes: (): ValidatorFn => {
            return (control: AbstractControl): ValidationErrors | null => {
                const documentTypesArray = control as FormArray;
                const errors: ValidationErrors = {};

                if (!documentTypesArray || documentTypesArray.length === 0) errors.atLeastOneDocumentVerificationTypeRequired = true;

                if (documentTypesArray && documentTypesArray.length > 0) {
                    const countries = documentTypesArray.controls.map((typeControl) => typeControl.get("country")?.value).filter(Boolean);
                    const uniqueCountries = new Set(countries);

                    if (countries.length !== uniqueCountries.size) errors.duplicateCountriesNotAllowed = true;

                    if (documentTypesArray.controls.some((typeControl) => !typeControl.get("country")?.value)) {
                        errors.emptyCountryValuesNotAllowed = true;
                    }

                    if (documentTypesArray.controls.some((typeControl) => typeControl.invalid)) {
                        errors.allDocumentVerificationTypesMustBeValid = true;
                    }
                }

                return Object.keys(errors).length ? errors : null;
            };
        },

        requiredIfDocumentStep: (): ValidatorFn => {
            return (control: AbstractControl): ValidationErrors | null => {
                if (!control) return null;

                const documentStep = control?.value;
                const verificationMethodsControl = control?.root?.get("projectFlow.documents.verificationMethods");
                const attemptLimitControl = control?.root?.get("projectFlow.documents.attemptLimit");

                if (!documentStep || documentStep === "skip") {
                    verificationMethodsControl?.setValidators([]);
                    verificationMethodsControl?.updateValueAndValidity({ onlySelf: true });

                    attemptLimitControl?.setValidators([]);
                    attemptLimitControl?.updateValueAndValidity({ onlySelf: true });

                    return null;
                }

                verificationMethodsControl?.setValidators([Validators.required]);
                verificationMethodsControl?.updateValueAndValidity({ onlySelf: true });

                attemptLimitControl?.setValidators([Validators.required]);
                attemptLimitControl?.updateValueAndValidity({ onlySelf: true });

                return null;
            };
        },

        atLeastOneContactMethod: (): ValidatorFn => {
            return (group: AbstractControl): ValidationErrors | null => {
                const email = group.get("email")?.value;
                const phone = group.get("phone")?.value;

                if (!email && !phone) {
                    return { atLeastOneContactMethodRequired: true };
                }

                return null;
            };
        },

        promptTemplate: (target: "business" | "personal" = "personal"): ValidatorFn => {
            return (control: AbstractControl): ValidationErrors | null => {
                if (target === "business") {
                    return (control: AbstractControl): ValidationErrors | null => (!control.value ? { promptTemplateRequired: true } : null);
                }

                return !control.value ? { promptTemplateRequired: true } : null;
            };
        },

        documentTemplates: (): ValidatorFn => {
            return (control: AbstractControl): ValidationErrors | null => {
                const documentTemplatesArray = control as FormArray;
                const errors: ValidationErrors = {};

                if (!documentTemplatesArray || !documentTemplatesArray.length) return { atLeastOnePromptTemplateRequired: true };

                const nonEmptyTemplates = documentTemplatesArray.controls.filter((templateControl) => templateControl.get("promptTemplate")?.value);

                if (nonEmptyTemplates.length === 0) return { atLeastOnePromptTemplateRequired: true };

                const uniquePromptTemplateIds = new Set(nonEmptyTemplates.map((templateControl) => templateControl.get("promptTemplate")?.value));

                if (uniquePromptTemplateIds.size !== nonEmptyTemplates.length) errors.allPromptTemplatesMustBeUnique = true;

                if (nonEmptyTemplates.some((templateControl) => templateControl.invalid)) errors.allPromptTemplatesMustBeSelected = true;

                return Object.keys(errors).length ? errors : null;
            };
        },

        configurationActive: (): ValidatorFn => {
            return (control: AbstractControl): ValidationErrors | null => {
                const isActive = control.value;

                if (!isActive) return null;

                const configurationGroup = control.parent;
                const documentTemplatesArray = configurationGroup?.get("documentTemplates") as FormArray;

                if (!documentTemplatesArray || documentTemplatesArray.length === 0) {
                    return { activeConfigurationRequiresValidDocumentTemplates: true };
                }

                const nonEmptyTemplates = documentTemplatesArray.controls.filter((templateControl) => templateControl.get("promptTemplate")?.value);

                if (nonEmptyTemplates.length === 0) {
                    return { activeConfigurationRequiresValidDocumentTemplates: true };
                }

                if (nonEmptyTemplates.some((templateControl) => templateControl.invalid)) {
                    return { activeConfigurationRequiresValidDocumentTemplates: true };
                }

                return null;
            };
        },

        configurations: (): ValidatorFn => {
            return (control: AbstractControl): ValidationErrors | null => {
                const configurationsArray = control as FormArray;
                const errors: ValidationErrors = {};

                if (!configurationsArray || !configurationsArray.length) errors.configurationsRequired = true;

                if (configurationsArray?.length) {
                    const activeConfigurations = configurationsArray.controls.filter(
                        (configurationControl) => configurationControl.get("active")?.value === true
                    );

                    if (!activeConfigurations.length) errors.atLeastOneActiveConfigurationRequired = true;

                    if (
                        activeConfigurations.some(
                            (configurationControl) =>
                                configurationControl.invalid ||
                                configurationControl.get("documentTemplates")?.invalid ||
                                configurationControl.get("active")?.invalid
                        )
                    ) {
                        errors.allConfigurationsMustBeValid = true;
                    }
                }

                return Object.keys(errors).length ? errors : null;
            };
        },

        documentVerificationType: (): ValidatorFn => {
            return (control: AbstractControl): ValidationErrors | null => {
                const documentVerificationTypeGroup = control;
                const country = documentVerificationTypeGroup.get("country")?.value;
                const configurations = documentVerificationTypeGroup.get("configurations") as FormArray;

                const errors: ValidationErrors = {};

                if (!country) errors.countryRequired = true;
                if (!configurations || configurations.invalid) errors.configurationsInvalid = true;

                return Object.keys(errors).length ? errors : null;
            };
        },
    };

    /**
     * Sets up validators for document templates array and all its prompt template controls
     */
    private _setupDocumentTemplatesValidation(documentTemplatesArray: FormArray): void {
        documentTemplatesArray?.setValidators([SetupFormFactory.validators.documentTemplates()]);

        documentTemplatesArray?.controls.forEach((documentTemplate) => {
            documentTemplate.get("promptTemplate")?.setValidators([SetupFormFactory.validators.promptTemplate()]);
            documentTemplate.get("promptTemplate")?.updateValueAndValidity();
            documentTemplate.updateValueAndValidity();
        });
    }

    /**
     * Removes validators from document templates array and all its prompt template controls
     */
    private _removeDocumentTemplatesValidation(documentTemplatesArray: FormArray): void {
        documentTemplatesArray?.setValidators([]);

        documentTemplatesArray?.controls.forEach((documentTemplate) => {
            documentTemplate.get("promptTemplate")?.setValidators([]);
            documentTemplate.get("promptTemplate")?.updateValueAndValidity();
            documentTemplate.updateValueAndValidity();
        });
    }

    /**
     * Adds default document types to an existing form array
     */
    addDocumentTypesWithDefaults(documentTypes?: FormArray, target: "business" | "personal" = "personal"): void {
        const defaultConfigurationsArray =
            target === "business" ? this.createDefaultBusinessConfigurations() : this.createDefaultPersonalConfigurations();

        const defaultDocumentType = this._formBuilder.group({
            country: ["", [Validators.required]],
            configurations: defaultConfigurationsArray,
        });

        documentTypes?.push(defaultDocumentType);
    }

    /**
     * Creates a document template FormGroup
     */
    createDocumentTemplateFormGroup(documentTemplate?: ProjectDocumentTemplate, target: "business" | "personal" = "personal"): FormGroup {
        return this._formBuilder.group({
            promptTemplate: [documentTemplate?.promptTemplate || null, [SetupFormFactory.validators.promptTemplate(target)]],
            required: [documentTemplate?.required || "optional", [Validators.required]],
        });
    }

    /**
     * Creates a document templates FormArray
     */
    createDocumentTemplatesFormArray(documentTemplates?: ProjectDocumentTemplate[], target: "business" | "personal" = "personal"): FormArray {
        const templates = documentTemplates?.map((template) => this.createDocumentTemplateFormGroup(template, target)) || [];
        const formArray = this._formBuilder.array(templates, [Validators.required]);

        formArray.setValidators([SetupFormFactory.validators.documentTemplates()]);

        return formArray;
    }

    /**
     * Creates a configuration FormGroup
     */
    createConfigurationFormGroup(
        config?: Partial<PersonalDocumentConfiguration | BusinessDocumentConfiguration>,
        target: "business" | "personal" = "personal"
    ): FormGroup {
        const documentTemplatesArray = this.createDocumentTemplatesFormArray(config?.documentTemplates, target);

        return this._formBuilder.group({
            active: [config?.active ?? false, [SetupFormFactory.validators.configurationActive()]],
            documentCategory: [config?.documentCategory, [Validators.required]],
            documentTemplates: documentTemplatesArray,
        });
    }

    /**
     * Creates a configurations FormArray
     */
    createConfigurationsFormArray(
        configurations?: Partial<PersonalDocumentConfiguration | BusinessDocumentConfiguration>[],
        target: "business" | "personal" = "personal"
    ): FormArray {
        const configs = configurations?.map((config) => this.createConfigurationFormGroup(config, target)) || [];
        const formArray = this._formBuilder.array(configs);

        formArray.setValidators([SetupFormFactory.validators.configurations()]);

        return formArray;
    }

    /**
     * Creates a document type FormGroup
     */
    createDocumentTypeFormGroup(
        documentType?: Partial<PersonalDocumentType | BusinessDocumentType>,
        target: "business" | "personal" = "personal"
    ): FormGroup {
        const configurationsArray = this.createConfigurationsFormArray(documentType?.configurations, target);

        const formGroup = this._formBuilder.group({
            country: [documentType?.country || "", [Validators.required]],
            configurations: configurationsArray,
        });

        formGroup.setValidators([SetupFormFactory.validators.documentVerificationType()]);

        return formGroup;
    }

    /**
     * Creates a document types FormArray
     */
    createDocumentTypesFormArray(
        documentTypes?: Partial<PersonalDocumentType | BusinessDocumentType>[],
        target: "business" | "personal" = "personal"
    ): FormArray {
        const types = documentTypes?.map((docType) => this.createDocumentTypeFormGroup(docType, target)) || [];
        const formArray = this._formBuilder.array(types);

        formArray.setValidators([SetupFormFactory.validators.documentVerificationTypes()]);

        return formArray;
    }

    /**
     * Creates default personal configurations
     */
    createDefaultPersonalConfigurations(): FormArray {
        const configurationsArray = this._formBuilder.array<FormGroup>([]);

        const defaultConfigs = [
            { documentCategory: "government_id", active: false, documentTemplates: [{ promptTemplate: null }] },
            { documentCategory: "license", active: false, documentTemplates: [{ promptTemplate: null }] },
            { documentCategory: "passport", active: false, documentTemplates: [{ promptTemplate: null }] },
        ] as Partial<PersonalDocumentConfiguration>[];

        defaultConfigs.forEach((config) => {
            const documentTemplatesArray = this.createDocumentTemplatesFormArray(config?.documentTemplates);
            const configurationFormGroup = this.createDefaultConfigurationFormGroup(config, documentTemplatesArray);

            configurationsArray.push(configurationFormGroup);
        });

        configurationsArray.setValidators([SetupFormFactory.validators.configurations()]);

        return configurationsArray;
    }

    /**
     * Creates default business configurations
     */
    createDefaultBusinessConfigurations(): FormArray {
        const configurationsArray = this._formBuilder.array<FormGroup>([]);

        const defaultConfigs = [
            { documentCategory: "business_document", active: false, documentTemplates: [{ promptTemplate: null, required: "optional" }] },
            { documentCategory: "proof_of_address", active: false, documentTemplates: [{ promptTemplate: null, required: "optional" }] },
            { documentCategory: "tax_document", active: false, documentTemplates: [{ promptTemplate: null, required: "optional" }] },
        ] as Partial<BusinessDocumentConfiguration>[];

        defaultConfigs.forEach((config) => {
            const documentTemplatesArray = this.createDocumentTemplatesFormArray(config?.documentTemplates);

            const configurationFormGroup = this.createDefaultConfigurationFormGroup(config, documentTemplatesArray);

            configurationsArray.push(configurationFormGroup);
        });

        configurationsArray.setValidators([SetupFormFactory.validators.configurations()]);

        return configurationsArray;
    }

    createDefaultConfigurationFormGroup(
        config?: Partial<PersonalDocumentConfiguration | BusinessDocumentConfiguration>,
        documentTemplatesArray?: FormArray
    ): FormGroup {
        return this._formBuilder.group({
            active: [config?.active ?? false, [SetupFormFactory.validators.configurationActive()]],
            documentCategory: [config?.documentCategory, [Validators.required]],
            documentTemplates: documentTemplatesArray,
        });
    }

    /**
     * Creates an empty document types form array
     */
    createDocumentTypesWithDefaults(documentTypes: any[], target: "business" | "personal"): FormArray {
        if (!documentTypes || !documentTypes.length) {
            const formArray = this._formBuilder.array<FormGroup>([]);

            formArray.setValidators([SetupFormFactory.validators.documentVerificationTypes()]);

            return formArray;
        }

        return this.createDocumentTypesFormArray(documentTypes, target);
    }

    /**
     * Sets up all validators for a document verification type control
     * This method centralizes the validator setup logic used by both components
     */
    setupDocumentVerificationTypeValidators(documentVerificationTypeControl: FormGroup, target: "personal" | "business" = "personal"): void {
        // Add the document verification type validator
        documentVerificationTypeControl.setValidators([SetupFormFactory.validators.documentVerificationType()]);

        const configurationsArray = documentVerificationTypeControl.get("configurations") as FormArray;

        if (!configurationsArray) return;

        // Add configurations validator
        configurationsArray.setValidators([SetupFormFactory.validators.configurations()]);

        configurationsArray.controls.forEach((configuration, index) => {
            // Set default document categories for personal target
            if (target === "personal") {
                if (index === 0) configuration.get("documentCategory")?.setValue("license");
                if (index === 1) configuration.get("documentCategory")?.setValue("passport");
                if (index === 2) configuration.get("documentCategory")?.setValue("government_id");
            }

            // Add configuration active validator
            configuration.get("active")?.setValidators([SetupFormFactory.validators.configurationActive()]);

            const documentTemplates = configuration.get("documentTemplates") as FormArray;

            if (!documentTemplates) return;

            // Set up document templates validation
            this._setupDocumentTemplatesValidation(documentTemplates);
        });

        // Update the document verification type control
        documentVerificationTypeControl.updateValueAndValidity();
    }

    /**
     * Updates validators for a single configuration control based on its active state
     * This method can be called individually or as part of the full document types array update
     */
    updateConfigurationControlValidation(configurationControl: FormGroup): void {
        const isActive = configurationControl.get("active")?.value;
        const documentTemplatesArray = configurationControl.get("documentTemplates") as FormArray;

        if (isActive) {
            this._setupDocumentTemplatesValidation(documentTemplatesArray);
        } else {
            this._removeDocumentTemplatesValidation(documentTemplatesArray);
        }

        documentTemplatesArray?.updateValueAndValidity();
        configurationControl.updateValueAndValidity();
    }

    /**
     * Updates validators for active state - matches child component behavior
     * This method should be called after form creation to remove validators from inactive configurations
     */
    updateValidatorsForActiveState(documentTypesArray: FormArray): void {
        documentTypesArray.controls.forEach((documentTypeControl) => {
            const configurationsArray = documentTypeControl.get("configurations") as FormArray;

            if (!configurationsArray) return;

            configurationsArray.controls.forEach((configurationControl) => {
                this.updateConfigurationControlValidation(configurationControl as FormGroup);
            });

            documentTypeControl.updateValueAndValidity();
        });

        documentTypesArray.updateValueAndValidity();
    }
}
