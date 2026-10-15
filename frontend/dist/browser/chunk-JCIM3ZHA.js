import {
  isClientVisibleBatchDependencyField
} from "./chunk-USONFPXP.js";

// src/app/modules/smart-batch/feature-group.util.ts
var FEATURE_GROUP_ICONS = {
  citizen: "person_search",
  vehicle: "directions_car",
  company: "business",
  other: "hub"
};
var featureGroupIcon = (feature) => FEATURE_GROUP_ICONS[featureGroup(feature)];
var featureGroup = (feature) => {
  const blob = `${feature.code ?? ""} ${feature.name ?? ""} ${feature.url ?? ""} ${feature.description ?? ""}`.toLowerCase();
  if (/vehicle|vehículo|placa|plate|runt|simit|fasecolda|soat|transit/.test(blob)) {
    return "vehicle";
  }
  if (/rues|empresa|company|business|dian|nit|rut|camara|cámara|comercial/.test(blob)) {
    return "company";
  }
  if (/cedula|cédula|citizen|persona|registrad|pep|antecedent|procurad|policia|policía|contralor|inpec|migrac/.test(blob)) {
    return "citizen";
  }
  return "other";
};
var isSmartBatchCatalogFeature = (feature) => {
  const group = feature && typeof feature === "object" && "group" in feature ? feature.group : void 0;
  return !group || group === "apiRequest";
};

// src/app/modules/smart-batch/endpoint-param-highlight.util.ts
var normalizeField = (field) => field.replace(/[^a-z0-9]/gi, "").toLowerCase();
var classifyParamField = (field) => {
  const token = normalizeField(field);
  if (!token)
    return "other";
  if (/^(plate|placa|licenseplate|vehicleteplate|vehicleplate)$/.test(token) || token.includes("placa") || token.endsWith("plate")) {
    return "plate";
  }
  if (/date|fecha|expedic|emision|emission|birth|nacimiento|expir|issue/.test(token)) {
    return "date";
  }
  if (/^(documentnumber|documenttype|document|cedula|cédula|identificacion|identification|idnumber|nit)$/.test(token) || token.includes("document") || token.includes("cedula")) {
    return "document";
  }
  return "other";
};
var requiredVisibleFields = (feature) => {
  const fromDeps = (feature.dependencies ?? []).filter((dep) => {
    const field = dep.field ?? "";
    if (!isClientVisibleBatchDependencyField(field))
      return false;
    if (dep.requiredWhen)
      return false;
    return dep.required !== false;
  }).map((dep) => dep.field);
  if (fromDeps.length)
    return fromDeps;
  return (feature.requiredParams ?? []).filter((field) => isClientVisibleBatchDependencyField(field));
};
var requiredParamKinds = (feature) => {
  return new Set(requiredVisibleFields(feature).map(classifyParamField));
};
var PARAM_FIELD_ORDER = [
  "documentType",
  "documentNumber",
  "plate",
  "dateOfBirth",
  "fechaExpedicion",
  "expirationDate",
  "fullName"
];
var PARAM_FIELD_LABEL_KEYS = {
  documentType: "visitaGuide.paramFieldDocumentType",
  documentNumber: "visitaGuide.paramFieldDocumentNumber",
  plate: "visitaGuide.paramFieldPlate",
  dateOfBirth: "visitaGuide.paramFieldDateOfBirth",
  fechaExpedicion: "visitaGuide.paramFieldIssueDate",
  expirationDate: "visitaGuide.paramFieldExpirationDate",
  fullName: "visitaGuide.paramFieldFullName",
  vin: "visitaGuide.paramFieldVin"
};
var canonicalParamFilterId = (field) => {
  const token = normalizeField(field);
  if (!token)
    return field;
  if (/^(plate|placa|licenseplate|vehicleteplate|vehicleplate)$/.test(token) || token.includes("placa") || token.endsWith("plate")) {
    return "plate";
  }
  if (/documenttype|tipodocumento|doctype|idtype|typedocument/.test(token)) {
    return "documentType";
  }
  if (/documentnumber|documentid|idnumber|numerodocumento|nrodocumento|cedula|identificacion|identification/.test(token) || token === "nit" || token.endsWith("nit")) {
    return "documentNumber";
  }
  if (/dateofbirth|fechanacimiento|birth/.test(token))
    return "dateOfBirth";
  if (/fechaexpedic|expeditiondate|issuedate|emision|emission/.test(token))
    return "fechaExpedicion";
  if (/expir|vencim/.test(token))
    return "expirationDate";
  if (/^(fullname|nombrecompleto|name)$/.test(token))
    return "fullName";
  return field;
};
var uniqueFields = (fields) => {
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const field of fields) {
    if (!field || seen.has(field))
      continue;
    seen.add(field);
    result.push(field);
  }
  return result;
};
var declaredVisibleFields = (feature) => {
  const fromDeps = (feature.dependencies ?? []).filter((dep) => {
    const field = dep.field ?? "";
    if (!isClientVisibleBatchDependencyField(field))
      return false;
    return dep.required !== false;
  }).map((dep) => dep.field);
  if (fromDeps.length)
    return uniqueFields(fromDeps);
  return uniqueFields((feature.requiredParams ?? []).filter((field) => isClientVisibleBatchDependencyField(field)));
};
var featureParamFilterIds = (feature) => uniqueFields(declaredVisibleFields(feature).map(canonicalParamFilterId));
var enumsForCanonicalParam = (feature, canonical) => {
  const values = (feature.dependencies ?? []).filter((dep) => dep.field && canonicalParamFilterId(dep.field) === canonical).flatMap((dep) => dep.enum ?? []);
  return uniqueFields(values.map((item) => String(item).trim()).filter(Boolean));
};
var isCanonicalParamRequired = (feature, canonical) => {
  const deps = (feature.dependencies ?? []).filter((dep) => dep.field && canonicalParamFilterId(dep.field) === canonical);
  if (deps.length)
    return deps.some((dep) => dep.required !== false && !dep.requiredWhen);
  return requiredVisibleFields(feature).map(canonicalParamFilterId).includes(canonical);
};
var featureParamChips = (feature) => featureParamFilterIds(feature).map((field) => ({
  field,
  required: isCanonicalParamRequired(feature, field),
  enums: enumsForCanonicalParam(feature, field)
}));
var requiredParamChipClass = (required) => required ? "border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-800/60 dark:bg-orange-950/40 dark:text-orange-300" : "border-stone-200 bg-stone-50 text-stone-500 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-400";
var paramEnumChipClass = "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/50 dark:bg-violet-900/20 dark:text-violet-300";
var humanizeParamField = (field) => field.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/^./, (character) => character.toUpperCase()).trim();
var paramFieldLabelKey = (field) => PARAM_FIELD_LABEL_KEYS[field] ?? "visitaGuide.paramFieldOther";
var collectRequiredParamFields = (features) => {
  const seen = /* @__PURE__ */ new Set();
  for (const feature of features) {
    for (const field of featureParamFilterIds(feature))
      seen.add(field);
  }
  return [...seen].sort((left, right) => {
    const leftRank = PARAM_FIELD_ORDER.indexOf(left);
    const rightRank = PARAM_FIELD_ORDER.indexOf(right);
    if (leftRank === -1 && rightRank === -1)
      return left.localeCompare(right);
    if (leftRank === -1)
      return 1;
    if (rightRank === -1)
      return -1;
    return leftRank - rightRank;
  });
};
var matchesRequiredParamFilters = (feature, fields) => {
  if (!fields.length)
    return true;
  const required = featureParamFilterIds(feature);
  if (required.length !== fields.length)
    return false;
  const selected = new Set(fields);
  return required.every((field) => selected.has(field));
};
var matchesParamHighlight = (feature, highlight) => {
  if (!highlight)
    return false;
  const kinds = requiredParamKinds(feature);
  if (kinds.size === 0)
    return false;
  const only = !kinds.has("date") && !kinds.has("other") && kinds.size > 0;
  if (highlight === "plate-only") {
    return only && kinds.has("plate") && !kinds.has("document");
  }
  if (highlight === "document-only") {
    return only && kinds.has("document") && !kinds.has("plate") && featureGroup(feature) !== "company";
  }
  return only && kinds.has("document") && !kinds.has("plate") && featureGroup(feature) === "company";
};
var PARAM_HIGHLIGHT_TONES = {
  "document-only": {
    chipIdle: "border-sky-300 bg-sky-50 text-sky-800 dark:border-sky-700 dark:bg-sky-950/40 dark:text-sky-200",
    chipActive: "border-sky-600 bg-sky-600 text-white dark:border-sky-400 dark:bg-sky-500",
    card: "border-sky-500 bg-sky-50 ring-2 ring-sky-400 dark:border-sky-400 dark:bg-sky-950/40 dark:ring-sky-500",
    badge: "bg-sky-600 text-white",
    swatch: "bg-sky-500"
  },
  "plate-only": {
    chipIdle: "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200",
    chipActive: "border-amber-600 bg-amber-500 text-stone-950 dark:border-amber-400 dark:bg-amber-400",
    card: "border-amber-500 bg-amber-50 ring-2 ring-amber-400 dark:border-amber-400 dark:bg-amber-950/40 dark:ring-amber-500",
    badge: "bg-amber-500 text-stone-950",
    swatch: "bg-amber-500"
  },
  "nit-only": {
    chipIdle: "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200",
    chipActive: "border-emerald-600 bg-emerald-600 text-white dark:border-emerald-400 dark:bg-emerald-500",
    card: "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-400 dark:border-emerald-400 dark:bg-emerald-950/40 dark:ring-emerald-500",
    badge: "bg-emerald-600 text-white",
    swatch: "bg-emerald-500"
  }
};
var paramHighlightChipClass = (highlight, active) => {
  const tone = PARAM_HIGHLIGHT_TONES[highlight];
  return active ? tone.chipActive : tone.chipIdle;
};
var paramHighlightCardClass = (highlight, matched) => {
  if (!highlight || !matched)
    return "";
  return PARAM_HIGHLIGHT_TONES[highlight].card;
};
var paramHighlightBadgeClass = (highlight) => {
  if (!highlight)
    return "";
  return PARAM_HIGHLIGHT_TONES[highlight].badge;
};
var paramHighlightSwatchClass = (highlight) => PARAM_HIGHLIGHT_TONES[highlight].swatch;

