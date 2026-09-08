/**
 * Chile AutoSeguro stolen-vehicle sandbox profiles.
 * Source of truth: verifik-backend/Repositories/ExtractionCar/Chile/helpers/chilean-stolen-vehicle-sandbox.helper.js
 */
import { PostmanSandboxProfile } from './postman-sandbox.types';

export const SANDBOX_DEFAULT_STOLEN_PLATE = 'PTKX93';
export const SANDBOX_STOLEN_REPORT_PLATE = 'NG8245';

export const SANDBOX_STOLEN_NO_REPORT_PROFILE: PostmanSandboxProfile = {
    profileKey: 'stolen-ptkx93',
    plate: SANDBOX_DEFAULT_STOLEN_PLATE,
    documentNumber: SANDBOX_DEFAULT_STOLEN_PLATE,
    fullName: 'PTKX93 — no active theft report',
    paramOverrides: { plate: SANDBOX_DEFAULT_STOLEN_PLATE },
};

export const SANDBOX_STOLEN_REPORT_PROFILE: PostmanSandboxProfile = {
    profileKey: 'stolen-ng8245',
    plate: SANDBOX_STOLEN_REPORT_PLATE,
    documentNumber: SANDBOX_STOLEN_REPORT_PLATE,
    fullName: 'NG8245 — active theft report',
    paramOverrides: { plate: SANDBOX_STOLEN_REPORT_PLATE },
};

export const SANDBOX_CONFLICT_MISSING_STOLEN_PLATE: PostmanSandboxProfile = {
    profileKey: '409-missing-stolen-plate',
    documentNumber: '90040913',
    fullName: '409 — Missing plate',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { plate: '' },
};

export const appendVehicleStolenSandboxProfiles = (): PostmanSandboxProfile[] => [
    SANDBOX_STOLEN_NO_REPORT_PROFILE,
    SANDBOX_STOLEN_REPORT_PROFILE,
    SANDBOX_CONFLICT_MISSING_STOLEN_PLATE,
];
