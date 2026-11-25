export interface SmartReportKitInputField {
    field: string;
    example?: string;
    required?: boolean;
    enumValues?: string[];
}

export interface SmartReportKitContext {
    apiUrl?: string;
    mcpUrl?: string;
    docsBaseUrl?: string;
    configId?: string | null;
    configName?: string | null;
    systemKey?: string | null;
    templateId?: string | null;
    templateName?: string | null;
    batchId?: string | null;
    reportId?: string | null;
    rowIndex?: number | null;
    webhookUrl?: string | null;
    requiredInputs?: SmartReportKitInputField[];
}

const DEFAULT_API_URL = 'https://api.verifik.co';
const DEFAULT_MCP_URL = 'https://ai.verifik.co/mcp';
const DEFAULT_DOCS_URL = 'https://docs.verifik.co';

const normalizeBaseUrl = (url: string | undefined, fallbackUrl: string): string => {
    const trimmedUrl = (url || '').trim().replace(/\/+$/, '');
    if (!trimmedUrl || trimmedUrl.includes('localhost')) return fallbackUrl;
    return trimmedUrl;
};

export const exampleValueForKitField = (inputField: SmartReportKitInputField): string => {
    if (inputField.example && String(inputField.example).trim()) {
        return String(inputField.example).trim();
    }
    if (inputField.enumValues?.length) return inputField.enumValues[0];

    const fieldToken = inputField.field.replace(/[^a-z0-9]/gi, '').toLowerCase();
    if (fieldToken.includes('documenttype') || fieldToken === 'doctype') return 'CC';
    if (fieldToken.includes('documentnumber') || fieldToken.includes('cedula') || fieldToken === 'nit') {
        return '123456789';
    }
    if (fieldToken.includes('plate') || fieldToken.includes('placa')) return 'ABC123';
    if (fieldToken.includes('email')) return 'john.doe@example.com';
    if (fieldToken.includes('phone') || fieldToken.includes('celular')) return '3001234567';
    if (fieldToken.includes('date') || fieldToken.includes('fecha') || fieldToken.includes('birth')) {
        return '1990-01-15';
    }
    if (fieldToken.includes('name') || fieldToken.includes('nombre')) return 'John Doe';
    return `<${inputField.field}>`;
};

export const buildExampleInputObject = (
    requiredInputs?: SmartReportKitInputField[]
): Record<string, string> => {
    const validInputFields = (requiredInputs ?? []).filter((inputField) => inputField && inputField.field);
    if (validInputFields.length === 0) {
        return {
            documentType: 'CC',
            documentNumber: '123456789',
        };
    }

    const exampleInputs: Record<string, string> = {};
    for (const inputField of validInputFields) {
        if (inputField.required === false && Object.keys(exampleInputs).length > 0) continue;
        exampleInputs[inputField.field] = exampleValueForKitField(inputField);
    }
    if (Object.keys(exampleInputs).length === 0) {
        for (const inputField of validInputFields.slice(0, 2)) {
            exampleInputs[inputField.field] = exampleValueForKitField(inputField);
        }
    }
    return exampleInputs;
};

const targetBodyFragment = (kitContext: SmartReportKitContext): Record<string, unknown> => {
    const exampleInputs = buildExampleInputObject(kitContext.requiredInputs);
    const requestBody: Record<string, unknown> = {};

    if (kitContext.configId) {
        requestBody['batchConfigurationId'] = kitContext.configId;
    } else if (kitContext.systemKey) {
        requestBody['systemKey'] = kitContext.systemKey;
    } else {
        requestBody['batchConfigurationId'] = '<BATCH_CONFIGURATION_ID>';
    }

    if (kitContext.templateId && !kitContext.systemKey) {
        requestBody['templateId'] = kitContext.templateId;
    }

    requestBody['inputs'] = exampleInputs;
    requestBody['mode'] = 'sync';
    requestBody['generatePdf'] = true;

    if (kitContext.webhookUrl) {
        requestBody['webhookUrl'] = kitContext.webhookUrl;
    }

    return requestBody;
};

const buildDiscoveryEndpointLine = (apiBaseUrl: string, kitContext: SmartReportKitContext): string => {
    if (kitContext.configId) {
        return `   GET ${apiBaseUrl}/v2/batch-configurations/${kitContext.configId}/input-schema`;
    }
    if (kitContext.systemKey) {
        return `   GET ${apiBaseUrl}/v2/smart-batch-presets (preset key: "${kitContext.systemKey}")`;
    }
    return `   GET ${apiBaseUrl}/v2/batch-configurations/<CONFIG_ID>/input-schema`;
};

