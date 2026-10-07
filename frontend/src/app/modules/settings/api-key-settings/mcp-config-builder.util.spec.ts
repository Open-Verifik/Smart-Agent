import {
    buildClaudeDesktopConfig,
    buildCursorMcpJson,
    buildGenericCliSnippet,
} from './mcp-config-builder.util';
import { VERIFIK_MCP_CONFIG } from './verifik-mcp.config';

describe('mcp-config-builder.util', () => {
    const options = {
        token: 'test-jwt-token',
        apiBase: 'https://api.verifik.co',
    };

    it('builds Cursor mcp.json with npx and env vars from config', () => {
        const parsed = JSON.parse(buildCursorMcpJson(options));

        expect(parsed.mcpServers[VERIFIK_MCP_CONFIG.serverId]).toEqual({
            command: 'npx',
            args: ['-y', '@verifik/mcp'],
            env: {
                VERIFIK_API_TOKEN: 'test-jwt-token',
                VERIFIK_API_BASE: 'https://api.verifik.co',
                VERIFIK_MCP_SMARTCHECK_ONLY: 'true',
            },
        });
    });

    it('builds Claude Desktop config with the same server entry', () => {
        expect(buildClaudeDesktopConfig(options)).toBe(buildCursorMcpJson(options));
    });

    it('builds a generic CLI export snippet', () => {
        const snippet = buildGenericCliSnippet(options);

        expect(snippet).toContain('export VERIFIK_API_TOKEN="test-jwt-token"');
        expect(snippet).toContain('npx -y @verifik/mcp');
    });
});
