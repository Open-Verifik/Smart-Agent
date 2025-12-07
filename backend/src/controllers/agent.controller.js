const AgentModule = require("../modules/agent.module");

/**
 * Handle chat request
 * POST /api/agent/chat
 */
const chat = async (ctx) => {
	try {
		const { message, history, paymentTx } = ctx.request.body;

		if (!message) {
			ctx.status = 400;
			ctx.body = { error: "Message is required" };
			return;
		}

		const response = await AgentModule.chatWithAgent(message, history || [], paymentTx);
		ctx.body = response;
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

module.exports = {
	chat,
	getInfo,
	getAgentCard,
};
