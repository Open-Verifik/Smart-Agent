export interface PhoneCountryCodeOption {
    code: string;
    name: string;
}

/** Default signup phone prefix when the project does not set signUpForm.countryCode */
export const DEFAULT_PHONE_COUNTRY_CODE = "+57";

/** Keep aligned with biometrics-javascript-sdk CountryService.countryCodes */
export const PHONE_COUNTRY_CODES: PhoneCountryCodeOption[] = [
            
            {
                code: "+1",
                name: "United States",
            },
            {
                code: "+52",
                name: "Mexico",
            },
            {
                code: "+1-787",
                name: "Puerto Rico",
            },
            {
                code: "+1-939",
                name: "Puerto Rico",
            },
            {
                code: "+1-868",
                name: "Trinidad and Tobago",
            },

            
            {
                code: "+502",
                name: "Guatemala",
            },
            {
                code: "+503",
                name: "El Salvador",
            },
            {
                code: "+504",
                name: "Honduras",
            },
            {
                code: "+505",
                name: "Nicaragua",
            },
            {
                code: "+506",
                name: "Costa Rica",
            },
            {
                code: "+507",
                name: "Panama",
            },

            
            {
                code: "+54",
                name: "Argentina",
            },
            {
                code: "+55",
                name: "Brazil",
            },
            {
                code: "+56",
                name: "Chile",
            },
            {
                code: "+57",
                name: "Colombia",
            },
            {
                code: "+593",
                name: "Ecuador",
            },
            {
                code: "+595",
                name: "Paraguay",
            },
            {
                code: "+51",
                name: "Peru",
            },
            {
                code: "+598",
                name: "Uruguay",
            },
            {
                code: "+58",
                name: "Venezuela",
            },
            {
                code: "+591",
                name: "Bolivia",
            },
            {
                code: "+592",
                name: "Guyana",
            },
            {
                code: "+597",
                name: "Suriname",
            },

            
            {
                code: "+44",
                name: "United Kingdom",
            },
            {
                code: "+33",
                name: "France",
            },
            {
                code: "+49",
                name: "Germany",
            },
            {
                code: "+39",
                name: "Italy",
            },
            {
                code: "+34",
                name: "Spain",
            },
            {
                code: "+31",
                name: "Netherlands",
            },
            {
                code: "+46",
                name: "Sweden",
            },
            {
                code: "+47",
                name: "Norway",
            },
            {
                code: "+45",
                name: "Denmark",
            },
            {
                code: "+358",
                name: "Finland",
            },
            {
                code: "+41",
                name: "Switzerland",
            },
            {
                code: "+43",
                name: "Austria",
            },
            {
                code: "+32",
                name: "Belgium",
            },
            {
                code: "+351",
                name: "Portugal",
            },
            {
                code: "+353",
                name: "Ireland",
            },
            {
                code: "+7",
                name: "Russia",
            },
            {
                code: "+48",
                name: "Poland",
            },
            {
                code: "+420",
                name: "Czech Republic",
            },
            {
                code: "+421",
                name: "Slovakia",
            },
            {
                code: "+36",
                name: "Hungary",
            },
            {
                code: "+40",
                name: "Romania",
            },
            {
                code: "+359",
                name: "Bulgaria",
            },
            {
                code: "+30",
                name: "Greece",
            },
            {
                code: "+385",
                name: "Croatia",
            },
            {
                code: "+386",
                name: "Slovenia",
            },
            {
                code: "+387",
                name: "Bosnia and Herzegovina",
            },
            {
                code: "+381",
                name: "Serbia",
            },
            {
                code: "+382",
                name: "Montenegro",
            },
            {
                code: "+389",
                name: "North Macedonia",
            },
            {
                code: "+355",
                name: "Albania",
            },
            {
                code: "+380",
                name: "Ukraine",
            },
            {
                code: "+375",
                name: "Belarus",
            },
            {
                code: "+373",
                name: "Moldova",
            },
            {
                code: "+370",
                name: "Lithuania",
            },
            {
                code: "+371",
                name: "Latvia",
            },
            {
                code: "+372",
                name: "Estonia",
            },
            {
                code: "+354",
                name: "Iceland",
            },
            {
                code: "+352",
                name: "Luxembourg",
            },
            {
                code: "+356",
                name: "Malta",
            },
            {
                code: "+357",
                name: "Cyprus",
            },

            
            {
                code: "+86",
                name: "China",
            },
            {
                code: "+81",
                name: "Japan",
            },
            {
                code: "+82",
                name: "South Korea",
            },
            {
                code: "+91",
                name: "India",
            },
            {
                code: "+62",
                name: "Indonesia",
            },
            {
                code: "+60",
                name: "Malaysia",
            },
            {
                code: "+66",
                name: "Thailand",
            },
            {
                code: "+63",
                name: "Philippines",
            },
            {
                code: "+92",
                name: "Pakistan",
            },
            {
                code: "+65",
                name: "Singapore",
            },
            {
                code: "+880",
                name: "Bangladesh",
            },
            {
                code: "+94",
                name: "Sri Lanka",
            },
            {
                code: "+977",
                name: "Nepal",
            },
            {
                code: "+93",
                name: "Afghanistan",
            },
            {
                code: "+98",
                name: "Iran",
            },
            {
                code: "+964",
                name: "Iraq",
            },
            {
                code: "+90",
                name: "Turkey",
            },
            {
                code: "+971",
                name: "United Arab Emirates",
            },
            {
                code: "+966",
                name: "Saudi Arabia",
            },
            {
                code: "+974",
                name: "Qatar",
            },
            {
                code: "+973",
                name: "Bahrain",
            },
            {
                code: "+965",
                name: "Kuwait",
            },
            {
                code: "+968",
                name: "Oman",
            },
            {
                code: "+972",
                name: "Israel",
            },
            {
                code: "+970",
                name: "Palestine",
            },
            {
                code: "+961",
                name: "Lebanon",
            },
            {
                code: "+962",
                name: "Jordan",
            },
            {
                code: "+963",
                name: "Syria",
            },
            {
                code: "+967",
                name: "Yemen",
            },
            {
                code: "+976",
                name: "Mongolia",
            },
            {
                code: "+7",
                name: "Kazakhstan",
            },
            {
                code: "+998",
                name: "Uzbekistan",
            },
            {
                code: "+996",
                name: "Kyrgyzstan",
            },
            {
                code: "+992",
                name: "Tajikistan",
            },
            {
                code: "+993",
                name: "Turkmenistan",
            },
            {
                code: "+994",
                name: "Azerbaijan",
            },
            {
                code: "+374",
                name: "Armenia",
            },
            {
                code: "+995",
                name: "Georgia",
            },
            {
                code: "+84",
                name: "Vietnam",
            },
            {
                code: "+855",
                name: "Cambodia",
            },
            {
                code: "+856",
                name: "Laos",
            },
            {
                code: "+95",
                name: "Myanmar",
            },
            {
                code: "+673",
                name: "Brunei",
            },
            {
                code: "+670",
                name: "Timor-Leste",
            },

            
            {
                code: "+27",
                name: "South Africa",
            },
            {
                code: "+234",
                name: "Nigeria",
            },
            {
                code: "+20",
                name: "Egypt",
            },
            {
                code: "+254",
                name: "Kenya",
            },
            {
                code: "+255",
                name: "Tanzania",
            },
            {
                code: "+256",
                name: "Uganda",
            },
            {
                code: "+233",
                name: "Ghana",
            },
            {
                code: "+251",
                name: "Ethiopia",
            },
            {
                code: "+213",
                name: "Algeria",
            },
            {
                code: "+212",
                name: "Morocco",
            },
            {
                code: "+216",
                name: "Tunisia",
            },
            {
                code: "+218",
                name: "Libya",
            },
            {
                code: "+249",
                name: "Sudan",
            },
            {
                code: "+237",
                name: "Cameroon",
            },
            {
                code: "+225",
                name: "Ivory Coast",
            },
            {
                code: "+221",
                name: "Senegal",
            },
            {
                code: "+223",
                name: "Mali",
            },
            {
                code: "+226",
                name: "Burkina Faso",
            },
            {
                code: "+227",
                name: "Niger",
            },
            {
                code: "+228",
                name: "Togo",
            },
            {
                code: "+229",
                name: "Benin",
            },
            {
                code: "+220",
                name: "Gambia",
            },
            {
                code: "+245",
                name: "Guinea-Bissau",
            },
            {
                code: "+224",
                name: "Guinea",
            },
            {
                code: "+238",
                name: "Cape Verde",
            },
            {
                code: "+239",
                name: "Sao Tome and Principe",
            },
            {
                code: "+240",
                name: "Equatorial Guinea",
            },
            {
                code: "+241",
                name: "Gabon",
            },
            {
                code: "+242",
                name: "Congo",
            },
            {
                code: "+243",
                name: "Democratic Republic of the Congo",
            },
            {
                code: "+244",
                name: "Angola",
            },
            {
                code: "+235",
                name: "Chad",
            },
            {
                code: "+236",
                name: "Central African Republic",
            },
            {
                code: "+250",
                name: "Rwanda",
            },
            {
                code: "+257",
                name: "Burundi",
            },
            {
                code: "+258",
                name: "Mozambique",
            },
            {
                code: "+260",
                name: "Zambia",
            },
            {
                code: "+265",
                name: "Malawi",
            },
            {
                code: "+267",
                name: "Botswana",
            },
            {
                code: "+264",
                name: "Namibia",
            },
            {
                code: "+268",
                name: "Eswatini",
            },
            {
                code: "+266",
                name: "Lesotho",
            },
            {
                code: "+261",
                name: "Madagascar",
            },
            {
                code: "+230",
                name: "Mauritius",
            },
            {
                code: "+248",
                name: "Seychelles",
            },
            {
                code: "+269",
                name: "Comoros",
            },
            {
                code: "+291",
                name: "Eritrea",
            },
            {
                code: "+253",
                name: "Djibouti",
            },
            {
                code: "+252",
                name: "Somalia",
            },
            {
                code: "+232",
                name: "Sierra Leone",
            },
            {
                code: "+231",
                name: "Liberia",
            },

            
            {
                code: "+61",
                name: "Australia",
            },
            {
                code: "+64",
                name: "New Zealand",
            },
            {
                code: "+679",
                name: "Fiji",
            },
            {
                code: "+675",
                name: "Papua New Guinea",
            },
            {
                code: "+677",
                name: "Solomon Islands",
            },
            {
                code: "+678",
                name: "Vanuatu",
            },
            {
                code: "+685",
                name: "Samoa",
            },
            {
                code: "+676",
                name: "Tonga",
            },
            {
                code: "+688",
                name: "Tuvalu",
            },
            {
                code: "+686",
                name: "Kiribati",
            },
            {
                code: "+684",
                name: "American Samoa",
            },
            {
                code: "+687",
                name: "New Caledonia",
            },
            {
                code: "+689",
                name: "French Polynesia",
            },
        ];