const buildRetrievalPromptLines = (apiBaseUrl: string, kitContext: SmartReportKitContext): string[] => {
    if (kitContext.reportId) {
        const rowSuffix = kitContext.rowIndex != null ? `?rowIndex=${kitContext.rowIndex}` : '';
        return [
            '',
            '3. Active report retrieval & delivery:',
            `   - Download PDF: GET ${apiBaseUrl}/v2/smart-reports/${kitContext.reportId}/download${rowSuffix}`,
            `   - Structured HTML + score: GET ${apiBaseUrl}/v2/smart-reports/${kitContext.reportId}/html${rowSuffix}`,
            `   - Send via email: POST ${apiBaseUrl}/v2/smart-reports/${kitContext.reportId}/send-email { "recipients": ["client@example.com"] }`,
        ];
    }

    return [
        '',
        '3. Download, inspect HTML, or email any report:',
        `   - PDF binary: GET ${apiBaseUrl}/v2/smart-reports/<REPORT_ID>/download`,
        `   - HTML + Verification Score JSON: GET ${apiBaseUrl}/v2/smart-reports/<REPORT_ID>/html`,
        `   - Email delivery: POST ${apiBaseUrl}/v2/smart-reports/<REPORT_ID>/send-email`,
    ];
};

const buildSecurityPromptLines = (mcpBaseUrl: string, docsBaseUrl: string): string[] => [
    '',
    '4. Webhooks & MCP security rules:',
    '   - Webhook events: smart_batch_report_generated, smart_batch_report_generation_failed, smart_batch_report_sent, smart_batch_report_delivery_failed, smart_batch_batch_completed, smart_batch_row_completed.',
    '   - Pass "externalRefId": "<ORDER_OR_CASE_ID>" and optional "webhookUrl" per run to correlate callbacks.',
    `   - MCP server endpoint: ${mcpBaseUrl} (tool name: "smart_report_run").`,
    '   - Never expose VERIFIK_JWT in browser code; run API and MCP calls from your backend server.',
    `   - Docs: ${docsBaseUrl}/smart-reports & ${docsBaseUrl}/resources/smart-reports-webhooks`,
];

export const buildSmartReportAiPrompt = (kitContext: SmartReportKitContext): string => {
    const apiBaseUrl = normalizeBaseUrl(kitContext.apiUrl, DEFAULT_API_URL);
    const mcpBaseUrl = normalizeBaseUrl(kitContext.mcpUrl, DEFAULT_MCP_URL);
    const docsBaseUrl = normalizeBaseUrl(kitContext.docsBaseUrl, DEFAULT_DOCS_URL);
    const reportTitle = kitContext.configName || kitContext.templateName || 'SmartReport Verification';
    const exampleJson = JSON.stringify(targetBodyFragment(kitContext), null, 2)
        .split('\n')
        .map((jsonLine, lineIndex) => (lineIndex === 0 ? jsonLine : `   ${jsonLine}`))
        .join('\n');

    return [
        `Integrate Verifik SmartReports ("${reportTitle}") into my application or AI agent (100% headless, no UI required):`,
        '',
        '1. Discover required inputs before running (optional when fixed):',
        buildDiscoveryEndpointLine(apiBaseUrl, kitContext),
        '',
        '2. Run verification + generate PDF report in one headless call:',
        `   POST ${apiBaseUrl}/v2/smart-reports/run`,
        '   Header: Authorization: Bearer <VERIFIK_JWT>',
        `   Body: ${exampleJson}`,
        '   Returns { data: { mode, report: { _id, verificationScoreSummary }, batch, verificationScore, pdf: { size, downloadUrl, htmlUrl } } }.',
        '   - Use "mode": "sync" for 1-5 records or "mode": "async" (returns 202) for larger CSV/array batches.',
        '   - Add "emailTo": ["user@example.com"] to automatically email the finished PDF.',
        ...buildRetrievalPromptLines(apiBaseUrl, kitContext),
        ...buildSecurityPromptLines(mcpBaseUrl, docsBaseUrl),
    ].join('\n');
};

export const buildSmartReportMcpSnippet = (kitContext: SmartReportKitContext): string => {
    const mcpBaseUrl = normalizeBaseUrl(kitContext.mcpUrl, DEFAULT_MCP_URL);
    const toolArguments: Record<string, unknown> = {
        ...targetBodyFragment(kitContext),
        externalRefId: 'case-12345',
    };

    const mcpClientConfig: Record<string, unknown> = {
        mcpServers: {
            verifik: {
                url: mcpBaseUrl,
                headers: {
                    Authorization: 'Bearer <VERIFIK_JWT>',
                },
            },
        },
        sampleToolCall: {
            tool: 'smart_report_run',
            arguments: toolArguments,
        },
    };

    if (kitContext.reportId) {
        const optionalRowParam = kitContext.rowIndex != null ? { rowIndex: kitContext.rowIndex } : {};
        mcpClientConfig['followUpTools'] = [
            { tool: 'smart_report_get', arguments: { id: kitContext.reportId } },
            { tool: 'smart_report_get_html', arguments: { id: kitContext.reportId, ...optionalRowParam } },
            { tool: 'smart_report_download_pdf', arguments: { id: kitContext.reportId, ...optionalRowParam } },
        ];
    }

    return JSON.stringify(mcpClientConfig, null, 2);
};

