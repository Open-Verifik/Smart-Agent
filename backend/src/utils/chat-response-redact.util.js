/** JSON / object keys that usually hold uploaded document or image payloads. */
const IMAGE_FIELD_KEYS = new Set([
	"image",
	"imagebase64",
	"base64",
	"file",
	"document",
	"imagedata",
	"image_data",
]);

const BASE64_MIN_LENGTH = 200;
const BASE64_PLACEHOLDER = "[Image attachment]";
const DATA_URL_PREFIX = /^data:image\/[a-z0-9+.-]+;base64,/i;
const RAW_BASE64_PATTERN = /^[A-Za-z0-9+/=\s]+$/;

/**
 * True when a property name commonly stores an image (e.g. `image`, `document`).
 * @param {string} fieldName - Object key from tool args or API response.
 */
const isImageFieldKey = (fieldName) => IMAGE_FIELD_KEYS.has(String(fieldName).toLowerCase());

/**
 * True when a string is long enough and charset-valid to be embedded image base64
 * (raw or `data:image/...;base64,...`). Short strings are ignored to avoid false positives.
 * @param {unknown} candidateString - Usually a tool arg or JSON field value.
 */
const isLikelyBase64 = (candidateString) => {
	if (typeof candidateString !== "string" || candidateString.length < BASE64_MIN_LENGTH) {
		return false;
	}
	const trimmed = candidateString.trim();
	if (DATA_URL_PREFIX.test(trimmed)) {
		return true;
	}
	const base64Payload = trimmed.replace(/\s/g, "");
	return (
		base64Payload.length >= BASE64_MIN_LENGTH && RAW_BASE64_PATTERN.test(base64Payload)
	);
};

/**
 * Deep-clones objects/arrays and replaces image base64 fields with a short placeholder
 * so conversation files and logs stay small. Does not extract images (persistence only).
 * @param {unknown} sourceValue - `tool_call.args`, OCR `data`, or nested API payload.
 * @returns {unknown} Same shape as input, with base64 image fields redacted.
 */
const redactBase64InObject = (sourceValue) => {
	if (sourceValue === null || sourceValue === undefined) {
		return sourceValue;
	}
	if (Array.isArray(sourceValue)) {
		return sourceValue.map((arrayItem) => redactBase64InObject(arrayItem));
	}
	if (typeof sourceValue !== "object") {
		return sourceValue;
	}
	const redactedObject = {};
	for (const [fieldName, fieldValue] of Object.entries(sourceValue)) {
		if (
			typeof fieldValue === "string" &&
			isImageFieldKey(fieldName) &&
			isLikelyBase64(fieldValue)
		) {
			redactedObject[fieldName] = BASE64_PLACEHOLDER;
			continue;
		}
		redactedObject[fieldName] = redactBase64InObject(fieldValue);
	}
	return redactedObject;
};

/**
 * Strips inline base64 from plain assistant text (data URLs and JSON `"image":"..."` blobs)
 * when the model returned raw JSON as `content` instead of a structured tool_call.
 * @param {string} messageText - Assistant `content` string before save or display fallback.
 * @returns {string} Same message with large base64 segments replaced by placeholder.
 */
const redactInlineBase64InText = (messageText) => {
	if (typeof messageText !== "string" || !messageText) {
		return messageText;
	}
	let redactedText = messageText.replace(
		/data:image\/[a-z0-9+.-]+;base64,[A-Za-z0-9+/=\s]{200,}/gi,
		BASE64_PLACEHOLDER,
	);
	redactedText = redactedText.replace(
		/("(?:image|imageBase64|base64|file|document)"\s*:\s*")([A-Za-z0-9+/=\s]{200,})(")/gi,
		`$1${BASE64_PLACEHOLDER}$3`,
	);
	return redactedText;
};

/**
 * One-line human summary for a detected tool call (args redacted, no raw JSON dump).
 * @param {string} toolName - Manifest tool id, e.g. `ocr_scan_gpt`.
 * @param {object} toolArguments - Gemini `args` object before execution.
 */
const formatToolCallSummary = (toolName, toolArguments) => {
	const redactedArguments = redactBase64InObject(toolArguments);
	const argumentSummaries = Object.entries(redactedArguments || {})
		.filter(
			([, argumentValue]) =>
				argumentValue !== BASE64_PLACEHOLDER && argumentValue !== "" && argumentValue != null,
		)
		.map(([argumentName, argumentValue]) => {
			const rendered =
				typeof argumentValue === "object"
					? JSON.stringify(argumentValue)
					: String(argumentValue);
			return `${argumentName} ${rendered}`;
		});
	const argumentDetail =
		argumentSummaries.length > 0 ? ` (${argumentSummaries.join(", ")})` : "";
	return `Calling ${toolName}${argumentDetail}.`;
};

/**
 * Parses Gemini output when it returns a JSON tool call as plain text
 * (`{"tool":"...","args":{...}}`). Tries the full string first, then the first `{...}` block.
 * @param {string} responseText - Raw model text from Gemini.
 * @returns {{ tool: string, args: object } | null} Structured tool call, or null if not JSON-shaped.
 */
const parseToolCallFromText = (responseText) => {
	if (typeof responseText !== "string") {
		return null;
	}
	const trimmedResponse = responseText.trim();
	if (!trimmedResponse.startsWith("{")) {
		return null;
	}

	const parseJsonToolCall = (jsonBlob) => {
		try {
			const parsedPayload = JSON.parse(jsonBlob);
			if (
				parsedPayload?.tool &&
				parsedPayload?.args &&
				typeof parsedPayload.args === "object"
			) {
				return { tool: parsedPayload.tool, args: parsedPayload.args };
			}
		} catch {
			return null;
		}
		return null;
	};

	const toolCallFromFullText = parseJsonToolCall(trimmedResponse);
	if (toolCallFromFullText) {
		return toolCallFromFullText;
	}

	const jsonObjectMatch = trimmedResponse.match(/\{[\s\S]*\}/);
	if (!jsonObjectMatch) {
		return null;
	}
	return parseJsonToolCall(jsonObjectMatch[0]);
};

/**
 * Builds a chat message safe to write to conversation history: no multi‑MB base64 in
 * `content`, `tool_call.args`, or `data`. Live HTTP responses may still include full
 * `tool_call` for the x402 payment step in the same session.
 * @param {object} chatMessage - Assistant (or other) message object from the agent handler.
 * @returns {object} Shallow copy with redacted / summarized fields.
 */
const redactMessageForPersistence = (chatMessage) => {
	if (!chatMessage || typeof chatMessage !== "object") {
		return chatMessage;
	}
	const persistedMessage = { ...chatMessage };

	if (typeof persistedMessage.content === "string") {
		const toolCallInContent = parseToolCallFromText(persistedMessage.content);
		persistedMessage.content = toolCallInContent
			? formatToolCallSummary(toolCallInContent.tool, toolCallInContent.args)
			: redactInlineBase64InText(persistedMessage.content);
	}

	if (persistedMessage.tool_call?.tool) {
		persistedMessage.tool_call = {
			tool: persistedMessage.tool_call.tool,
			args: redactBase64InObject(persistedMessage.tool_call.args),
		};
	}

	if (persistedMessage.data !== undefined) {
		persistedMessage.data = redactBase64InObject(persistedMessage.data);
	}

	return persistedMessage;
};

module.exports = {
	parseToolCallFromText,
	formatToolCallSummary,
	redactMessageForPersistence,
	redactInlineBase64InText,
};
