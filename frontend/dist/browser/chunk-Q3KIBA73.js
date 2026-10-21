import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-FJ4CXUS4.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-YJBIUVPR.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-FTSXFXXU.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-2HNEWPD3.js";
import {
  CountryService
} from "./chunk-4U26N45P.js";
import {
  MatOption
} from "./chunk-RM2644J3.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-AICPTZP5.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix
} from "./chunk-HWNQWMK7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule
} from "./chunk-M5KDIZH5.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-R5W3A6HI.js";
import {
  environment
} from "./chunk-PMCYMBOC.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DestroyRef,
  EMPTY,
  ElementRef,
  HttpClient,
  Injectable,
  Input,
  NgClass,
  catchError,
  expand,
  inject,
  map,
  reduce,
  setClassMetadata,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNPEHISK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/core/constants/phone-country-codes.constant.ts
var DEFAULT_PHONE_COUNTRY_CODE = "+57";
var PHONE_COUNTRY_CODES = [
  {
    code: "+1",
    name: "United States"
  },
  {
    code: "+52",
    name: "Mexico"
  },
  {
    code: "+1-787",
    name: "Puerto Rico"
  },
  {
    code: "+1-939",
    name: "Puerto Rico"
  },
  {
    code: "+1-868",
    name: "Trinidad and Tobago"
  },
  {
    code: "+502",
    name: "Guatemala"
  },
  {
    code: "+503",
    name: "El Salvador"
  },
  {
    code: "+504",
    name: "Honduras"
  },
  {
    code: "+505",
    name: "Nicaragua"
  },
  {
    code: "+506",
    name: "Costa Rica"
  },
  {
    code: "+507",
    name: "Panama"
  },
  {
    code: "+54",
    name: "Argentina"
  },
  {
    code: "+55",
    name: "Brazil"
  },
  {
    code: "+56",
    name: "Chile"
  },
  {
    code: "+57",
    name: "Colombia"
  },
  {
    code: "+593",
    name: "Ecuador"
  },
  {
    code: "+595",
    name: "Paraguay"
  },
  {
    code: "+51",
    name: "Peru"
  },
  {
    code: "+598",
    name: "Uruguay"
  },
  {
    code: "+58",
    name: "Venezuela"
  },
  {
    code: "+591",
    name: "Bolivia"
  },
  {
    code: "+592",
    name: "Guyana"
  },
  {
    code: "+597",
    name: "Suriname"
  },
  {
    code: "+44",
    name: "United Kingdom"
  },
  {
    code: "+33",
    name: "France"
  },
  {
    code: "+49",
    name: "Germany"
  },
  {
    code: "+39",
    name: "Italy"
  },
  {
    code: "+34",
    name: "Spain"
  },
  {
    code: "+31",
    name: "Netherlands"
  },
  {
    code: "+46",
    name: "Sweden"
  },
  {
    code: "+47",
    name: "Norway"
  },
  {
    code: "+45",
    name: "Denmark"
  },
  {
    code: "+358",
    name: "Finland"
  },
  {
    code: "+41",
    name: "Switzerland"
  },
  {
    code: "+43",
    name: "Austria"
  },
  {
    code: "+32",
    name: "Belgium"
  },
  {
    code: "+351",
    name: "Portugal"
  },
  {
    code: "+353",
    name: "Ireland"
  },
  {
    code: "+7",
    name: "Russia"
  },
  {
    code: "+48",
    name: "Poland"
  },
  {
    code: "+420",
    name: "Czech Republic"
  },
  {
    code: "+421",
    name: "Slovakia"
  },
  {
    code: "+36",
    name: "Hungary"
  },
  {
    code: "+40",
    name: "Romania"
  },
  {
    code: "+359",
    name: "Bulgaria"
  },
  {
    code: "+30",
    name: "Greece"
  },
  {
    code: "+385",
    name: "Croatia"
  },
  {
    code: "+386",
    name: "Slovenia"
  },
  {
    code: "+387",
    name: "Bosnia and Herzegovina"
  },
  {
    code: "+381",
    name: "Serbia"
  },
  {
    code: "+382",
    name: "Montenegro"
  },
  {
    code: "+389",
    name: "North Macedonia"
  },
  {
    code: "+355",
    name: "Albania"
  },
  {
    code: "+380",
    name: "Ukraine"
  },
  {
    code: "+375",
    name: "Belarus"
  },
  {
    code: "+373",
    name: "Moldova"
  },
  {
    code: "+370",
    name: "Lithuania"
  },
  {
    code: "+371",
    name: "Latvia"
  },
  {
    code: "+372",
    name: "Estonia"
  },
  {
    code: "+354",
    name: "Iceland"
  },
  {
    code: "+352",
    name: "Luxembourg"
  },
  {
    code: "+356",
    name: "Malta"
  },
  {
    code: "+357",
    name: "Cyprus"
  },
  {
    code: "+86",
    name: "China"
  },
  {
    code: "+81",
    name: "Japan"
  },
  {
    code: "+82",
    name: "South Korea"
  },
  {
    code: "+91",
    name: "India"
  },
  {
    code: "+62",
    name: "Indonesia"
  },
  {
    code: "+60",
    name: "Malaysia"
  },
  {
    code: "+66",
    name: "Thailand"
  },
  {
    code: "+63",
    name: "Philippines"
  },
  {
    code: "+92",
    name: "Pakistan"
  },
  {
    code: "+65",
    name: "Singapore"
  },
  {
    code: "+880",
    name: "Bangladesh"
  },
  {
    code: "+94",
    name: "Sri Lanka"
  },
  {
    code: "+977",
    name: "Nepal"
  },
  {
    code: "+93",
    name: "Afghanistan"
  },
  {
    code: "+98",
    name: "Iran"
  },
  {
    code: "+964",
    name: "Iraq"
  },
  {
    code: "+90",
    name: "Turkey"
  },
  {
    code: "+971",
    name: "United Arab Emirates"
  },
  {
    code: "+966",
    name: "Saudi Arabia"
  },
  {
    code: "+974",
    name: "Qatar"
  },
  {
    code: "+973",
    name: "Bahrain"
  },
  {
    code: "+965",
    name: "Kuwait"
  },
  {
    code: "+968",
    name: "Oman"
  },
  {
    code: "+972",
    name: "Israel"
  },
  {
    code: "+970",
    name: "Palestine"
  },
  {
    code: "+961",
    name: "Lebanon"
  },
  {
    code: "+962",
    name: "Jordan"
  },
  {
    code: "+963",
    name: "Syria"
  },
  {
    code: "+967",
    name: "Yemen"
  },
  {
    code: "+976",
    name: "Mongolia"
  },
  {
    code: "+7",
    name: "Kazakhstan"
  },
  {
    code: "+998",
    name: "Uzbekistan"
  },
  {
    code: "+996",
    name: "Kyrgyzstan"
  },
  {
    code: "+992",
    name: "Tajikistan"
  },
  {
    code: "+993",
    name: "Turkmenistan"
  },
  {
    code: "+994",
    name: "Azerbaijan"
  },
  {
    code: "+374",
    name: "Armenia"
  },
  {
    code: "+995",
    name: "Georgia"
  },
  {
    code: "+84",
    name: "Vietnam"
  },
  {
    code: "+855",
    name: "Cambodia"
  },
  {
    code: "+856",
    name: "Laos"
  },
  {
    code: "+95",
    name: "Myanmar"
  },
  {
    code: "+673",
    name: "Brunei"
  },
  {
    code: "+670",
    name: "Timor-Leste"
  },
  {
    code: "+886",
    name: "Taiwan"
  },
  {
    code: "+852",
    name: "Hong Kong"
  },
  {
    code: "+27",
    name: "South Africa"
  },
  {
    code: "+234",
    name: "Nigeria"
  },
  {
    code: "+20",
    name: "Egypt"
  },
  {
    code: "+254",
    name: "Kenya"
  },
  {
    code: "+255",
    name: "Tanzania"
  },
  {
    code: "+256",
    name: "Uganda"
  },
  {
    code: "+233",
    name: "Ghana"
  },
  {
    code: "+251",
    name: "Ethiopia"
  },
  {
    code: "+213",
    name: "Algeria"
  },
  {
    code: "+212",
    name: "Morocco"
  },
  {
    code: "+216",
    name: "Tunisia"
  },
  {
    code: "+218",
    name: "Libya"
  },
  {
    code: "+249",
    name: "Sudan"
  },
  {
    code: "+237",
    name: "Cameroon"
  },
  {
    code: "+225",
    name: "Ivory Coast"
  },
  {
    code: "+221",
    name: "Senegal"
  },
  {
    code: "+223",
    name: "Mali"
  },
  {
    code: "+226",
    name: "Burkina Faso"
  },
  {
    code: "+227",
    name: "Niger"
  },
  {
    code: "+228",
    name: "Togo"
  },
  {
    code: "+229",
    name: "Benin"
  },
  {
    code: "+220",
    name: "Gambia"
  },
  {
    code: "+245",
    name: "Guinea-Bissau"
  },
  {
    code: "+224",
    name: "Guinea"
  },
  {
    code: "+238",
    name: "Cape Verde"
  },
  {
    code: "+239",
    name: "Sao Tome and Principe"
  },
  {
    code: "+240",
    name: "Equatorial Guinea"
  },
  {
    code: "+241",
    name: "Gabon"
  },
  {
    code: "+242",
    name: "Congo"
  },
  {
    code: "+243",
    name: "Democratic Republic of the Congo"
  },
  {
    code: "+244",
    name: "Angola"
  },
  {
    code: "+235",
    name: "Chad"
  },
  {
    code: "+236",
    name: "Central African Republic"
  },
  {
    code: "+250",
    name: "Rwanda"
  },
  {
    code: "+257",
    name: "Burundi"
  },
  {
    code: "+258",
    name: "Mozambique"
  },
  {
    code: "+260",
    name: "Zambia"
  },
  {
    code: "+265",
    name: "Malawi"
  },
  {
    code: "+267",
    name: "Botswana"
  },
  {
    code: "+264",
    name: "Namibia"
  },
  {
    code: "+268",
    name: "Eswatini"
  },
  {
    code: "+266",
    name: "Lesotho"
  },
  {
    code: "+261",
    name: "Madagascar"
  },
  {
    code: "+230",
    name: "Mauritius"
  },
  {
    code: "+248",
    name: "Seychelles"
  },
  {
    code: "+269",
    name: "Comoros"
  },
  {
    code: "+291",
    name: "Eritrea"
  },
  {
    code: "+253",
    name: "Djibouti"
  },
  {
    code: "+252",
    name: "Somalia"
  },
  {
    code: "+232",
    name: "Sierra Leone"
  },
  {
    code: "+231",
    name: "Liberia"
  },
  {
    code: "+61",
    name: "Australia"
  },
  {
    code: "+64",
    name: "New Zealand"
  },
  {
    code: "+679",
    name: "Fiji"
  },
  {
    code: "+675",
    name: "Papua New Guinea"
  },
  {
    code: "+677",
    name: "Solomon Islands"
  },
  {
    code: "+678",
    name: "Vanuatu"
  },
  {
    code: "+685",
    name: "Samoa"
  },
  {
    code: "+676",
    name: "Tonga"
  },
  {
    code: "+688",
    name: "Tuvalu"
  },
  {
    code: "+686",
    name: "Kiribati"
  },
  {
    code: "+684",
    name: "American Samoa"
  },
  {
    code: "+687",
    name: "New Caledonia"
  },
  {
    code: "+689",
    name: "French Polynesia"
  }
];

