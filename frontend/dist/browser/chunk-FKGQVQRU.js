import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-QNPXLBXJ.js";
import {
  MatChipsModule
} from "./chunk-7S2EHCDW.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-RWPBVZ63.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-ZS5MQPSO.js";
import {
  FuseConfirmationService
} from "./chunk-EG4DN2O6.js";
import "./chunk-6FS3LBOZ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DXMIRT7Q.js";
import {
  CountryService
} from "./chunk-GFJLSNKF.js";
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-LTXJQKAS.js";
import "./chunk-A6T5DVED.js";
import "./chunk-GMB4P7VL.js";
import "./chunk-B4CPLDBC.js";
import "./chunk-MJXNRHWH.js";
import "./chunk-346ISJSG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-HZKTYM3F.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-KCV7S453.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-AY2HQ4EH.js";
import {
  MatOption
} from "./chunk-SYP4RNRN.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatSuffix
} from "./chunk-3YVZWUPK.js";
import "./chunk-L4JZMXIC.js";
import "./chunk-2W5F3UIW.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  Input,
  JsonPipe,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgClass,
  NgIf,
  Subject,
  catchError,
  inject,
  of,
  setClassMetadata,
  signal,
  takeUntil,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YTOBX75K.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/shared/validators/validation-patterns.ts
