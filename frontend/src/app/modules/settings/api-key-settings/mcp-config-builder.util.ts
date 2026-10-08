import { VERIFIK_MCP_CONFIG } from './verifik-mcp.config';

export type McpConfigTab = 'cursor' | 'claude' | 'generic';

export interface BuildMcpConfigOptions {
    token: string;
    apiBase: string;
}

function buildMcpEnv(token: string, apiBase: string): Record<string, string> {
    const { envVars, envDefaults } = VERIFIK_MCP_CONFIG;

    return {
        [envVars.apiToken]: token,
        [envVars.apiBase]: apiBase,
        [envVars.smartcheckOnly]: envDefaults.smartcheckOnly,
    };
}

function buildMcpServerEntry(token: string, apiBase: string): Record<string, unknown> {
    const { npxCommand, npxArgs, serverId } = VERIFIK_MCP_CONFIG;

    return {
        [serverId]: {
            command: npxCommand,
            args: [...npxArgs],
            env: buildMcpEnv(token, apiBase),
        },
    };
}

export function buildCursorMcpJson(options: BuildMcpConfigOptions): string {
    return JSON.stringify({ mcpServers: buildMcpServerEntry(options.token, options.apiBase) }, null, 2);
}

export function buildClaudeDesktopConfig(options: BuildMcpConfigOptions): string {
    return JSON.stringify({ mcpServers: buildMcpServerEntry(options.token, options.apiBase) }, null, 2);
}

export function buildGenericCliSnippet(options: BuildMcpConfigOptions): string {
    const { envVars, envDefaults, npxCommand, npxArgs } = VERIFIK_MCP_CONFIG;
    const envLines = [
        `export ${envVars.apiToken}="${options.token}"`,
        `export ${envVars.apiBase}="${options.apiBase}"`,
        `export ${envVars.smartcheckOnly}="${envDefaults.smartcheckOnly}"`,
    ].join('\n');

    return `${envLines}\n${npxCommand} ${npxArgs.join(' ')}`;
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
