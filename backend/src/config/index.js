const path = require("path");
const dotenv = require("dotenv");

// Load .env from backend directory (where this config file is)
const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

// Debug: Log if GOOGLE_APPLICATION_CREDENTIALS is loaded (without revealing value)
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.warn(
        `[Config] WARNING: GOOGLE_APPLICATION_CREDENTIALS not found in environment. ` +
            `Tried loading from: ${envPath}. ` +
            `Current working directory: ${process.cwd()}`,
    );
} else {
    console.log(`[Config] GOOGLE_APPLICATION_CREDENTIALS loaded: ${process.env.GOOGLE_APPLICATION_CREDENTIALS.substring(0, 50)}...`);
}

const { CHAINS, DEFAULT_CHAIN_ID, ACTIVE_CHAIN_IDS, getChain } = require("./chains");

const defaultChain = getChain(DEFAULT_CHAIN_ID) || CHAINS[43114];
const defaultX402Rpc = process.env.X402_RPC_URL || defaultChain.rpcUrl;

/** Origin for OpenAPI `servers` and discovery (no trailing path). Use PUBLIC_ORIGIN or AGENT_BASE_URL in production. */
const publicOrigin = (() => {
    const raw = process.env.PUBLIC_ORIGIN || process.env.AGENT_BASE_URL || `http://127.0.0.1:${process.env.PORT || 3060}`;
    try {
        return new URL(raw).origin;
    } catch {
        return String(raw).replace(/\/$/, "");
    }
})();

const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3060,
    publicOrigin,
    /** RPC for read-only balance proxy on the default chain; falls back to X402_RPC_URL */
    chainReadRpcUrl:
        process.env.AVALANCHE_C_CHAIN_RPC_URL || process.env.X402_RPC_URL || defaultChain.rpcUrl,
    verifik: {
        apiUrl: process.env.VERIFIK_API_URL,
        serviceToken: process.env.VERIFIK_SERVICE_TOKEN,
    },
    google: {
        // We can load the key file path or content from env
        keyFilePath: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    },
    x402: {
        /** Default chain — kept for backwards compatibility with single-chain consumers. */
        rpcUrl: defaultX402Rpc,
        chainId: defaultChain.chainId,
        networkName: process.env.X402_NETWORK_NAME || defaultChain.networkName,
        walletPrivateKey: process.env.X402_WALLET_PRIVATE_KEY,
        contractAddress: process.env.X402_CONTRACT_ADDRESS || defaultChain.paymentContract,
        vkaContractAddress: process.env.VKA_CONTRACT_ADDRESS || defaultChain.vkaTokenAddress,
        /** Multi-chain registry — see config/chains.js */
        chains: CHAINS,
        activeChainIds: ACTIVE_CHAIN_IDS,
        defaultChainId: defaultChain.chainId,
    },
    erc8004: {
        identityRegistry: process.env.ERC8004_IDENTITY_REGISTRY,
        reputationRegistry: process.env.ERC8004_REPUTATION_REGISTRY,
        validationRegistry: process.env.ERC8004_VALIDATION_REGISTRY,
        agentTokenId: process.env.ERC8004_AGENT_TOKEN_ID,
    },
};

module.exports = config;
