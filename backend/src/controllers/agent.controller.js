const AgentModule = require("../modules/agent.module");
const ConversationRepository = require("../repositories/conversation.repository");

/**
 * Handle chat request
 * POST /api/agent/chat
 */
const chat = async (ctx) => {
	try {
		const { message, conversationId, paymentTx, paymentWallet, paymentAmount, mode, userToken } = ctx.request.body;

		if (!message) {
			ctx.status = 400;
			ctx.body = { error: "Message is required" };
			return;
		}

		let conversation = null;
		let history = [];

		if (conversationId) {
			conversation = ConversationRepository.get(conversationId);
			if (conversation) {
				history = conversation.messages;
			}
		}

		// If no conversation found or provided, start new one later (or logic below handles it)
		// Actually, we pass history to AgentModule.
		// AgentModule expects history as ARRAY of {role, content}.

		const response = await AgentModule.chatWithAgent(message, history, paymentTx, paymentWallet, paymentAmount, mode, userToken);

		// Now we persist
		// 1. User Message
		const userMsg = { role: "user", content: message };

		// 2. Assistant Message (response)
		// response is { role: 'assistant', content: ..., ?tool_call, ?data }
		const assistantMsg = response;

		if (conversation) {
			// Append to existing
			ConversationRepository.appendMessages(conversationId, [userMsg, assistantMsg]);

			// Return both response AND conversationId (just in case)
			ctx.body = { ...response, conversationId: conversationId };
		} else {
			// Create new conversation
			// Use paymentWallet as owner if available
			const owner = paymentWallet || (userToken ? "authenticated_user" : null);
			// Ideally we extract ID from userToken but for now let's rely on wallet or just anonymous if neither.

			conversation = ConversationRepository.create(owner, message);
			ConversationRepository.appendMessages(conversation.id, [userMsg, assistantMsg]);

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
		const conversation = ConversationRepository.get(conversationId);
		if (!conversation) {
			ctx.status = 404;
			ctx.body = { error: "Conversation not found" };
			return;
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
		const { title } = ctx.request.body;

		if (!title) {
			ctx.status = 400;
			ctx.body = { error: "Title is required" };
			return;
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
		ConversationRepository.delete(conversationId);
		ctx.body = { success: true };
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
};
