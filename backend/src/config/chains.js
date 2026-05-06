/**
 * EVM chain registry for the native x402 payment middleware.
 *
 * Two payment surfaces exist; this registry only governs the second:
 *   1) Sponge Gateway purchase URLs (`api.paysponge.com/x402/...`) — Sponge's
 *      facilitator handles chain selection (Avalanche, Base, xLayer, etc.)
 *      and settles in **USDC** via EIP-3009 `transferWithAuthorization`. Our
 *      middleware never sees those txs unless the request reaches
 *      `ai.verifik.co` directly.
 *   2) Smart Agent native x402 (`x-payment-tx` / `L402` against this server)
 *      — chain selection and tx validation live here. Accepted assets per
 *      chain: native (AVAX/ETH/OKB), VKA (where deployed), and **USDC**
 *      (1:1 USD, 6 decimals).
 *
 * Solana is intentionally NOT in this registry: it has a different proof
 * model (signature/slot, no `ethers`) and belongs to a separate verifier
 * track. For now, Solana payments must go through Sponge. The canonical
 * Solana USDC SPL mint is documented in `SOLANA_TOKENS` below for that
 * future track.
 *
 * Adding an EVM chain only requires an entry below plus optional env
 * overrides (RPC URL, payment contract, VKA token, USDC token). When a
 * chain has no `paymentContract`, the middleware falls back to native
 * transfers (or USDC ERC-20 transfers) to the agent's EOA — that is the
 * recommended Phase 1 for Base/xLayer until we deploy `payForService` on
 * those chains.
 */

const DEFAULT_CHAIN_ID = Number(process.env.X402_CHAIN_ID || 43114);

/**
 * @typedef {Object} ChainConfig
 * @property {number} chainId Decimal chain id (EVM).
 * @property {string} hex Hex chain id with `0x` prefix.
 * @property {string} key Stable short identifier (e.g. `avalanche`, `base`).
 * @property {string} name Human-readable network name.
 * @property {string} networkName Slug used in agent metadata.
 * @property {boolean} isTestnet
 * @property {string} rpcUrl JSON-RPC endpoint used for tx validation/balance reads.
 * @property {string} blockExplorerUrl Explorer base URL (no trailing slash).
 * @property {string} nativeSymbol Native asset symbol shown to clients (e.g. AVAX, ETH, OKB).
 * @property {string} nativeName Native asset display name.
 * @property {number} nativeDecimals Native asset decimals (18 for EVM mainnets).
 * @property {string} priceTicker Symbol used to fetch USD price (Binance ticker).
 * @property {number} priceFallbackUsd Fallback USD price if the oracle call fails.
 * @property {string|null} paymentContract Optional `payForService` contract address.
 * @property {string|null} vkaTokenAddress Optional VKA ERC-20 address for token payments.
 * @property {string|null} usdcAddress Canonical USDC ERC-20 address on this chain. 1:1 USD, 6 decimals.
 * @property {number} usdcDecimals Number of decimals for the USDC contract above (Circle USDC is always 6).
 */

/** @type {Record<number, ChainConfig>} */
const CHAINS = {
    43114: {
        chainId: 43114,
        hex: "0xa86a",
        key: "avalanche",
        name: "Avalanche C-Chain",
        networkName: "avalanche-mainnet",
        isTestnet: false,
        rpcUrl: process.env.X402_AVAX_RPC_URL || "https://api.avax.network/ext/bc/C/rpc",
        blockExplorerUrl: "https://snowtrace.io",
        nativeSymbol: "AVAX",
        nativeName: "Avalanche",
        nativeDecimals: 18,
        priceTicker: "AVAX",
        priceFallbackUsd: 40.0,
        paymentContract: process.env.X402_AVAX_CONTRACT || "0x5e3C7c44e5d76fa5517378582B824046cBDcFfCD",
        vkaTokenAddress: process.env.VKA_AVAX_ADDRESS || "0x8fc4b00689812f449723CB473E0A7C060b10eD3f",
        // Native Circle USDC on Avalanche C-Chain (matches Sponge's settlement asset).
        usdcAddress: process.env.USDC_AVAX_ADDRESS || "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
        usdcDecimals: 6,
    },
    43113: {
        chainId: 43113,
        hex: "0xa869",
        key: "avalanche-fuji",
        name: "Avalanche Fuji Testnet",
        networkName: "avalanche-fuji-testnet",
        isTestnet: true,
        rpcUrl: process.env.X402_AVAX_FUJI_RPC_URL || "https://api.avax-test.network/ext/bc/C/rpc",
        blockExplorerUrl: "https://testnet.snowtrace.io",
        nativeSymbol: "AVAX",
        nativeName: "Avalanche",
        nativeDecimals: 18,
        priceTicker: "AVAX",
        priceFallbackUsd: 40.0,
        paymentContract: process.env.X402_AVAX_FUJI_CONTRACT || "0x72Fdce477bBD9f322907b3b1C4a58bC4d5D64C3a",
        vkaTokenAddress: process.env.VKA_AVAX_FUJI_ADDRESS || null,
        // Circle's testnet faucet USDC on Fuji.
        usdcAddress: process.env.USDC_AVAX_FUJI_ADDRESS || "0x5425890298aed601595a70AB815c96711a31Bc65",
        usdcDecimals: 6,
    },
    8453: {
        chainId: 8453,
        hex: "0x2105",
        key: "base",
        name: "Base",
        networkName: "base",
        isTestnet: false,
        rpcUrl: process.env.X402_BASE_RPC_URL || "https://mainnet.base.org",
        blockExplorerUrl: "https://basescan.org",
        nativeSymbol: "ETH",
        nativeName: "Ether",
        nativeDecimals: 18,
        priceTicker: "ETH",
        priceFallbackUsd: 3500.0,
        paymentContract: process.env.X402_BASE_CONTRACT || null,
        vkaTokenAddress: process.env.VKA_BASE_ADDRESS || null,
        // Native Circle USDC on Base.
        usdcAddress: process.env.USDC_BASE_ADDRESS || "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        usdcDecimals: 6,
    },
    196: {
        chainId: 196,
        hex: "0xc4",
        key: "xlayer",
        name: "X Layer",
        networkName: "xlayer-mainnet",
        isTestnet: false,
        rpcUrl: process.env.X402_XLAYER_RPC_URL || "https://rpc.xlayer.tech",
        blockExplorerUrl: "https://www.oklink.com/xlayer",
        nativeSymbol: "OKB",
        nativeName: "OKB",
        nativeDecimals: 18,
        priceTicker: "OKB",
        priceFallbackUsd: 50.0,
        paymentContract: process.env.X402_XLAYER_CONTRACT || null,
        vkaTokenAddress: process.env.VKA_XLAYER_ADDRESS || null,
        // Bridged USDC on X Layer (canonical OKX bridge address). Override via env if a native
        // Circle issuance becomes available.
        usdcAddress: process.env.USDC_XLAYER_ADDRESS || "0x74b7F16337b8972027F6196A17a631aC6dE26d22",
        usdcDecimals: 6,
    },
};

