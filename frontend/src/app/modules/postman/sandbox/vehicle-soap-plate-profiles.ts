/**
 * Chile vehicular SOAP by plate sandbox profiles (plate only).
 * Source of truth: verifik-backend/Repositories/ExtractionCar/Chile/helpers/chilean-vehicle-soap-sandbox.helper.js
 */
import { PostmanSandboxProfile } from './postman-sandbox.types';
import {
    SANDBOX_ERROR_PLATE_SHORT,
    SANDBOX_SIMIT_PLATE_PROFILES,
} from './vehicle-plate-profiles';

export const SANDBOX_DEFAULT_SOAP_PLATE_ONLY = 'BBCC12';

const SOAP_FIXTURE_HINTS: Record<string, string> = {
    BBCC12: 'TOYOTA COROLLA — VIGENTE',
    BBCC13: 'NISSAN SENTRA — VIGENTE',
    BBCC14: 'MAZDA CX-5 — VIGENTE',
    BBCC15: 'HYUNDAI TUCSON — VENCIDO',
    BBCC16: 'KIA SPORTAGE — VIGENTE',
    BBCC17: 'CHEVROLET ONIX — VIGENTE',
    BBCC18: 'FORD RANGER — VIGENTE',
    BBCC19: 'SUZUKI GRAND VITARA — VIGENTE',
    BBCC20: 'MITSUBISHI L200 — VIGENTE',
    BBCC21: 'HONDA CR-V — VIGENTE',
};

const buildSoapPlateFixtureProfiles = (): PostmanSandboxProfile[] =>
    SANDBOX_SIMIT_PLATE_PROFILES.map((profile) => {
        const plate = profile.plate ?? profile.documentNumber;

        return {
            profileKey: `soap-plate-${plate.toLowerCase()}`,
            plate,
            documentNumber: plate,
            fullName: `${profile.fullName.replace(' — valid', '')} — ${SOAP_FIXTURE_HINTS[plate]}`,
            paramOverrides: { plate },
        };
    });

const LIVE_PROBE_PLATES: PostmanSandboxProfile[] = [
    { plate: 'CLTK27', documentNumber: 'CLTK27', fullName: 'KIA CERATO 2010 — SOAP activo (live)', paramOverrides: { plate: 'CLTK27' } },
    { plate: 'HTRT86', documentNumber: 'HTRT86', fullName: 'MITSUBISHI L200 2016 — SOAP activo (live)', paramOverrides: { plate: 'HTRT86' } },
    { plate: 'RRWX51', documentNumber: 'RRWX51', fullName: 'SUZUKI DZIRE 2022 — SOAP activo (live)', paramOverrides: { plate: 'RRWX51' } },
    { plate: 'THHV64', documentNumber: 'THHV64', fullName: 'VOLVO XC40 2024 — SOAP activo (live)', paramOverrides: { plate: 'THHV64' } },
    { plate: 'CSXZ52', documentNumber: 'CSXZ52', fullName: 'KIA MORNING 2011 — SOAP activo (live)', paramOverrides: { plate: 'CSXZ52' } },
    { plate: 'CSXZ57', documentNumber: 'CSXZ57', fullName: 'NISSAN D22 2011 — SOAP activo (live)', paramOverrides: { plate: 'CSXZ57' } },
    { plate: 'CSXZ27', documentNumber: 'CSXZ27', fullName: 'MAHINDRA PIK UP 2011 — sin SOAP activo (live)', paramOverrides: { plate: 'CSXZ27' } },
];

export const SANDBOX_VEHICLE_SOAP_PLATE_DEMO_PROFILE: PostmanSandboxProfile = {
    profileKey: 'soap-plate-htrt86',
    plate: 'HTRT86',
    documentNumber: 'HTRT86',
    fullName: 'JUAN PEREZ LOPEZ — TOYOTA COROLLA demo (sandbox nested)',
    paramOverrides: { plate: 'HTRT86' },
};

export const SANDBOX_ERROR_PROFILE_SOAP_PLATE_404: PostmanSandboxProfile = {
    profileKey: '404-soap-plate-only',
    plate: SANDBOX_ERROR_PLATE_SHORT,
    documentNumber: SANDBOX_ERROR_PLATE_SHORT,
    fullName: '404 — Vehicle not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: { plate: SANDBOX_ERROR_PLATE_SHORT },
};

export const SANDBOX_CONFLICT_MISSING_SOAP_PLATE_ONLY: PostmanSandboxProfile = {
    profileKey: '409-missing-plate-only',
    documentNumber: '90040912',
    fullName: '409 — Missing plate',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { plate: '' },
};

export const appendVehicleSoapPlateSandboxProfiles = (): PostmanSandboxProfile[] => [
    ...buildSoapPlateFixtureProfiles(),
    SANDBOX_VEHICLE_SOAP_PLATE_DEMO_PROFILE,
    ...LIVE_PROBE_PLATES,
    SANDBOX_CONFLICT_MISSING_SOAP_PLATE_ONLY,
    SANDBOX_ERROR_PROFILE_SOAP_PLATE_404,
];
