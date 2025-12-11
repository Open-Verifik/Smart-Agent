const Controller = require("../controllers/agent.controller");

module.exports = (router) => {
	const PATH = "/api/agent";

	router.post(`${PATH}/chat`, Controller.chat);
	router.get(`${PATH}/info`, Controller.getInfo);
	router.get(`${PATH}/agent-card.json`, Controller.getAgentCard);

	// Conversation Management
	router.get(`${PATH}/conversations`, Controller.listConversations);
	router.get(`${PATH}/history/:conversationId`, Controller.getHistory);
	router.patch(`${PATH}/conversations/:conversationId`, Controller.updateConversation);
	router.delete(`${PATH}/conversations/:conversationId`, Controller.deleteConversation);
};
