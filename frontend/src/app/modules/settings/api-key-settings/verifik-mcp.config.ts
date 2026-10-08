/**
 * Verifik MCP server setup — single source of truth for package name, command, and env vars.
 */
export const VERIFIK_MCP_FEATURE = {
    enabled: true,
};

export const VERIFIK_MCP_CONFIG = {
    npmPackage: '@verifik/mcp',
    npmPackageUrl: 'https://www.npmjs.com/package/@verifik/mcp',
    npxCommand: 'npx',
    npxArgs: ['-y', '@verifik/mcp'] as const,
    serverId: 'verifik-smartcheck',
    envVars: {
        apiToken: 'VERIFIK_API_TOKEN',
        apiBase: 'VERIFIK_API_BASE',
        smartcheckOnly: 'VERIFIK_MCP_SMARTCHECK_ONLY',
    },
    envDefaults: {
        apiBaseProduction: 'https://api.verifik.co',
        apiBaseStaging: 'https://staging-api.verifik.co',
        smartcheckOnly: 'true',
    },
    tokenPlaceholder: 'YOUR_VERIFIK_API_TOKEN',
} as const;
