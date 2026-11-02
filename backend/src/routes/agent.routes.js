const Controller = require("../controllers/agent.controller");
const WalletBalanceController = require("../controllers/wallet-balance.controller");
const { requireChatUsageAdmin } = require("../middleware/chat-usage-admin");

module.exports = (router) => {
	const PATH = "/api/agent";

	router.post(`${PATH}/chat`, Controller.chat);
	router.get(`${PATH}/usage/weekly`, requireChatUsageAdmin, Controller.getWeeklyChatUsage);
	router.post(`${PATH}/proof`, Controller.generateProof);
	router.get(`${PATH}/info`, Controller.getInfo);
	router.get(`${PATH}/agent-card.json`, Controller.getAgentCard);
	router.get(`${PATH}/wallet-balances`, WalletBalanceController.getWalletBalances);

	// Conversation Management
	router.get(`${PATH}/conversations`, Controller.listConversations);
	router.post(`${PATH}/conversations`, Controller.createConversation);
	router.get(`${PATH}/history/:conversationId`, Controller.getHistory);
	router.patch(`${PATH}/conversations/:conversationId`, Controller.updateConversation);
	router.delete(`${PATH}/conversations/:conversationId`, Controller.deleteConversation);
};
