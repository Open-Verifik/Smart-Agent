/**
 * Colombia Postman sandbox profiles.
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/Colombia/helpers/colombian-sandbox.helper.js
 * (SANDBOX_FIXED_DOCUMENTS — keep in sync manually).
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    appendSandboxResponseProfiles,
    SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
    SANDBOX_CONFLICT_INVALID_EXPEDITION_DATE,
    SANDBOX_CONFLICT_MISSING_CITY,
    SANDBOX_CONFLICT_MISSING_EXPEDITION_DATE,
    SANDBOX_CONFLICT_MISSING_PROCESS_NUMBER,
    SANDBOX_CONFLICT_MISSING_QUALITY,
} from '../sandbox-error-profiles';
import {
    appendVehiclePlateSandboxProfiles,
    appendVehicleVinSandboxProfiles,
    appendSimitPlateSandboxProfiles,
    SANDBOX_CONFLICT_MISSING_PLATE,
    SANDBOX_DEFAULT_PLATE,
    SANDBOX_DEFAULT_SIMIT_PLATE,
    SANDBOX_DEFAULT_VIN,
    SANDBOX_VEHICLE_VIN_PROFILES,
} from '../vehicle-plate-profiles';

export const COLOMBIA_CEDULA_ENDPOINT_CODE = 'colombia_api_identity_lookup';

export const COLOMBIA_PEP_ENDPOINT_CODE = 'colombia_pep_lookup';

export const COLOMBIA_CE_FOREIGNER_ENDPOINT_CODE = 'colombia_api_identity_ce_foreigner_id';

export const COLOMBIA_PEP_FOREIGNER_ENDPOINT_CODE = 'colombia_api_identity_pep_foreigner_id';

export const COLOMBIA_PPT_FOREIGNER_ENDPOINT_CODE = 'colombia_api_identity_ppt_foreigner_id';

export const COLOMBIA_JUDICIAL_RECORDS_ENDPOINT_CODE = 'colombia_api_judicial_records';

export const COLOMBIA_LAWYERS_ENDPOINT_CODE = 'colombia_api_lawyers';

export const COLOMBIA_LAWYERS_CERTIFICATE_ENDPOINT_CODE = 'colombia_api_lawyers_certificate';

export const COLOMBIA_JUDICIAL_PROCESS_DETAILS_ENDPOINT_CODE = 'colombia_api_judicial_process_details';

export const COLOMBIA_JUDICIAL_PROCESSES_ENDPOINT_CODE = 'colombia_api_judicial_processes';

export const COLOMBIA_MILITARY_SITUATION_ENDPOINT_CODE = 'colombia_api_military_situation';

export const COLOMBIA_MIN_TRABAJO_V3_ENDPOINT_CODE = 'colombia_api_min_trabajo_v3';

export const COLOMBIA_RETHUS_ENDPOINT_CODE = 'colombia_api_rethus';

export const COLOMBIA_RUNT_VEHICLE_ENDPOINT_CODE = 'colombia_api_vehicle';
export const COLOMBIA_RUNT_DRIVER_ENDPOINT_CODE = 'colombia_api_driver';
export const COLOMBIA_RUNT_VEHICLE_COMPLETE_PLATE_ENDPOINT_CODE = 'colombia_api_vehicle_complete_by_plate';
export const COLOMBIA_RUNT_VEHICLE_SIMPLIFIED_ENDPOINT_CODE = 'colombia_api_vehicle_complete_by_plate_simplified';
export const COLOMBIA_RUNT_VEHICLE_VIN_ENDPOINT_CODE = 'colombia_api_vehicle_complete_by_vin';
export const COLOMBIA_RUNT_VEHICLE_SOAT_ENDPOINT_CODE = 'colombia_api_vehicle_soat';
export const COLOMBIA_RUNT_VEHICLE_COMPLETE_ENDPOINT_CODE = 'colombia_api_vehicle_complete';
export const COLOMBIA_RUNT_OWNERS_ENDPOINT_CODE = 'colombia_api_runt_owners';
export const COLOMBIA_SIMIT_PLATE_ENDPOINT_CODE = 'colombia_api_simit_plate';
export const COLOMBIA_PICO_PLACA_ENDPOINT_CODE = 'colombia_api_pico_placa';
export const COLOMBIA_BOGOTA_FINES_ENDPOINT_CODE = 'colombia_api_vehicle_fines_bogota';
export const COLOMBIA_BOGOTA_ACCIDENTALITY_ENDPOINT_CODE = 'colombia_api_vehicle_accidentality_bogota';
export const COLOMBIA_BOGOTA_VEHICLE_TAX_ENDPOINT_CODE = 'colombia_api_vehicle_tax';
export const COLOMBIA_BOGOTA_TAXI_PLATE_ENDPOINT_CODE = 'co_bogota_taxi_plate';
export const COLOMBIA_SIMIT_AGREEMENTS_ENDPOINT_CODE = 'colombia_api_simit_agreements';
export const COLOMBIA_SIMIT_COMPLETE_ENDPOINT_CODE = 'colombia_api_simit_complete';
export const COLOMBIA_SIMIT_RESOLUTIONS_ENDPOINT_CODE = 'colombia_api_simit_resolutions';
export const COLOMBIA_SIMIT_SUSPENSIONS_ENDPOINT_CODE = 'colombia_api_simit_suspensions';
export const COLOMBIA_FASECOLDA_SINISTER_ENDPOINT_CODE = 'colombia_api_vehicle_sinister_fasecolda_by_plate';
export const COLOMBIA_FASECOLDA_VALUES_PLATE_ENDPOINT_CODE = 'colombia_api_vehicle_valores_fasecolda_by_plate';
export const COLOMBIA_SISBEN_ENDPOINT_CODE = 'colombia_sisben_api_lookup';
export const COLOMBIA_DELINQUENT_DEBTORS_ENDPOINT_CODE = 'colombia_api_delinquent_debtors';
export const COLOMBIA_AFFILIATIONS_ENDPOINT_CODE = 'colombia_api_affiliations';
export const COLOMBIA_CRIMINAL_HISTORY_ENDPOINT_CODE = 'colombia_api_criminal_history';
export const COLOMBIA_DIAN_ENDPOINT_CODE = 'colombia_api_dian';
export const COLOMBIA_POLICE_RNMC_ENDPOINT_CODE = 'colombia_api_police_rnmc';
export const COLOMBIA_CONTRALORIA_CERTIFICATE_ENDPOINT_CODE = 'colombia_api_contraloria_certificate';
export const COLOMBIA_DIAN_INVOICER_ENDPOINT_CODE = 'colombia_api_dian_invoicer';
export const COLOMBIA_RUES_V3_ENDPOINT_CODE = 'colombia_api_rues_v3';
export const COLOMBIA_REGISTRADURIA_CERTIFICATE_ENDPOINT_CODE = 'colombia_api_registraduria_certificate';
export const COLOMBIA_REGISTRADURIA_VOTING_ENDPOINT_CODE = 'colombia_api_registraduria_voting';
export const COLOMBIA_SENA_ENDPOINT_CODE = 'colombia_api_sena';
export const COLOMBIA_SIMIT_COMPARENDO_DETAILS_ENDPOINT_CODE = 'colombia_api_simit_subpoenas_details';
export const COLOMBIA_MEDELLIN_FINES_ENDPOINT_CODE = 'colombia_api_vehicle_fines_medellin';
export const COLOMBIA_BOGOTA_TAXI_CARD_ENDPOINT_CODE = 'co_bogota_taxi_driver_card';
export const COLOMBIA_INPEC_ENDPOINT_CODE = 'colombia_inpec_lookup';
export const COLOMBIA_CONTRACTS_ENDPOINT_CODE = 'api_colombia_contracts';
export const COLOMBIA_SISCONMP_ENDPOINT_CODE = 'colombia_api_sisconmp';
export const COLOMBIA_FASECOLDA_VALUES_CODE_ENDPOINT_CODE = 'colombia_api_vehicle_valores_fasecolda_by_code';
export const COLOMBIA_SIGEP_BY_NAME_ENDPOINT_CODE = 'colombia_sigep_by_name';
export const COLOMBIA_SIGEP_BY_NUMBER_ENDPOINT_CODE = 'colombia_sigep_by_number';
export const COLOMBIA_CEDULA_EXTRA_ENDPOINT_CODE = 'colombia_api_identity_lookup_extra';
export const COLOMBIA_CEDULA_PREMIUM_ENDPOINT_CODE = 'colombia_api_identity_lookup_premium';
export const COLOMBIA_RUES_FULL_V3_ENDPOINT_CODE = 'colombia_api_rues_full_v3';

const COLOMBIA_AFFILIATIONS_DEFAULT_DATE = '15/03/1990';
const COLOMBIA_CEDULA_EXTRA_DEFAULT_DATE = '15/03/2020';
const COLOMBIA_POLICE_RNMC_DEFAULT_DATE = '22/07/2005';
const COLOMBIA_REGISTRADURIA_CERTIFICATE_DEFAULT_DATE = '15/03/2018';

const COLOMBIA_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO' },
];

const COLOMBIA_INPEC_FIRST_SURNAMES = [
    'LOPEZ',
    'PEREZ',
    'MARTINEZ',
    'GONZALEZ',
    'RAMIREZ',
    'SILVA',
    'CASTRO',
    'MORALES',
    'DIAZ',
    'ROJAS',
];

const COLOMBIA_INPEC_SANDBOX_PROFILES: PostmanSandboxProfile[] = COLOMBIA_SANDBOX_PROFILES.map(
    (profile, index) => ({
        ...profile,
        fullName: `${profile.fullName} — ${index % 2 === 0 ? 'con registro' : 'sin registro'}`,
        paramOverrides: {
            documentType: 'CC',
            documentNumber: profile.documentNumber,
            firstSurname: COLOMBIA_INPEC_FIRST_SURNAMES[index],
        },
    })
);

const COLOMBIA_POLICE_RNMC_SANDBOX_PROFILES: PostmanSandboxProfile[] = COLOMBIA_SANDBOX_PROFILES.map(
    (profile, index) => ({
        ...profile,
        fullName: `${profile.fullName} — ${index % 2 === 0 ? 'con medidas' : 'sin medidas'}`,
    })
);

const COLOMBIA_DIAN_SANDBOX_PROFILES: PostmanSandboxProfile[] = COLOMBIA_SANDBOX_PROFILES.map(
    (profile) => ({
        ...profile,
        fullName: `${profile.fullName} — REGISTRO ACTIVO`,
        paramOverrides: {
            documentType: 'NIT',
            documentNumber: profile.documentNumber,
        },
    })
);

const COLOMBIA_FASECOLDA_CODE_SANDBOX_PROFILES: PostmanSandboxProfile[] = COLOMBIA_SANDBOX_PROFILES.map(
    (profile) => ({
        documentNumber: profile.documentNumber,
        fullName: `${profile.fullName} — FASECOLDA code`,
        paramOverrides: {
            codeFasecolda: profile.documentNumber,
        },
    })
);

const COLOMBIA_SIGEP_BY_NAME_SANDBOX_PROFILES: PostmanSandboxProfile[] = COLOMBIA_SANDBOX_PROFILES.map(
    (profile) => ({
        documentNumber: profile.documentNumber,
        fullName: `${profile.fullName} — SIGEP`,
        paramOverrides: {
            fullName: profile.fullName,
        },
    })
);

const COLOMBIA_SIGEP_BY_NAME_ERROR_PROFILE_404: PostmanSandboxProfile = {
    profileKey: '404-sigep-name',
    documentNumber: '90040401',
    fullName: '404 — SIGEP name not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        fullName: 'NOT FOUND 90040401',
    },
};

const COLOMBIA_DIAN_NIT_PREFIX_PROFILES: PostmanSandboxProfile[] = COLOMBIA_SANDBOX_PROFILES.map(
    (profile, index) => ({
        documentNumber: `9010000${String(index + 1).padStart(2, '0')}`,
        fullName: `${profile.fullName} — REGISTRO ACTIVO (901 prefix)`,
        paramOverrides: {
            documentType: 'NIT',
            documentNumber: `9010000${String(index + 1).padStart(2, '0')}`,
        },
    })
);

const COLOMBIA_DIAN_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: '10000001',
    },
};

const COLOMBIA_RUES_SANDBOX_PROFILES: PostmanSandboxProfile[] = COLOMBIA_DIAN_SANDBOX_PROFILES.map(
    (profile) => ({
        ...profile,
        fullName: `${profile.fullName?.replace(' — REGISTRO ACTIVO', '')} — RUES RM`,
        paramOverrides: {
            documentType: 'NIT',
            documentNumber: profile.documentNumber,
            category: 'RM',
        },
    })
);

const COLOMBIA_RUNT_VEHICLE_PROFILES: PostmanSandboxProfile[] = COLOMBIA_SANDBOX_PROFILES.map(
    (profile, index) => ({
        ...profile,
        plate: `ABC${10001 + index}`,
        fullName: `${profile.fullName} — valid`,
    })
);

const COLOMBIA_RUNT_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: '10000001',
        plate: SANDBOX_DEFAULT_PLATE,
    },
};

const COLOMBIA_PEP_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — Ministerio de Hacienda' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — Congreso de la República' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — Departamento Administrativo de la Presidencia' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — Ministerio del Interior' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — Contraloría General de la República' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — Ministerio de Hacienda' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — Congreso de la República' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — Departamento Administrativo de la Presidencia' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — Ministerio del Interior' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — Contraloría General de la República' },
];

const COLOMBIA_CE_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — VIGENTE', expeditionDate: '15/03/2020' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — VIGENTE', expeditionDate: '22/07/2019' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — VIGENTE', expeditionDate: '08/11/2021' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — VIGENTE', expeditionDate: '30/01/2018' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — VIGENTE', expeditionDate: '12/05/2022' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — VIGENTE', expeditionDate: '04/09/2017' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — VIGENTE', expeditionDate: '19/12/2023' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — VIGENTE', expeditionDate: '27/06/2016' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — VIGENTE', expeditionDate: '03/04/2020' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — VIGENTE', expeditionDate: '14/08/2019' },
];

const COLOMBIA_PEP_FOREIGNER_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — VIGENTE', expeditionDate: '15/03/2020' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — VIGENTE', expeditionDate: '22/07/2019' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — VIGENTE', expeditionDate: '08/11/2021' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — VIGENTE', expeditionDate: '30/01/2018' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — VIGENTE', expeditionDate: '12/05/2022' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — VIGENTE', expeditionDate: '04/09/2017' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — VIGENTE', expeditionDate: '19/12/2023' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — VIGENTE', expeditionDate: '27/06/2016' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — VIGENTE', expeditionDate: '03/04/2020' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — VIGENTE', expeditionDate: '14/08/2019' },
];

const COLOMBIA_PPT_FOREIGNER_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — VIGENTE', expeditionDate: '15/03/2020' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — VIGENTE', expeditionDate: '22/07/2019' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — VIGENTE', expeditionDate: '08/11/2021' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — VIGENTE', expeditionDate: '30/01/2018' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — VIGENTE', expeditionDate: '12/05/2022' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — VIGENTE', expeditionDate: '04/09/2017' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — VIGENTE', expeditionDate: '19/12/2023' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — VIGENTE', expeditionDate: '27/06/2016' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — VIGENTE', expeditionDate: '03/04/2020' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — VIGENTE', expeditionDate: '14/08/2019' },
];

const COLOMBIA_JUDICIAL_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — JUZGADO CIVIL DEL CIRCUITO' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — JUZGADO DE FAMILIA' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — JUZGADO PENAL DEL CIRCUITO' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — JUZGADO LABORAL DEL CIRCUITO' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — JUZGADO CIVIL DEL CIRCUITO' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — JUZGADO DE FAMILIA' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — JUZGADO PENAL DEL CIRCUITO' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — JUZGADO LABORAL DEL CIRCUITO' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — JUZGADO CIVIL DEL CIRCUITO' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — JUZGADO DE FAMILIA' },
];

const COLOMBIA_LAWYERS_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — Vigente' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — Vigente' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — Vigente' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — Vigente' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — Vigente' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — Vigente' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — Vigente' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — Vigente' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — Vigente' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — Vigente' },
];

const COLOMBIA_LAWYERS_CERTIFICATE_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — Vigente (ABG)' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — Vigente (ABG)' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — Vigente (ABG)' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — Vigente (ABG)' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — Vigente (ABG)' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — Vigente (ABG)' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — Vigente (ABG)' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — Vigente (ABG)' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — Vigente (ABG)' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — Vigente (ABG)' },
];

const COLOMBIA_JUDICIAL_PROCESS_DETAILS_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { processNumber: '10000001', documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — Demandante' },
    { processNumber: '10000002', documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — Demandado' },
    { processNumber: '10000003', documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — Tercero' },
    { processNumber: '10000004', documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — Demandante' },
    { processNumber: '10000005', documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — Demandado' },
    { processNumber: '10000006', documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — Tercero' },
    { processNumber: '10000007', documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — Demandante' },
    { processNumber: '10000008', documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — Demandado' },
    { processNumber: '10000009', documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — Tercero' },
    { processNumber: '10000010', documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — Demandante' },
];

const COLOMBIA_JUDICIAL_PROCESSES_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — 1 proceso' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — 1 proceso' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — 1 proceso' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — 1 proceso' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — 1 proceso' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — 1 proceso' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — 1 proceso' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — 1 proceso' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — 1 proceso' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — 1 proceso' },
];

const COLOMBIA_MILITARY_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — DEFINITIVA' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — PRIMERA CLASE' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — SEGUNDA CLASE' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — BAJA' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — INCORPORADO' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — LICENCIA' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — DEFINITIVA' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — PRIMERA CLASE' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — SEGUNDA CLASE' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — DEFINITIVA' },
];

const COLOMBIA_MIN_TRABAJO_V3_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — Alturas Básico' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — Alturas Intermedio' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — Alturas Avanzado' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — Espacios Confinados' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — Supervisor Alturas' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — Alturas Básico' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — Alturas Intermedio' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — Alturas Avanzado' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — Alturas Básico' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — Alturas Intermedio' },
];

const COLOMBIA_RETHUS_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — MEDICO GENERAL' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — ENFERMERO PROFESIONAL' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — ODONTOLOGO' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — FARMACEUTICO' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — FISIOTERAPEUTA' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — MEDICO ESPECIALISTA' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — BACTERIOLOGO' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — NUTRICIONISTA' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — PSICOLOGO' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — MEDICO GENERAL' },
];

const COLOMBIA_RETHUS_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: { documentType: 'INVALID', documentNumber: '10000001' },
};

export const COLOMBIA_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [COLOMBIA_CEDULA_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_CEDULA_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_PEP_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_PEP_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_PEP_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_CE_FOREIGNER_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_CE_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_MISSING_EXPEDITION_DATE,
                SANDBOX_CONFLICT_INVALID_EXPEDITION_DATE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultExpeditionDate: '15/03/2020',
        documentTypeByCode: {
            [COLOMBIA_CE_FOREIGNER_ENDPOINT_CODE]: 'CE',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_PEP_FOREIGNER_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_PEP_FOREIGNER_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_MISSING_EXPEDITION_DATE,
                SANDBOX_CONFLICT_INVALID_EXPEDITION_DATE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultExpeditionDate: '15/03/2020',
        showProfileMeta: false,
    },
    [COLOMBIA_PPT_FOREIGNER_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_PPT_FOREIGNER_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_MISSING_EXPEDITION_DATE,
                SANDBOX_CONFLICT_INVALID_EXPEDITION_DATE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultExpeditionDate: '15/03/2020',
        showProfileMeta: false,
    },
    [COLOMBIA_JUDICIAL_RECORDS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_JUDICIAL_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_MISSING_CITY,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultCity: 'BOGOTA',
        documentTypeByCode: {
            [COLOMBIA_JUDICIAL_RECORDS_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_LAWYERS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_LAWYERS_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_LAWYERS_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_LAWYERS_CERTIFICATE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_LAWYERS_CERTIFICATE_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_MISSING_QUALITY,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultQuality: 'ABG',
        documentTypeByCode: {
            [COLOMBIA_LAWYERS_CERTIFICATE_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_JUDICIAL_PROCESS_DETAILS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_JUDICIAL_PROCESS_DETAILS_SANDBOX_PROFILES, {
            conflictProfiles: [SANDBOX_CONFLICT_MISSING_PROCESS_NUMBER],
        }),
        defaultDocumentNumber: '10000001',
        defaultProcessNumber: '10000001',
        showProfileMeta: false,
    },
    [COLOMBIA_JUDICIAL_PROCESSES_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_JUDICIAL_PROCESSES_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_JUDICIAL_PROCESSES_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_MILITARY_SITUATION_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_MILITARY_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_MILITARY_SITUATION_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_MIN_TRABAJO_V3_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_MIN_TRABAJO_V3_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_MIN_TRABAJO_V3_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_RETHUS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_RETHUS_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                COLOMBIA_RETHUS_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_RETHUS_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_RUNT_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_RUNT_VEHICLE_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                COLOMBIA_RUNT_CONFLICT_INVALID_DOCUMENT_TYPE,
                SANDBOX_CONFLICT_MISSING_PLATE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        documentTypeByCode: {
            [COLOMBIA_RUNT_VEHICLE_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_RUNT_DRIVER_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_RUNT_DRIVER_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_RUNT_VEHICLE_COMPLETE_PLATE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_RUNT_VEHICLE_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                COLOMBIA_RUNT_CONFLICT_INVALID_DOCUMENT_TYPE,
                SANDBOX_CONFLICT_MISSING_PLATE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        documentTypeByCode: {
            [COLOMBIA_RUNT_VEHICLE_COMPLETE_PLATE_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_RUNT_VEHICLE_SIMPLIFIED_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_RUNT_VEHICLE_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                COLOMBIA_RUNT_CONFLICT_INVALID_DOCUMENT_TYPE,
                SANDBOX_CONFLICT_MISSING_PLATE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        documentTypeByCode: {
            [COLOMBIA_RUNT_VEHICLE_SIMPLIFIED_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_RUNT_VEHICLE_VIN_ENDPOINT_CODE]: {
        profiles: appendVehicleVinSandboxProfiles(SANDBOX_VEHICLE_VIN_PROFILES),
        defaultVin: SANDBOX_DEFAULT_VIN,
        defaultDocumentNumber: SANDBOX_DEFAULT_VIN,
        showProfileMeta: false,
    },
    [COLOMBIA_RUNT_VEHICLE_SOAT_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [COLOMBIA_RUNT_VEHICLE_COMPLETE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [COLOMBIA_RUNT_OWNERS_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [COLOMBIA_SIMIT_PLATE_ENDPOINT_CODE]: {
        profiles: appendSimitPlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_SIMIT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_SIMIT_PLATE,
        showProfileMeta: false,
    },
    [COLOMBIA_PICO_PLACA_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [COLOMBIA_BOGOTA_FINES_ENDPOINT_CODE]: {
        profiles: appendSimitPlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_SIMIT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_SIMIT_PLATE,
        showProfileMeta: false,
    },
    [COLOMBIA_BOGOTA_ACCIDENTALITY_ENDPOINT_CODE]: {
        profiles: appendSimitPlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_SIMIT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_SIMIT_PLATE,
        showProfileMeta: false,
    },
    [COLOMBIA_BOGOTA_VEHICLE_TAX_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_RUNT_VEHICLE_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                COLOMBIA_RUNT_CONFLICT_INVALID_DOCUMENT_TYPE,
                SANDBOX_CONFLICT_MISSING_PLATE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        documentTypeByCode: {
            [COLOMBIA_BOGOTA_VEHICLE_TAX_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_BOGOTA_TAXI_PLATE_ENDPOINT_CODE]: {
        profiles: appendSimitPlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_SIMIT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_SIMIT_PLATE,
        showProfileMeta: false,
    },
    [COLOMBIA_SIMIT_AGREEMENTS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_SIMIT_AGREEMENTS_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_SIMIT_COMPLETE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_SIMIT_COMPLETE_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_SIMIT_RESOLUTIONS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_SIMIT_RESOLUTIONS_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_SIMIT_SUSPENSIONS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_SIMIT_SUSPENSIONS_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_FASECOLDA_SINISTER_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [COLOMBIA_FASECOLDA_VALUES_PLATE_ENDPOINT_CODE]: {
        profiles: appendSimitPlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_SIMIT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_SIMIT_PLATE,
        showProfileMeta: false,
    },
    [COLOMBIA_SISBEN_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_SISBEN_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_DELINQUENT_DEBTORS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_DELINQUENT_DEBTORS_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_AFFILIATIONS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultDate: COLOMBIA_AFFILIATIONS_DEFAULT_DATE,
        documentTypeByCode: {
            [COLOMBIA_AFFILIATIONS_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_CRIMINAL_HISTORY_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_CRIMINAL_HISTORY_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_DIAN_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(
            [...COLOMBIA_DIAN_SANDBOX_PROFILES, ...COLOMBIA_DIAN_NIT_PREFIX_PROFILES.slice(0, 3)],
            {
                conflictProfiles: [
                    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                    COLOMBIA_DIAN_CONFLICT_INVALID_DOCUMENT_TYPE,
                ],
            }
        ),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_DIAN_ENDPOINT_CODE]: 'NIT',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_POLICE_RNMC_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_POLICE_RNMC_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultDate: COLOMBIA_POLICE_RNMC_DEFAULT_DATE,
        documentTypeByCode: {
            [COLOMBIA_POLICE_RNMC_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_CONTRALORIA_CERTIFICATE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_CONTRALORIA_CERTIFICATE_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_DIAN_INVOICER_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_DIAN_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                COLOMBIA_DIAN_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_DIAN_INVOICER_ENDPOINT_CODE]: 'NIT',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_RUES_V3_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_RUES_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                COLOMBIA_DIAN_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultCategory: 'RM',
        documentTypeByCode: {
            [COLOMBIA_RUES_V3_ENDPOINT_CODE]: 'NIT',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_REGISTRADURIA_CERTIFICATE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultDate: COLOMBIA_REGISTRADURIA_CERTIFICATE_DEFAULT_DATE,
        documentTypeByCode: {
            [COLOMBIA_REGISTRADURIA_CERTIFICATE_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_INPEC_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_INPEC_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultFirstSurname: 'LOPEZ',
        documentTypeByCode: {
            [COLOMBIA_INPEC_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_CONTRACTS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_CONTRACTS_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_SISCONMP_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_SISCONMP_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_FASECOLDA_VALUES_CODE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_FASECOLDA_CODE_SANDBOX_PROFILES, {
            conflictProfiles: [],
        }),
        defaultDocumentNumber: '10000001',
        defaultCodeFasecolda: '10000001',
        showProfileMeta: false,
    },
    [COLOMBIA_SIGEP_BY_NAME_ENDPOINT_CODE]: {
        profiles: [
            ...COLOMBIA_SIGEP_BY_NAME_SANDBOX_PROFILES,
            COLOMBIA_SIGEP_BY_NAME_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: '10000001',
        showProfileMeta: false,
    },
    [COLOMBIA_SIGEP_BY_NUMBER_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_SIGEP_BY_NUMBER_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_CEDULA_EXTRA_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultDate: COLOMBIA_CEDULA_EXTRA_DEFAULT_DATE,
        documentTypeByCode: {
            [COLOMBIA_CEDULA_EXTRA_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_CEDULA_PREMIUM_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_CEDULA_PREMIUM_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_RUES_FULL_V3_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_RUES_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                COLOMBIA_DIAN_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultCategory: 'RM',
        documentTypeByCode: {
            [COLOMBIA_RUES_FULL_V3_ENDPOINT_CODE]: 'NIT',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_REGISTRADURIA_VOTING_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER],
        }),
        defaultDocumentNumber: '10000001',
        showProfileMeta: false,
    },
    [COLOMBIA_SENA_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_SENA_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_SIMIT_COMPARENDO_DETAILS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [COLOMBIA_SIMIT_COMPARENDO_DETAILS_ENDPOINT_CODE]: 'CC',
        },
        showProfileMeta: false,
    },
    [COLOMBIA_MEDELLIN_FINES_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [COLOMBIA_BOGOTA_TAXI_CARD_ENDPOINT_CODE]: {
        profiles: [
            ...COLOMBIA_SANDBOX_PROFILES.map((profile) => ({
                ...profile,
                fullName: profile.fullName.replace(' — valid', ' — taxi card'),
            })),
            {
                documentNumber: '90040401',
                fullName: '404 — Taxi card not found',
                responseType: 'error' as const,
                expectedStatus: 404,
            },
        ],
        defaultDocumentNumber: '10000001',
        showProfileMeta: false,
    },
};
