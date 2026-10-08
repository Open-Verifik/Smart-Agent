import { buildMcpCountryEnvValue, VERIFIK_MCP_CONFIG } from './verifik-mcp.config';

export type McpConfigTab = 'cursor' | 'claude' | 'generic';

export interface BuildMcpConfigOptions {
    token: string;
    apiBase: string;
    country?: string | null;
    includeGlobalChecks?: boolean;
    smartcheckOnly?: boolean;
}

function buildMcpEnv(options: BuildMcpConfigOptions): Record<string, string> {
    const { envVars, envDefaults } = VERIFIK_MCP_CONFIG;
    const env: Record<string, string> = {
        [envVars.apiToken]: options.token,
        [envVars.apiBase]: options.apiBase,
    };

    const countryValue = buildMcpCountryEnvValue(
        options.country,
        options.includeGlobalChecks ?? true
    );

    if (countryValue) {
        env[envVars.country] = countryValue;
    }

    env[envVars.smartcheckOnly] = options.smartcheckOnly
        ? envDefaults.smartcheckOnly
        : envDefaults.smartcheckOnlyOff;

    return env;
}

function buildMcpServerEntry(options: BuildMcpConfigOptions): Record<string, unknown> {
    const { npxCommand, npxArgs, serverId } = VERIFIK_MCP_CONFIG;

    return {
        [serverId]: {
            command: npxCommand,
            args: [...npxArgs],
            env: buildMcpEnv(options),
        },
    };
}

export function buildCursorMcpJson(options: BuildMcpConfigOptions): string {
    return JSON.stringify({ mcpServers: buildMcpServerEntry(options) }, null, 2);
}

export function buildClaudeDesktopConfig(options: BuildMcpConfigOptions): string {
    return JSON.stringify({ mcpServers: buildMcpServerEntry(options) }, null, 2);
}

export function buildGenericCliSnippet(options: BuildMcpConfigOptions): string {
    const { npxCommand, npxArgs } = VERIFIK_MCP_CONFIG;
    const envLines = Object.entries(buildMcpEnv(options)).map(
        ([key, value]) => `export ${key}="${value}"`
    );

    return `${envLines.join('\n')}\n${npxCommand} ${npxArgs.join(' ')}`;
}

export function buildMcpConfigSnippet(tab: McpConfigTab, options: BuildMcpConfigOptions): string {
    switch (tab) {
        case 'cursor':
            return buildCursorMcpJson(options);
        case 'claude':
            return buildClaudeDesktopConfig(options);
        case 'generic':
            return buildGenericCliSnippet(options);
    }
}
