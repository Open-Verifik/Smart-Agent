const { ethers } = require("ethers");
const config = require("../config");

// Contract ABIs (simplified)
const IDENTITY_REGISTRY_ABI = [
    "function registerAgent(address agentAddress, string memory name, string memory description, string memory agentCardURI, string[] memory capabilities) external returns (uint256)",
    "function getAgentTokenId(address agentAddress) external view returns (uint256)",
    "function isAgentRegistered(address agentAddress) external view returns (bool, bool, uint256)",
    "function getAgentIdentity(uint256 tokenId) external view returns (tuple(string name, string description, string agentCardURI, string[] capabilities, address agentAddress, uint256 createdAt, bool active))",
];

const REPUTATION_REGISTRY_ABI = [
    "function submitFeedback(uint256 agentTokenId, uint8 rating, string[] memory tags, string memory comment, bytes32 paymentProof) external returns (uint256)",
    "function getReputationSummary(uint256 agentTokenId) external view returns (uint256, uint256, uint256)",
    "function getAgentFeedbacks(uint256 agentTokenId) external view returns (uint256[])",
    "function getFeedback(uint256 feedbackId) external view returns (tuple(address client, uint256 agentTokenId, uint8 rating, string[] tags, string comment, bytes32 paymentProof, uint256 timestamp, bool verified))",
];

const VALIDATION_REGISTRY_ABI = [
    "function recordValidation(uint256 agentTokenId, string memory taskId, bytes32 outputHash, bytes32 proofHash, address validator, uint8 validationType, bool isValid, string memory metadataURI) external returns (uint256)",
    "function getValidationStats(uint256 agentTokenId) external view returns (uint256, uint256, uint256)",
];

let provider = null;
let identityRegistry = null;
let reputationRegistry = null;
let validationRegistry = null;

const initialize = () => {
    // Check if configuration exists
    if (!config.x402?.rpcUrl) return false;

    provider = new ethers.JsonRpcProvider(config.x402.rpcUrl);
    provider.pollingInterval = 1000; // Fast detection for Avalanche (2s blocks)

    const identityAddress = config.erc8004?.identityRegistry;
    const reputationAddress = config.erc8004?.reputationRegistry;
    const validationAddress = config.erc8004?.validationRegistry;

    if (!identityAddress || !reputationAddress || !validationAddress) {
        console.warn("[ERC8004] Contract addresses not configured. ERC8004 features disabled.");
        return false;
    }

    identityRegistry = new ethers.Contract(identityAddress, IDENTITY_REGISTRY_ABI, provider);
    reputationRegistry = new ethers.Contract(reputationAddress, REPUTATION_REGISTRY_ABI, provider);
    validationRegistry = new ethers.Contract(validationAddress, VALIDATION_REGISTRY_ABI, provider);

    return true;
};

// ... Helper functions mirroring the original ...

const getAgentIdentity = async (tokenId) => {
    if (!identityRegistry) initialize();
    if (!identityRegistry) return null;

    try {
        const identity = await identityRegistry.getAgentIdentity(tokenId);
        // ... (parsing logic)
        return {
            name: identity.name,
            description: identity.description,
            agentCardURI: identity.agentCardURI,
            capabilities: identity.capabilities,
            agentAddress: identity.agentAddress,
            createdAt: Number(identity.createdAt),
            active: identity.active,
        };
    } catch (error) {
        console.error("[ERC8004] Error getting agent identity:", error.message);
        return null;
    }
};

const getReputation = async (tokenId) => {
    if (!reputationRegistry) initialize();
    if (!reputationRegistry) return null;
    try {
        const [totalFeedbacks, verifiedFeedbacks, averageRating] = await reputationRegistry.getReputationSummary(tokenId);
        return {
            totalFeedbacks: Number(totalFeedbacks),
            verifiedFeedbacks: Number(verifiedFeedbacks),
            averageRating: Number(averageRating) / 100,
        };
    } catch (error) {
        console.error("[ERC8004] Error getting reputation:", error);
        return null;
    }
};

const getAgentFeedbacks = async (agentTokenId) => {
    if (!reputationRegistry) initialize();
    if (!reputationRegistry) return [];
    try {
        const feedbackIds = await reputationRegistry.getAgentFeedbacks(agentTokenId);
        const feedbacks = [];
        for (const id of feedbackIds) {
            const feedback = await reputationRegistry.getFeedback(id);
            feedbacks.push({
                id: id.toString(),
                client: feedback.client,
                rating: Number(feedback.rating),
                tags: feedback.tags,
                comment: feedback.comment,
                verified: feedback.verified,
                timestamp: new Date(Number(feedback.timestamp) * 1000).toISOString(),
                paymentProof: feedback.paymentProof === ethers.ZeroHash ? null : feedback.paymentProof,
            });
        }
        return feedbacks;
    } catch (error) {
        console.error("[ERC8004] Error getting agent feedbacks:", error);
        return [];
    }
};

const recordValidation = async (signer, agentTokenId, taskId, output, proofHash, validatorAddress, validationType, isValid, metadataURI) => {
    if (!validationRegistry) initialize();

    if (!validationRegistry) throw new Error("Validation registry not initialized");
    try {
        const validationWithSigner = validationRegistry.connect(signer);
        const outputHash = ethers.keccak256(ethers.toUtf8Bytes(output));
        const tx = await validationWithSigner.recordValidation(
            agentTokenId,
            taskId,
            outputHash,
            proofHash,
            validatorAddress,
            validationType,
            isValid,
            metadataURI,
        );
        await tx.wait();
        return tx.hash;
    } catch (error) {
        console.error("[ERC8004] Error recording validation:", error);
        throw error;
    }
};

const getValidationStats = async (tokenId) => {
    if (!validationRegistry) initialize();
    if (!validationRegistry) return null;
    try {
        const [totalValidations, validCount, invalidCount] = await validationRegistry.getValidationStats(tokenId);
        return {
            totalValidations: Number(totalValidations),
            validCount: Number(validCount),
            invalidCount: Number(invalidCount),
        };
    } catch (error) {
        return null;
    }
};

const hashOutput = (data) => ethers.keccak256(ethers.toUtf8Bytes(JSON.stringify(data)));

const getAgentWallet = () => {
    if (!provider) initialize();

    if (!config.x402?.walletPrivateKey) return null;

    // Support Mnemonics or Private Key
    const key = config.x402.walletPrivateKey.trim();
    if (key.includes(" ")) {
        return ethers.HDNodeWallet.fromPhrase(key).connect(provider);
    }
    return new ethers.Wallet(key, provider);
};

const waitForTransaction = async (txHash) => {
    if (!provider) initialize();
    if (!provider) throw new Error("Provider not initialized");

    console.log(`[ERC8004] Waiting for transaction: ${txHash}`);
    try {
        // Wait for 1 confirmation
        const receipt = await provider.waitForTransaction(txHash, 1, 30000); // 30s timeout
        if (!receipt) {
            throw new Error("Transaction not found or timed out");
        }
        if (receipt.status === 0) {
            throw new Error("Transaction failed on-chain");
        }
        return receipt;
    } catch (error) {
        console.error(`[ERC8004] Error waiting for transaction ${txHash}:`, error.message);
        throw error;
    }
};

initialize();

module.exports = {
    initialize,
    getAgentIdentity,
    getReputation,
    getAgentFeedbacks,
    recordValidation,
    getValidationStats,
    hashOutput,
    getAgentWallet,
    waitForTransaction,
};