var STRICT_URL_PATTERN = /^https?:\/\/(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?|localhost|(?:\d{1,3}\.){3}\d{1,3})(?::\d+)?(?:\/[^\s]*)?$/i;
var PERSON_NAME_PATTERN = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,100}$/;
var CITY_NAME_PATTERN = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,80}$/;
var ADDRESS_PATTERN = /^[a-zA-Z0-9À-ÖØ-öø-ÿ\s.,#-]{5,120}$/;

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
        countryCode: "",
        email: false,
        emailGateway: "mailgun",
        fullName: true,
        fullNameStyle: "separate",
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

// src/app/modules/smart-enroll/projects/setup/breadcrumbs/breadcrumbs.component.ts
var _c0 = (a0, a1) => ({ current: a0, total: a1 });
var _c1 = (a0, a1, a2, a3) => ({ "bg-stone-900 text-white dark:bg-white dark:text-stone-900": a0, "text-stone-500": a1, "hover:bg-stone-100 dark:hover:bg-gray-800": a2, "opacity-50 cursor-not-allowed": a3 });
var _c2 = (a0, a1) => ({ "bg-white/20 text-white": a0, "bg-stone-100 text-stone-500 dark:bg-gray-800": a1 });
function SetupBreadcrumbsComponent_ng_container_0_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 9);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function SetupBreadcrumbsComponent_ng_container_0_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_9_r2 = \u0275\u0275nextContext().$index;
    \u0275\u0275textInterpolate1(" ", \u0275$index_9_r2 + 1, " ");
  }
}
function SetupBreadcrumbsComponent_ng_container_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function SetupBreadcrumbsComponent_ng_container_0_For_4_Template_button_click_0_listener() {
      const \u0275$index_9_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onStepClick(\u0275$index_9_r2));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275template(2, SetupBreadcrumbsComponent_ng_container_0_For_4_Conditional_2_Template, 2, 0, "mat-icon", 9)(3, SetupBreadcrumbsComponent_ng_container_0_For_4_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const \u0275$index_9_r2 = ctx.$index;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r2.canNavigate || !ctx_r2.canNavigateToStep(\u0275$index_9_r2))("ngClass", \u0275\u0275pureFunction4(5, _c1, \u0275$index_9_r2 === ctx_r2.stepIndex, \u0275$index_9_r2 !== ctx_r2.stepIndex, \u0275$index_9_r2 !== ctx_r2.stepIndex && ctx_r2.canNavigate && ctx_r2.canNavigateToStep(\u0275$index_9_r2), !ctx_r2.canNavigate || !ctx_r2.canNavigateToStep(\u0275$index_9_r2)));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c2, \u0275$index_9_r2 === ctx_r2.stepIndex, \u0275$index_9_r2 !== ctx_r2.stepIndex));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isStepValid && ctx_r2.isStepValid(\u0275$index_9_r2) ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5(step_r4), " ");
  }
}
function SetupBreadcrumbsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275repeaterCreate(3, SetupBreadcrumbsComponent_ng_container_0_For_4_Template, 5, 13, "button", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
    \u0275\u0275element(7, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.steps);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", (ctx_r2.stepIndex + 1) / ctx_r2.steps.length * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.steps.steps_count", \u0275\u0275pureFunction2(3, _c0, ctx_r2.stepIndex + 1, ctx_r2.steps.length)));
  }
}
var SetupBreadcrumbsComponent = class _SetupBreadcrumbsComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._cdr = inject(ChangeDetectorRef);
    this._setup = inject(SetupService);
    this._router = inject(Router);
    this._unsub$ = new Subject();
    this.projectId = "";
    this.stepIndex = 0;
    this.steps = [];
    this.steps = this._setup.initialSteps;
    this._initSubscribers();
  }
  ngAfterViewInit() {
    if (this.form)
      this._initFormSubscribers();
  }
  ngOnChanges(changes) {
    if (changes["form"] && this.form)
      this._initFormSubscribers();
  }
  ngOnDestroy() {
    this._unsub$.next();
    this._unsub$.complete();
  }
  get canNavigate() {
    return !this.loading && !this.saving;
  }
  canNavigateToStep(target) {
    if (target === this.stepIndex)
      return true;
    if (target === 0)
      return true;
    if (target > this.stepIndex)
      return this.isStepValid?.(this.stepIndex) ?? false;
    return this._areAllPreviousStepsValid(target);
  }
  onStepClick(target) {
    if (!this.canNavigate || target === this.stepIndex)
      return;
    if (!this._areAllPreviousStepsValid(target))
      return;
    this._router.navigate(["/smart-enroll/projects", this.projectId, "setup", target]);
  }
  _areAllPreviousStepsValid(target) {
    if (target === 0)
      return true;
    for (let i = 0; i < target; i++) {
      if (!this.isStepValid?.(i))
        return false;
    }
    return true;
  }
  _initFormSubscribers() {
    this._setSteps(this.form.get("target")?.value);
    this.form.get("target")?.valueChanges.pipe(takeUntil(this._unsub$)).subscribe((target) => this._setSteps(target));
    setTimeout(() => this._cdr.markForCheck(), 0);
  }
  _initSubscribers() {
    this._setup.stepIndex$.pipe(takeUntil(this._unsub$)).subscribe((step) => {
      this.stepIndex = step;
      this._cdr.markForCheck();
    });
    this._setup.projectId$.pipe(takeUntil(this._unsub$)).subscribe((projectId) => {
      this.projectId = projectId;
      this._cdr.markForCheck();
    });
  }
  _setSteps(target) {
    if (!target)
      this.steps = this._setup.initialSteps;
    else if (target === "business")
      this.steps = this._setup.businessSteps;
    else
      this.steps = this._setup.personalSteps;
    this._cdr.markForCheck();
  }
  static {
    this.\u0275fac = function SetupBreadcrumbsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupBreadcrumbsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupBreadcrumbsComponent, selectors: [["setup-breadcrumbs"]], inputs: { form: "form", loading: "loading", saving: "saving", isStepValid: "isStepValid" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "w-full", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "flex", "flex-1", "items-center", "gap-1", "overflow-x-auto"], ["type", "button", 1, "flex", "shrink-0", "items-center", "gap-1.5", "whitespace-nowrap", "rounded-full", "px-3", "py-1.5", "text-xs", "font-semibold", "tracking-tight", "transition-colors", 3, "disabled", "ngClass"], [1, "flex", "shrink-0", "items-center", "gap-3", "rounded-full", "border", "border-stone-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-stone-600", "dark:border-gray-700", "dark:text-stone-300"], [1, "relative", "h-1.5", "w-32", "overflow-hidden", "rounded-full", "bg-stone-200", "dark:bg-gray-800"], [1, "absolute", "left-0", "top-0", "h-full", "bg-stone-900", "transition-all", "duration-300", "dark:bg-white"], ["type", "button", 1, "flex", "shrink-0", "items-center", "gap-1.5", "whitespace-nowrap", "rounded-full", "px-3", "py-1.5", "text-xs", "font-semibold", "tracking-tight", "transition-colors", 3, "click", "disabled", "ngClass"], [1, "grid", "h-5", "w-5", "place-items-center", "rounded-full", "text-[10px]", "font-bold", 3, "ngClass"], [1, "!h-3", "!w-3", "!text-base"]], template: function SetupBreadcrumbsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupBreadcrumbsComponent_ng_container_0_Template, 10, 6, "ng-container", 0);
      }
    }, dependencies: [CommonModule, NgClass, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=breadcrumbs.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupBreadcrumbsComponent, [{
    type: Component,
    args: [{ selector: "setup-breadcrumbs", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="flex w-full flex-wrap items-center justify-between gap-3">
        <div class="flex flex-1 items-center gap-1 overflow-x-auto">
            @for (step of steps; track step; let i = $index) {
                <button
                    type="button"
                    [disabled]="!canNavigate || !canNavigateToStep(i)"
                    (click)="onStepClick(i)"
                    [ngClass]="{
                        'bg-stone-900 text-white dark:bg-white dark:text-stone-900': i === stepIndex,
                        'text-stone-500': i !== stepIndex,
                        'hover:bg-stone-100 dark:hover:bg-gray-800': i !== stepIndex && canNavigate && canNavigateToStep(i),
                        'opacity-50 cursor-not-allowed': !canNavigate || !canNavigateToStep(i)
                    }"
                    class="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold tracking-tight transition-colors"
                >
                    <span
                        [ngClass]="{
                            'bg-white/20 text-white': i === stepIndex,
                            'bg-stone-100 text-stone-500 dark:bg-gray-800': i !== stepIndex
                        }"
                        class="grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold"
                    >
                        @if (isStepValid && isStepValid(i)) {
                            <mat-icon class="!h-3 !w-3 !text-base">check</mat-icon>
                        } @else {
                            {{ i + 1 }}
                        }
                    </span>
                    {{ t(step) }}
                </button>
            }
        </div>

        <div
            class="flex shrink-0 items-center gap-3 rounded-full border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 dark:border-gray-700 dark:text-stone-300"
        >
            <div class="relative h-1.5 w-32 overflow-hidden rounded-full bg-stone-200 dark:bg-gray-800">
                <div
                    class="absolute left-0 top-0 h-full bg-stone-900 transition-all duration-300 dark:bg-white"
                    [style.width.%]="((stepIndex + 1) / steps.length) * 100"
                ></div>
            </div>
            <span>{{ t('smartEnrollProjects.setup.steps.steps_count', { current: stepIndex + 1, total: steps.length }) }}</span>
        </div>
    </div>
</ng-container>
`, styles: ["/* src/app/modules/smart-enroll/projects/setup/breadcrumbs/breadcrumbs.component.scss */\n:host {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=breadcrumbs.component.css.map */\n"] }]
  }], () => [], { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }], isStepValid: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupBreadcrumbsComponent, { className: "SetupBreadcrumbsComponent", filePath: "src/app/modules/smart-enroll/projects/setup/breadcrumbs/breadcrumbs.component.ts", lineNumber: 34 });
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

// src/app/modules/smart-enroll/projects/setup/steps/basic-setup/basic-setup.component.ts
var _forTrack0 = ($index, $item) => $item.country;
function SetupBasicSetupComponent_ng_container_0_Conditional_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 28);
    \u0275\u0275listener("click", function SetupBasicSetupComponent_ng_container_0_Conditional_27_For_2_Template_button_click_2_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeCountry(c_r3));
    });
    \u0275\u0275elementStart(3, "mat-icon", 29);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.countryLabel(c_r3), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r5("smartEnrollProjects.setup.basicSetup.allowed.remove"));
  }
}
function SetupBasicSetupComponent_ng_container_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, SetupBasicSetupComponent_ng_container_0_Conditional_27_For_2_Template, 5, 2, "span", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.allowedCountries);
  }
}
function SetupBasicSetupComponent_ng_container_0_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", c_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5(c_r6.name));
  }
}
function SetupBasicSetupComponent_ng_container_0_For_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", c_r7.country);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5(c_r7.name));
  }
}
function SetupBasicSetupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 1)(2, "section", 2)(3, "header", 3)(4, "h2", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "mat-form-field", 7)(10, "mat-label");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 8);
    \u0275\u0275elementStart(13, "mat-hint", 9)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "mat-form-field", 7)(17, "mat-label");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "section", 2)(21, "header", 3)(22, "h2", 4);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 5);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 11);
    \u0275\u0275template(27, SetupBasicSetupComponent_ng_container_0_Conditional_27_Template, 3, 0, "div", 12);
    \u0275\u0275elementStart(28, "mat-form-field", 7)(29, "mat-label");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-select", 13);
    \u0275\u0275listener("selectionChange", function SetupBasicSetupComponent_ng_container_0_Template_mat_select_selectionChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.addCountry($event.value);
      return \u0275\u0275resetView($event.source.value = null);
    });
    \u0275\u0275repeaterCreate(32, SetupBasicSetupComponent_ng_container_0_For_33_Template, 2, 2, "mat-option", 14, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "section", 2)(35, "header", 3)(36, "h2", 4);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 5);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 15)(41, "mat-form-field", 7)(42, "mat-label");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-form-field", 7)(46, "mat-label");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "section", 18)(50, "header", 3)(51, "h2", 4);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 5);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 15)(56, "mat-form-field", 7)(57, "mat-label");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "mat-form-field", 7)(61, "mat-label");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "mat-form-field", 21)(65, "mat-label");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "mat-form-field", 21)(69, "mat-label");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "mat-form-field", 7)(73, "mat-label");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "mat-form-field", 7)(77, "mat-label");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "mat-form-field", 21)(81, "mat-label");
    \u0275\u0275text(82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "mat-select", 26);
    \u0275\u0275repeaterCreate(84, SetupBasicSetupComponent_ng_container_0_For_85_Template, 2, 2, "mat-option", 14, _forTrack0);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.basicSetup.identity.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.basicSetup.identity.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.identity.name"));
    \u0275\u0275advance();
    \u0275\u0275property("maxlength", ctx_r3.MAX_NAME_LENGTH + 1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-amber-700", ctx_r3.nameLengthStatus === "warning")("text-red-700", ctx_r3.nameLengthStatus === "danger")("dark:text-amber-300", ctx_r3.nameLengthStatus === "warning")("dark:text-red-300", ctx_r3.nameLengthStatus === "danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r3.nameLength, "/", ctx_r3.MAX_NAME_LENGTH, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.identity.contactEmail"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.basicSetup.allowed.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.basicSetup.allowed.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.allowedCountries.length ? 27 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.allowed.add"));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.ipCountries);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.basicSetup.compliance.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.basicSetup.compliance.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.compliance.privacyUrl"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.compliance.termsUrl"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.basicSetup.dpo.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.basicSetup.dpo.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.dpo.name"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.dpo.email"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.dpo.address"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.dpo.address2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.dpo.city"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.dpo.postalCode"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.basicSetup.dpo.country"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.filteredDataProtectionCountries);
  }
}
var SetupBasicSetupComponent = class _SetupBasicSetupComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._countryService = inject(CountryService);
    this._transloco = inject(TranslocoService);
    this.countries = this._countryService.countries;
    this.ipCountries = this._countryService.ipCountries;
    this.allowedCountriesSearch = "";
    this.dataProtectionCountrySearch = "";
    this.MAX_NAME_LENGTH = 60;
  }
  get nameLength() {
    return this.form?.get("name")?.value?.length || 0;
  }
  get nameLengthStatus() {
    const length = this.nameLength;
    if (length > this.MAX_NAME_LENGTH)
      return "danger";
    if (length > this.MAX_NAME_LENGTH * 0.8)
      return "warning";
    return "safe";
  }
  get filteredAllowedCountries() {
    const term = this.allowedCountriesSearch.toLowerCase();
    return this.ipCountries.filter((c) => this._transloco.translate(c.name).toLowerCase().includes(term));
  }
  get filteredDataProtectionCountries() {
    const term = this.dataProtectionCountrySearch.toLowerCase();
    return this.countries.filter((c) => c.country.toLowerCase() !== "all" && this._transloco.translate(c.name).toLowerCase().includes(term));
  }
  get allowedCountries() {
    return this.form?.get("allowedCountries")?.value || [];
  }
  addCountry(country) {
    const values = new Set(this.allowedCountries);
    if (country.country === "All") {
      this.form.get("allowedCountries")?.setValue(["All"]);
      return;
    }
    if (values.has("All"))
      values.delete("All");
    values.add(country.country);
    this.form.get("allowedCountries")?.setValue(Array.from(values));
  }
  removeCountry(country) {
    const values = new Set(this.allowedCountries);
    values.delete(country);
    this.form.get("allowedCountries")?.setValue(Array.from(values));
  }
  countryLabel(country) {
    const found = this.countries.find((c) => c.country === country);
    return found ? this._transloco.translate(found.name) : country;
  }
  static {
    this.\u0275fac = function SetupBasicSetupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupBasicSetupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupBasicSetupComponent, selectors: [["setup-basic-setup"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "flex-col", "gap-6", 3, "formGroup"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-4"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "formControlName", "name", "autocomplete", "off", 3, "maxlength"], ["align", "end"], ["matInput", "", "formControlName", "contactEmail", "type", "email", "autocomplete", "email"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "flex-wrap", "gap-2"], [3, "selectionChange", "value"], [3, "value"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["matInput", "", "formControlName", "privacyUrl", "type", "url", "placeholder", "https://"], ["matInput", "", "formControlName", "termsAndConditionsUrl", "type", "url", "placeholder", "https://"], ["formGroupName", "dataProtection", 1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "email", "type", "email"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "md:col-span-2"], ["matInput", "", "formControlName", "address"], ["matInput", "", "formControlName", "address2"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "postalCode"], ["formControlName", "country"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-stone-100", "px-3", "py-1", "text-xs", "font-medium", "text-stone-700", "dark:bg-gray-800", "dark:text-stone-200"], ["type", "button", 1, "rounded-full", "p-0.5", "hover:bg-stone-200", "dark:hover:bg-gray-700", 3, "click"], [1, "!h-3.5", "!w-3.5", "!text-base"]], template: function SetupBasicSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupBasicSetupComponent_ng_container_0_Template, 86, 34, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      MatButtonModule,
      MatChipsModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslocoModule,
      TranslocoDirective
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupBasicSetupComponent, [{
    type: Component,
    args: [{ selector: "setup-basic-setup", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatChipsModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <form [formGroup]="form" class="flex flex-col gap-6">
        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.basicSetup.identity.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.basicSetup.identity.subtitle') }}
                </p>
            </header>

            <div class="flex flex-col gap-4">
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.identity.name') }}</mat-label>
                    <input matInput formControlName="name" [maxlength]="MAX_NAME_LENGTH + 1" autocomplete="off" />
                    <mat-hint align="end">
                        <span
                            [class.text-amber-700]="nameLengthStatus === 'warning'"
                            [class.text-red-700]="nameLengthStatus === 'danger'"
                            [class.dark:text-amber-300]="nameLengthStatus === 'warning'"
                            [class.dark:text-red-300]="nameLengthStatus === 'danger'"
                        >
                            {{ nameLength }}/{{ MAX_NAME_LENGTH }}
                        </span>
                    </mat-hint>
                </mat-form-field>

                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.identity.contactEmail') }}</mat-label>
                    <input matInput formControlName="contactEmail" type="email" autocomplete="email" />
                </mat-form-field>
            </div>
        </section>

        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.basicSetup.allowed.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.basicSetup.allowed.subtitle') }}
                </p>
            </header>

            <div class="flex flex-col gap-3">
                @if (allowedCountries.length) {
                    <div class="flex flex-wrap gap-2">
                        @for (c of allowedCountries; track c) {
                            <span
                                class="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700 dark:bg-gray-800 dark:text-stone-200"
                            >
                                {{ countryLabel(c) }}
                                <button
                                    type="button"
                                    class="rounded-full p-0.5 hover:bg-stone-200 dark:hover:bg-gray-700"
                                    (click)="removeCountry(c)"
                                    [attr.aria-label]="t('smartEnrollProjects.setup.basicSetup.allowed.remove')"
                                >
                                    <mat-icon class="!h-3.5 !w-3.5 !text-base">close</mat-icon>
                                </button>
                            </span>
                        }
                    </div>
                }

                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.allowed.add') }}</mat-label>
                    <mat-select
                        [value]="null"
                        (selectionChange)="addCountry($event.value); $event.source.value = null"
                    >
                        @for (c of ipCountries; track c.country) {
                            <mat-option [value]="c">{{ t(c.name) }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        </section>

        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.basicSetup.compliance.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.basicSetup.compliance.subtitle') }}
                </p>
            </header>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.compliance.privacyUrl') }}</mat-label>
                    <input matInput formControlName="privacyUrl" type="url" placeholder="https://" />
                </mat-form-field>

                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.compliance.termsUrl') }}</mat-label>
                    <input matInput formControlName="termsAndConditionsUrl" type="url" placeholder="https://" />
                </mat-form-field>
            </div>
        </section>

        <section
            formGroupName="dataProtection"
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.basicSetup.dpo.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.basicSetup.dpo.subtitle') }}
                </p>
            </header>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.name') }}</mat-label>
                    <input matInput formControlName="name" />
                </mat-form-field>
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.email') }}</mat-label>
                    <input matInput formControlName="email" type="email" />
                </mat-form-field>
                <mat-form-field appearance="outline" subscriptSizing="dynamic" class="md:col-span-2">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.address') }}</mat-label>
                    <input matInput formControlName="address" />
                </mat-form-field>
                <mat-form-field appearance="outline" subscriptSizing="dynamic" class="md:col-span-2">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.address2') }}</mat-label>
                    <input matInput formControlName="address2" />
                </mat-form-field>
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.city') }}</mat-label>
                    <input matInput formControlName="city" />
                </mat-form-field>
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.postalCode') }}</mat-label>
                    <input matInput formControlName="postalCode" />
                </mat-form-field>
                <mat-form-field appearance="outline" subscriptSizing="dynamic" class="md:col-span-2">
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.country') }}</mat-label>
                    <mat-select formControlName="country">
                        @for (c of filteredDataProtectionCountries; track c.country) {
                            <mat-option [value]="c.country">{{ t(c.name) }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        </section>
    </form>
</ng-container>
` }]
  }], null, { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupBasicSetupComponent, { className: "SetupBasicSetupComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/basic-setup/basic-setup.component.ts", lineNumber: 36 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/documents/document-verification-type/document-verification-type-list.component.ts
var _forTrack02 = ($index, $item) => $item.country;
function DocumentVerificationTypeListComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.empty"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("value", c_r4.country);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(c_r4.name));
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 14)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "mat-slide-toggle", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_24_0;
    const cfg_r7 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r5.asGroup(cfg_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.category." + ((tmp_24_0 = cfg_r7.get("documentCategory")) == null ? null : tmp_24_0.value)), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.activateHint"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 7)(2, "mat-form-field", 8)(3, "mat-label");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 9);
    \u0275\u0275repeaterCreate(6, DocumentVerificationTypeListComponent_ng_container_0_For_4_For_7_Template, 2, 2, "mat-option", 10, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 11);
    \u0275\u0275listener("click", function DocumentVerificationTypeListComponent_ng_container_0_For_4_Template_button_click_8_listener() {
      const \u0275$index_11_r5 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.removeType(\u0275$index_11_r5));
    });
    \u0275\u0275elementStart(9, "mat-icon", 5);
    \u0275\u0275text(10, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, DocumentVerificationTypeListComponent_ng_container_0_For_4_For_16_Template, 4, 2, "label", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_17_Template, 2, 1, "p", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r5.asGroup(group_r8));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.country"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r5.countries);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.remove"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.configurations"), " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.asArray(ctx_r5.asGroup(group_r8).get("configurations")).controls);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.activeCategories(ctx_r5.asGroup(group_r8)).length === 0 ? 17 : -1);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
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
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275template(2, DocumentVerificationTypeListComponent_ng_container_0_Conditional_2_Template, 2, 1, "p", 2);
    \u0275\u0275repeaterCreate(3, DocumentVerificationTypeListComponent_ng_container_0_For_4_Template, 18, 5, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function DocumentVerificationTypeListComponent_ng_container_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.addType());
    });
    \u0275\u0275elementStart(6, "mat-icon", 5);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DocumentVerificationTypeListComponent_ng_container_0_Conditional_9_Template, 2, 1, "p", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.documentTypes.controls.length === 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.documentTypes.controls);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.add"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.verificationErrors.length ? 9 : -1);
  }
}
var DocumentVerificationTypeListComponent = class _DocumentVerificationTypeListComponent {
  constructor() {
    this.target = "personal";
    this._factory = inject(SetupFormFactory);
    this._countries = inject(CountryService);
    this.countries = this._countries.worldCountries;
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
  addType() {
    this._factory.addDocumentTypesWithDefaults(this.documentTypes, this.target);
  }
  removeType(index) {
    this.documentTypes.removeAt(index);
  }
  activeCategories(group) {
    const arr = this.asArray(group.get("configurations"));
    return arr?.controls?.filter((c) => c.get("active")?.value).map((c) => c.get("documentCategory")?.value) ?? [];
  }
  static {
    this.\u0275fac = function DocumentVerificationTypeListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentVerificationTypeListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentVerificationTypeListComponent, selectors: [["document-verification-type-list"]], inputs: { form: "form", documentTypes: "documentTypes", target: "target" }, decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "flex-col", "gap-3"], [1, "rounded-xl", "border", "border-dashed", "border-stone-300/80", "px-4", "py-6", "text-center", "text-xs", "text-stone-500", "dark:border-gray-700", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-3", "rounded-2xl", "border", "border-stone-200/90", "bg-stone-50", "p-4", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], ["mat-stroked-button", "", "type", "button", 1, "self-start", "rounded-xl", 3, "click"], [1, "!h-4", "!w-4"], [1, "text-xs", "text-red-700", "dark:text-red-300"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[16rem]", "flex-1"], ["formControlName", "country"], [3, "value"], ["mat-stroked-button", "", "type", "button", "color", "warn", 1, "rounded-full", 3, "click"], [1, "flex", "flex-col", "gap-2", "border-t", "border-stone-200/80", "pt-3", "dark:border-gray-700"], [1, "text-xs", "font-semibold", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "justify-between", "gap-3", "rounded-xl", "border", "border-stone-200/80", "bg-white", "px-3", "py-2", "text-sm", "dark:border-gray-700", "dark:bg-gray-900", 3, "formGroup"], [1, "text-[11px]", "text-amber-700", "dark:text-amber-400"], [1, "font-medium", "text-stone-800", "dark:text-stone-100"], ["formControlName", "active"]], template: function DocumentVerificationTypeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DocumentVerificationTypeListComponent_ng_container_0_Template, 10, 3, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSlideToggleModule,
      MatSlideToggle,
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
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      MatSlideToggleModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="flex flex-col gap-3">
        @if (documentTypes.controls.length === 0) {
            <p class="rounded-xl border border-dashed border-stone-300/80 px-4 py-6 text-center text-xs text-stone-500 dark:border-gray-700 dark:text-stone-400">
                {{ t('smartEnrollProjects.setup.documents.types.empty') }}
            </p>
        }

        @for (group of documentTypes.controls; track group; let i = $index) {
            <div
                class="flex flex-col gap-3 rounded-2xl border border-stone-200/90 bg-stone-50 p-4 dark:border-gray-700 dark:bg-gray-900/40"
                [formGroup]="asGroup(group)"
            >
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <mat-form-field appearance="outline" subscriptSizing="dynamic" class="min-w-[16rem] flex-1">
                        <mat-label>{{ t('smartEnrollProjects.setup.documents.types.country') }}</mat-label>
                        <mat-select formControlName="country">
                            @for (c of countries; track c.country) {
                                <mat-option [value]="c.country">{{ t(c.name) }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>

                    <button
                        mat-stroked-button
                        type="button"
                        color="warn"
                        class="rounded-full"
                        (click)="removeType(i)"
                    >
                        <mat-icon class="!h-4 !w-4">delete</mat-icon>
                        {{ t('smartEnrollProjects.setup.documents.types.remove') }}
                    </button>
                </div>

                <div class="flex flex-col gap-2 border-t border-stone-200/80 pt-3 dark:border-gray-700">
                    <p class="text-xs font-semibold text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.documents.types.configurations') }}
                    </p>

                    @for (cfg of asArray(asGroup(group).get('configurations')).controls; track cfg) {
                        <label
                            class="flex items-center justify-between gap-3 rounded-xl border border-stone-200/80 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900"
                            [formGroup]="asGroup(cfg)"
                        >
                            <span class="font-medium text-stone-800 dark:text-stone-100">
                                {{ t('smartEnrollProjects.setup.documents.category.' + cfg.get('documentCategory')?.value) }}
                            </span>
                            <mat-slide-toggle formControlName="active"></mat-slide-toggle>
                        </label>
                    }
                </div>

                @if (activeCategories(asGroup(group)).length === 0) {
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">
                        {{ t('smartEnrollProjects.setup.documents.types.activateHint') }}
                    </p>
                }
            </div>
        }

        <button
            mat-stroked-button
            type="button"
            class="self-start rounded-xl"
            (click)="addType()"
        >
            <mat-icon class="!h-4 !w-4">add</mat-icon>
            {{ t('smartEnrollProjects.setup.documents.types.add') }}
        </button>

        @if (verificationErrors.length) {
            <p class="text-xs text-red-700 dark:text-red-300">
                {{ t('smartEnrollProjects.setup.documents.types.invalid') }}
            </p>
        }
    </div>
</ng-container>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentVerificationTypeListComponent, { className: "DocumentVerificationTypeListComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/documents/document-verification-type/document-verification-type-list.component.ts", lineNumber: 41 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/documents/documents.component.ts
var _forTrack03 = ($index, $item) => $item.value;
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle-group", 7)(1, "mat-button-toggle", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-button-toggle", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-button-toggle", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.skip"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.required"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 8)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "mat-slide-toggle", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.business.toggle"), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_20_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function SetupDocumentsComponent_ng_container_0_div_1_Conditional_20_For_8_Template_button_click_0_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.toggleVerificationMethod(m_r3.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-stone-900", ctx_r3.isVerificationMethodSelected(m_r3.value))("text-white", ctx_r3.isVerificationMethodSelected(m_r3.value))("dark:bg-white", ctx_r3.isVerificationMethodSelected(m_r3.value))("dark:text-stone-900", ctx_r3.isVerificationMethodSelected(m_r3.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1(m_r3.label), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "header", 4)(2, "h2", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23);
    \u0275\u0275repeaterCreate(7, SetupDocumentsComponent_ng_container_0_div_1_Conditional_20_For_8_Template, 2, 9, "button", 24, _forTrack03);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-50", ctx_r3.isNotRequired)("pointer-events-none", ctx_r3.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.method.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.method.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.verificationMethods);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_29_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function SetupDocumentsComponent_ng_container_0_div_1_Conditional_29_Conditional_9_For_2_Template_button_click_0_listener() {
      const e_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.toggleCriminalEndpoint(e_r6.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("bg-stone-900", ctx_r3.isEndpointSelected(e_r6.value))("text-white", ctx_r3.isEndpointSelected(e_r6.value))("dark:bg-white", ctx_r3.isEndpointSelected(e_r6.value))("dark:text-stone-900", ctx_r3.isEndpointSelected(e_r6.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r6.label, " ");
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_29_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, SetupDocumentsComponent_ng_container_0_div_1_Conditional_29_Conditional_9_For_2_Template, 2, 9, "button", 24, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.criminalRecordsEndpoints);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 8)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "mat-slide-toggle", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 8)(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "mat-slide-toggle", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SetupDocumentsComponent_ng_container_0_div_1_Conditional_29_Conditional_9_Template, 3, 0, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.screening.criminalHistory"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.screening.informationVerification"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r3.formGroup == null ? null : (tmp_6_0 = ctx_r3.formGroup.get("criminalHistoryVerification")) == null ? null : tmp_6_0.value) ? 9 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "document-verification-type-list", 17);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r3.form)("documentTypes", ctx_r3.documentTypesFormArray)("target", ctx_r3.target);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "header", 4)(3, "h2", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SetupDocumentsComponent_ng_container_0_div_1_Conditional_7_Template, 7, 3, "mat-button-toggle-group", 7)(8, SetupDocumentsComponent_ng_container_0_div_1_Conditional_8_Template, 4, 1, "label", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(9, 9);
    \u0275\u0275elementStart(10, "section", 10)(11, "header", 4)(12, "h2", 5);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 6);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 11)(17, "mat-label");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, SetupDocumentsComponent_ng_container_0_div_1_Conditional_20_Template, 9, 6, "section", 13);
    \u0275\u0275elementStart(21, "section", 10)(22, "header", 14)(23, "div")(24, "h2", 5);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 6);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "mat-slide-toggle", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, SetupDocumentsComponent_ng_container_0_div_1_Conditional_29_Template, 10, 3, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "section", 10)(31, "header", 4)(32, "h2", 5);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 6);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, SetupDocumentsComponent_ng_container_0_div_1_Conditional_36_Template, 1, 3, "document-verification-type-list", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.stepFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.stepFormControlName === "businessVerification" ? t_r1("smartEnrollProjects.setup.documents.business.title") : t_r1("smartEnrollProjects.setup.documents.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.stepFormControlName === "businessVerification" ? t_r1("smartEnrollProjects.setup.documents.business.subtitle") : t_r1("smartEnrollProjects.setup.documents.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.stepFormControlName === "document" ? 7 : ctx_r3.stepFormControlName === "businessVerification" ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r3.formGroup);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r3.isNotRequired)("pointer-events-none", ctx_r3.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.attempts.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.attempts.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.attempts.limit"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.stepFormControlName === "document" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r3.isNotRequired)("pointer-events-none", ctx_r3.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.screening.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.screening.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r3.formGroup == null ? null : (tmp_18_0 = ctx_r3.formGroup.get("screening")) == null ? null : tmp_18_0.value) ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r3.isNotRequired)("pointer-events-none", ctx_r3.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.types.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.types.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.documentTypesFormArray ? 36 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupDocumentsComponent_ng_container_0_div_1_Template, 37, 27, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isFormReady);
  }
}
var SetupDocumentsComponent = class _SetupDocumentsComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this.subForm = false;
    this.stepFormControlName = "document";
    this.criminalRecordsEndpoints = [
      { value: "world_api_interpol", label: "Interpol" },
      { value: "world_api_fbi", label: "FBI" },
      { value: "world_api_dea", label: "DEA" },
      { value: "world_api_europol", label: "Europol" },
      { value: "world_api_ofac", label: "OFAC" },
      { value: "world_api_onu", label: "ONU" }
    ];
    this.verificationMethods = [
      { value: "SCAN_AGENT", label: "smartEnrollProjects.setup.documents.method.scanAgent" },
      { value: "SCAN_STUDIO", label: "smartEnrollProjects.setup.documents.method.scanStudio" },
      { value: "SCAN_PROMPT", label: "smartEnrollProjects.setup.documents.method.scanPrompt" }
    ];
  }
  get documentTypesFormArray() {
    return this.formGroup?.get("documentTypes") || null;
  }
  get stepFormGroup() {
    return this.form?.get("projectFlow.steps") || null;
  }
  get target() {
    return this.stepFormControlName === "legalRepresentative" ? "personal" : this.form?.get("target")?.value || "personal";
  }
  get isNotRequired() {
    if (this.stepFormControlName === "businessVerification") {
      return !this.stepFormGroup?.get("businessVerification")?.value;
    }
    if (this.stepFormControlName === "legalRepresentative") {
      return this.stepFormGroup?.get("legalRepresentative")?.value === "skip";
    }
    return this.stepFormGroup?.get("document")?.value === "skip";
  }
  get isFormReady() {
    return !this.loading && !!this.form && !!this.formGroup && !!this.stepFormGroup;
  }
  get verificationMethodsValue() {
    return this.formGroup?.get("verificationMethods")?.value || [];
  }
  get criminalEndpointsValue() {
    return this.formGroup?.get("criminalHistoryVerificationEndpoints")?.value || [];
  }
  isVerificationMethodSelected(method) {
    return this.verificationMethodsValue.includes(method);
  }
  toggleVerificationMethod(method) {
    const ctrl = this.formGroup?.get("verificationMethods");
    if (!ctrl)
      return;
    const current = this.verificationMethodsValue;
    const next = current.includes(method) ? current.filter((m) => m !== method) : [...current, method];
    ctrl.setValue(next);
    ctrl.markAsDirty();
  }
  isEndpointSelected(endpoint) {
    return this.criminalEndpointsValue.includes(endpoint);
  }
  toggleCriminalEndpoint(endpoint) {
    const ctrl = this.formGroup?.get("criminalHistoryVerificationEndpoints");
    if (!ctrl)
      return;
    const current = this.criminalEndpointsValue;
    const next = current.includes(endpoint) ? current.filter((e) => e !== endpoint) : [...current, endpoint];
    ctrl.setValue(next);
    ctrl.markAsDirty();
  }
  static {
    this.\u0275fac = function SetupDocumentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupDocumentsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupDocumentsComponent, selectors: [["setup-documents"]], inputs: { form: "form", formGroup: "formGroup", loading: "loading", saving: "saving", subForm: "subForm", stepFormControlName: "stepFormControlName" }, decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["formControlName", "document", 1, "!rounded-xl"], [1, "flex", "items-center", "justify-between", "gap-4"], [3, "formGroup"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "max-w-xs"], ["matInput", "", "type", "number", "formControlName", "attemptLimit", "min", "1", "max", "5"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "opacity-50", "pointer-events-none"], [1, "mb-4", "flex", "items-start", "justify-between", "gap-4"], ["formControlName", "screening"], [1, "flex", "flex-col", "gap-3", "border-t", "border-stone-200/80", "pt-4", "dark:border-gray-700"], [3, "form", "documentTypes", "target"], ["value", "skip"], ["value", "optional"], ["value", "mandatory"], [1, "text-sm", "text-stone-700", "dark:text-stone-200"], ["formControlName", "businessVerification"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "rounded-full", "border", "border-stone-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-stone-700", "transition-colors", "hover:bg-stone-100", "dark:border-gray-700", "dark:text-stone-200", "dark:hover:bg-gray-800", 3, "bg-stone-900", "text-white", "dark:bg-white", "dark:text-stone-900"], ["type", "button", 1, "rounded-full", "border", "border-stone-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-stone-700", "transition-colors", "hover:bg-stone-100", "dark:border-gray-700", "dark:text-stone-200", "dark:hover:bg-gray-800", 3, "click"], ["formControlName", "criminalHistoryVerification"], ["formControlName", "informationVerification"], [1, "flex", "flex-wrap", "gap-2", "border-t", "border-stone-200/80", "pt-3", "dark:border-gray-700"]], template: function SetupDocumentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupDocumentsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MinValidator,
      MaxValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatChipsModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatInputModule,
      MatInput,
      MatRadioModule,
      MatSlideToggleModule,
      MatSlideToggle,
      TranslocoModule,
      TranslocoDirective,
      DocumentVerificationTypeListComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupDocumentsComponent, [{
    type: Component,
    args: [{ selector: "setup-documents", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatChipsModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatSlideToggleModule,
      TranslocoModule,
      DocumentVerificationTypeListComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6">
        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
            [formGroup]="stepFormGroup!"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ stepFormControlName === 'businessVerification'
                        ? t('smartEnrollProjects.setup.documents.business.title')
                        : t('smartEnrollProjects.setup.documents.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ stepFormControlName === 'businessVerification'
                        ? t('smartEnrollProjects.setup.documents.business.subtitle')
                        : t('smartEnrollProjects.setup.documents.subtitle') }}
                </p>
            </header>

            @if (stepFormControlName === 'document') {
                <mat-button-toggle-group formControlName="document" class="!rounded-xl">
                    <mat-button-toggle value="skip">{{ t('smartEnrollProjects.setup.documents.skip') }}</mat-button-toggle>
                    <mat-button-toggle value="optional">{{ t('smartEnrollProjects.setup.documents.optional') }}</mat-button-toggle>
                    <mat-button-toggle value="mandatory">{{ t('smartEnrollProjects.setup.documents.required') }}</mat-button-toggle>
                </mat-button-toggle-group>
            } @else if (stepFormControlName === 'businessVerification') {
                <label class="flex items-center justify-between gap-4">
                    <span class="text-sm text-stone-700 dark:text-stone-200">
                        {{ t('smartEnrollProjects.setup.documents.business.toggle') }}
                    </span>
                    <mat-slide-toggle formControlName="businessVerification"></mat-slide-toggle>
                </label>
            }
        </section>

        <ng-container [formGroup]="formGroup">
            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4">
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ t('smartEnrollProjects.setup.documents.attempts.title') }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.documents.attempts.subtitle') }}
                    </p>
                </header>
                <mat-form-field appearance="outline" subscriptSizing="dynamic" class="max-w-xs">
                    <mat-label>{{ t('smartEnrollProjects.setup.documents.attempts.limit') }}</mat-label>
                    <input matInput type="number" formControlName="attemptLimit" min="1" max="5" />
                </mat-form-field>
            </section>

            @if (stepFormControlName === 'document') {
                <section
                    class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                    [class.opacity-50]="isNotRequired"
                    [class.pointer-events-none]="isNotRequired"
                >
                    <header class="mb-4">
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                            {{ t('smartEnrollProjects.setup.documents.method.title') }}
                        </h2>
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                            {{ t('smartEnrollProjects.setup.documents.method.subtitle') }}
                        </p>
                    </header>
                    <div class="flex flex-wrap gap-2">
                        @for (m of verificationMethods; track m.value) {
                            <button
                                type="button"
                                (click)="toggleVerificationMethod(m.value)"
                                [class.bg-stone-900]="isVerificationMethodSelected(m.value)"
                                [class.text-white]="isVerificationMethodSelected(m.value)"
                                [class.dark:bg-white]="isVerificationMethodSelected(m.value)"
                                [class.dark:text-stone-900]="isVerificationMethodSelected(m.value)"
                                class="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-gray-700 dark:text-stone-200 dark:hover:bg-gray-800"
                            >
                                {{ t(m.label) }}
                            </button>
                        }
                    </div>
                </section>
            }

            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                            {{ t('smartEnrollProjects.setup.documents.screening.title') }}
                        </h2>
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                            {{ t('smartEnrollProjects.setup.documents.screening.subtitle') }}
                        </p>
                    </div>
                    <mat-slide-toggle formControlName="screening"></mat-slide-toggle>
                </header>

                @if (formGroup?.get('screening')?.value) {
                    <div class="flex flex-col gap-3 border-t border-stone-200/80 pt-4 dark:border-gray-700">
                        <label class="flex items-center justify-between gap-4">
                            <span class="text-sm text-stone-700 dark:text-stone-200">
                                {{ t('smartEnrollProjects.setup.documents.screening.criminalHistory') }}
                            </span>
                            <mat-slide-toggle formControlName="criminalHistoryVerification"></mat-slide-toggle>
                        </label>
                        <label class="flex items-center justify-between gap-4">
                            <span class="text-sm text-stone-700 dark:text-stone-200">
                                {{ t('smartEnrollProjects.setup.documents.screening.informationVerification') }}
                            </span>
                            <mat-slide-toggle formControlName="informationVerification"></mat-slide-toggle>
                        </label>

                        @if (formGroup?.get('criminalHistoryVerification')?.value) {
                            <div class="flex flex-wrap gap-2 border-t border-stone-200/80 pt-3 dark:border-gray-700">
                                @for (e of criminalRecordsEndpoints; track e.value) {
                                    <button
                                        type="button"
                                        (click)="toggleCriminalEndpoint(e.value)"
                                        [class.bg-stone-900]="isEndpointSelected(e.value)"
                                        [class.text-white]="isEndpointSelected(e.value)"
                                        [class.dark:bg-white]="isEndpointSelected(e.value)"
                                        [class.dark:text-stone-900]="isEndpointSelected(e.value)"
                                        class="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-gray-700 dark:text-stone-200 dark:hover:bg-gray-800"
                                    >
                                        {{ e.label }}
                                    </button>
                                }
                            </div>
                        }
                    </div>
                }
            </section>

            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4">
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ t('smartEnrollProjects.setup.documents.types.title') }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.documents.types.subtitle') }}
                    </p>
                </header>
                @if (documentTypesFormArray) {
                    <document-verification-type-list
                        [form]="form"
                        [documentTypes]="documentTypesFormArray"
                        [target]="target"
                    ></document-verification-type-list>
                }
            </section>
        </ng-container>
    </div>
</ng-container>
` }]
  }], null, { form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }], subForm: [{
    type: Input
  }], stepFormControlName: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupDocumentsComponent, { className: "SetupDocumentsComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/documents/documents.component.ts", lineNumber: 45 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/integrations/integrations.component.ts
var _forTrack04 = ($index, $item) => $item._id;
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.exampleRedirectUrl, " ");
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r3 = ctx.$implicit;
    \u0275\u0275property("value", w_r3._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r3.name || w_r3._id);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 17);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_47_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 29);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_47_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.receivedResponse));
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-form-field", 22)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 7)(6, "mat-label");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 24)(9, "mat-option", 25);
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 26);
    \u0275\u0275text(12, "Phone");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-form-field", 7)(14, "mat-label");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 28);
    \u0275\u0275listener("click", function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_47_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.callTestApi());
    });
    \u0275\u0275template(18, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_47_Conditional_18_Template, 1, 0, "mat-spinner", 29);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_47_Conditional_20_Template, 3, 3, "pre", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.integrations.source.apiUrl"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.integrations.source.testType"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.integrations.source.testValue"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.sendingTestApi);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sendingTestApi ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.integrations.source.test"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.receivedResponse && (ctx_r1.receivedResponse.error || ctx_r1.receivedResponse.ok !== false) ? 20 : -1);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "header", 4)(3, "h2", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 7)(8, "mat-label");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_11_Template, 2, 1, "p", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "section", 3)(13, "header", 10)(14, "div")(15, "h2", 5);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 6);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 11)(20, "button", 12);
    \u0275\u0275listener("click", function SetupIntegrationsComponent_ng_container_0_div_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshWebhooks());
    });
    \u0275\u0275elementStart(21, "mat-icon", 13);
    \u0275\u0275text(22, "refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 14);
    \u0275\u0275listener("click", function SetupIntegrationsComponent_ng_container_0_div_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openWebhookSettings());
    });
    \u0275\u0275elementStart(24, "mat-icon", 13);
    \u0275\u0275text(25, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "mat-form-field", 7)(28, "mat-label");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-select", 15)(31, "mat-option", 16);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(33, SetupIntegrationsComponent_ng_container_0_div_1_For_34_Template, 2, 2, "mat-option", 16, _forTrack04);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_35_Template, 1, 0, "mat-spinner", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "section", 3)(37, "header", 4)(38, "h2", 5);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 6);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "mat-radio-group", 18)(43, "mat-radio-button", 19);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-radio-button", 20);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_47_Template, 21, 7, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_25_0;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.integrationsFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.integrations.redirect.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.integrations.redirect.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.integrations.redirect.url"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_8_0 = ctx_r1.form.get("projectFlow.integrations.redirectUrl")) == null ? null : tmp_8_0.value) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.integrationsFormGroup);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.integrations.webhook.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.integrations.webhook.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.refreshingWebhooks);
    \u0275\u0275attribute("aria-label", t_r5("smartEnrollProjects.setup.integrations.webhook.refresh"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.integrations.webhook.manage"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.integrations.webhook.select"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.integrations.webhook.none"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.webhooks);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.refreshingWebhooks ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.integrationsFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.integrations.source.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.integrations.source.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.integrations.source.none"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.integrations.source.api"));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_25_0 = ctx_r1.form.get("projectFlow.integrations.source")) == null ? null : tmp_25_0.value) === "API" ? 47 : -1);
  }
}
function SetupIntegrationsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupIntegrationsComponent_ng_container_0_div_1_Template, 48, 22, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFormReady);
  }
}
var SetupIntegrationsComponent = class _SetupIntegrationsComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._setup = inject(SetupService);
    this.receivedResponse = {};
    this.refreshingWebhooks = false;
    this.sendingTestApi = false;
    this.webhooks = [];
    this.expectedResponse = {
      countryCode: "+57",
      name: "Mark",
      phone: "1234567890"
    };
  }
  ngOnInit() {
    this._requestWebhooks();
  }
  get exampleRedirectUrl() {
    return `${this.form?.get("projectFlow.integrations.redirectUrl")?.value || ""}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`;
  }
  get integrationsFormGroup() {
    return this.form?.get("projectFlow.integrations") || null;
  }
  get isFormReady() {
    return !this.loading && !!this.integrationsFormGroup;
  }
  _requestWebhooks() {
    if (this.refreshingWebhooks)
      return;
    this.refreshingWebhooks = true;
    this.integrationsFormGroup?.get("webhook")?.disable();
    this._setup.listWebhooks().subscribe({
      next: (response) => {
        this.webhooks = response.data || [];
        this.refreshingWebhooks = false;
        if (this.webhooks.length)
          this.integrationsFormGroup?.get("webhook")?.enable();
        else
          this.integrationsFormGroup?.get("webhook")?.setValue(null);
        this._cdr.markForCheck();
      },
      error: () => {
        this.refreshingWebhooks = false;
        if (this.webhooks.length)
          this.integrationsFormGroup?.get("webhook")?.enable();
        else
          this.integrationsFormGroup?.get("webhook")?.setValue(null);
        this._cdr.markForCheck();
      }
    });
  }
  callTestApi() {
    if (this.sendingTestApi)
      return;
    const apiTestType = this.integrationsFormGroup?.get("apiTestType")?.value;
    const apiTestValue = this.integrationsFormGroup?.get("apiTestValue")?.value;
    const apiUrl = this.integrationsFormGroup?.get("apiUrl")?.value;
    if (!apiTestType || !apiTestValue) {
      this._snack.open("Please enter a test type and value", "Close", { duration: 3e3 });
      return;
    }
    if (!apiUrl || !STRICT_URL_PATTERN.test(apiUrl)) {
      this._snack.open("Please enter a valid test URL", "Close", { duration: 3e3 });
      return;
    }
    this.sendingTestApi = true;
    this.integrationsFormGroup?.get("apiTestType")?.disable();
    this.integrationsFormGroup?.get("apiTestValue")?.disable();
    this.integrationsFormGroup?.get("apiUrl")?.disable();
    this._setup.testApi(apiUrl, apiTestType, apiTestValue).subscribe({
      next: (response) => {
        this.receivedResponse = response?.data || response || {};
        this.sendingTestApi = false;
        this.integrationsFormGroup?.get("apiTestType")?.enable();
        this.integrationsFormGroup?.get("apiTestValue")?.enable();
        this.integrationsFormGroup?.get("apiUrl")?.enable();
        this._cdr.markForCheck();
      },
      error: (error) => {
        this.sendingTestApi = false;
        this.integrationsFormGroup?.get("apiTestType")?.enable();
        this.integrationsFormGroup?.get("apiTestValue")?.enable();
        this.integrationsFormGroup?.get("apiUrl")?.enable();
        this.receivedResponse = {
          error: error?.error?.message,
          name: error?.name || "",
          ok: false,
          status: error?.status || 0,
          statusText: error?.statusText || ""
        };
        this._cdr.markForCheck();
      }
    });
  }
  refreshWebhooks() {
    this._requestWebhooks();
  }
  openWebhookSettings() {
    window.open("/smart-monitor/webhooks", "_blank");
  }
  static {
    this.\u0275fac = function SetupIntegrationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupIntegrationsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupIntegrationsComponent, selectors: [["setup-integrations"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 3, "formGroup", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6", 3, "formGroup"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "type", "url", "formControlName", "redirectUrl", "placeholder", "https://"], [1, "mt-3", "break-all", "rounded-xl", "bg-stone-100", "px-3", "py-2", "font-mono", "text-xs", "text-stone-700", "dark:bg-gray-800", "dark:text-stone-200"], [1, "mb-4", "flex", "items-start", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-1"], ["mat-icon-button", "", "type", "button", 3, "click", "disabled"], [1, "!h-4", "!w-4"], ["mat-stroked-button", "", "type", "button", 1, "rounded-full", 3, "click"], ["formControlName", "webhook"], [3, "value"], ["matSuffix", "", "diameter", "16"], ["formControlName", "source", 1, "flex", "flex-wrap", "gap-4"], ["value", "NONE"], ["value", "API"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "md:col-span-2"], ["matInput", "", "type", "url", "formControlName", "apiUrl", "placeholder", "https://"], ["formControlName", "apiTestType"], ["value", "email"], ["value", "phone"], ["matInput", "", "formControlName", "apiTestValue"], ["mat-stroked-button", "", "type", "button", 1, "rounded-full", "md:col-span-2", 3, "click", "disabled"], ["diameter", "16", 1, "mr-2", "inline-block"], [1, "md:col-span-2", "overflow-auto", "rounded-xl", "bg-stone-100", "px-3", "py-2", "text-xs", "text-stone-800", "dark:bg-gray-800", "dark:text-stone-100"]], template: function SetupIntegrationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupIntegrationsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      JsonPipe,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoDirective
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupIntegrationsComponent, [{
    type: Component,
    args: [{ selector: "setup-integrations", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatSelectModule,
      MatSnackBarModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6" [formGroup]="form">
        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
            [formGroup]="integrationsFormGroup!"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.integrations.redirect.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.integrations.redirect.subtitle') }}
                </p>
            </header>

            <mat-form-field appearance="outline" subscriptSizing="dynamic">
                <mat-label>{{ t('smartEnrollProjects.setup.integrations.redirect.url') }}</mat-label>
                <input matInput type="url" formControlName="redirectUrl" placeholder="https://" />
            </mat-form-field>

            @if (form.get('projectFlow.integrations.redirectUrl')?.value) {
                <p class="mt-3 break-all rounded-xl bg-stone-100 px-3 py-2 font-mono text-xs text-stone-700 dark:bg-gray-800 dark:text-stone-200">
                    {{ exampleRedirectUrl }}
                </p>
            }
        </section>

        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
            [formGroup]="integrationsFormGroup!"
        >
            <header class="mb-4 flex items-start justify-between gap-3">
                <div>
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ t('smartEnrollProjects.setup.integrations.webhook.title') }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.integrations.webhook.subtitle') }}
                    </p>
                </div>
                <div class="flex items-center gap-1">
                    <button
                        mat-icon-button
                        type="button"
                        (click)="refreshWebhooks()"
                        [disabled]="refreshingWebhooks"
                        [attr.aria-label]="t('smartEnrollProjects.setup.integrations.webhook.refresh')"
                    >
                        <mat-icon class="!h-4 !w-4">refresh</mat-icon>
                    </button>
                    <button
                        mat-stroked-button
                        type="button"
                        class="rounded-full"
                        (click)="openWebhookSettings()"
                    >
                        <mat-icon class="!h-4 !w-4">open_in_new</mat-icon>
                        {{ t('smartEnrollProjects.setup.integrations.webhook.manage') }}
                    </button>
                </div>
            </header>

            <mat-form-field appearance="outline" subscriptSizing="dynamic">
                <mat-label>{{ t('smartEnrollProjects.setup.integrations.webhook.select') }}</mat-label>
                <mat-select formControlName="webhook">
                    <mat-option [value]="null">{{ t('smartEnrollProjects.setup.integrations.webhook.none') }}</mat-option>
                    @for (w of webhooks; track w._id) {
                        <mat-option [value]="w._id">{{ w.name || w._id }}</mat-option>
                    }
                </mat-select>
                @if (refreshingWebhooks) {
                    <mat-spinner matSuffix diameter="16"></mat-spinner>
                }
            </mat-form-field>
        </section>

        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
            [formGroup]="integrationsFormGroup!"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.integrations.source.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.integrations.source.subtitle') }}
                </p>
            </header>

            <mat-radio-group formControlName="source" class="flex flex-wrap gap-4">
                <mat-radio-button value="NONE">{{ t('smartEnrollProjects.setup.integrations.source.none') }}</mat-radio-button>
                <mat-radio-button value="API">{{ t('smartEnrollProjects.setup.integrations.source.api') }}</mat-radio-button>
            </mat-radio-group>

            @if (form.get('projectFlow.integrations.source')?.value === 'API') {
                <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <mat-form-field appearance="outline" subscriptSizing="dynamic" class="md:col-span-2">
                        <mat-label>{{ t('smartEnrollProjects.setup.integrations.source.apiUrl') }}</mat-label>
                        <input matInput type="url" formControlName="apiUrl" placeholder="https://" />
                    </mat-form-field>
                    <mat-form-field appearance="outline" subscriptSizing="dynamic">
                        <mat-label>{{ t('smartEnrollProjects.setup.integrations.source.testType') }}</mat-label>
                        <mat-select formControlName="apiTestType">
                            <mat-option value="email">Email</mat-option>
                            <mat-option value="phone">Phone</mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field appearance="outline" subscriptSizing="dynamic">
                        <mat-label>{{ t('smartEnrollProjects.setup.integrations.source.testValue') }}</mat-label>
                        <input matInput formControlName="apiTestValue" />
                    </mat-form-field>
                    <button
                        mat-stroked-button
                        type="button"
                        class="rounded-full md:col-span-2"
                        [disabled]="sendingTestApi"
                        (click)="callTestApi()"
                    >
                        @if (sendingTestApi) {
                            <mat-spinner diameter="16" class="mr-2 inline-block"></mat-spinner>
                        }
                        {{ t('smartEnrollProjects.setup.integrations.source.test') }}
                    </button>
                    @if (receivedResponse && (receivedResponse.error || receivedResponse.ok !== false)) {
                        <pre
                            class="md:col-span-2 overflow-auto rounded-xl bg-stone-100 px-3 py-2 text-xs text-stone-800 dark:bg-gray-800 dark:text-stone-100"
                        >{{ receivedResponse | json }}</pre>
                    }
                </div>
            }
        </section>
    </div>
</ng-container>
` }]
  }], null, { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupIntegrationsComponent, { className: "SetupIntegrationsComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/integrations/integrations.component.ts", lineNumber: 40 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/liveness/liveness.component.ts
function SetupLivenessComponent_ng_container_0_div_1_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29)(1, "mat-icon", 32);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.searchWarn"), " ");
  }
}
function SetupLivenessComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "header", 4)(3, "h2", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-button-toggle-group", 7)(8, "mat-button-toggle", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-button-toggle", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-button-toggle", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(14, 11);
    \u0275\u0275elementStart(15, "section", 12)(16, "header", 4)(17, "h2", 5);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 6);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-radio-group", 13)(22, "mat-radio-button", 14);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-radio-button", 15);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "section", 12)(27, "header", 4)(28, "h2", 5);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 6);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 16)(33, "mat-form-field", 17)(34, "mat-label");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 17)(38, "mat-label");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-select", 19)(41, "mat-option", 20);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-option", 21);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 22)(46, "p", 23);
    \u0275\u0275text(47);
    \u0275\u0275elementStart(48, "span", 24);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "mat-slider", 25);
    \u0275\u0275element(51, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 22)(53, "p", 23);
    \u0275\u0275text(54);
    \u0275\u0275elementStart(55, "span", 24);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "mat-slider", 27);
    \u0275\u0275element(58, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 22)(60, "p", 23);
    \u0275\u0275text(61);
    \u0275\u0275elementStart(62, "span", 24);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(64, SetupLivenessComponent_ng_container_0_div_1_Conditional_64_Template, 4, 1, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "mat-slider", 30);
    \u0275\u0275element(66, "input", 31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.livenessStepFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.stepFormControlName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.skip"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.required"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.livenessFormGroup);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.kyc.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.kyc.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.liveness.kyc.traditional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.liveness.kyc.zeroKnowledge"));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.liveness.thresholds.attemptLimit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.liveness.thresholds.searchMode"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.liveness.thresholds.fast"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.liveness.thresholds.accurate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.minScore"), " \u2014 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.minScoreDisplayValue);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.compareMinScore"), " \u2014 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.compareMinScoreDisplayValue);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.searchMinScore"), " \u2014 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.searchMinScoreDisplayValue);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSearchMinScoreWarn ? 64 : -1);
  }
}
function SetupLivenessComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupLivenessComponent_ng_container_0_div_1_Template, 67, 29, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFormReady);
  }
}
var SetupLivenessComponent = class _SetupLivenessComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this.subForm = false;
    this.stepFormControlName = "liveness";
    this._kycEnsured = false;
  }
  ngOnInit() {
    if (this.isFormReady)
      this._ensureKycTypeControl();
  }
  ngOnChanges(changes) {
    if ((changes["form"] || changes["formGroup"] || changes["loading"]) && this.isFormReady) {
      if (changes["form"] || changes["formGroup"])
        this._kycEnsured = false;
      this._ensureKycTypeControl();
    }
  }
  _ensureKycTypeControl() {
    if (this._kycEnsured)
      return;
    const grp = this.livenessFormGroup;
    if (!grp)
      return;
    this._kycEnsured = true;
    let ctrl = grp.get("kycType");
    if (!ctrl) {
      grp.addControl("kycType", new FormControl("traditional"));
      return;
    }
    if (!ctrl.value)
      ctrl.setValue("traditional", { emitEvent: false });
  }
  get isFormReady() {
    return !this.loading && !!this.form && !!this.livenessFormGroup && !!this.livenessStepFormGroup;
  }
  get livenessFormGroup() {
    return this.formGroup || null;
  }
  get livenessStepFormGroup() {
    return this.form?.get("projectFlow.steps") || null;
  }
  get livenessStepValue() {
    const v = this.livenessStepFormGroup?.get(this.stepFormControlName)?.value;
    return v != null && v !== "" ? String(v) : null;
  }
  get isLivenessEnabled() {
    return this.livenessStepValue !== null && this.livenessStepValue !== "skip";
  }
  get isNotRequired() {
    return this.livenessStepValue === "skip";
  }
  get isSearchMinScoreWarn() {
    const v = this.livenessFormGroup?.get("searchMinScore")?.value;
    return v != null && v < 0.8;
  }
  get minScoreDisplayValue() {
    return `${Math.floor((this.livenessFormGroup?.get("minScore")?.value || 0) * 100)}%`;
  }
  get searchMinScoreDisplayValue() {
    return `${Math.floor((this.livenessFormGroup?.get("searchMinScore")?.value || 0) * 100)}%`;
  }
  get compareMinScoreDisplayValue() {
    return `${Math.floor((this.livenessFormGroup?.get("compareMinScore")?.value || 0) * 100)}%`;
  }
  get selectedKycType() {
    return this.livenessFormGroup?.get("kycType")?.value || null;
  }
  get isTraditionalKyc() {
    return this.selectedKycType === "traditional";
  }
  get isZeroKnowledgeKyc() {
    return this.selectedKycType === "zero_knowledge";
  }
  static {
    this.\u0275fac = function SetupLivenessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupLivenessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupLivenessComponent, selectors: [["setup-liveness"]], inputs: { form: "form", formGroup: "formGroup", loading: "loading", saving: "saving", subForm: "subForm", stepFormControlName: "stepFormControlName" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "!rounded-xl", 3, "formControlName"], ["value", "skip"], ["value", "optional"], ["value", "mandatory"], [3, "formGroup"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], ["formControlName", "kycType", 1, "flex", "flex-wrap", "gap-4"], ["value", "traditional"], ["value", "zero_knowledge"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "type", "number", "formControlName", "attemptLimit", "min", "1", "max", "5"], ["formControlName", "searchMode"], ["value", "FAST"], ["value", "ACCURATE"], [1, "md:col-span-2"], [1, "mb-1", "text-xs", "font-medium", "text-stone-600", "dark:text-stone-300"], [1, "font-mono"], ["min", "0.52", "max", "0.9", "step", "0.01", "discrete", ""], ["matSliderThumb", "", "formControlName", "minScore"], ["min", "0.7", "max", "0.95", "step", "0.01", "discrete", ""], ["matSliderThumb", "", "formControlName", "compareMinScore"], [1, "ml-2", "inline-flex", "items-center", "gap-1", "text-amber-700", "dark:text-amber-400"], ["min", "0.81", "max", "0.95", "step", "0.01", "discrete", ""], ["matSliderThumb", "", "formControlName", "searchMinScore"], [1, "!h-3.5", "!w-3.5", "!text-base"]], template: function SetupLivenessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupLivenessComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatFormFieldModule, MatFormField, MatLabel, MatIconModule, MatIcon, MatInputModule, MatInput, MatRadioModule, MatRadioGroup, MatRadioButton, MatSelectModule, MatSelect, MatOption, MatSliderModule, MatSlider, MatSliderThumb, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupLivenessComponent, [{
    type: Component,
    args: [{ selector: "setup-liveness", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonToggleModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatSliderModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6">
        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
            [formGroup]="livenessStepFormGroup!"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.liveness.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.liveness.subtitle') }}
                </p>
            </header>
            <mat-button-toggle-group [formControlName]="stepFormControlName" class="!rounded-xl">
                <mat-button-toggle value="skip">{{ t('smartEnrollProjects.setup.documents.skip') }}</mat-button-toggle>
                <mat-button-toggle value="optional">{{ t('smartEnrollProjects.setup.documents.optional') }}</mat-button-toggle>
                <mat-button-toggle value="mandatory">{{ t('smartEnrollProjects.setup.documents.required') }}</mat-button-toggle>
            </mat-button-toggle-group>
        </section>

        <ng-container [formGroup]="livenessFormGroup!">
            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
            >
                <header class="mb-4">
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ t('smartEnrollProjects.setup.liveness.kyc.title') }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.liveness.kyc.subtitle') }}
                    </p>
                </header>
                <mat-radio-group formControlName="kycType" class="flex flex-wrap gap-4">
                    <mat-radio-button value="traditional">{{ t('smartEnrollProjects.setup.liveness.kyc.traditional') }}</mat-radio-button>
                    <mat-radio-button value="zero_knowledge">{{ t('smartEnrollProjects.setup.liveness.kyc.zeroKnowledge') }}</mat-radio-button>
                </mat-radio-group>
            </section>

            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4">
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.title') }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.subtitle') }}
                    </p>
                </header>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <mat-form-field appearance="outline" subscriptSizing="dynamic">
                        <mat-label>{{ t('smartEnrollProjects.setup.liveness.thresholds.attemptLimit') }}</mat-label>
                        <input matInput type="number" formControlName="attemptLimit" min="1" max="5" />
                    </mat-form-field>
                    <mat-form-field appearance="outline" subscriptSizing="dynamic">
                        <mat-label>{{ t('smartEnrollProjects.setup.liveness.thresholds.searchMode') }}</mat-label>
                        <mat-select formControlName="searchMode">
                            <mat-option value="FAST">{{ t('smartEnrollProjects.setup.liveness.thresholds.fast') }}</mat-option>
                            <mat-option value="ACCURATE">{{ t('smartEnrollProjects.setup.liveness.thresholds.accurate') }}</mat-option>
                        </mat-select>
                    </mat-form-field>

                    <div class="md:col-span-2">
                        <p class="mb-1 text-xs font-medium text-stone-600 dark:text-stone-300">
                            {{ t('smartEnrollProjects.setup.liveness.thresholds.minScore') }} \u2014 <span class="font-mono">{{ minScoreDisplayValue }}</span>
                        </p>
                        <mat-slider min="0.52" max="0.9" step="0.01" discrete>
                            <input matSliderThumb formControlName="minScore" />
                        </mat-slider>
                    </div>
                    <div class="md:col-span-2">
                        <p class="mb-1 text-xs font-medium text-stone-600 dark:text-stone-300">
                            {{ t('smartEnrollProjects.setup.liveness.thresholds.compareMinScore') }} \u2014 <span class="font-mono">{{ compareMinScoreDisplayValue }}</span>
                        </p>
                        <mat-slider min="0.7" max="0.95" step="0.01" discrete>
                            <input matSliderThumb formControlName="compareMinScore" />
                        </mat-slider>
                    </div>
                    <div class="md:col-span-2">
                        <p class="mb-1 text-xs font-medium text-stone-600 dark:text-stone-300">
                            {{ t('smartEnrollProjects.setup.liveness.thresholds.searchMinScore') }} \u2014 <span class="font-mono">{{ searchMinScoreDisplayValue }}</span>
                            @if (isSearchMinScoreWarn) {
                                <span class="ml-2 inline-flex items-center gap-1 text-amber-700 dark:text-amber-400">
                                    <mat-icon class="!h-3.5 !w-3.5 !text-base">info</mat-icon>
                                    {{ t('smartEnrollProjects.setup.liveness.thresholds.searchWarn') }}
                                </span>
                            }
                        </p>
                        <mat-slider min="0.81" max="0.95" step="0.01" discrete>
                            <input matSliderThumb formControlName="searchMinScore" />
                        </mat-slider>
                    </div>
                </div>
            </section>
        </ng-container>
    </div>