// src/app/modules/smart-batch/endpoint-io-catalog.ts
var ENDPOINT_IO_CATALOG = {
  "world_api_dea": {
    "inputs": [
      "fullName",
      "documentType",
      "documentNumber",
      "dateOfBirth",
      "expirationDate"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "firstName",
      "lastName",
      "arrayName",
      "foundInDEA",
      "urlDEA"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PEP",
        "PPT",
        "NIT",
        "CCVE",
        "CCEC",
        "DNI",
        "DNIAR",
        "DNIHN",
        "CIC",
        "CIE",
        "RUN",
        "CURP",
        "CUI",
        "CCPA",
        "CI",
        "CPF",
        "DUI",
        "CCUY",
        "CUIT",
        "RUCEC",
        "FME",
        "RUC",
        "RUT",
        "CNPJ"
      ]
    }
  },
  "usa_api_vehicle": {
    "inputs": [
      "state",
      "plate"
    ],
    "outputs": [
      "bodyClass",
      "brakeSystemType",
      "displacement(CC)",
      "displacement(CI)",
      "displacement(L)",
      "doors",
      "driveType",
      "engineBrake(hp)From",
      "engineConfiguration",
      "engineNumberofCylinders",
      "grossVehicleWeightRatingFrom",
      "make",
      "manufacturerName",
      "model",
      "modelYear",
      "nCSABodyType",
      "nCSAModel",
      "plantCity",
      "plantCountry",
      "plantState",
      "plate",
      "seatBeltType",
      "state",
      "vehicleType",
      "vin"
    ],
    "inputEnums": {
      "state": [
        "AL",
        "AK",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY"
      ]
    }
  },
  "colombia_api_simit_agreements": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "acuerdosPagos",
      "estadosResoluciones",
      "fechaComparendo",
      "fechaResolucion",
      "noComparendo",
      "nombresInfractores",
      "permitePago",
      "resoluciones",
      "secretarias",
      "total"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PA",
        "RC",
        "TI"
      ]
    }
  },
  "feature_kyc_solution": {
    "inputs": [],
    "outputs": []
  },
  "peru_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "DNI"
      ]
    }
  },
  "colombia_api_vehicle_complete": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "colombia_api_driver": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "ANSVpayments",
      "aptitudeCertificates",
      "categoria",
      "descripcionTramite",
      "estadoDocumento",
      "fechaExpedicion",
      "fechaSolicitud",
      "fechaVencimiento",
      "idPersona",
      "nombreCea",
      "tipoCertificado",
      "citizenStatus",
      "consultationDateTime",
      "documentNumber",
      "documentType",
      "driverStatus",
      "fullName",
      "identityValidationAttempts",
      "estadoUsuario",
      "fechaDesbloqueo",
      "validaciones",
      "identityValidationRequests",
      "infractions",
      "nroPazYSalvo",
      "tieneMultas",
      "inscriptionDate",
      "inscriptionNumber",
      "licenses",
      "authorityTransit",
      "category",
      "dueDate",
      "endDateSuspension",
      "examExpirationDate",
      "expeditionDate",
      "licenceNumber",
      "otExpide",
      "resolutionNumber",
      "restrictions",
      "startDateSuspension",
      "substratum",
      "medicalCertificates",
      "requests",
      "descripcionTipoValidacion",
      "descripcionValidacion",
      "entidad",
      "estadoSolicitud",
      "estadoTramite",
      "identificador",
      "nombreTramite",
      "numeroSolicitud",
      "registro",
      "tramitesRealizados",
      "sicovRequests",
      "totalLicenses",
      "transitTaxes",
      "firstName",
      "lastName",
      "arrayName"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PA",
        "PPT",
        "NIT"
      ]
    }
  },
  "colombia_api_registraduria_voting": {
    "inputs": [
      "documentNumber"
    ],
    "outputs": []
  },
  "colombia_api_vehicle": {
    "inputs": [
      "documentType",
      "documentNumber",
      "plate"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "plate",
      "vehicleInformation",
      "color",
      "brand",
      "line",
      "enrollmentDate",
      "soat",
      "valid",
      "expeditionDate",
      "dueDate",
      "coverageStartDate",
      "soatNumber",
      "techReview",
      "reviewNumber",
      "requireTechReview",
      "consultationDateTime"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "TI",
        "CE",
        "PA",
        "RC"
      ]
    }
  },
  "colombia_api_simit_suspensions": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName",
      "suspensiones",
      "numeroResolucion",
      "fechaSuspension",
      "estado",
      "motivo"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PA",
        "RC",
        "TI"
      ]
    }
  },
  "chile_api_vehicle": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "chasisNumber",
      "color",
      "engineNumber",
      "fines",
      "manufacturer",
      "mark",
      "model",
      "orderTheft",
      "origin",
      "owner",
      "plate",
      "publicTrans",
      "revision",
      "rut",
      "type",
      "typeTransPub",
      "year"
    ]
  },
  "chile_api_vehicle_v3": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "plate",
      "vehicle",
      "type",
      "mark",
      "model",
      "year",
      "engineNumber",
      "chasisNumber",
      "vin",
      "sealType",
      "history",
      "date",
      "plantCode",
      "plantName",
      "certificateNumber",
      "expirationDate"
    ]
  },
  "colombia_api_vehicle_complete_by_vin": {
    "inputs": [
      "vin"
    ],
    "outputs": [
      "datosTecnicos",
      "alto",
      "ancho",
      "capacidadCarga",
      "largo",
      "noEjes",
      "pasajerosSentados",
      "peso",
      "pesoBrutoVehicular",
      "rodaje",
      "documentNumber",
      "garantiasFavorDe",
      "garantiasMobiliarias",
      "informacionBlindaje",
      "blindado",
      "informacionGeneral",
      "cilindraje",
      "claseVehiculo",
      "clasicoAntiguo",
      "clasificacion",
      "color",
      "diasMatriculado",
      "esRegrabadoChasis",
      "esRegrabadoMotor",
      "esRegrabadoSerie",
      "esRegrabadoVin",
      "estadoDelVehiculo",
      "fechaMatricula",
      "idTipoServicio",
      "linea",
      "marca",
      "modelo",
      "mostrarSolicitudes",
      "noChasis",
      "noLicenciaTransito",
      "noMotor",
      "noPlaca",
      "noSerie",
      "noVin",
      "organismoTransito",
      "pesoBruto",
      "prendas",
      "puertas",
      "repotenciado",
      "seguridadEstado",
      "tarjetaServicio",
      "tieneGravamenes",
      "tieneLTImportacion",
      "tipoCarroceria",
      "tipoCombustible",
      "tipoServicio",
      "validacionDIAN",
      "vehiculoEnsenanza",
      "verValidaDIAN",
      "limitacionPropiedad",
      "normalizacionSaneamiento",
      "deficienciaMatriculaInicial",
      "vehiculoNormalizado",
      "fecha",
      "numeroActoAdministrativo",
      "descargaCertificado",
      "solicitudNormalizacion",
      "polizasResponsabilidadCivil",
      "idPoliza",
      "numeroPoliza",
      "fechaExpedicion",
      "fechaInicioVigencia",
      "fechaFinVigencia",
      "entidadExpide",
      "tipoPoliza",
      "estado",
      "tipoDocTomador",
      "nroDocTomador",
      "coberturas",
      "soat",
      "origen",
      "tipoTarifa",
      "noPoliza",
      "fechaExpediSoat",
      "fechaVigencia",
      "fechaVencimiento",
      "entidadExpideSoat",
      "estadoSoat",
      "placa",
      "nombrePais",
      "solicitudes",
      "noSolicitud",
      "fechaSolicitud",
      "tramitesRealizados",
      "entidad",
      "tarjetaOperacion",
      "tecnoMecanica",
      "cdaExpide",
      "tipoRevision",
      "vigente",
      "nroCertificado",
      "numeroPlaca",
      "informacionConsistente",
      "url",
      "vin"
    ]
  },
  "brasil_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber",
      "dateOfBirth"
    ],
    "outputs": [
      "arrayName",
      "dateOfBirth",
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "lastName"
    ],
    "inputEnums": {
      "documentType": [
        "CPF"
      ]
    }
  },
  "communication_global_email_otp": {
    "inputs": [
      "email"
    ],
    "outputs": []
  },
  "colombia_api_rues": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "NIT"
      ]
    }
  },
  "colombia_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "arrayName",
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "lastName"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PPT",
        "NIT",
        "PEP"
      ]
    }
  },
  "colombia_api_rethus": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName",
      "rethus",
      "academic",
      "dataSSO"
    ],
    "inputEnums": {
      "documentType": [
        "CC"
      ]
    }
  },
  "colombia_api_adres": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "affiliations",
      "affiliationType",
      "effectiveDate",
      "endDate",
      "entity",
      "regime",
      "arrayName",
      "department",
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "lastName",
      "municipality"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PA",
        "PE",
        "PEP",
        "PPT"
      ]
    }
  },
  "colombia_api_contraloria_certificate": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "searchDate",
      "pdfBase64"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "TI",
        "PA",
        "PEP"
      ]
    }
  },
  "venezuela_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "arrayName",
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "lastName"
    ],
    "inputEnums": {
      "documentType": [
        "CCVE"
      ]
    }
  },
  "mexico_api_vehicle": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "world_api_interpol": {
    "inputs": [
      "fullName",
      "documentType",
      "documentNumber",
      "dateOfBirth",
      "expirationDate"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName",
      "arrayName",
      "foundInInterpol",
      "details",
      "totalCards",
      "cards"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PEP",
        "PPT",
        "NIT",
        "CCVE",
        "CCEC",
        "DNI",
        "DNIAR",
        "DNIHN",
        "CIC",
        "CIE",
        "RUN",
        "CURP",
        "CUI",
        "CCPA",
        "CI",
        "CPF",
        "DUI",
        "CCUY",
        "CUIT",
        "RUCEC",
        "FME",
        "RUC",
        "RUT",
        "CNPJ"
      ]
    }
  },
  "world_api_ofac": {
    "inputs": [
      "fullName",
      "documentType",
      "documentNumber",
      "dateOfBirth",
      "expirationDate"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "firstName",
      "lastName",
      "arrayName",
      "foundInOFAC",
      "details"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PEP",
        "PPT",
        "NIT",
        "CCVE",
        "CCEC",
        "DNI",
        "DNIAR",
        "DNIHN",
        "CIC",
        "CIE",
        "RUN",
        "CURP",
        "CUI",
        "CCPA",
        "CI",
        "CPF",
        "DUI",
        "CCUY",
        "CUIT",
        "RUCEC",
        "FME",
        "RUC",
        "RUT",
        "CNPJ"
      ]
    }
  },
  "mexico_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName",
      "dateOfBirth",
      "nationality"
    ],
    "inputEnums": {
      "documentType": [
        "CURP"
      ]
    }
  },
  "peru_api_vehicle": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "plate",
      "use",
      "type",
      "brand",
      "model",
      "year",
      "engineSerial",
      "chasisSerial",
      "seats",
      "validFormat",
      "serial"
    ]
  },
  "peru_api_vehicle_v3": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "peru_api_vehicle_soat": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "plate",
      "soat",
      "ConsultarSoatResult",
      "NombreCompania",
      "FechaInicio",
      "FechaFin",
      "Placa",
      "N\xFAmeroPoliza",
      "NombreUsovehiculo",
      "NombreClasevehiculo",
      "Estado",
      "CodigoUnicoPoliza",
      "CodigoSBSAseguradora",
      "FechaControlPolicial"
    ]
  },
  "colombia_api_simit_subpoenas": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "comparendos",
      "tipovehiculo",
      "estadoComparendo",
      "fechaComparendo",
      "fotodeteccion",
      "N\xFAmeroComparendo",
      "placavehiculo",
      "secretariaComparendo",
      "total",
      "idOrganismoTransito",
      "codigoInfraccion",
      "descripcionInfraccion",
      "direccionComparendo",
      "infractorComparendo",
      "serviciovehiculo"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PA",
        "RC",
        "TI"
      ]
    }
  },
  "colombia_api_min_trabajo": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PPT",
        "PEP",
        "PA"
      ]
    }
  },
  "colombia_api_criminal_history": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "citizen",
      "hasRecord",
      "isRequired",
      "legend",
      "antecedentes",
      "sanciones",
      "instancias",
      "delitos",
      "inhabilidades"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PPT",
        "NIT",
        "PEP"
      ]
    }
  },
  "costarica_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName"
    ],
    "inputEnums": {
      "documentType": [
        "CCCR"
      ]
    }
  },
  "chile_api_transport_vehicle": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "plate",
      "brand",
      "model",
      "serviceType",
      "vehicleStatus",
      "capacity",
      "region",
      "serviceFolio",
      "serviceResponsibleName",
      "serviceStatus",
      "serviceExpiryDate"
    ]
  },
  "chile_api_vehicle_soap": {
    "inputs": [
      "plate",
      "policyNumber"
    ],
    "outputs": [
      "plate",
      "policyNumber",
      "vehicleType",
      "brand",
      "model",
      "manufactureYear",
      "engineNumber",
      "folioNumber",
      "insuranceCompany",
      "ownerName",
      "ownerRut",
      "validFrom",
      "validTo",
      "premium"
    ]
  },
  "panama_api_vehicle": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "chile_api_business_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "activities",
      "currentEconomicActivities",
      "activity",
      "category",
      "affectIVA",
      "date",
      "documentNumber",
      "documentType",
      "fullRUT",
      "name",
      "stampedDocuments",
      "startDate"
    ],
    "inputEnums": {
      "documentType": [
        "RUT"
      ]
    }
  },
  "ecuador_api_vehicle_fines": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "camvCpn",
      "class",
      "cylinderCapacity",
      "information",
      "lastCheckUpDate",
      "lastPaymentYear",
      "lastRegistrationDate",
      "manufactureCountry",
      "model",
      "plate",
      "purchaseDate",
      "reasonMessage",
      "registrationCanton",
      "registrationExpirationDate",
      "remission",
      "service",
      "total",
      "usageType",
      "year",
      "multas",
      "infraccion",
      "entidad",
      "citacion",
      "placa",
      "documento",
      "fechaDeEmision",
      "fechaNotificacion",
      "fechaLimiteDePago",
      "puntos",
      "pag",
      "anu",
      "imp",
      "sancion",
      "multa",
      "remision",
      "totalAPagar",
      "articuloliteral",
      "tamanoImagen",
      "bloqueo"
    ]
  },
  "colombia_api_simit_subpoenas_details": {
    "inputs": [
      "documentType",
      "documentNumber",
      "numeroComparendo",
      "idOrganismoTransito"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PA",
        "RC",
        "TI"
      ]
    }
  },
  "brasil_api_company_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "address",
      "city",
      "complement",
      "district",
      "state",
      "street",
      "zipCode",
      "businessName",
      "documentNumber",
      "documentType",
      "legalNature",
      "mainActivity",
      "description",
      "openingDate",
      "secondaryActivities",
      "taxId",
      "tradeName",
      "type"
    ],
    "inputEnums": {
      "documentType": [
        "CNPJ"
      ]
    }
  },
  "colombia_api_dian_invoicer": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentNumber",
      "documentType",
      "email",
      "nit"
    ],
    "inputEnums": {
      "documentType": [
        "NIT"
      ]
    }
  },
  "api_colombia_contracts": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "value",
      "contractor",
      "contracts"
    ],
    "inputEnums": {
      "documentType": [
        "NIT",
        "CC",
        "CE",
        "PA",
        "RC",
        "TI",
        "PEP",
        "CCVE",
        "CURP",
        "DNI",
        "CCEC"
      ]
    }
  },
  "colombia_api_police_rnmc": {
    "inputs": [
      "documentType",
      "documentNumber",
      "date"
    ],
    "outputs": [
      "arrayName",
      "correctiveMeasures",
      "attribution",
      "address",
      "measure",
      "referredTo",
      "date",
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "lastName",
      "records",
      "department",
      "file",
      "format",
      "identification",
      "municipality",
      "offender"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "TI",
        "PA"
      ]
    }
  },
  "colombia_api_dian": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "date",
      "descripcion",
      "estado",
      "nombreRazon",
      "nit"
    ],
    "inputEnums": {
      "documentType": [
        "NIT"
      ]
    }
  },
  "peru_api_company_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "RUC"
      ]
    }
  },
  "colombia_api_judicial_process_details": {
    "inputs": [
      "processNumber"
    ],
    "outputs": [
      "actions",
      "actuacion",
      "anotacion",
      "cant",
      "codRegla",
      "consActuacion",
      "conDocumentos",
      "fechaActuacion",
      "fechaFinal",
      "fechaInicial",
      "fechaRegistro",
      "idRegActuacion",
      "llaveProceso",
      "details",
      "claseProceso",
      "contenidoRadicacion",
      "despacho",
      "esPrivado",
      "fechaConsulta",
      "fechaProceso",
      "idConexion",
      "idRegProceso",
      "ponente",
      "recurso",
      "subclaseProceso",
      "tipoProceso",
      "ubicacion",
      "ultimaActualizacion",
      "processNumber",
      "subjects",
      "esEmplazado",
      "idRegSujeto",
      "identificacion",
      "nombreRazonSocial",
      "tipoSujeto"
    ]
  },
  "colombia_api_vehicle_soat": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "colombia_api_simit_resolutions": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "resoluciones",
      "estadosResoluciones",
      "fechaComparendo",
      "fechaResolucion",
      "nombresInfractores",
      "N\xFAmeroComparendo",
      "secretarias",
      "total"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PA",
        "RC",
        "TI"
      ]
    }
  },
  "world_api_covid": {
    "inputs": [],
    "outputs": []
  },
  "colombia_api_affiliations": {
    "inputs": [
      "documentType",
      "documentNumber",
      "date"
    ],
    "outputs": [
      "informaci\xF3nPersonal",
      "fechaCorte",
      "documentoIdentidad",
      "primerNombre",
      "segundoNombre",
      "primerApellido",
      "segundoApellido",
      "sexo",
      "eps",
      "regimen",
      "fechaAfiliacion",
      "estadoAfiliacion",
      "tipoAfiliado",
      "departamentoMunicipio",
      "ap",
      "pensiones",
      "arl",
      "riesgos",
      "cajaCompensacion",
      "cajas",
      "cesantias"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PA",
        "PEP"
      ]
    }
  },
  "colombia_api_registraduria_certificate": {
    "inputs": [
      "documentType",
      "documentNumber",
      "date"
    ],
    "outputs": [
      "codigoVerificacion",
      "novedad",
      "pdfBase64",
      "documento",
      "cedula",
      "fechaExpedicion",
      "lugarExpedicion",
      "nombre"
    ],
    "inputEnums": {
      "documentType": [
        "CC"
      ]
    }
  },
  "colombia_api_delinquent_debtors": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "reportingEntity",
      "reportedName",
      "phone",
      "city"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "NIT",
        "CE"
      ]
    }
  },
  "ecuador_api_identity_lookup": {
    "inputs": [
      "documentNumber",
      "documentType"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName"
    ]
  },
  "ecuador_api_vehicle": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "plate",
      "brand",
      "model",
      "year",
      "vehicleType"
    ]
  },
  "ecuador_api_vehicle_v3": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "colombia_api_simit_complete": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "value"
    ],
    "inputEnums": {
      "documentType": [
        "NIT",
        "CC",
        "CE",
        "PA",
        "RC",
        "TI"
      ]
    }
  },
  "world_api_europol": {
    "inputs": [
      "fullName",
      "documentType",
      "documentNumber",
      "dateOfBirth",
      "expirationDate"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "firstName",
      "lastName",
      "arrayName",
      "foundInEuropol",
      "urlEuropol"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PEP",
        "PPT",
        "NIT",
        "CCVE",
        "CCEC",
        "DNI",
        "DNIAR",
        "DNIHN",
        "CIC",
        "CIE",
        "RUN",
        "CURP",
        "CUI",
        "CCPA",
        "CI",
        "CPF",
        "DUI",
        "CCUY",
        "CUIT",
        "RUCEC",
        "FME",
        "RUC",
        "RUT",
        "CNPJ"
      ]
    }
  },
  "colombia_api_judicial_processes": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "consultedSubject",
      "documentNumber",
      "documentType",
      "list",
      "idProceso",
      "idConexion",
      "llaveProceso",
      "fechaProceso",
      "fechaUltimaActuacion",
      "despacho",
      "departamento",
      "sujetosProcesales",
      "esPrivado",
      "pagination",
      "records",
      "recordsPerPage",
      "pages",
      "page"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "NIT"
      ]
    }
  },
  "panama_api_identity_full_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "CCPA"
      ]
    }
  },
  "ecuador_api_criminal_history": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "CCEC"
      ]
    }
  },
  "panama_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName"
    ],
    "inputEnums": {
      "documentType": [
        "CCPA"
      ]
    }
  },
  "spain_api_identity_lookup": {
    "inputs": [
      "documentType",
      "expirationDate",
      "documentNumber",
      "date"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "names"
    ],
    "inputEnums": {
      "documentType": [
        "NIE",
        "DNIES"
      ]
    }
  },
  "peru_identity_extra_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "DNI"
      ]
    }
  },
  "peru_api_driver_license_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "DNI"
      ]
    }
  },
  "ar_certificate_verify": {
    "inputs": [
      "requestCode",
      "securityCode"
    ],
    "outputs": []
  },
  "cl_certificate_verify": {
    "inputs": [
      "folio",
      "verificationCode"
    ],
    "outputs": []
  },
  "usa_api_driver_license_lookup": {
    "inputs": [
      "documentNumber"
    ],
    "outputs": [
      "designations",
      "documentNumber",
      "endorsements",
      "restrictions"
    ]
  },
  "communication_global_messaging_whatsapp": {
    "inputs": [
      "countryCode",
      "phone"
    ],
    "outputs": []
  },
  "brasil_api_vehicle": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "bodyType",
      "brand",
      "chassis",
      "color",
      "country",
      "denatranWarning",
      "doors",
      "engine",
      "factory",
      "fipeCodes",
      "fuelType",
      "irregularitiesCount",
      "irregularityCode",
      "manufacturer",
      "model",
      "modelYear",
      "plate",
      "transmission",
      "vehicle",
      "version",
      "yearOfManufacture"
    ]
  },
  "argentina_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "firstName",
      "lastName",
      "arrayName"
    ],
    "inputEnums": {
      "documentType": [
        "DNIAR"
      ]
    }
  },
  "ecuador_api_company_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "legalName"
    ],
    "inputEnums": {
      "documentType": [
        "RUCEC"
      ]
    }
  },
  "ecuador_api_company_lookup_v3": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "RUCEC"
      ]
    }
  },
  "colombia_special_api_police_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "firstName",
      "lastName",
      "arrayName",
      "details"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "NIT"
      ]
    }
  },
  "colombia_api_military_situation": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "adress",
      "documentNumber",
      "documentType",
      "fullName",
      "place",
      "remissSince",
      "state"
    ],
    "inputEnums": {
      "documentType": [
        "CC"
      ]
    }
  },
  "world_api_onu": {
    "inputs": [
      "fullName",
      "documentType",
      "documentNumber",
      "dateOfBirth",
      "expirationDate"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "firstName",
      "lastName",
      "arrayName",
      "foundInONU"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PEP",
        "PPT",
        "NIT",
        "CCVE",
        "CCEC",
        "DNI",
        "DNIAR",
        "DNIHN",
        "CIC",
        "CIE",
        "RUN",
        "CURP",
        "CUI",
        "CCPA",
        "CI",
        "CPF",
        "DUI",
        "CCUY",
        "CUIT",
        "RUCEC",
        "FME",
        "RUC",
        "RUT",
        "CNPJ"
      ]
    }
  },
  "feature_passwordless_solution": {
    "inputs": [],
    "outputs": []
  },
  "colombia_api_sena": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "CC",
        "TI",
        "CE",
        "PA",
        "RC",
        "PEP"
      ]
    }
  },
  "world_api_fbi": {
    "inputs": [
      "fullName",
      "documentType",
      "documentNumber",
      "dateOfBirth",
      "expirationDate"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "firstName",
      "lastName",
      "arrayName",
      "foundInFBI",
      "urlFBI"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PEP",
        "PPT",
        "NIT",
        "CCVE",
        "CCEC",
        "DNI",
        "DNIAR",
        "DNIHN",
        "CIC",
        "CIE",
        "RUN",
        "CURP",
        "CUI",
        "CCPA",
        "CI",
        "CPF",
        "DUI",
        "CCUY",
        "CUIT",
        "RUCEC",
        "FME",
        "RUC",
        "RUT",
        "CNPJ"
      ]
    }
  },
  "colombia_api_pico_placa": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "placa",
      "causalExcepcion",
      "activoDesde",
      "estado",
      "detalles",
      "informaci\xF3nDeLaExcepcion",
      "observaciones",
      "informaci\xF3nDeLaPersonaEnCondicionDeDiscapacidad",
      "informaci\xF3nDelvehiculo"
    ]
  },
  "feature_pdf_generator": {
    "inputs": [],
    "outputs": []
  },
  "chile_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName"
    ],
    "inputEnums": {
      "documentType": [
        "RUN"
      ]
    }
  },
  "colombia_api_vehicle_complete_by_plate": {
    "inputs": [
      "documentType",
      "documentNumber",
      "plate"
    ],
    "outputs": [
      "informacionGeneral",
      "noLicenciaTransito",
      "estadoDelVehiculo",
      "tipoServicio",
      "claseVehiculo",
      "marca",
      "linea",
      "modelo",
      "color",
      "noMotor",
      "noChasis",
      "noVin",
      "cilidraje",
      "tipoCarroceria",
      "fechaMatricula",
      "tieneGravamenes",
      "organismoTransito",
      "prendas",
      "clasificacion",
      "tipoCombustible",
      "noPlaca",
      "puertas",
      "datosTecnicos",
      "pesoBrutoVehicular",
      "noEjes",
      "pasajerosSentados",
      "soat",
      "noPoliza",
      "fechaExpedicion",
      "fechaVigencia",
      "fechaVencimiento",
      "entidadExpideSoat",
      "estado",
      "tipoTarifa",
      "polizasResponsabilidadCivil",
      "tecnoMecanica",
      "vigente",
      "solicitudes",
      "noSolicitud",
      "fechaSolicitud",
      "tramitesRealizados",
      "entidad"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PA",
        "NIT"
      ]
    }
  },
  "colombia_api_lawyers": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "lastName",
      "contactId",
      "documentTypeId",
      "documentTypeName",
      "nonValidityReason",
      "numberOfRecords",
      "personalEmail",
      "statusName",
      "tarcarliceNumber"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PEP"
      ]
    }
  },
  "ip-lookup": {
    "inputs": [
      "ip"
    ],
    "outputs": []
  },
  "colombia_api_runt_owners": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "colombia_api_runt_vehicle_by_plate_only": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "communication_messaging_sms": {
    "inputs": [
      "countryCode",
      "phone"
    ],
    "outputs": []
  },
  "communication_colombia_messaging_whatsapp": {
    "inputs": [
      "countryCode",
      "phone"
    ],
    "outputs": []
  },
  "usa_api_ssn": {
    "inputs": [
      "documentNumber"
    ],
    "outputs": [
      "firstYearIssued",
      "issuingState",
      "SSN",
      "valid"
    ]
  },
  "colombia_api_identity_lookup_extra": {
    "inputs": [
      "documentType",
      "documentNumber",
      "date"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "firstName",
      "lastName",
      "arrayName",
      "expeditionDate",
      "expeditionPlace",
      "municipio",
      "departamento",
      "dateOfBirth",
      "gender",
      "isAlive"
    ],
    "inputEnums": {
      "documentType": [
        "CC"
      ]
    }
  },
  "world_api_phone_lookup": {
    "inputs": [
      "countryCode",
      "phone"
    ],
    "outputs": []
  },
  "colombia_special_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "CC"
      ]
    }
  },
  "credit_intent_kyc_passwordless": {
    "inputs": [],
    "outputs": []
  },
  "colombia_pep_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentNumber",
      "documentType",
      "detail",
      "declarant",
      "entity",
      "positionContractor",
      "publicationType",
      "declaration",
      "publicationDate",
      "declarationStatus"
    ],
    "inputEnums": {
      "documentType": [
        "CC"
      ]
    }
  },
  "bolivia_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber",
      "dateOfBirth"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName",
      "dateOfBirth"
    ],
    "inputEnums": {
      "documentType": [
        "CI"
      ]
    }
  },
  "chile_api_driver_license": {
    "inputs": [
      "documentNumber"
    ],
    "outputs": [
      "RUT",
      "address",
      "class",
      "controlDate",
      "documentNumber",
      "lastControlDate",
      "lastName",
      "license",
      "municipality",
      "names",
      "procedure",
      "restrictions"
    ]
  },
  "api_autodata_manufacturers": {
    "inputs": [],
    "outputs": []
  },
  "colombia_api_sisconmp": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "DIVcodigHeadquarters",
      "DIVnameHeadquarters",
      "NIDHeadquarters",
      "NIT_educationalInstitution",
      "class",
      "dateExpedition",
      "dateExpeditionLicense",
      "descriptionClass",
      "documentNumber",
      "documentType",
      "expirationDate",
      "expirationDateLicense",
      "inactive",
      "lastName",
      "licenseNumber",
      "nameFile",
      "nameHeadquarters",
      "nameTraining",
      "names",
      "numericalValueClass",
      "typeTraining",
      "typeVehicle"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE"
      ]
    }
  },
  "colombia_api_vehicle_complete_by_plate_simplified": {
    "inputs": [
      "documentType",
      "documentNumber",
      "plate"
    ],
    "outputs": [
      "documentNumber",
      "documentType",
      "plate",
      "vehicle",
      "capacidadCarga",
      "cilindraje",
      "clasificacion",
      "color",
      "diasMatriculado",
      "esRegrabadoChasis",
      "esRegrabadoMotor",
      "esRegrabadoSerie",
      "esRegrabadoVin",
      "homologaciones",
      "idTipoServicio",
      "linea",
      "marca",
      "modelo",
      "mostrarSolicitudes",
      "noChasis",
      "noPlaca",
      "numRegraSerie",
      "organismoTransito",
      "pasajerosSentados",
      "pesoBruto",
      "prendas",
      "puertas",
      "repotenciado",
      "seguridadEstado",
      "tarjetaServicio",
      "tieneLTImportacion",
      "tipoCarroceria",
      "tipoCombustible",
      "tipoServicio",
      "toneladas",
      "validacionDIAN",
      "vehiculoEnsenanza",
      "verValidaDIAN"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "TI",
        "CE",
        "PA",
        "RC"
      ]
    }
  },
  "canada_api_driver_license_ontario": {
    "inputs": [
      "documentNumber"
    ],
    "outputs": [
      "documentNumber",
      "licenceStatus",
      "verificationNumber"
    ]
  },
  "canada_api_ontario_plate": {
    "inputs": [
      "plate",
      "permitNumber"
    ],
    "outputs": [
      "expired",
      "expiryDate",
      "permitNumber",
      "plateNumber"
    ]
  },
  "canada_api_driver_license_quebec": {
    "inputs": [
      "documentNumber"
    ],
    "outputs": [
      "documentNumber",
      "classLicense",
      "dateOfIssue",
      "confirmationNumber",
      "condition"
    ]
  },
  "ocr_scan_pro": {
    "inputs": [
      "documentType",
      "country",
      "image"
    ],
    "outputs": []
  },
  "ocr_scan_gpt": {
    "inputs": [
      "documentType",
      "country",
      "image"
    ],
    "outputs": []
  },
  "el_salvador_api_identity_lookup": {
    "inputs": [
      "documentNumber",
      "dateOfBirth"
    ],
    "outputs": [
      "documentNumber",
      "fullName"
    ]
  },
  "paraguay_api_identity_lookup": {
    "inputs": [
      "documentNumber"
    ],
    "outputs": [
      "documentNumber",
      "firstName",
      "lastName",
      "fullName"
    ]
  },
  "canada_api_driver_license_british-columbia": {
    "inputs": [
      "documentNumber",
      "lastName"
    ],
    "outputs": [
      "documentNumber",
      "lastName",
      "valid"
    ]
  },
  "colombia_api_identity_ce_foreigner_id": {
    "inputs": [
      "expeditionDate",
      "documentNumber"
    ],
    "outputs": [
      "documentNumber",
      "documentType",
      "expirationDate",
      "firstName",
      "fullName",
      "lastName"
    ]
  },
  "colombia_api_identity_pep_foreigner_id": {
    "inputs": [
      "expeditionDate",
      "documentNumber"
    ],
    "outputs": [
      "arrayName",
      "documentNumber",
      "documentType",
      "expirationDate",
      "firstName",
      "fullName",
      "identification",
      "lastName"
    ]
  },
  "ocr_scan_studio": {
    "inputs": [
      "documentType",
      "country",
      "image"
    ],
    "outputs": [
      "age",
      "client",
      "documentCategory",
      "documentNumber",
      "documentType",
      "firstNameMatchPercentage",
      "fullNameMatchPercentage",
      "gender",
      "imageValidated",
      "infoValidationSupported",
      "inputMethod",
      "lastNameMatchPercentage",
      "namesMatch",
      "nationality",
      "OCRExtraction",
      "details",
      "docType",
      "boundingRegions",
      "spans",
      "fields",
      "confidence",
      "lastName",
      "firstName",
      "fullName",
      "requiresBackSide",
      "scoreValidated",
      "type",
      "url",
      "validationMethod",
      "updatedAt",
      "createdAt",
      "__v"
    ]
  },
  "canada_api_company": {
    "inputs": [
      "province",
      "business"
    ],
    "outputs": [
      "business",
      "businessNumber",
      "businessType",
      "compayName",
      "province",
      "regOfficeCity",
      "regOfficeProvince",
      "registryId",
      "statusDate"
    ],
    "inputEnums": {
      "province": [
        "AB",
        "BC",
        "MB",
        "NS",
        "ON",
        "QC",
        "SK"
      ]
    }
  },
  "face_recognition_search_live_face": {
    "inputs": [
      "image",
      "os",
      "liveness_min_score",
      "min_score",
      "search_mode",
      "collection_id"
    ],
    "outputs": [
      "persons",
      "score",
      "liveness_score"
    ]
  },
  "face_recognition_compare": {
    "inputs": [
      "search_mode",
      "gallery",
      "probe"
    ],
    "outputs": [
      "score"
    ]
  },
  "face_recognition_compare_live": {
    "inputs": [
      "search_mode",
      "gallery",
      "probe",
      "os",
      "liveness_min_score"
    ],
    "outputs": [
      "score",
      "liveness",
      "liveness_score",
      "min_score",
      "passed"
    ]
  },
  "face_recognition_liveness": {
    "inputs": [
      "image",
      "os"
    ],
    "outputs": [
      "passed",
      "min_score",
      "liveness_score"
    ]
  },
  "face_recognition_liveness_score": {
    "inputs": [
      "image",
      "os"
    ],
    "outputs": [
      "passed",
      "min_score",
      "liveness_score"
    ]
  },
  "face_recognition_persons_live": {
    "inputs": [
      "name",
      "images",
      "gender",
      "date_of_birth",
      "nationality",
      "collection_id",
      "liveness_min_score",
      "min_score",
      "search_mode"
    ],
    "outputs": [],
    "inputEnums": {
      "gender": [
        "M",
        "F"
      ],
      "search_mode": [
        "FAST",
        "ACCURATE"
      ]
    }
  },
  "face_recognition_persons": {
    "inputs": [
      "name",
      "images",
      "gender",
      "date_of_birth",
      "nationality",
      "collections"
    ],
    "outputs": [],
    "inputEnums": {
      "gender": [
        "M",
        "F"
      ]
    }
  },
  "face_recognition_persons_delete": {
    "inputs": [],
    "outputs": []
  },
  "face_recognition_collections": {
    "inputs": [
      "name",
      "description"
    ],
    "outputs": []
  },
  "face_recognition_verify": {
    "inputs": [
      "images",
      "min_score",
      "search_mode"
    ],
    "outputs": [
      "match",
      "name",
      "score",
      "gender",
      "date_of_birth",
      "thumbnails",
      "collections"
    ]
  },
  "face_recognition_detect": {
    "inputs": [
      "image",
      "collection_id",
      "max_results",
      "min_score",
      "search_mode"
    ],
    "outputs": [
      "faces",
      "bounding_box",
      "confidence",
      "landmarks",
      "attributes",
      "face_count"
    ]
  },
  "face_recognition_search_crops": {
    "inputs": [
      "images",
      "collection_id",
      "max_results",
      "min_score",
      "search_mode"
    ],
    "outputs": [
      "name",
      "score",
      "thumbnails",
      "thumbnail"
    ]
  },
  "face_recognition_search": {
    "inputs": [
      "images",
      "collection_id",
      "max_results",
      "min_score",
      "search_mode"
    ],
    "outputs": [
      "name",
      "score",
      "thumbnails",
      "thumbnail"
    ]
  },
  "mexico_api_company": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "business",
      "city",
      "detail",
      "acts",
      "businessLine",
      "companyDuration",
      "corporatePurpose",
      "curp",
      "federalEntity",
      "fme",
      "fmeStatus",
      "legalName",
      "legalRegime",
      "mainPartner",
      "municipality",
      "nationality",
      "personType",
      "registrationBackground",
      "registrationDate",
      "registrationOffice",
      "rfc",
      "socialAddress",
      "documentNumber",
      "documentType"
    ],
    "inputEnums": {
      "documentType": [
        "FME"
      ]
    }
  },
  "colombia_api_vehicle_valores_fasecolda_by_plate": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "absShow",
      "airbags",
      "airconditioningShow",
      "axles",
      "bcpp",
      "brakes",
      "capacityLoad",
      "capacityPassengers",
      "category",
      "class",
      "country",
      "cylinderCapacity",
      "doors",
      "electricChairs",
      "electricGlasses",
      "electricMirrors",
      "explorersShow",
      "foodSystem",
      "fuel",
      "groupUpdate",
      "homoloCode",
      "importedShow",
      "line1",
      "line2",
      "line3",
      "long",
      "marke",
      "novelty",
      "observation",
      "plate",
      "power",
      "rearSuspension",
      "reverseCameraShow",
      "segmentCylinder",
      "segmentSize",
      "sensorsShow",
      "service",
      "sunroofShow",
      "tachometer",
      "traction",
      "transmission",
      "typeAddress",
      "typeAirConditioning",
      "typeBox",
      "typeHeadlights",
      "typology",
      "upholsteryLeatherShow",
      "valueModel",
      "modelo",
      "valor",
      "estado",
      "modeloId",
      "idEstado",
      "weight"
    ]
  },
  "colombia_api_vehicle_valores_fasecolda_by_code": {
    "inputs": [
      "codeFasecolda"
    ],
    "outputs": [
      "absShow",
      "airbags",
      "airconditioningShow",
      "axles",
      "bcpp",
      "brakes",
      "capacityLoad",
      "capacityPassengers",
      "category",
      "class",
      "country",
      "cylinderCapacity",
      "doors",
      "electricChairs",
      "electricGlasses",
      "electricMirrors",
      "explorersShow",
      "foodSystem",
      "fuel",
      "groupUpdate",
      "homoloCode",
      "importedShow",
      "line1",
      "line2",
      "line3",
      "long",
      "marke",
      "novelty",
      "observation",
      "plate",
      "power",
      "rearSuspension",
      "reverseCameraShow",
      "segmentCylinder",
      "segmentSize",
      "sensorsShow",
      "service",
      "sunroofShow",
      "tachometer",
      "traction",
      "transmission",
      "typeAddress",
      "typeAirConditioning",
      "typeBox",
      "typeHeadlights",
      "typology",
      "upholsteryLeatherShow",
      "valueModel",
      "modelo",
      "valor",
      "estado",
      "modeloId",
      "idEstado",
      "weight"
    ]
  },
  "colombia_api_simit_plate": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "value"
    ]
  },
  "argentina_api_vehicle": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "brand",
      "codeRegistrySectional",
      "isPlateMercosur",
      "model",
      "plate",
      "recordAddress",
      "registrationDenomination",
      "registrationLocality",
      "registrationProvince",
      "type",
      "version",
      "year"
    ]
  },
  "argentina_api_vehicle_v3": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "argentina_api_buenos_aires_traffic_infractions": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "argentina_api_buenos_aires_technical_inspection": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "argentina_api_rto": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "colombia_api_rues_full": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "NIT"
      ]
    }
  },
  "usa_api_company": {
    "inputs": [
      "business"
    ],
    "outputs": [
      "addresses",
      "mailing",
      "street1",
      "street2",
      "city",
      "stateOrCountry",
      "zipCode",
      "stateOrCountryDescription",
      "isForeignLocation",
      "foreignStateTerritory",
      "country",
      "countryCode",
      "business",
      "categor",
      "cik",
      "description",
      "ein",
      "entityType",
      "exchanges",
      "fiscalYearEnd",
      "flags",
      "formerNames",
      "name",
      "from",
      "to",
      "investorWebsite",
      "phone",
      "sic",
      "sicDescription",
      "stateOfIncorporation",
      "stateOfIncorporationDescription",
      "tickers",
      "website"
    ]
  },
  "usa_api_driver_license_lookup_kansas": {
    "inputs": [
      "documentNumber",
      "dateOfBirth",
      "firstName",
      "lastName"
    ],
    "outputs": [
      "cdlStatus",
      "currentCredentialInformation",
      "credentialType",
      "issueDate",
      "expirationDate",
      "dateOfBirth",
      "dlNumber",
      "dlStatus",
      "documentNumber",
      "firstName",
      "lastName",
      "systemGeneratedDl"
    ]
  },
  "colombia_api_vehicle_sinister_fasecolda_by_plate": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "plate",
      "sinister",
      "accidentDate",
      "protection"
    ]
  },
  "brasil_api_criminal_history": {
    "inputs": [
      "documentType",
      "documentNumber",
      "dateOfBirth"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName",
      "dateOfBirth",
      "certificationNumber",
      "canIssueReports",
      "associatedNames",
      "pdfReport"
    ],
    "inputEnums": {
      "documentType": [
        "CPF"
      ]
    }
  },
  "costa_rica_api_business_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "businessName",
      "documentNumber",
      "documentType"
    ],
    "inputEnums": {
      "documentType": [
        "NITE"
      ]
    }
  },
  "argentina_api_medical_professional": {
    "inputs": [
      "documentNumber"
    ],
    "outputs": [
      "documentNumber",
      "documentType",
      "professionalId",
      "internalCode",
      "firstName",
      "lastName",
      "fullName",
      "displayName",
      "sex",
      "sexDescription",
      "dateOfBirth",
      "nationality",
      "ageRange",
      "professionType",
      "specialty",
      "publishedInSisa",
      "profileComplete",
      "matriculas",
      "number",
      "jurisdiction",
      "colegio",
      "specialtyDescription",
      "establishments",
      "province",
      "name",
      "role",
      "active"
    ]
  },
  "argentina_api_company_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "businessName",
      "contractDate",
      "documentNumber",
      "documentType",
      "economicActivities",
      "mainActivity",
      "secondaryActivity",
      "legalForm"
    ],
    "inputEnums": {
      "documentType": [
        "CUIT"
      ]
    }
  },
  "bolivia_api_business_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "businessName",
      "dateLastState",
      "documentNumber",
      "documentType"
    ],
    "inputEnums": {
      "documentType": [
        "NIT"
      ]
    }
  },
  "colombia_api_vehicle_accidentality_bogota": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "accident",
      "date",
      "form",
      "seriousness",
      "plate"
    ]
  },
  "colombia_api_vehicle_tax": {
    "inputs": [
      "documentType",
      "documentNumber",
      "plate"
    ],
    "outputs": [
      "details",
      "documentNumber",
      "documentType",
      "obligation",
      "vehicle",
      "plate"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "NIT"
      ]
    }
  },
  "colombia_api_lawyers_certificate": {
    "inputs": [
      "documentType",
      "quality",
      "documentNumber"
    ],
    "outputs": [
      "certificado",
      "documentNumber",
      "documentType",
      "encalidad",
      "estado",
      "fechaCreacion",
      "fechaExpedicion",
      "idHojaDeVida",
      "motivoNoVigencia",
      "numeroTarCarLice",
      "observacionesPenaAccesoria"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "NIT",
        "CE"
      ],
      "quality": [
        "ABG",
        "JUEZPAZ",
        "LT"
      ]
    }
  },
  "colombia_api_judicial_records": {
    "inputs": [
      "documentType",
      "city",
      "documentNumber"
    ],
    "outputs": [
      "appeal",
      "city",
      "codeRoom",
      "consOffice",
      "corporation",
      "court",
      "courtOfepms",
      "documentNumber",
      "documentType",
      "filingNumber",
      "municipality",
      "name",
      "receiptDate",
      "representative",
      "year"
    ],
    "inputEnums": {
      "documentType": [
        "CC"
      ],
      "city": [
        "BOGOTA",
        "VILLAVICENCIO",
        "TUNJA",
        "QUIBDO",
        "CALI",
        "POPAYAN",
        "PASTO",
        "PALMIRA",
        "NEIVA",
        "MEDELLIN",
        "MANIZALES",
        "IBAGUE",
        "FLORENCIA",
        "BUGA",
        "BUCARAMANGA",
        "BARRANQUILLA",
        "ARMENIA"
      ]
    }
  },
  "paraguay_api_business_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "businessName",
      "documentNumber",
      "documentType",
      "fullRUC"
    ],
    "inputEnums": {
      "documentType": [
        "RUC"
      ]
    }
  },
  "chile_api_validate": {
    "inputs": [
      "documentType",
      "documentNumber",
      "serialNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "serialNumber"
    ],
    "inputEnums": {
      "documentType": [
        "RUT",
        "RUN"
      ]
    }
  },
  "chile_api_taxpayer_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "arrayName",
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "lastName"
    ],
    "inputEnums": {
      "documentType": [
        "RUT"
      ]
    }
  },
  "paraguay_api_vehicle": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "axles",
      "brand",
      "chassis",
      "owner",
      "plate",
      "service",
      "situation",
      "type",
      "year"
    ]
  },
  "costa_rica_api_vehicle": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "currentOwner",
      "dataVehicle",
      "engineDisplacement",
      "estateValue",
      "grossWeight",
      "netWeight",
      "noVin",
      "occupants",
      "power",
      "traction",
      "infractions",
      "judicialAuthority",
      "summaryNumber",
      "ticketNumber",
      "type",
      "ownerHistory",
      "date",
      "fullName",
      "plate",
      "vehicle"
    ]
  },
  "usa_api_vehicle_lookup_by_vin": {
    "inputs": [
      "vin"
    ],
    "outputs": [
      "make",
      "model",
      "modelYear",
      "vehicleType",
      "vin"
    ]
  },
  "guatemala_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber",
      "dateOfBirth"
    ],
    "outputs": [
      "arrayName",
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "lastName"
    ],
    "inputEnums": {
      "documentType": [
        "CUI"
      ]
    }
  },
  "colombia_api_vehicle_fines_medellin": {
    "inputs": [
      "plate"
    ],
    "outputs": []
  },
  "colombia_api_vehicle_fines_bogota": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "fines",
      "type",
      "number",
      "plate",
      "impositionDate",
      "notificationDate",
      "balance",
      "discountValue",
      "pendingBalance",
      "interest",
      "total",
      "totalCollections",
      "impositionMedium",
      "courseAttendanceMessage",
      "installmentNumber",
      "installmentStatus",
      "installmentCount",
      "documentType",
      "documentNumber",
      "name",
      "moratoryInterest"
    ]
  },
  "honduras_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName"
    ],
    "inputEnums": {
      "documentType": [
        "DNIHN"
      ]
    }
  },
  "republica_dominicana_api_citizen_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "arrayName",
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "lastName"
    ],
    "inputEnums": {
      "documentType": [
        "CIE"
      ]
    }
  },
  "venezuela_foreigner_api": {
    "inputs": [
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "lastName",
      "firstName",
      "arrayName"
    ]
  },
  "bolivia_api_vehicle": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "Policy",
      "brand",
      "clase",
      "declaratory",
      "plate",
      "service",
      "type"
    ]
  },
  "uruguay_api_identity_lookup": {
    "inputs": [
      "documentType",
      "documentNumber",
      "dateOfBirth"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName"
    ],
    "inputEnums": {
      "documentType": [
        "CCUY"
      ]
    }
  },
  "spain_api_company_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentNumber",
      "companyName"
    ],
    "inputEnums": {
      "documentType": [
        "NIF"
      ]
    }
  },
  "panama_api_business_lookup": {
    "inputs": [
      "documentType",
      "documentNumber",
      "dv"
    ],
    "outputs": [
      "address",
      "businessName",
      "capital",
      "currencyType",
      "currentStatus",
      "documentNumber",
      "documentType",
      "dv",
      "folioOrFincaOrFicha",
      "idFolio",
      "organizationType",
      "recordType",
      "registrationDate",
      "representatives",
      "director",
      "president",
      "representative",
      "residentAgent",
      "secretary",
      "subscriber",
      "treasurer",
      "secretarioAsistente",
      "tesoreroAsistente",
      "vicePresident",
      "validity"
    ],
    "inputEnums": {
      "documentType": [
        "RUC"
      ]
    }
  },
  "validate-document": {
    "inputs": [
      "anverso",
      "reverso"
    ],
    "outputs": []
  },
  "peru_api_identity_ce_foreigner_id": {
    "inputs": [
      "documentNumber",
      "dateOfBirth"
    ],
    "outputs": [
      "arrayName",
      "dateOfBirth",
      "documentNumber",
      "firstName",
      "foreignerIdExpiration",
      "foreignerIdLastIssuance",
      "fullName",
      "immigrationStatus",
      "lastName",
      "nationality",
      "residenceExpiration"
    ]
  },
  "colombia_api_rues_full_v3": {
    "inputs": [
      "documentType",
      "category",
      "documentNumber"
    ],
    "outputs": [
      "commercialRegistry",
      "NIT",
      "acronym",
      "businessName",
      "chamberCommerce",
      "commercialAddress",
      "companyLocation",
      "companyType",
      "email",
      "enrollmentDate",
      "idRm",
      "lastRenewedYear",
      "lastUpdatedDate",
      "legalRepresentatives",
      "faculty",
      "organizationType",
      "reasonForCancellation",
      "registrationNumber",
      "registrationStatus",
      "renewalDate",
      "economicActivities",
      "description",
      "name",
      "establishmentOwner",
      "abbreviation",
      "chamberCode",
      "chamberDescription",
      "codeClassIdentification",
      "companyTypeCode",
      "companyTypeDescription",
      "digitVerification",
      "lastYearRenewed",
      "legalOrganizationCode",
      "legalOrganizationDescription",
      "numberIdentification",
      "registration",
      "registrationCategory",
      "registrationCategoryCode",
      "registrationDate",
      "registrationStatusCode",
      "registrationStatusDescription"
    ],
    "inputEnums": {
      "documentType": [
        "NIT"
      ],
      "category": [
        "RM",
        "PROP",
        "RUNEOL",
        "RNT",
        "ESAL",
        "RESAL",
        "JUEGOS",
        "EXTRANJERAS"
      ]
    }
  },
  "colombia_api_rues_v3": {
    "inputs": [
      "documentType",
      "category",
      "documentNumber"
    ],
    "outputs": [
      "businessName",
      "documentNumber",
      "documentType",
      "fullNit",
      "location",
      "organizationType",
      "category",
      "registration",
      "chamberCode"
    ],
    "inputEnums": {
      "documentType": [
        "NIT"
      ],
      "category": [
        "RM",
        "PROP",
        "RUNEOL",
        "RNT",
        "ESAL",
        "RESAL",
        "JUEGOS",
        "EXTRANJERAS"
      ]
    }
  },
  "peru_identity_extra_lookup_v3": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "address",
      "arrayName",
      "civilStatus",
      "dateOfBirth",
      "documentNumber",
      "documentType",
      "expeditionDate",
      "expirationDate",
      "firstName",
      "fullName",
      "lastName",
      "photo",
      "sex",
      "ubigeoReniec",
      "verificationDigit"
    ],
    "inputEnums": {
      "documentType": [
        "DNI"
      ]
    }
  },
  "peru_identity_lookup_v3": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "address",
      "arrayName",
      "civilStatus",
      "dateOfBirth",
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "lastName",
      "sex",
      "ubigeoReniec",
      "verificationDigit"
    ],
    "inputEnums": {
      "documentType": [
        "DNI"
      ]
    }
  },
  "colombia_api_identity_ppt_foreigner_id": {
    "inputs": [
      "expeditionDate",
      "documentNumber"
    ],
    "outputs": [
      "arrayName",
      "documentNumber",
      "documentType",
      "expeditionDate",
      "expirationDate",
      "firstName",
      "fullName",
      "lastName"
    ]
  },
  "colombia_api_min_trabajo_v3": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "records"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PPT",
        "PEP",
        "PA"
      ]
    }
  },
  "colombia_sisben_api_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "arrayName",
      "city",
      "currentSurvey",
      "department",
      "detaliGroup",
      "documentNumber",
      "documentType",
      "file",
      "firstName",
      "fullName",
      "lastCitizenUpdate",
      "lastName",
      "sisbenGroup",
      "validity"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PEP",
        "PPT",
        "PA"
      ]
    }
  },
  "face_recognition_detect_face": {
    "inputs": [
      "image"
    ],
    "outputs": []
  },
  "peru_api_company_lookup_v3": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "address",
      "businessName",
      "conditionTaxpayer",
      "district",
      "documentNumber",
      "documentType",
      "nameVia",
      "province",
      "simpleaddress",
      "state",
      "stateTaxpayer",
      "zoneCode",
      "zoneType"
    ],
    "inputEnums": {
      "documentType": [
        "RUC"
      ]
    }
  },
  "document-liveness": {
    "inputs": [],
    "outputs": []
  },
  "consultar_procesos_judiciales": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PEP"
      ]
    }
  },
  "credit_intent": {
    "inputs": [
      "externalDatabaseRefID",
      "category"
    ],
    "outputs": []
  },
  "Mexico_api_ine_model_e": {
    "inputs": [
      "cic",
      "idCitizen"
    ],
    "outputs": []
  },
  "Mexico_api_ine_model_d": {
    "inputs": [
      "cic",
      "ocr"
    ],
    "outputs": []
  },
  "Mexico_api_ine_model_c": {
    "inputs": [
      "keyElector",
      "issueNumber",
      "ocr"
    ],
    "outputs": []
  },
  "api_autodata_enginer": {
    "inputs": [],
    "outputs": []
  },
  "api_autodata_enginer_code": {
    "inputs": [],
    "outputs": []
  },
  "data_finance_incomestatement": {
    "inputs": [
      "symbols"
    ],
    "outputs": []
  },
  "data_finance_balancesheet": {
    "inputs": [
      "symbols"
    ],
    "outputs": []
  },
  "data_finance_cashflow": {
    "inputs": [
      "symbols"
    ],
    "outputs": []
  },
  "data_finance_stockprice": {
    "inputs": [
      "symbols"
    ],
    "outputs": []
  },
  "canada_api_driver_license_alberta": {
    "inputs": [
      "documentNumber",
      "acnNo"
    ],
    "outputs": []
  },
  "us_api_passport_entries": {
    "inputs": [
      "firstName",
      "passportCountry",
      "passportNumber",
      "lastName",
      "dateOfBirth"
    ],
    "outputs": []
  },
  "api_data_sheet_vehicle": {
    "inputs": [],
    "outputs": []
  },
  "api_data_sheet_vehicle_by-plate_br": {
    "inputs": [],
    "outputs": []
  },
  "face_recognition_search_active_user": {
    "inputs": [
      "image",
      "os",
      "min_score",
      "search_mode",
      "collection_id"
    ],
    "outputs": [
      "score"
    ]
  },
  "spain_api_vehicle_lookup": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "plate",
      "brand",
      "model",
      "year",
      "vehicleType"
    ]
  },
  "colombia_api_inpec": {
    "inputs": [
      "documentType",
      "documentNumber",
      "firstSurname"
    ],
    "outputs": [
      "documentNumber",
      "documentType",
      "firstSurname",
      "legend",
      "records",
      "admissionStatus",
      "gender",
      "identification",
      "legalStatus",
      "name",
      "prison",
      "uniqueNumber"
    ],
    "inputEnums": {
      "documentType": [
        "CC"
      ]
    }
  },
  "colombia_sigep_by_name": {
    "inputs": [
      "fullName"
    ],
    "outputs": [
      "fullName",
      "legend",
      "records",
      "name",
      "linkProfile",
      "position",
      "entity",
      "email",
      "phone",
      "location"
    ]
  },
  "colombia_sigep_by_number": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "arrayName",
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "lastName",
      "legend",
      "records",
      "name",
      "linkProfile",
      "position",
      "entity",
      "email",
      "phone",
      "location"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "NIT"
      ]
    }
  },
  "colombia_inpec_lookup": {
    "inputs": [
      "documentType",
      "documentNumber",
      "firstSurname"
    ],
    "outputs": [
      "documentNumber",
      "documentType",
      "firstSurname",
      "legend",
      "records",
      "admissionStatus",
      "gender",
      "identification",
      "legalStatus",
      "name",
      "prison",
      "uniqueNumber"
    ],
    "inputEnums": {
      "documentType": [
        "CC"
      ]
    }
  },
  "zelf-proofs": {
    "inputs": [
      "publicData",
      "metadata",
      "faceBase64",
      "os",
      "identifier",
      "requireLiveness",
      "livenessDetectionPriorCreation",
      "tolerance",
      "password",
      "referenceFaceBase64",
      "verifierKey"
    ],
    "outputs": [
      "zelfProof",
      "ipfs",
      "url",
      "IpfsHash",
      "PinSize",
      "Timestamp",
      "ID",
      "Name",
      "NumberOfFiles",
      "MimeType",
      "GroupId",
      "pinned",
      "web3",
      "name",
      "metadata"
    ],
    "inputEnums": {
      "os": [
        "DESKTOP",
        "ANDROID",
        "IOS"
      ],
      "tolerance": [
        "SOFT",
        "REGULAR",
        "HARDENED",
        "REGULAR_HARD",
        "REGULAR_SOFT"
      ]
    }
  },
  "zelf-proof-liveness-active-user": {
    "inputs": [
      "publicData",
      "metadata",
      "faceBase64",
      "os",
      "identifier",
      "requireLiveness",
      "livenessDetectionPriorCreation",
      "tolerance",
      "password",
      "referenceFaceBase64",
      "verifierKey"
    ],
    "outputs": [],
    "inputEnums": {
      "os": [
        "DESKTOP",
        "ANDROID",
        "IOS"
      ],
      "tolerance": [
        "SOFT",
        "REGULAR",
        "HARDENED",
        "REGULAR_HARD",
        "REGULAR_SOFT"
      ]
    }
  },
  "zelf-proof-encrypt-qr": {
    "inputs": [
      "publicData",
      "metadata",
      "faceBase64",
      "os",
      "identifier",
      "requireLiveness",
      "livenessDetectionPriorCreation",
      "tolerance",
      "password",
      "referenceFaceBase64",
      "verifierKey"
    ],
    "outputs": [],
    "inputEnums": {
      "os": [
        "DESKTOP",
        "ANDROID",
        "IOS"
      ],
      "tolerance": [
        "SOFT",
        "REGULAR",
        "HARDENED",
        "REGULAR_HARD",
        "REGULAR_SOFT"
      ]
    }
  },
  "zelf-proof-decrypt": {
    "inputs": [
      "faceBase64",
      "os",
      "zelfProof",
      "password",
      "verifierKey"
    ],
    "outputs": [],
    "inputEnums": {
      "os": [
        "DESKTOP",
        "ANDROID",
        "IOS"
      ]
    }
  },
  "zelf-proof-preview": {
    "inputs": [
      "zelfProof",
      "verifierKey"
    ],
    "outputs": []
  },
  "guatemala_api_identity_extra_lookup": {
    "inputs": [
      "documentType",
      "documentNumber",
      "dateOfBirth"
    ],
    "outputs": [
      "arrayName",
      "birthDate",
      "documentNumber",
      "documentType",
      "firstName",
      "fullName",
      "gender",
      "lastName"
    ],
    "inputEnums": {
      "documentType": [
        "CUI"
      ]
    }
  },
  "india_api_epic_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "arrayName",
      "arrayNameLocal",
      "documentNumber",
      "documentType",
      "firstName",
      "firstNameLocal",
      "fullName",
      "fullNameLocal",
      "lastName",
      "lastNameLocal",
      "relativeFullName",
      "relativeFullNameLocal"
    ],
    "inputEnums": {
      "documentType": [
        "EPIC"
      ]
    }
  },
  "india_api_epic_voting_lookup": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentNumber",
      "sectionNo",
      "partNumber",
      "partName",
      "partNameLocal",
      "partSerialNumber",
      "assemblyName",
      "assemblyNameLocal",
      "acNumber",
      "districtName",
      "districtNameLocal",
      "stateName",
      "stateNameLocal",
      "parliamentName",
      "parliamentNameLocal",
      "parliamentNo",
      "buildingName",
      "buildingNameLocal",
      "buildingAddress",
      "buildingAddressLocal",
      "roomDetails"
    ],
    "inputEnums": {
      "documentType": [
        "EPIC"
      ]
    }
  },
  "co_bogota_taxi_plate": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "arl",
      "bloodType",
      "companyName",
      "companyNit",
      "controlCardNumber",
      "controlCardStatus",
      "driverDTO",
      "bloodGroup",
      "foto",
      "person",
      "address",
      "birthDate",
      "cellPhone",
      "documentIssueDate",
      "firstName",
      "identificationNumber",
      "identificationType",
      "identificationTypeDesc",
      "lastName",
      "photoUri",
      "rhFactor",
      "effectiveDate",
      "eps",
      "fixedPhoneType",
      "issueDate",
      "operationCardExpirationDate",
      "operationCardNumber",
      "paymentMethodName",
      "plate",
      "qualityFactor",
      "rtmExpirationDate",
      "rtmNumber",
      "soatExpirationDate",
      "soatNumber",
      "validityDate"
    ]
  },
  "co_bogota_taxi_driver_card": {
    "inputs": [
      "card"
    ],
    "outputs": []
  },
  "colombia_api_identity_lookup_premium": {
    "inputs": [
      "documentNumber"
    ],
    "outputs": [
      "arrayName",
      "dateOfBirth",
      "documentNumber",
      "documentType",
      "expeditionDate",
      "expeditionPlace",
      "municipio",
      "departamento",
      "firstName",
      "fullName",
      "gender",
      "isAlive",
      "lastName"
    ]
  },
  "bolivia_api_vehicle_soat": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "plate",
      "managementYear",
      "validFrom",
      "validTo",
      "vehicleType",
      "useType",
      "department"
    ]
  },
  "bolivia_api_voting_location": {
    "inputs": [
      "documentType",
      "documentNumber",
      "dateOfBirth"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "votingStatus",
      "country",
      "department",
      "locality",
      "election",
      "pollingPlace",
      "pollingTable",
      "isJury",
      "jurySortDate",
      "politicalMembership",
      "latitude",
      "longitude"
    ],
    "inputEnums": {
      "documentType": [
        "CI"
      ]
    }
  },
  "chile_api_vehicle_soap_plate": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "plate",
      "soap",
      "policyNumber",
      "insuranceCompany",
      "validFrom",
      "validTo",
      "folioNumber",
      "ownerName",
      "ownerRut",
      "premium",
      "vehicle",
      "brand",
      "model",
      "year",
      "type",
      "engineNumber"
    ]
  },
  "honduras_api_voting_location": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "gender",
      "department",
      "municipality",
      "electoralSector",
      "pollingPlace",
      "pollingTable",
      "lineNumber",
      "enabled",
      "fullAddress"
    ],
    "inputEnums": {
      "documentType": [
        "DNIHN"
      ]
    }
  },
  "costarica_api_voting_location": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "fullName",
      "firstName",
      "firstLastName",
      "secondLastName",
      "gender",
      "province",
      "canton",
      "district",
      "pollingPlace",
      "pollingTable",
      "electoralCode",
      "electorNumber",
      "schoolAddress",
      "latitude",
      "longitude"
    ],
    "inputEnums": {
      "documentType": [
        "CCCR"
      ]
    }
  },
  "mexico_api_ine_validate": {
    "inputs": [
      "documentType",
      "documentNumber",
      "citizenIdentifier",
      "emissionNumber",
      "model"
    ],
    "outputs": [
      "cic",
      "documentNumber",
      "documentType",
      "electorKey",
      "emissionNumber",
      "emissionYear",
      "federalDistrict",
      "identifierType",
      "localDistrict",
      "messageCode",
      "ocr",
      "registrationYear",
      "validity"
    ],
    "inputEnums": {
      "documentType": [
        "INE"
      ],
      "model": [
        "C",
        "D",
        "E",
        "F",
        "G",
        "H"
      ]
    }
  },
  "mexico_api_ine_ocr": {
    "inputs": [
      "front",
      "back"
    ],
    "outputs": [
      "ocr",
      "cic",
      "citizenIdentifier",
      "curp",
      "documentType",
      "electorKey",
      "fullName",
      "subType",
      "type",
      "validation",
      "documentNumber",
      "validity",
      "validateParamsUsed",
      "model"
    ]
  },
  "costa_rica_api_traffic_infractions": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "plate",
      "totalRecords",
      "infractions",
      "series",
      "number",
      "date",
      "competentAuthority",
      "lien",
      "fineAmount",
      "lateFeeAmount",
      "paniAmount",
      "paniLateFeeAmount",
      "totalAmount"
    ]
  },
  "colombia_api_identity_lookup_by_name": {
    "inputs": [
      "primerNombre",
      "primerApellido",
      "sexo",
      "fecha",
      "segundoNombre",
      "segundoApellido"
    ],
    "outputs": [
      "matches",
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName",
      "arrayName",
      "sexo",
      "serial",
      "oficina",
      "recordType"
    ],
    "inputEnums": {
      "sexo": [
        "MASCULINO",
        "FEMENINO",
        "M",
        "F"
      ]
    }
  },
  "colombia_api_registraduria_serial": {
    "inputs": [
      "serial"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName",
      "arrayName",
      "sexo",
      "serial",
      "oficina",
      "recordType"
    ]
  },
  "colombia_api_registraduria_matrimonio": {
    "inputs": [
      "documentNumber",
      "primerNombre",
      "primerApellido",
      "segundoNombre",
      "segundoApellido",
      "fecha",
      "serial",
      "sexo"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName",
      "arrayName",
      "sexo",
      "serial",
      "recordType"
    ],
    "inputEnums": {
      "sexo": [
        "MASCULINO",
        "FEMENINO",
        "M",
        "F"
      ]
    }
  },
  "colombia_api_identity_lookup_registraduria": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName",
      "arrayName",
      "sexo",
      "serial",
      "oficina",
      "recordType"
    ],
    "inputEnums": {
      "documentType": [
        "CC"
      ]
    }
  },
  "colombia_api_identity_lookup_procuraduria": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "firstName",
      "lastName",
      "fullName",
      "arrayName"
    ],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PPT",
        "NIT",
        "PEP"
      ]
    }
  },
  "colombia_api_driver_basic": {
    "inputs": [
      "documentType",
      "documentNumber",
      "primerApellido"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PA",
        "PPT"
      ]
    }
  },
  "chile_api_vehicle_stolen": {
    "inputs": [
      "plate"
    ],
    "outputs": [
      "description",
      "hasTheftReport",
      "plate",
      "theftReport",
      "typeCode",
      "plateOriginal",
      "plateFormatted",
      "reportDate",
      "partiallyResolved",
      "items"
    ]
  },
  "smart_enroll_identity_check": {
    "inputs": [],
    "outputs": []
  },
  "smart_enroll_background_check": {
    "inputs": [],
    "outputs": []
  },
  "colombia_api_identity_lookup_vigencia": {
    "inputs": [
      "documentNumber"
    ],
    "outputs": [
      "documentType",
      "documentNumber",
      "exists",
      "isAlive",
      "documentStatus"
    ]
  },
  "colombia_api_copnia": {
    "inputs": [
      "documentType",
      "documentNumber"
    ],
    "outputs": [],
    "inputEnums": {
      "documentType": [
        "CC",
        "CE",
        "PA",
        "PEP",
        "PE",
        "PPT",
        "TI",
        "NIT"
      ]
    }
  },
  "colombia_api_copnia_license": {
    "inputs": [
      "licenseNumber"
    ],
    "outputs": []
  }
};

