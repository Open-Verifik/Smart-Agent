const AgentModule = require("../modules/agent.module");
const ConversationRepository = require("../repositories/conversation.repository");
const ChatUsageRepository = require("../repositories/chat-usage.repository");
const { redactMessageForPersistence } = require("../utils/chat-response-redact.util");

/**
 * Handle chat request
 * POST /api/agent/chat
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

/**
 * Handle chat request
 * POST /api/agent/chat
 */
const chat = async (ctx) => {
	const body = ctx.request.body || {};
	const {
		message,
		conversationId,
		paymentTx,
		paymentWallet,
		paymentAmount,
		paymentChainId,
		mode,
		userToken,
		images,
		pendingToolCall,
	} = body;
	const usageContext = {
		userToken,
		paymentWallet,
		mode,
		conversationId: conversationId || null,
		userContent: typeof message === "string" ? message : "",
	};
	let usageLogged = false;
	const logUsage = (extra) => {
		if (usageLogged) return;
		usageLogged = true;
		try {
			ChatUsageRepository.recordChatExchange({ ...usageContext, ...extra });
		} catch (logError) {
			console.warn("[chat-usage] failed to queue usage record:", logError && logError.name ? logError.name : "unknown");
		}
	};

	try {
		if (!message && (!images || images.length === 0) && !paymentTx) {
			ctx.status = 400;
			ctx.body = { error: "Message or image is required" };
			return;
		}

		// If success, record validation proof on-chain (ERC8004)
		let conversation = null;
		let history = [];

		if (conversationId) {
			conversation = ConversationRepository.get(conversationId);
			if (conversation) {
				history = conversation.messages;
			}
		}

		// Process Images if any
		let processedImages = [];
		if (images && Array.isArray(images)) {
			processedImages = images
				.map((imgBase64) => {
					// imgBase64 might be "data:image/png;base64,..."
					// We want to extract the base64 part for saving, but might keep full string for Gemini?
					// Gemini expects base64 string without header in 'inlineData'.
					const matches = imgBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

					if (matches && matches.length === 3) {
						const mimeType = matches[1];
						const data = matches[2];

						// Save to disk for persistence
						const filename = `${Date.now()}_${crypto.randomBytes(4).toString("hex")}.${mimeType.split("/")[1]}`;
						const uploadDir = path.join(__dirname, "../../data/uploads");
						if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

						fs.writeFileSync(path.join(uploadDir, filename), Buffer.from(data, "base64"));

						return {
							mimeType,
							data, // Base64 for Gemini
							url: `/api/uploads/${filename}`, // For frontend/history
						};
					}
					return null;
				})
				.filter((i) => i !== null);
		}

		const response = await AgentModule.chatWithAgent(
			message || "Analyzes this image",
			history,
			paymentTx,
			paymentWallet,
			paymentAmount,
			mode,
			userToken,
			processedImages,
			pendingToolCall,
			paymentChainId
		);

		const usage = response && typeof response === "object" ? response._usage : null;
		if (response && typeof response === "object" && Object.prototype.hasOwnProperty.call(response, "_usage")) {
			delete response._usage;
		}

		// Now we persist
		// 1. System Message (Payment Confirmation) - if paymentTx exists
		let messagesToSave = [];

		if (paymentTx) {
			messagesToSave.push({
				role: "system",
				content: `Payment sent! TX: ${paymentTx}. Confirmed.`,
			});
		}

		// 2. User Message
		const userMsg = {
			role: "user",
			content: message || "", // Ensure content is never undefined
			images: processedImages.map((img) => img.url), // Store URLs in history, not base64
		};
		messagesToSave.push(userMsg);

		// 3. Assistant Message (response) — persist without large base64 blobs
		const assistantMsg = redactMessageForPersistence(response);
		messagesToSave.push(assistantMsg);

		let savedConversationId = conversation ? conversationId : null;
		if (!conversation) {
			const owner = paymentWallet || (userToken ? "authenticated_user" : null);
			conversation = ConversationRepository.create(owner, message || "Image Analysis");
			savedConversationId = conversation.id;
		}

		logUsage({
			conversationId: savedConversationId,
			usage,
			assistantContent: response && response.content,
		});

		ConversationRepository.appendMessages(savedConversationId, messagesToSave);
		ctx.body = { ...response, conversationId: savedConversationId };
	} catch (error) {
		logUsage({ failed: true });
		console.error("Agent Controller Error:", error);
		ctx.status = 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Weekly Smart Check chat usage. Admin or superadmin only.
 * GET /api/agent/usage/weekly?weeks=8
 */
const getWeeklyChatUsage = async (ctx) => {
	try {
		const weeksRaw = Number.parseInt(ctx.query.weeks, 10);
		const weeks = Number.isFinite(weeksRaw) ? weeksRaw : 8;
		ctx.body = await ChatUsageRepository.queryWeekly(weeks);
	} catch (error) {
		if (error && error.code === "CHAT_USAGE_UNCONFIGURED") {
			ctx.status = 503;
			ctx.body = { error: "Chat usage database is not configured" };
			return;
		}
		console.error("[chat-usage] weekly query failed:", error && (error.code || error.name) ? error.code || error.name : "unknown");
		ctx.status = 500;
		ctx.body = { error: "Failed to read chat usage" };
	}
};

const getInfo = async (ctx) => {
	try {
		const agentInfo = await AgentModule.getAgentInfo();
		if (!agentInfo) {
			ctx.status = 404;
			ctx.body = { error: "Agent not registered or ERC8004 not configured" };
			return;
		}
		ctx.body = agentInfo;
	} catch (error) {
		console.error("Agent Info Controller Error:", error);
		ctx.status = 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Get Agent Card (ERC8004 format)
 * GET /api/agent/agent-card.json
 */
const getAgentCard = async (ctx) => {
	try {
		const agentCard = await AgentModule.getAgentCard();
		if (!agentCard) {
			ctx.status = 404;
			ctx.body = { error: "Agent card not available" };
			return;
		}
		ctx.body = agentCard;
	} catch (error) {
		console.error("Agent Card Controller Error:", error);
		ctx.status = 500;
		ctx.body = { error: error.message };
	}
};

/**
 * GET /api/agent/conversations
 * Query: ?walletAddress=0x...
 */
const listConversations = async (ctx) => {
	try {
		const { walletAddress } = ctx.query;
		const list = ConversationRepository.list(walletAddress);
		ctx.body = list;
	} catch (error) {
		ctx.status = 500;
		ctx.body = { error: error.message };
	}
};

/**
 * GET /api/agent/history/:conversationId
 */
const getHistory = async (ctx) => {
	try {
		const { conversationId } = ctx.params;
		const { walletAddress } = ctx.query;

		const conversation = ConversationRepository.get(conversationId);
		if (!conversation) {
			ctx.status = 404;
			ctx.body = { error: "Conversation not found" };
			return;
		}

		// Security Check: Verify Ownership
		if (conversation.owner_address) {
			if (!walletAddress || conversation.owner_address.toLowerCase() !== walletAddress.toLowerCase()) {
				ctx.status = 403;
				ctx.body = { error: "Unauthorized access to this conversation" };
				return;
			}
		}

		ctx.body = conversation;
	} catch (error) {
		ctx.status = 500;
		ctx.body = { error: error.message };
	}
};

/**
 * PATCH /api/agent/conversations/:conversationId
 * Body: { title }
 */
const updateConversation = async (ctx) => {
	try {
		const { conversationId } = ctx.params;
		const { title, walletAddress } = ctx.request.body;

		if (!title) {
			ctx.status = 400;
			ctx.body = { error: "Title is required" };
			return;
		}

		// Security Check
		const conversation = ConversationRepository.get(conversationId);
		if (conversation && conversation.owner_address) {
			if (!walletAddress || conversation.owner_address.toLowerCase() !== walletAddress.toLowerCase()) {
				ctx.status = 403;
				ctx.body = { error: "Unauthorized modification" };
				return;
			}
		}

		const updated = ConversationRepository.updateTitle(conversationId, title);
		ctx.body = updated;
	} catch (error) {
		ctx.status = 500; // Or 404 if not found (repo throws)
		ctx.body = { error: error.message };
	}
};

/**
 * DELETE /api/agent/conversations/:conversationId
 */
const deleteConversation = async (ctx) => {
	try {
		const { conversationId } = ctx.params;
		const { walletAddress } = ctx.query;

		// Security Check
		const conversation = ConversationRepository.get(conversationId);
		if (conversation && conversation.owner_address) {
			if (!walletAddress || conversation.owner_address.toLowerCase() !== walletAddress.toLowerCase()) {
				ctx.status = 403;
				ctx.body = { error: "Unauthorized deletion" };
				return;
			}
		}

		ConversationRepository.delete(conversationId);
		ctx.body = { success: true };
	} catch (error) {
		ctx.status = 500;
		ctx.body = { error: error.message };
	}
};

/**
 * POST /api/agent/conversations
 * Body: { ownerAddress (optional) }
 */
const createConversation = async (ctx) => {
	try {
		// We can determine owner from token or body
		// For now, let's accept it from body or infer for simple implementation
		const { walletAddress, mode } = ctx.request.body;
		// Logic similar to chat: determine owner
		let owner = null;
		// For x402, owner is the wallet address
		if (mode === "x402" && walletAddress) owner = walletAddress;
		// For credits, owner is the User ID passed in walletAddress field
		if (mode === "credits" && walletAddress) owner = walletAddress;

		const conversation = ConversationRepository.create(owner, "");
		ctx.body = conversation;
	} catch (error) {
		ctx.status = 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Generate proof for a tool execution
 * POST /api/agent/proof
 * Body: { toolName, args, result, paymentTx }
 */
const generateProof = async (ctx) => {
	try {
		const { toolName, args, result, paymentTx } = ctx.request.body;

		if (!toolName || !result || !paymentTx) {
			ctx.status = 400;
			ctx.body = { error: "toolName, result, and paymentTx are required" };
			return;
		}

		// Use the recordValidationProof function from agent module
		const { recordValidationProof } = require("../modules/agent.module");

		const proof = await recordValidationProof(toolName, args, result, paymentTx);

		if (proof) {
			ctx.body = { proof };
		} else {
			ctx.status = 500;
			ctx.body = { error: "Failed to generate proof" };
		}
	} catch (error) {
		console.error("Proof Generation Error:", error);
		ctx.status = 500;
		ctx.body = { error: error.message };
	}
};

module.exports = {
	chat,
	getWeeklyChatUsage,
	getInfo,
	getAgentCard,
	listConversations,
	getHistory,
	updateConversation,
	deleteConversation,
	createConversation,
	generateProof,
};
