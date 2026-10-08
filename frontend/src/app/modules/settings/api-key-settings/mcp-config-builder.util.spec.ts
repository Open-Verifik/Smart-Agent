import { describe, expect, it } from 'vitest';
import {
    buildClaudeDesktopConfig,
    buildCursorMcpJson,
    buildGenericCliSnippet,
} from './mcp-config-builder.util';
import { buildMcpCountryEnvValue, VERIFIK_MCP_CONFIG } from './verifik-mcp.config';

describe('buildMcpCountryEnvValue', () => {
    it('returns undefined when no country is selected', () => {
        expect(buildMcpCountryEnvValue(null, true)).toBeUndefined();
        expect(buildMcpCountryEnvValue('', true)).toBeUndefined();
    });

    it('returns country only when global checks are excluded', () => {
        expect(buildMcpCountryEnvValue('Colombia', false)).toBe('Colombia');
    });

    it('returns country and world when global checks are included', () => {
        expect(buildMcpCountryEnvValue('Colombia', true)).toBe('Colombia,world');
    });
});

describe('mcp-config-builder.util', () => {
    const baseOptions = {
        token: 'test-jwt-token',
        apiBase: 'https://api.verifik.co',
    };

    it('builds Cursor mcp.json with SmartCheck scope explicitly disabled by default', () => {
        const parsed = JSON.parse(buildCursorMcpJson(baseOptions));

        expect(parsed.mcpServers[VERIFIK_MCP_CONFIG.serverId]).toEqual({
            command: 'npx',
            args: ['-y', '@verifik/mcp'],
            env: {
                VERIFIK_API_TOKEN: 'test-jwt-token',
                VERIFIK_API_BASE: 'https://api.verifik.co',
                VERIFIK_MCP_SMARTCHECK_ONLY: 'false',
            },
        });
    });

    it('adds country-only filter when a country is selected without global checks', () => {
        const parsed = JSON.parse(
            buildCursorMcpJson({
                ...baseOptions,
                country: 'Colombia',
                includeGlobalChecks: false,
            })
        );

        expect(parsed.mcpServers[VERIFIK_MCP_CONFIG.serverId].env).toEqual({
            VERIFIK_API_TOKEN: 'test-jwt-token',
            VERIFIK_API_BASE: 'https://api.verifik.co',
            VERIFIK_MCP_COUNTRY: 'Colombia',
            VERIFIK_MCP_SMARTCHECK_ONLY: 'false',
        });
    });

    it('adds country and world when global checks are included', () => {
        const parsed = JSON.parse(
            buildCursorMcpJson({
                ...baseOptions,
                country: 'Colombia',
                includeGlobalChecks: true,
            })
        );

        expect(parsed.mcpServers[VERIFIK_MCP_CONFIG.serverId].env).toEqual({
            VERIFIK_API_TOKEN: 'test-jwt-token',
            VERIFIK_API_BASE: 'https://api.verifik.co',
            VERIFIK_MCP_COUNTRY: 'Colombia,world',
            VERIFIK_MCP_SMARTCHECK_ONLY: 'false',
        });
    });

    it('sets SmartCheck-only to true when opted in', () => {
        const parsed = JSON.parse(
            buildCursorMcpJson({
                ...baseOptions,
                smartcheckOnly: true,
            })
        );

        expect(parsed.mcpServers[VERIFIK_MCP_CONFIG.serverId].env).toEqual({
            VERIFIK_API_TOKEN: 'test-jwt-token',
            VERIFIK_API_BASE: 'https://api.verifik.co',
            VERIFIK_MCP_SMARTCHECK_ONLY: 'true',
        });
    });

    it('builds Claude Desktop config with the same server entry', () => {
        expect(buildClaudeDesktopConfig(baseOptions)).toBe(buildCursorMcpJson(baseOptions));
    });

    it('builds a generic CLI export snippet with SmartCheck scope explicitly disabled', () => {
        const snippet = buildGenericCliSnippet(baseOptions);

        expect(snippet).toContain('export VERIFIK_API_TOKEN="test-jwt-token"');
        expect(snippet).toContain('export VERIFIK_API_BASE="https://api.verifik.co"');
        expect(snippet).toContain('export VERIFIK_MCP_SMARTCHECK_ONLY="false"');
        expect(snippet).not.toContain('VERIFIK_MCP_COUNTRY');
        expect(snippet).toContain('npx -y @verifik/mcp');
    });
});