// src/app/modules/smart-batch/endpoint-chain.util.ts
var SKIP_KEYS = /* @__PURE__ */ new Set([
  "signature",
  "message",
  "status",
  "code",
  "error",
  "errors",
  "meta",
  "success",
  "id",
  "_id"
]);
var tokenOf = (field) => field.replace(/[^a-z0-9]/gi, "").toLowerCase();
var canonicalChainField = (field) => {
  const token = tokenOf(field);
  if (/^(vin|niv|bin|bim|chasis|chassis|bastidor|numerovin|vinnumber|numerochasis|numerobastidor|chasisnumber|chassisnumber)$/.test(token) || token.includes("chasis") || token.includes("chassis") || token.includes("bastidor") || token.endsWith("vin")) {
    return "vin";
  }
  if (/^(owner|propietario|titular|rut)$/.test(token) || token.includes("propietario") || token.includes("ownerdocument") || token.includes("cedulaprop")) {
    return "documentNumber";
  }
  return canonicalParamFilterId(field);
};
var uniqueCanonical = (fields) => [
  ...new Set(fields.filter(Boolean).map(canonicalChainField))
];
var uniqueEnumValues = (values) => [
  ...new Set(values.map((value) => value.trim().toUpperCase()).filter(Boolean))
];
var SEED_FIELDS = /* @__PURE__ */ new Set(["documentNumber", "documentType", "plate", "vin", "fullName", "processNumber"]);
var inputKeysForFeature = (feature) => uniqueCanonical(featureParamFilterIds(feature));
var catalogEntryForCode = (code) => code ? ENDPOINT_IO_CATALOG[code] : void 0;
var enumsFromDependencies = (feature) => {
  const out = {};
  for (const dependency of feature.dependencies ?? []) {
    if (!dependency.field || !dependency.enum?.length)
      continue;
    const key = canonicalChainField(dependency.field);
    out[key] = uniqueEnumValues([...out[key] ?? [], ...dependency.enum.map(String)]);
  }
  return out;
};
var enumsFromCatalog = (entry) => {
  const out = {};
  for (const [field, values] of Object.entries(entry?.inputEnums ?? {})) {
    if (!values?.length)
      continue;
    const key = canonicalChainField(field);
    out[key] = uniqueEnumValues(values.map(String));
  }
  return out;
};
var mergeInputEnums = (live, catalog) => {
  const out = {};
  for (const key of /* @__PURE__ */ new Set([...Object.keys(live), ...Object.keys(catalog)])) {
    const preferred = live[key]?.length ? live[key] : catalog[key];
    if (preferred?.length)
      out[key] = preferred;
  }
  return out;
};
var enumsOverlap = (left, right) => {
  if (!left?.length || !right?.length)
    return true;
  const allowed = new Set(left);
  return right.some((value) => allowed.has(value));
};
var accumulatedInputEnums = (profiles) => {
  const out = {};
  for (const profile of profiles) {
    for (const [field, values] of Object.entries(profile.inputEnums ?? {})) {
      if (!values.length)
        continue;
      out[field] = field in out ? values.filter((value) => out[field].includes(value)) : [...values];
    }
  }
  return out;
};
var sharedFieldsWithCompatibleEnums = (names, sourceEnums, targetEnums) => names.filter((field) => enumsOverlap(sourceEnums?.[field], targetEnums?.[field]));
var enumConflicts = (sourceEnums, targetEnums, fields) => fields.filter((field) => !enumsOverlap(sourceEnums?.[field], targetEnums?.[field])).map((field) => ({
  field,
  source: sourceEnums?.[field] ?? [],
  target: targetEnums?.[field] ?? []
}));
var enrichChainProfile = (feature, profile) => {
  const inputs = profile.inputs;
  const outputs = new Set(profile.outputs);
  for (const field of inputs) {
    if (SEED_FIELDS.has(field))
      outputs.add(field);
  }
  const group = featureGroup(feature);
  if (group === "vehicle" && (inputs.includes("plate") || inputs.includes("vin"))) {
    outputs.add("plate");
    outputs.add("vin");
    outputs.add("documentNumber");
    outputs.add("documentType");
    outputs.add("fullName");
  }
  return { inputs, outputs: [...outputs], inputEnums: profile.inputEnums ?? {} };
};
var chainProfileForFeature = (feature, docs) => {
  const entry = catalogEntryForCode(feature.code);
  return enrichChainProfile(feature, {
    inputs: uniqueCanonical([...inputKeysForFeature(feature), ...entry?.inputs ?? []]),
    outputs: uniqueCanonical([...entry?.outputs ?? [], ...outputKeysFromDocs(docs)]),
    inputEnums: mergeInputEnums(enumsFromDependencies(feature), enumsFromCatalog(entry))
  });
};
var sharedChainFields = (outputs, inputs) => {
  const available = new Set(outputs);
  return inputs.filter((field) => available.has(field));
};
var accumulatedChainFields = (profiles) => {
  const fields = /* @__PURE__ */ new Set();
  for (const profile of profiles) {
    for (const field of profile.inputs)
      fields.add(field);
    for (const field of profile.outputs)
      fields.add(field);
  }
  return [...fields];
};
var linkFieldsToTarget = (chain, target) => {
  if (!target)
    return [];
  const names = sharedChainFields(accumulatedChainFields(chain), target.inputs);
  const sourceEnums = accumulatedInputEnums(chain);
  if (enumConflicts(sourceEnums, target.inputEnums, names).length)
    return [];
  return sharedFieldsWithCompatibleEnums(names, sourceEnums, target.inputEnums);
};
var canAppendToChain = (chain, target) => {
  if (!target)
    return false;
  if (!chain.length)
    return true;
  return linkFieldsToTarget(chain, target).length > 0;
};
var neededInputsForFeature = (feature, profile) => {
  const declared = uniqueCanonical(inputKeysForFeature(feature));
  return declared.length ? declared : profile.inputs;
};
var seedParamFieldsForFeatures = (features) => {
  const seed = [];
  const seen = /* @__PURE__ */ new Set();
  let cascade = [];
  const available = /* @__PURE__ */ new Set();
  const resetCascade = () => {
    cascade = [];
    available.clear();
  };
  for (const feature of features) {
    const profile = chainProfileForFeature(feature);
    if (cascade.length && !canAppendToChain(cascade, profile))
      resetCascade();
    for (const field of neededInputsForFeature(feature, profile)) {
      if (available.has(field) || seen.has(field))
        continue;
      seen.add(field);
      seed.push(field);
    }
    for (const field of profile.outputs)
      available.add(field);
    cascade.push(profile);
  }
  return seed;
};
var chainStepFeedTemplates = (features) => {
  const templates = features.map(() => ({}));
  const profiles = features.map((feature) => chainProfileForFeature(feature));
  let cascade = [];
  let start = 0;
  for (let index = 0; index < features.length; index += 1) {
    const profile = profiles[index];
    if (cascade.length && !canAppendToChain(cascade, profile)) {
      cascade = [];
      start = index;
    }
    if (cascade.length) {
      for (const field of linkFieldsToTarget(cascade, profile)) {
        for (let prior = index - 1; prior >= start; prior -= 1) {
          if (profiles[prior].outputs.includes(field) || profiles[prior].inputs.includes(field)) {
            templates[index][field] = `{{results.${prior + 1}.${field}}}`;
            break;
          }
        }
      }
    }
    cascade.push(profile);
  }
  return templates;
};
var collectCanonicalScalarValues = (value) => {
  const out = {};
  const walk = (node, depth) => {
    if (!node || typeof node !== "object" || depth > 6)
      return;
    if (Array.isArray(node)) {
      for (const item of node.slice(0, 8))
        walk(item, depth + 1);
      return;
    }
    for (const [key, child] of Object.entries(node)) {
      if (SKIP_KEYS.has(key))
        continue;
      const canonical = canonicalChainField(key);
      if ((typeof child === "string" || typeof child === "number") && String(child).trim() && !(canonical in out)) {
        out[canonical] = String(child).trim();
        continue;
      }
      walk(child, depth + 1);
    }
  };
  walk(value, 0);
  return out;
};
var unwrapPayload = (value) => {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return value;
  const record = value;
  for (const key of ["data", "result", "results"]) {
    const child = record[key];
    if (Array.isArray(child))
      return child[0] ?? null;
    if (child && typeof child === "object")
      return child;
  }
  return value;
};
var collectOutputKeys = (value, into, depth) => {
  if (!value || typeof value !== "object" || depth > 2)
    return;
  if (Array.isArray(value)) {
    if (value.length)
      collectOutputKeys(value[0], into, depth + 1);
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    if (SKIP_KEYS.has(key))
      continue;
    if (key === "data" || key === "result" || key === "results") {
      collectOutputKeys(child, into, depth + 1);
      continue;
    }
    into.add(canonicalChainField(key));
    if (child && typeof child === "object")
      collectOutputKeys(child, into, depth + 1);
  }
};
var parseResponseBody = (body) => {
  if (body && typeof body === "object")
    return body;
  if (typeof body !== "string" || !body.trim())
    return null;
  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
};
var firstSuccessBody = (docs) => {
  if (!docs || typeof docs !== "object")
    return null;
  for (const locale of Object.values(docs)) {
    const responses = locale?.responses;
    if (!Array.isArray(responses))
      continue;
    const sample = responses.find((item) => String(item?.status) === "200") ?? responses[0];
    const parsed = parseResponseBody(sample?.body);
    if (parsed)
      return parsed;
  }
  return null;
};
var outputKeysFromDocs = (docs) => {
  const body = firstSuccessBody(docs);
  if (!body)
    return [];
  const keys = /* @__PURE__ */ new Set();
  collectOutputKeys(unwrapPayload(body), keys, 0);
  return [...keys];
};

export {
  FEATURE_GROUP_ICONS,
  featureGroupIcon,
  featureGroup,
  isSmartBatchCatalogFeature,
  requiredVisibleFields,
  canonicalParamFilterId,
  declaredVisibleFields,
  featureParamChips,
  requiredParamChipClass,
  paramEnumChipClass,
  humanizeParamField,
  paramFieldLabelKey,
  collectRequiredParamFields,
  matchesRequiredParamFilters,
  matchesParamHighlight,
  paramHighlightChipClass,
  paramHighlightCardClass,
  paramHighlightBadgeClass,
  paramHighlightSwatchClass,
  canonicalChainField,
  chainProfileForFeature,
  seedParamFieldsForFeatures,
  chainStepFeedTemplates,
  collectCanonicalScalarValues
};
//# sourceMappingURL=chunk-JCIM3ZHA.js.map