/**
 * Solana asset references for the (deferred) Solana payment track. Not part
 * of the EVM provider map — Solana proofs are signatures + slots and need
 * a dedicated verifier. Documented here so we have a single source of
 * truth when that track lands or while routing Solana payments through
 * Sponge.
 */
const SOLANA_TOKENS = {
    usdcMint: process.env.USDC_SOLANA_MINT || "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    usdcDecimals: 6,
};

/**
 * Active chain ids the middleware will accept. Defaults to Avalanche-only so
 * existing deployments keep behaving identically until ops opts new chains in
 * via env: `X402_ACTIVE_CHAIN_IDS=43114,8453`.
 */
const parseActiveIds = () => {
    const raw = process.env.X402_ACTIVE_CHAIN_IDS;
    if (!raw) return [DEFAULT_CHAIN_ID];
    const ids = raw
        .split(",")
        .map((s) => Number(String(s).trim()))
        .filter((n) => Number.isFinite(n) && CHAINS[n]);
    return ids.length ? ids : [DEFAULT_CHAIN_ID];
};

const ACTIVE_CHAIN_IDS = parseActiveIds();

/**
 * @param {number|string} id
 * @returns {ChainConfig|null}
 */
const getChain = (id) => {
    const n = Number(id);
    if (!Number.isFinite(n)) return null;
    return CHAINS[n] || null;
};

/**
 * @param {number|string} id
 * @returns {boolean}
 */
const isChainActive = (id) => ACTIVE_CHAIN_IDS.includes(Number(id));

/**
 * Pick the chain a request wants to pay on. Honors `x-payment-chain-id`
 * header (decimal or hex) when present and active; otherwise falls back to
 * the configured default.
 *
 * @param {object} headers
 * @returns {ChainConfig}
 */
const resolveChainFromHeaders = (headers = {}) => {
    const raw = headers["x-payment-chain-id"] || headers["X-Payment-Chain-Id"];
    if (raw) {
        const n = String(raw).startsWith("0x") ? parseInt(raw, 16) : Number(raw);
        if (Number.isFinite(n) && isChainActive(n)) return CHAINS[n];
    }
    return CHAINS[DEFAULT_CHAIN_ID] || CHAINS[ACTIVE_CHAIN_IDS[0]];
};

/**
 * Public summary used in 402 responses so clients know which chains and
 * which assets (native, VKA, USDC) they may pay with.
 *
 * @returns {Array<Pick<ChainConfig, 'chainId'|'hex'|'key'|'name'|'nativeSymbol'|'isTestnet'|'paymentContract'|'vkaTokenAddress'|'usdcAddress'|'usdcDecimals'|'blockExplorerUrl'>>}
 */
const listAcceptedChains = () =>
    ACTIVE_CHAIN_IDS.map((id) => CHAINS[id]).map((c) => ({
        chainId: c.chainId,
        hex: c.hex,
        key: c.key,
        name: c.name,
        networkName: c.networkName,
        nativeSymbol: c.nativeSymbol,
        isTestnet: c.isTestnet,
        paymentContract: c.paymentContract,
        vkaTokenAddress: c.vkaTokenAddress,
        usdcAddress: c.usdcAddress,
        usdcDecimals: c.usdcDecimals,
        blockExplorerUrl: c.blockExplorerUrl,
    }));

module.exports = {
    CHAINS,
    DEFAULT_CHAIN_ID,
    ACTIVE_CHAIN_IDS,
    SOLANA_TOKENS,
    getChain,
    isChainActive,
    resolveChainFromHeaders,
    listAcceptedChains,
};
