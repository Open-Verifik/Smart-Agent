/**
 * Shared plate fixtures for vehicle sandbox endpoints.
 * Source of truth: verifik-backend/Core/sandbox-plate-fixtures.helper.js
 */
import { PostmanSandboxProfile } from './postman-sandbox.types';

export const SANDBOX_DEFAULT_PLATE = 'ABC10001';

export const SANDBOX_DEFAULT_SIMIT_PLATE = 'AB1001';

export const SANDBOX_ERROR_PLATE = 'ERR40401';

export const SANDBOX_ERROR_PLATE_SHORT = 'ERR404';

export const SANDBOX_VEHICLE_PLATE_PROFILES: PostmanSandboxProfile[] = [
    { plate: 'ABC10001', documentNumber: 'ABC10001', fullName: 'MARIA ELENA LOPEZ GARCIA — valid' },
    { plate: 'ABC10002', documentNumber: 'ABC10002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — valid' },
    { plate: 'ABC10003', documentNumber: 'ABC10003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — valid' },
    { plate: 'ABC10004', documentNumber: 'ABC10004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — valid' },
    { plate: 'ABC10005', documentNumber: 'ABC10005', fullName: 'ANA SOFIA RAMIREZ TORRES — valid' },
    { plate: 'ABC10006', documentNumber: 'ABC10006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — valid' },
    { plate: 'ABC10007', documentNumber: 'ABC10007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — valid' },
    { plate: 'ABC10008', documentNumber: 'ABC10008', fullName: 'RICARDO JOSE MORALES SUAREZ — valid' },
    { plate: 'ABC10009', documentNumber: 'ABC10009', fullName: 'PATRICIA CAROLINA DIAZ REYES — valid' },
    { plate: 'ABC10010', documentNumber: 'ABC10010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — valid' },
];

/** 6-char plates for SIMIT (middleware max 6). Same fixture keys as ABC10001–ABC10010. */
export const SANDBOX_SIMIT_PLATE_PROFILES: PostmanSandboxProfile[] = [
    { plate: 'AB1001', documentNumber: 'AB1001', fullName: 'MARIA ELENA LOPEZ GARCIA — valid' },
    { plate: 'AB1002', documentNumber: 'AB1002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — valid' },
    { plate: 'AB1003', documentNumber: 'AB1003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — valid' },
    { plate: 'AB1004', documentNumber: 'AB1004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — valid' },
    { plate: 'AB1005', documentNumber: 'AB1005', fullName: 'ANA SOFIA RAMIREZ TORRES — valid' },
    { plate: 'AB1006', documentNumber: 'AB1006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — valid' },
    { plate: 'AB1007', documentNumber: 'AB1007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — valid' },
    { plate: 'AB1008', documentNumber: 'AB1008', fullName: 'RICARDO JOSE MORALES SUAREZ — valid' },
    { plate: 'AB1009', documentNumber: 'AB1009', fullName: 'PATRICIA CAROLINA DIAZ REYES — valid' },
    { plate: 'AB1010', documentNumber: 'AB1010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — valid' },
];

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
