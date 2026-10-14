/**
 * Approximate centroids `[lat, lng]` for countries Verifik serves, keyed by ISO-2.
 * Used to place usage markers on the home globe; unknown codes are listed but not drawn.
 */
export const COUNTRY_CENTROIDS: Readonly<Record<string, [number, number]>> = {
    AR: [-34.6, -64.0],
    BO: [-16.5, -64.7],
    BR: [-14.2, -51.9],
    CA: [56.1, -106.3],
    CL: [-33.4, -70.7],
    CO: [4.6, -74.1],
    CR: [9.9, -84.1],
    CU: [21.5, -79.5],
    DE: [51.2, 10.4],
    DO: [18.7, -70.2],
    EC: [-1.8, -78.2],
    ES: [40.4, -3.7],
    FR: [46.2, 2.2],
    GB: [54.0, -2.0],
    GT: [15.8, -90.2],
    HN: [15.2, -86.2],
    IT: [41.9, 12.6],
    MX: [23.6, -102.6],
    NI: [12.9, -85.2],
    PA: [8.5, -80.8],
    PE: [-9.2, -75.0],
    PR: [18.2, -66.6],
    PT: [39.4, -8.2],
    PY: [-23.4, -58.4],
    SV: [13.8, -88.9],
    US: [39.8, -98.6],
    UY: [-32.5, -55.8],
    VE: [6.4, -66.6],
};

/**
 * Localized country name from an ISO-2 code, falling back to the code itself.
 * @param code ISO-2
 * @param lang UI language (`en`, `es`, ...)
 */
export const countryName = (code: string, lang: string): string => {
    try {
        return new Intl.DisplayNames([lang || 'en'], { type: 'region' }).of(code) || code;
    } catch {
        return code;
    }
};

/**
 * cobe `[phi, theta]` that turns a location to face the viewer.
 * @param lat degrees
 * @param lng degrees
 */
export const anglesForLocation = (lat: number, lng: number): [number, number] => [
    Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
    (lat * Math.PI) / 180,
];
