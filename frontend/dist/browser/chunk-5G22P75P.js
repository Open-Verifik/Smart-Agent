import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-JU55ZZG4.js";
import {
  MatChipsModule
} from "./chunk-PDXRBC7A.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-LWBSNRLX.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-VSTHZNYV.js";
import {
  FuseConfirmationService
} from "./chunk-FVDU5B3D.js";
import "./chunk-6FS3LBOZ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-QRUO2OAL.js";
import {
  CountryService
} from "./chunk-VCSAO77O.js";
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-SRK7UTWX.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-FD5UKZMK.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule
} from "./chunk-P2CAABEU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-NLVEQCVI.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-NEU6JIQ7.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-4KMFYS6V.js";
import "./chunk-DZ5DWUCE.js";
import "./chunk-RVVUGFOS.js";
import "./chunk-MJXNRHWH.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-LTHY76JY.js";
import "./chunk-AY5C2ZOO.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-BY4NG7V4.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatSuffix
} from "./chunk-RNRTLQ3J.js";
import "./chunk-6OJR6OMX.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MaxLengthValidator,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-S7CME3IL.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-KU43NSH4.js";
import "./chunk-VK5CCBZ3.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WH2N6KB4.js";
import {
  environment
} from "./chunk-BIHX2IQ4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-HZQU4G6R.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DestroyRef,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  JsonPipe,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  Observable,
  Optional,
  Output,
  Self,
  Subject,
  ViewChild,
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-LLRZIRCV.js";
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
   */
  listPromptTemplates(query = {}) {
    return this._http.get(`${this.apiUrl}/v2/prompt-templates`, {
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

// src/app/modules/smart-enroll/projects/setup/preview/preview-sign-up/preview-sign-up.component.ts
function PreviewSignUpComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.branding.logo, \u0275\u0275sanitizeUrl);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 16);
    \u0275\u0275text(2, "LOGO");
    \u0275\u0275elementEnd()();
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18)(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.titleStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.create_an_account"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.are_you_registered"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.buttonStyle["background-color"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.sign_in_here"), " ");
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.titleStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.legal_representative_welcome"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.legal_representative_description"), " ");
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 26)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 26)(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.deviceType === "mobile" ? "w-full flex flex-col space-y-4" : "w-full inline-flex items-start space-x-2");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["firstName"].label));
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["lastName"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["fullName"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PreviewSignUpComponent_ng_container_0_Conditional_9_Conditional_0_Template, 7, 7, "div", 10)(1, PreviewSignUpComponent_ng_container_0_Conditional_9_Conditional_1_Template, 3, 3, "div", 9);
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 23);
    \u0275\u0275element(4, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r0.formGroup.get("fullNameStyle")) == null ? null : tmp_5_0.value) === "separate" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r0.formGroup.get("fullNameStyle")) == null ? null : tmp_6_0.value) === "together" ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smart_enroll.sign_up_form.name_hint_text"));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_10_Conditional_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 28)(2, "div", 27);
    \u0275\u0275text(3, "CC");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PreviewSignUpComponent_ng_container_0_Conditional_10_Conditional_3_ng_container_4_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26)(6, "div", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const iconCaretDown_r3 = \u0275\u0275reference(24);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.deviceType === "mobile" ? "w-full flex flex-col space-y-4" : "w-full inline-flex items-start space-x-2");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", iconCaretDown_r3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["businessIdNumber"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, PreviewSignUpComponent_ng_container_0_Conditional_10_Conditional_3_Template, 8, 7, "div", 10);
  }
  if (rf & 2) {
    let tmp_7_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["businessName"].label));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx_r0.formGroup.get("businessBasicInfoStyle")) == null ? null : tmp_7_0.value) === "name_number" ? 3 : -1);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["email"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_12_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 28)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PreviewSignUpComponent_ng_container_0_Conditional_12_ng_container_4_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26)(6, "div", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const iconCaretDown_r3 = \u0275\u0275reference(24);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.deviceType === "mobile" ? "w-full flex flex-col space-y-4" : "w-full inline-flex items-start space-x-2");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = ctx_r0.formGroup.get("countryCode")) == null ? null : tmp_7_0.value) || ctx_r0.defaultPhoneCountryCode, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", iconCaretDown_r3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["phone"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["gender"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["dateOfBirth"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["age"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, PreviewSignUpComponent_ng_container_0_Conditional_14_Conditional_1_Template, 3, 3, "div", 26)(2, PreviewSignUpComponent_ng_container_0_Conditional_14_Conditional_2_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("dateOfBirth") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("age") ? 2 : -1);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 30)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 30)(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 10)(8, "div", 26)(9, "div", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 26)(12, "div", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["addressLine1"].label));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["addressLine2"].label));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.deviceType === "mobile" ? "flex flex-col gap-4" : "flex flex-row gap-2");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["city"].label));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["state"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["postalCode"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_17_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PreviewSignUpComponent_ng_container_0_Conditional_17_ng_container_3_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const iconCaretDown_r3 = \u0275\u0275reference(24);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["country"].label));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", iconCaretDown_r3);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r0.buttonStyle["background-color"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.terms_and_conditions"), " ");
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smart_enroll.sign_up_form.and"));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r0.buttonStyle["background-color"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.privacy_policies"), " ");
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 31);
    \u0275\u0275template(2, PreviewSignUpComponent_ng_container_0_Conditional_18_ng_container_2_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementStart(3, "div", 32)(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_6_Template, 2, 3, "span", 34)(7, PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_7_Template, 2, 3, "span", 35)(8, PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_8_Template, 2, 3, "span", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const iconCheck_r4 = \u0275\u0275reference(22);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", iconCheck_r4);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smart_enroll.sign_up_form.i_accept"));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r0.formGroup.get("showTermsAndConditions")) == null ? null : tmp_8_0.value) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r0.formGroup.get("showPrivacyNotice")) == null ? null : tmp_9_0.value) && ((tmp_9_0 = ctx_r0.formGroup.get("showTermsAndConditions")) == null ? null : tmp_9_0.value) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r0.formGroup.get("showPrivacyNotice")) == null ? null : tmp_10_0.value) ? 8 : -1);
  }
}
function PreviewSignUpComponent_ng_container_0_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 40);
    \u0275\u0275element(1, "path", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", ctx_r0.buttonStyle["background-color"]);
  }
}
function PreviewSignUpComponent_ng_container_0_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "path", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", ctx_r0.buttonStyle["background-color"]);
  }
}
function PreviewSignUpComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275template(4, PreviewSignUpComponent_ng_container_0_Conditional_4_Template, 1, 1, "img", 6)(5, PreviewSignUpComponent_ng_container_0_Conditional_5_Template, 3, 0, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PreviewSignUpComponent_ng_container_0_Conditional_6_Template, 7, 9)(7, PreviewSignUpComponent_ng_container_0_Conditional_7_Template, 4, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275template(9, PreviewSignUpComponent_ng_container_0_Conditional_9_Template, 7, 5)(10, PreviewSignUpComponent_ng_container_0_Conditional_10_Template, 4, 4)(11, PreviewSignUpComponent_ng_container_0_Conditional_11_Template, 3, 3, "div", 9)(12, PreviewSignUpComponent_ng_container_0_Conditional_12_Template, 8, 8, "div", 10)(13, PreviewSignUpComponent_ng_container_0_Conditional_13_Template, 3, 3, "div", 9)(14, PreviewSignUpComponent_ng_container_0_Conditional_14_Template, 3, 2, "div", 11)(15, PreviewSignUpComponent_ng_container_0_Conditional_15_Template, 14, 13, "div", 12)(16, PreviewSignUpComponent_ng_container_0_Conditional_16_Template, 3, 3, "div", 9)(17, PreviewSignUpComponent_ng_container_0_Conditional_17_Template, 4, 4, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, PreviewSignUpComponent_ng_container_0_Conditional_18_Template, 9, 7, "div", 14);
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, PreviewSignUpComponent_ng_container_0_ng_template_21_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(23, PreviewSignUpComponent_ng_container_0_ng_template_23_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_16_0;
    const t_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.branding.backgroundColor || ctx_r0.defaultBranding.backgroundColor);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.branding.logo ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isLegalRepresentativePreview ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.formType === "personal" && ((tmp_7_0 = ctx_r0.formGroup.get("fullName")) == null ? null : tmp_7_0.value) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formType === "business" && ((tmp_8_0 = ctx_r0.formGroup.get("businessBasicInfo")) == null ? null : tmp_8_0.value) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r0.formGroup.get("email")) == null ? null : tmp_9_0.value) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r0.formGroup.get("phone")) == null ? null : tmp_10_0.value) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("gender") ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("dateOfBirth") || ctx_r0.hasAdditionalField("age") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showAddress ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("postalCode") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("country") ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = ctx_r0.formGroup.get("showTermsAndConditions")) == null ? null : tmp_16_0.value) || ((tmp_16_0 = ctx_r0.formGroup.get("showPrivacyNotice")) == null ? null : tmp_16_0.value) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.buttonStyle);
    \u0275\u0275property("ngClass", ctx_r0.deviceType === "mobile" ? "w-full h-12 rounded-xl" : "w-full h-14 rounded-2xl");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.continue"), " ");
  }
}
var PreviewSignUpComponent = class _PreviewSignUpComponent {
  constructor() {
    this.formType = "personal";
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultPhoneCountryCode = DEFAULT_PHONE_COUNTRY_CODE;
    this.defaultBranding = this._setup.defaultBranding;
    this.previewFields = {
      addressLine1: { label: "smart_enroll.sign_up_form.address_line_1" },
      addressLine2: { label: "smart_enroll.sign_up_form.address_line_2" },
      age: { label: "smart_enroll.sign_up_form.age" },
      businessIdNumber: { label: "smart_enroll.sign_up_form.business_id_number" },
      businessName: { label: "smart_enroll.sign_up_form.business_name" },
      city: { label: "smart_enroll.sign_up_form.city" },
      country: { label: "smart_enroll.sign_up_form.country" },
      dateOfBirth: { label: "smart_enroll.sign_up_form.date_of_birth" },
      email: { label: "smart_enroll.sign_up_form.email" },
      firstName: { label: "smart_enroll.sign_up_form.first_name" },
      fullName: { label: "smart_enroll.sign_up_form.full_name" },
      gender: { label: "smart_enroll.sign_up_form.gender" },
      lastName: { label: "smart_enroll.sign_up_form.last_name" },
      phone: { label: "smart_enroll.sign_up_form.phone_number" },
      postalCode: { label: "smart_enroll.sign_up_form.postal_code" },
      state: { label: "smart_enroll.sign_up_form.state" }
    };
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"]) {
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
    }
  }
  get isLegalRepresentativePreview() {
    return this.formType === "personal" && this.form?.get("target")?.value === "business";
  }
  get buttonStyle() {
    return {
      "background-color": this.branding.buttonColor || this.defaultBranding.buttonColor,
      color: this.branding.buttonTextColor || this.defaultBranding.buttonTextColor
    };
  }
  get textStyle() {
    return { color: this.branding.textColor || this.defaultBranding.textColor };
  }
  get titleStyle() {
    return { color: this.branding.titleColor || this.defaultBranding.titleColor };
  }
  get placeholderColor() {
    return this.branding.textColor || "#94a3b8";
  }
  get showAddress() {
    if (!this.formGroup)
      return false;
    if (this.formType === "personal") {
      return !!this.formGroup.get("allowAdditionalFields")?.value && this.formGroup.get("additionalFields")?.value?.includes("address") === true;
    }
    return !!this.formGroup.get("address")?.value;
  }
  additionalFields() {
    return this.formGroup?.get("additionalFields")?.value || [];
  }
  hasAdditionalField(name) {
    return !!this.formGroup?.get("allowAdditionalFields")?.value && this.additionalFields().includes(name);
  }
  static {
    this.\u0275fac = function PreviewSignUpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewSignUpComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewSignUpComponent, selectors: [["preview-sign-up"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", formType: "formType", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [["iconCheck", ""], ["iconCaretDown", ""], [4, "transloco"], [1, "m-auto", "w-full", "max-w-128", "space-y-8"], [1, "w-full", "flex", "flex-col", "items-center", "space-y-4"], [1, "flex", "items-center", "justify-center"], ["alt", "Logo", 1, "max-w-16", "max-h-16", "object-contain", 3, "src"], [1, "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-400"], [1, "w-full", "flex", "flex-col", "items-start", "space-y-4"], [1, "w-full", "h-14", "p-4", "bg-white", "rounded-md", "border", "border-stone-300", "flex", "items-center"], [3, "ngClass"], [1, "w-full", "inline-flex", "items-start", "space-x-2"], [1, "w-full", "flex", "flex-col", "gap-4"], [1, "w-full", "h-14", "p-4", "bg-white", "rounded-md", "border", "border-stone-300", "flex", "justify-between", "items-center"], [1, "w-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["type", "button", 1, "flex", "items-center", "justify-center", "text-base", "font-medium", 3, "ngClass"], [1, "text-xs", "font-semibold"], [1, "text-3xl", "font-semibold", "leading-10"], [1, "inline-flex", "items-start", "gap-2"], [1, "text-base", "font-medium", "leading-tight"], [1, "text-base", "font-medium", "leading-tight", "underline"], [1, "text-base", "font-medium", "leading-tight", "text-center"], [1, "self-stretch", "p-3", "bg-stone-100", "rounded-2xl", "flex", "items-center", "justify-center", "gap-2"], ["width", "20", "height", "20", "viewBox", "0 0 24 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11 7.5H13V9.5H11V7.5ZM11 11.5H13V17.5H11V11.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5Z", "fill", "#58647D"], [1, "flex-1", "text-sm", "font-medium"], [1, "flex-1", "h-14", "p-4", "bg-white", "rounded-md", "border", "border-stone-300", "flex", "items-center"], [1, "text-base", "font-medium"], [1, "h-14", "p-4", "bg-white", "rounded-md", "border", "border-stone-300", "flex", "items-center", "gap-3", "min-w-[6rem]"], [4, "ngTemplateOutlet"], [1, "h-14", "p-4", "bg-white", "rounded-md", "border", "border-stone-300", "flex", "items-center"], [1, "inline-flex", "items-center", "space-x-2"], [1, "text-base"], [1, "font-semibold"], [1, "font-semibold", "underline", "ml-1", 3, "color"], [1, "font-semibold", "mx-1", 3, "style"], [1, "font-semibold", "underline", 3, "color"], [1, "font-semibold", "underline", "ml-1"], [1, "font-semibold", "mx-1"], [1, "font-semibold", "underline"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.5837 5.99969L7.99706 8.58635L5.41039 5.99969C5.15039 5.73969 4.73039 5.73969 4.47039 5.99969C4.21039 6.25969 4.21039 6.67969 4.47039 6.93969L7.53039 9.99969C7.79039 10.2597 8.21039 10.2597 8.47039 9.99969L11.5304 6.93969C11.7904 6.67969 11.7904 6.25969 11.5304 5.99969C11.2704 5.74635 10.8437 5.73969 10.5837 5.99969Z"]], template: function PreviewSignUpComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewSignUpComponent_ng_container_0_Template, 25, 18, "ng-container", 2);
      }
    }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewSignUpComponent, [{
    type: Component,
    args: [{ selector: "preview-sign-up", standalone: true, imports: [CommonModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div
        class="m-auto w-full max-w-128 space-y-8"
        [style.background-color]="branding.backgroundColor || defaultBranding.backgroundColor"
    >
        <!-- Header -->
        <div class="w-full flex flex-col items-center space-y-4">
            <div class="flex items-center justify-center">
                @if (branding.logo) {
                    <img class="max-w-16 max-h-16 object-contain" [src]="branding.logo" alt="Logo" />
                } @else {
                    <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-stone-100 text-stone-400">
                        <span class="text-xs font-semibold">LOGO</span>
                    </div>
                }
            </div>

            @if (!isLegalRepresentativePreview) {
                <div class="text-3xl font-semibold leading-10" [style]="titleStyle">
                    {{ t('smart_enroll.sign_up_form.create_an_account') }}
                </div>
                <div class="inline-flex items-start gap-2">
                    <div class="text-base font-medium leading-tight" [style]="textStyle">
                        {{ t('smart_enroll.sign_up_form.are_you_registered') }}
                    </div>
                    <div class="text-base font-medium leading-tight underline" [style.color]="buttonStyle['background-color']">
                        {{ t('smart_enroll.sign_up_form.sign_in_here') }}
                    </div>
                </div>
            } @else {
                <div class="text-3xl font-semibold leading-10" [style]="titleStyle">
                    {{ t('smart_enroll.sign_up_form.legal_representative_welcome') }}
                </div>
                <div class="text-base font-medium leading-tight text-center" [style]="textStyle">
                    {{ t('smart_enroll.sign_up_form.legal_representative_description') }}
                </div>
            }
        </div>

        <!-- Form -->
        <div class="w-full flex flex-col items-start space-y-4">
            <!-- Personal: Full name (separate / together) -->
            @if (formType === 'personal' && formGroup.get('fullName')?.value) {
                @if (formGroup.get('fullNameStyle')?.value === 'separate') {
                    <div [ngClass]="deviceType === 'mobile' ? 'w-full flex flex-col space-y-4' : 'w-full inline-flex items-start space-x-2'">
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                            <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['firstName'].label) }}</div>
                        </div>
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                            <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['lastName'].label) }}</div>
                        </div>
                    </div>
                }
                @if (formGroup.get('fullNameStyle')?.value === 'together') {
                    <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                        <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['fullName'].label) }}</div>
                    </div>
                }

                <div class="self-stretch p-3 bg-stone-100 rounded-2xl flex items-center justify-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 7.5H13V9.5H11V7.5ZM11 11.5H13V17.5H11V11.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5Z" fill="#58647D"/>
                    </svg>
                    <div class="flex-1 text-sm font-medium" [style]="textStyle">{{ t('smart_enroll.sign_up_form.name_hint_text') }}</div>
                </div>
            }

            <!-- Business basic info -->
            @if (formType === 'business' && formGroup.get('businessBasicInfo')?.value) {
                <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                    <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['businessName'].label) }}</div>
                </div>
                @if (formGroup.get('businessBasicInfoStyle')?.value === 'name_number') {
                    <div [ngClass]="deviceType === 'mobile' ? 'w-full flex flex-col space-y-4' : 'w-full inline-flex items-start space-x-2'">
                        <div class="h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center gap-3 min-w-[6rem]">
                            <div class="text-base font-medium" [style]="textStyle">CC</div>
                            <ng-container *ngTemplateOutlet="iconCaretDown"></ng-container>
                        </div>
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                            <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['businessIdNumber'].label) }}</div>
                        </div>
                    </div>
                }
            }

            <!-- Email -->
            @if (formGroup.get('email')?.value) {
                <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                    <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['email'].label) }}</div>
                </div>
            }

            <!-- Phone -->
            @if (formGroup.get('phone')?.value) {
                <div [ngClass]="deviceType === 'mobile' ? 'w-full flex flex-col space-y-4' : 'w-full inline-flex items-start space-x-2'">
                    <div class="h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center gap-3 min-w-[6rem]">
                        <div class="text-base font-medium" [style]="textStyle">
                            {{ formGroup.get('countryCode')?.value || defaultPhoneCountryCode }}
                        </div>
                        <ng-container *ngTemplateOutlet="iconCaretDown"></ng-container>
                    </div>
                    <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                        <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['phone'].label) }}</div>
                    </div>
                </div>
            }

            <!-- Gender -->
            @if (hasAdditionalField('gender')) {
                <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                    <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['gender'].label) }}</div>
                </div>
            }

            <!-- Date of birth and/or age -->
            @if (hasAdditionalField('dateOfBirth') || hasAdditionalField('age')) {
                <div class="w-full inline-flex items-start space-x-2">
                    @if (hasAdditionalField('dateOfBirth')) {
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                            <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['dateOfBirth'].label) }}</div>
                        </div>
                    }
                    @if (hasAdditionalField('age')) {
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                            <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['age'].label) }}</div>
                        </div>
                    }
                </div>
            }

            <!-- Address -->
            @if (showAddress) {
                <div class="w-full flex flex-col gap-4">
                    <div class="h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                        <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['addressLine1'].label) }}</div>
                    </div>
                    <div class="h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                        <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['addressLine2'].label) }}</div>
                    </div>
                    <div [ngClass]="deviceType === 'mobile' ? 'flex flex-col gap-4' : 'flex flex-row gap-2'">
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                            <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['city'].label) }}</div>
                        </div>
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                            <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['state'].label) }}</div>
                        </div>
                    </div>
                </div>
            }

            <!-- Postal code -->
            @if (hasAdditionalField('postalCode')) {
                <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">
                    <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['postalCode'].label) }}</div>
                </div>
            }

            <!-- Country -->
            @if (hasAdditionalField('country')) {
                <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex justify-between items-center">
                    <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['country'].label) }}</div>
                    <ng-container *ngTemplateOutlet="iconCaretDown"></ng-container>
                </div>
            }
        </div>

        <!-- Terms / Privacy -->
        @if (formGroup.get('showTermsAndConditions')?.value || formGroup.get('showPrivacyNotice')?.value) {
            <div class="w-full flex flex-col items-center justify-center space-y-2">
                <div class="inline-flex items-center space-x-2">
                    <ng-container *ngTemplateOutlet="iconCheck"></ng-container>
                    <div class="text-base">
                        <span class="font-semibold" [style]="textStyle">{{ t('smart_enroll.sign_up_form.i_accept') }}</span>
                        @if (formGroup.get('showTermsAndConditions')?.value) {
                            <span class="font-semibold underline ml-1" [style.color]="buttonStyle['background-color']">
                                {{ t('smart_enroll.sign_up_form.terms_and_conditions') }}
                            </span>
                        }
                        @if (formGroup.get('showPrivacyNotice')?.value && formGroup.get('showTermsAndConditions')?.value) {
                            <span class="font-semibold mx-1" [style]="textStyle">{{ t('smart_enroll.sign_up_form.and') }}</span>
                        }
                        @if (formGroup.get('showPrivacyNotice')?.value) {
                            <span class="font-semibold underline" [style.color]="buttonStyle['background-color']">
                                {{ t('smart_enroll.sign_up_form.privacy_policies') }}
                            </span>
                        }
                    </div>
                </div>
            </div>
        }

        <!-- Continue button -->
        <button
            type="button"
            [style]="buttonStyle"
            [ngClass]="deviceType === 'mobile' ? 'w-full h-12 rounded-xl' : 'w-full h-14 rounded-2xl'"
            class="flex items-center justify-center text-base font-medium"
        >
            {{ t('smart_enroll.continue') }}
        </button>
    </div>

    <ng-template #iconCheck>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                [attr.fill]="buttonStyle['background-color']"/>
        </svg>
    </ng-template>

    <ng-template #iconCaretDown>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5837 5.99969L7.99706 8.58635L5.41039 5.99969C5.15039 5.73969 4.73039 5.73969 4.47039 5.99969C4.21039 6.25969 4.21039 6.67969 4.47039 6.93969L7.53039 9.99969C7.79039 10.2597 8.21039 10.2597 8.47039 9.99969L11.5304 6.93969C11.7904 6.67969 11.7904 6.25969 11.5304 5.99969C11.2704 5.74635 10.8437 5.73969 10.5837 5.99969Z"
                [attr.fill]="buttonStyle['background-color']"/>
        </svg>
    </ng-template>