</ng-container>
` }]
  }], null, { form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }], subForm: [{
    type: Input
  }], stepFormControlName: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupLivenessComponent, { className: "SetupLivenessComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/liveness/liveness.component.ts", lineNumber: 35 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/sign-up-form/sign-up-form.component.ts
var _forTrack05 = ($index, $item) => $item.code;
function SetupSignUpFormComponent_ng_container_0_form_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "header", 5)(2, "h2", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-button-toggle-group", 20)(7, "mat-button-toggle", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-button-toggle", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.target.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.target.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.target.personal"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.target.business"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 8)(1, "mat-radio-button", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-radio-button", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.fullName.separate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.fullName.together"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 9)(1, "mat-radio-button", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-radio-button", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.business.nameNumber"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.business.separate"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 12)(1, "mat-radio-button", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-radio-button", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.email.mailgun"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.email.none"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_Conditional_28_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("value", c_r2.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r2.code, " \u2014 ", c_r2.name, "");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-radio-group", 28)(2, "mat-radio-button", 29);
    \u0275\u0275text(3, "SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-radio-button", 30);
    \u0275\u0275text(5, "WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-radio-button", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 32)(9, "mat-label");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 33);
    \u0275\u0275repeaterCreate(12, SetupSignUpFormComponent_ng_container_0_form_1_Conditional_28_For_13_Template, 2, 3, "mat-option", 34, _forTrack05);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.signupForm.phone.both"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.signupForm.phone.countryCode"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.phoneCountryCodes);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_Conditional_1_Template, 11, 4, "section", 3);
    \u0275\u0275elementContainerStart(2, 4);
    \u0275\u0275elementStart(3, "section", 3)(4, "header", 5)(5, "h2", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, SetupSignUpFormComponent_ng_container_0_form_1_Conditional_9_Template, 5, 2, "mat-radio-group", 8)(10, SetupSignUpFormComponent_ng_container_0_form_1_Conditional_10_Template, 5, 2, "mat-radio-group", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "section", 3)(12, "header", 10)(13, "div")(14, "h2", 6);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 7);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "mat-slide-toggle", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SetupSignUpFormComponent_ng_container_0_form_1_Conditional_19_Template, 5, 2, "mat-radio-group", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "section", 3)(21, "header", 10)(22, "div")(23, "h2", 6);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 7);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "mat-slide-toggle", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, SetupSignUpFormComponent_ng_container_0_form_1_Conditional_28_Template, 14, 2, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "section", 3)(30, "header", 5)(31, "h2", 6);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 7);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 15)(36, "label", 16)(37, "span", 17);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "mat-slide-toggle", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label", 16)(41, "span", 17);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "mat-slide-toggle", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_20_0;
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.subForm ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.formGroup);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formType === "business" ? t_r1("smartEnrollProjects.setup.signupForm.business.title") : t_r1("smartEnrollProjects.setup.signupForm.fullName.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formType === "business" ? t_r1("smartEnrollProjects.setup.signupForm.business.subtitle") : t_r1("smartEnrollProjects.setup.signupForm.fullName.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formType === "personal" ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.email.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.email.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_15_0 = ctx_r2.formGroup.get("email")) == null ? null : tmp_15_0.value) ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.phone.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.phone.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_20_0 = ctx_r2.formGroup.get("phone")) == null ? null : tmp_20_0.value) ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.privacy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.terms"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_Template, 44, 32, "form", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFormReady);
  }
}
var SetupSignUpFormComponent = class _SetupSignUpFormComponent {
  constructor() {
    this.formType = "personal";
    this.loading = false;
    this.saving = false;
    this.subForm = false;
    this.stepFormControlName = "";
    this.phoneCountryCodes = PHONE_COUNTRY_CODES;
  }
  get isFormReady() {
    return !this.loading && !!this.formGroup;
  }
  get isNotRequired() {
    if (this.stepFormControlName === "legalRepresentative") {
      return this.stepFormGroup?.get("legalRepresentative")?.value === "skip";
    }
    return false;
  }
  get stepFormGroup() {
    return this.form?.get("projectFlow.steps") || null;
  }
  static {
    this.\u0275fac = function SetupSignUpFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupSignUpFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupSignUpFormComponent, selectors: [["setup-sign-up-form"]], inputs: { form: "form", formGroup: "formGroup", formType: "formType", loading: "loading", saving: "saving", subForm: "subForm", stepFormControlName: "stepFormControlName" }, decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 3, "formGroup", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6", 3, "formGroup"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [3, "formGroup"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["formControlName", "fullNameStyle", 1, "flex", "flex-wrap", "gap-4"], ["formControlName", "businessBasicInfoStyle", 1, "flex", "flex-wrap", "gap-4"], [1, "mb-4", "flex", "items-start", "justify-between", "gap-4"], ["formControlName", "email"], ["formControlName", "emailGateway", 1, "flex", "flex-wrap", "gap-4"], ["formControlName", "phone"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-sm", "text-stone-700", "dark:text-stone-200"], ["formControlName", "showPrivacyNotice"], ["formControlName", "showTermsAndConditions"], ["formControlName", "target", 1, "!rounded-xl"], ["value", "personal"], ["value", "business"], ["value", "separate"], ["value", "together"], ["value", "name_number"], ["value", "mailgun"], ["value", "none"], ["formControlName", "phoneGateway", 1, "flex", "flex-wrap", "gap-4"], ["value", "sms"], ["value", "whatsapp"], ["value", "both"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "max-w-xs"], ["formControlName", "countryCode"], [3, "value"]], template: function SetupSignUpFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupSignUpFormComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSlideToggleModule,
      MatSlideToggle,
      TranslocoModule,
      TranslocoDirective
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupSignUpFormComponent, [{
    type: Component,
    args: [{ selector: "setup-sign-up-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonToggleModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatSlideToggleModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <form [formGroup]="form" *ngIf="isFormReady" class="flex w-full flex-col gap-6">
        @if (!subForm) {
            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
            >
                <header class="mb-4">
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ t('smartEnrollProjects.setup.signupForm.target.title') }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.signupForm.target.subtitle') }}
                    </p>
                </header>
                <mat-button-toggle-group formControlName="target" class="!rounded-xl">
                    <mat-button-toggle value="personal">
                        {{ t('smartEnrollProjects.setup.signupForm.target.personal') }}
                    </mat-button-toggle>
                    <mat-button-toggle value="business">
                        {{ t('smartEnrollProjects.setup.signupForm.target.business') }}
                    </mat-button-toggle>
                </mat-button-toggle-group>
            </section>
        }

        <ng-container [formGroup]="formGroup">
            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4">
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ formType === 'business'
                            ? t('smartEnrollProjects.setup.signupForm.business.title')
                            : t('smartEnrollProjects.setup.signupForm.fullName.title') }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{ formType === 'business'
                            ? t('smartEnrollProjects.setup.signupForm.business.subtitle')
                            : t('smartEnrollProjects.setup.signupForm.fullName.subtitle') }}
                    </p>
                </header>

                @if (formType === 'personal') {
                    <mat-radio-group formControlName="fullNameStyle" class="flex flex-wrap gap-4">
                        <mat-radio-button value="separate">
                            {{ t('smartEnrollProjects.setup.signupForm.fullName.separate') }}
                        </mat-radio-button>
                        <mat-radio-button value="together">
                            {{ t('smartEnrollProjects.setup.signupForm.fullName.together') }}
                        </mat-radio-button>
                    </mat-radio-group>
                } @else {
                    <mat-radio-group formControlName="businessBasicInfoStyle" class="flex flex-wrap gap-4">
                        <mat-radio-button value="name_number">
                            {{ t('smartEnrollProjects.setup.signupForm.business.nameNumber') }}
                        </mat-radio-button>
                        <mat-radio-button value="separate">
                            {{ t('smartEnrollProjects.setup.signupForm.business.separate') }}
                        </mat-radio-button>
                    </mat-radio-group>
                }
            </section>

            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                            {{ t('smartEnrollProjects.setup.signupForm.email.title') }}
                        </h2>
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                            {{ t('smartEnrollProjects.setup.signupForm.email.subtitle') }}
                        </p>
                    </div>
                    <mat-slide-toggle formControlName="email"></mat-slide-toggle>
                </header>

                @if (formGroup?.get('email')?.value) {
                    <mat-radio-group formControlName="emailGateway" class="flex flex-wrap gap-4">
                        <mat-radio-button value="mailgun">
                            {{ t('smartEnrollProjects.setup.signupForm.email.mailgun') }}
                        </mat-radio-button>
                        <mat-radio-button value="none">
                            {{ t('smartEnrollProjects.setup.signupForm.email.none') }}
                        </mat-radio-button>
                    </mat-radio-group>
                }
            </section>

            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                            {{ t('smartEnrollProjects.setup.signupForm.phone.title') }}
                        </h2>
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                            {{ t('smartEnrollProjects.setup.signupForm.phone.subtitle') }}
                        </p>
                    </div>
                    <mat-slide-toggle formControlName="phone"></mat-slide-toggle>
                </header>

                @if (formGroup?.get('phone')?.value) {
                    <div class="flex flex-col gap-4">
                        <mat-radio-group formControlName="phoneGateway" class="flex flex-wrap gap-4">
                            <mat-radio-button value="sms">SMS</mat-radio-button>
                            <mat-radio-button value="whatsapp">WhatsApp</mat-radio-button>
                            <mat-radio-button value="both">{{
                                t('smartEnrollProjects.setup.signupForm.phone.both')
                            }}</mat-radio-button>
                        </mat-radio-group>

                        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="max-w-xs">
                            <mat-label>{{ t('smartEnrollProjects.setup.signupForm.phone.countryCode') }}</mat-label>
                            <mat-select formControlName="countryCode">
                                @for (c of phoneCountryCodes; track c.code) {
                                    <mat-option [value]="c.code">{{ c.code }} \u2014 {{ c.name }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
            </section>

            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4">
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ t('smartEnrollProjects.setup.signupForm.legal.title') }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.signupForm.legal.subtitle') }}
                    </p>
                </header>

                <div class="flex flex-col gap-3">
                    <label class="flex items-center justify-between gap-4">
                        <span class="text-sm text-stone-700 dark:text-stone-200">
                            {{ t('smartEnrollProjects.setup.signupForm.legal.privacy') }}
                        </span>
                        <mat-slide-toggle formControlName="showPrivacyNotice"></mat-slide-toggle>
                    </label>
                    <label class="flex items-center justify-between gap-4">
                        <span class="text-sm text-stone-700 dark:text-stone-200">
                            {{ t('smartEnrollProjects.setup.signupForm.legal.terms') }}
                        </span>
                        <mat-slide-toggle formControlName="showTermsAndConditions"></mat-slide-toggle>
                    </label>
                </div>
            </section>
        </ng-container>
    </form>
</ng-container>
` }]
  }], null, { form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], formType: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }], subForm: [{
    type: Input
  }], stepFormControlName: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupSignUpFormComponent, { className: "SetupSignUpFormComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/sign-up-form/sign-up-form.component.ts", lineNumber: 38 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/representatives/representatives.component.ts
function SetupRepresentativesComponent_ng_container_0_div_1_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r2 = ctx.$implicit;
    \u0275\u0275property("value", n_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r2);
  }
}
function SetupRepresentativesComponent_ng_container_0_div_1_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    \u0275\u0275property("value", n_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r3);
  }
}
function SetupRepresentativesComponent_ng_container_0_div_1_Case_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-sign-up-form", 22);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r3.form)("formGroup", ctx_r3.informationFormGroup)("formType", "personal")("loading", ctx_r3.loading)("saving", ctx_r3.saving)("subForm", true)("stepFormControlName", "legalRepresentative");
  }
}
function SetupRepresentativesComponent_ng_container_0_div_1_Case_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-documents", 23);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r3.form)("formGroup", ctx_r3.documentsFormGroup)("loading", ctx_r3.loading)("saving", ctx_r3.saving)("subForm", true)("stepFormControlName", "legalRepresentative");
  }
}
function SetupRepresentativesComponent_ng_container_0_div_1_Case_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-liveness", 23);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r3.form)("formGroup", ctx_r3.livenessFormGroup)("loading", ctx_r3.loading)("saving", ctx_r3.saving)("subForm", true)("stepFormControlName", "legalRepresentative");
  }
}
function SetupRepresentativesComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "header", 4)(3, "h2", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-button-toggle-group", 7)(8, "mat-button-toggle", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-button-toggle", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-button-toggle", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "section", 3)(15, "header", 4)(16, "h2", 5);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 6);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 11)(21, "mat-form-field", 12)(22, "mat-label");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-select", 13);
    \u0275\u0275repeaterCreate(25, SetupRepresentativesComponent_ng_container_0_div_1_For_26_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 12)(28, "mat-label");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-select", 15);
    \u0275\u0275repeaterCreate(31, SetupRepresentativesComponent_ng_container_0_div_1_For_32_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-form-field", 12)(34, "mat-label");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-select", 16)(37, "mat-option", 17);
    \u0275\u0275text(38, "WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-option", 18);
    \u0275\u0275text(40, "SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-option", 19);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "div", 20)(44, "button", 21);
    \u0275\u0275listener("click", function SetupRepresentativesComponent_ng_container_0_div_1_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.pageIndex = 0);
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 21);
    \u0275\u0275listener("click", function SetupRepresentativesComponent_ng_container_0_div_1_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.pageIndex = 1);
    });
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 21);
    \u0275\u0275listener("click", function SetupRepresentativesComponent_ng_container_0_div_1_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.pageIndex = 2);
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, SetupRepresentativesComponent_ng_container_0_div_1_Case_50_Template, 1, 7, "setup-sign-up-form", 22)(51, SetupRepresentativesComponent_ng_container_0_div_1_Case_51_Template, 1, 6, "setup-documents", 23)(52, SetupRepresentativesComponent_ng_container_0_div_1_Case_52_Template, 1, 6, "setup-liveness", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_37_0;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.stepFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.documents.skip"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.documents.optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.documents.required"));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r3.isNotRequired)("pointer-events-none", ctx_r3.isNotRequired);
    \u0275\u0275property("formGroup", ctx_r3.representativesFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.counts.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.counts.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.representatives.counts.min"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.representativeCounts);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.representatives.counts.max"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.representativeCounts);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.representatives.counts.notification"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.signupForm.email.title"));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r3.isNotRequired)("pointer-events-none", ctx_r3.isNotRequired);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-900", ctx_r3.pageIndex === 0)("text-white", ctx_r3.pageIndex === 0)("dark:bg-white", ctx_r3.pageIndex === 0)("dark:text-stone-900", ctx_r3.pageIndex === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.tabs.information"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-900", ctx_r3.pageIndex === 1)("text-white", ctx_r3.pageIndex === 1)("dark:bg-white", ctx_r3.pageIndex === 1)("dark:text-stone-900", ctx_r3.pageIndex === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.tabs.documents"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-900", ctx_r3.pageIndex === 2)("text-white", ctx_r3.pageIndex === 2)("dark:bg-white", ctx_r3.pageIndex === 2)("dark:text-stone-900", ctx_r3.pageIndex === 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.tabs.liveness"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_37_0 = ctx_r3.pageIndex) === 0 ? 50 : tmp_37_0 === 1 ? 51 : tmp_37_0 === 2 ? 52 : -1);
  }
}
function SetupRepresentativesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupRepresentativesComponent_ng_container_0_div_1_Template, 53, 49, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isFormReady);
  }
}
var SetupRepresentativesComponent = class _SetupRepresentativesComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this.pageIndex = 0;
    this.representativeCounts = Array.from({ length: 10 }, (_, i) => i + 1);
  }
  get representativesFormGroup() {
    return this.form?.get("projectFlow.representatives") || null;
  }
  get documentsFormGroup() {
    return this.representativesFormGroup?.get("documents") || null;
  }
  get informationFormGroup() {
    return this.representativesFormGroup?.get("information") || null;
  }
  get livenessFormGroup() {
    return this.representativesFormGroup?.get("liveness") || null;
  }
  get stepFormGroup() {
    return this.form?.get("projectFlow.steps") || null;
  }
  get isFormReady() {
    return !this.loading && !!this.form && !!this.representativesFormGroup && !!this.livenessFormGroup && !!this.documentsFormGroup && !!this.informationFormGroup;
  }
  get isNotRequired() {
    return this.stepFormGroup?.get("legalRepresentative")?.value === "skip";
  }
  static {
    this.\u0275fac = function SetupRepresentativesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupRepresentativesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupRepresentativesComponent, selectors: [["setup-representatives"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["formControlName", "legalRepresentative", 1, "!rounded-xl"], ["value", "skip"], ["value", "optional"], ["value", "mandatory"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-3"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["formControlName", "minRepresentatives"], [3, "value"], ["formControlName", "maxRepresentatives"], ["formControlName", "notificationType"], ["value", "whatsapp"], ["value", "sms"], ["value", "email"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "rounded-full", "border", "border-stone-200", "px-3", "py-1.5", "text-xs", "font-semibold", "text-stone-700", "dark:border-gray-700", "dark:text-stone-200", 3, "click"], [3, "form", "formGroup", "formType", "loading", "saving", "subForm", "stepFormControlName"], [3, "form", "formGroup", "loading", "saving", "subForm", "stepFormControlName"]], template: function SetupRepresentativesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupRepresentativesComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      ReactiveFormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslocoModule,
      TranslocoDirective,
      SetupDocumentsComponent,
      SetupLivenessComponent,
      SetupSignUpFormComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupRepresentativesComponent, [{
    type: Component,
    args: [{ selector: "setup-representatives", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      TranslocoModule,
      SetupDocumentsComponent,
      SetupLivenessComponent,
      SetupSignUpFormComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6">
        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
            [formGroup]="stepFormGroup!"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.representatives.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.representatives.subtitle') }}
                </p>
            </header>
            <mat-button-toggle-group formControlName="legalRepresentative" class="!rounded-xl">
                <mat-button-toggle value="skip">{{ t('smartEnrollProjects.setup.documents.skip') }}</mat-button-toggle>
                <mat-button-toggle value="optional">{{ t('smartEnrollProjects.setup.documents.optional') }}</mat-button-toggle>
                <mat-button-toggle value="mandatory">{{ t('smartEnrollProjects.setup.documents.required') }}</mat-button-toggle>
            </mat-button-toggle-group>
        </section>

        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
            [formGroup]="representativesFormGroup!"
            [class.opacity-50]="isNotRequired"
            [class.pointer-events-none]="isNotRequired"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.representatives.counts.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.representatives.counts.subtitle') }}
                </p>
            </header>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.representatives.counts.min') }}</mat-label>
                    <mat-select formControlName="minRepresentatives">
                        @for (n of representativeCounts; track n) {
                            <mat-option [value]="n">{{ n }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.representatives.counts.max') }}</mat-label>
                    <mat-select formControlName="maxRepresentatives">
                        @for (n of representativeCounts; track n) {
                            <mat-option [value]="n">{{ n }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <mat-label>{{ t('smartEnrollProjects.setup.representatives.counts.notification') }}</mat-label>
                    <mat-select formControlName="notificationType">
                        <mat-option value="whatsapp">WhatsApp</mat-option>
                        <mat-option value="sms">SMS</mat-option>
                        <mat-option value="email">{{ t('smartEnrollProjects.setup.signupForm.email.title') }}</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </section>

        <div
            class="flex flex-wrap gap-2"
            [class.opacity-50]="isNotRequired"
            [class.pointer-events-none]="isNotRequired"
        >
            <button
                type="button"
                (click)="pageIndex = 0"
                [class.bg-stone-900]="pageIndex === 0"
                [class.text-white]="pageIndex === 0"
                [class.dark:bg-white]="pageIndex === 0"
                [class.dark:text-stone-900]="pageIndex === 0"
                class="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:border-gray-700 dark:text-stone-200"
            >
                {{ t('smartEnrollProjects.setup.representatives.tabs.information') }}
            </button>
            <button
                type="button"
                (click)="pageIndex = 1"
                [class.bg-stone-900]="pageIndex === 1"
                [class.text-white]="pageIndex === 1"
                [class.dark:bg-white]="pageIndex === 1"
                [class.dark:text-stone-900]="pageIndex === 1"
                class="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:border-gray-700 dark:text-stone-200"
            >
                {{ t('smartEnrollProjects.setup.representatives.tabs.documents') }}
            </button>
            <button
                type="button"
                (click)="pageIndex = 2"
                [class.bg-stone-900]="pageIndex === 2"
                [class.text-white]="pageIndex === 2"
                [class.dark:bg-white]="pageIndex === 2"
                [class.dark:text-stone-900]="pageIndex === 2"
                class="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:border-gray-700 dark:text-stone-200"
            >
                {{ t('smartEnrollProjects.setup.representatives.tabs.liveness') }}
            </button>
        </div>

        @switch (pageIndex) {
            @case (0) {
                <setup-sign-up-form
                    [form]="form"
                    [formGroup]="informationFormGroup!"
                    [formType]="'personal'"
                    [loading]="loading"
                    [saving]="saving"
                    [subForm]="true"
                    [stepFormControlName]="'legalRepresentative'"
                ></setup-sign-up-form>
            }
            @case (1) {
                <setup-documents
                    [form]="form"
                    [formGroup]="documentsFormGroup!"
                    [loading]="loading"
                    [saving]="saving"
                    [subForm]="true"
                    [stepFormControlName]="'legalRepresentative'"
                ></setup-documents>
            }
            @case (2) {
                <setup-liveness
                    [form]="form"
                    [formGroup]="livenessFormGroup!"
                    [loading]="loading"
                    [saving]="saving"
                    [subForm]="true"
                    [stepFormControlName]="'legalRepresentative'"
                ></setup-liveness>
            }
        }
    </div>
</ng-container>
` }]
  }], null, { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupRepresentativesComponent, { className: "SetupRepresentativesComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/representatives/representatives.component.ts", lineNumber: 43 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/setup-step-stub.component.ts
var SetupStepStubComponent = class _SetupStepStubComponent {
  constructor() {
    this.titleKey = "smartEnrollProjects.setup.stub.title";
    this.form = null;
    this.formGroup = null;
    this.loading = false;
    this.saving = false;
    this.subForm = false;
    this.formType = "personal";
    this.stepFormControlName = "";
  }
  static {
    this.\u0275fac = function SetupStepStubComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupStepStubComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupStepStubComponent, selectors: [["setup-step-stub"]], inputs: { titleKey: "titleKey", form: "form", formGroup: "formGroup", loading: "loading", saving: "saving", subForm: "subForm", formType: "formType", stepFormControlName: "stepFormControlName" }, decls: 7, vars: 6, consts: [[1, "rounded-2xl", "border", "border-dashed", "border-stone-300/80", "bg-white", "px-6", "py-12", "text-center", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "text-sm", "font-medium", "text-stone-600", "dark:text-stone-300"], [1, "mt-2", "text-xs", "text-stone-500", "dark:text-stone-400"]], template: function SetupStepStubComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx.titleKey), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "smartEnrollProjects.setup.stub.placeholder"), " ");
      }
    }, dependencies: [CommonModule, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupStepStubComponent, [{
    type: Component,
    args: [{
      selector: "setup-step-stub",
      standalone: true,
      imports: [CommonModule, TranslocoModule],
      template: `
        <div
            class="rounded-2xl border border-dashed border-stone-300/80 bg-white px-6 py-12 text-center dark:border-gray-700 dark:bg-gray-900/40"
        >
            <p class="text-sm font-medium text-stone-600 dark:text-stone-300">
                {{ titleKey | transloco }}
            </p>
            <p class="mt-2 text-xs text-stone-500 dark:text-stone-400">
                {{ 'smartEnrollProjects.setup.stub.placeholder' | transloco }}
            </p>
        </div>
    `
    }]
  }], null, { titleKey: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }], subForm: [{
    type: Input
  }], formType: [{
    type: Input
  }], stepFormControlName: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupStepStubComponent, { className: "SetupStepStubComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/setup-step-stub.component.ts", lineNumber: 27 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/user-interface/user-interface.component.ts
var _forTrack06 = ($index, $item) => $item.control;
function SetupUserInterfaceComponent_ng_container_0_div_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 8);
    \u0275\u0275element(1, "input", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "p", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", f_r1.control);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2(f_r1.labelKey), " ");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", f_r1.control);
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_For_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "img", 17);
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function SetupUserInterfaceComponent_ng_container_0_div_1_For_18_Conditional_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const f_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.clearImage(f_r4.control));
    });
    \u0275\u0275elementStart(3, "mat-icon", 19);
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.ui.images.remove"), " ");
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_For_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 16)(1, "mat-icon", 19);
    \u0275\u0275text(2, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "input", 20);
    \u0275\u0275listener("change", function SetupUserInterfaceComponent_ng_container_0_div_1_For_18_Conditional_6_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const f_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.onFileChange(f_r4.control, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.ui.images.upload"), " ");
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SetupUserInterfaceComponent_ng_container_0_div_1_For_18_Conditional_5_Template, 6, 2, "div", 15)(6, SetupUserInterfaceComponent_ng_container_0_div_1_For_18_Conditional_6_Template, 5, 1, "label", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const f_r4 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2(f_r4.labelKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2(f_r4.subtitleKey), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_15_0 = ctx_r4.imageValue(f_r4.control)) ? 5 : 6, tmp_15_0);
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "header", 4)(3, "h2", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275repeaterCreate(8, SetupUserInterfaceComponent_ng_container_0_div_1_For_9_Template, 6, 3, "label", 8, _forTrack06);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "section", 3)(11, "header", 4)(12, "h2", 5);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 6);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 7);
    \u0275\u0275repeaterCreate(17, SetupUserInterfaceComponent_ng_container_0_div_1_For_18_Template, 7, 3, "div", 9, _forTrack06);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r4.brandingFormGroup);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.ui.colors.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.ui.colors.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.colorFields);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.ui.images.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.ui.images.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.imageFields);
  }
}
function SetupUserInterfaceComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupUserInterfaceComponent_ng_container_0_div_1_Template, 19, 5, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.isFormReady);
  }
}
var MAX_LOGO_SIZE_BYTES = 1024 * 512;
var SetupUserInterfaceComponent = class _SetupUserInterfaceComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this.colorFields = [
      { control: "backgroundColor", labelKey: "smartEnrollProjects.setup.ui.colors.background" },
      { control: "titleColor", labelKey: "smartEnrollProjects.setup.ui.colors.title" },
      { control: "textColor", labelKey: "smartEnrollProjects.setup.ui.colors.text" },
      { control: "buttonColor", labelKey: "smartEnrollProjects.setup.ui.colors.button" },
      { control: "buttonTextColor", labelKey: "smartEnrollProjects.setup.ui.colors.buttonText" },
      { control: "imageBackgroundColor", labelKey: "smartEnrollProjects.setup.ui.colors.imageBackground" }
    ];
    this.imageFields = [
      {
        control: "logo",
        labelKey: "smartEnrollProjects.setup.ui.images.logo",
        subtitleKey: "smartEnrollProjects.setup.ui.images.logoSubtitle"
      },
      {
        control: "image",
        labelKey: "smartEnrollProjects.setup.ui.images.banner",
        subtitleKey: "smartEnrollProjects.setup.ui.images.bannerSubtitle"
      }
    ];
  }
  get isFormReady() {
    return !this.loading && !!this.form && !!this.brandingFormGroup;
  }
  get brandingFormGroup() {
    return this.form?.get("branding") || null;
  }
  onFileChange(forControl, event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (file.size > MAX_LOGO_SIZE_BYTES) {
      this._snack.open(this._transloco.translate("smartEnrollProjects.setup.ui.images.tooLarge"), "OK", {
        duration: 4e3
      });
      input.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUri = reader.result;
      const ctrl = this.brandingFormGroup?.get(forControl);
      ctrl?.setValue(dataUri || "");
      ctrl?.markAsDirty();
      ctrl?.markAsTouched();
      ctrl?.updateValueAndValidity();
      this._cdr.markForCheck();
    };
    reader.onerror = () => {
      this._snack.open(this._transloco.translate("smartEnrollProjects.setup.ui.images.uploadFailed"), "OK", {
        duration: 4e3
      });
    };
    reader.readAsDataURL(file);
  }
  clearImage(forControl) {
    const ctrl = this.brandingFormGroup?.get(forControl);
    ctrl?.setValue("");
    ctrl?.markAsDirty();
    ctrl?.updateValueAndValidity();
  }
  imageValue(forControl) {
    const v = this.brandingFormGroup?.get(forControl)?.value;
    return v || null;
  }
  static {
    this.\u0275fac = function SetupUserInterfaceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupUserInterfaceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupUserInterfaceComponent, selectors: [["setup-user-interface"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 3, "formGroup", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6", 3, "formGroup"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], [1, "flex", "items-center", "gap-3", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50", "px-3", "py-2", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "rounded-xl", "border", "border-stone-200/80", "bg-stone-50", "px-4", "py-4", "dark:border-gray-700", "dark:bg-gray-900/40"], ["type", "color", 1, "h-9", "w-10", "shrink-0", "rounded-md", "border-0", "bg-transparent", "p-0", 3, "formControlName"], [1, "min-w-0", "flex-1"], [1, "text-xs", "font-medium", "text-stone-500", "dark:text-stone-400"], ["type", "text", 1, "w-full", "bg-transparent", "font-mono", "text-sm", "text-stone-800", "outline-none", "dark:text-stone-100", 3, "formControlName"], [1, "text-sm", "font-medium", "text-stone-800", "dark:text-stone-100"], [1, "mt-3", "flex", "items-center", "gap-3"], [1, "mt-3", "flex", "cursor-pointer", "items-center", "gap-2", "rounded-full", "border", "border-dashed", "border-stone-300/90", "px-3", "py-1.5", "text-xs", "font-medium", "text-stone-600", "hover:bg-stone-100", "dark:border-gray-700", "dark:text-stone-300", "dark:hover:bg-gray-800"], ["alt", "", 1, "h-16", "w-16", "rounded-lg", "border", "border-stone-200", "object-contain", "dark:border-gray-700", 3, "src"], ["mat-stroked-button", "", "type", "button", 1, "rounded-full", 3, "click"], [1, "!h-4", "!w-4"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"]], template: function SetupUserInterfaceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupUserInterfaceComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoDirective
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupUserInterfaceComponent, [{
    type: Component,
    args: [{ selector: "setup-user-interface", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSnackBarModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6" [formGroup]="brandingFormGroup!">
        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.ui.colors.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.ui.colors.subtitle') }}
                </p>
            </header>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                @for (f of colorFields; track f.control) {
                    <label
                        class="flex items-center gap-3 rounded-xl border border-stone-200/80 bg-stone-50 px-3 py-2 dark:border-gray-700 dark:bg-gray-900/40"
                    >
                        <input
                            type="color"
                            [formControlName]="f.control"
                            class="h-9 w-10 shrink-0 rounded-md border-0 bg-transparent p-0"
                        />
                        <div class="min-w-0 flex-1">
                            <p class="text-xs font-medium text-stone-500 dark:text-stone-400">
                                {{ t(f.labelKey) }}
                            </p>
                            <input
                                type="text"
                                [formControlName]="f.control"
                                class="w-full bg-transparent font-mono text-sm text-stone-800 outline-none dark:text-stone-100"
                            />
                        </div>
                    </label>
                }
            </div>
        </section>

        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.ui.images.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.ui.images.subtitle') }}
                </p>
            </header>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                @for (f of imageFields; track f.control) {
                    <div
                        class="rounded-xl border border-stone-200/80 bg-stone-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-900/40"
                    >
                        <p class="text-sm font-medium text-stone-800 dark:text-stone-100">
                            {{ t(f.labelKey) }}
                        </p>
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                            {{ t(f.subtitleKey) }}
                        </p>

                        @if (imageValue(f.control); as src) {
                            <div class="mt-3 flex items-center gap-3">
                                <img [src]="src" alt="" class="h-16 w-16 rounded-lg border border-stone-200 object-contain dark:border-gray-700" />
                                <button mat-stroked-button type="button" (click)="clearImage(f.control)" class="rounded-full">
                                    <mat-icon class="!h-4 !w-4">delete</mat-icon>
                                    {{ t('smartEnrollProjects.setup.ui.images.remove') }}
                                </button>
                            </div>
                        } @else {
                            <label class="mt-3 flex cursor-pointer items-center gap-2 rounded-full border border-dashed border-stone-300/90 px-3 py-1.5 text-xs font-medium text-stone-600 hover:bg-stone-100 dark:border-gray-700 dark:text-stone-300 dark:hover:bg-gray-800">
                                <mat-icon class="!h-4 !w-4">upload</mat-icon>
                                {{ t('smartEnrollProjects.setup.ui.images.upload') }}
                                <input type="file" accept="image/*" class="hidden" (change)="onFileChange(f.control, $event)" />
                            </label>
                        }
                    </div>
                }
            </div>
        </section>
    </div>
</ng-container>
` }]
  }], null, { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupUserInterfaceComponent, { className: "SetupUserInterfaceComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/user-interface/user-interface.component.ts", lineNumber: 34 });
})();

// src/app/modules/smart-enroll/projects/setup/setup.types.ts
var isProject = (project) => {
  return !!project && typeof project === "object" && "_id" in project;
};

// src/app/modules/smart-enroll/projects/setup/setup-host.component.ts
var _c02 = (a0) => ["/smart-enroll/projects", a0];
function SetupHostComponent_ng_container_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.project_description"), " ");
  }
}
function SetupHostComponent_ng_container_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function SetupHostComponent_ng_container_0_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previewProject());
    });
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-icon", 24);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.canNavigate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.see_live_project"));
  }
}
function SetupHostComponent_ng_container_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-breadcrumbs", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("form", ctx_r1.form)("isStepValid", ctx_r1.isFormValidForStep)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementEnd();
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-basic-setup", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-sign-up-form", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("formGroup", ctx_r1.signUpFormGroup())("formType", ctx_r1.currentTarget)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-documents", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("formGroup", ctx_r1.documentsFormGroup())("stepFormControlName", ctx_r1.documentsStepFormControlName())("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-representatives", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-liveness", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("form", ctx_r1.form)("formGroup", ctx_r1.livenessFormGroup())("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SetupHostComponent_ng_container_0_Conditional_30_Case_4_Conditional_0_Template, 1, 3, "setup-representatives", 26)(1, SetupHostComponent_ng_container_0_Conditional_30_Case_4_Conditional_1_Template, 1, 4, "setup-liveness", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.currentTarget === "business" ? 0 : 1);
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-integrations", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-user-interface", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-step-stub", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("titleKey", ctx_r1.steps[ctx_r1.stepIndex] || "smartEnrollProjects.setup.stub.title")("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 34);
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, SetupHostComponent_ng_container_0_Conditional_30_Case_1_Template, 1, 3, "setup-basic-setup", 26)(2, SetupHostComponent_ng_container_0_Conditional_30_Case_2_Template, 1, 5, "setup-sign-up-form", 27)(3, SetupHostComponent_ng_container_0_Conditional_30_Case_3_Template, 1, 5, "setup-documents", 28)(4, SetupHostComponent_ng_container_0_Conditional_30_Case_4_Template, 2, 1)(5, SetupHostComponent_ng_container_0_Conditional_30_Case_5_Template, 1, 3, "setup-integrations", 26)(6, SetupHostComponent_ng_container_0_Conditional_30_Case_6_Template, 1, 3, "setup-user-interface", 26)(7, SetupHostComponent_ng_container_0_Conditional_30_Case_7_Template, 1, 4, "setup-step-stub", 29);
    \u0275\u0275elementStart(8, "div", 30)(9, "button", 31);
    \u0275\u0275listener("click", function SetupHostComponent_ng_container_0_Conditional_30_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousStep());
    });
    \u0275\u0275elementStart(10, "mat-icon", 32);
    \u0275\u0275text(11, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 33);
    \u0275\u0275listener("click", function SetupHostComponent_ng_container_0_Conditional_30_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275template(14, SetupHostComponent_ng_container_0_Conditional_30_Conditional_14_Template, 1, 0, "mat-spinner", 34);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.stepIndex) === 0 ? 1 : tmp_3_0 === 1 ? 2 : tmp_3_0 === 2 ? 3 : tmp_3_0 === 3 ? 4 : tmp_3_0 === 4 ? 5 : tmp_3_0 === 5 ? 6 : 7);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx_r1.canNavigate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.go_back"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canNavigate || !ctx_r1.isFormValidForStep(ctx_r1.stepIndex));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.continue"), " ");
  }
}
function SetupHostComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
    \u0275\u0275text(6, " Verifik ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "mat-icon", 6);
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "mat-icon", 6);
    \u0275\u0275elementStart(11, "a", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "mat-icon", 6);
    \u0275\u0275elementStart(14, "span", 9);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "button", 12);
    \u0275\u0275listener("click", function SetupHostComponent_ng_container_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.returnToProjects());
    });
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 13)(22, "h1", 14);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, SetupHostComponent_ng_container_0_Conditional_24_Template, 2, 1, "p", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, SetupHostComponent_ng_container_0_Conditional_25_Template, 5, 2, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, SetupHostComponent_ng_container_0_Conditional_26_Template, 1, 4, "setup-breadcrumbs", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "main", 18)(28, "div", 19);
    \u0275\u0275template(29, SetupHostComponent_ng_container_0_Conditional_29_Template, 2, 0, "div", 20)(30, SetupHostComponent_ng_container_0_Conditional_30_Template, 16, 6, "div", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c02, ctx_r1.projectId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.project == null ? null : ctx_r1.project.name) || ctx_r1.projectId, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.title"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", t_r3("smartEnrollProjects.backToList"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.projectId === "new" ? t_r3("smartEnrollProjects.setup.new_project") : ctx_r1.project == null ? null : ctx_r1.project.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.projectId === "new" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.project == null ? null : ctx_r1.project.projectFlows == null ? null : ctx_r1.project.projectFlows[0] == null ? null : ctx_r1.project.projectFlows[0].status) === "active" && ctx_r1.projectId !== "new" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form ? 26 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() ? 29 : ctx_r1.form ? 30 : -1);
  }
}
var SetupHostComponent = class _SetupHostComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._formBuilder = inject(FormBuilder);
    this._setup = inject(SetupService);
    this._factory = inject(SetupFormFactory);
    this._cdr = inject(ChangeDetectorRef);
    this._dialog = inject(MatDialog);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._confirm = inject(FuseConfirmationService);
    this._unsub$ = new Subject();
    this._DEBUG = false;
    this.formKeys = {};
    this.isPreviewExpanded = false;
    this.loading = signal(true);
    this.saving = signal(false);
    this.project = {};
    this.projectId = "";
    this.stepIndex = 0;
    this._preventCsvSource = (control) => {
      if (control.value === "CSV")
        return { csvNotSupported: true };
      return null;
    };
    this.isFormValidForStep = (stepIndex) => {
      if (!this.form)
        return false;
      const keys = this.formKeys?.[stepIndex];
      if (!keys)
        return false;
      const isSkippableStep = keys[0].includes("projectFlow.steps") && this.form.get(keys[0])?.value === "skip";
      if (isSkippableStep)
        return true;
      const allValid = keys.every((key) => {
        if (this._DEBUG && this.form.get(key)?.invalid) {
          console.log(key, this.form.get(key)?.invalid, this.form.get(key)?.errors, this.form.get(key)?.value);
        }
        return !this.form.get(key)?.invalid;
      });
      if (!allValid)
        return false;
      if (stepIndex === 1) {
        const signUpFormGroup = this.form.get("projectFlow.signUpForm");
        if (signUpFormGroup && signUpFormGroup.invalid)
          return false;
      }
      return true;
    };
    const id = this._route.snapshot.params["projectId"] || "new";
    const step = this._route.snapshot.params["step"] || 0;
    if (id)
      this._setup.projectId = id;
    this._setup.stepIndex = Number(step) || 0;
    this.formKeys = this._setup.defaultFormKeys;
  }
  ngOnInit() {
    this._initSubscribers();
  }
  ngOnDestroy() {
    this._unsub$.next();
    this._unsub$.complete();
  }
  get canNavigate() {
    return !this.loading() && !this.saving();
  }
  get steps() {
    if (this.form?.get("target")?.value === "business")
      return this._setup.businessSteps;
    return this._setup.personalSteps;
  }
  _initSubscribers() {
    this._route.params.pipe(takeUntil(this._unsub$)).subscribe((params) => {
      const id = params["projectId"] || "new";
      const step = params["step"] || 0;
      if (id)
        this._setup.projectId = id;
      this._setup.stepIndex = Number(step) || 0;
    });
    this._setup.projectId$.pipe(takeUntil(this._unsub$)).subscribe((id) => this.projectId = id);
    this._setup.stepIndex$.pipe(takeUntil(this._unsub$)).subscribe((step) => {
      this.form?.get("currentStep")?.setValue(this.stepIndex + 1);
      this.stepIndex = step;
      this._cdr.markForCheck();
    });
    this._setup.project$.pipe(takeUntil(this._unsub$)).subscribe((project) => {
      this.project = !project ? this._setup.getDefaultProject() : project;
      this._initForm();
    });
    if (this.projectId && this.projectId !== "new") {
      this._loadProject(this.projectId);
    } else {
      this._setup.project = this._setup.getDefaultProject();
    }
  }
  _loadProject(id) {
    this.loading.set(true);
    this._setup.requestProject(id, { with: ["projectFlows"], type: "onboarding" }).subscribe({
      next: (res) => {
        const project = res?.data ?? null;
        if (project) {
          project.target = project.target || project.projectFlows?.[0]?.target || "";
          this._setup.project = project;
        } else {
          this._setup.project = this._setup.getDefaultProject();
        }
      },
      error: () => {
        this._snack.open(this._t("smartEnrollProjects.setup.api_error"), this._t("close"), { duration: 3e3 });
        this._setup.project = this._setup.getDefaultProject();
      }
    });
  }
  _initForm() {
    const project = isProject(this.project) ? this.project : this._setup.getDefaultProject();
    this.form = this._initProjectForm(project);
    this._updateFormValidationKeys(project?.target || "personal");
    this._initFormChangeSubscriptions();
    const targetValue = this.form.get("target")?.value;
    const currentBusinessVerificationStepValue = this.form.get("projectFlow.steps.businessVerification")?.value;
    const currentDocumentStepValue = this.form.get("projectFlow.steps.document")?.value;
    const currentLivenessStepValue = this.form.get("projectFlow.steps.liveness")?.value;
    const currentIntegrationsSourceValue = this.form.get("projectFlow.integrations.source")?.value;
    const currentLegalRepresentativeStepValue = this.form.get("projectFlow.steps.legalRepresentative")?.value;
    const documentBusinessStepValue = targetValue === "business" ? currentBusinessVerificationStepValue : currentDocumentStepValue;
    this._toggleBusinessControls(currentBusinessVerificationStepValue);
    this._toggleDocumentControls(documentBusinessStepValue);
    this._toggleIntegrationsControls(currentIntegrationsSourceValue);
    this._toggleLegalRepresentativeControls(currentLegalRepresentativeStepValue);
    this._toggleLivenessControls(currentLivenessStepValue);
    if (this.form.get("version")?.value !== 3 || this.form.get("projectFlow.version")?.value !== 3) {
      this.form.get("version")?.setValue(3);
      this.form.get("projectFlow.version")?.setValue(3);
      this.form.get("version")?.markAsDirty();
      this.form.get("version")?.markAsTouched();
      this.form.get("projectFlow.version")?.markAsDirty();
      this.form.get("projectFlow.version")?.markAsTouched();
    }
    setTimeout(() => {
      this._cdr.markForCheck();
      this._triggerFormValidation();
    }, 0);
    this.loading.set(false);
    this._cdr.markForCheck();
  }
  _initFormChangeSubscriptions() {
    this._createFormSubscription("target", (target) => {
      this.form.get("projectFlow.target")?.setValue(target);
      this._updateFormValidationKeys(target);
    });
    this._createFormSubscription("projectFlow.signUpForm.additionalFields", () => {
      this.form.get("projectFlow.signUpForm.allowAdditionalFields")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.signUpForm.allowAdditionalFields", () => {
      this.form.get("projectFlow.signUpForm.additionalFields")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.signUpForm.email", () => {
      this.form.get("projectFlow.signUpForm")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.signUpForm.phone", () => {
      this.form.get("projectFlow.signUpForm")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.representatives.information.allowAdditionalFields", () => {
      this.form.get("projectFlow.representatives.information.additionalFields")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.representatives.information.additionalFields", () => {
      this.form.get("projectFlow.representatives.information.allowAdditionalFields")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.representatives.minRepresentatives", (minValue) => {
      const max = this.form.get("projectFlow.representatives.maxRepresentatives")?.value;
      if (!max)
        return;
      if (minValue <= max)
        return;
      this.form.get("projectFlow.representatives.maxRepresentatives")?.setValue(minValue);
      this.form.get("projectFlow.representatives.minRepresentatives")?.setValue(max);
    });
    this._createFormSubscription("projectFlow.representatives.maxRepresentatives", (maxValue) => {
      const min = this.form.get("projectFlow.representatives.minRepresentatives")?.value;
      if (!min)
        return;
      if (maxValue >= min)
        return;
      this.form.get("projectFlow.representatives.minRepresentatives")?.setValue(maxValue);
      this.form.get("projectFlow.representatives.maxRepresentatives")?.setValue(min);
    });
    this._createFormSubscription("projectFlow.steps.document", (v) => this._toggleDocumentControls(v));
    this._createFormSubscription("projectFlow.steps.businessVerification", (v) => this._toggleBusinessControls(v));
    this._createFormSubscription("projectFlow.steps.legalRepresentative", (v) => this._toggleLegalRepresentativeControls(v));
    this._createFormSubscription("projectFlow.steps.liveness", (v) => this._toggleLivenessControls(v));
    this._createFormSubscription("projectFlow.integrations.source", (v) => this._toggleIntegrationsControls(v));
  }
  _createFormSubscription(path, callback) {
    this.form.get(path)?.valueChanges.pipe(takeUntil(this._unsub$)).subscribe((value) => {
      callback(value);
      setTimeout(() => this._cdr.markForCheck(), 0);
    });
  }
  _initProjectForm(project) {
    const defaultBranding = this._setup.defaultBranding;
    return this._formBuilder.group({
      allowedCountries: [project?.allowedCountries || [], [Validators.required]],
      contactEmail: [
        project?.contactEmail || "",
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
      ],
      currentStep: [project?.currentStep || 0],
      lastStep: [project?.lastStep || 0],
      name: [project?.name || "", [Validators.required, Validators.maxLength(60)]],
      privacyUrl: [project?.privacyUrl || "", [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
      target: [project?.target || "personal", [Validators.required]],
      termsAndConditionsUrl: [project?.termsAndConditionsUrl || "", [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
      projectFlow: this._initProjectFlowForm(project?.target || "personal", project?.projectFlows?.[0] || {}),
      version: [project?.version, [Validators.required]],
      branding: this._formBuilder.group({
        backgroundColor: [project?.branding?.backgroundColor || defaultBranding.backgroundColor, [Validators.required]],
        buttonColor: [project?.branding?.buttonColor || defaultBranding.buttonColor, [Validators.required]],
        buttonTextColor: [project?.branding?.buttonTextColor || defaultBranding.buttonTextColor, [Validators.required]],
        image: [project?.branding?.image || defaultBranding.image],
        imageBackgroundColor: [project?.branding?.imageBackgroundColor || defaultBranding.imageBackgroundColor, [Validators.required]],
        logo: [project?.branding?.logo || defaultBranding.logo, [Validators.required]],
        textColor: [project?.branding?.textColor || defaultBranding.textColor, [Validators.required]],
        titleColor: [project?.branding?.titleColor || defaultBranding.titleColor]
      }),
      dataProtection: this._formBuilder.group({
        address: [project?.dataProtection?.address || "", [Validators.required, Validators.pattern(ADDRESS_PATTERN)]],
        address2: [project?.dataProtection?.address2 || ""],
        city: [project?.dataProtection?.city || "", [Validators.required, Validators.pattern(CITY_NAME_PATTERN)]],
        country: [project?.dataProtection?.country || "", [Validators.required]],
        email: [
          project?.dataProtection?.email || "",
          [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
        ],
        name: [project?.dataProtection?.name || "", [Validators.required, Validators.pattern(PERSON_NAME_PATTERN)]],
        postalCode: [project?.dataProtection?.postalCode || "", [Validators.required, Validators.pattern(/^[A-Za-z0-9\s\-]{3,12}$/)]]
      })
    });
  }
  _initProjectFlowForm(target, currentData) {
    return this._formBuilder.group({
      _id: [currentData?._id || ""],
      status: [currentData?.status || "draft"],
      target: [target, [Validators.required]],
      type: ["onboarding", [Validators.required]],
      version: [currentData?.version, [Validators.required]],
      business: this._formBuilder.group({
        attemptLimit: [currentData?.business?.attemptLimit || 3, [Validators.required, Validators.min(1), Validators.max(5)]],
        criminalHistoryVerification: [currentData?.business?.criminalHistoryVerification || false],
        criminalHistoryVerificationEndpoints: [currentData?.business?.criminalHistoryVerificationEndpoints || []],
        documentTypes: this._factory.createDocumentTypesWithDefaults(currentData?.business?.documentTypes || [], "business"),
        informationVerification: [currentData?.business?.informationVerification || false],
        screening: [currentData?.business?.screening || false]
      }, { validators: SetupFormFactory.validators.documentsScreening() }),
      documents: this._formBuilder.group({
        attemptLimit: [currentData?.documents?.attemptLimit || 3, [Validators.required, Validators.min(1), Validators.max(5)]],
        criminalHistoryVerification: [currentData?.documents?.criminalHistoryVerification || false],
        criminalHistoryVerificationEndpoints: [currentData?.documents?.criminalHistoryVerificationEndpoints || []],
        documentTypes: this._factory.createDocumentTypesWithDefaults(currentData?.documents?.documentTypes || [], "personal"),
        informationVerification: [currentData?.documents?.informationVerification || false],
        screening: [currentData?.documents?.screening || false],
        verificationMethods: [currentData?.documents?.verificationMethods || [], [Validators.required]]
      }, { validators: SetupFormFactory.validators.documentsScreening() }),
      integrations: this._formBuilder.group({
        apiTestType: [currentData?.integrations?.apiTestType || "email"],
        apiTestValue: [currentData?.integrations?.apiTestValue || ""],
        apiUrl: [currentData?.integrations?.apiUrl || "", [Validators.pattern(STRICT_URL_PATTERN)]],
        redirectUrl: [currentData?.integrations?.redirectUrl || "", [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
        source: [currentData?.integrations?.source || "NONE", [Validators.required, this._preventCsvSource]],
        strategy: [currentData?.integrations?.strategy || "none"],
        webhook: [currentData?.integrations?.webhook || null]
      }),
      liveness: this._formBuilder.group({
        attemptLimit: [currentData?.liveness?.attemptLimit || 3, [Validators.required, Validators.min(1), Validators.max(5)]],
        minScore: [currentData?.liveness?.minScore || 0.65, [Validators.min(0.52), Validators.max(0.9)]],
        compareMinScore: [currentData?.liveness?.compareMinScore || 0.85, [Validators.min(0.7), Validators.max(0.95)]],
        searchMinScore: [currentData?.liveness?.searchMinScore || 0.85, [Validators.min(0.81), Validators.max(0.95)]],
        searchMode: [currentData?.liveness?.searchMode || "FAST"],
        kycType: [currentData?.liveness?.kycType || "traditional"]
      }),
      representatives: this._formBuilder.group({
        maxRepresentatives: [
          currentData?.representatives?.maxRepresentatives || 3,
          [Validators.required, Validators.min(1), Validators.max(10)]
        ],
        minRepresentatives: [
          currentData?.representatives?.minRepresentatives || 1,
          [Validators.required, Validators.min(1), Validators.max(10)]
        ],
        notificationType: [currentData?.representatives?.notificationType || "whatsapp", [Validators.required]],
        documents: this._formBuilder.group({
          attemptLimit: [currentData?.representatives?.documents?.attemptLimit || 3, [Validators.min(1), Validators.max(5)]],
          criminalHistoryVerification: [currentData?.representatives?.documents?.criminalHistoryVerification || false],
          criminalHistoryVerificationEndpoints: [currentData?.representatives?.documents?.criminalHistoryVerificationEndpoints || []],
          documentTypes: this._factory.createDocumentTypesWithDefaults(currentData?.representatives?.documents?.documentTypes || [], "personal"),
          informationVerification: [currentData?.representatives?.documents?.informationVerification || false],
          screening: [currentData?.representatives?.documents?.screening || false],
          verificationMethods: [currentData?.representatives?.documents?.verificationMethods || [], [Validators.required]]
        }, { validators: SetupFormFactory.validators.documentsScreening() }),
        information: this._formBuilder.group({
          additionalFields: [currentData?.representatives?.information?.additionalFields || []],
          allowAdditionalFields: [
            currentData?.representatives?.information?.allowAdditionalFields || false,
            [SetupFormFactory.validators.additionalFields()]
          ],
          countryCode: [currentData?.representatives?.information?.countryCode || DEFAULT_PHONE_COUNTRY_CODE],
          email: [currentData?.representatives?.information?.email || false],
          emailGateway: [currentData?.representatives?.information?.emailGateway || "none"],
          fullName: [true, [Validators.requiredTrue]],
          fullNameStyle: [currentData?.representatives?.information?.fullNameStyle || "separate", [Validators.required]],
          phone: [currentData?.representatives?.information?.phone || false],
          phoneGateway: [currentData?.representatives?.information?.phoneGateway || "whatsapp"],
          showPrivacyNotice: [currentData?.representatives?.information?.showPrivacyNotice || true],
          showTermsAndConditions: [currentData?.representatives?.information?.showTermsAndConditions || true]
        }),
        liveness: this._formBuilder.group({
          attemptLimit: [
            currentData?.representatives?.liveness?.attemptLimit || 3,
            [Validators.required, Validators.min(1), Validators.max(5)]
          ],
          minScore: [currentData?.liveness?.minScore || 0.65, [Validators.min(0.52), Validators.max(0.9)]],
          compareMinScore: [currentData?.representatives?.liveness?.compareMinScore || 0.85, [Validators.min(0.7), Validators.max(0.95)]],
          searchMinScore: [currentData?.representatives?.liveness?.searchMinScore || 0.85, [Validators.min(0.81), Validators.max(0.95)]],
          searchMode: [currentData?.representatives?.liveness?.searchMode || "FAST"],
          kycType: [currentData?.representatives?.liveness?.kycType || "traditional"]
        })
      }),
      signUpForm: this._formBuilder.group({
        additionalFields: [currentData?.signUpForm?.additionalFields || []],
        address: [currentData?.signUpForm?.address || false],
        allowAdditionalFields: [
          currentData?.signUpForm?.allowAdditionalFields || false,
          [SetupFormFactory.validators.additionalFields()]
        ],
        countryCode: [currentData?.signUpForm?.countryCode || DEFAULT_PHONE_COUNTRY_CODE],
        email: [currentData?.signUpForm?.email || false],
        emailGateway: [currentData?.signUpForm?.emailGateway || "mailgun"],
        businessBasicInfo: [currentData?.signUpForm?.businessBasicInfo || true, [Validators.requiredTrue]],
        businessBasicInfoStyle: [currentData?.signUpForm?.businessBasicInfoStyle || "name_number", [Validators.required]],
        fullName: [true, [Validators.requiredTrue]],
        fullNameStyle: [currentData?.signUpForm?.fullNameStyle || "separate", [Validators.required]],
        phone: [currentData?.signUpForm?.phone || false],
        phoneGateway: [currentData?.signUpForm?.phoneGateway || "both"],
        showPrivacyNotice: [currentData?.signUpForm?.showPrivacyNotice || true],
        showTermsAndConditions: [currentData?.signUpForm?.showTermsAndConditions || true]
      }, { validators: SetupFormFactory.validators.atLeastOneContactMethod() }),
      steps: this._formBuilder.group({
        businessVerification: [currentData?.steps?.businessVerification || false],
        document: [
          currentData?.steps?.document || "mandatory",
          [Validators.required, SetupFormFactory.validators.requiredIfDocumentStep()]
        ],
        legalRepresentative: [currentData?.steps?.legalRepresentative || "skip", [Validators.required]],
        liveness: [currentData?.steps?.liveness || "skip", [Validators.required]]
      })
    });
  }
  /**
   * Trim the form value down to only the slice relevant to the current step before
   * sending to the v3 backend (mirrors verifik-client-panel ProjectSmartEnrollComponent).
   */
  _prepareProjectFlowData(data) {
    const _a = data, { dataProtection, branding, projectFlow: projectFlowData } = _a, restProject = __objRest(_a, ["dataProtection", "branding", "projectFlow"]);
    const _b = projectFlowData, { steps, business, documents, liveness, signUpForm, representatives, integrations } = _b, restProjectFlow = __objRest(_b, ["steps", "business", "documents", "liveness", "signUpForm", "representatives", "integrations"]);
    const formData = restProject;
    if (this.stepIndex === 0) {
      formData.dataProtection = dataProtection;
      return formData;
    }
    if (this.stepIndex === 1) {
      formData.projectFlow = __spreadProps(__spreadValues({}, restProjectFlow), { signUpForm });
    } else if (this.stepIndex === 2) {
      formData.projectFlow = __spreadProps(__spreadValues({}, restProjectFlow), { steps });
      if (data.projectFlow.target === "business") {
        formData.projectFlow.business = !steps.businessVerification ? {} : business;
      } else {
        formData.projectFlow.documents = steps.document === "skip" ? {} : documents;
      }
    } else if (this.stepIndex === 3) {
      formData.projectFlow = __spreadProps(__spreadValues({}, restProjectFlow), { steps });
      if (data.projectFlow.target === "business") {
        formData.projectFlow.representatives = steps.legalRepresentative === "skip" ? void 0 : representatives;
      } else {
        const livenessFormGroup = this.form.get("projectFlow.liveness");
        const livenessRawValue = livenessFormGroup?.getRawValue ? livenessFormGroup.getRawValue() : liveness;
        if (steps.liveness === "skip") {
          formData.projectFlow.liveness = {
            kycType: livenessRawValue?.kycType || liveness?.kycType || "traditional"
          };
        } else {
          formData.projectFlow.liveness = __spreadProps(__spreadValues({}, livenessRawValue), {
            kycType: livenessRawValue?.kycType || liveness?.kycType || "traditional"
          });
        }
      }
    } else if (this.stepIndex === 4) {
      formData.projectFlow = __spreadProps(__spreadValues({}, restProjectFlow), { integrations });
    } else if (this.stepIndex === 5) {
      formData.branding = branding;
    }
    return formData;
  }
  // ---------------------------------------------------------------------------
  // Toggle helpers — copied verbatim
  // ---------------------------------------------------------------------------
  _toggleBusinessControls(businessVerificationStep) {
    const businessFormGroup = this.form.get("projectFlow.business");
    if (!businessFormGroup)
      return;
    this._toggleDocumentGroupControls(businessFormGroup, !businessVerificationStep);
  }
  _toggleDocumentControls(documentStep) {
    const documentsFormGroup = this.form.get("projectFlow.documents");
    if (!documentsFormGroup)
      return;
    this._toggleDocumentGroupControls(documentsFormGroup, documentStep === "skip");
  }
  _toggleLivenessControls(livenessStep) {
    const livenessFormGroup = this.form.get("projectFlow.liveness");
    if (!livenessFormGroup)
      return;
    this._toggleLivenessGroupControls(livenessFormGroup, livenessStep === "skip");
  }
  _toggleDocumentGroupControls(formGroup, shouldDisable) {
    const map = {
      attemptLimit: [Validators.required, Validators.min(1), Validators.max(5)],
      documentTypes: [SetupFormFactory.validators.documentVerificationTypes()],
      screening: [],
      verificationMethods: [Validators.required]
    };
    Object.keys(map).forEach((key) => {
      const control = formGroup.get(key);
      if (!control)
        return;
      if (shouldDisable) {
        control.clearValidators();
        control.updateValueAndValidity();
        control.disable();
      } else {
        control.enable();
        control.setValidators(map[key]);
        control.updateValueAndValidity();
      }
    });
    if (shouldDisable) {
      formGroup.clearValidators();
      formGroup.updateValueAndValidity();
      formGroup.disable();
    } else {
      formGroup.enable();
      formGroup.setValidators([SetupFormFactory.validators.documentsScreening()]);
      formGroup.updateValueAndValidity();
    }
  }
  _toggleIntegrationsControls(source) {
    if (!source)
      return;
    const strategyControl = this.form.get("projectFlow.integrations.strategy");
    const apiTestTypeControl = this.form.get("projectFlow.integrations.apiTestType");
    const apiTestValueControl = this.form.get("projectFlow.integrations.apiTestValue");
    const apiUrlControl = this.form.get("projectFlow.integrations.apiUrl");
    if (source !== "NONE") {
      strategyControl?.setValue("blacklist");
      if (source === "API") {
        apiTestTypeControl?.setValidators([Validators.required]);
        apiTestValueControl?.setValidators([Validators.required]);
        apiUrlControl?.setValidators([Validators.required, Validators.pattern(STRICT_URL_PATTERN)]);
      } else {
        apiTestTypeControl?.clearValidators();
        apiTestValueControl?.clearValidators();
        apiUrlControl?.clearValidators();
      }
    } else {
      strategyControl?.setValue("none");
      apiTestTypeControl?.clearValidators();
      apiTestValueControl?.clearValidators();
      apiUrlControl?.clearValidators();
    }
    apiUrlControl?.updateValueAndValidity();
    apiTestValueControl?.updateValueAndValidity();
    apiTestTypeControl?.updateValueAndValidity();
    strategyControl?.updateValueAndValidity();
  }
  _toggleLegalRepresentativeControls(value) {
    const representativesGroup = this.form.get("projectFlow.representatives");
    if (!representativesGroup)
      return;
    const map = {
      documents: [SetupFormFactory.validators.documentsScreening()],
      information: [],
      liveness: [],
      "documents.attemptLimit": [Validators.required],
      "documents.documentTypes": [SetupFormFactory.validators.documentVerificationTypes()],
      "documents.screening": [],
      "documents.verificationMethods": [Validators.required],
      "information.additionalFields": [],
      "information.allowAdditionalFields": [SetupFormFactory.validators.additionalFields()],
      "information.email": [],
      "information.emailGateway": [],
      "information.fullName": [Validators.required],
      "information.fullNameStyle": [Validators.required],
      "information.phone": [],
      "information.phoneGateway": [],
      "information.showPrivacyNotice": [],
      "information.showTermsAndConditions": [],
      "liveness.attemptLimit": [Validators.required],
      "liveness.minScore": [Validators.required, Validators.min(0.52), Validators.max(0.9)],
      "liveness.compareMinScore": [Validators.required, Validators.min(0.7), Validators.max(0.95)],
      "liveness.searchMinScore": [Validators.required, Validators.min(0.81), Validators.max(0.95)],
      "liveness.searchMode": [Validators.required]
    };
    Object.keys(map).forEach((key) => {
      const control = representativesGroup.get(key);
      if (!control)
        return;
      if (value === "skip") {
        control.clearValidators();
        control.updateValueAndValidity();
        control.disable();
      } else {
        control.enable();
        control.setValidators(map[key]);
        control.updateValueAndValidity();
      }
    });
    if (value === "skip") {
      representativesGroup.updateValueAndValidity();
      representativesGroup.disable();
    } else {
      representativesGroup.enable();
      representativesGroup.updateValueAndValidity();
    }
  }
  _toggleLivenessGroupControls(livenessGroup, shouldDisable) {
    const map = {
      attemptLimit: [Validators.required],
      minScore: [Validators.required, Validators.min(0.52), Validators.max(0.9)],
      compareMinScore: [Validators.required, Validators.min(0.7), Validators.max(0.95)],
      searchMinScore: [Validators.required, Validators.min(0.81), Validators.max(0.95)],
      searchMode: [Validators.required]
    };
    Object.keys(map).forEach((key) => {
      const control = livenessGroup.get(key);
      if (!control)
        return;
      if (shouldDisable) {
        control.clearValidators();
        control.updateValueAndValidity();
        control.disable();
      } else {
        control.enable();
        control.setValidators(map[key]);
        control.updateValueAndValidity();
      }
    });
    const kycTypeControl = livenessGroup.get("kycType");
    kycTypeControl?.enable({ emitEvent: false });
    if (shouldDisable) {
      livenessGroup.clearValidators();
      livenessGroup.updateValueAndValidity();
      livenessGroup.disable();
    } else {
      livenessGroup.enable();
      livenessGroup.setValidators([Validators.required]);
      livenessGroup.updateValueAndValidity();
    }
  }
  _triggerFormValidation() {
    this.form.updateValueAndValidity({ emitEvent: false });
    this.form.get("projectFlow.signUpForm.allowAdditionalFields")?.updateValueAndValidity({ emitEvent: false });
    this.form.get("projectFlow.signUpForm.additionalFields")?.updateValueAndValidity({ emitEvent: false });
    this.form.get("projectFlow.representatives.information.allowAdditionalFields")?.updateValueAndValidity({ emitEvent: false });
    this.form.get("projectFlow.representatives.information.additionalFields")?.updateValueAndValidity({ emitEvent: false });
    const documentsArray = this.form.get("projectFlow.documents.documentTypes");
    const businessArray = this.form.get("projectFlow.business.documentTypes");
    const representativesArray = this.form.get("projectFlow.representatives.documents.documentTypes");
    if (documentsArray)
      this._factory.updateValidatorsForActiveState(documentsArray);
    if (businessArray)
      this._factory.updateValidatorsForActiveState(businessArray);
    if (representativesArray)
      this._factory.updateValidatorsForActiveState(representativesArray);
  }
  _updateFormValidationKeys(target) {
    if (target === "business")
      this.formKeys = this._setup.businessTargetFormKeys;
    else if (target === "personal")
      this.formKeys = this._setup.personalTargetFormKeys;
    else
      this.formKeys = this._setup.defaultFormKeys;
  }
  confirmNavigation() {
    return this._confirm.open({
      title: this._t("smartEnrollProjects.setup.unsaved_changes"),
      message: this._t("smartEnrollProjects.setup.unsaved_changes_message"),
      actions: {
        confirm: { show: true, label: this._t("smartEnrollProjects.setup.exit_without_saving") },
        cancel: { show: true, label: this._t("cancel") }
      }
    });
  }
  nextStep() {
    if (!this.isFormValidForStep(this.stepIndex))
      return;
    if (this.stepIndex === 2) {
      const target = this.form.get("target")?.value;
      const documentStepValue = target === "business" ? this.form.get("projectFlow.steps.businessVerification")?.value : this.form.get("projectFlow.steps.document")?.value;
      const isDocumentSkipped = target === "business" ? !documentStepValue : documentStepValue === "skip";
      if (isDocumentSkipped) {
        this._showDocumentVerificationConfirmationBeforeNext();
        return;
      }
    }
    const isLast = this.stepIndex === this.steps.length - 1;
    if (isLast) {
      this._router.navigate(["/smart-enroll/projects", this.projectId]);
    } else {
      this._router.navigate(["/smart-enroll/projects", this.projectId, "setup", this.stepIndex + 1]);
    }
  }
  previousStep() {
    if (this.stepIndex === 0) {
      this.returnToProjects();
      return;
    }
    this._router.navigate(["/smart-enroll/projects", this.projectId, "setup", this.stepIndex - 1]);
  }
  saveProject() {
    if (this.saving() || !this.isFormValidForStep(this.stepIndex))
      return of();
    this.saving.set(true);
    const formValue = this.form.getRawValue ? this.form.getRawValue() : this.form.value;
    const preparedData = __spreadProps(__spreadValues({}, this._prepareProjectFlowData(formValue)), {
      projectFlowType: "onboarding"
    });
    const observable = this.project?._id ? this._setup.updateProject(this.project._id, preparedData) : this._setup.createProject(preparedData);
    return observable.pipe(catchError((err) => throwError(() => err)));
  }
  previewProject() {
    if (this.projectId === "new")
      return;
    if (!Object.keys(this.formKeys).every((idx) => this.isFormValidForStep(Number(idx)))) {
      this._snack.open(this._t("smartEnrollProjects.setup.setup_invalid"), this._t("close"), { duration: 3e3 });
      return;
    }
    const origin = window.location.origin;
    const baseUrl = environment.production && environment.kycBaseUrl ? environment.kycBaseUrl : environment.sandBoxKYCBaseUrl || environment.kycBaseUrl || `${origin}`;
    const url = `${baseUrl}/sign-up/${this.projectId}`;
    window.open(url, "_blank");
  }
  returnToProjects() {
    this._router.navigate(["/smart-enroll/projects"]);
  }
  updateProjectId(newProjectId) {
    this.projectId = newProjectId;
    if (this.project)
      this.project._id = newProjectId;
    this._setup.projectId = newProjectId;
  }
  closePreview() {
    this.isPreviewExpanded = false;
  }
  togglePreview() {
    this.isPreviewExpanded = !this.isPreviewExpanded;
  }
  /** Allow the host template to read the current target without poking the form group. */
  get currentTarget() {
    return this.form?.get("target")?.value || "personal";
  }
  /** FormGroup for the sign-up form step (mirrors the sub-tree the child expects). */
  signUpFormGroup() {
    return this.form.get("projectFlow.signUpForm");
  }
  /** FormGroup for the documents step (personal target → documents, business → business). */
  documentsFormGroup() {
    const path = this.currentTarget === "business" ? "projectFlow.business" : "projectFlow.documents";
    return this.form.get(path);
  }
  /** Step control name passed to the documents step. */
  documentsStepFormControlName() {
    return this.currentTarget === "business" ? "businessVerification" : "document";
  }
  /** FormGroup for the liveness step (only used by personal target on step 3). */
  livenessFormGroup() {
    return this.form.get("projectFlow.liveness");
  }
  _showDocumentVerificationConfirmationBeforeNext() {
    const dialogRef = this._confirm.open({
      title: this._t("smartEnrollProjects.setup.documents.confirm_skip_title"),
      message: this._t("smartEnrollProjects.setup.documents.confirm_skip_message"),
      actions: {
        confirm: {
          show: true,
          label: this._t("smartEnrollProjects.setup.documents.confirm_skip_yes"),
          color: "warn"
        },
        cancel: { show: true, label: this._t("smartEnrollProjects.setup.documents.confirm_skip_back") }
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "confirmed") {
        const isLast = this.stepIndex === this.steps.length - 1;
        if (isLast) {
          this._router.navigate(["/smart-enroll/projects", this.projectId]);
        } else {
          this._router.navigate(["/smart-enroll/projects", this.projectId, "setup", this.stepIndex + 1]);
        }
      }
    });
  }
  _t(key, params) {
    return this._transloco.translate(key, params) ?? key;
  }
  static {
    this.\u0275fac = function SetupHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupHostComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupHostComponent, selectors: [["setup-host"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-5xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300", 3, "routerLink"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", 3, "disabled"], [3, "form", "isStepValid", "loading", "saving"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-5xl"], [1, "flex", "flex-1", "items-center", "justify-center", "py-20"], [1, "flex", "flex-col", "gap-6"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click", "disabled"], [1, "mr-1"], [1, "!h-4", "!w-4"], ["diameter", "40"], [3, "form", "loading", "saving"], [3, "form", "formGroup", "formType", "loading", "saving"], [3, "form", "formGroup", "stepFormControlName", "loading", "saving"], [3, "titleKey", "form", "loading", "saving"], [1, "flex", "items-center", "justify-between", "gap-3"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click", "disabled"], [1, "mr-1", "!h-4", "!w-4"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "min-w-32", "rounded-xl", 3, "click", "disabled"], ["diameter", "18", 1, "mr-2", "inline-block"], [3, "form", "formGroup", "loading", "saving"]], template: function SetupHostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupHostComponent_ng_container_0_Template, 31, 12, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      NgControlStatusGroup,
      FormGroupDirective,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoDirective,
      SetupBreadcrumbsComponent,
      SetupStepStubComponent,
      SetupBasicSetupComponent,
      SetupSignUpFormComponent,
      SetupDocumentsComponent,
      SetupLivenessComponent,
      SetupRepresentativesComponent,
      SetupIntegrationsComponent,
      SetupUserInterfaceComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=setup-host.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupHostComponent, [{
    type: Component,
    args: [{ selector: "setup-host", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      TranslocoModule,
      SetupBreadcrumbsComponent,
      SetupStepStubComponent,
      SetupBasicSetupComponent,
      SetupSignUpFormComponent,
      SetupDocumentsComponent,
      SetupLivenessComponent,
      SetupRepresentativesComponent,
      SetupIntegrationsComponent,
      SetupUserInterfaceComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">
        <header
            class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"
        >
            <div class="mx-auto flex w-full max-w-5xl flex-col gap-5">
                <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">
                    <a routerLink="/chat" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">
                        Verifik
                    </a>
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>
                    <a
                        routerLink="/smart-enroll/projects"
                        class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"
                    >
                        {{ t('smartEnrollProjects.title') }}
                    </a>
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>
                    <a
                        [routerLink]="['/smart-enroll/projects', projectId]"
                        class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"
                    >
                        {{ project?.name || projectId }}
                    </a>
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>
                    <span class="cursor-default text-stone-600 dark:text-stone-300">{{ t('smartEnrollProjects.setup.title') }}</span>
                </div>

                <div class="flex flex-wrap items-start justify-between gap-3">
                    <div class="flex min-w-0 items-start gap-3">
                        <button
                            mat-icon-button
                            type="button"
                            (click)="returnToProjects()"
                            class="shrink-0 !text-stone-600 dark:!text-stone-300"
                            [attr.aria-label]="t('smartEnrollProjects.backToList')"
                        >
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <div class="min-w-0">
                            <h1 class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl">
                                {{ projectId === 'new' ? t('smartEnrollProjects.setup.new_project') : project?.name }}
                            </h1>
                            @if (projectId === 'new') {
                                <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">
                                    {{ t('smartEnrollProjects.setup.project_description') }}
                                </p>
                            }
                        </div>
                    </div>

                    @if (project?.projectFlows?.[0]?.status === 'active' && projectId !== 'new') {
                        <button
                            mat-flat-button
                            color="primary"
                            type="button"
                            class="shrink-0 rounded-xl"
                            [disabled]="!canNavigate"
                            (click)="previewProject()"
                        >
                            <span class="mr-1">{{ t('smartEnrollProjects.setup.see_live_project') }}</span>
                            <mat-icon class="!h-4 !w-4">open_in_new</mat-icon>
                        </button>
                    }
                </div>

                @if (form) {
                    <setup-breadcrumbs
                        [form]="form"
                        [isStepValid]="isFormValidForStep"
                        [loading]="loading()"
                        [saving]="saving()"
                    ></setup-breadcrumbs>
                }
            </div>
        </header>

        <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">
            <div class="mx-auto w-full max-w-5xl">
                @if (loading()) {
                    <div class="flex flex-1 items-center justify-center py-20">
                        <mat-spinner diameter="40"></mat-spinner>
                    </div>
                } @else if (form) {
                    <div class="flex flex-col gap-6">
                        @switch (stepIndex) {
                            @case (0) {
                                <setup-basic-setup
                                    [form]="form"
                                    [loading]="loading()"
                                    [saving]="saving()"
                                ></setup-basic-setup>
                            }
                            @case (1) {
                                <setup-sign-up-form
                                    [form]="form"
                                    [formGroup]="signUpFormGroup()"
                                    [formType]="currentTarget"
                                    [loading]="loading()"
                                    [saving]="saving()"
                                ></setup-sign-up-form>
                            }
                            @case (2) {
                                <setup-documents
                                    [form]="form"
                                    [formGroup]="documentsFormGroup()"
                                    [stepFormControlName]="documentsStepFormControlName()"
                                    [loading]="loading()"
                                    [saving]="saving()"
                                ></setup-documents>
                            }
                            @case (3) {
                                @if (currentTarget === 'business') {
                                    <setup-representatives
                                        [form]="form"
                                        [loading]="loading()"
                                        [saving]="saving()"
                                    ></setup-representatives>
                                } @else {
                                    <setup-liveness
                                        [form]="form"
                                        [formGroup]="livenessFormGroup()"
                                        [loading]="loading()"
                                        [saving]="saving()"
                                    ></setup-liveness>
                                }
                            }
                            @case (4) {
                                <setup-integrations
                                    [form]="form"
                                    [loading]="loading()"
                                    [saving]="saving()"
                                ></setup-integrations>
                            }
                            @case (5) {
                                <setup-user-interface
                                    [form]="form"
                                    [loading]="loading()"
                                    [saving]="saving()"
                                ></setup-user-interface>
                            }
                            @default {
                                <setup-step-stub
                                    [titleKey]="(steps[stepIndex] || 'smartEnrollProjects.setup.stub.title')"
                                    [form]="form"
                                    [loading]="loading()"
                                    [saving]="saving()"
                                ></setup-step-stub>
                            }
                        }

                        <div class="flex items-center justify-between gap-3">
                            <button
                                mat-stroked-button
                                type="button"
                                (click)="previousStep()"
                                [disabled]="!canNavigate"
                                class="rounded-xl"
                            >
                                <mat-icon class="mr-1 !h-4 !w-4">arrow_back</mat-icon>
                                {{ t('smartEnrollProjects.setup.go_back') }}
                            </button>
                            <button
                                mat-flat-button
                                color="primary"
                                type="button"
                                (click)="nextStep()"
                                [disabled]="!canNavigate || !isFormValidForStep(stepIndex)"
                                class="min-w-32 rounded-xl"
                            >
                                @if (saving()) {
                                    <mat-spinner diameter="18" class="mr-2 inline-block"></mat-spinner>
                                }
                                {{ t('smartEnrollProjects.setup.continue') }}
                            </button>
                        </div>
                    </div>
                }
            </div>
        </main>
    </div>
</ng-container>
`, styles: ["/* src/app/modules/smart-enroll/projects/setup/setup-host.component.scss */\n:host {\n  display: contents;\n}\n/*# sourceMappingURL=setup-host.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupHostComponent, { className: "SetupHostComponent", filePath: "src/app/modules/smart-enroll/projects/setup/setup-host.component.ts", lineNumber: 92 });
})();
export {
  SetupHostComponent
};
//# sourceMappingURL=chunk-FKGQVQRU.js.map
