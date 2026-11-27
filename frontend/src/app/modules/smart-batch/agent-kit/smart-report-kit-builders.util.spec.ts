import { describe, expect, it } from 'vitest';
import {
    buildExampleInputObject,
    buildSmartReportAiPrompt,
    buildSmartReportCurlSnippet,
    buildSmartReportJsSnippet,
    buildSmartReportMcpSnippet,
    buildSmartReportPythonSnippet,
    buildSmartReportWebhookSnippet,
} from './smart-report-kit-builders.util';

describe('smart-report-kit-builders.util', () => {
    it('builds realistic default and mapped input examples', () => {
        expect(buildExampleInputObject()).toEqual({
            documentType: 'CC',
            documentNumber: '123456789',
        });

        expect(
            buildExampleInputObject([
                { field: 'plate', required: true },
                { field: 'ownerDocument', required: false },
            ])
        ).toEqual({
            plate: 'ABC123',
        });
    });

    it('renders AI Agent Prompt with configId, templateId, required inputs, and docs links', () => {
        const prompt = buildSmartReportAiPrompt({
            configId: 'cfg_abc',
            configName: 'Driver Screening',
            templateId: 'tpl_999',
            webhookUrl: 'https://hooks.acme.com/verifik',
            requiredInputs: [{ field: 'plate', required: true }],
        });

        expect(prompt).toContain('Driver Screening');
        expect(prompt).toContain('POST https://api.verifik.co/v2/smart-reports/run');
        expect(prompt).toContain('"batchConfigurationId": "cfg_abc"');
        expect(prompt).toContain('"templateId": "tpl_999"');
        expect(prompt).toContain('"plate": "ABC123"');
        expect(prompt).toContain('smart_batch_report_generated');
        expect(prompt).toContain('https://ai.verifik.co/mcp');
        expect(prompt).toContain('https://docs.verifik.co/resources/smart-reports-webhooks');
    });

    it('renders MCP snippet using systemKey when configuration is not cloned yet', () => {
        const mcpJson = JSON.parse(
            buildSmartReportMcpSnippet({
                systemKey: 'co.vehicle.comprehensive',
                reportId: 'rep_42',
                rowIndex: 0,
            })
        );

        expect(mcpJson.mcpServers.verifik.url).toBe('https://ai.verifik.co/mcp');
        expect(mcpJson.sampleToolCall.tool).toBe('smart_report_run');
        expect(mcpJson.sampleToolCall.arguments.systemKey).toBe('co.vehicle.comprehensive');
        expect(mcpJson.followUpTools.map((followUpTool: { tool: string }) => followUpTool.tool)).toEqual([
            'smart_report_get',
            'smart_report_get_html',
            'smart_report_download_pdf',
        ]);
    });

    it('renders Webhook handler snippet covering all report and batch events', () => {
        const code = buildSmartReportWebhookSnippet({
            webhookUrl: 'https://hooks.acme.com/verifik',
            reportId: 'rep_77',
        });

        expect(code).toContain('https://hooks.acme.com/verifik');
        expect(code).toContain("case 'smart_batch_report_generated':");
        expect(code).toContain("case 'smart_batch_report_generation_failed':");
        expect(code).toContain("case 'smart_batch_report_sent':");
        expect(code).toContain("case 'smart_batch_report_delivery_failed':");
        expect(code).toContain("case 'smart_batch_batch_completed':");
        expect(code).toContain("case 'smart_batch_row_completed':");
        expect(code).toContain('/v2/smart-reports/rep_77/download');
    });

    it('renders cURL snippet and escapes embedded single quotes safely for POSIX shells', () => {
        const curl = buildSmartReportCurlSnippet({
            configId: 'cfg_1',
            reportId: 'rep_5',
            rowIndex: 2,
            requiredInputs: [{ field: 'fullName', example: "O'Brien", required: true }],
        });

        expect(curl).toContain('/v2/batch-configurations/cfg_1/input-schema');
        expect(curl).toContain('/v2/smart-reports/run');
        expect(curl).toContain("O'\\''Brien");
        expect(curl).toContain('/v2/smart-reports/rep_5/download?rowIndex=2');
        expect(curl).toContain('/v2/smart-reports/rep_5/send-email');
        expect(curl).toContain('x-cost-center');

        const curlWithCostCenter = buildSmartReportCurlSnippet({
            configId: 'cfg_1',
            costCenter: 'CC-OPS-01',
        });
        expect(curlWithCostCenter).toContain('-H "x-cost-center: CC-OPS-01"');

        const mcpWithCostCenter = JSON.parse(
            buildSmartReportMcpSnippet({
                configId: 'cfg_1',
                costCenter: 'CC-OPS-01',
            })
        );
        expect(mcpWithCostCenter.sampleToolCall.arguments.costCenter).toBe('CC-OPS-01');
    });

    it('renders JavaScript and Python SDK-free snippets with Team API key comment and x-cost-center', () => {
        const js = buildSmartReportJsSnippet({
            configId: 'cfg_1',
            templateId: 'tpl_1',
            costCenter: 'CC-LATAM-01',
            requiredInputs: [{ field: 'documentNumber', required: true }],
        });
        expect(js).toContain('/v2/smart-reports/run');
        expect(js).toContain("'x-cost-center': \"CC-LATAM-01\"");
        expect(js).toContain('Team API Key');
        expect(js).toContain('"batchConfigurationId": "cfg_1"');

        const py = buildSmartReportPythonSnippet({
            configId: 'cfg_1',
            costCenter: 'CC-LATAM-01',
        });
        expect(py).toContain('requests.post(');
        expect(py).toContain('/v2/smart-reports/run');
        expect(py).toContain('"x-cost-center": "CC-LATAM-01"');
        expect(py).toContain('Team API Key');
    });
});
