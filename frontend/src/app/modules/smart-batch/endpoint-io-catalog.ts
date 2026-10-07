/** Compact input/output field names from Postman AppFeature docs. Generated from postman-endpoints-io.json. */
export interface EndpointIoCatalogEntry {
    inputs: string[];
    outputs: string[];
    inputEnums?: Record<string, string[]>;
}

export const ENDPOINT_IO_CATALOG: Record<string, EndpointIoCatalogEntry> = {
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
            "NúmeroPoliza",
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
            "NúmeroComparendo",
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
            "NúmeroComparendo",
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
            "informaciónPersonal",
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
            "informaciónDeLaExcepcion",
            "observaciones",
            "informaciónDeLaPersonaEnCondicionDeDiscapacidad",
            "informaciónDelvehiculo"
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
