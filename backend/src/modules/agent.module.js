const GeminiModule = require("./gemini.module");
const ERC8004Module = require("./erc8004.module");
const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const config = require("../config");

// Import model constants from gemini.module
const MODELS = {
	FLASH: "gemini-2.5-flash-lite", // Fast, cheap, stable
	PRO: "gemini-pro-latest", // Reliable fallback
};
const DEFAULT_MODEL = MODELS.FLASH;
const API_VERSION = "v1beta";

// Load tool definitions
const toolsPath = path.resolve(__dirname, "../config/tools-manifest.json");
const toolsDef = JSON.parse(fs.readFileSync(toolsPath, "utf8"));

/**
 * Execute a tool call via Verifik Backend
 * @param {string} toolName
 * @param {Object} args
 * @param {string} paymentTx - Optional payment transaction hash
 */
const executeTool = async (toolName, args, paymentTx) => {
	const tool = toolsDef.endpoints.find((t) => t.id === toolName);
	if (!tool) {
		throw new Error(`Tool ${toolName} not found`);
	}

	// For the migration, we are calling the Verifik Backend (web2)
	// The URL in the manifest might be "https://verifik.app/..."
	// We will use the config to potentially override the base URL or just use as is if it's absolute
	// But the requirement says "The agent will connect to the source (verifik backend) via web2"

	let url = tool.url;
	console.log(`[Agent] Executing Tool: ${toolName}`);
	// console.debug(`[Agent] Target URL: ${url}`);
	// console.debug(`[Agent] Args:`, JSON.stringify(args));

	// If we want to strictly follow the config for the base URL:
	if (config.verifik.apiUrl && url.startsWith("https://verifik.app")) {
		url = url.replace("https://verifik.app", config.verifik.apiUrl);
	}

	const headers = {
		"Content-Type": "application/json",
		// Inject the service token for authentication
		Authorization: `Bearer ${config.verifik.serviceToken}`,
	};

	if (paymentTx) {
		headers["x-payment-tx"] = paymentTx;
	}

	try {
		const axiosConfig = {
			method: tool.method,
			url: url,
			headers: headers,
			validateStatus: (status) => status < 500,
		};

		if (tool.method === "GET") {
			axiosConfig.params = args;
		} else {
			axiosConfig.data = args;
		}

		console.log(`[Agent] Executing tool ${toolName} at ${url} with args:`, args);
		const response = await axios(axiosConfig);

		if (response.status === 402) {
			const details = typeof response.data === "object" && response.data !== null ? response.data : { message: response.data };

			// Override receiver_address with the configured Payment Contract Address
			// This ensures we pay to the VerifikPayment contract, not the EOA returned by the backend
			if (config.x402 && config.x402.contractAddress) {
				details.receiver_address = config.x402.contractAddress;
				// Also ensure chainId matches
				details.chain_id = config.x402.chainId;
			}

			return {
				status: "payment_required",
				details: {
					...details,
					endpoint: url,
					toolName: toolName,
				},
			};
		}

		console.log(`[Agent] Tool execution status: ${response.status}`);
		console.log(`[Agent] Tool execution data sample:`, JSON.stringify(response.data).substring(0, 200));

		return {
			status: "success",
			data: response.data,
		};
	} catch (error) {
		console.error(`[Agent] Tool execution failed:`, error.message);
		return {
			status: "error",
			error: error.message,
		};
	}
};

/**
 * Chat with the Agent
 * @param {string} userMessage
 * @param {Array} history
 * @param {string} paymentTx - Transaction hash if user just paid
 */
