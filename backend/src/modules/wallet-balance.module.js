const { ethers } = require("ethers");
const config = require("../config");
const { getChain, isChainActive } = require("../config/chains");

const DEFAULT_MAINNET_VKA = "0x8fc4b00689812f449723CB473E0A7C060b10eD3f";

/** @type {Map<number, ethers.JsonRpcProvider>} */
const providerCache = new Map();

/**
 * Resolve a JSON-RPC provider for the requested chain. When `chainId` is
 * unspecified, falls back to the legacy single-chain config so existing
 * single-chain deployments keep working.
 *
 * @param {number|string} [chainId]
 * @returns {ethers.JsonRpcProvider}
 */
const getProvider = (chainId) => {
    if (chainId !== undefined && chainId !== null && chainId !== "") {
        const chain = getChain(chainId);
        if (!chain || !isChainActive(chain.chainId)) {
            const e = new Error("Chain not active");
            e.code = "InvalidChainId";
            throw e;
        }
        let p = providerCache.get(chain.chainId);
        if (!p) {
            p = new ethers.JsonRpcProvider(chain.rpcUrl);
            providerCache.set(chain.chainId, p);
        }
        return p;
    }
    const fallbackKey = "default";
    let p = providerCache.get(fallbackKey);
    if (!p) {
        p = new ethers.JsonRpcProvider(config.chainReadRpcUrl);
        providerCache.set(fallbackKey, p);
    }
    return p;
};

/**
 * @param {string} walletAddress
 * @param {string} [tokenAddress]
 * @param {number|string} [chainId]
 * @returns {Promise<{ walletAddress: string, nativeBalance: string, tokenAddress: string, tokenBalance: string, chainId: number }>}
 */
const getBalances = async (walletAddress, tokenAddress, chainId) => {
    if (!walletAddress) {
        const e = new Error("walletAddress is required");
        e.code = "InvalidAddress";
        throw e;
    }
    if (!ethers.isAddress(walletAddress)) {
        const e = new Error("Invalid wallet address");
        e.code = "InvalidAddress";
        throw e;
    }

    const wallet = ethers.getAddress(walletAddress);
    const chain = chainId ? getChain(chainId) : null;
    const fallbackVka = chain?.vkaTokenAddress || config.x402.vkaContractAddress || DEFAULT_MAINNET_VKA;
    let token = tokenAddress || fallbackVka;
    if (!ethers.isAddress(token)) {
        const e = new Error("Invalid token address");
        e.code = "InvalidAddress";
        throw e;
    }
    token = ethers.getAddress(token);

    const p = getProvider(chainId);
    const nativeWei = await p.getBalance(wallet);
    const nativeBalance = ethers.formatEther(nativeWei);

    const abi = [
        "function balanceOf(address) view returns (uint256)",
        "function decimals() view returns (uint8)",
    ];
    const contract = new ethers.Contract(token, abi, p);
    const [raw, decimals] = await Promise.all([contract.balanceOf(wallet), contract.decimals()]);
    const tokenBalance = ethers.formatUnits(raw, decimals);

    return {
        walletAddress: wallet,
        nativeBalance,
        tokenAddress: token,
        tokenBalance,
        chainId: chain ? chain.chainId : Number(config.x402.defaultChainId) || 0,
    };
};

module.exports = {
    getBalances,
};
