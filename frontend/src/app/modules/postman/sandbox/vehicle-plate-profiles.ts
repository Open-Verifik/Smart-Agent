/**
 * Shared plate fixtures for vehicle sandbox endpoints.
 * Source of truth: verifik-backend/Core/sandbox-plate-fixtures.helper.js
 */
import { PostmanSandboxProfile } from './postman-sandbox.types';

const MERCOSUR_SANDBOX_PLATES = Array.from({ length: 10 }, (_, index) => `AA123B${String.fromCharCode(65 + index)}`);

const CHILE_SIX_CHAR_SANDBOX_PLATES = Array.from({ length: 10 }, (_, index) => `BBCC${12 + index}`);

const SANDBOX_PROFILE_NAMES = [
    'MARIA ELENA LOPEZ GARCIA — valid',
    'JOSE ANTONIO PEREZ RODRIGUEZ — valid',
    'CARLA ISABEL MARTINEZ FERNANDEZ — valid',
    'LUIS ALBERTO GONZALEZ HERRERA — valid',
    'ANA SOFIA RAMIREZ TORRES — valid',
    'DIEGO ALEJANDRO SILVA MENDOZA — valid',
    'VALENTINA ANDREA CASTRO VARGAS — valid',
    'RICARDO JOSE MORALES SUAREZ — valid',
    'PATRICIA CAROLINA DIAZ REYES — valid',
    'FERNANDO MIGUEL ROJAS DELGADO — valid',
];

export const SANDBOX_DEFAULT_PLATE = MERCOSUR_SANDBOX_PLATES[0];

export const SANDBOX_DEFAULT_CHILE_VEHICLE_PLATE = CHILE_SIX_CHAR_SANDBOX_PLATES[0];

export const SANDBOX_DEFAULT_SIMIT_PLATE = CHILE_SIX_CHAR_SANDBOX_PLATES[0];

export const SANDBOX_ERROR_PLATE = 'ERR40401';

export const SANDBOX_ERROR_PLATE_SHORT = 'ERR404';

export const SANDBOX_VEHICLE_PLATE_PROFILES: PostmanSandboxProfile[] = MERCOSUR_SANDBOX_PLATES.map((plate, index) => ({
    plate,
    documentNumber: plate,
    fullName: SANDBOX_PROFILE_NAMES[index],
}));

/** 6-char plates for SIMIT/SOAP (middleware max 6). Same fixture keys as AA123BA–AA123BJ. */
export const SANDBOX_SIMIT_PLATE_PROFILES: PostmanSandboxProfile[] = CHILE_SIX_CHAR_SANDBOX_PLATES.map((plate, index) => ({
    plate,
    documentNumber: plate,
    fullName: SANDBOX_PROFILE_NAMES[index],
}));

export const SANDBOX_ERROR_PROFILE_SIMIT_PLATE_404: PostmanSandboxProfile = {
    plate: SANDBOX_ERROR_PLATE_SHORT,
    documentNumber: SANDBOX_ERROR_PLATE_SHORT,
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
};

export const SANDBOX_ERROR_PROFILE_PLATE_404: PostmanSandboxProfile = {
    plate: SANDBOX_ERROR_PLATE,
    documentNumber: SANDBOX_ERROR_PLATE,
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
};

export const SANDBOX_ERROR_VIN = 'ERRV40401';

export const SANDBOX_ERROR_PROFILE_VIN_404: PostmanSandboxProfile = {
    vin: SANDBOX_ERROR_VIN,
    documentNumber: SANDBOX_ERROR_VIN,
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
};

export const SANDBOX_CONFLICT_MISSING_VIN: PostmanSandboxProfile = {
    profileKey: '409-missing-vin',
    vin: '90040911',
    documentNumber: '90040911',
    fullName: '409 — Missing vin',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { vin: '' },
};

export const SANDBOX_CONFLICT_MISSING_PLATE: PostmanSandboxProfile = {
    profileKey: '409-missing-plate',
    plate: '90040910',
    documentNumber: '90040910',
    fullName: '409 — Missing plate',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { plate: '' },
};

export const appendVehicleVinSandboxProfiles = (
    successProfiles: PostmanSandboxProfile[],
    conflictProfiles: PostmanSandboxProfile[] = [SANDBOX_CONFLICT_MISSING_VIN]
): PostmanSandboxProfile[] => [
    ...successProfiles,
    ...conflictProfiles,
    SANDBOX_ERROR_PROFILE_VIN_404,
];

export const SANDBOX_DEFAULT_VIN = 'VIN100001';

export const SANDBOX_VEHICLE_VIN_PROFILES: PostmanSandboxProfile[] = [
    { vin: 'VIN100001', documentNumber: 'VIN100001', fullName: 'MARIA ELENA LOPEZ GARCIA — valid' },
    { vin: 'VIN100002', documentNumber: 'VIN100002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — valid' },
    { vin: 'VIN100003', documentNumber: 'VIN100003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — valid' },
    { vin: 'VIN100004', documentNumber: 'VIN100004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — valid' },
    { vin: 'VIN100005', documentNumber: 'VIN100005', fullName: 'ANA SOFIA RAMIREZ TORRES — valid' },
    { vin: 'VIN100006', documentNumber: 'VIN100006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — valid' },
    { vin: 'VIN100007', documentNumber: 'VIN100007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — valid' },
    { vin: 'VIN100008', documentNumber: 'VIN100008', fullName: 'RICARDO JOSE MORALES SUAREZ — valid' },
    { vin: 'VIN100009', documentNumber: 'VIN100009', fullName: 'PATRICIA CAROLINA DIAZ REYES — valid' },
    { vin: 'VIN100010', documentNumber: 'VIN100010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — valid' },
];

export const appendVehiclePlateSandboxProfiles = (
    successProfiles: PostmanSandboxProfile[] = SANDBOX_VEHICLE_PLATE_PROFILES,
    conflictProfiles: PostmanSandboxProfile[] = [SANDBOX_CONFLICT_MISSING_PLATE]
): PostmanSandboxProfile[] => [
    ...successProfiles,
    ...conflictProfiles,
    SANDBOX_ERROR_PROFILE_PLATE_404,
];

export const appendSimitPlateSandboxProfiles = (
    successProfiles: PostmanSandboxProfile[] = SANDBOX_SIMIT_PLATE_PROFILES,
    conflictProfiles: PostmanSandboxProfile[] = [SANDBOX_CONFLICT_MISSING_PLATE]
): PostmanSandboxProfile[] => [
    ...successProfiles,
    ...conflictProfiles,
    SANDBOX_ERROR_PROFILE_SIMIT_PLATE_404,
];