</ng-container>
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], formType: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewSignUpComponent, { className: "PreviewSignUpComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-sign-up/preview-sign-up.component.ts", lineNumber: 33 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/preview-document-scan/preview-document-scan.component.ts
function PreviewDocumentScanComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275element(7, "img", 4)(8, "img", 5);
    \u0275\u0275elementStart(9, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 7)(11, "g", 8)(12, "mask", 9);
    \u0275\u0275element(13, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "path", 11)(15, "path", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(16, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 14);
    \u0275\u0275element(19, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.branding.titleColor || ctx_r1.defaultBranding.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.documents.preview.scan_document"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.documents.preview.follow_the_instructions"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cameraClasses() + " relative rounded-3xl overflow-hidden");
    \u0275\u0275advance(11);
    \u0275\u0275classMap((ctx_r1.deviceType === "mobile" ? "w-full" : "w-96") + " p-3 bg-white rounded-2xl border border-stone-300 flex items-start gap-3");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.documents.preview.frame_hint_text"), " ");
  }
}
var PreviewDocumentScanComponent = class _PreviewDocumentScanComponent {
  constructor() {
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultBranding = this._setup.defaultBranding;
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"])
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  cameraClasses() {
    return this.deviceType === "mobile" ? "w-full h-48" : "w-96 h-64";
  }
  static {
    this.\u0275fac = function PreviewDocumentScanComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewDocumentScanComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewDocumentScanComponent, selectors: [["preview-document-scan"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "w-full", "flex", "flex-col", "items-center", "gap-6"], [1, "text-center", "text-3xl", "font-semibold", "leading-10"], [1, "text-center", "text-sm", "font-medium"], ["src", "images/ui/placeholders/blurry-street.jpg", "alt", "", 1, "w-full", "h-full", "absolute", "inset-0", "rounded-3xl", "object-cover"], ["src", "images/ui/placeholders/drivers-license.png", "alt", "", 1, "w-64", "h-56", "absolute", "top-1/2", "left-1/2", "transform", "-translate-x-1/2", "-translate-y-1/2", "rounded-xl", "object-contain"], [1, "absolute", "-left-96", "-top-32", "pointer-events-none"], ["width", "812", "height", "517", "viewBox", "0 0 812 517", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.85"], ["id", "path-1-inside-1_7948_63544", "fill", "white"], ["d", "M1365.5 747H-554.5V-225H1365.5V747ZM24.5 0C11.2452 0 0.5 10.7452 0.5 24V493C0.5 506.255 11.2452 517 24.5 517H787.5C800.755 517 811.5 506.255 811.5 493V24C811.5 10.7452 800.755 0 787.5 0H24.5Z"], ["d", "M1365.5 747H-554.5V-225H1365.5V747ZM24.5 0C11.2452 0 0.5 10.7452 0.5 24V493C0.5 506.255 11.2452 517 24.5 517H787.5C800.755 517 811.5 506.255 811.5 493V24C811.5 10.7452 800.755 0 787.5 0H24.5Z", "fill", "white"], ["d", "M1365.5 747V748H1366.5V747H1365.5ZM-554.5 747H-555.5V748H-554.5V747ZM-554.5 -225V-226H-555.5V-225H-554.5ZM1365.5 -225H1366.5V-226H1365.5V-225ZM24.5 0V-1V0ZM24.5 517V518V517ZM787.5 517V518V517ZM787.5 0V-1V0ZM1365.5 747V746H-554.5V747V748H1365.5V747ZM-554.5 747H-553.5V-225H-554.5H-555.5V747H-554.5ZM-554.5 -225V-224H1365.5V-225V-226H-554.5V-225ZM1365.5 -225H1364.5V747H1365.5H1366.5V-225H1365.5ZM24.5 0V-1C10.6929 -1 -0.5 10.1929 -0.5 24H0.5H1.5C1.5 11.2975 11.7974 1 24.5 1V0ZM0.5 24H-0.5V493H0.5H1.5V24H0.5ZM0.5 493H-0.5C-0.5 506.807 10.6929 518 24.5 518V517V516C11.7975 516 1.5 505.703 1.5 493H0.5ZM24.5 517V518H787.5V517V516H24.5V517ZM787.5 517V518C801.307 518 812.5 506.807 812.5 493H811.5H810.5C810.5 505.703 800.203 516 787.5 516V517ZM811.5 493H812.5V24H811.5H810.5V493H811.5ZM811.5 24H812.5C812.5 10.1929 801.307 -1 787.5 -1V0V1C800.203 1 810.5 11.2975 810.5 24H811.5ZM787.5 0V-1H24.5V0V1H787.5V0Z", "fill", "#C4C6D0", "mask", "url(#path-1-inside-1_7948_63544)"], [1, "w-full", "h-full", "absolute", "inset-0", "rounded-3xl", "border-4", "border-green-500", "pointer-events-none"], ["width", "20", "height", "20", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.0002 8.65398L26.0402 26.0007H5.96016L16.0002 8.65398ZM16.0002 3.33398L1.3335 28.6673H30.6668L16.0002 3.33398ZM17.3335 22.0007H14.6668V24.6673H17.3335V22.0007ZM17.3335 14.0007H14.6668V19.334H17.3335V14.0007Z", "fill", "#1E293B"], [1, "flex-1", "text-sm", "font-medium", "leading-tight"]], template: function PreviewDocumentScanComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewDocumentScanComponent_ng_container_0_Template, 22, 13, "ng-container", 0);
      }
    }, dependencies: [CommonModule, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewDocumentScanComponent, [{
    type: Component,
    args: [{ selector: "preview-document-scan", standalone: true, imports: [CommonModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="w-full flex flex-col items-center gap-6">
        <div class="text-center text-3xl font-semibold leading-10" [style.color]="branding.titleColor || defaultBranding.titleColor">
            {{ t('smart_enroll.documents.preview.scan_document') }}
        </div>
        <div class="text-center text-sm font-medium" [style.color]="branding.textColor || defaultBranding.textColor">
            {{ t('smart_enroll.documents.preview.follow_the_instructions') }}
        </div>

        <div [class]="cameraClasses() + ' relative rounded-3xl overflow-hidden'">
            <img
                src="images/ui/placeholders/blurry-street.jpg"
                alt=""
                class="w-full h-full absolute inset-0 rounded-3xl object-cover"
            />

            <img
                src="images/ui/placeholders/drivers-license.png"
                alt=""
                class="w-64 h-56 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl object-contain"
            />

            <div class="absolute -left-96 -top-32 pointer-events-none">
                <svg width="812" height="517" viewBox="0 0 812 517" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.85">
                        <mask id="path-1-inside-1_7948_63544" fill="white">
                            <path d="M1365.5 747H-554.5V-225H1365.5V747ZM24.5 0C11.2452 0 0.5 10.7452 0.5 24V493C0.5 506.255 11.2452 517 24.5 517H787.5C800.755 517 811.5 506.255 811.5 493V24C811.5 10.7452 800.755 0 787.5 0H24.5Z"/>
                        </mask>
                        <path
                            d="M1365.5 747H-554.5V-225H1365.5V747ZM24.5 0C11.2452 0 0.5 10.7452 0.5 24V493C0.5 506.255 11.2452 517 24.5 517H787.5C800.755 517 811.5 506.255 811.5 493V24C811.5 10.7452 800.755 0 787.5 0H24.5Z"
                            fill="white"
                        />
                        <path
                            d="M1365.5 747V748H1366.5V747H1365.5ZM-554.5 747H-555.5V748H-554.5V747ZM-554.5 -225V-226H-555.5V-225H-554.5ZM1365.5 -225H1366.5V-226H1365.5V-225ZM24.5 0V-1V0ZM24.5 517V518V517ZM787.5 517V518V517ZM787.5 0V-1V0ZM1365.5 747V746H-554.5V747V748H1365.5V747ZM-554.5 747H-553.5V-225H-554.5H-555.5V747H-554.5ZM-554.5 -225V-224H1365.5V-225V-226H-554.5V-225ZM1365.5 -225H1364.5V747H1365.5H1366.5V-225H1365.5ZM24.5 0V-1C10.6929 -1 -0.5 10.1929 -0.5 24H0.5H1.5C1.5 11.2975 11.7974 1 24.5 1V0ZM0.5 24H-0.5V493H0.5H1.5V24H0.5ZM0.5 493H-0.5C-0.5 506.807 10.6929 518 24.5 518V517V516C11.7975 516 1.5 505.703 1.5 493H0.5ZM24.5 517V518H787.5V517V516H24.5V517ZM787.5 517V518C801.307 518 812.5 506.807 812.5 493H811.5H810.5C810.5 505.703 800.203 516 787.5 516V517ZM811.5 493H812.5V24H811.5H810.5V493H811.5ZM811.5 24H812.5C812.5 10.1929 801.307 -1 787.5 -1V0V1C800.203 1 810.5 11.2975 810.5 24H811.5ZM787.5 0V-1H24.5V0V1H787.5V0Z"
                            fill="#C4C6D0"
                            mask="url(#path-1-inside-1_7948_63544)"
                        />
                    </g>
                </svg>
            </div>

            <div class="w-full h-full absolute inset-0 rounded-3xl border-4 border-green-500 pointer-events-none"></div>
        </div>

        <div [class]="(deviceType === 'mobile' ? 'w-full' : 'w-96') + ' p-3 bg-white rounded-2xl border border-stone-300 flex items-start gap-3'">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0002 8.65398L26.0402 26.0007H5.96016L16.0002 8.65398ZM16.0002 3.33398L1.3335 28.6673H30.6668L16.0002 3.33398ZM17.3335 22.0007H14.6668V24.6673H17.3335V22.0007ZM17.3335 14.0007H14.6668V19.334H17.3335V14.0007Z" fill="#1E293B"/>
            </svg>
            <div class="flex-1 text-sm font-medium leading-tight" [style.color]="branding.textColor || defaultBranding.textColor">
                {{ t('smart_enroll.documents.preview.frame_hint_text') }}
            </div>
        </div>
    </div>
</ng-container>
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewDocumentScanComponent, { className: "PreviewDocumentScanComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-document-scan/preview-document-scan.component.ts", lineNumber: 24 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/preview-document-upload/preview-document-upload.component.ts
function PreviewDocumentUploadComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.branding.logo, \u0275\u0275sanitizeUrl);
  }
}
function PreviewDocumentUploadComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function PreviewDocumentUploadComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275template(2, PreviewDocumentUploadComponent_ng_container_0_Conditional_2_Template, 1, 1, "img", 2)(3, PreviewDocumentUploadComponent_ng_container_0_Conditional_3_Template, 2, 0, ":svg:svg", 3);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 6);
    \u0275\u0275element(10, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275text(14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 10);
    \u0275\u0275element(16, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 10);
    \u0275\u0275element(19, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "div", 15);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 16);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.branding.logo ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.branding.titleColor || ctx_r0.defaultBranding.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.upload_document"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r0.deviceType === "mobile" ? "w-full" : "w-80") + " text-center text-sm font-medium");
    \u0275\u0275styleProp("color", ctx_r0.branding.textColor || ctx_r0.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.collect_images"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r0.branding.textColor || ctx_r0.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.drag_and_drop"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor)("color", ctx_r0.branding.buttonTextColor || ctx_r0.defaultBranding.buttonTextColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.search_file_in_my_device"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("fill", ctx_r0.branding.buttonTextColor || ctx_r0.defaultBranding.buttonTextColor);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r0.branding.textColor || ctx_r0.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.allow_formats"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r0.deviceType === "mobile" ? "w-full flex-col gap-3" : "w-full flex-row gap-4") + " flex");
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor)("color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.skip"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor)("color", ctx_r0.branding.buttonTextColor || ctx_r0.defaultBranding.buttonTextColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.continue"), " ");
  }
}
var PreviewDocumentUploadComponent = class _PreviewDocumentUploadComponent {
  constructor() {
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultBranding = this._setup.defaultBranding;
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"])
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  static {
    this.\u0275fac = function PreviewDocumentUploadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewDocumentUploadComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewDocumentUploadComponent, selectors: [["preview-document-upload"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "w-full", "flex", "flex-col", "items-center", "gap-6"], ["alt", "Logo", 1, "max-w-16", "max-h-16", "object-contain", 3, "src"], ["width", "64", "height", "58", "viewBox", "0 0 64 58", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], [1, "text-center", "text-3xl", "font-semibold", "leading-10"], [1, "w-full", "h-44", "rounded-2xl", "border-2", "border-dashed", "border-stone-300", "bg-stone-50", "flex", "flex-col", "items-center", "justify-center", "gap-2"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.3334 21.7275H18.6667C19.4001 21.7275 20.0001 21.1275 20.0001 20.3942V13.7275H22.1201C23.3067 13.7275 23.9067 12.2875 23.0667 11.4475L16.9467 5.3275C16.4267 4.8075 15.5867 4.8075 15.0667 5.3275L8.94675 11.4475C8.10675 12.2875 8.69341 13.7275 9.88008 13.7275H12.0001V20.3942C12.0001 21.1275 12.6001 21.7275 13.3334 21.7275ZM8.00008 24.3942H24.0001C24.7334 24.3942 25.3334 24.9942 25.3334 25.7275C25.3334 26.4608 24.7334 27.0608 24.0001 27.0608H8.00008C7.26675 27.0608 6.66675 26.4608 6.66675 25.7275C6.66675 24.9942 7.26675 24.3942 8.00008 24.3942Z", "fill", "#A0A9C0"], [1, "text-center", "text-base", "font-semibold"], ["type", "button", 1, "w-full", "h-12", "rounded-2xl", "flex", "items-center", "justify-center", "gap-2", "text-sm", "font-medium"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M19.41 7.41L14.58 2.58C14.21 2.21 13.7 2 13.17 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.41ZM14.8 15H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V15H9.21C8.76 15 8.54 14.46 8.86 14.15L11.66 11.36C11.86 11.17 12.17 11.17 12.37 11.36L15.16 14.15C15.46 14.46 15.24 15 14.8 15ZM14 9C13.45 9 13 8.55 13 8V3.5L18.5 9H14Z"], [1, "w-full", "flex", "justify-center", "items-center", "gap-3"], ["d", "M14.59 2.59C14.21 2.21 13.7 2 13.17 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.42L14.59 2.59ZM15 18H9C8.45 18 8 17.55 8 17C8 16.45 8.45 16 9 16H15C15.55 16 16 16.45 16 17C16 17.55 15.55 18 15 18ZM15 14H9C8.45 14 8 13.55 8 13C8 12.45 8.45 12 9 12H15C15.55 12 16 12.45 16 13C16 13.55 15.55 14 15 14ZM13 8V3.5L18.5 9H14C13.45 9 13 8.55 13 8Z", "fill", "#1E293B"], [1, "text-center", "text-xs", "font-medium"], [1, "flex-1", "h-12", "rounded-2xl", "border", "flex", "items-center", "justify-center", "text-sm", "font-medium"], [1, "flex-1", "h-12", "rounded-2xl", "flex", "items-center", "justify-center", "text-sm", "font-medium"], ["d", "M63.8545 2.89986C63.8545 2.89986 56.0607 -0.105614 49.6043 6.77961C44.4703 2.88972 37.9733 0.572266 31.028 0.572266C24.2109 0.572266 17.4968 2.93281 12.1353 7.13566C6.85901 11.2739 3.04339 17.1885 1.39215 23.6822C-1.00721 33.1105 0.948861 44.7637 8.67028 51.2688C16.3142 57.7092 26.5227 58.9041 34.8792 54.6075C40.0971 51.9251 43.5735 47.7666 45.9577 42.4513C49.0887 35.471 52.5855 27.429 55.7152 20.4487C58.2873 25.8527 58.3762 32.0069 57.2584 37.2842C56.142 42.5602 53.232 47.4422 49.1191 50.9419C48.5069 51.4626 47.854 51.9707 47.4565 52.6676C46.4619 54.406 48.3812 56.4587 50.0756 55.1371C50.8364 54.5441 51.6138 53.8688 52.339 53.1199C58.0726 47.574 61.7523 39.7917 61.7523 31.1947C61.7523 25.7818 60.2967 20.5133 57.8199 16.1052C61.21 8.65867 63.857 2.8986 63.857 2.8986M18.4075 42.5172C13.3306 42.8162 8.31463 40.021 5.94702 35.5331C4.87626 33.5045 4.33516 31.1959 4.44058 28.9025C4.687 23.5429 6.81963 18.3542 10.2123 14.2135C13.5097 10.1893 17.9921 7.16987 22.9598 5.60631C23.9518 5.29461 24.9629 5.03867 25.9854 4.84481C27.6518 4.52804 29.3475 4.37092 31.0445 4.37092C37.5313 4.37092 43.3779 6.60476 47.4412 9.88138C46.674 11.0091 45.9043 12.1355 45.1333 13.2619C43.3157 15.9177 41.4917 18.5696 39.6601 21.2153C37.5161 24.3107 35.3631 27.3998 33.1847 30.4712C30.196 34.6829 27.6239 39.6067 22.5775 41.6365C21.2705 42.1624 19.8123 42.4348 18.4087 42.5172H18.4075Z", "fill", "#010333"]], template: function PreviewDocumentUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewDocumentUploadComponent_ng_container_0_Template, 27, 33, "ng-container", 0);
      }
    }, dependencies: [CommonModule, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewDocumentUploadComponent, [{
    type: Component,
    args: [{ selector: "preview-document-upload", standalone: true, imports: [CommonModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="w-full flex flex-col items-center gap-6">
        @if (branding.logo) {
            <img class="max-w-16 max-h-16 object-contain" [src]="branding.logo" alt="Logo" />
        } @else {
            <svg width="64" height="58" viewBox="0 0 64 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.8545 2.89986C63.8545 2.89986 56.0607 -0.105614 49.6043 6.77961C44.4703 2.88972 37.9733 0.572266 31.028 0.572266C24.2109 0.572266 17.4968 2.93281 12.1353 7.13566C6.85901 11.2739 3.04339 17.1885 1.39215 23.6822C-1.00721 33.1105 0.948861 44.7637 8.67028 51.2688C16.3142 57.7092 26.5227 58.9041 34.8792 54.6075C40.0971 51.9251 43.5735 47.7666 45.9577 42.4513C49.0887 35.471 52.5855 27.429 55.7152 20.4487C58.2873 25.8527 58.3762 32.0069 57.2584 37.2842C56.142 42.5602 53.232 47.4422 49.1191 50.9419C48.5069 51.4626 47.854 51.9707 47.4565 52.6676C46.4619 54.406 48.3812 56.4587 50.0756 55.1371C50.8364 54.5441 51.6138 53.8688 52.339 53.1199C58.0726 47.574 61.7523 39.7917 61.7523 31.1947C61.7523 25.7818 60.2967 20.5133 57.8199 16.1052C61.21 8.65867 63.857 2.8986 63.857 2.8986M18.4075 42.5172C13.3306 42.8162 8.31463 40.021 5.94702 35.5331C4.87626 33.5045 4.33516 31.1959 4.44058 28.9025C4.687 23.5429 6.81963 18.3542 10.2123 14.2135C13.5097 10.1893 17.9921 7.16987 22.9598 5.60631C23.9518 5.29461 24.9629 5.03867 25.9854 4.84481C27.6518 4.52804 29.3475 4.37092 31.0445 4.37092C37.5313 4.37092 43.3779 6.60476 47.4412 9.88138C46.674 11.0091 45.9043 12.1355 45.1333 13.2619C43.3157 15.9177 41.4917 18.5696 39.6601 21.2153C37.5161 24.3107 35.3631 27.3998 33.1847 30.4712C30.196 34.6829 27.6239 39.6067 22.5775 41.6365C21.2705 42.1624 19.8123 42.4348 18.4087 42.5172H18.4075Z" fill="#010333"/>
            </svg>
        }

        <div class="text-center text-3xl font-semibold leading-10" [style.color]="branding.titleColor || defaultBranding.titleColor">
            {{ t('smart_enroll.documents.preview.upload_document') }}
        </div>

        <div [class]="(deviceType === 'mobile' ? 'w-full' : 'w-80') + ' text-center text-sm font-medium'" [style.color]="branding.textColor || defaultBranding.textColor">
            {{ t('smart_enroll.documents.preview.collect_images') }}
        </div>

        <div class="w-full h-44 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 flex flex-col items-center justify-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 21.7275H18.6667C19.4001 21.7275 20.0001 21.1275 20.0001 20.3942V13.7275H22.1201C23.3067 13.7275 23.9067 12.2875 23.0667 11.4475L16.9467 5.3275C16.4267 4.8075 15.5867 4.8075 15.0667 5.3275L8.94675 11.4475C8.10675 12.2875 8.69341 13.7275 9.88008 13.7275H12.0001V20.3942C12.0001 21.1275 12.6001 21.7275 13.3334 21.7275ZM8.00008 24.3942H24.0001C24.7334 24.3942 25.3334 24.9942 25.3334 25.7275C25.3334 26.4608 24.7334 27.0608 24.0001 27.0608H8.00008C7.26675 27.0608 6.66675 26.4608 6.66675 25.7275C6.66675 24.9942 7.26675 24.3942 8.00008 24.3942Z" fill="#A0A9C0"/>
            </svg>
            <div class="text-center text-base font-semibold" [style.color]="branding.textColor || defaultBranding.textColor">
                {{ t('smart_enroll.documents.preview.drag_and_drop') }}
            </div>
        </div>

        <button
            type="button"
            class="w-full h-12 rounded-2xl flex items-center justify-center gap-2 text-sm font-medium"
            [style.background-color]="branding.buttonColor || defaultBranding.buttonColor"
            [style.color]="branding.buttonTextColor || defaultBranding.buttonTextColor"
        >
            {{ t('smart_enroll.documents.preview.search_file_in_my_device') }}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.41 7.41L14.58 2.58C14.21 2.21 13.7 2 13.17 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.41ZM14.8 15H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V15H9.21C8.76 15 8.54 14.46 8.86 14.15L11.66 11.36C11.86 11.17 12.17 11.17 12.37 11.36L15.16 14.15C15.46 14.46 15.24 15 14.8 15ZM14 9C13.45 9 13 8.55 13 8V3.5L18.5 9H14Z" [attr.fill]="branding.buttonTextColor || defaultBranding.buttonTextColor"/>
            </svg>
        </button>

        <div class="w-full flex justify-center items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.59 2.59C14.21 2.21 13.7 2 13.17 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.42L14.59 2.59ZM15 18H9C8.45 18 8 17.55 8 17C8 16.45 8.45 16 9 16H15C15.55 16 16 16.45 16 17C16 17.55 15.55 18 15 18ZM15 14H9C8.45 14 8 13.55 8 13C8 12.45 8.45 12 9 12H15C15.55 12 16 12.45 16 13C16 13.55 15.55 14 15 14ZM13 8V3.5L18.5 9H14C13.45 9 13 8.55 13 8Z" fill="#1E293B"/>
            </svg>
            <div class="text-center text-xs font-medium" [style.color]="branding.textColor || defaultBranding.textColor">
                {{ t('smart_enroll.documents.preview.allow_formats') }}
            </div>
        </div>

        <div [class]="(deviceType === 'mobile' ? 'w-full flex-col gap-3' : 'w-full flex-row gap-4') + ' flex'">
            <div class="flex-1 h-12 rounded-2xl border flex items-center justify-center text-sm font-medium" [style.border-color]="branding.buttonColor || defaultBranding.buttonColor" [style.color]="branding.buttonColor || defaultBranding.buttonColor">
                {{ t('smart_enroll.documents.preview.skip') }}
            </div>
            <div class="flex-1 h-12 rounded-2xl flex items-center justify-center text-sm font-medium" [style.background-color]="branding.buttonColor || defaultBranding.buttonColor" [style.color]="branding.buttonTextColor || defaultBranding.buttonTextColor">
                {{ t('smart_enroll.documents.preview.continue') }}
            </div>
        </div>
    </div>
</ng-container>
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewDocumentUploadComponent, { className: "PreviewDocumentUploadComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-document-upload/preview-document-upload.component.ts", lineNumber: 24 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/preview-document-result/preview-document-result.component.ts
function PreviewDocumentResultComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.branding.logo, \u0275\u0275sanitizeUrl);
  }
}
function PreviewDocumentResultComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 5);
    \u0275\u0275text(1, "badge");
    \u0275\u0275elementEnd();
  }
}
function PreviewDocumentResultComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275template(4, PreviewDocumentResultComponent_ng_container_0_Conditional_4_Template, 1, 1, "img", 4)(5, PreviewDocumentResultComponent_ng_container_0_Conditional_5_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "h2", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "span", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 14);
    \u0275\u0275text(19, "Laura");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 12)(21, "span", 13);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24, "Walteros");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 12)(26, "span", 13);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 14);
    \u0275\u0275text(29, "15 ABR 2004");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 12)(31, "span", 13);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 14);
    \u0275\u0275text(34, "1234567890");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 15)(36, "span", 13);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 14);
    \u0275\u0275text(39, "16 AGO 2024");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 9)(41, "h2", 10);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 11)(44, "div", 12)(45, "span", 13);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 14);
    \u0275\u0275text(48, "HH:MM del DD/MM/AA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 12)(50, "span", 13);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 14);
    \u0275\u0275text(53, "Web");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 15)(55, "span", 13);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 14);
    \u0275\u0275text(58, "Samsung");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(59, "div", 16)(60, "button", 17);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 18);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.branding.logo ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.information_extracted"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.please_confirm_information"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.extracted_information"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.first_name"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.last_name"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.date_of_birth"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.id_number"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.date_of_issue"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.process_information"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.created_at"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.platform"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.device"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.go_back"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor)("color", ctx_r0.branding.buttonTextColor || ctx_r0.defaultBranding.buttonTextColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.continue"), " ");
  }
}
var PreviewDocumentResultComponent = class _PreviewDocumentResultComponent {
  constructor() {
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultBranding = this._setup.defaultBranding;
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"])
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  static {
    this.\u0275fac = function PreviewDocumentResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewDocumentResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewDocumentResultComponent, selectors: [["preview-document-result"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "w-full", "max-w-[440px]", "bg-white", "rounded-3xl", "shadow-xl", "border", "border-stone-100", "overflow-hidden", "mx-auto"], [1, "flex", "flex-col", "items-center", "pt-10", "pb-6", "px-8"], [1, "w-16", "h-16", "rounded-2xl", "overflow-hidden", "mb-4", "flex", "items-center", "justify-center"], ["alt", "Logo", 1, "w-full", "h-full", "object-contain", 3, "src"], [1, "!h-8", "!w-8", "text-white"], [1, "text-2xl", "font-bold", "text-stone-900", "text-center", "mb-2"], [1, "text-sm", "text-stone-500", "text-center", "max-w-sm"], [1, "px-8", "pb-6", "space-y-6"], [1, "space-y-3"], [1, "text-xs", "font-semibold", "text-stone-900", "uppercase", "tracking-wide"], [1, "space-y-1"], [1, "flex", "items-center", "justify-between", "py-2", "border-b", "border-stone-100"], [1, "text-sm", "text-stone-500", "font-medium"], [1, "text-sm", "text-stone-900", "font-semibold"], [1, "flex", "items-center", "justify-between", "py-2"], [1, "px-8", "pb-8", "flex", "gap-3"], [1, "flex-1", "h-12", "rounded-xl", "border-2", "border-stone-200", "text-stone-700", "font-medium", "text-sm"], [1, "flex-1", "h-12", "rounded-xl", "font-medium", "text-sm", "shadow-md"]], template: function PreviewDocumentResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewDocumentResultComponent_ng_container_0_Template, 64, 21, "ng-container", 0);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewDocumentResultComponent, [{
    type: Component,
    args: [{ selector: "preview-document-result", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="w-full max-w-[440px] bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden mx-auto">
        <div class="flex flex-col items-center pt-10 pb-6 px-8">
            <div class="w-16 h-16 rounded-2xl overflow-hidden mb-4 flex items-center justify-center" [style.background-color]="branding.buttonColor || defaultBranding.buttonColor">
                @if (branding.logo) {
                    <img class="w-full h-full object-contain" [src]="branding.logo" alt="Logo" />
                } @else {
                    <mat-icon class="!h-8 !w-8 text-white">badge</mat-icon>
                }
            </div>
            <h1 class="text-2xl font-bold text-stone-900 text-center mb-2">
                {{ t('smart_enroll.documents.preview.information_extracted') }}
            </h1>
            <p class="text-sm text-stone-500 text-center max-w-sm">
                {{ t('smart_enroll.documents.preview.please_confirm_information') }}
            </p>
        </div>

        <div class="px-8 pb-6 space-y-6">
            <div class="space-y-3">
                <h2 class="text-xs font-semibold text-stone-900 uppercase tracking-wide">
                    {{ t('smart_enroll.documents.preview.extracted_information') }}
                </h2>
                <div class="space-y-1">
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.first_name') }}</span>
                        <span class="text-sm text-stone-900 font-semibold">Laura</span>
                    </div>
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.last_name') }}</span>
                        <span class="text-sm text-stone-900 font-semibold">Walteros</span>
                    </div>
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.date_of_birth') }}</span>
                        <span class="text-sm text-stone-900 font-semibold">15 ABR 2004</span>
                    </div>
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.id_number') }}</span>
                        <span class="text-sm text-stone-900 font-semibold">1234567890</span>
                    </div>
                    <div class="flex items-center justify-between py-2">
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.date_of_issue') }}</span>
                        <span class="text-sm text-stone-900 font-semibold">16 AGO 2024</span>
                    </div>
                </div>
            </div>

            <div class="space-y-3">
                <h2 class="text-xs font-semibold text-stone-900 uppercase tracking-wide">
                    {{ t('smart_enroll.documents.preview.process_information') }}
                </h2>
                <div class="space-y-1">
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.created_at') }}</span>
                        <span class="text-sm text-stone-900 font-semibold">HH:MM del DD/MM/AA</span>
                    </div>
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.platform') }}</span>
                        <span class="text-sm text-stone-900 font-semibold">Web</span>
                    </div>
                    <div class="flex items-center justify-between py-2">
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.device') }}</span>
                        <span class="text-sm text-stone-900 font-semibold">Samsung</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-8 pb-8 flex gap-3">
            <button class="flex-1 h-12 rounded-xl border-2 border-stone-200 text-stone-700 font-medium text-sm">
                {{ t('smart_enroll.documents.preview.go_back') }}
            </button>
            <button
                class="flex-1 h-12 rounded-xl font-medium text-sm shadow-md"
                [style.background-color]="branding.buttonColor || defaultBranding.buttonColor"
                [style.color]="branding.buttonTextColor || defaultBranding.buttonTextColor"
            >
                {{ t('smart_enroll.documents.preview.continue') }}
            </button>
        </div>
    </div>
</ng-container>
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewDocumentResultComponent, { className: "PreviewDocumentResultComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-document-result/preview-document-result.component.ts", lineNumber: 25 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/preview-liveness/preview-liveness.component.ts
function PreviewLivenessComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275element(7, "img", 4);
    \u0275\u0275elementStart(8, "button", 5)(9, "mat-icon", 6);
    \u0275\u0275text(10, "cameraswitch");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 7);
    \u0275\u0275element(13, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 9);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.branding.titleColor || ctx_r1.defaultBranding.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.biometric_registration"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r1.deviceType === "mobile" ? "w-full" : "w-80") + " text-center text-sm font-medium");
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.biometric_registration_description"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cameraSizeClass() + " relative rounded-full overflow-hidden border-8 border-emerald-500 flex items-center justify-center");
    \u0275\u0275styleProp("background-image", "url(images/ui/placeholders/blurry-street.jpg)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r1.branding.buttonColor || ctx_r1.defaultBranding.buttonColor)("color", ctx_r1.branding.buttonTextColor || ctx_r1.defaultBranding.buttonTextColor);
    \u0275\u0275attribute("aria-label", t_r1("smart_enroll.liveness.preview.flip"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap((ctx_r1.deviceType === "mobile" ? "w-full" : "w-96") + " p-4 bg-white rounded-2xl border border-stone-300 flex items-start gap-3");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.instructions"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r1.branding.buttonColor || ctx_r1.defaultBranding.buttonColor)("color", ctx_r1.branding.buttonColor || ctx_r1.defaultBranding.buttonColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.skip"), " ");
  }
}
var PreviewLivenessComponent = class _PreviewLivenessComponent {
  constructor() {
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultBranding = this._setup.defaultBranding;
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"])
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  cameraSizeClass() {
    return this.deviceType === "mobile" ? "w-64 h-64" : "w-80 h-80";
  }
  static {
    this.\u0275fac = function PreviewLivenessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewLivenessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewLivenessComponent, selectors: [["preview-liveness"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "w-full", "flex", "flex-col", "items-center", "gap-6"], [1, "text-center", "text-3xl", "font-semibold", "leading-10"], [2, "background-size", "cover", "background-position", "center"], ["src", "images/ui/placeholders/face.png", "alt", "", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover"], ["type", "button", 1, "absolute", "bottom-3", "left-1/2", "-translate-x-1/2", "h-12", "w-12", "rounded-full", "flex", "items-center", "justify-center"], [1, "!h-5", "!w-5"], ["width", "20", "height", "20", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.0002 8.65398L26.0402 26.0007H5.96016L16.0002 8.65398ZM16.0002 3.33398L1.3335 28.6673H30.6668L16.0002 3.33398ZM17.3335 22.0007H14.6668V24.6673H17.3335V22.0007ZM17.3335 14.0007H14.6668V19.334H17.3335V14.0007Z", "fill", "#1E293B"], [1, "flex-1", "text-sm", "font-medium"], [1, "w-full", "max-w-md", "h-12", "rounded-2xl", "border", "flex", "items-center", "justify-center", "text-sm", "font-medium"]], template: function PreviewLivenessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewLivenessComponent_ng_container_0_Template, 18, 27, "ng-container", 0);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewLivenessComponent, [{
    type: Component,
    args: [{ selector: "preview-liveness", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="w-full flex flex-col items-center gap-6">
        <div class="text-center text-3xl font-semibold leading-10" [style.color]="branding.titleColor || defaultBranding.titleColor">
            {{ t('smart_enroll.liveness.preview.biometric_registration') }}
        </div>
        <div [class]="(deviceType === 'mobile' ? 'w-full' : 'w-80') + ' text-center text-sm font-medium'" [style.color]="branding.textColor || defaultBranding.textColor">
            {{ t('smart_enroll.liveness.preview.biometric_registration_description') }}
        </div>

        <div [class]="cameraSizeClass() + ' relative rounded-full overflow-hidden border-8 border-emerald-500 flex items-center justify-center'" [style.background-image]="'url(images/ui/placeholders/blurry-street.jpg)'" style="background-size: cover; background-position: center;">
            <img
                src="images/ui/placeholders/face.png"
                alt=""
                class="absolute inset-0 h-full w-full object-cover"
            />
            <button
                type="button"
                class="absolute bottom-3 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full flex items-center justify-center"
                [style.background-color]="branding.buttonColor || defaultBranding.buttonColor"
                [style.color]="branding.buttonTextColor || defaultBranding.buttonTextColor"
                [attr.aria-label]="t('smart_enroll.liveness.preview.flip')"
            >
                <mat-icon class="!h-5 !w-5">cameraswitch</mat-icon>
            </button>
        </div>

        <div [class]="(deviceType === 'mobile' ? 'w-full' : 'w-96') + ' p-4 bg-white rounded-2xl border border-stone-300 flex items-start gap-3'">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0002 8.65398L26.0402 26.0007H5.96016L16.0002 8.65398ZM16.0002 3.33398L1.3335 28.6673H30.6668L16.0002 3.33398ZM17.3335 22.0007H14.6668V24.6673H17.3335V22.0007ZM17.3335 14.0007H14.6668V19.334H17.3335V14.0007Z" fill="#1E293B"/>
            </svg>
            <div class="flex-1 text-sm font-medium" [style.color]="branding.textColor || defaultBranding.textColor">
                {{ t('smart_enroll.liveness.preview.instructions') }}
            </div>
        </div>

        <div class="w-full max-w-md h-12 rounded-2xl border flex items-center justify-center text-sm font-medium" [style.border-color]="branding.buttonColor || defaultBranding.buttonColor" [style.color]="branding.buttonColor || defaultBranding.buttonColor">
            {{ t('smart_enroll.liveness.preview.skip') }}
        </div>
    </div>
</ng-container>
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewLivenessComponent, { className: "PreviewLivenessComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-liveness/preview-liveness.component.ts", lineNumber: 25 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/preview-liveness-result/preview-liveness-result.component.ts
function PreviewLivenessResultComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "mat-icon", 6);
    \u0275\u0275text(7, "check_circle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "span", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-icon", 11);
    \u0275\u0275text(15, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 9)(17, "span", 10);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-icon", 11);
    \u0275\u0275text(20, "check_circle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 12);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-image", "url(images/ui/placeholders/blurry-street.jpg)");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", ctx_r1.branding.titleColor || ctx_r1.defaultBranding.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.successful_outcome"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.face_registered"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.id_registered"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", ctx_r1.branding.buttonColor || ctx_r1.defaultBranding.buttonColor)("color", ctx_r1.branding.buttonTextColor || ctx_r1.defaultBranding.buttonTextColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.continue_to_platform"), " ");
  }
}
var PreviewLivenessResultComponent = class _PreviewLivenessResultComponent {
  constructor() {
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultBranding = this._setup.defaultBranding;
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"])
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  static {
    this.\u0275fac = function PreviewLivenessResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewLivenessResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewLivenessResultComponent, selectors: [["preview-liveness-result"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "w-full", "flex", "flex-col", "items-center", "gap-6"], [1, "relative"], [1, "relative", "w-36", "h-36", "rounded-full", "overflow-hidden", "flex", "items-center", "justify-center", 2, "background-size", "cover", "background-position", "center"], ["src", "images/ui/placeholders/face.png", "alt", "", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover"], [1, "absolute", "bg-white", "rounded-full", "bottom-0", "right-0", "h-12", "w-12", "flex", "items-center", "justify-center", "shadow-md", "z-10"], [1, "!h-9", "!w-9", "text-emerald-500"], [1, "text-center", "text-3xl", "font-semibold", "leading-10"], [1, "w-full", "max-w-md", "flex", "flex-col", "gap-3"], [1, "flex", "items-center", "justify-between", "pb-3", "border-b", "border-stone-300"], [1, "text-base", "font-semibold"], [1, "!h-5", "!w-5", "text-emerald-500"], ["type", "button", 1, "w-full", "max-w-md", "h-14", "rounded-2xl", "flex", "items-center", "justify-center", "text-base", "font-medium"]], template: function PreviewLivenessResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewLivenessResultComponent_ng_container_0_Template, 23, 16, "ng-container", 0);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewLivenessResultComponent, [{
    type: Component,
    args: [{ selector: "preview-liveness-result", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="w-full flex flex-col items-center gap-6">
        <div class="relative">
            <div class="relative w-36 h-36 rounded-full overflow-hidden flex items-center justify-center" [style.background-image]="'url(images/ui/placeholders/blurry-street.jpg)'" style="background-size: cover; background-position: center;">
                <img
                    src="images/ui/placeholders/face.png"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div class="absolute bg-white rounded-full bottom-0 right-0 h-12 w-12 flex items-center justify-center shadow-md z-10">
                <mat-icon class="!h-9 !w-9 text-emerald-500">check_circle</mat-icon>
            </div>
        </div>

        <div class="text-center text-3xl font-semibold leading-10" [style.color]="branding.titleColor || defaultBranding.titleColor">
            {{ t('smart_enroll.liveness.preview.successful_outcome') }}
        </div>

        <div class="w-full max-w-md flex flex-col gap-3">
            <div class="flex items-center justify-between pb-3 border-b border-stone-300">
                <span class="text-base font-semibold" [style.color]="branding.textColor || defaultBranding.textColor">
                    {{ t('smart_enroll.liveness.preview.face_registered') }}
                </span>
                <mat-icon class="!h-5 !w-5 text-emerald-500">check_circle</mat-icon>
            </div>
            <div class="flex items-center justify-between pb-3 border-b border-stone-300">
                <span class="text-base font-semibold" [style.color]="branding.textColor || defaultBranding.textColor">
                    {{ t('smart_enroll.liveness.preview.id_registered') }}
                </span>
                <mat-icon class="!h-5 !w-5 text-emerald-500">check_circle</mat-icon>
            </div>
        </div>

        <button
            type="button"
            class="w-full max-w-md h-14 rounded-2xl flex items-center justify-center text-base font-medium"
            [style.background-color]="branding.buttonColor || defaultBranding.buttonColor"
            [style.color]="branding.buttonTextColor || defaultBranding.buttonTextColor"
        >
            {{ t('smart_enroll.liveness.preview.continue_to_platform') }}
        </button>
    </div>
</ng-container>
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewLivenessResultComponent, { className: "PreviewLivenessResultComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-liveness-result/preview-liveness-result.component.ts", lineNumber: 25 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/smart-enroll-preview.component.ts
function SmartEnrollPreviewComponent_ng_container_0_div_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 16);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_div_22_ng_container_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.previousView());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 17);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_div_22_ng_container_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextView());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smart_enroll.preview.previous"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", t_r4("smart_enroll.preview.next"));
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-sign-up", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("formType", ctx_r1.formType)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_3_Conditional_0_Template, 1, 5, "preview-sign-up", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-document-scan", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_4_Conditional_0_Template, 1, 4, "preview-document-scan", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-document-upload", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_5_Conditional_0_Template, 1, 4, "preview-document-upload", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-document-result", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_6_Conditional_0_Template, 1, 4, "preview-document-result", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-liveness", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_7_Conditional_0_Template, 1, 4, "preview-liveness", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-liveness-result", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_8_Conditional_0_Template, 1, 4, "preview-liveness-result", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, SmartEnrollPreviewComponent_ng_container_0_div_22_ng_container_1_Template, 7, 2, "ng-container", 15);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275template(3, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_3_Template, 1, 1)(4, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_4_Template, 1, 1)(5, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_5_Template, 1, 1)(6, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_6_Template, 1, 1)(7, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_7_Template, 1, 1)(8, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_8_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r1.effectiveBranding.backgroundColor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.view.length > 1);
    \u0275\u0275advance();
    \u0275\u0275classMap("flex flex-1 flex-col items-center justify-start py-8 px-4 " + ctx_r1.contentDeviceClasses());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.currentView) === "signup" ? 3 : tmp_6_0 === "document-scan" ? 4 : tmp_6_0 === "document-upload" ? 5 : tmp_6_0 === "document-result" ? 6 : tmp_6_0 === "liveness" ? 7 : tmp_6_0 === "liveness-result" ? 8 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-icon", 5);
    \u0275\u0275text(6, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "p", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeviceType("desktop"));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 10);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeviceType("tablet"));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 10);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeviceType("mobile"));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 11);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFullscreen());
    });
    \u0275\u0275elementStart(20, "mat-icon", 12);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(22, SmartEnrollPreviewComponent_ng_container_0_div_22_Template, 9, 6, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("rounded-2xl", !ctx_r1.isFullscreen)("h-full", !ctx_r1.isFullscreen)("fixed", ctx_r1.isFullscreen)("inset-0", ctx_r1.isFullscreen)("z-50", ctx_r1.isFullscreen)("rounded-none", ctx_r1.isFullscreen);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r4("smart_enroll.preview.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smart_enroll.preview.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-stone-100", ctx_r1.deviceType === "desktop")("text-stone-900", ctx_r1.deviceType === "desktop")("dark:bg-gray-800", ctx_r1.deviceType === "desktop")("dark:text-white", ctx_r1.deviceType === "desktop")("text-stone-500", ctx_r1.deviceType !== "desktop");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smart_enroll.preview.desktop"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-100", ctx_r1.deviceType === "tablet")("text-stone-900", ctx_r1.deviceType === "tablet")("dark:bg-gray-800", ctx_r1.deviceType === "tablet")("dark:text-white", ctx_r1.deviceType === "tablet")("text-stone-500", ctx_r1.deviceType !== "tablet");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smart_enroll.preview.tablet"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-100", ctx_r1.deviceType === "mobile")("text-stone-900", ctx_r1.deviceType === "mobile")("dark:bg-gray-800", ctx_r1.deviceType === "mobile")("dark:text-white", ctx_r1.deviceType === "mobile")("text-stone-500", ctx_r1.deviceType !== "mobile");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smart_enroll.preview.mobile"), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smart_enroll.preview.fullscreen"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isFullscreen ? "close_fullscreen" : "open_in_full", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.view.length);
  }
}
var SmartEnrollPreviewComponent = class _SmartEnrollPreviewComponent {
  constructor() {
    this.branding = null;
    this.view = ["signup"];
    this._setup = inject(SetupService);
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this.currentView = "signup";
    this.currentViewIndex = 0;
    this.deviceType = "tablet";
    this.isFullscreen = false;
    this.stepIndex = 0;
  }
  ngOnInit() {
    this.currentView = this.view[0] ?? "signup";
    this._setup.stepIndex$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((step) => {
      this.stepIndex = step;
      this.currentViewIndex = 0;
      this.currentView = this.view[0] ?? this.currentView;
      this._cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const change = changes["view"];
    if (!change)
      return;
    const prev = change.previousValue || [];
    const curr = change.currentValue || [];
    const sameContent = prev.length === curr.length && prev.every((v, i) => v === curr[i]);
    if (sameContent)
      return;
    this.currentViewIndex = 0;
    this.currentView = curr[0] ?? "signup";
    this._cdr.markForCheck();
  }
  /** Effective branding object: caller value layered over service defaults. */
  get effectiveBranding() {
    return __spreadValues(__spreadValues({}, this._setup.defaultBranding), this.branding || {});
  }
  /** FormGroup for the sub-view bound to the current step. */
  get subFormGroup() {
    switch (this.currentView) {
      case "signup":
        return this.stepIndex === 3 ? this.form?.get("projectFlow.representatives.information") : this.form?.get("projectFlow.signUpForm");
      case "document-scan":
      case "document-upload":
      case "document-result":
        return this.stepIndex === 3 ? this.form?.get("projectFlow.representatives.documents") : this.form?.get("projectFlow.documents");
      case "liveness":
      case "liveness-result":
        return this.stepIndex === 3 ? this.form?.get("projectFlow.representatives.liveness") : this.form?.get("projectFlow.liveness");
      default:
        return null;
    }
  }
  /** `personal` for representative sub-flow, otherwise the project's target. */
  get formType() {
    if (this.stepIndex === 3)
      return "personal";
    const t = this.form?.get("target")?.value;
    return t === "business" ? "business" : "personal";
  }
  nextView() {
    if (!this.view.length)
      return;
    this.currentViewIndex = (this.currentViewIndex + 1) % this.view.length;
    this.currentView = this.view[this.currentViewIndex];
    this._cdr.markForCheck();
  }
  previousView() {
    if (!this.view.length)
      return;
    this.currentViewIndex = (this.currentViewIndex - 1 + this.view.length) % this.view.length;
    this.currentView = this.view[this.currentViewIndex];
    this._cdr.markForCheck();
  }
  setDeviceType(device) {
    this.deviceType = device;
    this._cdr.markForCheck();
  }
  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
    document.body.style.overflow = this.isFullscreen ? "hidden" : "";
    this._cdr.markForCheck();
  }
  /** Tailwind classes for the inner content's max-width based on the device toggle. */
  contentDeviceClasses() {
    switch (this.deviceType) {
      case "mobile":
        return "max-w-80 w-full mx-auto";
      case "tablet":
        return "max-w-160 w-full mx-auto";
      case "desktop":
      default:
        return "w-full";
    }
  }
  static {
    this.\u0275fac = function SmartEnrollPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEnrollPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartEnrollPreviewComponent, selectors: [["smart-enroll-preview"]], inputs: { branding: "branding", form: "form", view: "view" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "w-full", "flex-col", "overflow-hidden", "border", "border-stone-200", "bg-white", "dark:border-gray-700", "dark:bg-gray-900"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "p-4", "md:p-5"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-700", "dark:bg-gray-800", "dark:text-stone-200"], [1, "!h-5", "!w-5"], [1, "flex", "flex-col"], [1, "m-0", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "m-0", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "gap-1"], ["type", "button", 1, "rounded-full", "px-3", "py-1.5", "text-xs", "font-medium", "transition-colors", 3, "click"], ["type", "button", 1, "ml-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-stone-100", "transition-colors", "hover:bg-stone-200", "dark:bg-gray-800", "dark:hover:bg-gray-700", 3, "click"], [1, "!h-4", "!w-4", "text-stone-700", "dark:text-stone-200"], ["class", "relative flex flex-1 flex-col items-stretch overflow-auto border-t border-stone-200 dark:border-gray-700", 3, "background-color", 4, "ngIf"], [1, "relative", "flex", "flex-1", "flex-col", "items-stretch", "overflow-auto", "border-t", "border-stone-200", "dark:border-gray-700"], [4, "ngIf"], ["type", "button", 1, "absolute", "left-0", "top-0", "bottom-0", "z-10", "flex", "items-center", "justify-center", "px-2", "text-stone-700", "opacity-40", "transition-opacity", "hover:bg-stone-900/5", "hover:opacity-100", 3, "click"], ["type", "button", 1, "absolute", "right-0", "top-0", "bottom-0", "z-10", "flex", "items-center", "justify-center", "px-2", "text-stone-700", "opacity-40", "transition-opacity", "hover:bg-stone-900/5", "hover:opacity-100", 3, "click"], [3, "branding", "form", "formGroup", "formType", "deviceType"], [3, "branding", "form", "formGroup", "deviceType"]], template: function SmartEnrollPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_Template, 23, 50, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      MatButtonModule,
      MatIconModule,
      MatIcon,
      TranslocoModule,
      TranslocoDirective,
      PreviewSignUpComponent,
      PreviewDocumentScanComponent,
      PreviewDocumentUploadComponent,
      PreviewDocumentResultComponent,
      PreviewLivenessComponent,
      PreviewLivenessResultComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEnrollPreviewComponent, [{
    type: Component,
    args: [{ selector: "smart-enroll-preview", standalone: true, imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      TranslocoModule,
      PreviewSignUpComponent,
      PreviewDocumentScanComponent,
      PreviewDocumentUploadComponent,
      PreviewDocumentResultComponent,
      PreviewLivenessComponent,
      PreviewLivenessResultComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div
        class="flex w-full flex-col overflow-hidden border border-stone-200 bg-white dark:border-gray-700 dark:bg-gray-900"
        [class.rounded-2xl]="!isFullscreen"
        [class.h-full]="!isFullscreen"
        [class.fixed]="isFullscreen"
        [class.inset-0]="isFullscreen"
        [class.z-50]="isFullscreen"
        [class.rounded-none]="isFullscreen"
    >
        <!-- Header toolbar -->
        <div class="flex flex-wrap items-center justify-between gap-3 p-4 md:p-5">
            <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-200">
                    <mat-icon class="!h-5 !w-5">visibility</mat-icon>
                </div>
                <div class="flex flex-col">
                    <p class="m-0 text-sm font-semibold text-stone-900 dark:text-white">
                        {{ t('smart_enroll.preview.title') }}
                    </p>
                    <p class="m-0 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smart_enroll.preview.subtitle') }}
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-1">
                <button
                    type="button"
                    class="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
                    [class.bg-stone-100]="deviceType === 'desktop'"
                    [class.text-stone-900]="deviceType === 'desktop'"
                    [class.dark:bg-gray-800]="deviceType === 'desktop'"
                    [class.dark:text-white]="deviceType === 'desktop'"
                    [class.text-stone-500]="deviceType !== 'desktop'"
                    (click)="setDeviceType('desktop')"
                >
                    {{ t('smart_enroll.preview.desktop') }}
                </button>
                <button
                    type="button"
                    class="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
                    [class.bg-stone-100]="deviceType === 'tablet'"
                    [class.text-stone-900]="deviceType === 'tablet'"
                    [class.dark:bg-gray-800]="deviceType === 'tablet'"
                    [class.dark:text-white]="deviceType === 'tablet'"
                    [class.text-stone-500]="deviceType !== 'tablet'"
                    (click)="setDeviceType('tablet')"
                >
                    {{ t('smart_enroll.preview.tablet') }}
                </button>
                <button
                    type="button"
                    class="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
                    [class.bg-stone-100]="deviceType === 'mobile'"
                    [class.text-stone-900]="deviceType === 'mobile'"
                    [class.dark:bg-gray-800]="deviceType === 'mobile'"
                    [class.dark:text-white]="deviceType === 'mobile'"
                    [class.text-stone-500]="deviceType !== 'mobile'"
                    (click)="setDeviceType('mobile')"
                >
                    {{ t('smart_enroll.preview.mobile') }}
                </button>
                <button
                    type="button"
                    class="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 transition-colors hover:bg-stone-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    (click)="toggleFullscreen()"
                    [attr.aria-label]="t('smart_enroll.preview.fullscreen')"
                >
                    <mat-icon class="!h-4 !w-4 text-stone-700 dark:text-stone-200">
                        {{ isFullscreen ? 'close_fullscreen' : 'open_in_full' }}
                    </mat-icon>
                </button>
            </div>
        </div>

        <!-- Preview canvas -->
        <div
            class="relative flex flex-1 flex-col items-stretch overflow-auto border-t border-stone-200 dark:border-gray-700"
            *ngIf="view.length"
            [style.background-color]="effectiveBranding.backgroundColor"
        >
            <!-- Side chevrons -->
            <ng-container *ngIf="view.length > 1">
                <button
                    type="button"
                    class="absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center px-2 text-stone-700 opacity-40 transition-opacity hover:bg-stone-900/5 hover:opacity-100"
                    (click)="previousView()"
                    [attr.aria-label]="t('smart_enroll.preview.previous')"
                >
                    <mat-icon>arrow_back</mat-icon>
                </button>
                <button
                    type="button"
                    class="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-center px-2 text-stone-700 opacity-40 transition-opacity hover:bg-stone-900/5 hover:opacity-100"
                    (click)="nextView()"
                    [attr.aria-label]="t('smart_enroll.preview.next')"
                >
                    <mat-icon>arrow_forward</mat-icon>
                </button>
            </ng-container>

            <div [class]="'flex flex-1 flex-col items-center justify-start py-8 px-4 ' + contentDeviceClasses()">
                @switch (currentView) {
                    @case ('signup') {
                        @if (subFormGroup) {
                            <preview-sign-up
                                [branding]="effectiveBranding"
                                [form]="form"
                                [formGroup]="subFormGroup"
                                [formType]="formType"
                                [deviceType]="deviceType"
                            ></preview-sign-up>
                        }
                    }
                    @case ('document-scan') {
                        @if (subFormGroup) {
                            <preview-document-scan
                                [branding]="effectiveBranding"
                                [form]="form"
                                [formGroup]="subFormGroup"
                                [deviceType]="deviceType"
                            ></preview-document-scan>
                        }
                    }
                    @case ('document-upload') {
                        @if (subFormGroup) {
                            <preview-document-upload
                                [branding]="effectiveBranding"
                                [form]="form"
                                [formGroup]="subFormGroup"
                                [deviceType]="deviceType"
                            ></preview-document-upload>
                        }
                    }
                    @case ('document-result') {
                        @if (subFormGroup) {
                            <preview-document-result
                                [branding]="effectiveBranding"
                                [form]="form"
                                [formGroup]="subFormGroup"
                                [deviceType]="deviceType"
                            ></preview-document-result>
                        }
                    }
                    @case ('liveness') {
                        @if (subFormGroup) {
                            <preview-liveness
                                [branding]="effectiveBranding"
                                [form]="form"
                                [formGroup]="subFormGroup"
                                [deviceType]="deviceType"
                            ></preview-liveness>
                        }
                    }
                    @case ('liveness-result') {
                        @if (subFormGroup) {
                            <preview-liveness-result
                                [branding]="effectiveBranding"
                                [form]="form"
                                [formGroup]="subFormGroup"
                                [deviceType]="deviceType"
                            ></preview-liveness-result>
                        }
                    }
                }
            </div>
        </div>
    </div>
</ng-container>
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], view: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartEnrollPreviewComponent, { className: "SmartEnrollPreviewComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/smart-enroll-preview.component.ts", lineNumber: 58 });
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
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 30);
    \u0275\u0275listener("click", function SetupBasicSetupComponent_ng_container_0_Conditional_27_For_2_Template_button_click_2_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeCountry(c_r3));
    });
    \u0275\u0275elementStart(3, "mat-icon", 31);
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
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, SetupBasicSetupComponent_ng_container_0_Conditional_27_For_2_Template, 5, 2, "span", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.allowedCountries);
  }
}
function SetupBasicSetupComponent_ng_container_0_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", c_r6.country);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5(c_r6.name));
  }
}
function SetupBasicSetupComponent_ng_container_0_For_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
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
    \u0275\u0275elementStart(1, "form", 2)(2, "section", 3)(3, "header", 4)(4, "h2", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "mat-form-field", 8)(10, "mat-label");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 9);
    \u0275\u0275elementStart(13, "mat-hint", 10)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "mat-form-field", 8)(17, "mat-label");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "section", 3)(21, "header", 4)(22, "h2", 5);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 6);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 12);
    \u0275\u0275template(27, SetupBasicSetupComponent_ng_container_0_Conditional_27_Template, 3, 0, "div", 13);
    \u0275\u0275elementStart(28, "mat-form-field", 8)(29, "mat-label");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 14);
    \u0275\u0275elementStart(32, "mat-autocomplete", 15, 0);
    \u0275\u0275listener("optionSelected", function SetupBasicSetupComponent_ng_container_0_Template_mat_autocomplete_optionSelected_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onAllowedCountryPicked($event));
    });
    \u0275\u0275repeaterCreate(34, SetupBasicSetupComponent_ng_container_0_For_35_Template, 2, 2, "mat-option", 16, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "section", 3)(37, "header", 4)(38, "h2", 5);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 6);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 17)(43, "mat-form-field", 8)(44, "mat-label");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-form-field", 8)(48, "mat-label");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "section", 20)(52, "header", 4)(53, "h2", 5);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p", 6);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 17)(58, "mat-form-field", 8)(59, "mat-label");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "mat-form-field", 8)(63, "mat-label");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "mat-form-field", 23)(67, "mat-label");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-form-field", 23)(71, "mat-label");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "mat-form-field", 8)(75, "mat-label");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "mat-form-field", 8)(79, "mat-label");
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "mat-form-field", 23)(83, "mat-label");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "mat-select", 28);
    \u0275\u0275repeaterCreate(86, SetupBasicSetupComponent_ng_container_0_For_87_Template, 2, 2, "mat-option", 16, _forTrack0);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const allowedCountriesAuto_r8 = \u0275\u0275reference(33);
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
    \u0275\u0275property("formControl", ctx_r3.allowedCountryFilterCtrl)("placeholder", t_r5("smartEnrollProjects.setup.basicSetup.allowed.search"))("matAutocomplete", allowedCountriesAuto_r8);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.filteredAllowedCountries);
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
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this.countries = this._countryService.countries;
    this.ipCountries = this._countryService.ipCountries;
    this.allowedCountryFilterCtrl = new FormControl("", { nonNullable: true });
    this.dataProtectionCountrySearch = "";
    this.MAX_NAME_LENGTH = 60;
    this.allowedCountryFilterCtrl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
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
    const term = this.allowedCountryFilterCtrl.value.trim().toLowerCase();
    const selected = new Set(this.allowedCountries);
    return this.ipCountries.filter((c) => {
      if (selected.has(c.country))
        return false;
      const label = this._transloco.translate(c.name).toLowerCase();
      const code = (c.code || "").toLowerCase();
      const countryKey = (c.country || "").toLowerCase();
      if (!term)
        return true;
      return label.includes(term) || code.includes(term) || countryKey.includes(term);
    });
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
  onAllowedCountryPicked(event) {
    const code = event.option.value;
    const option = this.ipCountries.find((c) => c.country === code);
    this.allowedCountryFilterCtrl.setValue("", { emitEvent: false });
    this._cdr.markForCheck();
    if (option)
      this.addCountry(option);
  }
  removeCountry(country) {
    const values = new Set(this.allowedCountries);
    values.delete(country);
    this.form.get("allowedCountries")?.setValue(Array.from(values));
  }
  countryLabel(country) {
    if (country === "All") {
      return this._transloco.translate("country_name.world");
    }
    const found = this.countries.find((c) => c.country === country);
    return found ? this._transloco.translate(found.name) : country;
  }
  static {
    this.\u0275fac = function SetupBasicSetupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupBasicSetupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupBasicSetupComponent, selectors: [["setup-basic-setup"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [["allowedCountriesAuto", "matAutocomplete"], [4, "transloco"], [1, "flex", "flex-col", "gap-6", 3, "formGroup"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-4"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "formControlName", "name", "autocomplete", "off", 3, "maxlength"], ["align", "end"], ["matInput", "", "formControlName", "contactEmail", "type", "email", "autocomplete", "email"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "flex-wrap", "gap-2"], ["matInput", "", "type", "text", "autocomplete", "off", 3, "formControl", "placeholder", "matAutocomplete"], [3, "optionSelected"], [3, "value"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["matInput", "", "formControlName", "privacyUrl", "type", "url", "placeholder", "https://"], ["matInput", "", "formControlName", "termsAndConditionsUrl", "type", "url", "placeholder", "https://"], ["formGroupName", "dataProtection", 1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "email", "type", "email"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "md:col-span-2"], ["matInput", "", "formControlName", "address"], ["matInput", "", "formControlName", "address2"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "postalCode"], ["formControlName", "country"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-stone-100", "px-3", "py-1", "text-xs", "font-medium", "text-stone-700", "dark:bg-gray-800", "dark:text-stone-200"], ["type", "button", 1, "rounded-full", "p-0.5", "hover:bg-stone-200", "dark:hover:bg-gray-700", 3, "click"], [1, "!h-3.5", "!w-3.5", "!text-base"]], template: function SetupBasicSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupBasicSetupComponent_ng_container_0_Template, 88, 36, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      MatButtonModule,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
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
      MatAutocompleteModule,
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
                    <input
                        matInput
                        type="text"
                        autocomplete="off"
                        [formControl]="allowedCountryFilterCtrl"
                        [placeholder]="t('smartEnrollProjects.setup.basicSetup.allowed.search')"
                        [matAutocomplete]="allowedCountriesAuto"
                    />
                    <mat-autocomplete
                        #allowedCountriesAuto="matAutocomplete"
                        (optionSelected)="onAllowedCountryPicked($event)"
                    >
                        @for (c of filteredAllowedCountries; track c.country) {
                            <mat-option [value]="c.country">{{ t(c.name) }}</mat-option>
                        }
                    </mat-autocomplete>
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
  }], () => [], { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupBasicSetupComponent, { className: "SetupBasicSetupComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/basic-setup/basic-setup.component.ts", lineNumber: 46 });
})();

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
    args: [{ selector: "document-type-preview-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="flex max-h-[90vh] flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-900">
        <div class="flex items-center justify-between gap-4 border-b border-stone-200 bg-stone-50 p-5 dark:border-gray-700 dark:bg-gray-900/60">
            <div class="min-w-0">
                <h2 class="m-0 truncate text-base font-semibold text-stone-900 dark:text-white">
                    {{ headerTitle || t('smartEnrollProjects.setup.documents.types.previewTitle') }}
                </h2>
                @if (data?.country) {
                    <p class="m-0 mt-0.5 text-xs text-stone-500 dark:text-stone-400">{{ data.country }}</p>
                }
            </div>
            <button mat-icon-button mat-dialog-close>
                <mat-icon>close</mat-icon>
            </button>
        </div>

        <div class="flex-1 overflow-y-auto p-5">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <figure class="m-0 flex flex-col gap-2">
                    <figcaption class="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.documents.types.frontImage') }}
                    </figcaption>
                    @if (data?.frontImage) {
                        <img
                            [src]="data.frontImage"
                            [alt]="t('smartEnrollProjects.setup.documents.types.frontImage')"
                            loading="lazy"
                            class="h-auto w-full rounded-xl border border-stone-200 object-contain dark:border-gray-700"
                        />
                    } @else {
                        <div
                            class="flex h-40 items-center justify-center rounded-xl border border-dashed border-stone-300 text-xs text-stone-500 dark:border-gray-700 dark:text-stone-400"
                        >
                            {{ t('smartEnrollProjects.setup.documents.types.noImage') }}
                        </div>
                    }
                </figure>

                <figure class="m-0 flex flex-col gap-2">
                    <figcaption class="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.documents.types.backImage') }}
                    </figcaption>
                    @if (data?.backImage) {
                        <img
                            [src]="data.backImage"
                            [alt]="t('smartEnrollProjects.setup.documents.types.backImage')"
                            loading="lazy"
                            class="h-auto w-full rounded-xl border border-stone-200 object-contain dark:border-gray-700"
                        />
                    } @else {
                        <div
                            class="flex h-40 items-center justify-center rounded-xl border border-dashed border-stone-300 text-xs text-stone-500 dark:border-gray-700 dark:text-stone-400"
                        >
                            {{ t('smartEnrollProjects.setup.documents.types.noImage') }}
                        </div>
                    }
                </figure>
            </div>
        </div>

        <div class="flex justify-end gap-2 border-t border-stone-200 p-4 dark:border-gray-700">
            <button mat-flat-button color="primary" mat-dialog-close class="rounded-xl">
                {{ t('smartEnrollProjects.setup.documents.localApi.close') }}
            </button>
        </div>
    </div>
</ng-container>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentTypePreviewDialogComponent, { className: "DocumentTypePreviewDialogComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/documents/document-type-preview-dialog/document-type-preview-dialog.component.ts", lineNumber: 28 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/documents/document-verification-type/document-verification-type-list.component.ts
var _c02 = (a0, a1) => ({ selected: a0, total: a1 });
var _c12 = (a0, a1) => ({ category: a0, country: a1 });
var _forTrack02 = ($index, $item) => $item.country;
var _forTrack1 = ($index, $item) => $item._id;
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
function DocumentVerificationTypeListComponent_ng_container_0_For_4_For_8_Template(rf, ctx) {
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
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.pickCountryFirst"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-progress-spinner", 14);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.loading"));
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const category_r9 = \u0275\u0275readContextLet(1);
    \u0275\u0275nextContext(2);
    const countryValue_r10 = \u0275\u0275readContextLet(0);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.noTemplates", \u0275\u0275pureFunction2(1, _c12, t_r2("smartEnrollProjects.setup.documents.category." + category_r9), countryValue_r10)), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Conditional_13_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29)(1, "mat-icon", 32);
    \u0275\u0275text(2, "public");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.globalBadge"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 25)(1, "mat-checkbox", 26);
    \u0275\u0275listener("change", function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Conditional_13_For_2_Template_mat_checkbox_change_1_listener($event) {
      const pt_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275nextContext(2);
      const configCtrl_r8 = \u0275\u0275readContextLet(0);
      const ctx_r5 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r5.toggleTemplate(configCtrl_r8, pt_r12, $event.checked));
    });
    \u0275\u0275elementStart(2, "span", 27)(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Conditional_13_For_2_Conditional_5_Template, 4, 1, "span", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Conditional_13_For_2_Template_button_click_6_listener() {
      const pt_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r5.openPreview(pt_r12));
    });
    \u0275\u0275elementStart(7, "mat-icon", 31);
    \u0275\u0275text(8, "visibility");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pt_r12 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const configCtrl_r8 = \u0275\u0275readContextLet(0);
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r5.isTemplateSelected(configCtrl_r8, pt_r12._id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r5.templateLabel(pt_r12), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.isGlobalTemplate(pt_r12) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", t_r2("smartEnrollProjects.setup.documents.types.preview"));
    \u0275\u0275attribute("aria-label", t_r2("smartEnrollProjects.setup.documents.types.preview"));
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 24);
    \u0275\u0275repeaterCreate(1, DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Conditional_13_For_2_Template, 9, 5, "li", 25, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const templates_r13 = \u0275\u0275readContextLet(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(templates_r13);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0)(1)(2)(3);
    \u0275\u0275elementStart(4, "div", 16)(5, "div", 18)(6, "div", 19)(7, "p", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-slide-toggle", 22);
    \u0275\u0275listener("change", function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Template_mat_slide_toggle_change_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const configCtrl_r8 = \u0275\u0275readContextLet(0);
      const ctx_r5 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r5.onActiveToggleChange(configCtrl_r8, $event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Conditional_12_Template, 2, 4, "p", 23)(13, DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Conditional_13_Template, 3, 0, "ul", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_26_0;
    const cfg_r14 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const countryValue_r10 = \u0275\u0275readContextLet(0);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    const configCtrl_r15 = \u0275\u0275storeLet(cfg_r14);
    \u0275\u0275advance();
    const category_r16 = \u0275\u0275storeLet(((tmp_26_0 = configCtrl_r15.get("documentCategory")) == null ? null : tmp_26_0.value) || "");
    \u0275\u0275advance();
    const templates_r17 = \u0275\u0275storeLet(ctx_r5.templatesFor(countryValue_r10, category_r16));
    const selected_r18 = ctx_r5.selectedCount(configCtrl_r15);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r5.asGroup(configCtrl_r15));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.category." + category_r16), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", templates_r17.length === 0 ? t_r2("smartEnrollProjects.setup.documents.types.noTemplatesShort") : t_r2("smartEnrollProjects.setup.documents.types.selectedOfAvailable", \u0275\u0275pureFunction2(7, _c02, selected_r18, templates_r17.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(templates_r17.length === 0 ? 12 : 13);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.activateHint"), " ");
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_For_2_Template, 14, 10, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_Conditional_3_Template, 2, 1, "p", 17);
  }
  if (rf & 2) {
    const group_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.asArray(ctx_r5.asGroup(group_r19).get("configurations")).controls);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.activeCategories(ctx_r5.asGroup(group_r19)).length === 0 ? 3 : -1);
  }
}
function DocumentVerificationTypeListComponent_ng_container_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 7)(3, "mat-form-field", 8)(4, "mat-label");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-select", 9);
    \u0275\u0275repeaterCreate(7, DocumentVerificationTypeListComponent_ng_container_0_For_4_For_8_Template, 2, 2, "mat-option", 10, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function DocumentVerificationTypeListComponent_ng_container_0_For_4_Template_button_click_9_listener() {
      const \u0275$index_11_r5 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.removeType(\u0275$index_11_r5));
    });
    \u0275\u0275elementStart(10, "mat-icon", 5);
    \u0275\u0275text(11, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_13_Template, 2, 1, "p", 12)(14, DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_14_Template, 4, 1, "div", 13)(15, DocumentVerificationTypeListComponent_ng_container_0_For_4_Conditional_15_Template, 4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const group_r19 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    const countryValue_r20 = \u0275\u0275storeLet(((tmp_13_0 = ctx_r5.asGroup(group_r19).get("country")) == null ? null : tmp_13_0.value) || "");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r5.asGroup(group_r19));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.country"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r5.countries);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.types.remove"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!countryValue_r20 ? 13 : ctx_r5.isLoading(countryValue_r20) ? 14 : 15);
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
    \u0275\u0275repeaterCreate(3, DocumentVerificationTypeListComponent_ng_container_0_For_4_Template, 16, 5, "div", 3, \u0275\u0275repeaterTrackByIdentity);
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
    this._setup = inject(SetupService);
    this._dialog = inject(MatDialog);
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this.countries = this._countries.worldCountries;
    this._templatesByCountry = {};
    this._loadingCountries = /* @__PURE__ */ new Set();
    this._fetchedCountries = /* @__PURE__ */ new Set();
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
  addType() {
    this._factory.addDocumentTypesWithDefaults(this.documentTypes, this.target);
    const last = this.documentTypes.at(this.documentTypes.length - 1);
    this._watchCountry(last);
    this._cdr.markForCheck();
  }
  removeType(index) {
    this.documentTypes.removeAt(index);
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
  onActiveToggleChange(configCtrl, checked) {
    if (checked)
      return;
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
    this._cdr.markForCheck();
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
    this._setup.listPromptTemplates({
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentVerificationTypeListComponent, selectors: [["document-verification-type-list"]], inputs: { form: "form", documentTypes: "documentTypes", target: "target" }, decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "flex-col", "gap-3"], [1, "rounded-xl", "border", "border-dashed", "border-stone-300/80", "px-4", "py-6", "text-center", "text-xs", "text-stone-500", "dark:border-gray-700", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-3", "rounded-2xl", "border", "border-stone-200/90", "bg-stone-50", "p-4", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], ["mat-stroked-button", "", "type", "button", 1, "self-start", "rounded-xl", 3, "click"], [1, "!h-4", "!w-4"], [1, "text-xs", "text-red-700", "dark:text-red-300"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[16rem]", "flex-1"], ["formControlName", "country"], [3, "value"], ["mat-stroked-button", "", "type", "button", "color", "warn", 1, "rounded-full", 3, "click"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "gap-2", "py-3", "text-xs", "text-stone-500", "dark:text-stone-400"], ["mode", "indeterminate", "diameter", "18"], [1, "flex", "flex-col", "gap-3", "border-t", "border-stone-200/80", "pt-3", "dark:border-gray-700"], [1, "flex", "flex-col", "gap-3", "rounded-xl", "border", "border-stone-200/80", "bg-white", "p-3", "dark:border-gray-700", "dark:bg-gray-900", 3, "formGroup"], [1, "text-[11px]", "text-amber-700", "dark:text-amber-400"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0"], [1, "m-0", "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], [1, "m-0", "mt-0.5", "text-[11px]", "text-stone-500", "dark:text-stone-400"], ["formControlName", "active", 3, "change"], [1, "text-[11px]", "text-stone-500", "dark:text-stone-400"], [1, "m-0", "flex", "list-none", "flex-col", "gap-1.5", "p-0"], [1, "flex", "items-center", "justify-between", "gap-3", "rounded-lg", "border", "border-stone-200/70", "px-3", "py-2", "dark:border-gray-700"], [1, "min-w-0", "flex-1", 3, "change", "checked"], [1, "inline-flex", "min-w-0", "items-center", "gap-2"], [1, "truncate", "text-sm", "text-stone-800", "dark:text-stone-100"], [1, "inline-flex", "flex-shrink-0", "items-center", "gap-1", "rounded-full", "border", "border-blue-200", "bg-blue-50", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], ["type", "button", "mat-icon-button", "", 1, "!h-8", "!w-8", "!min-w-0", "flex-shrink-0", 3, "click", "matTooltip"], [1, "!h-4", "!w-4", "text-stone-600", "dark:text-stone-300"], [1, "!h-3", "!w-3", "!text-[12px]", "!leading-3"]], template: function DocumentVerificationTypeListComponent_Template(rf, ctx) {
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
      MatIconButton,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatOption,
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
      MatButtonModule,
      MatCheckboxModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatTooltipModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="flex flex-col gap-3">
        @if (documentTypes.controls.length === 0) {
            <p class="rounded-xl border border-dashed border-stone-300/80 px-4 py-6 text-center text-xs text-stone-500 dark:border-gray-700 dark:text-stone-400">
                {{ t('smartEnrollProjects.setup.documents.types.empty') }}
            </p>
        }

        @for (group of documentTypes.controls; track group; let i = $index) {
            @let countryValue = (asGroup(group).get('country')?.value || '');
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

                @if (!countryValue) {
                    <p class="text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.documents.types.pickCountryFirst') }}
                    </p>
                } @else if (isLoading(countryValue)) {
                    <div class="flex items-center gap-2 py-3 text-xs text-stone-500 dark:text-stone-400">
                        <mat-progress-spinner mode="indeterminate" diameter="18"></mat-progress-spinner>
                        <span>{{ t('smartEnrollProjects.setup.documents.types.loading') }}</span>
                    </div>
                } @else {
                    <div class="flex flex-col gap-3 border-t border-stone-200/80 pt-3 dark:border-gray-700">
                        @for (cfg of asArray(asGroup(group).get('configurations')).controls; track cfg) {
                            @let configCtrl = cfg;
                            @let category = (configCtrl.get('documentCategory')?.value || '');
                            @let templates = templatesFor(countryValue, category);
                            @let selected = selectedCount(configCtrl);

                            <div
                                class="flex flex-col gap-3 rounded-xl border border-stone-200/80 bg-white p-3 dark:border-gray-700 dark:bg-gray-900"
                                [formGroup]="asGroup(configCtrl)"
                            >
                                <div class="flex items-start justify-between gap-3">
                                    <div class="min-w-0">
                                        <p class="m-0 text-sm font-semibold text-stone-800 dark:text-stone-100">
                                            {{ t('smartEnrollProjects.setup.documents.category.' + category) }}
                                        </p>
                                        <p class="m-0 mt-0.5 text-[11px] text-stone-500 dark:text-stone-400">
                                            {{
                                                templates.length === 0
                                                    ? t('smartEnrollProjects.setup.documents.types.noTemplatesShort')
                                                    : t('smartEnrollProjects.setup.documents.types.selectedOfAvailable', {
                                                          selected: selected,
                                                          total: templates.length
                                                      })
                                            }}
                                        </p>
                                    </div>
                                    <mat-slide-toggle
                                        formControlName="active"
                                        (change)="onActiveToggleChange(configCtrl, $event.checked)"
                                    ></mat-slide-toggle>
                                </div>

                                @if (templates.length === 0) {
                                    <p class="text-[11px] text-stone-500 dark:text-stone-400">
                                        {{
                                            t('smartEnrollProjects.setup.documents.types.noTemplates', {
                                                category: t('smartEnrollProjects.setup.documents.category.' + category),
                                                country: countryValue
                                            })
                                        }}
                                    </p>
                                } @else {
                                    <ul class="m-0 flex list-none flex-col gap-1.5 p-0">
                                        @for (pt of templates; track pt._id) {
                                            <li
                                                class="flex items-center justify-between gap-3 rounded-lg border border-stone-200/70 px-3 py-2 dark:border-gray-700"
                                            >
                                                <mat-checkbox
                                                    [checked]="isTemplateSelected(configCtrl, pt._id)"
                                                    (change)="toggleTemplate(configCtrl, pt, $event.checked)"
                                                    class="min-w-0 flex-1"
                                                >
                                                    <span class="inline-flex min-w-0 items-center gap-2">
                                                        <span class="truncate text-sm text-stone-800 dark:text-stone-100">
                                                            {{ templateLabel(pt) }}
                                                        </span>
                                                        @if (isGlobalTemplate(pt)) {
                                                            <span
                                                                class="inline-flex flex-shrink-0 items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200"
                                                            >
                                                                <mat-icon class="!h-3 !w-3 !text-[12px] !leading-3">public</mat-icon>
                                                                {{ t('smartEnrollProjects.setup.documents.types.globalBadge') }}
                                                            </span>
                                                        }
                                                    </span>
                                                </mat-checkbox>
                                                <button
                                                    type="button"
                                                    mat-icon-button
                                                    class="!h-8 !w-8 !min-w-0 flex-shrink-0"
                                                    (click)="openPreview(pt)"
                                                    [matTooltip]="t('smartEnrollProjects.setup.documents.types.preview')"
                                                    [attr.aria-label]="t('smartEnrollProjects.setup.documents.types.preview')"
                                                >
                                                    <mat-icon class="!h-4 !w-4 text-stone-600 dark:text-stone-300">visibility</mat-icon>
                                                </button>
                                            </li>
                                        }
                                    </ul>
                                }
                            </div>
                        }
                    </div>

                    @if (activeCategories(asGroup(group)).length === 0) {
                        <p class="text-[11px] text-amber-700 dark:text-amber-400">
                            {{ t('smartEnrollProjects.setup.documents.types.activateHint') }}
                        </p>
                    }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentVerificationTypeListComponent, { className: "DocumentVerificationTypeListComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/documents/document-verification-type/document-verification-type-list.component.ts", lineNumber: 69 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/documents/documents.component.ts
var _c03 = ["localApiDialog"];
var _c13 = (a0) => ({ count: a0 });
var _forTrack03 = ($index, $item) => $item.value;
var _forTrack12 = ($index, $item) => $item._id;
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle-group", 19)(1, "mat-button-toggle", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-button-toggle", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-button-toggle", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.skip"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.required"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 20)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "mat-slide-toggle", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.business.toggle"), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "header", 7)(2, "h2", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SetupDocumentsComponent_ng_container_0_div_1_Conditional_1_Conditional_6_Template, 7, 3, "mat-button-toggle-group", 19)(7, SetupDocumentsComponent_ng_container_0_div_1_Conditional_1_Conditional_7_Template, 4, 1, "label", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.stepFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stepFormControlName === "businessVerification" ? t_r1("smartEnrollProjects.setup.documents.business.title") : t_r1("smartEnrollProjects.setup.documents.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stepFormControlName === "businessVerification" ? t_r1("smartEnrollProjects.setup.documents.business.subtitle") : t_r1("smartEnrollProjects.setup.documents.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.stepFormControlName === "document" ? 6 : ctx_r1.stepFormControlName === "businessVerification" ? 7 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.types.errors.atLeastOne"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.types.errors.duplicateCountries"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.types.errors.allMustBeValid"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.types.errors.emptyCountry"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, SetupDocumentsComponent_ng_container_0_div_1_Conditional_9_Conditional_1_Template, 2, 1, "span")(2, SetupDocumentsComponent_ng_container_0_div_1_Conditional_9_Conditional_2_Template, 2, 1, "span")(3, SetupDocumentsComponent_ng_container_0_div_1_Conditional_9_Conditional_3_Template, 2, 1, "span")(4, SetupDocumentsComponent_ng_container_0_div_1_Conditional_9_Conditional_4_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.documentTypesErrorKeys.includes("atLeastOneDocumentVerificationTypeRequired") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.documentTypesErrorKeys.includes("duplicateCountriesNotAllowed") ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.documentTypesErrorKeys.includes("allDocumentVerificationTypesMustBeValid") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.documentTypesErrorKeys.includes("emptyCountryValuesNotAllowed") ? 4 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "document-verification-type-list", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("documentTypes", ctx_r1.documentTypesFormArray)("target", ctx_r1.target);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_For_9_Template_button_click_0_listener() {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleVerificationMethod(m_r4.value));
    });
    \u0275\u0275elementStart(1, "mat-icon", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.isVerificationMethodSelected(m_r4.value) ? "border-2 border-stone-900 dark:border-stone-200" : "border border-stone-200 text-stone-700 dark:border-gray-700 dark:text-stone-200");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1(m_r4.labelKey));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.method.required"), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "section", 6)(2, "header", 7)(3, "h2", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 26);
    \u0275\u0275repeaterCreate(8, SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_For_9_Template, 5, 3, "button", 27, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Conditional_10_Template, 2, 1, "p", 28);
    \u0275\u0275elementStart(11, "div", 29)(12, "mat-icon", 30);
    \u0275\u0275text(13, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const methodsCtrl_r5 = ctx_r1.formGroup == null ? null : ctx_r1.formGroup.get("verificationMethods");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", ctx_r1.isNotRequired || !((methodsCtrl_r5 == null ? null : methodsCtrl_r5.dirty) && (methodsCtrl_r5 == null ? null : methodsCtrl_r5.errors == null ? null : methodsCtrl_r5.errors["required"])))("dark:border-gray-700", ctx_r1.isNotRequired || !((methodsCtrl_r5 == null ? null : methodsCtrl_r5.dirty) && (methodsCtrl_r5 == null ? null : methodsCtrl_r5.errors == null ? null : methodsCtrl_r5.errors["required"])))("border-red-500", !ctx_r1.isNotRequired && (methodsCtrl_r5 == null ? null : methodsCtrl_r5.dirty) && (methodsCtrl_r5 == null ? null : methodsCtrl_r5.errors == null ? null : methodsCtrl_r5.errors["required"]))("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.method.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.method.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.verificationMethods);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isNotRequired && (methodsCtrl_r5 == null ? null : methodsCtrl_r5.dirty) && (methodsCtrl_r5 == null ? null : methodsCtrl_r5.errors == null ? null : methodsCtrl_r5.errors["required"]) ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.method.help"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r6 = ctx.$implicit;
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("value", n_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r6 === 1 ? t_r1("smartEnrollProjects.setup.documents.attempts.one") : t_r1("smartEnrollProjects.setup.documents.attempts.many", \u0275\u0275pureFunction1(2, _c13, n_r6)), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.screening.requiresVerification"), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "mat-checkbox", 46);
    \u0275\u0275listener("change", function SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_For_2_Conditional_0_Template_mat_checkbox_change_1_listener() {
      \u0275\u0275restoreView(_r7);
      const endpoint_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleCriminalEndpoint(endpoint_r8.value));
    });
    \u0275\u0275elementStart(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 48);
    \u0275\u0275listener("click", function SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_For_2_Conditional_0_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.openLocalApiModal($event));
    });
    \u0275\u0275elementStart(5, "mat-icon", 49);
    \u0275\u0275text(6, "info");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const endpoint_r8 = \u0275\u0275nextContext().$implicit;
    const t_r1 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isEndpointSelected(endpoint_r8.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1(endpoint_r8.label), " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", t_r1("smartEnrollProjects.setup.documents.screening.localApiTooltip"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_For_2_Conditional_0_Template, 7, 3, "div", 45);
  }
  if (rf & 2) {
    const endpoint_r8 = ctx.$implicit;
    \u0275\u0275conditional(endpoint_r8.value === "local_api" ? 0 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 46);
    \u0275\u0275listener("change", function SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_For_5_Conditional_0_Template_mat_checkbox_change_0_listener() {
      \u0275\u0275restoreView(_r9);
      const endpoint_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleCriminalEndpoint(endpoint_r10.value));
    });
    \u0275\u0275elementStart(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const endpoint_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("checked", ctx_r1.isEndpointSelected(endpoint_r10.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(endpoint_r10.label);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_For_5_Conditional_0_Template, 3, 2, "mat-checkbox", 50);
  }
  if (rf & 2) {
    const endpoint_r10 = ctx.$implicit;
    \u0275\u0275conditional(endpoint_r10.value !== "local_api" ? 0 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275repeaterCreate(1, SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_For_2_Template, 1, 1, null, null, _forTrack03);
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275repeaterCreate(4, SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_For_5_Template, 1, 1, null, null, _forTrack03);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.criminalRecordsEndpoints);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.criminalRecordsEndpoints);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_0_Template, 2, 1, "p", 34);
    \u0275\u0275elementStart(1, "div", 35)(2, "div", 36);
    \u0275\u0275element(3, "mat-checkbox", 37);
    \u0275\u0275elementStart(4, "div", 38)(5, "mat-icon", 39);
    \u0275\u0275text(6, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42)(12, "div", 36);
    \u0275\u0275element(13, "mat-checkbox", 43);
    \u0275\u0275elementStart(14, "div", 38)(15, "mat-icon", 39);
    \u0275\u0275text(16, "security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 40);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 41);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Conditional_21_Template, 6, 0, "div", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((ctx_r1.formGroup == null ? null : ctx_r1.formGroup.errors == null ? null : ctx_r1.formGroup.errors["screeningRequiresVerification"]) ? 0 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.screening.informationVerification"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.screening.informationVerificationDescription"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.screening.criminalHistory"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.screening.criminalHistoryDescription"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.formGroup == null ? null : (tmp_10_0 = ctx_r1.formGroup.get("criminalHistoryVerification")) == null ? null : tmp_10_0.value) ? 21 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, SetupDocumentsComponent_ng_container_0_div_1_Conditional_1_Template, 8, 4, "section", 4);
    \u0275\u0275elementContainerStart(2, 5);
    \u0275\u0275elementStart(3, "section", 6)(4, "header", 7)(5, "h2", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, SetupDocumentsComponent_ng_container_0_div_1_Conditional_9_Template, 5, 4, "div", 10)(10, SetupDocumentsComponent_ng_container_0_div_1_Conditional_10_Template, 1, 3, "document-verification-type-list", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Template, 16, 14, "section", 12);
    \u0275\u0275elementStart(12, "section", 13)(13, "header", 14)(14, "div")(15, "h2", 8);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 9);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 15)(20, "mat-label");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-select", 16);
    \u0275\u0275repeaterCreate(23, SetupDocumentsComponent_ng_container_0_div_1_For_24_Template, 2, 4, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "section", 6)(26, "header", 14)(27, "div")(28, "h2", 8);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 9);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "mat-slide-toggle", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, SetupDocumentsComponent_ng_container_0_div_1_Conditional_33_Template, 22, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_29_0;
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.stepFormControlName !== "legalRepresentative" && ctx_r1.stepFormGroup ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.formGroup);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", ctx_r1.isNotRequired || !ctx_r1.documentTypesErrorKeys.length)("dark:border-gray-700", ctx_r1.isNotRequired || !ctx_r1.documentTypesErrorKeys.length)("border-red-500", !ctx_r1.isNotRequired && ctx_r1.documentTypesErrorKeys.length)("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.types.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.types.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isNotRequired && ctx_r1.documentTypesErrorKeys.length ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.documentTypesFormArray ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.stepFormControlName !== "businessVerification" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.attempts.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.attempts.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.attempts.limit"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.attemptOptions);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-stone-200", ctx_r1.isNotRequired || !(ctx_r1.formGroup == null ? null : ctx_r1.formGroup.errors == null ? null : ctx_r1.formGroup.errors["screeningRequiresVerification"]))("dark:border-gray-700", ctx_r1.isNotRequired || !(ctx_r1.formGroup == null ? null : ctx_r1.formGroup.errors == null ? null : ctx_r1.formGroup.errors["screeningRequiresVerification"]))("border-red-500", !ctx_r1.isNotRequired && (ctx_r1.formGroup == null ? null : ctx_r1.formGroup.errors == null ? null : ctx_r1.formGroup.errors["screeningRequiresVerification"]))("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.screening.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.screening.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isNotRequired && (ctx_r1.formGroup == null ? null : (tmp_29_0 = ctx_r1.formGroup.get("screening")) == null ? null : tmp_29_0.value) ? 33 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "mat-progress-spinner", 60);
    \u0275\u0275elementStart(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.localApi.loading"));
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.localApi.empty"), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_9_For_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r11.description);
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_9_For_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "mat-icon", 71);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.localApi.compatible"));
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_9_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "div", 66)(3, "mat-icon", 67);
    \u0275\u0275text(4, " public ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 68);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_9_For_11_Conditional_9_Template, 2, 1, "p", 69)(10, SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_9_For_11_Conditional_10_Template, 5, 1, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r11 = ctx.$implicit;
    \u0275\u0275property("ngClass", feature_r11.highlight ? "border-blue-300 bg-blue-50 dark:border-blue-800" : "border-stone-200 dark:border-gray-700");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", feature_r11.highlight ? "text-blue-600" : "text-stone-500");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r11.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", feature_r11.highlight ? "bg-blue-600 text-white" : "bg-stone-200 text-stone-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r11.country, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(feature_r11.description ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(feature_r11.highlight ? 10 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "p", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63)(4, "mat-icon", 30);
    \u0275\u0275text(5, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_9_Conditional_8_Template, 2, 1, "p", 61);
    \u0275\u0275elementStart(9, "div", 42);
    \u0275\u0275repeaterCreate(10, SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_9_For_11_Template, 11, 7, "div", 64, _forTrack12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.localApi.description"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.localApi.highlightNote"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.localApiFeatures.length ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.localApiFeatures);
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "h2", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 54)(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 55);
    \u0275\u0275template(8, SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_8_Template, 4, 1, "div", 56)(9, SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_9_Template, 12, 3, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 58)(11, "button", 59);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.localApi.title"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.loadingFeatures ? 8 : 9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.localApi.close"), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupDocumentsComponent_ng_container_0_div_1_Template, 34, 37, "div", 2)(2, SetupDocumentsComponent_ng_container_0_ng_template_2_Template, 13, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFormReady);
  }
}
var SetupDocumentsComponent = class _SetupDocumentsComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this.subForm = false;
    this.stepFormControlName = "document";
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this._dialog = inject(MatDialog);
    this._confirm = inject(FuseConfirmationService);
    this._setup = inject(SetupService);
    this._transloco = inject(TranslocoService);
    this.criminalRecordsEndpoints = [
      { value: "local_api", label: "smartEnrollProjects.setup.documents.screening.localApi" },
      { value: "world_api_interpol", label: "Interpol" },
      { value: "world_api_fbi", label: "FBI" },
      { value: "world_api_dea", label: "DEA" },
      { value: "world_api_europol", label: "Europol" },
      { value: "world_api_ofac", label: "OFAC" },
      { value: "world_api_onu", label: "ONU" }
    ];
    this.attemptOptions = [1, 2, 3, 4, 5];
    this.verificationMethods = [
      { value: "upload", labelKey: "smartEnrollProjects.setup.documents.method.upload", icon: "file_upload" },
      { value: "scan", labelKey: "smartEnrollProjects.setup.documents.method.scan", icon: "photo_camera" }
    ];
    this.localApiFeatures = [];
    this.loadingFeatures = false;
    this._previousDocumentStepValue = null;
  }
  ngOnInit() {
    if (!this.isFormReady)
      return;
    this._initDocumentStepSubscription();
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
    return !this.loading && !!this.form && !!this.formGroup && !!this.stepFormGroup && !!this.documentTypesFormArray;
  }
  get verificationMethodsValue() {
    return this.formGroup?.get("verificationMethods")?.value || [];
  }
  get criminalEndpointsValue() {
    return this.formGroup?.get("criminalHistoryVerificationEndpoints")?.value || [];
  }
  /** Validator key names currently attached to the `documentTypes` FormArray. */
  get documentTypesErrorKeys() {
    const errs = this.documentTypesFormArray?.errors;
    if (!errs)
      return [];
    return Object.keys(errs).filter((k) => errs[k] === true);
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
    ctrl.markAsTouched();
    this._cdr.markForCheck();
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
    this._cdr.markForCheck();
  }
  openLocalApiModal(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.localApiDialog)
      return;
    this._fetchBackgroundCheckFeatures();
    this._dialog.open(this.localApiDialog, { width: "640px", maxHeight: "90vh", autoFocus: false });
  }
  _initDocumentStepSubscription() {
    if (this.stepFormControlName !== "document")
      return;
    const documentControl = this.stepFormGroup?.get("document");
    if (!documentControl)
      return;
    this._previousDocumentStepValue = documentControl.value;
    documentControl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((value) => {
      if (value === "skip" && this._previousDocumentStepValue !== "skip") {
        this._confirmSkipDocumentVerification(documentControl);
        return;
      }
      this._previousDocumentStepValue = value;
    });
  }
  _confirmSkipDocumentVerification(documentControl) {
    const t = (key) => this._transloco.translate(key) ?? key;
    const ref = this._confirm.open({
      title: t("smartEnrollProjects.setup.documents.confirm_skip_title"),
      message: t("smartEnrollProjects.setup.documents.confirm_skip_message"),
      actions: {
        confirm: {
          show: true,
          label: t("smartEnrollProjects.setup.documents.confirm_skip_yes"),
          color: "warn"
        },
        cancel: { show: true, label: t("smartEnrollProjects.setup.documents.confirm_skip_back") }
      }
    });
    ref.afterClosed().subscribe((result) => {
      if (result === "confirmed") {
        this._previousDocumentStepValue = "skip";
      } else {
        documentControl?.setValue(this._previousDocumentStepValue, { emitEvent: false });
      }
      this._cdr.markForCheck();
    });
  }
  _fetchBackgroundCheckFeatures() {
    const cacheKey = "backgroundCheckEndpoints";
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        this.localApiFeatures = JSON.parse(cached);
        this._processLocalApiFeatures();
        this._cdr.markForCheck();
        return;
      }
    } catch {
    }
    this.loadingFeatures = true;
    this._cdr.markForCheck();
    this._setup.getAppFeatures({ where_baseCategory: "background_check" }).subscribe({
      next: (response) => {
        this.localApiFeatures = response?.data || [];
        try {
          localStorage.setItem(cacheKey, JSON.stringify(this.localApiFeatures));
        } catch {
        }
        this._processLocalApiFeatures();
        this.loadingFeatures = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.loadingFeatures = false;
        this._cdr.markForCheck();
      }
    });
  }
  _processLocalApiFeatures() {
    const selected = this.documentTypesFormArray?.value?.map((doc) => doc?.country) || [];
    this.localApiFeatures = this.localApiFeatures.map((f) => __spreadProps(__spreadValues({}, f), { highlight: selected.includes(f.country) })).sort((a, b) => (a.country || "").localeCompare(b.country || ""));
  }
  static {
    this.\u0275fac = function SetupDocumentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupDocumentsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupDocumentsComponent, selectors: [["setup-documents"]], viewQuery: function SetupDocumentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.localApiDialog = _t.first);
      }
    }, inputs: { form: "form", formGroup: "formGroup", loading: "loading", saving: "saving", subForm: "subForm", stepFormControlName: "stepFormControlName" }, decls: 1, vars: 0, consts: [["localApiDialog", ""], [4, "transloco"], ["class", "flex w-full flex-col gap-6", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [3, "formGroup"], [1, "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mb-3", "flex", "flex-col", "gap-1", "text-sm", "text-red-600", "dark:text-red-400"], [3, "form", "documentTypes", "target"], [1, "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40", 3, "border-stone-200", "dark:border-gray-700", "border-red-500", "opacity-50", "pointer-events-none"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mb-4", "flex", "items-start", "justify-between", "gap-4"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[12rem]"], ["formControlName", "attemptLimit", "required", ""], [3, "value"], ["formControlName", "screening"], ["formControlName", "document", 1, "!rounded-xl"], [1, "flex", "items-center", "justify-between", "gap-4"], ["value", "skip"], ["value", "optional"], ["value", "mandatory"], [1, "text-sm", "text-stone-700", "dark:text-stone-200"], ["formControlName", "businessVerification"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], ["type", "button", 1, "flex", "flex-col", "items-start", "gap-2", "rounded-2xl", "bg-white", "px-4", "py-3", "text-left", "text-sm", "text-stone-800", "transition-colors", "dark:bg-gray-900/40", "dark:text-stone-100", 3, "ngClass"], [1, "mt-3", "text-sm", "text-red-600", "dark:text-red-400"], [1, "mt-4", "flex", "items-start", "gap-2", "rounded-xl", "bg-stone-100", "p-3", "text-xs", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], [1, "!h-4", "!w-4"], ["type", "button", 1, "flex", "flex-col", "items-start", "gap-2", "rounded-2xl", "bg-white", "px-4", "py-3", "text-left", "text-sm", "text-stone-800", "transition-colors", "dark:bg-gray-900/40", "dark:text-stone-100", 3, "click", "ngClass"], [1, "!h-5", "!w-5", "text-stone-700", "dark:text-stone-300"], [1, "font-medium"], [1, "mb-3", "text-sm", "text-red-600", "dark:text-red-400"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], [1, "relative", "flex", "flex-col", "gap-2", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "p-4", "dark:border-gray-700", "dark:bg-gray-900/60"], ["formControlName", "informationVerification", 1, "!absolute", "!right-3", "!top-3"], [1, "flex", "items-center", "gap-2", "pr-10"], [1, "!h-5", "!w-5", "text-stone-700", "dark:text-stone-200"], [1, "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-3"], ["formControlName", "criminalHistoryVerification", 1, "!absolute", "!right-3", "!top-3"], [1, "grid", "grid-cols-1", "gap-x-4", "gap-y-2", "pl-2", "sm:grid-cols-2"], [1, "flex", "items-center", "gap-2", "rounded-lg", "border", "border-blue-200", "bg-blue-50", "p-2", "dark:border-blue-900", "dark:bg-blue-950/40"], [3, "change", "checked"], [1, "text-sm", "font-medium", "text-stone-800", "dark:text-stone-100"], ["type", "button", "mat-icon-button", "", 1, "!ml-auto", "!h-6", "!w-6", "!min-w-0", 3, "click", "matTooltip"], [1, "!h-4", "!w-4", "text-blue-600"], [3, "checked"], [1, "flex", "max-h-[90vh]", "flex-col", "overflow-hidden", "rounded-lg", "bg-white", "dark:bg-gray-900"], [1, "flex", "items-center", "justify-between", "gap-4", "border-b", "border-stone-200", "bg-stone-50", "p-5", "dark:border-gray-700", "dark:bg-gray-900/60"], [1, "m-0", "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], ["mat-icon-button", "", "mat-dialog-close", ""], [1, "flex-1", "overflow-y-auto", "p-5"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-3", "py-10"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "justify-end", "gap-2", "border-t", "border-stone-200", "p-4", "dark:border-gray-700"], ["mat-flat-button", "", "color", "primary", "mat-dialog-close", "", 1, "rounded-xl"], ["mode", "indeterminate", "diameter", "36"], [1, "text-sm", "text-stone-500"], [1, "m-0", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "flex", "items-center", "gap-2", "rounded-lg", "border", "border-blue-200", "bg-blue-50", "p-3", "text-sm", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], [1, "flex", "flex-col", "gap-2", "rounded-xl", "border", "p-4", "transition-shadow", "hover:shadow-sm", 3, "ngClass"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-2"], [1, "!h-5", "!w-5", 3, "ngClass"], [1, "rounded-full", "px-2", "py-0.5", "text-[11px]", "font-bold", "uppercase", "tracking-wide", 3, "ngClass"], [1, "m-0", "text-xs", "text-stone-600", "dark:text-stone-300"], [1, "flex", "items-center", "gap-1", "text-[11px]", "font-semibold", "text-emerald-700", "dark:text-emerald-400"], [1, "!h-3.5", "!w-3.5"]], template: function SetupDocumentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupDocumentsComponent_ng_container_0_Template, 4, 1, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgIf,
      ReactiveFormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatCheckboxModule,
      MatCheckbox,
      MatChipsModule,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRadioModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSlideToggleModule,
      MatSlideToggle,
      MatTooltipModule,
      MatTooltip,
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
      MatCheckboxModule,
      MatChipsModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatTooltipModule,
      TranslocoModule,
      DocumentVerificationTypeListComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6">
        <!-- 1. Step requirement card (hidden for legal-representative sub-flow) -->
        @if (stepFormControlName !== 'legalRepresentative' && stepFormGroup) {
            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [formGroup]="stepFormGroup"
            >
                <header class="mb-4">
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{
                            stepFormControlName === 'businessVerification'
                                ? t('smartEnrollProjects.setup.documents.business.title')
                                : t('smartEnrollProjects.setup.documents.title')
                        }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{
                            stepFormControlName === 'businessVerification'
                                ? t('smartEnrollProjects.setup.documents.business.subtitle')
                                : t('smartEnrollProjects.setup.documents.subtitle')
                        }}
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
        }

        <ng-container [formGroup]="formGroup">
            <!-- 2. Accepted document types -->
            <section
                class="rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
                [class.border-stone-200]="isNotRequired || !documentTypesErrorKeys.length"
                [class.dark:border-gray-700]="isNotRequired || !documentTypesErrorKeys.length"
                [class.border-red-500]="!isNotRequired && documentTypesErrorKeys.length"
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

                @if (!isNotRequired && documentTypesErrorKeys.length) {
                    <div class="mb-3 flex flex-col gap-1 text-sm text-red-600 dark:text-red-400">
                        @if (documentTypesErrorKeys.includes('atLeastOneDocumentVerificationTypeRequired')) {
                            <span>{{ t('smartEnrollProjects.setup.documents.types.errors.atLeastOne') }}</span>
                        }
                        @if (documentTypesErrorKeys.includes('duplicateCountriesNotAllowed')) {
                            <span>{{ t('smartEnrollProjects.setup.documents.types.errors.duplicateCountries') }}</span>
                        }
                        @if (documentTypesErrorKeys.includes('allDocumentVerificationTypesMustBeValid')) {
                            <span>{{ t('smartEnrollProjects.setup.documents.types.errors.allMustBeValid') }}</span>
                        }
                        @if (documentTypesErrorKeys.includes('emptyCountryValuesNotAllowed')) {
                            <span>{{ t('smartEnrollProjects.setup.documents.types.errors.emptyCountry') }}</span>
                        }
                    </div>
                }

                @if (documentTypesFormArray) {
                    <document-verification-type-list
                        [form]="form"
                        [documentTypes]="documentTypesFormArray"
                        [target]="target"
                    ></document-verification-type-list>
                }
            </section>

            <!-- 3. Verification methods (personal/legal representative only \u2014 not business verification) -->
            @if (stepFormControlName !== 'businessVerification') {
                @let methodsCtrl = formGroup?.get('verificationMethods');
                <section
                    class="rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
                    [class.border-stone-200]="isNotRequired || !(methodsCtrl?.dirty && methodsCtrl?.errors?.['required'])"
                    [class.dark:border-gray-700]="isNotRequired || !(methodsCtrl?.dirty && methodsCtrl?.errors?.['required'])"
                    [class.border-red-500]="!isNotRequired && methodsCtrl?.dirty && methodsCtrl?.errors?.['required']"
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

                    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        @for (m of verificationMethods; track m.value) {
                            <button
                                type="button"
                                (click)="toggleVerificationMethod(m.value)"
                                class="flex flex-col items-start gap-2 rounded-2xl bg-white px-4 py-3 text-left text-sm text-stone-800 transition-colors dark:bg-gray-900/40 dark:text-stone-100"
                                [ngClass]="
                                    isVerificationMethodSelected(m.value)
                                        ? 'border-2 border-stone-900 dark:border-stone-200'
                                        : 'border border-stone-200 text-stone-700 dark:border-gray-700 dark:text-stone-200'
                                "
                            >
                                <mat-icon class="!h-5 !w-5 text-stone-700 dark:text-stone-300">{{ m.icon }}</mat-icon>
                                <span class="font-medium">{{ t(m.labelKey) }}</span>
                            </button>
                        }
                    </div>

                    @if (!isNotRequired && methodsCtrl?.dirty && methodsCtrl?.errors?.['required']) {
                        <p class="mt-3 text-sm text-red-600 dark:text-red-400">
                            {{ t('smartEnrollProjects.setup.documents.method.required') }}
                        </p>
                    }

                    <div
                        class="mt-4 flex items-start gap-2 rounded-xl bg-stone-100 p-3 text-xs text-stone-600 dark:bg-gray-800 dark:text-stone-300"
                    >
                        <mat-icon class="!h-4 !w-4">info</mat-icon>
                        <span>{{ t('smartEnrollProjects.setup.documents.method.help') }}</span>
                    </div>
                </section>
            }

            <!-- 4. Attempt limit -->
            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                            {{ t('smartEnrollProjects.setup.documents.attempts.title') }}
                        </h2>
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                            {{ t('smartEnrollProjects.setup.documents.attempts.subtitle') }}
                        </p>
                    </div>
                    <mat-form-field appearance="outline" subscriptSizing="dynamic" class="min-w-[12rem]">
                        <mat-label>{{ t('smartEnrollProjects.setup.documents.attempts.limit') }}</mat-label>
                        <mat-select formControlName="attemptLimit" required>
                            @for (n of attemptOptions; track n) {
                                <mat-option [value]="n">
                                    {{
                                        n === 1
                                            ? t('smartEnrollProjects.setup.documents.attempts.one')
                                            : t('smartEnrollProjects.setup.documents.attempts.many', { count: n })
                                    }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </header>
            </section>

            <!-- 5. Database screening -->
            <section
                class="rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
                [class.border-stone-200]="isNotRequired || !formGroup?.errors?.['screeningRequiresVerification']"
                [class.dark:border-gray-700]="isNotRequired || !formGroup?.errors?.['screeningRequiresVerification']"
                [class.border-red-500]="!isNotRequired && formGroup?.errors?.['screeningRequiresVerification']"
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

                @if (!isNotRequired && formGroup?.get('screening')?.value) {
                    @if (formGroup?.errors?.['screeningRequiresVerification']) {
                        <p class="mb-3 text-sm text-red-600 dark:text-red-400">
                            {{ t('smartEnrollProjects.setup.documents.screening.requiresVerification') }}
                        </p>
                    }

                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <!-- Information verification card -->
                        <div
                            class="relative flex flex-col gap-2 rounded-xl border border-stone-200 bg-stone-50 p-4 dark:border-gray-700 dark:bg-gray-900/60"
                        >
                            <mat-checkbox formControlName="informationVerification" class="!absolute !right-3 !top-3"></mat-checkbox>
                            <div class="flex items-center gap-2 pr-10">
                                <mat-icon class="!h-5 !w-5 text-stone-700 dark:text-stone-200">account_balance</mat-icon>
                                <span class="text-sm font-semibold text-stone-800 dark:text-stone-100">
                                    {{ t('smartEnrollProjects.setup.documents.screening.informationVerification') }}
                                </span>
                            </div>
                            <p class="text-xs text-stone-500 dark:text-stone-400">
                                {{ t('smartEnrollProjects.setup.documents.screening.informationVerificationDescription') }}
                            </p>
                        </div>

                        <!-- Criminal records card + endpoints -->
                        <div class="flex flex-col gap-3">
                            <div
                                class="relative flex flex-col gap-2 rounded-xl border border-stone-200 bg-stone-50 p-4 dark:border-gray-700 dark:bg-gray-900/60"
                            >
                                <mat-checkbox formControlName="criminalHistoryVerification" class="!absolute !right-3 !top-3"></mat-checkbox>
                                <div class="flex items-center gap-2 pr-10">
                                    <mat-icon class="!h-5 !w-5 text-stone-700 dark:text-stone-200">security</mat-icon>
                                    <span class="text-sm font-semibold text-stone-800 dark:text-stone-100">
                                        {{ t('smartEnrollProjects.setup.documents.screening.criminalHistory') }}
                                    </span>
                                </div>
                                <p class="text-xs text-stone-500 dark:text-stone-400">
                                    {{ t('smartEnrollProjects.setup.documents.screening.criminalHistoryDescription') }}
                                </p>
                            </div>

                            @if (formGroup?.get('criminalHistoryVerification')?.value) {
                                <div class="flex flex-col gap-3">
                                    @for (endpoint of criminalRecordsEndpoints; track endpoint.value) {
                                        @if (endpoint.value === 'local_api') {
                                            <div
                                                class="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 p-2 dark:border-blue-900 dark:bg-blue-950/40"
                                            >
                                                <mat-checkbox
                                                    [checked]="isEndpointSelected(endpoint.value)"
                                                    (change)="toggleCriminalEndpoint(endpoint.value)"
                                                >
                                                    <span class="text-sm font-medium text-stone-800 dark:text-stone-100">
                                                        {{ t(endpoint.label) }}
                                                    </span>
                                                </mat-checkbox>
                                                <button
                                                    type="button"
                                                    mat-icon-button
                                                    class="!ml-auto !h-6 !w-6 !min-w-0"
                                                    (click)="openLocalApiModal($event)"
                                                    [matTooltip]="t('smartEnrollProjects.setup.documents.screening.localApiTooltip')"
                                                >
                                                    <mat-icon class="!h-4 !w-4 text-blue-600">info</mat-icon>
                                                </button>
                                            </div>
                                        }
                                    }
                                    <div class="grid grid-cols-1 gap-x-4 gap-y-2 pl-2 sm:grid-cols-2">
                                        @for (endpoint of criminalRecordsEndpoints; track endpoint.value) {
                                            @if (endpoint.value !== 'local_api') {
                                                <mat-checkbox
                                                    [checked]="isEndpointSelected(endpoint.value)"
                                                    (change)="toggleCriminalEndpoint(endpoint.value)"
                                                >
                                                    <span class="text-sm text-stone-700 dark:text-stone-200">{{ endpoint.label }}</span>
                                                </mat-checkbox>
                                            }
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </section>
        </ng-container>
    </div>

    <!-- Local background-check feature modal -->
    <ng-template #localApiDialog>
        <div class="flex max-h-[90vh] flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-900">
            <div class="flex items-center justify-between gap-4 border-b border-stone-200 bg-stone-50 p-5 dark:border-gray-700 dark:bg-gray-900/60">
                <h2 class="m-0 text-lg font-semibold text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.documents.localApi.title') }}
                </h2>
                <button mat-icon-button mat-dialog-close>
                    <mat-icon>close</mat-icon>
                </button>
            </div>

            <div class="flex-1 overflow-y-auto p-5">
                @if (loadingFeatures) {
                    <div class="flex flex-col items-center justify-center gap-3 py-10">
                        <mat-progress-spinner mode="indeterminate" diameter="36"></mat-progress-spinner>
                        <span class="text-sm text-stone-500">{{ t('smartEnrollProjects.setup.documents.localApi.loading') }}</span>
                    </div>
                } @else {
                    <div class="flex flex-col gap-4">
                        <p class="m-0 text-sm text-stone-600 dark:text-stone-300">
                            {{ t('smartEnrollProjects.setup.documents.localApi.description') }}
                        </p>
                        <div
                            class="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200"
                        >
                            <mat-icon class="!h-4 !w-4">lightbulb</mat-icon>
                            <span>{{ t('smartEnrollProjects.setup.documents.localApi.highlightNote') }}</span>
                        </div>

                        @if (!localApiFeatures.length) {
                            <p class="text-sm text-stone-500">
                                {{ t('smartEnrollProjects.setup.documents.localApi.empty') }}
                            </p>
                        }

                        <div class="flex flex-col gap-3">
                            @for (feature of localApiFeatures; track feature._id) {
                                <div
                                    class="flex flex-col gap-2 rounded-xl border p-4 transition-shadow hover:shadow-sm"
                                    [ngClass]="feature.highlight
                                        ? 'border-blue-300 bg-blue-50 dark:border-blue-800'
                                        : 'border-stone-200 dark:border-gray-700'"
                                >
                                    <div class="flex items-center justify-between gap-3">
                                        <div class="flex items-center gap-2">
                                            <mat-icon
                                                class="!h-5 !w-5"
                                                [ngClass]="feature.highlight ? 'text-blue-600' : 'text-stone-500'"
                                            >
                                                public
                                            </mat-icon>
                                            <span class="text-sm font-semibold text-stone-800 dark:text-stone-100">{{ feature.name }}</span>
                                        </div>
                                        <span
                                            class="rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide"
                                            [ngClass]="feature.highlight ? 'bg-blue-600 text-white' : 'bg-stone-200 text-stone-600'"
                                        >
                                            {{ feature.country }}
                                        </span>
                                    </div>
                                    @if (feature.description) {
                                        <p class="m-0 text-xs text-stone-600 dark:text-stone-300">{{ feature.description }}</p>
                                    }
                                    @if (feature.highlight) {
                                        <div class="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                                            <mat-icon class="!h-3.5 !w-3.5">check_circle</mat-icon>
                                            <span>{{ t('smartEnrollProjects.setup.documents.localApi.compatible') }}</span>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>

            <div class="flex justify-end gap-2 border-t border-stone-200 p-4 dark:border-gray-700">
                <button mat-flat-button color="primary" mat-dialog-close class="rounded-xl">
                    {{ t('smartEnrollProjects.setup.documents.localApi.close') }}
                </button>
            </div>
        </div>
    </ng-template>
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
  }], localApiDialog: [{
    type: ViewChild,
    args: ["localApiDialog"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupDocumentsComponent, { className: "SetupDocumentsComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/documents/documents.component.ts", lineNumber: 79 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/integrations/integrations.component.ts
var _c04 = (a0) => ({ url: a0 });
var _forTrack04 = ($index, $item) => $item._id;
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon", 17);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const redirectCtrl_r2 = \u0275\u0275readContextLet(1);
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (redirectCtrl_r2 == null ? null : redirectCtrl_r2.invalid) && (redirectCtrl_r2 == null ? null : redirectCtrl_r2.touched) ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200" : "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200");
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", t_r3("smartEnrollProjects.setup.integrations.redirect.exampleUrl", \u0275\u0275pureFunction1(2, _c04, ctx_r3.exampleRedirectUrl)), \u0275\u0275sanitizeHtml);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.redirect.required"), " ");
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.redirect.invalid"), " ");
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275template(1, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Conditional_1_Template, 1, 1)(2, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const redirectCtrl_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275conditional((redirectCtrl_r2 == null ? null : redirectCtrl_r2.hasError("required")) ? 1 : (redirectCtrl_r2 == null ? null : redirectCtrl_r2.hasError("pattern")) ? 2 : -1);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r5 = ctx.$implicit;
    \u0275\u0275property("value", w_r5._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r5.name || w_r5._id);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon", 17);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_40_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openWebhookSettings());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.noWebhooksMessage"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.createWebhook"), " ");
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.apiUrlRequired"), " ");
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.invalidUrl"), " ");
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275template(1, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Conditional_1_Template, 1, 1)(2, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const apiUrlCtrl_r8 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance();
    \u0275\u0275conditional((apiUrlCtrl_r8 == null ? null : apiUrlCtrl_r8.hasError("required")) ? 1 : (apiUrlCtrl_r8 == null ? null : apiUrlCtrl_r8.hasError("pattern")) ? 2 : -1);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 39);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-form-field", 6)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Template, 3, 1, "p", 30);
    \u0275\u0275elementStart(6, "p", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "mat-form-field", 32)(10, "mat-label");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 33)(13, "mat-option", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "mat-form-field", 36)(18, "mat-label");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 38);
    \u0275\u0275listener("click", function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.callTestApi());
    });
    \u0275\u0275template(22, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_22_Template, 1, 0, "mat-spinner", 39);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 40)(25, "div", 41)(26, "p", 42);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "pre", 43);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 41)(32, "p", 42);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(34);
    \u0275\u0275elementStart(35, "pre", 44);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "json");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    \u0275\u0275nextContext();
    const apiUrlCtrl_r8 = \u0275\u0275readContextLet(3);
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.apiUrl"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((apiUrlCtrl_r8 == null ? null : apiUrlCtrl_r8.invalid) && (apiUrlCtrl_r8 == null ? null : apiUrlCtrl_r8.touched) ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.testApiDescription"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.testType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.testValue"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !(apiUrlCtrl_r8 == null ? null : apiUrlCtrl_r8.value) || !(ctx_r3.integrationsFormGroup == null ? null : (tmp_14_0 = ctx_r3.integrationsFormGroup.get("apiTestType")) == null ? null : tmp_14_0.value) || !(ctx_r3.integrationsFormGroup == null ? null : (tmp_14_0 = ctx_r3.integrationsFormGroup.get("apiTestValue")) == null ? null : tmp_14_0.value) || ctx_r3.sendingTestApi);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.sendingTestApi ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.test"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.expectedResponse"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 15, ctx_r3.expectedResponse));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.receivedResponse"), " ");
    const hasError_r9 = (ctx_r3.receivedResponse == null ? null : ctx_r3.receivedResponse.error) || (ctx_r3.receivedResponse == null ? null : ctx_r3.receivedResponse.ok) === false;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", hasError_r9 ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200" : "border-stone-200 bg-stone-100 text-stone-800 dark:border-gray-700 dark:bg-gray-800 dark:text-stone-100");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 17, ctx_r3.receivedResponse));
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275declareLet(1)(2)(3);
    \u0275\u0275elementStart(4, "section", 3)(5, "header")(6, "h2", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "mat-label");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_14_Template, 4, 4, "div", 8)(15, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Template, 3, 1, "p", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "section", 10)(17, "header")(18, "h2", 4);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 5);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 11)(23, "mat-form-field", 12)(24, "mat-label");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-select", 13)(27, "mat-option", 14);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(29, SetupIntegrationsComponent_ng_container_0_div_1_For_30_Template, 2, 2, "mat-option", 14, _forTrack04);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_31_Template, 1, 0, "mat-spinner", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 16);
    \u0275\u0275listener("click", function SetupIntegrationsComponent_ng_container_0_div_1_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.refreshWebhooks());
    });
    \u0275\u0275elementStart(33, "mat-icon", 17);
    \u0275\u0275text(34, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 18);
    \u0275\u0275listener("click", function SetupIntegrationsComponent_ng_container_0_div_1_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openWebhookSettings());
    });
    \u0275\u0275elementStart(37, "mat-icon", 17);
    \u0275\u0275text(38, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_40_Template, 7, 2, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "section", 3)(42, "header")(43, "h2", 4);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 5);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "mat-radio-group", 20)(48, "mat-radio-button", 21);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-radio-button", 22);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 23)(53, "mat-icon", 17);
    \u0275\u0275text(54, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Template, 38, 19, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    const redirectCtrl_r10 = \u0275\u0275storeLet(ctx_r3.integrationsFormGroup == null ? null : ctx_r3.integrationsFormGroup.get("redirectUrl"));
    const sourceCtrl_r11 = ctx_r3.integrationsFormGroup == null ? null : ctx_r3.integrationsFormGroup.get("source");
    \u0275\u0275advance(2);
    \u0275\u0275storeLet(ctx_r3.integrationsFormGroup == null ? null : ctx_r3.integrationsFormGroup.get("apiUrl"));
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", !((redirectCtrl_r10 == null ? null : redirectCtrl_r10.invalid) && (redirectCtrl_r10 == null ? null : redirectCtrl_r10.touched)))("dark:border-gray-700", !((redirectCtrl_r10 == null ? null : redirectCtrl_r10.invalid) && (redirectCtrl_r10 == null ? null : redirectCtrl_r10.touched)))("border-red-500", (redirectCtrl_r10 == null ? null : redirectCtrl_r10.invalid) && (redirectCtrl_r10 == null ? null : redirectCtrl_r10.touched));
    \u0275\u0275property("formGroup", ctx_r3.integrationsFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.redirect.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.redirect.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.redirect.url"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((redirectCtrl_r10 == null ? null : redirectCtrl_r10.value) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((redirectCtrl_r10 == null ? null : redirectCtrl_r10.invalid) && (redirectCtrl_r10 == null ? null : redirectCtrl_r10.touched) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.integrationsFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.webhook.select"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.webhook.none"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.webhooks);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.refreshingWebhooks ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.refreshingWebhooks);
    \u0275\u0275advance();
    \u0275\u0275classProp("animate-spin", ctx_r3.refreshingWebhooks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.refresh"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.manage"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.refreshingWebhooks && ctx_r3.webhooks.length === 0 ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", !(sourceCtrl_r11 == null ? null : sourceCtrl_r11.errors))("dark:border-gray-700", !(sourceCtrl_r11 == null ? null : sourceCtrl_r11.errors))("border-red-500", sourceCtrl_r11 == null ? null : sourceCtrl_r11.errors);
    \u0275\u0275property("formGroup", ctx_r3.integrationsFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.none"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.api"));
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", t_r3("smartEnrollProjects.setup.integrations.source.help"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional((sourceCtrl_r11 == null ? null : sourceCtrl_r11.value) === "API" ? 56 : -1);
  }
}
function SetupIntegrationsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupIntegrationsComponent_ng_container_0_div_1_Template, 57, 40, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isFormReady);
  }
}
var SetupIntegrationsComponent = class _SetupIntegrationsComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._setup = inject(SetupService);
    this._transloco = inject(TranslocoService);
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
      this._snack.open(this._transloco.translate("smartEnrollProjects.setup.integrations.source.missingTestInputs"), this._transloco.translate("close"), { duration: 3e3 });
      return;
    }
    if (!apiUrl || !STRICT_URL_PATTERN.test(apiUrl)) {
      this._snack.open(this._transloco.translate("smartEnrollProjects.setup.integrations.source.invalidTestUrl"), this._transloco.translate("close"), { duration: 3e3 });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupIntegrationsComponent, selectors: [["setup-integrations"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6"], [1, "flex", "flex-col", "gap-4", "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40", 3, "formGroup"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "type", "url", "formControlName", "redirectUrl", "placeholder", "https://", "required", ""], [1, "flex", "items-start", "gap-2", "rounded-xl", "border", "p-3", "text-sm", 3, "ngClass"], [1, "text-sm", "text-red-600", "dark:text-red-400"], [1, "flex", "flex-col", "gap-4", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [1, "flex", "flex-wrap", "items-start", "gap-3"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[18rem]", "flex-1"], ["formControlName", "webhook"], [3, "value"], ["matSuffix", "", "diameter", "16"], ["mat-stroked-button", "", "type", "button", 1, "!h-14", "rounded-xl", 3, "click", "disabled"], [1, "!h-4", "!w-4"], ["mat-stroked-button", "", "type", "button", 1, "!h-14", "rounded-xl", 3, "click"], [1, "flex", "items-start", "gap-2", "rounded-xl", "border", "border-blue-200", "bg-blue-50", "p-3", "text-sm", "text-blue-700", "dark:border-blue-900", "dark:text-blue-200"], ["formControlName", "source", 1, "flex", "flex-wrap", "gap-4"], ["value", "NONE"], ["value", "API"], [1, "flex", "items-start", "gap-2", "rounded-xl", "bg-stone-100", "p-3", "text-xs", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], [1, "flex-1", 3, "innerHTML"], [1, "flex", "flex-col", "gap-4"], [1, "break-all", 3, "innerHTML"], [1, "flex-1"], ["type", "button", 1, "ml-1", "font-semibold", "underline", "underline-offset-2", "hover:text-blue-800", "dark:hover:text-blue-100", 3, "click"], ["matInput", "", "type", "url", "formControlName", "apiUrl", "placeholder", "https://", "required", ""], [1, "-mt-2", "text-sm", "text-red-600", "dark:text-red-400"], [1, "m-0", "text-xs", "text-stone-500", "dark:text-stone-400"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[10rem]", "flex-1"], ["formControlName", "apiTestType"], ["value", "email"], ["value", "phone"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[14rem]", "flex-1"], ["matInput", "", "formControlName", "apiTestValue"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "!h-14", "rounded-xl", 3, "click", "disabled"], ["diameter", "16", 1, "mr-2", "inline-block"], [1, "grid", "grid-cols-1", "gap-3", "md:grid-cols-2"], [1, "flex", "flex-col", "gap-2"], [1, "m-0", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "overflow-auto", "rounded-xl", "bg-stone-100", "px-3", "py-2", "text-xs", "text-stone-800", "dark:bg-gray-800", "dark:text-stone-100"], [1, "overflow-auto", "rounded-xl", "border", "px-3", "py-2", "text-xs", 3, "ngClass"]], template: function SetupIntegrationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupIntegrationsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgIf,
      JsonPipe,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
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
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6">
        @let redirectCtrl = integrationsFormGroup?.get('redirectUrl');
        @let sourceCtrl = integrationsFormGroup?.get('source');
        @let apiUrlCtrl = integrationsFormGroup?.get('apiUrl');

        <!-- 1. Redirect URL -->
        <section
            class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
            [class.border-stone-200]="!(redirectCtrl?.invalid && redirectCtrl?.touched)"
            [class.dark:border-gray-700]="!(redirectCtrl?.invalid && redirectCtrl?.touched)"
            [class.border-red-500]="redirectCtrl?.invalid && redirectCtrl?.touched"
            [formGroup]="integrationsFormGroup!"
        >
            <header>
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.integrations.redirect.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.integrations.redirect.subtitle') }}
                </p>
            </header>

            <mat-form-field appearance="outline" subscriptSizing="dynamic">
                <mat-label>{{ t('smartEnrollProjects.setup.integrations.redirect.url') }}</mat-label>
                <input matInput type="url" formControlName="redirectUrl" placeholder="https://" required />
            </mat-form-field>

            @if (redirectCtrl?.value) {
                <div
                    class="flex items-start gap-2 rounded-xl border p-3 text-sm"
                    [ngClass]="
                        (redirectCtrl?.invalid && redirectCtrl?.touched)
                            ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200'
                            : 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200'
                    "
                >
                    <mat-icon class="!h-4 !w-4">info</mat-icon>
                    <span
                        class="break-all"
                        [innerHTML]="t('smartEnrollProjects.setup.integrations.redirect.exampleUrl', { url: exampleRedirectUrl })"
                    ></span>
                </div>
            }

            @if (redirectCtrl?.invalid && redirectCtrl?.touched) {
                <p class="text-sm text-red-600 dark:text-red-400">
                    @if (redirectCtrl?.hasError('required')) {
                        {{ t('smartEnrollProjects.setup.integrations.redirect.required') }}
                    } @else if (redirectCtrl?.hasError('pattern')) {
                        {{ t('smartEnrollProjects.setup.integrations.redirect.invalid') }}
                    }
                </p>
            }
        </section>

        <!-- 2. Webhook -->
        <section
            class="flex flex-col gap-4 rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
            [formGroup]="integrationsFormGroup!"
        >
            <header>
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.integrations.webhook.title') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.integrations.webhook.subtitle') }}
                </p>
            </header>

            <div class="flex flex-wrap items-start gap-3">
                <mat-form-field appearance="outline" subscriptSizing="dynamic" class="min-w-[18rem] flex-1">
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

                <button
                    mat-stroked-button
                    type="button"
                    class="!h-14 rounded-xl"
                    (click)="refreshWebhooks()"
                    [disabled]="refreshingWebhooks"
                >
                    <mat-icon class="!h-4 !w-4" [class.animate-spin]="refreshingWebhooks">refresh</mat-icon>
                    {{ t('smartEnrollProjects.setup.integrations.webhook.refresh') }}
                </button>
                <button
                    mat-stroked-button
                    type="button"
                    class="!h-14 rounded-xl"
                    (click)="openWebhookSettings()"
                >
                    <mat-icon class="!h-4 !w-4">open_in_new</mat-icon>
                    {{ t('smartEnrollProjects.setup.integrations.webhook.manage') }}
                </button>
            </div>

            @if (!refreshingWebhooks && webhooks.length === 0) {
                <div
                    class="flex items-start gap-2 rounded-xl border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700 dark:border-blue-900 dark:text-blue-200"
                >
                    <mat-icon class="!h-4 !w-4">info</mat-icon>
                    <span class="flex-1">
                        {{ t('smartEnrollProjects.setup.integrations.webhook.noWebhooksMessage') }}
                        <button
                            type="button"
                            class="ml-1 font-semibold underline underline-offset-2 hover:text-blue-800 dark:hover:text-blue-100"
                            (click)="openWebhookSettings()"
                        >
                            {{ t('smartEnrollProjects.setup.integrations.webhook.createWebhook') }}
                        </button>
                    </span>
                </div>
            }
        </section>

        <!-- 3. Source (allow / deny list) -->
        <section
            class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
            [class.border-stone-200]="!sourceCtrl?.errors"
            [class.dark:border-gray-700]="!sourceCtrl?.errors"
            [class.border-red-500]="sourceCtrl?.errors"
            [formGroup]="integrationsFormGroup!"
        >
            <header>
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

            <div
                class="flex items-start gap-2 rounded-xl bg-stone-100 p-3 text-xs text-stone-600 dark:bg-gray-800 dark:text-stone-300"
            >
                <mat-icon class="!h-4 !w-4">info</mat-icon>
                <span class="flex-1" [innerHTML]="t('smartEnrollProjects.setup.integrations.source.help')"></span>
            </div>

            @if (sourceCtrl?.value === 'API') {
                <div class="flex flex-col gap-4">
                    <mat-form-field appearance="outline" subscriptSizing="dynamic">
                        <mat-label>{{ t('smartEnrollProjects.setup.integrations.source.apiUrl') }}</mat-label>
                        <input matInput type="url" formControlName="apiUrl" placeholder="https://" required />
                    </mat-form-field>
                    @if (apiUrlCtrl?.invalid && apiUrlCtrl?.touched) {
                        <p class="-mt-2 text-sm text-red-600 dark:text-red-400">
                            @if (apiUrlCtrl?.hasError('required')) {
                                {{ t('smartEnrollProjects.setup.integrations.source.apiUrlRequired') }}
                            } @else if (apiUrlCtrl?.hasError('pattern')) {
                                {{ t('smartEnrollProjects.setup.integrations.source.invalidUrl') }}
                            }
                        </p>
                    }

                    <p class="m-0 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.integrations.source.testApiDescription') }}
                    </p>

                    <div class="flex flex-wrap items-start gap-3">
                        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="min-w-[10rem] flex-1">
                            <mat-label>{{ t('smartEnrollProjects.setup.integrations.source.testType') }}</mat-label>
                            <mat-select formControlName="apiTestType">
                                <mat-option value="email">{{ t('smartEnrollProjects.setup.integrations.source.email') }}</mat-option>
                                <mat-option value="phone">{{ t('smartEnrollProjects.setup.integrations.source.phone') }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="min-w-[14rem] flex-1">
                            <mat-label>{{ t('smartEnrollProjects.setup.integrations.source.testValue') }}</mat-label>
                            <input matInput formControlName="apiTestValue" />
                        </mat-form-field>
                        <button
                            mat-flat-button
                            color="primary"
                            type="button"
                            class="!h-14 rounded-xl"
                            [disabled]="
                                !apiUrlCtrl?.value ||
                                !integrationsFormGroup?.get('apiTestType')?.value ||
                                !integrationsFormGroup?.get('apiTestValue')?.value ||
                                sendingTestApi
                            "
                            (click)="callTestApi()"
                        >
                            @if (sendingTestApi) {
                                <mat-spinner diameter="16" class="mr-2 inline-block"></mat-spinner>
                            }
                            {{ t('smartEnrollProjects.setup.integrations.source.test') }}
                        </button>
                    </div>

                    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <div class="flex flex-col gap-2">
                            <p class="m-0 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                {{ t('smartEnrollProjects.setup.integrations.source.expectedResponse') }}
                            </p>
                            <pre
                                class="overflow-auto rounded-xl bg-stone-100 px-3 py-2 text-xs text-stone-800 dark:bg-gray-800 dark:text-stone-100"
                            >{{ expectedResponse | json }}</pre>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p class="m-0 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                {{ t('smartEnrollProjects.setup.integrations.source.receivedResponse') }}
                            </p>
                            @let hasError = (receivedResponse?.error || receivedResponse?.ok === false);
                            <pre
                                class="overflow-auto rounded-xl border px-3 py-2 text-xs"
                                [ngClass]="
                                    hasError
                                        ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200'
                                        : 'border-stone-200 bg-stone-100 text-stone-800 dark:border-gray-700 dark:bg-gray-800 dark:text-stone-100'
                                "
                            >{{ receivedResponse | json }}</pre>
                        </div>
                    </div>
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
var _c05 = () => [1, 2, 3, 4, 5];
var _c14 = (a0) => ({ count: a0 });
function SetupLivenessComponent_ng_container_0_div_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "header", 25)(2, "h2", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-button-toggle-group", 26)(7, "mat-button-toggle", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-button-toggle", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-button-toggle", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 30);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.requirementHelp"), " ");
  }
}
function SetupLivenessComponent_ng_container_0_div_1_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "mat-icon", 35);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.liveness.kyc.traditionalDescription"));
  }
}
function SetupLivenessComponent_ng_container_0_div_1_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "mat-icon", 35);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.liveness.kyc.zeroKnowledgeDescription"));
  }
}
function SetupLivenessComponent_ng_container_0_div_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "header")(2, "h2", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-radio-group", 31)(7, "mat-radio-button", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-radio-button", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, SetupLivenessComponent_ng_container_0_div_1_Conditional_3_Conditional_11_Template, 5, 1, "div", 34)(12, SetupLivenessComponent_ng_container_0_div_1_Conditional_3_Conditional_12_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.kyc.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.kyc.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.kyc.traditional"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.kyc.zeroKnowledge"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isTraditionalKyc ? 11 : ctx_r1.isZeroKnowledgeKyc ? 12 : -1);
  }
}
function SetupLivenessComponent_ng_container_0_div_1_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon", 35);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.liveness.thresholds.searchWarn"));
  }
}
function SetupLivenessComponent_ng_container_0_div_1_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("value", n_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r3 === 1 ? t_r1("smartEnrollProjects.setup.documents.attempts.one") : t_r1("smartEnrollProjects.setup.documents.attempts.many", \u0275\u0275pureFunction1(2, _c14, n_r3)), " ");
  }
}
function SetupLivenessComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, SetupLivenessComponent_ng_container_0_div_1_Conditional_1_Template, 15, 8, "section", 3);
    \u0275\u0275elementContainerStart(2, 4);
    \u0275\u0275template(3, SetupLivenessComponent_ng_container_0_div_1_Conditional_3_Template, 13, 5, "section", 5);
    \u0275\u0275elementStart(4, "section", 6)(5, "header")(6, "h2", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-slider", 12);
    \u0275\u0275element(16, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 14);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "section", 6)(20, "header")(21, "h2", 7);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 8);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 9)(26, "span", 10);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 11);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "mat-slider", 15);
    \u0275\u0275element(31, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 14);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "section", 6)(35, "header")(36, "h2", 7);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 8);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 9)(41, "span", 10);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 11);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "mat-slider", 17);
    \u0275\u0275element(46, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, SetupLivenessComponent_ng_container_0_div_1_Conditional_47_Template, 5, 1, "div", 19);
    \u0275\u0275elementStart(48, "p", 14);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "section", 20)(51, "header", 21)(52, "div")(53, "h2", 7);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p", 8);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "mat-form-field", 22)(58, "mat-label");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "mat-select", 23);
    \u0275\u0275repeaterCreate(61, SetupLivenessComponent_ng_container_0_div_1_For_62_Template, 2, 4, "mat-option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.subForm && ctx_r1.livenessStepFormGroup ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.livenessFormGroup);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLivenessEnabled ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_6_0 = ctx_r1.livenessFormGroup.get("minScore")) == null ? null : tmp_6_0.errors))("dark:border-gray-700", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_7_0 = ctx_r1.livenessFormGroup.get("minScore")) == null ? null : tmp_7_0.errors))("border-red-500", !ctx_r1.isNotRequired && (ctx_r1.livenessFormGroup == null ? null : (tmp_8_0 = ctx_r1.livenessFormGroup.get("minScore")) == null ? null : tmp_8_0.errors))("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.minScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.minScoreSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.minScoreDisplayValue, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.actualScore"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.minScoreHelp"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_16_0 = ctx_r1.livenessFormGroup.get("compareMinScore")) == null ? null : tmp_16_0.errors))("dark:border-gray-700", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_17_0 = ctx_r1.livenessFormGroup.get("compareMinScore")) == null ? null : tmp_17_0.errors))("border-red-500", !ctx_r1.isNotRequired && (ctx_r1.livenessFormGroup == null ? null : (tmp_18_0 = ctx_r1.livenessFormGroup.get("compareMinScore")) == null ? null : tmp_18_0.errors))("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.compareMinScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.compareMinScoreSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.compareMinScoreDisplayValue, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.actualScore"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.compareMinScoreHelp"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_26_0 = ctx_r1.livenessFormGroup.get("searchMinScore")) == null ? null : tmp_26_0.errors))("dark:border-gray-700", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_27_0 = ctx_r1.livenessFormGroup.get("searchMinScore")) == null ? null : tmp_27_0.errors))("border-red-500", !ctx_r1.isNotRequired && (ctx_r1.livenessFormGroup == null ? null : (tmp_28_0 = ctx_r1.livenessFormGroup.get("searchMinScore")) == null ? null : tmp_28_0.errors))("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.searchMinScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.searchMinScoreSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.searchMinScoreDisplayValue, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.actualScore"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isSearchMinScoreWarn ? 47 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.searchMinScoreHelp"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.attempts.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.attempts.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.attempts.limit"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(56, _c05));
  }
}
function SetupLivenessComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupLivenessComponent_ng_container_0_div_1_Template, 63, 57, "div", 1);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupLivenessComponent, selectors: [["setup-liveness"]], inputs: { form: "form", formGroup: "formGroup", loading: "loading", saving: "saving", subForm: "subForm", stepFormControlName: "stepFormControlName" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [3, "formGroup"], [1, "flex", "flex-col", "gap-4", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "flex", "flex-col", "gap-4", "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-end", "justify-center", "gap-2"], [1, "text-4xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "pb-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["min", "0.52", "max", "0.9", "step", "0.01", "discrete", "", 1, "!w-full"], ["matSliderThumb", "", "formControlName", "minScore"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], ["min", "0.7", "max", "0.95", "step", "0.01", "discrete", "", 1, "!w-full"], ["matSliderThumb", "", "formControlName", "compareMinScore"], ["min", "0.81", "max", "0.95", "step", "0.01", "discrete", "", 1, "!w-full"], ["matSliderThumb", "", "formControlName", "searchMinScore"], [1, "flex", "items-start", "gap-2", "rounded-xl", "border", "border-amber-200", "bg-amber-50", "p-3", "text-sm", "text-amber-800", "dark:border-amber-900", "dark:bg-amber-950/40", "dark:text-amber-200"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mb-4", "flex", "items-start", "justify-between", "gap-4"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[12rem]"], ["formControlName", "attemptLimit", "required", ""], [3, "value"], [1, "mb-4"], [1, "!rounded-xl", 3, "formControlName"], ["value", "skip"], ["value", "optional"], ["value", "mandatory"], [1, "mt-3", "text-xs", "text-stone-500", "dark:text-stone-400"], ["formControlName", "kycType", 1, "flex", "flex-wrap", "gap-4"], ["value", "traditional"], ["value", "zero_knowledge"], [1, "flex", "items-start", "gap-2", "rounded-xl", "border", "border-blue-200", "bg-blue-50", "p-3", "text-sm", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], [1, "!h-4", "!w-4"]], template: function SetupLivenessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupLivenessComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      TranslocoModule,
      TranslocoDirective
    ], encapsulation: 2, changeDetection: 0 });
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
        <!-- 1. Step requirement (hidden when used as a representative sub-form) -->
        @if (!subForm && livenessStepFormGroup) {
            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [formGroup]="livenessStepFormGroup"
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
                <p class="mt-3 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.liveness.requirementHelp') }}
                </p>
            </section>
        }

        <ng-container [formGroup]="livenessFormGroup!">
            <!-- 2. KYC type (only when liveness is enabled) -->
            @if (isLivenessEnabled) {
                <section
                    class="flex flex-col gap-4 rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                >
                    <header>
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                            {{ t('smartEnrollProjects.setup.liveness.kyc.title') }}
                        </h2>
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                            {{ t('smartEnrollProjects.setup.liveness.kyc.subtitle') }}
                        </p>
                    </header>
                    <mat-radio-group formControlName="kycType" class="flex flex-wrap gap-4">
                        <mat-radio-button value="traditional">
                            {{ t('smartEnrollProjects.setup.liveness.kyc.traditional') }}
                        </mat-radio-button>
                        <mat-radio-button value="zero_knowledge">
                            {{ t('smartEnrollProjects.setup.liveness.kyc.zeroKnowledge') }}
                        </mat-radio-button>
                    </mat-radio-group>

                    @if (isTraditionalKyc) {
                        <div
                            class="flex items-start gap-2 rounded-xl border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200"
                        >
                            <mat-icon class="!h-4 !w-4">info</mat-icon>
                            <span>{{ t('smartEnrollProjects.setup.liveness.kyc.traditionalDescription') }}</span>
                        </div>
                    } @else if (isZeroKnowledgeKyc) {
                        <div
                            class="flex items-start gap-2 rounded-xl border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200"
                        >
                            <mat-icon class="!h-4 !w-4">info</mat-icon>
                            <span>{{ t('smartEnrollProjects.setup.liveness.kyc.zeroKnowledgeDescription') }}</span>
                        </div>
                    }
                </section>
            }

            <!-- 3. Liveness score -->
            <section
                class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
                [class.border-stone-200]="isNotRequired || !livenessFormGroup?.get('minScore')?.errors"
                [class.dark:border-gray-700]="isNotRequired || !livenessFormGroup?.get('minScore')?.errors"
                [class.border-red-500]="!isNotRequired && livenessFormGroup?.get('minScore')?.errors"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header>
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.minScore') }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.minScoreSubtitle') }}
                    </p>
                </header>

                <div class="flex items-end justify-center gap-2">
                    <span class="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ minScoreDisplayValue }}
                    </span>
                    <span class="pb-1 text-sm text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.liveness.actualScore') }}
                    </span>
                </div>

                <mat-slider min="0.52" max="0.9" step="0.01" discrete class="!w-full">
                    <input matSliderThumb formControlName="minScore" />
                </mat-slider>

                <p class="text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.liveness.thresholds.minScoreHelp') }}
                </p>
            </section>

            <!-- 4. Compare score -->
            <section
                class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
                [class.border-stone-200]="isNotRequired || !livenessFormGroup?.get('compareMinScore')?.errors"
                [class.dark:border-gray-700]="isNotRequired || !livenessFormGroup?.get('compareMinScore')?.errors"
                [class.border-red-500]="!isNotRequired && livenessFormGroup?.get('compareMinScore')?.errors"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header>
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.compareMinScore') }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.compareMinScoreSubtitle') }}
                    </p>
                </header>

                <div class="flex items-end justify-center gap-2">
                    <span class="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ compareMinScoreDisplayValue }}
                    </span>
                    <span class="pb-1 text-sm text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.liveness.actualScore') }}
                    </span>
                </div>

                <mat-slider min="0.7" max="0.95" step="0.01" discrete class="!w-full">
                    <input matSliderThumb formControlName="compareMinScore" />
                </mat-slider>

                <p class="text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.liveness.thresholds.compareMinScoreHelp') }}
                </p>
            </section>

            <!-- 5. Search score -->
            <section
                class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
                [class.border-stone-200]="isNotRequired || !livenessFormGroup?.get('searchMinScore')?.errors"
                [class.dark:border-gray-700]="isNotRequired || !livenessFormGroup?.get('searchMinScore')?.errors"
                [class.border-red-500]="!isNotRequired && livenessFormGroup?.get('searchMinScore')?.errors"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header>
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.searchMinScore') }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.searchMinScoreSubtitle') }}
                    </p>
                </header>

                <div class="flex items-end justify-center gap-2">
                    <span class="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{ searchMinScoreDisplayValue }}
                    </span>
                    <span class="pb-1 text-sm text-stone-500 dark:text-stone-400">
                        {{ t('smartEnrollProjects.setup.liveness.actualScore') }}
                    </span>
                </div>

                <mat-slider min="0.81" max="0.95" step="0.01" discrete class="!w-full">
                    <input matSliderThumb formControlName="searchMinScore" />
                </mat-slider>

                @if (isSearchMinScoreWarn) {
                    <div
                        class="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
                    >
                        <mat-icon class="!h-4 !w-4">warning</mat-icon>
                        <span>{{ t('smartEnrollProjects.setup.liveness.thresholds.searchWarn') }}</span>
                    </div>
                }

                <p class="text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.liveness.thresholds.searchMinScoreHelp') }}
                </p>
            </section>

            <!-- 6. Attempt limit -->
            <section
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                            {{ t('smartEnrollProjects.setup.documents.attempts.title') }}
                        </h2>
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                            {{ t('smartEnrollProjects.setup.documents.attempts.subtitle') }}
                        </p>
                    </div>
                    <mat-form-field appearance="outline" subscriptSizing="dynamic" class="min-w-[12rem]">
                        <mat-label>{{ t('smartEnrollProjects.setup.documents.attempts.limit') }}</mat-label>
                        <mat-select formControlName="attemptLimit" required>
                            @for (n of [1, 2, 3, 4, 5]; track n) {
                                <mat-option [value]="n">
                                    {{
                                        n === 1
                                            ? t('smartEnrollProjects.setup.documents.attempts.one')
                                            : t('smartEnrollProjects.setup.documents.attempts.many', { count: n })
                                    }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </header>
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
var _c06 = ["countryCodeSearchInput"];
var _forTrack05 = ($index, $item) => $item.value;
function SetupSignUpFormComponent_ng_container_0_form_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "header", 6)(2, "h2", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-button-toggle-group", 9)(7, "mat-button-toggle", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-button-toggle", 11);
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
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 14)(1, "mat-radio-button", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-radio-button", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.fullName.separate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.fullName.together"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 15)(1, "mat-radio-button", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-radio-button", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.business.nameNumber"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.business.nameOnly"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_button_25_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.clearCountryCodeSearch($event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 49);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 47)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("value", c_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.name);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-radio-group", 32)(2, "mat-radio-button", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-radio-button", 34);
    \u0275\u0275text(5, "WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-radio-button", 35);
    \u0275\u0275text(7, "SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-radio-button", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 37)(11, "label", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 39)(14, "mat-select", 40);
    \u0275\u0275listener("openedChange", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_mat_select_openedChange_14_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView($event ? ctx_r2.onCountryCodeSelectOpened() : ctx_r2.onCountryCodeSelectClosed());
    });
    \u0275\u0275elementStart(15, "mat-select-trigger")(16, "span", 41);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 42);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 43);
    \u0275\u0275listener("click", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_div_click_20_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    })("keydown", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_div_keydown_20_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    })("mousedown", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_div_mousedown_20_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(21, "mat-icon", 44);
    \u0275\u0275text(22, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 45, 0);
    \u0275\u0275listener("click", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_input_click_23_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    })("input", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_input_input_23_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onCountryCodeSearchChange($event.target.value));
    })("keydown", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_input_keydown_23_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_button_25_Template, 3, 0, "button", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_For_27_Template, 5, 3, "mat-option", 47, \u0275\u0275componentInstance().trackByPhoneCountryCode, true);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.signupForm.phone.both"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.signupForm.phone.none"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.phone.countryCode"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formGroup == null ? null : (tmp_9_0 = ctx_r2.formGroup.get("countryCode")) == null ? null : tmp_9_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedCountryName);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", t_r1("smartEnrollProjects.setup.signupForm.phone.searchCountry"))("value", ctx_r2.countryCodeSearchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.countryCodeSearchTerm);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredPhoneCountryCodes);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.atLeastOneContactMethod"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 21)(1, "mat-radio-button", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-radio-button", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.email.mailgun"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.email.none"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 55);
    \u0275\u0275listener("change", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_For_2_Template_mat_checkbox_change_0_listener($event) {
      const opt_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.toggleAdditionalField(opt_r7.value, $event.checked));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const t_r1 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("checked", ctx_r2.additionalFieldChecked(opt_r7.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1(opt_r7.labelKey), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.additionalFields.error"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275repeaterCreate(1, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_For_2_Template, 2, 2, "mat-checkbox", 53, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_Conditional_3_Template, 2, 1, "p", 54);
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.additionalFieldOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_7_0 = ctx_r2.formGroup.get("allowAdditionalFields")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["additionalFieldsRequired"]) ? 3 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "header", 16)(2, "div")(3, "h2", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "mat-slide-toggle", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_Template, 4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_12_0;
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-stone-200", !(ctx_r2.formGroup == null ? null : (tmp_5_0 = ctx_r2.formGroup.get("allowAdditionalFields")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["additionalFieldsRequired"]))("dark:border-gray-700", !(ctx_r2.formGroup == null ? null : (tmp_6_0 = ctx_r2.formGroup.get("allowAdditionalFields")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["additionalFieldsRequired"]))("border-red-500", ctx_r2.formGroup == null ? null : (tmp_7_0 = ctx_r2.formGroup.get("allowAdditionalFields")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["additionalFieldsRequired"])("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.additionalFields.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.additionalFields.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_12_0 = ctx_r2.formGroup.get("allowAdditionalFields")) == null ? null : tmp_12_0.value) ? 8 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "header", 25)(2, "div")(3, "h2", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "mat-slide-toggle", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.business.addressTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.business.addressSubtitle"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.urlRequired"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.urlInvalid"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Conditional_1_Template, 1, 1)(2, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const tcu_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275conditional(tcu_r8.hasError("required") ? 1 : tcu_r8.hasError("pattern") ? 2 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 57)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 58);
    \u0275\u0275template(4, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Template, 3, 1, "mat-error");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const tcu_r8 = \u0275\u0275readContextLet(0);
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.basicSetup.compliance.termsUrl"));
    \u0275\u0275advance();
    \u0275\u0275property("formControl", tcu_r8);
    \u0275\u0275advance();
    \u0275\u0275conditional(tcu_r8.touched && tcu_r8.invalid ? 4 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Template, 5, 3, "mat-form-field", 57);
  }
  if (rf & 2) {
    const tcu_r9 = \u0275\u0275storeLet(\u0275\u0275nextContext(4).form.get("termsAndConditionsUrl"));
    \u0275\u0275advance();
    \u0275\u0275conditional(tcu_r9 ? 1 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.urlRequired"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.urlInvalid"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Conditional_1_Template, 1, 1)(2, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const pu_r10 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275conditional(pu_r10.hasError("required") ? 1 : pu_r10.hasError("pattern") ? 2 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 57)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 58);
    \u0275\u0275template(4, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Template, 3, 1, "mat-error");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const pu_r10 = \u0275\u0275readContextLet(0);
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.basicSetup.compliance.privacyUrl"));
    \u0275\u0275advance();
    \u0275\u0275property("formControl", pu_r10);
    \u0275\u0275advance();
    \u0275\u0275conditional(pu_r10.touched && pu_r10.invalid ? 4 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Template, 5, 3, "mat-form-field", 57);
  }
  if (rf & 2) {
    const pu_r11 = \u0275\u0275storeLet(\u0275\u0275nextContext(4).form.get("privacyUrl"));
    \u0275\u0275advance();
    \u0275\u0275conditional(pu_r11 ? 1 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 12);
    \u0275\u0275elementStart(1, "section", 13)(2, "header", 6)(3, "h2", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_7_Template, 5, 2, "mat-radio-group", 14)(8, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_8_Template, 5, 2, "mat-radio-group", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "section", 13)(10, "header", 16)(11, "div")(12, "h2", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 8);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "mat-slide-toggle", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template, 28, 8, "div", 18)(18, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_18_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "section", 13)(20, "header", 16)(21, "div")(22, "h2", 7);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 8);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "mat-slide-toggle", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_27_Template, 5, 2, "mat-radio-group", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Template, 9, 13, "section", 22)(29, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_29_Template, 8, 6, "section", 23);
    \u0275\u0275elementStart(30, "section", 24)(31, "header", 25)(32, "div")(33, "h2", 7);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "mat-slide-toggle", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Template, 2, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "section", 24)(38, "header", 25)(39, "div")(40, "h2", 7);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "mat-slide-toggle", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Template, 2, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_13_0;
    let tmp_21_0;
    let tmp_30_0;
    let tmp_36_0;
    let tmp_40_0;
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.formGroup);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", !(ctx_r2.formGroup == null ? null : (tmp_5_0 = ctx_r2.formGroup.get("fullName")) == null ? null : tmp_5_0.errors))("dark:border-gray-700", !(ctx_r2.formGroup == null ? null : (tmp_6_0 = ctx_r2.formGroup.get("fullName")) == null ? null : tmp_6_0.errors))("border-red-500", ctx_r2.formGroup == null ? null : (tmp_7_0 = ctx_r2.formGroup.get("fullName")) == null ? null : tmp_7_0.errors)("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formType === "business" ? t_r1("smartEnrollProjects.setup.signupForm.business.title") : t_r1("smartEnrollProjects.setup.signupForm.fullName.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formType === "business" ? t_r1("smartEnrollProjects.setup.signupForm.business.subtitle") : t_r1("smartEnrollProjects.setup.signupForm.fullName.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formType === "personal" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formType === "business" && (ctx_r2.formGroup == null ? null : (tmp_13_0 = ctx_r2.formGroup.get("businessBasicInfo")) == null ? null : tmp_13_0.value) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", !(ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"]))("dark:border-gray-700", !(ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"]))("border-red-500", ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"])("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formType === "business" ? t_r1("smartEnrollProjects.setup.signupForm.phone.businessTitle") : t_r1("smartEnrollProjects.setup.signupForm.phone.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.phone.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_21_0 = ctx_r2.formGroup.get("phone")) == null ? null : tmp_21_0.value) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"]) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", !(ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"]))("dark:border-gray-700", !(ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"]))("border-red-500", ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"])("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formType === "business" ? t_r1("smartEnrollProjects.setup.signupForm.email.businessTitle") : t_r1("smartEnrollProjects.setup.signupForm.email.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.email.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_30_0 = ctx_r2.formGroup.get("email")) == null ? null : tmp_30_0.value) ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formType === "personal" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formType === "business" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.terms"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_36_0 = ctx_r2.formGroup.get("showTermsAndConditions")) == null ? null : tmp_36_0.value) ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.privacy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_40_0 = ctx_r2.formGroup.get("showPrivacyNotice")) == null ? null : tmp_40_0.value) ? 43 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 3);
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_Conditional_1_Template, 11, 4, "section", 4)(2, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Template, 44, 56, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.subForm ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.formType);
  }
}
function SetupSignUpFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_Template, 3, 3, "form", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFormReady);
  }
}
var ADDITIONAL_FIELD_OPTIONS = [
  { value: "gender", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.gender" },
  { value: "country", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.country" },
  { value: "dateOfBirth", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.dateOfBirth" },
  { value: "address", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.address" },
  { value: "age", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.age" },
  { value: "postalCode", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.postalCode" }
];
var SetupSignUpFormComponent = class _SetupSignUpFormComponent {
  constructor() {
    this.formType = "personal";
    this.loading = false;
    this.saving = false;
    this.subForm = false;
    this.stepFormControlName = "";
    this._cdr = inject(ChangeDetectorRef);
    this.defaultPhoneCountryCode = DEFAULT_PHONE_COUNTRY_CODE;
    this.allPhoneCountryCodes = PHONE_COUNTRY_CODES;
    this.additionalFieldOptions = ADDITIONAL_FIELD_OPTIONS;
    this.filteredPhoneCountryCodes = PHONE_COUNTRY_CODES;
    this.countryCodeSearchTerm = "";
  }
  /** Mirrors client-panel: `!loading && !!formGroup`. */
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
  get selectedCountryName() {
    const code = this.formGroup?.get("countryCode")?.value;
    if (!code)
      return "";
    return this.allPhoneCountryCodes.find((c) => c.code === code)?.name || "";
  }
  trackByPhoneCountryCode(_index, country) {
    return country?.code;
  }
  onCountryCodeSearchChange(searchTerm) {
    this.countryCodeSearchTerm = searchTerm;
    this._filterPhoneCountryCodes();
    this._cdr.markForCheck();
  }
  clearCountryCodeSearch(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.countryCodeSearchTerm = "";
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
    this._cdr.detectChanges();
    setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 0);
  }
  onCountryCodeSelectOpened() {
    this.countryCodeSearchTerm = "";
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
    this._cdr.markForCheck();
    setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 100);
  }
  onCountryCodeSelectClosed() {
    this.countryCodeSearchTerm = "";
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
    this._cdr.markForCheck();
  }
  additionalFieldChecked(value) {
    const v = this.formGroup?.get("additionalFields")?.value;
    return Array.isArray(v) && v.includes(value);
  }
  toggleAdditionalField(value, checked) {
    const ctrl = this.formGroup?.get("additionalFields");
    if (!ctrl)
      return;
    const cur = [...ctrl.value || []];
    if (checked && !cur.includes(value))
      cur.push(value);
    if (!checked) {
      const i = cur.indexOf(value);
      if (i >= 0)
        cur.splice(i, 1);
    }
    ctrl.setValue(cur);
    this._cdr.markForCheck();
  }
  _filterPhoneCountryCodes() {
    if (!this.countryCodeSearchTerm.trim()) {
      this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
      return;
    }
    const term = this.countryCodeSearchTerm.toLowerCase().trim();
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes.filter((c) => c.code.toLowerCase().includes(term) || c.name.toLowerCase().includes(term));
  }
  static {
    this.\u0275fac = function SetupSignUpFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupSignUpFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupSignUpFormComponent, selectors: [["setup-sign-up-form"]], viewQuery: function SetupSignUpFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.countryCodeSearchInput = _t.first);
      }
    }, inputs: { form: "form", formGroup: "formGroup", formType: "formType", loading: "loading", saving: "saving", subForm: "subForm", stepFormControlName: "stepFormControlName" }, decls: 1, vars: 0, consts: [["countryCodeSearchInput", ""], [4, "transloco"], ["class", "flex w-full flex-col gap-6", 3, "formGroup", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6", 3, "formGroup"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [3, "formGroup", 4, "ngIf"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["formControlName", "target", 1, "!rounded-xl"], ["value", "personal"], ["value", "business", "disabled", ""], [3, "formGroup"], [1, "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40"], ["formControlName", "fullNameStyle", 1, "flex", "flex-wrap", "gap-4"], ["formControlName", "businessBasicInfoStyle", 1, "flex", "flex-wrap", "gap-4"], [1, "mb-4", "flex", "items-start", "justify-between", "gap-4"], ["formControlName", "phone"], [1, "flex", "flex-col", "gap-4"], [1, "mt-3", "text-sm", "text-red-600", "dark:text-red-400"], ["formControlName", "email"], ["formControlName", "emailGateway", 1, "flex", "flex-wrap", "gap-4"], [1, "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40", 3, "border-stone-200", "dark:border-gray-700", "border-red-500", "opacity-50", "pointer-events-none"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "opacity-50", "pointer-events-none"], [1, "flex", "flex-col", "gap-4", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "flex", "items-start", "justify-between", "gap-4"], ["formControlName", "showTermsAndConditions"], ["formControlName", "showPrivacyNotice"], ["value", "separate"], ["value", "together"], ["value", "name_number"], ["value", "name"], ["formControlName", "phoneGateway", 1, "flex", "flex-wrap", "gap-4"], ["value", "both"], ["value", "whatsapp"], ["value", "sms"], ["value", "none"], [1, "flex", "flex-col", "gap-2"], [1, "text-xs", "font-medium", "text-stone-600", "dark:text-stone-300"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "max-w-md"], ["formControlName", "countryCode", "panelClass", "country-code-search-panel", 3, "openedChange"], [1, "font-semibold"], [1, "ml-2", "text-stone-500"], [1, "sticky", "top-0", "z-10", "flex", "items-center", "gap-2", "bg-white", "px-3", "py-2", "dark:bg-gray-900", 3, "click", "keydown", "mousedown"], [1, "!h-4", "!w-4", "text-stone-400"], ["type", "text", 1, "w-full", "bg-transparent", "text-sm", "outline-none", "placeholder:text-stone-400", 3, "click", "input", "keydown", "placeholder", "value"], ["mat-icon-button", "", "type", "button", "class", "!h-6 !w-6 !min-w-0", 3, "click", 4, "ngIf"], [3, "value"], ["mat-icon-button", "", "type", "button", 1, "!h-6", "!w-6", "!min-w-0", 3, "click"], [1, "!h-4", "!w-4"], ["value", "mailgun"], ["formControlName", "allowAdditionalFields"], [1, "grid", "grid-cols-1", "gap-2", "sm:grid-cols-2"], [3, "checked"], [1, "mt-2", "text-sm", "text-red-600", "dark:text-red-400"], [3, "change", "checked"], ["formControlName", "address"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full", "max-w-2xl"], ["matInput", "", "type", "url", "placeholder", "https://", "autocomplete", "off", 3, "formControl"]], template: function SetupSignUpFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupSignUpFormComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, MatButtonModule, MatIconButton, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatCheckboxModule, MatCheckbox, MatFormFieldModule, MatFormField, MatLabel, MatError, MatIconModule, MatIcon, MatInputModule, MatInput, MatRadioModule, MatRadioGroup, MatRadioButton, MatSelectModule, MatSelect, MatSelectTrigger, MatOption, MatSlideToggleModule, MatSlideToggle, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupSignUpFormComponent, [{
    type: Component,
    args: [{ selector: "setup-sign-up-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatSlideToggleModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <form [formGroup]="form" *ngIf="isFormReady" class="flex w-full flex-col gap-6">
        <!-- Target picker (top-level only, hidden inside representatives sub-form) -->
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
                    <mat-button-toggle value="business" disabled>
                        {{ t('smartEnrollProjects.setup.signupForm.target.business') }}
                    </mat-button-toggle>
                </mat-button-toggle-group>
            </section>
        }

        <ng-container *ngIf="formType" [formGroup]="formGroup">
            <!-- 1. Full name (personal) / Business basic info (business) -->
            <section
                class="rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
                [class.border-stone-200]="!formGroup?.get('fullName')?.errors"
                [class.dark:border-gray-700]="!formGroup?.get('fullName')?.errors"
                [class.border-red-500]="formGroup?.get('fullName')?.errors"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4">
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                        {{
                            formType === 'business'
                                ? t('smartEnrollProjects.setup.signupForm.business.title')
                                : t('smartEnrollProjects.setup.signupForm.fullName.title')
                        }}
                    </h2>
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {{
                            formType === 'business'
                                ? t('smartEnrollProjects.setup.signupForm.business.subtitle')
                                : t('smartEnrollProjects.setup.signupForm.fullName.subtitle')
                        }}
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
                }

                @if (formType === 'business' && formGroup?.get('businessBasicInfo')?.value) {
                    <mat-radio-group formControlName="businessBasicInfoStyle" class="flex flex-wrap gap-4">
                        <mat-radio-button value="name_number">
                            {{ t('smartEnrollProjects.setup.signupForm.business.nameNumber') }}
                        </mat-radio-button>
                        <mat-radio-button value="name">
                            {{ t('smartEnrollProjects.setup.signupForm.business.nameOnly') }}
                        </mat-radio-button>
                    </mat-radio-group>
                }
            </section>

            <!-- 2. Phone -->
            <section
                class="rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
                [class.border-stone-200]="!formGroup?.errors?.['atLeastOneContactMethodRequired']"
                [class.dark:border-gray-700]="!formGroup?.errors?.['atLeastOneContactMethodRequired']"
                [class.border-red-500]="formGroup?.errors?.['atLeastOneContactMethodRequired']"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                            {{
                                formType === 'business'
                                    ? t('smartEnrollProjects.setup.signupForm.phone.businessTitle')
                                    : t('smartEnrollProjects.setup.signupForm.phone.title')
                            }}
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
                            <mat-radio-button value="both">{{
                                t('smartEnrollProjects.setup.signupForm.phone.both')
                            }}</mat-radio-button>
                            <mat-radio-button value="whatsapp">WhatsApp</mat-radio-button>
                            <mat-radio-button value="sms">SMS</mat-radio-button>
                            <mat-radio-button value="none">{{
                                t('smartEnrollProjects.setup.signupForm.phone.none')
                            }}</mat-radio-button>
                        </mat-radio-group>

                        <div class="flex flex-col gap-2">
                            <label class="text-xs font-medium text-stone-600 dark:text-stone-300">
                                {{ t('smartEnrollProjects.setup.signupForm.phone.countryCode') }}
                            </label>
                            <mat-form-field appearance="outline" subscriptSizing="dynamic" class="max-w-md">
                                <mat-select
                                    formControlName="countryCode"
                                    panelClass="country-code-search-panel"
                                    (openedChange)="$event ? onCountryCodeSelectOpened() : onCountryCodeSelectClosed()"
                                >
                                    <mat-select-trigger>
                                        <span class="font-semibold">{{ formGroup?.get('countryCode')?.value }}</span>
                                        <span class="ml-2 text-stone-500">{{ selectedCountryName }}</span>
                                    </mat-select-trigger>

                                    <!-- Search row, kept inside the panel like client-panel -->
                                    <div
                                        class="sticky top-0 z-10 flex items-center gap-2 bg-white px-3 py-2 dark:bg-gray-900"
                                        (click)="$event.stopPropagation()"
                                        (keydown)="$event.stopPropagation()"
                                        (mousedown)="$event.stopPropagation()"
                                    >
                                        <mat-icon class="!h-4 !w-4 text-stone-400">search</mat-icon>
                                        <input
                                            #countryCodeSearchInput
                                            type="text"
                                            class="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
                                            [placeholder]="t('smartEnrollProjects.setup.signupForm.phone.searchCountry')"
                                            [value]="countryCodeSearchTerm"
                                            (click)="$event.stopPropagation()"
                                            (input)="onCountryCodeSearchChange($any($event.target).value)"
                                            (keydown)="$event.stopPropagation()"
                                        />
                                        <button
                                            *ngIf="countryCodeSearchTerm"
                                            mat-icon-button
                                            type="button"
                                            class="!h-6 !w-6 !min-w-0"
                                            (click)="clearCountryCodeSearch($event)"
                                        >
                                            <mat-icon class="!h-4 !w-4">close</mat-icon>
                                        </button>
                                    </div>

                                    @for (c of filteredPhoneCountryCodes; track trackByPhoneCountryCode($index, c)) {
                                        <mat-option [value]="c.code">
                                            <span class="font-semibold">{{ c.code }}</span>
                                            <span class="ml-2 text-stone-500">{{ c.name }}</span>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                }

                @if (formGroup?.errors?.['atLeastOneContactMethodRequired']) {
                    <p class="mt-3 text-sm text-red-600 dark:text-red-400">
                        {{ t('smartEnrollProjects.setup.signupForm.atLeastOneContactMethod') }}
                    </p>
                }
            </section>

            <!-- 3. Email -->
            <section
                class="rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
                [class.border-stone-200]="!formGroup?.errors?.['atLeastOneContactMethodRequired']"
                [class.dark:border-gray-700]="!formGroup?.errors?.['atLeastOneContactMethodRequired']"
                [class.border-red-500]="formGroup?.errors?.['atLeastOneContactMethodRequired']"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                            {{
                                formType === 'business'
                                    ? t('smartEnrollProjects.setup.signupForm.email.businessTitle')
                                    : t('smartEnrollProjects.setup.signupForm.email.title')
                            }}
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

            <!-- 4. Additional fields (personal only) -->
            @if (formType === 'personal') {
                <section
                    class="rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
                    [class.border-stone-200]="!formGroup?.get('allowAdditionalFields')?.errors?.['additionalFieldsRequired']"
                    [class.dark:border-gray-700]="!formGroup?.get('allowAdditionalFields')?.errors?.['additionalFieldsRequired']"
                    [class.border-red-500]="formGroup?.get('allowAdditionalFields')?.errors?.['additionalFieldsRequired']"
                    [class.opacity-50]="isNotRequired"
                    [class.pointer-events-none]="isNotRequired"
                >
                    <header class="mb-4 flex items-start justify-between gap-4">
                        <div>
                            <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                                {{ t('smartEnrollProjects.setup.signupForm.additionalFields.title') }}
                            </h2>
                            <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                {{ t('smartEnrollProjects.setup.signupForm.additionalFields.subtitle') }}
                            </p>
                        </div>
                        <mat-slide-toggle formControlName="allowAdditionalFields"></mat-slide-toggle>
                    </header>

                    @if (formGroup?.get('allowAdditionalFields')?.value) {
                        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            @for (opt of additionalFieldOptions; track opt.value) {
                                <mat-checkbox
                                    [checked]="additionalFieldChecked(opt.value)"
                                    (change)="toggleAdditionalField(opt.value, $event.checked)"
                                >
                                    {{ t(opt.labelKey) }}
                                </mat-checkbox>
                            }
                        </div>
                        @if (formGroup?.get('allowAdditionalFields')?.errors?.['additionalFieldsRequired']) {
                            <p class="mt-2 text-sm text-red-600 dark:text-red-400">
                                {{ t('smartEnrollProjects.setup.signupForm.additionalFields.error') }}
                            </p>
                        }
                    }
                </section>
            }

            <!-- 5. Business address (business only) -->
            @if (formType === 'business') {
                <section
                    class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                    [class.opacity-50]="isNotRequired"
                    [class.pointer-events-none]="isNotRequired"
                >
                    <header class="flex items-start justify-between gap-4">
                        <div>
                            <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                                {{ t('smartEnrollProjects.setup.signupForm.business.addressTitle') }}
                            </h2>
                            <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                {{ t('smartEnrollProjects.setup.signupForm.business.addressSubtitle') }}
                            </p>
                        </div>
                        <mat-slide-toggle formControlName="address"></mat-slide-toggle>
                    </header>
                </section>
            }

            <!-- 6. Terms & conditions -->
            <section
                class="flex flex-col gap-4 rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="flex items-start justify-between gap-4">
                    <div>
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                            {{ t('smartEnrollProjects.setup.signupForm.legal.terms') }}
                        </h2>
                    </div>
                    <mat-slide-toggle formControlName="showTermsAndConditions"></mat-slide-toggle>
                </header>
                @if (formGroup?.get('showTermsAndConditions')?.value) {
                    @let tcu = form.get('termsAndConditionsUrl');
                    @if (tcu) {
                        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="w-full max-w-2xl">
                            <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.compliance.termsUrl') }}</mat-label>
                            <input
                                matInput
                                type="url"
                                placeholder="https://"
                                autocomplete="off"
                                [formControl]="$any(tcu)"
                            />
                            @if (tcu.touched && tcu.invalid) {
                                <mat-error>
                                    @if (tcu.hasError('required')) {
                                        {{ t('smartEnrollProjects.setup.signupForm.legal.urlRequired') }}
                                    } @else if (tcu.hasError('pattern')) {
                                        {{ t('smartEnrollProjects.setup.signupForm.legal.urlInvalid') }}
                                    }
                                </mat-error>
                            }
                        </mat-form-field>
                    }
                }
            </section>

            <!-- 7. Privacy notice -->
            <section
                class="flex flex-col gap-4 rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
                [class.opacity-50]="isNotRequired"
                [class.pointer-events-none]="isNotRequired"
            >
                <header class="flex items-start justify-between gap-4">
                    <div>
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                            {{ t('smartEnrollProjects.setup.signupForm.legal.privacy') }}
                        </h2>
                    </div>
                    <mat-slide-toggle formControlName="showPrivacyNotice"></mat-slide-toggle>
                </header>
                @if (formGroup?.get('showPrivacyNotice')?.value) {
                    @let pu = form.get('privacyUrl');
                    @if (pu) {
                        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="w-full max-w-2xl">
                            <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.compliance.privacyUrl') }}</mat-label>
                            <input
                                matInput
                                type="url"
                                placeholder="https://"
                                autocomplete="off"
                                [formControl]="$any(pu)"
                            />
                            @if (pu.touched && pu.invalid) {
                                <mat-error>
                                    @if (pu.hasError('required')) {
                                        {{ t('smartEnrollProjects.setup.signupForm.legal.urlRequired') }}
                                    } @else if (pu.hasError('pattern')) {
                                        {{ t('smartEnrollProjects.setup.signupForm.legal.urlInvalid') }}
                                    }
                                </mat-error>
                            }
                        </mat-form-field>
                    }
                }
            </section>
        </ng-container>
    </form>
</ng-container>
` }]
  }], null, { countryCodeSearchInput: [{
    type: ViewChild,
    args: ["countryCodeSearchInput"]
  }], form: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupSignUpFormComponent, { className: "SetupSignUpFormComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/sign-up-form/sign-up-form.component.ts", lineNumber: 63 });
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

// src/app/core/services/attachment.service.ts
var AttachmentService = class _AttachmentService {
  constructor() {
    this._http = inject(HttpClient);
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  get authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  /**
   * Upload a file to the backend; returns the persisted attachment record.
   *
   * The file is read as a base64 data URI and posted to
   * `POST /v2/attachments`. Use {@link deleteAttachment} to clean up later.
   */
  uploadAttachment(file, opts = { source: "project" }) {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.onload = () => {
        const body = {
          file: reader.result,
          name: file.name,
          size: file.size,
          type: file.type,
          source: opts.source,
          expirationDays: opts.expirationDays,
          metadata: __spreadValues({ status: "active", uploadedAt: (/* @__PURE__ */ new Date()).toISOString() }, opts.metadata || {})
        };
        this._http.post(`${this.apiUrl}/v2/attachments`, body, { headers: this.authHeaders }).pipe(catchError((err) => throwError(() => err))).subscribe({
          next: (res) => observer.next(res),
          error: (err) => observer.error(err),
          complete: () => observer.complete()
        });
      };
      reader.onerror = () => observer.error(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  }
  /** Best-effort delete (the backend cleans up expired attachments anyway). */
  deleteAttachment(id) {
    if (!id)
      return new Observable((o) => (o.next(null), o.complete()));
    return this._http.delete(`${this.apiUrl}/v2/attachments/${id}`, { headers: this.authHeaders }).pipe(catchError((err) => throwError(() => err)));
  }
  static {
    this.\u0275fac = function AttachmentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AttachmentService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttachmentService, factory: _AttachmentService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttachmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/file-drop-zone/file-drop-zone.component.ts
var _c07 = (a0, a1) => ({ formats: a0, maxSize: a1 });
function FileDropZoneComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 4);
    \u0275\u0275elementStart(1, "p", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.uploading"), " ");
  }
}
function FileDropZoneComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon", 7);
    \u0275\u0275text(2, "file_upload");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 8)(4, "p", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isDragOver ? t_r3("smartEnrollProjects.setup.ui.images.dropFiles") : t_r3("smartEnrollProjects.setup.ui.images.dragFiles"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.supportedFormats", \u0275\u0275pureFunction2(2, _c07, ctx_r1.formatAccepts(), ctx_r1.formatMaxFileSize())), " ");
  }
}
function FileDropZoneComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function FileDropZoneComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275listener("click", function FileDropZoneComponent_ng_container_0_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openFileExplorer());
    })("dragover", function FileDropZoneComponent_ng_container_0_Template_div_dragover_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("dragleave", function FileDropZoneComponent_ng_container_0_Template_div_dragleave_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragLeave($event));
    })("drop", function FileDropZoneComponent_ng_container_0_Template_div_drop_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275template(3, FileDropZoneComponent_ng_container_0_Conditional_3_Template, 3, 1)(4, FileDropZoneComponent_ng_container_0_Conditional_4_Template, 8, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FileDropZoneComponent_ng_container_0_Conditional_5_Template, 2, 1, "p", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.isDragOver ? "border-blue-500 bg-blue-50 dark:bg-blue-950/40" : !ctx_r1.disabled && !ctx_r1.isUploading ? "border-stone-300 dark:border-gray-700 cursor-pointer hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30" : "border-stone-300 dark:border-gray-700 cursor-not-allowed" + (ctx_r1.disabled ? " opacity-60" : ""));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isUploading ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errorMessage ? 5 : -1);
  }
}
var FileDropZoneComponent = class _FileDropZoneComponent {
  constructor() {
    this.accept = "*";
    this.maxFileSize = 10 * 1024 * 1024;
    this.expirationDays = 0;
    this.source = "project";
    this.disabled = false;
    this.attachmentUploaded = new EventEmitter();
    this.fileError = new EventEmitter();
    this.uploadError = new EventEmitter();
    this.fileRemoved = new EventEmitter();
    this._attachments = inject(AttachmentService);
    this._cdr = inject(ChangeDetectorRef);
    this._transloco = inject(TranslocoService);
    this.isDragOver = false;
    this.isUploading = false;
    this.errorMessage = "";
  }
  onDragOver(event) {
    if (this.disabled || this.isUploading)
      return;
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
    this._cdr.markForCheck();
  }
  onDragLeave(event) {
    if (this.disabled || this.isUploading)
      return;
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    this._cdr.markForCheck();
  }
  onDrop(event) {
    if (this.disabled || this.isUploading)
      return;
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    const file = event.dataTransfer?.files?.[0];
    if (file)
      this._handleFile(file);
    this._cdr.markForCheck();
  }
  onFileInputChange(event) {
    if (this.disabled || this.isUploading)
      return;
    const input = event.target;
    const file = input.files?.[0];
    if (file)
      this._handleFile(file);
    input.value = "";
  }
  openFileExplorer() {
    if (this.disabled || this.isUploading)
      return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = this.accept;
    input.style.display = "none";
    input.addEventListener("change", (event) => this.onFileInputChange(event));
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  }
  formatAccepts() {
    return this.accept.split(",").map((t) => t.trim()).filter(Boolean).join(", ");
  }
  formatFileSize(bytes) {
    if (!bytes)
      return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  }
  formatMaxFileSize() {
    return this.formatFileSize(this.maxFileSize);
  }
  _handleFile(file) {
    this.errorMessage = "";
    if (file.size > this.maxFileSize) {
      const error = this._transloco.translate("smartEnrollProjects.setup.ui.images.tooLarge", {
        maxSize: this.formatMaxFileSize()
      });
      this.errorMessage = error;
      this.fileError.emit({ file, error });
      this._cdr.markForCheck();
      return;
    }
    if (!this._isFileTypeAccepted(file)) {
      const error = this._transloco.translate("smartEnrollProjects.setup.ui.images.notAccepted");
      this.errorMessage = error;
      this.fileError.emit({ file, error });
      this._cdr.markForCheck();
      return;
    }
    this.isUploading = true;
    this._cdr.markForCheck();
    this._attachments.uploadAttachment(file, { source: this.source, expirationDays: this.expirationDays }).subscribe({
      next: (response) => {
        this.isUploading = false;
        this.attachmentUploaded.emit({ attachment: response.data });
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.isUploading = false;
        const error = err?.error?.message || this._transloco.translate("smartEnrollProjects.setup.ui.images.uploadFailed");
        this.errorMessage = error;
        this.uploadError.emit({ error });
        this._cdr.markForCheck();
      }
    });
  }
  _isFileTypeAccepted(file) {
    if (this.accept === "*" || !this.accept)
      return true;
    const types = this.accept.split(",").map((t) => t.trim());
    return types.some((type) => {
      if (type.startsWith("."))
        return file.name.toLowerCase().endsWith(type.toLowerCase());
      if (type.includes("/"))
        return file.type === type || file.type.startsWith(type.split("/")[0] + "/");
      return false;
    });
  }
  static {
    this.\u0275fac = function FileDropZoneComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileDropZoneComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileDropZoneComponent, selectors: [["file-drop-zone"]], inputs: { accept: "accept", maxFileSize: "maxFileSize", expirationDays: "expirationDays", source: "source", disabled: "disabled" }, outputs: { attachmentUploaded: "attachmentUploaded", fileError: "fileError", uploadError: "uploadError", fileRemoved: "fileRemoved" }, decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "w-full", "flex-col", "gap-2"], [1, "flex", "min-h-[120px]", "flex-col", "items-center", "justify-center", "gap-3", "rounded-2xl", "border-2", "border-dashed", "bg-stone-50", "p-6", "text-center", "transition-all", "dark:bg-gray-900/40", 3, "click", "dragover", "dragleave", "drop", "ngClass"], [1, "m-0", "text-xs", "text-red-600", "dark:text-red-400"], ["mode", "indeterminate", "diameter", "32"], [1, "m-0", "text-sm", "font-medium", "text-stone-600", "dark:text-stone-300"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "bg-stone-200", "text-stone-700", "dark:bg-gray-700", "dark:text-stone-200"], [1, "!h-5", "!w-5"], [1, "flex", "flex-col", "items-center", "gap-0.5"], [1, "m-0", "text-sm", "font-medium", "text-stone-800", "dark:text-stone-100"], [1, "m-0", "text-xs", "text-stone-500", "dark:text-stone-400"]], template: function FileDropZoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FileDropZoneComponent_ng_container_0_Template, 6, 3, "ng-container", 0);
      }
    }, dependencies: [CommonModule, NgClass, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileDropZoneComponent, [{
    type: Component,
    args: [{ selector: "file-drop-zone", standalone: true, imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="flex w-full flex-col gap-2">
        <div
            (click)="openFileExplorer()"
            (dragover)="onDragOver($event)"
            (dragleave)="onDragLeave($event)"
            (drop)="onDrop($event)"
            class="flex min-h-[120px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed bg-stone-50 p-6 text-center transition-all dark:bg-gray-900/40"
            [ngClass]="
                isDragOver
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40'
                    : (!disabled && !isUploading
                        ? 'border-stone-300 dark:border-gray-700 cursor-pointer hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30'
                        : 'border-stone-300 dark:border-gray-700 cursor-not-allowed' + (disabled ? ' opacity-60' : ''))
            "
        >
            @if (isUploading) {
                <mat-progress-spinner mode="indeterminate" diameter="32"></mat-progress-spinner>
                <p class="m-0 text-sm font-medium text-stone-600 dark:text-stone-300">
                    {{ t('smartEnrollProjects.setup.ui.images.uploading') }}
                </p>
            } @else {
                <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-200 text-stone-700 dark:bg-gray-700 dark:text-stone-200">
                    <mat-icon class="!h-5 !w-5">file_upload</mat-icon>
                </div>
                <div class="flex flex-col items-center gap-0.5">
                    <p class="m-0 text-sm font-medium text-stone-800 dark:text-stone-100">
                        {{
                            isDragOver
                                ? t('smartEnrollProjects.setup.ui.images.dropFiles')
                                : t('smartEnrollProjects.setup.ui.images.dragFiles')
                        }}
                    </p>
                    <p class="m-0 text-xs text-stone-500 dark:text-stone-400">
                        {{
                            t('smartEnrollProjects.setup.ui.images.supportedFormats', {
                                formats: formatAccepts(),
                                maxSize: formatMaxFileSize()
                            })
                        }}
                    </p>
                </div>
            }
        </div>

        @if (errorMessage) {
            <p class="m-0 text-xs text-red-600 dark:text-red-400">{{ errorMessage }}</p>
        }
    </div>
</ng-container>
` }]
  }], null, { accept: [{
    type: Input
  }], maxFileSize: [{
    type: Input
  }], expirationDays: [{
    type: Input
  }], source: [{
    type: Input
  }], disabled: [{
    type: Input
  }], attachmentUploaded: [{
    type: Output
  }], fileError: [{
    type: Output
  }], uploadError: [{
    type: Output
  }], fileRemoved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileDropZoneComponent, { className: "FileDropZoneComponent", filePath: "src/app/shared/file-drop-zone/file-drop-zone.component.ts", lineNumber: 31 });
})();

