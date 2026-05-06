const { ethers } = require("ethers");
const config = require("../config");

const DEFAULT_MAINNET_VKA = "0x8fc4b00689812f449723CB473E0A7C060b10eD3f";

let provider = null;

/**
 * @returns {ethers.JsonRpcProvider}
 */
const getProvider = () => {
    if (!provider) {
        provider = new ethers.JsonRpcProvider(config.chainReadRpcUrl);
    }
    return provider;
};

/**
 * @param {string} walletAddress
 * @param {string} [tokenAddress]
 * @returns {Promise<{ walletAddress: string, nativeBalance: string, tokenAddress: string, tokenBalance: string }>}
 */
const getBalances = async (walletAddress, tokenAddress) => {
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
    let token = tokenAddress || config.x402.vkaContractAddress || DEFAULT_MAINNET_VKA;
    if (!ethers.isAddress(token)) {
        const e = new Error("Invalid token address");
        e.code = "InvalidAddress";
        throw e;
    }
    token = ethers.getAddress(token);

    const p = getProvider();
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
    };
};

module.exports = {
    getBalances,
};
