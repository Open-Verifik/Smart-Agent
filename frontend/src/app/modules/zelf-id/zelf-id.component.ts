import { Component, ViewEncapsulation, OnInit, inject, signal } from '@angular/core';
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
          // or just grab the first valid one active.
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
  step = signal<'registration' | 'otp-email' | 'otp-phone' | 'complete'>('registration');
  appRegistration = signal<any>(null);

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

          this._determineNextStep(appReg);
        }
      },
      error: (err) => {
        console.error(err);
        this.saving.set(false);
        alert('Registration Failed: ' + (err.error?.message || err.message));
      },
    });
  }

  private _determineNextStep(appReg: any) {
    // Logic: Email Verification? -> Phone Verification? -> Complete
    const flow = this.projectFlow()!;
    const settings = flow.onboardingSettings.signUpForm!;

    // Check if Email needs verification (simple check: if email exists and gateway is not none)
    // For now, if we have an email in appReg, we verify it.
    // User prompt: "proceed to know if we need to validate... with an OTP"

    if (appReg.email && !appReg.emailValidation && settings.emailGateway !== 'none') {
      this.step.set('otp-email');
      // Trigger OTP send immediately
      this.sendOtp('email');
      return;
    }

    if (appReg.phone && !appReg.phoneValidation && settings.phoneGateway !== 'none') {
      this.step.set('otp-phone');
      this.sendOtp('phone');
      return;
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
        if (type === 'email') updatedReg.emailValidation = true; // Mark done
        if (type === 'phone') updatedReg.phoneValidation = true;

        this.appRegistration.set(updatedReg);

        // Proceed
        this._determineNextStep(updatedReg);
      },
      error: (err) => {
        this.saving.set(false);
        alert('Invalid Code');
      },
    });
  }
}