// src/app/shared/swatch-picker/swatch-picker.component.ts
function SwatchPickerComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SwatchPickerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 8);
    \u0275\u0275text(1);
    \u0275\u0275template(2, SwatchPickerComponent_Conditional_2_Conditional_2_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-stone-700", !ctx_r0.hasError)("dark:text-stone-200", !ctx_r0.hasError)("text-red-600", ctx_r0.hasError);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.required ? 2 : -1);
  }
}
function SwatchPickerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.selectedColor);
  }
}
function SwatchPickerComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 13);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r0.iconContrastColor(color_r3));
  }
}
function SwatchPickerComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SwatchPickerComponent_For_8_Template_button_click_0_listener() {
      const color_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSwatchSelect(color_r3));
    });
    \u0275\u0275template(1, SwatchPickerComponent_For_8_Conditional_1_Template, 2, 2, "mat-icon", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", color_r3)("border-color", ctx_r0.isSwatchSelected(color_r3) ? "#1F2937" : "rgba(0,0,0,0.08)");
    \u0275\u0275classProp("scale-110", ctx_r0.isSwatchSelected(color_r3))("ring-2", ctx_r0.isSwatchSelected(color_r3))("ring-offset-2", ctx_r0.isSwatchSelected(color_r3))("ring-stone-900", ctx_r0.isSwatchSelected(color_r3));
    \u0275\u0275property("disabled", ctx_r0.disabled);
    \u0275\u0275attribute("aria-label", color_r3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSwatchSelected(color_r3) ? 1 : -1);
  }
}
function SwatchPickerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 14)(1, "mat-icon", 15);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 16);
    \u0275\u0275listener("input", function SwatchPickerComponent_Conditional_9_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCustomColorChange($event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.customColor)("border-color", ctx_r0.isCustomSelected ? "#1F2937" : "rgba(0,0,0,0.08)");
    \u0275\u0275classProp("scale-110", ctx_r0.isCustomSelected)("ring-2", ctx_r0.isCustomSelected)("ring-offset-2", ctx_r0.isCustomSelected)("ring-stone-900", ctx_r0.isCustomSelected);
    \u0275\u0275attribute("aria-label", "Custom color");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.iconContrastColor(ctx_r0.customColor));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.customColor || "#ffffff")("disabled", ctx_r0.disabled);
  }
}
var SwatchPickerComponent = class _SwatchPickerComponent {
  constructor(ngControl) {
    this.ngControl = ngControl;
    this.label = "";
    this.colors = ["#2563eb"];
    this.custom = true;
    this.required = false;
    this.disabled = false;
    this._cdr = inject(ChangeDetectorRef);
    this.selectedColor = "";
    this.customColor = "#ffffff";
    this.isCustomSelected = false;
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
    if (this.ngControl)
      this.ngControl.valueAccessor = this;
  }
  ngOnInit() {
    if (this.ngControl)
      this.control = this.ngControl.control || void 0;
  }
  onSwatchSelect(color) {
    if (this.disabled)
      return;
    this.selectedColor = color;
    this.isCustomSelected = false;
    this._onChange(color);
    this._onTouched();
    this._cdr.markForCheck();
  }
  onCustomColorChange(value) {
    if (this.disabled)
      return;
    const color = value || this.customColor;
    this.customColor = color;
    this.selectedColor = color;
    this.isCustomSelected = true;
    this._onChange(color);
    this._onTouched();
    this._cdr.markForCheck();
  }
  isSwatchSelected(color) {
    return this.selectedColor === color && !this.isCustomSelected;
  }
  get hasError() {
    return !!(this.control && this.control.invalid && this.control.touched);
  }
  /** Compute icon color (white on dark backgrounds, dark on light). */
  iconContrastColor(hex) {
    const value = (hex || "").replace("#", "");
    if (value.length !== 6)
      return "#1F2937";
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5 ? "#FFFFFF" : "#1F2937";
  }
  writeValue(value) {
    if (!value) {
      this.selectedColor = "";
      this.isCustomSelected = false;
    } else {
      this.selectedColor = value;
      if (this.colors.includes(value)) {
        this.isCustomSelected = false;
      } else {
        this.customColor = value;
        this.isCustomSelected = true;
      }
    }
    this._cdr.markForCheck();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._cdr.markForCheck();
  }
  static {
    this.\u0275fac = function SwatchPickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SwatchPickerComponent)(\u0275\u0275directiveInject(NgControl, 10));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SwatchPickerComponent, selectors: [["swatch-picker"]], inputs: { label: "label", colors: "colors", custom: "custom", required: "required", disabled: "disabled" }, decls: 10, vars: 14, consts: [[1, "flex", "w-full", "flex-col", "gap-3", "rounded-xl", "border", "bg-white", "px-4", "py-3", "dark:bg-gray-900/40"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "text-sm", "font-semibold", "tracking-tight", 3, "text-stone-700", "dark:text-stone-200", "text-red-600"], [1, "inline-flex", "items-center", "gap-1.5", "font-mono", "text-[11px]", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "inline-block", "h-3", "w-3", "rounded-full", "border", 2, "border-color", "rgba(0, 0, 0, 0.12)", 3, "background-color"], [1, "grid", "grid-cols-7", "gap-2"], ["type", "button", 1, "relative", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "border-2", "transition-transform", "hover:scale-105", 3, "background-color", "border-color", "scale-110", "ring-2", "ring-offset-2", "ring-stone-900", "disabled"], [1, "relative", "flex", "h-9", "w-9", "cursor-pointer", "items-center", "justify-center", "rounded-full", "border-2", "transition-transform", "hover:scale-105", 3, "background-color", "border-color", "scale-110", "ring-2", "ring-offset-2", "ring-stone-900"], [1, "text-sm", "font-semibold", "tracking-tight"], [1, "ml-0.5", "text-red-500"], [1, "inline-block", "h-3", "w-3", "rounded-full", "border", 2, "border-color", "rgba(0, 0, 0, 0.12)"], ["type", "button", 1, "relative", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "border-2", "transition-transform", "hover:scale-105", 3, "click", "disabled"], [1, "!h-3", "!w-3", "!text-[14px]", 3, "color"], [1, "!h-3", "!w-3", "!text-[14px]"], [1, "relative", "flex", "h-9", "w-9", "cursor-pointer", "items-center", "justify-center", "rounded-full", "border-2", "transition-transform", "hover:scale-105"], [1, "!h-3.5", "!w-3.5", "!text-[14px]"], ["type", "color", 1, "absolute", "inset-0", "h-full", "w-full", "cursor-pointer", "opacity-0", 3, "input", "value", "disabled"]], template: function SwatchPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, SwatchPickerComponent_Conditional_2_Template, 3, 8, "label", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275template(4, SwatchPickerComponent_Conditional_4_Template, 1, 2, "span", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275repeaterCreate(7, SwatchPickerComponent_For_8_Template, 2, 15, "button", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275template(9, SwatchPickerComponent_Conditional_9_Template, 4, 17, "label", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("border-stone-200", !ctx.hasError)("dark:border-gray-700", !ctx.hasError)("border-red-400", ctx.hasError);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.label ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selectedColor ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.selectedColor || "\u2014", " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-50", ctx.disabled)("cursor-not-allowed", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.colors);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.custom ? 9 : -1);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwatchPickerComponent, [{
    type: Component,
    args: [{ selector: "swatch-picker", standalone: true, imports: [CommonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div
    class="flex w-full flex-col gap-3 rounded-xl border bg-white px-4 py-3 dark:bg-gray-900/40"
    [class.border-stone-200]="!hasError"
    [class.dark:border-gray-700]="!hasError"
    [class.border-red-400]="hasError"
>
    <div class="flex items-center justify-between gap-3">
        @if (label) {
            <label
                class="text-sm font-semibold tracking-tight"
                [class.text-stone-700]="!hasError"
                [class.dark:text-stone-200]="!hasError"
                [class.text-red-600]="hasError"
            >
                {{ label }}@if (required) {<span class="ml-0.5 text-red-500">*</span>}
            </label>
        }
        <span
            class="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400"
        >
            @if (selectedColor) {
                <span
                    class="inline-block h-3 w-3 rounded-full border"
                    [style.background-color]="selectedColor"
                    style="border-color: rgba(0, 0, 0, 0.12)"
                ></span>
            }
            {{ selectedColor || '\u2014' }}
        </span>
    </div>

    <div
        class="grid grid-cols-7 gap-2"
        [class.opacity-50]="disabled"
        [class.cursor-not-allowed]="disabled"
    >
        @for (color of colors; track color) {
            <button
                type="button"
                class="relative flex h-9 w-9 items-center justify-center rounded-full border-2 transition-transform hover:scale-105"
                [style.background-color]="color"
                [style.border-color]="isSwatchSelected(color) ? '#1F2937' : 'rgba(0,0,0,0.08)'"
                [class.scale-110]="isSwatchSelected(color)"
                [class.ring-2]="isSwatchSelected(color)"
                [class.ring-offset-2]="isSwatchSelected(color)"
                [class.ring-stone-900]="isSwatchSelected(color)"
                [disabled]="disabled"
                [attr.aria-label]="color"
                (click)="onSwatchSelect(color)"
            >
                @if (isSwatchSelected(color)) {
                    <mat-icon class="!h-3 !w-3 !text-[14px]" [style.color]="iconContrastColor(color)">check</mat-icon>
                }
            </button>
        }

        @if (custom) {
            <label
                class="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 transition-transform hover:scale-105"
                [style.background-color]="customColor"
                [style.border-color]="isCustomSelected ? '#1F2937' : 'rgba(0,0,0,0.08)'"
                [class.scale-110]="isCustomSelected"
                [class.ring-2]="isCustomSelected"
                [class.ring-offset-2]="isCustomSelected"
                [class.ring-stone-900]="isCustomSelected"
                [attr.aria-label]="'Custom color'"
            >
                <mat-icon class="!h-3.5 !w-3.5 !text-[14px]" [style.color]="iconContrastColor(customColor)">edit</mat-icon>
                <input
                    type="color"
                    class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    [value]="customColor || '#ffffff'"
                    [disabled]="disabled"
                    (input)="onCustomColorChange($any($event.target).value)"
                />
            </label>
        }
    </div>
</div>
` }]
  }], () => [{ type: NgControl, decorators: [{
    type: Optional
  }, {
    type: Self
  }] }], { label: [{
    type: Input
  }], colors: [{
    type: Input
  }], custom: [{
    type: Input
  }], required: [{
    type: Input
  }], disabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SwatchPickerComponent, { className: "SwatchPickerComponent", filePath: "src/app/shared/swatch-picker/swatch-picker.component.ts", lineNumber: 33 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/user-interface/user-interface.component.ts
function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 17);
    \u0275\u0275elementStart(2, "div", 18)(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearImage("logo"));
    });
    \u0275\u0275elementStart(6, "mat-icon", 21);
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.currentLogo"), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("smartEnrollProjects.setup.ui.images.removeLogo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.removeLogo"), " ");
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "file-drop-zone", 22);
    \u0275\u0275listener("attachmentUploaded", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_10_Template_file_drop_zone_attachmentUploaded_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAttachmentUploaded("logo", $event));
    })("uploadError", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_10_Template_file_drop_zone_uploadError_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onUploadError("logo", $event));
    })("fileError", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_10_Template_file_drop_zone_fileError_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileError("logo", $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("accept", ctx_r1.imageAccept)("maxFileSize", ctx_r1.logoMaxSize)("expirationDays", 0);
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 17);
    \u0275\u0275elementStart(2, "div", 18)(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearImage("image"));
    });
    \u0275\u0275elementStart(6, "mat-icon", 21);
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.currentImage"), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("smartEnrollProjects.setup.ui.images.removeImage"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.removeImage"), " ");
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "file-drop-zone", 22);
    \u0275\u0275listener("attachmentUploaded", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_18_Template_file_drop_zone_attachmentUploaded_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAttachmentUploaded("image", $event));
    })("uploadError", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_18_Template_file_drop_zone_uploadError_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onUploadError("image", $event));
    })("fileError", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_18_Template_file_drop_zone_fileError_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileError("image", $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("accept", ctx_r1.imageAccept)("maxFileSize", ctx_r1.imageMaxSize)("expirationDays", 0);
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275declareLet(1)(2);
    \u0275\u0275elementStart(3, "section", 3)(4, "header")(5, "h2", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_9_Template, 9, 4, "div", 6)(10, SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_10_Template, 1, 3, "file-drop-zone", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "section", 3)(12, "header")(13, "h2", 4);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 5);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_17_Template, 9, 4, "div", 6)(18, SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_18_Template, 1, 3, "file-drop-zone", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "section", 8)(20, "header", 9)(21, "h2", 4);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 5);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 10);
    \u0275\u0275element(26, "swatch-picker", 11)(27, "swatch-picker", 12)(28, "swatch-picker", 13)(29, "swatch-picker", 14)(30, "swatch-picker", 15)(31, "swatch-picker", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_16_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const logoCtrl_r7 = ctx_r1.brandingFormGroup == null ? null : ctx_r1.brandingFormGroup.get("logo");
    const imageCtrl_r8 = ctx_r1.brandingFormGroup == null ? null : ctx_r1.brandingFormGroup.get("image");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-stone-200", !(logoCtrl_r7 == null ? null : logoCtrl_r7.errors))("dark:border-gray-700", !(logoCtrl_r7 == null ? null : logoCtrl_r7.errors))("border-red-500", logoCtrl_r7 == null ? null : logoCtrl_r7.errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.logo"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.logoSubtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.imageValue("logo")) ? 9 : 10, tmp_10_0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-stone-200", !(imageCtrl_r8 == null ? null : imageCtrl_r8.errors))("dark:border-gray-700", !(imageCtrl_r8 == null ? null : imageCtrl_r8.errors))("border-red-500", imageCtrl_r8 == null ? null : imageCtrl_r8.errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.banner"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.bannerSubtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.imageValue("image")) ? 17 : 18, tmp_16_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.brandingFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.colors.heading"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.colors.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("colors", ctx_r1.titleColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.title"))("required", true);
    \u0275\u0275advance();
    \u0275\u0275property("colors", ctx_r1.textColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.text"))("required", true);
    \u0275\u0275advance();
    \u0275\u0275property("colors", ctx_r1.buttonColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.button"))("required", true);
    \u0275\u0275advance();
    \u0275\u0275property("colors", ctx_r1.buttonTextColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.buttonText"))("required", true);
    \u0275\u0275advance();
    \u0275\u0275property("colors", ctx_r1.backgroundColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.background"))("required", true);
    \u0275\u0275advance();
    \u0275\u0275property("colors", ctx_r1.imageBackgroundColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.imageBackground"))("required", true);
  }
}
function SetupUserInterfaceComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupUserInterfaceComponent_ng_container_0_div_1_Template, 32, 39, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFormReady);
  }
}
var HALF_MEGABYTE = 0.5 * 1024 * 1024;
var TWO_MEGABYTES = 2 * 1024 * 1024;
var SetupUserInterfaceComponent = class _SetupUserInterfaceComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this.logoMaxSize = HALF_MEGABYTE;
    this.imageMaxSize = TWO_MEGABYTES;
    this.imageAccept = ".jpg,.jpeg,.png";
    this.titleColors = [
      "#2563eb",
      "#4f46e5",
      "#7c3aed",
      "#9333ea",
      "#c026d3",
      "#db2777",
      "#e11d48",
      "#dc2626",
      "#ea580c",
      "#d97706",
      "#16a34a",
      "#0891b2"
    ];
    this.textColors = [
      "#0f172a",
      "#111827",
      "#1c1917",
      "#1e3a8a",
      "#3730a3",
      "#4c1d95",
      "#581c87",
      "#86198f",
      "#9d174d",
      "#7f1d1d",
      "#7c2d12",
      "#3f3f46"
    ];
    this.buttonColors = [
      "#2563eb",
      "#1d4ed8",
      "#4f46e5",
      "#6d28d9",
      "#9333ea",
      "#db2777",
      "#e11d48",
      "#dc2626",
      "#ea580c",
      "#16a34a",
      "#0d9488",
      "#0f172a"
    ];
    this.buttonTextColors = [
      "#ffffff",
      "#f8fafc",
      "#f1f5f9",
      "#e0e7ff",
      "#dbeafe",
      "#cffafe",
      "#dcfce7",
      "#fef3c7",
      "#ffedd5",
      "#ffe4e6",
      "#fae8ff",
      "#f5f5f4"
    ];
    this.backgroundColors = [
      "#ffffff",
      "#fafafa",
      "#f8fafc",
      "#f0f9ff",
      "#eff6ff",
      "#eef2ff",
      "#faf5ff",
      "#fdf4ff",
      "#fdf2f8",
      "#fff1f2",
      "#fff7ed",
      "#f0fdf4"
    ];
    this.imageBackgroundColors = [
      "#ffffff",
      "#f9fafb",
      "#f5f5f4",
      "#e7e5e4",
      "#f0f9ff",
      "#dbeafe",
      "#e0e7ff",
      "#ede9fe",
      "#fce7f3",
      "#dcfce7",
      "#fef3c7",
      "#ffedd5"
    ];
  }
  get isFormReady() {
    return !this.loading && !!this.form && !!this.brandingFormGroup;
  }
  get brandingFormGroup() {
    return this.form?.get("branding") || null;
  }
  imageValue(forControl) {
    const v = this.brandingFormGroup?.get(forControl)?.value;
    return v || null;
  }
  onAttachmentUploaded(forControl, payload) {
    if (!this.brandingFormGroup)
      return;
    const ctrl = this.brandingFormGroup.get(forControl);
    ctrl?.setValue(payload?.attachment?.url || "");
    ctrl?.markAsTouched();
    ctrl?.markAsDirty();
    ctrl?.setErrors(null);
    ctrl?.updateValueAndValidity();
    const truncatedName = payload?.attachment?.name && payload.attachment.name.length > 50 ? `${payload.attachment.name.slice(0, 47)}...` : payload?.attachment?.name || "";
    this._snack.open(this._transloco.translate("smartEnrollProjects.setup.ui.images.uploadedSuccessfully", { name: truncatedName }), this._transloco.translate("close"), { duration: 3e3 });
    this._cdr.markForCheck();
  }
  onUploadError(forControl, payload) {
    if (!this.brandingFormGroup)
      return;
    const ctrl = this.brandingFormGroup.get(forControl);
    const message = payload?.error || this._transloco.translate("smartEnrollProjects.setup.ui.images.uploadFailed");
    ctrl?.setErrors({ uploadFailed: message });
    this._snack.open(message, this._transloco.translate("close"), { duration: 3e3 });
    this._cdr.markForCheck();
  }
  onFileError(forControl, payload) {
    this._snack.open(payload?.error || "", this._transloco.translate("close"), { duration: 3e3 });
  }
  clearImage(forControl) {
    if (!this.brandingFormGroup)
      return;
    const ctrl = this.brandingFormGroup.get(forControl);
    ctrl?.setValue("");
    ctrl?.markAsDirty();
    ctrl?.markAsTouched();
    ctrl?.setErrors(null);
    ctrl?.updateValueAndValidity();
    this._cdr.markForCheck();
  }
  static {
    this.\u0275fac = function SetupUserInterfaceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupUserInterfaceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupUserInterfaceComponent, selectors: [["setup-user-interface"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6"], [1, "flex", "flex-col", "gap-4", "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "items-center", "gap-4", "rounded-2xl", "border", "border-dashed", "border-stone-300", "bg-stone-50", "p-4", "dark:border-gray-700", "dark:bg-gray-900/40"], ["source", "project", 3, "accept", "maxFileSize", "expirationDays"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [1, "mb-4"], [1, "grid", "grid-cols-1", "gap-3"], ["formControlName", "titleColor", 3, "colors", "label", "required"], ["formControlName", "textColor", 3, "colors", "label", "required"], ["formControlName", "buttonColor", 3, "colors", "label", "required"], ["formControlName", "buttonTextColor", 3, "colors", "label", "required"], ["formControlName", "backgroundColor", 3, "colors", "label", "required"], ["formControlName", "imageBackgroundColor", 3, "colors", "label", "required"], ["alt", "", 1, "h-16", "w-16", "rounded-lg", "border", "border-stone-200", "object-contain", "dark:border-gray-700", 3, "src"], [1, "flex-1", "min-w-[10rem]"], [1, "m-0", "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], ["mat-stroked-button", "", "type", "button", "color", "warn", 1, "rounded-full", 3, "click"], [1, "!h-4", "!w-4"], ["source", "project", 3, "attachmentUploaded", "uploadError", "fileError", "accept", "maxFileSize", "expirationDays"]], template: function SetupUserInterfaceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupUserInterfaceComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      ReactiveFormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoDirective,
      FileDropZoneComponent,
      SwatchPickerComponent
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
      MatIconModule,
      MatSnackBarModule,
      TranslocoModule,
      FileDropZoneComponent,
      SwatchPickerComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6">
        @let logoCtrl = brandingFormGroup?.get('logo');
        @let imageCtrl = brandingFormGroup?.get('image');

        <!-- 1. Logo -->
        <section
            class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
            [class.border-stone-200]="!logoCtrl?.errors"
            [class.dark:border-gray-700]="!logoCtrl?.errors"
            [class.border-red-500]="logoCtrl?.errors"
        >
            <header>
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.ui.images.logo') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.ui.images.logoSubtitle') }}
                </p>
            </header>

            @if (imageValue('logo'); as src) {
                <div class="flex flex-wrap items-center gap-4 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                    <img [src]="src" alt="" class="h-16 w-16 rounded-lg border border-stone-200 object-contain dark:border-gray-700" />
                    <div class="flex-1 min-w-[10rem]">
                        <p class="m-0 text-sm font-semibold text-stone-800 dark:text-stone-100">
                            {{ t('smartEnrollProjects.setup.ui.images.currentLogo') }}
                        </p>
                    </div>
                    <button
                        mat-stroked-button
                        type="button"
                        color="warn"
                        class="rounded-full"
                        (click)="clearImage('logo')"
                        [attr.aria-label]="t('smartEnrollProjects.setup.ui.images.removeLogo')"
                    >
                        <mat-icon class="!h-4 !w-4">delete</mat-icon>
                        {{ t('smartEnrollProjects.setup.ui.images.removeLogo') }}
                    </button>
                </div>
            } @else {
                <file-drop-zone
                    [accept]="imageAccept"
                    [maxFileSize]="logoMaxSize"
                    [expirationDays]="0"
                    source="project"
                    (attachmentUploaded)="onAttachmentUploaded('logo', $event)"
                    (uploadError)="onUploadError('logo', $event)"
                    (fileError)="onFileError('logo', $event)"
                ></file-drop-zone>
            }
        </section>

        <!-- 2. Image / banner -->
        <section
            class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"
            [class.border-stone-200]="!imageCtrl?.errors"
            [class.dark:border-gray-700]="!imageCtrl?.errors"
            [class.border-red-500]="imageCtrl?.errors"
        >
            <header>
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.ui.images.banner') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.ui.images.bannerSubtitle') }}
                </p>
            </header>

            @if (imageValue('image'); as src) {
                <div class="flex flex-wrap items-center gap-4 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                    <img [src]="src" alt="" class="h-16 w-16 rounded-lg border border-stone-200 object-contain dark:border-gray-700" />
                    <div class="flex-1 min-w-[10rem]">
                        <p class="m-0 text-sm font-semibold text-stone-800 dark:text-stone-100">
                            {{ t('smartEnrollProjects.setup.ui.images.currentImage') }}
                        </p>
                    </div>
                    <button
                        mat-stroked-button
                        type="button"
                        color="warn"
                        class="rounded-full"
                        (click)="clearImage('image')"
                        [attr.aria-label]="t('smartEnrollProjects.setup.ui.images.removeImage')"
                    >
                        <mat-icon class="!h-4 !w-4">delete</mat-icon>
                        {{ t('smartEnrollProjects.setup.ui.images.removeImage') }}
                    </button>
                </div>
            } @else {
                <file-drop-zone
                    [accept]="imageAccept"
                    [maxFileSize]="imageMaxSize"
                    [expirationDays]="0"
                    source="project"
                    (attachmentUploaded)="onAttachmentUploaded('image', $event)"
                    (uploadError)="onUploadError('image', $event)"
                    (fileError)="onFileError('image', $event)"
                ></file-drop-zone>
            }
        </section>

        <!-- 3. Colors -->
        <section
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"
            [formGroup]="brandingFormGroup!"
        >
            <header class="mb-4">
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                    {{ t('smartEnrollProjects.setup.ui.colors.heading') }}
                </h2>
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    {{ t('smartEnrollProjects.setup.ui.colors.subtitle') }}
                </p>
            </header>

            <div class="grid grid-cols-1 gap-3">
                <swatch-picker
                    formControlName="titleColor"
                    [colors]="titleColors"
                    [label]="t('smartEnrollProjects.setup.ui.colors.title')"
                    [required]="true"
                ></swatch-picker>
                <swatch-picker
                    formControlName="textColor"
                    [colors]="textColors"
                    [label]="t('smartEnrollProjects.setup.ui.colors.text')"
                    [required]="true"
                ></swatch-picker>
                <swatch-picker
                    formControlName="buttonColor"
                    [colors]="buttonColors"
                    [label]="t('smartEnrollProjects.setup.ui.colors.button')"
                    [required]="true"
                ></swatch-picker>
                <swatch-picker
                    formControlName="buttonTextColor"
                    [colors]="buttonTextColors"
                    [label]="t('smartEnrollProjects.setup.ui.colors.buttonText')"
                    [required]="true"
                ></swatch-picker>
                <swatch-picker
                    formControlName="backgroundColor"
                    [colors]="backgroundColors"
                    [label]="t('smartEnrollProjects.setup.ui.colors.background')"
                    [required]="true"
                ></swatch-picker>
                <swatch-picker
                    formControlName="imageBackgroundColor"
                    [colors]="imageBackgroundColors"
                    [label]="t('smartEnrollProjects.setup.ui.colors.imageBackground')"
                    [required]="true"
                ></swatch-picker>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupUserInterfaceComponent, { className: "SetupUserInterfaceComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/user-interface/user-interface.component.ts", lineNumber: 40 });
})();

// src/app/modules/smart-enroll/projects/setup/setup.types.ts
var isProject = (project) => {
  return !!project && typeof project === "object" && "_id" in project;
};

// src/app/modules/smart-enroll/projects/setup/setup-host.component.ts
var _c08 = (a0) => ["/smart-enroll/projects", a0];
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
function SetupHostComponent_ng_container_0_Conditional_30_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-basic-setup", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-sign-up-form", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("formGroup", ctx_r1.signUpFormGroup())("formType", ctx_r1.currentTarget)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-documents", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("formGroup", ctx_r1.documentsFormGroup())("stepFormControlName", ctx_r1.documentsStepFormControlName())("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-representatives", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-liveness", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("form", ctx_r1.form)("formGroup", ctx_r1.livenessFormGroup())("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SetupHostComponent_ng_container_0_Conditional_30_Case_5_Conditional_0_Template, 1, 3, "setup-representatives", 27)(1, SetupHostComponent_ng_container_0_Conditional_30_Case_5_Conditional_1_Template, 1, 4, "setup-liveness", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.currentTarget === "business" ? 0 : 1);
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-integrations", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-user-interface", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-step-stub", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("titleKey", ctx_r1.steps[ctx_r1.stepIndex] || "smartEnrollProjects.setup.stub.title")("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 35);
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 36);
    \u0275\u0275element(1, "smart-enroll-preview", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("branding", ctx_r1.brandingValue())("form", ctx_r1.form)("view", ctx_r1.previewViews());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 26);
    \u0275\u0275template(2, SetupHostComponent_ng_container_0_Conditional_30_Case_2_Template, 1, 3, "setup-basic-setup", 27)(3, SetupHostComponent_ng_container_0_Conditional_30_Case_3_Template, 1, 5, "setup-sign-up-form", 28)(4, SetupHostComponent_ng_container_0_Conditional_30_Case_4_Template, 1, 5, "setup-documents", 29)(5, SetupHostComponent_ng_container_0_Conditional_30_Case_5_Template, 2, 1)(6, SetupHostComponent_ng_container_0_Conditional_30_Case_6_Template, 1, 3, "setup-integrations", 27)(7, SetupHostComponent_ng_container_0_Conditional_30_Case_7_Template, 1, 3, "setup-user-interface", 27)(8, SetupHostComponent_ng_container_0_Conditional_30_Case_8_Template, 1, 4, "setup-step-stub", 30);
    \u0275\u0275elementStart(9, "div", 31)(10, "button", 32);
    \u0275\u0275listener("click", function SetupHostComponent_ng_container_0_Conditional_30_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousStep());
    });
    \u0275\u0275elementStart(11, "mat-icon", 33);
    \u0275\u0275text(12, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 34);
    \u0275\u0275listener("click", function SetupHostComponent_ng_container_0_Conditional_30_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275template(15, SetupHostComponent_ng_container_0_Conditional_30_Conditional_15_Template, 1, 0, "mat-spinner", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, SetupHostComponent_ng_container_0_Conditional_30_Conditional_17_Template, 2, 3, "aside", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.stepIndex) === 0 ? 2 : tmp_3_0 === 1 ? 3 : tmp_3_0 === 2 ? 4 : tmp_3_0 === 3 ? 5 : tmp_3_0 === 4 ? 6 : tmp_3_0 === 5 ? 7 : 8);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx_r1.canNavigate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.go_back"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canNavigate || !ctx_r1.isFormValidForStep(ctx_r1.stepIndex));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.continue"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.previewViews().length > 0 ? 17 : -1);
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
    \u0275\u0275template(29, SetupHostComponent_ng_container_0_Conditional_29_Template, 2, 0, "div", 20)(30, SetupHostComponent_ng_container_0_Conditional_30_Template, 18, 7, "div", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c08, ctx_r1.projectId));
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
var V3_SIGNUP_FORM_KEYS_PERSONAL = [
  "additionalFields",
  "allowAdditionalFields",
  "countryCode",
  "email",
  "emailGateway",
  "fullName",
  "fullNameStyle",
  "phone",
  "phoneGateway",
  "showPrivacyNotice",
  "showTermsAndConditions"
];
var V3_SIGNUP_FORM_KEYS_BUSINESS = [
  "address",
  "businessBasicInfo",
  "businessBasicInfoStyle",
  "countryCode",
  "email",
  "emailGateway",
  "phone",
  "phoneGateway",
  "showPrivacyNotice",
  "showTermsAndConditions"
];
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
    this._setup.requestProject(id, { populates: ["projectFlows"], projectFlowType: "onboarding" }).subscribe({
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
      version: [project?.version ?? 3, [Validators.required]],
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
  /**
   * Normalize `documents.verificationMethods` to v3/runtime values.
   *
   * The biometrics SDK and runtime only understand `"upload" | "scan"`.
   * Older data may contain `SCAN_AGENT` / `SCAN_STUDIO` / `SCAN_PROMPT` /
   * `SCAN_ZERO` which must be mapped to `scan`.
   */
  _normalizeVerificationMethods(raw) {
    if (!Array.isArray(raw))
      return [];
    const out = /* @__PURE__ */ new Set();
    for (const v of raw) {
      if (typeof v !== "string")
        continue;
      if (v === "upload")
        out.add("upload");
      else if (v === "scan" || v.startsWith("SCAN_"))
        out.add("scan");
    }
    return Array.from(out);
  }
  _initProjectFlowForm(target, currentData) {
    const rawBizStyle = currentData?.signUpForm?.businessBasicInfoStyle;
    const businessBasicInfoStyleNormalized = rawBizStyle === "name_number" ? "name_number" : rawBizStyle === "name" || rawBizStyle === "separate" ? "name" : "name_number";
    return this._formBuilder.group({
      _id: [currentData?._id || ""],
      status: [currentData?.status || "draft"],
      target: [target, [Validators.required]],
      type: ["onboarding", [Validators.required]],
      version: [currentData?.version ?? 3, [Validators.required]],
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
        verificationMethods: [
          this._normalizeVerificationMethods(currentData?.documents?.verificationMethods),
          [Validators.required]
        ]
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
          verificationMethods: [
            this._normalizeVerificationMethods(currentData?.representatives?.documents?.verificationMethods),
            [Validators.required]
          ]
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
        businessBasicInfoStyle: [businessBasicInfoStyleNormalized, [Validators.required]],
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
  _pickV3SignUpFormPayload(signUpForm, target) {
    const keys = target === "business" ? V3_SIGNUP_FORM_KEYS_BUSINESS : V3_SIGNUP_FORM_KEYS_PERSONAL;
    const out = {};
    for (const k of keys) {
      if (signUpForm != null && k in signUpForm && signUpForm[k] !== void 0) {
        out[k] = signUpForm[k];
      }
    }
    return out;
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
      const target = data.target || projectFlowData?.target || "personal";
      const signUpFormV3 = this._pickV3SignUpFormPayload(signUpForm, target);
      formData.projectFlow = __spreadProps(__spreadValues({}, restProjectFlow), { signUpForm: signUpFormV3 });
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
  /** Live branding value for the preview pane. */
  brandingValue() {
    return this.form?.get("branding")?.value;
  }
  /** Preview views to render for the current step (empty array hides the pane). */
  previewViews() {
    const map = this.currentTarget === "business" ? this._setup.businessPreviewViews : this._setup.personalPreviewViews;
    return map[this.stepIndex] ?? [];
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupHostComponent, selectors: [["setup-host"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-5xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300", 3, "routerLink"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", 3, "disabled"], [3, "form", "isStepValid", "loading", "saving"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-7xl"], [1, "flex", "flex-1", "items-center", "justify-center", "py-20"], [1, "grid", "grid-cols-1", "gap-6", "xl:grid-cols-[minmax(0,1fr)_minmax(0,420px)]"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click", "disabled"], [1, "mr-1"], [1, "!h-4", "!w-4"], ["diameter", "40"], [1, "flex", "flex-col", "gap-6"], [3, "form", "loading", "saving"], [3, "form", "formGroup", "formType", "loading", "saving"], [3, "form", "formGroup", "stepFormControlName", "loading", "saving"], [3, "titleKey", "form", "loading", "saving"], [1, "flex", "items-center", "justify-between", "gap-3"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click", "disabled"], [1, "mr-1", "!h-4", "!w-4"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "min-w-32", "rounded-xl", 3, "click", "disabled"], ["diameter", "18", 1, "mr-2", "inline-block"], [1, "xl:sticky", "xl:top-6", "xl:self-start", "xl:max-h-[calc(100vh-3rem)]"], [3, "form", "formGroup", "loading", "saving"], [3, "branding", "form", "view"]], template: function SetupHostComponent_Template(rf, ctx) {
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
      SetupUserInterfaceComponent,
      SmartEnrollPreviewComponent
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
      SetupUserInterfaceComponent,
      SmartEnrollPreviewComponent
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
            <div class="mx-auto w-full max-w-7xl">
                @if (loading()) {
                    <div class="flex flex-1 items-center justify-center py-20">
                        <mat-spinner diameter="40"></mat-spinner>
                    </div>
                } @else if (form) {
                    <div class="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
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

                        @if (previewViews().length > 0) {
                            <aside class="xl:sticky xl:top-6 xl:self-start xl:max-h-[calc(100vh-3rem)]">
                                <smart-enroll-preview
                                    [branding]="brandingValue()"
                                    [form]="form"
                                    [view]="previewViews()"
                                ></smart-enroll-preview>
                            </aside>
                        }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupHostComponent, { className: "SetupHostComponent", filePath: "src/app/modules/smart-enroll/projects/setup/setup-host.component.ts", lineNumber: 123 });
})();
export {
  SetupHostComponent
};
//# sourceMappingURL=chunk-5G22P75P.js.map
