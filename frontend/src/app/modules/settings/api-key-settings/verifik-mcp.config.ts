/**
 * Verifik MCP server setup — single source of truth for package name, command, and env vars.
 * Country values must match the @verifik/mcp catalog (comma-separated lists supported in 0.1.3+).
 */
export const VERIFIK_MCP_FEATURE = {
    enabled: true,
};

/** Special catalog value for global endpoints (sanctions, watchlists, IP, phone, etc.). */
export const VERIFIK_MCP_WORLD_COUNTRY = 'world';

export const VERIFIK_MCP_CONFIG = {
    npmPackage: '@verifik/mcp',
    npmPackageUrl: 'https://www.npmjs.com/package/@verifik/mcp',
    npxCommand: 'npx',
    npxArgs: ['-y', '@verifik/mcp'] as const,
    serverId: 'verifik-smartcheck',
    envVars: {
        apiToken: 'VERIFIK_API_TOKEN',
        apiBase: 'VERIFIK_API_BASE',
        country: 'VERIFIK_MCP_COUNTRY',
        smartcheckOnly: 'VERIFIK_MCP_SMARTCHECK_ONLY',
    },
    envDefaults: {
        apiBaseProduction: 'https://api.verifik.co',
        apiBaseStaging: 'https://staging-api.verifik.co',
        smartcheckOnly: 'true',
        smartcheckOnlyOff: 'false',
    },
    tokenPlaceholder: 'YOUR_VERIFIK_API_TOKEN',
    /**
     * Static country catalog — `value` is sent verbatim to VERIFIK_MCP_COUNTRY.
     * Display text comes from i18n via `labelKey`.
     */
    countries: [
        { value: 'Colombia', labelKey: 'settings.api_key.mcp.countries.colombia' },
        { value: 'Chile', labelKey: 'settings.api_key.mcp.countries.chile' },
        { value: 'Argentina', labelKey: 'settings.api_key.mcp.countries.argentina' },
        { value: 'Peru', labelKey: 'settings.api_key.mcp.countries.peru' },
        { value: 'Ecuador', labelKey: 'settings.api_key.mcp.countries.ecuador' },
        { value: 'Bolivia', labelKey: 'settings.api_key.mcp.countries.bolivia' },
        { value: 'Costa Rica', labelKey: 'settings.api_key.mcp.countries.costa_rica' },
        { value: 'Mexico', labelKey: 'settings.api_key.mcp.countries.mexico' },
        { value: 'United States', labelKey: 'settings.api_key.mcp.countries.united_states' },
        { value: 'Brazil', labelKey: 'settings.api_key.mcp.countries.brazil' },
        { value: 'Canada', labelKey: 'settings.api_key.mcp.countries.canada' },
        { value: 'Paraguay', labelKey: 'settings.api_key.mcp.countries.paraguay' },
        { value: 'Spain', labelKey: 'settings.api_key.mcp.countries.spain' },
        { value: 'Guatemala', labelKey: 'settings.api_key.mcp.countries.guatemala' },
        { value: 'Honduras', labelKey: 'settings.api_key.mcp.countries.honduras' },
        { value: 'India', labelKey: 'settings.api_key.mcp.countries.india' },
        { value: 'Panama', labelKey: 'settings.api_key.mcp.countries.panama' },
        { value: 'Venezuela', labelKey: 'settings.api_key.mcp.countries.venezuela' },
        { value: 'El Salvador', labelKey: 'settings.api_key.mcp.countries.el_salvador' },
        { value: 'República Dominicana', labelKey: 'settings.api_key.mcp.countries.republica_dominicana' },
        { value: 'Uruguay', labelKey: 'settings.api_key.mcp.countries.uruguay' },
    ],
} as const;

export type VerifikMcpCountryValue = (typeof VERIFIK_MCP_CONFIG.countries)[number]['value'];

/**
 * Builds the VERIFIK_MCP_COUNTRY env value. Returns undefined when no country filter is set.
 */
export function buildMcpCountryEnvValue(
    country: string | null | undefined,
    includeGlobalChecks: boolean
): string | undefined {
    const trimmed = country?.trim();

    if (!trimmed) {
        return undefined;
    }

    if (includeGlobalChecks) {
        return `${trimmed},${VERIFIK_MCP_WORLD_COUNTRY}`;
    }

    return trimmed;
}
