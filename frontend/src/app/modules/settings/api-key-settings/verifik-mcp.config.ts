/**
 * Verifik MCP server setup — single source of truth for package name, command, and env vars.
 * Update here when @verifik/mcp is published or env names change (see verifik-backend PR #371).
 */
export const VERIFIK_MCP_FEATURE = {
    /** Flip to false to hide MCP setup UI until @verifik/mcp is on npm. */
    enabled: true,
};

export const VERIFIK_MCP_CONFIG = {
    npmPackage: '@verifik/mcp',
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
