const WalletBalanceModule = require("../modules/wallet-balance.module");

/**
 * GET /api/agent/wallet-balances?walletAddress=0x...&tokenAddress=0x... (token optional)
 */
const getWalletBalances = async (ctx) => {
    const walletAddress = ctx.query.walletAddress;
    const tokenAddress = ctx.query.tokenAddress;

    if (!walletAddress) {
        ctx.status = 400;
        ctx.body = { error: "walletAddress is required", code: "MissingParameter" };
        return;
    }

    try {
        ctx.body = await WalletBalanceModule.getBalances(walletAddress, tokenAddress);
    } catch (err) {
        if (err.code === "InvalidAddress") {
            ctx.status = 400;
            ctx.body = { error: err.message, code: err.code };
            return;
        }
        console.error("[wallet-balances]", err.message);
        ctx.status = 502;
        ctx.body = { error: "Failed to read on-chain balances", code: "RpcError" };
    }
};

module.exports = {
    getWalletBalances,
};
