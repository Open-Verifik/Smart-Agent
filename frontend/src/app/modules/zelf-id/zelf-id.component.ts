import { Component, ViewEncapsulation, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { VerifikApiService } from 'app/core/verifik/verifik-api.service';
import { ProjectFlow } from './zelf-id.models';

@Component({
  selector: 'zelf-id',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  templateUrl: './zelf-id.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ZelfIdComponent implements OnInit {
  private _verifikApi = inject(VerifikApiService);
  private _formBuilder = inject(FormBuilder);

  projectId = '6266193db77ccc8111730c90';

  // Signals
  project = signal<any>(null);
  projectFlow = signal<ProjectFlow | null>(null);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  // Form
  signUpForm: FormGroup | undefined;
  formFields = signal<string[]>([]);
  saving = signal<boolean>(false);

  ngOnInit() {
    // Check if we already have a token for Zelf ID?
    // For now, let's always load project to reset or continue.
    this.loadProject();
  }

  countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸' },
    { code: '+57', country: 'CO', flag: '🇨🇴' },
    { code: '+52', country: 'MX', flag: '🇲🇽' },
    { code: '+507', country: 'PA', flag: '🇵🇦' },
    { code: '+56', country: 'CL', flag: '🇨🇱' },
    { code: '+1', country: 'CA', flag: '🇨🇦' },
  ];

  loadProject() {
    this.loading.set(true);
    this._verifikApi.getProject(this.projectId).subscribe({
      next: (res) => {
        const projectData = res.data;
        this.project.set(projectData);

        if (projectData.projectFlows) {
          // Filter active flows and Sort by Version Descending (Highest First)
          const activeFlows = projectData.projectFlows
            .filter((f: any) => f.status === 'active')
            .sort((a: any, b: any) => (b.version || 0) - (a.version || 0));

          // Strategy: Find best candidate flow from sorted list
          // Prioritize 'onboarding' flow, then 'default', then take the first active one if generic
          let flowData = activeFlows.find((f: any) => f.type === 'onboarding');

          if (!flowData) {
            flowData = activeFlows.find((f: any) => f.type === 'default');
          }

          // Fallback: Check if there's a login flow that might be acting as onboarding in some configs,
          // or just grab the first validated one active.
          if (!flowData) {
            flowData = activeFlows.find((f: any) => f.type !== 'login');
          }

          // Double Fallback: use *any* active flow (e.g. only 'login' exists)
          if (!flowData && activeFlows.length > 0) {
            flowData = activeFlows[0];
          }

          if (flowData) {
            const flow = new ProjectFlow(flowData);
            this.projectFlow.set(flow);
            this.initForm(flow);
            // Check state
            this.checkForExistingRegistration();
          } else {
            this.error.set('No active Zelf ID flow found.');
          }
        }

        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('Failed to load Zelf ID configuration.');
        this.loading.set(false);
      },
    });
  }

  initForm(flow: ProjectFlow) {
    const settings = flow.onboardingSettings.signUpForm;
    console.log('Zelf ID Flow Configuration:', settings);
    console.log('Is Name Separated?', flow.isNameSeparated);

    const fields: any = {};
    const activeFields: string[] = [];

    // Name Logic using Class Property
    if (flow.isNameSeparated) {
      fields['firstName'] = [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-ZÀ-ÖØ-öø-ÿ\\s]+$'),
        ],
      ];
      fields['lastName'] = [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-ZÀ-ÖØ-öø-ÿ\\s]+$'),
        ],
      ];
      activeFields.push('firstName', 'lastName');
    } else {
      fields['fullName'] = [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-ZÀ-ÖØ-öø-ÿ\\s]+$'),
        ],
      ];
      activeFields.push('fullName');
    }

    // Email
    if (settings.email !== false) {
      fields['email'] = [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ],
      ];
      activeFields.push('email');
    }

    // Phone
    if (settings.phone !== false) {
      fields['phone'] = ['', [Validators.required, Validators.pattern(/^\d+$/)]];
      fields['countryCode'] = ['+1', [Validators.required]];
      activeFields.push('phone');
    }

    // Terms
    if (settings.showTermsAndConditions || settings.showPrivacyNotice) {
      fields['agreements'] = [false, [Validators.requiredTrue]];
      activeFields.push('agreements');
    }

    this.signUpForm = this._formBuilder.group(fields);
    this.formFields.set(activeFields);
  }

  // State
  step = signal<
    'registration' | 'otp-email' | 'otp-phone' | 'basic-info' | 'document' | 'liveness' | 'complete'
  >('registration');
  appRegistration = signal<any>(null);

  // Document State
  countries = signal<any[]>([]);
  templates = signal<any[]>([]);
  filteredTemplates = signal<any[]>([]);
  selectedCountry = signal<string>('');
  selectedTemplate = signal<any>(null);

  progressSteps = computed(() => {
    const flow = this.projectFlow();
    const appReg = this.appRegistration();
    const currentStep = this.step();
    if (!flow) return [];

    const settings = flow.onboardingSettings;
    const steps: any[] = [];

    // 1. Sign Up
    const isRegistered = !!appReg;
    steps.push({
      label: 'Account',
      status: isRegistered ? 'completed' : currentStep === 'registration' ? 'current' : 'pending',
    });

    // 2. Email
    if (settings.signUpForm.emailGateway !== 'none' && settings.signUpForm.email !== false) {
      const isValidated = appReg?.emailValidation?.status === 'validated';
      steps.push({
        label: 'Email',
        status: isValidated ? 'completed' : currentStep === 'otp-email' ? 'current' : 'pending',
      });
    }

    // 3. Phone
    if (settings.signUpForm.phoneGateway !== 'none' && settings.signUpForm.phone !== false) {
      const isValidated = appReg?.phoneValidation?.status === 'validated';
      steps.push({
        label: 'Phone',
        status: isValidated ? 'completed' : currentStep === 'otp-phone' ? 'current' : 'pending',
      });
    }

    // 4. Basic Info
    if (settings.steps.basicInformation !== 'skip') {
      const isValidated = appReg?.informationValidation?.status === 'validated';
      steps.push({
        label: 'Info',
        status: isValidated ? 'completed' : currentStep === 'basic-info' ? 'current' : 'pending',
      });
    }

    // 5. Document
    if (settings.steps.document !== 'skip') {
      const isValidated = appReg?.documentValidation?.status === 'validated';
      steps.push({
        label: 'Identity',
        status: isValidated ? 'completed' : currentStep === 'document' ? 'current' : 'pending',
      });
    }

    // 6. Liveness
    if (settings.steps.liveness !== 'skip') {
      const isValidated = appReg?.biometricValidation?.status === 'validated';
      steps.push({
        label: 'Selfie',
        status: isValidated ? 'completed' : currentStep === 'liveness' ? 'current' : 'pending',
      });
    }

    return steps;
  });

  loadDocumentConfig() {
    const flow = this.projectFlow();
    if (!flow) return;

    const allowed = flow.raw.allowedCountries || [];
    const token = localStorage.getItem('appRegistrationToken');
    if (!token) return;

    this._verifikApi.getPromptTemplates(token).subscribe({
      next: (res) => {
        const allTemplates = res.data || [];

        // Filter by allowed countries if specified
        let relevantTemplates = allTemplates;
        if (allowed.length > 0) {
          relevantTemplates = allTemplates.filter((t: any) => allowed.includes(t.country));
        }

        this.templates.set(relevantTemplates);

        // Extract unique countries
        const uniqueCountries = [...new Set(relevantTemplates.map((t: any) => t.country))];

        // Create country options
        const countryOptions = uniqueCountries.map((code) => ({
          code,
          name: this.getCountryName(code as string),
        }));

        this.countries.set(countryOptions);

        // Auto-select if only one
        if (countryOptions.length === 1) {
          this.selectCountry(countryOptions[0].code as string);
        }
      },
      error: (err) => console.warn('Failed to load templates', err),
    });
  }

  getCountryName(code: string) {
    try {
      const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
      return regionNames.of(code);
    } catch (e) {
      return code;
    }
  }

  selectCountry(code: string) {
    this.selectedCountry.set(code);
    const countryTemplates = this.templates().filter((t) => t.country === code);
    this.filteredTemplates.set(countryTemplates);

    if (countryTemplates.length === 1) {
      this.selectedTemplate.set(countryTemplates[0]);
    } else {
      this.selectedTemplate.set(null);
    }
  }

  selectTemplate(template: any) {
    this.selectedTemplate.set(template);
  }

  getFlagEmoji(countryCode: string) {
    if (!countryCode || countryCode.length !== 2 || !/^[a-zA-Z]{2}$/.test(countryCode)) return '';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  getDocumentIcon(type: any) {
    const name = (typeof type === 'string' ? type : type?.name || '').toLowerCase();
    if (name.includes('passport')) return 'heroicons_outline:book-open';
    if (name.includes('license') || name.includes('driving'))
      return 'heroicons_outline:identification';
    return 'heroicons_outline:identification';
  }

  handleFile(event: any, side: 'front' | 'back') {
    // TODO: Implement upload logic
    console.log('File selected', side, event.target.files[0]);
  }

  // OTP Form
  otpForm = this._formBuilder.group({
    code: ['', [Validators.required, Validators.minLength(4)]],
  });

  submitForm() {
    if (this.signUpForm?.invalid) return;

    this.saving.set(true);
    const formValue = this.signUpForm!.value;

    const payload = {
      project: this.project()._id,
      projectFlow: this.projectFlow()!._id,
      ...formValue,
    };

    this._verifikApi.createAppRegistration(this.projectId, payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        const data = res.data; // Wrapper contains appRegistration, token
        const token = data.token;
        const appReg = data.appRegistration;

        if (token && appReg) {
          localStorage.setItem('appRegistrationToken', token);
          this.appRegistration.set(appReg);

          this._determineNextStep(appReg, true);
        }
      },
      error: (err) => {
        console.error(err);
        this.saving.set(false);
        alert('Registration Failed: ' + (err.error?.message || err.message));
      },
    });
  }

  checkForExistingRegistration() {
    const token = localStorage.getItem('appRegistrationToken');
    if (!token) return;

    this._verifikApi
      .getAppRegistration(token, [
        'emailValidation',
        'phoneValidation',
        'documentValidation',
        'biometricValidation',
        'informationValidation',
      ])
      .subscribe({
        next: (res) => {
          const appReg = res.data;
          if (appReg) {
            console.log('Restored App Registration:', appReg);
            this.appRegistration.set(appReg);
            // If we restored, we assume user is coming back. We might not want to auto-spam OTP unless they request it.
            // BUT, determining next step sets the step UI. If step is 'otp-email', they see the OTP input.
            this._determineNextStep(appReg, false);
          }
        },
        error: (err) => {
          console.warn('Existing registration token invalidated or expired', err);
          localStorage.removeItem('appRegistrationToken');
        },
      });
  }

  private _determineNextStep(appReg: any, autoSendOtp = true) {
    // Logic: Email Verification? -> Phone Verification? -> Complete
    const flow = this.projectFlow()!;
    const settings = flow.onboardingSettings.signUpForm;

    const isExpired = (val: any) => {
      if (!val) return true;
      // Check time difference (allow up to 2 minutes)
      const date = new Date(val.updatedAt || val.createdAt);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffMins = diffMs / 60000; // minutes
      return diffMins > 2;
    };

    // 1. Email Verification
    if (appReg.email && settings.emailGateway !== 'none') {
      const emailVal = appReg.emailValidation;
      // If validatedation doesn't exist OR it is not validated yet
      if (!emailVal || emailVal.status !== 'validated') {
        this.step.set('otp-email');

        // Determine if we should send/resend OTP:
        // - If no validatedation exists -> Send
        // - If validatedation exists but is expired (> 2 mins) -> Resend
        // - If validatedation exists and is fresh -> Do nothing (User inputs code)
        const expired = isExpired(emailVal);
        if (autoSendOtp && (!emailVal || expired)) {
          this.sendOtp('email');
        }
        return;
      }
    }

    // 2. Phone Verification
    if (appReg.phone && settings.phoneGateway !== 'none') {
      const phoneVal = appReg.phoneValidation;
      if (!phoneVal || phoneVal.status !== 'validated') {
        this.step.set('otp-phone');

        const expired = isExpired(phoneVal);
        if (autoSendOtp && (!phoneVal || expired)) {
          this.sendOtp('phone');
        }
        return;
      }
    }

    const steps = flow.onboardingSettings.steps;

    // 3. Basic Information
    if (steps?.basicInformation !== 'skip') {
      const infoVal = appReg.informationValidation;
      // Check if validated. If string, it might mean populate failed/not populated, but we requested it.
      // If it's done, it should be an object with status 'validated'.
      if (!infoVal || infoVal.status !== 'validated') {
        this.step.set('basic-info');
        return;
      }
    }

    // 4. Document
    if (steps?.document !== 'skip') {
      const docVal = appReg.documentValidation;
      if (!docVal || docVal.status !== 'validated') {
        this.step.set('document');
        if (this.countries().length === 0) {
          this.loadDocumentConfig();
        }
        return;
      }
    }

    // 5. Liveness
    if (steps?.liveness !== 'skip') {
      const bioVal = appReg.biometricValidation;
      if (!bioVal || bioVal.status !== 'validated') {
        this.step.set('liveness');
        return;
      }
    }

    this.step.set('complete');
  }

  sendOtp(type: 'email' | 'phone') {
    this.loading.set(true);
    const appReg = this.appRegistration();
    const token = localStorage.getItem('appRegistrationToken') || '';

    const data = {
      project: this.project()._id,
      type,
      email: appReg.email,
      phone: appReg.phone,
      countryCode: appReg.countryCode,
    };

    this._verifikApi.sendOtp(token, data).subscribe({
      next: () => {
        this.loading.set(false);
        // Otp sent, user waits to input code
        this.otpForm.reset();
      },
      error: (err) => {
        this.loading.set(false);
        console.error('OTP Send Error', err);
        // alert('Failed to send verification code.');
      },
    });
  }

  verifyOtp() {
    if (this.otpForm.invalid) return;

    this.saving.set(true);
    const code = this.otpForm.get('code')?.value;
    const type: 'email' | 'phone' = this.step() === 'otp-email' ? 'email' : 'phone';
    const appReg = this.appRegistration();
    const flowId = this.projectFlow()!._id;
    const token = localStorage.getItem('appRegistrationToken') || '';

    const data = {
      project: this.project()._id,
      projectFlow: flowId,
      type,
      email: appReg.email,
      phone: appReg.phone,
      countryCode: appReg.countryCode,
      code,
    };

    this._verifikApi.verifyOtp(token, data).subscribe({
      next: (res) => {
        this.saving.set(false);
        // Update local state Validation
        const updatedReg = { ...this.appRegistration() };
        if (type === 'email') updatedReg.emailValidation = { status: 'valid' }; // Mock update
        if (type === 'phone') updatedReg.phoneValidation = { status: 'valid' };

        this.appRegistration.set(updatedReg);

        // Proceed
        this._determineNextStep(updatedReg, true);
      },
      error: (err) => {
        this.saving.set(false);
        console.error('Verify OTP Error', err);
        const error = err.error || {};
        if (
          error.code === 'NotFound' ||
          error.message?.includes('not_found') ||
          // Also check specific backend messages
          error.message === 'email_validation_not_found' ||
          error.message === 'phone_validation_not_found'
        ) {
          alert('Verification code expired or not found. Sending a new one...');
          this.sendOtp(type);
        } else {
          alert('Invalid Code');
        }
      },
    });
  }
}
