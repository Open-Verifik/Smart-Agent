require("dotenv").config();

const config = {
	env: process.env.NODE_ENV || "development",
	port: process.env.PORT || 3060,
	verifik: {
		apiUrl: process.env.VERIFIK_API_URL || "https://verifik.app",
		serviceToken: process.env.VERIFIK_SERVICE_TOKEN,
	},
	google: {
		// We can load the key file path or content from env
		keyFilePath: process.env.GOOGLE_APPLICATION_CREDENTIALS,
	},
	x402: {
		rpcUrl: process.env.X402_RPC_URL || "https://api.avax-test.network/ext/bc/C/rpc",
		chainId: process.env.X402_CHAIN_ID || 43113,
		networkName: process.env.X402_NETWORK_NAME || "avalanche-fuji-testnet",
		walletPrivateKey: process.env.X402_WALLET_PRIVATE_KEY,
		contractAddress: process.env.X402_CONTRACT_ADDRESS || "0x72Fdce477bBD9f322907b3b1C4a58bC4d5D64C3a",
	},
	erc8004: {
		identityRegistry: process.env.ERC8004_IDENTITY_REGISTRY,
		reputationRegistry: process.env.ERC8004_REPUTATION_REGISTRY,
		validationRegistry: process.env.ERC8004_VALIDATION_REGISTRY,
		agentTokenId: process.env.ERC8004_AGENT_TOKEN_ID,
	},
};

module.exports = config;