const chatWithAgent = async (userMessage, history = [], paymentTx = null) => {
	// 1. Construct System Prompt
	const fullPrompt = constructSystemPrompt(toolsDef.endpoints, history, userMessage, paymentTx);

	console.log(`[Agent] Processing message: "${userMessage.substring(0, 50)}..."`);

	// 3. Call Gemini
	try {
		const accessToken = await GeminiModule.getServiceAccountToken();
		const model = DEFAULT_MODEL;
		const url = `https://generativelanguage.googleapis.com/${API_VERSION}/models/${model}:generateContent`;

		const response = await axios.post(
			url,
			{
				contents: [{ parts: [{ text: fullPrompt }] }],
				generationConfig: {
					temperature: 0.1,
					maxOutputTokens: 1000,
				},
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		const responseText = response.data.candidates[0].content.parts[0].text;

		console.log("[Agent] Raw Response:", responseText);

		// 4. Parse for Tool Calls (JSON)
		const jsonMatch = responseText.match(/\{[\s\S]*\}/);

		if (jsonMatch) {
			try {
				const toolCall = JSON.parse(jsonMatch[0]);
				if (toolCall.tool && toolCall.args) {
					console.log("[Agent] Detected Tool Call:", toolCall);

					// Execute Tool
					const toolResult = await executeTool(toolCall.tool, toolCall.args, paymentTx);

					// If payment required, return special status to frontend
					if (toolResult.status === "payment_required") {
						return {
							role: "assistant",
							content: "I need to perform a paid action. Please confirm payment.",
							tool_call: toolCall,
							payment_required: toolResult.details,
						};
					}

					// If success, record validation proof on-chain (ERC8004)
					let validationProof = null;
					if (toolResult.status === "success" && toolResult.data) {
						try {
							validationProof = await recordValidationProof(toolCall.tool, toolCall.args, toolResult.data, paymentTx);
						} catch (validationError) {
							console.warn("[Agent] Failed to record validation proof:", validationError.message);
						}
					}

					// Return the data to the user
					return {
						role: "assistant",
						content: `Tool executed successfully.`,
						data: toolResult.data,
						proof: validationProof,
					};
				}
			} catch (e) {
				console.warn("[Agent] Failed to parse JSON from response:", e);
			}
		}

		// Default text response
		return {
			role: "assistant",
			content: responseText,
		};
	} catch (error) {
		console.error("[Agent] Chat Error:", error.response?.data || error.message);
		throw new Error("Failed to communicate with AI Agent");
	}
};

/**
 * Record validation proof on ERC8004 Validation Registry
 * @param {string} toolName - Name of the tool executed
 * @param {Object} args - Tool arguments
 * @param {Object} result - Tool execution result
 * @param {string} paymentTx - Payment transaction hash (if any)
 */
const recordValidationProof = async (toolName, args, result, paymentTx = null) => {
	try {
		// Delegate to ERC8004 Module
		// We need to re-implement the logic here or in ERC8004 module to handle the wallet connection
		// The ERC8004 module in verifik-backend handled this.
		// We'll trust the ERC8004Module we are about to create to have a helper for this
		// or we reimplement it here using the exported functions.

		// This function logic was largely inside agent.module.js in the source.
		// I'll assume we move the low-level logic to erc8004.module.js or keep it here.
		// For cleaner separation, let's keep the high level here but use ERC8004Module methods.

		if (!config.erc8004?.agentTokenId) {
			console.log("[Agent] ERC8004 not configured, skipping validation recording");
			return;
		}

		// ... (Similar logic to original, adapted for new config)
		const agentTokenId = parseInt(config.erc8004.agentTokenId);
		const taskId = `${toolName}_${Date.now()}_${Math.random().toString(36).substring(7)}`;

		const outputData = {
			tool: toolName,
			args: args,
			result: result,
			timestamp: new Date().toISOString(),
			paymentTx: paymentTx,
		};
		const output = JSON.stringify(outputData);

		// Hash the output
		const outputHash = ERC8004Module.hashOutput(output);
		const proofHash = paymentTx ? ethers.keccak256(ethers.toUtf8Bytes(paymentTx)) : outputHash || ethers.ZeroHash;

		// Get signer
		const signer = ERC8004Module.getAgentWallet();
		if (!signer) {
			console.warn("[Agent] No agent wallet available");
			return;
		}

		// Record validation
		const validationHash = await ERC8004Module.recordValidation(
			signer,
			agentTokenId,
			taskId,
			output,
			proofHash,
			ethers.ZeroAddress, // Self-validation
			0, // ValidationType.NONE
			true, // isValid
			"" // metadataURI
		);

		console.log(`[Agent] Validation proof recorded: ${validationHash}`);
		return validationHash;
	} catch (error) {
		console.error("[Agent] Error recording validation proof:", error.message);
		return null;
	}
};

/**
 * Get agent identity and reputation info
 */
const getAgentInfo = async () => {
	// ... Implement using ERC8004Module
	const agentTokenId = config.erc8004?.agentTokenId;
	if (!agentTokenId) return null;

	const identity = await ERC8004Module.getAgentIdentity(agentTokenId);
	const reputation = await ERC8004Module.getReputation(agentTokenId);
	const feedbacks = await ERC8004Module.getAgentFeedbacks(agentTokenId);

	return { identity, reputation, feedbacks };
};

/**
 * Get agent card in ERC8004 format
 * This returns the agent card JSON that can be referenced in the NFT metadata
 */
const getAgentCard = async () => {
	const agentTokenId = config.erc8004?.agentTokenId;
	if (!agentTokenId) {
		return null;
	}

	try {
		const identity = await ERC8004Module.getAgentIdentity(agentTokenId);

		if (!identity) {
			return null;
		}

		// Return ERC8004-compliant agent card format
		return {
			name: identity.name || "Verifik AI Agent",
			description:
				identity.description || "AI-powered agent for identity validation and document processing using x402 payment protocol on Avalanche",
			image: "https://verifik.app/images/agent-avatar.png", // You can update this URL
			external_url: "https://verifik.app",
			attributes: [
				{
					trait_type: "Agent Type",
					value: "Identity Verification",
				},
				{
					trait_type: "Protocol",
					value: "x402",
				},
				{
					trait_type: "Network",
					value: "Avalanche C-Chain",
				},
				{
					trait_type: "Status",
					value: identity.active ? "Active" : "Inactive",
				},
			],
			capabilities: identity.capabilities || [
				"identity-validation",
				"document-ocr",
				"biometric-verification",
				"cedula-validation",
				"x402-payment-processing",
			],
			agentAddress: identity.agentAddress,
			tokenId: agentTokenId,
			registryContract: config.erc8004?.identityRegistry || "0x7c6a168455C94092f8d51aBC515B73f4Ed9813a6",
			network: config.x402?.networkName || "avalanche-fuji-testnet",
			chainId: Number(config.x402?.chainId) || 43113,
		};
	} catch (error) {
		console.error("[Agent] Error getting agent card:", error.message);
		return null;
	}
};

/**
 * Construct the full system prompt including tools and history
 */
const constructSystemPrompt = (tools, history, userMessage, paymentTx) => {
	const systemPrompt = `
    You are an AI Agent capable of validating identities and performing other tasks.
    
    You have access to the following tools:
    ${JSON.stringify(tools, null, 2)}

    When a user asks to perform an action that requires a tool:
    1. Check if you have all necessary parameters.
    2. If missing parameters, ask the user for them.
    3. If you have parameters, DO NOT ASK for payment permission. Output the JSON object IMMEDIATELY to call the tool. The system handles the payment request flow.
       IGNORE the "estimatedCost" field in the tool definition. Do not mention it.
       {"tool": "tool_id", "args": { ... }}
    
    Output ONLY the JSON object. Do not add conversational text when calling a tool.
    
    Current Context:
    - Payment Transaction Available: ${paymentTx ? paymentTx : "None"}
    `;

	let fullPrompt = systemPrompt + "\n\nConversation History:\n";

	// Add max last 10 messages to avoid token limit overflow, but keep context
	const recentHistory = history.slice(-10);
	recentHistory.forEach((msg) => {
		fullPrompt += `${msg.role}: ${msg.content}\n`;
	});

	fullPrompt += `User: ${userMessage}\n`;

	if (paymentTx) {
		fullPrompt += `System: User has completed payment with TX ${paymentTx}. Retry the last tool call.\n`;
	}

	fullPrompt += "Agent:";
	return fullPrompt;
};

module.exports = {
	chatWithAgent,
	executeTool,
	recordValidationProof,
	getAgentInfo,
	getAgentCard,
};
