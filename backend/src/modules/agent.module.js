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
 * @param {string} paymentWallet - Optional payment wallet address
 * @param {string} paymentAmount - Optional payment amount
 * @param {string} userToken - Optional user JWT token (for Credits mode)
 */
const executeTool = async (toolName, args, paymentTx, paymentWallet, paymentAmount, userToken) => {
    const tool = toolsDef.endpoints.find((t) => t.id === toolName);
    if (!tool) throw new Error(`Tool ${toolName} not found`);

    // For the migration, we are calling the Verifik Backend (web2)
    // The URL in the manifest might be "https://x402-agent.verifik.co/..."
    // We will use the config to potentially override the base URL or just use as is if it's absolute
    // But the requirement says "The agent will connect to the source (verifik backend) via web2"

    let url = tool.url;
    console.log(`[Agent] Executing Tool: ${toolName}`);
    // console.debug(`[Agent] Target URL: ${url}`);
    // console.debug(`[Agent] Args:`, JSON.stringify(args));

    // Force usage of Local Proxy for x402 enforcement
    // This ensures the request hits our middleware (x402.js) before going to the actual backend
    const proxyBaseUrl = `http://localhost:${config.port}`;

    if (url.startsWith("https://x402-agent.verifik.co")) {
        url = url.replace("https://x402-agent.verifik.co", proxyBaseUrl);
    } else if (url.startsWith("https://verifik.app")) {
        url = url.replace("https://verifik.app", proxyBaseUrl);
    }

    const headers = {
        "Content-Type": "application/json",
        // Inject the service token for authentication, OR use User Token if in Credits mode
        Authorization: userToken ? `Bearer ${userToken}` : `Bearer ${config.verifik.serviceToken}`,
    };

    if (paymentTx) {
        headers["x-payment-tx"] = paymentTx;
    }

    if (paymentWallet) {
        headers["x-wallet-address"] = paymentWallet;
    }

    if (paymentAmount) {
        headers["x-payment-amount"] = paymentAmount;
    }

    try {
        console.log(`[Agent] Sending request to ${url} with headers Auth: ${headers.Authorization.substring(0, 20)}...`);
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

        console.log(`[Agent] Tool execution response status: ${response.status}`);
        console.log(`[Agent] Tool execution response data type: ${typeof response.data}`);
        console.log(`[Agent] Tool execution data sample:`, JSON.stringify(response.data).substring(0, 200));

        if (response.status === 402) {
            // CREDITS MODE: If using userToken, 402 means Insufficient Credits (or user has no access)
            if (userToken) {
                return {
                    status: "error",
                    error: "Insufficient Credits. Please top up your account or switch to x402 mode to pay with crypto.",
                };
            }

            // x402 MODE: Handle Blockchain Payment Request
            const details = typeof response.data === "object" && response.data !== null ? response.data : { message: response.data };

            // Override receiver_address with the configured Payment Contract Address
            // This ensures we pay to the VerifikPayment contract, not the EOA returned by the backend
            if (config.x402 && config.x402.contractAddress) {
                details.receiver_address = config.x402.contractAddress;
                // Also ensure chainId matches
                details.chain_id = config.x402.chainId;
            }

            // Inject VKA Price if missing (Assume parity with USD or use provided price)
            if (!details.priceVka && details.priceUsd) {
                details.priceVka = details.priceUsd; // 1 VKA = 1 USD (or whatever logic preferred)
            }
            if (config.x402 && config.x402.vkaContractAddress) {
                details.vkaContract = config.x402.vkaContractAddress;
            }

            return {
                status: "payment_required",
                details: {
                    ...details,
                    // Use the original tool URL for display purposes so user sees the real endpoint
                    endpoint: tool.url,
                    toolName: toolName,
                },
            };
        }

        if (response.status >= 400) {
            const errorMsg = response.data?.error || response.data?.message || JSON.stringify(response.data) || "Unknown Backend Error";
            return {
                status: "error",
                error: `Backend returned ${response.status}: ${errorMsg}`,
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
 * @param {string} paymentWallet - Wallet address that paid
 * @param {string} paymentAmount - Amount paid
 * @param {string} mode - Chat mode: 'x402' | 'credits'
 * @param {string} userToken - User JWT token (optional)
 */
const chatWithAgent = async (
    userMessage,
    history = [],
    paymentTx = null,
    paymentWallet = null,
    paymentAmount = null,
    mode = "x402",
    userToken = null,
    images = [],
    pendingToolCall = null,
) => {
    // 0. CHECK FOR PENDING TOOL EXECUTION (Payment Confirmation Flow)
    // If we have a paymentTx AND a pendingToolCall, we can skip the LLM entirely and execute the tool directly.
    // This is the "deterministic" path.
    if (paymentTx && pendingToolCall) {
        console.log(`[Agent] Payment confirmed (${paymentTx}). Verifying on-chain...`);

        try {
            // 1. Verify Transaction on Backend
            await ERC8004Module.waitForTransaction(paymentTx);
            console.log(`[Agent] Transaction verified. Executing pending tool: ${pendingToolCall.tool}`);

            // 2. Execute Tool directly
            const toolResult = await executeTool(pendingToolCall.tool, pendingToolCall.args, paymentTx, paymentWallet, paymentAmount, userToken);

            // If it still requires payment (e.g. partial payment? unlikely but possible), handled same way
            if (toolResult.status === "payment_required") {
                return {
                    role: "assistant",
                    content: "I need to perform a paid action. Please confirm payment.",
                    tool_call: pendingToolCall, // Return same tool call
                    payment_required: toolResult.details,
                };
            }

            if (toolResult.status === "error") {
                return {
                    role: "assistant",
                    content: `To process your request, I attempted to call the tool but encountered an error: ${toolResult.error}`,
                };
            }

            // Record Proof
            let validationProof = null;
            if (toolResult.status === "success" && toolResult.data) {
                try {
                    validationProof = await recordValidationProof(pendingToolCall.tool, pendingToolCall.args, toolResult.data, paymentTx);
                } catch (validationError) {
                    console.warn("[Agent] Failed to record validation proof:", validationError.message);
                }
            }

            // Return success
            return {
                role: "assistant",
                content: `Tool executed successfully.`,
                data: toolResult.data,
                proof: validationProof,
            };
        } catch (execError) {
            console.error("[Agent] Payment Verification or Execution Failed:", execError);
            return {
                role: "assistant",
                content: `Processing failed: ${execError.message}. If you paid, the transaction might not be confirmed yet or failed.`,
            };
        }
    }

    // 1. Construct System Prompt
    const fullPrompt = constructSystemPrompt(toolsDef.endpoints, history, userMessage, paymentTx, images);

    console.log(`[Agent] Processing message: "${userMessage?.substring(0, 50)}..."`);
    if (images && images.length > 0) {
        console.log(`[Agent] Processing ${images.length} images`);
    }

    // 3. Call Gemini
    try {
        const accessToken = await GeminiModule.getServiceAccountToken();
        const model = DEFAULT_MODEL;
        const url = `https://generativelanguage.googleapis.com/${API_VERSION}/models/${model}:generateContent`;

        // Construct Parts
        const parts = [{ text: fullPrompt }];

        // Append images
        if (images && Array.isArray(images)) {
            images.forEach((img) => {
                parts.push({
                    inlineData: {
                        mimeType: img.mimeType,
                        data: img.data,
                    },
                });
            });
        }

        const response = await axios.post(
            url,
            {
                contents: [{ parts: parts }],
                generationConfig: {
                    temperature: 0.1,
                    maxOutputTokens: 1000,
                    stopSequences: ["User:", "System:"],
                },
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            },
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

                    // Helper: Validate required arguments are present and valid
                    const toolDef = toolsDef.endpoints.find((t) => t.id === toolCall.tool);
                    if (toolDef && toolDef.parameters && toolDef.parameters.required) {
                        const missingArgs = toolDef.parameters.required.filter(
                            (key) =>
                                !toolCall.args[key] ||
                                toolCall.args[key] === "null" ||
                                toolCall.args[key] === "undefined" ||
                                toolCall.args[key] === "",
                        );

                        if (missingArgs.length > 0) {
                            console.warn(`[Agent] Tool call ${toolCall.tool} missing required args: ${missingArgs.join(", ")}. Aborting execution.`);
                            return {
                                role: "assistant",
                                content: `I'm missing some information to process your request. Please provide the: ${missingArgs.join(", ")}`,
                            };
                        }
                    }

                    // Execute Tool
                    const toolResult = await executeTool(toolCall.tool, toolCall.args, paymentTx, paymentWallet, paymentAmount, userToken);

                    // If payment required, return special status to frontend
                    if (toolResult.status === "payment_required") {
                        return {
                            role: "assistant",
                            content: "I need to perform a paid action. Please confirm payment.",
                            tool_call: toolCall,
                            payment_required: toolResult.details,
                        };
                    }

                    // If tool execution failed
                    if (toolResult.status === "error") {
                        return {
                            role: "assistant",
                            content: `To process your request, I attempted to call the tool but encountered an error: ${toolResult.error}`,
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
            "", // metadataURI
        );

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
const constructSystemPrompt = (tools, history, userMessage, paymentTx, images = []) => {
    const systemPrompt = `
    You are the Verifik AI Assistant. Your ONLY goal is to call identity validation tools based on user requests.
    
    CRITICAL: YOU MUST OUTPUT ONLY A JSON OBJECT. NO CONVERSATIONAL TEXT. NO EXPLANATIONS.
    
    If you have enough information to call a tool, output exactly:
    {"tool": "tool_id", "args": { "param1": "value1", ... }}
    
    If you are missing REQUIRED parameters, ask the user only for those parameters.
    
    Available Tools:
    ${JSON.stringify(tools, null, 2)}

    RULES:
    1. MATCH the country/document type to the best tool (e.g., CCVE -> Venezuela).
    2. ONLY use parameters defined in the tool's properties.
    3. NEVER mention costs or payment. Just output the JSON.
    4. NEVER say "I need to perform a paid action" - the system handles this automatically.
    5. If a user provides an ID number, call the tool immediately.
    
    Current System Status:
    - Connected to Avalanche C-Chain
    - x402 Payment Protocol: ACTIVE
    - Payment Transaction: ${paymentTx ? paymentTx : "None"}
    `;

    let fullPrompt = systemPrompt + "\n\nConversation History:\n";

    // Add max last 10 messages to avoid token limit overflow, but keep context
    const recentHistory = history.slice(-10);
    recentHistory.forEach((msg) => {
        let role = "Assistant";
        if (msg.role === "user") role = "User";
        if (msg.role === "system") role = "System";

        // If it was a payment request, label it as a system action following a tool call
        if (msg.payment_required) {
            fullPrompt += `System: [PAYMENT_REQUIRED] The last action requires a payment of ${msg.payment_required.amount} AVAX.\n`;
        } else if (msg.tool_call) {
            fullPrompt += `Assistant: [TOOL_CALL] ${JSON.stringify(msg.tool_call)}\n`;
        } else {
            fullPrompt += `${role}: ${msg.content}\n`;
        }
    });

    fullPrompt += `User: ${userMessage}\n`;

    if (images && images.length > 0) {
        fullPrompt += `System: [User has uploaded ${images.length} image(s) for analysis]\n`;
    }

    if (paymentTx) {
        fullPrompt += `System: User has completed payment with TX ${paymentTx}. Retry the last tool call.\n`;
    }

    fullPrompt += "Assistant:";
    return fullPrompt;
};

module.exports = {
    chatWithAgent,
    executeTool,
    recordValidationProof,
    getAgentInfo,
    getAgentCard,
};
