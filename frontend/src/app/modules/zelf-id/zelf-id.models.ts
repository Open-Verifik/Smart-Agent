export class ProjectFlow {
  raw: any;
  onboardingSettings: OnboardingSettings;

  constructor(data: any) {
    this.raw = data;
    this.onboardingSettings = this._parseOnboardingSettings(data.onboardingSettings || {});
  }

  get _id(): string {
    return this.raw._id;
  }

  private _parseOnboardingSettings(settings: any): OnboardingSettings {
    return {
      steps: settings.steps || {
        signUpForm: 'mandatory',
        basicInformation: 'skip',
        document: 'optional',
        liveness: 'optional',
        form: 'skip',
      },
      signUpForm: {
        fullName: settings.signUpForm?.fullName ?? false,
        firstName: settings.signUpForm?.firstName ?? false,
        lastName: settings.signUpForm?.lastName ?? false,
        email: settings.signUpForm?.email ?? false,
        emailGateway: settings.signUpForm?.emailGateway || 'none',
        phone: settings.signUpForm?.phone ?? false,
        phoneGateway: settings.signUpForm?.phoneGateway || 'sms',
        extraFields: settings.signUpForm?.extraFields || [],
        showTermsAndConditions: settings.signUpForm?.showTermsAndConditions ?? false,
        showPrivacyNotice: settings.signUpForm?.showPrivacyNotice ?? false,
        fullNameStyle: settings.signUpForm?.fullNameStyle,
      },
      document: settings.document || {}, // Map fully if needed, for now passing through
      liveness: settings.liveness || {},
      basicInformation: settings.basicInformation || {},
    };
  }

  get isNameSeparated(): boolean {
    // Priority 1: Explicit style string
    if (this.onboardingSettings.signUpForm.fullNameStyle === 'separate') return true;
    if (this.onboardingSettings.signUpForm.fullNameStyle === 'together') return false;

    // Priority 2: Boolean flags (Legacy/Inferred)
    // If firstName AND lastName are true, it's separated
    if (
      this.onboardingSettings.signUpForm.firstName &&
      this.onboardingSettings.signUpForm.lastName
    ) {
      return true;
    }

    // Priority 3: Heuristic for ambiguous configs
    // If fullName is FALSE, but we are in a signup flow, we might default to separate names if implied?
    // But strictly, if fullName is true, it's together.
    if (this.onboardingSettings.signUpForm.fullName) return false;

    // Default to separate as a safe fallback if nothing is specified?
    // Or default to Together?
    // Based on user "fact", we favor separate if ambiguous.
    return true;
  }
}

export interface OnboardingSettings {
  steps: {
    signUpForm: 'mandatory' | 'optional' | 'skip';
    basicInformation: 'mandatory' | 'optional' | 'skip';
    document: 'mandatory' | 'optional' | 'skip';
    liveness: 'mandatory' | 'optional' | 'skip';
    form: 'mandatory' | 'optional' | 'skip';
  };
  signUpForm: {
    fullName: boolean;
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    emailGateway: string;
    phone: boolean;
    phoneGateway: string;
    extraFields: string[];
    showTermsAndConditions: boolean;
    showPrivacyNotice: boolean;
    fullNameStyle?: 'separate' | 'together';
  };
  document: any;
  liveness: any;
  basicInformation: any;
}