const objectUrlExample = (reportId?: string | null): string =>
    reportId ? `/v2/smart-reports/${reportId}/download` : '/v2/smart-reports/<REPORT_ID>/download';

export const buildSmartReportWebhookSnippet = (kitContext: SmartReportKitContext): string => {
    const apiBaseUrl = normalizeBaseUrl(kitContext.apiUrl, DEFAULT_API_URL);
    const webhookNote = kitContext.webhookUrl
        ? `// Linked configuration webhook URL: ${kitContext.webhookUrl}`
        : '// Set notification.webhookUrl on BatchConfiguration or pass "webhookUrl" in POST /v2/smart-reports/run';

    return [
        webhookNote,
        '// Envelope: { "type": "<event_name>", "object": { ... } }',
        '// Respond with HTTP 200 within 5s (retries follow 60, 60, 120, 120, 360, 720 min backoff).',
        '',
        "import express from 'express';",
        'const app = express();',
        'app.use(express.json());',
        '',
        "app.post('/webhooks/verifik-reports', async (req, res) => {",
        '  const { type, object } = req.body ?? {};',
        '  // Return 200 quickly before heavy PDF downloads or DB writes',
        '  res.status(200).json({ received: true });',
        '',
        '  switch (type) {',
        "    case 'smart_batch_report_generated':",
        "      console.log('PDF ready:', object.reportId, object.externalRefId, object.downloadUrl);",
        `      // Download PDF with your Bearer VERIFIK_JWT -> ${apiBaseUrl}${objectUrlExample(kitContext.reportId)}`,
        '      break;',
        "    case 'smart_batch_report_generation_failed':",
        "      console.error('PDF failed:', object.reportId, object.error);",
        '      break;',
        "    case 'smart_batch_report_sent':",
        "      console.log('Email delivered:', object.reportId, object.recipients);",
        '      break;',
        "    case 'smart_batch_report_delivery_failed':",
        "      console.error('Email delivery failed:', object.reportId, object.error);",
        '      break;',
        "    case 'smart_batch_batch_completed':",
        "      console.log('Batch settled:', object.batchId, object.status, object.stats);",
        '      break;',
        "    case 'smart_batch_row_completed':",
        "      console.log('Row finished:', object.batchId, object.rowIndex, object.status);",
        '      break;',
        '  }',
        '});',
    ].join('\n');
};

export const escapePosixSingleQuotes = (rawText: string): string => rawText.replace(/'/g, "'\\''");

export const buildSmartReportCurlSnippet = (kitContext: SmartReportKitContext): string => {
    const apiBaseUrl = normalizeBaseUrl(kitContext.apiUrl, DEFAULT_API_URL);
    const jsonPayload = JSON.stringify({
        ...targetBodyFragment(kitContext),
        externalRefId: 'case-12345',
    });
    const shellSafePayload = escapePosixSingleQuotes(jsonPayload);
    const reportPlaceholder = kitContext.reportId || '<REPORT_ID>';
    const rowQuerySuffix = kitContext.rowIndex != null ? `?rowIndex=${kitContext.rowIndex}` : '';

    const commandLines: string[] = [];

    if (kitContext.configId) {
        commandLines.push(
            '# 1) Inspect required inputs for this configuration',
            `curl -s "${apiBaseUrl}/v2/batch-configurations/${kitContext.configId}/input-schema" \\`,
            '  -H "Authorization: Bearer $VERIFIK_JWT"',
            ''
        );
    }

    commandLines.push(
        `# ${kitContext.configId ? '2' : '1'}) Run verification + generate report PDF headlessly`,
        `curl -X POST "${apiBaseUrl}/v2/smart-reports/run" \\`,
        '  -H "Authorization: Bearer $VERIFIK_JWT" \\',
        '  -H "Content-Type: application/json" \\',
        `  -d '${shellSafePayload}'`,
        '',
        `# ${kitContext.configId ? '3' : '2'}) Download generated PDF file`,
        `curl -L "${apiBaseUrl}/v2/smart-reports/${reportPlaceholder}/download${rowQuerySuffix}" \\`,
        '  -H "Authorization: Bearer $VERIFIK_JWT" \\',
        '  --output smart-report.pdf',
        '',
        `# ${kitContext.configId ? '4' : '3'}) Email the report PDF to recipients`,
        `curl -X POST "${apiBaseUrl}/v2/smart-reports/${reportPlaceholder}/send-email" \\`,
        '  -H "Authorization: Bearer $VERIFIK_JWT" \\',
        '  -H "Content-Type: application/json" \\',
        `  -d '{"recipients":["client@example.com"],"language":"es"}'`
    );

    return commandLines.join('\n');
};