// src/app/modules/smart-enroll/projects/setup/setup.service.ts
var SetupService = class _SetupService {
  constructor() {
    this._http = inject(HttpClient);
    this._projectId$ = new BehaviorSubject("new");
    this._project$ = new BehaviorSubject(null);
    this._stepIndex$ = new BehaviorSubject(0);
    this._stepIndex = 0;
    this._projectId = "new";
    this._project = null;
    this.project = this.getDefaultProject();
    this.projectId = "new";
    this.stepIndex = 0;
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  get baseUrl() {
    return `${this.apiUrl}/v3`;
  }
  get authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  // ---------------------------------------------------------------------------
  // Form key arrays — mirrored from verifik-client-panel projects-smart-enroll.service
  // ---------------------------------------------------------------------------
  get basicSetupFormKeys() {
    return [
      "name",
      "allowedCountries",
      "contactEmail",
      "defaultLanguage",
      "privacyUrl",
      "termsAndConditionsUrl",
      "dataProtection.name",
      "dataProtection.email",
      "dataProtection.address",
      "dataProtection.address2",
      "dataProtection.country",
      "dataProtection.postalCode",
      "dataProtection.city"
    ];
  }
  get businessFormKeys() {
    return [
      "projectFlow.steps.businessVerification",
      "projectFlow.business",
      "projectFlow.business.attemptLimit",
      "projectFlow.business.documentTypes",
      "projectFlow.business.screening"
    ];
  }
  get businessPreviewViews() {
    return {
      0: [],
      1: ["signup"],
      2: ["document-scan", "document-upload", "document-result"],
      3: ["signup", "document-scan", "document-upload", "document-result", "liveness", "liveness-result"],
      4: [],
      5: ["signup", "document-scan", "document-upload", "document-result", "liveness", "liveness-result"]
    };
  }
  get businessSteps() {
    return [
      "smartEnrollProjects.setup.steps.basic_setup",
      "smartEnrollProjects.setup.steps.signup_form",
      "smartEnrollProjects.setup.steps.business",
      "smartEnrollProjects.setup.steps.representatives",
      "smartEnrollProjects.setup.steps.integrations",
      "smartEnrollProjects.setup.steps.user_interface"
    ];
  }
  get businessTargetFormKeys() {
    return {
      0: this.basicSetupFormKeys,
      1: this.signUpFormFormBusinessKeys,
      2: this.businessFormKeys,
      3: this.representativesFormKeys,
      4: this.integrationFormKeys,
      5: this.userInterfaceFormKeys
    };
  }
  get defaultBranding() {
    return {
      backgroundColor: "#ffffff",
      buttonColor: "#3f3f46",
      buttonTextColor: "#ffffff",
      image: "",
      imageBackgroundColor: "#ffffff",
      logo: "",
      textColor: "#3f3f46",
      titleColor: "#3f3f46"
    };
  }
  get defaultFormKeys() {
    return {
      0: this.basicSetupFormKeys,
      1: this.signUpFormFormPersonalKeys
    };
  }
  get documentsFormKeys() {
    return [
      "projectFlow.steps.document",
      "projectFlow.documents",
      "projectFlow.documents.attemptLimit",
      "projectFlow.documents.documentTypes",
      "projectFlow.documents.screening",
      "projectFlow.documents.verificationMethods"
    ];
  }
  get initialSteps() {
    return [
      "smartEnrollProjects.setup.steps.basic_setup",
      "smartEnrollProjects.setup.steps.signup_form"
    ];
  }
  get integrationFormKeys() {
    return [
      "projectFlow.integrations.redirectUrl",
      "projectFlow.integrations.webhook",
      "projectFlow.integrations.apiTestType",
      "projectFlow.integrations.apiTestValue",
      "projectFlow.integrations.apiUrl",
      "projectFlow.integrations.source",
      "projectFlow.integrations.strategy"
    ];
  }
  get livenessFormKeys() {
    return [
      "projectFlow.steps.liveness",
      "projectFlow.liveness.attemptLimit",
      "projectFlow.liveness.minScore",
      "projectFlow.liveness.searchMinScore",
      "projectFlow.liveness.searchMode"
    ];
  }
  get personalPreviewViews() {
    return {
      0: [],
      1: ["signup"],
      2: ["document-scan", "document-upload", "document-result"],
      3: ["liveness", "liveness-result"],
      4: [],
      5: ["signup", "document-scan", "document-upload", "document-result", "liveness", "liveness-result"]
    };
  }
  get personalSteps() {
    return [
      "smartEnrollProjects.setup.steps.basic_setup",
      "smartEnrollProjects.setup.steps.signup_form",
      "smartEnrollProjects.setup.steps.documents",
      "smartEnrollProjects.setup.steps.liveness",
      "smartEnrollProjects.setup.steps.integrations",
      "smartEnrollProjects.setup.steps.user_interface"
    ];
  }
  get personalTargetFormKeys() {
    return {
      0: this.basicSetupFormKeys,
      1: this.signUpFormFormPersonalKeys,
      2: this.documentsFormKeys,
      3: this.livenessFormKeys,
      4: this.integrationFormKeys,
      5: this.userInterfaceFormKeys
    };
  }
  get representativesFormKeys() {
    return [
      "projectFlow.steps.legalRepresentative",
      "projectFlow.representatives.information.additionalFields",
      "projectFlow.representatives.information.allowAdditionalFields",
      "projectFlow.representatives.information.email",
      "projectFlow.representatives.information.emailGateway",
      "projectFlow.representatives.information.fullName",
      "projectFlow.representatives.information.fullNameStyle",
      "projectFlow.representatives.information.phone",
      "projectFlow.representatives.information.phoneGateway",
      "projectFlow.representatives.information.showPrivacyNotice",
      "projectFlow.representatives.information.showTermsAndConditions",
      "projectFlow.representatives.documents.attemptLimit",
      "projectFlow.representatives.documents.criminalHistoryVerification",
      "projectFlow.representatives.documents.documentTypes",
      "projectFlow.representatives.documents.informationVerification",
      "projectFlow.representatives.documents.screening",
      "projectFlow.representatives.documents.verificationMethods",
      "projectFlow.representatives.liveness.attemptLimit",
      "projectFlow.representatives.liveness.minScore",
      "projectFlow.representatives.liveness.searchMinScore",
      "projectFlow.representatives.liveness.searchMode"
    ];
  }
  get signUpFormFormBusinessKeys() {
    return [
      "target",
      "projectFlow.signUpForm.address",
      "projectFlow.signUpForm.businessBasicInfo",
      "projectFlow.signUpForm.businessBasicInfoStyle",
      "projectFlow.signUpForm.countryCode",
      "projectFlow.signUpForm.email",
      "projectFlow.signUpForm.emailGateway",
      "projectFlow.signUpForm.phone",
      "projectFlow.signUpForm.phoneGateway",
      "projectFlow.signUpForm.showPrivacyNotice",
      "projectFlow.signUpForm.showTermsAndConditions"
    ];
  }
  get signUpFormFormPersonalKeys() {
    return [
      "target",
      "projectFlow.signUpForm.additionalFields",
      "projectFlow.signUpForm.allowAdditionalFields",
      "projectFlow.signUpForm.countryCode",
      "projectFlow.signUpForm.email",
      "projectFlow.signUpForm.emailGateway",
      "projectFlow.signUpForm.fullName",
      "projectFlow.signUpForm.fullNameStyle",
      "projectFlow.signUpForm.phone",
      "projectFlow.signUpForm.phoneGateway",
      "projectFlow.signUpForm.showPrivacyNotice",
      "projectFlow.signUpForm.showTermsAndConditions"
    ];
  }
  get userInterfaceFormKeys() {
    return [
      "branding.backgroundColor",
      "branding.buttonColor",
      "branding.buttonTextColor",
      "branding.logo",
      "branding.imageBackgroundColor",
      "branding.image",
      "branding.titleColor",
      "branding.textColor"
    ];
  }
  // ---------------------------------------------------------------------------
  // Reactive shared state
  // ---------------------------------------------------------------------------
  get project() {
    return this._project;
  }
  set project(project) {
    this._project = project;
    this._project$.next(project);
  }
  get project$() {
    return this._project$.asObservable();
  }
  get projectId() {
    return this._projectId;
  }
  set projectId(id) {
    this._projectId = id;
    this._projectId$.next(id);
  }
  get projectId$() {
    return this._projectId$.asObservable();
  }
  get stepIndex() {
    return this._stepIndex;
  }
  set stepIndex(value) {
    this._stepIndex = value;
    this._stepIndex$.next(value);
  }
  get stepIndex$() {
    return this._stepIndex$.asObservable();
  }
  // ---------------------------------------------------------------------------
  // Default factories — match verifik-client-panel defaults
  // ---------------------------------------------------------------------------
  getDefaultProject() {
    return {
      allowedCountries: [],
      assignedCollection: "",
      client: "",
      collectionCode: "",
      contactEmail: "",
      currentStep: 0,
      defaultLanguage: "en",
      identifier: "",
      lastStep: 0,
      name: "",
      privacyUrl: "",
      projectMembers: [],
      status: "draft",
      target: "",
      termsAndConditionsUrl: "",
      dataProtection: {
        address: "",
        address2: "",
        city: "",
        country: "",
        email: "",
        name: "",
        postalCode: ""
      },
      branding: {
        backgroundColor: "",
        buttonColor: "",
        buttonTextColor: "",
        image: null,
        imageBackgroundColor: "",
        logo: null,
        textColor: "",
        titleColor: ""
      }
    };
  }
  getDefaultPersonalProjectFlow() {
    return {
      target: "personal",
      status: "draft",
      type: "onboarding",
      version: 3,
      client: "",
      project: "",
      documents: {
        attemptLimit: 3,
        criminalHistoryVerification: false,
        documentTypes: [],
        informationVerification: false,
        screening: false,
        verificationMethods: []
      },
      integrations: {
        redirectUrl: "",
        webhook: null
      },
      liveness: {
        attemptLimit: 3,
        minScore: 0.5,
        searchMinScore: 0.3,
        searchMode: "FAST"
      },
      signUpForm: {
        additionalFields: [],
        allowAdditionalFields: false,
        countryCode: "",
        email: false,
        emailGateway: "none",
        fullName: false,
        fullNameStyle: "together",
        phone: false,
        phoneGateway: "sms",
        showPrivacyNotice: false,
        showTermsAndConditions: false
      },
      steps: {
        document: "mandatory",
        liveness: "mandatory"
      }
    };
  }
  getDefaultBusinessProjectFlow() {
    return {
      target: "business",
      status: "draft",
      type: "onboarding",
      version: 3,
      client: "",
      project: "",
      business: {
        attemptLimit: 3,
        criminalHistoryVerification: false,
        documentTypes: [],
        informationVerification: false,
        screening: false
      },
      integrations: {
        redirectUrl: "",
        webhook: null
      },
      liveness: {
        attemptLimit: 3,
        minScore: 0.5,
        searchMinScore: 0.3,
        searchMode: "FAST"
      },
      representatives: {
        information: {
          additionalFields: [],
          allowAdditionalFields: false,
          email: false,
          emailGateway: "none",
          fullName: true,
          fullNameStyle: "separate",
          phone: false,
          phoneGateway: "whatsapp",
          showPrivacyNotice: true,
          showTermsAndConditions: true
        },
        documents: {
          attemptLimit: 3,
          criminalHistoryVerification: false,
          documentTypes: [],
          informationVerification: false,
          screening: false,
          verificationMethods: []
        },
        liveness: {
          attemptLimit: 3,
          minScore: 0.5,
          searchMinScore: 0.3,
          searchMode: "FAST"
        }
      },
      signUpForm: {
        additionalFields: [],
        allowAdditionalFields: false,
        address: false,
        countryCode: "",
        email: false,
        emailGateway: "mailgun",
        phone: false,
        phoneGateway: "sms",
        showPrivacyNotice: false,
        showTermsAndConditions: false,
        businessBasicInfo: true,
        businessBasicInfoStyle: "name_number"
      },
      steps: {
        businessVerification: false,
        legalRepresentative: "skip",
        liveness: "mandatory"
      }
    };
  }
  getDefaultProjectFlow() {
    return { target: "" };
  }
  // ---------------------------------------------------------------------------
  // HTTP — backend already supports v3 via project.route.js
  // ---------------------------------------------------------------------------
  _params(query) {
    const out = {};
    Object.entries(query || {}).forEach(([key, value]) => {
      if (value === void 0 || value === null)
        return;
      out[key] = Array.isArray(value) ? value.map(String) : String(value);
    });
    return out;
  }
  requestProjects(query = {}) {
    return this._http.get(`${this.baseUrl}/projects`, {
      params: this._params(query),
      headers: this.authHeaders
    }).pipe(catchError((err) => throwError(() => err)));
  }
  requestProject(id, query = {}) {
    return this._http.get(`${this.baseUrl}/projects/${id}`, {
      params: this._params(query),
      headers: this.authHeaders
    }).pipe(catchError((err) => throwError(() => err)));
  }
  createProject(data) {
    return this._http.post(`${this.baseUrl}/projects`, data, {
      headers: this.authHeaders
    }).pipe(catchError((err) => throwError(() => err)));
  }
  updateProject(id, data) {
    return this._http.put(`${this.baseUrl}/projects/${id}`, data, {
      headers: this.authHeaders
    }).pipe(catchError((err) => throwError(() => err)));
  }
  deleteProject(id, query = {}) {
    return this._http.delete(`${this.baseUrl}/projects/${id}`, {
      params: this._params(query),
      headers: this.authHeaders
    }).pipe(catchError((err) => throwError(() => err)));
  }
  /** Background-check feature catalog used by the documents step. */
  getAppFeatures(query = {}) {
    return this._http.get(`${this.apiUrl}/v2/app-features`, {
      params: this._params(query),
      headers: this.authHeaders
    }).pipe(catchError((err) => throwError(() => err)));
  }
  /**
   * Catalog of prompt templates used by the documents step to populate the
   * per-country, per-category list. Mirrors the call client-panel issues
   * (`{ in_country: [country, 'World'], populates: ['documentType'] }`).
   *
   * Backend MongoORM defaults to 20 rows per page; US state licenses alone
   * exceed that, so callers that need the full catalog should use
   * {@link listAllPromptTemplates}.
   */
  listPromptTemplates(query = {}) {
    return this._http.get(`${this.apiUrl}/v2/prompt-templates`, {
      params: this._params(query),
      headers: this.authHeaders
    }).pipe(catchError((err) => throwError(() => err)));
  }
  /**
   * Loads every approved prompt template matching the query by paging until
   * `page >= pages` (needed for countries with many license templates).
   */
  listAllPromptTemplates(query = {}) {
    const perPage = 200;
    const baseQuery = __spreadProps(__spreadValues({}, query), {
      perPage,
      sort: "name"
    });
    return this.listPromptTemplates(__spreadProps(__spreadValues({}, baseQuery), { page: 1 })).pipe(expand((response) => {
      const page = Number(response.page) || 1;
      const pages = Number(response.pages);
      const batch = response?.data?.length || 0;
      const hasMorePages = Number.isFinite(pages) ? page < pages : batch >= perPage;
      if (!hasMorePages)
        return EMPTY;
      return this.listPromptTemplates(__spreadProps(__spreadValues({}, baseQuery), { page: page + 1 }));
    }), reduce((acc, response) => {
      acc.push(...response?.data || []);
      return acc;
    }, []), map((data) => ({ data })), catchError((err) => throwError(() => err)));
  }
  /** List webhooks for the integrations step. */
  listWebhooks(query = {}) {
    return this._http.get(`${this.apiUrl}/v2/webhooks`, {
      params: this._params(query),
      headers: this.authHeaders
    }).pipe(catchError((err) => throwError(() => err)));
  }
  /** Test the redirect API endpoint with a payload chosen from the form. */
  testApi(apiUrl, apiTestType, apiTestValue) {
    return this._http.post(apiUrl, { [apiTestType]: apiTestValue }).pipe(catchError((err) => throwError(() => err)));
  }
  static {
    this.\u0275fac = function SetupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SetupService, factory: _SetupService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/modules/smart-enroll/projects/setup/setup-form.factory.ts
var SetupFormFactory = class _SetupFormFactory {
  constructor(_formBuilder) {
    this._formBuilder = _formBuilder;
  }
  static {
    this.validators = {
      additionalFields: () => {
        return (control) => {
          const allowAdditionalFields = control.value;
          const additionalFields = control?.parent?.get("additionalFields")?.value;
          if (allowAdditionalFields && (!additionalFields || additionalFields.length === 0)) {
            return { additionalFieldsRequired: true };
          }
          return null;
        };
      },
      documentsScreening: () => {
        return (group) => {
          const screening = group.get("screening")?.value;
          const criminalHistoryVerification = group.get("criminalHistoryVerification")?.value;
          const informationVerification = group.get("informationVerification")?.value;
          if (screening && !criminalHistoryVerification && !informationVerification) {
            return { screeningRequiresVerification: true };
          }
          return null;
        };
      },
      documentVerificationTypes: () => {
        return (control) => {
          const documentTypesArray = control;
          const errors = {};
          if (!documentTypesArray || documentTypesArray.length === 0)
            errors.atLeastOneDocumentVerificationTypeRequired = true;
          if (documentTypesArray && documentTypesArray.length > 0) {
            const countries = documentTypesArray.controls.map((typeControl) => typeControl.get("country")?.value).filter(Boolean);
            const uniqueCountries = new Set(countries);
            if (countries.length !== uniqueCountries.size)
              errors.duplicateCountriesNotAllowed = true;
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
      requiredIfDocumentStep: () => {
        return (control) => {
          if (!control)
            return null;
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
      atLeastOneContactMethod: () => {
        return (group) => {
          const email = group.get("email")?.value;
          const phone = group.get("phone")?.value;
          if (!email && !phone) {
            return { atLeastOneContactMethodRequired: true };
          }
          return null;
        };
      },
      promptTemplate: (target = "personal") => {
        return (control) => {
          if (target === "business") {
            return (control2) => !control2.value ? { promptTemplateRequired: true } : null;
          }
          return !control.value ? { promptTemplateRequired: true } : null;
        };
      },
      documentTemplates: () => {
        return (control) => {
          const documentTemplatesArray = control;
          const errors = {};
          if (!documentTemplatesArray || !documentTemplatesArray.length)
            return { atLeastOnePromptTemplateRequired: true };
          const nonEmptyTemplates = documentTemplatesArray.controls.filter((templateControl) => templateControl.get("promptTemplate")?.value);
          if (nonEmptyTemplates.length === 0)
            return { atLeastOnePromptTemplateRequired: true };
          const uniquePromptTemplateIds = new Set(nonEmptyTemplates.map((templateControl) => templateControl.get("promptTemplate")?.value));
          if (uniquePromptTemplateIds.size !== nonEmptyTemplates.length)
            errors.allPromptTemplatesMustBeUnique = true;
          if (nonEmptyTemplates.some((templateControl) => templateControl.invalid))
            errors.allPromptTemplatesMustBeSelected = true;
          return Object.keys(errors).length ? errors : null;
        };
      },
      configurationActive: () => {
        return (control) => {
          const isActive = control.value;
          if (!isActive)
            return null;
          const configurationGroup = control.parent;
          const documentTemplatesArray = configurationGroup?.get("documentTemplates");
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
      configurations: () => {
        return (control) => {
          const configurationsArray = control;
          const errors = {};
          if (!configurationsArray || !configurationsArray.length)
            errors.configurationsRequired = true;
          if (configurationsArray?.length) {
            const activeConfigurations = configurationsArray.controls.filter((configurationControl) => configurationControl.get("active")?.value === true);
            if (!activeConfigurations.length)
              errors.atLeastOneActiveConfigurationRequired = true;
            if (activeConfigurations.some((configurationControl) => configurationControl.invalid || configurationControl.get("documentTemplates")?.invalid || configurationControl.get("active")?.invalid)) {
              errors.allConfigurationsMustBeValid = true;
            }
          }
          return Object.keys(errors).length ? errors : null;
        };
      },
      documentVerificationType: () => {
        return (control) => {
          const documentVerificationTypeGroup = control;
          const country = documentVerificationTypeGroup.get("country")?.value;
          const configurations = documentVerificationTypeGroup.get("configurations");
          const errors = {};
          if (!country)
            errors.countryRequired = true;
          if (!configurations || configurations.invalid)
            errors.configurationsInvalid = true;
          return Object.keys(errors).length ? errors : null;
        };
      }
    };
  }
  /**
   * Sets up validators for document templates array and all its prompt template controls
   */
  _setupDocumentTemplatesValidation(documentTemplatesArray) {
    documentTemplatesArray?.setValidators([_SetupFormFactory.validators.documentTemplates()]);
    documentTemplatesArray?.controls.forEach((documentTemplate) => {
      documentTemplate.get("promptTemplate")?.setValidators([_SetupFormFactory.validators.promptTemplate()]);
      documentTemplate.get("promptTemplate")?.updateValueAndValidity();
      documentTemplate.updateValueAndValidity();
    });
  }
  /**
   * Removes validators from document templates array and all its prompt template controls
   */
  _removeDocumentTemplatesValidation(documentTemplatesArray) {
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
  addDocumentTypesWithDefaults(documentTypes, target = "personal") {
    const defaultConfigurationsArray = target === "business" ? this.createDefaultBusinessConfigurations() : this.createDefaultPersonalConfigurations();
    const defaultDocumentType = this._formBuilder.group({
      country: ["", [Validators.required]],
      configurations: defaultConfigurationsArray
    });
    documentTypes?.push(defaultDocumentType);
  }
  /**
   * Creates a document template FormGroup
   */
  createDocumentTemplateFormGroup(documentTemplate, target = "personal") {
    return this._formBuilder.group({
      promptTemplate: [documentTemplate?.promptTemplate || null, [_SetupFormFactory.validators.promptTemplate(target)]],
      required: [documentTemplate?.required || "optional", [Validators.required]]
    });
  }
  /**
   * Creates a document templates FormArray
   */
  createDocumentTemplatesFormArray(documentTemplates, target = "personal") {
    const templates = documentTemplates?.map((template) => this.createDocumentTemplateFormGroup(template, target)) || [];
    const formArray = this._formBuilder.array(templates, [Validators.required]);
    formArray.setValidators([_SetupFormFactory.validators.documentTemplates()]);
    return formArray;
  }
  /**
   * Creates a configuration FormGroup
   */
  createConfigurationFormGroup(config, target = "personal") {
    const documentTemplatesArray = this.createDocumentTemplatesFormArray(config?.documentTemplates, target);
    return this._formBuilder.group({
      active: [config?.active ?? false, [_SetupFormFactory.validators.configurationActive()]],
      documentCategory: [config?.documentCategory, [Validators.required]],
      documentTemplates: documentTemplatesArray
    });
  }
  /**
   * Creates a configurations FormArray
   */
  createConfigurationsFormArray(configurations, target = "personal") {
    const configs = configurations?.map((config) => this.createConfigurationFormGroup(config, target)) || [];
    const formArray = this._formBuilder.array(configs);
    formArray.setValidators([_SetupFormFactory.validators.configurations()]);
    return formArray;
  }
  /**
   * Creates a document type FormGroup
   */
  createDocumentTypeFormGroup(documentType, target = "personal") {
    const configurationsArray = this.createConfigurationsFormArray(documentType?.configurations, target);
    const formGroup = this._formBuilder.group({
      country: [documentType?.country || "", [Validators.required]],
      configurations: configurationsArray
    });
    formGroup.setValidators([_SetupFormFactory.validators.documentVerificationType()]);
    return formGroup;
  }
  /**
   * Creates a document types FormArray
   */
  createDocumentTypesFormArray(documentTypes, target = "personal") {
    const types = documentTypes?.map((docType) => this.createDocumentTypeFormGroup(docType, target)) || [];
    const formArray = this._formBuilder.array(types);
    formArray.setValidators([_SetupFormFactory.validators.documentVerificationTypes()]);
    return formArray;
  }
  /**
   * Creates default personal configurations
   */
  createDefaultPersonalConfigurations() {
    const configurationsArray = this._formBuilder.array([]);
    const defaultConfigs = [
      { documentCategory: "government_id", active: false, documentTemplates: [{ promptTemplate: null }] },
      { documentCategory: "license", active: false, documentTemplates: [{ promptTemplate: null }] },
      { documentCategory: "passport", active: false, documentTemplates: [{ promptTemplate: null }] }
    ];
    defaultConfigs.forEach((config) => {
      const documentTemplatesArray = this.createDocumentTemplatesFormArray(config?.documentTemplates);
      const configurationFormGroup = this.createDefaultConfigurationFormGroup(config, documentTemplatesArray);
      configurationsArray.push(configurationFormGroup);
    });
    configurationsArray.setValidators([_SetupFormFactory.validators.configurations()]);
    return configurationsArray;
  }
  /**
   * Creates default business configurations
   */
  createDefaultBusinessConfigurations() {
    const configurationsArray = this._formBuilder.array([]);
    const defaultConfigs = [
      { documentCategory: "business_document", active: false, documentTemplates: [{ promptTemplate: null, required: "optional" }] },
      { documentCategory: "proof_of_address", active: false, documentTemplates: [{ promptTemplate: null, required: "optional" }] },
      { documentCategory: "tax_document", active: false, documentTemplates: [{ promptTemplate: null, required: "optional" }] }
    ];
    defaultConfigs.forEach((config) => {
      const documentTemplatesArray = this.createDocumentTemplatesFormArray(config?.documentTemplates);
      const configurationFormGroup = this.createDefaultConfigurationFormGroup(config, documentTemplatesArray);
      configurationsArray.push(configurationFormGroup);
    });
    configurationsArray.setValidators([_SetupFormFactory.validators.configurations()]);
    return configurationsArray;
  }
  createDefaultConfigurationFormGroup(config, documentTemplatesArray) {
    return this._formBuilder.group({
      active: [config?.active ?? false, [_SetupFormFactory.validators.configurationActive()]],
      documentCategory: [config?.documentCategory, [Validators.required]],
      documentTemplates: documentTemplatesArray
    });
  }
  /**
   * Creates an empty document types form array
   */
  createDocumentTypesWithDefaults(documentTypes, target) {
    if (!documentTypes || !documentTypes.length) {
      const formArray = this._formBuilder.array([]);
      formArray.setValidators([_SetupFormFactory.validators.documentVerificationTypes()]);
      return formArray;
    }
    return this.createDocumentTypesFormArray(documentTypes, target);
  }
  /**
   * Sets up all validators for a document verification type control
   * This method centralizes the validator setup logic used by both components
   */
  setupDocumentVerificationTypeValidators(documentVerificationTypeControl, target = "personal") {
    documentVerificationTypeControl.setValidators([_SetupFormFactory.validators.documentVerificationType()]);
    const configurationsArray = documentVerificationTypeControl.get("configurations");
    if (!configurationsArray)
      return;
    configurationsArray.setValidators([_SetupFormFactory.validators.configurations()]);
    configurationsArray.controls.forEach((configuration, index) => {
      if (target === "personal") {
        if (index === 0)
          configuration.get("documentCategory")?.setValue("license");
        if (index === 1)
          configuration.get("documentCategory")?.setValue("passport");
        if (index === 2)
          configuration.get("documentCategory")?.setValue("government_id");
      }
      configuration.get("active")?.setValidators([_SetupFormFactory.validators.configurationActive()]);
      const documentTemplates = configuration.get("documentTemplates");
      if (!documentTemplates)
        return;
      this._setupDocumentTemplatesValidation(documentTemplates);
    });
    documentVerificationTypeControl.updateValueAndValidity();
  }
  /**
   * Updates validators for a single configuration control based on its active state
   * This method can be called individually or as part of the full document types array update
   */
  updateConfigurationControlValidation(configurationControl) {
    const isActive = configurationControl.get("active")?.value;
    const documentTemplatesArray = configurationControl.get("documentTemplates");
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
  updateValidatorsForActiveState(documentTypesArray) {
    documentTypesArray.controls.forEach((documentTypeControl) => {
      const configurationsArray = documentTypeControl.get("configurations");
      if (!configurationsArray)
        return;
      configurationsArray.controls.forEach((configurationControl) => {
        this.updateConfigurationControlValidation(configurationControl);
      });
      documentTypeControl.updateValueAndValidity();
    });
    documentTypesArray.updateValueAndValidity();
  }
  static {
    this.\u0275fac = function SetupFormFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupFormFactory)(\u0275\u0275inject(FormBuilder));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SetupFormFactory, factory: _SetupFormFactory.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupFormFactory, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: FormBuilder }], null);
})();

// src/app/modules/smart-enroll/projects/setup/steps/documents/criminal-check-catalog.util.ts
var DOCS_BASE_URL = "https://docs.verifik.co";
var criminalCheckDocs = {
  colombia_api_inpec: {
    en: "/background-check/colombia-inpec",
    es: "/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec"
  },
  colombia_api_identity_lookup_procuraduria: {
    en: "/background-check/colombia-disciplinary-records-attorneys-office",
    es: "/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-procuraduria"
  },
  colombia_api_police_rnmc: {
    en: "/background-check/colombia-police-compliance-corrective-measures",
    es: "/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial"
  },
  colombia_special_api_police_identity_lookup: {
    en: "/background-check/colombia-police-record-check",
    es: "/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia"
  },
  world_api_interpol: {
    en: "/background-check/international/interpol-background-check",
    es: "/verifik-es/verificacion-antecendentes/verificacion-antecendentes-interpol"
  },
  world_api_fbi: {
    en: "/background-check/international/fbi-background-check",
    es: "/verifik-es/verificacion-antecendentes/verificacion-antecendentes-fbi"
  },
  world_api_dea: {
    en: "/background-check/international/dea-background-check",
    es: "/verifik-es/verificacion-antecendentes/verificacion-antecendentes-dea"
  },
  world_api_europol: {
    en: "/background-check/international/europol-background-check",
    es: "/verifik-es/verificacion-antecendentes/verificacion-antecendentes-europol"
  },
  world_api_ofac: {
    en: "/background-check/international/ofac-background-check",
    es: "/verifik-es/verificacion-antecendentes/verificacion-antecendentes-ofac"
  },
  world_api_onu: {
    en: "/background-check/international/onu-background-check",
    es: "/verifik-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-onu"
  }
};
var criminalCheckDocsUrl = (docs, lang) => {
  const path = lang?.toLowerCase().startsWith("es") ? docs.es : docs.en;
  return `${DOCS_BASE_URL}${path}`;
};
var buildCountryCheckSections = (countries, checksByCountry) => [...new Set(countries.map((country) => String(country || "").trim()).filter(Boolean))].map((country) => ({
  country,
  checks: checksByCountry[country.toLowerCase()] || []
}));
var isCountryCheckSelected = (current, endpoint, countryCodes, legacyCodes) => {
  const explicit = current.filter((code) => countryCodes.includes(code));
  if (explicit.length)
    return explicit.includes(endpoint);
  if (!current.includes("local_api"))
    return false;
  return legacyCodes.includes(endpoint);
};
var toggleCountryCheck = (current, endpoint, countryCodes, legacyCodes) => {
  const explicit = current.filter((code) => countryCodes.includes(code));
  const base = explicit.length ? explicit : current.includes("local_api") ? legacyCodes : [];
  const nextCountry = base.includes(endpoint) ? base.filter((code) => code !== endpoint) : [...base, endpoint];
  const unaffected = current.filter((code) => code !== "local_api" && !countryCodes.includes(code));
  return [...unaffected, ...nextCountry];
};

// src/app/modules/smart-enroll/projects/setup/steps/documents/document-type-preview-dialog/document-type-preview-dialog.component.ts
function DocumentTypePreviewDialogComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data.country);
  }
}
function DocumentTypePreviewDialogComponent_ng_container_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.data.frontImage, \u0275\u0275sanitizeUrl)("alt", t_r2("smartEnrollProjects.setup.documents.types.frontImage"));
  }
}
function DocumentTypePreviewDialogComponent_ng_container_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.noImage"), " ");
  }
}
function DocumentTypePreviewDialogComponent_ng_container_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.data.backImage, \u0275\u0275sanitizeUrl)("alt", t_r2("smartEnrollProjects.setup.documents.types.backImage"));
  }
}
function DocumentTypePreviewDialogComponent_ng_container_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.noImage"), " ");
  }
}
function DocumentTypePreviewDialogComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DocumentTypePreviewDialogComponent_ng_container_0_Conditional_6_Template, 2, 1, "p", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 6)(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "figure", 9)(13, "figcaption", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DocumentTypePreviewDialogComponent_ng_container_0_Conditional_15_Template, 1, 2, "img", 11)(16, DocumentTypePreviewDialogComponent_ng_container_0_Conditional_16_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "figure", 9)(18, "figcaption", 10);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, DocumentTypePreviewDialogComponent_ng_container_0_Conditional_20_Template, 1, 2, "img", 11)(21, DocumentTypePreviewDialogComponent_ng_container_0_Conditional_21_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 13)(23, "button", 14);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerTitle || t_r2("smartEnrollProjects.setup.documents.types.previewTitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.country) ? 6 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.frontImage"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.frontImage) ? 15 : 16);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.backImage"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.backImage) ? 20 : 21);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.localApi.close"), " ");
  }
}
var DocumentTypePreviewDialogComponent = class _DocumentTypePreviewDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
  }
  get headerTitle() {
    const code = this.data?.code ? this.data.code.toUpperCase() : "";
    return code ? `${code} \u2013 ${this.data?.name || ""}` : this.data?.name || "";
  }
  static {
    this.\u0275fac = function DocumentTypePreviewDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentTypePreviewDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentTypePreviewDialogComponent, selectors: [["document-type-preview-dialog"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "max-h-[90vh]", "flex-col", "overflow-hidden", "rounded-lg", "bg-white", "dark:bg-gray-900"], [1, "flex", "items-center", "justify-between", "gap-4", "border-b", "border-stone-200", "bg-stone-50", "p-5", "dark:border-gray-700", "dark:bg-gray-900/60"], [1, "min-w-0"], [1, "m-0", "truncate", "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "m-0", "mt-0.5", "text-xs", "text-stone-500", "dark:text-stone-400"], ["mat-icon-button", "", "mat-dialog-close", ""], [1, "flex-1", "overflow-y-auto", "p-5"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], [1, "m-0", "flex", "flex-col", "gap-2"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], ["loading", "lazy", 1, "h-auto", "w-full", "rounded-xl", "border", "border-stone-200", "object-contain", "dark:border-gray-700", 3, "src", "alt"], [1, "flex", "h-40", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-300", "text-xs", "text-stone-500", "dark:border-gray-700", "dark:text-stone-400"], [1, "flex", "justify-end", "gap-2", "border-t", "border-stone-200", "p-4", "dark:border-gray-700"], ["mat-flat-button", "", "color", "primary", "mat-dialog-close", "", 1, "rounded-xl"]], template: function DocumentTypePreviewDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DocumentTypePreviewDialogComponent_ng_container_0_Template, 25, 7, "ng-container", 0);
      }
    }, dependencies: [CommonModule, MatButtonModule, MatButton, MatIconButton, MatDialogModule, MatDialogClose, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentTypePreviewDialogComponent, [{
    type: Component,
    args: [{ selector: "document-type-preview-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="flex max-h-[90vh] flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-900">\r
        <div class="flex items-center justify-between gap-4 border-b border-stone-200 bg-stone-50 p-5 dark:border-gray-700 dark:bg-gray-900/60">\r
            <div class="min-w-0">\r
                <h2 class="m-0 truncate text-base font-semibold text-stone-900 dark:text-white">\r
                    {{ headerTitle || t('smartEnrollProjects.setup.documents.types.previewTitle') }}\r
                </h2>\r
                @if (data?.country) {\r
                    <p class="m-0 mt-0.5 text-xs text-stone-500 dark:text-stone-400">{{ data.country }}</p>\r
                }\r
            </div>\r
            <button mat-icon-button mat-dialog-close>\r
                <mat-icon>close</mat-icon>\r
            </button>\r
        </div>\r
\r
        <div class="flex-1 overflow-y-auto p-5">\r
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">\r
                <figure class="m-0 flex flex-col gap-2">\r
                    <figcaption class="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.setup.documents.types.frontImage') }}\r
                    </figcaption>\r
                    @if (data?.frontImage) {\r
                        <img\r
                            [src]="data.frontImage"\r
                            [alt]="t('smartEnrollProjects.setup.documents.types.frontImage')"\r
                            loading="lazy"\r
                            class="h-auto w-full rounded-xl border border-stone-200 object-contain dark:border-gray-700"\r
                        />\r
                    } @else {\r
                        <div\r
                            class="flex h-40 items-center justify-center rounded-xl border border-dashed border-stone-300 text-xs text-stone-500 dark:border-gray-700 dark:text-stone-400"\r
                        >\r
                            {{ t('smartEnrollProjects.setup.documents.types.noImage') }}\r
                        </div>\r
                    }\r
                </figure>\r
\r
                <figure class="m-0 flex flex-col gap-2">\r
                    <figcaption class="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.setup.documents.types.backImage') }}\r
                    </figcaption>\r
                    @if (data?.backImage) {\r
                        <img\r
                            [src]="data.backImage"\r
                            [alt]="t('smartEnrollProjects.setup.documents.types.backImage')"\r
                            loading="lazy"\r
                            class="h-auto w-full rounded-xl border border-stone-200 object-contain dark:border-gray-700"\r
                        />\r
                    } @else {\r
                        <div\r
                            class="flex h-40 items-center justify-center rounded-xl border border-dashed border-stone-300 text-xs text-stone-500 dark:border-gray-700 dark:text-stone-400"\r
                        >\r
                            {{ t('smartEnrollProjects.setup.documents.types.noImage') }}\r
                        </div>\r
                    }\r
                </figure>\r
            </div>\r
        </div>\r
\r
        <div class="flex justify-end gap-2 border-t border-stone-200 p-4 dark:border-gray-700">\r
            <button mat-flat-button color="primary" mat-dialog-close class="rounded-xl">\r
                {{ t('smartEnrollProjects.setup.documents.localApi.close') }}\r
            </button>\r
        </div>\r
    </div>\r
</ng-container>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentTypePreviewDialogComponent, { className: "DocumentTypePreviewDialogComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/documents/document-type-preview-dialog/document-type-preview-dialog.component.ts", lineNumber: 28 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/documents/document-verification-type/document-verification-type-list.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0, a1) => ({ category: a0, country: a1 });
var _c2 = (a0, a1) => ({ selected: a0, total: a1 });
var _c3 = (a0) => ({ categories: a0 });
var _forTrack0 = ($index, $item) => $item.country;
var _forTrack1 = ($index, $item) => $item._id;
function DocumentVerificationTypeListComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.empty"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_Conditional_3_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 13);
    \u0275\u0275text(1, " warning ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("matTooltip", t_r2("smartEnrollProjects.setup.documents.types.needsAttention"));
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0)(1)(2);
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function DocumentVerificationTypeListComponent_ng_container_0_Conditional_3_For_5_Template_button_click_3_listener() {
      const \u0275$index_19_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.focusCountry(\u0275$index_19_r4));
    });
    \u0275\u0275template(4, DocumentVerificationTypeListComponent_ng_container_0_Conditional_3_For_5_Conditional_4_Template, 2, 1, "mat-icon", 13);
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const group_r6 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    const g_r7 = ctx_r4.asGroup(group_r6);
    const countryValue_r8 = ((tmp_15_0 = g_r7.get("country")) == null ? null : tmp_15_0.value) || "";
    const needsAttention_r9 = ctx_r4.countryNeedsAttention(g_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", needsAttention_r9 ? "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200" : "border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-200");
    \u0275\u0275advance();
    \u0275\u0275conditional(needsAttention_r9 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", countryValue_r8 ? t_r2(ctx_r4.countryNameKey(countryValue_r8)) : t_r2("smartEnrollProjects.setup.documents.types.country"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.summaryDocs", \u0275\u0275pureFunction1(4, _c0, ctx_r4.totalSelected(g_r7))), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275repeaterCreate(4, DocumentVerificationTypeListComponent_ng_container_0_Conditional_3_For_5_Template, 9, 6, "button", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.countriesConfigured", \u0275\u0275pureFunction1(1, _c0, ctx_r4.documentTypes.controls.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.documentTypes.controls);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "mat-icon", 31);
    \u0275\u0275text(2, " warning ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.needsAttention"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_20_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r12 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.category." + cat_r12), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_20_For_3_Template, 2, 1, "span", 33, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const activeCats_r13 = \u0275\u0275readContextLet(5);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(activeCats_r13);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275listener("mousedown", function DocumentVerificationTypeListComponent_ng_container_0_For_5_For_30_Template_mat_option_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("value", c_r15.country);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2(c_r15.name), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.pickCountryFirst"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "mat-progress-spinner", 37);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.loading"));
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const category_r17 = \u0275\u0275readContextLet(1);
    \u0275\u0275nextContext(3);
    const countryValue_r18 = \u0275\u0275readContextLet(1);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.noTemplatesShort", \u0275\u0275pureFunction2(1, _c1, t_r2("smartEnrollProjects.setup.documents.category." + category_r17), countryValue_r18)), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const templates_r19 = \u0275\u0275readContextLet(2);
    const selected_r20 = \u0275\u0275readContextLet(3);
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.selectedOfAvailable", \u0275\u0275pureFunction2(1, _c2, selected_r20, templates_r19.length)), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const category_r17 = \u0275\u0275readContextLet(1);
    \u0275\u0275nextContext(3);
    const countryValue_r18 = \u0275\u0275readContextLet(1);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.tryOtherCategories", \u0275\u0275pureFunction1(1, _c3, ctx_r4.otherCategoryLabels(countryValue_r18, category_r17))), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_16_Conditional_2_Template, 2, 3, "p", 47);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const category_r17 = \u0275\u0275readContextLet(1);
    const otherCategories_r23 = \u0275\u0275readContextLet(4);
    \u0275\u0275nextContext(3);
    const countryValue_r18 = \u0275\u0275readContextLet(1);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.noTemplates", \u0275\u0275pureFunction2(2, _c1, t_r2("smartEnrollProjects.setup.documents.category." + category_r17), countryValue_r18)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(otherCategories_r23.length ? 2 : -1);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Conditional_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      \u0275\u0275nextContext(2);
      const category_r17 = \u0275\u0275readContextLet(1);
      const \u0275$index_35_r11 = \u0275\u0275nextContext(3).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleCategoryList(\u0275$index_35_r11, category_r17, $event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const listExpanded_r25 = \u0275\u0275readContextLet(5);
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275attribute("aria-expanded", listExpanded_r25);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", listExpanded_r25 ? "unfold_less" : "unfold_more", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", listExpanded_r25 ? t_r2("smartEnrollProjects.setup.documents.types.hideDocuments") : t_r2("smartEnrollProjects.setup.documents.types.showDocuments"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Conditional_1_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55)(1, "mat-icon", 31);
    \u0275\u0275text(2, " public ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(8).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.globalBadge"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 51)(1, "mat-checkbox", 52);
    \u0275\u0275listener("change", function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Conditional_1_For_2_Template_mat_checkbox_change_1_listener($event) {
      const pt_r27 = \u0275\u0275restoreView(_r26).$implicit;
      \u0275\u0275nextContext(3);
      const configCtrl_r21 = \u0275\u0275readContextLet(0);
      const ctx_r4 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r4.toggleTemplate(configCtrl_r21, pt_r27, $event.checked));
    });
    \u0275\u0275elementStart(2, "span", 53)(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Conditional_1_For_2_Conditional_5_Template, 4, 1, "span", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 56);
    \u0275\u0275listener("click", function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Conditional_1_For_2_Template_button_click_6_listener() {
      const pt_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r4.openPreview(pt_r27));
    });
    \u0275\u0275elementStart(7, "mat-icon", 57);
    \u0275\u0275text(8, " visibility ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pt_r27 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const configCtrl_r21 = \u0275\u0275readContextLet(0);
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r4.isTemplateSelected(configCtrl_r21, pt_r27._id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r4.templateLabel(pt_r27), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.isGlobalTemplate(pt_r27) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", t_r2("smartEnrollProjects.setup.documents.types.preview"));
    \u0275\u0275attribute("aria-label", t_r2("smartEnrollProjects.setup.documents.types.preview"));
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 49);
    \u0275\u0275repeaterCreate(1, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Conditional_1_For_2_Template, 9, 5, "li", 51, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const templates_r19 = \u0275\u0275readContextLet(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(templates_r19);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Conditional_0_Template, 4, 3, "button", 48)(1, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Conditional_1_Template, 3, 0, "ul", 49);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const listExpanded_r25 = \u0275\u0275readContextLet(5);
    const canCollapseList_r28 = \u0275\u0275readContextLet(6);
    \u0275\u0275conditional(canCollapseList_r28 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(listExpanded_r25 ? 1 : -1);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0)(1)(2)(3)(4)(5)(6);
    \u0275\u0275elementStart(7, "div", 39)(8, "div", 41)(9, "div", 42)(10, "p", 43);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 44);
    \u0275\u0275template(13, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_13_Template, 1, 4)(14, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_14_Template, 1, 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-slide-toggle", 45);
    \u0275\u0275listener("change", function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Template_mat_slide_toggle_change_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const configCtrl_r21 = \u0275\u0275readContextLet(0);
      const category_r17 = \u0275\u0275readContextLet(1);
      \u0275\u0275nextContext(3);
      const g_r22 = \u0275\u0275readContextLet(0);
      const countryValue_r18 = \u0275\u0275readContextLet(1);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onActiveToggleChange(g_r22, configCtrl_r21, countryValue_r18, category_r17, $event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_16_Template, 3, 5)(17, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Conditional_17_Template, 2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_33_0;
    const cfg_r29 = ctx.$implicit;
    const \u0275$index_35_r11 = \u0275\u0275nextContext(3).$index;
    const countryValue_r18 = \u0275\u0275readContextLet(1);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    const configCtrl_r30 = \u0275\u0275storeLet(cfg_r29);
    \u0275\u0275advance();
    const category_r31 = \u0275\u0275storeLet(((tmp_33_0 = configCtrl_r30.get("documentCategory")) == null ? null : tmp_33_0.value) || "");
    \u0275\u0275advance();
    const templates_r32 = \u0275\u0275storeLet(ctx_r4.templatesFor(countryValue_r18, category_r31));
    \u0275\u0275advance();
    \u0275\u0275storeLet(ctx_r4.selectedCount(configCtrl_r30));
    \u0275\u0275advance();
    \u0275\u0275storeLet(ctx_r4.categoriesWithTemplates(countryValue_r18, category_r31));
    \u0275\u0275advance();
    \u0275\u0275storeLet(ctx_r4.isCategoryListExpanded(\u0275$index_35_r11, category_r31, templates_r32.length));
    \u0275\u0275advance();
    \u0275\u0275storeLet(templates_r32.length > ctx_r4.categoryListCollapseThreshold);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r4.asGroup(configCtrl_r30));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.category." + category_r31), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(templates_r32.length === 0 ? 13 : 14);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", templates_r32.length === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(templates_r32.length === 0 ? 16 : 17);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.activateHint"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_For_2_Template, 18, 12, "div", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_Conditional_3_Template, 2, 1, "p", 40);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const g_r22 = \u0275\u0275readContextLet(0);
    const activeCats_r13 = \u0275\u0275readContextLet(5);
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.orderedConfigurationControls(g_r22));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(activeCats_r13.length === 0 ? 3 : -1);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_0_Template, 2, 1, "p", 35)(1, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_1_Template, 4, 1, "div", 36)(2, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Conditional_2_Template, 4, 1);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const countryValue_r18 = \u0275\u0275readContextLet(1);
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!countryValue_r18 ? 0 : ctx_r4.isLoading(countryValue_r18) ? 1 : 2);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0)(1)(2)(3)(4)(5);
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 16)(8, "div", 17)(9, "button", 18);
    \u0275\u0275listener("click", function DocumentVerificationTypeListComponent_ng_container_0_For_5_Template_button_click_9_listener($event) {
      const \u0275$index_35_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleCountry(\u0275$index_35_r11, $event));
    });
    \u0275\u0275elementStart(10, "mat-icon", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 20)(13, "div", 21)(14, "span", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_16_Template, 4, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 24)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_20_Template, 4, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "mat-form-field", 25);
    \u0275\u0275listener("click", function DocumentVerificationTypeListComponent_ng_container_0_For_5_Template_mat_form_field_click_21_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(22, "mat-label");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-icon", 26);
    \u0275\u0275text(25, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 27);
    \u0275\u0275listener("focus", function DocumentVerificationTypeListComponent_ng_container_0_For_5_Template_input_focus_26_listener($event) {
      const \u0275$index_35_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onCountrySearchFocus(\u0275$index_35_r11, $event.target));
    })("blur", function DocumentVerificationTypeListComponent_ng_container_0_For_5_Template_input_blur_26_listener() {
      const \u0275$index_35_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onCountrySearchBlur(\u0275$index_35_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-autocomplete", 28, 0);
    \u0275\u0275listener("optionSelected", function DocumentVerificationTypeListComponent_ng_container_0_For_5_Template_mat_autocomplete_optionSelected_27_listener($event) {
      const \u0275$index_35_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onCountryPicked(\u0275$index_35_r11, $event));
    });
    \u0275\u0275repeaterCreate(29, DocumentVerificationTypeListComponent_ng_container_0_For_5_For_30_Template, 2, 2, "mat-option", 29, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "button", 30);
    \u0275\u0275listener("click", function DocumentVerificationTypeListComponent_ng_container_0_For_5_Template_button_click_31_listener() {
      const \u0275$index_35_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.removeType(\u0275$index_35_r11));
    });
    \u0275\u0275elementStart(32, "mat-icon", 7);
    \u0275\u0275text(33, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, DocumentVerificationTypeListComponent_ng_container_0_For_5_Conditional_35_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const group_r33 = ctx.$implicit;
    const \u0275$index_35_r11 = ctx.$index;
    const countryAuto_r34 = \u0275\u0275reference(28);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    const g_r35 = \u0275\u0275storeLet(ctx_r4.asGroup(group_r33));
    \u0275\u0275advance();
    const countryValue_r36 = \u0275\u0275storeLet(((tmp_15_0 = g_r35.get("country")) == null ? null : tmp_15_0.value) || "");
    const expanded_r37 = ctx_r4.isCountryExpanded(\u0275$index_35_r11);
    const needsAttention_r38 = ctx_r4.countryNeedsAttention(g_r35);
    const selectedTotal_r39 = ctx_r4.totalSelected(g_r35);
    \u0275\u0275advance(4);
    const activeCats_r40 = \u0275\u0275storeLet(ctx_r4.activeCategories(g_r35));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", needsAttention_r38 ? "border-amber-300/80 dark:border-amber-800" : "border-stone-200/90 dark:border-gray-700")("formGroup", g_r35);
    \u0275\u0275attribute("id", "doc-country-" + \u0275$index_35_r11);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-expanded", expanded_r37)("aria-label", expanded_r37 ? t_r2("smartEnrollProjects.setup.documents.types.collapseCountry") : t_r2("smartEnrollProjects.setup.documents.types.expandCountry"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", expanded_r37 ? "expand_more" : "chevron_right", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", countryValue_r36 ? t_r2(ctx_r4.countryNameKey(countryValue_r36)) : t_r2("smartEnrollProjects.setup.documents.types.country"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(needsAttention_r38 ? 16 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.summaryDocs", \u0275\u0275pureFunction1(19, _c0, selectedTotal_r39)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(activeCats_r40.length ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.country"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r4.countrySearchCtrl(\u0275$index_35_r11))("placeholder", t_r2("smartEnrollProjects.setup.documents.types.searchCountry"))("matAutocomplete", countryAuto_r34);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r4.filteredCountries(\u0275$index_35_r11));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.remove"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(expanded_r37 ? 35 : -1);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.invalid"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275template(2, DocumentVerificationTypeListComponent_ng_container_0_Conditional_2_Template, 2, 1, "p", 3)(3, DocumentVerificationTypeListComponent_ng_container_0_Conditional_3_Template, 6, 3, "div", 4);
    \u0275\u0275repeaterCreate(4, DocumentVerificationTypeListComponent_ng_container_0_For_5_Template, 36, 21, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(6, "button", 6);
    \u0275\u0275listener("click", function DocumentVerificationTypeListComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.addType());
    });
    \u0275\u0275elementStart(7, "mat-icon", 7);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, DocumentVerificationTypeListComponent_ng_container_0_Conditional_10_Template, 2, 1, "p", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.documentTypes.controls.length === 0 ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.documentTypes.controls);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.add"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.verificationErrors.length ? 10 : -1);
  }
}
var CATEGORY_LIST_COLLAPSE_THRESHOLD = 6;
var DocumentVerificationTypeListComponent = class _DocumentVerificationTypeListComponent {
  constructor() {
    this.target = "personal";
    this._factory = inject(SetupFormFactory);
    this._countries = inject(CountryService);
    this._setup = inject(SetupService);
    this._dialog = inject(MatDialog);
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this._host = inject(ElementRef);
    this._transloco = inject(TranslocoService);
    this.countries = this._countries.worldCountries;
    this._countrySearch = /* @__PURE__ */ new Map();
    this._pickingCountry = -1;
    this._templatesByCountry = {};
    this._loadingCountries = /* @__PURE__ */ new Set();
    this._fetchedCountries = /* @__PURE__ */ new Set();
    this._expandedCountries = /* @__PURE__ */ new Set();
    this._userCollapsedCountries = /* @__PURE__ */ new Set();
    this._expandedCategoryLists = /* @__PURE__ */ new Set();
    this.categoryListCollapseThreshold = CATEGORY_LIST_COLLAPSE_THRESHOLD;
  }
  ngOnInit() {
    this.documentTypes?.controls.forEach((group) => this._watchCountry(group));
  }
  get verificationErrors() {
    const errors = this.documentTypes?.errors;
    if (!errors)
      return [];
    return Object.keys(errors).filter((k) => errors[k] === true);
  }
  asGroup(control) {
    return control;
  }
  asArray(control) {
    return control;
  }
  /**
   * Transloco key for the country display name, or the raw code / empty.
   */
  countryNameKey(countryCode) {
    if (!countryCode)
      return "";
    const match = this.countries.find((c) => c.country === countryCode);
    return match?.name || countryCode;
  }
  countrySearchCtrl(index) {
    let ctrl = this._countrySearch.get(index);
    if (ctrl)
      return ctrl;
    const code = this.asGroup(this.documentTypes.at(index)).get("country")?.value || "";
    ctrl = new FormControl(this._displayCountry(code), { nonNullable: true });
    ctrl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
    this._countrySearch.set(index, ctrl);
    return ctrl;
  }
  filteredCountries(index) {
    const term = (this._countrySearch.get(index)?.value || "").trim().toLowerCase();
    const taken = this._takenCountries(index);
    return this.countries.filter((c) => {
      if (taken.has(c.country))
        return false;
      if (!term)
        return true;
      const label = this._transloco.translate(c.name).toLowerCase();
      return label.includes(term) || c.country.toLowerCase().includes(term);
    });
  }
  onCountrySearchFocus(index, input) {
    input.select();
  }
  onCountrySearchBlur(index) {
    setTimeout(() => {
      if (this._pickingCountry === index)
        return;
      const code = this.asGroup(this.documentTypes.at(index)).get("country")?.value || "";
      this.countrySearchCtrl(index).setValue(this._displayCountry(code), { emitEvent: false });
      this._cdr.markForCheck();
    }, 0);
  }
  onCountryPicked(index, event) {
    this._pickingCountry = index;
    const code = `${event.option.value || ""}`;
    const group = this.asGroup(this.documentTypes.at(index));
    group.get("country")?.setValue(code);
    group.get("country")?.markAsDirty();
    this.countrySearchCtrl(index).setValue(this._displayCountry(code), { emitEvent: false });
    this._cdr.markForCheck();
    setTimeout(() => {
      if (this._pickingCountry === index)
        this._pickingCountry = -1;
    }, 0);
  }
  totalSelected(group) {
    const arr = this.asArray(group.get("configurations"));
    if (!arr)
      return 0;
    return arr.controls.reduce((sum, cfg) => sum + this.selectedCount(cfg), 0);
  }
  /**
   * True when the country row needs user attention (empty, invalid, or no active category).
   */
  countryNeedsAttention(group) {
    const country = group.get("country")?.value || "";
    if (!country)
      return true;
    if (group.invalid)
      return true;
    if (this.activeCategories(group).length === 0)
      return true;
    return false;
  }
  isCountryExpanded(index) {
    const group = this.asGroup(this.documentTypes.at(index));
    if (this.countryNeedsAttention(group))
      return true;
    if (this._userCollapsedCountries.has(index))
      return false;
    return this._expandedCountries.has(index);
  }
  toggleCountry(index, event) {
    event?.stopPropagation();
    const group = this.asGroup(this.documentTypes.at(index));
    if (this.countryNeedsAttention(group))
      return;
    if (this.isCountryExpanded(index)) {
      this._userCollapsedCountries.add(index);
      this._expandedCountries.delete(index);
    } else {
      this._expandedCountries.add(index);
      this._userCollapsedCountries.delete(index);
    }
    this._cdr.markForCheck();
  }
  focusCountry(index) {
    this._expandedCountries.add(index);
    this._userCollapsedCountries.delete(index);
    this._cdr.markForCheck();
    queueMicrotask(() => {
      const el = this._host.nativeElement.querySelector(`#doc-country-${index}`);
      el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
  categoryListKey(countryIndex, category) {
    return `${countryIndex}:${category}`;
  }
  isCategoryListExpanded(countryIndex, category, templatesLength) {
    if (templatesLength === 0)
      return false;
    if (templatesLength <= CATEGORY_LIST_COLLAPSE_THRESHOLD)
      return true;
    return this._expandedCategoryLists.has(this.categoryListKey(countryIndex, category));
  }
  toggleCategoryList(countryIndex, category, event) {
    event?.stopPropagation();
    const key = this.categoryListKey(countryIndex, category);
    if (this._expandedCategoryLists.has(key)) {
      this._expandedCategoryLists.delete(key);
    } else {
      this._expandedCategoryLists.add(key);
    }
    this._cdr.markForCheck();
  }
  addType() {
    this._factory.addDocumentTypesWithDefaults(this.documentTypes, this.target);
    const lastIndex = this.documentTypes.length - 1;
    const last = this.documentTypes.at(lastIndex);
    this._watchCountry(last);
    this._expandedCountries.add(lastIndex);
    this._userCollapsedCountries.delete(lastIndex);
    this._factory.updateValidatorsForActiveState(this.documentTypes);
    this.documentTypes?.updateValueAndValidity();
    this._cdr.markForCheck();
  }
  removeType(index) {
    this.documentTypes.removeAt(index);
    this._reindexCollapseState(index);
    this._reindexCountrySearch(index);
    this._cdr.markForCheck();
  }
  activeCategories(group) {
    const arr = this.asArray(group.get("configurations"));
    return arr?.controls?.filter((c) => c.get("active")?.value).map((c) => c.get("documentCategory")?.value) ?? [];
  }
  isLoading(country) {
    return !!country && this._loadingCountries.has(country);
  }
  /** Templates available for a given country/category combo. Empty array when none. */
  templatesFor(country, category) {
    if (!country || !category)
      return [];
    return this._templatesByCountry[country]?.[category] || [];
  }
  /**
   * Categories with catalog templates first so empty Government ID does not
   * hide License (e.g. United States state driver licenses).
   */
  orderedConfigurationControls(group) {
    const country = group?.get("country")?.value;
    const arr = this.asArray(group?.get("configurations"));
    const controls = arr?.controls ? [...arr.controls] : [];
    if (!country || !this._fetchedCountries.has(country))
      return controls;
    return controls.sort((a, b) => {
      const catA = a.get("documentCategory")?.value;
      const catB = b.get("documentCategory")?.value;
      const countA = this.templatesFor(country, catA).length;
      const countB = this.templatesFor(country, catB).length;
      if (countA > 0 && countB === 0)
        return -1;
      if (countA === 0 && countB > 0)
        return 1;
      return 0;
    });
  }
  /** Other categories on this country that have catalog templates (for empty-state hints). */
  categoriesWithTemplates(country, excludeCategory) {
    if (!country)
      return [];
    const buckets = this._templatesByCountry[country] || {};
    return Object.keys(buckets).filter((category) => category !== excludeCategory && (buckets[category]?.length || 0) > 0);
  }
  /** Comma-separated translated labels for empty-state “try other categories” hints. */
  otherCategoryLabels(country, excludeCategory) {
    return this.categoriesWithTemplates(country, excludeCategory).map((category) => this._transloco.translate(`smartEnrollProjects.setup.documents.category.${category}`)).join(", ");
  }
  /** Helper to look up the populated DocumentType on a prompt template. */
  documentTypeOf(pt) {
    if (!pt?.documentType || typeof pt.documentType === "string")
      return null;
    return pt.documentType;
  }
  templateLabel(pt) {
    const dt = this.documentTypeOf(pt);
    if (dt?.code)
      return `${dt.code.toUpperCase()} \u2013 ${dt.name || pt.name}`;
    return pt?.name || "";
  }
  /** True when the prompt template (or its populated DocumentType) is global (`country: 'World'`). */
  isGlobalTemplate(pt) {
    const ptCountry = pt?.country;
    const dtCountry = this.documentTypeOf(pt)?.country;
    return ptCountry === "World" || dtCountry === "World";
  }
  isTemplateSelected(configCtrl, promptTemplateId) {
    const arr = configCtrl?.get("documentTemplates");
    if (!arr)
      return false;
    return arr.controls.some((c) => c.get("promptTemplate")?.value === promptTemplateId);
  }
  toggleTemplate(configCtrl, pt, checked) {
    if (!pt?._id)
      return;
    const arr = configCtrl?.get("documentTemplates");
    const activeCtrl = configCtrl?.get("active");
    if (!arr)
      return;
    if (checked) {
      const placeholderIndex = arr.controls.findIndex((c) => !c.get("promptTemplate")?.value);
      if (placeholderIndex >= 0) {
        arr.removeAt(placeholderIndex);
      }
      const exists = arr.controls.some((c) => c.get("promptTemplate")?.value === pt._id);
      if (!exists) {
        arr.push(this._factory.createDocumentTemplateFormGroup({ promptTemplate: pt._id, required: "optional" }, this.target));
      }
      activeCtrl?.setValue(true);
    } else {
      const idx = arr.controls.findIndex((c) => c.get("promptTemplate")?.value === pt._id);
      if (idx >= 0)
        arr.removeAt(idx);
      const stillSelected = arr.controls.some((c) => !!c.get("promptTemplate")?.value);
      if (!stillSelected)
        activeCtrl?.setValue(false);
    }
    arr.markAsDirty();
    arr.updateValueAndValidity();
    configCtrl?.updateValueAndValidity();
    this.documentTypes?.updateValueAndValidity();
    this._cdr.markForCheck();
  }
  selectedCount(configCtrl) {
    const arr = configCtrl?.get("documentTemplates");
    if (!arr)
      return 0;
    return arr.controls.filter((c) => !!c.get("promptTemplate")?.value).length;
  }
  /**
   * When a category toggle turns on: pre-select **all** templates for that bucket so UX is opt-out.
   * When it turns off: clear selections (prior behavior).
   */
  onActiveToggleChange(documentGroup, configCtrl, countryValue, category, checked) {
    if (!checked) {
      const arr = configCtrl?.get("documentTemplates");
      if (!arr)
        return;
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr.at(i).get("promptTemplate")?.value)
          arr.removeAt(i);
      }
      arr.markAsDirty();
      arr.updateValueAndValidity();
      configCtrl?.updateValueAndValidity();
      documentGroup?.updateValueAndValidity();
      this.documentTypes?.updateValueAndValidity();
      this._cdr.markForCheck();
      return;
    }
    const templates = this.templatesFor(countryValue, category);
    this._selectAllTemplates(configCtrl, templates);
    documentGroup?.updateValueAndValidity();
    configCtrl?.updateValueAndValidity();
    this.documentTypes?.updateValueAndValidity();
    this._cdr.markForCheck();
  }
  _selectAllTemplates(configCtrl, templates) {
    if (!templates.length)
      return;
    for (const pt of templates) {
      if (!pt?._id)
        continue;
      if (this.isTemplateSelected(configCtrl, pt._id))
        continue;
      this.toggleTemplate(configCtrl, pt, true);
    }
  }
  /**
   * If templates load after `active` was already true (e.g. latency), backfill selections.
   */
  _selectAllTemplatesForActiveEmptyCategories(country) {
    if (!this.documentTypes?.length)
      return;
    for (const ctrl of this.documentTypes.controls) {
      const dg = ctrl;
      if (dg.get("country")?.value !== country)
        continue;
      const configs = dg.get("configurations");
      if (!configs)
        continue;
      for (let i = 0; i < configs.length; i++) {
        const configCtrl = configs.at(i);
        if (!configCtrl.get("active")?.value)
          continue;
        const category = configCtrl.get("documentCategory")?.value;
        const templates = this.templatesFor(country, category);
        if (!templates.length)
          continue;
        if (this.selectedCount(configCtrl) > 0)
          continue;
        this._selectAllTemplates(configCtrl, templates);
      }
    }
  }
  openPreview(pt) {
    const dt = this.documentTypeOf(pt);
    const data = {
      name: dt?.name || pt?.name || "",
      code: dt?.code,
      country: dt?.country,
      frontImage: dt?.frontImage,
      backImage: dt?.backImage
    };
    this._dialog.open(DocumentTypePreviewDialogComponent, {
      data,
      width: "720px",
      maxWidth: "95vw",
      maxHeight: "90vh",
      autoFocus: false
    });
  }
  _reindexCollapseState(removedIndex) {
    const nextExpanded = /* @__PURE__ */ new Set();
    const nextCollapsed = /* @__PURE__ */ new Set();
    for (const i of this._expandedCountries) {
      if (i === removedIndex)
        continue;
      nextExpanded.add(i > removedIndex ? i - 1 : i);
    }
    for (const i of this._userCollapsedCountries) {
      if (i === removedIndex)
        continue;
      nextCollapsed.add(i > removedIndex ? i - 1 : i);
    }
    this._expandedCountries = nextExpanded;
    this._userCollapsedCountries = nextCollapsed;
    const nextCategory = /* @__PURE__ */ new Set();
    for (const key of this._expandedCategoryLists) {
      const [idxStr, category] = key.split(":");
      const idx = Number(idxStr);
      if (Number.isNaN(idx) || idx === removedIndex)
        continue;
      const newIdx = idx > removedIndex ? idx - 1 : idx;
      nextCategory.add(`${newIdx}:${category}`);
    }
    this._expandedCategoryLists = nextCategory;
  }
  _reindexCountrySearch(removedIndex) {
    const next = /* @__PURE__ */ new Map();
    for (const [i, ctrl] of this._countrySearch) {
      if (i === removedIndex)
        continue;
      next.set(i > removedIndex ? i - 1 : i, ctrl);
    }
    this._countrySearch = next;
  }
  _takenCountries(exceptIndex) {
    const taken = /* @__PURE__ */ new Set();
    this.documentTypes?.controls.forEach((ctrl, i) => {
      if (i === exceptIndex)
        return;
      const code = ctrl.get("country")?.value;
      if (code)
        taken.add(code);
    });
    return taken;
  }
  _displayCountry(code) {
    if (!code)
      return "";
    return this._transloco.translate(this.countryNameKey(code));
  }
  _watchCountry(group) {
    const countryCtrl = group?.get("country");
    if (!countryCtrl)
      return;
    const initial = countryCtrl.value;
    if (initial)
      this._fetchTemplatesForCountry(initial);
    countryCtrl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((country) => {
      if (country)
        this._fetchTemplatesForCountry(country);
      this._cdr.markForCheck();
    });
  }
  _fetchTemplatesForCountry(country) {
    if (!country)
      return;
    if (this._loadingCountries.has(country))
      return;
    if (this._fetchedCountries.has(country))
      return;
    this._loadingCountries.add(country);
    this._cdr.markForCheck();
    this._setup.listAllPromptTemplates({
      in_country: country === "World" ? ["World"] : [country, "World"],
      populates: ["documentType"]
    }).subscribe({
      next: (response) => {
        const buckets = {};
        for (const pt of response?.data || []) {
          const dt = this.documentTypeOf(pt);
          const category = pt.documentCategory || dt?.category;
          if (!category)
            continue;
          if (!buckets[category])
            buckets[category] = [];
          buckets[category].push(pt);
        }
        Object.keys(buckets).forEach((k) => buckets[k].sort((a, b) => this.templateLabel(a).localeCompare(this.templateLabel(b))));
        this._templatesByCountry[country] = buckets;
        this._fetchedCountries.add(country);
        this._loadingCountries.delete(country);
        this._selectAllTemplatesForActiveEmptyCategories(country);
        this._cdr.markForCheck();
      },
      error: () => {
        this._templatesByCountry[country] = {};
        this._fetchedCountries.add(country);
        this._loadingCountries.delete(country);
        this._cdr.markForCheck();
      }
    });
  }
  static {
    this.\u0275fac = function DocumentVerificationTypeListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentVerificationTypeListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentVerificationTypeListComponent, selectors: [["document-verification-type-list"]], inputs: { form: "form", documentTypes: "documentTypes", target: "target" }, decls: 1, vars: 0, consts: [["countryAuto", "matAutocomplete"], [4, "transloco"], [1, "flex", "flex-col", "gap-3"], [1, "rounded-xl", "border", "border-dashed", "border-stone-300/80", "px-4", "py-6", "text-center", "text-xs", "text-stone-500", "dark:border-gray-700", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-2", "rounded-xl", "border", "border-stone-200/90", "bg-white", "px-3", "py-3", "dark:border-gray-700", "dark:bg-gray-900/60"], [1, "flex", "flex-col", "gap-3", "rounded-2xl", "border", "bg-stone-50", "p-4", "dark:bg-gray-900/40", 3, "ngClass", "formGroup"], ["mat-stroked-button", "", "type", "button", 1, "self-start", "rounded-xl", 3, "click"], [1, "!h-4", "!w-4"], [1, "text-xs", "text-red-700", "dark:text-red-300"], [1, "m-0", "text-xs", "font-semibold", "text-stone-700", "dark:text-stone-200"], [1, "flex", "flex-wrap", "gap-1.5"], ["type", "button", 1, "inline-flex", "max-w-full", "items-center", "gap-1.5", "rounded-full", "border", "px-2.5", "py-1", "text-left", "text-[11px]", "transition-colors", 3, "ngClass"], ["type", "button", 1, "inline-flex", "max-w-full", "items-center", "gap-1.5", "rounded-full", "border", "px-2.5", "py-1", "text-left", "text-[11px]", "transition-colors", 3, "click", "ngClass"], [1, "!h-3.5", "!w-3.5", "!text-[14px]", "!leading-none", "text-amber-600", "dark:text-amber-300", 3, "matTooltip"], [1, "truncate", "font-medium"], [1, "flex-shrink-0", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "flex-1", "flex-col", "gap-2"], ["type", "button", 1, "flex", "w-full", "items-start", "gap-2", "rounded-lg", "text-left", 3, "click"], [1, "mt-0.5", "!h-5", "!w-5", "flex-shrink-0", "text-stone-500", "dark:text-stone-400"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-amber-100", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-amber-800", "dark:bg-amber-950/50", "dark:text-amber-200"], [1, "mt-1", "flex", "flex-wrap", "items-center", "gap-1.5", "text-[11px]", "text-stone-500", "dark:text-stone-400"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[16rem]", "max-w-md", 3, "click"], ["matPrefix", "", 1, "!h-4", "!w-4", "text-stone-400"], ["matInput", "", "type", "text", "autocomplete", "off", 3, "focus", "blur", "formControl", "placeholder", "matAutocomplete"], ["autoActiveFirstOption", "", 3, "optionSelected"], [3, "value"], ["mat-stroked-button", "", "type", "button", "color", "warn", 1, "rounded-full", 3, "click"], [1, "!h-3", "!w-3", "!text-[12px]", "!leading-3"], ["aria-hidden", "true"], [1, "rounded-full", "border", "border-stone-200", "bg-white", "px-2", "py-0.5", "text-[10px]", "font-medium", "text-stone-600", "dark:border-gray-600", "dark:bg-gray-800", "dark:text-stone-300"], [3, "mousedown", "value"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "gap-2", "py-3", "text-xs", "text-stone-500", "dark:text-stone-400"], ["mode", "indeterminate", "diameter", "18"], [1, "flex", "flex-col", "gap-3", "border-t", "border-stone-200/80", "pt-3", "dark:border-gray-700"], [1, "flex", "flex-col", "gap-3", "rounded-xl", "border", "border-stone-200/80", "bg-white", "p-3", "dark:border-gray-700", "dark:bg-gray-900", 3, "formGroup"], [1, "text-[11px]", "text-amber-700", "dark:text-amber-400"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0"], [1, "m-0", "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], [1, "m-0", "mt-0.5", "text-[11px]", "text-stone-500", "dark:text-stone-400"], ["formControlName", "active", 3, "change", "disabled"], [1, "text-[11px]", "text-stone-500", "dark:text-stone-400"], [1, "text-[11px]", "text-amber-700", "dark:text-amber-300"], ["type", "button", "mat-stroked-button", "", 1, "self-start", "rounded-lg", "!text-xs"], [1, "m-0", "flex", "list-none", "flex-col", "gap-1.5", "p-0"], ["type", "button", "mat-stroked-button", "", 1, "self-start", "rounded-lg", "!text-xs", 3, "click"], [1, "flex", "items-center", "justify-between", "gap-3", "rounded-lg", "border", "border-stone-200/70", "px-3", "py-2", "dark:border-gray-700"], [1, "min-w-0", "flex-1", 3, "change", "checked"], [1, "inline-flex", "min-w-0", "items-center", "gap-2"], [1, "truncate", "text-sm", "text-stone-800", "dark:text-stone-100"], [1, "inline-flex", "flex-shrink-0", "items-center", "gap-1", "rounded-full", "border", "border-blue-200", "bg-blue-50", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], ["type", "button", "mat-icon-button", "", 1, "!h-8", "!w-8", "!min-w-0", "flex-shrink-0", 3, "click", "matTooltip"], [1, "!h-4", "!w-4", "text-stone-600", "dark:text-stone-300"]], template: function DocumentVerificationTypeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DocumentVerificationTypeListComponent_ng_container_0_Template, 11, 3, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSlideToggleModule,
      MatSlideToggle,
      MatTooltipModule,
      MatTooltip,
      TranslocoModule,
      TranslocoDirective
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentVerificationTypeListComponent, [{
    type: Component,
    args: [{ selector: "document-verification-type-list", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatAutocompleteModule,
      MatButtonModule,
      MatCheckboxModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSlideToggleModule,
      MatTooltipModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="flex flex-col gap-3">\r
        @if (documentTypes.controls.length === 0) {\r
            <p\r
                class="rounded-xl border border-dashed border-stone-300/80 px-4 py-6 text-center text-xs text-stone-500 dark:border-gray-700 dark:text-stone-400"\r
            >\r
                {{ t('smartEnrollProjects.setup.documents.types.empty') }}\r
            </p>\r
        } @else {\r
            <div\r
                class="flex flex-col gap-2 rounded-xl border border-stone-200/90 bg-white px-3 py-3 dark:border-gray-700 dark:bg-gray-900/60"\r
            >\r
                <p class="m-0 text-xs font-semibold text-stone-700 dark:text-stone-200">\r
                    {{\r
                        t('smartEnrollProjects.setup.documents.types.countriesConfigured', {\r
                            count: documentTypes.controls.length,\r
                        })\r
                    }}\r
                </p>\r
                <div class="flex flex-wrap gap-1.5">\r
                    @for (group of documentTypes.controls; track group; let i = $index) {\r
                        @let g = asGroup(group);\r
                        @let countryValue = g.get('country')?.value || '';\r
                        @let needsAttention = countryNeedsAttention(g);\r
                        <button\r
                            type="button"\r
                            class="inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1 text-left text-[11px] transition-colors"\r
                            [ngClass]="\r
                                needsAttention\r
                                    ? 'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200'\r
                                    : 'border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-200'\r
                            "\r
                            (click)="focusCountry(i)"\r
                        >\r
                            @if (needsAttention) {\r
                                <mat-icon\r
                                    class="!h-3.5 !w-3.5 !text-[14px] !leading-none text-amber-600 dark:text-amber-300"\r
                                    [matTooltip]="\r
                                        t('smartEnrollProjects.setup.documents.types.needsAttention')\r
                                    "\r
                                >\r
                                    warning\r
                                </mat-icon>\r
                            }\r
                            <span class="truncate font-medium">\r
                                {{\r
                                    countryValue\r
                                        ? t(countryNameKey(countryValue))\r
                                        : t('smartEnrollProjects.setup.documents.types.country')\r
                                }}\r
                            </span>\r
                            <span class="flex-shrink-0 text-stone-500 dark:text-stone-400">\r
                                {{\r
                                    t('smartEnrollProjects.setup.documents.types.summaryDocs', {\r
                                        count: totalSelected(g),\r
                                    })\r
                                }}\r
                            </span>\r
                        </button>\r
                    }\r
                </div>\r
            </div>\r
        }\r
\r
        @for (group of documentTypes.controls; track group; let i = $index) {\r
            @let g = asGroup(group);\r
            @let countryValue = g.get('country')?.value || '';\r
            @let expanded = isCountryExpanded(i);\r
            @let needsAttention = countryNeedsAttention(g);\r
            @let selectedTotal = totalSelected(g);\r
            @let activeCats = activeCategories(g);\r
\r
            <div\r
                [attr.id]="'doc-country-' + i"\r
                class="flex flex-col gap-3 rounded-2xl border bg-stone-50 p-4 dark:bg-gray-900/40"\r
                [ngClass]="\r
                    needsAttention\r
                        ? 'border-amber-300/80 dark:border-amber-800'\r
                        : 'border-stone-200/90 dark:border-gray-700'\r
                "\r
                [formGroup]="g"\r
            >\r
                <div class="flex flex-wrap items-start justify-between gap-3">\r
                    <div class="flex min-w-0 flex-1 flex-col gap-2">\r
                        <button\r
                            type="button"\r
                            class="flex w-full items-start gap-2 rounded-lg text-left"\r
                            (click)="toggleCountry(i, $event)"\r
                            [attr.aria-expanded]="expanded"\r
                            [attr.aria-label]="\r
                                expanded\r
                                    ? t('smartEnrollProjects.setup.documents.types.collapseCountry')\r
                                    : t('smartEnrollProjects.setup.documents.types.expandCountry')\r
                            "\r
                        >\r
                            <mat-icon\r
                                class="mt-0.5 !h-5 !w-5 flex-shrink-0 text-stone-500 dark:text-stone-400"\r
                            >\r
                                {{ expanded ? 'expand_more' : 'chevron_right' }}\r
                            </mat-icon>\r
                            <div class="min-w-0 flex-1">\r
                                <div class="flex flex-wrap items-center gap-2">\r
                                    <span class="text-sm font-semibold text-stone-800 dark:text-stone-100">\r
                                        {{\r
                                            countryValue\r
                                                ? t(countryNameKey(countryValue))\r
                                                : t('smartEnrollProjects.setup.documents.types.country')\r
                                        }}\r
                                    </span>\r
                                    @if (needsAttention) {\r
                                        <span\r
                                            class="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800 dark:bg-amber-950/50 dark:text-amber-200"\r
                                        >\r
                                            <mat-icon class="!h-3 !w-3 !text-[12px] !leading-3">\r
                                                warning\r
                                            </mat-icon>\r
                                            {{\r
                                                t(\r
                                                    'smartEnrollProjects.setup.documents.types.needsAttention'\r
                                                )\r
                                            }}\r
                                        </span>\r
                                    }\r
                                </div>\r
                                <div\r
                                    class="mt-1 flex flex-wrap items-center gap-1.5 text-[11px] text-stone-500 dark:text-stone-400"\r
                                >\r
                                    <span>\r
                                        {{\r
                                            t('smartEnrollProjects.setup.documents.types.summaryDocs', {\r
                                                count: selectedTotal,\r
                                            })\r
                                        }}\r
                                    </span>\r
                                    @if (activeCats.length) {\r
                                        <span aria-hidden="true">\xB7</span>\r
                                        @for (cat of activeCats; track cat) {\r
                                            <span\r
                                                class="rounded-full border border-stone-200 bg-white px-2 py-0.5 text-[10px] font-medium text-stone-600 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-300"\r
                                            >\r
                                                {{\r
                                                    t(\r
                                                        'smartEnrollProjects.setup.documents.category.' +\r
                                                            cat\r
                                                    )\r
                                                }}\r
                                            </span>\r
                                        }\r
                                    }\r
                                </div>\r
                            </div>\r
                        </button>\r
\r
                        <mat-form-field\r
                            appearance="outline"\r
                            subscriptSizing="dynamic"\r
                            class="min-w-[16rem] max-w-md"\r
                            (click)="$event.stopPropagation()"\r
                        >\r
                            <mat-label>\r
                                {{ t('smartEnrollProjects.setup.documents.types.country') }}\r
                            </mat-label>\r
                            <mat-icon matPrefix class="!h-4 !w-4 text-stone-400">search</mat-icon>\r
                            <input\r
                                matInput\r
                                type="text"\r
                                autocomplete="off"\r
                                [formControl]="countrySearchCtrl(i)"\r
                                [placeholder]="t('smartEnrollProjects.setup.documents.types.searchCountry')"\r
                                [matAutocomplete]="countryAuto"\r
                                (focus)="onCountrySearchFocus(i, $any($event.target))"\r
                                (blur)="onCountrySearchBlur(i)"\r
                            />\r
                            <mat-autocomplete\r
                                #countryAuto="matAutocomplete"\r
                                autoActiveFirstOption\r
                                (optionSelected)="onCountryPicked(i, $event)"\r
                            >\r
                                @for (c of filteredCountries(i); track c.country) {\r
                                    <mat-option\r
                                        [value]="c.country"\r
                                        (mousedown)="$event.preventDefault()"\r
                                    >\r
                                        {{ t(c.name) }}\r
                                    </mat-option>\r
                                }\r
                            </mat-autocomplete>\r
                        </mat-form-field>\r
                    </div>\r
\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        color="warn"\r
                        class="rounded-full"\r
                        (click)="removeType(i)"\r
                    >\r
                        <mat-icon class="!h-4 !w-4">delete</mat-icon>\r
                        {{ t('smartEnrollProjects.setup.documents.types.remove') }}\r
                    </button>\r
                </div>\r
\r
                @if (expanded) {\r
                    @if (!countryValue) {\r
                        <p class="text-xs text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.setup.documents.types.pickCountryFirst') }}\r
                        </p>\r
                    } @else if (isLoading(countryValue)) {\r
                        <div\r
                            class="flex items-center gap-2 py-3 text-xs text-stone-500 dark:text-stone-400"\r
                        >\r
                            <mat-progress-spinner\r
                                mode="indeterminate"\r
                                diameter="18"\r
                            ></mat-progress-spinner>\r
                            <span>{{ t('smartEnrollProjects.setup.documents.types.loading') }}</span>\r
                        </div>\r
                    } @else {\r
                        <div\r
                            class="flex flex-col gap-3 border-t border-stone-200/80 pt-3 dark:border-gray-700"\r
                        >\r
                            @for (cfg of orderedConfigurationControls(g); track cfg) {\r
                                @let configCtrl = cfg;\r
                                @let category = configCtrl.get('documentCategory')?.value || '';\r
                                @let templates = templatesFor(countryValue, category);\r
                                @let selected = selectedCount(configCtrl);\r
                                @let otherCategories = categoriesWithTemplates(\r
                                    countryValue,\r
                                    category\r
                                );\r
                                @let listExpanded = isCategoryListExpanded(\r
                                    i,\r
                                    category,\r
                                    templates.length\r
                                );\r
                                @let canCollapseList =\r
                                    templates.length > categoryListCollapseThreshold;\r
\r
                                <div\r
                                    class="flex flex-col gap-3 rounded-xl border border-stone-200/80 bg-white p-3 dark:border-gray-700 dark:bg-gray-900"\r
                                    [formGroup]="asGroup(configCtrl)"\r
                                >\r
                                    <div class="flex items-start justify-between gap-3">\r
                                        <div class="min-w-0">\r
                                            <p\r
                                                class="m-0 text-sm font-semibold text-stone-800 dark:text-stone-100"\r
                                            >\r
                                                {{\r
                                                    t(\r
                                                        'smartEnrollProjects.setup.documents.category.' +\r
                                                            category\r
                                                    )\r
                                                }}\r
                                            </p>\r
                                            <p\r
                                                class="m-0 mt-0.5 text-[11px] text-stone-500 dark:text-stone-400"\r
                                            >\r
                                                @if (templates.length === 0) {\r
                                                    {{\r
                                                        t(\r
                                                            'smartEnrollProjects.setup.documents.types.noTemplatesShort',\r
                                                            {\r
                                                                category: t(\r
                                                                    'smartEnrollProjects.setup.documents.category.' +\r
                                                                        category\r
                                                                ),\r
                                                                country: countryValue,\r
                                                            }\r
                                                        )\r
                                                    }}\r
                                                } @else {\r
                                                    {{\r
                                                        t(\r
                                                            'smartEnrollProjects.setup.documents.types.selectedOfAvailable',\r
                                                            {\r
                                                                selected: selected,\r
                                                                total: templates.length,\r
                                                            }\r
                                                        )\r
                                                    }}\r
                                                }\r
                                            </p>\r
                                        </div>\r
                                        <mat-slide-toggle\r
                                            formControlName="active"\r
                                            [disabled]="templates.length === 0"\r
                                            (change)="\r
                                                onActiveToggleChange(\r
                                                    g,\r
                                                    configCtrl,\r
                                                    countryValue,\r
                                                    category,\r
                                                    $event.checked\r
                                                )\r
                                            "\r
                                        ></mat-slide-toggle>\r
                                    </div>\r
\r
                                    @if (templates.length === 0) {\r
                                        <p class="text-[11px] text-stone-500 dark:text-stone-400">\r
                                            {{\r
                                                t(\r
                                                    'smartEnrollProjects.setup.documents.types.noTemplates',\r
                                                    {\r
                                                        category: t(\r
                                                            'smartEnrollProjects.setup.documents.category.' +\r
                                                                category\r
                                                        ),\r
                                                        country: countryValue,\r
                                                    }\r
                                                )\r
                                            }}\r
                                        </p>\r
                                        @if (otherCategories.length) {\r
                                            <p class="text-[11px] text-amber-700 dark:text-amber-300">\r
                                                {{\r
                                                    t(\r
                                                        'smartEnrollProjects.setup.documents.types.tryOtherCategories',\r
                                                        {\r
                                                            categories: otherCategoryLabels(\r
                                                                countryValue,\r
                                                                category\r
                                                            ),\r
                                                        }\r
                                                    )\r
                                                }}\r
                                            </p>\r
                                        }\r
                                    } @else {\r
                                        @if (canCollapseList) {\r
                                            <button\r
                                                type="button"\r
                                                mat-stroked-button\r
                                                class="self-start rounded-lg !text-xs"\r
                                                (click)="toggleCategoryList(i, category, $event)"\r
                                                [attr.aria-expanded]="listExpanded"\r
                                            >\r
                                                <mat-icon class="!h-4 !w-4">\r
                                                    {{\r
                                                        listExpanded ? 'unfold_less' : 'unfold_more'\r
                                                    }}\r
                                                </mat-icon>\r
                                                {{\r
                                                    listExpanded\r
                                                        ? t(\r
                                                              'smartEnrollProjects.setup.documents.types.hideDocuments'\r
                                                          )\r
                                                        : t(\r
                                                              'smartEnrollProjects.setup.documents.types.showDocuments'\r
                                                          )\r
                                                }}\r
                                            </button>\r
                                        }\r
\r
                                        @if (listExpanded) {\r
                                            <ul class="m-0 flex list-none flex-col gap-1.5 p-0">\r
                                                @for (pt of templates; track pt._id) {\r
                                                    <li\r
                                                        class="flex items-center justify-between gap-3 rounded-lg border border-stone-200/70 px-3 py-2 dark:border-gray-700"\r
                                                    >\r
                                                        <mat-checkbox\r
                                                            [checked]="\r
                                                                isTemplateSelected(configCtrl, pt._id)\r
                                                            "\r
                                                            (change)="\r
                                                                toggleTemplate(\r
                                                                    configCtrl,\r
                                                                    pt,\r
                                                                    $event.checked\r
                                                                )\r
                                                            "\r
                                                            class="min-w-0 flex-1"\r
                                                        >\r
                                                            <span\r
                                                                class="inline-flex min-w-0 items-center gap-2"\r
                                                            >\r
                                                                <span\r
                                                                    class="truncate text-sm text-stone-800 dark:text-stone-100"\r
                                                                >\r
                                                                    {{ templateLabel(pt) }}\r
                                                                </span>\r
                                                                @if (isGlobalTemplate(pt)) {\r
                                                                    <span\r
                                                                        class="inline-flex flex-shrink-0 items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200"\r
                                                                    >\r
                                                                        <mat-icon\r
                                                                            class="!h-3 !w-3 !text-[12px] !leading-3"\r
                                                                        >\r
                                                                            public\r
                                                                        </mat-icon>\r
                                                                        {{\r
                                                                            t(\r
                                                                                'smartEnrollProjects.setup.documents.types.globalBadge'\r
                                                                            )\r
                                                                        }}\r
                                                                    </span>\r
                                                                }\r
                                                            </span>\r
                                                        </mat-checkbox>\r
                                                        <button\r
                                                            type="button"\r
                                                            mat-icon-button\r
                                                            class="!h-8 !w-8 !min-w-0 flex-shrink-0"\r
                                                            (click)="openPreview(pt)"\r
                                                            [matTooltip]="\r
                                                                t(\r
                                                                    'smartEnrollProjects.setup.documents.types.preview'\r
                                                                )\r
                                                            "\r
                                                            [attr.aria-label]="\r
                                                                t(\r
                                                                    'smartEnrollProjects.setup.documents.types.preview'\r
                                                                )\r
                                                            "\r
                                                        >\r
                                                            <mat-icon\r
                                                                class="!h-4 !w-4 text-stone-600 dark:text-stone-300"\r
                                                            >\r
                                                                visibility\r
                                                            </mat-icon>\r
                                                        </button>\r
                                                    </li>\r
                                                }\r
                                            </ul>\r
                                        }\r
                                    }\r
                                </div>\r
                            }\r
                        </div>\r
\r
                        @if (activeCats.length === 0) {\r
                            <p class="text-[11px] text-amber-700 dark:text-amber-400">\r
                                {{ t('smartEnrollProjects.setup.documents.types.activateHint') }}\r
                            </p>\r
                        }\r
                    }\r
                }\r
            </div>\r
        }\r
\r
        <button\r
            mat-stroked-button\r
            type="button"\r
            class="self-start rounded-xl"\r
            (click)="addType()"\r
        >\r
            <mat-icon class="!h-4 !w-4">add</mat-icon>\r
            {{ t('smartEnrollProjects.setup.documents.types.add') }}\r
        </button>\r
\r
        @if (verificationErrors.length) {\r
            <p class="text-xs text-red-700 dark:text-red-300">\r
                {{ t('smartEnrollProjects.setup.documents.types.invalid') }}\r
            </p>\r
        }\r
    </div>\r
</ng-container>\r
` }]
  }], null, { form: [{
    type: Input
  }], documentTypes: [{
    type: Input
  }], target: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentVerificationTypeListComponent, { className: "DocumentVerificationTypeListComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/documents/document-verification-type/document-verification-type-list.component.ts", lineNumber: 73 });
})();

export {
  DEFAULT_PHONE_COUNTRY_CODE,
  PHONE_COUNTRY_CODES,
  SetupService,
  SetupFormFactory,
  criminalCheckDocs,
  criminalCheckDocsUrl,
  buildCountryCheckSections,
  isCountryCheckSelected,
  toggleCountryCheck,
  DocumentVerificationTypeListComponent
};
//# sourceMappingURL=chunk-Q3KIBA73.js.map
