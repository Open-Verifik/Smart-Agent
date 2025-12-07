const Controller = require("../controllers/agent.controller");

module.exports = (router) => {
	const PATH = "/api/agent";

	router.post(`${PATH}/chat`, Controller.chat);
	router.get(`${PATH}/info`, Controller.getInfo);
	router.get(`${PATH}/agent-card.json`, Controller.getAgentCard);
};
