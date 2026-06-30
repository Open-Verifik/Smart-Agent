/**
 * Chile vehicular SOAP sandbox profiles (plate + policyNumber).
 * Plates must be 4–6 chars (SOAP middleware max). Use AB1001–AB1010, not ABC10001.
 * Source of truth: verifik-backend/Core/sandbox-plate-fixtures.helper.js (SANDBOX_SHORT_PLATE_BY_FIXTURE)
 */
import { PostmanSandboxProfile } from './postman-sandbox.types';
import { SANDBOX_ERROR_PLATE_SHORT, SANDBOX_SIMIT_PLATE_PROFILES } from './vehicle-plate-profiles';

export const SANDBOX_DEFAULT_SOAP_PLATE = 'AB1001';
export const SANDBOX_DEFAULT_POLICY_NUMBER = '94590001';

const SOAP_FIXTURE_HINTS: Record<string, string> = {
    AB1001: 'TOYOTA COROLLA — VIGENTE',
    AB1002: 'NISSAN SENTRA — VIGENTE',
    AB1003: 'MAZDA CX-5 — VIGENTE',
    AB1004: 'HYUNDAI TUCSON — VENCIDO',
    AB1005: 'KIA SPORTAGE — VIGENTE',
    AB1006: 'CHEVROLET ONIX — VIGENTE',
    AB1007: 'FORD RANGER — VIGENTE',
    AB1008: 'SUZUKI GRAND VITARA — VIGENTE',
    AB1009: 'MITSUBISHI L200 — VIGENTE',
    AB1010: 'HONDA CR-V — VIGENTE',
};

const buildSoapFixtureProfiles = (): PostmanSandboxProfile[] =>
    SANDBOX_SIMIT_PLATE_PROFILES.map((profile) => {
        const plate = profile.plate ?? profile.documentNumber;
        const fixtureIndex = Number.parseInt(plate.slice(-4), 10) - 1000;
        const policyNumber = `945900${String(fixtureIndex).padStart(2, '0')}`;

        return {
            profileKey: `soap-${plate.toLowerCase()}`,
            plate,
            documentNumber: plate,
            fullName: `${profile.fullName.replace(' — valid', '')} — ${SOAP_FIXTURE_HINTS[plate]}`,
            paramOverrides: { plate, policyNumber },
        };
    });

export const SANDBOX_VEHICLE_SOAP_DEMO_PROFILE: PostmanSandboxProfile = {
    profileKey: 'soap-htrt86',
    plate: 'HTRT86',
    documentNumber: 'HTRT86',
    fullName: 'JUAN PEREZ LOPEZ — TOYOTA COROLLA demo (live-style)',
    paramOverrides: { plate: 'HTRT86', policyNumber: '94596506' },
};

export const SANDBOX_ERROR_PROFILE_SOAP_404: PostmanSandboxProfile = {
    profileKey: '404-soap-plate',
    plate: SANDBOX_ERROR_PLATE_SHORT,
    documentNumber: SANDBOX_ERROR_PLATE_SHORT,
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: { plate: SANDBOX_ERROR_PLATE_SHORT, policyNumber: '6506' },
};

export const SANDBOX_CONFLICT_MISSING_SOAP_PLATE: PostmanSandboxProfile = {
    profileKey: '409-missing-plate',
    documentNumber: '90040910',
    fullName: '409 — Missing plate',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { plate: '', policyNumber: SANDBOX_DEFAULT_POLICY_NUMBER },
};

export const SANDBOX_CONFLICT_MISSING_POLICY_NUMBER: PostmanSandboxProfile = {
    profileKey: '409-missing-policyNumber',
    documentNumber: '90040911',
    fullName: '409 — Missing policyNumber',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { plate: SANDBOX_DEFAULT_SOAP_PLATE, policyNumber: '' },
};

export const appendVehicleSoapSandboxProfiles = (): PostmanSandboxProfile[] => [
    ...buildSoapFixtureProfiles(),
    SANDBOX_VEHICLE_SOAP_DEMO_PROFILE,
    SANDBOX_CONFLICT_MISSING_SOAP_PLATE,
    SANDBOX_CONFLICT_MISSING_POLICY_NUMBER,
    SANDBOX_ERROR_PROFILE_SOAP_404,
];
