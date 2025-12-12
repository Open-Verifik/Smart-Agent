const AgentModule = require("../modules/agent.module");
const ConversationRepository = require("../repositories/conversation.repository");

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
	try {
		const { message, conversationId, paymentTx, paymentWallet, paymentAmount, mode, userToken, images } = ctx.request.body;

		if (!message && (!images || images.length === 0)) {
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
			processedImages
		);

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

		// 3. Assistant Message (response)
		const assistantMsg = response;
		messagesToSave.push(assistantMsg);

		if (conversation) {
			ConversationRepository.appendMessages(conversationId, messagesToSave);
			ctx.body = { ...response, conversationId: conversationId };
		} else {
			const owner = paymentWallet || (userToken ? "authenticated_user" : null);
			conversation = ConversationRepository.create(owner, message || "Image Analysis");
			ConversationRepository.appendMessages(conversation.id, messagesToSave);
			ctx.body = { ...response, conversationId: conversation.id };
		}
	} catch (error) {
		console.error("Agent Controller Error:", error);
		ctx.status = 500;
		ctx.body = { error: error.message };
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

module.exports = {
	chat,
	getInfo,
	getAgentCard,
	listConversations,
	getHistory,
	updateConversation,
	deleteConversation,
	createConversation,
};
